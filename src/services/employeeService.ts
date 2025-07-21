/**
 * Employee Management Service
 * Handles all employee and verification operations with Supabase
 * Company: Quadrate Tech Solutions (https://quadrate.lk)
 */

import { supabase } from './supabaseService';
import {
  Employee,
  CreateEmployeeRequest,
  UpdateEmployeeRequest,
  VerificationRecord,
  CreateVerificationRequest,
  UpdateVerificationRequest,
  VerificationLog,
  PublicVerificationDetails,
  ApiResponse,
  PaginatedResponse,
  EmployeeQueryParams,
  VerificationQueryParams,
  LogQueryParams,
  EmployeeStats,
  VerificationStats,
  VerificationQRData,
  EmployeeWithVerifications,
  VerificationWithEmployee,
} from '../types/employee';

// =====================================================
// EMPLOYEE OPERATIONS
// =====================================================

export const createEmployee = async (
  employeeData: CreateEmployeeRequest
): Promise<ApiResponse<Employee>> => {
  try {
    const { data, error } = await supabase
      .from('employees')
      .insert([{
        ...employeeData,
        employment_status: employeeData.employment_status || 'active'
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating employee:', error);
      return { data: null, error: error.message, success: false };
    }

    return { data, error: null, success: true };
  } catch (err) {
    console.error('Error in createEmployee:', err);
    return { 
      data: null, 
      error: err instanceof Error ? err.message : 'Unknown error', 
      success: false 
    };
  }
};

export const getEmployees = async (
  params: EmployeeQueryParams = {}
): Promise<PaginatedResponse<Employee>> => {
  try {
    const {
      page = 1,
      limit = 20,
      search,
      department,
      employment_status,
      sort_by = 'created_at',
      sort_order = 'desc'
    } = params;

    let query = supabase
      .from('employees')
      .select('*', { count: 'exact' });

    // Apply filters
    if (search) {
      query = query.or(`full_name.ilike.%${search}%,email.ilike.%${search}%,job_title.ilike.%${search}%`);
    }

    if (department) {
      query = query.eq('department', department);
    }

    if (employment_status) {
      query = query.eq('employment_status', employment_status);
    }

    // Apply sorting
    query = query.order(sort_by, { ascending: sort_order === 'asc' });

    // Apply pagination
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching employees:', error);
      return {
        data: [],
        pagination: { page, limit, total: 0, totalPages: 0 },
        error: error.message,
        success: false
      };
    }

    const total = count || 0;
    const totalPages = Math.ceil(total / limit);

    return {
      data: data || [],
      pagination: { page, limit, total, totalPages },
      error: null,
      success: true
    };
  } catch (err) {
    console.error('Error in getEmployees:', err);
    return {
      data: [],
      pagination: { page: 1, limit: 20, total: 0, totalPages: 0 },
      error: err instanceof Error ? err.message : 'Unknown error',
      success: false
    };
  }
};

export const getEmployeeById = async (id: string): Promise<ApiResponse<Employee>> => {
  try {
    const { data, error } = await supabase
      .from('employees')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching employee:', error);
      return { data: null, error: error.message, success: false };
    }

    return { data, error: null, success: true };
  } catch (err) {
    console.error('Error in getEmployeeById:', err);
    return { 
      data: null, 
      error: err instanceof Error ? err.message : 'Unknown error', 
      success: false 
    };
  }
};

export const updateEmployee = async (
  id: string,
  updates: UpdateEmployeeRequest
): Promise<ApiResponse<Employee>> => {
  try {
    const { data, error } = await supabase
      .from('employees')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating employee:', error);
      return { data: null, error: error.message, success: false };
    }

    return { data, error: null, success: true };
  } catch (err) {
    console.error('Error in updateEmployee:', err);
    return { 
      data: null, 
      error: err instanceof Error ? err.message : 'Unknown error', 
      success: false 
    };
  }
};

export const deleteEmployee = async (id: string): Promise<ApiResponse<boolean>> => {
  try {
    const { error } = await supabase
      .from('employees')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting employee:', error);
      return { data: null, error: error.message, success: false };
    }

    return { data: true, error: null, success: true };
  } catch (err) {
    console.error('Error in deleteEmployee:', err);
    return { 
      data: null, 
      error: err instanceof Error ? err.message : 'Unknown error', 
      success: false 
    };
  }
};

// =====================================================
// VERIFICATION OPERATIONS
// =====================================================

export const createVerificationRecord = async (
  verificationData: CreateVerificationRequest
): Promise<ApiResponse<VerificationRecord>> => {
  try {
    // First, generate a unique token using the database function
    const { data: tokenData, error: tokenError } = await supabase
      .rpc('generate_verification_token');

    if (tokenError || !tokenData) {
      console.error('Error generating token:', tokenError);
      return { data: null, error: 'Failed to generate verification token', success: false };
    }

    const { data, error } = await supabase
      .from('verification_records')
      .insert([{
        ...verificationData,
        verification_token: tokenData
      }])
      .select(`
        *,
        employee:employees(*)
      `)
      .single();

    if (error) {
      console.error('Error creating verification record:', error);
      return { data: null, error: error.message, success: false };
    }

    return { data, error: null, success: true };
  } catch (err) {
    console.error('Error in createVerificationRecord:', err);
    return { 
      data: null, 
      error: err instanceof Error ? err.message : 'Unknown error', 
      success: false 
    };
  }
};

export const getVerificationRecords = async (
  params: VerificationQueryParams = {}
): Promise<PaginatedResponse<VerificationWithEmployee>> => {
  try {
    const {
      page = 1,
      limit = 20,
      employee_id,
      is_active,
      created_by,
      sort_by = 'created_at',
      sort_order = 'desc'
    } = params;

    let query = supabase
      .from('verification_records')
      .select(`
        *,
        employee:employees(*),
        verification_logs(count)
      `, { count: 'exact' });

    // Apply filters
    if (employee_id) {
      query = query.eq('employee_id', employee_id);
    }

    if (typeof is_active === 'boolean') {
      query = query.eq('is_active', is_active);
    }

    if (created_by) {
      query = query.eq('created_by', created_by);
    }

    // Apply sorting
    query = query.order(sort_by, { ascending: sort_order === 'asc' });

    // Apply pagination
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching verification records:', error);
      return {
        data: [],
        pagination: { page, limit, total: 0, totalPages: 0 },
        error: error.message,
        success: false
      };
    }

    const total = count || 0;
    const totalPages = Math.ceil(total / limit);

    // Transform data to include access count
    const transformedData = (data || []).map(record => ({
      ...record,
      access_count: record.verification_logs?.[0]?.count || 0,
      last_accessed: null // This would need a separate query for the latest log
    }));

    return {
      data: transformedData,
      pagination: { page, limit, total, totalPages },
      error: null,
      success: true
    };
  } catch (err) {
    console.error('Error in getVerificationRecords:', err);
    return {
      data: [],
      pagination: { page: 1, limit: 20, total: 0, totalPages: 0 },
      error: err instanceof Error ? err.message : 'Unknown error',
      success: false
    };
  }
};

export const updateVerificationRecord = async (
  id: string,
  updates: UpdateVerificationRequest
): Promise<ApiResponse<VerificationRecord>> => {
  try {
    const updateData: any = { ...updates };
    
    // If deactivating, set deactivated_at timestamp
    if (updates.is_active === false) {
      updateData.deactivated_at = new Date().toISOString();
    }

    const { data, error } = await supabase
      .from('verification_records')
      .update(updateData)
      .eq('id', id)
      .select(`
        *,
        employee:employees(*)
      `)
      .single();

    if (error) {
      console.error('Error updating verification record:', error);
      return { data: null, error: error.message, success: false };
    }

    return { data, error: null, success: true };
  } catch (err) {
    console.error('Error in updateVerificationRecord:', err);
    return { 
      data: null, 
      error: err instanceof Error ? err.message : 'Unknown error', 
      success: false 
    };
  }
};

// =====================================================
// PUBLIC VERIFICATION
// =====================================================

export const getPublicVerificationDetails = async (
  token: string
): Promise<ApiResponse<PublicVerificationDetails>> => {
  try {
    const { data, error } = await supabase
      .rpc('get_verification_details', { token_param: token });

    if (error) {
      console.error('Error getting verification details:', error);
      return { data: null, error: error.message, success: false };
    }

    if (!data || data.length === 0) {
      return { data: null, error: 'Verification not found or expired', success: false };
    }

    return { data: data[0], error: null, success: true };
  } catch (err) {
    console.error('Error in getPublicVerificationDetails:', err);
    return { 
      data: null, 
      error: err instanceof Error ? err.message : 'Unknown error', 
      success: false 
    };
  }
};

// =====================================================
// VERIFICATION LOGS
// =====================================================

export const getVerificationLogs = async (
  params: LogQueryParams = {}
): Promise<PaginatedResponse<VerificationLog>> => {
  try {
    const {
      page = 1,
      limit = 50,
      verification_id,
      success,
      date_from,
      date_to,
      ip_address,
      sort_by = 'accessed_at',
      sort_order = 'desc'
    } = params;

    let query = supabase
      .from('verification_logs')
      .select('*', { count: 'exact' });

    // Apply filters
    if (verification_id) {
      query = query.eq('verification_id', verification_id);
    }

    if (typeof success === 'boolean') {
      query = query.eq('success', success);
    }

    if (date_from) {
      query = query.gte('accessed_at', date_from);
    }

    if (date_to) {
      query = query.lte('accessed_at', date_to);
    }

    if (ip_address) {
      query = query.eq('ip_address', ip_address);
    }

    // Apply sorting
    query = query.order(sort_by, { ascending: sort_order === 'asc' });

    // Apply pagination
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching verification logs:', error);
      return {
        data: [],
        pagination: { page, limit, total: 0, totalPages: 0 },
        error: error.message,
        success: false
      };
    }

    const total = count || 0;
    const totalPages = Math.ceil(total / limit);

    return {
      data: data || [],
      pagination: { page, limit, total, totalPages },
      error: null,
      success: true
    };
  } catch (err) {
    console.error('Error in getVerificationLogs:', err);
    return {
      data: [],
      pagination: { page: 1, limit: 50, total: 0, totalPages: 0 },
      error: err instanceof Error ? err.message : 'Unknown error',
      success: false
    };
  }
};

// =====================================================
// STATISTICS AND ANALYTICS
// =====================================================

export const getEmployeeStats = async (): Promise<ApiResponse<EmployeeStats>> => {
  try {
    // Get total counts by status
    const { data: statusCounts, error: statusError } = await supabase
      .from('employees')
      .select('employment_status')
      .then(({ data, error }) => {
        if (error) return { data: null, error };

        const stats = {
          total_employees: data?.length || 0,
          active_employees: data?.filter(e => e.employment_status === 'active').length || 0,
          former_employees: data?.filter(e => e.employment_status !== 'active').length || 0,
        };

        return { data: stats, error: null };
      });

    if (statusError) {
      return { data: null, error: statusError.message, success: false };
    }

    // Get department counts
    const { data: deptData, error: deptError } = await supabase
      .from('employees')
      .select('department')
      .not('department', 'is', null);

    if (deptError) {
      return { data: null, error: deptError.message, success: false };
    }

    const departmentCounts = (deptData || []).reduce((acc: Record<string, number>, emp) => {
      const dept = emp.department || 'Unassigned';
      acc[dept] = (acc[dept] || 0) + 1;
      return acc;
    }, {});

    const departments = Object.entries(departmentCounts).map(([name, count]) => ({
      name,
      count: count as number
    }));

    const stats: EmployeeStats = {
      ...statusCounts!,
      departments
    };

    return { data: stats, error: null, success: true };
  } catch (err) {
    console.error('Error in getEmployeeStats:', err);
    return {
      data: null,
      error: err instanceof Error ? err.message : 'Unknown error',
      success: false
    };
  }
};

export const getVerificationStats = async (): Promise<ApiResponse<VerificationStats>> => {
  try {
    // Get verification counts
    const { data: verificationData, error: verificationError } = await supabase
      .from('verification_records')
      .select('is_active');

    if (verificationError) {
      return { data: null, error: verificationError.message, success: false };
    }

    const total_verifications = verificationData?.length || 0;
    const active_verifications = verificationData?.filter(v => v.is_active).length || 0;
    const inactive_verifications = total_verifications - active_verifications;

    // Get total access count
    const { count: total_accesses, error: accessError } = await supabase
      .from('verification_logs')
      .select('*', { count: 'exact', head: true });

    if (accessError) {
      return { data: null, error: accessError.message, success: false };
    }

    // Get recent accesses
    const { data: recentAccesses, error: recentError } = await supabase
      .from('verification_logs')
      .select('*')
      .order('accessed_at', { ascending: false })
      .limit(10);

    if (recentError) {
      return { data: null, error: recentError.message, success: false };
    }

    const stats: VerificationStats = {
      total_verifications,
      active_verifications,
      inactive_verifications,
      total_accesses: total_accesses || 0,
      recent_accesses: recentAccesses || []
    };

    return { data: stats, error: null, success: true };
  } catch (err) {
    console.error('Error in getVerificationStats:', err);
    return {
      data: null,
      error: err instanceof Error ? err.message : 'Unknown error',
      success: false
    };
  }
};

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

export const generateVerificationUrl = (token: string): string => {
  return `https://quadrate.lk/verify/${token}`;
};

export const isTokenValid = (token: string): boolean => {
  // Basic token validation - should be URL-safe base64
  const tokenRegex = /^[A-Za-z0-9_-]+$/;
  return tokenRegex.test(token) && token.length >= 32;
};

export const formatEmploymentDates = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate).toLocaleDateString();
  if (!endDate) {
    return `${start} - Present`;
  }
  const end = new Date(endDate).toLocaleDateString();
  return `${start} - ${end}`;
};

export const getEmploymentDuration = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);

  if (years > 0) {
    return months > 0 ? `${years} year${years > 1 ? 's' : ''}, ${months} month${months > 1 ? 's' : ''}` : `${years} year${years > 1 ? 's' : ''}`;
  }

  return `${months} month${months > 1 ? 's' : ''}`;
};

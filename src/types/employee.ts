/**
 * Employee Work Experience Verification System Types
 * Company: Quadrate Tech Solutions (https://quadrate.lk)
 * Created: 2025-01-21
 */

// =====================================================
// EMPLOYEE TYPES
// =====================================================

export type EmploymentStatus = 'active' | 'terminated' | 'resigned' | 'retired';

export interface Employee {
  id: string;
  full_name: string;
  email: string;
  job_title: string;
  department?: string;
  employment_start_date: string; // ISO date string
  employment_end_date?: string; // ISO date string, null for active employees
  employment_status: EmploymentStatus;
  created_at: string; // ISO datetime string
  updated_at: string; // ISO datetime string
  created_by?: string; // UUID of admin who created the record
}

export interface CreateEmployeeRequest {
  full_name: string;
  email: string;
  job_title: string;
  department?: string;
  employment_start_date: string; // ISO date string
  employment_end_date?: string; // ISO date string
  employment_status?: EmploymentStatus;
}

export interface UpdateEmployeeRequest {
  full_name?: string;
  email?: string;
  job_title?: string;
  department?: string;
  employment_start_date?: string;
  employment_end_date?: string;
  employment_status?: EmploymentStatus;
}

// =====================================================
// VERIFICATION RECORD TYPES
// =====================================================

export interface VerificationRecord {
  id: string;
  employee_id: string;
  verification_token: string;
  is_active: boolean;
  expires_at?: string; // ISO datetime string
  created_at: string; // ISO datetime string
  created_by: string; // UUID of admin who created the record
  deactivated_at?: string; // ISO datetime string
  deactivated_by?: string; // UUID of admin who deactivated
  // Joined employee data
  employee?: Employee;
}

export interface CreateVerificationRequest {
  employee_id: string;
  expires_at?: string; // ISO datetime string
}

export interface UpdateVerificationRequest {
  is_active?: boolean;
  expires_at?: string; // ISO datetime string
}

// =====================================================
// VERIFICATION LOG TYPES
// =====================================================

export interface VerificationLog {
  id: number;
  verification_id?: string;
  ip_address?: string;
  user_agent?: string;
  country?: string;
  city?: string;
  accessed_at: string; // ISO datetime string
  success: boolean;
  error_message?: string;
}

// =====================================================
// PUBLIC VERIFICATION TYPES
// =====================================================

export interface PublicVerificationDetails {
  full_name: string;
  job_title: string;
  department?: string;
  employment_start_date: string; // ISO date string
  employment_end_date?: string; // ISO date string
  employment_status: string; // "Active Employee" or "Former Employee"
  verification_id: string;
  company_name: string; // "Quadrate Tech Solutions"
  company_url: string; // "https://quadrate.lk"
}

// =====================================================
// API RESPONSE TYPES
// =====================================================

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  error: string | null;
  success: boolean;
}

// =====================================================
// QUERY PARAMETER TYPES
// =====================================================

export interface EmployeeQueryParams {
  page?: number;
  limit?: number;
  search?: string; // Search in name, email, job_title
  department?: string;
  employment_status?: EmploymentStatus;
  sort_by?: 'full_name' | 'email' | 'job_title' | 'created_at' | 'employment_start_date';
  sort_order?: 'asc' | 'desc';
}

export interface VerificationQueryParams {
  page?: number;
  limit?: number;
  employee_id?: string;
  is_active?: boolean;
  created_by?: string;
  sort_by?: 'created_at' | 'employee_name' | 'is_active';
  sort_order?: 'asc' | 'desc';
}

export interface LogQueryParams {
  page?: number;
  limit?: number;
  verification_id?: string;
  success?: boolean;
  date_from?: string; // ISO date string
  date_to?: string; // ISO date string
  ip_address?: string;
  sort_by?: 'accessed_at' | 'success';
  sort_order?: 'asc' | 'desc';
}

// =====================================================
// FORM VALIDATION TYPES
// =====================================================

export interface EmployeeFormErrors {
  full_name?: string;
  email?: string;
  job_title?: string;
  department?: string;
  employment_start_date?: string;
  employment_end_date?: string;
  employment_status?: string;
}

export interface VerificationFormErrors {
  employee_id?: string;
  expires_at?: string;
}

// =====================================================
// DASHBOARD TYPES
// =====================================================

export interface EmployeeStats {
  total_employees: number;
  active_employees: number;
  former_employees: number;
  departments: Array<{
    name: string;
    count: number;
  }>;
}

export interface VerificationStats {
  total_verifications: number;
  active_verifications: number;
  inactive_verifications: number;
  total_accesses: number;
  recent_accesses: VerificationLog[];
}

// =====================================================
// QR CODE TYPES
// =====================================================

export interface QRCodeOptions {
  size: number;
  level: 'L' | 'M' | 'Q' | 'H'; // Error correction level
  includeMargin: boolean;
  color: {
    dark: string;
    light: string;
  };
}

export interface VerificationQRData {
  verification_token: string;
  verification_url: string;
  qr_code_data_url: string;
  employee_name: string;
  created_at: string;
}

// =====================================================
// UTILITY TYPES
// =====================================================

export type EmployeeWithVerifications = Employee & {
  verification_records: VerificationRecord[];
  verification_count: number;
  last_verification_created: string | null;
};

export type VerificationWithEmployee = VerificationRecord & {
  employee: Employee;
  access_count: number;
  last_accessed: string | null;
};

// =====================================================
// CONSTANTS
// =====================================================

export const EMPLOYMENT_STATUSES: Array<{
  value: EmploymentStatus;
  label: string;
  color: string;
}> = [
  { value: 'active', label: 'Active', color: 'green' },
  { value: 'terminated', label: 'Terminated', color: 'red' },
  { value: 'resigned', label: 'Resigned', color: 'orange' },
  { value: 'retired', label: 'Retired', color: 'blue' },
];

export const VERIFICATION_URL_BASE = 'https://quadrate.lk/verify';
export const COMPANY_NAME = 'Quadrate Tech Solutions';
export const COMPANY_URL = 'https://quadrate.lk';

// =====================================================
// TYPE GUARDS
// =====================================================

export function isValidEmploymentStatus(status: string): status is EmploymentStatus {
  return ['active', 'terminated', 'resigned', 'retired'].includes(status);
}

export function isEmployee(obj: any): obj is Employee {
  return (
    obj &&
    typeof obj.id === 'string' &&
    typeof obj.full_name === 'string' &&
    typeof obj.email === 'string' &&
    typeof obj.job_title === 'string' &&
    typeof obj.employment_start_date === 'string' &&
    isValidEmploymentStatus(obj.employment_status)
  );
}

export function isVerificationRecord(obj: any): obj is VerificationRecord {
  return (
    obj &&
    typeof obj.id === 'string' &&
    typeof obj.employee_id === 'string' &&
    typeof obj.verification_token === 'string' &&
    typeof obj.is_active === 'boolean' &&
    typeof obj.created_at === 'string' &&
    typeof obj.created_by === 'string'
  );
}

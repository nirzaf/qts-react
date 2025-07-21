/**
 * Employee Management API Routes
 * Company: Quadrate Tech Solutions (https://quadrate.lk)
 */

import express from 'express';
import { createClient } from '@supabase/supabase-js';

const router = express.Router();

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Middleware to check admin authentication
const requireAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Missing or invalid authorization header', success: false });
    }

    const token = authHeader.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ error: 'Invalid token', success: false });
    }

    // Check if user has admin role
    const userRole = user.user_metadata?.role || user.raw_user_meta_data?.role;
    if (userRole !== 'admin' && userRole !== 'super_admin') {
      return res.status(403).json({ error: 'Admin access required', success: false });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error('Auth middleware error:', err);
    res.status(500).json({ error: 'Authentication error', success: false });
  }
};

// =====================================================
// EMPLOYEE ROUTES
// =====================================================

// GET /api/employees - List employees with pagination and filtering
router.get('/', requireAdmin, async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      search,
      department,
      employment_status,
      sort_by = 'created_at',
      sort_order = 'desc'
    } = req.query;

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
    const from = (parseInt(page) - 1) * parseInt(limit);
    const to = from + parseInt(limit) - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching employees:', error);
      return res.status(500).json({ error: error.message, success: false });
    }

    const total = count || 0;
    const totalPages = Math.ceil(total / parseInt(limit));

    res.json({
      data: data || [],
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages
      },
      success: true
    });
  } catch (err) {
    console.error('Error in GET /employees:', err);
    res.status(500).json({ error: 'Internal server error', success: false });
  }
});

// POST /api/employees - Create new employee
router.post('/', requireAdmin, async (req, res) => {
  try {
    const employeeData = {
      ...req.body,
      employment_status: req.body.employment_status || 'active',
      created_by: req.user.id
    };

    const { data, error } = await supabase
      .from('employees')
      .insert([employeeData])
      .select()
      .single();

    if (error) {
      console.error('Error creating employee:', error);
      return res.status(400).json({ error: error.message, success: false });
    }

    res.status(201).json({ data, success: true });
  } catch (err) {
    console.error('Error in POST /employees:', err);
    res.status(500).json({ error: 'Internal server error', success: false });
  }
});

// GET /api/employees/:id - Get employee by ID
router.get('/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('employees')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching employee:', error);
      if (error.code === 'PGRST116') {
        return res.status(404).json({ error: 'Employee not found', success: false });
      }
      return res.status(500).json({ error: error.message, success: false });
    }

    res.json({ data, success: true });
  } catch (err) {
    console.error('Error in GET /employees/:id:', err);
    res.status(500).json({ error: 'Internal server error', success: false });
  }
});

// PUT /api/employees/:id - Update employee
router.put('/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const { data, error } = await supabase
      .from('employees')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating employee:', error);
      if (error.code === 'PGRST116') {
        return res.status(404).json({ error: 'Employee not found', success: false });
      }
      return res.status(400).json({ error: error.message, success: false });
    }

    res.json({ data, success: true });
  } catch (err) {
    console.error('Error in PUT /employees/:id:', err);
    res.status(500).json({ error: 'Internal server error', success: false });
  }
});

// DELETE /api/employees/:id - Delete employee
router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from('employees')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting employee:', error);
      return res.status(400).json({ error: error.message, success: false });
    }

    res.json({ data: true, success: true });
  } catch (err) {
    console.error('Error in DELETE /employees/:id:', err);
    res.status(500).json({ error: 'Internal server error', success: false });
  }
});

// GET /api/employees/stats - Get employee statistics
router.get('/stats/overview', requireAdmin, async (req, res) => {
  try {
    // Get all employees to calculate stats
    const { data: employees, error } = await supabase
      .from('employees')
      .select('employment_status, department');

    if (error) {
      console.error('Error fetching employee stats:', error);
      return res.status(500).json({ error: error.message, success: false });
    }

    const total_employees = employees?.length || 0;
    const active_employees = employees?.filter(e => e.employment_status === 'active').length || 0;
    const former_employees = total_employees - active_employees;

    // Calculate department counts
    const departmentCounts = (employees || []).reduce((acc, emp) => {
      const dept = emp.department || 'Unassigned';
      acc[dept] = (acc[dept] || 0) + 1;
      return acc;
    }, {});

    const departments = Object.entries(departmentCounts).map(([name, count]) => ({
      name,
      count
    }));

    const stats = {
      total_employees,
      active_employees,
      former_employees,
      departments
    };

    res.json({ data: stats, success: true });
  } catch (err) {
    console.error('Error in GET /employees/stats:', err);
    res.status(500).json({ error: 'Internal server error', success: false });
  }
});

export default router;

/**
 * Verification Management API Routes
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
// VERIFICATION RECORD ROUTES
// =====================================================

// GET /api/verifications - List verification records with pagination
router.get('/', requireAdmin, async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      employee_id,
      is_active,
      created_by,
      sort_by = 'created_at',
      sort_order = 'desc'
    } = req.query;

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

    if (typeof is_active === 'string') {
      query = query.eq('is_active', is_active === 'true');
    }

    if (created_by) {
      query = query.eq('created_by', created_by);
    }

    // Apply sorting
    query = query.order(sort_by, { ascending: sort_order === 'asc' });

    // Apply pagination
    const from = (parseInt(page) - 1) * parseInt(limit);
    const to = from + parseInt(limit) - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching verification records:', error);
      return res.status(500).json({ error: error.message, success: false });
    }

    const total = count || 0;
    const totalPages = Math.ceil(total / parseInt(limit));

    // Transform data to include access count and verification URL
    const transformedData = (data || []).map(record => ({
      ...record,
      access_count: record.verification_logs?.[0]?.count || 0,
      verification_url: `https://quadrate.lk/verify/${record.verification_token}`
    }));

    res.json({
      data: transformedData,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages
      },
      success: true
    });
  } catch (err) {
    console.error('Error in GET /verifications:', err);
    res.status(500).json({ error: 'Internal server error', success: false });
  }
});

// POST /api/verifications - Create new verification record
router.post('/', requireAdmin, async (req, res) => {
  try {
    const { employee_id, expires_at } = req.body;

    if (!employee_id) {
      return res.status(400).json({ error: 'employee_id is required', success: false });
    }

    // Generate verification token using database function
    const { data: tokenData, error: tokenError } = await supabase
      .rpc('generate_verification_token');

    if (tokenError || !tokenData) {
      console.error('Error generating token:', tokenError);
      return res.status(500).json({ error: 'Failed to generate verification token', success: false });
    }

    const verificationData = {
      employee_id,
      verification_token: tokenData,
      expires_at: expires_at || null,
      created_by: req.user.id
    };

    const { data, error } = await supabase
      .from('verification_records')
      .insert([verificationData])
      .select(`
        *,
        employee:employees(*)
      `)
      .single();

    if (error) {
      console.error('Error creating verification record:', error);
      return res.status(400).json({ error: error.message, success: false });
    }

    // Add verification URL to response
    const responseData = {
      ...data,
      verification_url: `https://quadrate.lk/verify/${data.verification_token}`
    };

    res.status(201).json({ data: responseData, success: true });
  } catch (err) {
    console.error('Error in POST /verifications:', err);
    res.status(500).json({ error: 'Internal server error', success: false });
  }
});

// GET /api/verifications/:id - Get verification record by ID
router.get('/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('verification_records')
      .select(`
        *,
        employee:employees(*)
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching verification record:', error);
      if (error.code === 'PGRST116') {
        return res.status(404).json({ error: 'Verification record not found', success: false });
      }
      return res.status(500).json({ error: error.message, success: false });
    }

    // Add verification URL to response
    const responseData = {
      ...data,
      verification_url: `https://quadrate.lk/verify/${data.verification_token}`
    };

    res.json({ data: responseData, success: true });
  } catch (err) {
    console.error('Error in GET /verifications/:id:', err);
    res.status(500).json({ error: 'Internal server error', success: false });
  }
});

// PATCH /api/verifications/:id - Update verification record (activate/deactivate)
router.patch('/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // If deactivating, set deactivated_at timestamp and deactivated_by
    if (updates.is_active === false) {
      updates.deactivated_at = new Date().toISOString();
      updates.deactivated_by = req.user.id;
    }

    const { data, error } = await supabase
      .from('verification_records')
      .update(updates)
      .eq('id', id)
      .select(`
        *,
        employee:employees(*)
      `)
      .single();

    if (error) {
      console.error('Error updating verification record:', error);
      if (error.code === 'PGRST116') {
        return res.status(404).json({ error: 'Verification record not found', success: false });
      }
      return res.status(400).json({ error: error.message, success: false });
    }

    // Add verification URL to response
    const responseData = {
      ...data,
      verification_url: `https://quadrate.lk/verify/${data.verification_token}`
    };

    res.json({ data: responseData, success: true });
  } catch (err) {
    console.error('Error in PATCH /verifications/:id:', err);
    res.status(500).json({ error: 'Internal server error', success: false });
  }
});

// DELETE /api/verifications/:id - Delete verification record
router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from('verification_records')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting verification record:', error);
      return res.status(400).json({ error: error.message, success: false });
    }

    res.json({ data: true, success: true });
  } catch (err) {
    console.error('Error in DELETE /verifications/:id:', err);
    res.status(500).json({ error: 'Internal server error', success: false });
  }
});

// GET /api/verifications/:id/logs - Get access logs for verification record
router.get('/:id/logs', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      page = 1,
      limit = 50,
      success,
      date_from,
      date_to,
      sort_by = 'accessed_at',
      sort_order = 'desc'
    } = req.query;

    let query = supabase
      .from('verification_logs')
      .select('*', { count: 'exact' })
      .eq('verification_id', id);

    // Apply filters
    if (typeof success === 'string') {
      query = query.eq('success', success === 'true');
    }

    if (date_from) {
      query = query.gte('accessed_at', date_from);
    }

    if (date_to) {
      query = query.lte('accessed_at', date_to);
    }

    // Apply sorting
    query = query.order(sort_by, { ascending: sort_order === 'asc' });

    // Apply pagination
    const from = (parseInt(page) - 1) * parseInt(limit);
    const to = from + parseInt(limit) - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching verification logs:', error);
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
    console.error('Error in GET /verifications/:id/logs:', err);
    res.status(500).json({ error: 'Internal server error', success: false });
  }
});

// GET /api/verifications/stats/overview - Get verification statistics
router.get('/stats/overview', requireAdmin, async (req, res) => {
  try {
    // Get verification counts
    const { data: verificationData, error: verificationError } = await supabase
      .from('verification_records')
      .select('is_active');

    if (verificationError) {
      return res.status(500).json({ error: verificationError.message, success: false });
    }

    const total_verifications = verificationData?.length || 0;
    const active_verifications = verificationData?.filter(v => v.is_active).length || 0;
    const inactive_verifications = total_verifications - active_verifications;

    // Get total access count
    const { count: total_accesses, error: accessError } = await supabase
      .from('verification_logs')
      .select('*', { count: 'exact', head: true });

    if (accessError) {
      return res.status(500).json({ error: accessError.message, success: false });
    }

    // Get recent accesses
    const { data: recentAccesses, error: recentError } = await supabase
      .from('verification_logs')
      .select('*')
      .order('accessed_at', { ascending: false })
      .limit(10);

    if (recentError) {
      return res.status(500).json({ error: recentError.message, success: false });
    }

    const stats = {
      total_verifications,
      active_verifications,
      inactive_verifications,
      total_accesses: total_accesses || 0,
      recent_accesses: recentAccesses || []
    };

    res.json({ data: stats, success: true });
  } catch (err) {
    console.error('Error in GET /verifications/stats:', err);
    res.status(500).json({ error: 'Internal server error', success: false });
  }
});

export default router;

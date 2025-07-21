/**
 * Public Verification API Routes
 * Company: Quadrate Tech Solutions (https://quadrate.lk)
 */

import express from 'express';
import { createClient } from '@supabase/supabase-js';

const router = express.Router();

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Rate limiting middleware (simple in-memory implementation)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10; // 10 requests per minute per IP

const rateLimit = (req, res, next) => {
  const clientIP = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'];
  const now = Date.now();
  
  if (!rateLimitMap.has(clientIP)) {
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return next();
  }
  
  const clientData = rateLimitMap.get(clientIP);
  
  if (now > clientData.resetTime) {
    // Reset the rate limit window
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return next();
  }
  
  if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
    return res.status(429).json({
      error: 'Too many requests. Please try again later.',
      success: false,
      retryAfter: Math.ceil((clientData.resetTime - now) / 1000)
    });
  }
  
  clientData.count++;
  next();
};

// Middleware to extract client information
const extractClientInfo = (req, res, next) => {
  req.clientInfo = {
    ip_address: req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'],
    user_agent: req.headers['user-agent'] || null,
    // You could add geolocation here using a service like MaxMind
    country: null,
    city: null
  };
  next();
};

// =====================================================
// PUBLIC VERIFICATION ROUTES
// =====================================================

// GET /api/verify/:token - Public verification lookup
router.get('/:token', rateLimit, extractClientInfo, async (req, res) => {
  try {
    const { token } = req.params;

    // Basic token validation
    if (!token || typeof token !== 'string' || token.length < 32) {
      return res.status(400).json({
        error: 'Invalid verification token format',
        success: false
      });
    }

    // Sanitize token (remove any non-URL-safe characters)
    const sanitizedToken = token.replace(/[^A-Za-z0-9_-]/g, '');
    
    if (sanitizedToken !== token) {
      return res.status(400).json({
        error: 'Invalid verification token format',
        success: false
      });
    }

    // Call the secure database function to get verification details
    const { data, error } = await supabase
      .rpc('get_verification_details', { token_param: sanitizedToken });

    if (error) {
      console.error('Error getting verification details:', error);
      
      // Log the failed attempt manually since the function might not have done it
      try {
        await supabase
          .from('verification_logs')
          .insert([{
            verification_id: null,
            ip_address: req.clientInfo.ip_address,
            user_agent: req.clientInfo.user_agent,
            country: req.clientInfo.country,
            city: req.clientInfo.city,
            success: false,
            error_message: `Database error: ${error.message}`,
            accessed_at: new Date().toISOString()
          }]);
      } catch (logError) {
        console.error('Error logging failed verification attempt:', logError);
      }

      return res.status(500).json({
        error: 'Verification service temporarily unavailable',
        success: false
      });
    }

    if (!data || data.length === 0) {
      // The function already logged this as a failed attempt
      return res.status(404).json({
        error: 'Verification not found or expired',
        success: false,
        message: 'The verification link you are trying to access is either invalid, expired, or has been deactivated.'
      });
    }

    // Successful verification - the function already logged this
    const verificationDetails = data[0];

    // Format the response for public consumption
    const publicResponse = {
      employee: {
        full_name: verificationDetails.full_name,
        job_title: verificationDetails.job_title,
        department: verificationDetails.department,
        employment_start_date: verificationDetails.employment_start_date,
        employment_end_date: verificationDetails.employment_end_date,
        employment_status: verificationDetails.employment_status
      },
      company: {
        name: verificationDetails.company_name,
        url: verificationDetails.company_url
      },
      verification: {
        id: verificationDetails.verification_id,
        verified_at: new Date().toISOString()
      }
    };

    res.json({
      data: publicResponse,
      success: true,
      message: 'Employee verification successful'
    });

  } catch (err) {
    console.error('Error in GET /verify/:token:', err);
    
    // Log the error attempt
    try {
      await supabase
        .from('verification_logs')
        .insert([{
          verification_id: null,
          ip_address: req.clientInfo.ip_address,
          user_agent: req.clientInfo.user_agent,
          country: req.clientInfo.country,
          city: req.clientInfo.city,
          success: false,
          error_message: `Server error: ${err.message}`,
          accessed_at: new Date().toISOString()
        }]);
    } catch (logError) {
      console.error('Error logging server error:', logError);
    }

    res.status(500).json({
      error: 'Internal server error',
      success: false
    });
  }
});

// GET /api/verify/:token/qr - Generate QR code for verification URL
router.get('/:token/qr', rateLimit, async (req, res) => {
  try {
    const { token } = req.params;
    const {
      size = 256,
      format = 'png',
      level = 'M',
      margin = 'true',
      color_dark = '#0607E1',
      color_light = '#FFFFFF'
    } = req.query;

    // Basic token validation
    if (!token || typeof token !== 'string' || token.length < 32) {
      return res.status(400).json({
        error: 'Invalid verification token format',
        success: false
      });
    }

    // Sanitize token
    const sanitizedToken = token.replace(/[^A-Za-z0-9_-]/g, '');
    if (sanitizedToken !== token) {
      return res.status(400).json({
        error: 'Invalid verification token format',
        success: false
      });
    }

    // Import QR code service dynamically
    const QRCode = await import('qrcode');
    const verificationUrl = `https://quadrate.lk/verify/${sanitizedToken}`;

    // Validate parameters
    const qrSize = Math.min(Math.max(parseInt(size), 64), 1024);
    const errorLevel = ['L', 'M', 'Q', 'H'].includes(level) ? level : 'M';
    const includeMargin = margin === 'true';

    const qrOptions = {
      errorCorrectionLevel: errorLevel,
      margin: includeMargin ? 2 : 1,
      color: {
        dark: color_dark,
        light: color_light
      },
      width: qrSize
    };

    if (format === 'svg') {
      // Generate SVG
      const svgString = await QRCode.toString(verificationUrl, {
        ...qrOptions,
        type: 'svg'
      });

      res.setHeader('Content-Type', 'image/svg+xml');
      res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
      res.send(svgString);
    } else if (format === 'json') {
      // Return data URL
      const dataUrl = await QRCode.toDataURL(verificationUrl, {
        ...qrOptions,
        type: 'image/png'
      });

      res.json({
        data: {
          verification_url: verificationUrl,
          qr_code_data_url: dataUrl,
          token: sanitizedToken,
          options: {
            size: qrSize,
            error_correction: errorLevel,
            margin: includeMargin,
            colors: { dark: color_dark, light: color_light }
          }
        },
        success: true
      });
    } else {
      // Generate PNG buffer (default)
      const buffer = await QRCode.toBuffer(verificationUrl, {
        ...qrOptions,
        type: 'png'
      });

      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
      res.setHeader('Content-Length', buffer.length);
      res.send(buffer);
    }

  } catch (err) {
    console.error('Error in GET /verify/:token/qr:', err);
    res.status(500).json({
      error: 'Failed to generate QR code',
      success: false
    });
  }
});

// GET /api/verify/health - Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'Employee Verification API',
    company: 'Quadrate Tech Solutions',
    timestamp: new Date().toISOString()
  });
});

// Cleanup rate limit map periodically (every 5 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now > data.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000);

export default router;

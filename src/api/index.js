/**
 * Main API Router
 * Employee Work Experience Verification System
 * Company: Quadrate Tech Solutions (https://quadrate.lk)
 */

import express from 'express';
import cors from 'cors';
import employeesRouter from './routes/employees.js';
import verificationsRouter from './routes/verifications.js';
import publicRouter from './routes/public.js';

const router = express.Router();

// =====================================================
// MIDDLEWARE
// =====================================================

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://quadrate.lk', 'https://www.quadrate.lk']
    : ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

router.use(cors(corsOptions));

// Parse JSON bodies
router.use(express.json({ limit: '10mb' }));

// Parse URL-encoded bodies
router.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware
router.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip || req.connection.remoteAddress;
  
  console.log(`[${timestamp}] ${method} ${url} - ${ip}`);
  next();
});

// Security headers middleware
router.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Only add HSTS in production with HTTPS
  if (process.env.NODE_ENV === 'production') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
  
  next();
});

// =====================================================
// ROUTE MOUNTING
// =====================================================

// Admin routes (require authentication)
router.use('/admin/employees', employeesRouter);
router.use('/admin/verifications', verificationsRouter);

// Public routes (no authentication required)
router.use('/verify', publicRouter);

// =====================================================
// API DOCUMENTATION ENDPOINT
// =====================================================

router.get('/', (req, res) => {
  res.json({
    name: 'Employee Work Experience Verification API',
    version: '1.0.0',
    company: 'Quadrate Tech Solutions',
    website: 'https://quadrate.lk',
    description: 'API for managing employee verification records and public verification lookups',
    endpoints: {
      admin: {
        employees: {
          'GET /api/admin/employees': 'List employees with pagination and filtering',
          'POST /api/admin/employees': 'Create new employee record',
          'GET /api/admin/employees/:id': 'Get employee by ID',
          'PUT /api/admin/employees/:id': 'Update employee record',
          'DELETE /api/admin/employees/:id': 'Delete employee record',
          'GET /api/admin/employees/stats/overview': 'Get employee statistics'
        },
        verifications: {
          'GET /api/admin/verifications': 'List verification records with pagination',
          'POST /api/admin/verifications': 'Create new verification record',
          'GET /api/admin/verifications/:id': 'Get verification record by ID',
          'PATCH /api/admin/verifications/:id': 'Update verification record (activate/deactivate)',
          'DELETE /api/admin/verifications/:id': 'Delete verification record',
          'GET /api/admin/verifications/:id/logs': 'Get access logs for verification record',
          'GET /api/admin/verifications/stats/overview': 'Get verification statistics'
        }
      },
      public: {
        'GET /api/verify/:token': 'Public verification lookup',
        'GET /api/verify/:token/qr': 'Generate QR code for verification URL',
        'GET /api/verify/health': 'Health check endpoint'
      }
    },
    authentication: {
      admin_endpoints: 'Require Bearer token with admin role in user metadata',
      public_endpoints: 'No authentication required, but rate limited'
    },
    rate_limits: {
      public_verification: '10 requests per minute per IP address',
      admin_endpoints: 'No rate limiting (protected by authentication)'
    },
    support: {
      email: 'support@quadrate.lk',
      documentation: 'https://quadrate.lk/docs/verification-api'
    }
  });
});

// =====================================================
// ERROR HANDLING
// =====================================================

// 404 handler for API routes
router.use('*', (req, res) => {
  res.status(404).json({
    error: 'API endpoint not found',
    success: false,
    message: `The endpoint ${req.method} ${req.originalUrl} does not exist`,
    available_endpoints: '/api/ for documentation'
  });
});

// Global error handler
router.use((err, req, res, next) => {
  console.error('API Error:', err);
  
  // Don't leak error details in production
  const isDevelopment = process.env.NODE_ENV !== 'production';
  
  res.status(err.status || 500).json({
    error: isDevelopment ? err.message : 'Internal server error',
    success: false,
    ...(isDevelopment && { stack: err.stack })
  });
});

export default router;

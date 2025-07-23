# Employee Work Experience Verification System

A comprehensive employee verification system built for **Quadrate Tech Solutions** (https://quadrate.lk) using Next.js, React, TypeScript, and Supabase.

## 🚀 Features

### Admin Features
- **Employee Management**: Create, update, and manage employee records
- **Verification Records**: Generate unique verification links and QR codes
- **Dashboard Analytics**: View statistics and recent activity
- **Access Logs**: Monitor all verification attempts with detailed logging
- **Bulk Operations**: Export data and manage multiple records

### Public Features
- **Secure Verification**: Public verification pages with professional design
- **QR Code Support**: Scan QR codes to instantly verify employment
- **Mobile Responsive**: Works perfectly on all devices
- **Rate Limited**: Protected against abuse with intelligent rate limiting

### Security Features
- **Row Level Security (RLS)**: Database-level security policies
- **Token-based Authentication**: Secure admin access
- **Audit Logging**: Complete audit trail of all activities
- **Encrypted Tokens**: Cryptographically secure verification tokens

## 🏗️ Architecture

### Database Schema
- **employees**: Employee records with employment details
- **verification_records**: Verification tokens and their status
- **verification_logs**: Complete access logs for monitoring

### API Endpoints
- **Admin APIs**: `/api/admin/employees`, `/api/admin/verifications`
- **Public APIs**: `/api/verify/:token`, `/api/verify/:token/qr`
- **Health Check**: `/api/verify/health`

### Frontend Components
- **Admin Dashboard**: Complete management interface
- **Public Verification**: Professional verification pages
- **QR Code Generator**: Dynamic QR code generation with customization

## 📋 Prerequisites

- Node.js 18+ and npm/pnpm
- Supabase account and project
- Modern web browser

## 🛠️ Installation

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd qts-react
npm install
```

### 2. Database Setup

1. **Run the migration script** in your Supabase SQL Editor:
   ```sql
   -- Copy and paste the contents of src/database/employee-verification-setup.sql
   ```

2. **Verify tables were created**:
   - `employees`
   - `verification_records` 
   - `verification_logs`

### 3. Environment Configuration

1. **Copy the environment template**:
   ```bash
   cp .env.example .env
   ```

2. **Configure your environment variables**:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

### 4. Admin User Setup

Create an admin user in Supabase Auth with the following metadata:
```json
{
  "role": "admin"
}
```

## 🚀 Usage

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## 📱 User Flows

### Admin Workflow
1. **Login** to admin dashboard at `/admin`
2. **Add Employees** with employment details
3. **Create Verification Records** for employees
4. **Generate QR Codes** and verification URLs
5. **Monitor Access Logs** and analytics

### Public Verification Workflow
1. **Scan QR Code** or visit verification URL
2. **View Employee Details** on secure verification page
3. **Verify Information** matches service letter
4. **Access is Logged** for security audit

## 🔧 API Documentation

### Admin Endpoints

#### Employee Management
```http
GET    /api/admin/employees              # List employees
POST   /api/admin/employees              # Create employee
GET    /api/admin/employees/:id          # Get employee
PUT    /api/admin/employees/:id          # Update employee
DELETE /api/admin/employees/:id          # Delete employee
GET    /api/admin/employees/stats/overview # Employee statistics
```

#### Verification Management
```http
GET    /api/admin/verifications          # List verifications
POST   /api/admin/verifications          # Create verification
GET    /api/admin/verifications/:id      # Get verification
PATCH  /api/admin/verifications/:id      # Update verification
DELETE /api/admin/verifications/:id      # Delete verification
GET    /api/admin/verifications/:id/logs # Get access logs
GET    /api/admin/verifications/stats/overview # Verification statistics
```

### Public Endpoints

#### Verification Lookup
```http
GET /api/verify/:token                   # Get verification details
GET /api/verify/:token/qr                # Generate QR code
GET /api/verify/health                   # Health check
```

## 🔒 Security

### Authentication
- Admin endpoints require Bearer token authentication
- User must have `role: 'admin'` in metadata

### Rate Limiting
- Public verification endpoints: 10 requests/minute per IP
- Admin endpoints: No rate limiting (protected by auth)

### Data Protection
- Row Level Security (RLS) policies on all tables
- Secure token generation using cryptographic functions
- Complete audit logging of all access attempts

## 🎨 Customization

### QR Code Options
- Size: 128px to 1024px
- Error Correction: L, M, Q, H levels
- Colors: Customizable dark/light colors
- Formats: PNG, SVG, Data URL

### Verification Page
- Company branding
- Custom styling
- Responsive design
- SEO optimized

## 📊 Monitoring

### Analytics Available
- Total employees and verifications
- Active vs inactive records
- Department breakdowns
- Access patterns and success rates
- Recent activity logs

### Logging
- All verification attempts (successful and failed)
- IP addresses and user agents
- Timestamps for audit trails
- Error messages for debugging

## 🚀 Deployment

### Environment Setup
1. Set `NODE_ENV=production`
2. Configure production Supabase URLs
3. Set up proper CORS origins
4. Enable HTTPS and security headers

### Recommended Hosting
- **Frontend**: Vercel, Netlify, or similar
- **Database**: Supabase (managed PostgreSQL)
- **CDN**: For QR code images if needed

## 🤝 Support

For technical support or questions:
- **Email**: support@quadrate.lk
- **Website**: https://quadrate.lk
- **Documentation**: Available in `/src/database/README.md`

## 📄 License

This employee verification system is proprietary software developed for Quadrate Tech Solutions.

---

**Quadrate Tech Solutions** - Empowering businesses through innovative technology solutions.
Website: https://quadrate.lk

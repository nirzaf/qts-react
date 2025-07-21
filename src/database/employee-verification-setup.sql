-- Employee Work Experience Verification System Database Setup
-- Company: Quadrate Tech Solutions (https://quadrate.lk)
-- Created: 2025-01-21

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =====================================================
-- EMPLOYEES TABLE
-- =====================================================
-- Stores employee records with employment details
CREATE TABLE IF NOT EXISTS public.employees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  job_title TEXT NOT NULL,
  department TEXT,
  employment_start_date DATE NOT NULL,
  employment_end_date DATE,
  employment_status TEXT NOT NULL DEFAULT 'active' 
    CHECK (employment_status IN ('active', 'terminated', 'resigned', 'retired')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id)
);

-- =====================================================
-- VERIFICATION RECORDS TABLE
-- =====================================================
-- Stores verification tokens and their status
CREATE TABLE IF NOT EXISTS public.verification_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  employee_id UUID NOT NULL REFERENCES public.employees(id) ON DELETE CASCADE,
  verification_token TEXT NOT NULL UNIQUE,
  is_active BOOLEAN NOT NULL DEFAULT true,
  expires_at TIMESTAMPTZ, -- Optional expiration date
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by UUID NOT NULL REFERENCES auth.users(id),
  deactivated_at TIMESTAMPTZ,
  deactivated_by UUID REFERENCES auth.users(id)
);

-- =====================================================
-- VERIFICATION LOGS TABLE
-- =====================================================
-- Logs all verification access attempts for monitoring
CREATE TABLE IF NOT EXISTS public.verification_logs (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  verification_id UUID NOT NULL REFERENCES public.verification_records(id) ON DELETE CASCADE,
  ip_address INET,
  user_agent TEXT,
  country TEXT,
  city TEXT,
  accessed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  success BOOLEAN NOT NULL DEFAULT true,
  error_message TEXT
);

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================
-- Employees table indexes
CREATE INDEX IF NOT EXISTS idx_employees_email ON public.employees(email);
CREATE INDEX IF NOT EXISTS idx_employees_status ON public.employees(employment_status);
CREATE INDEX IF NOT EXISTS idx_employees_department ON public.employees(department);
CREATE INDEX IF NOT EXISTS idx_employees_created_at ON public.employees(created_at);

-- Verification records indexes
CREATE INDEX IF NOT EXISTS idx_verification_records_token ON public.verification_records(verification_token);
CREATE INDEX IF NOT EXISTS idx_verification_records_employee_id ON public.verification_records(employee_id);
CREATE INDEX IF NOT EXISTS idx_verification_records_active ON public.verification_records(is_active);
CREATE INDEX IF NOT EXISTS idx_verification_records_created_at ON public.verification_records(created_at);

-- Verification logs indexes
CREATE INDEX IF NOT EXISTS idx_verification_logs_verification_id ON public.verification_logs(verification_id);
CREATE INDEX IF NOT EXISTS idx_verification_logs_accessed_at ON public.verification_logs(accessed_at);
CREATE INDEX IF NOT EXISTS idx_verification_logs_ip_address ON public.verification_logs(ip_address);

-- =====================================================
-- TRIGGERS FOR AUTOMATIC UPDATES
-- =====================================================
-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for employees table
DROP TRIGGER IF EXISTS update_employees_updated_at ON public.employees;
CREATE TRIGGER update_employees_updated_at
    BEFORE UPDATE ON public.employees
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================
-- Enable RLS on all tables
ALTER TABLE public.employees ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_logs ENABLE ROW LEVEL SECURITY;

-- Admin access policies (assuming admin role in auth.users metadata)
CREATE POLICY "Admins can manage employees" ON public.employees
FOR ALL USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND (
      auth.users.raw_user_meta_data->>'role' = 'admin' OR
      auth.users.raw_user_meta_data->>'role' = 'super_admin'
    )
  )
);

CREATE POLICY "Admins can manage verification records" ON public.verification_records
FOR ALL USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND (
      auth.users.raw_user_meta_data->>'role' = 'admin' OR
      auth.users.raw_user_meta_data->>'role' = 'super_admin'
    )
  )
);

CREATE POLICY "Admins can view logs" ON public.verification_logs
FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND (
      auth.users.raw_user_meta_data->>'role' = 'admin' OR
      auth.users.raw_user_meta_data->>'role' = 'super_admin'
    )
  )
);

-- Allow public insert into verification_logs (for tracking access)
CREATE POLICY "Allow public log insertion" ON public.verification_logs
FOR INSERT WITH CHECK (true);

-- =====================================================
-- SECURE VERIFICATION FUNCTION
-- =====================================================
-- Public function to get verification details (SECURITY DEFINER)
CREATE OR REPLACE FUNCTION get_verification_details(token_param TEXT)
RETURNS TABLE (
  full_name TEXT, 
  job_title TEXT, 
  department TEXT,
  employment_start_date DATE, 
  employment_end_date DATE, 
  employment_status TEXT,
  verification_id UUID,
  company_name TEXT,
  company_url TEXT
) 
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql AS $$
DECLARE
  verification_record_id UUID;
  employee_record RECORD;
BEGIN
  -- Check if token exists and is active
  SELECT vr.id, vr.employee_id INTO verification_record_id, employee_record.employee_id
  FROM public.verification_records vr
  WHERE vr.verification_token = token_param 
    AND vr.is_active = true
    AND (vr.expires_at IS NULL OR vr.expires_at > now());
  
  IF verification_record_id IS NULL THEN
    -- Log failed attempt
    INSERT INTO public.verification_logs (verification_id, success, error_message, accessed_at)
    VALUES (NULL, false, 'Invalid or expired token: ' || token_param, now());
    RETURN;
  END IF;
  
  -- Get employee details
  SELECT * INTO employee_record
  FROM public.employees e
  WHERE e.id = (
    SELECT vr.employee_id 
    FROM public.verification_records vr 
    WHERE vr.id = verification_record_id
  );
  
  -- Log successful access attempt
  INSERT INTO public.verification_logs (verification_id, success, accessed_at)
  VALUES (verification_record_id, true, now());
  
  -- Return employee data with company information
  RETURN QUERY
  SELECT
    employee_record.full_name,
    employee_record.job_title,
    employee_record.department,
    employee_record.employment_start_date,
    employee_record.employment_end_date,
    CASE
      WHEN employee_record.employment_end_date IS NULL THEN 'Active Employee'
      ELSE 'Former Employee'
    END AS employment_status,
    verification_record_id,
    'Quadrate Tech Solutions'::TEXT AS company_name,
    'https://quadrate.lk'::TEXT AS company_url;
END;
$$;

-- =====================================================
-- TOKEN GENERATION FUNCTION
-- =====================================================
-- Function to generate secure verification tokens
CREATE OR REPLACE FUNCTION generate_verification_token()
RETURNS TEXT
LANGUAGE plpgsql AS $$
DECLARE
  token TEXT;
  token_exists BOOLEAN;
BEGIN
  LOOP
    -- Generate a 32-byte random token encoded as base64url
    token := encode(gen_random_bytes(32), 'base64');
    -- Make it URL-safe by replacing + with - and / with _
    token := replace(replace(token, '+', '-'), '/', '_');
    -- Remove padding
    token := rtrim(token, '=');
    
    -- Check if token already exists
    SELECT EXISTS(
      SELECT 1 FROM public.verification_records 
      WHERE verification_token = token
    ) INTO token_exists;
    
    -- Exit loop if token is unique
    EXIT WHEN NOT token_exists;
  END LOOP;
  
  RETURN token;
END;
$$;

-- =====================================================
-- TABLE COMMENTS FOR DOCUMENTATION
-- =====================================================
COMMENT ON TABLE public.employees IS 'Stores employee records with employment details for verification system';
COMMENT ON TABLE public.verification_records IS 'Stores verification tokens and their status for employee verification';
COMMENT ON TABLE public.verification_logs IS 'Logs all verification access attempts for monitoring and security';

-- Column comments for employees table
COMMENT ON COLUMN public.employees.employment_status IS 'Current employment status: active, terminated, resigned, or retired';
COMMENT ON COLUMN public.employees.employment_end_date IS 'NULL for active employees, date for former employees';

-- Column comments for verification_records table
COMMENT ON COLUMN public.verification_records.verification_token IS 'Unique, cryptographically secure token for verification URL';
COMMENT ON COLUMN public.verification_records.expires_at IS 'Optional expiration date for the verification link';

-- Column comments for verification_logs table
COMMENT ON COLUMN public.verification_logs.success IS 'Whether the verification attempt was successful';
COMMENT ON COLUMN public.verification_logs.error_message IS 'Error message for failed verification attempts';

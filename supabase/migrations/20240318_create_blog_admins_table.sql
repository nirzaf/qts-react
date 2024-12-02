-- Create blog_admins table
CREATE TABLE IF NOT EXISTS public.blog_admins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Add RLS (Row Level Security) policies
ALTER TABLE public.blog_admins ENABLE ROW LEVEL SECURITY;

-- Allow anonymous access for login
CREATE POLICY "Allow anonymous login check"
    ON public.blog_admins
    FOR SELECT
    USING (true);

-- Create policy for admin users to modify blog_admins
CREATE POLICY "Admin users can modify blog_admins"
    ON public.blog_admins
    FOR ALL
    USING (auth.role() = 'authenticated' AND auth.jwt() ->> 'role' = 'admin');

-- Insert default admin user with plain text password
INSERT INTO public.blog_admins (first_name, last_name, username, password_hash)
VALUES ('Admin', 'User', 'quadrateAdmin', 'YahmikAllah@123');

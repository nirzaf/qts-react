-- Drop existing policies
DROP POLICY IF EXISTS "Admin users can read all blog_admins" ON public.blog_admins;
DROP POLICY IF EXISTS "Admin users can modify blog_admins" ON public.blog_admins;

-- Drop existing triggers and functions
DROP TRIGGER IF EXISTS hash_admin_password_trigger ON public.blog_admins;
DROP FUNCTION IF EXISTS hash_admin_password();
DROP FUNCTION IF EXISTS verify_admin_password(TEXT, TEXT);

-- Drop the table
DROP TABLE IF EXISTS public.blog_admins;

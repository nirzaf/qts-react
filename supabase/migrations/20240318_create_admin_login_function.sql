-- Create function to check admin login
CREATE OR REPLACE FUNCTION check_admin_login(p_username TEXT, p_password TEXT)
RETURNS TABLE (
    id UUID,
    first_name TEXT,
    last_name TEXT,
    username TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        ba.id,
        ba.first_name,
        ba.last_name,
        ba.username
    FROM blog_admins ba
    WHERE ba.username = p_username
    AND ba.password_hash = p_password;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

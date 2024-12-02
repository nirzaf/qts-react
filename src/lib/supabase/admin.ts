import { supabase } from './client';

export interface BlogAdmin {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
}

export interface AdminLoginCredentials {
  username: string;
  password: string;
}

// Test function to check database connection
export const testConnection = async () => {
  try {
    console.log('Testing database connection...');
    
    // First test basic connection
    const { data: healthCheck, error: healthError } = await supabase
      .from('blog_admins')
      .select('count(*)', { count: 'exact', head: true });

    if (healthError) {
      console.error('Health check failed:', healthError);
      return false;
    }

    console.log('Health check passed:', healthCheck);
    return true;
  } catch (error) {
    console.error('Connection test error:', error);
    return false;
  }
};

export const loginAdmin = async ({ username, password }: AdminLoginCredentials): Promise<BlogAdmin | null> => {
  try {
    // Test connection first
    const isConnected = await testConnection();
    if (!isConnected) {
      console.error('Failed to connect to database');
      return null;
    }

    // Query for admin with username and password
    const { data, error } = await supabase
      .rpc('check_admin_login', {
        p_username: username,
        p_password: password
      });

    if (error) {
      console.error('Login query error:', error);
      return null;
    }

    if (data && data.length > 0) {
      const admin = data[0];
      localStorage.setItem('adminSession', JSON.stringify(admin));
      return admin;
    }

    return null;
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
};

export const getAdminProfile = async (): Promise<BlogAdmin | null> => {
  const session = localStorage.getItem('adminSession');
  if (!session) return null;
  return JSON.parse(session);
};

export const logoutAdmin = () => {
  localStorage.removeItem('adminSession');
};

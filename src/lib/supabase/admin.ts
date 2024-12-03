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
      // Store admin data with extended expiration (6 months)
      const adminData = {
        admin,
        expiresAt: new Date().getTime() + (180 * 24 * 60 * 60 * 1000) // 6 months expiration
      };
      localStorage.setItem('adminSession', JSON.stringify(adminData));
      
      // Store last login timestamp
      localStorage.setItem('lastLoginTime', new Date().toISOString());
      return admin;
    }

    return null;
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
};

export const getAdminProfile = async (): Promise<BlogAdmin | null> => {
  try {
    const session = localStorage.getItem('adminSession');
    if (!session) {
      // Try to login with saved credentials
      const savedCredentials = localStorage.getItem('savedCredentials');
      if (savedCredentials) {
        const { username, password, savedAt } = JSON.parse(savedCredentials);
        
        // Check if saved credentials are not older than 6 months
        const sixMonthsAgo = new Date().getTime() - (180 * 24 * 60 * 60 * 1000);
        if (new Date(savedAt).getTime() > sixMonthsAgo) {
          const admin = await loginAdmin({ username, password });
          if (admin) {
            return admin;
          }
        } else {
          // Clear expired saved credentials
          localStorage.removeItem('savedCredentials');
        }
      }
      return null;
    }

    const { admin, expiresAt } = JSON.parse(session);
    
    // Check if session has expired
    if (new Date().getTime() > expiresAt) {
      // Try to auto-login with saved credentials before logging out
      const savedCredentials = localStorage.getItem('savedCredentials');
      if (savedCredentials) {
        const { username, password, savedAt } = JSON.parse(savedCredentials);
        const sixMonthsAgo = new Date().getTime() - (180 * 24 * 60 * 60 * 1000);
        
        if (new Date(savedAt).getTime() > sixMonthsAgo) {
          const newAdmin = await loginAdmin({ username, password });
          if (newAdmin) {
            return newAdmin;
          }
        } else {
          localStorage.removeItem('savedCredentials');
        }
      }
      logoutAdmin();
      return null;
    }

    // Extend session if it's about to expire (less than 1 month left)
    const oneMonthFromNow = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);
    if (expiresAt < oneMonthFromNow) {
      const newExpiresAt = new Date().getTime() + (180 * 24 * 60 * 60 * 1000);
      localStorage.setItem('adminSession', JSON.stringify({
        admin,
        expiresAt: newExpiresAt
      }));
    }

    return admin;
  } catch (error) {
    console.error('Error getting admin profile:', error);
    logoutAdmin();
    return null;
  }
};

export const logoutAdmin = () => {
  localStorage.removeItem('adminSession');
  localStorage.removeItem('lastLoginTime');
  // Don't remove savedCredentials on logout if user wants to stay logged in
};

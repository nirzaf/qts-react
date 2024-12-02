import React, { createContext, useContext, useEffect, useState } from 'react';
import { BlogAdmin, getAdminProfile, logoutAdmin } from '../supabase/admin';

interface AuthContextType {
  admin: BlogAdmin | null;
  setAdmin: (admin: BlogAdmin | null) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  admin: null,
  setAdmin: () => {},
  logout: () => {},
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [admin, setAdmin] = useState<BlogAdmin | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const admin = await getAdminProfile();
      setAdmin(admin);
    } catch (error) {
      console.error('Error checking user session:', error);
    } finally {
      setLoading(false);
    }
  }

  const logout = () => {
    logoutAdmin();
    setAdmin(null);
  };

  const value = {
    admin,
    setAdmin,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

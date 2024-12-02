import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth/AuthContext';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials:', {
    url: supabaseUrl ? 'Present' : 'Missing',
    key: supabaseAnonKey ? 'Present' : 'Missing'
  });
}

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true
  },
  db: {
    schema: 'public'
  }
});

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [dbConnected, setDbConnected] = useState(false);
  const navigate = useNavigate();
  const { setAdmin } = useAuth();

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    try {
      console.log('Checking Supabase connection...');
      
      // First, verify the connection by checking table existence
      const { error: tableError } = await supabase
        .from('admins')
        .select('id')
        .limit(1)
        .throwOnError();

      if (tableError) {
        console.error('Table check error:', tableError);
        throw tableError;
      }

      console.log('Supabase connection successful');
      setDbConnected(true);
      setError('');
    } catch (err: any) {
      console.error('Database connection error:', err);
      setError(
        err.message === '404' 
          ? 'Admin table not found. Please ensure the database is properly set up.'
          : 'Unable to connect to database. Please try again later.'
      );
      setDbConnected(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dbConnected) {
      setError('Database connection not available');
      return;
    }

    setError('');
    setLoading(true);

    try {
      console.log('Attempting login...');
      
      const { data: admin, error: loginError } = await supabase
        .from('admins')
        .select('*')
        .eq('username', username.trim())
        .single();

      if (loginError) {
        console.error('Login query error:', loginError);
        throw loginError;
      }

      if (admin && admin.password === password) {
        console.log('Login successful');
        setAdmin(admin);
        navigate('/admin/blogs');
      } else {
        console.log('Invalid credentials');
        setError('Invalid username or password');
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Login
          </h2>
          {!dbConnected && (
            <p className="mt-2 text-center text-sm text-red-600">
              {error || 'Checking database connection...'}
            </p>
          )}
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                disabled={!dbConnected || loading}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                disabled={!dbConnected || loading}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="text-sm text-red-700">{error}</div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={!dbConnected || loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0607E1] hover:bg-[#0607E1]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0607E1] disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

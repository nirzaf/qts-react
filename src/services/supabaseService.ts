import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { InterviewSession } from '../types/interview';

// Safely get environment variables with fallbacks
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create client with validation
let supabase: SupabaseClient;
try {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
  }
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} catch (error) {
  console.error('Failed to initialize Supabase client:', error);
  // Create a mock client that returns errors for all operations
  supabase = {
    from: () => ({
      insert: () => Promise.resolve({ data: null, error: { message: 'Supabase client not initialized properly' } }),
      update: () => Promise.resolve({ data: null, error: { message: 'Supabase client not initialized properly' } }),
      select: () => Promise.resolve({ data: null, error: { message: 'Supabase client not initialized properly' } }),
      eq: () => ({
        select: () => Promise.resolve({ data: null, error: { message: 'Supabase client not initialized properly' } }),
        single: () => Promise.resolve({ data: null, error: { message: 'Supabase client not initialized properly' } })
      })
    })
  } as unknown as SupabaseClient;
}

export { supabase };

export const createInterviewSession = async (session: InterviewSession): Promise<{ data: any; error: any }> => {
  try {
    const { data, error } = await supabase
      .from('interview_sessions')
      .insert([session])
      .select();
    
    return { data: data || [], error };
  } catch (err) {
    console.error('Error in createInterviewSession:', err);
    return { data: null, error: err instanceof Error ? err : new Error('Unknown error in createInterviewSession') };
  }
};

export const updateInterviewSession = async (id: string, updates: Partial<InterviewSession>): Promise<{ data: any; error: any }> => {
  try {
    if (!id) {
      return { data: null, error: new Error('Missing session ID for update') };
    }
    
    const { data, error } = await supabase
      .from('interview_sessions')
      .update(updates)
      .eq('id', id)
      .select();
    
    return { data: data || [], error };
  } catch (err) {
    console.error('Error in updateInterviewSession:', err);
    return { data: null, error: err instanceof Error ? err : new Error('Unknown error in updateInterviewSession') };
  }
};

export const getInterviewSession = async (id: string): Promise<{ data: any; error: any }> => {
  try {
    if (!id) {
      return { data: null, error: new Error('Missing session ID') };
    }
    
    const { data, error } = await supabase
      .from('interview_sessions')
      .select('*')
      .eq('id', id)
      .single();
    
    return { data: data || null, error };
  } catch (err) {
    console.error('Error in getInterviewSession:', err);
    return { data: null, error: err instanceof Error ? err : new Error('Unknown error in getInterviewSession') };
  }
};

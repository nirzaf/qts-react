import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Blog {
  id: string
  slug: string
  title: string
  description?: string
  content: string
  pub_date: string
  hero_image?: string
  category?: string
  tags?: string[]
  author?: string
  author_role?: string
  author_image?: string
  created_at?: string
  updated_at?: string
}

export async function getBlogs() {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('pub_date', { ascending: false })

  if (error) {
    console.error('Error fetching blogs:', error)
    return []
  }

  return data as Blog[]
}

export async function getBlogBySlug(slug: string) {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching blog:', error)
    return null
  }

  return data as Blog
}

export async function searchBlogs(query: string) {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .textSearch('title', query)
    .order('pub_date', { ascending: false })

  if (error) {
    console.error('Error searching blogs:', error)
    return []
  }

  return data as Blog[]
}

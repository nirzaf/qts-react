import { config } from 'dotenv'
config()

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL!
const supabaseKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Function to create the blogs table
async function createBlogsTable() {
  try {
    const { error } = await supabase
      .from('blogs')
      .select('*')
      .limit(1)

    if (error) {
      console.log('Checking table error:', error)
      // Table doesn't exist, create it
      const { error: createError } = await supabase
        .from('blogs')
        .insert([
          {
            slug: 'test',
            title: 'Test Post',
            content: 'Test Content',
            pub_date: new Date().toISOString()
          }
        ])

      if (createError) {
        console.error('Error creating blogs table:', createError)
        return
      }
      console.log('Blogs table created successfully')
    } else {
      console.log('Blogs table already exists')
    }
  } catch (err) {
    console.error('Error in createBlogsTable:', err)
  }
}

// Function to read and parse markdown files
async function importBlogPosts() {
  try {
    // Use absolute path
    const blogDir = path.join(process.cwd(), 'src', 'content', 'blog')
    console.log('Looking for blog posts in:', blogDir)
    
    const files = fs.readdirSync(blogDir)
    console.log('Found files:', files)

    for (const file of files) {
      if (!file.endsWith('.md')) continue

      try {
        const filePath = path.join(blogDir, file)
        console.log('Processing file:', filePath)
        
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const { data: frontmatter, content } = matter(fileContent)
        
        const slug = file.replace('.md', '')
        
        const blogPost = {
          slug,
          title: frontmatter.title,
          description: frontmatter.description,
          content,
          pub_date: new Date(frontmatter.pubDate).toISOString(),
          hero_image: frontmatter.heroImage,
          category: frontmatter.category,
          tags: frontmatter.tags,
          author: frontmatter.author,
          author_role: frontmatter.role,
          author_image: frontmatter.authorImage
        }

        console.log('Inserting blog post:', slug)
        const { error } = await supabase
          .from('blogs')
          .upsert(blogPost, {
            onConflict: 'slug'
          })

        if (error) {
          console.error(`Error importing blog post ${slug}:`, error)
        } else {
          console.log(`Successfully imported blog post: ${slug}`)
        }
      } catch (err) {
        console.error(`Error processing file ${file}:`, err)
      }
    }
  } catch (err) {
    console.error('Error in importBlogPosts:', err)
  }
}

// Run the setup
async function setup() {
  console.log('Starting setup...')
  await createBlogsTable()
  await importBlogPosts()
  console.log('Setup complete')
}

setup().catch(console.error)

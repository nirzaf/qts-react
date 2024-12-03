import { config } from 'dotenv'
config()

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { parse as parseYAML } from 'yaml'

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL!
const supabaseKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

function parseFrontmatter(content: string): { data: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    throw new Error('Invalid frontmatter format');
  }

  const [, frontmatterYAML, remainingContent] = match;
  const data = parseYAML(frontmatterYAML);

  return {
    data,
    content: remainingContent.trim()
  };
}

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
    const postsDirectory = path.join(process.cwd(), 'src', 'data', 'model-md-files')
    console.log('Looking for MDX files in:', postsDirectory)
    
    const files = fs.readdirSync(postsDirectory)
    console.log('Found files:', files)

    for (const file of files) {
      if (!file.endsWith('.mdx')) {
        console.log(`Skipping non-MDX file: ${file}`)
        continue
      }

      console.log(`Processing file: ${file}`)
      const filePath = path.join(postsDirectory, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')

      try {
        const { data, content } = parseFrontmatter(fileContent)
        const slug = file.replace('.mdx', '')
        
        // Validate required fields
        const requiredFields = ['title', 'description', 'pubDate', 'heroImage', 'category', 'tags']
        const missingFields = requiredFields.filter(field => !data[field])
        
        if (missingFields.length > 0) {
          console.error(`Missing required fields in ${file}:`, missingFields)
          throw new Error(`Missing required fields: ${missingFields.join(', ')}`)
        }

        // Create blog post with hardcoded author details
        const blogPost = {
          slug,
          title: data.title,
          description: data.description,
          content,
          pub_date: new Date(data.pubDate).toISOString(),
          hero_image: data.heroImage,
          category: data.category,
          tags: data.tags,
          // Hardcoded author details
          author: 'Fazrin',
          author_role: 'Admin',
          author_image: 'https://ik.imagekit.io/quadrate/blogs/my_profile_pic.jpg?updatedAt=1732703320982'
        }

        console.log('Attempting to insert blog post:', {
          slug: blogPost.slug,
          title: blogPost.title,
          pub_date: blogPost.pub_date,
          author: blogPost.author
        })

        const { error } = await supabase
          .from('blogs')
          .upsert(blogPost, {
            onConflict: 'slug'
          })

        if (error) {
          console.error(`Error importing blog post ${slug}:`, {
            message: error.message,
            details: error.details,
            hint: error.hint,
            code: error.code
          })
          throw error
        }

        console.log(`Successfully imported blog post: ${slug}`)
      } catch (error) {
        const errorDetails = {
          message: error.message,
          stack: error.stack,
          details: error.details,
          hint: error.hint,
          code: error.code
        }
        console.error(`Failed to process ${file}:`, errorDetails)
        throw new Error(`Failed to process ${file}: ${error.message}`)
      }
    }
  } catch (err) {
    const errorDetails = {
      message: err.message,
      stack: err.stack,
      details: err.details,
      hint: err.hint,
      code: err.code
    }
    console.error('Blog import failed:', errorDetails)
    throw new Error(`Blog import failed: ${err.message}`)
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

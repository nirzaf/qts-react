import { parse as parseYAML } from 'yaml';

export interface MarkdownBlogPost {
  title: string;
  description: string;
  pubDate: string;
  heroImage: string;
  category: string;
  tags: string[];
  content: string;
  slug: string;
}

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
    content: remainingContent
  };
}

export function parseMarkdownFile(fileContent: string): MarkdownBlogPost | null {
  try {
    const { data, content } = parseFrontmatter(fileContent);
    
    // Validate required fields
    const requiredFields = ['title', 'description', 'pubDate', 'heroImage', 'category', 'tags'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }

    // Convert pubDate to ISO string if it's a Date object
    const pubDate = data.pubDate instanceof Date 
      ? data.pubDate.toISOString()
      : new Date(data.pubDate).toISOString();

    // Ensure tags is an array
    const tags = Array.isArray(data.tags) ? data.tags : [data.tags];

    // Generate slug from title if not provided
    const slug = data.slug || data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    return {
      title: data.title,
      description: data.description,
      pubDate,
      heroImage: data.heroImage,
      category: data.category,
      tags,
      content: content.trim(),
      slug
    };
  } catch (error) {
    console.error('Error parsing markdown file:', error);
    return null;
  }
}

export function validateBlogPost(post: MarkdownBlogPost): string[] {
  const errors: string[] = [];

  // Required fields
  if (!post.title) errors.push('Title is required');
  if (!post.description) errors.push('Description is required');
  if (!post.pubDate) errors.push('Publication date is required');
  if (!post.heroImage) errors.push('Hero image is required');
  if (!post.category) errors.push('Category is required');
  if (!post.tags || post.tags.length === 0) errors.push('At least one tag is required');
  if (!post.content) errors.push('Content is required');
  if (!post.slug) errors.push('Slug is required');

  // Validate date format
  if (post.pubDate && isNaN(new Date(post.pubDate).getTime())) {
    errors.push('Invalid publication date format');
  }

  // Validate URL format for hero image
  try {
    new URL(post.heroImage);
  } catch {
    errors.push('Hero image must be a valid URL');
  }

  // Validate content length
  if (post.content && post.content.trim().length < 50) {
    errors.push('Content must be at least 50 characters long');
  }

  // Validate tags format
  if (post.tags) {
    if (!Array.isArray(post.tags)) {
      errors.push('Tags must be an array');
    } else if (post.tags.some(tag => typeof tag !== 'string' || tag.trim().length === 0)) {
      errors.push('All tags must be non-empty strings');
    }
  }

  return errors;
}

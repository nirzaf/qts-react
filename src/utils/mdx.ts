import { parse as parseYAML } from 'yaml';

interface MDXFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  heroImage: string;
  category: string;
  tags: string[];
}

interface MDXContent {
  content: string;
  frontmatter: MDXFrontmatter;
}

interface MDXValidationError {
  field?: string;
  message: string;
  type: 'structure' | 'frontmatter' | 'content' | 'format';
  suggestion?: string;
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

export async function parseMDX(mdxContent: string): Promise<MDXContent> {
  try {
    // First validate the MDX content
    const validationErrors = validateMDXContent(mdxContent);
    if (validationErrors.length > 0) {
      const errorMessages = validationErrors.map(err => 
        `${err.type.toUpperCase()}: ${err.field ? `[${err.field}] ` : ''}${err.message}` +
        (err.suggestion ? `\nSuggestion: ${err.suggestion}` : '')
      ).join('\n\n');
      throw new Error(`MDX Validation Failed:\n${errorMessages}`);
    }

    // Parse frontmatter and content using our custom parser
    const { data, content } = parseFrontmatter(mdxContent);

    // Ensure tags is an array
    const tags = Array.isArray(data.tags) ? data.tags : [data.tags].filter(Boolean);

    // Format the date properly
    const pubDate = new Date(data.pubDate).toISOString();

    // Construct the frontmatter object with proper types
    const frontmatter: MDXFrontmatter = {
      title: data.title,
      description: data.description,
      pubDate,
      heroImage: data.heroImage,
      category: data.category,
      tags
    };

    // Clean up the content
    const cleanContent = content
      .trim()
      .replace(/^\uFEFF/, '') // Remove BOM
      .replace(/\r\n/g, '\n'); // Normalize line endings

    return {
      content: cleanContent,
      frontmatter
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error; // Re-throw validation errors
    }
    throw new Error('Failed to parse MDX file: Unknown error occurred');
  }
}

export function validateMDXContent(content: string): MDXValidationError[] {
  const errors: MDXValidationError[] = [];

  // Check for basic MDX structure
  if (!content.includes('---')) {
    errors.push({
      type: 'structure',
      message: 'MDX file must contain frontmatter section marked with ---',
      suggestion: 'Add frontmatter section at the top of your file between --- markers'
    });
    return errors;
  }

  try {
    const { data, content: bodyContent } = parseFrontmatter(content);

    // Validate frontmatter fields
    const requiredFields = ['title', 'description', 'pubDate', 'heroImage', 'category', 'tags'];
    requiredFields.forEach(field => {
      if (!data[field]) {
        errors.push({
          type: 'frontmatter',
          field,
          message: `Missing required field: ${field}`,
          suggestion: `Add '${field}:' to your frontmatter section`
        });
      }
    });

    // Validate date format
    if (data.pubDate && isNaN(new Date(data.pubDate).getTime())) {
      errors.push({
        type: 'format',
        field: 'pubDate',
        message: 'Invalid date format',
        suggestion: 'Use ISO date format (e.g., "2024-02-20" or "2024-02-20T15:30:00Z")'
      });
    }

    // Validate content length
    if (!bodyContent || bodyContent.trim().length < 50) {
      errors.push({
        type: 'content',
        message: 'Content is too short (minimum 50 characters)',
        suggestion: 'Add more content to your MDX file'
      });
    }

    // Validate tags
    if (data.tags) {
      const tags = Array.isArray(data.tags) ? data.tags : [data.tags];
      if (tags.some(tag => typeof tag !== 'string' || tag.trim().length === 0)) {
        errors.push({
          type: 'format',
          field: 'tags',
          message: 'Invalid tags format',
          suggestion: 'Tags should be an array of non-empty strings (e.g., tags: ["tech", "web"])'
        });
      }
    }

    // Validate URLs
    if (data.heroImage && !isValidUrl(data.heroImage)) {
      errors.push({
        type: 'format',
        field: 'heroImage',
        message: 'Invalid hero image URL',
        suggestion: 'Provide a valid URL for the hero image (e.g., https://example.com/image.jpg)'
      });
    }

    return errors;
  } catch (error) {
    return [{
      type: 'structure',
      message: 'Failed to parse MDX structure',
      suggestion: 'Ensure your frontmatter is properly formatted YAML between --- markers'
    }];
  }
}

function isValidUrl(str: string): boolean {
  try {
    // Allow relative paths starting with ../
    if (str.startsWith('../') || str.startsWith('./')) {
      return true;
    }
    new URL(str);
    return true;
  } catch {
    return false;
  }
}
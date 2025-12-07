import { promises as fs } from 'fs';
import path from 'path';

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    pubDate: string;
    modifiedDate?: string;
    heroImage: string;
    category: string;
    tags: string[];
    content: string;
    author?: string;
    authorImage?: string;
    wordCount: number;
    readingTime: number;
}

export interface BlogPostMeta {
    slug: string;
    title: string;
    description: string;
    pubDate: string;
    modifiedDate?: string;
    heroImage: string;
    category: string;
    tags: string[];
    author?: string;
}

const BLOG_DIR = path.join(process.cwd(), 'public', 'content', 'blog');

/**
 * Parse frontmatter from markdown file
 */
function parseFrontmatter(content: string): { metadata: Record<string, string>; content: string } {
    const [, frontmatter, ...rest] = content.split('---');
    const metadata = frontmatter.split('\n').reduce((acc, line) => {
        const [key, ...value] = line.split(':');
        if (key && value.length) {
            acc[key.trim()] = value.join(':').trim().replace(/^["'](.*)["']$/, '$1');
        }
        return acc;
    }, {} as Record<string, string>);

    return { metadata, content: rest.join('---').trim() };
}

/**
 * Parse tags from frontmatter string
 */
function parseTags(tagsStr: string | undefined): string[] {
    if (!tagsStr) return [];
    return tagsStr.replace(/[\[\]]/g, '').split(',').map(tag => tag.trim()).filter(Boolean);
}

/**
 * Get a single blog post by slug (for generateMetadata)
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const filePath = path.join(BLOG_DIR, `${slug}.md`);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const { metadata, content } = parseFrontmatter(fileContent);

        const wordCount = content.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200);

        return {
            slug,
            title: metadata.title || 'Untitled',
            description: metadata.description || '',
            pubDate: metadata.pubDate || new Date().toISOString(),
            modifiedDate: metadata.modifiedDate || metadata.pubDate,
            heroImage: metadata.heroImage || '',
            category: metadata.category || 'Uncategorized',
            tags: parseTags(metadata.tags),
            content,
            author: metadata.author || 'Quadrate Tech Solutions',
            authorImage: metadata.authorImage,
            wordCount,
            readingTime,
        };
    } catch (error) {
        console.error(`Error reading blog post ${slug}:`, error);
        return null;
    }
}

/**
 * Get metadata only for a blog post (lighter weight for SEO)
 */
export async function getPostMetaBySlug(slug: string): Promise<BlogPostMeta | null> {
    try {
        const filePath = path.join(BLOG_DIR, `${slug}.md`);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const { metadata } = parseFrontmatter(fileContent);

        return {
            slug,
            title: metadata.title || 'Untitled',
            description: metadata.description || '',
            pubDate: metadata.pubDate || new Date().toISOString(),
            modifiedDate: metadata.modifiedDate || metadata.pubDate,
            heroImage: metadata.heroImage || '',
            category: metadata.category || 'Uncategorized',
            tags: parseTags(metadata.tags),
            author: metadata.author || 'Quadrate Tech Solutions',
        };
    } catch (error) {
        console.error(`Error reading blog post metadata ${slug}:`, error);
        return null;
    }
}

/**
 * Get all blog posts (for sitemap and blog listing)
 */
export async function getAllPosts(): Promise<BlogPostMeta[]> {
    try {
        const files = await fs.readdir(BLOG_DIR);
        const posts: BlogPostMeta[] = [];

        for (const file of files) {
            if (!file.endsWith('.md')) continue;
            const slug = file.replace('.md', '');
            const post = await getPostMetaBySlug(slug);
            if (post) posts.push(post);
        }

        // Sort by date (newest first)
        return posts.sort((a, b) =>
            new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        );
    } catch (error) {
        console.error('Error reading blog posts:', error);
        return [];
    }
}

/**
 * Get all post slugs (for generateStaticParams)
 */
export async function getAllPostSlugs(): Promise<string[]> {
    try {
        const files = await fs.readdir(BLOG_DIR);
        return files
            .filter(file => file.endsWith('.md'))
            .map(file => file.replace('.md', ''));
    } catch (error) {
        console.error('Error reading blog slugs:', error);
        return [];
    }
}

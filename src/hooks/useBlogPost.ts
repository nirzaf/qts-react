import { useState, useEffect } from 'react';

interface Post {
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
  authorBio?: string;
  readingTime?: number;
  slug?: string;
  url?: string;
  relatedPosts?: string[];
}

export const useBlogPost = (slug: string | undefined) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/content/blog/${slug}.md`);
        const text = await response.text();

        // Parse frontmatter and content
        const [, frontmatter, content] = text.split('---');
        const metadata = frontmatter.split('\n').reduce((acc, line) => {
          const [key, ...value] = line.split(':');
          if (key && value.length) {
            acc[key.trim()] = value.join(':').trim().replace(/^"(.*)"$/, '$1');
          }
          return acc;
        }, {} as any);

        // Process content
        const processedContent = content.trim();

        // Calculate reading time
        const wordCount = processedContent.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute

        // Process tags
        const processedTags = metadata.tags
          ? metadata.tags.replace(/[[\]]/g, '').split(',').map((tag: string) => tag.trim())
          : [];

        // Set default modified date if not provided
        const modifiedDate = metadata.modifiedDate || metadata.pubDate;

        // Create URL
        const url = `https://quadrate.lk/#/blog/${slug}`;

        setPost({
          ...metadata,
          content: processedContent,
          tags: processedTags,
          modifiedDate,
          readingTime,
          slug,
          url
        });
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return { post, loading };
};

export default useBlogPost;

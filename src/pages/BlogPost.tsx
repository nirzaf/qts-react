import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Badge } from '../components/ui/badge';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Post {
  title: string;
  description: string;
  pubDate: string;
  heroImage: string;
  category: string;
  tags: string[];
  content: string;
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, we'll fetch the markdown content directly
    // Later, we can implement dynamic loading of markdown files
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

        setPost({
          ...metadata,
          content: content.trim(),
          tags: metadata.tags.replace(/[\[\]]/g, '').split(',').map((tag: string) => tag.trim())
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

  if (loading) {
    return (
      <div className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-3/4 rounded bg-muted"></div>
            <div className="h-4 w-1/2 rounded bg-muted"></div>
            <div className="aspect-video rounded bg-muted"></div>
            <div className="space-y-2">
              <div className="h-4 rounded bg-muted"></div>
              <div className="h-4 rounded bg-muted"></div>
              <div className="h-4 w-4/5 rounded bg-muted"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold">Post Not Found</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The blog post you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <header className="mb-8 space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-sm">
              {post.category}
            </Badge>
            <time dateTime={post.pubDate} className="text-sm text-muted-foreground">
              {format(new Date(post.pubDate), 'MMMM d, yyyy')}
            </time>
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
          <img
            src={post.heroImage}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <ReactMarkdown
            components={{
              code: ({ className, children }) => {
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus as any}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPostPage;

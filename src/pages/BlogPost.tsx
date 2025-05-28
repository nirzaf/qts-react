import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Loading from '@/components/ui/loading';
import BlogPostContainer from '@/components/blog/BlogPostContainer';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
// import BlogPostImage from '@/components/blog/BlogPostImage';
import BlogPostNotFound from '@/components/blog/BlogPostNotFound';
import useBlogPost from '@/hooks/useBlogPost';
import SEO from '@/components/seo/SEO';

import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import OptimizedImage from '@/components/ui/OptimizedImage';
import LazyLoad from '@/components/ui/LazyLoad';
import {
  generateBlogPostSchema,
  generateOrganizationSchema,
  defaultOrganization
} from '@/utils/structuredData';

// Lazy load heavy components
const ReactMarkdown = lazy(() => import('react-markdown'));
const SyntaxHighlighter = lazy(() =>
  import('react-syntax-highlighter').then(mod => ({ default: mod.Prism }))
);

// Separate markdown rendering component for better code splitting
const MarkdownContent: React.FC<{ content: string }> = ({ content }) => {
  const [style, setStyle] = useState<any>(null);

  // Load syntax highlighting style only when needed
  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus')
      .then(mod => setStyle(mod.default));
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <ReactMarkdown
        components={{
          code: ({ className, children }) => {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <Suspense fallback={<div className="animate-pulse h-24 bg-muted rounded" />}>
                <SyntaxHighlighter
                  style={style}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </Suspense>
            ) : (
              <code className={className}>{children}</code>
            );
          },
          img: ({ src, alt }) => (
            <OptimizedImage
              src={src || ''}
              alt={alt || 'Blog image'}
              className="w-full h-auto my-4 rounded-lg"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </Suspense>
  );
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading } = useBlogPost(slug);

  if (loading) {
    return <Loading />;
  }

  if (!post) {
    return <BlogPostNotFound />;
  }

  const location = useLocation();

  // Calculate estimated reading time
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute reading speed

  // Breadcrumb items are handled by the Breadcrumbs component

  // Generate structured data for the blog post
  const organizationSchema = generateOrganizationSchema(defaultOrganization);

  const blogPostSchema = generateBlogPostSchema({
    title: post.title,
    description: post.description,
    url: `https://quadrate.lk/#/blog/${slug}`,
    image: post.heroImage,
    datePublished: post.pubDate,
    dateModified: post.modifiedDate || post.pubDate,
    author: {
      name: post.author || 'Quadrate Tech Solutions',
      url: 'https://quadrate.lk/#/about',
      image: post.authorImage || 'https://ik.imagekit.io/quadrate/blogs/avatar.png',
      jobTitle: 'Content Writer'
    },
    category: post.category,
    tags: post.tags,
    wordCount: wordCount,
    articleSection: post.category
  });

  // const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems); // Removed: Handled by Breadcrumbs component

  // Combine structured data
  const structuredData = [
    organizationSchema,
    blogPostSchema
    // breadcrumbSchema // Removed: Handled by Breadcrumbs component
  ];

  // Generate keywords from tags
  const keywords = post.tags ? post.tags.join(', ') : '';

  return (
    <BlogPostContainer>
      <SEO
        title={`${post.title} | Quadrate Tech Solutions Blog`}
        description={post.description}
        keywords={keywords}
        image={post.heroImage}
        article={true}
        publishedTime={post.pubDate}
        modifiedTime={post.modifiedDate || post.pubDate}
        author={post.author || 'Quadrate Tech Solutions'}
        category={post.category}
        tags={post.tags}
        language="en"
        canonicalUrl={`https://quadrate.lk/#${location.pathname}`}
        structuredData={structuredData} // Pass structuredData (now without breadcrumbSchema)
      />
      {/* <SchemaMarkup schema={structuredData} /> // This should remain commented out or removed */}

      <Breadcrumbs
        customPaths={[
          { path: '/blog', label: 'Blog' },
          { path: location.pathname, label: post.title }
        ]}
        className="mb-6 text-sm"
      />

      <BlogPostHeader
        title={post.title}
        description={post.description}
        pubDate={post.pubDate}
        category={post.category}
        tags={post.tags}
      />

      <div className="mb-4 text-sm text-gray-600">
        <span>{readingTime} min read</span> • <span>By {post.author || 'Quadrate Tech Solutions'}</span>
      </div>

      <OptimizedImage
        src={post.heroImage}
        alt={post.title}
        className="w-full rounded-lg mb-8 aspect-video"
        priority={true}
      />

      <LazyLoad className="prose prose-gray dark:prose-invert max-w-none">
        <MarkdownContent content={post.content} />
      </LazyLoad>

      <div className="mt-12 pt-6 border-t border-gray-200">
        <h3 className="text-xl font-bold mb-4">Share this article</h3>
        <div className="flex space-x-4">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://quadrate.lk/#${location.pathname}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
            aria-label="Share on Twitter"
          >
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://quadrate.lk/#${location.pathname}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
            aria-label="Share on LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://quadrate.lk/#${location.pathname}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 hover:text-blue-700"
            aria-label="Share on Facebook"
          >
            Facebook
          </a>
        </div>
      </div>
    </BlogPostContainer>
  );
};

export default BlogPostPage;

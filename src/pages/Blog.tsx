import React, { useEffect, useState } from 'react';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogSection from '@/components/blog/BlogSection';
import { type BlogPost, initialBlogPosts } from '@/data/blogData';

/**
 * Blog page component that displays a list of blog posts
 * Uses modular components for better organization and maintainability
 * Implements loading states and error handling
 */
const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setPosts(initialBlogPosts);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <BlogHeader />
      <BlogSection posts={posts} isLoading={isLoading} />
    </section>
  );
};

export default BlogPage;

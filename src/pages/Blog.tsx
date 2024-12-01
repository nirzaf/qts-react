import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/layouts/PageLayout';
import BlogContainer from '@/components/blog/BlogContainer';
import BlogContent from '@/components/blog/BlogContent';
import useBlogPosts from '@/hooks/useBlogPosts';

/**
 * Blog page component that displays a list of blog posts
 * Uses modular components for better organization and maintainability
 * Implements loading states and error handling
 */
const BlogPage: React.FC = () => {
  const { posts, isLoading } = useBlogPosts();

  const elementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <PageLayout>
      <motion.div
        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-black/10 p-8"
        variants={elementVariants}
      >
        <BlogContainer>
          <BlogContent posts={posts} isLoading={isLoading} />
        </BlogContainer>
      </motion.div>
    </PageLayout>
  );
};

export default BlogPage;

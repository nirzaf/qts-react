'use client';

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
export default function BlogPage() {
  const { posts, isLoading } = useBlogPosts();

  const elementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <PageLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={elementVariants}
        className="min-h-screen"
      >
        <BlogContainer>
          <BlogContent posts={posts} isLoading={isLoading} />
        </BlogContainer>
      </motion.div>
    </PageLayout>
  );
}

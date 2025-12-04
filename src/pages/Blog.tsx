'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/layouts/PageLayout';
import BlogContainer from '@/components/blog/BlogContainer';
import BlogContent from '@/components/blog/BlogContent';
import useBlogPosts from '@/hooks/useBlogPosts';
import SEO from '@/components/seo/SEO';
import { generateOrganizationSchema, generateWebPageSchema, defaultOrganization } from '@/utils/structuredData';

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

  // Generate structured data for the blog page
  const organizationSchema = generateOrganizationSchema(defaultOrganization);
  const webPageSchema = generateWebPageSchema({
    title: 'Blog | Quadrate Tech Solutions',
    description: 'Explore our blog for insights on software development, web development, digital marketing, IT trends, and technology innovations.',
    url: 'https://quadrate.lk/blog',
  });

  // Combine structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, webPageSchema]
  };

  return (
    <PageLayout>
      <SEO
        title="Blog | Quadrate Tech Solutions"
        description="Explore our blog for insights on software development, web development, digital marketing, IT trends, and technology innovations."
        keywords="tech blog, software development articles, web development tips, digital marketing insights, IT trends, technology innovations"
        structuredData={structuredData}
      />
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

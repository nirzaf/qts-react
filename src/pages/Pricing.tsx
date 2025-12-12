'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/layouts/PageLayout';
import PricingGrid from '@/components/pricing/PricingGrid';
import CustomSolutionCard from '@/components/pricing/CustomSolutionCard';

import { generateOrganizationSchema, generateWebPageSchema, defaultOrganization } from '@/utils/structuredData';
import { pricingPlans } from '@/data/home-page/pricing';

/**
 * Pricing page component that displays pricing plans and custom solutions
 * Features:
 * - Clean, minimal design with black/white scheme
 * - Subtle gradient backgrounds with 5% black opacity
 * - Smooth animations for enhanced engagement
 * - Responsive and mobile-friendly layout
 * - Clear visual hierarchy with consistent spacing
 */
const Pricing: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const
      }
    }
  };

  // Generate structured data for the pricing page
  const organizationSchema = generateOrganizationSchema(defaultOrganization);
  const webPageSchema = generateWebPageSchema({
    title: 'Pricing | Quadrate Tech Solutions',
    description: 'Explore our transparent pricing plans for software development, web development, digital marketing, and IT services. Find the perfect plan for your business needs.',
    url: 'https://quadrate.lk/pricing',
  });

  // Generate pricing data for structured data
  const pricingData = {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    priceCurrency: 'USD',
    price: pricingPlans[0].price,
    minPrice: pricingPlans[0].price,
    maxPrice: pricingPlans[pricingPlans.length - 1].price,
    validFrom: '2025-01-01',
    validThrough: '2025-12-31'
  };

  // Combine structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, webPageSchema, pricingData]
  };

  return (
    <PageLayout>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-8"
          variants={itemVariants}
        >
          <p className="text-black/70 dark:text-white/80 text-lg max-w-2xl mx-auto dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            Choose the perfect plan for your needs. All plans include our core features.
          </p>
        </motion.div>

        {/* Pricing Grid Section */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <PricingGrid />
        </motion.div>

        {/* Custom Solution Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                     border border-black/10 dark:border-white/20 rounded-lg shadow-lg"
        >
          <CustomSolutionCard />
        </motion.div>

        {/* FAQ or Additional Info Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-black/60 dark:text-white/70 dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            Have questions about our pricing? {' '}
            <a
              href="/contact"
              className="text-black dark:text-white hover:text-black/80 dark:hover:text-white/90 transition-colors duration-200
                       border-b border-black/20 dark:border-white/30 hover:border-black/40 dark:hover:border-white/50"
            >
              Contact our team
            </a>
          </p>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default Pricing;

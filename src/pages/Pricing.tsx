import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/layouts/PageLayout';
import PricingGrid from '@/components/pricing/PricingGrid';
import CustomSolutionCard from '@/components/pricing/CustomSolutionCard';

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
        ease: 'easeOut'
      }
    }
  };

  return (
    <PageLayout>
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
          <p className="text-black/70 text-lg max-w-2xl mx-auto">
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
          className="mt-12 max-w-4xl mx-auto bg-white/80 backdrop-blur-sm 
                     border border-black/10 rounded-lg shadow-lg"
        >
          <CustomSolutionCard />
        </motion.div>

        {/* FAQ or Additional Info Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-black/60">
            Have questions about our pricing? {' '}
            <a 
              href="/contact" 
              className="text-black hover:text-black/80 transition-colors duration-200 
                       border-b border-black/20 hover:border-black/40"
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

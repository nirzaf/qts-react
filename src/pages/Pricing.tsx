import React from 'react';
import { motion } from 'framer-motion';
import PricingHeader from '@/components/pricing/PricingHeader';
import PricingGrid from '@/components/pricing/PricingGrid';
import CustomSolutionCard from '@/components/pricing/CustomSolutionCard';

/**
 * Pricing page component that displays different pricing plans and custom solutions
 * Uses modular components for better organization and maintainability
 * Implements animations using Framer Motion for enhanced user experience
 */
const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <PricingHeader />
      
      {/* Pricing Section */}
      <div className="container py-16">
        <PricingGrid />

        {/* Custom Solution Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <CustomSolutionCard />
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;

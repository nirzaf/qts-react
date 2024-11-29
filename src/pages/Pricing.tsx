import React from 'react';
import { motion } from 'framer-motion';
import { pricingPlans } from '@/data/pricingData';
import PricingHeader from '@/components/pricing/PricingHeader';
import PricingCard from '@/components/pricing/PricingCard';
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
      
      {/* Pricing Cards Container */}
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <PricingCard plan={plan} isPopular={plan.popular} />
            </motion.div>
          ))}
        </div>

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

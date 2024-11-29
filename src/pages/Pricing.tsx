import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

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
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
              className="relative"
            >
              <AnimatePresence>
                {hoveredPlan === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-r from-[#0607E1]/10 via-[#0A25C9]/10 to-[#0B48D0]/10 rounded-2xl"
                  />
                )}
              </AnimatePresence>
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

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
    <div className="relative min-h-screen bg-[#FFFFFF] overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        <PricingHeader />

        {/* Pricing Cards Container */}
        <section className="container mx-auto py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">
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
                      className="absolute -inset-4 bg-[#0607E1]/5 rounded-2xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
                <PricingCard 
                  plan={plan} 
                  isHovered={hoveredPlan === index}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Custom Solution Card with subtle hover effect */}
        <section className="container mx-auto py-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <CustomSolutionCard />
          </motion.div>
        </section>

        {/* Simple bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-[#0607E1]/10" />
      </div>
    </div>
  );
};

export default Pricing;

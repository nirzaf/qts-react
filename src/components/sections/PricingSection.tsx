import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PricingPlan } from '@/data/pricingData';
import { PricingCard } from '@/components/pricing/PricingCard';

interface PricingSectionProps {
  plans: PricingPlan[];
}

export const PricingSection: React.FC<PricingSectionProps> = ({ plans }) => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  // Map the plans to include the correct button text and link
  const mappedPlans = plans.map(plan => ({
    ...plan,
    ctaText: plan.popular ? 'Get Started' : plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started',
    ctaLink: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions'
  }));

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-[#000000]/70 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">
          {mappedPlans.map((plan, index) => (
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
      </div>
    </section>
  );
};

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PricingPlan } from '@/data/pricingData';
import { PricingCard } from '@/components/pricing/PricingCard';

interface PricingCardContainerProps {
  plans: PricingPlan[];
  hoveredPlan: number | null;
  onHoverStart: (index: number) => void;
  onHoverEnd: () => void;
}

export const PricingCardContainer: React.FC<PricingCardContainerProps> = ({
  plans,
  hoveredPlan,
  onHoverStart,
  onHoverEnd,
}) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          onHoverStart={() => onHoverStart(index)}
          onHoverEnd={onHoverEnd}
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
  );
}; 
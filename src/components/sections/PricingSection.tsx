import React from 'react';
import { motion } from 'framer-motion';
import { pricingPlans } from '@/data/pricingData';
import { PricingCardContainer } from '@/components/pricing/sections/PricingCardContainer';
import CustomSolutionCard from '@/components/pricing/CustomSolutionCard';

interface PricingSectionProps {
}

const PricingSection: React.FC<PricingSectionProps> = () => {
  return (
    <section className="container mx-auto py-12">
      {/* Pricing Cards Container */}
      <PricingCardContainer plans={pricingPlans} />

      {/* Custom Solution Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16"
      >
        <CustomSolutionCard />
      </motion.div>
    </section>
  );
};

export default PricingSection;

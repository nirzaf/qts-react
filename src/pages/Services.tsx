import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/layouts/PageLayout';
import ServicesGrid from '@/components/services/ServicesGrid';
import WhyChooseUs from '@/components/services/WhyChooseUs';

/**
 * Services page component showcasing our service offerings and unique value propositions
 * Features:
 * - Clean design with Chrysler Blue accents
 * - Subtle gradient backgrounds with blue opacity
 * - Smooth staggered animations
 * - Responsive and mobile-optimized layout
 */
const ServicesPage: React.FC = () => {
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

  return (
    <PageLayout>
      <motion.div
        className="space-y-16"
        initial="hidden"
        animate="visible"
        variants={elementVariants}
      >
        <ServicesGrid />
        <WhyChooseUs />
      </motion.div>
    </PageLayout>
  );
};

export default ServicesPage;
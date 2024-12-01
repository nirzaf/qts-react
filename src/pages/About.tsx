import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/layouts/PageLayout';
import { AboutContent } from '@/components/sections/about/AboutContent';

/**
 * About page component showcasing company story and values
 * Features:
 * - Clean, minimal design with Chrysler Blue accents
 * - Subtle gradient backgrounds and animations
 * - Responsive and mobile-optimized layout
 * - Clear visual hierarchy and spacing
 */
const AboutPage: React.FC = () => {
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
        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-black/10 overflow-hidden"
        variants={elementVariants}
      >
        <AboutContent />
      </motion.div>
    </PageLayout>
  );
};

export default AboutPage;

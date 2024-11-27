import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariants, defaultViewport } from '@/config/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  /**
   * Optional className to apply to the motion.div wrapper
   */
  className?: string;
  /**
   * Optional delay in seconds before starting the animation
   */
  delay?: number;
}

/**
 * AnimatedSection component that adds fade-in animation on scroll
 * Features:
 * - Configurable animation delay
 * - Customizable styles through className
 * - Optimized performance with viewport-based triggering
 * - Uses shared animation configurations
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '',
  delay = 0 
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: {
          ...fadeInUpVariants.hidden,
          transition: { duration: 0.6 }
        },
        visible: {
          ...fadeInUpVariants.visible,
          transition: { duration: 0.6, delay }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

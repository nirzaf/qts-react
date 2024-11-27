import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/HeroSection';
import { type HeroData } from '@/data/heroData';
import { fadeInUpVariants } from '@/config/animations';

interface AnimatedHeroProps {
  /** The main title of the hero section, can include styled elements */
  title: React.ReactNode;
  /** A concise description of the main value proposition */
  description: string;
  /** Optional hero section configuration data */
  data?: Partial<HeroData>;
  /** Optional className for custom styling */
  className?: string;
  /** Optional animation delay in seconds */
  animationDelay?: number;
}

/**
 * AnimatedHero component displays the main hero section with animations
 * Features:
 * - Smooth fade-in animation with configurable delay
 * - Flexible content structure with React nodes
 * - TypeScript type safety with proper interfaces
 * - Customizable styles through className
 * - Integration with shared animation configurations
 */
export const AnimatedHero: React.FC<AnimatedHeroProps> = ({
  title,
  description,
  data,
  className = '',
  animationDelay = 0.2
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          ...fadeInUpVariants.hidden,
          transition: { duration: 0.6 }
        },
        visible: {
          ...fadeInUpVariants.visible,
          transition: { duration: 0.6, delay: animationDelay }
        }
      }}
    >
      <HeroSection
        title={title}
        description={description}
        data={data}
      />
    </motion.div>
  );
};

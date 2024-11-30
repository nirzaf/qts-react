import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StorySection } from './sections/StorySection';
import { ValuesSection } from './sections/ValuesSection';
import { ImageSection } from './sections/ImageSection';

// Predefined animation variants
const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};

const contentVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay: 0.2 }
};

export const AboutContent: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        {...containerVariants}
        className="container py-12 sm:py-16"
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div 
            variants={contentVariants}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <StorySection />
            <ValuesSection />
          </motion.div>
          
          <ImageSection />
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface AboutContainerProps {
  children: React.ReactNode;
}

const containerVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.3 }
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn" as const,
      when: "afterChildren"
    }
  }
};

const AboutContainer: React.FC<AboutContainerProps> = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key="about-container"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-[#FFFFFF] dark:bg-[#050505] pt-8 text-neutral-900 dark:text-neutral-100"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutContainer;

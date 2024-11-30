import React from 'react';
import { motion } from 'framer-motion';

const storyVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.3 }
};

const textVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, delay: 0.5 }
};

export const StorySection: React.FC = () => {
  return (
    <motion.div 
      variants={storyVariants}
      initial="initial"
      animate="animate"
      className="space-y-4"
    >
      <motion.h2 
        variants={textVariants}
        className="text-3xl font-bold tracking-tight text-[#000000]"
      >
        Our Story
      </motion.h2>
      <motion.p 
        variants={textVariants}
        className="text-[#000000]/70 leading-relaxed"
      >
        Founded in 2009 and headquartered in Kandy, Sri Lanka, Quadrate Tech Solutions has established itself as a prominent player in the software development industry. We specialize in creating custom software solutions, including mobile apps, web-based applications, and enterprise software systems.
      </motion.p>
    </motion.div>
  );
};
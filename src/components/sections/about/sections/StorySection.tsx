import React from 'react';
import { motion } from 'framer-motion';

export const StorySection: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <h2 className="text-3xl font-bold tracking-tight text-[#000000]">Our Story</h2>
      <p className="text-[#000000]/70 leading-relaxed">
        Founded in 2009 and headquartered in Kandy, Sri Lanka, Quadrate Tech Solutions has established itself as a prominent player in the software development industry. We specialize in creating custom software solutions, including mobile apps, web-based applications, and enterprise software systems.
      </p>
    </motion.div>
  );
}; 
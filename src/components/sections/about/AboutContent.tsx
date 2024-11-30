import React from 'react';
import { motion } from 'framer-motion';
import { StorySection } from './sections/StorySection';
import { ValuesSection } from './sections/ValuesSection';
import { ImageSection } from './sections/ImageSection';

export const AboutContent: React.FC = () => {
  return (
    <section className="container py-12 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <StorySection />
          <ValuesSection />
        </motion.div>
        
        <ImageSection />
      </div>
    </section>
  );
};

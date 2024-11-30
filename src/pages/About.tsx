import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from '@/components/sections/about/AboutHero';
import { AboutContent } from '@/components/sections/about/AboutContent';

const AboutPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#FFFFFF]"
    >
      <AboutHero 
        title="About Us"
        subtitle="Building the future of technology solutions, one innovation at a time"
      />
      <AboutContent />
    </motion.div>
  );
};

export default AboutPage;

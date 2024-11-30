import React from 'react';
import { motion } from 'framer-motion';

interface AboutContainerProps {
  children: React.ReactNode;
}

const AboutContainer: React.FC<AboutContainerProps> = ({ children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#FFFFFF]"
    >
      {children}
    </motion.div>
  );
};

export default AboutContainer;

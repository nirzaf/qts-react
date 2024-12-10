import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/3 right-1/3 w-1/4 h-1/4 bg-gradient-to-bl from-[#0607E1]/5 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        className="absolute bottom-1/3 left-1/3 w-1/4 h-1/4 bg-gradient-to-tr from-[#0607E1]/5 to-transparent rounded-full blur-3xl"
      />
    </div>
  );
};

export default React.memo(BackgroundEffects);

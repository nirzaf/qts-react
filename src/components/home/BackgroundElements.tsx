import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundElements: React.FC = () => {
  return (
    <>
      {/* Global Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#646CFF]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#535BF2]/10 to-transparent" />
      </div>
      
      {/* Footer Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#535BF2]/10 to-transparent" />
    </>
  );
};

export default BackgroundElements;

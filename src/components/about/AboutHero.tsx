import React from 'react';
import { motion } from 'framer-motion';

const rollingAnimation = {
  hidden: {
    x: -200,
    rotate: -180,
    opacity: 0,
  },
  visible: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.645, 0.045, 0.355, 1.000], // Cubic bezier for smooth acceleration/deceleration
      opacity: { duration: 0.3 },
      rotate: {
        duration: 1.2,
        ease: "linear" // Linear rotation for consistent rolling speed
      }
    }
  }
};

export const AboutHero: React.FC = () => {
  return (
    <div className="relative min-h-[400px] bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container h-full flex items-center justify-center">
        <div className="perspective-[1000px]">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white text-center inline-block"
            initial="hidden"
            animate="visible"
            variants={rollingAnimation}
            style={{ 
              transformOrigin: "center center",
              backfaceVisibility: "hidden"
            }}
          >
            INNOVATIVE TECH SOLUTIONS
          </motion.h1>
        </div>
      </div>
    </div>
  );
};
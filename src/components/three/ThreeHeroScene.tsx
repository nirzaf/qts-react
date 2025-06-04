import React from 'react';
import ServiceTextStorm from './ServiceTextStorm';
import QuadrateHoneycombAnimation from './QuadrateHoneycombAnimation';
import { motion } from 'framer-motion';

/**
 * ThreeHeroScene component that displays floating service text animation
 * and orbiting sphere animation showcasing services provided by Quadrate Tech Solutions.
 */
const ThreeHeroScene: React.FC = () => {
  return (
    <div className="relative w-full h-0 md:h-[350px] lg:h-[400px] overflow-hidden hidden md:block">
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#1d2f84]/5 via-[#397ce8]/3 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.2 }}
      />

      {/* Quadrate Honeycomb Animation - Cool professional animation */}
      <div className="absolute inset-0 right-0 w-1/2 h-full">
        <QuadrateHoneycombAnimation />
      </div>

      {/* Service text animation */}
      <ServiceTextStorm />

      {/* Company logo - hidden on mobile */}
      <motion.div
        className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 hidden md:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        <img
          src="https://ik.imagekit.io/quadrate/assets/img/QTS%20Primary%20Logo.png?updatedAt=1748456663889"
          alt="Quadrate Tech Solutions Logo"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Animated glow elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.6,
          y: [0, -10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          opacity: { duration: 1, delay: 0.5 },
          y: { duration: 8, repeat: Infinity, repeatType: "reverse" },
          scale: { duration: 8, repeat: Infinity, repeatType: "reverse" }
        }}
        className="absolute top-1/4 left-10 w-1/4 h-1/4 bg-[#1d2f84]/10 blur-3xl rounded-full"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.4,
          y: [0, 10, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          opacity: { duration: 1, delay: 0.7 },
          y: { duration: 10, repeat: Infinity, repeatType: "reverse" },
          scale: { duration: 10, repeat: Infinity, repeatType: "reverse" }
        }}
        className="absolute bottom-1/4 left-10 w-1/5 h-1/5 bg-[#397ce8]/8 blur-3xl rounded-full"
      />
    </div>
  );
};

export default ThreeHeroScene;
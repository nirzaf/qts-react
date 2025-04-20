import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ServiceTextStorm from './ServiceTextStorm';

// Animated foreground elements using Framer Motion
const ForegroundElements = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Simple animation sequence
    const sequence = async () => {
      await controls.start({
        opacity: [0, 0.7],
        scale: [0.95, 1],
        transition: { duration: 1.5, ease: "easeOut" }
      });

      // Gentle continuous animation
      controls.start({
        y: [0, -5, 0],
        scale: [1, 1.03, 1],
        transition: {
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }
      });
    };

    sequence();
  }, [controls]);

  return (
    <>
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#0607E1]/10 via-[#4D0AFF]/5 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.2 }}
      />

      {/* Animated glow elements */}
      <motion.div
        animate={controls}
        className="absolute top-1/4 right-10 w-1/3 h-1/3 bg-[#0607E1]/15 blur-3xl rounded-full"
      />

      <motion.div
        animate={controls}
        transition={{ delay: 0.2 }}
        className="absolute bottom-1/4 left-10 w-1/4 h-1/4 bg-[#4D0AFF]/10 blur-3xl rounded-full"
      />

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
    </>
  );
};

export const HeroBackground: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only mount on client side
    setIsMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Service Text Animation */}
      {isMounted && <ServiceTextStorm />}

      {/* Foreground Elements */}
      <ForegroundElements />
    </div>
  );
};

export default HeroBackground;

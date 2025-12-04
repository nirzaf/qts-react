import React from 'react';
import { motion } from 'framer-motion';

/**
 * OptimizedHeroBackground - Performance-focused hero background
 * Replaces video background with optimized images and gradients
 * Mobile-first design with better performance
 */
const OptimizedHeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-[#FFFFFF] to-[#F0F4FF]" />
      
      {/* Hero Background Image - Optimized for performance */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/90 via-[#FFFFFF]/70 to-[#FFFFFF]/90" />
        <img
          src="https://ik.imagekit.io/quadrate/assets/img/hero-bg.png?updatedAt=1718024113863"
          alt=""
          className="w-full h-full object-cover opacity-10"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0607E1]/20 to-[#4D0AFF]/10 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#0607E1]/15 to-[#00D4FF]/10 rounded-full blur-3xl"
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 1
        }}
      />

      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-bl from-[#4D0AFF]/10 to-[#0607E1]/5 rounded-full blur-2xl"
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 2
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 7, 225, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 7, 225, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Subtle Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#0607E1]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut" as const
            }}
          />
        ))}
      </div>

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 border-2 border-[#0607E1]/20 rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      />

      <motion.div
        className="absolute bottom-32 right-32 w-6 h-6 bg-[#4D0AFF]/10 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 1
        }}
      />

      <motion.div
        className="absolute top-1/2 left-10 w-3 h-3 bg-[#0607E1]/15 transform rotate-45"
        animate={{
          rotate: [45, 405, 45],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 2
        }}
      />

      {/* Radial Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#FFFFFF]/30" />
      
      {/* Mobile-optimized overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FFFFFF]/20 md:hidden" />
    </div>
  );
};

export default OptimizedHeroBackground;

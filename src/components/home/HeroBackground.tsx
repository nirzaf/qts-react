import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ServiceTextStorm from './ServiceTextStorm';
import QuadrateHoneycombAnimation from '../three/QuadrateHoneycombAnimation';
// Import the video file
import heroBackgroundVideo from '../../assets/hero-bg.mp4';

// Animated particles for background
const BackgroundParticles = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([]);

  useEffect(() => {
    const particleCount = 30;
    const newParticles = Array.from({ length: particleCount }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#0607E1]/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0, 1, 0],
            y: [0, -30, -60]
          }}
          transition={{
            duration: 10,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

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

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(6, 7, 225, 0.3)" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(6, 7, 225, 0.2)" />
              <stop offset="100%" stopColor="rgba(6, 7, 225, 0)" />
            </linearGradient>
            <mask id="grid-mask">
              <rect width="100%" height="100%" fill="url(#fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" mask="url(#grid-mask)" />
        </svg>
      </div>

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
      {/* Video Background */}
      {isMounted && (
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.8) contrast(1.1)' }}
          >
            <source src={heroBackgroundVideo} type="video/mp4" />
            {/* Fallback text for screen readers */}
            Your browser does not support the video tag.
          </video>
          {/* White transparent overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10" />
        </div>
      )}

      {/* Background Particles - reduced opacity */}
      {isMounted && <BackgroundParticles />}

      {/* Service Text Animation */}
      {isMounted && <ServiceTextStorm />}

      {/* Quadrate Honeycomb Animation - Cool professional animation */}
      {isMounted && (
        <div className="absolute inset-0 right-0 w-full h-full z-20">
          <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
            <QuadrateHoneycombAnimation />
          </div>
        </div>
      )}

      {/* Foreground Elements */}
      <ForegroundElements />
    </div>
  );
};

export default HeroBackground;

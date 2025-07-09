import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Brain, Globe } from 'lucide-react';

interface HeroSectionProps {
  primaryButton: {
    text: string;
    onClick: () => void;
  };
  secondaryButton: {
    text: string;
    onClick: () => void;
  };
}



export const HeroSection = ({
  primaryButton,
  secondaryButton,
}: HeroSectionProps): React.ReactElement => {
  const [textIndex, setTextIndex] = useState(0);
  const phrases = [
    "Transform Your Digital Presence",
    "Accelerate Business Growth",
    "Innovate with AI Solutions",
    "Scale Your Operations",
    "Build the Future"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [phrases.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#FFFFFF] to-[#F0F4FF]"
      aria-label="Hero section"
      role="region"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0607E1]/20 to-[#4D0AFF]/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#0607E1]/15 to-[#00D4FF]/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 7, 225, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 7, 225, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Icons */}
        <motion.div
          className="absolute top-20 left-20 text-[#0607E1]/20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <Brain className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-32 text-[#0607E1]/20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1.5 }}
        >
          <Zap className="w-6 h-6" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-32 text-[#0607E1]/20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <Globe className="w-7 h-7" />
        </motion.div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            variants={itemVariants}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-[#0607E1]/10 rounded-full text-[#0607E1] font-medium text-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Solutions
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                variants={itemVariants}
              >
                <span className="text-[#000000]">We Help </span>
                <div className="relative inline-block">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={textIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-r from-[#0607E1] via-[#4D0AFF] to-[#0607E1] bg-clip-text text-transparent"
                    >
                      {phrases[textIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[#000000]/70 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Empowering businesses with cutting-edge AI solutions, custom software development, and digital transformation services. From startups to enterprises, we turn your vision into reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={primaryButton.onClick}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#0607E1] text-white font-semibold rounded-full hover:bg-[#0607E1]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{primaryButton.text}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                onClick={secondaryButton.onClick}
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#0607E1] text-[#0607E1] font-semibold rounded-full hover:bg-[#0607E1] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="mr-2 h-5 w-5" />
                {secondaryButton.text}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-[#000000]/10"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-[#0607E1] mb-1">50+</div>
                <div className="text-sm text-[#000000]/60">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-[#0607E1] mb-1">15+</div>
                <div className="text-sm text-[#000000]/60">AI Services</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-[#0607E1] mb-1">24/7</div>
                <div className="text-sm text-[#000000]/60">Support</div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 pt-6"
            >
              <div className="flex items-center text-sm text-[#000000]/60">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                ISO Certified
              </div>
              <div className="flex items-center text-sm text-[#000000]/60">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Microsoft Partner
              </div>
              <div className="flex items-center text-sm text-[#000000]/60">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                AI Certified
              </div>
            </motion.div>

          </motion.div>

          {/* Visual Content - Hidden on mobile, shown on desktop */}
          <aside className="hidden lg:block w-full lg:w-auto pt-2 lg:pt-0 flex justify-center lg:justify-end" aria-label="3D visualization">
            <div className="relative w-full lg:w-auto flex justify-center lg:justify-end overflow-hidden">
              <div className="w-96 h-96 bg-gradient-to-br from-[#0607E1]/10 to-[#4D0AFF]/5 rounded-3xl flex items-center justify-center">
                <img
                  src="https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458"
                  alt="Quadrate Tech Solutions"
                  className="w-full h-full object-cover rounded-3xl"
                  loading="eager"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </motion.section>
  );
};
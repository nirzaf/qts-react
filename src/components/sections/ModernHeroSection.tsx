"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, Play, Sparkles, Zap, Brain, Globe } from "lucide-react";
import HeroAnimation from "@/components/animations/HeroAnimation";
import { WarpVoidBackground } from "@/components/animations/WarpVoidBackground";

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

export const ModernHeroSection = ({
  primaryButton,
  secondaryButton,
}: HeroSectionProps): React.ReactElement => {
  const [textIndex, setTextIndex] = useState(0);
  const phrases = [
    "Transform Your Digital Presence",
    "Accelerate Business Growth",
    "Innovate with AI Solutions",
    "Scale Your Operations",
    "Build the Future",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [phrases.length]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1] as const,
      },
    },
  };

  return (
    <>
      {/* ========== MOBILE HERO (< lg) ========== */}
      <motion.section
        className="lg:hidden relative flex flex-col items-center justify-start overflow-x-hidden bg-gradient-to-b from-background via-background to-muted dark:from-background dark:via-background dark:to-muted pt-24 pb-16 min-h-[calc(100vh-4rem)]"
        aria-label="Hero section"
        role="region"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Mobile Warp background with lightweight settings */}
        <WarpVoidBackground
          variant="blue-purple"
          speed={0.45}
          opacity={0.32}
          density="low"
          mouseTracking={false}
          zIndex={0}
          className="pointer-events-none"
        />

        {/* Mobile Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <motion.div
            className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 0.5 }}
          />
        </div>

        {/* Mobile Hero Content - Centered vertically */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 space-y-4">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-3 py-1.5 bg-primary/10 dark:bg-white/10 rounded-full text-primary dark:text-white font-medium text-xs dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
            variants={itemVariants}
          >
            <Sparkles className="w-3 h-3 mr-1.5" />
            AI-Powered Solutions
          </motion.div>

          {/* Compact Title */}
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-center leading-tight px-2"
            variants={itemVariants}
          >
            <span className="text-foreground dark:text-white dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]">
              We Help{" "}
            </span>
            <span
              className="bg-gradient-to-r from-primary via-primary to-primary/80 dark:from-white dark:via-white dark:to-white/90 bg-clip-text text-transparent"
              style={{
                filter:
                  "drop-shadow(0 0 20px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.4))",
              }}
            >
              Build the Future
            </span>
          </motion.h1>

          {/* Compact Description */}
          <motion.p
            className="text-base sm:text-lg text-muted-foreground dark:text-white/80 text-center max-w-md px-4 dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            variants={itemVariants}
          >
            Software, AI & Digital Transformation
          </motion.p>

          {/* Mobile Hero Animation - Compact */}
          <motion.div
            className="relative z-10 w-full max-w-sm"
            variants={itemVariants}
          >
            <HeroAnimation />
          </motion.div>

          {/* CTA Buttons - Stacked on very small screens */}
          <motion.div
            className="flex flex-col xs:flex-row gap-3 w-full max-w-sm px-4"
            variants={itemVariants}
          >
            <button
              onClick={primaryButton.onClick}
              className="w-full xs:w-auto flex-1 px-5 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-lg shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              {primaryButton.text}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={secondaryButton.onClick}
              className="w-full xs:w-auto flex-1 px-5 py-3 border border-border dark:border-white/30 bg-card/50 dark:bg-white/5 text-foreground dark:text-white font-medium text-sm rounded-lg hover:bg-card dark:hover:bg-white/10 transition-all"
            >
              {secondaryButton.text}
            </button>
          </motion.div>

          {/* Digital Transformation Indicator */}
          <motion.div
            className="text-center text-xs text-muted-foreground/60 dark:text-white/50 flex items-center gap-2"
            variants={itemVariants}
          >
            <Zap className="w-3 h-3 text-primary dark:text-white" />
            Digital Transformation
          </motion.div>
        </div>
      </motion.section>

      {/* ========== DESKTOP HERO (>= lg) ========== */}
      <motion.section
        className="hidden lg:flex relative min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted dark:from-background dark:via-background dark:to-muted"
        aria-label="Hero section"
        role="region"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Warp Void Background - Immersive depth effect */}
        <WarpVoidBackground
          variant="blue-purple"
          speed={0.8}
          opacity={0.4}
          density="medium"
          mouseTracking={true}
          zIndex={0}
        />

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-[1]">
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
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(rgba(6, 7, 225, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 7, 225, 0.1) 1px, transparent 1px)
              `,
                backgroundSize: "50px 50px",
              }}
            />
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

        <div className="container relative z-20 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <motion.div
              className="text-center lg:text-left space-y-8"
              variants={itemVariants}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-[#0607E1]/10 dark:bg-white/10 rounded-full text-[#0607E1] dark:text-white font-medium text-sm dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
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
                  <span className="text-foreground dark:text-white dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                    We Help{" "}
                  </span>
                  <div className="relative inline-block">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={textIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-r from-[#0607E1] via-[#4D0AFF] to-[#0607E1] dark:from-white dark:via-white dark:to-white/95 bg-clip-text text-transparent"
                        style={{
                          filter:
                            "drop-shadow(0 0 25px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 50px rgba(255, 255, 255, 0.5))",
                        }}
                      >
                        {phrases[textIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </motion.h1>

                <motion.p
                  className="text-lg text-foreground/60 dark:text-white/70 max-w-xl dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                  variants={itemVariants}
                >
                  We're a team of passionate developers and AI specialists
                  dedicated to creating innovative solutions that help
                  businesses thrive in the digital age.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] text-white font-semibold rounded-2xl shadow-lg shadow-[#0607E1]/25 hover:shadow-xl hover:shadow-[#0607E1]/30 transition-all duration-300 flex items-center justify-center dark:shadow-[#0607E1]/40 dark:hover:shadow-[#0607E1]/60"
                  onClick={primaryButton.onClick}
                >
                  <span className="dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                    {primaryButton.text}
                  </span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 border-2 border-foreground/20 dark:border-white/30 text-foreground dark:text-white font-semibold rounded-2xl hover:border-[#0607E1]/50 dark:hover:border-white/50 hover:bg-[#0607E1]/5 dark:hover:bg-white/10 transition-all duration-300 flex items-center justify-center dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                  onClick={secondaryButton.onClick}
                >
                  <Play className="w-5 h-5 mr-2 text-[#0607E1] dark:text-white" />
                  <span>{secondaryButton.text}</span>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap items-center gap-6 pt-6"
                variants={itemVariants}
              >
                <motion.div
                  className="flex items-center text-sm text-foreground/60 dark:text-white/60 dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse dark:shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                  ISO Certified
                </motion.div>
                <motion.div
                  className="flex items-center text-sm text-foreground/60 dark:text-white/60 dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse dark:shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                  Microsoft Partner
                </motion.div>
                <motion.div
                  className="flex items-center text-sm text-foreground/60 dark:text-white/60 dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse dark:shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                  AI Certified
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Visual Content - Cool Animation */}
            <motion.div
              className="relative flex items-center justify-center w-full"
              variants={itemVariants}
            >
              {/* Main Animation Container */}
              <div className="relative w-full max-w-2xl mx-auto">
                {/* Hero Animation */}
                <HeroAnimation />
              </div>

              {/* Background Decorative Elements */}
              <motion.div
                className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#0607E1]/20 to-transparent rounded-full blur-xl"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl from-[#4D0AFF]/20 to-transparent rounded-full blur-xl"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
              />

              {/* Additional ambient effects */}
              <motion.div
                className="absolute top-1/4 -right-12 w-16 h-16 bg-gradient-to-br from-[#06B6D4]/20 to-transparent rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
              <motion.div
                className="absolute bottom-1/3 -left-12 w-20 h-20 bg-gradient-to-br from-[#10B981]/20 to-transparent rounded-full blur-2xl"
                animate={{
                  scale: [1.2, 0.8, 1.2],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3,
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

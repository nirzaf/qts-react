import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  heroImage?: {
    src: string;
    alt: string;
  };
  primaryButton: {
    text: string;
    onClick: () => void;
  };
  secondaryButton: {
    text: string;
    onClick: () => void;
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroImage,
  primaryButton,
  secondaryButton,
}) => {
  const words = ["Transform", "Innovate", "Elevate", "Empower"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] pt-32 pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#000000]/2" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-[#000000]/2 rounded-full blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-[#000000]/2 rounded-full blur-2xl"
        />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold tracking-tight text-[#000000] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Company Name with Fade-in Letters Animation */}
                <motion.div
                  className="text-xl md:text-2xl font-light mb-1 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Split text into individual letters for animation */}
                  <div className="flex items-center justify-center lg:justify-start space-x-[2px]">
                    {"Quadrate Tech Solutions".split("").map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.03,
                          ease: "easeOut"
                        }}
                        className="text-[#000000]/80 inline-block"
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Helps text with fade-in and slide animation */}
                <motion.div
                  className="text-lg md:text-xl font-light mb-4 overflow-hidden text-[#000000]/60"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <div className="flex items-center justify-center lg:justify-start">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 1,
                        ease: "easeOut"
                      }}
                    >
                      Helps
                    </motion.span>
                  </div>
                </motion.div>

                {/* Existing Dynamic Text */}
                <div className="h-[1.2em] overflow-hidden">
                  <motion.span
                    key={words[currentWord]}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ 
                      y: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="bg-gradient-to-r from-[#000000] via-[#0607E1] to-[#0607E1] bg-clip-text text-transparent inline-block relative"
                  >
                    {words[currentWord]}
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-1 bg-[#0607E1]"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    />
                  </motion.span>
                </div>
                <motion.span 
                  className="bg-gradient-to-r from-[#000000] via-[#0607E1] to-[#0607E1] bg-clip-text text-transparent mt-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Your Digital Presence
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl text-[#000000]/70 mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Elevate your business with cutting-edge solutions that drive growth and innovation
              </motion.p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <motion.button
                  className="px-8 py-4 rounded-xl bg-[#000000] text-[#FFFFFF] hover:bg-[#000000]/90 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={primaryButton.onClick}
                >
                  {primaryButton.text}
                </motion.button>
                <motion.button
                  className="px-8 py-4 rounded-xl border-2 border-[#000000] text-[#000000] font-semibold text-lg hover:bg-[#000000]/5 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={secondaryButton.onClick}
                >
                  {secondaryButton.text}
                </motion.button>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={heroImage?.src || "https://ik.imagekit.io/quadrate/assets/img/QTS%20PNG.png?updatedAt=1732728815505"}
                  alt={heroImage?.alt || "Quadrate Tech Solutions"}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.12))',
                  }}
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-[#000000]/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -z-10 -inset-4 bg-[#0607E1]/2 rounded-2xl blur-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Blue Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0607E1]/2" />
    </section>
  );
};

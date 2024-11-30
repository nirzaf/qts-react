import React from 'react';
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
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] pt-32 pb-24">
      <div className="container relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left space-y-8"
            >
              {/* Company Name - Smaller Size */}
              <motion.h2 
                className="text-2xl md:text-3xl font-medium tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative z-10">
                  <div className="hidden sm:block">
                    {"Quadrate Tech Solutions".split('').map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.03,
                          ease: "easeOut"
                        }}
                        className="inline-block font-bold text-[#000000] text-4xl sm:text-5xl lg:text-6xl"
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    ))}
                  </div>
                  <div className="block sm:hidden">
                    <div className="space-y-1">
                      <div>
                        {"Quadrate".split('').map((letter, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.03,
                              ease: "easeOut"
                            }}
                            className="inline-block font-extrabold text-[#000000] text-4xl tracking-wide"
                            style={{
                              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                            }}
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </div>
                      <div>
                        {"Tech Solutions".split('').map((letter, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: (index + "Quadrate".length) * 0.03,
                              ease: "easeOut"
                            }}
                            className="inline-block font-bold text-[#000000] text-3xl"
                          >
                            {letter === ' ' ? '\u00A0' : letter}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.h2>

              {/* Helps Text - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <motion.h3 
                  className="text-5xl font-orbitron font-bold relative z-10 cursor-default
                    bg-gradient-to-r from-[#0607E1] via-[#0A25C9] to-[#0607E1] hover:from-[#0A25C9] hover:via-[#0B48D0] hover:to-[#0A25C9]
                    bg-clip-text text-transparent
                    transition-all duration-300 ease-in-out transform hover:scale-105
                    hover:drop-shadow-[0_0_8px_rgba(6,7,225,0.5)]"
                >
                  Helps
                </motion.h3>
              </motion.div>

              {/* Main Heading - Larger Size */}
              <motion.h1 
                className="text-6xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex flex-wrap justify-center lg:justify-start">
                  {"Transform Your Digital Presence".split(' ').map((word, index) => (
                    <span key={index}>{word}</span>
                  ))}
                </div>
              </motion.h1>

              <motion.p 
                className="text-xl lg:text-2xl text-[#000000]/70 mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Elevate your business with our innovative solutions
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <button
                  onClick={primaryButton.onClick}
                  className="px-8 py-3 bg-[#0607E1] text-white rounded-lg hover:bg-[#0A25C9] transition-colors duration-300"
                >
                  {primaryButton.text}
                </button>
                <button
                  onClick={secondaryButton.onClick}
                  className="px-8 py-3 border-2 border-[#0607E1] text-[#0607E1] rounded-lg hover:bg-[#0607E1] hover:text-white transition-colors duration-300"
                >
                  {secondaryButton.text}
                </button>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            {heroImage && (
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

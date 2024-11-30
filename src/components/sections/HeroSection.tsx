import React, { useState } from 'react';
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

const AnimatedLetter: React.FC<{ letter: string; index: number }> = ({ letter, index }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: index * 0.05,
      ease: [0.43, 0.13, 0.23, 0.96]
    }}
    className={`inline-block transform hover:scale-110 hover:text-[#0607E1] transition-all duration-300 cursor-default font-chakra
      ${letter === ' ' ? 'mx-[3px]' : 'mx-[0.5px]'}`}
    style={{
      textShadow: '1px 1px 0px rgba(0,0,0,0.05)'
    }}
  >
    {letter === ' ' ? '\u00A0' : letter}
  </motion.span>
);

const AnimatedWord: React.FC<{ word: string }> = ({ word }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className="inline-block mx-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {word.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
          className={`inline-block transition-all duration-300 ${
            isHovered ? 'text-[#0607E1] scale-110' : ''
          }`}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

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
                <div className="flex flex-wrap justify-center lg:justify-start font-chakra tracking-normal">
                  {"Quadrate Tech Solutions".split('').map((letter, index) => (
                    <AnimatedLetter key={index} letter={letter} index={index} />
                  ))}
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
                    <AnimatedWord key={index} word={word} />
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

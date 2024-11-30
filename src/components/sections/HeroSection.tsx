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
    <motion.div
      className="inline-block mx-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {word.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: isHovered ? -5 : 0,
            color: isHovered ? '#0607E1' : '#000000',
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ 
            duration: 0.3,
            delay: index * 0.05,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="inline-block transition-all duration-300"
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroImage,
  primaryButton,
  secondaryButton,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const phrases = [
    "Transform Your Digital Presence",
    "Startups Scale Their Operations",
    "Businesses Reach New Heights",
    "Teams Collaborate Effectively",
    "Ideas Transform Into Reality"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000); // Increased duration for better readability

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] pt-24 pb-20">
      <div className="container relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left space-y-6"
            >
              {/* Company Name - Consistent Size */}
              <motion.h2 
                className="text-3xl lg:text-4xl font-bold tracking-tight h-[50px] flex items-center justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                <div className="flex flex-wrap justify-center lg:justify-start font-chakra tracking-tighter">
                  {"Quadrate Tech Solutions".split('').map((letter, index) => (
                    <AnimatedLetter key={index} letter={letter} index={index} />
                  ))}
                </div>
              </motion.h2>

              {/* Helps Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="relative h-[40px] flex items-center justify-center lg:justify-start"
              >
                <motion.h3 
                  className="text-3xl lg:text-4xl font-pacifico font-semibold relative z-10 cursor-default
                    text-[#0607E1] hover:text-[#0A25C9]
                    transition-all duration-500 ease-in-out transform hover:scale-105
                    hover:drop-shadow-[0_0_8px_rgba(6,7,225,0.3)]
                    -mt-2"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  Helps
                </motion.h3>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                className="text-4xl lg:text-5xl font-bold tracking-tight h-[100px] flex items-center justify-center lg:justify-start -mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                <div className="flex flex-wrap justify-center lg:justify-start">
                  <motion.div
                    key={textIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      duration: 0.8,
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                    className="flex flex-wrap justify-center lg:justify-start"
                  >
                    {phrases[textIndex].split(' ').map((word, index) => (
                      <AnimatedWord key={index} word={word} />
                    ))}
                  </motion.div>
                </div>
              </motion.h1>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
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
                transition={{ 
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
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
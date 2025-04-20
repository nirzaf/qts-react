import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThreeHeroScene from '../three/ThreeHeroScene';

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

const AnimatedLetter: React.FC<{ letter: string; index: number }> = ({ letter, index }) => (
  <motion.span
    initial={{
      opacity: 0,
      x: -100,
      rotate: -180,
      scale: 0
    }}
    animate={{
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1
    }}
    transition={{
      duration: 0.8,
      delay: index * 0.05,
      type: "spring",
      stiffness: 150,
      damping: 15
    }}
    className={`inline-block transform cursor-default font-inter
      ${letter === ' ' ? 'mx-[3px]' : 'mx-[0.5px]'}
      hover:text-[#0607E1] hover:scale-110 transition-colors duration-300
      font-semibold tracking-tight`}
    style={{
      transformOrigin: "center center"
    }}
  >
    {letter === ' ' ? '\u00A0' : letter}
  </motion.span>
);

const AnimatedWord: React.FC<{ word: string; isLastWord: boolean }> = ({ word, isLastWord }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="inline-block mx-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      {word.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            color: isHovered ? '#0607E1' : isLastWord ? '#0607E1' : '#000000',
            textShadow: '0 0 1px rgba(255,255,255,0.5)' // Subtle text shadow for better visibility
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.03,
            type: "spring",
            stiffness: 150,
            damping: 15
          }}
          className="inline-block transform-gpu font-plusJakartaSans font-bold"
          style={{
            display: 'inline-block',
            backfaceVisibility: 'hidden'
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
// Text content components remain unchanged

export const HeroSection = ({
  primaryButton,
  secondaryButton,
}: HeroSectionProps): React.ReactElement => {
  const [textIndex, setTextIndex] = useState(0);
  const phrases = [
    "Transform Your Digital Presence",
    "Startups Scale Their Operations",
    "Businesses Reach New Heights",
    "Teams Collaborate Effectively",
    "Ideas Transform Into Reality"
  ].map(phrase => phrase);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="relative overflow-hidden bg-transparent pt-6 md:pt-8 pb-8 md:pb-12"
      aria-label="Hero section"
      role="region"
    >
      <div className="container relative z-20"> {/* Increased z-index for better visibility */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col-reverse lg:flex-row items-center md:items-start justify-center md:justify-between gap-4 md:gap-6 lg:gap-12">
            {/* Text Content */}
            <header className="flex-1 space-y-6 md:space-y-8 pt-4 md:pt-6 lg:max-w-[60%] relative w-full md:w-auto">
              {/* No need for semi-transparent background on mobile since we removed the animation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 md:space-y-6 relative z-10"
              >
                {/* Company Name - Updated Font */}
                <motion.h2
                  className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight min-h-[40px] md:min-h-[60px] flex items-center justify-center lg:justify-start overflow-visible
                    font-montserrat relative z-20 text-black dark:text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                  }}
                >
                  <motion.div
                    className="flex flex-wrap justify-center lg:justify-start tracking-tighter py-2 w-full"
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      mass: 1
                    }}
                  >
                    {/* First Line - Quadrate */}
                    <div className="w-full text-center lg:text-left lg:w-auto lg:inline">
                      {"QUADRATE".split('').map((letter, index) => (
                        <AnimatedLetter key={`first-${index}`} letter={letter} index={index} />
                      ))}
                    </div>
                    {/* Space between words for desktop */}
                    <div className="hidden lg:inline">&nbsp;</div>
                    {/* Second Line - Tech Solutions */}
                    <div className="w-full text-center lg:text-left lg:w-auto lg:inline">
                      {"TECH SOLUTIONS".split('').map((letter, index) => (
                        <AnimatedLetter
                          key={`second-${index}`}
                          letter={letter}
                          index={index + "QUADRATE".length}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.h2>

                {/* Helps Text with Pointer - Enhanced 3D Effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative h-[40px] md:h-[50px] flex items-center justify-center lg:justify-start perspective-1000"
                >
                  <motion.div className="relative">
                    {/* Pointer Arrow */}
                    <motion.div
                      className="absolute -top-3 left-1/2 lg:left-12 transform -translate-x-1/2 text-[#0607E1]"
                      initial={{ y: 0 }}
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ▼
                    </motion.div>

                    {/* Helps Text */}
                    <motion.h3
                      className="text-xl md:text-2xl lg:text-3xl font-semibold relative z-10 cursor-pointer
                        bg-gradient-to-r from-[#0607E1] via-[#0A25C9] to-[#0607E1] bg-clip-text text-transparent
                        transition-all duration-500 ease-in-out transform-gpu
                        font-outfit px-4 md:px-6 shadow-sm"
                      initial={{ rotateX: -30, y: 20, opacity: 0 }}
                      animate={{ rotateX: 0, y: 0, opacity: 1 }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10
                        }
                      }}
                    >
                      Helps
                    </motion.h3>

                    {/* Decorative underline */}
                    <motion.div
                      className="h-[2px] bg-gradient-to-r from-transparent via-[#0607E1] to-transparent mt-1"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    />
                  </motion.div>
                </motion.div>

                {/* Main Heading - Enhanced Animation */}
                <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight h-[80px] md:h-[100px] flex items-center justify-center lg:justify-start -mt-2
                    font-plusJakartaSans antialiased perspective-1000 text-black dark:text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-wrap justify-center lg:justify-start">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={textIndex}
                        initial={{
                          opacity: 0,
                          rotateX: -90,
                          y: 50
                        }}
                        animate={{
                          opacity: 1,
                          rotateX: 0,
                          y: 0
                        }}
                        exit={{
                          opacity: 0,
                          rotateX: 90,
                          y: -50
                        }}
                        transition={{
                          duration: 0.5,
                          type: "spring",
                          stiffness: 150,
                          damping: 20
                        }}
                        className="flex flex-wrap justify-center lg:justify-start transform-gpu"
                        style={{
                          backfaceVisibility: 'hidden',
                          transformStyle: 'preserve-3d'
                        }}
                      >
                        {phrases[textIndex].split(' ').map((word, index, array) => (
                          <AnimatedWord
                            key={`${textIndex}-${index}`}
                            word={word}
                            isLastWord={index === array.length - 1}
                          />
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.h1>

                {/* Buttons */}
                <motion.nav
                  className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-3 md:pt-4 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.8,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  aria-label="Primary navigation"
                >
                  <button
                    onClick={primaryButton.onClick}
                    className="relative px-4 md:px-8 py-2 md:py-3 bg-black text-white text-sm md:text-base rounded-lg hover:bg-gray-800 transition-colors duration-300 overflow-hidden group shadow-md"
                    aria-label={primaryButton.text}
                  >
                    <span className="relative z-10">{primaryButton.text}</span>
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="torch-wave absolute w-[200%] h-full top-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </div>
                  </button>
                  <button
                    onClick={secondaryButton.onClick}
                    className="relative px-4 md:px-8 py-2 md:py-3 border-2 border-black text-black text-sm md:text-base rounded-lg hover:bg-black hover:text-white transition-colors duration-300 overflow-hidden group shadow-md"
                    aria-label={secondaryButton.text}
                  >
                    <span className="relative z-10">{secondaryButton.text}</span>
                    <div className="absolute inset-0 overflow-hidden opacity-50">
                      <div className="torch-wave absolute w-[200%] h-full top-0 -left-full bg-gradient-to-r from-transparent via-black/10 to-transparent transform group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </div>
                  </button>
                </motion.nav>
              </motion.div>

            </header>
            {/* Three.js Scene Container - Replacing the Cube - Hidden on mobile */}
            <aside className="hidden md:block w-full lg:w-auto pt-2 lg:pt-0 flex justify-center lg:justify-end" aria-label="3D visualization">
              <div className="relative w-full lg:w-auto flex justify-center lg:justify-end overflow-hidden">
                <ThreeHeroScene />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
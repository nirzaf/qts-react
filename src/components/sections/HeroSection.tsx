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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const letterContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04
    }
  }
};

const cuteAnimation = {
  hidden: { 
    y: -20,
    rotateX: -45,
    opacity: 0,
    scale: 0.8
  },
  show: (i: number) => ({
    y: 0,
    rotateX: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.8,
      delay: i * 0.08
    }
  })
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const roll3DAnimation = {
  hidden: { 
    x: -1000,
    rotateX: -180,
    rotateY: -180,
    rotate: -360,
    opacity: 0,
    z: -300,
    scale: 0.5
  },
  show: (i: number) => ({
    x: 0,
    rotateX: 0,
    rotateY: 0,
    rotate: 0,
    opacity: 1,
    z: 0,
    scale: 1,
    transition: {
      x: {
        type: "spring",
        damping: 12,
        stiffness: 70,
        duration: 2,
        delay: i * 0.12
      },
      rotateX: {
        type: "spring",
        damping: 12,
        stiffness: 70,
        duration: 2,
        delay: i * 0.12
      },
      rotateY: {
        type: "spring",
        damping: 12,
        stiffness: 70,
        duration: 2,
        delay: i * 0.12
      },
      rotate: {
        type: "spring",
        damping: 12,
        stiffness: 70,
        duration: 2,
        delay: i * 0.12
      },
      opacity: {
        duration: 0.8,
        delay: i * 0.12
      },
      z: {
        type: "spring",
        damping: 12,
        stiffness: 70,
        duration: 2,
        delay: i * 0.12
      },
      scale: {
        type: "spring",
        damping: 12,
        stiffness: 70,
        duration: 2,
        delay: i * 0.12
      }
    }
  })
};

const bounceAnimation = {
  initial: { y: 0 },
  animate: { 
    y: [-2, 0],
    transition: {
      duration: 0.3,
      ease: "easeOut",
      repeat: 1
    }
  }
};

const textStyle3D = {
  textShadow: `
    1px 1px 0px #6a6a6a,
    2px 2px 0px #7a7a7a,
    3px 3px 0px #8a8a8a,
    4px 4px 8px rgba(0,0,0,0.2)
  `
};

const quadrate3DAnimation = {
  hidden: { 
    x: -1000,
    rotateX: -180,
    rotateY: -180,
    rotate: -360,
    opacity: 0,
    z: -300,
    scale: 0.5
  },
  show: (i: number) => ({
    x: 0,
    rotateX: 0,
    rotateY: 0,
    rotate: 0,
    opacity: 1,
    z: 0,
    scale: 1,
    transition: {
      x: {
        type: "spring",
        damping: 12,
        stiffness: 70,
        duration: 2,
        delay: i * 0.12
      },
      rotateX: {
        type: "spring",
        damping: 12,
        stiffness: 70,
        duration: 2,
        delay: i * 0.12
      },
      rotateY: {
        type: "spring",
        damping: 12,
        stiffness: 70,
        duration: 2,
        delay: i * 0.12
      },
      rotate: {
        type: "spring",
        damping: 12,
        stiffness: 70,
        duration: 2,
        delay: i * 0.12
      },
      opacity: {
        duration: 0.8,
        delay: i * 0.12
      },
      z: {
        type: "spring",
        damping: 12,
        stiffness: 70,
        duration: 2,
        delay: i * 0.12
      },
      scale: {
        type: "spring",
        damping: 12,
        stiffness: 70,
        duration: 2,
        delay: i * 0.12
      }
    }
  })
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroImage,
  primaryButton,
  secondaryButton
}) => {
  const companyName = "QUADRATE".split("");
  const techSolutions = "TECH SOLUTIONS".split("");

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#FFFFFF]">
      {/* Background Image with Overlay */}
      {heroImage && (
        <div className="absolute inset-0">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/95 to-[#FFFFFF]/90" />
        </div>
      )}

      <div className="container relative mx-auto px-4 pt-20 pb-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={item} className="text-center lg:text-left lg:w-1/2">
            {/* Main Title */}
            <div className="relative mb-8 overflow-hidden" style={{ perspective: '1200px' }}>
              <motion.div
                variants={letterContainer}
                className="font-montserrat font-bold tracking-tight inline-flex flex-wrap whitespace-nowrap"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* QUADRATE with Cute Animation */}
                <div className="inline-flex justify-center lg:justify-start overflow-hidden" style={{ perspective: '800px', transformStyle: 'preserve-3d' }}>
                  {companyName.map((letter, index) => (
                    <motion.div
                      key={`quadrate-${index}`}
                      className="relative"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <motion.span
                        custom={index}
                        variants={cuteAnimation}
                        initial="hidden"
                        animate="show"
                        whileHover={{ 
                          y: -5,
                          color: "#0607E1",
                          transition: { 
                            type: "spring",
                            damping: 10,
                            stiffness: 300
                          }
                        }}
                        className="text-4xl md:text-5xl lg:text-6xl text-[#000000] inline-block transform cursor-default mx-[1px]
                          hover:text-[#0607E1] transition-all duration-200 origin-bottom font-bold"
                        style={{ 
                          backfaceVisibility: 'visible',
                          transformStyle: 'preserve-3d',
                          ...textStyle3D
                        }}
                        id={`letter-${index}`}
                      >
                        {letter}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                {/* Space between words */}
                <span className="mx-3"></span>

                {/* TECH SOLUTIONS with Cute Animation */}
                <div className="inline-flex justify-center lg:justify-start overflow-hidden" style={{ perspective: '800px', transformStyle: 'preserve-3d' }}>
                  {techSolutions.map((letter, index) => (
                    <motion.div
                      key={`tech-solutions-${index}`}
                      className="relative"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <motion.span
                        custom={index}
                        variants={cuteAnimation}
                        initial="hidden"
                        animate="show"
                        whileHover={{ 
                          y: -5,
                          color: "#0607E1",
                          transition: { 
                            type: "spring",
                            damping: 10,
                            stiffness: 300
                          }
                        }}
                        className="text-2xl md:text-3xl lg:text-4xl text-[#000000] inline-block transform cursor-default mx-[1px]
                          hover:text-[#0607E1] transition-all duration-200 origin-bottom font-bold"
                        style={{ 
                          backfaceVisibility: 'visible',
                          transformStyle: 'preserve-3d',
                          ...textStyle3D
                        }}
                        id={`tech-${index}`}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              variants={item}
              className="text-xl md:text-2xl text-[#000000] mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-montserrat"
            >
              Empowering businesses with innovative technology solutions for a digital future
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={item} 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={primaryButton.onClick}
                className="group relative px-8 py-4 text-lg font-montserrat font-bold rounded-lg text-[#FFFFFF] bg-[#0607E1] 
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="relative z-10">{primaryButton.text}</span>
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div className="absolute w-[200%] h-full top-0 -left-full bg-gradient-to-r from-transparent via-[#FFFFFF]/20 to-transparent 
                    transform group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
              </button>
              <button
                onClick={secondaryButton.onClick}
                className="group relative px-8 py-4 text-lg font-montserrat font-bold rounded-lg text-[#0607E1] border-2 border-[#0607E1] 
                  hover:bg-[#0607E1]/5 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="relative z-10">{secondaryButton.text}</span>
                <div className="absolute inset-0 overflow-hidden rounded-lg opacity-50">
                  <div className="absolute w-[200%] h-full top-0 -left-full bg-gradient-to-r from-transparent via-[#0607E1]/10 to-transparent 
                    transform group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image or Additional Content */}
          {heroImage && (
            <motion.div
              variants={item}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0607E1]/10 to-transparent" />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#0607E1]/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#0607E1]/5 to-transparent blur-3xl" />
    </section>
  );
};

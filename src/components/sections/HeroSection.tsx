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

const letterAnimation = {
  hidden: { 
    opacity: 0,
    y: 20,
    rotateX: -90
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200
    }
  }
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

const rollAnimation = {
  hidden: { 
    x: -1000,
    rotate: -360,
    opacity: 0
  },
  show: (i: number) => ({
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      x: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 1.5,
        delay: i * 0.1
      },
      rotate: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 1.5,
        delay: i * 0.1
      },
      opacity: {
        duration: 0.5,
        delay: i * 0.1
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
            <div className="relative mb-8 overflow-hidden">
              <motion.div
                variants={letterContainer}
                className="font-montserrat font-bold tracking-tight inline-flex flex-wrap whitespace-nowrap"
              >
                {/* QUADRATE with Rolling Animation */}
                <div className="inline-flex justify-center lg:justify-start overflow-hidden">
                  {companyName.map((letter, index) => (
                    <motion.div
                      key={`quadrate-${index}`}
                      className="relative"
                    >
                      <motion.span
                        custom={index}
                        variants={rollAnimation}
                        initial="hidden"
                        animate="show"
                        whileHover={{ 
                          scale: 1.2,
                          color: "#0607E1",
                          transition: { duration: 0.2 }
                        }}
                        className="text-4xl md:text-5xl lg:text-6xl text-[#000000] inline-block transform cursor-default mx-[1px]
                          hover:text-[#0607E1] transition-colors duration-300 origin-bottom"
                        onAnimationComplete={() => {
                          if (index === companyName.length - 1) {
                            document.querySelectorAll('.rolling-letter').forEach((el) => {
                              (el as HTMLElement).style.animation = 'bounce 0.3s ease-out';
                            });
                          }
                        }}
                      >
                        {letter}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                {/* Space between words */}
                <span className="mx-3"></span>

                {/* TECH SOLUTIONS */}
                <div className="inline-flex justify-center lg:justify-start">
                  {techSolutions.map((letter, index) => (
                    <motion.span
                      key={`tech-solutions-${index}`}
                      variants={letterAnimation}
                      className="text-2xl md:text-3xl lg:text-4xl text-[#000000] inline-block transform cursor-default mx-[1px]
                        hover:text-[#0607E1] hover:scale-110 transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: -10,
                        color: "#0607E1",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {letter === ' ' ? '\u00A0\u00A0' : letter}
                    </motion.span>
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
      <style jsx global>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
      `}</style>
    </section>
  );
};

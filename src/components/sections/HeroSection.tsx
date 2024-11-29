import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

interface HeroSectionProps {
  backgroundImage: string;
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

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const decorativeVariants: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0.5,
    rotate: 0,
  },
  animate: {
    scale: 1,
    opacity: 0.8,
    rotate: 360,
    transition: {
      duration: 20,
      ease: "linear",
    },
  },
  whileHover: {
    scale: 1.1,
    rotate: [0, 180],
    filter: ["blur(0px)", "blur(4px)"],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
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
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-tr from-[#ECF1F5] via-[#00045C]/5 to-[#0607E1]/10"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-bl from-[#0607E1]/20 via-[#1304F9]/10 to-transparent rounded-full"
          variants={decorativeVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-tr from-[#00045C]/20 via-[#0607E1]/10 to-transparent rounded-full"
          variants={decorativeVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={item} className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 flex flex-col relative">
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
                  className="bg-gradient-to-r from-[#00045C] via-[#0607E1] to-[#1304F9] bg-clip-text text-transparent inline-block relative"
                >
                  {words[currentWord]}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00045C] to-[#0607E1]"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  />
                </motion.span>
              </div>
              <motion.span 
                className="bg-gradient-to-r from-[#00045C] via-[#0607E1] to-[#1304F9] bg-clip-text text-transparent mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Your Digital Presence
              </motion.span>
            </h1>
            <motion.p 
              className="text-xl lg:text-2xl text-[#71717A] mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Elevate your business with cutting-edge solutions that drive growth and innovation
            </motion.p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <motion.button
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00045C] to-[#0607E1] text-white font-semibold text-lg shadow-lg shadow-[#00045C]/20 hover:shadow-xl hover:shadow-[#00045C]/30 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={primaryButton.onClick}
              >
                {primaryButton.text}
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-xl border-2 border-[#00045C] text-[#00045C] font-semibold text-lg hover:bg-[#00045C]/5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.text}
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            variants={item} 
            className="relative max-w-lg mx-auto lg:mx-0"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut",
              scale: {
                type: "spring",
                stiffness: 300,
                damping: 25
              }
            }}
          >
            <div className="relative">
              <img
                src={heroImage?.src || "https://ik.imagekit.io/quadrate/assets/img/QTS%20PNG.png?updatedAt=1732728815505"}
                alt={heroImage?.alt || "Quadrate Tech Solutions"}
                className="w-full h-auto rounded-2xl shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0, 4, 92, 0.12))',
                }}
              />
              
              {/* Simple Background Glow */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-2xl opacity-40 blur-2xl"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(0, 4, 92, 0.15), transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.3, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  title?: string;
  subTitle?: string;
  primaryBtn?: string;
  primaryBtnURL?: string;
  secondaryBtn?: string;
  secondaryBtnURL?: string;
  src?: string;
  alt?: string;
}

const headlines = [
  "Innovation Redefined",
  "Future of Technology",
  "Digital Excellence",
  "Beyond Boundaries"
];

const logoVariants = {
  initial: { 
    scale: 0.9,
    opacity: 0,
    y: 30
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1], // Apple's custom easing
    }
  },
  hover: {
    scale: 1.02,
    filter: [
      "brightness(1.1) drop-shadow(0px 20px 40px rgba(0,0,0,0.2))",
      "brightness(1.15) drop-shadow(0px 25px 50px rgba(0,0,0,0.25))",
      "brightness(1.1) drop-shadow(0px 20px 40px rgba(0,0,0,0.2))"
    ],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Quadrate Tech Solutions",
  subTitle = "Your Digital Solutions Partner",
  primaryBtn = "Get Started",
  primaryBtnURL = "/contact",
  secondaryBtn = "Learn More",
  secondaryBtnURL = "/about",
  src = "",
  alt = ""
}) => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background with Gradient */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-background/90 to-background" />
        {src && (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover opacity-60"
          />
        )}
      </motion.div>

      {/* Content Container */}
      <div className="container relative z-10 flex flex-col items-center justify-center gap-8 py-20">
        {/* Logo Section */}
        <motion.div
          className="mb-16 w-full flex justify-center"
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <motion.img
            src="https://ik.imagekit.io/quadrate/assets/QTS%20PNG.png?updatedAt=1732465331710"
            alt="Quadrate Tech Solutions"
            className="w-[280px] h-auto"
            variants={logoVariants}
          />
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="text-center space-y-6"
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          {/* Animated Headlines */}
          <div className="h-32 relative overflow-hidden mb-2">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentHeadline}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight absolute w-full bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80"
              >
                {headlines[currentHeadline]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light"
            variants={contentVariants}
          >
            {subTitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12"
            variants={contentVariants}
          >
            <Link
              to={primaryBtnURL}
              className="group relative inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-all duration-300 hover:bg-opacity-90"
            >
              <span>{primaryBtn}</span>
              <motion.span
                className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                initial={{ x: -5 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </Link>
            <Link
              to={secondaryBtnURL}
              className="group inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-transparent px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
            >
              {secondaryBtn}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          className="w-1 h-12 rounded-full bg-white/20 relative overflow-hidden"
          animate={{
            backgroundColor: ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.4)", "rgba(255,255,255,0.2)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-full bg-white absolute top-0 bottom-0"
            animate={{
              y: ["0%", "100%", "0%"]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

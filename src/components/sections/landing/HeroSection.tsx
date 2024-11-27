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
        <div className="absolute inset-0 bg-gradient-to-b from-[#98CCF8]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#C0F0F9]/5 via-transparent to-[#A6ECFA]/5" />
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-[#0E0BEE] via-[#2C24F4] to-[#373FEC] bg-clip-text text-transparent"
              >
                {headlines[currentHeadline]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            className="text-lg md:text-xl text-[#373FEC]/80 text-center max-w-3xl mx-auto mt-6"
            variants={contentVariants}
          >
            {subTitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12"
            variants={contentVariants}
          >
            <Button 
              asChild
              className="relative overflow-hidden group bg-transparent hover:bg-transparent"
            >
              <a 
                href="https://quadratetechsolutions.zohobookings.com/"
                className="
                  relative px-8 py-3 rounded-full overflow-hidden
                  before:content-[''] before:absolute before:inset-0 
                  before:bg-gradient-to-br before:from-[#98CCF8]/50 before:to-[#C0F0F9]/5 
                  before:rounded-full before:backdrop-blur-md
                  after:content-[''] after:absolute after:inset-[1px]
                  after:bg-gradient-to-br after:from-[#A6ECFA]/40 after:to-transparent 
                  after:rounded-full after:backdrop-blur-sm
                  shadow-[0_0_20px_rgba(152,204,248,0.3),inset_0_0_15px_rgba(192,240,249,0.3)]
                  group-hover:shadow-[0_0_30px_rgba(152,204,248,0.4),inset_0_0_20px_rgba(192,240,249,0.4)]
                  transition-all duration-300 transform group-hover:scale-105
                "
              >
                <span className="relative z-10 text-lg font-semibold bg-gradient-to-r from-[#0E0BEE] via-[#2C24F4] to-[#373FEC] bg-clip-text text-transparent">
                  Book a Meeting
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#98CCF8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-[150%] -left-[150%] w-[400%] h-[400%] bg-gradient-to-br from-[#A6ECFA]/40 via-[#C0F0F9]/10 to-transparent rounded-full transform rotate-45 group-hover:translate-x-[60%] group-hover:translate-y-[60%] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#98CCF8]/20 via-[#C0F0F9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </a>
            </Button>
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

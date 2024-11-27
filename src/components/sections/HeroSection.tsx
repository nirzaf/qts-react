import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ButtonConfig } from '@/types';

interface HeroSectionProps {
  backgroundImage: string;
  heroImage: {
    src: string;
    alt: string;
  };
  primaryButton: ButtonConfig;
  secondaryButton: ButtonConfig;
}

const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-tr from-[#ECF1F5] via-[#98CCF8]/5 to-[#C0F0F9]/10"
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
          className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-bl from-[#98CCF8]/20 via-[#A6ECFA]/10 to-transparent rounded-full"
          variants={decorativeVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-tr from-[#C0F0F9]/20 via-[#98CCF8]/10 to-transparent rounded-full"
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
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#040BAB] via-[#373FEC] to-[#0E0BEE] bg-clip-text text-transparent">
                Transform Your Digital Presence
              </span>
            </h1>
            <motion.p 
              className="text-xl lg:text-2xl text-[#768EB4] mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Elevate your business with cutting-edge solutions that drive growth and innovation
            </motion.p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <motion.button
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#040BAB] to-[#373FEC] text-white font-semibold text-lg shadow-lg shadow-[#040BAB]/20 hover:shadow-xl hover:shadow-[#040BAB]/30 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={primaryButton.onClick}
              >
                {primaryButton.text}
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-xl border-2 border-[#040BAB] text-[#040BAB] font-semibold text-lg hover:bg-[#040BAB]/5 transition-colors"
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
            whileHover={{ 
              scale: 1.03,
              rotateY: 5,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <div className="relative z-10">
              <img
                src="https://ik.imagekit.io/quadrate/assets/img/QTS%20PNG.png?updatedAt=1732728815505"
                alt="Quadrate Tech Solutions Hero"
                className="w-full h-auto rounded-xl shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 25px 25px rgba(4, 11, 171, 0.15))',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                }}
              />
              
              {/* Floating elements */}
              <motion.div
                className="absolute -right-8 -top-8 w-20 h-20 bg-gradient-to-br from-[#040BAB] to-[#373FEC] rounded-lg opacity-20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -left-4 bottom-12 w-12 h-12 bg-gradient-to-tr from-[#373FEC] to-[#040BAB] rounded-full opacity-20"
                animate={{
                  y: [0, 10, 0],
                  x: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            {/* Enhanced background effect */}
            <div 
              className="absolute -inset-4 bg-gradient-to-r from-[#040BAB]/10 via-[#373FEC]/5 to-[#040BAB]/10 rounded-2xl blur-2xl"
              style={{ 
                zIndex: 0,
                transform: 'translateY(2%) scale(0.95)',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

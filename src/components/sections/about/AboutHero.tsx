import React from 'react';
import { motion } from 'framer-motion';

interface AboutHeroProps {
  title: string;
  subtitle: string;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ title, subtitle }) => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-[#FFFFFF] py-16 sm:py-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/quadrate/assets/img/hero-bg.png?updatedAt=1718024113863')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0607E1]/5 via-transparent to-[#0607E1]/5" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-[#000000]"
          >
            {title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-[85%] leading-normal text-[#000000]/70 sm:text-lg sm:leading-7"
          >
            {subtitle}
          </motion.p>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-1/2 -right-64 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle at center, rgba(6, 7, 225, 0.1), transparent)',
              filter: 'blur(40px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-1/2 -left-64 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle at center, rgba(6, 7, 225, 0.1), transparent)',
              filter: 'blur(40px)',
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0607E1]/10 to-transparent" />
    </motion.section>
  );
};

export default AboutHero; 
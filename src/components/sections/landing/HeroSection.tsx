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
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#ECF1F5] via-[#98CCF8]/10 to-[#C0F0F9]/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-[#98CCF8]/20 via-[#A6ECFA]/10 to-transparent rounded-full transform rotate-12 animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-[#C0F0F9]/20 via-[#98CCF8]/10 to-transparent rounded-full transform -rotate-12 animate-pulse" />
      </div>

      <div className="container relative z-10 px-4 py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-[#040BAB] sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>

          <motion.div
            className="mt-4 overflow-hidden h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentHeadline}
                className="text-xl sm:text-2xl font-medium bg-gradient-to-r from-[#5B7CCA] via-[#373FEC] to-[#0E0BEE] bg-clip-text text-transparent"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {headlines[currentHeadline]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-[#768EB4]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {subTitle}
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to={primaryBtnURL}
              className="rounded-full bg-gradient-to-r from-[#5B7CCA] to-[#373FEC] px-8 py-3 text-lg font-semibold text-white shadow-lg hover:shadow-xl hover:from-[#373FEC] hover:to-[#0E0BEE] transition-all duration-300"
            >
              {primaryBtn}
            </Link>
            <Link
              to={secondaryBtnURL}
              className="text-[#040BAB] hover:text-[#0E0BEE] px-6 py-3 text-lg font-semibold relative group"
            >
              {secondaryBtn}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0E0BEE] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

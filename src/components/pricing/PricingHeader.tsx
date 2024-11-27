import React from 'react';
import { motion } from 'framer-motion';

const PricingHeader: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-background py-16 sm:py-24"
    >
      <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/quadrate/assets/img/hero-bg.png?updatedAt=1718024113863')] bg-cover bg-center opacity-5" />
      <div className="container relative">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Choose the perfect plan for your business needs. All prices in LKR.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default PricingHeader;

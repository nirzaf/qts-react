import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ServiceHeader: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container space-y-6 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Expert IT Consultation Services
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          At Quadrate Tech Solutions, we take pride in providing comprehensive solutions and exceptional service in the IT industry. Our experienced team is dedicated to supporting your project from consultation to completion with a range of specialized services.
        </p>
        <Button asChild className="mt-8">
          <a href="https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions">
            Schedule a Consultation
          </a>
        </Button>
      </div>
    </motion.section>
  );
};

export default ServiceHeader;

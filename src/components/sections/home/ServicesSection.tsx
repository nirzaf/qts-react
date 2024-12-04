import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-16">
      {/* ... other content ... */}
      
      <motion.div
        className="text-center mt-8"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button
          asChild
          className="relative inline-flex items-center justify-center rounded-md bg-[#000000] py-2 text-sm font-medium text-[#FFFFFF] hover:bg-[#000000]/90 transition-colors duration-200 overflow-hidden group"
        >
          <a href="https://quadratetechsolutions.zohobookings.com/#/customer/quadratetechsolutions">
            <span className="relative z-10">Book a Meeting</span>
            <div className="absolute inset-0 overflow-hidden">
              <div className="torch-wave absolute w-[200%] h-full top-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </div>
          </a>
        </Button>
      </motion.div>
      
      {/* ... other content ... */}
    </section>
  );
};

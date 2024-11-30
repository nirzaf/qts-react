import React from 'react';
import { motion } from 'framer-motion';

export const ImageSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <img
        src="https://ik.imagekit.io/quadrate/tr:w-800/assets/img/about.jpg"
        alt="Quadrate Tech Solutions Team"
        className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0607E1]/10 to-transparent" />
    </motion.div>
  );
}; 
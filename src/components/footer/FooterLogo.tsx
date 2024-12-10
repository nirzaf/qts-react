import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const FooterLogo: React.FC = () => {
  return (
    <motion.div
      className="flex-shrink-0"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link to="/" className="flex items-center">
        <img
          src="https://ik.imagekit.io/quadrate/QTS%20Logo%20Primary.png?updatedAt=1733854434969"
          alt="QTS Logo"
          className="h-10 w-auto brightness-[0.7] contrast-[1.4] [filter:saturate(1.2)_hue-rotate(-10deg)]"
        />
        <span className="ml-2 text-xl font-bold text-[#000000]">QTS</span>
      </Link>
    </motion.div>
  );
}; 
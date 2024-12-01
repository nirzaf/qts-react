import React from 'react';
import { motion } from 'framer-motion';
import { ImageContentProps } from '../types';

export const ImageSection: React.FC<ImageContentProps> = ({
  className = '',
  variants,
  src = 'https://ik.imagekit.io/quadrate/assets/img/about.jpg?updatedAt=1718024112686',
  alt = 'QTS Office'
}) => {
  return (
    <motion.div
      variants={variants}
      className={`relative h-full min-h-[400px] overflow-hidden rounded-xl ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </motion.div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { StoryContentProps } from '../types';

const defaultContent = [
  "Quality Technology Solutions is a leading provider of innovative software solutions, dedicated to transforming businesses through cutting-edge technology.",
  "Founded with a vision to bridge the gap between complex technical challenges and elegant solutions, we've grown into a trusted partner for organizations seeking digital excellence.",
  "Our journey is marked by continuous innovation, unwavering commitment to quality, and a deep understanding of our clients' needs."
];

export const StorySection: React.FC<StoryContentProps> = ({ 
  className = '',
  variants,
  title = "Our Story",
  content = defaultContent
}) => {
  return (
    <motion.div
      variants={variants}
      className={`space-y-6 ${className}`}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
      <div className="space-y-4">
        {content.map((paragraph, index) => (
          <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

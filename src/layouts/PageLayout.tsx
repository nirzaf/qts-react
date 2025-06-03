import React from 'react';
import { motion } from 'framer-motion';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  className = '', 
  title,
  subtitle
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const elementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <motion.div 
        className={`flex-grow bg-background ${className}`} // Use bg-background for a pure white canvas
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-16"
          variants={containerVariants}
        >
          {(title || subtitle) && (
            <motion.div 
              className="text-center mb-16"
              variants={elementVariants}
            >
              {title && (
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-intergalactic-highway"> {/* Updated title color */}
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-denim text-lg max-w-2xl mx-auto"> {/* Updated subtitle color */}
                  {subtitle}
                </p>
              )}
            </motion.div>
          )}

          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PageLayout;

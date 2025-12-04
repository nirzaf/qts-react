import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = '#0607E1',
  text = 'Loading...'
}) => {
  // Size mapping
  const sizeMap = {
    small: {
      container: 'h-8 w-8',
      text: 'text-sm',
      wrapper: 'py-2'
    },
    medium: {
      container: 'h-12 w-12',
      text: 'text-base',
      wrapper: 'py-4'
    },
    large: {
      container: 'h-16 w-16',
      text: 'text-lg',
      wrapper: 'py-6'
    }
  };

  const selectedSize = sizeMap[size];

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className={`${selectedSize.wrapper} flex flex-col items-center justify-center`}>
        <motion.div
          className={`${selectedSize.container} border-4 rounded-full border-t-transparent`}
          style={{ borderColor: `${color}33`, borderTopColor: color }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear' as const
          }}
          role="status"
          aria-label="Loading"
        />
        {text && (
          <p className={`mt-4 ${selectedSize.text} text-gray-600 font-medium`}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner;

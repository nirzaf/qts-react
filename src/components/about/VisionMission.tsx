import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import { HyperspaceBackground } from '@/components/animations/HyperspaceBackground';

export const VisionMission: React.FC = () => {
  return (
    <div className="relative container py-12 overflow-hidden">
      {/* Hyperspace Background - Very subtle */}
      <HyperspaceBackground
        speed={0.6}
        opacity={0.08}
        interactiveBoost={false}
        zIndex={0}
      />
      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.2 }
          }}
          className="p-6 border rounded-lg hover:shadow-lg hover:border-[#0607E1]/20 transition-all duration-300 bg-white dark:bg-[#0f0f0f] border-gray-200 dark:border-white/10 text-gray-900 dark:text-white"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <motion.span 
              className="p-2 bg-gray-100 dark:bg-white/10 rounded-full"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(6, 7, 225, 0.15)" 
              }}
              transition={{ duration: 0.2 }}
            >
              <Eye className="w-6 h-6 text-[#0607E1] dark:text-white" />
            </motion.span>
            Our Vision
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            To accelerate the technology context and swap to the mobile and reliable approach.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.2 }
          }}
          className="p-6 border rounded-lg hover:shadow-lg hover:border-[#0607E1]/20 transition-all duration-300 bg-white dark:bg-[#0f0f0f] border-gray-200 dark:border-white/10 text-gray-900 dark:text-white"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <motion.span 
              className="p-2 bg-gray-100 dark:bg-white/10 rounded-full"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(6, 7, 225, 0.15)" 
              }}
              transition={{ duration: 0.2 }}
            >
              <Target className="w-6 h-6 text-[#0607E1] dark:text-white" />
            </motion.span>
            Our Mission
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            To deliver technology services - both in the Software & Hardware wherever we will be.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

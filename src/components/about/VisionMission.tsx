import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

export const VisionMission: React.FC = () => {
  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.2 }
          }}
          className="p-6 border rounded-lg hover:shadow-lg hover:border-[#0607E1]/20 transition-all duration-300"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
            <motion.span 
              className="p-2 bg-gray-100 rounded-full"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(219, 234, 254, 1)" 
              }}
              transition={{ duration: 0.2 }}
            >
              <Eye className="w-6 h-6 text-[#0607E1]" />
            </motion.span>
            Our Vision
          </h2>
          <p className="text-gray-600">
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
          className="p-6 border rounded-lg hover:shadow-lg hover:border-[#0607E1]/20 transition-all duration-300"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
            <motion.span 
              className="p-2 bg-gray-100 rounded-full"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(219, 234, 254, 1)" 
              }}
              transition={{ duration: 0.2 }}
            >
              <Target className="w-6 h-6 text-[#0607E1]" />
            </motion.span>
            Our Mission
          </h2>
          <p className="text-gray-600">
            To deliver technology services - both in the Software & Hardware wherever we will be.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
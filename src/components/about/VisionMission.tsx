import React from 'react';
import { motion } from 'framer-motion';

export const VisionMission: React.FC = () => {
  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 border rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="p-2 bg-gray-100 rounded-full">
              {/* Vision Icon */}
            </span>
            Our Vision
          </h3>
          <p className="text-gray-600">
            To accelerate the technology context and swap to the mobile and reliable approach.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 border rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="p-2 bg-gray-100 rounded-full">
              {/* Mission Icon */}
            </span>
            Our Mission
          </h3>
          <p className="text-gray-600">
            To deliver technology services - both in the Software & Hardware wherever we will be.
          </p>
        </motion.div>
      </div>
    </div>
  );
}; 
import React from 'react';
import { motion } from 'framer-motion';
import { FiSettings, FiPhone } from 'react-icons/fi';

const CustomSolutionCard: React.FC = () => {
  return (
    <motion.div
      className="p-8 rounded-2xl border-2 border-[#000000]/10 bg-[#FFFFFF]"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start space-x-6">
        <div className="p-3 bg-[#000000]/5 rounded-xl">
          <FiSettings size={24} className="text-[#000000]" />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-[#000000] mb-2">Custom Solution</h3>
          <p className="text-[#000000]/60 mb-4">
            Need a tailored solution? Let's discuss your specific requirements and create a custom plan that perfectly fits your needs.
          </p>
          <motion.button
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#000000]/5 text-[#000000] rounded-xl hover:bg-[#000000]/10 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiPhone size={20} />
            <span>Schedule a Call</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomSolutionCard;

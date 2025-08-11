'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const AIHighlightBanner: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] text-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white font-medium text-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Innovation
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>

          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join the AI revolution and unlock unprecedented growth opportunities with our cutting-edge artificial intelligence solutions.
          </p>

          <motion.button
            className="inline-flex items-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore AI Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AIHighlightBanner;
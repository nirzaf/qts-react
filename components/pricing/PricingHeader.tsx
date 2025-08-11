'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

const PricingHeader: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#F8FAFF] via-[#FFFFFF] to-[#F0F4FF] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0607E1]/20 to-[#4D0AFF]/10 rounded-full blur-3xl"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#0607E1]/15 to-[#00D4FF]/10 rounded-full blur-3xl"
          animate={{
            y: [0, 10, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-[#0607E1]/10 rounded-full text-[#0607E1] font-medium text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <DollarSign className="w-4 h-4 mr-2" />
            Transparent Pricing
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-[#000000]">Simple, Fair </span>
            <span className="bg-gradient-to-r from-[#0607E1] via-[#4D0AFF] to-[#0607E1] bg-clip-text text-transparent">
              Pricing
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            No hidden fees, no surprises. Choose the perfect plan for your project 
            or get a custom quote tailored to your specific needs.
          </motion.p>

          {/* Value Propositions */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              {
                title: 'No Hidden Costs',
                description: 'What you see is what you pay. All costs are transparent and upfront.'
              },
              {
                title: 'Flexible Payment',
                description: 'Multiple payment options and milestone-based billing available.'
              },
              {
                title: 'Money-Back Guarantee',
                description: '30-day satisfaction guarantee on all our services.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#0607E1] text-white font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#0607E1] to-[#4D0AFF]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>

            <motion.button
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#0607E1] text-[#0607E1] font-semibold rounded-full hover:bg-[#0607E1] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingHeader;
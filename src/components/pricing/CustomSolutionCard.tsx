import React from 'react';
import { motion } from 'framer-motion';
import { FiSettings, FiPhone, FiArrowRight, FiCheck } from 'react-icons/fi';

const CustomSolutionCard: React.FC = () => {
  const benefits = [
    "Tailored to your specific business needs",
    "Dedicated support team",
    "Flexible scaling options",
    "Custom integrations"
  ];

  return (
    <motion.div
      className="p-8 rounded-2xl border-2 border-border dark:border-white/20 bg-card dark:bg-gray-800 relative overflow-hidden group"
      whileHover={{ y: -5 }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0607E1]/5 via-transparent to-[#0607E1]/5 dark:from-white/5 dark:via-transparent dark:to-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />

      <div className="relative z-10 flex flex-col md:flex-row gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-muted dark:bg-white/10 rounded-xl">
              <FiSettings size={24} className="text-primary dark:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground dark:text-white dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]">Custom Enterprise Solution</h3>
          </div>

          <p className="text-muted-foreground dark:text-white/70 mb-6 text-lg dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            Looking for a solution that's uniquely yours? Let's create something extraordinary together.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="p-1 rounded-full bg-primary/10 dark:bg-white/20">
                  <FiCheck className="text-primary dark:text-white w-4 h-4" />
                </div>
                <span className="text-muted-foreground dark:text-white/70">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Content - CTA Section */}
        <div className="flex flex-col justify-center items-center md:items-end space-y-4">
          <motion.a
            href="https://quadratetechsolutions1.zohobookings.com/#/quadratetechsolutions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background dark:bg-white dark:text-[#0607E1] rounded-xl hover:bg-foreground/90 dark:hover:bg-white/90 transition-colors group/button dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiPhone size={20} />
            <span>Schedule a Consultation</span>
            <FiArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-1" />
          </motion.a>

          <p className="text-sm text-muted-foreground dark:text-white/60 text-center md:text-right">
            Free consultation • No commitment required
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#0607E1]/5 dark:bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
};

export default CustomSolutionCard;

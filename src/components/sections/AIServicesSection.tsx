'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { getServicesByCategory, getAllCategories, getCategoryTitle, getCategoryDescription } from '@/data/aiServices';
import { WarpVoidBackground } from '@/components/animations/WarpVoidBackground';

const AIServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'strategy' | 'development' | 'integration' | 'data' | 'packaged'>('strategy');
  const categories = getAllCategories();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-muted to-background overflow-hidden" id="ai-services">
      {/* Warp Void Background - Subtle AI atmosphere */}
      <WarpVoidBackground
        variant="blue-purple"
        speed={0.6}
        opacity={0.25}
        density="low"
        mouseTracking={false}
        zIndex={0}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-[#0607E1] dark:text-white mr-3" />
            <span className="text-[#0607E1] dark:text-white font-semibold text-lg dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">AI-Powered Solutions</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
          >
            Artificial Intelligence Services
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground dark:text-white/80 max-w-3xl mx-auto dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
          >
            Transform your business with cutting-edge AI solutions. From strategic consulting to custom model development,
            we help you harness the power of artificial intelligence.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg dark:bg-white dark:text-[#0607E1] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                  : 'bg-card text-muted-foreground dark:text-white/70 hover:bg-primary/10 hover:text-primary dark:hover:bg-white/10 dark:hover:text-white border border-border dark:border-white/20'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {getCategoryTitle(category)}
            </motion.button>
          ))}
        </motion.div>

        {/* Category Description */}
        <motion.div
          key={`description-${activeCategory}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-muted-foreground dark:text-white/70 max-w-2xl mx-auto dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            {getCategoryDescription(activeCategory)}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          key={`grid-${activeCategory}`}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {getServicesByCategory(activeCategory).map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-card dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border dark:border-white/10"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <motion.div
                  className="mb-6 inline-flex"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="p-4 rounded-xl bg-primary/5 dark:bg-white/10 group-hover:bg-primary/10 dark:group-hover:bg-white/20 transition-colors duration-300">
                    {React.createElement(service.icon, {
                      className: "w-8 h-8 text-primary dark:text-white/90",
                      "aria-hidden": "true"
                    })}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground dark:text-white group-hover:text-primary dark:group-hover:text-white/95 transition-colors duration-300 dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground dark:text-white/70 mb-6 leading-relaxed dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground dark:text-white/60">
                      <ChevronRight className="w-4 h-4 text-primary dark:text-white/80 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <motion.div
                  className="flex items-center text-primary dark:text-white font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mt-16"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-foreground dark:text-white mb-4 dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-muted-foreground dark:text-white/70 mb-8 max-w-2xl mx-auto dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              Let's discuss how our AI solutions can drive innovation and growth for your organization.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground dark:bg-white dark:text-[#0607E1] font-semibold rounded-full hover:bg-primary/90 dark:hover:bg-white/90 transition-colors duration-300 shadow-lg hover:shadow-xl dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started with AI
              <ChevronRight className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIServicesSection;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { getServicesByCategory, getAllCategories, getCategoryTitle, getCategoryDescription } from '@/data/aiServices';

const AIServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'strategy' | 'development' | 'integration' | 'data' | 'packaged'>('strategy');
  const categories = getAllCategories();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-[#FFFFFF]" id="ai-services">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-[#0607E1] mr-3" />
            <span className="text-[#0607E1] font-semibold text-lg">AI-Powered Solutions</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#000000] mb-6"
          >
            Artificial Intelligence Services
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-[#000000]/70 max-w-3xl mx-auto"
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
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#0607E1] text-white shadow-lg'
                  : 'bg-white text-[#000000]/70 hover:bg-[#0607E1]/10 hover:text-[#0607E1]'
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
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-[#000000]/60 max-w-2xl mx-auto">
            {getCategoryDescription(activeCategory)}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          key={activeCategory}
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
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#0607E1]/5"
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
                  <div className="p-4 rounded-xl bg-[#0607E1]/5 group-hover:bg-[#0607E1]/10 transition-colors duration-300">
                    {React.createElement(service.icon, {
                      className: "w-8 h-8 text-[#0607E1]",
                      "aria-hidden": "true"
                    })}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-[#000000] group-hover:text-[#0607E1] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#000000]/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-[#000000]/60">
                      <ChevronRight className="w-4 h-4 text-[#0607E1] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <motion.div
                  className="flex items-center text-[#0607E1] font-semibold group-hover:translate-x-2 transition-transform duration-300"
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
            <h3 className="text-2xl font-bold text-[#000000] mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-[#000000]/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive innovation and growth for your organization.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#0607E1] text-white font-semibold rounded-full hover:bg-[#0607E1]/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
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

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, ArrowRight, Zap, Bot, Eye } from 'lucide-react';

const AIHighlightBanner: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Strategy',
      description: 'Strategic AI adoption guidance'
    },
    {
      icon: Bot,
      title: 'Generative AI',
      description: 'Content & code generation'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image & video analysis'
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Seamless system integration'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-16 bg-gradient-to-r from-[#0607E1] via-[#0607E1]/90 to-[#0607E1] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-indigo-600/20" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-yellow-300 mr-3 animate-pulse" />
            <span className="text-yellow-300 font-semibold text-lg">New AI Services</span>
            <Sparkles className="w-8 h-8 text-yellow-300 ml-3 animate-pulse" />
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Transform Your Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Artificial Intelligence
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/90 mb-12 max-w-3xl mx-auto"
          >
            Harness the power of AI to automate processes, gain insights, and drive innovation. 
            From machine learning to computer vision, we deliver cutting-edge AI solutions.
          </motion.p>

          {/* Features Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#ai-services"
              className="inline-flex items-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore AI Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
            
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0607E1] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get AI Consultation
              <Brain className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">15+</div>
              <div className="text-white/70 text-sm">AI Services</div>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">5</div>
              <div className="text-white/70 text-sm">AI Categories</div>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
              <div className="text-white/70 text-sm">AI Support</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIHighlightBanner;

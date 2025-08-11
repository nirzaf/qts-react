'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Eye, MessageSquare, BarChart3, Bot, Cpu } from 'lucide-react';

const AIServicesSection: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Strategic AI implementation roadmaps tailored to your business objectives.',
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis for automation and insights.',
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Text analysis, chatbots, and language understanding solutions.',
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Data-driven forecasting and business intelligence solutions.',
    },
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'Automate complex processes with AI-powered workflows.',
    },
    {
      icon: Cpu,
      title: 'Machine Learning Models',
      description: 'Custom ML models for classification, regression, and clustering.',
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] bg-clip-text text-transparent">
              AI Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to drive innovation and efficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIServicesSection;
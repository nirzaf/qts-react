'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Globe, Smartphone, Database, Cloud } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions, ML models, and intelligent automation for your business.',
      features: ['Computer Vision', 'Natural Language Processing', 'Predictive Analytics']
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices.',
      features: ['Web Applications', 'Desktop Software', 'API Development']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Responsive, fast, and SEO-optimized websites that drive business growth.',
      features: ['React/Next.js', 'E-commerce', 'CMS Solutions']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'Native Development']
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Transform your data into actionable insights with our data solutions.',
      features: ['Data Pipelines', 'Analytics', 'Business Intelligence']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS/Azure', 'DevOps', 'Microservices']
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
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions to accelerate your digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0607E1]/10 to-[#4D0AFF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-[#0607E1]" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#0607E1] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Globe, Database, Cpu, Network } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to transform your business processes and decision-making.',
      color: '#0607E1'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with modern technologies to meet your specific business needs.',
      color: '#10B981'
    },
    {
      icon: Globe,
      title: 'Web Solutions',
      description: 'Responsive, scalable web applications that deliver exceptional user experiences across all devices.',
      color: '#06B6D4'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Transform raw data into actionable insights with our comprehensive data engineering services.',
      color: '#F59E0B'
    },
    {
      icon: Cpu,
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure solutions that grow with your business and optimize performance.',
      color: '#8B5CF6'
    },
    {
      icon: Network,
      title: 'System Integration',
      description: 'Seamlessly connect your existing systems and applications for improved efficiency and workflow.',
      color: '#EF4444'
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
              Our Core Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive suite of services that make us your ideal technology partner
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <IconComponent 
                      className="w-8 h-8" 
                      style={{ color: feature.color }}
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect background */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}05, ${feature.color}10)`
                  }}
                />

                {/* Border gradient on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20, transparent)`,
                    padding: '1px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude'
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
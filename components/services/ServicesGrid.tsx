'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Shield, 
  BarChart3,
  Bot,
  Eye,
  MessageSquare,
  Cpu
} from 'lucide-react';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions, ML models, and intelligent automation to transform your business processes.',
      features: [
        'Machine Learning Models',
        'Computer Vision',
        'Natural Language Processing',
        'Predictive Analytics',
        'AI Strategy Consulting'
      ],
      color: '#0607E1',
      popular: true
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices.',
      features: [
        'Full-Stack Development',
        'API Development',
        'Database Design',
        'System Integration',
        'Legacy Modernization'
      ],
      color: '#10B981',
      popular: false
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Responsive, fast, and SEO-optimized websites that drive business growth.',
      features: [
        'React/Next.js Applications',
        'E-commerce Solutions',
        'CMS Development',
        'Progressive Web Apps',
        'SEO Optimization'
      ],
      color: '#06B6D4',
      popular: false
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'React Native Apps',
        'Flutter Development',
        'Native iOS/Android',
        'App Store Optimization',
        'Mobile UI/UX Design'
      ],
      color: '#F59E0B',
      popular: false
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Transform your data into actionable insights with comprehensive data solutions.',
      features: [
        'Data Pipeline Development',
        'ETL/ELT Processes',
        'Data Warehousing',
        'Business Intelligence',
        'Real-time Analytics'
      ],
      color: '#8B5CF6',
      popular: false
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: [
        'AWS/Azure/GCP',
        'Cloud Migration',
        'DevOps & CI/CD',
        'Microservices Architecture',
        'Container Orchestration'
      ],
      color: '#EF4444',
      popular: false
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Identity Management',
        'Incident Response'
      ],
      color: '#DC2626',
      popular: false
    },
    {
      icon: BarChart3,
      title: 'Digital Transformation',
      description: 'Strategic technology consulting to modernize and optimize your business.',
      features: [
        'Digital Strategy',
        'Process Automation',
        'Technology Assessment',
        'Change Management',
        'ROI Optimization'
      ],
      color: '#059669',
      popular: false
    }
  ];

  const aiServices = [
    {
      icon: Bot,
      title: 'Generative AI',
      description: 'Custom GPT models, chatbots, and content generation solutions.'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual analytics.'
    },
    {
      icon: MessageSquare,
      title: 'NLP & LLM',
      description: 'Text analysis, sentiment analysis, and language models.'
    },
    {
      icon: Cpu,
      title: 'MLOps',
      description: 'ML pipeline automation, model deployment, and monitoring.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
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
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className={`group relative p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border ${
                  service.popular 
                    ? 'bg-gradient-to-br from-[#0607E1]/5 to-[#4D0AFF]/5 border-[#0607E1]/20 scale-105' 
                    : 'bg-white border-gray-100'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-8">
                    <div className="bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-6">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <IconComponent 
                      className="w-10 h-10" 
                      style={{ color: service.color }}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center text-gray-700"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        >
                          <div 
                            className="w-2 h-2 rounded-full mr-3"
                            style={{ backgroundColor: service.color }}
                          ></div>
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      className="mt-6 inline-flex items-center text-sm font-semibold hover:underline transition-all duration-300"
                      style={{ color: service.color }}
                      whileHover={{ x: 5 }}
                    >
                      Learn More →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI Services Highlight */}
        <motion.div
          className="bg-gradient-to-r from-[#0607E1]/5 to-[#4D0AFF]/5 rounded-3xl p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] bg-clip-text text-transparent">
                Specialized AI Services
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced artificial intelligence solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-2xl flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-gray-900">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
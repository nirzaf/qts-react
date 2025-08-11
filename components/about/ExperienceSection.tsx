'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Users, TrendingUp, Code, Brain, Globe, Shield } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to transform businesses through technology',
      icon: Calendar
    },
    {
      year: '2021',
      title: 'First AI Project',
      description: 'Delivered our first machine learning solution for predictive analytics',
      icon: Brain
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Extended services to international clients across 15+ countries',
      icon: Globe
    },
    {
      year: '2023',
      title: 'AI Specialization',
      description: 'Became certified AI solution provider with advanced ML capabilities',
      icon: Award
    },
    {
      year: '2024',
      title: 'Enterprise Solutions',
      description: 'Launched enterprise-grade AI and cloud solutions platform',
      icon: TrendingUp
    }
  ];

  const expertise = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Machine Learning, Deep Learning, Computer Vision, NLP',
      projects: '25+',
      color: '#0607E1'
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Full-stack development, Mobile apps, Web applications',
      projects: '50+',
      color: '#10B981'
    },
    {
      icon: Globe,
      title: 'Cloud Solutions',
      description: 'AWS, Azure, Google Cloud, DevOps, Microservices',
      projects: '30+',
      color: '#06B6D4'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security audits, Penetration testing, Compliance',
      projects: '15+',
      color: '#F59E0B'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
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
              Our Journey & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five years of innovation, growth, and delivering exceptional technology solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Milestones
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0607E1] to-[#4D0AFF] rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="text-2xl font-bold text-[#0607E1] mb-2">
                          {milestone.year}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                          {milestone.title}
                        </h4>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="w-2/12 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Areas of Expertise
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((area, index) => {
              const IconComponent = area.icon;
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
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${area.color}15` }}
                  >
                    <IconComponent 
                      className="w-8 h-8" 
                      style={{ color: area.color }}
                    />
                  </div>

                  <h4 className="text-xl font-bold mb-3 text-gray-900">
                    {area.title}
                  </h4>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Projects</span>
                    <span 
                      className="text-2xl font-bold"
                      style={{ color: area.color }}
                    >
                      {area.projects}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mt-20 text-center p-12 bg-gradient-to-r from-[#0607E1]/5 to-[#4D0AFF]/5 rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-2xl flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Our Expert Team
          </h3>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our diverse team of 25+ professionals brings together expertise in AI, software 
            development, cloud computing, and digital strategy to deliver exceptional results.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { role: 'AI/ML Engineers', count: '8+', description: 'Specialized in machine learning and AI solutions' },
              { role: 'Full-Stack Developers', count: '12+', description: 'Expert in modern web and mobile technologies' },
              { role: 'DevOps & Cloud Specialists', count: '5+', description: 'Focused on scalable infrastructure solutions' }
            ].map((team, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-[#0607E1] mb-2">
                  {team.count}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {team.role}
                </h4>
                <p className="text-sm text-gray-600">
                  {team.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
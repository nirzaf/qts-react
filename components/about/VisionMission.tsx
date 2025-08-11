'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Compass, Rocket } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
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
              Vision & Mission
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our guiding principles that shape our future and drive our daily actions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Vision */}
          <motion.div
            className="relative p-8 bg-gradient-to-br from-[#0607E1]/5 to-[#4D0AFF]/5 rounded-2xl border border-[#0607E1]/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-2xl flex items-center justify-center mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To be the leading technology partner that transforms businesses through innovative 
              AI-powered solutions, making advanced technology accessible and practical for 
              organizations of all sizes.
            </p>
            <div className="space-y-3">
              {[
                'Global technology leadership',
                'AI accessibility for all businesses',
                'Sustainable digital transformation',
                'Innovation-driven growth'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-[#0607E1] rounded-full mr-3"></div>
                  {point}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="relative p-8 bg-gradient-to-br from-[#10B981]/5 to-[#06B6D4]/5 rounded-2xl border border-[#10B981]/10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#06B6D4] rounded-2xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              efficiency, and innovation. We deliver exceptional value through AI-powered 
              applications, custom software development, and strategic technology consulting.
            </p>
            <div className="space-y-3">
              {[
                'Deliver exceptional technology solutions',
                'Foster long-term client partnerships',
                'Drive business growth through innovation',
                'Maintain highest quality standards'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-[#10B981] rounded-full mr-3"></div>
                  {point}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Principles */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-gray-900">
            Our Core Principles
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Compass,
                title: 'Integrity',
                description: 'We conduct business with honesty, transparency, and ethical practices.',
                color: '#0607E1'
              },
              {
                icon: Rocket,
                title: 'Innovation',
                description: 'We continuously explore new technologies and creative solutions.',
                color: '#10B981'
              },
              {
                icon: Target,
                title: 'Excellence',
                description: 'We strive for perfection in every project and client interaction.',
                color: '#F59E0B'
              },
              {
                icon: Eye,
                title: 'Vision',
                description: 'We think ahead and anticipate future technology trends.',
                color: '#8B5CF6'
              }
            ].map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: `${principle.color}15` }}
                  >
                    <IconComponent 
                      className="w-7 h-7" 
                      style={{ color: principle.color }}
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900">
                    {principle.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
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

export default VisionMission;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe } from 'lucide-react';

const QuadrateAboutSection: React.FC = () => {
  const stats = [
    { icon: Users, number: '25+', label: 'Team Members', description: 'Expert professionals' },
    { icon: Target, number: '50+', label: 'Projects', description: 'Successfully delivered' },
    { icon: Award, number: '5+', label: 'Years', description: 'Industry experience' },
    { icon: Globe, number: '15+', label: 'Countries', description: 'Clients served' }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#F8FAFF] to-[#F0F4FF]">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-[#0607E1]/10 rounded-full text-[#0607E1] font-medium text-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            About Quadrate Tech Solutions
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[#000000]">Transforming Ideas into </span>
            <span className="bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a forward-thinking technology company specializing in AI-powered solutions, 
            custom software development, and digital transformation services. Our mission is to 
            empower businesses with innovative technology that drives growth and efficiency.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Founded in 2020, Quadrate Tech Solutions emerged from a vision to bridge the gap 
                between cutting-edge technology and practical business solutions. We started as a 
                small team of passionate developers and have grown into a comprehensive technology 
                partner for businesses worldwide.
              </p>
              <p>
                Our journey began with a simple belief: technology should empower, not complicate. 
                This philosophy drives everything we do, from our AI-powered solutions to our 
                custom software development services.
              </p>
              <p>
                Today, we&apos;re proud to be at the forefront of the AI revolution, helping businesses 
                harness the power of artificial intelligence, machine learning, and modern web 
                technologies to achieve unprecedented growth and efficiency.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0607E1]/10 to-[#4D0AFF]/10 p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center p-6 bg-white rounded-xl shadow-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-xl flex items-center justify-center mb-4 mx-auto">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-[#0607E1] mb-2">
                        {stat.number}
                      </div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.description}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            What Drives Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our core values shape every decision we make and every solution we deliver
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'We embrace cutting-edge technologies and innovative approaches to solve complex challenges.',
                color: '#0607E1'
              },
              {
                title: 'Client Success',
                description: 'Your success is our success. We work as partners to achieve your business objectives.',
                color: '#10B981'
              },
              {
                title: 'Quality Excellence',
                description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
                color: '#F59E0B'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <div 
                    className="w-8 h-8 rounded-lg"
                    style={{ backgroundColor: value.color }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuadrateAboutSection;
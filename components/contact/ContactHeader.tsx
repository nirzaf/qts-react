'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const ContactHeader: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#F8FAFF] via-[#FFFFFF] to-[#F0F4FF] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0607E1]/20 to-[#4D0AFF]/10 rounded-full blur-3xl"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#0607E1]/15 to-[#00D4FF]/10 rounded-full blur-3xl"
          animate={{
            y: [0, 10, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-[#0607E1]/10 rounded-full text-[#0607E1] font-medium text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Get in Touch
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-[#000000]">Let's Build Something </span>
            <span className="bg-gradient-to-r from-[#0607E1] via-[#4D0AFF] to-[#0607E1] bg-clip-text text-transparent">
              Amazing Together
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to transform your business with cutting-edge technology? 
            We're here to help you every step of the way.
          </motion.p>

          {/* Quick Contact Info */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              {
                icon: Phone,
                title: 'Call Us',
                info: '+94 81 424 2615',
                description: 'Mon-Fri 9AM-5PM'
              },
              {
                icon: Mail,
                title: 'Email Us',
                info: 'info@quadrate.lk',
                description: '24/7 Response'
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                info: 'Akurana, Kandy',
                description: 'Sri Lanka'
              }
            ].map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.div
                  key={index}
                  className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-[#0607E1] font-semibold mb-1">
                    {contact.info}
                  </p>
                  <p className="text-sm text-gray-600">
                    {contact.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Response Time Promise */}
        <motion.div
          className="text-center p-8 bg-gradient-to-r from-[#0607E1]/5 to-[#4D0AFF]/5 rounded-2xl border border-[#0607E1]/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Our Promise to You
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { time: '< 2 Hours', description: 'Initial Response' },
              { time: '< 24 Hours', description: 'Detailed Proposal' },
              { time: '< 1 Week', description: 'Project Kickoff' }
            ].map((promise, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#0607E1] mb-2">
                  {promise.time}
                </div>
                <div className="text-gray-600">
                  {promise.description}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHeader;
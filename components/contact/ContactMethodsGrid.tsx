'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Calendar, 
  Clock, 
  Users,
  Headphones,
  FileText
} from 'lucide-react';

const ContactMethodsGrid: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts for immediate assistance.',
      contact: '+94 81 424 2615',
      availability: 'Mon-Fri 9AM-5PM',
      color: '#0607E1',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive responses.',
      contact: 'info@quadrate.lk',
      availability: '24/7 Response',
      color: '#10B981',
      action: 'Send Email'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team in real-time for quick answers.',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-5PM',
      color: '#06B6D4',
      action: 'Start Chat'
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Book a consultation call at your convenience.',
      contact: 'Online booking',
      availability: 'Flexible timing',
      color: '#F59E0B',
      action: 'Book Meeting'
    }
  ];

  const supportTypes = [
    {
      icon: Users,
      title: 'Sales Inquiries',
      description: 'Get quotes and discuss project requirements.',
      email: 'sales@quadrate.lk'
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Get help with existing projects and technical issues.',
      email: 'support@quadrate.lk'
    },
    {
      icon: FileText,
      title: 'General Information',
      description: 'Learn more about our services and capabilities.',
      email: 'info@quadrate.lk'
    },
    {
      icon: Clock,
      title: 'Emergency Support',
      description: 'Critical issues and urgent project needs.',
      email: 'emergency@quadrate.lk'
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
              Multiple Ways to Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the communication method that works best for you
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${method.color}15` }}
                >
                  <IconComponent 
                    className="w-8 h-8" 
                    style={{ color: method.color }}
                  />
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {method.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {method.description}
                </p>

                <div className="mb-4">
                  <div 
                    className="font-semibold mb-1"
                    style={{ color: method.color }}
                  >
                    {method.contact}
                  </div>
                  <div className="text-sm text-gray-500">
                    {method.availability}
                  </div>
                </div>

                <motion.button
                  className="w-full py-3 rounded-xl font-semibold transition-all duration-300 border-2"
                  style={{
                    borderColor: method.color,
                    color: method.color
                  }}
                  whileHover={{
                    backgroundColor: method.color,
                    color: 'white',
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {method.action}
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Support Types */}
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
                Specialized Support
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get connected with the right team for your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTypes.map((support, index) => {
              const IconComponent = support.icon;
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
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-gray-900">
                    {support.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {support.description}
                  </p>
                  <div className="text-[#0607E1] font-semibold text-sm">
                    {support.email}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Response Time Guarantee */}
        <motion.div
          className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Our Response Time Guarantee
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { time: '< 2 Hours', type: 'Email & Form', description: 'Initial acknowledgment' },
              { time: '< 30 Minutes', type: 'Phone & Chat', description: 'Live response during business hours' },
              { time: '< 15 Minutes', type: 'Emergency', description: 'Critical issues for existing clients' }
            ].map((guarantee, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-[#0607E1] mb-2">
                  {guarantee.time}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {guarantee.type}
                </div>
                <div className="text-sm text-gray-600">
                  {guarantee.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMethodsGrid;
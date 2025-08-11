'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Calendar, 
  Calculator, 
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Zap
} from 'lucide-react';

const CustomSolutionCard: React.FC = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Get a dedicated team of experts working exclusively on your project.'
    },
    {
      icon: Clock,
      title: 'Flexible Timeline',
      description: 'Work with timelines that fit your business needs and constraints.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security measures and compliance for enterprise clients.'
    },
    {
      icon: Zap,
      title: 'Scalable Solutions',
      description: 'Build solutions that grow with your business and adapt to changes.'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery Call',
      description: 'We discuss your requirements, goals, and technical needs in detail.',
      duration: '30-60 minutes'
    },
    {
      step: '2',
      title: 'Technical Assessment',
      description: 'Our team analyzes your project and creates a comprehensive technical plan.',
      duration: '2-3 days'
    },
    {
      step: '3',
      title: 'Custom Proposal',
      description: 'Receive a detailed proposal with timeline, costs, and deliverables.',
      duration: '1-2 days'
    },
    {
      step: '4',
      title: 'Project Kickoff',
      description: 'Once approved, we begin development with regular updates and milestones.',
      duration: 'Same week'
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
              Need a Custom Solution?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every business is unique. Let us create a tailored solution that perfectly fits your requirements and budget.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-900">
              Why Choose Custom Development?
            </h3>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-gray-900">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - CTA Card */}
          <motion.div
            className="bg-gradient-to-br from-[#0607E1]/5 to-[#4D0AFF]/5 rounded-3xl p-8 border border-[#0607E1]/10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calculator className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Get Your Custom Quote
              </h3>
              <p className="text-gray-600 mb-8">
                Tell us about your project and receive a detailed proposal within 24 hours.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                'Free initial consultation',
                'Detailed technical assessment',
                'Transparent pricing breakdown',
                'No obligation to proceed'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-[#0607E1] mr-3" />
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <motion.button
                className="w-full py-4 bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Free Consultation
              </motion.button>

              <motion.button
                className="w-full py-4 bg-white border-2 border-[#0607E1] text-[#0607E1] font-semibold rounded-xl hover:bg-[#0607E1] hover:text-white transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Meeting
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          className="bg-white rounded-3xl p-12 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Our Custom Development Process
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to project delivery, here's how we work with you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-full flex items-center justify-center mx-auto text-white text-xl font-bold">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#0607E1]/30 to-[#4D0AFF]/30 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h4 className="text-lg font-bold mb-3 text-gray-900">
                  {step.title}
                </h4>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {step.description}
                </p>
                <div className="text-sm text-[#0607E1] font-semibold bg-[#0607E1]/10 px-3 py-1 rounded-full inline-block">
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and create a solution that exceeds your expectations.
          </p>
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-[#0607E1] text-white font-semibold rounded-full hover:bg-[#0607E1]/90 transition-colors duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomSolutionCard;
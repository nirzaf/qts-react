'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  Star, 
  ArrowRight, 
  Zap, 
  Shield, 
  Clock,
  Users,
  Code,
  Brain,
  Globe,
  Database
} from 'lucide-react';

const PricingGrid: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'project' | 'monthly'>('project');

  const projectPlans = [
    {
      name: 'Starter',
      price: '$2,500',
      originalPrice: '$3,000',
      period: 'per project',
      description: 'Perfect for small businesses and startups',
      icon: Code,
      features: [
        'Custom Web Application',
        'Responsive Design',
        'Basic SEO Optimization',
        '3 Months Support',
        'Source Code Included',
        'Basic Analytics Setup',
        'SSL Certificate',
        'Mobile Optimization'
      ],
      popular: false,
      color: '#10B981',
      deliveryTime: '2-4 weeks',
      revisions: '3 rounds'
    },
    {
      name: 'Professional',
      price: '$5,000',
      originalPrice: '$6,500',
      period: 'per project',
      description: 'Ideal for growing businesses',
      icon: Brain,
      features: [
        'Advanced Web Application',
        'AI Integration',
        'Database Design',
        'API Development',
        '6 Months Support',
        'Performance Optimization',
        'Security Implementation',
        'Advanced Analytics',
        'Third-party Integrations',
        'Custom Admin Panel'
      ],
      popular: true,
      color: '#0607E1',
      deliveryTime: '4-8 weeks',
      revisions: '5 rounds'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      originalPrice: null,
      period: 'quote',
      description: 'For large-scale projects',
      icon: Globe,
      features: [
        'Full-Stack Solution',
        'Custom AI Models',
        'Cloud Infrastructure',
        'DevOps Setup',
        '12 Months Support',
        'Dedicated Team',
        'Priority Support',
        'Scalable Architecture',
        'Advanced Security',
        'Custom Integrations',
        'Training & Documentation',
        'SLA Guarantee'
      ],
      popular: false,
      color: '#8B5CF6',
      deliveryTime: '8-16 weeks',
      revisions: 'Unlimited'
    }
  ];

  const monthlyPlans = [
    {
      name: 'Maintenance',
      price: '$299',
      originalPrice: '$399',
      period: 'per month',
      description: 'Ongoing support and maintenance',
      icon: Shield,
      features: [
        'Website Maintenance',
        'Security Updates',
        'Performance Monitoring',
        'Bug Fixes',
        'Content Updates',
        'Backup Management',
        'Analytics Reports',
        'Email Support'
      ],
      popular: false,
      color: '#10B981',
      deliveryTime: 'Ongoing',
      revisions: 'As needed'
    },
    {
      name: 'Growth',
      price: '$799',
      originalPrice: '$999',
      period: 'per month',
      description: 'Development and optimization',
      icon: Zap,
      features: [
        'Feature Development',
        'Performance Optimization',
        'SEO Improvements',
        'A/B Testing',
        'Conversion Optimization',
        'Advanced Analytics',
        'Priority Support',
        'Monthly Strategy Calls',
        'Custom Integrations',
        'Growth Consulting'
      ],
      popular: true,
      color: '#0607E1',
      deliveryTime: 'Ongoing',
      revisions: 'Unlimited'
    },
    {
      name: 'Dedicated Team',
      price: '$2,999',
      originalPrice: '$3,999',
      period: 'per month',
      description: 'Full development team',
      icon: Users,
      features: [
        'Dedicated Developers',
        'Project Manager',
        'UI/UX Designer',
        'QA Specialist',
        'DevOps Engineer',
        'Weekly Sprints',
        'Daily Standups',
        'Custom Development',
        'Rapid Deployment',
        'Full Support',
        'Strategic Planning',
        'Technology Consulting'
      ],
      popular: false,
      color: '#8B5CF6',
      deliveryTime: 'Ongoing',
      revisions: 'Unlimited'
    }
  ];

  const currentPlans = billingCycle === 'project' ? projectPlans : monthlyPlans;

  const addOns = [
    {
      icon: Database,
      name: 'Advanced Analytics',
      price: '$500',
      description: 'Custom dashboards and reporting'
    },
    {
      icon: Shield,
      name: 'Security Audit',
      price: '$800',
      description: 'Comprehensive security assessment'
    },
    {
      icon: Clock,
      name: 'Rush Delivery',
      price: '+50%',
      description: 'Expedited project delivery'
    },
    {
      icon: Users,
      name: 'Training Session',
      price: '$300',
      description: 'Team training and onboarding'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Billing Toggle */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-100 p-1 rounded-full">
            <div className="flex">
              {[
                { key: 'project', label: 'Project-Based' },
                { key: 'monthly', label: 'Monthly Plans' }
              ].map((option) => (
                <motion.button
                  key={option.key}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    billingCycle === option.key
                      ? 'bg-[#0607E1] text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setBillingCycle(option.key as 'project' | 'monthly')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={billingCycle}
            className="grid lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {currentPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  className={`relative p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-[#0607E1]/5 to-[#4D0AFF]/5 border-[#0607E1]/20 scale-105' 
                      : 'bg-white border-gray-100'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: `${plan.color}15` }}
                    >
                      <IconComponent 
                        className="w-8 h-8" 
                        style={{ color: plan.color }}
                      />
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      {plan.name}
                    </h3>

                    <p className="text-gray-600 mb-6">
                      {plan.description}
                    </p>

                    <div className="mb-6">
                      <div className="flex items-center justify-center space-x-2">
                        {plan.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">
                            {plan.originalPrice}
                          </span>
                        )}
                        <span 
                          className="text-4xl font-bold"
                          style={{ color: plan.color }}
                        >
                          {plan.price}
                        </span>
                      </div>
                      <span className="text-gray-600">
                        {plan.period}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Clock className="w-4 h-4 mx-auto mb-1 text-gray-600" />
                        <div className="font-semibold text-gray-900">Delivery</div>
                        <div className="text-gray-600">{plan.deliveryTime}</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <ArrowRight className="w-4 h-4 mx-auto mb-1 text-gray-600" />
                        <div className="font-semibold text-gray-900">Revisions</div>
                        <div className="text-gray-600">{plan.revisions}</div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                      >
                        <Check 
                          className="w-5 h-5 mr-3 flex-shrink-0" 
                          style={{ color: plan.color }}
                        />
                        <span className="text-gray-700">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] text-white hover:shadow-lg'
                        : 'border-2 hover:shadow-lg'
                    }`}
                    style={{
                      borderColor: plan.popular ? 'transparent' : plan.color,
                      color: plan.popular ? 'white' : plan.color
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: plan.popular ? undefined : plan.color,
                      color: plan.popular ? undefined : 'white'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.price === 'Custom' ? 'Get Quote' : 'Get Started'}
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Add-ons Section */}
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
                Optional Add-ons
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your project with these additional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => {
              const IconComponent = addon.icon;
              return (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-900">
                    {addon.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {addon.description}
                  </p>
                  <div className="text-2xl font-bold text-[#0607E1]">
                    {addon.price}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Questions About Pricing?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're here to help you choose the right plan for your project. 
            Get in touch for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-[#0607E1] text-white font-semibold rounded-full hover:bg-[#0607E1]/90 transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Free Consultation
            </motion.button>
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[#0607E1] text-[#0607E1] font-semibold rounded-full hover:bg-[#0607E1] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View FAQ
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingGrid;
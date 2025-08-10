'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Check,
  X,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Users,
  Clock,
  Brain,
  Code,
  Cloud,
  Headphones,
  Globe,
  Database,
  Smartphone,
  Eye
} from 'lucide-react';

// Pricing plans data
const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: 2999,
    period: 'project',
    popular: false,
    features: [
      'Basic Web Development',
      'Responsive Design',
      'SEO Optimization',
      'Contact Form Integration',
      '3 Months Support',
      'Basic Analytics Setup',
      'Mobile Optimization',
      'Social Media Integration'
    ],
    notIncluded: [
      'AI/ML Integration',
      'Advanced Analytics',
      'Custom CMS',
      'E-commerce Features'
    ],
    icon: Code,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing businesses with advanced needs',
    price: 7999,
    period: 'project',
    popular: true,
    features: [
      'Advanced Web Development',
      'Custom CMS Integration',
      'E-commerce Functionality',
      'API Development',
      'Database Design',
      '6 Months Support',
      'Advanced SEO',
      'Performance Optimization',
      'Security Implementation',
      'Third-party Integrations'
    ],
    notIncluded: [
      'AI/ML Development',
      'Mobile App Development'
    ],
    icon: Globe,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Complete solution for large organizations',
    price: 15999,
    period: 'project',
    popular: false,
    features: [
      'Full-Stack Development',
      'AI/ML Integration',
      'Mobile App Development',
      'Cloud Infrastructure',
      'DevOps Implementation',
      'Custom Analytics',
      '12 Months Support',
      'Security Audit',
      'Performance Monitoring',
      'Scalability Planning',
      'Team Training',
      'Documentation'
    ],
    notIncluded: [],
    icon: Brain,
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100'
  }
];

// Service add-ons
const addOns = [
  {
    name: 'AI/ML Consultation',
    description: 'Strategic AI implementation planning',
    price: 1999,
    icon: Brain
  },
  {
    name: 'Mobile App Development',
    description: 'iOS and Android applications',
    price: 4999,
    icon: Smartphone
  },
  {
    name: 'Cloud Migration',
    description: 'Complete cloud infrastructure setup',
    price: 2999,
    icon: Cloud
  },
  {
    name: 'Advanced Analytics',
    description: 'Custom dashboard and reporting',
    price: 1499,
    icon: Eye
  }
];

// FAQ data
const faqs = [
  {
    question: "What's included in the project price?",
    answer: "Each plan includes development, testing, deployment, and the specified support period. We also provide project documentation and basic training."
  },
  {
    question: "Can I customize a plan for my specific needs?",
    answer: "Absolutely! We offer custom solutions tailored to your requirements. Contact us for a personalized quote based on your project scope."
  },
  {
    question: "What happens after the support period ends?",
    answer: "You can extend support with our maintenance packages starting at $299/month, or opt for on-demand support at $150/hour."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment schedules. Typically 50% upfront, 25% at milestone, and 25% upon completion."
  },
  {
    question: "How long does a typical project take?",
    answer: "Starter projects: 4-6 weeks, Professional: 8-12 weeks, Enterprise: 12-20 weeks. Timeline depends on project complexity and requirements."
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes, we offer comprehensive maintenance packages including updates, security patches, performance monitoring, and technical support."
  }
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'project' | 'monthly'>('project');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main ref={ref} className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-fluid-4xl lg:text-fluid-5xl font-bold text-gray-900 mb-6">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our commitment to quality,
              timely delivery, and exceptional support.
            </p>

            {/* Billing Toggle */}
            <motion.div
              className="inline-flex items-center bg-gray-100 rounded-full p-1 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={() => setBillingPeriod('project')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  billingPeriod === 'project'
                    ? 'bg-white text-[#0607E1] shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Project-Based
              </button>
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-[#0607E1] shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly Retainer
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-[#0607E1] scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8 lg:p-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className={`w-8 h-8 bg-gradient-to-br ${plan.color} bg-clip-text text-transparent`} />
                    </div>
                    <h3 className="text-fluid-xl lg:text-fluid-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                        ${plan.price.toLocaleString()}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /{billingPeriod === 'project' ? 'project' : 'month'}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}

                    {plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="font-semibold text-gray-900 mb-4 mt-6">Not included:</h4>
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <X className="w-3 h-3 text-gray-400" />
                            </div>
                            <span className="text-gray-500">{feature}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

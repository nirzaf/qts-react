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

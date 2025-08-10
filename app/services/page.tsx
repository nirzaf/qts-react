'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Brain,
  Code,
  Cloud,
  Smartphone,
  Database,
  Shield,
  Zap,
  Globe,
  Eye,
  MessageSquare,
  Cpu,
  Network,
  LineChart,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

// Service categories data
const serviceCategories = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence and machine learning solutions',
    icon: Brain,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    services: [
      {
        name: 'AI Strategy & Consulting',
        description: 'Strategic guidance for AI adoption and implementation roadmaps',
        icon: Brain,
        features: ['AI Readiness Assessment', 'Technology Roadmap', 'ROI Analysis', 'Implementation Strategy']
      },
      {
        name: 'Machine Learning Solutions',
        description: 'Custom ML models for predictive analytics and automation',
        icon: Cpu,
        features: ['Predictive Analytics', 'Recommendation Engines', 'Fraud Detection', 'Process Automation']
      },
      {
        name: 'Computer Vision',
        description: 'Advanced image and video analysis capabilities',
        icon: Eye,
        features: ['Object Detection', 'Facial Recognition', 'Quality Control', 'Medical Imaging']
      },
      {
        name: 'Natural Language Processing',
        description: 'Text analysis and conversational AI solutions',
        icon: MessageSquare,
        features: ['Sentiment Analysis', 'Chatbots', 'Document Processing', 'Language Translation']
      }
    ]
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs',
    icon: Code,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    services: [
      {
        name: 'Web Development',
        description: 'Modern, responsive web applications and websites',
        icon: Globe,
        features: ['React/Next.js', 'Node.js Backend', 'Progressive Web Apps', 'E-commerce Solutions']
      },
      {
        name: 'Mobile Development',
        description: 'Native and cross-platform mobile applications',
        icon: Smartphone,
        features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
      },
      {
        name: 'Enterprise Software',
        description: 'Scalable enterprise-grade software solutions',
        icon: Network,
        features: ['ERP Systems', 'CRM Solutions', 'Workflow Automation', 'Integration Services']
      },
      {
        name: 'API Development',
        description: 'Robust and scalable API solutions',
        icon: Database,
        features: ['RESTful APIs', 'GraphQL', 'Microservices', 'API Security']
      }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure and DevOps solutions for scalability',
    icon: Cloud,
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100',
    services: [
      {
        name: 'Cloud Migration',
        description: 'Seamless migration to cloud platforms',
        icon: Cloud,
        features: ['AWS Migration', 'Azure Migration', 'Google Cloud', 'Hybrid Solutions']
      },
      {
        name: 'DevOps Implementation',
        description: 'CI/CD pipelines and automation',
        icon: Zap,
        features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automated Testing']
      },
      {
        name: 'Cloud Security',
        description: 'Comprehensive cloud security solutions',
        icon: Shield,
        features: ['Security Audits', 'Compliance', 'Identity Management', 'Data Protection']
      },
      {
        name: 'Performance Optimization',
        description: 'Application and infrastructure optimization',
        icon: LineChart,
        features: ['Performance Monitoring', 'Load Balancing', 'Caching Strategies', 'Cost Optimization']
      }
    ]
  }
];

// Process steps
const processSteps = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'We analyze your business needs and technical requirements to create a comprehensive project roadmap.'
  },
  {
    step: '02',
    title: 'Design & Planning',
    description: 'Our team designs the solution architecture and creates detailed project plans with clear milestones.'
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We build your solution using agile methodologies with continuous testing and quality assurance.'
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description: 'We deploy your solution and provide ongoing support to ensure optimal performance and growth.'
  }
];

export default function ServicesPage() {
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive growth.
              From AI-powered innovations to scalable software development.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">AI & Machine Learning</span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">Software Development</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full">Cloud Solutions</span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full">Digital Transformation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={category.id} className={`py-16 lg:py-24 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <motion.div
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <category.icon className={`w-10 h-10 bg-gradient-to-br ${category.color} bg-clip-text text-transparent`} />
              </div>
              <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={service.name}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}>
                    <service.icon className={`w-8 h-8 bg-gradient-to-br ${category.color} bg-clip-text text-transparent`} />
                  </div>

                  <h3 className="text-fluid-lg lg:text-fluid-xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    className="mt-6 pt-6 border-t border-gray-100"
                    whileHover={{ x: 5 }}
                  >
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[#0607E1] hover:text-[#4D0AFF] font-semibold transition-colors duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold mb-4">
              Our Development Process
            </h2>
            <p className="text-fluid-lg opacity-90 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#0607E1] to-transparent z-0" />
                )}

                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-fluid-lg lg:text-fluid-xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold text-gray-900 mb-6">
                Why Choose Quadrate Tech Solutions?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Star,
                    title: "Proven Expertise",
                    description: "8+ years of experience delivering successful projects across various industries"
                  },
                  {
                    icon: Zap,
                    title: "Cutting-Edge Technology",
                    description: "We use the latest technologies and best practices to ensure future-proof solutions"
                  },
                  {
                    icon: Shield,
                    title: "Quality Assurance",
                    description: "Rigorous testing and quality control processes ensure reliable, secure solutions"
                  },
                  {
                    icon: Globe,
                    title: "24/7 Support",
                    description: "Comprehensive support and maintenance to keep your systems running smoothly"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0607E1]/10 to-[#4D0AFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-[#0607E1]" />
                    </div>
                    <div>
                      <h3 className="text-fluid-lg font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="text-3xl font-bold mb-2">200+</div>
                        <div className="text-sm opacity-90">Projects Delivered</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">100+</div>
                        <div className="text-sm opacity-90">Happy Clients</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">98%</div>
                        <div className="text-sm opacity-90">Success Rate</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">24/7</div>
                        <div className="text-sm opacity-90">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-fluid-lg mb-8 opacity-90 max-w-3xl mx-auto">
              Let's discuss your requirements and create a solution that drives your business forward.
              Get a free consultation with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Free Consultation</span>
              </motion.a>
              <motion.a
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0607E1] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Pricing</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

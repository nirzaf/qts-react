'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComprehensiveSEO from '@/components/seo/ComprehensiveSEO';
import { serviceSEO } from '@/config/seo';
import { organizationSchema, websiteSchema, serviceSchema } from '@/config/structuredData';
import { 
  Code, 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Award,
  Clock,
  Settings,
  Layers,
  Monitor,
  Server
} from 'lucide-react';

// Custom Software Services data
const softwareServices = [
  {
    id: "enterprise-applications",
    title: "Enterprise Applications",
    description: "Scalable business applications for large organizations",
    icon: Monitor,
    features: [
      "ERP Systems",
      "CRM Solutions", 
      "HR Management Systems",
      "Financial Management",
      "Supply Chain Management",
      "Business Intelligence"
    ],
    technologies: ["React", "Node.js", ".NET", "Java", "PostgreSQL", "MongoDB"],
    benefits: [
      "Streamlined operations",
      "Improved efficiency",
      "Better data insights",
      "Cost reduction"
    ],
    useCases: [
      "Large corporations",
      "Government agencies",
      "Healthcare systems",
      "Educational institutions"
    ],
    pricing: "Starting from $50,000",
    duration: "3-6 months"
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description: "Modern, responsive web applications with cutting-edge technology",
    icon: Globe,
    features: [
      "Progressive Web Apps",
      "Single Page Applications",
      "E-commerce Platforms",
      "Content Management Systems",
      "API Development",
      "Real-time Applications"
    ],
    technologies: ["React", "Next.js", "Vue.js", "Node.js", "Python", "AWS"],
    benefits: [
      "Cross-platform compatibility",
      "Fast performance",
      "SEO optimization",
      "Scalable architecture"
    ],
    useCases: [
      "E-commerce businesses",
      "SaaS platforms",
      "Corporate websites",
      "Online marketplaces"
    ],
    pricing: "Starting from $15,000",
    duration: "2-4 months"
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android",
    icon: Smartphone,
    features: [
      "Native iOS Development",
      "Native Android Development",
      "Cross-platform Solutions",
      "Mobile UI/UX Design",
      "App Store Optimization",
      "Push Notifications"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
    benefits: [
      "Wider market reach",
      "Enhanced user experience",
      "Offline capabilities",
      "Device integration"
    ],
    useCases: [
      "Retail businesses",
      "Healthcare providers",
      "Financial services",
      "Entertainment industry"
    ],
    pricing: "Starting from $25,000",
    duration: "3-5 months"
  },
  {
    id: "api-development",
    title: "API Development & Integration",
    description: "Robust APIs and seamless third-party integrations",
    icon: Layers,
    features: [
      "RESTful API Development",
      "GraphQL APIs",
      "Microservices Architecture",
      "Third-party Integrations",
      "API Documentation",
      "Rate Limiting & Security"
    ],
    technologies: ["Node.js", "Python", "Java", "Docker", "Kubernetes", "AWS"],
    benefits: [
      "System interoperability",
      "Improved efficiency",
      "Scalable architecture",
      "Future-proof solutions"
    ],
    useCases: [
      "System integration",
      "Data synchronization",
      "Partner integrations",
      "Mobile app backends"
    ],
    pricing: "Starting from $10,000",
    duration: "1-3 months"
  },
  {
    id: "legacy-modernization",
    title: "Legacy System Modernization",
    description: "Transform outdated systems with modern technology",
    icon: Settings,
    features: [
      "System Assessment",
      "Migration Planning",
      "Data Migration",
      "Technology Upgrade",
      "Performance Optimization",
      "Security Enhancement"
    ],
    technologies: ["React", "Node.js", "Python", "Docker", "Cloud Platforms", "Databases"],
    benefits: [
      "Improved performance",
      "Enhanced security",
      "Reduced maintenance costs",
      "Better user experience"
    ],
    useCases: [
      "Financial institutions",
      "Government agencies",
      "Healthcare organizations",
      "Manufacturing companies"
    ],
    pricing: "Starting from $40,000",
    duration: "4-8 months"
  },
  {
    id: "database-solutions",
    title: "Database Solutions",
    description: "Optimized database design and management systems",
    icon: Database,
    features: [
      "Database Design",
      "Performance Optimization",
      "Data Migration",
      "Backup & Recovery",
      "Security Implementation",
      "Monitoring & Maintenance"
    ],
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "AWS RDS"],
    benefits: [
      "Faster query performance",
      "Data integrity",
      "Scalable storage",
      "Disaster recovery"
    ],
    useCases: [
      "Data-heavy applications",
      "Analytics platforms",
      "E-commerce systems",
      "Content management"
    ],
    pricing: "Starting from $8,000",
    duration: "1-2 months"
  }
];

// Development process
const developmentProcess = [
  {
    step: "01",
    title: "Requirements Analysis",
    description: "We thoroughly analyze your business requirements and technical specifications to create a detailed project roadmap.",
    icon: Target
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "Our architects design scalable, secure, and maintainable software architecture tailored to your needs.",
    icon: Layers
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We follow agile development practices with continuous testing to ensure high-quality deliverables.",
    icon: Code
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "We deploy your software to production and provide ongoing support and maintenance services.",
    icon: Cloud
  }
];

export default function CustomSoftwarePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const breadcrumbs = [
    { name: "Home", url: "https://quadratetechsolutions.com" },
    { name: "Services", url: "https://quadratetechsolutions.com/services" },
    { name: "Custom Software Development", url: "https://quadratetechsolutions.com/services/custom-software-development" }
  ];

  const customSoftwareSchema = serviceSchema({
    name: "Custom Software Development",
    description: "Bespoke software development services including enterprise applications, web apps, mobile development, and system integration.",
    url: "https://quadratetechsolutions.com/services/custom-software-development",
    category: "Software Development"
  });

  return (
    <>
      <ComprehensiveSEO 
        seo={serviceSEO.customSoftware} 
        structuredData={[organizationSchema, websiteSchema, customSoftwareSchema]}
        breadcrumbs={breadcrumbs}
      />
      
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
                Custom Software <span className="gradient-text">Development</span>
              </h1>
              <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
                Build powerful, scalable software solutions tailored to your unique business needs. 
                From enterprise applications to mobile apps, we deliver excellence in every line of code.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: Code, label: "Projects Delivered", value: "200+" },
                  { icon: TrendingUp, label: "Client Satisfaction", value: "99%" },
                  { icon: Users, label: "Active Users", value: "1M+" },
                  { icon: Award, label: "Technologies", value: "20+" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0607E1]/10 to-[#4D0AFF]/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="w-6 h-6 text-[#0607E1]" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
                <motion.a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0607E1] text-[#0607E1] font-semibold rounded-full hover:bg-[#0607E1] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Our Work</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Software Services Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold text-gray-900 mb-4">
                  Our Software Development Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive software development solutions designed to meet your unique business requirements and drive digital transformation.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {softwareServices.map((service, index) => (
                  <motion.article
                    key={service.id}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Service Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Service Header */}
                    <h3 className="text-fluid-xl font-bold text-gray-900 mb-3 group-hover:text-[#0607E1] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Duration */}
                    <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="text-sm text-gray-600">Starting from</div>
                        <div className="text-lg font-bold text-[#0607E1]">{service.pricing}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Duration</div>
                        <div className="font-semibold text-gray-900">{service.duration}</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href="/contact"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#0607E1] text-white font-semibold rounded-full hover:bg-[#4D0AFF] transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.a>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 lg:py-24 bg-gray-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold text-gray-900 mb-4">
                  Our Development Process
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  A proven agile methodology that ensures timely delivery, quality assurance, and client satisfaction throughout the development lifecycle.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {developmentProcess.map((step, index) => (
                  <motion.div
                    key={step.step}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Step Number */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-900">{step.step}</span>
                      </div>
                      {index < developmentProcess.length - 1 && (
                        <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] opacity-30" />
                      )}
                    </div>

                    <h3 className="text-fluid-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold text-gray-900 mb-4">
                  Technologies We Master
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  We leverage cutting-edge technologies and frameworks to build robust, scalable, and future-proof software solutions.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    category: "Frontend",
                    icon: Monitor,
                    technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"]
                  },
                  {
                    category: "Backend",
                    icon: Server,
                    technologies: ["Node.js", "Python", "Java", ".NET", "PHP", "Go"]
                  },
                  {
                    category: "Mobile",
                    icon: Smartphone,
                    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"]
                  },
                  {
                    category: "Cloud & DevOps",
                    icon: Cloud,
                    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins"]
                  }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.category}
                    className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-fluid-lg font-bold text-gray-900 mb-4">{tech.category}</h3>
                    <div className="space-y-2">
                      {tech.technologies.map((technology) => (
                        <div key={technology} className="text-sm text-gray-600 bg-gray-100 rounded-full px-3 py-1 inline-block mr-2 mb-2">
                          {technology}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center text-white max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold mb-6">
                Ready to Build Your Custom Software?
              </h2>
              <p className="text-fluid-lg mb-8 opacity-90">
                Let's discuss your project requirements and create a software solution that perfectly fits your business needs.
                Get a free consultation and project estimate today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code className="w-5 h-5 mr-2" />
                  Start Your Project
                </motion.a>
                <motion.a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0607E1] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Star className="w-5 h-5 mr-2" />
                  View Portfolio
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComprehensiveSEO from '@/components/seo/ComprehensiveSEO';
import { serviceSEO } from '@/config/seo';
import { organizationSchema, websiteSchema, serviceSchema } from '@/config/structuredData';
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Search, 
  Zap, 
  Shield, 
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Award,
  Clock,
  Code,
  Layers,
  Monitor,
  Palette,
  Database,
  Cloud
} from 'lucide-react';

// Web Development Services data
const webServices = [
  {
    id: "responsive-websites",
    title: "Responsive Websites",
    description: "Modern, mobile-first websites that work perfectly on all devices",
    icon: Monitor,
    features: [
      "Mobile-First Design",
      "Cross-Browser Compatibility",
      "Fast Loading Speed",
      "SEO Optimization",
      "Content Management",
      "Analytics Integration"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Netlify"],
    benefits: [
      "Improved user experience",
      "Higher search rankings",
      "Increased conversions",
      "Better mobile performance"
    ],
    useCases: [
      "Corporate websites",
      "Portfolio sites",
      "Landing pages",
      "Business websites"
    ],
    pricing: "Starting from $3,000",
    duration: "2-4 weeks"
  },
  {
    id: "ecommerce-platforms",
    title: "E-commerce Platforms",
    description: "Powerful online stores with advanced features and payment integration",
    icon: ShoppingCart,
    features: [
      "Product Catalog Management",
      "Shopping Cart & Checkout",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Tracking",
      "Customer Accounts"
    ],
    technologies: ["Next.js", "Stripe", "PayPal", "WooCommerce", "Shopify", "Magento"],
    benefits: [
      "Increased online sales",
      "Better customer experience",
      "Automated processes",
      "Scalable growth"
    ],
    useCases: [
      "Online retail stores",
      "Digital marketplaces",
      "B2B platforms",
      "Subscription services"
    ],
    pricing: "Starting from $8,000",
    duration: "4-8 weeks"
  },
  {
    id: "progressive-web-apps",
    title: "Progressive Web Apps",
    description: "App-like experiences that work offline and install on devices",
    icon: Smartphone,
    features: [
      "Offline Functionality",
      "Push Notifications",
      "App-like Interface",
      "Fast Performance",
      "Installable",
      "Background Sync"
    ],
    technologies: ["React", "Service Workers", "Web App Manifest", "IndexedDB", "PWA Tools"],
    benefits: [
      "Native app experience",
      "Reduced development costs",
      "Better engagement",
      "Cross-platform compatibility"
    ],
    useCases: [
      "News applications",
      "Social platforms",
      "Productivity tools",
      "Entertainment apps"
    ],
    pricing: "Starting from $12,000",
    duration: "6-10 weeks"
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description: "Complex web applications with advanced functionality and user management",
    icon: Layers,
    features: [
      "User Authentication",
      "Role-based Access",
      "Real-time Features",
      "API Integration",
      "Data Visualization",
      "Advanced Security"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Socket.io", "JWT"],
    benefits: [
      "Streamlined workflows",
      "Improved productivity",
      "Real-time collaboration",
      "Scalable architecture"
    ],
    useCases: [
      "Business management tools",
      "Collaboration platforms",
      "Data dashboards",
      "SaaS applications"
    ],
    pricing: "Starting from $15,000",
    duration: "8-16 weeks"
  },
  {
    id: "cms-solutions",
    title: "CMS Solutions",
    description: "Content management systems for easy website updates and maintenance",
    icon: Database,
    features: [
      "Easy Content Editing",
      "Media Management",
      "SEO Tools",
      "User Roles",
      "Workflow Management",
      "Multi-language Support"
    ],
    technologies: ["WordPress", "Strapi", "Sanity", "Contentful", "Ghost", "Drupal"],
    benefits: [
      "Easy content updates",
      "No technical knowledge required",
      "Better SEO control",
      "Faster publishing"
    ],
    useCases: [
      "Corporate blogs",
      "News websites",
      "Documentation sites",
      "Marketing websites"
    ],
    pricing: "Starting from $5,000",
    duration: "3-6 weeks"
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    description: "Speed up existing websites for better user experience and SEO",
    icon: Zap,
    features: [
      "Speed Analysis",
      "Code Optimization",
      "Image Compression",
      "Caching Implementation",
      "CDN Setup",
      "Core Web Vitals"
    ],
    technologies: ["Lighthouse", "WebPageTest", "CDN", "Image Optimization", "Caching"],
    benefits: [
      "Faster loading times",
      "Better search rankings",
      "Improved user experience",
      "Higher conversions"
    ],
    useCases: [
      "Slow websites",
      "E-commerce optimization",
      "SEO improvement",
      "User experience enhancement"
    ],
    pricing: "Starting from $2,000",
    duration: "1-3 weeks"
  }
];

// Development process
const webDevProcess = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements, target audience, and business goals to create a comprehensive project plan.",
    icon: Target
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Our designers create wireframes and prototypes that focus on user experience and visual appeal.",
    icon: Palette
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your website using modern technologies and conduct thorough testing across all devices.",
    icon: Code
  },
  {
    step: "04",
    title: "Launch & Optimization",
    description: "We deploy your website and provide ongoing optimization and maintenance services.",
    icon: Zap
  }
];

export default function WebDevelopmentPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const breadcrumbs = [
    { name: "Home", url: "https://quadratetechsolutions.com" },
    { name: "Services", url: "https://quadratetechsolutions.com/services" },
    { name: "Web Development", url: "https://quadratetechsolutions.com/services/web-development" }
  ];

  const webDevSchema = serviceSchema({
    name: "Web Development Services",
    description: "Professional web development services including responsive websites, e-commerce platforms, progressive web apps, and performance optimization.",
    url: "https://quadratetechsolutions.com/services/web-development",
    category: "Web Development"
  });

  return (
    <>
      <ComprehensiveSEO 
        seo={serviceSEO.webDevelopment} 
        structuredData={[organizationSchema, websiteSchema, webDevSchema]}
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
                Web <span className="gradient-text">Development</span> Services
              </h1>
              <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
                Create stunning, high-performance websites and web applications that engage users and drive business growth. 
                From responsive designs to complex web platforms, we deliver excellence.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: Globe, label: "Websites Built", value: "300+" },
                  { icon: TrendingUp, label: "Performance Score", value: "95+" },
                  { icon: Users, label: "Happy Clients", value: "150+" },
                  { icon: Award, label: "Awards Won", value: "25+" }
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

        {/* Web Services Grid */}
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
                  Our Web Development Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive web development solutions designed to create exceptional digital experiences and drive business success.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {webServices.map((service, index) => (
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
                  Our Web Development Process
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  A proven methodology that ensures successful web development from concept to launch and beyond.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {webDevProcess.map((step, index) => (
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
                      {index < webDevProcess.length - 1 && (
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

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold text-gray-900 mb-6">
                    Why Choose Our Web Development Services?
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    We combine cutting-edge technology with creative design to deliver web solutions that not only look great but also perform exceptionally well.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Zap,
                        title: "Lightning Fast",
                        description: "Optimized for speed with 95+ PageSpeed scores and Core Web Vitals compliance"
                      },
                      {
                        icon: Shield,
                        title: "Secure & Reliable",
                        description: "Enterprise-grade security with SSL, regular updates, and backup systems"
                      },
                      {
                        icon: Search,
                        title: "SEO Optimized",
                        description: "Built with SEO best practices for maximum search engine visibility"
                      },
                      {
                        icon: Smartphone,
                        title: "Mobile First",
                        description: "Responsive design that works perfectly on all devices and screen sizes"
                      }
                    ].map((benefit, index) => (
                      <motion.div
                        key={benefit.title}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0607E1]/10 to-[#4D0AFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-6 h-6 text-[#0607E1]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="aspect-square bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <Globe className="w-24 h-24 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Modern Web Solutions</h3>
                      <p className="opacity-90">
                        Creating exceptional web experiences that drive engagement and business growth.
                      </p>
                    </div>
                  </div>
                </motion.div>
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
                Ready to Build Your Dream Website?
              </h2>
              <p className="text-fluid-lg mb-8 opacity-90">
                Let's create a stunning, high-performance website that represents your brand and drives results.
                Get a free consultation and project quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-5 h-5 mr-2" />
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

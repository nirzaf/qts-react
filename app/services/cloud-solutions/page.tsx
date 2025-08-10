'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComprehensiveSEO from '@/components/seo/ComprehensiveSEO';
import { serviceSEO } from '@/config/seo';
import { organizationSchema, websiteSchema, serviceSchema } from '@/config/structuredData';
import { 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  Database, 
  Settings, 
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
  Lock,
  BarChart3,
  Globe
} from 'lucide-react';

// Cloud Services data
const cloudServices = [
  {
    id: "cloud-migration",
    title: "Cloud Migration Services",
    description: "Seamless migration of your applications and data to the cloud",
    icon: Cloud,
    features: [
      "Migration Assessment",
      "Strategy Development",
      "Data Migration",
      "Application Modernization",
      "Testing & Validation",
      "Go-Live Support"
    ],
    platforms: ["AWS", "Microsoft Azure", "Google Cloud", "Multi-Cloud"],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Enhanced security",
      "Better disaster recovery"
    ],
    useCases: [
      "Legacy system modernization",
      "Data center consolidation",
      "Digital transformation",
      "Cost optimization"
    ],
    pricing: "Starting from $20,000",
    duration: "4-12 weeks"
  },
  {
    id: "cloud-architecture",
    title: "Cloud Architecture Design",
    description: "Scalable and secure cloud infrastructure architecture",
    icon: Layers,
    features: [
      "Architecture Assessment",
      "Infrastructure Design",
      "Security Framework",
      "Scalability Planning",
      "Cost Optimization",
      "Compliance Setup"
    ],
    platforms: ["AWS", "Azure", "GCP", "Hybrid Cloud"],
    benefits: [
      "Optimized performance",
      "Cost-effective scaling",
      "Enhanced security",
      "Future-proof design"
    ],
    useCases: [
      "New application deployment",
      "Infrastructure optimization",
      "Multi-cloud strategy",
      "Disaster recovery planning"
    ],
    pricing: "Starting from $15,000",
    duration: "3-8 weeks"
  },
  {
    id: "devops-automation",
    title: "DevOps & Automation",
    description: "Streamlined development and deployment processes",
    icon: Settings,
    features: [
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Automated Testing",
      "Monitoring & Alerting",
      "Container Orchestration",
      "Release Management"
    ],
    platforms: ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "Terraform"],
    benefits: [
      "Faster deployments",
      "Reduced errors",
      "Improved collaboration",
      "Better quality assurance"
    ],
    useCases: [
      "Development workflow optimization",
      "Automated deployments",
      "Infrastructure management",
      "Quality assurance"
    ],
    pricing: "Starting from $12,000",
    duration: "4-10 weeks"
  },
  {
    id: "managed-services",
    title: "Managed Cloud Services",
    description: "24/7 monitoring and management of your cloud infrastructure",
    icon: Monitor,
    features: [
      "24/7 Monitoring",
      "Performance Optimization",
      "Security Management",
      "Backup & Recovery",
      "Cost Management",
      "Technical Support"
    ],
    platforms: ["AWS", "Azure", "GCP", "Multi-Cloud"],
    benefits: [
      "Reduced operational overhead",
      "Proactive issue resolution",
      "Cost optimization",
      "Expert support"
    ],
    useCases: [
      "Ongoing cloud management",
      "Performance monitoring",
      "Security compliance",
      "Cost control"
    ],
    pricing: "Starting from $3,000/month",
    duration: "Ongoing"
  },
  {
    id: "cloud-security",
    title: "Cloud Security Services",
    description: "Comprehensive security solutions for cloud environments",
    icon: Shield,
    features: [
      "Security Assessment",
      "Identity & Access Management",
      "Data Encryption",
      "Compliance Management",
      "Threat Detection",
      "Incident Response"
    ],
    platforms: ["AWS Security", "Azure Security", "GCP Security", "Third-party Tools"],
    benefits: [
      "Enhanced data protection",
      "Regulatory compliance",
      "Threat prevention",
      "Risk mitigation"
    ],
    useCases: [
      "Security compliance",
      "Data protection",
      "Threat management",
      "Risk assessment"
    ],
    pricing: "Starting from $8,000",
    duration: "2-6 weeks"
  },
  {
    id: "serverless-solutions",
    title: "Serverless Solutions",
    description: "Event-driven, scalable applications without server management",
    icon: Zap,
    features: [
      "Function Development",
      "Event-Driven Architecture",
      "Auto-Scaling",
      "Pay-per-Use Model",
      "API Gateway Setup",
      "Monitoring & Logging"
    ],
    platforms: ["AWS Lambda", "Azure Functions", "Google Cloud Functions", "Vercel"],
    benefits: [
      "Reduced operational costs",
      "Automatic scaling",
      "Faster time-to-market",
      "No server management"
    ],
    useCases: [
      "Microservices architecture",
      "Event processing",
      "API backends",
      "Data processing"
    ],
    pricing: "Starting from $10,000",
    duration: "3-8 weeks"
  }
];

// Cloud platforms
const cloudPlatforms = [
  {
    name: "Amazon Web Services",
    icon: Cloud,
    description: "Comprehensive cloud platform with 200+ services",
    services: ["EC2", "S3", "RDS", "Lambda", "EKS", "CloudFormation"]
  },
  {
    name: "Microsoft Azure",
    icon: Server,
    description: "Enterprise-grade cloud platform with hybrid capabilities",
    services: ["Virtual Machines", "Blob Storage", "SQL Database", "Functions", "AKS", "ARM Templates"]
  },
  {
    name: "Google Cloud Platform",
    icon: Database,
    description: "Data and AI-focused cloud platform with global infrastructure",
    services: ["Compute Engine", "Cloud Storage", "Cloud SQL", "Cloud Functions", "GKE", "Deployment Manager"]
  }
];

export default function CloudSolutionsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const breadcrumbs = [
    { name: "Home", url: "https://quadratetechsolutions.com" },
    { name: "Services", url: "https://quadratetechsolutions.com/services" },
    { name: "Cloud Solutions", url: "https://quadratetechsolutions.com/services/cloud-solutions" }
  ];

  const cloudSchema = serviceSchema({
    name: "Cloud Solutions",
    description: "Comprehensive cloud services including migration, architecture design, DevOps automation, managed services, and security solutions for AWS, Azure, and GCP.",
    url: "https://quadratetechsolutions.com/services/cloud-solutions",
    category: "Cloud Computing"
  });

  return (
    <>
      <ComprehensiveSEO 
        seo={serviceSEO.cloudSolutions} 
        structuredData={[organizationSchema, websiteSchema, cloudSchema]}
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
                Cloud <span className="gradient-text">Solutions</span>
              </h1>
              <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
                Accelerate your digital transformation with comprehensive cloud solutions. 
                From migration to management, we help you leverage the full power of the cloud.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: Cloud, label: "Cloud Migrations", value: "100+" },
                  { icon: TrendingUp, label: "Cost Savings", value: "40%" },
                  { icon: Users, label: "Cloud Experts", value: "15+" },
                  { icon: Award, label: "Certifications", value: "25+" }
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
                  <span>Get Cloud Assessment</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
                <motion.a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0607E1] text-[#0607E1] font-semibold rounded-full hover:bg-[#0607E1] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Case Studies</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cloud Services Grid */}
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
                  Our Cloud Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive cloud solutions designed to accelerate your digital transformation and optimize your infrastructure.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cloudServices.map((service, index) => (
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

                    {/* Platforms */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Platforms</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.platforms.slice(0, 4).map((platform) => (
                          <span
                            key={platform}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {platform}
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

        {/* Cloud Platforms */}
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
                  Cloud Platforms We Master
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  We are certified experts in all major cloud platforms, helping you choose the right solution for your business needs.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {cloudPlatforms.map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <platform.icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-fluid-xl font-bold text-gray-900 mb-4 group-hover:text-[#0607E1] transition-colors duration-300">
                      {platform.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {platform.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Services</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {platform.services.map((service) => (
                          <span
                            key={service}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                    Why Choose Cloud Solutions?
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Cloud computing offers unprecedented scalability, cost-efficiency, and innovation opportunities.
                    Let us help you harness these benefits for your business.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: TrendingUp,
                        title: "Cost Optimization",
                        description: "Reduce infrastructure costs by up to 40% with pay-as-you-use cloud models"
                      },
                      {
                        icon: Zap,
                        title: "Scalability",
                        description: "Scale resources up or down instantly based on demand without hardware limitations"
                      },
                      {
                        icon: Shield,
                        title: "Enhanced Security",
                        description: "Enterprise-grade security with advanced threat protection and compliance"
                      },
                      {
                        icon: Globe,
                        title: "Global Reach",
                        description: "Deploy applications globally with low latency and high availability"
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
                      <Cloud className="w-24 h-24 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Cloud Excellence</h3>
                      <p className="opacity-90">
                        Empowering businesses with scalable, secure, and cost-effective cloud solutions.
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
                Ready to Move to the Cloud?
              </h2>
              <p className="text-fluid-lg mb-8 opacity-90">
                Start your cloud journey with a free assessment. We'll analyze your current infrastructure
                and provide a customized cloud strategy that fits your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Cloud className="w-5 h-5 mr-2" />
                  Free Cloud Assessment
                </motion.a>
                <motion.a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0607E1] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Star className="w-5 h-5 mr-2" />
                  View Success Stories
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

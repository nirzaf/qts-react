'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComprehensiveSEO from '@/components/seo/ComprehensiveSEO';
import { industrySEO } from '@/config/seo';
import { organizationSchema, websiteSchema, serviceSchema } from '@/config/structuredData';
import { 
  Building, 
  Shield, 
  Users, 
  Brain, 
  Database, 
  Globe, 
  Smartphone,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  Target,
  BarChart3,
  Lock,
  Zap,
  FileText,
  MessageSquare,
  Eye,
  Settings,
  AlertTriangle,
  Search
} from 'lucide-react';

// Government Solutions data
const governmentSolutions = [
  {
    id: "digital-transformation",
    title: "Government Digital Transformation",
    description: "Comprehensive digital transformation solutions for government agencies and public services",
    icon: Building,
    features: [
      "Legacy System Modernization",
      "Digital Service Delivery",
      "Citizen Portal Development",
      "Process Automation",
      "Cloud Migration",
      "Interoperability Solutions"
    ],
    technologies: ["React", "Node.js", "Cloud", "APIs", "Microservices", "Security"],
    benefits: [
      "50% reduction in processing time",
      "Improved citizen satisfaction",
      "Cost-effective operations",
      "Enhanced transparency"
    ],
    useCases: [
      "Public service delivery",
      "Government portals",
      "Administrative systems",
      "Citizen engagement"
    ],
    compliance: ["FedRAMP", "FISMA", "Section 508", "NIST"],
    pricing: "Starting from $100,000",
    duration: "8-18 months"
  },
  {
    id: "ai-powered-analytics",
    title: "AI-Powered Government Analytics",
    description: "Advanced analytics and AI solutions for data-driven government decision making",
    icon: Brain,
    features: [
      "Predictive Analytics",
      "Policy Impact Analysis",
      "Resource Optimization",
      "Fraud Detection",
      "Performance Dashboards",
      "Citizen Sentiment Analysis"
    ],
    technologies: ["Python", "R", "Machine Learning", "Tableau", "Power BI", "Big Data"],
    benefits: [
      "Data-driven policy making",
      "Improved resource allocation",
      "Enhanced fraud detection",
      "Better citizen insights"
    ],
    useCases: [
      "Policy analysis",
      "Budget optimization",
      "Performance monitoring",
      "Risk assessment"
    ],
    compliance: ["FISMA", "Privacy Act", "GDPR", "Data Protection"],
    pricing: "Starting from $75,000",
    duration: "6-12 months"
  },
  {
    id: "cybersecurity-solutions",
    title: "Government Cybersecurity Solutions",
    description: "Comprehensive cybersecurity framework for government systems and data protection",
    icon: Shield,
    features: [
      "Security Assessment",
      "Threat Detection",
      "Incident Response",
      "Compliance Monitoring",
      "Identity Management",
      "Security Training"
    ],
    technologies: ["SIEM", "Zero Trust", "IAM", "Encryption", "Monitoring", "AI Security"],
    benefits: [
      "Enhanced security posture",
      "Regulatory compliance",
      "Threat prevention",
      "Risk mitigation"
    ],
    useCases: [
      "Critical infrastructure protection",
      "Data security",
      "Network security",
      "Compliance management"
    ],
    compliance: ["FISMA", "NIST", "FedRAMP", "CISA Guidelines"],
    pricing: "Starting from $80,000",
    duration: "4-10 months"
  },
  {
    id: "citizen-engagement-platform",
    title: "Citizen Engagement Platform",
    description: "Digital platforms to enhance citizen participation and government transparency",
    icon: Users,
    features: [
      "Citizen Portals",
      "Online Services",
      "Feedback Systems",
      "Public Consultations",
      "Mobile Applications",
      "Social Media Integration"
    ],
    technologies: ["React", "Node.js", "Mobile", "APIs", "Cloud", "Analytics"],
    benefits: [
      "Increased citizen participation",
      "Improved transparency",
      "Better service delivery",
      "Enhanced communication"
    ],
    useCases: [
      "Public consultations",
      "Service requests",
      "Feedback collection",
      "Information dissemination"
    ],
    compliance: ["Section 508", "WCAG", "Privacy Laws", "Open Government"],
    pricing: "Starting from $60,000",
    duration: "6-12 months"
  },
  {
    id: "smart-city-solutions",
    title: "Smart City & IoT Solutions",
    description: "IoT and smart city technologies for urban planning and infrastructure management",
    icon: Globe,
    features: [
      "IoT Sensor Networks",
      "Traffic Management",
      "Environmental Monitoring",
      "Smart Lighting",
      "Waste Management",
      "Emergency Response"
    ],
    technologies: ["IoT", "Edge Computing", "5G", "AI/ML", "Cloud", "Mobile"],
    benefits: [
      "Improved city services",
      "Environmental sustainability",
      "Cost savings",
      "Better quality of life"
    ],
    useCases: [
      "Traffic optimization",
      "Environmental monitoring",
      "Public safety",
      "Infrastructure management"
    ],
    compliance: ["Smart City Standards", "Privacy Laws", "Environmental Regulations", "Safety Standards"],
    pricing: "Starting from $120,000",
    duration: "10-20 months"
  },
  {
    id: "regulatory-compliance-platform",
    title: "Regulatory Compliance Platform",
    description: "Automated compliance monitoring and reporting for government regulations",
    icon: FileText,
    features: [
      "Compliance Monitoring",
      "Automated Reporting",
      "Risk Assessment",
      "Audit Trails",
      "Policy Management",
      "Regulatory Updates"
    ],
    technologies: ["Python", "APIs", "Database", "Automation", "Analytics", "Cloud"],
    benefits: [
      "Automated compliance",
      "Reduced manual effort",
      "Real-time monitoring",
      "Audit readiness"
    ],
    useCases: [
      "Regulatory reporting",
      "Compliance tracking",
      "Risk management",
      "Audit preparation"
    ],
    compliance: ["Regulatory Standards", "Audit Requirements", "Data Protection", "Government Policies"],
    pricing: "Starting from $70,000",
    duration: "6-14 months"
  }
];

// Government statistics
const governmentStats = [
  { icon: Building, label: "Government Projects", value: "10+" },
  { icon: Users, label: "Citizens Served", value: "1M+" },
  { icon: Shield, label: "Security Implementations", value: "15+" },
  { icon: Award, label: "Compliance Standards", value: "25+" }
];

export default function GovernmentPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const breadcrumbs = [
    { name: "Home", url: "https://quadratetechsolutions.com" },
    { name: "Industries", url: "https://quadratetechsolutions.com/industries" },
    { name: "Government", url: "https://quadratetechsolutions.com/industries/government" }
  ];

  const governmentSchema = serviceSchema({
    name: "Government AI/ML Solutions",
    description: "Specialized AI/ML and software solutions for government including digital transformation, cybersecurity, citizen engagement, and smart city solutions with FedRAMP and FISMA compliance.",
    url: "https://quadratetechsolutions.com/industries/government",
    category: "Government Technology"
  });

  return (
    <>
      <ComprehensiveSEO 
        seo={{
          ...industrySEO.healthcare,
          title: "Government AI/ML Solutions | GovTech Software Development | Quadrate Tech",
          description: "Transform government operations with AI/ML solutions including digital transformation, cybersecurity, citizen engagement, and smart city technologies. FedRAMP and FISMA compliant.",
          keywords: [...industrySEO.healthcare.keywords, "government AI", "GovTech solutions", "digital transformation", "cybersecurity", "citizen engagement", "smart city", "FedRAMP compliance", "FISMA"]
        }} 
        structuredData={[organizationSchema, websiteSchema, governmentSchema]}
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
                Government <span className="gradient-text">AI/ML Solutions</span>
              </h1>
              <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
                Transform government operations with cutting-edge AI/ML solutions. From digital transformation to cybersecurity, 
                we help government agencies enhance public services while ensuring regulatory compliance.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {governmentStats.map((stat, index) => (
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
                  <span>Get GovTech Consultation</span>
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

        {/* Government Solutions Grid */}
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
                  Our Government Solutions
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive AI/ML and software solutions designed specifically for government agencies,
                  ensuring enhanced public services, operational efficiency, and regulatory compliance.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {governmentSolutions.map((solution, index) => (
                  <motion.article
                    key={solution.id}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Solution Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Solution Header */}
                    <h3 className="text-fluid-xl font-bold text-gray-900 mb-3 group-hover:text-[#0607E1] transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {solution.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Compliance */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Compliance</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.compliance.map((comp) => (
                          <span
                            key={comp}
                            className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                      <div className="space-y-1">
                        {solution.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="text-sm text-gray-600 flex items-center gap-2">
                            <Star className="w-3 h-3 text-yellow-500" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Duration */}
                    <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="text-sm text-gray-600">Starting from</div>
                        <div className="text-lg font-bold text-[#0607E1]">{solution.pricing}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Duration</div>
                        <div className="font-semibold text-gray-900">{solution.duration}</div>
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

        {/* Security & Compliance */}
        <section className="py-16 lg:py-24 bg-gray-50/50">
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
                    Security & Compliance First
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Our government solutions are built with the highest security standards and regulatory compliance.
                    We ensure all systems meet FedRAMP, FISMA, and other government requirements while protecting sensitive data.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Shield,
                        title: "FedRAMP Authorized",
                        description: "Federal Risk and Authorization Management Program compliance for cloud services"
                      },
                      {
                        icon: Lock,
                        title: "FISMA Compliant",
                        description: "Federal Information Security Management Act compliance for information systems"
                      },
                      {
                        icon: Eye,
                        title: "Section 508",
                        description: "Accessibility compliance ensuring equal access to government services"
                      },
                      {
                        icon: FileText,
                        title: "NIST Framework",
                        description: "National Institute of Standards and Technology cybersecurity framework implementation"
                      }
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0607E1]/10 to-[#4D0AFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-[#0607E1]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
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
                      <Building className="w-24 h-24 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">GovTech Innovation</h3>
                      <p className="opacity-90">
                        Transforming government services with secure, compliant, and innovative AI/ML solutions.
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
                Ready to Modernize Government Services?
              </h2>
              <p className="text-fluid-lg mb-8 opacity-90">
                Let's discuss how our AI/ML solutions can enhance public services, improve operational efficiency,
                and ensure regulatory compliance for your government agency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Building className="w-5 h-5 mr-2" />
                  Schedule Consultation
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

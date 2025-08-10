'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComprehensiveSEO from '@/components/seo/ComprehensiveSEO';
import { industrySEO } from '@/config/seo';
import { organizationSchema, websiteSchema, serviceSchema } from '@/config/structuredData';
import { 
  Settings, 
  Zap, 
  TrendingUp, 
  Brain, 
  Users, 
  Database, 
  Smartphone,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  Eye,
  Cog,
  BarChart3,
  Shield,
  Activity,
  AlertTriangle,
  Globe,
  Target,
  Wrench,
  Factory
} from 'lucide-react';

// Manufacturing Solutions data
const manufacturingSolutions = [
  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance AI",
    description: "AI-powered predictive maintenance to prevent equipment failures and optimize uptime",
    icon: Settings,
    features: [
      "Equipment Health Monitoring",
      "Failure Prediction Models",
      "Maintenance Scheduling",
      "IoT Sensor Integration",
      "Real-time Alerts",
      "Cost Optimization"
    ],
    technologies: ["Python", "TensorFlow", "IoT", "Apache Kafka", "InfluxDB", "Grafana"],
    benefits: [
      "85% reduction in unplanned downtime",
      "40% decrease in maintenance costs",
      "25% increase in equipment lifespan",
      "Real-time equipment monitoring"
    ],
    useCases: [
      "Heavy machinery monitoring",
      "Production line optimization",
      "Equipment lifecycle management",
      "Supply chain efficiency"
    ],
    compliance: ["ISO 9001", "ISO 14001", "OSHA", "IEC 61508"],
    pricing: "Starting from $60,000",
    duration: "6-12 months"
  },
  {
    id: "quality-control-ai",
    title: "AI Quality Control Systems",
    description: "Computer vision and AI for automated quality inspection and defect detection",
    icon: Eye,
    features: [
      "Automated Visual Inspection",
      "Defect Detection & Classification",
      "Real-time Quality Monitoring",
      "Statistical Process Control",
      "Batch Quality Analysis",
      "Compliance Reporting"
    ],
    technologies: ["OpenCV", "TensorFlow", "PyTorch", "Edge Computing", "MQTT", "Docker"],
    benefits: [
      "99.5% defect detection accuracy",
      "70% reduction in inspection time",
      "50% decrease in quality costs",
      "Consistent quality standards"
    ],
    useCases: [
      "Product inspection",
      "Surface defect detection",
      "Dimensional analysis",
      "Assembly verification"
    ],
    compliance: ["ISO 9001", "Six Sigma", "Lean Manufacturing", "FDA"],
    pricing: "Starting from $45,000",
    duration: "4-8 months"
  },
  {
    id: "smart-manufacturing",
    title: "Smart Manufacturing Platform",
    description: "Comprehensive IoT and AI platform for intelligent manufacturing operations",
    icon: Factory,
    features: [
      "Production Monitoring",
      "Resource Optimization",
      "Energy Management",
      "Workflow Automation",
      "Performance Analytics",
      "Digital Twin Technology"
    ],
    technologies: ["React", "Node.js", "IoT", "Edge Computing", "MongoDB", "AWS"],
    benefits: [
      "30% improvement in efficiency",
      "25% reduction in energy costs",
      "Real-time production visibility",
      "Optimized resource utilization"
    ],
    useCases: [
      "Factory automation",
      "Production planning",
      "Resource management",
      "Energy optimization"
    ],
    compliance: ["Industry 4.0", "ISO 50001", "IEC 62443", "NIST"],
    pricing: "Starting from $80,000",
    duration: "8-16 months"
  },
  {
    id: "supply-chain-optimization",
    title: "Supply Chain Optimization",
    description: "AI-driven supply chain management and logistics optimization solutions",
    icon: TrendingUp,
    features: [
      "Demand Forecasting",
      "Inventory Optimization",
      "Logistics Planning",
      "Supplier Management",
      "Risk Assessment",
      "Cost Analysis"
    ],
    technologies: ["Python", "R", "Apache Spark", "Tableau", "SAP", "Oracle"],
    benefits: [
      "20% reduction in inventory costs",
      "35% improvement in delivery times",
      "Better demand accuracy",
      "Enhanced supplier relationships"
    ],
    useCases: [
      "Inventory management",
      "Demand planning",
      "Logistics optimization",
      "Supplier evaluation"
    ],
    compliance: ["ISO 28000", "C-TPAT", "AEO", "GDPR"],
    pricing: "Starting from $70,000",
    duration: "6-14 months"
  },
  {
    id: "industrial-iot",
    title: "Industrial IoT Solutions",
    description: "Connected manufacturing with IoT sensors, edge computing, and real-time analytics",
    icon: Zap,
    features: [
      "Sensor Network Deployment",
      "Edge Computing",
      "Real-time Data Processing",
      "Machine Connectivity",
      "Cloud Integration",
      "Mobile Dashboards"
    ],
    technologies: ["IoT", "Edge Computing", "MQTT", "InfluxDB", "Grafana", "Azure IoT"],
    benefits: [
      "Real-time operational visibility",
      "Improved decision making",
      "Reduced operational costs",
      "Enhanced productivity"
    ],
    useCases: [
      "Machine monitoring",
      "Environmental sensing",
      "Asset tracking",
      "Process optimization"
    ],
    compliance: ["IEC 62443", "ISO 27001", "NIST", "Industry 4.0"],
    pricing: "Starting from $50,000",
    duration: "4-10 months"
  },
  {
    id: "manufacturing-analytics",
    title: "Manufacturing Analytics & BI",
    description: "Advanced analytics and business intelligence for manufacturing insights",
    icon: BarChart3,
    features: [
      "Production Dashboards",
      "OEE Analysis",
      "Performance Metrics",
      "Trend Analysis",
      "Predictive Analytics",
      "Custom Reporting"
    ],
    technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark", "Snowflake"],
    benefits: [
      "40% improvement in OEE",
      "Data-driven decisions",
      "Performance optimization",
      "Cost reduction insights"
    ],
    useCases: [
      "Production analysis",
      "Equipment performance",
      "Quality metrics",
      "Cost analysis"
    ],
    compliance: ["ISO 9001", "Lean Manufacturing", "Six Sigma", "GDPR"],
    pricing: "Starting from $35,000",
    duration: "3-6 months"
  }
];

// Manufacturing statistics
const manufacturingStats = [
  { icon: Factory, label: "Manufacturing Projects", value: "20+" },
  { icon: TrendingUp, label: "Efficiency Improvement", value: "35%" },
  { icon: Users, label: "Manufacturing Clients", value: "12+" },
  { icon: Award, label: "Industry Standards", value: "15+" }
];

export default function ManufacturingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const breadcrumbs = [
    { name: "Home", url: "https://quadratetechsolutions.com" },
    { name: "Industries", url: "https://quadratetechsolutions.com/industries" },
    { name: "Manufacturing", url: "https://quadratetechsolutions.com/industries/manufacturing" }
  ];

  const manufacturingSchema = serviceSchema({
    name: "Manufacturing AI/ML Solutions",
    description: "Specialized AI/ML and IoT solutions for manufacturing including predictive maintenance, quality control, smart manufacturing, and supply chain optimization with Industry 4.0 compliance.",
    url: "https://quadratetechsolutions.com/industries/manufacturing",
    category: "Manufacturing Technology"
  });

  return (
    <>
      <ComprehensiveSEO 
        seo={industrySEO.manufacturing} 
        structuredData={[organizationSchema, websiteSchema, manufacturingSchema]}
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
                Smart Manufacturing <span className="gradient-text">AI/ML Solutions</span>
              </h1>
              <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
                Transform your manufacturing operations with Industry 4.0 AI/ML solutions. From predictive maintenance to quality control, 
                we help manufacturers optimize efficiency, reduce costs, and enhance productivity.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {manufacturingStats.map((stat, index) => (
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
                  <span>Get Manufacturing Consultation</span>
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

        {/* Manufacturing Solutions Grid */}
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
                  Our Manufacturing Solutions
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive AI/ML and IoT solutions designed specifically for manufacturing operations,
                  ensuring Industry 4.0 compliance, efficiency optimization, and enhanced productivity.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {manufacturingSolutions.map((solution, index) => (
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
                      <h4 className="font-semibold text-gray-900 mb-3">Standards</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.compliance.map((comp) => (
                          <span
                            key={comp}
                            className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full"
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

        {/* Industry 4.0 Features */}
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
                    Industry 4.0 Ready Solutions
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Our manufacturing solutions are built for the future of manufacturing.
                    We implement Industry 4.0 standards with IoT integration, AI-driven automation, and real-time analytics.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Zap,
                        title: "IoT Integration",
                        description: "Seamless connectivity between machines, sensors, and systems for real-time data flow"
                      },
                      {
                        icon: Brain,
                        title: "AI-Driven Automation",
                        description: "Intelligent automation that learns and adapts to optimize manufacturing processes"
                      },
                      {
                        icon: BarChart3,
                        title: "Real-time Analytics",
                        description: "Instant insights and predictive analytics for proactive decision making"
                      },
                      {
                        icon: Shield,
                        title: "Cybersecurity",
                        description: "Industrial-grade security to protect manufacturing systems and data"
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
                      <Factory className="w-24 h-24 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Smart Manufacturing</h3>
                      <p className="opacity-90">
                        Transforming manufacturing with intelligent automation, IoT connectivity, and AI-driven insights.
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
                Ready for Smart Manufacturing?
              </h2>
              <p className="text-fluid-lg mb-8 opacity-90">
                Let's discuss how our Industry 4.0 solutions can optimize your manufacturing operations,
                reduce costs, and enhance productivity with AI-driven automation and IoT integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Factory className="w-5 h-5 mr-2" />
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

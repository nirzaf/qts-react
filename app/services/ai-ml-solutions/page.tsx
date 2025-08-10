'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComprehensiveSEO from '@/components/seo/ComprehensiveSEO';
import { serviceSEO } from '@/config/seo';
import { organizationSchema, websiteSchema, serviceSchema } from '@/config/structuredData';
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  Cpu, 
  BarChart3, 
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
  Globe,
  Database,
  Code,
  Lightbulb,
  Settings
} from 'lucide-react';

// AI/ML Services data
const aiMlServices = [
  {
    id: "ai-strategy-consulting",
    title: "AI Strategy & Consulting",
    description: "Strategic guidance for AI adoption and implementation roadmaps",
    icon: Brain,
    features: [
      "AI Readiness Assessment",
      "Technology Roadmap Development",
      "ROI Analysis & Business Case",
      "Implementation Strategy",
      "Risk Assessment & Mitigation",
      "Change Management Planning"
    ],
    benefits: [
      "Reduced implementation risks",
      "Clear ROI projections",
      "Optimized resource allocation",
      "Faster time-to-market"
    ],
    useCases: [
      "Digital transformation planning",
      "AI adoption strategy",
      "Technology stack selection",
      "Team capability assessment"
    ],
    pricing: "Starting from $5,000",
    duration: "2-4 weeks",
    deliverables: [
      "AI Readiness Report",
      "Implementation Roadmap",
      "Technology Recommendations",
      "ROI Analysis Document"
    ]
  },
  {
    id: "machine-learning-models",
    title: "Custom Machine Learning Models",
    description: "Tailored ML solutions for predictive analytics and automation",
    icon: Cpu,
    features: [
      "Predictive Analytics Models",
      "Classification & Regression",
      "Recommendation Systems",
      "Anomaly Detection",
      "Time Series Forecasting",
      "Deep Learning Solutions"
    ],
    benefits: [
      "Improved decision making",
      "Automated processes",
      "Enhanced customer experience",
      "Competitive advantage"
    ],
    useCases: [
      "Sales forecasting",
      "Customer churn prediction",
      "Fraud detection",
      "Quality control automation"
    ],
    pricing: "Starting from $15,000",
    duration: "6-12 weeks",
    deliverables: [
      "Trained ML Models",
      "Model Documentation",
      "Performance Reports",
      "Deployment Package"
    ]
  },
  {
    id: "computer-vision",
    title: "Computer Vision Solutions",
    description: "Advanced image and video analysis capabilities",
    icon: Eye,
    features: [
      "Object Detection & Recognition",
      "Facial Recognition Systems",
      "Medical Image Analysis",
      "Quality Control Inspection",
      "OCR & Document Processing",
      "Real-time Video Analytics"
    ],
    benefits: [
      "Automated visual inspection",
      "Enhanced security systems",
      "Improved quality control",
      "Reduced manual effort"
    ],
    useCases: [
      "Manufacturing quality control",
      "Medical diagnosis assistance",
      "Security surveillance",
      "Retail analytics"
    ],
    pricing: "Starting from $20,000",
    duration: "8-16 weeks",
    deliverables: [
      "Computer Vision Models",
      "Integration APIs",
      "Performance Metrics",
      "User Interface"
    ]
  },
  {
    id: "natural-language-processing",
    title: "Natural Language Processing",
    description: "Text analysis and conversational AI solutions",
    icon: MessageSquare,
    features: [
      "Sentiment Analysis",
      "Chatbots & Virtual Assistants",
      "Document Classification",
      "Language Translation",
      "Text Summarization",
      "Named Entity Recognition"
    ],
    benefits: [
      "Improved customer service",
      "Automated content analysis",
      "Enhanced user experience",
      "Multilingual support"
    ],
    useCases: [
      "Customer support automation",
      "Content moderation",
      "Document processing",
      "Social media monitoring"
    ],
    pricing: "Starting from $12,000",
    duration: "6-10 weeks",
    deliverables: [
      "NLP Models",
      "API Endpoints",
      "Training Data",
      "Integration Guide"
    ]
  },
  {
    id: "generative-ai",
    title: "Generative AI Solutions",
    description: "Content generation and creative AI applications",
    icon: Lightbulb,
    features: [
      "Text Generation",
      "Image Synthesis",
      "Code Generation",
      "Creative Content Creation",
      "Data Augmentation",
      "Personalized Content"
    ],
    benefits: [
      "Accelerated content creation",
      "Enhanced creativity",
      "Personalized experiences",
      "Cost-effective scaling"
    ],
    useCases: [
      "Marketing content generation",
      "Product descriptions",
      "Code assistance",
      "Creative design"
    ],
    pricing: "Starting from $18,000",
    duration: "8-14 weeks",
    deliverables: [
      "Generative Models",
      "Content Pipeline",
      "Quality Filters",
      "User Interface"
    ]
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Pipeline",
    description: "Robust data infrastructure for AI/ML workflows",
    icon: Database,
    features: [
      "Data Pipeline Development",
      "ETL/ELT Processes",
      "Data Lake Architecture",
      "Real-time Data Processing",
      "Data Quality Management",
      "Cloud Data Solutions"
    ],
    benefits: [
      "Reliable data flow",
      "Scalable infrastructure",
      "Improved data quality",
      "Faster insights"
    ],
    useCases: [
      "Data warehouse modernization",
      "Real-time analytics",
      "ML data preparation",
      "Business intelligence"
    ],
    pricing: "Starting from $25,000",
    duration: "10-16 weeks",
    deliverables: [
      "Data Pipeline",
      "Architecture Documentation",
      "Monitoring Dashboard",
      "Maintenance Guide"
    ]
  },
  {
    id: "mlops-solutions",
    title: "MLOps & Model Management",
    description: "Production-ready ML operations and monitoring",
    icon: Settings,
    features: [
      "Model Deployment Automation",
      "Continuous Integration/Deployment",
      "Model Monitoring & Alerting",
      "A/B Testing Framework",
      "Model Versioning",
      "Performance Optimization"
    ],
    benefits: [
      "Faster model deployment",
      "Improved model reliability",
      "Automated monitoring",
      "Reduced operational costs"
    ],
    useCases: [
      "Production ML systems",
      "Model lifecycle management",
      "Automated retraining",
      "Performance monitoring"
    ],
    pricing: "Starting from $30,000",
    duration: "12-20 weeks",
    deliverables: [
      "MLOps Platform",
      "Deployment Pipelines",
      "Monitoring System",
      "Documentation"
    ]
  }
];

// Process steps
const processSteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We analyze your business needs, data landscape, and AI readiness to create a comprehensive strategy.",
    icon: Target
  },
  {
    step: "02", 
    title: "Solution Design",
    description: "Our experts design custom AI/ML solutions tailored to your specific requirements and constraints.",
    icon: Brain
  },
  {
    step: "03",
    title: "Development & Training",
    description: "We develop and train AI models using cutting-edge techniques and your proprietary data.",
    icon: Code
  },
  {
    step: "04",
    title: "Deployment & Optimization",
    description: "We deploy solutions to production and continuously optimize performance for maximum ROI.",
    icon: Zap
  }
];

export default function AIMlSolutionsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const breadcrumbs = [
    { name: "Home", url: "https://quadratetechsolutions.com" },
    { name: "Services", url: "https://quadratetechsolutions.com/services" },
    { name: "AI/ML Solutions", url: "https://quadratetechsolutions.com/services/ai-ml-solutions" }
  ];

  const aiMlServiceSchema = serviceSchema({
    name: "AI/ML Solutions",
    description: "Comprehensive artificial intelligence and machine learning solutions including custom models, computer vision, NLP, and MLOps.",
    url: "https://quadratetechsolutions.com/services/ai-ml-solutions",
    category: "AI/ML Development"
  });

  return (
    <>
      <ComprehensiveSEO 
        seo={serviceSEO.aiMlSolutions} 
        structuredData={[organizationSchema, websiteSchema, aiMlServiceSchema]}
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
                AI/ML <span className="gradient-text">Solutions</span>
              </h1>
              <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business with cutting-edge artificial intelligence and machine learning solutions. 
                From strategy to deployment, we deliver AI that drives real business value.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: Brain, label: "AI Models Deployed", value: "100+" },
                  { icon: TrendingUp, label: "Average ROI", value: "300%" },
                  { icon: Users, label: "AI Projects", value: "50+" },
                  { icon: Award, label: "Success Rate", value: "98%" }
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
                  <span>Get AI Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
                <motion.a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0607E1] text-[#0607E1] font-semibold rounded-full hover:bg-[#0607E1] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View AI Projects</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI/ML Services Grid */}
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
                  Our AI/ML Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive artificial intelligence and machine learning solutions designed to transform your business operations and drive innovation.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiMlServices.map((service, index) => (
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
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.a>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                  Our AI/ML Development Process
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  A proven methodology that ensures successful AI implementation from concept to production deployment.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
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
                      {index < processSteps.length - 1 && (
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
                    Why Choose Our AI/ML Solutions?
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    We combine deep technical expertise with business acumen to deliver AI solutions that drive measurable results.
                    Our team of certified AI engineers and data scientists ensures your project success.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Brain,
                        title: "Expert AI Team",
                        description: "Certified AI engineers and data scientists with 100+ successful projects"
                      },
                      {
                        icon: Shield,
                        title: "Enterprise Security",
                        description: "Bank-grade security and compliance with industry standards"
                      },
                      {
                        icon: TrendingUp,
                        title: "Proven ROI",
                        description: "Average 300% ROI within 12 months of AI implementation"
                      },
                      {
                        icon: Clock,
                        title: "24/7 Support",
                        description: "Round-the-clock monitoring and support for production AI systems"
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
                      <Brain className="w-24 h-24 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">AI-Powered Innovation</h3>
                      <p className="opacity-90">
                        Transforming businesses with cutting-edge artificial intelligence and machine learning solutions.
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
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-fluid-lg mb-8 opacity-90">
                Get a free AI readiness assessment and discover how artificial intelligence can drive growth,
                efficiency, and innovation in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Free AI Assessment
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

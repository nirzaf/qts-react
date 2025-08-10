'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComprehensiveSEO from '@/components/seo/ComprehensiveSEO';
import { serviceSEO } from '@/config/seo';
import { organizationSchema, websiteSchema, serviceSchema } from '@/config/structuredData';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  Lightbulb,
  Settings,
  Globe,
  Database,
  Code,
  Eye,
  MessageSquare,
  FileText
} from 'lucide-react';

// AI Strategy Services data
const aiStrategyServices = [
  {
    id: "ai-readiness-assessment",
    title: "AI Readiness Assessment",
    description: "Comprehensive evaluation of your organization's AI readiness and potential",
    icon: Target,
    features: [
      "Current State Analysis",
      "Data Maturity Assessment",
      "Technology Infrastructure Review",
      "Team Capability Evaluation",
      "Risk Assessment",
      "ROI Potential Analysis"
    ],
    deliverables: [
      "AI Readiness Report",
      "Gap Analysis Document",
      "Recommendations Matrix",
      "Implementation Roadmap"
    ],
    duration: "2-4 weeks",
    pricing: "Starting from $15,000",
    benefits: [
      "Clear understanding of AI potential",
      "Identified implementation gaps",
      "Risk mitigation strategies",
      "Prioritized action plan"
    ]
  },
  {
    id: "ai-strategy-development",
    title: "AI Strategy Development",
    description: "Custom AI strategy aligned with your business objectives and market position",
    icon: Brain,
    features: [
      "Business Objective Alignment",
      "Use Case Identification",
      "Technology Stack Selection",
      "Implementation Timeline",
      "Resource Planning",
      "Success Metrics Definition"
    ],
    deliverables: [
      "AI Strategy Document",
      "Implementation Roadmap",
      "Technology Architecture",
      "Business Case Analysis"
    ],
    duration: "4-8 weeks",
    pricing: "Starting from $25,000",
    benefits: [
      "Strategic AI direction",
      "Aligned business objectives",
      "Clear implementation path",
      "Measurable success criteria"
    ]
  },
  {
    id: "ai-governance-framework",
    title: "AI Governance & Ethics Framework",
    description: "Establish responsible AI practices and governance structures",
    icon: Shield,
    features: [
      "AI Ethics Guidelines",
      "Governance Structure",
      "Risk Management Framework",
      "Compliance Protocols",
      "Bias Detection Methods",
      "Transparency Standards"
    ],
    deliverables: [
      "AI Governance Framework",
      "Ethics Guidelines",
      "Risk Management Plan",
      "Compliance Checklist"
    ],
    duration: "3-6 weeks",
    pricing: "Starting from $20,000",
    benefits: [
      "Responsible AI implementation",
      "Regulatory compliance",
      "Risk mitigation",
      "Stakeholder trust"
    ]
  },
  {
    id: "ai-transformation-roadmap",
    title: "Digital Transformation Roadmap",
    description: "Comprehensive roadmap for AI-driven digital transformation",
    icon: TrendingUp,
    features: [
      "Current State Assessment",
      "Future State Vision",
      "Transformation Phases",
      "Change Management",
      "Technology Migration",
      "Performance Metrics"
    ],
    deliverables: [
      "Transformation Roadmap",
      "Phase Implementation Plans",
      "Change Management Strategy",
      "Success Metrics Framework"
    ],
    duration: "6-10 weeks",
    pricing: "Starting from $35,000",
    benefits: [
      "Structured transformation approach",
      "Minimized disruption",
      "Accelerated AI adoption",
      "Sustainable change"
    ]
  },
  {
    id: "ai-roi-optimization",
    title: "AI ROI Optimization",
    description: "Maximize return on investment from AI initiatives and implementations",
    icon: BarChart3,
    features: [
      "ROI Measurement Framework",
      "Performance Optimization",
      "Cost-Benefit Analysis",
      "Value Stream Mapping",
      "KPI Development",
      "Continuous Improvement"
    ],
    deliverables: [
      "ROI Measurement Framework",
      "Performance Dashboard",
      "Optimization Recommendations",
      "Value Realization Plan"
    ],
    duration: "4-8 weeks",
    pricing: "Starting from $30,000",
    benefits: [
      "Maximized AI investment returns",
      "Clear value demonstration",
      "Optimized performance",
      "Continuous improvement"
    ]
  },
  {
    id: "ai-team-development",
    title: "AI Team Development & Training",
    description: "Build internal AI capabilities and develop your team's expertise",
    icon: Users,
    features: [
      "Skills Gap Analysis",
      "Training Program Design",
      "Hands-on Workshops",
      "Mentoring Programs",
      "Certification Paths",
      "Knowledge Transfer"
    ],
    deliverables: [
      "Skills Assessment Report",
      "Training Curriculum",
      "Workshop Materials",
      "Certification Roadmap"
    ],
    duration: "8-16 weeks",
    pricing: "Starting from $40,000",
    benefits: [
      "Enhanced team capabilities",
      "Reduced dependency on external resources",
      "Improved AI project success",
      "Long-term sustainability"
    ]
  }
];

// Consulting process
const consultingProcess = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "Deep dive into your business, current state, and AI aspirations to understand opportunities and challenges.",
    icon: Eye
  },
  {
    step: "02",
    title: "Strategy Design",
    description: "Develop comprehensive AI strategy aligned with business objectives and market opportunities.",
    icon: Brain
  },
  {
    step: "03",
    title: "Roadmap Creation",
    description: "Create detailed implementation roadmap with phases, timelines, and resource requirements.",
    icon: Target
  },
  {
    step: "04",
    title: "Implementation Support",
    description: "Provide ongoing guidance and support throughout the AI transformation journey.",
    icon: Users
  }
];

export default function AIStrategyConsultingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const breadcrumbs = [
    { name: "Home", url: "https://quadratetechsolutions.com" },
    { name: "Services", url: "https://quadratetechsolutions.com/services" },
    { name: "AI Strategy Consulting", url: "https://quadratetechsolutions.com/services/ai-strategy-consulting" }
  ];

  const aiStrategySchema = serviceSchema({
    name: "AI Strategy Consulting",
    description: "Expert AI strategy consulting services including readiness assessment, strategy development, governance framework, and transformation roadmap for successful AI adoption.",
    url: "https://quadratetechsolutions.com/services/ai-strategy-consulting",
    category: "AI Strategy & Consulting"
  });

  return (
    <>
      <ComprehensiveSEO 
        seo={{
          ...serviceSEO.aiMlSolutions,
          title: "AI Strategy Consulting | AI Transformation Roadmap | Quadrate Tech Solutions",
          description: "Expert AI strategy consulting services including AI readiness assessment, transformation roadmap, governance framework, and ROI optimization. Accelerate your AI adoption with proven methodologies.",
          keywords: [...serviceSEO.aiMlSolutions.keywords, "AI strategy consulting", "AI transformation", "AI readiness assessment", "AI governance", "AI ROI optimization", "digital transformation", "AI implementation roadmap"]
        }} 
        structuredData={[organizationSchema, websiteSchema, aiStrategySchema]}
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
                AI Strategy <span className="gradient-text">Consulting</span>
              </h1>
              <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
                Accelerate your AI transformation with expert strategy consulting. From readiness assessment to implementation roadmap, 
                we guide organizations through successful AI adoption with proven methodologies and measurable results.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: Brain, label: "AI Strategies Developed", value: "50+" },
                  { icon: TrendingUp, label: "Average ROI Increase", value: "300%" },
                  { icon: Users, label: "Organizations Transformed", value: "25+" },
                  { icon: Award, label: "Success Rate", value: "95%" }
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
                  <span>Get AI Strategy Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
                <motion.a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0607E1] text-[#0607E1] font-semibold rounded-full hover:bg-[#0607E1] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Success Stories</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Strategy Services Grid */}
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
                  Our AI Strategy Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive AI strategy consulting services designed to accelerate your AI transformation
                  and maximize return on investment through proven methodologies.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiStrategyServices.map((service, index) => (
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

                    {/* Deliverables */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Deliverables</h4>
                      <div className="space-y-1">
                        {service.deliverables.slice(0, 3).map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="text-sm text-gray-600 flex items-center gap-2">
                            <FileText className="w-3 h-3 text-blue-500" />
                            <span>{deliverable}</span>
                          </div>
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
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.a>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Process */}
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
                  Our AI Strategy Consulting Process
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  A proven methodology that ensures successful AI strategy development and implementation
                  with measurable business outcomes.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {consultingProcess.map((step, index) => (
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
                      {index < consultingProcess.length - 1 && (
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

        {/* Why Choose Our AI Strategy Consulting */}
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
                    Why Choose Our AI Strategy Consulting?
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    We combine deep technical expertise with business acumen to deliver AI strategies that drive real results.
                    Our proven methodologies have helped 25+ organizations successfully transform their operations with AI.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Brain,
                        title: "Proven Expertise",
                        description: "50+ successful AI strategies developed across diverse industries and use cases"
                      },
                      {
                        icon: TrendingUp,
                        title: "Measurable Results",
                        description: "Average 300% ROI increase within 12 months of strategy implementation"
                      },
                      {
                        icon: Shield,
                        title: "Risk Mitigation",
                        description: "Comprehensive risk assessment and mitigation strategies for successful AI adoption"
                      },
                      {
                        icon: Users,
                        title: "End-to-End Support",
                        description: "From strategy development to implementation support and team training"
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
                      <h3 className="text-2xl font-bold mb-4">Strategic AI Leadership</h3>
                      <p className="opacity-90">
                        Guiding organizations through successful AI transformation with proven strategies and measurable results.
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
                Ready to Accelerate Your AI Journey?
              </h2>
              <p className="text-fluid-lg mb-8 opacity-90">
                Get a free AI readiness assessment and discover how our proven AI strategy consulting
                can transform your organization and drive measurable business results.
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

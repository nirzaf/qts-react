'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComprehensiveSEO from '@/components/seo/ComprehensiveSEO';
import { industrySEO } from '@/config/seo';
import { organizationSchema, websiteSchema, serviceSchema } from '@/config/structuredData';
import { 
  DollarSign, 
  Shield, 
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
  CreditCard,
  BarChart3,
  Zap,
  Lock,
  AlertTriangle,
  Globe,
  Target
} from 'lucide-react';

// Finance Solutions data
const financeSolutions = [
  {
    id: "fraud-detection-ai",
    title: "AI-Powered Fraud Detection",
    description: "Real-time fraud detection and prevention using advanced machine learning",
    icon: Shield,
    features: [
      "Real-time Transaction Monitoring",
      "Behavioral Pattern Analysis",
      "Risk Scoring Models",
      "Anomaly Detection",
      "False Positive Reduction",
      "Automated Response Systems"
    ],
    technologies: ["Python", "TensorFlow", "Apache Kafka", "Redis", "Elasticsearch", "Docker"],
    benefits: [
      "99.2% fraud detection rate",
      "80% reduction in false positives",
      "50ms response time",
      "$5M+ annual savings"
    ],
    useCases: [
      "Credit card fraud prevention",
      "Online banking security",
      "Payment processing",
      "Identity verification"
    ],
    compliance: ["PCI DSS", "SOX", "GDPR", "ISO 27001"],
    pricing: "Starting from $75,000",
    duration: "6-12 months"
  },
  {
    id: "algorithmic-trading",
    title: "Algorithmic Trading Systems",
    description: "High-frequency trading algorithms and portfolio optimization solutions",
    icon: TrendingUp,
    features: [
      "High-Frequency Trading",
      "Portfolio Optimization",
      "Risk Management",
      "Market Data Analysis",
      "Backtesting Framework",
      "Real-time Execution"
    ],
    technologies: ["Python", "C++", "Apache Kafka", "QuantLib", "MongoDB", "Redis"],
    benefits: [
      "300% increase in trading efficiency",
      "25% improvement in returns",
      "Reduced execution costs",
      "Real-time risk monitoring"
    ],
    useCases: [
      "Hedge fund trading",
      "Investment banking",
      "Asset management",
      "Market making"
    ],
    compliance: ["MiFID II", "CFTC", "SEC", "FCA"],
    pricing: "Starting from $100,000",
    duration: "8-16 months"
  },
  {
    id: "risk-management-ai",
    title: "AI Risk Management",
    description: "Comprehensive risk assessment and management using predictive analytics",
    icon: AlertTriangle,
    features: [
      "Credit Risk Assessment",
      "Market Risk Analysis",
      "Operational Risk Monitoring",
      "Stress Testing",
      "Regulatory Reporting",
      "Portfolio Risk Analytics"
    ],
    technologies: ["Python", "R", "SAS", "Apache Spark", "Tableau", "AWS"],
    benefits: [
      "40% improvement in risk prediction",
      "30% reduction in defaults",
      "Automated compliance reporting",
      "Enhanced decision making"
    ],
    useCases: [
      "Credit scoring",
      "Loan underwriting",
      "Investment risk assessment",
      "Regulatory compliance"
    ],
    compliance: ["Basel III", "CCAR", "IFRS 9", "Solvency II"],
    pricing: "Starting from $60,000",
    duration: "6-10 months"
  },
  {
    id: "robo-advisory",
    title: "Robo-Advisory Platforms",
    description: "Automated investment advisory and portfolio management solutions",
    icon: Brain,
    features: [
      "Automated Portfolio Management",
      "Risk Profiling",
      "Rebalancing Algorithms",
      "Tax Optimization",
      "Goal-based Investing",
      "Client Reporting"
    ],
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "AWS", "Stripe"],
    benefits: [
      "70% reduction in advisory costs",
      "24/7 portfolio monitoring",
      "Improved client engagement",
      "Scalable investment solutions"
    ],
    useCases: [
      "Wealth management",
      "Retirement planning",
      "Investment advisory",
      "Digital banking"
    ],
    compliance: ["SEC", "FINRA", "GDPR", "SOC 2"],
    pricing: "Starting from $80,000",
    duration: "8-14 months"
  },
  {
    id: "digital-banking",
    title: "Digital Banking Solutions",
    description: "Complete digital banking platforms with mobile and web applications",
    icon: Smartphone,
    features: [
      "Mobile Banking Apps",
      "Online Account Management",
      "Digital Payments",
      "KYC/AML Integration",
      "Customer Onboarding",
      "Multi-channel Support"
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS", "Twilio"],
    benefits: [
      "60% increase in customer acquisition",
      "50% reduction in operational costs",
      "Improved customer satisfaction",
      "Faster time-to-market"
    ],
    useCases: [
      "Neobanks",
      "Credit unions",
      "Community banks",
      "Fintech startups"
    ],
    compliance: ["PCI DSS", "KYC", "AML", "Open Banking"],
    pricing: "Starting from $120,000",
    duration: "10-18 months"
  },
  {
    id: "financial-analytics",
    title: "Financial Analytics & BI",
    description: "Advanced analytics and business intelligence for financial insights",
    icon: BarChart3,
    features: [
      "Financial Dashboards",
      "Predictive Analytics",
      "Performance Metrics",
      "Regulatory Reporting",
      "Customer Analytics",
      "Market Intelligence"
    ],
    technologies: ["Python", "R", "Tableau", "Power BI", "Snowflake", "Apache Spark"],
    benefits: [
      "35% improvement in decision making",
      "Real-time financial insights",
      "Automated reporting",
      "Enhanced profitability"
    ],
    useCases: [
      "Financial planning",
      "Performance analysis",
      "Risk reporting",
      "Customer insights"
    ],
    compliance: ["SOX", "GAAP", "IFRS", "Basel III"],
    pricing: "Starting from $45,000",
    duration: "4-8 months"
  }
];

// Finance statistics
const financeStats = [
  { icon: DollarSign, label: "FinTech Projects", value: "30+" },
  { icon: Shield, label: "Fraud Prevented", value: "$50M+" },
  { icon: Users, label: "Financial Institutions", value: "15+" },
  { icon: Award, label: "Compliance Standards", value: "20+" }
];

export default function FinancePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const breadcrumbs = [
    { name: "Home", url: "https://quadratetechsolutions.com" },
    { name: "Industries", url: "https://quadratetechsolutions.com/industries" },
    { name: "Finance", url: "https://quadratetechsolutions.com/industries/finance" }
  ];

  const financeSchema = serviceSchema({
    name: "FinTech AI/ML Solutions",
    description: "Specialized AI/ML and software solutions for financial services including fraud detection, algorithmic trading, risk management, and digital banking with regulatory compliance.",
    url: "https://quadratetechsolutions.com/industries/finance",
    category: "Financial Technology"
  });

  return (
    <>
      <ComprehensiveSEO 
        seo={industrySEO.finance} 
        structuredData={[organizationSchema, websiteSchema, financeSchema]}
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
                FinTech <span className="gradient-text">AI/ML Solutions</span>
              </h1>
              <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
                Revolutionize financial services with cutting-edge AI/ML solutions. From fraud detection to algorithmic trading, 
                we help financial institutions innovate while maintaining regulatory compliance.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {financeStats.map((stat, index) => (
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
                  <span>Get FinTech Consultation</span>
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

        {/* Finance Solutions Grid */}
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
                  Our FinTech Solutions
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive AI/ML and software solutions designed specifically for financial services,
                  ensuring regulatory compliance, security, and enhanced performance.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {financeSolutions.map((solution, index) => (
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
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
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

        {/* Regulatory Compliance */}
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
                    Regulatory Compliant & Secure
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Our financial solutions are built to meet the strictest regulatory requirements.
                    We ensure compliance with global financial regulations while maintaining the highest levels of security and performance.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Shield,
                        title: "PCI DSS Compliance",
                        description: "Full compliance with Payment Card Industry Data Security Standards"
                      },
                      {
                        icon: Lock,
                        title: "Bank-Grade Security",
                        description: "Military-grade encryption and multi-layer security protocols"
                      },
                      {
                        icon: BarChart3,
                        title: "Risk Management",
                        description: "Advanced risk assessment and monitoring with real-time alerts"
                      },
                      {
                        icon: Globe,
                        title: "Global Standards",
                        description: "Compliance with international financial regulations and standards"
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
                      <DollarSign className="w-24 h-24 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">FinTech Innovation</h3>
                      <p className="opacity-90">
                        Transforming financial services with secure, compliant, and innovative AI/ML solutions.
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
                Ready to Innovate in Finance?
              </h2>
              <p className="text-fluid-lg mb-8 opacity-90">
                Let's discuss how our AI/ML solutions can enhance security, improve efficiency,
                and drive innovation in your financial services while ensuring full regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <DollarSign className="w-5 h-5 mr-2" />
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

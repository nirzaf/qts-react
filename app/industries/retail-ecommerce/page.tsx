'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComprehensiveSEO from '@/components/seo/ComprehensiveSEO';
import { industrySEO } from '@/config/seo';
import { organizationSchema, websiteSchema, serviceSchema } from '@/config/structuredData';
import { 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  Brain, 
  Eye, 
  Database, 
  Smartphone,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  Target,
  BarChart3,
  Shield,
  Zap,
  Globe,
  CreditCard,
  Package,
  Search,
  Heart,
  MessageSquare
} from 'lucide-react';

// Retail/E-commerce Solutions data
const retailSolutions = [
  {
    id: "ai-recommendation-engine",
    title: "AI Recommendation Engine",
    description: "Personalized product recommendations to increase sales and customer engagement",
    icon: Brain,
    features: [
      "Collaborative Filtering",
      "Content-Based Recommendations",
      "Real-time Personalization",
      "A/B Testing Framework",
      "Cross-sell & Upsell",
      "Customer Behavior Analysis"
    ],
    technologies: ["Python", "TensorFlow", "Apache Spark", "Redis", "Elasticsearch", "React"],
    benefits: [
      "35% increase in conversion rates",
      "50% improvement in customer engagement",
      "25% boost in average order value",
      "Enhanced customer experience"
    ],
    useCases: [
      "E-commerce platforms",
      "Online marketplaces",
      "Retail websites",
      "Mobile shopping apps"
    ],
    compliance: ["GDPR", "CCPA", "PCI DSS", "SOC 2"],
    pricing: "Starting from $40,000",
    duration: "4-8 months"
  },
  {
    id: "inventory-management-ai",
    title: "AI Inventory Management",
    description: "Smart inventory optimization with demand forecasting and automated replenishment",
    icon: Package,
    features: [
      "Demand Forecasting",
      "Automated Replenishment",
      "Stock Optimization",
      "Seasonal Analysis",
      "Supplier Integration",
      "Multi-location Management"
    ],
    technologies: ["Python", "R", "Apache Spark", "SAP", "Oracle", "Tableau"],
    benefits: [
      "30% reduction in inventory costs",
      "95% stock availability",
      "40% decrease in overstock",
      "Improved cash flow"
    ],
    useCases: [
      "Retail chains",
      "E-commerce warehouses",
      "Fashion retailers",
      "Grocery stores"
    ],
    compliance: ["ISO 9001", "GDPR", "SOX", "Industry Standards"],
    pricing: "Starting from $50,000",
    duration: "6-12 months"
  },
  {
    id: "customer-analytics-platform",
    title: "Customer Analytics Platform",
    description: "Comprehensive customer insights and behavior analysis for data-driven decisions",
    icon: BarChart3,
    features: [
      "Customer Segmentation",
      "Lifetime Value Analysis",
      "Churn Prediction",
      "Journey Mapping",
      "Sentiment Analysis",
      "Predictive Analytics"
    ],
    technologies: ["Python", "R", "Tableau", "Power BI", "Google Analytics", "Snowflake"],
    benefits: [
      "25% increase in customer retention",
      "40% improvement in marketing ROI",
      "Better customer understanding",
      "Data-driven decision making"
    ],
    useCases: [
      "Customer retention",
      "Marketing optimization",
      "Product development",
      "Pricing strategies"
    ],
    compliance: ["GDPR", "CCPA", "SOC 2", "Privacy Laws"],
    pricing: "Starting from $35,000",
    duration: "3-6 months"
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform Development",
    description: "Custom e-commerce platforms with modern features and seamless user experience",
    icon: ShoppingCart,
    features: [
      "Responsive Design",
      "Payment Gateway Integration",
      "Multi-vendor Support",
      "Mobile App Development",
      "SEO Optimization",
      "Analytics Integration"
    ],
    technologies: ["React", "Next.js", "Node.js", "Stripe", "PayPal", "AWS"],
    benefits: [
      "60% faster page load times",
      "Mobile-first experience",
      "Secure payment processing",
      "Scalable architecture"
    ],
    useCases: [
      "Online stores",
      "B2B marketplaces",
      "Subscription services",
      "Digital products"
    ],
    compliance: ["PCI DSS", "GDPR", "ADA", "WCAG"],
    pricing: "Starting from $60,000",
    duration: "8-16 months"
  },
  {
    id: "price-optimization-ai",
    title: "AI Price Optimization",
    description: "Dynamic pricing strategies using AI to maximize revenue and competitiveness",
    icon: TrendingUp,
    features: [
      "Dynamic Pricing",
      "Competitor Analysis",
      "Demand-based Pricing",
      "Price Elasticity Analysis",
      "Revenue Optimization",
      "Market Intelligence"
    ],
    technologies: ["Python", "R", "Apache Spark", "Machine Learning", "APIs", "Cloud"],
    benefits: [
      "15% increase in revenue",
      "Competitive pricing advantage",
      "Optimized profit margins",
      "Real-time price adjustments"
    ],
    useCases: [
      "E-commerce pricing",
      "Retail optimization",
      "Dynamic promotions",
      "Market positioning"
    ],
    compliance: ["Fair Trading", "GDPR", "Competition Law", "Industry Standards"],
    pricing: "Starting from $45,000",
    duration: "4-8 months"
  },
  {
    id: "omnichannel-solution",
    title: "Omnichannel Retail Solution",
    description: "Unified customer experience across all channels with integrated systems",
    icon: Globe,
    features: [
      "Channel Integration",
      "Unified Customer Profile",
      "Cross-channel Analytics",
      "Inventory Synchronization",
      "Order Management",
      "Customer Service Integration"
    ],
    technologies: ["React", "Node.js", "Microservices", "APIs", "Cloud", "Mobile"],
    benefits: [
      "Seamless customer experience",
      "Unified data insights",
      "Improved operational efficiency",
      "Enhanced customer loyalty"
    ],
    useCases: [
      "Multi-channel retailers",
      "Franchise operations",
      "Brand consistency",
      "Customer journey optimization"
    ],
    compliance: ["GDPR", "PCI DSS", "SOC 2", "Industry Standards"],
    pricing: "Starting from $80,000",
    duration: "10-18 months"
  }
];

// Retail statistics
const retailStats = [
  { icon: ShoppingCart, label: "E-commerce Projects", value: "35+" },
  { icon: TrendingUp, label: "Sales Increase", value: "45%" },
  { icon: Users, label: "Retail Clients", value: "20+" },
  { icon: Award, label: "Platform Integrations", value: "50+" }
];

export default function RetailEcommercePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const breadcrumbs = [
    { name: "Home", url: "https://quadratetechsolutions.com" },
    { name: "Industries", url: "https://quadratetechsolutions.com/industries" },
    { name: "Retail & E-commerce", url: "https://quadratetechsolutions.com/industries/retail-ecommerce" }
  ];

  const retailSchema = serviceSchema({
    name: "Retail & E-commerce AI/ML Solutions",
    description: "Specialized AI/ML and software solutions for retail and e-commerce including recommendation engines, inventory management, customer analytics, and omnichannel platforms.",
    url: "https://quadratetechsolutions.com/industries/retail-ecommerce",
    category: "Retail Technology"
  });

  return (
    <>
      <ComprehensiveSEO 
        seo={industrySEO.retail} 
        structuredData={[organizationSchema, websiteSchema, retailSchema]}
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
                Retail & E-commerce <span className="gradient-text">AI/ML Solutions</span>
              </h1>
              <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
                Transform your retail business with cutting-edge AI/ML solutions. From personalized recommendations to inventory optimization, 
                we help retailers enhance customer experience and drive sales growth.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {retailStats.map((stat, index) => (
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
                  <span>Get Retail Consultation</span>
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

        {/* Retail Solutions Grid */}
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
                  Our Retail & E-commerce Solutions
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive AI/ML and software solutions designed specifically for retail and e-commerce businesses,
                  ensuring enhanced customer experience, operational efficiency, and sales growth.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {retailSolutions.map((solution, index) => (
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
                            className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
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

        {/* Customer Experience Focus */}
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
                    Customer-Centric Solutions
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Our retail solutions are designed with the customer at the center.
                    We help you create personalized experiences that drive engagement, loyalty, and sales growth.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Brain,
                        title: "Personalization AI",
                        description: "Advanced AI algorithms that deliver personalized product recommendations and content"
                      },
                      {
                        icon: BarChart3,
                        title: "Customer Analytics",
                        description: "Deep insights into customer behavior, preferences, and purchasing patterns"
                      },
                      {
                        icon: Globe,
                        title: "Omnichannel Experience",
                        description: "Seamless customer journey across all touchpoints and channels"
                      },
                      {
                        icon: Shield,
                        title: "Data Security",
                        description: "Enterprise-grade security to protect customer data and ensure privacy compliance"
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
                      <ShoppingCart className="w-24 h-24 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Retail Innovation</h3>
                      <p className="opacity-90">
                        Transforming retail experiences with AI-powered personalization and intelligent automation.
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
                Ready to Transform Your Retail Business?
              </h2>
              <p className="text-fluid-lg mb-8 opacity-90">
                Let's discuss how our AI/ML solutions can enhance customer experience, optimize operations,
                and drive sales growth for your retail or e-commerce business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
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

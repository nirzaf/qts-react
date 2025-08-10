'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComprehensiveSEO from '@/components/seo/ComprehensiveSEO';
import { serviceSEO } from '@/config/seo';
import { organizationSchema, websiteSchema, serviceSchema } from '@/config/structuredData';
import { 
  Settings, 
  GitBranch, 
  Monitor, 
  Shield, 
  Zap, 
  BarChart3, 
  Database,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  Target,
  Brain,
  Globe,
  Code,
  Smartphone,
  FileText,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';

// MLOps Services data
const mlopsServices = [
  {
    id: "ml-pipeline-automation",
    title: "ML Pipeline Automation",
    description: "End-to-end automated machine learning pipelines for seamless model development and deployment",
    icon: GitBranch,
    features: [
      "Automated Data Pipelines",
      "Model Training Automation",
      "Hyperparameter Optimization",
      "Feature Engineering",
      "Model Validation",
      "Deployment Automation"
    ],
    technologies: ["Kubeflow", "MLflow", "Apache Airflow", "Jenkins", "Docker", "Kubernetes"],
    benefits: [
      "80% faster model deployment",
      "Reduced manual errors",
      "Consistent reproducibility",
      "Scalable infrastructure"
    ],
    metrics: {
      deployment: "80% faster",
      reliability: "99.9%",
      automation: "90%"
    },
    pricing: "Starting from $40,000",
    duration: "8-16 weeks"
  },
  {
    id: "model-monitoring-management",
    title: "Model Monitoring & Management",
    description: "Comprehensive model performance monitoring and lifecycle management solutions",
    icon: Monitor,
    features: [
      "Real-time Monitoring",
      "Performance Tracking",
      "Drift Detection",
      "Alert Systems",
      "Model Versioning",
      "A/B Testing Framework"
    ],
    technologies: ["Prometheus", "Grafana", "MLflow", "Evidently", "Great Expectations", "Seldon"],
    benefits: [
      "Proactive issue detection",
      "Improved model reliability",
      "Automated retraining",
      "Performance optimization"
    ],
    metrics: {
      uptime: "99.9%",
      detection: "< 5 min",
      accuracy: "95%+"
    },
    pricing: "Starting from $35,000",
    duration: "6-12 weeks"
  },
  {
    id: "model-deployment-scaling",
    title: "Model Deployment & Scaling",
    description: "Scalable model deployment solutions with high availability and performance optimization",
    icon: Zap,
    features: [
      "Container Orchestration",
      "Auto-scaling",
      "Load Balancing",
      "Blue-Green Deployment",
      "Canary Releases",
      "Multi-cloud Support"
    ],
    technologies: ["Kubernetes", "Docker", "Istio", "AWS SageMaker", "Azure ML", "GCP AI Platform"],
    benefits: [
      "High availability",
      "Elastic scaling",
      "Zero-downtime deployment",
      "Cost optimization"
    ],
    metrics: {
      availability: "99.99%",
      latency: "< 100ms",
      scaling: "Auto"
    },
    pricing: "Starting from $45,000",
    duration: "8-14 weeks"
  },
  {
    id: "data-versioning-governance",
    title: "Data Versioning & Governance",
    description: "Comprehensive data management with versioning, lineage tracking, and governance frameworks",
    icon: Database,
    features: [
      "Data Versioning",
      "Lineage Tracking",
      "Quality Monitoring",
      "Access Control",
      "Compliance Management",
      "Metadata Management"
    ],
    technologies: ["DVC", "Apache Atlas", "DataHub", "Great Expectations", "Delta Lake", "Apache Iceberg"],
    benefits: [
      "Data reproducibility",
      "Compliance assurance",
      "Quality improvement",
      "Audit trails"
    ],
    metrics: {
      quality: "99%+",
      compliance: "100%",
      tracking: "Real-time"
    },
    pricing: "Starting from $30,000",
    duration: "6-10 weeks"
  },
  {
    id: "ci-cd-ml-workflows",
    title: "CI/CD for ML Workflows",
    description: "Continuous integration and deployment pipelines specifically designed for machine learning",
    icon: Settings,
    features: [
      "Automated Testing",
      "Model Validation",
      "Integration Testing",
      "Deployment Pipelines",
      "Rollback Mechanisms",
      "Environment Management"
    ],
    technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "MLflow", "Tekton", "ArgoCD"],
    benefits: [
      "Faster iteration cycles",
      "Reduced deployment risks",
      "Consistent environments",
      "Automated quality gates"
    ],
    metrics: {
      deployment: "10x faster",
      reliability: "99.5%",
      testing: "Automated"
    },
    pricing: "Starting from $35,000",
    duration: "6-12 weeks"
  },
  {
    id: "ml-security-compliance",
    title: "ML Security & Compliance",
    description: "Enterprise-grade security and compliance frameworks for machine learning systems",
    icon: Shield,
    features: [
      "Model Security",
      "Data Privacy",
      "Access Control",
      "Audit Logging",
      "Compliance Monitoring",
      "Threat Detection"
    ],
    technologies: ["Vault", "RBAC", "GDPR Tools", "SOC 2", "ISO 27001", "Security Scanners"],
    benefits: [
      "Regulatory compliance",
      "Data protection",
      "Risk mitigation",
      "Audit readiness"
    ],
    metrics: {
      security: "Enterprise-grade",
      compliance: "100%",
      monitoring: "24/7"
    },
    pricing: "Starting from $50,000",
    duration: "8-16 weeks"
  }
];

// MLOps maturity levels
const maturityLevels = [
  {
    level: "Level 0",
    title: "Manual Process",
    description: "Manual, script-driven, and interactive process",
    characteristics: ["Manual deployment", "No automation", "Ad-hoc monitoring"]
  },
  {
    level: "Level 1",
    title: "ML Pipeline Automation",
    description: "Automated training pipeline with continuous training",
    characteristics: ["Automated training", "Continuous delivery", "Basic monitoring"]
  },
  {
    level: "Level 2",
    title: "CI/CD Pipeline Automation",
    description: "Automated CI/CD system for fast and reliable ML pipeline deployment",
    characteristics: ["Full automation", "Continuous deployment", "Advanced monitoring"]
  }
];

export default function MLOpsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const breadcrumbs = [
    { name: "Home", url: "https://quadratetechsolutions.com" },
    { name: "Services", url: "https://quadratetechsolutions.com/services" },
    { name: "MLOps", url: "https://quadratetechsolutions.com/services/mlops" }
  ];

  const mlopsSchema = serviceSchema({
    name: "MLOps Solutions",
    description: "Comprehensive MLOps services including ML pipeline automation, model monitoring, deployment scaling, data governance, CI/CD workflows, and security compliance for enterprise ML systems.",
    url: "https://quadratetechsolutions.com/services/mlops",
    category: "MLOps & Machine Learning Operations"
  });

  return (
    <>
      <ComprehensiveSEO 
        seo={{
          ...serviceSEO.aiMlSolutions,
          title: "MLOps Solutions | Machine Learning Operations & Automation | Quadrate Tech",
          description: "Enterprise MLOps services including ML pipeline automation, model monitoring, deployment scaling, data governance, and CI/CD workflows. 99.9% reliability with automated operations.",
          keywords: [...serviceSEO.aiMlSolutions.keywords, "MLOps", "machine learning operations", "ML pipeline automation", "model monitoring", "model deployment", "data governance", "CI/CD", "ML security", "model management"]
        }} 
        structuredData={[organizationSchema, websiteSchema, mlopsSchema]}
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
                MLOps <span className="gradient-text">Solutions</span>
              </h1>
              <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
                Streamline your machine learning operations with enterprise-grade MLOps solutions. 
                From automated pipelines to model monitoring, we ensure 99.9% reliability and 80% faster deployments.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: Settings, label: "ML Pipelines Deployed", value: "40+" },
                  { icon: Monitor, label: "System Reliability", value: "99.9%" },
                  { icon: Zap, label: "Deployment Speed", value: "80% faster" },
                  { icon: Award, label: "Automation Level", value: "90%" }
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
                  <span>Get MLOps Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
                <motion.a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0607E1] text-[#0607E1] font-semibold rounded-full hover:bg-[#0607E1] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View MLOps Projects</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MLOps Services Grid */}
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
                  Our MLOps Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive MLOps solutions designed to streamline machine learning operations
                  with enterprise-grade automation, monitoring, and governance.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mlopsServices.map((service, index) => (
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

                    {/* Performance Metrics */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Performance Metrics</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {Object.entries(service.metrics).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center p-2 bg-blue-50 rounded">
                            <span className="text-sm text-gray-600 capitalize">{key}</span>
                            <span className="font-bold text-blue-600">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
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
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.a>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MLOps Maturity Model */}
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
                  MLOps Maturity Model
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  We help organizations progress through MLOps maturity levels, from manual processes
                  to fully automated CI/CD pipelines for machine learning.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {maturityLevels.map((level, index) => (
                  <motion.div
                    key={level.level}
                    className="bg-white rounded-2xl p-8 shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-lg">{level.level.split(' ')[1]}</span>
                    </div>

                    <h3 className="text-fluid-xl font-bold text-gray-900 mb-3">{level.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{level.description}</p>

                    <div className="space-y-2">
                      {level.characteristics.map((characteristic, charIndex) => (
                        <div key={charIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{characteristic}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our MLOps Solutions */}
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
                    Enterprise-Grade MLOps Excellence
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Our MLOps solutions combine industry best practices with cutting-edge tools to deliver
                    reliable, scalable, and secure machine learning operations for enterprise environments.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Zap,
                        title: "80% Faster Deployments",
                        description: "Automated pipelines and CI/CD workflows that accelerate model deployment cycles"
                      },
                      {
                        icon: Monitor,
                        title: "99.9% System Reliability",
                        description: "Comprehensive monitoring and alerting systems ensuring high availability"
                      },
                      {
                        icon: Shield,
                        title: "Enterprise Security",
                        description: "Advanced security measures and compliance frameworks for sensitive data"
                      },
                      {
                        icon: BarChart3,
                        title: "Continuous Optimization",
                        description: "Automated performance monitoring and optimization for sustained model accuracy"
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
                      <Settings className="w-24 h-24 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">MLOps Excellence</h3>
                      <p className="opacity-90">
                        Streamlining machine learning operations with enterprise-grade automation and monitoring.
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
                Ready to Scale Your ML Operations?
              </h2>
              <p className="text-fluid-lg mb-8 opacity-90">
                Transform your machine learning workflow with enterprise-grade MLOps solutions.
                Get a free assessment and discover how we can accelerate your ML operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Settings className="w-5 h-5 mr-2" />
                  Free MLOps Assessment
                </motion.a>
                <motion.a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0607E1] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Star className="w-5 h-5 mr-2" />
                  View MLOps Projects
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

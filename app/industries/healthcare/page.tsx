'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComprehensiveSEO from '@/components/seo/ComprehensiveSEO';
import { industrySEO } from '@/config/seo';
import { organizationSchema, websiteSchema, serviceSchema } from '@/config/structuredData';
import { 
  Heart, 
  Brain, 
  Shield, 
  Activity, 
  Users, 
  Database, 
  Smartphone,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Clock,
  Eye,
  Stethoscope,
  FileText,
  Zap,
  Lock,
  BarChart3,
  Globe
} from 'lucide-react';

// Healthcare Solutions data
const healthcareSolutions = [
  {
    id: "ai-diagnosis-assistance",
    title: "AI-Powered Diagnosis Assistance",
    description: "Advanced AI systems to support medical diagnosis and treatment planning",
    icon: Brain,
    features: [
      "Medical Image Analysis",
      "Symptom Pattern Recognition",
      "Treatment Recommendation",
      "Risk Assessment",
      "Clinical Decision Support",
      "Diagnostic Accuracy Enhancement"
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenCV", "DICOM", "HL7 FHIR", "Python"],
    benefits: [
      "94% diagnostic accuracy",
      "60% faster diagnosis",
      "35% cost reduction",
      "Improved patient outcomes"
    ],
    useCases: [
      "Radiology imaging analysis",
      "Pathology diagnosis",
      "Cardiology assessment",
      "Dermatology screening"
    ],
    compliance: ["HIPAA", "FDA", "GDPR", "ISO 27001"],
    pricing: "Starting from $50,000",
    duration: "6-12 months"
  },
  {
    id: "patient-management-systems",
    title: "Patient Management Systems",
    description: "Comprehensive digital solutions for patient care and hospital management",
    icon: Users,
    features: [
      "Electronic Health Records",
      "Patient Portal",
      "Appointment Scheduling",
      "Billing & Insurance",
      "Medication Management",
      "Care Coordination"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "HL7 FHIR", "AWS", "Docker"],
    benefits: [
      "50% reduction in paperwork",
      "30% improvement in efficiency",
      "Better patient satisfaction",
      "Streamlined workflows"
    ],
    useCases: [
      "Hospital management",
      "Clinic operations",
      "Specialty practices",
      "Multi-location facilities"
    ],
    compliance: ["HIPAA", "HITECH", "SOC 2", "ISO 27001"],
    pricing: "Starting from $75,000",
    duration: "8-16 months"
  },
  {
    id: "telemedicine-platforms",
    title: "Telemedicine Platforms",
    description: "Secure video consultation and remote patient monitoring solutions",
    icon: Smartphone,
    features: [
      "Video Consultations",
      "Remote Monitoring",
      "Digital Prescriptions",
      "Patient Communication",
      "Health Data Tracking",
      "Integration with EHR"
    ],
    technologies: ["WebRTC", "React Native", "Node.js", "MongoDB", "AWS", "Twilio"],
    benefits: [
      "80% increase in accessibility",
      "40% cost savings",
      "Improved patient engagement",
      "24/7 care availability"
    ],
    useCases: [
      "Remote consultations",
      "Chronic disease management",
      "Mental health services",
      "Follow-up appointments"
    ],
    compliance: ["HIPAA", "HITECH", "FDA", "State Licensing"],
    pricing: "Starting from $40,000",
    duration: "4-8 months"
  },
  {
    id: "medical-imaging-ai",
    title: "Medical Imaging AI",
    description: "Computer vision solutions for medical image analysis and interpretation",
    icon: Eye,
    features: [
      "X-ray Analysis",
      "MRI/CT Scan Processing",
      "Ultrasound Enhancement",
      "Pathology Image Analysis",
      "3D Reconstruction",
      "Automated Reporting"
    ],
    technologies: ["OpenCV", "TensorFlow", "PyTorch", "DICOM", "ITK", "VTK"],
    benefits: [
      "95% accuracy in detection",
      "70% faster analysis",
      "Reduced human error",
      "Early disease detection"
    ],
    useCases: [
      "Cancer screening",
      "Fracture detection",
      "Organ analysis",
      "Disease progression tracking"
    ],
    compliance: ["FDA 510(k)", "CE Marking", "HIPAA", "ISO 13485"],
    pricing: "Starting from $60,000",
    duration: "8-14 months"
  },
  {
    id: "healthcare-analytics",
    title: "Healthcare Analytics & BI",
    description: "Data analytics solutions for healthcare insights and decision making",
    icon: BarChart3,
    features: [
      "Population Health Analytics",
      "Clinical Outcomes Analysis",
      "Operational Dashboards",
      "Predictive Modeling",
      "Cost Analysis",
      "Quality Metrics"
    ],
    technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark", "Snowflake"],
    benefits: [
      "25% improvement in outcomes",
      "30% operational efficiency",
      "Data-driven decisions",
      "Cost optimization"
    ],
    useCases: [
      "Hospital performance tracking",
      "Patient outcome prediction",
      "Resource optimization",
      "Quality improvement"
    ],
    compliance: ["HIPAA", "HITECH", "SOC 2", "GDPR"],
    pricing: "Starting from $35,000",
    duration: "6-10 months"
  },
  {
    id: "healthcare-security",
    title: "Healthcare Cybersecurity",
    description: "Comprehensive security solutions to protect patient data and systems",
    icon: Shield,
    features: [
      "Data Encryption",
      "Access Control",
      "Threat Detection",
      "Compliance Monitoring",
      "Incident Response",
      "Security Training"
    ],
    technologies: ["Zero Trust", "SIEM", "EDR", "IAM", "Encryption", "Blockchain"],
    benefits: [
      "99.9% data protection",
      "Regulatory compliance",
      "Reduced breach risk",
      "Enhanced trust"
    ],
    useCases: [
      "Patient data protection",
      "Medical device security",
      "Network security",
      "Compliance management"
    ],
    compliance: ["HIPAA", "HITECH", "SOC 2", "ISO 27001"],
    pricing: "Starting from $25,000",
    duration: "3-6 months"
  }
];

// Healthcare statistics
const healthcareStats = [
  { icon: Heart, label: "Healthcare Projects", value: "25+" },
  { icon: Users, label: "Patients Served", value: "100K+" },
  { icon: Award, label: "Compliance Certifications", value: "15+" },
  { icon: TrendingUp, label: "Average ROI", value: "250%" }
];

export default function HealthcarePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const breadcrumbs = [
    { name: "Home", url: "https://quadratetechsolutions.com" },
    { name: "Industries", url: "https://quadratetechsolutions.com/industries" },
    { name: "Healthcare", url: "https://quadratetechsolutions.com/industries/healthcare" }
  ];

  const healthcareSchema = serviceSchema({
    name: "Healthcare AI/ML Solutions",
    description: "Specialized AI/ML and software solutions for healthcare including diagnosis assistance, patient management, telemedicine, and medical imaging with HIPAA compliance.",
    url: "https://quadratetechsolutions.com/industries/healthcare",
    category: "Healthcare Technology"
  });

  return (
    <>
      <ComprehensiveSEO 
        seo={industrySEO.healthcare} 
        structuredData={[organizationSchema, websiteSchema, healthcareSchema]}
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
                Healthcare <span className="gradient-text">AI/ML Solutions</span>
              </h1>
              <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
                Transform healthcare delivery with cutting-edge AI/ML solutions. From diagnosis assistance to patient management, 
                we help healthcare organizations improve outcomes while ensuring HIPAA compliance.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {healthcareStats.map((stat, index) => (
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
                  <span>Get Healthcare Consultation</span>
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

        {/* Healthcare Solutions Grid */}
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
                  Our Healthcare Solutions
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive AI/ML and software solutions designed specifically for healthcare organizations,
                  ensuring compliance, security, and improved patient outcomes.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {healthcareSolutions.map((solution, index) => (
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
                            className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full"
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

        {/* Compliance & Security */}
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
                    HIPAA Compliant & Secure
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Our healthcare solutions are built with security and compliance at their core.
                    We ensure all systems meet HIPAA, HITECH, and other regulatory requirements while maintaining the highest levels of data protection.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Shield,
                        title: "HIPAA Compliance",
                        description: "Full compliance with HIPAA regulations including BAA agreements and audit trails"
                      },
                      {
                        icon: Lock,
                        title: "Data Encryption",
                        description: "End-to-end encryption for data at rest and in transit using AES-256 standards"
                      },
                      {
                        icon: Activity,
                        title: "Real-time Monitoring",
                        description: "24/7 security monitoring with automated threat detection and response"
                      },
                      {
                        icon: FileText,
                        title: "Audit & Reporting",
                        description: "Comprehensive audit logs and compliance reporting for regulatory requirements"
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
                      <Heart className="w-24 h-24 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Healthcare Innovation</h3>
                      <p className="opacity-90">
                        Transforming healthcare with secure, compliant, and innovative AI/ML solutions.
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
                Ready to Transform Healthcare?
              </h2>
              <p className="text-fluid-lg mb-8 opacity-90">
                Let's discuss how our AI/ML solutions can improve patient outcomes, reduce costs,
                and streamline operations while ensuring full compliance with healthcare regulations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-5 h-5 mr-2" />
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

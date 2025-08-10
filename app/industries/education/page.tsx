'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComprehensiveSEO from '@/components/seo/ComprehensiveSEO';
import { industrySEO } from '@/config/seo';
import { organizationSchema, websiteSchema, serviceSchema } from '@/config/structuredData';
import { 
  GraduationCap, 
  Brain, 
  Users, 
  BookOpen, 
  Monitor, 
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
  MessageSquare,
  Video,
  FileText,
  Calendar,
  Settings
} from 'lucide-react';

// Education Solutions data
const educationSolutions = [
  {
    id: "learning-management-system",
    title: "AI-Powered Learning Management System",
    description: "Intelligent LMS with personalized learning paths and adaptive assessments",
    icon: GraduationCap,
    features: [
      "Personalized Learning Paths",
      "Adaptive Assessments",
      "Progress Tracking",
      "Content Recommendation",
      "Virtual Classrooms",
      "Student Analytics"
    ],
    technologies: ["React", "Node.js", "Python", "TensorFlow", "PostgreSQL", "WebRTC"],
    benefits: [
      "40% improvement in learning outcomes",
      "60% increase in student engagement",
      "Personalized education experience",
      "Real-time progress monitoring"
    ],
    useCases: [
      "Universities and colleges",
      "K-12 schools",
      "Online education platforms",
      "Corporate training"
    ],
    compliance: ["FERPA", "COPPA", "GDPR", "Section 508"],
    pricing: "Starting from $45,000",
    duration: "6-12 months"
  },
  {
    id: "student-performance-analytics",
    title: "Student Performance Analytics",
    description: "Advanced analytics to track and improve student performance and outcomes",
    icon: BarChart3,
    features: [
      "Performance Dashboards",
      "Predictive Analytics",
      "Early Warning Systems",
      "Learning Analytics",
      "Attendance Tracking",
      "Grade Analysis"
    ],
    technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark", "Machine Learning"],
    benefits: [
      "25% improvement in graduation rates",
      "Early identification of at-risk students",
      "Data-driven decision making",
      "Enhanced student support"
    ],
    useCases: [
      "Academic performance monitoring",
      "Student retention programs",
      "Curriculum optimization",
      "Resource allocation"
    ],
    compliance: ["FERPA", "GDPR", "Privacy Laws", "Educational Standards"],
    pricing: "Starting from $30,000",
    duration: "3-6 months"
  },
  {
    id: "virtual-classroom-platform",
    title: "Virtual Classroom Platform",
    description: "Interactive online learning environment with collaboration tools",
    icon: Video,
    features: [
      "Live Video Streaming",
      "Interactive Whiteboards",
      "Breakout Rooms",
      "Screen Sharing",
      "Recording & Playback",
      "Chat & Messaging"
    ],
    technologies: ["WebRTC", "React", "Node.js", "Socket.io", "AWS", "CDN"],
    benefits: [
      "Seamless remote learning",
      "Interactive engagement",
      "Flexible scheduling",
      "Global accessibility"
    ],
    useCases: [
      "Remote education",
      "Hybrid learning",
      "Professional training",
      "International programs"
    ],
    compliance: ["FERPA", "COPPA", "GDPR", "Accessibility Standards"],
    pricing: "Starting from $35,000",
    duration: "4-8 months"
  },
  {
    id: "ai-tutoring-system",
    title: "AI Tutoring & Assessment System",
    description: "Intelligent tutoring system with automated grading and feedback",
    icon: Brain,
    features: [
      "Intelligent Tutoring",
      "Automated Grading",
      "Instant Feedback",
      "Adaptive Testing",
      "Natural Language Processing",
      "Knowledge Mapping"
    ],
    technologies: ["Python", "TensorFlow", "NLP", "Machine Learning", "React", "APIs"],
    benefits: [
      "24/7 tutoring availability",
      "Instant feedback and grading",
      "Personalized learning support",
      "Reduced teacher workload"
    ],
    useCases: [
      "Homework assistance",
      "Test preparation",
      "Skill assessment",
      "Remedial education"
    ],
    compliance: ["FERPA", "COPPA", "Educational Standards", "AI Ethics"],
    pricing: "Starting from $40,000",
    duration: "6-10 months"
  },
  {
    id: "campus-management-system",
    title: "Smart Campus Management System",
    description: "Comprehensive campus management with IoT integration and automation",
    icon: Settings,
    features: [
      "Student Information System",
      "Faculty Management",
      "Resource Scheduling",
      "IoT Integration",
      "Security Systems",
      "Mobile Applications"
    ],
    technologies: ["React", "Node.js", "IoT", "MongoDB", "React Native", "Cloud"],
    benefits: [
      "Streamlined operations",
      "Improved resource utilization",
      "Enhanced security",
      "Better communication"
    ],
    useCases: [
      "University administration",
      "Resource management",
      "Student services",
      "Campus security"
    ],
    compliance: ["FERPA", "GDPR", "Security Standards", "Accessibility"],
    pricing: "Starting from $60,000",
    duration: "8-16 months"
  },
  {
    id: "educational-content-platform",
    title: "Educational Content Platform",
    description: "AI-powered content creation and delivery platform for educators",
    icon: BookOpen,
    features: [
      "Content Creation Tools",
      "Multimedia Integration",
      "Interactive Exercises",
      "Assessment Builder",
      "Content Library",
      "Collaboration Tools"
    ],
    technologies: ["React", "Node.js", "AI/ML", "Cloud Storage", "CDN", "APIs"],
    benefits: [
      "Engaging educational content",
      "Reduced content creation time",
      "Interactive learning materials",
      "Collaborative development"
    ],
    useCases: [
      "Curriculum development",
      "Online courses",
      "Educational resources",
      "Teacher training"
    ],
    compliance: ["Copyright Laws", "FERPA", "Accessibility", "Educational Standards"],
    pricing: "Starting from $50,000",
    duration: "6-12 months"
  }
];

// Education statistics
const educationStats = [
  { icon: GraduationCap, label: "EdTech Projects", value: "15+" },
  { icon: Users, label: "Students Impacted", value: "50K+" },
  { icon: BookOpen, label: "Educational Institutions", value: "25+" },
  { icon: Award, label: "Learning Improvement", value: "40%" }
];

export default function EducationPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const breadcrumbs = [
    { name: "Home", url: "https://quadratetechsolutions.com" },
    { name: "Industries", url: "https://quadratetechsolutions.com/industries" },
    { name: "Education", url: "https://quadratetechsolutions.com/industries/education" }
  ];

  const educationSchema = serviceSchema({
    name: "Education AI/ML Solutions",
    description: "Specialized AI/ML and software solutions for education including learning management systems, student analytics, virtual classrooms, and AI tutoring with FERPA compliance.",
    url: "https://quadratetechsolutions.com/industries/education",
    category: "Educational Technology"
  });

  return (
    <>
      <ComprehensiveSEO 
        seo={{
          ...industrySEO.healthcare,
          title: "Education AI/ML Solutions | EdTech Software Development | Quadrate Tech",
          description: "Transform education with AI/ML solutions including learning management systems, student analytics, virtual classrooms, and intelligent tutoring. FERPA compliant EdTech solutions.",
          keywords: [...industrySEO.healthcare.keywords, "education AI", "EdTech solutions", "learning management systems", "student analytics", "virtual classrooms", "AI tutoring", "FERPA compliance"]
        }} 
        structuredData={[organizationSchema, websiteSchema, educationSchema]}
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
                Education <span className="gradient-text">AI/ML Solutions</span>
              </h1>
              <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
                Transform education with cutting-edge AI/ML solutions. From personalized learning to intelligent tutoring, 
                we help educational institutions enhance learning outcomes while ensuring FERPA compliance.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {educationStats.map((stat, index) => (
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
                  <span>Get EdTech Consultation</span>
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

        {/* Education Solutions Grid */}
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
                  Our Education Solutions
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive AI/ML and software solutions designed specifically for educational institutions,
                  ensuring enhanced learning outcomes, operational efficiency, and FERPA compliance.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {educationSolutions.map((solution, index) => (
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
                            className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full"
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

        {/* FERPA Compliance & Privacy */}
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
                    FERPA Compliant & Secure
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Our educational solutions are built with privacy and compliance at their core.
                    We ensure all systems meet FERPA, COPPA, and other educational regulations while protecting student data.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Shield,
                        title: "FERPA Compliance",
                        description: "Full compliance with Family Educational Rights and Privacy Act regulations"
                      },
                      {
                        icon: Brain,
                        title: "AI Ethics",
                        description: "Responsible AI implementation with bias detection and fairness monitoring"
                      },
                      {
                        icon: Globe,
                        title: "Accessibility",
                        description: "Section 508 and WCAG compliance for inclusive educational experiences"
                      },
                      {
                        icon: FileText,
                        title: "Data Protection",
                        description: "Advanced encryption and secure data handling for student information"
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
                      <GraduationCap className="w-24 h-24 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">EdTech Innovation</h3>
                      <p className="opacity-90">
                        Transforming education with secure, compliant, and innovative AI/ML solutions.
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
                Ready to Transform Education?
              </h2>
              <p className="text-fluid-lg mb-8 opacity-90">
                Let's discuss how our AI/ML solutions can enhance learning outcomes, improve student engagement,
                and streamline educational operations while ensuring full compliance with educational regulations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GraduationCap className="w-5 h-5 mr-2" />
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

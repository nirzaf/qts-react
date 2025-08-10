'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComprehensiveSEO from '@/components/seo/ComprehensiveSEO';
import { pageSEO } from '@/config/seo';
import { organizationSchema, websiteSchema } from '@/config/structuredData';
import { 
  ExternalLink, 
  Github, 
  Award, 
  TrendingUp, 
  Users, 
  Calendar,
  Filter,
  Search,
  Eye,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  Brain,
  Code,
  Cloud,
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap
} from 'lucide-react';

// Project data interface
interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  technologies: string[];
  description: string;
  longDescription: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  images: string[];
  caseStudyUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
    rating: number;
  };
  category: string;
  featured: boolean;
  completedDate: string;
  duration: string;
  teamSize: number;
  budget: string;
}

// Mock project data (50+ projects)
const projects: Project[] = [
  {
    id: "healthcare-ai-platform",
    title: "AI-Powered Healthcare Management Platform",
    client: "MediCare Plus",
    industry: "Healthcare",
    category: "AI/ML Solutions",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "AWS"],
    description: "Comprehensive healthcare management platform with AI-powered diagnosis assistance and patient monitoring.",
    longDescription: "Developed a revolutionary healthcare management platform that integrates AI-powered diagnosis assistance, real-time patient monitoring, and predictive analytics. The system processes medical imaging data, provides treatment recommendations, and manages patient records with HIPAA compliance.",
    results: [
      { metric: "Diagnosis Accuracy", value: "94%", improvement: "+23%" },
      { metric: "Patient Processing Time", value: "15 min", improvement: "-60%" },
      { metric: "Cost Reduction", value: "$2.3M", improvement: "35%" },
      { metric: "Patient Satisfaction", value: "4.8/5", improvement: "+40%" }
    ],
    images: ["/images/portfolio/healthcare-ai-1.jpg", "/images/portfolio/healthcare-ai-2.jpg"],
    caseStudyUrl: "/case-studies/healthcare-ai-platform",
    liveUrl: "https://medicare-plus-demo.com",
    testimonial: {
      quote: "Quadrate Tech Solutions transformed our healthcare operations with their AI platform. The diagnosis accuracy improvement has been remarkable.",
      author: "Dr. Sarah Johnson",
      position: "Chief Medical Officer",
      company: "MediCare Plus",
      rating: 5
    },
    featured: true,
    completedDate: "2024-01-15",
    duration: "8 months",
    teamSize: 12,
    budget: "$500K - $1M"
  },
  {
    id: "fintech-fraud-detection",
    title: "Real-time Fraud Detection System",
    client: "SecureBank",
    industry: "Finance",
    category: "AI/ML Solutions",
    technologies: ["Python", "Scikit-learn", "Apache Kafka", "Redis", "Docker", "Kubernetes"],
    description: "Advanced machine learning system for real-time fraud detection in financial transactions.",
    longDescription: "Built a sophisticated fraud detection system using machine learning algorithms to analyze transaction patterns in real-time. The system processes millions of transactions daily and provides instant fraud alerts with minimal false positives.",
    results: [
      { metric: "Fraud Detection Rate", value: "99.2%", improvement: "+15%" },
      { metric: "False Positives", value: "0.3%", improvement: "-80%" },
      { metric: "Processing Speed", value: "50ms", improvement: "-70%" },
      { metric: "Annual Savings", value: "$5.2M", improvement: "45%" }
    ],
    images: ["/images/portfolio/fraud-detection-1.jpg"],
    caseStudyUrl: "/case-studies/fraud-detection-system",
    testimonial: {
      quote: "The fraud detection system has significantly improved our security posture while reducing false alarms.",
      author: "Michael Chen",
      position: "Head of Security",
      company: "SecureBank",
      rating: 5
    },
    featured: true,
    completedDate: "2023-11-20",
    duration: "6 months",
    teamSize: 8,
    budget: "$250K - $500K"
  },
  {
    id: "manufacturing-iot-platform",
    title: "Smart Manufacturing IoT Platform",
    client: "TechManufacturing Corp",
    industry: "Manufacturing",
    category: "IoT Solutions",
    technologies: ["Node.js", "React", "InfluxDB", "Grafana", "MQTT", "Azure IoT"],
    description: "IoT platform for smart manufacturing with predictive maintenance and real-time monitoring.",
    longDescription: "Developed a comprehensive IoT platform that connects manufacturing equipment, monitors performance in real-time, and predicts maintenance needs. The system integrates with existing machinery and provides actionable insights through advanced analytics.",
    results: [
      { metric: "Equipment Uptime", value: "98.5%", improvement: "+12%" },
      { metric: "Maintenance Costs", value: "$1.2M", improvement: "-35%" },
      { metric: "Production Efficiency", value: "92%", improvement: "+18%" },
      { metric: "Energy Savings", value: "25%", improvement: "25%" }
    ],
    images: ["/images/portfolio/iot-platform-1.jpg"],
    caseStudyUrl: "/case-studies/manufacturing-iot-platform",
    testimonial: {
      quote: "The IoT platform has revolutionized our manufacturing processes and significantly reduced downtime.",
      author: "Lisa Wang",
      position: "Operations Director",
      company: "TechManufacturing Corp",
      rating: 5
    },
    featured: false,
    completedDate: "2023-09-10",
    duration: "10 months",
    teamSize: 10,
    budget: "$500K - $1M"
  }
  // Add more projects here...
];

// Categories for filtering
const categories = [
  "All Projects",
  "AI/ML Solutions", 
  "Web Development",
  "Mobile Development",
  "IoT Solutions",
  "Cloud Solutions",
  "E-commerce",
  "Enterprise Software"
];

const industries = [
  "All Industries",
  "Healthcare",
  "Finance", 
  "Manufacturing",
  "Retail",
  "Education",
  "Government"
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All Projects" || project.category === selectedCategory;
    const matchesIndustry = selectedIndustry === "All Industries" || project.industry === selectedIndustry;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesIndustry && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  const breadcrumbs = [
    { name: "Home", url: "https://quadratetechsolutions.com" },
    { name: "Portfolio", url: "https://quadratetechsolutions.com/portfolio" }
  ];

  return (
    <>
      <ComprehensiveSEO 
        seo={pageSEO.portfolio} 
        structuredData={[organizationSchema, websiteSchema]}
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
                Our <span className="gradient-text">Portfolio</span>
              </h1>
              <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
                Explore 50+ successful AI/ML and software development projects that have transformed 
                businesses across healthcare, finance, manufacturing, and more industries.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: Award, label: "Projects Completed", value: "50+" },
                  { icon: Users, label: "Happy Clients", value: "40+" },
                  { icon: TrendingUp, label: "Success Rate", value: "98%" },
                  { icon: Star, label: "Average Rating", value: "4.9/5" }
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
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#0607E1] focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#0607E1] focus:border-transparent transition-all duration-300"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Industry Filter */}
                <div className="flex items-center gap-2">
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#0607E1] focus:border-transparent transition-all duration-300"
                  >
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex bg-gray-100 rounded-full p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-600'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-600'
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-4 text-center text-gray-600">
                Showing {filteredProjects.length} of {projects.length} projects
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
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
                    Featured Projects
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Our most impactful and innovative projects that showcase our expertise in AI/ML and software development
                  </p>
                </motion.div>

                <div className="space-y-12">
                  {featuredProjects.map((project, index) => (
                    <motion.article
                      key={project.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Project Image */}
                        <div className="aspect-[16/10] lg:aspect-auto">
                          <div className="w-full h-full bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] flex items-center justify-center p-8">
                            <div className="text-center text-white">
                              {project.category === "AI/ML Solutions" && <Brain className="w-20 h-20 mx-auto mb-4" />}
                              {project.category === "Web Development" && <Globe className="w-20 h-20 mx-auto mb-4" />}
                              {project.category === "IoT Solutions" && <Zap className="w-20 h-20 mx-auto mb-4" />}
                              <h3 className="text-2xl font-bold">{project.category}</h3>
                              <p className="opacity-90 mt-2">{project.industry}</p>
                            </div>
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-[#0607E1] text-white text-sm rounded-full">
                              {project.category}
                            </span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                              {project.industry}
                            </span>
                            {project.featured && (
                              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full flex items-center gap-1">
                                <Star className="w-3 h-3" />
                                Featured
                              </span>
                            )}
                          </div>

                          <h3 className="text-fluid-xl lg:text-fluid-2xl font-bold text-gray-900 mb-4">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {project.longDescription}
                          </p>

                          {/* Key Results */}
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            {project.results.slice(0, 4).map((result, resultIndex) => (
                              <div key={resultIndex} className="text-center p-3 bg-gray-50 rounded-lg">
                                <div className="text-lg font-bold text-[#0607E1]">{result.value}</div>
                                <div className="text-sm text-gray-600">{result.metric}</div>
                                <div className="text-xs text-green-600">{result.improvement}</div>
                              </div>
                            ))}
                          </div>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.slice(0, 6).map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-4">
                            <motion.a
                              href={project.caseStudyUrl}
                              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0607E1] text-white font-semibold rounded-full hover:bg-[#4D0AFF] transition-colors duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span>View Case Study</span>
                              <ArrowRight className="w-4 h-4" />
                            </motion.a>

                            {project.liveUrl && (
                              <motion.a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0607E1] text-[#0607E1] font-semibold rounded-full hover:bg-[#0607E1] hover:text-white transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>Live Demo</span>
                              </motion.a>
                            )}
                          </div>

                          {/* Testimonial */}
                          {project.testimonial && (
                            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                              <div className="flex items-center gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < project.testimonial!.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <blockquote className="text-gray-700 italic mb-4">
                                "{project.testimonial.quote}"
                              </blockquote>
                              <div className="text-sm">
                                <div className="font-semibold text-gray-900">{project.testimonial.author}</div>
                                <div className="text-gray-600">{project.testimonial.position}, {project.testimonial.company}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComprehensiveSEO from '@/components/seo/ComprehensiveSEO';
import { serviceSEO } from '@/config/seo';
import { organizationSchema, websiteSchema, serviceSchema } from '@/config/structuredData';
import { 
  Eye, 
  Camera, 
  Scan, 
  Brain, 
  Target, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  Settings,
  BarChart3,
  Globe,
  Database,
  Code,
  Monitor,
  Smartphone,
  FileText
} from 'lucide-react';

// Computer Vision Services data
const computerVisionServices = [
  {
    id: "object-detection-recognition",
    title: "Object Detection & Recognition",
    description: "Advanced object detection and recognition systems for real-time applications",
    icon: Eye,
    features: [
      "Real-time Object Detection",
      "Multi-class Recognition",
      "Bounding Box Localization",
      "Confidence Scoring",
      "Custom Object Training",
      "Edge Device Deployment"
    ],
    technologies: ["YOLO", "R-CNN", "SSD", "OpenCV", "TensorFlow", "PyTorch"],
    applications: [
      "Security surveillance",
      "Quality control",
      "Autonomous vehicles",
      "Retail analytics"
    ],
    accuracy: "95%+",
    processing: "Real-time",
    pricing: "Starting from $25,000",
    duration: "6-12 weeks"
  },
  {
    id: "facial-recognition-analysis",
    title: "Facial Recognition & Analysis",
    description: "Sophisticated facial recognition and emotion analysis systems",
    icon: Scan,
    features: [
      "Face Detection & Recognition",
      "Emotion Analysis",
      "Age & Gender Estimation",
      "Facial Landmark Detection",
      "Liveness Detection",
      "Privacy-Preserving Options"
    ],
    technologies: ["FaceNet", "OpenFace", "DeepFace", "MediaPipe", "OpenCV", "TensorFlow"],
    applications: [
      "Access control",
      "Customer analytics",
      "Healthcare monitoring",
      "Entertainment systems"
    ],
    accuracy: "99%+",
    processing: "< 100ms",
    pricing: "Starting from $30,000",
    duration: "8-14 weeks"
  },
  {
    id: "medical-image-analysis",
    title: "Medical Image Analysis",
    description: "AI-powered medical imaging solutions for diagnostic assistance",
    icon: Monitor,
    features: [
      "X-ray Analysis",
      "MRI/CT Scan Processing",
      "Pathology Detection",
      "3D Reconstruction",
      "DICOM Integration",
      "FDA Compliance Support"
    ],
    technologies: ["U-Net", "ResNet", "DenseNet", "ITK", "DICOM", "PyTorch"],
    applications: [
      "Radiology assistance",
      "Cancer screening",
      "Surgical planning",
      "Disease progression"
    ],
    accuracy: "94%+",
    processing: "< 5 seconds",
    pricing: "Starting from $50,000",
    duration: "12-20 weeks"
  },
  {
    id: "industrial-quality-control",
    title: "Industrial Quality Control",
    description: "Automated visual inspection systems for manufacturing quality assurance",
    icon: Settings,
    features: [
      "Defect Detection",
      "Surface Inspection",
      "Dimensional Analysis",
      "Assembly Verification",
      "Statistical Analysis",
      "Production Line Integration"
    ],
    technologies: ["OpenCV", "Halcon", "TensorFlow", "Edge Computing", "Industrial Cameras"],
    applications: [
      "Manufacturing QC",
      "Electronics inspection",
      "Automotive parts",
      "Food safety"
    ],
    accuracy: "99.5%+",
    processing: "< 50ms",
    pricing: "Starting from $35,000",
    duration: "8-16 weeks"
  },
  {
    id: "document-text-recognition",
    title: "Document & Text Recognition",
    description: "Optical Character Recognition and document processing solutions",
    icon: FileText,
    features: [
      "OCR & Text Extraction",
      "Document Classification",
      "Handwriting Recognition",
      "Form Processing",
      "Multi-language Support",
      "Layout Analysis"
    ],
    technologies: ["Tesseract", "PaddleOCR", "TrOCR", "LayoutLM", "OpenCV", "NLP"],
    applications: [
      "Document digitization",
      "Invoice processing",
      "Form automation",
      "Archive management"
    ],
    accuracy: "98%+",
    processing: "< 2 seconds",
    pricing: "Starting from $20,000",
    duration: "4-8 weeks"
  },
  {
    id: "augmented-reality-vision",
    title: "Augmented Reality Vision",
    description: "AR-powered visual applications with real-time object tracking",
    icon: Globe,
    features: [
      "Real-time Tracking",
      "3D Object Recognition",
      "Marker-less AR",
      "Spatial Mapping",
      "Gesture Recognition",
      "Mobile Integration"
    ],
    technologies: ["ARCore", "ARKit", "OpenCV", "Unity", "Vuforia", "MediaPipe"],
    applications: [
      "Training simulations",
      "Maintenance assistance",
      "Retail experiences",
      "Navigation systems"
    ],
    accuracy: "90%+",
    processing: "30 FPS",
    pricing: "Starting from $40,000",
    duration: "10-18 weeks"
  }
];

// Computer Vision process
const visionProcess = [
  {
    step: "01",
    title: "Data Collection & Preparation",
    description: "Gather and prepare high-quality training data with proper annotations and augmentation techniques.",
    icon: Database
  },
  {
    step: "02",
    title: "Model Development & Training",
    description: "Design and train custom computer vision models optimized for your specific use case and requirements.",
    icon: Brain
  },
  {
    step: "03",
    title: "Testing & Validation",
    description: "Rigorous testing with real-world scenarios to ensure accuracy, performance, and reliability.",
    icon: Target
  },
  {
    step: "04",
    title: "Deployment & Integration",
    description: "Deploy models to production environments with seamless integration into existing systems.",
    icon: Zap
  }
];

export default function ComputerVisionPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const breadcrumbs = [
    { name: "Home", url: "https://quadratetechsolutions.com" },
    { name: "Services", url: "https://quadratetechsolutions.com/services" },
    { name: "Computer Vision", url: "https://quadratetechsolutions.com/services/computer-vision" }
  ];

  const computerVisionSchema = serviceSchema({
    name: "Computer Vision Solutions",
    description: "Advanced computer vision services including object detection, facial recognition, medical image analysis, quality control, OCR, and augmented reality applications.",
    url: "https://quadratetechsolutions.com/services/computer-vision",
    category: "Computer Vision & AI"
  });

  return (
    <>
      <ComprehensiveSEO 
        seo={{
          ...serviceSEO.aiMlSolutions,
          title: "Computer Vision Solutions | Object Detection & Image Analysis | Quadrate Tech",
          description: "Advanced computer vision services including object detection, facial recognition, medical image analysis, quality control, OCR, and AR applications. 95%+ accuracy with real-time processing.",
          keywords: [...serviceSEO.aiMlSolutions.keywords, "computer vision", "object detection", "facial recognition", "image analysis", "OCR", "medical imaging", "quality control", "augmented reality", "real-time processing"]
        }} 
        structuredData={[organizationSchema, websiteSchema, computerVisionSchema]}
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
                Computer Vision <span className="gradient-text">Solutions</span>
              </h1>
              <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
                Transform visual data into actionable insights with advanced computer vision solutions. 
                From object detection to medical imaging, we deliver 95%+ accuracy with real-time processing capabilities.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: Eye, label: "Vision Models Deployed", value: "75+" },
                  { icon: Target, label: "Average Accuracy", value: "95%+" },
                  { icon: Zap, label: "Real-time Processing", value: "< 100ms" },
                  { icon: Award, label: "Industries Served", value: "10+" }
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
                  <span>Get Vision Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
                <motion.a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0607E1] text-[#0607E1] font-semibold rounded-full hover:bg-[#0607E1] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Vision Projects</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Computer Vision Services Grid */}
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
                  Our Computer Vision Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive computer vision solutions designed to extract meaningful insights from visual data
                  with industry-leading accuracy and real-time performance.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {computerVisionServices.map((service, index) => (
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
                    <div className="mb-6 grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-sm text-gray-600">Accuracy</div>
                        <div className="font-bold text-blue-600">{service.accuracy}</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-sm text-gray-600">Processing</div>
                        <div className="font-bold text-green-600">{service.processing}</div>
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.applications.map((app) => (
                          <span
                            key={app}
                            className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
                          >
                            {app}
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

        {/* Computer Vision Process */}
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
                  Our Computer Vision Development Process
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  A proven methodology that ensures successful computer vision implementation
                  from data preparation to production deployment.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {visionProcess.map((step, index) => (
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
                      {index < visionProcess.length - 1 && (
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

        {/* Why Choose Our Computer Vision Solutions */}
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
                    Why Choose Our Computer Vision Solutions?
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    We combine cutting-edge computer vision algorithms with deep domain expertise to deliver
                    solutions that achieve industry-leading accuracy and performance in real-world applications.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Target,
                        title: "Industry-Leading Accuracy",
                        description: "95%+ accuracy rates with state-of-the-art deep learning models and optimization techniques"
                      },
                      {
                        icon: Zap,
                        title: "Real-Time Performance",
                        description: "Optimized for real-time processing with sub-100ms response times for critical applications"
                      },
                      {
                        icon: Settings,
                        title: "Custom Solutions",
                        description: "Tailored computer vision models designed specifically for your unique use cases and requirements"
                      },
                      {
                        icon: Shield,
                        title: "Production Ready",
                        description: "Robust, scalable solutions ready for production deployment with comprehensive testing"
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
                      <Eye className="w-24 h-24 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Vision Intelligence</h3>
                      <p className="opacity-90">
                        Transforming visual data into actionable insights with advanced computer vision technology.
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
                Ready to Unlock Visual Intelligence?
              </h2>
              <p className="text-fluid-lg mb-8 opacity-90">
                Transform your visual data into actionable insights with our advanced computer vision solutions.
                Get a free consultation and discover the possibilities for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Free Vision Consultation
                </motion.a>
                <motion.a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0607E1] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Star className="w-5 h-5 mr-2" />
                  View Vision Projects
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

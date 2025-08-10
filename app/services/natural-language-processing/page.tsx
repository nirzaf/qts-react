'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComprehensiveSEO from '@/components/seo/ComprehensiveSEO';
import { serviceSEO } from '@/config/seo';
import { organizationSchema, websiteSchema, serviceSchema } from '@/config/structuredData';
import { 
  MessageSquare, 
  Brain, 
  FileText, 
  Languages, 
  Mic, 
  Search, 
  Bot,
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
  Target,
  Zap
} from 'lucide-react';

// NLP Services data
const nlpServices = [
  {
    id: "text-analytics-sentiment",
    title: "Text Analytics & Sentiment Analysis",
    description: "Advanced text processing and sentiment analysis for customer insights and content understanding",
    icon: MessageSquare,
    features: [
      "Sentiment Analysis",
      "Emotion Detection",
      "Topic Modeling",
      "Text Classification",
      "Named Entity Recognition",
      "Real-time Processing"
    ],
    technologies: ["BERT", "RoBERTa", "spaCy", "NLTK", "Transformers", "PyTorch"],
    applications: [
      "Social media monitoring",
      "Customer feedback analysis",
      "Brand reputation management",
      "Market research"
    ],
    accuracy: "92%+",
    languages: "50+",
    pricing: "Starting from $20,000",
    duration: "4-8 weeks"
  },
  {
    id: "chatbots-conversational-ai",
    title: "Chatbots & Conversational AI",
    description: "Intelligent conversational systems with natural language understanding and generation",
    icon: Bot,
    features: [
      "Intent Recognition",
      "Entity Extraction",
      "Context Management",
      "Multi-turn Conversations",
      "Voice Integration",
      "Multilingual Support"
    ],
    technologies: ["Rasa", "Dialogflow", "GPT", "BERT", "Transformers", "TensorFlow"],
    applications: [
      "Customer support",
      "Virtual assistants",
      "E-commerce bots",
      "Healthcare assistants"
    ],
    accuracy: "95%+",
    languages: "25+",
    pricing: "Starting from $30,000",
    duration: "6-12 weeks"
  },
  {
    id: "document-processing-extraction",
    title: "Document Processing & Information Extraction",
    description: "Automated document analysis and structured information extraction from unstructured text",
    icon: FileText,
    features: [
      "Document Classification",
      "Information Extraction",
      "Table Extraction",
      "Form Processing",
      "Contract Analysis",
      "Compliance Checking"
    ],
    technologies: ["LayoutLM", "BERT", "spaCy", "Transformers", "OpenCV", "PyTorch"],
    applications: [
      "Legal document analysis",
      "Invoice processing",
      "Contract management",
      "Regulatory compliance"
    ],
    accuracy: "94%+",
    languages: "30+",
    pricing: "Starting from $25,000",
    duration: "6-10 weeks"
  },
  {
    id: "machine-translation",
    title: "Machine Translation & Localization",
    description: "High-quality neural machine translation for global communication and content localization",
    icon: Languages,
    features: [
      "Neural Machine Translation",
      "Domain Adaptation",
      "Quality Estimation",
      "Post-editing Integration",
      "Terminology Management",
      "Real-time Translation"
    ],
    technologies: ["Transformer", "mBART", "MarianMT", "OpenNMT", "Fairseq", "TensorFlow"],
    applications: [
      "Content localization",
      "Real-time communication",
      "Document translation",
      "Website globalization"
    ],
    accuracy: "90%+",
    languages: "100+",
    pricing: "Starting from $35,000",
    duration: "8-14 weeks"
  },
  {
    id: "speech-recognition-synthesis",
    title: "Speech Recognition & Synthesis",
    description: "Advanced speech-to-text and text-to-speech solutions with natural voice generation",
    icon: Mic,
    features: [
      "Automatic Speech Recognition",
      "Speaker Identification",
      "Voice Synthesis",
      "Accent Recognition",
      "Noise Reduction",
      "Real-time Processing"
    ],
    technologies: ["Wav2Vec", "Whisper", "Tacotron", "WaveNet", "DeepSpeech", "PyTorch"],
    applications: [
      "Voice assistants",
      "Transcription services",
      "Accessibility tools",
      "Call center automation"
    ],
    accuracy: "96%+",
    languages: "40+",
    pricing: "Starting from $40,000",
    duration: "8-16 weeks"
  },
  {
    id: "search-recommendation-engines",
    title: "Intelligent Search & Recommendation",
    description: "AI-powered search and recommendation systems with semantic understanding",
    icon: Search,
    features: [
      "Semantic Search",
      "Query Understanding",
      "Personalized Recommendations",
      "Faceted Search",
      "Auto-completion",
      "Relevance Ranking"
    ],
    technologies: ["Elasticsearch", "BERT", "Sentence-BERT", "Faiss", "Transformers", "Python"],
    applications: [
      "E-commerce search",
      "Content discovery",
      "Knowledge management",
      "Product recommendations"
    ],
    accuracy: "88%+",
    languages: "35+",
    pricing: "Starting from $30,000",
    duration: "6-12 weeks"
  }
];

// NLP development process
const nlpProcess = [
  {
    step: "01",
    title: "Data Collection & Preprocessing",
    description: "Gather and clean text data, perform tokenization, normalization, and linguistic preprocessing.",
    icon: Database
  },
  {
    step: "02",
    title: "Model Selection & Training",
    description: "Choose appropriate NLP models, fine-tune pre-trained models, and train custom solutions.",
    icon: Brain
  },
  {
    step: "03",
    title: "Evaluation & Optimization",
    description: "Rigorous testing with linguistic metrics, performance optimization, and bias detection.",
    icon: Target
  },
  {
    step: "04",
    title: "Deployment & Integration",
    description: "Deploy NLP models to production with API integration and real-time processing capabilities.",
    icon: Zap
  }
];

export default function NaturalLanguageProcessingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const breadcrumbs = [
    { name: "Home", url: "https://quadratetechsolutions.com" },
    { name: "Services", url: "https://quadratetechsolutions.com/services" },
    { name: "Natural Language Processing", url: "https://quadratetechsolutions.com/services/natural-language-processing" }
  ];

  const nlpSchema = serviceSchema({
    name: "Natural Language Processing Solutions",
    description: "Advanced NLP services including text analytics, chatbots, document processing, machine translation, speech recognition, and intelligent search with multilingual support.",
    url: "https://quadratetechsolutions.com/services/natural-language-processing",
    category: "Natural Language Processing & AI"
  });

  return (
    <>
      <ComprehensiveSEO 
        seo={{
          ...serviceSEO.aiMlSolutions,
          title: "Natural Language Processing | NLP Solutions & Text Analytics | Quadrate Tech",
          description: "Advanced NLP services including text analytics, chatbots, document processing, machine translation, speech recognition, and intelligent search. 95%+ accuracy with multilingual support.",
          keywords: [...serviceSEO.aiMlSolutions.keywords, "natural language processing", "NLP", "text analytics", "sentiment analysis", "chatbots", "conversational AI", "machine translation", "speech recognition", "document processing", "multilingual"]
        }} 
        structuredData={[organizationSchema, websiteSchema, nlpSchema]}
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
                Natural Language <span className="gradient-text">Processing</span>
              </h1>
              <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
                Unlock the power of human language with advanced NLP solutions. From sentiment analysis to conversational AI, 
                we help businesses understand and process text data with 95%+ accuracy across 50+ languages.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: MessageSquare, label: "NLP Models Deployed", value: "60+" },
                  { icon: Languages, label: "Languages Supported", value: "50+" },
                  { icon: Brain, label: "Average Accuracy", value: "95%+" },
                  { icon: Award, label: "Text Processing Speed", value: "< 50ms" }
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
                  <span>Get NLP Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
                <motion.a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0607E1] text-[#0607E1] font-semibold rounded-full hover:bg-[#0607E1] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View NLP Projects</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* NLP Services Grid */}
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
                  Our NLP Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive natural language processing solutions designed to understand, interpret,
                  and generate human language with state-of-the-art accuracy and multilingual support.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {nlpServices.map((service, index) => (
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
                        <div className="text-sm text-gray-600">Languages</div>
                        <div className="font-bold text-green-600">{service.languages}</div>
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.applications.map((app) => (
                          <span
                            key={app}
                            className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full"
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

        {/* NLP Development Process */}
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
                  Our NLP Development Process
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  A systematic approach to natural language processing that ensures high-quality results
                  from data preprocessing to production deployment.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {nlpProcess.map((step, index) => (
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
                      {index < nlpProcess.length - 1 && (
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

        {/* Multilingual Capabilities */}
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
                    Multilingual NLP Excellence
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Our NLP solutions support 50+ languages with state-of-the-art transformer models and
                    cross-lingual capabilities, enabling global businesses to process text in any language.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Languages,
                        title: "50+ Languages Supported",
                        description: "Comprehensive language coverage including major world languages and regional dialects"
                      },
                      {
                        icon: Brain,
                        title: "Cross-lingual Models",
                        description: "Advanced transformer models that understand and process multiple languages simultaneously"
                      },
                      {
                        icon: Globe,
                        title: "Cultural Context Awareness",
                        description: "Models trained to understand cultural nuances and context-specific language patterns"
                      },
                      {
                        icon: Zap,
                        title: "Real-time Processing",
                        description: "Fast, efficient processing with sub-50ms response times for real-time applications"
                      }
                    ].map((capability, index) => (
                      <motion.div
                        key={capability.title}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0607E1]/10 to-[#4D0AFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <capability.icon className="w-6 h-6 text-[#0607E1]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{capability.title}</h3>
                          <p className="text-gray-600">{capability.description}</p>
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
                      <MessageSquare className="w-24 h-24 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Language Intelligence</h3>
                      <p className="opacity-90">
                        Understanding and processing human language with advanced NLP technology and multilingual capabilities.
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
                Ready to Unlock Language Intelligence?
              </h2>
              <p className="text-fluid-lg mb-8 opacity-90">
                Transform your text data into actionable insights with our advanced NLP solutions.
                Get a free consultation and discover how we can help you understand human language at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Free NLP Consultation
                </motion.a>
                <motion.a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0607E1] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Star className="w-5 h-5 mr-2" />
                  View NLP Projects
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

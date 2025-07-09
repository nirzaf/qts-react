import {
  Brain,
  Bot,
  Cpu,
  Database,
  Eye,
  MessageSquare,
  BarChart3,
  Zap,
  Cloud,
  Search,
  Target,
  Settings,
  Layers
} from 'lucide-react';

export interface AIService {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: 'strategy' | 'development' | 'integration' | 'data' | 'packaged';
  features: string[];
  gradient: string;
}

export const aiServices: AIService[] = [
  // AI Strategy and Consulting
  {
    id: 'ai-strategy',
    title: 'AI Strategy and Consulting',
    description: 'Strategic guidance for AI adoption, readiness assessment, and technology roadmap development.',
    icon: Brain,
    category: 'strategy',
    features: [
      'AI Readiness Assessment',
      'Use Case Identification',
      'Technology Stack Consultation',
      'ROI Analysis and Planning'
    ],
    gradient: 'from-purple-500/20 to-purple-500/5'
  },
  {
    id: 'ai-readiness',
    title: 'AI Readiness Assessment',
    description: 'Evaluate your infrastructure, data maturity, and business processes for AI adoption.',
    icon: Search,
    category: 'strategy',
    features: [
      'Infrastructure Evaluation',
      'Data Quality Assessment',
      'Process Analysis',
      'Readiness Scoring'
    ],
    gradient: 'from-blue-500/20 to-blue-500/5'
  },
  {
    id: 'use-case-identification',
    title: 'Use Case Identification',
    description: 'Identify and prioritize AI use cases that align with your business goals and ROI.',
    icon: Target,
    category: 'strategy',
    features: [
      'Business Goal Alignment',
      'ROI Prioritization',
      'Feasibility Analysis',
      'Implementation Roadmap'
    ],
    gradient: 'from-green-500/20 to-green-500/5'
  },

  // Custom AI Model Development
  {
    id: 'machine-learning',
    title: 'Machine Learning Solutions',
    description: 'Custom ML models for predictive analytics, recommendation engines, and fraud detection.',
    icon: Cpu,
    category: 'development',
    features: [
      'Predictive Analytics',
      'Recommendation Engines',
      'Fraud Detection',
      'Sentiment Analysis'
    ],
    gradient: 'from-orange-500/20 to-orange-500/5'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Image recognition, object detection, facial recognition, and video analysis solutions.',
    icon: Eye,
    category: 'development',
    features: [
      'Image Recognition',
      'Object Detection',
      'Facial Recognition',
      'Video Analysis'
    ],
    gradient: 'from-red-500/20 to-red-500/5'
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    description: 'Build chatbots, virtual assistants, text analysis, and language translation services.',
    icon: MessageSquare,
    category: 'development',
    features: [
      'Chatbot Development',
      'Virtual Assistants',
      'Text Summarization',
      'Language Translation'
    ],
    gradient: 'from-teal-500/20 to-teal-500/5'
  },
  {
    id: 'generative-ai',
    title: 'Generative AI Solutions',
    description: 'Content generation, code generation, and sophisticated conversational AI agents.',
    icon: Bot,
    category: 'development',
    features: [
      'Content Generation',
      'Code Generation',
      'Conversational AI',
      'Creative AI Tools'
    ],
    gradient: 'from-pink-500/20 to-pink-500/5'
  },

  // AI Integration and Implementation
  {
    id: 'ai-integration',
    title: 'AI Integration Services',
    description: 'Seamlessly integrate AI capabilities into your existing software and workflows.',
    icon: Zap,
    category: 'integration',
    features: [
      'API Development',
      'System Integration',
      'Workflow Automation',
      'Legacy System Enhancement'
    ],
    gradient: 'from-yellow-500/20 to-yellow-500/5'
  },
  {
    id: 'cloud-ai',
    title: 'Cloud AI Implementation',
    description: 'Leverage cloud platforms for scalable AI solutions using AWS, Azure, and Google Cloud.',
    icon: Cloud,
    category: 'integration',
    features: [
      'AWS SageMaker',
      'Azure AI Services',
      'Google Cloud AI',
      'Scalable Deployment'
    ],
    gradient: 'from-indigo-500/20 to-indigo-500/5'
  },

  // Data and MLOps Services
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'Data collection, cleaning, preprocessing, and storage for high-quality AI training.',
    icon: Database,
    category: 'data',
    features: [
      'Data Pipeline Development',
      'Data Quality Management',
      'ETL Processes',
      'Data Warehousing'
    ],
    gradient: 'from-cyan-500/20 to-cyan-500/5'
  },
  {
    id: 'mlops',
    title: 'MLOps Services',
    description: 'Continuous integration, delivery, and monitoring of machine learning models.',
    icon: BarChart3,
    category: 'data',
    features: [
      'Model Deployment',
      'Performance Monitoring',
      'Automated Retraining',
      'Version Control'
    ],
    gradient: 'from-emerald-500/20 to-emerald-500/5'
  },

  // Packaged AI Solutions
  {
    id: 'industry-solutions',
    title: 'Industry-Specific AI Solutions',
    description: 'Tailored AI products for healthcare, manufacturing, e-commerce, and finance.',
    icon: Layers,
    category: 'packaged',
    features: [
      'Healthcare Diagnostics',
      'Predictive Maintenance',
      'Personalized Marketing',
      'Risk Assessment'
    ],
    gradient: 'from-violet-500/20 to-violet-500/5'
  },
  {
    id: 'ai-automation',
    title: 'AI-Powered Automation',
    description: 'Automate repetitive tasks like data entry, customer support, and report generation.',
    icon: Settings,
    category: 'packaged',
    features: [
      'Process Automation',
      'Document Processing',
      'Customer Support Bots',
      'Report Generation'
    ],
    gradient: 'from-rose-500/20 to-rose-500/5'
  }
];

export const getServicesByCategory = (category: AIService['category']) => {
  return aiServices.filter(service => service.category === category);
};

export const getAllCategories = () => {
  return ['strategy', 'development', 'integration', 'data', 'packaged'] as const;
};

export const getCategoryTitle = (category: AIService['category']) => {
  const titles = {
    strategy: 'AI Strategy & Consulting',
    development: 'Custom AI Model Development',
    integration: 'AI Integration & Implementation',
    data: 'Data & MLOps Services',
    packaged: 'Packaged AI Solutions'
  };
  return titles[category];
};

export const getCategoryDescription = (category: AIService['category']) => {
  const descriptions = {
    strategy: 'Strategic guidance and planning for successful AI adoption',
    development: 'Custom AI models and solutions tailored to your needs',
    integration: 'Seamless integration of AI into existing systems',
    data: 'Data engineering and MLOps for robust AI operations',
    packaged: 'Ready-to-deploy AI solutions for common business needs'
  };
  return descriptions[category];
};

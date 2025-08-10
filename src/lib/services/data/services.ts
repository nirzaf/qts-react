import {
  Code2,
  Globe,
  LineChart,
  Network,
  Mail,
  Workflow,
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
  Target
} from 'lucide-react';
import { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  // AI Strategy and Consulting
  {
    title: 'AI Strategy and Consulting',
    description: 'Strategic guidance for AI adoption, readiness assessment, and technology roadmap development.',
    icon: Brain,
    gradient: 'from-[#0607E1]/20 to-[#0607E1]/5',
  },
  {
    title: 'AI Readiness Assessment',
    description: 'Evaluate your infrastructure and data maturity to determine AI adoption readiness.',
    icon: Search,
    gradient: 'from-[#0607E1]/25 to-[#0607E1]/10',
  },
  {
    title: 'Use Case Identification',
    description: 'Identify and prioritize AI use cases that align with your business goals and ROI.',
    icon: Target,
    gradient: 'from-[#0607E1]/30 to-[#0607E1]/15',
  },

  // Custom AI Model Development
  {
    title: 'Machine Learning Solutions',
    description: 'Custom ML models for predictive analytics, recommendation engines, and fraud detection.',
    icon: Cpu,
    gradient: 'from-[#0607E1]/35 to-[#0607E1]/20',
  },
  {
    title: 'Computer Vision',
    description: 'Image recognition, object detection, facial recognition, and video analysis solutions.',
    icon: Eye,
    gradient: 'from-[#0607E1]/40 to-[#0607E1]/25',
  },
  {
    title: 'Natural Language Processing',
    description: 'Build chatbots, virtual assistants, text analysis, and language translation services.',
    icon: MessageSquare,
    gradient: 'from-[#0607E1]/45 to-[#0607E1]/30',
  },
  {
    title: 'Generative AI Solutions',
    description: 'Content generation, code generation, and sophisticated conversational AI agents.',
    icon: Bot,
    gradient: 'from-[#0607E1]/50 to-[#0607E1]/35',
  },

  // AI Integration and Implementation
  {
    title: 'AI Integration Services',
    description: 'Seamlessly integrate AI capabilities into your existing software and workflows.',
    icon: Zap,
    gradient: 'from-[#0607E1]/55 to-[#0607E1]/40',
  },
  {
    title: 'Cloud AI Implementation',
    description: 'Leverage cloud platforms for scalable AI solutions using AWS, Azure, and Google Cloud.',
    icon: Cloud,
    gradient: 'from-[#0607E1]/60 to-[#0607E1]/45',
  },

  // Data and MLOps Services
  {
    title: 'Data Engineering',
    description: 'Data collection, cleaning, preprocessing, and storage for high-quality AI training.',
    icon: Database,
    gradient: 'from-[#0607E1]/65 to-[#0607E1]/50',
  },
  {
    title: 'MLOps Services',
    description: 'Continuous integration, delivery, and monitoring of machine learning models.',
    icon: BarChart3,
    gradient: 'from-[#0607E1]/70 to-[#0607E1]/55',
  },

  // Traditional Services
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your unique business requirements.',
    icon: Code2,
    gradient: 'from-[#0607E1]/75 to-[#0607E1]/60',
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications that drive engagement.',
    icon: Globe,
    gradient: 'from-[#0607E1]/80 to-[#0607E1]/65',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to boost your online presence.',
    icon: LineChart,
    gradient: 'from-[#0607E1]/85 to-[#0607E1]/70',
  },
  {
    title: 'IT Outsourcing',
    description: 'Comprehensive IT support and management services for your business needs.',
    icon: Network,
    gradient: 'from-[#0607E1]/90 to-[#0607E1]/75',
  },
  {
    title: 'Business Email',
    description: 'Professional email solutions for secure and reliable business communication.',
    icon: Mail,
    gradient: 'from-[#0607E1]/95 to-[#0607E1]/80',
  },
  {
    title: 'Business Process Automation',
    description: 'Streamline operations with intelligent automation solutions.',
    icon: Workflow,
    gradient: 'from-[#0607E1]/100 to-[#0607E1]/85',
  },
];

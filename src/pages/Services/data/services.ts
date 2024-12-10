import { Code2, Globe, LineChart, Network, Mail, Workflow } from 'lucide-react';
import { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your unique business requirements.',
    icon: Code2,
    gradient: 'from-[#0607E1]/20 to-[#0607E1]/5',
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications that drive engagement.',
    icon: Globe,
    gradient: 'from-[#0607E1]/25 to-[#0607E1]/10',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to boost your online presence.',
    icon: LineChart,
    gradient: 'from-[#0607E1]/30 to-[#0607E1]/15',
  },
  {
    title: 'IT Outsourcing',
    description: 'Comprehensive IT support and management services for your business needs.',
    icon: Network,
    gradient: 'from-[#0607E1]/35 to-[#0607E1]/20',
  },
  {
    title: 'Business Email',
    description: 'Professional email solutions for secure and reliable business communication.',
    icon: Mail,
    gradient: 'from-[#0607E1]/40 to-[#0607E1]/25',
  },
  {
    title: 'Business Process Automation',
    description: 'Streamline operations with intelligent automation solutions.',
    icon: Workflow,
    gradient: 'from-[#0607E1]/45 to-[#0607E1]/30',
  },
];

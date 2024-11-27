import { type LucideIcon, MessageSquare, Calendar, Mail } from 'lucide-react';

export interface ContactMethod {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  link: string;
}

export const contactMethods: ContactMethod[] = [
  {
    id: 'chat',
    title: 'Quick Chat',
    description: 'Start a conversation right now',
    icon: MessageSquare,
    color: 'bg-blue-500',
    link: 'https://quadratetechsolutions.zohobookings.com/#/customer-support'
  },
  {
    id: 'schedule',
    title: 'Schedule Meeting',
    description: 'Book a time that works for you',
    icon: Calendar,
    color: 'bg-purple-500',
    link: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions'
  },
  {
    id: 'email',
    title: 'Email Us',
    description: 'Get in touch via email',
    icon: Mail,
    color: 'bg-green-500',
    link: 'mailto:info@quadratetechsolutions.com'
  }
];

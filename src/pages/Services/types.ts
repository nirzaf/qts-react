import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export interface AnimationVariants {
  hidden: object;
  visible: object;
  hover?: object;
}

import { Variants } from 'framer-motion';

export interface SectionProps {
  className?: string;
  variants?: Variants;
}

export interface StoryContentProps extends SectionProps {
  title?: string;
  content?: string[];
}

export interface ValueItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ValuesContentProps extends SectionProps {
  values?: ValueItemProps[];
}

export interface ImageContentProps extends SectionProps {
  src?: string;
  alt?: string;
}

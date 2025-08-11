// Common types
export interface ButtonConfig {
  text: string;
  onClick: () => void;
}

export interface HeroData {
  backgroundImage: string;
  heroImage: {
    src: string;
    alt: string;
  };
  primaryButton: ButtonConfig;
  secondaryButton: ButtonConfig;
}

// Interview Assessment types
export interface Question {
  id: number;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: 'A' | 'B' | 'C' | 'D';
  category: string;
  explanation?: string;
}

export interface CandidateDetails {
  full_name: string;
  email: string;
  is_university: boolean;
  university_name?: string;
}

export interface InterviewSession {
  id?: string;
  full_name: string;
  email: string;
  is_university: boolean;
  university_name?: string;
  start_time?: string;
  end_time?: string;
  duration_seconds?: number;
  score?: number;
  submitted?: boolean;
  answers?: Record<string, string>;
}

export interface PageState {
  currentPage: number;
  timeRemaining: number;
  answers: Record<string, string>;
  isSubmitted: boolean;
  isTimeUp: boolean;
}

// Blog types
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  pubDate: string;
  heroImage: string;
  category: string;
  tags: string[];
  content: string;
  slug?: string;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing?: PricingTier[];
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

// Next.js specific types
export interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface LayoutProps {
  children: React.ReactNode;
  params?: { [key: string]: string };
}
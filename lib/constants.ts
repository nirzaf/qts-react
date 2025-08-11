// Site configuration
export const SITE_CONFIG = {
  name: 'Quadrate Tech Solutions',
  description: 'Leading provider of innovative technology solutions and services',
  url: 'https://quadratetech.com',
  ogImage: '/logo.png',
  links: {
    twitter: 'https://twitter.com/quadratetech',
    github: 'https://github.com/quadratetech',
    linkedin: 'https://linkedin.com/company/quadratetech',
  },
};

// Navigation items
export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

// Blog configuration
export const BLOG_CONFIG = {
  postsPerPage: 10,
  categories: [
    'Technology',
    'Web Development',
    'Mobile Development',
    'AI & Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
  ],
};

// Interview assessment configuration
export const INTERVIEW_CONFIG = {
  timeLimit: 30 * 60, // 30 minutes in seconds
  questionsPerPage: 1,
  totalQuestions: 20,
  passingScore: 70,
};

// Animation configuration
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  easing: {
    easeOut: [0.0, 0.0, 0.2, 1],
    easeIn: [0.4, 0.0, 1, 1],
    easeInOut: [0.4, 0.0, 0.2, 1],
  },
};
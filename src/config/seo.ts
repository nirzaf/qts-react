export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    type: string;
    locale: string;
    url: string;
    siteName: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
  twitter: {
    card: string;
    site: string;
    creator: string;
  };
  canonical?: string;
  robots?: string;
}

export const defaultSEO: SEOConfig = {
  title: "Quadrate Tech Solutions | AI/ML Software Development Company Sri Lanka",
  description: "Leading AI/ML software development company in Sri Lanka. Custom software, digital transformation, Microsoft 365, ZOHO solutions. 50+ projects delivered.",
  keywords: [
    "AI software development Sri Lanka",
    "machine learning solutions",
    "custom software development",
    "digital transformation",
    "Microsoft 365 partner",
    "ZOHO certified partner",
    "SAP solutions",
    "business intelligence",
    "cloud computing",
    "data analytics",
    "artificial intelligence consulting",
    "software development company",
    "enterprise software solutions",
    "mobile app development",
    "web application development",
    "MLOps solutions",
    "computer vision",
    "natural language processing",
    "generative AI",
    "data engineering"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quadratetechsolutions.com",
    siteName: "Quadrate Tech Solutions",
    images: [{
      url: "https://quadratetechsolutions.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Quadrate Tech Solutions - AI/ML Software Development"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@QuadrateTech",
    creator: "@QuadrateTech"
  }
};

export const pageSEO = {
  home: {
    ...defaultSEO,
    title: "Quadrate Tech Solutions | Leading AI/ML Software Development Company",
    description: "Transform your business with AI/ML solutions, custom software development, and digital transformation services. Microsoft 365 & ZOHO certified partner in Sri Lanka.",
  },
  about: {
    ...defaultSEO,
    title: "About Quadrate Tech Solutions | AI/ML Software Development Experts",
    description: "Learn about Quadrate Tech Solutions - Sri Lanka's premier AI/ML software development company. Our mission, vision, team, and 50+ successful projects.",
  },
  services: {
    ...defaultSEO,
    title: "AI/ML Software Development Services | Quadrate Tech Solutions",
    description: "Comprehensive AI/ML and software development services including custom software, digital transformation, cloud solutions, and enterprise applications.",
  },
  portfolio: {
    ...defaultSEO,
    title: "Portfolio | 50+ Successful AI/ML Projects | Quadrate Tech Solutions",
    description: "Explore our portfolio of 50+ successful AI/ML and software development projects across healthcare, finance, manufacturing, and e-commerce industries.",
  },
  contact: {
    ...defaultSEO,
    title: "Contact Quadrate Tech Solutions | AI/ML Software Development Company",
    description: "Get in touch with Quadrate Tech Solutions for AI/ML consulting, custom software development, and digital transformation services. Free consultation available.",
  },
  blog: {
    ...defaultSEO,
    title: "Tech Blog | AI/ML Insights & Software Development | Quadrate Tech",
    description: "Latest insights on AI/ML, software development, digital transformation, and technology trends from Quadrate Tech Solutions experts.",
  },
  pricing: {
    ...defaultSEO,
    title: "Pricing | AI/ML Software Development Services | Quadrate Tech",
    description: "Transparent pricing for AI/ML solutions, custom software development, and digital transformation services. Flexible packages for all business sizes.",
  }
};

// Industry-specific SEO
export const industrySEO = {
  healthcare: {
    ...defaultSEO,
    title: "Healthcare AI/ML Solutions | Medical Software Development | Quadrate Tech",
    description: "Specialized AI/ML solutions for healthcare including medical imaging, patient management systems, and healthcare analytics. HIPAA compliant solutions.",
    keywords: [...defaultSEO.keywords, "healthcare AI", "medical software", "HIPAA compliance", "medical imaging AI", "patient management systems"]
  },
  finance: {
    ...defaultSEO,
    title: "FinTech AI/ML Solutions | Financial Software Development | Quadrate Tech",
    description: "Advanced FinTech solutions including fraud detection, algorithmic trading, risk management, and financial analytics using AI/ML technologies.",
    keywords: [...defaultSEO.keywords, "fintech solutions", "fraud detection AI", "algorithmic trading", "financial analytics", "banking software"]
  },
  manufacturing: {
    ...defaultSEO,
    title: "Manufacturing AI/ML Solutions | Industrial IoT | Quadrate Tech",
    description: "Smart manufacturing solutions with AI/ML, IoT integration, predictive maintenance, quality control, and supply chain optimization.",
    keywords: [...defaultSEO.keywords, "manufacturing AI", "industrial IoT", "predictive maintenance", "quality control AI", "supply chain optimization"]
  },
  retail: {
    ...defaultSEO,
    title: "Retail AI/ML Solutions | E-commerce Development | Quadrate Tech",
    description: "AI-powered retail solutions including recommendation engines, inventory management, customer analytics, and e-commerce platforms.",
    keywords: [...defaultSEO.keywords, "retail AI", "e-commerce development", "recommendation engines", "inventory management", "customer analytics"]
  }
};

// Service-specific SEO
export const serviceSEO = {
  aiMlSolutions: {
    ...defaultSEO,
    title: "AI/ML Solutions | Machine Learning Development | Quadrate Tech",
    description: "Custom AI/ML solutions including machine learning models, computer vision, NLP, generative AI, and MLOps. Transform your business with AI.",
    keywords: [...defaultSEO.keywords, "machine learning development", "AI consulting", "computer vision", "NLP solutions", "generative AI", "MLOps"]
  },
  customSoftware: {
    ...defaultSEO,
    title: "Custom Software Development | Enterprise Applications | Quadrate Tech",
    description: "Bespoke software development services including web applications, mobile apps, enterprise software, and system integration solutions.",
    keywords: [...defaultSEO.keywords, "custom software development", "enterprise applications", "system integration", "bespoke software"]
  },
  webDevelopment: {
    ...defaultSEO,
    title: "Web Development Services | Modern Web Applications | Quadrate Tech",
    description: "Professional web development services using React, Next.js, Node.js. Responsive, scalable, and SEO-optimized web applications.",
    keywords: [...defaultSEO.keywords, "web development", "React development", "Next.js", "responsive web design", "progressive web apps"]
  },
  mobileDevelopment: {
    ...defaultSEO,
    title: "Mobile App Development | iOS & Android Apps | Quadrate Tech",
    description: "Native and cross-platform mobile app development for iOS and Android. React Native, Flutter, and native development expertise.",
    keywords: [...defaultSEO.keywords, "mobile app development", "iOS development", "Android development", "React Native", "Flutter"]
  },
  cloudSolutions: {
    ...defaultSEO,
    title: "Cloud Solutions | AWS, Azure, GCP Services | Quadrate Tech",
    description: "Comprehensive cloud solutions including migration, architecture, DevOps, and managed services for AWS, Azure, and Google Cloud Platform.",
    keywords: [...defaultSEO.keywords, "cloud solutions", "AWS services", "Azure migration", "Google Cloud", "DevOps", "cloud architecture"]
  }
};

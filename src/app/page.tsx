import type { Metadata } from 'next';
import Home from '@/pages/Home';
import {
  generateOrganizationSchema,
  generateWebPageSchema,
  generateLocalBusinessSchema,
  generateServiceSchema,
  defaultOrganization,
} from '@/utils/structuredData';

export const metadata: Metadata = {
  title: 'Quadrate Tech Solutions | AI & Software Development',
  description:
    'AI-powered software solutions, machine learning, computer vision, NLP, custom software development, web development, and digital marketing services.',
  keywords: [
    'artificial intelligence',
    'AI services',
    'machine learning',
    'computer vision',
    'natural language processing',
    'generative AI',
    'AI consulting',
    'software development',
    'web development',
    'digital marketing',
    'IT outsourcing',
    'business automation',
    'Sri Lanka',
    'custom software',
    'web design',
    'mobile app development',
    'cloud solutions',
    'AI integration',
    'MLOps',
    'data engineering',
  ],
  openGraph: {
    title: 'Quadrate Tech Solutions | AI & Software Development',
    description:
      'AI-powered software solutions, machine learning, computer vision, NLP, custom software development, web development, and digital marketing services.',
    url: 'https://quadrate.lk',
    type: 'website',
    images: [
      {
        url: 'https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458',
        width: 1200,
        height: 630,
        alt: 'Quadrate Tech Solutions - AI & Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quadrate Tech Solutions | AI & Software Development',
    description:
      'AI-powered software solutions, machine learning, computer vision, NLP, custom software development, web development, and digital marketing services.',
    images: ['https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458'],
  },
};

export default function Page() {
  // Generate structured data for the home page
  const organizationSchema = generateOrganizationSchema(defaultOrganization);

  const webPageSchema = generateWebPageSchema({
    title: 'Quadrate Tech Solutions | Software Development',
    description:
      'Custom software development, web development, digital marketing, and IT services to help your business grow.',
    url: 'https://quadrate.lk/',
    image: 'https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458',
    datePublished: '2023-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    speakable: true,
  });

  const localBusinessSchema = generateLocalBusinessSchema({
    ...defaultOrganization,
    geo: {
      latitude: 7.8731,
      longitude: 80.7718,
    },
    openingHours: ['Monday-Friday 09:00-17:00', 'Saturday 10:00-15:00'],
    priceRange: '$$',
  });

  // Generate service schemas for main services
  const webDevServiceSchema = generateServiceSchema({
    name: 'Web Development Services',
    description:
      'Custom web application development using modern technologies like React, Angular, and Node.js.',
    url: 'https://quadrate.lk/services#web-development',
    provider: defaultOrganization,
    category: 'Web Development',
    areaServed: 'Worldwide',
    offers: [
      {
        name: 'Custom Web Application',
        price: '5000',
        priceCurrency: 'USD',
        availability: 'InStock',
      },
    ],
  });

  const mobileDevServiceSchema = generateServiceSchema({
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile application development for iOS and Android.',
    url: 'https://quadrate.lk/services#mobile-development',
    provider: defaultOrganization,
    category: 'Mobile Development',
    areaServed: 'Worldwide',
  });

  // Combine all structured data
  const structuredData = [
    organizationSchema,
    webPageSchema,
    localBusinessSchema,
    webDevServiceSchema,
    mobileDevServiceSchema,
  ];

  return (
    <>
      {/* Inject JSON-LD structured data */}
      {structuredData.map((schema, index) => (
        <script
          key={`ld-json-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Home />
    </>
  );
}

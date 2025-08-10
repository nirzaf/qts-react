import React from 'react';
import type { Metadata } from 'next';
import { QuadrateAboutSection } from '@/components/about/QuadrateAboutSection';
import { VisionMission } from '@/components/about/VisionMission';
import { ExperienceSection } from '@/components/about/ExperienceSection';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { 
  generateOrganizationSchema, 
  generateWebPageSchema, 
  generateBreadcrumbSchema,
  defaultOrganization 
} from '@/utils/structuredData';

// Metadata for the about page
export const metadata: Metadata = {
  title: 'About Quadrate Tech Solutions | Our Story & Values',
  description: 'Learn about Quadrate Tech Solutions, our mission, values, and the expert team driving innovation in software development and IT services in Sri Lanka.',
  keywords: [
    'about Quadrate',
    'tech company Sri Lanka',
    'IT solutions mission',
    'software development team',
    'company vision',
    'tech expertise',
    'Sri Lanka software developers'
  ],
  openGraph: {
    title: 'About Quadrate Tech Solutions | Our Story & Values',
    description: 'Learn about Quadrate Tech Solutions, our mission, values, and the expert team driving innovation in software development and IT services in Sri Lanka.',
    url: 'https://quadratetechsolutions.com/about',
    images: [
      {
        url: 'https://ik.imagekit.io/quadrate/assets/img/about.jpg?updatedAt=1718024112686',
        width: 1200,
        height: 630,
        alt: 'About Quadrate Tech Solutions',
      },
    ],
  },
  twitter: {
    title: 'About Quadrate Tech Solutions | Our Story & Values',
    description: 'Learn about Quadrate Tech Solutions, our mission, values, and the expert team driving innovation in software development and IT services in Sri Lanka.',
    images: ['https://ik.imagekit.io/quadrate/assets/img/about.jpg?updatedAt=1718024112686'],
  },
  alternates: {
    canonical: 'https://quadratetechsolutions.com/about',
  },
};

export default function AboutPage() {
  const pageTitle = "About Quadrate Tech Solutions | Our Story & Values";
  const pageDescription = "Learn about Quadrate Tech Solutions, our mission, values, and the expert team driving innovation in software development and IT services in Sri Lanka.";
  const pageUrl = "https://quadratetechsolutions.com/about";
  const pageImage = "https://ik.imagekit.io/quadrate/assets/img/about.jpg?updatedAt=1718024112686";
  
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://quadratetechsolutions.com/' },
    { name: 'About Us', url: pageUrl }
  ]);

  // Generate structured data for the about page
  const organizationSchema = generateOrganizationSchema(defaultOrganization);
  const webPageSchema = generateWebPageSchema({
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    image: pageImage,
    dateModified: new Date().toISOString().split('T')[0],
    breadcrumb: [
      { name: 'Home', url: 'https://quadratetechsolutions.com/' },
      { name: 'About Us', url: pageUrl }
    ],
    speakable: true
  });

  // Combine structured data
  const structuredData = [
    organizationSchema,
    webPageSchema,
    breadcrumbSchema
  ];

  return (
    <>
      <SchemaMarkup schema={structuredData} />
      <QuadrateAboutSection />
      <VisionMission />
      <ExperienceSection />
    </>
  );
}

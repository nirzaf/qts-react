import React, { Suspense, lazy } from 'react';
import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { services } from '@/pages/Services/data/services';
import { containerVariants, itemVariants } from '@/pages/Services/animations/variants';
import BackgroundEffects from '@/pages/Services/components/BackgroundEffects';
import HeroSection from '@/pages/Services/components/HeroSection';
import ServiceCard from '@/pages/Services/components/ServiceCard';
import CTASection from '@/pages/Services/components/CTASection';
import Loading from '@/components/ui/loading';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { 
  generateOrganizationSchema, 
  generateWebPageSchema, 
  generateServiceSchema, 
  generateBreadcrumbSchema,
  defaultOrganization 
} from '@/utils/structuredData';

// Lazy load AI Services section
const AIServicesSection = lazy(() => import('@/components/sections/AIServicesSection'));

// Metadata for the services page
export const metadata: Metadata = {
  title: 'Our Services | Quadrate Tech Solutions',
  description: 'Explore services from Quadrate Tech Solutions: Custom Software, Web Dev, Digital Marketing, IT Outsourcing, Business Email, and Automation.',
  keywords: [
    'artificial intelligence services',
    'AI consulting',
    'machine learning solutions',
    'computer vision',
    'natural language processing',
    'generative AI',
    'AI integration',
    'MLOps',
    'data engineering',
    'custom software development',
    'web development',
    'digital marketing',
    'IT outsourcing',
    'business email',
    'business process automation',
    'IT services Sri Lanka',
    'Zoho partner',
    'Microsoft 365 solutions',
    'AI strategy',
    'AI readiness assessment',
    'cloud AI implementation'
  ],
  openGraph: {
    title: 'Our Services | Quadrate Tech Solutions',
    description: 'Explore services from Quadrate Tech Solutions: Custom Software, Web Dev, Digital Marketing, IT Outsourcing, Business Email, and Automation.',
    url: 'https://quadratetechsolutions.com/services',
    images: [
      {
        url: 'https://ik.imagekit.io/quadrate/assets/img/services.jpg?updatedAt=1718024112686',
        width: 1200,
        height: 630,
        alt: 'Quadrate Tech Solutions Services',
      },
    ],
  },
  twitter: {
    title: 'Our Services | Quadrate Tech Solutions',
    description: 'Explore services from Quadrate Tech Solutions: Custom Software, Web Dev, Digital Marketing, IT Outsourcing, Business Email, and Automation.',
    images: ['https://ik.imagekit.io/quadrate/assets/img/services.jpg?updatedAt=1718024112686'],
  },
  alternates: {
    canonical: 'https://quadratetechsolutions.com/services',
  },
};

export default function ServicesPage() {
  const pageTitle = "Our Services | Quadrate Tech Solutions";
  const pageDescription = "Explore services from Quadrate Tech Solutions: Custom Software, Web Dev, Digital Marketing, IT Outsourcing, Business Email, and Automation.";
  const pageUrl = "https://quadratetechsolutions.com/services";
  const pageImage = "https://ik.imagekit.io/quadrate/assets/img/services.jpg?updatedAt=1718024112686";

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://quadratetechsolutions.com/' },
    { name: 'Services', url: pageUrl }
  ]);
  
  // Generate structured data for the services page
  const organizationSchema = generateOrganizationSchema(defaultOrganization);
  const webPageSchema = generateWebPageSchema({
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    image: pageImage,
    dateModified: new Date().toISOString().split('T')[0],
    breadcrumb: [
      { name: 'Home', url: 'https://quadratetechsolutions.com/' },
      { name: 'Services', url: pageUrl }
    ],
    speakable: true
  });

  // Generate service schemas with more detailed information
  const serviceSchemas = services.map(service => generateServiceSchema({
    name: service.title,
    description: service.description,
    url: `${pageUrl}#${service.title.toLowerCase().replace(/\s+/g, '-')}`,
    provider: defaultOrganization,
    category: 'Technology Service',
    areaServed: 'Worldwide'
    // Note: If pricing information becomes available in the ServiceItem type,
    // we can add offers here
  }));

  // Combine all structured data
  const structuredData = [
    organizationSchema,
    webPageSchema,
    breadcrumbSchema,
    ...serviceSchemas
  ];

  return (
    <>
      <SchemaMarkup schema={structuredData} />
      
      <div className="relative overflow-hidden min-h-screen">
        <BackgroundEffects />

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4">
          <HeroSection />

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20"
          >
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
                itemVariants={itemVariants}
              />
            ))}
          </motion.div>

          {/* AI Services Section */}
          <div className="relative z-30 -mt-10">
            <Suspense fallback={<Loading />}>
              <AIServicesSection />
            </Suspense>
          </div>

          <CTASection />
        </div>
      </div>
    </>
  );
}

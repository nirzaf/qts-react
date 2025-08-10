'use client';

import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/layouts/PageLayout';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { services } from './Services/data/services';
import { containerVariants, itemVariants } from './Services/animations/variants';
import BackgroundEffects from './Services/components/BackgroundEffects';
import HeroSection from './Services/components/HeroSection';
import ServiceCard from './Services/components/ServiceCard';
import CTASection from './Services/components/CTASection';
import SEO from '@/components/seo/SEO';
import Loading from '@/components/ui/loading';

// Lazy load AI Services section
const AIServicesSection = lazy(() => import('@/components/sections/AIServicesSection'));
import { 
  generateOrganizationSchema, 
  generateWebPageSchema, 
  generateServiceSchema, 
  generateBreadcrumbSchema,
  defaultOrganization 
} from '@/utils/structuredData';

const ServicesPage: React.FC = () => {
  const pageTitle = "Our Services | Quadrate Tech Solutions";
  const pageDescription = "Explore services from Quadrate Tech Solutions: Custom Software, Web Dev, Digital Marketing, IT Outsourcing, Business Email, and Automation.";
  const pageUrl = "https://quadrate.lk/#/services";
  const pageImage = "https://ik.imagekit.io/quadrate/assets/img/services.jpg?updatedAt=1718024112686";

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://quadrate.lk/#/' },
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
      { name: 'Home', url: 'https://quadrate.lk/#/' },
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
    <HelmetProvider>
      <PageLayout>
        {/* Primary SEO component */}
        <SEO
          title={pageTitle}
          description={pageDescription}
          keywords="artificial intelligence services, AI consulting, machine learning solutions, computer vision, natural language processing, generative AI, AI integration, MLOps, data engineering, custom software development, web development, digital marketing, IT outsourcing, business email, business process automation, IT services Sri Lanka, Zoho partner, Microsoft 365 solutions, AI strategy, AI readiness assessment, cloud AI implementation"
          image={pageImage}
          canonicalUrl={pageUrl}
          structuredData={structuredData}
        />
        
        {/* Additional page-specific meta tags */}
        <Helmet>
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:image" content={pageImage} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content={pageImage} />
          <link rel="canonical" href={pageUrl} />
        </Helmet>
        
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
      </PageLayout>
    </HelmetProvider>
  );
};

export default ServicesPage;
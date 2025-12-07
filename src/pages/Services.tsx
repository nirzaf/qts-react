'use client';

import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/layouts/PageLayout';

import { services } from '@/features/services/data/services';
import { containerVariants, itemVariants } from '@/features/services/animations/variants';
import BackgroundEffects from '@/features/services/components/BackgroundEffects';
import HeroSection from '@/features/services/components/HeroSection';
import ServiceCard from '@/features/services/components/ServiceCard';
import CTASection from '@/features/services/components/CTASection';

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
  const pageUrl = "https://quadrate.lk/services";
  const pageImage = "https://ik.imagekit.io/quadrate/assets/img/services.jpg?updatedAt=1718024112686";

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://quadrate.lk/' },
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
      { name: 'Home', url: 'https://quadrate.lk/' },
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
    <PageLayout>
      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}


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
  );
};

export default ServicesPage;

import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/layouts/PageLayout';
import { HelmetProvider } from 'react-helmet-async';


import { services } from './Services/data/services';
import { containerVariants, itemVariants } from './Services/animations/variants';
import BackgroundEffects from './Services/components/BackgroundEffects';
import HeroSection from './Services/components/HeroSection';
import ServiceCard from './Services/components/ServiceCard';
import CTASection from './Services/components/CTASection';
import SEO from '@/components/seo/SEO';
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
          keywords="custom software development, web development, digital marketing, IT outsourcing, business email, business process automation, IT services Sri Lanka, Zoho partner, Microsoft 365 solutions"
          image={pageImage}
          canonicalUrl={pageUrl}
          structuredData={structuredData}
        />
        
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
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  itemVariants={itemVariants}
                />
              ))}
            </motion.div>

            <CTASection />
          </div>
        </div>
      </PageLayout>
    </HelmetProvider>
  );
};

export default ServicesPage;
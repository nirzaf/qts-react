import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/layouts/PageLayout';

import { services } from './Services/data/services';
import { containerVariants, itemVariants } from './Services/animations/variants';
import BackgroundEffects from './Services/components/BackgroundEffects';
import HeroSection from './Services/components/HeroSection';
import ServiceCard from './Services/components/ServiceCard';
import CTASection from './Services/components/CTASection';
import SEO from '@/components/seo/SEO';
import { generateOrganizationSchema, generateWebPageSchema, generateServiceSchema, defaultOrganization } from '@/utils/structuredData';

const ServicesPage: React.FC = () => {
  // Generate structured data for the services page
  const organizationSchema = generateOrganizationSchema(defaultOrganization);
  const webPageSchema = generateWebPageSchema({
    title: 'Our Services | Quadrate Tech Solutions',
    description: 'Explore our comprehensive range of IT services including custom software development, web development, digital marketing, IT outsourcing, business email, and automation.',
    url: 'https://quadratetechsolutions.com/services',
  });

  // Generate service schemas
  const serviceSchemas = services.map(service => generateServiceSchema({
    name: service.title,
    description: service.description,
    url: `https://quadratetechsolutions.com/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`,
    provider: defaultOrganization
  }));

  // Combine structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, webPageSchema, ...serviceSchemas]
  };

  return (
    <PageLayout>
      <SEO
        title="Our Services | Quadrate Tech Solutions"
        description="Explore our comprehensive range of IT services including custom software development, web development, digital marketing, IT outsourcing, business email, and automation."
        keywords="custom software development, web development, digital marketing, IT outsourcing, business email, business process automation, IT services Sri Lanka"
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
  );
};

export default ServicesPage;
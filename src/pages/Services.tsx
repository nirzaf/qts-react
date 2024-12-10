import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/layouts/PageLayout';

import { services } from './Services/data/services';
import { containerVariants, itemVariants } from './Services/animations/variants';
import BackgroundEffects from './Services/components/BackgroundEffects';
import HeroSection from './Services/components/HeroSection';
import ServiceCard from './Services/components/ServiceCard';
import CTASection from './Services/components/CTASection';

const ServicesPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        <BackgroundEffects />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
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
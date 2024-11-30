import React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import WhyChooseUs from '@/components/services/WhyChooseUs';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <ServicesHero />
      <ServicesGrid />
      <WhyChooseUs />
    </div>
  );
};

export default ServicesPage;
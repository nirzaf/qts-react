import React from 'react';
import ServicesGrid from '@/components/services/ServicesGrid';
import WhyChooseUs from '@/components/services/WhyChooseUs';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-8">
      <ServicesGrid />
      <WhyChooseUs />
    </div>
  );
};

export default ServicesPage;
import React from 'react';
import AboutHero from '@/components/sections/about/AboutHero';
import { AboutContent } from '@/components/sections/about/AboutContent';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <AboutHero 
        title="About Us"
        subtitle="Building the future of technology solutions, one innovation at a time"
      />
      <AboutContent />
    </div>
  );
};

export default AboutPage;

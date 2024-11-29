import React from 'react';
import AboutHero from '@/components/sections/about/AboutHero';
import { AboutContent } from '@/components/sections/about/AboutContent';

const AboutPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#FFFFFF]">
      <AboutHero 
        title="About Quadrate Tech Solutions"
        subtitle="Empowering businesses with innovative technology solutions since 2009. We're dedicated to delivering excellence in software development and digital transformation."
      />
      <AboutContent />
    </div>
  );
};

export default AboutPage;

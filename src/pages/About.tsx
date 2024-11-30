import React from 'react';
import AboutContainer from '@/components/about/AboutContainer';
import AboutHero from '@/components/sections/about/AboutHero';
import { AboutContent } from '@/components/sections/about/AboutContent';

const AboutPage: React.FC = () => {
  return (
    <AboutContainer>
      <AboutHero 
        title="About Us"
        subtitle="Building the future of technology solutions, one innovation at a time"
      />
      <AboutContent />
    </AboutContainer>
  );
};

export default AboutPage;

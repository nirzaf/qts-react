import React from 'react';
import AboutContainer from '@/components/about/AboutContainer';
import { AboutContent } from '@/components/sections/about/AboutContent';

const AboutPage: React.FC = () => {
  return (
    <AboutContainer>
      <AboutContent />
    </AboutContainer>
  );
};

export default AboutPage;

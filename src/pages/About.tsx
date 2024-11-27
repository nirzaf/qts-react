import React from 'react';
import AboutUsMain from '@/components/sections/about/AboutUsMain';
import { faqData } from '@/data/about-page/faqs';

const AboutPage: React.FC = () => {
  return (
    <AboutUsMain 
      title="About Quadrate Tech Solutions"
      faqs={faqData}
    />
  );
};

export default AboutPage;

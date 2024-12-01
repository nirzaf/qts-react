import React from 'react';
import PageLayout from '@/layouts/PageLayout';
import { QuadrateAboutSection } from '@/components/about/QuadrateAboutSection';
import { VisionMission } from '@/components/about/VisionMission';
import { ExperienceSection } from '@/components/about/ExperienceSection';

const AboutPage: React.FC = () => {
  return (
    <PageLayout>
      <QuadrateAboutSection />
      <VisionMission />
      <ExperienceSection />
    </PageLayout>
  );
};

export default AboutPage;

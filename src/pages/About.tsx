import React from 'react';
import PageLayout from '@/layouts/PageLayout';
import { QuadrateAboutSection } from '@/components/about/QuadrateAboutSection';
import { VisionMission } from '@/components/about/VisionMission';
import { ExperienceSection } from '@/components/about/ExperienceSection';
import SEO from '@/components/seo/SEO';
import { generateOrganizationSchema, generateWebPageSchema, defaultOrganization } from '@/utils/structuredData';

const AboutPage: React.FC = () => {
  // Generate structured data for the about page
  const organizationSchema = generateOrganizationSchema(defaultOrganization);
  const webPageSchema = generateWebPageSchema({
    title: 'About Quadrate Tech Solutions | Our Story',
    description: 'Learn about our journey, mission, vision, and the team behind our innovative IT solutions and services.',
    url: 'https://quadratetechsolutions.com/about',
  });

  // Combine structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, webPageSchema]
  };

  return (
    <PageLayout>
      <SEO
        title="About Quadrate Tech Solutions | Our Story"
        description="Learn about our journey, mission, vision, and the team behind our innovative IT solutions and services."
        keywords="about Quadrate, tech company Sri Lanka, IT solutions mission, software development team, company vision, tech expertise"
        structuredData={structuredData}
      />
      <QuadrateAboutSection />
      <VisionMission />
      <ExperienceSection />
    </PageLayout>
  );
};

export default AboutPage;

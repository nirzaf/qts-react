import React from 'react';
import PageLayout from '@/layouts/PageLayout';
import { QuadrateAboutSection } from '@/components/about/QuadrateAboutSection';
import { VisionMission } from '@/components/about/VisionMission';
import { ExperienceSection } from '@/components/about/ExperienceSection';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SEO from '@/components/seo/SEO';
import { 
  generateOrganizationSchema, 
  generateWebPageSchema, 
  generateBreadcrumbSchema,
  defaultOrganization 
} from '@/utils/structuredData';

const AboutPage: React.FC = () => {
  const pageTitle = "About Quadrate Tech Solutions | Our Story & Values";
  const pageDescription = "Learn about Quadrate Tech Solutions, our mission, values, and the expert team driving innovation in software development and IT services in Sri Lanka.";
  const pageUrl = "https://quadrate.lk/#/about";
  const pageImage = "https://ik.imagekit.io/quadrate/assets/img/about.jpg?updatedAt=1718024112686";
  
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://quadrate.lk/#/' },
    { name: 'About Us', url: pageUrl }
  ]);

  // Generate structured data for the about page
  const organizationSchema = generateOrganizationSchema(defaultOrganization);
  const webPageSchema = generateWebPageSchema({
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    image: pageImage,
    dateModified: new Date().toISOString().split('T')[0],
    breadcrumb: [
      { name: 'Home', url: 'https://quadrate.lk/#/' },
      { name: 'About Us', url: pageUrl }
    ],
    speakable: true
  });

  // Combine structured data
  const structuredData = [
    organizationSchema,
    webPageSchema,
    breadcrumbSchema
  ];

  return (
    <HelmetProvider>
      <PageLayout>
        {/* Primary SEO component */}
        <SEO
          title={pageTitle}
          description={pageDescription}
          keywords="about Quadrate, tech company Sri Lanka, IT solutions mission, software development team, company vision, tech expertise, Sri Lanka software developers"
          image={pageImage}
          canonicalUrl={pageUrl}
          structuredData={structuredData}
        />
        
        {/* Additional page-specific meta tags */}
        <Helmet>
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:image" content={pageImage} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content={pageImage} />
          <link rel="canonical" href={pageUrl} />
        </Helmet>
        
        <QuadrateAboutSection />
        <VisionMission />
        <ExperienceSection />
      </PageLayout>
    </HelmetProvider>
  );
};

export default AboutPage;

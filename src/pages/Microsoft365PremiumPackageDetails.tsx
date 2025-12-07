
'use client';

import Microsoft365AppsTable from '../components/sections/microsoft365/Microsoft365AppsTable';

import PageLayout from '@/layouts/PageLayout';
import { generateProductSchema, generateWebPageSchema, defaultOrganization } from '@/utils/structuredData';

const Microsoft365PremiumPackageDetails = () => {
  // Generate structured data for the Microsoft 365 Premium Package page
  const productSchema = generateProductSchema({
    name: 'Microsoft 365 Premium Package',
    description: 'Comprehensive Microsoft 365 Premium Package with enterprise apps and services for business productivity.',
    url: 'https://quadrate.lk/microsoft-365-premium-package-details',
    image: 'https://ik.imagekit.io/quadrate/assets/img/microsoft-365.png',
    brand: {
      name: defaultOrganization.name,
      url: defaultOrganization.url,
      logo: defaultOrganization.logo,
      description: defaultOrganization.description,
    },
  });

  const webPageSchema = generateWebPageSchema({
    title: 'Microsoft 365 Premium Package | Quadrate Tech Solutions',
    description: 'Explore Microsoft 365 Premium Package with enterprise apps and services for business productivity.',
    url: 'https://quadrate.lk/microsoft-365-premium-package-details',
  });

  // Combine structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [productSchema, webPageSchema]
  };

  return (
    <PageLayout>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 py-8">
        <Microsoft365AppsTable />
      </div>
    </PageLayout>
  );
};

export default Microsoft365PremiumPackageDetails;

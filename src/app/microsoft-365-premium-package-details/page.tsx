import type { Metadata } from 'next';
import Microsoft365PremiumPackageDetails from '@/pages/Microsoft365PremiumPackageDetails';

export const metadata: Metadata = {
  title: 'Microsoft 365 Premium Package',
  description: 'Explore Microsoft 365 Premium Package with enterprise apps and services for business productivity.',
  keywords: 'Microsoft 365, Premium Package, business productivity, enterprise apps, cloud services',
  openGraph: {
    title: 'Microsoft 365 Premium Package | Quadrate Tech Solutions',
    description: 'Explore Microsoft 365 Premium Package with enterprise apps and services for business productivity.',
    url: 'https://quadrate.lk/microsoft-365-premium-package-details',
  },
  alternates: {
    canonical: 'https://quadrate.lk/microsoft-365-premium-package-details',
  },
};

export default function Microsoft365PremiumPackageDetailsPage() {
  return <Microsoft365PremiumPackageDetails />;
}

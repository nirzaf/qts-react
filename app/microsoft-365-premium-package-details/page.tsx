import type { Metadata } from 'next';
import Microsoft365PremiumPackageDetails from '@/pages/Microsoft365PremiumPackageDetails';

export const metadata: Metadata = {
  title: 'Microsoft 365 Premium Package Details',
  description: 'Detailed information about our Microsoft 365 Premium Package including features, benefits, and implementation services.',
};

export default function Microsoft365PremiumPackageDetailsPage() {
  return <Microsoft365PremiumPackageDetails />;
}

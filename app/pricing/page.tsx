import type { Metadata } from 'next';
import Pricing from '@/pages/Pricing';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Explore our competitive pricing plans for software development services, AI/ML solutions, and digital transformation packages.',
};

export default function PricingPage() {
  return <Pricing />;
}

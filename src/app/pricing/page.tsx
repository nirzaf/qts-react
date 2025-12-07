import type { Metadata } from 'next';
import PricingPage from '@/pages/Pricing';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Explore our transparent pricing plans for software development, web development, digital marketing, and IT services. Find the perfect plan for your business needs.',
  keywords: 'pricing plans, software development cost, web development packages, digital marketing pricing, IT services rates, affordable tech solutions',
  openGraph: {
    title: 'Pricing | Quadrate Tech Solutions',
    description: 'Explore our transparent pricing plans for software development, web development, digital marketing, and IT services. Find the perfect plan for your business needs.',
    url: 'https://quadrate.lk/pricing',
  },
  alternates: {
    canonical: 'https://quadrate.lk/pricing',
  },
};

export default function Pricing() {
  return <PricingPage />;
}

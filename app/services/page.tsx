import type { Metadata } from 'next';
import Services from '@/pages/Services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our comprehensive range of software development services including AI/ML solutions, custom software development, cloud solutions, and digital transformation.',
};

export default function ServicesPage() {
  return <Services />;
}

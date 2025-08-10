import type { Metadata } from 'next';
import About from '@/pages/About';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Quadrate Tech Solutions - our mission, vision, team, and commitment to delivering exceptional software development and AI/ML solutions.',
};

export default function AboutPage() {
  return <About />;
}

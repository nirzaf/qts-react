import type { Metadata } from 'next';
import Contact from '@/pages/Contact';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Quadrate Tech Solutions. Contact us for software development, AI/ML solutions, and digital transformation services.',
};

export default function ContactPage() {
  return <Contact />;
}

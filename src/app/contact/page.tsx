import type { Metadata } from 'next';
import ContactPage from '@/pages/Contact';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Quadrate Tech Solutions. Contact us for software development, web development, digital marketing, and IT services.',
  keywords: 'contact Quadrate, tech support, software development contact, web development inquiry, digital marketing services, IT consultation',
  openGraph: {
    title: 'Contact Us | Quadrate Tech Solutions',
    description: 'Get in touch with Quadrate Tech Solutions. Contact us for software development, web development, digital marketing, and IT services.',
    url: 'https://quadrate.lk/contact',
  },
  alternates: {
    canonical: 'https://quadrate.lk/contact',
  },
};

export default function Contact() {
  return <ContactPage />;
}

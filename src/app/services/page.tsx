import type { Metadata } from 'next';
import ServicesPage from '@/pages/Services';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore services from Quadrate Tech Solutions: Custom Software, Web Dev, Digital Marketing, IT Outsourcing, Business Email, and Automation.',
  keywords: 'artificial intelligence services, AI consulting, machine learning solutions, computer vision, natural language processing, generative AI, AI integration, MLOps, data engineering, custom software development, web development, digital marketing, IT outsourcing, business email, business process automation, IT services Sri Lanka, Zoho partner, Microsoft 365 solutions, AI strategy, AI readiness assessment, cloud AI implementation',
  openGraph: {
    title: 'Our Services | Quadrate Tech Solutions',
    description: 'Explore services from Quadrate Tech Solutions: Custom Software, Web Dev, Digital Marketing, IT Outsourcing, Business Email, and Automation.',
    url: 'https://quadrate.lk/services',
    images: [
      {
        url: 'https://ik.imagekit.io/quadrate/assets/img/services.jpg?updatedAt=1718024112686',
        width: 1200,
        height: 630,
        alt: 'Quadrate Tech Solutions Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://quadrate.lk/services',
  },
};

export default function Services() {
  return <ServicesPage />;
}

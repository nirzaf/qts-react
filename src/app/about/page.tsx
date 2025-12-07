import type { Metadata } from 'next';
import AboutPage from '@/pages/About';

export const metadata: Metadata = {
  title: 'About Us | Our Story & Values',
  description: 'Learn about Quadrate Tech Solutions, our mission, values, and the expert team driving innovation in software development and IT services in Sri Lanka.',
  keywords: 'about Quadrate, tech company Sri Lanka, IT solutions mission, software development team, company vision, tech expertise, Sri Lanka software developers',
  openGraph: {
    title: 'About Quadrate Tech Solutions | Our Story & Values',
    description: 'Learn about Quadrate Tech Solutions, our mission, values, and the expert team driving innovation in software development and IT services in Sri Lanka.',
    url: 'https://quadrate.lk/about',
    images: [
      {
        url: 'https://ik.imagekit.io/quadrate/assets/img/about.jpg?updatedAt=1718024112686',
        width: 1200,
        height: 630,
        alt: 'About Quadrate Tech Solutions',
      },
    ],
  },
  alternates: {
    canonical: 'https://quadrate.lk/about',
  },
};

export default function About() {
  return <AboutPage />;
}

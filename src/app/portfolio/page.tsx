import type { Metadata } from 'next';
import PortfolioPage from '@/pages/Portfolio';

export const metadata: Metadata = {
    title: 'Design Portfolio',
    description: 'Explore our stunning design portfolio featuring brand identity work, logos, and creative solutions. Partnered with Graphy Empire for premium branding services.',
    keywords: 'design portfolio, brand identity, logo design, Graphy Empire, visual identity, brand colors, typography, brand guidelines, creative design, Sri Lanka',
    openGraph: {
        title: 'Design Portfolio | Quadrate Tech Solutions',
        description: 'Explore our stunning design portfolio featuring brand identity work, logos, and creative solutions. Partnered with Graphy Empire for premium branding services.',
        url: 'https://quadrate.lk/portfolio',
        images: [
            {
                url: 'https://ik.imagekit.io/quadrate/assets/img/portfolio-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Quadrate Tech Solutions Portfolio',
            },
        ],
    },
    alternates: {
        canonical: 'https://quadrate.lk/portfolio',
    },
};

export default function Portfolio() {
    return <PortfolioPage />;
}

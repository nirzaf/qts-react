'use client';

import React from 'react';
import PageLayout from '@/layouts/PageLayout';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioGallery from '@/components/portfolio/PortfolioGallery';
import GraphyEmpirePartner from '@/components/portfolio/GraphyEmpirePartner';
import BrandIdentityServices from '@/components/portfolio/BrandIdentityServices';
import SEO from '@/components/seo/SEO';
import {
    generateWebPageSchema,
    generateBreadcrumbSchema,
} from '@/utils/structuredData';

const PortfolioPage: React.FC = () => {
    const pageTitle = "Design Portfolio | Quadrate Tech Solutions";
    const pageDescription = "Explore our stunning design portfolio featuring brand identity work, logos, and creative solutions. Partnered with Graphy Empire for premium branding services.";
    const pageUrl = "https://quadrate.lk/portfolio";
    const pageImage = "https://ik.imagekit.io/quadrate/assets/img/portfolio-hero.jpg";

    // Generate breadcrumb schema
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://quadrate.lk/' },
        { name: 'Portfolio', url: pageUrl }
    ]);

    // Generate structured data for the portfolio page
    const webPageSchema = generateWebPageSchema({
        title: pageTitle,
        description: pageDescription,
        url: pageUrl,
        image: pageImage,
        dateModified: new Date().toISOString().split('T')[0],
        breadcrumb: [
            { name: 'Home', url: 'https://quadrate.lk/' },
            { name: 'Portfolio', url: pageUrl }
        ],
        speakable: true
    });

    // Combine structured data
    const structuredData = [
        webPageSchema,
        breadcrumbSchema
    ];

    return (
        <>
            <SEO
                title={pageTitle}
                description={pageDescription}
                keywords="design portfolio, brand identity, logo design, Graphy Empire, visual identity, brand colors, typography, brand guidelines, creative design, Sri Lanka"
                image={pageImage}
                canonicalUrl={pageUrl}
                structuredData={structuredData}
            />

            {/* Hero Section */}
            <PortfolioHero />

            {/* Partner Section */}
            <GraphyEmpirePartner />

            {/* Brand Identity Services */}
            <BrandIdentityServices />

            {/* Portfolio Gallery */}
            <PortfolioGallery />
        </>
    );
};

export default PortfolioPage;

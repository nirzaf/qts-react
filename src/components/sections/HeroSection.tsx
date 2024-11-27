import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import RatingDisplay from '@/components/ui/rating-display';
import HeroImage from './hero/HeroImage';
import { type HeroData, defaultHeroData } from '@/data/heroData';

interface HeroSectionProps {
  title: React.ReactNode;
  description: string;
  data?: Partial<HeroData>;
}

/**
 * Hero section component for landing pages
 * Features:
 * - Animated content and image
 * - Configurable buttons and rating
 * - Error handling for images
 * - Responsive design
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  data = {}
}) => {
  const {
    backgroundImage,
    heroImage,
    primaryButton,
    secondaryButton,
    rating
  } = { ...defaultHeroData, ...data };

  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-20">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href={primaryButton.href}>
                  {primaryButton.text}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={secondaryButton.href}>
                  {secondaryButton.text}
                </a>
              </Button>
            </div>
            {rating && (
              <div className="mt-6">
                <RatingDisplay score={rating.score} count={rating.count} />
              </div>
            )}
          </motion.div>

          {/* Hero Image */}
          <HeroImage src={heroImage.src} alt={heroImage.alt} />
        </div>
      </div>
    </section>
  );
};

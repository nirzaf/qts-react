import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import RatingDisplay from '@/components/ui/rating-display';
import HeroImage from './hero/HeroImage';
import { type HeroData, defaultHeroData } from '@/data/heroData';

interface HeroSectionProps {
  title: React.ReactNode;
  description: string;
  data?: Partial<HeroData>;
}

const headlines = [
  "Innovate with Purpose",
  "Transform with Technology",
  "Build for Tomorrow",
  "Create the Future"
];

const logoVariants = {
  initial: { scale: 0.8, opacity: 0, rotate: -10 },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    }
  },
  hover: {
    scale: 1.05,
    rotate: [0, -2, 2, 0],
    filter: [
      "drop-shadow(0px 10px 20px rgba(0,0,0,0.2)) brightness(1.1)",
      "drop-shadow(0px 20px 30px rgba(0,0,0,0.3)) brightness(1.2)",
      "drop-shadow(0px 10px 20px rgba(0,0,0,0.2)) brightness(1.1)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const headlineVariants = {
  enter: { y: 20, opacity: 0 },
  center: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 }
};

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
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const {
    backgroundImage,
    heroImage,
    primaryButton,
    secondaryButton,
    rating
  } = { ...defaultHeroData, ...data };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-20">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      <div className="container relative">
        <div className="flex flex-col items-center justify-center min-h-[80vh] max-w-4xl mx-auto text-center">
          {/* Content */}
          <motion.div 
            className="flex flex-col items-center justify-center space-y-8 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo Section */}
            <motion.div
              className="mb-8"
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <motion.img
                src="https://ik.imagekit.io/quadrate/assets/QTS%20PNG.png?updatedAt=1732465331710"
                alt="Quadrate Tech Solutions"
                className="w-72 h-auto"
                variants={logoVariants}
              />
            </motion.div>

            {/* Animated Headlines */}
            <div className="h-20 relative overflow-hidden w-full">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentHeadline}
                  variants={headlineVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 absolute w-full"
                >
                  {headlines[currentHeadline]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>

            {rating && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <RatingDisplay {...rating} />
              </motion.div>
            )}

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {primaryButton && (
                <Button size="lg" asChild className="min-w-[160px]">
                  <a href={primaryButton.href}>{primaryButton.text}</a>
                </Button>
              )}
              {secondaryButton && (
                <Button size="lg" variant="outline" asChild className="min-w-[160px]">
                  <a href={secondaryButton.href}>{secondaryButton.text}</a>
                </Button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

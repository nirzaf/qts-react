import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Review {
  title: string;
  content: string;
  author: string;
  rating: number;
}

interface HeroSectionProps {
  title?: string;
  subTitle?: string;
  primaryBtn?: string;
  primaryBtnURL?: string;
  secondaryBtn?: string;
  secondaryBtnURL?: string;
  withReview?: boolean;
  reviews?: Review[];
  starCount?: number;
  src?: string;
  alt?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Quadrate Tech Solutions",
  subTitle = "Your Digital Solutions Partner",
  primaryBtn = "Get Started",
  primaryBtnURL = "/contact",
  secondaryBtn = "Learn More",
  secondaryBtnURL = "/about",
  withReview = false,
  reviews = [],
  starCount = 0,
  src = "",
  alt = ""
}) => {
  useTranslation();

  return (
    <section className="container flex flex-col gap-4 pb-8 pt-6 md:gap-8 md:pb-12 md:pt-10 lg:py-32">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {subTitle}
        </p>
      </div>

      <div className="flex justify-center space-x-4">
        <Link
          to={primaryBtnURL}
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {primaryBtn}
        </Link>
        <Link
          to={secondaryBtnURL}
          className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          {secondaryBtn}
        </Link>
      </div>

      {withReview && reviews.length > 0 && (
        <div className="mx-auto flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-5 w-5 ${i < starCount ? "fill-primary" : "fill-muted"}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {reviews.map((review, index) => (
              <div key={index} className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground">{review.title}</p>
                <p>{review.content}</p>
                <p className="mt-2 font-medium text-foreground">- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {src && (
        <div className="overflow-hidden rounded-lg border bg-background">
          <img src={src} alt={alt} className="aspect-video object-cover" />
        </div>
      )}
    </section>
  );
};

export default HeroSection;

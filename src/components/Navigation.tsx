import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Navigation: React.FC = () => {
  return (
    <div className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="flex items-center">
            <img 
              src="https://ik.imagekit.io/quadrate/assets/QTS%20PNG.png?updatedAt=1732465331710" 
              alt="Quadrate Tech Solutions" 
              className="h-12 w-auto" 
            />
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              to="/"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </Link>
            <Link
              to="/services"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Blog
            </Link>
            <Link
              to="/pricing"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div>
          <Button asChild>
            <a href="https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions">
              Book a Meeting
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

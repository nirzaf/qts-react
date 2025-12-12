'use client';

import React, { useEffect, useState } from 'react';
import { skipNavProps } from '@/utils/a11y';

interface A11yFeaturesProps {
  mainContentId?: string;
}

/**
 * Component that adds various accessibility features to the website
 * This helps improve the user experience for people with disabilities
 * and also improves SEO as accessibility is a ranking factor
 */
const A11yFeatures: React.FC<A11yFeaturesProps> = ({ 
  mainContentId = 'main-content' 
}) => {
  const [isA11yMenuOpen, setIsA11yMenuOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  
  // Apply accessibility settings
  useEffect(() => {
    // Check if settings are stored in localStorage
    const storedHighContrast = localStorage.getItem('highContrast') === 'true';
    const storedLargeText = localStorage.getItem('largeText') === 'true';
    
    if (storedHighContrast) {
      setHighContrast(true);
      document.body.classList.add('high-contrast');
    }
    
    if (storedLargeText) {
      setLargeText(true);
      document.body.classList.add('large-text');
    }
  }, []);
  
  // Toggle high contrast mode
  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    
    if (newValue) {
      document.body.classList.add('high-contrast');
      localStorage.setItem('highContrast', 'true');
    } else {
      document.body.classList.remove('high-contrast');
      localStorage.setItem('highContrast', 'false');
    }
  };
  
  // Toggle large text mode
  const toggleLargeText = () => {
    const newValue = !largeText;
    setLargeText(newValue);
    
    if (newValue) {
      document.body.classList.add('large-text');
      localStorage.setItem('largeText', 'true');
    } else {
      document.body.classList.remove('large-text');
      localStorage.setItem('largeText', 'false');
    }
  };
  
  return (
    <>
      {/* Skip to content link - Hidden visually but available for keyboard users */}
      <a {...skipNavProps(mainContentId)} className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Skip to main content
      </a>
    </>
  );
};

export default A11yFeatures;

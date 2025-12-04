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
      {/* Skip to content link */}
      <a {...skipNavProps(mainContentId)} className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Skip to main content
      </a>
      
      {/* Accessibility menu button */}
      <button
        aria-label="Accessibility options"
        className="fixed bottom-4 right-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={() => setIsA11yMenuOpen(!isA11yMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </button>
      
      {/* Accessibility menu */}
      {isA11yMenuOpen && (
        <div className="fixed bottom-16 right-4 z-50 p-4 bg-white rounded-lg shadow-lg border border-gray-200 w-64">
          <h2 className="text-lg font-bold mb-2">Accessibility Options</h2>
          
          <div className="space-y-2">
            <button
              className={`flex items-center justify-between w-full p-2 rounded ${highContrast ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={toggleHighContrast}
            >
              <span>High Contrast</span>
              <span className={`w-4 h-4 rounded-full ${highContrast ? 'bg-blue-600' : 'bg-gray-300'}`}></span>
            </button>
            
            <button
              className={`flex items-center justify-between w-full p-2 rounded ${largeText ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={toggleLargeText}
            >
              <span>Large Text</span>
              <span className={`w-4 h-4 rounded-full ${largeText ? 'bg-blue-600' : 'bg-gray-300'}`}></span>
            </button>
            
            <button
              className="w-full p-2 mt-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => setIsA11yMenuOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default A11yFeatures;

import React, { useEffect, useState, useRef } from 'react';

interface LazyLoadProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  placeholder?: React.ReactNode;
  className?: string;
  onVisible?: () => void;
}

const LazyLoad: React.FC<LazyLoadProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '200px 0px',
  placeholder,
  className = '',
  onVisible,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const current = containerRef.current;
    
    if (!current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (onVisible) onVisible();
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(current);
    
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold, rootMargin, onVisible]);
  
  useEffect(() => {
    if (isVisible) {
      // Add a small delay to ensure smooth transitions
      const timer = setTimeout(() => {
        setHasLoaded(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible]);
  
  return (
    <div ref={containerRef} className={className}>
      {isVisible ? (
        <div className={`transition-opacity duration-500 ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {children}
        </div>
      ) : (
        placeholder || (
          <div className="animate-pulse bg-gray-200 rounded-md h-full w-full min-h-[100px]" />
        )
      )}
    </div>
  );
};

export default LazyLoad;

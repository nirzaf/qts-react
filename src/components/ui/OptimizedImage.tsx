'use client';

import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Generate a low-quality placeholder if needed
  const placeholderSrc = blurDataURL || (placeholder === 'blur' ? `${src}?tr=w-20,q-10` : undefined);
  
  // Handle image loading
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };
  
  // Handle image error
  const handleError = () => {
    setError(true);
    if (onError) onError();
  };
  
  // Preload image if priority is true
  useEffect(() => {
    if (priority && src) {
      const img = new Image();
      img.src = src;
    }
  }, [priority, src]);
  
  // Determine image dimensions for aspect ratio
  const aspectRatio = width && height ? `aspect-ratio: ${width}/${height};` : '';
  
  // Determine image sizes for responsive loading
  const sizes = width ? `(max-width: 768px) 100vw, ${width}px` : '100vw';
  
  // Generate srcSet for responsive images
  const generateSrcSet = () => {
    if (!src) return '';
    
    // If the image is from ImageKit, use their transformation parameters
    if (src.includes('imagekit.io')) {
      return [320, 640, 960, 1280, 1920]
        .map(w => `${src}?tr=w-${w} ${w}w`)
        .join(', ');
    }
    
    // For other images, return the original source
    return '';
  };
  
  const srcSet = generateSrcSet();
  
  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : 'auto' }}
    >
      {/* Placeholder while loading */}
      {placeholder === 'blur' && placeholderSrc && !isLoaded && !error && (
        <div 
          className="absolute inset-0 bg-cover bg-center blur-sm"
          style={{ 
            backgroundImage: `url(${placeholderSrc})`,
            filter: 'blur(20px)',
            transform: 'scale(1.2)'
          }}
          aria-hidden="true"
        />
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ aspectRatio }}
        sizes={sizes}
        srcSet={srcSet}
      />
      
      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <span>Image not available</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;

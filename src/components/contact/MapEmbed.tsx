'use client';

import { useState, useEffect, memo } from 'react';

interface MapEmbedProps {
  src: string;
  title: string;
  className?: string;
}

const MapEmbed = memo(({ src, title, className = '' }: MapEmbedProps) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    const placeholder = document.getElementById(`map-placeholder-${title}`);
    if (placeholder) {
      observer.observe(placeholder);
    }

    return () => observer.disconnect();
  }, [title]);

  return (
    <div className="relative w-full h-full">
      {/* Static Map Placeholder */}
      <div
        id={`map-placeholder-${title}`}
        className={`absolute inset-0 bg-[#0607E1]/5 ${
          !isMapLoaded ? 'visible' : 'invisible'
        } ${className}`}
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(title)}&zoom=15&size=600x300&scale=2&format=png&style=feature:all|element:labels|visibility:off')`,
            filter: 'grayscale(1) opacity(0.5)'
          }}
        />
      </div>

      {/* Interactive Map */}
      {shouldLoadMap && (
        <iframe
          src={src}
          title={title}
          className={`w-full h-full border-0 ${className}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsMapLoaded(true)}
        />
      )}
    </div>
  );
});

MapEmbed.displayName = 'MapEmbed';

export default MapEmbed;

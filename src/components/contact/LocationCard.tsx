'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { lazy, Suspense } from 'react';

const MapEmbed = lazy(() => import('./MapEmbed'));

interface LocationCardProps {
  title: string;
  address: string;
  mapUrl: string;
  index: number;
}

const LocationCard: FC<LocationCardProps> = ({ title, address, mapUrl, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: {
          delay: index * 0.2,
          duration: 0.5
        }
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="overflow-hidden h-full border border-[#0607E1]/10 hover:border-[#0607E1]/20 transition-colors duration-300">
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-[#000000]/70 mb-4">{address}</p>
        </div>
        <div className="h-[300px] relative">
          <Suspense fallback={
            <div className="w-full h-full bg-[#0607E1]/5 animate-pulse" />
          }>
            <MapEmbed
              src={mapUrl}
              title={title}
              className="border-t border-[#0607E1]/10"
            />
          </Suspense>
        </div>
      </Card>
    </motion.div>
  );
};

export default LocationCard;

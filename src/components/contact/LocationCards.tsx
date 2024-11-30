import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface Location {
  title: string;
  address: string;
  mapUrl: string;
}

const locations: Location[] = [
  {
    title: 'Al MAMOORA Branch',
    address: 'Dubai, United Arab Emirates',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7390776.694315359!2d41.75165042500002!3d25.2444119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d1002d1f29b5%3A0xf16439d8460b5b7f!2sQuadrate%20Tech%20Solutions%20-%20Al%20MAMOORA%20Branch!5e0!3m2!1sen!2sae!4v1732952488753!5m2!1sen!2sae'
  },
  {
    title: 'Doha Branch',
    address: 'Doha, Qatar',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7390776.694315359!2d41.75165042500002!3d25.2444119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db62bf10ec0f%3A0x2345926a5113cbd5!2sQuadrate%20Tech%20Solutions%20-%20Doha!5e0!3m2!1sen!2sae!4v1732952507587!5m2!1sen!2sae'
  },
  {
    title: 'Sri Lanka Branch',
    address: 'Colombo, Sri Lanka',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8103761.539122115!2d70.86233172500002!3d7.363445500000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25903d9ba7603%3A0x3bd657d71032e35a!2sQuadrate%20Tech%20Solutions!5e0!3m2!1sen!2sae!4v1732952523771!5m2!1sen!2sae'
  }
];

const LocationCards: FC = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Global Presence</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <motion.div
            key={location.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: index * 0.2,
                duration: 0.5
              }
            }}
            whileHover={{ scale: 1.02 }}
            className="h-full"
          >
            <Card className="h-full overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${location.title} Map`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#0607E1] mb-2">
                  {location.title}
                </h3>
                <p className="text-gray-600">{location.address}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LocationCards;

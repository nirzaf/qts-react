import { type FC } from 'react';
import LocationCard from './LocationCard';

interface Location {
  title: string;
  address: string;
  mapUrl: string;
}

const locations: Location[] = [
  {
    title: 'Al MAMOORA Branch',
    address: 'Dubai, United Arab Emirates',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.6647604244674!2d55.38095661501671!3d25.227806983877946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d1002d1f29b5%3A0xf16439d8460b5b7f!2sQuadrate%20Tech%20Solutions%20-%20Al%20MAMOORA%20Branch!5e0!3m2!1sen!2sae!4v1732952488753!5m2!1sen!2sae'
  },
  {
    title: 'Doha Branch',
    address: 'Doha, Qatar',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.9876543209876!2d51.53423461501234!3d25.286543982345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db62bf10ec0f%3A0x2345926a5113cbd5!2sQuadrate%20Tech%20Solutions%20-%20Doha!5e0!3m2!1sen!2sae!4v1732952507587!5m2!1sen!2sae'
  },
  {
    title: 'Sri Lanka Branch',
    address: 'Colombo, Sri Lanka',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798765432109!2d79.86123456789012!3d6.927654321098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f16.1!3m3!1m2!1s0x3ae25903d9ba7603%3A0x3bd657d71032e35a!2sQuadrate%20Tech%20Solutions!5e0!3m2!1sen!2sae!4v1732952523771!5m2!1sen!2sae'
  }
];

const LocationCards: FC = () => {
  return (
    <div className="pb-0 -mb-16">
      <h2 className="font-montserrat font-bold tracking-tight text-2xl md:text-3xl text-center mb-6 dark:text-white dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
        Our Global Presence
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location, index) => (
          <LocationCard
            key={location.title}
            {...location}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationCards;

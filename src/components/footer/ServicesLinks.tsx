import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  'Custom Software Development',
  'Web Development',
  'Digital Marketing',
  'Mobile App Development'
];

export const ServicesLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#000000] mb-4">Services</h3>
      <ul className="space-y-3">
        {services.map((service) => (
          <li key={service}>
            <Link 
              to="/services" 
              className="text-sm text-[#000000]/70 hover:text-[#000000] transition-colors duration-200"
            >
              {service}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}; 
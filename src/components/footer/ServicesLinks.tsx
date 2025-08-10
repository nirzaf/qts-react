import React from 'react';
import Link from 'next/link';

const services = [
  'AI Strategy & Consulting',
  'Machine Learning Solutions',
  'Computer Vision',
  'Natural Language Processing',
  'Custom Software Development',
  'Web Development',
  'Digital Marketing',
  'Mobile App Development'
];

export const ServicesLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#FFFFFF] mb-4">Services</h3>
      <ul className="space-y-3">
        {services.map((service) => (
          <li key={service}>
            <Link
              href="/services"
              className="text-sm text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-200"
            >
              {service}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}; 
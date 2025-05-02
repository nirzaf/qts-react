import React from 'react';
import { Link } from 'react-router-dom';

export const QuickLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#FFFFFF] mb-4">Quick Links</h3>
      <ul className="space-y-3">
        {['About Us', 'Services', 'Pricing'].map((link) => (
          <li key={link}>
            <Link 
              to={`/${link.toLowerCase().replace(' ', '')}`} 
              className="text-sm text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-200"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}; 
import React from 'react';
import Link from 'next/link';

const links = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
];

export const QuickLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#FFFFFF] mb-4">Quick Links</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href} 
              className="text-sm text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}; 

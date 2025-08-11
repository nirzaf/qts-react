import React from 'react';
import Link from 'next/link';

export const QuickLinks: React.FC = () => {
  const links = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <div>
      <h3 className="text-sm font-semibold text-[#FFFFFF] mb-4">Quick Links</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href}
              className="text-sm text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
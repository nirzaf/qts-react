import React from 'react';
import Link from 'next/link';

export const FooterBottom: React.FC = () => {
  const policies = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms Policy', href: '/terms' },
    { name: 'Cookies Policy', href: '/cookies' },
  ];

  return (
    <div className="mt-8 pt-8 border-t border-[#FFFFFF]/10">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-[#FFFFFF]/70">
          {new Date().getFullYear()} Quadrate Tech Solutions. All rights reserved.
        </p>
        <div className="flex space-x-6">
          {policies.map((policy) => (
            <Link
              key={policy.name}
              href={policy.href}
              className="text-sm text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-200"
            >
              {policy.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
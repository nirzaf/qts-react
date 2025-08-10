import React from 'react';
import Link from 'next/link';

/**
 * QuickLinks
 * Renders a curated set of important site links in the footer.
 * Note: Use explicit hrefs instead of string transforms to avoid incorrect paths (e.g., "/about-us" vs "/about").
 */
export const QuickLinks: React.FC = () => {
  const links: { label: string; href: string }[] = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Careers', href: '/careers' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

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
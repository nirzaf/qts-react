'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/utils/structuredData';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbsProps {
  customPaths?: { path: string; label: string }[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ customPaths, className = '' }) => {
  const pathname = usePathname();
  // Split pathname for Next.js routing
  const pathnames = pathname ? pathname.split('/').filter(x => x) : [];

  // Generate breadcrumb items
  const breadcrumbItems = [
    { path: '/', label: 'Home' },
    ...pathnames.map((value, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;

      // Check if there's a custom label for this path
      const customPath = customPaths?.find(p => p.path === path);
      const label = customPath ? customPath.label : value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

      return { path, label };
    }),
  ];

  // Generate structured data for breadcrumbs
  const breadcrumbStructuredData = generateBreadcrumbSchema(
    breadcrumbItems.map(item => ({
      name: item.label,
      url: `https://quadrate.lk/#${item.path}`,
    }))
  );

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      </Helmet>

      <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
        <ol className="flex flex-wrap items-center space-x-1 md:space-x-2">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <li key={item.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 mx-1 text-gray-400" aria-hidden="true" />
                )}

                {isLast ? (
                  <span className="text-gray-700 font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                  >
                    {index === 0 ? (
                      <>
                        <Home className="h-4 w-4 mr-1" aria-hidden="true" />
                        <span className="sr-only">Home</span>
                      </>
                    ) : (
                      item.label
                    )}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;

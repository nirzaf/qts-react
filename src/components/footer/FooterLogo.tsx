import React from 'react';
import Link from 'next/link';

export const FooterLogo: React.FC = () => {
  return (
    <div className="flex-shrink-0">
      <Link href="/" className="flex items-center hover:scale-105 transition-transform">
        <img
          src="https://ik.imagekit.io/quadrate/assets/img/QTS%20Primary%20Logo.png?updatedAt=1748456663889"
          alt="QTS Logo"
          className="h-12 w-auto brightness-[0.7] contrast-[1.4] [filter:saturate(1.2)_hue-rotate(-10deg)] border-2 border-white rounded-md p-1 bg-white"
        />
        <span className="ml-2 text-xl font-bold text-[#FFFFFF]">QTS</span>
      </Link>
    </div>
  );
};
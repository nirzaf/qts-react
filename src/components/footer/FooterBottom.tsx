import React from 'react';
import Link from 'next/link';

export const FooterBottom: React.FC = () => {
  return (
    <div className="mt-8 pt-8 border-t border-[#FFFFFF]/10">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-[#FFFFFF]/70">
          {new Date().getFullYear()} Quadrate Tech Solutions. All rights reserved.
        </p>
        <div className="flex space-x-6">
          {['Privacy', 'Terms', 'Cookies'].map((policy) => (
            <Link
              key={policy}
              href={`/${policy.toLowerCase()}`}
              className="text-sm text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-200"
            >
              {`${policy} Policy`}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}; 
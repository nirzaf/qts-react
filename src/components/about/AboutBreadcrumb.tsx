import React from 'react';
import { Link } from 'react-router-dom';

export const AboutBreadcrumb: React.FC = () => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="container">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-blue-600 hover:text-blue-700">HOME</Link>
          <span>/</span>
          <span className="text-gray-600">ABOUT</span>
        </div>
      </div>
    </div>
  );
}; 
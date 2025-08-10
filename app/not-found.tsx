'use client';

import React from 'react';

export default function NotFoundPage() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-white to-gray-50/50">
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] leading-none">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/"
              className="bg-[#0607E1] hover:bg-[#0607E1]/90 text-white px-6 py-3 rounded-lg transition-all duration-300"
            >
              Go Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { useParams } from 'next/navigation';

export default function BlogPostPage() {
  const params = useParams();
  const id = params?.id as string;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog Post: {id}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Read our latest blog post about software development, AI/ML, and technology insights.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-500">
                Blog post content is currently under development. Please check back soon!
              </p>
            </div>
          </div>
        </div>
      </main>
  );
}

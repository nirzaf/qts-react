"use client";

import React from "react";

/**
 * CareersPage
 * Lightweight placeholder to prevent broken navigation and provide a foundation
 * for listings, job filters, and application flow in Phase 2.
 */
export default function CareersPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <section className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          Careers
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join our team of builders, designers, and AI innovators shaping the future of technology.
        </p>
      </section>

      <section className="mt-12 rounded-2xl border border-gray-200/70 bg-white/70 backdrop-blur-sm p-8 text-center">
        <div className="mx-auto max-w-2xl space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Open roles coming soon</h2>
          <p className="text-gray-600">
            We’re preparing opportunities across engineering, design, product, and growth. If you’re passionate
            about impactful work, we’d love to hear from you.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] px-6 py-3 font-medium text-white shadow-lg transition hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
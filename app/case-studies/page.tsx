"use client";

import React from "react";

/**
 * CaseStudiesPage
 * Simple scaffold page to prevent broken navigation and provide a starting point
 * for showcasing client case studies. Replace placeholder content with real
 * projects, filters, and detail pages in Phase 2.
 */
export default function CaseStudiesPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <section className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          Case Studies
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore how we help organizations innovate with AI, web, and custom software solutions.
        </p>
      </section>

      <section className="mt-12 rounded-2xl border border-gray-200/70 bg-white/70 backdrop-blur-sm p-8 text-center">
        <div className="mx-auto max-w-2xl space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Showcase coming soon</h2>
          <p className="text-gray-600">
            We’re curating detailed case studies highlighting business impact, solution architecture,
            and measurable results. Check back shortly or reach out now.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] px-6 py-3 font-medium text-white shadow-lg transition hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
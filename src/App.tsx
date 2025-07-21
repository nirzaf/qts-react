import React, { Suspense, useEffect, lazy } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import HubSpotChat from '@/components/chat/HubSpotChat';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import WebVitalsReporter from '@/components/performance/WebVitalsReporter';
import A11yFeatures from '@/components/accessibility/A11yFeatures';
import SEOAudit from '@/components/seo/SEOAudit';
import ErrorBoundary from '@/components/ErrorBoundary';

// Lazy load all page components for better performance
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const Contact = lazy(() => import('@/pages/Contact'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const NotFound = lazy(() => import('@/pages/404'));
const Microsoft365PremiumPackageDetails = lazy(() => import('@/pages/Microsoft365PremiumPackageDetails'));
const InterviewAssessment = lazy(() => import('@/pages/InterviewAssessment'));
const VerifyEmployee = lazy(() => import('@/pages/VerifyEmployee'));

// Redirect component for handling undefined routes
const RedirectToHome: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, [navigate]);
  return null;
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="app">
        {/* Web Vitals Monitoring */}
        <WebVitalsReporter />

        {/* Accessibility Features */}
        <A11yFeatures mainContentId="main-content" />

        <Navigation />
        <main id="main-content" tabIndex={-1}>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner size="large" text="Loading content..." />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/microsoft-365-premium-package-details" element={<Microsoft365PremiumPackageDetails />} />
                <Route path="/interview-assessment" element={<InterviewAssessment />} />
                <Route path="/verify/:token" element={<VerifyEmployee />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<RedirectToHome />} />
              </Routes>
              <Toaster />
              <HubSpotChat />
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />

        {/* SEO Audit Tool - only visible in development */}
        <SEOAudit showInProduction={false} />
      </div>
    </ErrorBoundary>
  );
};

export default App;

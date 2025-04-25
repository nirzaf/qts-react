import { useEffect } from 'react';

// Types for web vitals metrics
interface WebVitalMetric {
  id: string;
  name: string;
  value: number;
  delta: number;
  entries: PerformanceEntry[];
}

// Function to send metrics to analytics
const sendToAnalytics = (metric: WebVitalMetric) => {
  // In a real implementation, you would send this to your analytics service
  // For example: Google Analytics, Mixpanel, etc.
  console.log(`Web Vitals: ${metric.name} = ${metric.value}`);
  
  // Example of sending to Google Analytics 4
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as any).gtag;
    gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_name: metric.name,
      metric_value: metric.value,
      metric_delta: metric.delta,
    });
  }
};

const WebVitalsReporter = () => {
  useEffect(() => {
    // Only run in production and in the browser
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Dynamically import web-vitals to avoid increasing the bundle size in development
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(sendToAnalytics); // Cumulative Layout Shift
        getFID(sendToAnalytics); // First Input Delay
        getFCP(sendToAnalytics); // First Contentful Paint
        getLCP(sendToAnalytics); // Largest Contentful Paint
        getTTFB(sendToAnalytics); // Time to First Byte
      });
    }
  }, []);

  // This component doesn't render anything
  return null;
};

export default WebVitalsReporter;

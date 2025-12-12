'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import A11yFeatures from '@/components/accessibility/A11yFeatures';
import WhatsAppChat from '@/components/chat/WhatsAppChat';
import WebVitalsReporter from '@/components/performance/WebVitalsReporter';
import SEOAudit from '@/components/seo/SEOAudit';
import { Toaster } from '@/components/ui/toaster';
import { registerServiceWorker } from '@/utils/serviceWorker';

type ProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: ProvidersProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      registerServiceWorker();
    }
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      <WebVitalsReporter />
      <A11yFeatures mainContentId="main-content" />
      {children}
      <Toaster />
      <WhatsAppChat
        phoneNumber="97433253203"
        message="Hello! I would like to know more about your services."
        position="bottom-right"
        showDelay={3000}
      />
      <SEOAudit showInProduction={false} />
    </ThemeProvider>
  );
}

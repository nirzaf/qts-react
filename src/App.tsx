import React, { Suspense } from 'react';
import { Routes } from '@/routes';
import { Toaster } from '@/components/ui/toaster';
import HubSpotChat from '@/components/chat/HubSpotChat';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AuthProvider } from '@/lib/auth/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
        <Toaster />
        <HubSpotChat />
      </Suspense>
      <Footer />
    </AuthProvider>
  );
};

export default App;

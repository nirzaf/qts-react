import React, { Suspense } from 'react';
import { Routes } from '@/routes';
import { Toaster } from '@/components/ui/toaster';
import HubSpotChat from '@/components/chat/HubSpotChat';

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
        <Toaster />
        <HubSpotChat />
      </Suspense>
    </>
  );
};

export default App;

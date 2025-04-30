import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import App from './App';
import './styles/globals.css';
import { registerServiceWorker } from './utils/serviceWorker';

hydrateRoot(
  document.getElementById('root')!,
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Analytics />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// Register service worker for production
if (import.meta.env.PROD) {
  registerServiceWorker();
}

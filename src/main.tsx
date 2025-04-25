import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/globals.css';
import App from './App';
import { registerServiceWorker } from './utils/serviceWorker';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Failed to find the root element');

// Check if the app is running in production and has been pre-rendered
if (rootElement.hasChildNodes() && import.meta.env.PROD) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}

// Register service worker for production
if (import.meta.env.PROD) {
  registerServiceWorker();
}
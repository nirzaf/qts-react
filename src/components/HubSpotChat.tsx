import React, { useEffect } from 'react';

declare global {
  interface Window {
    HubSpotConversations?: any;
  }
}

export const HubSpotChat: React.FC = () => {
  useEffect(() => {
    const loadHubSpot = () => {
      const script = document.createElement('script');
      script.src = '//js-eu1.hs-scripts.com/144768548.js';
      script.async = true;
      script.defer = true;
      script.id = 'hs-script-loader';
      script.type = 'text/javascript';

      script.onerror = () => {
        console.warn('Failed to load HubSpot chat widget');
      };

      document.body.appendChild(script);

      return () => {
        // Cleanup function
        const existingScript = document.getElementById('hs-script-loader');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    };

    // Load HubSpot chat widget
    const cleanup = loadHubSpot();

    return () => {
      cleanup();
    };
  }, []);

  return null;
};

export default HubSpotChat;

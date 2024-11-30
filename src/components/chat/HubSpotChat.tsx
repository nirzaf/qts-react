import { useEffect } from 'react';

const HubSpotChat = () => {
  useEffect(() => {
    // Skip if script is already loaded
    if (document.getElementById('hs-script-loader')) {
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.id = 'hs-script-loader';
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = '//js-eu1.hs-scripts.com/144768548.js';

    // Add error handling
    script.onerror = () => {
      console.error('Failed to load HubSpot chat widget');
    };

    // Append script to document body
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.getElementById('hs-script-loader');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return null;
};

export default HubSpotChat; 
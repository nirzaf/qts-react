import { useEffect } from 'react';

const HubSpotChat = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.id = 'hs-script-loader';
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = '//js-eu1.hs-scripts.com/144768548.js';

    // Append script to document body
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.getElementById('hs-script-loader');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return null; // This component doesn't render anything
};

export default HubSpotChat; 
import React, { useEffect, useState } from 'react';

interface SEOAuditProps {
  showInProduction?: boolean;
}

interface AuditResult {
  name: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
}

/**
 * Component that performs a basic SEO audit of the current page
 * This is useful for developers to check if the page meets basic SEO requirements
 * It can be hidden in production by setting showInProduction to false
 */
const SEOAudit: React.FC<SEOAuditProps> = ({ 
  showInProduction = false 
}) => {
  const [auditResults, setAuditResults] = useState<AuditResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Only run in development or if showInProduction is true
    if (process.env.NODE_ENV === 'production' && !showInProduction) {
      return;
    }
    
    // Run the audit
    const runAudit = () => {
      const results: AuditResult[] = [];
      
      // Check title
      const title = document.title;
      if (!title) {
        results.push({
          name: 'Title',
          status: 'fail',
          message: 'Page is missing a title tag'
        });
      } else if (title.length < 10) {
        results.push({
          name: 'Title',
          status: 'warning',
          message: 'Title is too short (less than 10 characters)'
        });
      } else if (title.length > 60) {
        results.push({
          name: 'Title',
          status: 'warning',
          message: 'Title is too long (more than 60 characters)'
        });
      } else {
        results.push({
          name: 'Title',
          status: 'pass',
          message: `Title length is good (${title.length} characters)`
        });
      }
      
      // Check meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        results.push({
          name: 'Meta Description',
          status: 'fail',
          message: 'Page is missing a meta description'
        });
      } else {
        const content = metaDescription.getAttribute('content') || '';
        if (content.length < 50) {
          results.push({
            name: 'Meta Description',
            status: 'warning',
            message: 'Meta description is too short (less than 50 characters)'
          });
        } else if (content.length > 160) {
          results.push({
            name: 'Meta Description',
            status: 'warning',
            message: 'Meta description is too long (more than 160 characters)'
          });
        } else {
          results.push({
            name: 'Meta Description',
            status: 'pass',
            message: `Meta description length is good (${content.length} characters)`
          });
        }
      }
      
      // Check canonical URL
      const canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        results.push({
          name: 'Canonical URL',
          status: 'fail',
          message: 'Page is missing a canonical URL'
        });
      } else {
        results.push({
          name: 'Canonical URL',
          status: 'pass',
          message: 'Canonical URL is present'
        });
      }
      
      // Check heading structure
      const h1Elements = document.querySelectorAll('h1');
      if (h1Elements.length === 0) {
        results.push({
          name: 'H1 Heading',
          status: 'fail',
          message: 'Page is missing an H1 heading'
        });
      } else if (h1Elements.length > 1) {
        results.push({
          name: 'H1 Heading',
          status: 'warning',
          message: `Page has multiple H1 headings (${h1Elements.length})`
        });
      } else {
        results.push({
          name: 'H1 Heading',
          status: 'pass',
          message: 'Page has exactly one H1 heading'
        });
      }
      
      // Check image alt attributes
      const images = document.querySelectorAll('img');
      const imagesWithoutAlt = Array.from(images).filter(img => !img.hasAttribute('alt'));
      if (images.length > 0 && imagesWithoutAlt.length > 0) {
        results.push({
          name: 'Image Alt Attributes',
          status: 'warning',
          message: `${imagesWithoutAlt.length} out of ${images.length} images are missing alt attributes`
        });
      } else if (images.length > 0) {
        results.push({
          name: 'Image Alt Attributes',
          status: 'pass',
          message: 'All images have alt attributes'
        });
      }
      
      // Check for structured data
      const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
      if (structuredData.length === 0) {
        results.push({
          name: 'Structured Data',
          status: 'warning',
          message: 'Page does not have any structured data'
        });
      } else {
        results.push({
          name: 'Structured Data',
          status: 'pass',
          message: `Page has ${structuredData.length} structured data elements`
        });
      }
      
      // Check for meta viewport
      const viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        results.push({
          name: 'Viewport',
          status: 'fail',
          message: 'Page is missing a viewport meta tag'
        });
      } else {
        results.push({
          name: 'Viewport',
          status: 'pass',
          message: 'Viewport meta tag is present'
        });
      }
      
      setAuditResults(results);
    };
    
    // Run the audit after the page has loaded
    setTimeout(runAudit, 1000);
  }, [showInProduction]);
  
  // Don't render anything in production unless showInProduction is true
  if (process.env.NODE_ENV === 'production' && !showInProduction) {
    return null;
  }
  
  // Count results by status
  const passCount = auditResults.filter(result => result.status === 'pass').length;
  const warningCount = auditResults.filter(result => result.status === 'warning').length;
  const failCount = auditResults.filter(result => result.status === 'fail').length;
  
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        SEO Audit {passCount}/{auditResults.length}
      </button>
      
      {isOpen && (
        <div className="absolute bottom-12 left-0 w-96 max-h-[80vh] overflow-y-auto bg-white rounded-lg shadow-lg border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">SEO Audit Results</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
          
          <div className="flex space-x-2 mb-4">
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
              Pass: {passCount}
            </span>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
              Warning: {warningCount}
            </span>
            <span className="px-2 py-1 bg-red-100 text-red-800 rounded">
              Fail: {failCount}
            </span>
          </div>
          
          <div className="space-y-3">
            {auditResults.map((result, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg ${
                  result.status === 'pass' 
                    ? 'bg-green-50 border border-green-200' 
                    : result.status === 'warning'
                    ? 'bg-yellow-50 border border-yellow-200'
                    : 'bg-red-50 border border-red-200'
                }`}
              >
                <div className="font-medium">
                  {result.name}
                  <span 
                    className={`ml-2 px-2 py-0.5 text-xs rounded ${
                      result.status === 'pass' 
                        ? 'bg-green-100 text-green-800' 
                        : result.status === 'warning'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {result.status}
                  </span>
                </div>
                <div className="text-sm mt-1">{result.message}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOAudit;

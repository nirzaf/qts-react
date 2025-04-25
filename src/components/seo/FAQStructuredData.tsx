import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateFAQSchema } from '@/utils/structuredData';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqs: FAQItem[];
}

/**
 * Component for adding FAQ structured data to a page
 * This helps Google display FAQ rich results in search
 */
const FAQStructuredData: React.FC<FAQStructuredDataProps> = ({ faqs }) => {
  const faqSchema = generateFAQSchema(faqs);
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default FAQStructuredData;

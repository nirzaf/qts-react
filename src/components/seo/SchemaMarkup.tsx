'use client';

import Head from 'next/head';
import React from 'react';

interface SchemaMarkupProps {
  schema: Record<string, any> | Record<string, any>[];
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ schema }) => {
  // Format structured data for output
  const formatStructuredData = () => {
    if (Array.isArray(schema)) {
      return schema.map((data, index) => (
        <script key={`ld-${index}`} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ));
    }
    
    return (
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    );
  };

  return <Head>{formatStructuredData()}</Head>;
};

export default SchemaMarkup;

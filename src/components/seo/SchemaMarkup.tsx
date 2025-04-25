import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  schema: Record<string, any> | Record<string, any>[];
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ schema }) => {
  // Format structured data for output
  const formatStructuredData = () => {
    if (Array.isArray(schema)) {
      return schema.map(data => (
        <script key={`ld-${Math.random().toString(36).substr(2, 9)}`} type="application/ld+json">
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

  return <Helmet>{formatStructuredData()}</Helmet>;
};

export default SchemaMarkup;

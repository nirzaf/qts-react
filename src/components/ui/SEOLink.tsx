import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface SEOLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  ariaLabel?: string;
  onClick?: () => void;
  external?: boolean;
  rel?: string;
}

/**
 * SEO-optimized link component that handles both internal and external links
 * with proper attributes for accessibility and SEO.
 */
const SEOLink: React.FC<SEOLinkProps> = ({
  to,
  children,
  className = '',
  title,
  ariaLabel,
  onClick,
  external = false,
  rel = 'noopener noreferrer',
}) => {
  // Check if the link is external (starts with http or https)
  const isExternal = external || to.startsWith('http://') || to.startsWith('https://');

  // Common props for both internal and external links
  const commonProps = {
    className,
    title,
    'aria-label': ariaLabel,
    onClick,
  };

  // For external links, use a regular anchor tag with proper security attributes
  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel={rel}
        {...commonProps}
      >
        {children}
      </a>
    );
  }

  // For internal links, use React Router's Link component
  return (
    <RouterLink
      to={to}
      {...commonProps}
    >
      {children}
    </RouterLink>
  );
};

export default SEOLink;

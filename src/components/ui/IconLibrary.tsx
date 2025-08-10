import React from 'react';
import { twMerge } from 'tailwind-merge';
import { icons as lucideIcons } from 'lucide-react';
import * as HeroIcons from '@heroicons/react/24/outline';
import * as TablerIcons from '@tabler/icons-react';
import * as FeatherIcons from 'react-feather';

/**
 * IconLibrary
 * Unified icon component that normalizes usage across Lucide, Heroicons, Tabler, and Feather.
 *
 * Usage:
 *   <Icon name="Camera" library="lucide" className="w-6 h-6 text-blue-600" />
 *   <Icon name="ArrowRight" library="hero" size={20} color="#111" />
 *
 * Guidelines:
 * - Use size (in px) or Tailwind width/height classes. Tailwind will override size prop via className.
 * - Use currentColor by default so text-* utilities control color.
 */
export type IconLibraryName = 'lucide' | 'hero' | 'tabler' | 'feather';

type SvgComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

function getIconFromNamespace(ns: Record<string, unknown>, key: string): SvgComponent | null {
  // function-level comment: Lookup icon component in a namespace and coerce to SVG component type
  const modVal = ns[key];
  if (!modVal) return null;
  return modVal as unknown as SvgComponent;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string; // Icon component name, e.g., "Camera", "ArrowRight"
  library?: IconLibraryName; // Default: lucide
  size?: number; // Pixel size for width/height if className doesn't specify
}

export const Icon: React.FC<IconProps> = ({ name, library = 'lucide', size = 24, className = '', ...rest }) => {
  // Lookup from selected library
  let Component: SvgComponent | null = null;
  if (library === 'lucide') {
    Component = (lucideIcons as unknown as Record<string, SvgComponent>)[name] ?? null;
  } else if (library === 'hero') {
    Component = getIconFromNamespace(HeroIcons as unknown as Record<string, unknown>, name);
  } else if (library === 'tabler') {
    Component = getIconFromNamespace(TablerIcons as unknown as Record<string, unknown>, name);
  } else if (library === 'feather') {
    Component = getIconFromNamespace(FeatherIcons as unknown as Record<string, unknown>, name);
  }

  // Fallback to lucide if not found in the requested library
  if (!Component) {
    Component = (lucideIcons as unknown as Record<string, SvgComponent>)[name] ?? null;
  }

  if (!Component) {
    // Render a simple placeholder square if icon not found
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={twMerge(`inline-block align-middle`, className)}
        {...rest}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="3" x2="21" y2="21" />
      </svg>
    );
  }

  // Many icon libs accept size/width/height props; ensure color inherits
  return (
    <Component
      width={size}
      height={size}
      color="currentColor"
      className={twMerge('inline-block align-middle', className)}
      {...rest}
    />
  );
};
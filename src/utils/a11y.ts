/**
 * Accessibility utilities for improving the user experience
 */

/**
 * Creates an ID that is safe for use in HTML
 * @param prefix - The prefix for the ID
 * @param value - The value to append to the prefix
 * @returns A safe ID string
 */
export const createSafeId = (prefix: string, value: string | number): string => {
  const safeValue = String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  return `${prefix}-${safeValue}`;
};

/**
 * Creates a descriptive aria-label for links or buttons
 * @param action - The action being performed (e.g., "View", "Download")
 * @param item - The item being acted upon
 * @param context - Optional additional context
 * @returns A descriptive aria-label
 */
export const createAriaLabel = (
  action: string,
  item: string,
  context?: string
): string => {
  return context 
    ? `${action} ${item} ${context}`.trim()
    : `${action} ${item}`.trim();
};

/**
 * Handles keyboard navigation for interactive elements
 * @param event - The keyboard event
 * @param callback - The callback to execute when Enter or Space is pressed
 */
export const handleKeyboardNavigation = (
  event: React.KeyboardEvent,
  callback: () => void
): void => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    callback();
  }
};

/**
 * Creates a set of props for screen reader only text
 * @returns Props for screen reader only elements
 */
export const srOnly = {
  className: 'sr-only',
  style: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0',
  },
};

/**
 * Determines if a link should open in a new tab
 * @param url - The URL to check
 * @returns Whether the link should open in a new tab
 */
export const shouldOpenInNewTab = (url: string): boolean => {
  return url.startsWith('http://') || url.startsWith('https://');
};

/**
 * Creates props for elements that should be hidden from screen readers
 * @returns Props for decorative elements
 */
export const decorativeProps = {
  'aria-hidden': true,
  role: 'presentation',
};

/**
 * Creates props for skip navigation links
 * @param targetId - The ID of the element to skip to
 * @returns Props for skip navigation links
 */
export const skipNavProps = (targetId: string) => ({
  href: `#${targetId}`,
  className: 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
});

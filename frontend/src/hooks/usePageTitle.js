import { useEffect } from 'react';

const DEFAULT_TITLE = 'ApexNexon | AI & Automation Solutions';

/**
 * Sets document.title for the current page. Resets to default on unmount.
 * @param {string} title - Page title (e.g. "Services" → "Services | ApexNexon")
 */
export function usePageTitle(title) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ApexNexon` : DEFAULT_TITLE;
    document.title = fullTitle;
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title]);
}

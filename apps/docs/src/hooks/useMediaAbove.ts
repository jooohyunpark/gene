import { useState, useEffect } from 'react';
import { breakpoints } from '@/styles/helper';

const useMediaAbove = (
  breakpoint: keyof typeof breakpoints = 'md',
): boolean => {
  const [isAbove, setIsAbove] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${breakpoints[breakpoint]}px)`,
    );

    const handleChange = (e: MediaQueryListEvent) => setIsAbove(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    setIsAbove(mediaQuery.matches);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [breakpoint]);

  return isAbove;
};

export default useMediaAbove;

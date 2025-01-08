import { useState, useEffect } from 'react';

import { breakpoints } from '@/styles/js';

const useMediaAbove = (breakpoint = 'md') => {
  const [isAbove, setIsAbove] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${breakpoints[breakpoint]}px)`,
    );

    const handleChange = (e) => setIsAbove(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    setIsAbove(mediaQuery.matches);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [breakpoint]);

  return isAbove;
};

export default useMediaAbove;

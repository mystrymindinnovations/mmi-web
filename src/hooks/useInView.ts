
'use client';

import { useInView as useReactInView, InViewOptions } from 'react-intersection-observer';

export function useInView(options?: InViewOptions) {
  const { ref, inView } = useReactInView({
    triggerOnce: false, // Default to re-triggering animation
    ...options,
  });

  return { ref, inView };
}

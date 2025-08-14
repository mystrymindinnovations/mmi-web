
'use client';

import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'slide-in-from-left' | 'slide-in-from-right' | 'slide-in-from-top' | 'slide-in-from-bottom' | 'fade-in';
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export function AnimateOnScroll({
  children,
  animation = 'fade-in',
  className,
  threshold = 0.1,
  triggerOnce = false,
}: AnimateOnScrollProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        inView ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0',
        {
          'translate-x-[-100px]': !inView && animation === 'slide-in-from-left',
          'translate-x-[100px]': !inView && animation === 'slide-in-from-right',
          'translate-y-[-50px]': !inView && animation === 'slide-in-from-top',
          'translate-y-[50px]': !inView && animation === 'slide-in-from-bottom',
        },
        className
      )}
    >
      {children}
    </div>
  );
}

'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export default function ScrollShadow({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const header = wrapperRef.current?.querySelector('.site-header') as HTMLElement | null;
      if (!header) return;
      if (window.pageYOffset > 10) {
        header.style.boxShadow = '0 1px 0 rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}

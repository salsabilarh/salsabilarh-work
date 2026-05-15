// src/hooks/useInView.ts
// ═══════════════════════════════════════════════════
// Hook untuk trigger animasi saat elemen masuk viewport.
// Migrasikan dari revealObs + revealLeftObs di HTML lama.
// ═══════════════════════════════════════════════════
'use client';

import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useInView({
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
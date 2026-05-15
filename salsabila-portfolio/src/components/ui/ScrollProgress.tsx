// src/components/ui/ScrollProgress.tsx
'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };

    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      role="progressbar"
      aria-hidden="true"
      className="fixed top-0 left-0 h-[2px] z-[1000] transition-[width] duration-100 linear"
      style={{
        width: `${progress}%`,
        background: 'var(--gradient-brand)',
      }}
    />
  );
}
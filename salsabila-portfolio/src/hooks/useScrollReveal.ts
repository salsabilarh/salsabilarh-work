// src/hooks/useScrollReveal.ts
// ═══════════════════════════════════════════════════
// Hook yang mengobservasi SEMUA elemen .u-reveal
// sekaligus dalam satu IntersectionObserver.
//
// Kenapa satu observer untuk semua? Karena membuat
// satu observer per elemen = ratusan observer =
// memory bocor. Satu observer bisa handle banyak
// target — lebih efisien!
// ═══════════════════════════════════════════════════
'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // Observer untuk fade-up biasa
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold:  0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Observer untuk slide-left (timeline) dengan stagger
    const revealLeftObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          setTimeout(
            () => entry.target.classList.add('is-visible'),
            i * 130  // 130ms stagger antar item
          );
          revealLeftObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );

    // Observe semua elemen yang belum visible
    document.querySelectorAll('.u-reveal:not(.is-visible)')
      .forEach((el) => revealObserver.observe(el));

    document.querySelectorAll('.u-reveal-left:not(.is-visible)')
      .forEach((el) => revealLeftObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      revealLeftObserver.disconnect();
    };
  }, []);
}
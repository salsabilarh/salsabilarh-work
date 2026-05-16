// src/components/providers/RevealProvider.tsx
// ═══════════════════════════════════════════════════
// Client component yang mengaktifkan scroll reveal
// untuk seluruh halaman. Di-inject di layout utama.
// ═══════════════════════════════════════════════════
'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export function RevealProvider({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return <>{children}</>;
}
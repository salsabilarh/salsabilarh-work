// src/hooks/useTheme.ts
// ═══════════════════════════════════════════
// Custom hook yang membungkus next-themes.
// Kenapa dibungkus lagi? Supaya kalau besok
// kita ganti library theme, komponen tidak
// perlu diubah — cukup update hook ini saja.
// Prinsip: Dependency Inversion.
// ═══════════════════════════════════════════
'use client';

import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme();

  // Hindari hydration mismatch:
  // Server tidak tahu theme preference user,
  // jadi tunggu sampai komponen mount di browser
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === 'dark';

  const toggle = () => setTheme(isDark ? 'light' : 'dark');

  return {
    theme,
    isDark,
    toggle,
    mounted, // pakai ini untuk cegah flash
  };
}
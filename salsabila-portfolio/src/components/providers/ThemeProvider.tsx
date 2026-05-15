// src/components/providers/ThemeProvider.tsx
// ═══════════════════════════════════════════════════
// Komponen ini membungkus seluruh app.
// 'use client' diperlukan karena next-themes
// butuh akses ke localStorage (browser API).
//
// Kenapa dipisah jadi komponen tersendiri?
// Karena layout.tsx adalah Server Component —
// tidak bisa langsung pakai 'use client' di sana.
// Solusinya: buat wrapper kecil yang client-only.
// ═══════════════════════════════════════════════════
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
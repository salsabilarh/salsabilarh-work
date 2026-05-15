// middleware.ts (di ROOT project, bukan di src/)
// ═══════════════════════════════════════════════════
// Middleware berjalan SEBELUM halaman dirender.
// Tugasnya: kalau user buka '/', redirect ke '/en'
// kalau user dari Indonesia, bisa redirect ke '/id'
// ═══════════════════════════════════════════════════

import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  // Kalau buka '/', otomatis redirect ke '/en'
  localePrefix: 'always',
});

export const config = {
  // Jalankan middleware di semua route kecuali:
  // - file statis (_next, gambar, favicon)
  // - API routes
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
};
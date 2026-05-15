// src/i18n/request.ts
// ═══════════════════════════════════════════
// Fungsi ini dipanggil next-intl setiap ada
// request — untuk tahu file JSON mana yang
// harus dimuat berdasarkan locale-nya.
// ═══════════════════════════════════════════

import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  // Ambil locale dari URL (/en atau /id)
  let locale = await requestLocale;

  // Validasi — kalau locale tidak dikenal, pakai 'en'
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'en';
  }

  return {
    locale,
    // Load file JSON terjemahan yang sesuai
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
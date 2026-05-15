// src/i18n/config.ts
// ═══════════════════════════════════════════
// Definisi semua locale yang didukung.
// Mau tambah bahasa baru (misal Jepang)?
// Cukup tambah 'ja' di sini + buat ja.json
// ═══════════════════════════════════════════

export const locales = ['en', 'id'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  id: 'Indonesia',
};
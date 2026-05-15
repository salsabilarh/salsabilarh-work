// src/app/[locale]/layout.tsx
// ═══════════════════════════════════════════
// Layout ini membungkus SEMUA halaman.
// Di sinilah ThemeProvider dan i18n Provider
// diinjeksi sebagai global wrapper.
// ═══════════════════════════════════════════

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import '../globals.css';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  // Kalau locale tidak valid, tampilkan 404
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Load file terjemahan sesuai locale
  const messages = await getMessages();

  return (
    <html lang={locale} data-theme="dark">
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
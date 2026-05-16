// src/app/[locale]/layout.tsx — update
import { NextIntlClientProvider } from 'next-intl';
import { getMessages }            from 'next-intl/server';
import { notFound }               from 'next/navigation';
import { locales, type Locale }   from '@/i18n/config';
import { ThemeProvider }          from '@/components/providers/ThemeProvider';
import { RevealProvider }         from '@/components/providers/RevealProvider';
import '../globals.css';

interface LayoutProps {
  children: React.ReactNode;
  params:   Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <RevealProvider>
              {children}
            </RevealProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
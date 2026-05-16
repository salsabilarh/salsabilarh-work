// src/app/[locale]/layout.tsx — update
import { NextIntlClientProvider } from 'next-intl';
import { getMessages }            from 'next-intl/server';
import { notFound }               from 'next/navigation';
import { locales, type Locale }   from '@/i18n/config';
import { ThemeProvider }          from '@/components/providers/ThemeProvider';
import { RevealProvider }         from '@/components/providers/RevealProvider';
import '../globals.css';
import type { Metadata } from 'next';

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === 'id';

  return {
    title: 'Salsabila Rafifah Handifa | Fullstack Developer | Node.js · React.js · Go',
    description: isId
      ? 'Fullstack Developer. 50+ REST API, 100% test coverage, Juara 1 HackIn Fest 2025. Expert Node.js, Go, React.js, PostgreSQL, Clean Architecture.'
      : 'Fullstack Developer. Delivered 50+ REST APIs, 100% test coverage, Juara 1 HackIn Fest 2025. Expert in Node.js, Go, React.js, PostgreSQL, Clean Architecture.',
    keywords: [
      'Fullstack Developer', 'Backend Developer', 'Node.js Developer',
      'Go Developer', 'React.js Developer', 'Clean Architecture',
      'REST API', 'PostgreSQL', 'Docker', 'CI/CD', 'Jakarta',
    ],
    openGraph: {
      type:        'website',
      title:       'Salsabila Rafifah Handifa | Fullstack Developer',
      description: '50+ REST APIs · 100% test coverage · Zero critical defects · Juara 1 HackIn Fest 2025.',
      locale:      locale === 'id' ? 'id_ID' : 'en_US',
    },
    robots: {
      index:  true,
      follow: true,
    },
    alternates: {
      languages: {
        'en': '/en',
        'id': '/id',
      },
    },
  };
}
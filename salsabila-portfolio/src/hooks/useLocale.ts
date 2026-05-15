// src/hooks/useLocale.ts
'use client';

import { useLocale as useNextIntlLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';

export function useLocale() {
  const locale   = useNextIntlLocale() as Locale;
  const router   = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = locale === 'en' ? 'id' : 'en';
    // Ganti prefix locale di URL: /en/... → /id/...
    const newPath = pathname.replace(`/${locale}`, `/${next}`);
    router.push(newPath);
  };

  return { locale, toggle };
}
// src/app/[locale]/page.tsx — test theme + i18n
'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from '@/hooks/useTheme';

export default function Home() {
  const t = useTranslations('hero');
  const { isDark, toggle, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <main style={{ padding: '40px' }}>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        color: 'var(--text-primary)',
        fontSize: '24px',
        marginBottom: '16px'
      }}>
        {t('availability')}
      </h1>

      <div style={{
        padding: '16px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-card)',
        borderRadius: 'var(--radius-md)',
        marginBottom: '16px'
      }}>
        <p style={{ color: 'var(--text-secondary)' }}>
          Mode saat ini: <strong style={{ color: 'var(--text-primary)' }}>
            {isDark ? '🌙 Dark' : '☀️ Light'}
          </strong>
        </p>
      </div>

      <button
        onClick={toggle}
        style={{
          padding: '10px 20px',
          background: 'var(--gradient-brand)',
          border: 'none',
          borderRadius: 'var(--radius-sm)',
          color: '#fff',
          cursor: 'pointer',
          fontFamily: 'var(--font-display)',
        }}
      >
        Toggle Theme
      </button>
    </main>
  );
}
// src/app/[locale]/page.tsx — test sementara
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('hero');

  return (
    <main style={{ padding: '40px' }}>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        color: 'var(--text-primary)',
        fontSize: '28px'
      }}>
        {t('availability')}
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
        Coba buka: <code>/en</code> dan <code>/id</code>
      </p>
    </main>
  );
}
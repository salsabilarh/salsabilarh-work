// src/features/certificates/CertificatesSection.tsx
'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '@/components/layout/Section';
import { CertCard } from './CertCard';
import { certificates } from '@/data/certificates';
import { useLocale } from '@/hooks/useLocale';

const CERT_FILTERS = [
  { key: 'all',        labelEn: 'All',                  labelId: 'Semua' },
  { key: 'backend',    labelEn: 'Backend & API',         labelId: 'Backend & API' },
  { key: 'cloud',      labelEn: 'Cloud & DevOps',        labelId: 'Cloud & DevOps' },
  { key: 'database',   labelEn: 'Database',              labelId: 'Database' },
  { key: 'web',        labelEn: 'Web Fundamentals',      labelId: 'Web Fundamentals' },
  { key: 'networking', labelEn: 'Networking & IoT',      labelId: 'Networking & IoT' },
  { key: 'mobile',     labelEn: 'Mobile',                labelId: 'Mobile' },
  { key: 'soft',       labelEn: 'Project Management',    labelId: 'Manajemen Proyek' },
];

export function CertificatesSection() {
  const t = useTranslations('certificates');
  const { locale } = useLocale();
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return certificates;
    return certificates.filter((c) => c.category === activeFilter);
  }, [activeFilter]);

  return (
    <Section id="certificates" variant="surface">
      <div className="max-w-[1160px] mx-auto px-6">
        <p className="u-section-label u-reveal">{t('label')}</p>
        <h2 className="u-section-title u-reveal">{t('title')}</h2>
        <p className="u-section-desc u-reveal">{t('desc')}</p>

        {/* Filter tabs */}
        <div className="flex gap-1.5 flex-wrap mb-10 u-reveal">
          {CERT_FILTERS.map(({ key, labelEn, labelId }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className="px-3.5 py-1.5 rounded-[var(--radius-sm)] font-mono text-[11.5px] transition-all cursor-pointer"
              style={{
                background: activeFilter === key ? 'var(--gradient-brand)' : 'transparent',
                border:     activeFilter === key ? '1px solid transparent' : '1px solid var(--border-subtle)',
                color:      activeFilter === key ? '#fff' : 'var(--text-secondary)',
              }}
            >
              {locale === 'en' ? labelEn : labelId}
            </button>
          ))}
        </div>

        {/* Cert grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2 u-reveal">
          {filtered.map((cert) => (
            <CertCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </Section>
  );
}
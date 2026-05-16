// src/features/certificates/CertificatesSection.tsx — full update
'use client';

import { useState, useMemo, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Section }         from '@/components/layout/Section';
import { CertCard }        from './CertCard';
import { certificates }    from '@/data/certificates';
import { useLocale }       from '@/hooks/useLocale';

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

const CATEGORY_LABELS: Record<string, { icon: string; en: string; id: string }> = {
  backend:    { icon: '⚙️',  en: 'Backend & API Engineering',  id: 'Backend & API Engineering' },
  cloud:      { icon: '☁️',  en: 'Cloud & DevOps',             id: 'Cloud & DevOps' },
  database:   { icon: '🗄️', en: 'Database & Data Engineering', id: 'Database & Data Engineering' },
  web:        { icon: '🌐',  en: 'Web Development Fundamentals',id: 'Web Development Fundamentals' },
  networking: { icon: '🔌',  en: 'Networking & IoT',           id: 'Networking & IoT' },
  mobile:     { icon: '📱',  en: 'Mobile Development',         id: 'Mobile Development' },
  soft:       { icon: '📋',  en: 'Project Management',         id: 'Manajemen Proyek' },
};

export function CertificatesSection() {
  const t = useTranslations('certificates');
  const { locale } = useLocale();
  const [activeFilter,  setActiveFilter]  = useState('all');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Group certificates by category
  const groupedCerts = useMemo(() => {
    const filtered = activeFilter === 'all'
      ? certificates
      : certificates.filter((c) => c.category === activeFilter);

    return filtered.reduce<Record<string, typeof certificates>>((acc, cert) => {
      if (!acc[cert.category]) acc[cert.category] = [];
      acc[cert.category].push(cert);
      return acc;
    }, {});
  }, [activeFilter]);

  const handleFilterChange = useCallback((key: string) => {
    if (key === activeFilter || isTransitioning) return;
    setIsTransitioning(true);

    const container = document.getElementById('cert-container');
    if (container) {
      container.style.opacity   = '0';
      container.style.transform = 'translateY(8px)';
      container.style.transition = 'all 0.2s ease';
    }

    setTimeout(() => {
      setActiveFilter(key);
      if (container) {
        container.style.opacity   = '1';
        container.style.transform = 'translateY(0)';
      }
      setIsTransitioning(false);
    }, 220);
  }, [activeFilter, isTransitioning]);

  return (
    <Section id="certificates" variant="surface">
      <div className="max-w-[1160px] mx-auto px-6">
        <p className="u-section-label u-reveal">{t('label')}</p>
        <h2 className="u-section-title u-reveal">{t('title')}</h2>
        <p className="u-section-desc u-reveal">{t('desc')}</p>

        {/* Filter tabs */}
        <div className="flex gap-1.5 flex-wrap mb-10 u-reveal" role="group" aria-label="Filter certificates">
          {CERT_FILTERS.map(({ key, labelEn, labelId }) => {
            const isActive = activeFilter === key;
            return (
              <button
                key={key}
                onClick={() => handleFilterChange(key)}
                className="px-3.5 py-1.5 rounded-[var(--radius-sm)] font-mono text-[11.5px] cursor-pointer"
                style={{
                  transition:  'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  background:  isActive ? 'var(--gradient-brand)' : 'transparent',
                  border:      isActive ? '1px solid transparent' : '1px solid var(--border-subtle)',
                  color:       isActive ? '#fff' : 'var(--text-secondary)',
                  transform:   isActive ? 'translateY(-1px)' : 'translateY(0)',
                  boxShadow:   isActive ? '0 4px 12px rgba(59,130,246,0.25)' : 'none',
                }}
                aria-pressed={isActive}
              >
                {locale === 'en' ? labelEn : labelId}
              </button>
            );
          })}
        </div>

        {/* Cert groups */}
        <div id="cert-container" className="u-reveal">
          {Object.entries(groupedCerts).map(([category, certs]) => {
            const meta = CATEGORY_LABELS[category];
            if (!meta) return null;
            return (
              <div key={category} className="mb-10">
                {/* Group title */}
                <div
                  className="flex items-center gap-3 font-mono text-[12px] font-semibold tracking-[1.5px] uppercase mb-4 pb-2"
                  style={{
                    color:        'var(--text-link)',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <span>{meta.icon}</span>
                  <span>{locale === 'en' ? meta.en : meta.id}</span>
                </div>

                {/* Cert cards grid */}
                <div
                  className="grid gap-2"
                  style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
                >
                  {certs.map((cert, i) => (
                    <div
                      key={cert.id}
                      style={{
                        animation:      'fadeSlideIn 0.3s ease forwards',
                        animationDelay: `${i * 50}ms`,
                        opacity:        0,
                      }}
                    >
                      <CertCard certificate={cert} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Section>
  );
}
// src/features/education/EducationSection.tsx
import { useTranslations } from 'next-intl';
import { Section } from '@/components/layout/Section';

export function EducationSection() {
  const t = useTranslations('education');

  return (
    <Section id="education" variant="surface">
      <div className="max-w-[1160px] mx-auto px-6">
        <p className="u-section-label u-reveal">{t('label')}</p>
        <h2 className="u-section-title u-reveal">{t('title')}</h2>

        <div className="mt-12 u-reveal">
          <div
            className="max-w-[480px] p-6 rounded-[var(--radius-md)] transition-all hover:-translate-y-0.5"
            style={{
              background:   'var(--bg-card)',
              border:       '1px solid var(--border-card)',
            }}
          >
            <p className="font-mono text-[10px] tracking-[1.5px] uppercase mb-2"
               style={{ color: 'var(--text-link)' }}>
              {t('degreeLabel')}
            </p>
            <h3 className="font-mono text-[18px] font-medium mb-1"
                style={{ color: 'var(--text-primary)' }}>
              {t('degreeName')}
            </h3>
            <p className="text-[14px] mb-1" style={{ color: 'var(--text-secondary)' }}>
              Universitas Diponegoro · Semarang, ID
            </p>
            <p className="text-[12.5px] leading-[1.6] mb-6" style={{ color: 'var(--text-muted)' }}>
              {t('thesis')}
            </p>
            <div
              className="p-4 rounded-[var(--radius-sm)]"
              style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}
            >
              <p className="font-mono text-[11px] tracking-wide uppercase mb-1"
                 style={{ color: 'var(--text-muted)' }}>
                GPA
              </p>
              <p className="text-[18px] font-medium" style={{ color: 'var(--text-link)' }}>
                3.82 / 4.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
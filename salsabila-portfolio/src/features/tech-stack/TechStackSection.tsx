// src/features/tech-stack/TechStackSection.tsx
import { useTranslations } from 'next-intl';
import { Section } from '@/components/layout/Section';
import { techCategories } from '@/data/tech-stack';

const CAT_ACCENT: Record<string, string> = {
  backend:  '#3b82f6',
  frontend: '#8b5cf6',
  database: '#10b981',
  security: '#f59e0b',
  devops:   '#ef4444',
  testing:  '#06b6d4',
};

export function TechStackSection() {
  const t = useTranslations('techStack');

  return (
    <Section id="tech-stack" variant="base">
      <div className="max-w-[1160px] mx-auto px-6">
        <p className="u-section-label u-reveal">{t('label')}</p>
        <h2 className="u-section-title u-reveal">{t('title')}</h2>
        <p className="u-section-desc u-reveal">{t('desc')}</p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(195px,1fr))] gap-6 mt-12 u-reveal">
          {techCategories.map((cat) => {
            const accent = CAT_ACCENT[cat.catKey] ?? '#3b82f6';
            return (
              <div
                key={cat.id}
                className="p-6 rounded-[var(--radius-md)] transition-all hover:-translate-y-[3px]"
                style={{
                  background:   'var(--bg-card)',
                  border:       '1px solid var(--border-card)',
                  ['--cat-accent' as string]: accent,
                }}
              >
                <p
                  className="font-mono text-[10px] tracking-[2px] uppercase font-semibold mb-4"
                  style={{ color: accent }}
                >
                  {t(`categories.${cat.id}`)}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.badges.map((badge) => (
                    <span
                      key={badge.name}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-[var(--radius-sm)] font-mono text-[11.5px] transition-all cursor-default hover:-translate-y-0.5"
                      style={{
                        background: 'var(--badge-bg)',
                        border:     '1px solid var(--badge-border)',
                        color:      'var(--text-primary)',
                      }}
                      title={badge.level}
                    >
                      <span
                        className="w-[5px] h-[5px] rounded-full"
                        style={{
                          background: badge.level === 'expert'
                            ? 'var(--color-success)'
                            : 'var(--color-blue)',
                        }}
                      />
                      {badge.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex gap-6 mt-4 flex-wrap u-reveal">
          {[
            { color: 'var(--color-success)', labelEn: 'Expert — production-proven', labelId: 'Expert — terbukti di produksi' },
            { color: 'var(--color-blue)',    labelEn: 'Advanced — applied in projects', labelId: 'Advanced — diterapkan di proyek' },
          ].map(({ color, labelEn }) => (
            <div key={labelEn} className="flex items-center gap-1.5 font-mono text-[11.5px]"
                 style={{ color: 'var(--text-secondary)' }}>
              <span className="w-2 h-2 rounded-full" style={{ background: color }} />
              {labelEn}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
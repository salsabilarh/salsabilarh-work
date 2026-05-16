// src/features/tech-stack/TechStackSection.tsx — update
import { useTranslations }   from 'next-intl';
import { Section }           from '@/components/layout/Section';
import { TechCategoryCard }  from './TechCategory';
import { techCategories }    from '@/data/tech-stack';

export function TechStackSection() {
  const t = useTranslations('techStack');

  return (
    <Section id="tech-stack" variant="base">
      <div className="max-w-[1160px] mx-auto px-6">
        <p className="u-section-label u-reveal">{t('label')}</p>
        <h2 className="u-section-title u-reveal">{t('title')}</h2>
        <p className="u-section-desc u-reveal">{t('desc')}</p>

        <div
          className="grid gap-6 mt-12 u-reveal"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(195px, 1fr))' }}
        >
          {techCategories.map((cat) => (
            <TechCategoryCard key={cat.id} category={cat} />
          ))}
        </div>

        {/* Legend */}
        <div className="flex gap-6 mt-4 flex-wrap u-reveal">
          {[
            { color: 'var(--color-success)', labelEn: 'Expert — production-proven across multiple projects', labelId: 'Expert — terbukti di produksi' },
            { color: 'var(--color-blue)',    labelEn: 'Advanced — applied in production or structured projects', labelId: 'Advanced — diterapkan di proyek' },
          ].map(({ color, labelEn }) => (
            <div
              key={labelEn}
              className="flex items-center gap-1.5 font-mono text-[11.5px]"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: color }} />
              {labelEn}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
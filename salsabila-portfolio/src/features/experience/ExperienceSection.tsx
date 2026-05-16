// src/features/experience/ExperienceSection.tsx
import { useTranslations } from 'next-intl';
import { Section } from '@/components/layout/Section';
import { TimelineItem } from './TimelineItem';
import { experiences } from '@/data/experience';

export function ExperienceSection() {
  const t = useTranslations('experience');

  return (
    <Section id="experience" variant="surface">
      <div className="max-w-[1160px] mx-auto px-6">
        <p className="u-section-label u-reveal">{t('label')}</p>
        <h2 className="u-section-title u-reveal">{t('title')}</h2>
        <p className="u-section-desc u-reveal">{t('desc')}</p>

        {/* Timeline container */}
        <div
          className="relative pl-14 mt-12"
          style={{
            // Gradient vertical line
            '--timeline-line': 'after:content-[""] after:absolute after:left-[18px] after:top-2 after:bottom-2 after:w-px after:bg-gradient-to-b after:from-[var(--color-blue)] after:to-transparent',
          } as React.CSSProperties}
        >
          <div className="absolute left-[18px] top-2 bottom-2 w-px"
               style={{ background: 'linear-gradient(to bottom, var(--color-blue), transparent)' }} />

          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
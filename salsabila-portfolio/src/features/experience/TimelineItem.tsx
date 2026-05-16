// src/features/experience/TimelineItem.tsx
'use client';

import { useLocale } from '@/hooks/useLocale';
import { useInView } from '@/hooks/useInView';
import { Badge } from '@/components/ui/Badge';
import type { Experience } from '@/data/index';

const NODE_STYLES: Record<Experience['type'], { border: string; shadow: string; emoji: string }> = {
  intern:      { border: 'var(--color-blue)',    shadow: 'rgba(59,130,246,0.30)',  emoji: '💼' },
  competition: { border: 'var(--color-warning)', shadow: 'rgba(245,158,11,0.30)', emoji: '🏆' },
  freelance:   { border: 'var(--color-cyan)',    shadow: 'rgba(6,182,212,0.30)',   emoji: '💻' },
};

const TYPE_BADGE_COLORS: Record<Experience['type'], { bg: string; border: string; color: string }> = {
  intern:      { bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.3)',  color: '#3b82f6' },
  competition: { bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.3)', color: '#f59e0b' },
  freelance:   { bg: 'rgba(6,182,212,0.1)',  border: 'rgba(6,182,212,0.3)',  color: '#06b6d4' },
};

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience: exp, index }: TimelineItemProps) {
  const { locale } = useLocale();
  const { ref, isVisible } = useInView();

  const role        = locale === 'en' ? exp.roleEn       : exp.roleId;
  const typeBadge   = locale === 'en' ? exp.typeBadgeEn  : exp.typeBadgeId;
  const period      = locale === 'en' ? exp.periodEn     : exp.periodId;
  const achievements= locale === 'en' ? exp.achievementsEn : exp.achievementsId;

  const nodeStyle   = NODE_STYLES[exp.type];
  const badgeColors = TYPE_BADGE_COLORS[exp.type];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative mb-12 transition-all duration-500"
      style={{
        opacity:   isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-16px)',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Timeline node */}
      <div
        className="absolute -left-14 top-0 w-10 h-10 rounded-full flex items-center justify-center text-base z-[1]"
        style={{
          background:  'var(--bg-surface)',
          border:      `2px solid ${nodeStyle.border}`,
          boxShadow:   `0 0 16px ${nodeStyle.shadow}`,
        }}
        aria-hidden="true"
      >
        {nodeStyle.emoji}
      </div>

      {/* Card */}
      <div
        className="p-6 rounded-[var(--radius-md)] transition-colors"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-card)')}
      >
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="font-mono text-[16px] font-medium" style={{ color: 'var(--text-primary)' }}>
                {role}
              </span>
              <span
                className="font-mono text-[10px] tracking-wide uppercase px-2.5 py-0.5 rounded-full"
                style={{ background: badgeColors.bg, border: `1px solid ${badgeColors.border}`, color: badgeColors.color }}
              >
                {typeBadge}
              </span>
            </div>
            <p className="text-[13px]" style={{ color: 'var(--text-link)' }}>{exp.company}</p>
          </div>
          <span
            className="font-mono text-[10px] tracking-wide px-2.5 py-0.5 rounded-full"
            style={{ background: 'var(--tag-bg)', border: '1px solid var(--tag-border)', color: 'var(--color-cyan)' }}
          >
            {period}
          </span>
        </div>

        {/* Achievements */}
        <ul className="flex flex-col gap-2 mb-4">
          {achievements.map((a, i) => (
            <li key={i} className="flex items-start gap-2 text-[13.5px] leading-[1.65]"
                style={{ color: 'var(--text-secondary)' }}>
              <span className="mt-1 flex-shrink-0 text-[12px]" style={{ color: 'var(--text-link)' }}>▸</span>
              <span dangerouslySetInnerHTML={{ __html: a.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            </li>
          ))}
        </ul>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {exp.stack.map((s) => <Badge key={s} variant="stack">{s}</Badge>)}
        </div>
      </div>
    </div>
  );
}
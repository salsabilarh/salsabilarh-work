// src/features/projects/ProjectCard.tsx
'use client';

import { Badge } from '@/components/ui/Badge';
import { TAG_CONFIG } from '@/lib/constants';
import type { Project } from '@/data/index';
import { useLocale } from '@/hooks/useLocale';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const { locale } = useLocale();

  const title = locale === 'en' ? project.titleEn : project.titleId;
  const org   = locale === 'en' ? project.orgEn   : project.orgId;
  const desc  = locale === 'en' ? project.descEn  : project.descId;
  const btnLabel = locale === 'en' ? 'See Full Breakdown →' : 'Lihat Detail Lengkap →';

  return (
    <article
      className="rounded-[var(--radius-lg)] overflow-hidden transition-all hover:-translate-y-1"
      style={{
        background: 'var(--bg-card)',
        border:     '1px solid var(--border-card)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)';
        (e.currentTarget as HTMLElement).style.boxShadow  = '0 8px 40px var(--glow)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-card)';
        (e.currentTarget as HTMLElement).style.boxShadow  = 'none';
      }}
    >
      {/* Header */}
      <div className="p-6" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="flex items-center justify-between flex-wrap gap-1.5 mb-2">
          {/* Category tags */}
          <div className="flex flex-wrap gap-1">
            {project.category.map((cat) => {
              const cfg = TAG_CONFIG[cat];
              return cfg ? (
                <Badge key={cat} variant="tag" color={cfg.color}>
                  {cfg.label}
                </Badge>
              ) : null;
            })}
          </div>
          {/* Award */}
          <span className="font-mono text-[11px] whitespace-nowrap" style={{ color: 'var(--color-warning)' }}>
            {project.award}
          </span>
        </div>
        <h3 className="font-mono text-[17px] font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
        <p className="text-[12px]" style={{ color: 'var(--text-muted)' }}>{org}</p>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-[13.5px] leading-[1.7] mb-4" style={{ color: 'var(--text-secondary)' }}>
          {desc}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.highlights.map((h) => (
            <Badge key={h} variant="highlight">{h}</Badge>
          ))}
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((s) => (
            <Badge key={s} variant="stack">{s}</Badge>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => onOpenModal(project)}
          className="w-full mt-2 py-3 px-6 rounded-[var(--radius-md)] font-mono text-[13px] font-medium text-white transition-all hover:opacity-85 hover:-translate-y-0.5"
          style={{ background: 'var(--gradient-brand)', border: 'none', cursor: 'pointer' }}
        >
          {btnLabel}
        </button>
      </div>
    </article>
  );
}
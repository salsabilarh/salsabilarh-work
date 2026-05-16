// src/features/tech-stack/TechCategory.tsx — new component
'use client';

import { useState } from 'react';
import type { TechCategory as TechCategoryType } from '@/data/index';
import { useLocale } from '@/hooks/useLocale';

const CAT_ACCENT: Record<string, string> = {
  backend:  '#3b82f6',
  frontend: '#8b5cf6',
  database: '#10b981',
  security: '#f59e0b',
  devops:   '#ef4444',
  testing:  '#06b6d4',
};

interface TechCategoryProps {
  category: TechCategoryType;
}

export function TechCategoryCard({ category }: TechCategoryProps) {
  const { locale }  = useLocale();
  const accent      = CAT_ACCENT[category.catKey] ?? '#3b82f6';
  const [hovered, setHovered] = useState(false);
  const label = locale === 'en' ? category.labelEn : category.labelId;

  return (
    <div
      className="p-6 rounded-[var(--radius-md)] transition-all duration-200"
      style={{
        background:   'var(--bg-card)',
        border:       `1px solid ${hovered ? accent : 'var(--border-card)'}`,
        transform:    hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow:    hovered ? `0 8px 32px ${accent}25` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Category label */}
      <p
        className="font-mono text-[10px] tracking-[2px] uppercase font-semibold mb-4"
        style={{ color: accent }}
      >
        {label}
      </p>

      {/* Badges */}
      <div className="flex flex-wrap gap-1.5">
        {category.badges.map((badge) => (
          <TechBadge
            key={badge.name}
            name={badge.name}
            level={badge.level}
            accent={accent}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Individual tech badge ─────────────────────────── */
interface TechBadgeProps {
  name:   string;
  level:  'expert' | 'advanced';
  accent: string;
}

function TechBadge({ name, level, accent }: TechBadgeProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-1 rounded-[var(--radius-sm)] font-mono text-[11.5px] cursor-default transition-all duration-150"
      style={{
        background: hovered ? accent               : 'var(--badge-bg)',
        border:     hovered ? `1px solid ${accent}` : '1px solid var(--badge-border)',
        color:      hovered ? '#fff'                : 'var(--text-primary)',
        transform:  hovered ? 'translateY(-2px)'    : 'translateY(0)',
        boxShadow:  hovered ? `0 4px 12px ${accent}40` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="w-[5px] h-[5px] rounded-full flex-shrink-0"
        style={{
          background: hovered
            ? '#fff'
            : level === 'expert'
              ? 'var(--color-success)'
              : 'var(--color-blue)',
        }}
      />
      {name}
    </span>
  );
}
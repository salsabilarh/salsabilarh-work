// src/features/projects/ProjectFilter.tsx
'use client';

import { FILTER_TABS } from '@/lib/constants';
import { useLocale } from '@/hooks/useLocale';

interface ProjectFilterProps {
  active: string;
  onChange: (key: string) => void;
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  const { locale } = useLocale();

  return (
    <div className="flex gap-1.5 flex-wrap mb-10" role="group" aria-label="Filter projects">
      {FILTER_TABS.map(({ key, labelEn, labelId }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className="px-3.5 py-1.5 rounded-[var(--radius-sm)] font-mono text-[11.5px] transition-all cursor-pointer"
          style={{
            background:   active === key ? 'var(--gradient-brand)' : 'transparent',
            border:       active === key ? '1px solid transparent' : '1px solid var(--border-subtle)',
            color:        active === key ? '#fff' : 'var(--text-secondary)',
          }}
        >
          {locale === 'en' ? labelEn : labelId}
        </button>
      ))}
    </div>
  );
}
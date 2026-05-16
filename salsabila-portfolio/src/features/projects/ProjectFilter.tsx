// src/features/projects/ProjectFilter.tsx — updated
'use client';

import { FILTER_TABS } from '@/lib/constants';
import { useLocale }   from '@/hooks/useLocale';

interface ProjectFilterProps {
  active:   string;
  onChange: (key: string) => void;
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  const { locale } = useLocale();

  return (
    <div
      className="flex gap-1.5 flex-wrap mb-10"
      role="group"
      aria-label="Filter projects by category"
    >
      {FILTER_TABS.map(({ key, labelEn, labelId }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className="relative px-3.5 py-1.5 rounded-[var(--radius-sm)] font-mono text-[11.5px] cursor-pointer overflow-hidden"
            style={{
              /* Transisi smooth untuk semua properti */
              transition:  'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              background:  isActive ? 'var(--gradient-brand)' : 'transparent',
              border:      isActive ? '1px solid transparent' : '1px solid var(--border-subtle)',
              color:       isActive ? '#fff' : 'var(--text-secondary)',
              fontWeight:  isActive ? '500'  : '400',
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
  );
}
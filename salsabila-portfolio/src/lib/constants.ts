// src/lib/constants.ts
export const TAG_CONFIG: Record<string, { label: string; color: string }> = {
  fullstack:   { label: 'Fullstack',   color: '#8b5cf6' },
  backend:     { label: 'Backend API', color: '#3b82f6' },
  enterprise:  { label: 'Enterprise',  color: '#10b981' },
  competition: { label: 'Competition', color: '#f59e0b' },
  frontend:    { label: 'Frontend',    color: '#ec4899' },
};

export const FILTER_TABS = [
  { key: 'all',         labelEn: 'All',          labelId: 'Semua' },
  { key: 'fullstack',   labelEn: 'Fullstack',     labelId: 'Fullstack' },
  { key: 'backend',     labelEn: 'Backend API',   labelId: 'Backend API' },
  { key: 'frontend',    labelEn: 'Frontend',      labelId: 'Frontend' },
  { key: 'enterprise',  labelEn: 'Enterprise',    labelId: 'Enterprise' },
  { key: 'competition', labelEn: 'Competition',   labelId: 'Kompetisi' },
];
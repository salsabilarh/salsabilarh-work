// src/features/projects/ProjectModal.tsx — full update
'use client';

import { useEffect, useRef } from 'react';
import type { Project }      from '@/data/index';
import { useLocale }         from '@/hooks/useLocale';
import { Badge }             from '@/components/ui/Badge';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const PSI_STYLES = {
  problem:  { bg: 'rgba(239,68,68,0.08)',  text: 'var(--color-danger)',  border: 'rgba(239,68,68,0.20)',  labelEn: 'The Problem',   labelId: 'Masalah' },
  solution: { bg: 'rgba(59,130,246,0.08)', text: 'var(--text-link)',     border: 'rgba(59,130,246,0.20)', labelEn: 'The Solution',  labelId: 'Solusi' },
  impact:   { bg: 'rgba(16,185,129,0.08)', text: 'var(--color-success)', border: 'rgba(16,185,129,0.20)', labelEn: 'My Impact',     labelId: 'Dampak Saya' },
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { locale }  = useLocale();
  const panelRef    = useRef<HTMLDivElement>(null);
  const isOpen      = project !== null;

  /* Keyboard: Escape menutup modal */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  /* Lock body scroll saat modal terbuka */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* Focus trap: fokuskan modal saat terbuka */
  useEffect(() => {
    if (isOpen && panelRef.current) {
      panelRef.current.focus();
    }
  }, [isOpen]);

  if (!project) return null;

  const title = locale === 'en' ? project.titleEn : project.titleId;
  const psiData = {
    problem:  locale === 'en' ? project.psi.problemEn  : project.psi.problemId,
    solution: locale === 'en' ? project.psi.solutionEn : project.psi.solutionId,
    impact:   locale === 'en' ? project.psi.impactEn   : project.psi.impactId,
  };

  return (
    /* Backdrop overlay */
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-6"
      style={{
        background:    'rgba(8, 13, 26, 0.85)',
        backdropFilter:'blur(4px)',
        animation:     'fadeIn 0.2s ease forwards',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Panel */}
      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative max-w-[780px] w-full max-h-[85vh] overflow-y-auto rounded-[var(--radius-lg)] p-10 outline-none"
        style={{
          background: 'var(--bg-card)',
          border:     '1px solid var(--border-card)',
          boxShadow:  '0 20px 60px rgba(0,0,0,0.5)',
          animation:  'slideUp 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        }}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-5 w-8 h-8 flex items-center justify-center rounded-[var(--radius-sm)] text-lg font-mono transition-all hover:bg-[var(--badge-bg)]"
          style={{
            background: 'transparent',
            border:     'none',
            color:      'var(--text-muted)',
            cursor:     'pointer',
          }}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Title */}
        <h2
          id="modal-title"
          className="font-mono text-[20px] font-medium mb-2"
          style={{ color: 'var(--text-primary)', paddingRight: '32px' }}
        >
          {title}
        </h2>

        {/* Category tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.category.map((cat) => (
            <Badge key={cat} variant="stack">{cat}</Badge>
          ))}
        </div>

        {/* GitHub + Live links */}
        <div className="flex gap-3 flex-wrap mb-8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-[var(--radius-sm)] font-mono text-[12px] transition-all hover:opacity-80 hover:-translate-y-0.5"
              style={{
                background:    'rgba(255,255,255,0.08)',
                border:        '1px solid rgba(255,255,255,0.15)',
                color:         'var(--text-primary)',
                textDecoration:'none',
              }}
            >
              🔗 GitHub Repository
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-[var(--radius-sm)] font-mono text-[12px] transition-all hover:opacity-80 hover:-translate-y-0.5"
              style={{
                background:    'rgba(16,185,129,0.10)',
                border:        '1px solid rgba(16,185,129,0.30)',
                color:         'var(--color-success)',
                textDecoration:'none',
              }}
            >
              🌐 Live Demo
            </a>
          )}
          {!project.github && !project.live && (
            <span className="font-mono text-[12px]" style={{ color: 'var(--text-muted)' }}>
              Links available upon request
            </span>
          )}
        </div>

        {/* PSI Sections */}
        {(Object.entries(PSI_STYLES) as [keyof typeof PSI_STYLES, typeof PSI_STYLES.problem][]).map(([key, style]) => {
          const text = psiData[key];
          if (!text) return null;
          const label = locale === 'en' ? style.labelEn : style.labelId;
          return (
            <div key={key} className="mb-6">
              <span
                className="inline-block font-mono text-[10px] tracking-[2px] uppercase px-2.5 py-1 rounded-[var(--radius-sm)] mb-3"
                style={{
                  background: style.bg,
                  color:      style.text,
                  border:     `1px solid ${style.border}`,
                }}
              >
                {label}
              </span>
              <p
                className="text-[14px] leading-[1.75]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {text}
              </p>
            </div>
          );
        })}
      </div>

      {/* Keyframes inline */}
      <style>{`
        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
// src/features/projects/ProjectModal.tsx
'use client';

import { useEffect } from 'react';
import type { Project } from '@/data/index';
import { useLocale } from '@/hooks/useLocale';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { locale } = useLocale();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!project) return null;

  const title    = locale === 'en' ? project.titleEn       : project.titleId;
  const problem  = locale === 'en' ? project.psi.problemEn : project.psi.problemId;
  const solution = locale === 'en' ? project.psi.solutionEn: project.psi.solutionId;
  const impact   = locale === 'en' ? project.psi.impactEn  : project.psi.impactId;

  const sections = [
    { label: locale === 'en' ? 'The Problem' : 'Masalah',    cls: 'problem',  text: problem },
    { label: locale === 'en' ? 'The Solution': 'Solusi',     cls: 'solution', text: solution },
    { label: locale === 'en' ? 'My Impact'   : 'Dampak Saya',cls: 'impact',   text: impact },
  ];

  const sectionColors: Record<string, { bg: string; text: string; border: string }> = {
    problem:  { bg: 'rgba(239,68,68,0.08)',   text: 'var(--color-danger)',  border: 'rgba(239,68,68,0.20)' },
    solution: { bg: 'rgba(59,130,246,0.08)',  text: 'var(--text-link)',     border: 'rgba(59,130,246,0.20)' },
    impact:   { bg: 'rgba(16,185,129,0.08)',  text: 'var(--color-success)', border: 'rgba(16,185,129,0.20)' },
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-6"
      style={{ background: 'rgba(8,13,26,0.85)', backdropFilter: 'blur(2px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative max-w-[780px] w-full max-h-[85vh] overflow-y-auto rounded-[var(--radius-lg)] p-10"
        style={{
          background: 'var(--bg-card)',
          border:     '1px solid var(--border-card)',
          boxShadow:  '0 20px 60px rgba(0,0,0,0.4)',
        }}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-6 text-xl bg-transparent border-none cursor-pointer transition-colors hover:text-[var(--text-primary)]"
          style={{ color: 'var(--text-muted)' }}
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        {/* Title */}
        <h2 id="modal-title" className="font-mono text-[20px] font-medium mb-6"
            style={{ color: 'var(--text-primary)' }}>
          {title}
        </h2>

        {/* Links */}
        <div className="flex gap-3 flex-wrap mb-8">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="px-4 py-2 rounded-[var(--radius-sm)] font-mono text-[12px] transition-all hover:opacity-80"
               style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'var(--text-primary)' }}>
              🔗 GitHub Repository
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
               className="px-4 py-2 rounded-[var(--radius-sm)] font-mono text-[12px] transition-all hover:opacity-80"
               style={{ background: 'rgba(16,185,129,0.10)', border: '1px solid rgba(16,185,129,0.30)', color: 'var(--color-success)' }}>
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
        {sections.map(({ label, cls, text }) => {
          if (!text) return null;
          const colors = sectionColors[cls];
          return (
            <div key={cls} className="mb-6">
              <span
                className="inline-block font-mono text-[10px] tracking-[2px] uppercase px-2.5 py-1 rounded-[var(--radius-sm)] mb-2"
                style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
              >
                {label}
              </span>
              <p className="text-[14px] leading-[1.75]" style={{ color: 'var(--text-secondary)' }}>
                {text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
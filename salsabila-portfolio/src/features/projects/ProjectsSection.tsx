// src/features/projects/ProjectsSection.tsx — full update
'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Section }          from '@/components/layout/Section';
import { ProjectCard }      from './ProjectCard';
import { ProjectFilter }    from './ProjectFilter';
import { ProjectModal }     from './ProjectModal';
import { projects }         from '@/data/projects';
import type { Project }     from '@/data/index';

export function ProjectsSection() {
  const t = useTranslations('projects');
  const [activeFilter,    setActiveFilter]    = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [displayedCards,  setDisplayedCards]  = useState(projects);
  const [isAnimating,     setIsAnimating]     = useState(false);

  /**
   * Animated filter change:
   * 1. Fade out semua card yang ada (200ms)
   * 2. Ganti data
   * 3. Fade in card baru satu per satu (stagger)
   *
   * Kenapa dua-step? Karena kalau langsung ganti data,
   * React render ulang sebelum fade-out selesai → glitch.
   */
  const handleFilterChange = useCallback((key: string) => {
    if (key === activeFilter || isAnimating) return;
    setIsAnimating(true);

    // Step 1: fade-out current cards via CSS class
    const grid = document.getElementById('projects-grid');
    if (grid) {
      grid.style.opacity   = '0';
      grid.style.transform = 'translateY(8px)';
      grid.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    }

    setTimeout(() => {
      // Step 2: update data
      setActiveFilter(key);
      setDisplayedCards(
        key === 'all'
          ? projects
          : projects.filter((p) => p.category.includes(key))
      );

      // Step 3: fade-in
      if (grid) {
        grid.style.opacity   = '1';
        grid.style.transform = 'translateY(0)';
      }
      setIsAnimating(false);
    }, 220);
  }, [activeFilter, isAnimating]);

  return (
    <Section id="projects" variant="base">
      <div className="max-w-[1160px] mx-auto px-6">
        <p className="u-section-label u-reveal">{t('label')}</p>
        <h2 className="u-section-title u-reveal">{t('title')}</h2>
        <p className="u-section-desc u-reveal">{t('desc')}</p>

        <div className="u-reveal">
          <ProjectFilter
            active={activeFilter}
            onChange={handleFilterChange}
          />
        </div>

        <div
          id="projects-grid"
          className="grid gap-6 u-reveal"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }}
        >
          {displayedCards.map((project, i) => (
            <div
              key={project.id}
              style={{
                // Stagger entrance saat pertama kali load
                animationDelay: `${i * 60}ms`,
              }}
            >
              <ProjectCard
                project={project}
                onOpenModal={setSelectedProject}
              />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {displayedCards.length === 0 && (
          <div
            className="text-center py-16 font-mono text-[14px]"
            style={{ color: 'var(--text-muted)' }}
          >
            No projects in this category yet.
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}
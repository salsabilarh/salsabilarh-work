// src/features/projects/ProjectsSection.tsx
'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '@/components/layout/Section';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter } from './ProjectFilter';
import { ProjectModal } from './ProjectModal';
import { projects } from '@/data/projects';
import type { Project } from '@/data/index';

export function ProjectsSection() {
  const t = useTranslations('projects');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.category.includes(activeFilter));
  }, [activeFilter]);

  return (
    <Section id="projects" variant="base">
      <div className="max-w-[1160px] mx-auto px-6">
        <p className="u-section-label u-reveal">{t('label')}</p>
        <h2 className="u-section-title u-reveal">{t('title')}</h2>
        <p className="u-section-desc u-reveal">{t('desc')}</p>

        <div className="u-reveal">
          <ProjectFilter active={activeFilter} onChange={setActiveFilter} />
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6 u-reveal">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}
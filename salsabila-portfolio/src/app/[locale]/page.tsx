// src/app/[locale]/page.tsx — FINAL Sprint 1
import { HeroSection }        from '@/features/hero/HeroSection';
import { EducationSection }   from '@/features/education/EducationSection';
import { TechStackSection }   from '@/features/tech-stack/TechStackSection';
import { ProjectsSection }    from '@/features/projects/ProjectsSection';
import { ExperienceSection }  from '@/features/experience/ExperienceSection';
import { CertificatesSection } from '@/features/certificates/CertificatesSection';
import { ContactSection }     from '@/features/contact/ContactSection';
import { Navbar }             from '@/components/layout/Navbar';
import { Footer }             from '@/components/layout/Footer';
import { ScrollProgress }     from '@/components/ui/ScrollProgress';

export default function Home() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded font-mono text-sm text-white"
        style={{ background: 'var(--gradient-brand)' }}
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <EducationSection />
        <TechStackSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
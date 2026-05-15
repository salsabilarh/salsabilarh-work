// src/components/layout/Navbar.tsx
'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useLocale } from '@/hooks/useLocale';
import { Button } from '@/components/ui/Button';

const NAV_SECTIONS = [
  { href: '#education',    keyEn: 'Education',    keyId: 'Pendidikan' },
  { href: '#tech-stack',   keyEn: 'Tech Stack',   keyId: 'Teknologi' },
  { href: '#projects',     keyEn: 'Projects',     keyId: 'Proyek' },
  { href: '#experience',   keyEn: 'Experience',   keyId: 'Pengalaman' },
  { href: '#certificates', keyEn: 'Certificates', keyId: 'Sertifikat' },
  { href: '#contact',      keyEn: 'Contact',      keyId: 'Kontak' },
];

export function Navbar() {
  const { isDark, toggle: toggleTheme, mounted } = useTheme();
  const { locale, toggle: toggleLocale } = useLocale();
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['hero', 'education', 'tech-stack', 'projects', 'experience', 'certificates', 'contact'];
    const onScroll = () => {
      let current = 'hero';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-[100] py-4 backdrop-blur-[16px]"
        style={{
          background: 'var(--nav-bg)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
        aria-label="Primary navigation"
      >
        <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-mono text-[14px] font-medium flex items-center gap-2"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Back to top"
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: 'var(--gradient-brand)', animation: 'pulseDot 2s ease-in-out infinite' }}
              aria-hidden="true"
            />
            srh.dev
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-0.5 list-none" role="list">
            {NAV_SECTIONS.map(({ href, keyEn, keyId }) => {
              const sectionId = href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[13px] font-medium px-3 py-1.5 rounded-[var(--radius-sm)] transition-all"
                    style={{
                      color:      isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      background: isActive ? 'var(--badge-bg)'    : 'transparent',
                    }}
                  >
                    {locale === 'en' ? keyEn : keyId}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <Button variant="ctrl" onClick={toggleTheme} aria-label="Toggle colour theme">
              <span>{isDark ? '☀' : '☾'}</span>
              <span>{isDark ? (locale === 'en' ? 'Light' : 'Terang') : (locale === 'en' ? 'Dark' : 'Gelap')}</span>
            </Button>

            {/* Language toggle */}
            <Button variant="ctrl" onClick={toggleLocale} aria-label="Switch language">
              {locale === 'en' ? 'ID' : 'EN'}
            </Button>

            {/* Get In Touch CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-[var(--radius-sm)] text-[12px] font-mono font-medium text-white transition-all hover:opacity-85"
              style={{ background: 'var(--gradient-brand)' }}
            >
              {locale === 'en' ? 'Get In Touch' : 'Hubungi Saya'}
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1 p-2 rounded-[var(--radius-sm)]"
              style={{ border: '1px solid var(--border-subtle)' }}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-5 h-[1.5px]" style={{ background: 'var(--text-secondary)' }} />
              <span className="block w-5 h-[1.5px]" style={{ background: 'var(--text-secondary)' }} />
              <span className="block w-5 h-[1.5px]" style={{ background: 'var(--text-secondary)' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-6"
          style={{ background: 'var(--bg-base)' }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <button
            className="absolute top-4 right-6 text-2xl bg-none border-none cursor-pointer"
            style={{ color: 'var(--text-secondary)' }}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          {NAV_SECTIONS.map(({ href, keyEn, keyId }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xl transition-colors hover:text-[var(--text-primary)]"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setMobileOpen(false)}
            >
              {locale === 'en' ? keyEn : keyId}
            </a>
          ))}

          <div className="flex gap-3 mt-4">
            <Button variant="ctrl" onClick={() => { toggleTheme(); setMobileOpen(false); }}>
              {isDark ? '☀' : '☾'} {isDark ? (locale === 'en' ? 'Light' : 'Terang') : (locale === 'en' ? 'Dark' : 'Gelap')}
            </Button>
            <Button variant="ctrl" onClick={() => { toggleLocale(); setMobileOpen(false); }}>
              {locale === 'en' ? 'ID' : 'EN'}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
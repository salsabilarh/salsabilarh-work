// src/components/layout/Footer.tsx
import { useTranslations } from 'next-intl';

export function Footer() {
  return (
    <footer
      className="py-8 relative z-[1]"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
        <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
          © 2026 Salsabila Rafifah Handifa · Fullstack Developer · Jakarta Selatan, Indonesia
        </p>
        <nav className="flex gap-4" aria-label="Footer links">
          {[
            { href: 'https://github.com/salsabilarh', label: 'GitHub' },
            { href: 'https://linkedin.com/in/salsabila-rh', label: 'LinkedIn' },
            { href: 'mailto:salsabilarafifahh@gmail.com', label: 'Email' },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="font-mono text-xs transition-colors hover:text-[var(--text-link)]"
              style={{ color: 'var(--text-muted)' }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
// src/features/hero/HeroSection.tsx
import { useTranslations } from 'next-intl';
import { AnimatedTerminal } from './AnimatedTerminal';

const STATS = [
  { value: '50+',  labelKey: 'stats.apis' },
  { value: '100%', labelKey: 'stats.coverage' },
  { value: '300+', labelKey: 'stats.users' },
  { value: '#1',   label:    'HackIn Fest 2025' },
];

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="max-w-[1160px] w-full mx-auto px-6 pt-24 pb-7">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 items-center">

          {/* Left: Copy */}
          <div>
            {/* Availability pill */}
            <div
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-mono text-[12px] tracking-wide mb-4 u-reveal"
              style={{
                background: 'rgba(59,130,246,0.10)',
                border:     '1px solid rgba(59,130,246,0.25)',
                color:      'var(--color-blue)',
              }}
            >
              ⚡&nbsp;{t('availability')}
            </div>

            {/* Name */}
            <h1
              className="font-mono font-medium leading-[1.15] mb-4 u-reveal"
              style={{
                fontSize:      'clamp(30px, 4.2vw, 50px)',
                color:         'var(--text-primary)',
                letterSpacing: '-0.5px',
              }}
            >
              Salsabila Rafifah Handifa
            </h1>

            {/* Role line */}
            <div className="flex items-center gap-4 mb-6 u-reveal">
              <span
                className="w-9 h-[1.5px] flex-shrink-0"
                style={{ background: 'var(--color-blue)' }}
                aria-hidden="true"
              />
              <span
                className="font-mono text-[12px] font-semibold tracking-[2px] uppercase"
                style={{ color: 'var(--color-blue)' }}
              >
                {t('role')}
              </span>
            </div>

            {/* Tagline */}
            <p
              className="text-[15.5px] leading-[1.8] max-w-[520px] mb-8 u-reveal"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('tagline')}
            </p>

            {/* CTAs */}
            <div className="flex gap-4 flex-wrap mb-10 u-reveal">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-md)] font-mono text-[13px] font-medium text-white transition-all hover:opacity-85 hover:-translate-y-0.5"
                style={{ background: 'var(--gradient-brand)' }}
              >
                {t('viewProjects')}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[var(--radius-md)] font-mono text-[13px] font-medium transition-all hover:bg-[var(--badge-bg)] hover:border-[var(--color-blue)] hover:-translate-y-0.5"
                style={{
                  background: 'transparent',
                  color:      'var(--text-primary)',
                  border:     '1px solid var(--border-strong)',
                }}
              >
                {t('getInTouch')}
              </a>
            </div>

            {/* Stats row */}
            <div
              className="flex gap-10 pt-6 flex-wrap u-reveal"
              style={{ borderTop: '1px solid var(--border-subtle)' }}
            >
              {STATS.map(({ value, labelKey, label }) => (
                <div key={value} className="flex flex-col gap-1">
                  <span
                    className="font-mono text-[20px] font-medium leading-none"
                    style={{ color: 'var(--color-blue)' }}
                  >
                    {value}
                  </span>
                  <span
                    className="font-mono text-[9px] tracking-wide uppercase"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {labelKey ? t(labelKey) : label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="hidden lg:block u-reveal">
            <AnimatedTerminal />
          </div>

        </div>
      </div>
    </section>
  );
}
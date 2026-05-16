// src/features/contact/ContactSection.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '@/components/layout/Section';
import { ContactForm } from './ContactForm';
import { Toast } from '@/components/ui/Toast';
import { useLocale } from '@/hooks/useLocale';

const CONTACT_CHANNELS = [
  { icon: '📧', label: 'Email',     value: 'salsabilarafifahh@gmail.com', href: 'mailto:salsabilarafifahh@gmail.com', copyable: true },
  { icon: '💼', label: 'LinkedIn',  value: 'linkedin.com/in/salsabila-rh', href: 'https://linkedin.com/in/salsabila-rh' },
  { icon: '💻', label: 'GitHub',    value: 'github.com/salsabilarh',       href: 'https://github.com/salsabilarh' },
  { icon: '📱', label: 'WhatsApp',  value: '+62 812-2243-0712',            href: 'https://wa.me/6281222430712', copyable: true },
];

export function ContactSection() {
  const t = useTranslations('contact');
  const { locale } = useLocale();
  const [toast, setToast] = useState({ visible: false, message: '' });

  const showToast = (msg: string) => setToast({ visible: true, message: msg });

  const handleCardClick = (channel: typeof CONTACT_CHANNELS[0], e: React.MouseEvent) => {
    if (channel.copyable) {
      e.preventDefault();
      navigator.clipboard.writeText(channel.value)
        .then(() => showToast(locale === 'en' ? `✓ Copied: ${channel.value}` : `✓ Disalin: ${channel.value}`))
        .catch(() => window.open(channel.href, '_blank'));
    }
  };

  return (
    <Section id="contact" variant="base">
      <div className="max-w-[1160px] mx-auto px-6">
        <p className="u-section-label u-reveal">{t('label')}</p>
        <h2 className="u-section-title u-reveal">{t('title')}</h2>
        <p className="u-section-desc u-reveal">{t('desc')}</p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start mt-12 u-reveal">
          {/* Contact channels */}
          <div className="flex flex-col gap-3">
            {CONTACT_CHANNELS.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={(e) => handleCardClick(ch, e)}
                className="flex items-center gap-4 px-4 py-3 rounded-[var(--radius-md)] transition-all hover:translate-x-1"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-card)')}
              >
                <div className="w-[38px] h-[38px] flex-shrink-0 flex items-center justify-center rounded-[var(--radius-sm)] text-base"
                     style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)' }}>
                  {ch.icon}
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-wide uppercase" style={{ color: 'var(--text-muted)' }}>
                    {ch.label}
                  </p>
                  <p className="text-[13.5px]" style={{ color: 'var(--text-primary)' }}>{ch.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <ContactForm onToast={showToast} />
        </div>
      </div>

      <Toast
        message={toast.message}
        visible={toast.visible}
        onHide={() => setToast({ visible: false, message: '' })}
      />
    </Section>
  );
}
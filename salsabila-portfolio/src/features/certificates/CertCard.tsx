// src/features/certificates/CertCard.tsx
import type { Certificate } from '@/data/index';
import { useLocale } from '@/hooks/useLocale';

interface CertCardProps { certificate: Certificate; }

export function CertCard({ certificate: cert }: CertCardProps) {
  const { locale } = useLocale();
  const title = locale === 'en' ? cert.titleEn : cert.titleId;

  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 px-4 py-3 rounded-[var(--radius-md)] transition-all hover:translate-x-1 group"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', textDecoration: 'none' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)';
        (e.currentTarget as HTMLElement).style.boxShadow  = '0 4px 24px var(--glow)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-card)';
        (e.currentTarget as HTMLElement).style.boxShadow  = 'none';
      }}
    >
      <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-[var(--radius-sm)] text-xl"
           style={{ background: 'var(--badge-bg)' }}>
        {cert.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-mono text-[13px] font-medium leading-[1.4] mb-1"
           style={{ color: 'var(--text-primary)' }}>
          {title}
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11.5px]" style={{ color: 'var(--text-secondary)' }}>{cert.issuer}</span>
          <span className="font-mono text-[10.5px] px-1.5 py-0.5 rounded-full"
                style={{ color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }}>
            {cert.date}
          </span>
        </div>
      </div>
      <span className="text-sm flex-shrink-0 transition-transform group-hover:translate-x-1"
            style={{ color: 'var(--text-link)' }}>
        →
      </span>
    </a>
  );
}
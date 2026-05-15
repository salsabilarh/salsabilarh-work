// src/components/ui/Badge.tsx

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'highlight' | 'stack' | 'tag';
  color?: string;
}

export function Badge({ children, variant = 'highlight', color }: BadgeProps) {
  if (variant === 'highlight') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10.5px] font-mono rounded-[var(--radius-sm)]"
        style={{
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.20)',
          color: 'var(--color-success)',
        }}>
        {children}
      </span>
    );
  }

  if (variant === 'stack') {
    return (
      <span className="px-2 py-0.5 text-[10.5px] font-mono rounded-[var(--radius-sm)]"
        style={{
          background: 'var(--badge-bg)',
          border: '1px solid var(--badge-border)',
          color: 'var(--text-secondary)',
        }}>
        {children}
      </span>
    );
  }

  // tag variant — pakai custom color dari TAG_CONFIG
  return (
    <span className="inline-block px-2 py-0.5 text-[10px] font-mono tracking-wide uppercase rounded-full"
      style={{
        background: color ? `${color}14` : 'var(--badge-bg)',
        border: `1px solid ${color ? `${color}40` : 'var(--badge-border)'}`,
        color: color ?? 'var(--text-secondary)',
      }}>
      {children}
    </span>
  );
}
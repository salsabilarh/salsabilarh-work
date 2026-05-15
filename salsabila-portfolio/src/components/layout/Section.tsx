// src/components/layout/Section.tsx
// ═══════════════════════════════════════════════════
// Wrapper untuk semua section.
// Kenapa dibuat? Karena pola section--surface /
// section--base berulang di setiap section.
// DRY principle!
// ═══════════════════════════════════════════════════

interface SectionProps {
  id: string;
  variant?: 'base' | 'surface';
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, variant = 'base', children, className = '' }: SectionProps) {
  const styles = {
    base:    { background: 'var(--bg-base)' },
    surface: {
      background:   'var(--bg-surface)',
      borderTop:    '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
    },
  };

  return (
    <section
      id={id}
      className={`relative z-[1] py-24 ${className}`}
      style={styles[variant]}
    >
      {children}
    </section>
  );
}
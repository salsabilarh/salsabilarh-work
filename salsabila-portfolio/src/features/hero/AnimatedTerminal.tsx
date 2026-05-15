// src/features/hero/AnimatedTerminal.tsx
'use client';

import { useTypewriter } from '@/hooks/useTypewriter';

const COLOR_MAP: Record<string, string> = {
  success: 'var(--color-success)',
  output:  'var(--text-secondary)',
  '':      'transparent',
};

export function AnimatedTerminal() {
  const { cmdText, outputLines } = useTypewriter();

  return (
    <div
      className="rounded-[var(--radius-lg)] overflow-hidden"
      style={{
        background:  'var(--bg-card)',
        border:      '1px solid var(--border-card)',
        boxShadow:   '0 0 60px var(--glow)',
      }}
      aria-label="Code terminal animation"
      role="img"
    >
      {/* Terminal bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)' }}
      >
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f56' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#27c93f' }} />
        </div>
        <span className="ml-auto font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
          salsabilarh ~ portfolio
        </span>
      </div>

      {/* Terminal body */}
      <div
        className="p-6 font-mono text-[12.5px] leading-[1.85] min-h-[170px] max-h-[210px] overflow-y-auto"
      >
        {/* Command line */}
        <div>
          <span style={{ color: 'var(--text-muted)' }}>~ </span>
          <span style={{ color: 'var(--text-link)' }}>{cmdText}</span>
          <span
            className="inline-block w-2 h-[14px] ml-0.5 align-middle"
            style={{ background: 'var(--color-blue)', animation: 'blink 1s step-end infinite' }}
            aria-hidden="true"
          />
        </div>

        {/* Output lines */}
        {outputLines.map((line, i) => (
          <div key={i} style={{ color: COLOR_MAP[line.cls] ?? 'var(--text-secondary)' }}>
            {line.text || '\u00A0'}
          </div>
        ))}
      </div>
    </div>
  );
}
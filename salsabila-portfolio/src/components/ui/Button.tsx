// src/components/ui/Button.tsx
'use client';

import { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ctrl';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-mono font-medium cursor-pointer transition-all';

  const variants = {
    primary:   'px-6 py-3 bg-gradient-to-br from-blue-500 to-cyan-400 text-white border-none rounded-[var(--radius-md)] hover:opacity-85 hover:-translate-y-0.5',
    secondary: 'px-5 py-3 bg-transparent text-[var(--text-primary)] border border-[var(--border-strong)] rounded-[var(--radius-md)] hover:bg-[var(--badge-bg)] hover:border-[var(--color-blue)] hover:-translate-y-0.5',
    ctrl:      'px-3 py-1.5 bg-transparent text-[var(--text-secondary)] border border-[var(--border-subtle)] rounded-[var(--radius-sm)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] hover:bg-[var(--badge-bg)]',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
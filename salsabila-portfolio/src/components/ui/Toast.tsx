// src/components/ui/Toast.tsx
'use client';

import { useEffect } from 'react';

interface ToastProps {
  message: string;
  visible: boolean;
  onHide: () => void;
}

export function Toast({ message, visible, onHide }: ToastProps) {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onHide, 3500);
    return () => clearTimeout(timer);
  }, [visible, onHide]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-[9999] px-5 py-3 font-mono text-[13px] rounded-[var(--radius-md)] pointer-events-none transition-all duration-200"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-strong)',
        color: 'var(--text-primary)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
      }}
    >
      {message}
    </div>
  );
}
// src/features/contact/ContactForm.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from '@/hooks/useLocale';

interface ContactFormProps {
  onToast: (msg: string) => void;
}

export function ContactForm({ onToast }: ContactFormProps) {
  const t = useTranslations('contact');
  const { locale } = useLocale();

  const [form, setForm] = useState({
    name: '', company: '', email: '', position: '', message: '',
  });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      onToast(locale === 'en'
        ? 'Please fill in the required fields.'
        : 'Mohon lengkapi field yang diperlukan.');
      return;
    }
    onToast(locale === 'en'
      ? "✓ Message sent! I'll get back to you soon."
      : '✓ Pesan terkirim! Saya akan segera menghubungi Anda.');
    setForm({ name: '', company: '', email: '', position: '', message: '' });
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px',
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    outline: 'none',
  };

  return (
    <div
      className="p-8 rounded-[var(--radius-lg)]"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}
    >
      <p className="font-mono text-[14px] mb-6 pb-4"
         style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)' }}>
        {t('formTitle')}
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { id: 'name',    label: t('yourName'),  type: 'text',  key: 'name' as const },
          { id: 'company', label: t('company'),   type: 'text',  key: 'company' as const },
        ].map(({ id, label, type, key }) => (
          <div key={id}>
            <label className="block font-mono text-[11px] tracking-[1.5px] uppercase mb-2"
                   style={{ color: 'var(--text-muted)' }} htmlFor={id}>
              {label}
            </label>
            <input id={id} type={type} value={form[key]} style={inputStyle}
                   onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))} />
          </div>
        ))}
      </div>

      {[
        { id: 'email',    label: 'Email',        type: 'email', key: 'email' as const },
        { id: 'position', label: t('roleOpportunity'), type: 'text', key: 'position' as const },
      ].map(({ id, label, type, key }) => (
        <div key={id} className="mb-4">
          <label className="block font-mono text-[11px] tracking-[1.5px] uppercase mb-2"
                 style={{ color: 'var(--text-muted)' }} htmlFor={id}>
            {label}
          </label>
          <input id={id} type={type} value={form[key]} style={inputStyle}
                 onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))} />
        </div>
      ))}

      <div className="mb-4">
        <label className="block font-mono text-[11px] tracking-[1.5px] uppercase mb-2"
               style={{ color: 'var(--text-muted)' }} htmlFor="message">
          {t('message')}
        </label>
        <textarea id="message" value={form.message} rows={4}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-3 rounded-[var(--radius-md)] font-mono text-[13px] font-medium text-white transition-all hover:opacity-85"
        style={{ background: 'var(--gradient-brand)', border: 'none', cursor: 'pointer' }}
      >
        {t('sendMessage')}
      </button>
    </div>
  );
}
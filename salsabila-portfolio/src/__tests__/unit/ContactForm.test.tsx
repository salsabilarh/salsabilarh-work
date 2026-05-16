// src/__tests__/unit/ContactForm.test.tsx
// ═══════════════════════════════════════════════════
// Test ContactForm — fokus pada validasi required fields.
// Ini adalah unit test paling penting karena form adalah
// touchpoint langsung dengan recruiter.
// ═══════════════════════════════════════════════════

import { render, screen, fireEvent } from '@testing-library/react';
import { ContactForm }               from '@/features/contact/ContactForm';

// Mock next-intl dan useLocale
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const messages: Record<string, string> = {
      'formTitle':       'Send a Message',
      'yourName':        'Your Name',
      'company':         'Company',
      'roleOpportunity': 'Role / Opportunity',
      'message':         'Message',
      'sendMessage':     'Send Message →',
    };
    return messages[key] ?? key;
  },
}));

jest.mock('@/hooks/useLocale', () => ({
  useLocale: () => ({ locale: 'en', toggle: jest.fn() }),
}));

describe('ContactForm', () => {
  const mockOnToast = jest.fn();

  beforeEach(() => {
    mockOnToast.mockClear();
  });

  it('renders all form fields', () => {
    render(<ContactForm onToast={mockOnToast} />);

    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('shows error toast when required fields are empty', () => {
    render(<ContactForm onToast={mockOnToast} />);

    const submitBtn = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitBtn);

    expect(mockOnToast).toHaveBeenCalledWith(
      'Please fill in the required fields.'
    );
  });

  it('shows error toast when only name is filled', () => {
    render(<ContactForm onToast={mockOnToast} />);

    fireEvent.change(screen.getByLabelText(/your name/i), {
      target: { value: 'Recruiter Test' },
    });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(mockOnToast).toHaveBeenCalledWith(
      'Please fill in the required fields.'
    );
  });

  it('shows success toast when all required fields are filled', () => {
    render(<ContactForm onToast={mockOnToast} />);

    fireEvent.change(screen.getByLabelText(/your name/i), {
      target: { value: 'Recruiter Test' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'recruiter@company.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Hello, I am interested in hiring you.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(mockOnToast).toHaveBeenCalledWith(
      expect.stringContaining("Message sent!")
    );
  });

  it('clears form after successful submission', () => {
    render(<ContactForm onToast={mockOnToast} />);

    const nameInput = screen.getByLabelText(/your name/i) as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    fireEvent.change(screen.getByLabelText(/email/i),   { target: { value: 'test@email.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Test message content.' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(nameInput.value).toBe('');
  });
});
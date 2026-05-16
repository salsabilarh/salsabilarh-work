// src/__tests__/unit/useTheme.test.ts
import { renderHook, act } from '@testing-library/react';

// Mock next-themes
const mockSetTheme = jest.fn();
let currentTheme   = 'dark';

jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme:         currentTheme,
    setTheme:      mockSetTheme,
    resolvedTheme: currentTheme,
  }),
}));

// Mock useState untuk mounted
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: (fn: () => void) => fn(),
  useState:  (init: boolean) => [true, jest.fn()],
}));

import { useTheme } from '@/hooks/useTheme';

describe('useTheme', () => {
  beforeEach(() => {
    mockSetTheme.mockClear();
    currentTheme = 'dark';
  });

  it('returns isDark: true when theme is dark', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.isDark).toBe(true);
  });

  it('toggle calls setTheme with light when current is dark', () => {
    const { result } = renderHook(() => useTheme());
    act(() => { result.current.toggle(); });
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });

  it('toggle calls setTheme with dark when current is light', () => {
    currentTheme = 'light';
    const { result } = renderHook(() => useTheme());
    act(() => { result.current.toggle(); });
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });
});
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface AccessibilityState {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  darkMode: boolean;
  screenReaderMode: boolean;
}

interface AccessibilityContextType extends AccessibilityState {
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
  toggleDarkMode: () => void;
  toggleScreenReader: () => void;
}

const defaultState: AccessibilityState = {
  fontSize: 16,
  highContrast: false,
  reducedMotion: false,
  darkMode: false,
  screenReaderMode: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AccessibilityState>(() => {
    try {
      const saved = localStorage.getItem('accessibility-preferences');
      if (saved) return { ...defaultState, ...JSON.parse(saved) };
    } catch {}
    return defaultState;
  });

  useEffect(() => {
    localStorage.setItem('accessibility-preferences', JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-base', `${state.fontSize}px`);
    document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-high-contrast', String(state.highContrast));
    document.documentElement.setAttribute('data-reduced-motion', String(state.reducedMotion));
    document.body.setAttribute('role', state.screenReaderMode ? 'application' : undefined as any);
  }, [state]);

  const increaseFontSize = useCallback(() => {
    setState(s => ({ ...s, fontSize: Math.min(s.fontSize + 2, 24) }));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setState(s => ({ ...s, fontSize: Math.max(s.fontSize - 2, 12) }));
  }, []);

  const resetFontSize = useCallback(() => {
    setState(s => ({ ...s, fontSize: 16 }));
  }, []);

  const toggleHighContrast = useCallback(() => {
    setState(s => ({ ...s, highContrast: !s.highContrast }));
  }, []);

  const toggleReducedMotion = useCallback(() => {
    setState(s => ({ ...s, reducedMotion: !s.reducedMotion }));
  }, []);

  const toggleDarkMode = useCallback(() => {
    setState(s => ({ ...s, darkMode: !s.darkMode }));
  }, []);

  const toggleScreenReader = useCallback(() => {
    setState(s => ({ ...s, screenReaderMode: !s.screenReaderMode }));
  }, []);

  return (
    <AccessibilityContext.Provider value={{
      ...state,
      increaseFontSize,
      decreaseFontSize,
      resetFontSize,
      toggleHighContrast,
      toggleReducedMotion,
      toggleDarkMode,
      toggleScreenReader,
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error('useAccessibility must be used within AccessibilityProvider');
  return ctx;
}

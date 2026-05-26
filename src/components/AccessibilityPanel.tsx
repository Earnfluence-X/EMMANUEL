import { useState } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';

export default function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const {
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    highContrast,
    toggleHighContrast,
    reducedMotion,
    toggleReducedMotion,
    darkMode,
    toggleDarkMode,
    screenReaderMode,
    toggleScreenReader,
  } = useAccessibility();

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
        }}
        onClick={() => setOpen(!open)}
        aria-label="Open accessibility settings"
        aria-expanded={open}
        aria-controls="a11y-panel"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="4.5" r="2.5" />
          <path d="M12 7v6" />
          <path d="M7 11.5l5 2.5 5-2.5" />
          <path d="M9 21l3-8 3 8" />
        </svg>
      </button>

      {/* Panel */}
      <div
        id="a11y-panel"
        className={`fixed bottom-24 right-6 z-[60] w-80 max-w-[calc(100vw-48px)] rounded-2xl glass-card p-6 transition-all duration-400 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        role="dialog"
        aria-label="Accessibility settings"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-bold text-[var(--text-primary)]">Accessibility</h3>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[var(--card-bg)] transition-colors"
            aria-label="Close accessibility settings"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Font Size */}
        <div className="mb-5">
          <label className="text-sm font-medium text-[var(--text-secondary)] mb-2 block">
            Font Size: {fontSize}px
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={decreaseFontSize}
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-lg font-bold hover:bg-[var(--card-bg)] transition-colors"
              aria-label="Decrease font size"
            >
              A−
            </button>
            <button
              onClick={resetFontSize}
              className="flex-1 h-10 rounded-lg glass flex items-center justify-center text-sm font-medium hover:bg-[var(--card-bg)] transition-colors"
              aria-label="Reset font size to default"
            >
              Reset
            </button>
            <button
              onClick={increaseFontSize}
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-lg font-bold hover:bg-[var(--card-bg)] transition-colors"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>
        </div>

        {/* Toggles */}
        <div className="space-y-3">
          {/* Dark Mode */}
          <ToggleRow
            label="Dark Mode"
            checked={darkMode}
            onChange={toggleDarkMode}
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            }
          />

          {/* High Contrast */}
          <ToggleRow
            label="High Contrast"
            checked={highContrast}
            onChange={toggleHighContrast}
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20" />
                <path d="M12 2a10 10 0 010 20" fill="currentColor" />
              </svg>
            }
          />

          {/* Reduced Motion */}
          <ToggleRow
            label="Reduced Motion"
            checked={reducedMotion}
            onChange={toggleReducedMotion}
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            }
          />

          {/* Screen Reader */}
          <ToggleRow
            label="Screen Reader Optimized"
            checked={screenReaderMode}
            onChange={toggleScreenReader}
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            }
          />
        </div>
      </div>
    </>
  );
}

function ToggleRow({
  label,
  checked,
  onChange,
  icon,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <span className="text-[var(--text-secondary)]">{icon}</span>
        <span className="text-sm font-medium text-[var(--text-primary)]">{label}</span>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        aria-label={`${label}: ${checked ? 'on' : 'off'}`}
        onClick={onChange}
        className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
          checked ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gray-300'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}

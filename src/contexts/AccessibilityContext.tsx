import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface AccessibilityPreferences {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  fontSize: number;
  lineHeight: number;
}

interface Shortcut {
  key: string;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  metaKey?: boolean;
  description: string;
  action: () => void;
}

interface AccessibilityContextType {
  preferences: AccessibilityPreferences;
  updatePreferences: (newPrefs: Partial<AccessibilityPreferences>) => void;
  registerShortcut: (shortcut: Shortcut) => () => void;
  announce: (message: string, priority?: 'polite' | 'assertive') => void;
  setFocus: (element: HTMLElement) => void;
  trapFocus: (element: HTMLElement) => () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) throw new Error('useAccessibility must be used within AccessibilityProvider');
  return context;
};

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(() => {
    const saved = localStorage.getItem('accessibility_preferences');
    if (saved) return JSON.parse(saved);
    return {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      fontSize: 16,
      lineHeight: 1.5,
    };
  });

  const [shortcuts] = useState<Map<string, Shortcut>>(new Map());

  useEffect(() => {
    localStorage.setItem('accessibility_preferences', JSON.stringify(preferences));

    // Apply CSS classes
    const root = document.documentElement;
    root.style.setProperty('--base-font-size', `${preferences.fontSize}px`);
    root.style.setProperty('--line-height', preferences.lineHeight.toString());
    if (preferences.highContrast) root.classList.add('high-contrast');
    else root.classList.remove('high-contrast');
    if (preferences.reducedMotion) root.classList.add('reduced-motion');
    else root.classList.remove('reduced-motion');
  }, [preferences]);

  const updatePreferences = useCallback((newPrefs: Partial<AccessibilityPreferences>) => {
    setPreferences(prev => ({ ...prev, ...newPrefs }));
  }, []);

  const registerShortcut = useCallback((shortcut: Shortcut) => {
    const id = `${shortcut.ctrlKey ? 'Ctrl+' : ''}${shortcut.shiftKey ? 'Shift+' : ''}${shortcut.altKey ? 'Alt+' : ''}${shortcut.metaKey ? 'Meta+' : ''}${shortcut.key}`;
    shortcuts.set(id, shortcut);
    return () => shortcuts.delete(id);
  }, [shortcuts]);

  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcer = document.getElementById(`announcer-${priority}`);
    if (announcer) {
      announcer.textContent = message;
    } else {
      const div = document.createElement('div');
      div.id = `announcer-${priority}`;
      div.setAttribute('aria-live', priority);
      div.setAttribute('aria-atomic', 'true');
      div.className = 'sr-only';
      document.body.appendChild(div);
      setTimeout(() => { div.textContent = message; }, 100);
    }
  }, []);

  const setFocus = useCallback((element: HTMLElement) => {
    if (element) {
      element.tabIndex = -1;
      element.focus();
    }
  }, []);

  const trapFocus = useCallback((container: HTMLElement) => {
    const focusable = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return () => {};

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    first.focus();

    return () => container.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check registered shortcuts
      for (const shortcut of shortcuts.values()) {
        if (
          (shortcut.ctrlKey === e.ctrlKey) &&
          (shortcut.shiftKey === e.shiftKey) &&
          (shortcut.altKey === e.altKey) &&
          (shortcut.metaKey === e.metaKey) &&
          shortcut.key.toLowerCase() === e.key.toLowerCase()
        ) {
          e.preventDefault();
          shortcut.action();
          return;
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);

  return (
    <AccessibilityContext.Provider value={{
      preferences,
      updatePreferences,
      registerShortcut,
      announce,
      setFocus,
      trapFocus,
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

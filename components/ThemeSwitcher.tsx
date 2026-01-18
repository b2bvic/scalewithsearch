import React from 'react';
import { useTheme } from '../context/ThemeContext';

const themes = [
  { id: 'light', label: 'Light', icon: '☀️' },
  { id: 'dark', label: 'Dark', icon: '🌙' },
  { id: 'ultradark', label: 'OLED', icon: '🔴' }
] as const;

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 border border-[var(--border)] p-1">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`w-8 h-8 flex items-center justify-center text-sm transition-all ${
            theme === t.id
              ? 'bg-[var(--accent)] text-white'
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--panel)]'
          }`}
          title={t.label}
          aria-label={`Switch to ${t.label} theme`}
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;

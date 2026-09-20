import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center justify-center p-2 rounded-lg transition-all duration-200 cursor-pointer 
        border border-gray-200/80 hover:border-gray-300 bg-white/80 hover:bg-gray-100/90 text-gray-700
        dark:border-gray-700/80 dark:hover:border-gray-600 dark:bg-gray-800/80 dark:hover:bg-gray-700/90 dark:text-gray-200
        shadow-xs hover:shadow-sm active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600 ${className}`}
    >
      <span className="sr-only">
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
      
      {/* Icon with smooth rotate/scale transitions */}
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <Sun
          className={`w-5 h-5 text-amber-500 transition-all duration-300 absolute ${
            isDark
              ? 'transform rotate-0 scale-100 opacity-100'
              : 'transform rotate-90 scale-0 opacity-0 pointer-events-none'
          }`}
        />
        <Moon
          className={`w-5 h-5 text-slate-700 dark:text-slate-300 transition-all duration-300 absolute ${
            isDark
              ? 'transform -rotate-90 scale-0 opacity-0 pointer-events-none'
              : 'transform rotate-0 scale-100 opacity-100'
          }`}
        />
      </div>
    </button>
  );
}

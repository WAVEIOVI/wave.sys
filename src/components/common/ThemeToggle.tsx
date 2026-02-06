import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export default function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-45 transition-transform duration-300" />
            ) : (
                <Moon className="w-5 h-5 text-gray-700 group-hover:-rotate-12 transition-transform duration-300" />
            )}
        </button>
    );
}

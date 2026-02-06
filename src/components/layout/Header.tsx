import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../common/ThemeToggle';
import LanguageSwitcher from '../LanguageSwitcher';
import GlobalSearch from '../search/GlobalSearch';
import { Search } from 'lucide-react';

export default function Header() {
    const { t } = useTranslation();
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo Section */}
                        <Link to="/" className="flex items-center gap-4 group">
                            <img
                                src="/logos/wave-io-logo.svg"
                                alt="WAVE IO"
                                className="h-10 w-10 transition-transform group-hover:scale-110"
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Powered by WAVE IO
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-500">
                                    Consultant for SS PLUS
                                </span>
                            </div>
                        </Link>

                        {/* Search Trigger (Center-Left) */}
                        <div className="hidden md:flex flex-1 max-w-lg mx-8">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="w-full relative flex items-center h-10 px-4 text-sm text-gray-500 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-800/80 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                            >
                                <Search className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                                <span>{t('common.search')}...</span>
                                <span className="absolute right-3 rtl:right-auto rtl:left-3 flex items-center pointer-events-none">
                                    <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-1.5 font-mono text-[10px] font-medium text-gray-500 dark:text-gray-400">
                                        <span className="text-xs">⌘</span>K
                                    </kbd>
                                </span>
                            </button>
                        </div>

                        {/* SS PLUS Logo (Center-Right on Desktop, Hidden on Mobile) */}
                        <div className="hidden md:flex items-center gap-6 mr-4 rtl:mr-0 rtl:ml-4">
                            <nav className="flex items-center gap-4">
                                <Link to="/records" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                    {t('records.title')}
                                </Link>
                                <Link to="/audits" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                    {t('audit.title')}
                                </Link>
                            </nav>
                            <img
                                src="/logos/logo-ss-plus-hor.png"
                                alt="SS PLUS"
                                className="h-10 object-contain border-l rtl:border-l-0 rtl:border-r border-gray-200 dark:border-gray-700 pl-6 rtl:pl-0 rtl:pr-6"
                            />
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-2 sm:gap-4">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                <Search className="w-5 h-5" />
                            </button>
                            <LanguageSwitcher />
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </header>

            <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}

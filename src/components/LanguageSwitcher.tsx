import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
];

export default function LanguageSwitcher() {
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="relative group">
            <button
                className="flex items-center gap-2 px-3 py-2 rounded-lg
                   bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700
                   border border-gray-200 dark:border-gray-700
                   transition-colors duration-200"
                title={t('language.select')}
            >
                <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {languages.find(l => l.code === i18n.language)?.nativeName || 'EN'}
                </span>
            </button>

            {/* Dropdown */}
            <div className="absolute right-0 mt-2 w-48 py-2
                      bg-white dark:bg-gray-800
                      border border-gray-200 dark:border-gray-700
                      rounded-lg shadow-lg
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-200
                      z-50">
                {languages.map((language) => (
                    <button
                        key={language.code}
                        onClick={() => changeLanguage(language.code)}
                        className={`
              w-full px-4 py-2 text-start text-sm
              hover:bg-gray-100 dark:hover:bg-gray-700
              transition-colors duration-150
              ${i18n.language === language.code
                                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                                : 'text-gray-700 dark:text-gray-300'
                            }
            `}
                    >
                        <div className="flex items-center justify-between">
                            <span>{language.nativeName}</span>
                            {i18n.language === language.code && (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

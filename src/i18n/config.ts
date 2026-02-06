import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';
import arTranslations from './locales/ar.json';

const resources = {
    en: { translation: enTranslations },
    fr: { translation: frTranslations },
    ar: { translation: arTranslations }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: false,

        interpolation: {
            escapeValue: false // React already escapes
        },

        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    });

// Add RTL support
i18n.on('languageChanged', (lng) => {
    const dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lng);
});

export default i18n;

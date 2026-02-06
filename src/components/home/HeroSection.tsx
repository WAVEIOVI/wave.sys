import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 gradient-hero opacity-10 dark:opacity-5"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                        <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Premium Management System
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white font-heading">
                        SS PLUS
                        <br />
                        <span className="text-gradient">Management System</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Comprehensive documentation and procedures for all company operations.
                        Access policies, guidelines, and templates in one centralized platform.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">7</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Documents</div>
                        </div>
                        <div className="h-12 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">280+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Sections</div>
                        </div>
                        <div className="h-12 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">100%</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Searchable</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

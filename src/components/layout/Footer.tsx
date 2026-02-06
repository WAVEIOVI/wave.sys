export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-auto bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Logos */}
                    <div className="flex items-center gap-6">
                        <img
                            src="/logos/wave-io-logo.svg"
                            alt="WAVE IO"
                            className="h-10 w-10 opacity-80"
                        />
                        <img
                            src="/logos/logo-ss-plus-hor.png"
                            alt="SS PLUS"
                            className="h-10 object-contain opacity-80"
                        />
                    </div>

                    {/* Credits */}
                    <div className="text-center md:text-end">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Developed by{' '}
                            <span className="text-primary-600 dark:text-primary-400 font-semibold">
                                WAVE IO
                            </span>
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            Lead Consultant: M. Anis HWAS
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                            Client: SS PLUS © {currentYear}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

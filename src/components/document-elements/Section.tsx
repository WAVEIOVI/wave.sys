import { ReactNode } from 'react';

interface SectionProps {
    id: string;
    children: ReactNode;
    className?: string;
}

export default function Section({ id, children, className = '' }: SectionProps) {
    return (
        <section id={id} className={`scroll-mt-24 mb-12 ${className}`}>
            {children}
        </section>
    );
}

export function SectionHeader({ children }: { children: ReactNode }) {
    return (
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
            {children}
        </h2>
    );
}

export function SubSection({ id, children }: { id: string; children: ReactNode }) {
    return (
        <div id={id} className="scroll-mt-24 mb-8 ml-0 md:ms-4">
            {children}
        </div>
    );
}

export function SubSectionHeader({ children }: { children: ReactNode }) {
    return (
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            {children}
        </h3>
    );
}

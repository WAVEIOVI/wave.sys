import { ReactNode } from 'react';

export default function Paragraph({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <p className={`mb-4 text-gray-700 dark:text-gray-300 leading-relaxed ${className}`}>
            {children}
        </p>
    );
}

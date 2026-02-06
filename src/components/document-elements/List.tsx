import { ReactNode } from 'react';

interface ListProps {
    type?: 'ordered' | 'unordered';
    children: ReactNode;
    className?: string;
}

export default function List({ type = 'unordered', children, className = '' }: ListProps) {
    const Component = type === 'ordered' ? 'ol' : 'ul';
    const listStyles = type === 'ordered' ? 'list-decimal' : 'list-disc';

    return (
        <Component className={`${listStyles} ps-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300 ${className}`}>
            {children}
        </Component>
    );
}

export function ListItem({ children, className = '' }: { children: ReactNode; className?: string }) {
    return <li className={`ps-1 ${className}`}>{children}</li>;
}

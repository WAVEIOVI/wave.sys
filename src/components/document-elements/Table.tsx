import { ReactNode } from 'react';

interface TableProps {
    headers?: string[];
    children: ReactNode;
    variant?: 'default' | 'document';
}

export default function Table({ headers, children, variant = 'default' }: TableProps) {
    const tableClass = variant === 'document'
        ? "document-table"
        : "w-full text-start border-collapse";

    return (
        <div className={variant === 'document' ? "" : "overflow-x-auto my-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"}>
            <table className={tableClass}>
                {headers && (
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            {headers.map((header, index) => (
                                <th key={index} className="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
                    {children}
                </tbody>
            </table>
        </div>
    );
}

export function TableRow({ children, isHeader = false }: { children: ReactNode; isHeader?: boolean }) {
    return (
        <tr className={`${isHeader
            ? "bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700"
            : "hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            }`}>
            {children}
        </tr>
    );
}

export function TableCell({ children, className = '', isHeader = false }: { children: ReactNode; className?: string; isHeader?: boolean }) {
    if (isHeader) {
        return (
            <th className={`py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider text-start ${className}`}>
                {children}
            </th>
        );
    }
    return <td className={`py-3 px-4 text-sm text-gray-700 dark:text-gray-300 ${className}`}>{children}</td>;
}

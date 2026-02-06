import { useState } from 'react';
import { TableOfContentsItem } from '../../types/document.types';
import { Menu } from 'lucide-react';

interface TableOfContentsProps {
    items: TableOfContentsItem[];
    activeId: string;
}

export default function TableOfContents({ items, activeId }: TableOfContentsProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    };

    if (items.length === 0) return null;

    return (
        <>
            {/* Mobile Toggle (Floating) */}
            <button
                className="xl:hidden fixed bottom-6 right-6 z-50 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Table of Contents"
            >
                <Menu className="w-5 h-5" />
            </button>

            {/* Desktop Sidebar (Right Side) */}
            <aside className="hidden xl:block w-64 flex-shrink-0 pl-8 sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
                <h5 className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wide mb-4">
                    On This Page
                </h5>
                <nav className="space-y-1 border-l border-gray-200 dark:border-gray-800">
                    {items.map((item) => (
                        <div key={item.id} className="group relative">
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => handleClick(e, item.id)}
                                className={`
                                    block pl-4 py-1 text-sm border-l-2 -ml-px transition-colors duration-200
                                    ${activeId === item.id
                                        ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 font-medium'
                                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600'}
                                `}
                            >
                                {item.text}
                            </a>
                            {item.children && item.children.length > 0 && (
                                <div className="space-y-1">
                                    {item.children.map(child => (
                                        <a
                                            key={child.id}
                                            href={`#${child.id}`}
                                            onClick={(e) => handleClick(e, child.id)}
                                            className={`
                                                block pl-8 py-1 text-xs border-l-2 -ml-px transition-colors duration-200
                                                ${activeId === child.id
                                                    ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 font-semibold'
                                                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600'}
                                            `}
                                        >
                                            {child.text}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="fixed inset-0 z-50 xl:hidden">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
                    <div className="fixed inset-y-0 right-0 w-72 bg-white dark:bg-gray-900 shadow-xl p-6 overflow-y-auto custom-scrollbar">
                        <h5 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-6">
                            On This Page
                        </h5>
                        <nav className="space-y-2">
                            {items.map((item) => (
                                <div key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        onClick={(e) => handleClick(e, item.id)}
                                        className={`block text-sm py-1 ${activeId === item.id ? 'text-primary-600 font-medium' : 'text-gray-600 dark:text-gray-400'}`}
                                    >
                                        {item.text}
                                    </a>
                                    {item.children && (
                                        <div className="pl-4 mt-1 space-y-1 border-l border-gray-200 dark:border-gray-800">
                                            {item.children.map(child => (
                                                <a
                                                    key={child.id}
                                                    href={`#${child.id}`}
                                                    onClick={(e) => handleClick(e, child.id)}
                                                    className={`block text-xs py-1 ${activeId === child.id ? 'text-primary-600 font-medium' : 'text-gray-500 dark:text-gray-500'}`}
                                                >
                                                    {child.text}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}

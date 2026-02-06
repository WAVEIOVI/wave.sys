import { useEffect, useState } from 'react';

interface TOCItem {
    id: string;
    title: string;
    level: number;
    isActive: boolean;
}

interface TOCProps {
    items: Omit<TOCItem, 'isActive'>[];
    activeId?: string;
}

export default function EnhancedTableOfContents({ items, activeId }: TOCProps) {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            // Adjust for sticky header if needed
            // window.scrollBy(0, -100); 
        }
    };

    if (items.length === 0) return null;

    return (
        <aside className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-5 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
                <span className="text-xl">📑</span>
                <h3 className="font-semibold text-gray-900 dark:text-white">On This Page</h3>
            </div>

            <nav className="space-y-1">
                {items.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`
              block text-sm py-1.5 px-3 rounded-md transition-all duration-200 relative
              ${item.level === 1 ? '' : item.level === 2 ? 'ms-3 text-xs' : 'ms-6 text-xs'}
              ${(activeId === item.id)
                                ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/10 font-medium'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-200'}
            `}
                        onClick={(e) => smoothScrollTo(e, item.id)}
                    >
                        <div className="flex items-center gap-2">
                            <span className={`
                flex-shrink-0 w-1.5 h-1.5 rounded-full transition-all duration-300
                ${(activeId === item.id) ? 'bg-primary-600 dark:bg-primary-400 scale-125' : 'bg-gray-300 dark:bg-gray-600'}
              `} />
                            <span className="truncate">{item.title}</span>
                        </div>
                    </a>
                ))}
            </nav>

            <div className="mt-4 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-primary-600 dark:bg-primary-400 transition-all duration-300 ease-out"
                    style={{ width: `${scrollProgress * 100}%` }}
                />
            </div>
        </aside>
    );
}

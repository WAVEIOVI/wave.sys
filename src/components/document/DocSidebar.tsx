import { Link, useLocation } from 'react-router-dom';
import { getLayer1Documents, getLayer2Documents } from '../../data/navigation';
import * as Icons from 'lucide-react';
import { Document } from '../../types/document.types';

export default function DocSidebar() {
    const location = useLocation();
    const layer1Docs = getLayer1Documents();
    const layer2Docs = getLayer2Documents();
    const currentPath = location.pathname;

    // Helper to render icon dynamically
    const renderIcon = (iconName: string, className: string) => {
        const Icon = (Icons as any)[iconName];
        return Icon ? <Icon className={className} /> : null;
    };

    const NavItem = ({ doc }: { doc: Document }) => {
        const isActive = currentPath === `/document/${doc.id}`;
        return (
            <Link
                to={`/document/${doc.id}`}
                className={`
                    group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors mb-1
                    ${isActive
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}
                `}
            >
                <span className={`me-2 ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400 group-hover:text-gray-500'}`}>
                    {renderIcon(doc.icon, "w-4 h-4")}
                </span>
                <span className="truncate">{doc.title}</span>
            </Link>
        );
    };

    return (
        <aside className="w-64 flex-shrink-0 hidden lg:block border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-y-auto sticky top-16 h-[calc(100vh-4rem)] custom-scrollbar">
            <nav className="p-4 space-y-8">
                {/* Section 1: Core Manual */}
                <div>
                    <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Company Manual
                    </h3>
                    {layer1Docs.map(doc => (
                        <NavItem key={doc.id} doc={doc} />
                    ))}
                </div>

                {/* Section 2: Department Modules */}
                <div>
                    <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Modules
                    </h3>
                    {layer2Docs.map(doc => (
                        <NavItem key={doc.id} doc={doc} />
                    ))}
                </div>
            </nav>
        </aside>
    );
}

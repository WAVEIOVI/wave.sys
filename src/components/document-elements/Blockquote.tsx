import { ReactNode } from 'react';
import { Info, AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';

interface BlockquoteProps {
    type?: 'info' | 'warning' | 'danger' | 'success' | 'note' | 'caution' | 'important';
    title?: string;
    children: ReactNode;
    icon?: ReactNode;
}

export default function Blockquote({ type = 'note', title, children, icon }: BlockquoteProps) {
    const styles = {
        info: {
            bg: 'bg-blue-50 dark:bg-blue-900/20',
            border: 'border-blue-500',
            text: 'text-blue-800 dark:text-blue-200',
            iconColor: 'text-blue-500'
        },
        warning: {
            bg: 'bg-yellow-50 dark:bg-yellow-900/20',
            border: 'border-yellow-500',
            text: 'text-yellow-800 dark:text-yellow-200',
            iconColor: 'text-yellow-500'
        },
        caution: {
            bg: 'bg-orange-50 dark:bg-orange-900/20',
            border: 'border-orange-500',
            text: 'text-orange-800 dark:text-orange-200',
            iconColor: 'text-orange-500'
        },
        danger: {
            bg: 'bg-red-50 dark:bg-red-900/20',
            border: 'border-red-500',
            text: 'text-red-800 dark:text-red-200',
            iconColor: 'text-red-500'
        },
        important: {
            bg: 'bg-indigo-50 dark:bg-indigo-900/20',
            border: 'border-indigo-500',
            text: 'text-indigo-800 dark:text-indigo-200',
            iconColor: 'text-indigo-500'
        },
        success: {
            bg: 'bg-green-50 dark:bg-green-900/20',
            border: 'border-green-500',
            text: 'text-green-800 dark:text-green-200',
            iconColor: 'text-green-500'
        },
        note: {
            bg: 'bg-gray-50 dark:bg-gray-800',
            border: 'border-gray-400',
            text: 'text-gray-800 dark:text-gray-200',
            iconColor: 'text-gray-500'
        }
    };

    const style = styles[type] || styles.note;

    const DefaultIcon = () => {
        switch (type) {
            case 'info': return <Info size={20} />;
            case 'warning':
            case 'caution': return <AlertTriangle size={20} />;
            case 'danger': return <AlertCircle size={20} />;
            case 'important':
            case 'success': return <CheckCircle size={20} />;
            default: return <Info size={20} />;
        }
    };

    return (
        <div className={`${style.bg} border-s-4 ${style.border} p-4 my-6 rounded-e-md`}>
            <div className="flex items-start">
                <div className={`flex-shrink-0 me-3 ${style.iconColor}`}>
                    {icon || <DefaultIcon />}
                </div>
                <div>
                    {title && <h4 className={`font-semibold mb-1 ${style.text}`}>{title}</h4>}
                    <div className={`text-sm ${style.text} opacity-90`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

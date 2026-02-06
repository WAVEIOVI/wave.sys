import { CheckCircle, Circle } from 'lucide-react';

interface TimelineItem {
    date?: string;
    title: string;
    description?: string;
    status?: 'completed' | 'current' | 'upcoming';
}

interface TimelineProps {
    items: TimelineItem[];
    orientation?: 'vertical' | 'horizontal';
}

export default function Timeline({ items, orientation = 'vertical' }: TimelineProps) {
    if (orientation === 'horizontal') {
        // Basic horizontal scrollable timeline
        return (
            <div className="overflow-x-auto py-8">
                <div className="flex min-w-max space-x-8 px-4">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-48 text-center relative">
                            {/* Connector Line */}
                            {index < items.length - 1 && (
                                <div className="absolute top-4 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10" />
                            )}

                            <div className={`
                w-8 h-8 rounded-full flex items-center justify-center mb-4 z-10
                ${item.status === 'completed' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
                                    item.status === 'current' ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 ring-4 ring-primary-50 dark:ring-primary-900/10' :
                                        'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500'}
              `}>
                                {item.status === 'completed' ? <CheckCircle size={16} /> : <Circle size={16} />}
                            </div>

                            {item.date && (
                                <span className="text-xs font-medium text-primary-600 dark:text-primary-400 mb-1 block">
                                    {item.date}
                                </span>
                            )}
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                            {item.description && (
                                <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Vertical Timeline
    return (
        <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 my-8 space-y-8 timeline" data-chart="timeline">
            {items.map((item, index) => (
                <div key={index} className="relative pl-8">
                    {/* Dot */}
                    <div className={`
            absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 
            ${item.status === 'completed' ? 'bg-green-500 border-green-500' :
                            item.status === 'current' ? 'bg-white dark:bg-gray-900 border-primary-500' :
                                'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600'}
          `} />

                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                        <h4 className="text-base font-bold text-gray-900 dark:text-white">{item.title}</h4>
                        {item.date && (
                            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                                {item.date}
                            </span>
                        )}
                    </div>

                    {item.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

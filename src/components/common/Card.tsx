import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass' | 'outlined';
    hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ children, variant = 'default', hover = true, className = '', ...props }, ref) => {
        const baseClasses = 'rounded-xl p-6 transition-all duration-300';

        const variantClasses = {
            default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm',
            glass: 'glass-card',
            outlined: 'border-2 border-primary-200 dark:border-primary-800 bg-transparent',
        };

        const hoverClasses = hover
            ? 'hover:shadow-md hover:-translate-y-1 cursor-pointer'
            : '';

        return (
            <div
                ref={ref}
                className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

export default Card;

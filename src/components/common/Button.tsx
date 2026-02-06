import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    icon?: React.ReactNode;
    href?: string;
    to?: string;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({
        children,
        variant = 'primary',
        size = 'md',
        isLoading = false,
        icon,
        className = '',
        disabled,
        href,
        to,
        ...props
    }, ref) => {
        const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

        const variantClasses = {
            primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 shadow-md hover:shadow-lg active:scale-98',
            secondary: 'bg-transparent border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-500',
            ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300',
        };

        const sizeClasses = {
            sm: 'px-4 py-2 text-sm gap-2',
            md: 'px-6 py-3 text-base gap-2',
            lg: 'px-8 py-4 text-lg gap-3',
        };

        const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

        const content = (
            <>
                {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                {!isLoading && icon && (
                    <span className="inline-flex shrink-0">
                        {icon}
                    </span>
                )}
                <span>{children}</span>
            </>
        );

        if (to) {
            return (
                <Link to={to} className={classes} {...(props as any)}>
                    {content}
                </Link>
            );
        }

        if (href) {
            return (
                <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...(props as any)}>
                    {content}
                </a>
            );
        }

        return (
            <button
                ref={ref as any}
                className={classes}
                disabled={disabled || isLoading}
                {...props}
            >
                {content}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;

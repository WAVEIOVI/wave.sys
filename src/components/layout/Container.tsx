import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg' | 'full';
}

export default function Container({ children, size = 'lg', className = '', ...props }: ContainerProps) {
    const sizeClasses = {
        sm: 'max-w-4xl',
        md: 'max-w-6xl',
        lg: 'max-w-7xl',
        full: 'max-w-full',
    };

    return (
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`} {...props}>
            {children}
        </div>
    );
}

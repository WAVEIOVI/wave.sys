import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import Button from './Button';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    private handleReload = () => {
        window.location.reload();
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
                    <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
                            <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
                        </div>

                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            Something went wrong
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            We encountered an unexpected error. Please try reloading the page.
                        </p>

                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3 text-left mb-6 overflow-auto max-h-32">
                            <p className="text-xs font-mono text-gray-500 dark:text-gray-400">
                                {this.state.error?.message || 'Unknown error'}
                            </p>
                        </div>

                        <Button onClick={this.handleReload} className="w-full justify-center">
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Reload Page
                        </Button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

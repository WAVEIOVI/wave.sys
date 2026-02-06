import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
}

export default function CodeBlock({ code, language = 'text', filename }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                    {filename || language}
                </span>
                <button
                    onClick={handleCopy}
                    className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors text-gray-500 dark:text-gray-400"
                    title="Copy code"
                >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
            </div>
            <div className="p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
}

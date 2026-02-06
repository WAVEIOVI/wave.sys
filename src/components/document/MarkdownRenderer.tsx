import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ComponentPropsWithoutRef } from 'react';

interface MarkdownRendererProps {
    content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    // Helper to extract text from React children
    const extractText = (node: any): string => {
        if (typeof node === 'string') return node;
        if (typeof node === 'number') return String(node);
        if (Array.isArray(node)) return node.map(extractText).join('');
        if (node?.props?.children) return extractText(node.props.children);
        return '';
    };

    // Custom components to add IDs to headers for TOC and style other elements
    const components: ComponentPropsWithoutRef<typeof ReactMarkdown>['components'] = {
        h1: ({ children, ...props }) => {
            const text = extractText(children);
            const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
            return (
                <h1 id={id} className="text-3xl font-bold mb-6 text-gray-900 dark:text-white scroll-mt-24" {...props}>
                    {children}
                </h1>
            );
        },
        h2: ({ children, ...props }) => {
            const text = extractText(children);
            const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
            return (
                <h2 id={id} className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white scroll-mt-24 pb-2 border-b border-gray-200 dark:border-gray-700" {...props}>
                    {children}
                </h2>
            );
        },
        h3: ({ children, ...props }) => {
            const text = extractText(children);
            const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
            return (
                <h3 id={id} className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white scroll-mt-24" {...props}>
                    {children}
                </h3>
            );
        },
        p: ({ children, ...props }) => (
            <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed" {...props}>
                {children}
            </p>
        ),
        ul: ({ children, ...props }) => (
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300" {...props}>
                {children}
            </ul>
        ),
        ol: ({ children, ...props }) => (
            <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300" {...props}>
                {children}
            </ol>
        ),
        li: ({ children, ...props }) => (
            <li className="pl-1" {...props}>
                {children}
            </li>
        ),
        blockquote: ({ children, ...props }) => (
            <blockquote className="border-l-4 border-primary-500 pl-4 py-2 my-4 bg-gray-50 dark:bg-gray-800/50 rounded-r-lg italic text-gray-700 dark:text-gray-300" {...props}>
                {children}
            </blockquote>
        ),
        a: ({ href, children, ...props }) => (
            <a
                href={href}
                className="text-primary-600 dark:text-primary-400 hover:underline hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                {...props}
            >
                {children}
            </a>
        ),
        table: ({ children, ...props }) => (
            <div className="overflow-x-auto my-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props}>
                    {children}
                </table>
            </div>
        ),
        thead: ({ children, ...props }) => (
            <thead className="bg-gray-50 dark:bg-gray-800" {...props}>
                {children}
            </thead>
        ),
        th: ({ children, ...props }) => (
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" {...props}>
                {children}
            </th>
        ),
        tbody: ({ children, ...props }) => (
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700" {...props}>
                {children}
            </tbody>
        ),
        tr: ({ children, ...props }) => (
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors" {...props}>
                {children}
            </tr>
        ),
        td: ({ children, ...props }) => (
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300" {...props}>
                {children}
            </td>
        ),
        code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            const isInline = !match;

            return !isInline ? (
                <div className="rounded-lg overflow-hidden my-4 shadow-sm border border-gray-200 dark:border-gray-800">
                    <SyntaxHighlighter
                        // @ts-ignore
                        style={vscDarkPlus}
                        language={match?.[1]}
                        PreTag="div"
                        customStyle={{ margin: 0, padding: '1.5rem' }}
                        {...props}
                    >
                        {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                </div>
            ) : (
                <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400 font-mono text-sm border border-gray-200 dark:border-gray-700" {...props}>
                    {children}
                </code>
            );
        }
    };

    return (
        <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-24">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={components}
            >
                {content}
            </ReactMarkdown>
        </article>
    );
}

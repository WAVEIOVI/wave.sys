import { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import DocumentHeader from '../components/document/DocumentHeader';
import TableOfContents from '../components/document/TableOfContents';
import DocSidebar from '../components/document/DocSidebar';
import MarkdownRenderer from '../components/document/MarkdownRenderer';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { getDocumentById } from '../data/navigation';
import { loadDocumentContent } from '../utils/documentLoader';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { TableOfContentsItem } from '../types/document.types';

export default function DocumentViewer() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [content, setContent] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [tocItems, setTocItems] = useState<TableOfContentsItem[]>([]);

    // Helpers to parse headings for TOC
    const parseHeadings = (markdown: string): TableOfContentsItem[] => {
        const lines = markdown.split('\n');
        const items: TableOfContentsItem[] = [];
        let currentParent: TableOfContentsItem | null = null;

        lines.forEach((line) => {
            // Match H1 (#) and H2 (##) and H3 (###)
            const h1Match = line.match(/^#\s+(.+)$/);
            const h2Match = line.match(/^##\s+(.+)$/);

            // We'll focus on H1 and H2 for the sidebar to keep it clean, maybe H3 if needed
            if (h1Match) {
                const text = h1Match[1].trim();
                const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                const newItem = { id, text, level: 1, children: [] };
                items.push(newItem);
                currentParent = newItem;
            } else if (h2Match) {
                const text = h2Match[1].trim();
                const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                const newItem = { id, text, level: 2 };

                if (currentParent) {
                    currentParent.children?.push(newItem);
                } else {
                    // If H2 appears before any H1, treat as top level
                    items.push(newItem);
                }
            }
        });

        return items;
    };

    // Get all IDs for scroll spy
    const tocIds = useMemo(() => {
        const ids: string[] = [];
        tocItems.forEach(item => {
            ids.push(item.id);
            item.children?.forEach(child => ids.push(child.id));
        });
        return ids;
    }, [tocItems]);

    const activeId = useScrollSpy(tocIds, 100);

    useEffect(() => {
        async function loadDoc() {
            if (!id) return;

            setIsLoading(true);
            const doc = getDocumentById(id);

            if (!doc) {
                // Document not found in registry
                navigate('/');
                return;
            }

            const markdown = await loadDocumentContent(id);

            if (markdown) {
                setContent(markdown);
                const headings = parseHeadings(markdown);
                setTocItems(headings);
            } else {
                // Failed to load content
                console.error('Failed to load markdown content');
            }

            setIsLoading(false);
        }

        loadDoc();
        // Scroll to top on new document
        window.scrollTo(0, 0);
    }, [id, navigate]);

    const currentDocument = id ? getDocumentById(id) : undefined;

    if (isLoading || !currentDocument) {
        return (
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow flex items-center justify-center">
                    <LoadingSpinner size="lg" />
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
            <Header />
            <DocumentHeader document={currentDocument} />

            <main className="flex-grow">
                {/* Full-width container to allow sidebars to sit on edges if needed, but max-w-8xl for large screens */}
                <div className="max-w-[1600px] mx-auto flex items-start">

                    {/* Left Sidebar: Document Navigation */}
                    <DocSidebar />

                    {/* Main Content Area */}
                    <div className="flex-grow px-4 sm:px-8 py-8 lg:py-10 min-w-0 max-w-4xl mx-auto">
                        <Container size="full" className="p-0">
                            {content ? (
                                <MarkdownRenderer content={content} />
                            ) : (
                                <div className="text-center py-12 text-gray-500">
                                    Content not available.
                                </div>
                            )}
                        </Container>
                    </div>

                    {/* Right Sidebar: On This Page (TOC) */}
                    <TableOfContents items={tocItems} activeId={activeId} />

                </div>
            </main>

            <Footer />
        </div>
    );
}

import { ReactNode, useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import DocSidebar from '../document/DocSidebar';
import EnhancedTableOfContents from './EnhancedTableOfContents';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { Download, Printer, FileText, ChevronDown, Loader2 } from 'lucide-react';
import { loadDocumentContent } from '../../utils/documentLoader';
import { getDocumentById } from '../../data/navigation';
import { downloadPDF } from '../../utils/pdf/generatePDF';
import { DocumentPDF } from '../pdf/DocumentPDF';

interface DocumentLayoutProps {
    title: string;
    category: string;
    children: ReactNode;
    tocItems?: { id: string; title: string; level: number }[];
    docId?: string;
}

export default function DocumentLayout({ title, category, children, tocItems = [], docId }: DocumentLayoutProps) {
    const tocIds = tocItems.map(item => item.id);
    const activeId = useScrollSpy(tocIds, 100);
    const [isExportOpen, setIsExportOpen] = useState(false);
    const [pdfLoading, setPdfLoading] = useState(false);

    const handlePrint = () => {
        window.print();
        setIsExportOpen(false);
    };

    const handleDownloadPdf = async () => {
        setPdfLoading(true);
        try {
            let content: string | null = null;
            let lastUpdated: string | undefined;
            if (docId) {
                content = await loadDocumentContent(docId);
                const doc = getDocumentById(docId);
                lastUpdated = doc?.lastUpdated;
            }
            const doc = <DocumentPDF title={title} category={category} content={content ?? undefined} lastUpdated={lastUpdated} />;
            const filename = `${title.toLowerCase().replace(/\s+/g, '-')}.pdf`;
            await downloadPDF(doc, filename);
            setIsExportOpen(false);
        } catch (e) {
            console.error('PDF export failed:', e);
        } finally {
            setPdfLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
            <Header />

            {/* Document Header */}
            <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                            <span>Documents</span>
                            <span>/</span>
                            <span className="text-primary-600 dark:text-primary-400 font-medium">{category}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{title}</h1>
                    </div>

                    <div className="flex items-center gap-3 no-print">
                        <div className="relative">
                            <button
                                onClick={() => setIsExportOpen(!isExportOpen)}
                                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm"
                            >
                                <Download className="w-4 h-4" />
                                <span>Export</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isExportOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isExportOpen && (
                                <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden">
                                    <button
                                        onClick={handlePrint}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-start hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700"
                                    >
                                        <Printer className="w-4 h-4 text-gray-500" />
                                        <div className="flex flex-col text-start">
                                            <span className="font-bold">Print Document</span>
                                            <span className="text-[10px] text-gray-400">Optimize for paper</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={handleDownloadPdf}
                                        disabled={pdfLoading}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-start hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-60"
                                    >
                                        {pdfLoading ? <Loader2 className="w-4 h-4 text-primary-500 animate-spin" /> : <FileText className="w-4 h-4 text-gray-500" />}
                                        <div className="flex flex-col text-start">
                                            <span className="font-bold">{pdfLoading ? 'Preparing PDF...' : 'Download PDF'}</span>
                                            <span className="text-[10px] text-gray-400">Official document</span>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <main className="flex-grow">
                <div className="max-w-[1600px] mx-auto flex items-start">
                    {/* Left Sidebar */}
                    <DocSidebar />

                    {/* Main Content */}
                    <div className="flex-grow px-4 sm:px-8 py-8 lg:py-10 min-w-0 max-w-4xl mx-auto">
                        <article className="prose prose-lg dark:prose-invert max-w-none">
                            {children}
                        </article>
                    </div>

                    {/* Right Sidebar (TOC) */}
                    <div className="hidden xl:block w-72 flex-shrink-0 sticky top-24 pt-8 pr-8 rtl:pr-0 rtl:pl-8">
                        <EnhancedTableOfContents items={tocItems} activeId={activeId} />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

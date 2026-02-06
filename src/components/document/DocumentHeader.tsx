import { Link } from 'react-router-dom';
import { ChevronRight, Download, Printer, Share2, FileText } from 'lucide-react';
import { Document } from '../../types/document.types';
import Button from '../common/Button';
import ThemeToggle from '../common/ThemeToggle';
import { useState } from 'react';
import { downloadPDF } from '../../utils/pdf/generatePDF';
import { DocumentPDF } from '../pdf/DocumentPDF';
import { loadDocumentContent } from '../../utils/documentLoader';
import { preparePrintView } from '../../utils/pdf/preparePrint';

interface DocumentHeaderProps {
    document: Document;
}

export default function DocumentHeader({ document }: DocumentHeaderProps) {
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

    const handlePrint = async () => {
        await preparePrintView();
    };

    const handleDownloadPdf = async () => {
        setIsGeneratingPdf(true);
        try {
            const content = await loadDocumentContent(document.id);
            if (content) {
                // Create the PDF document using @react-pdf/renderer
                const pdfDocument = (
                    <DocumentPDF
                        title={document.title}
                        category={document.category}
                        content={content}
                        lastUpdated={document.lastUpdated}
                    />
                );
                
                // Download the PDF with enhanced cover and back pages
                await downloadPDF(pdfDocument, `${document.id}-document.pdf`);
            }
        } catch (error) {
            console.error('Failed to generate PDF:', error);
        } finally {
            setIsGeneratingPdf(false);
        }
    };

    const layers = [
        { name: 'Home', path: '/' },
        { name: document.layer === 1 ? 'Company Manual' : 'Core Modules', path: '/' },
        { name: document.title, path: `/document/${document.id}` },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30 transition-all duration-300 print:hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col gap-4">

                    {/* Breadcrumbs & Actions Row */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                        {/* Breadcrumbs */}
                        <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            {layers.map((layer, index) => (
                                <div key={index} className="flex items-center">
                                    {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
                                    {index === layers.length - 1 ? (
                                        <span className="font-medium text-gray-900 dark:text-white truncate max-w-[150px] sm:max-w-xs">{layer.name}</span>
                                    ) : (
                                        <Link to={layer.path} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                            {layer.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-2 self-end md:self-auto">
                            <div className="hidden sm:flex items-center gap-2 mr-2 border-r border-gray-200 dark:border-gray-700 pr-4">
                                <span className="text-xs text-gray-500">Last updated: {document.lastUpdated}</span>
                            </div>

                            <Button variant="ghost" size="sm" onClick={handlePrint} title="Print Document">
                                <Printer className="w-4 h-4" />
                            </Button>

                            <Button
                                variant="ghost"
                                size="sm"
                                title="Download PDF"
                                onClick={handleDownloadPdf}
                                isLoading={isGeneratingPdf}
                            >
                                <Download className="w-4 h-4" />
                            </Button>

                            <Button variant="ghost" size="sm" title="Share Link">
                                <Share2 className="w-4 h-4" />
                            </Button>

                            <div className="pl-2 ml-2 border-l border-gray-200 dark:border-gray-700">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>

                    {/* Title Row */}
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${document.color || 'from-gray-500 to-gray-600'}`}>
                            <FileText className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-heading">
                            {document.title}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

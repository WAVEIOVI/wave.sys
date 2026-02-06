import Modal from '../common/Modal';
import Button from '../common/Button';
import ReactMarkdown from 'react-markdown';
import { 
    FileText, 
    Clock, 
    Layers, 
    ExternalLink, 
    Download, 
    CheckCircle2, 
    Info, 
    Users2, 
    Zap,
    ChevronRight,
    ShieldCheck
} from 'lucide-react';
import { DocumentSummary } from '../../types/document.types';


interface DocumentSummaryModalProps {
    isOpen: boolean;
    onClose: () => void;
    document: {
        title: string;
        category: string;
        lastUpdated: string;
        version: string;
        sectionCount: number;
        description: string;
        href: string;
        structuredSummary?: DocumentSummary;
    };
}

export default function DocumentSummaryModal({ isOpen, onClose, document }: DocumentSummaryModalProps) {
    const summary = document.structuredSummary;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Manual Summary" size="lg">
            <div className="space-y-8 py-2">
                {/* Header Information - Premium Style */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative p-5 bg-white dark:bg-gray-800 rounded-2xl text-primary-600 dark:text-primary-400 shadow-xl border border-primary-100 dark:border-primary-900/50">
                            <FileText className="w-12 h-12" />
                        </div>
                    </div>
                    <div className="flex-1 text-center sm:text-start pt-1">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-2">
                            <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary-200/30 dark:border-primary-800/50">
                                {document.category}
                            </span>
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-[10px] font-bold uppercase tracking-widest rounded-full border border-green-200/30 dark:border-green-800/50">
                                <ShieldCheck className="w-3 h-3" />
                                Verified
                            </div>
                        </div>
                        <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2 leading-tight tracking-tight">
                            {document.title}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">
                            Official Operational Guidelines & Standards
                        </p>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="max-h-[60vh] overflow-y-auto ps-2 -ms-2 scrollbar-premium">
                    {summary ? (
                        <div className="space-y-8 pb-4">
                            {/* Overview Card */}
                            <div className="relative p-6 bg-gray-50/50 dark:bg-gray-900/30 rounded-3xl border border-gray-100 dark:border-gray-800/50">
                                <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 p-4 opacity-5">
                                    <Info className="w-24 h-24" />
                                </div>
                                <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                    <div className="w-1.5 h-6 bg-primary-500 rounded-full" />
                                    Executive Overview
                                </h5>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg italic">
                                    "{summary.overview}"
                                </p>
                            </div>

                            {/* Two Column Grid for Key Points & Sections */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Key Highlights */}
                                <div className="space-y-4">
                                    <h5 className="text-sm font-black uppercase tracking-widest text-primary-600 dark:text-primary-400 flex items-center gap-2 px-1 text-start">
                                        <CheckCircle2 className="w-4 h-4" />
                                        Core Offerings
                                    </h5>
                                    <div className="space-y-2">
                                        {summary.keyPoints.map((point, i) => (
                                            <div key={i} className="flex gap-3 p-3 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800 group hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-200 shadow-sm text-start">
                                                <ChevronRight className="w-4 h-4 mt-0.5 text-primary-500 flex-shrink-0 rtl:rotate-180" />
                                                <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Important Features */}
                                <div className="space-y-4">
                                    <h5 className="text-sm font-black uppercase tracking-widest text-primary-600 dark:text-primary-400 flex items-center gap-2 px-1 text-start">
                                        <Zap className="w-4 h-4" />
                                        Operational Standards
                                    </h5>
                                    <div className="space-y-2">
                                        {summary.importantSections.map((section, i) => (
                                            <div key={i} className="flex gap-3 p-3 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800 group hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-200 shadow-sm text-start">
                                                <ChevronRight className="w-4 h-4 mt-0.5 text-primary-500 flex-shrink-0 rtl:rotate-180" />
                                                <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">{section}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Audience & Reference */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                {/* Target Audience */}
                                <div className="p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-900/30 rounded-2xl border border-gray-200 dark:border-gray-800">
                                    <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2.5 text-start">
                                        <Users2 className="w-5 h-5 text-primary-500" />
                                        Target Stakeholders
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                        {summary.targetAudience.map((audience, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-semibold rounded-lg border border-gray-200 dark:border-gray-700 shadow-xs">
                                                {audience}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Reference */}
                                <div className="p-5 bg-primary-600 rounded-2xl border border-primary-700 shadow-lg relative overflow-hidden group">
                                    <div className="absolute -right-4 rtl:-right-auto rtl:-left-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                        <Zap className="w-32 h-32 text-white" />
                                    </div>
                                    <h5 className="text-sm font-bold text-primary-50 mb-4 flex items-center gap-2.5 relative z-10 text-start">
                                        <Zap className="w-5 h-5 text-primary-200" />
                                        Quick Reference
                                    </h5>
                                    <div className="space-y-2 relative z-10 text-start">
                                        {summary.quickReference.map((ref, i) => (
                                            <div key={i} className="flex items-center gap-2 text-primary-50">
                                                <div className="w-1 h-1 bg-primary-300 rounded-full" />
                                                <span className="text-xs font-medium">{ref}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="document-content !max-w-none text-gray-600 dark:text-gray-300 leading-relaxed p-6 bg-gray-50/50 dark:bg-gray-900/30 rounded-3xl border border-gray-100 dark:border-gray-800/50 text-start">
                            <ReactMarkdown
                                components={{
                                    p: ({ children }) => <p className="mb-4 last:mb-0 leading-relaxed text-start">{children}</p>,
                                    strong: ({ children }) => (
                                        <strong className="block text-gray-900 dark:text-white font-bold text-lg mt-6 mb-2 first:mt-0 text-start">
                                            {children}
                                        </strong>
                                    ),
                                }}
                            >
                                {document.description}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>

                {/* Footer Stats */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-white dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-800 text-center group hover:bg-white dark:hover:bg-gray-800 transition-colors">
                        <div className="flex justify-center mb-1 text-primary-500">
                            <Clock className="w-5 h-5" />
                        </div>
                        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">Updated</p>
                        <p className="text-sm font-black text-gray-900 dark:text-white">{document.lastUpdated}</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-800 text-center group hover:bg-white dark:hover:bg-gray-800 transition-colors">
                        <div className="flex justify-center mb-1 text-primary-500">
                            <Layers className="w-5 h-5" />
                        </div>
                        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">Scale</p>
                        <p className="text-sm font-black text-gray-900 dark:text-white">{document.sectionCount} Sections</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-800 text-center group hover:bg-white dark:hover:bg-gray-800 transition-colors">
                        <div className="flex justify-center mb-1 text-primary-500">
                            <FileText className="w-5 h-5" />
                        </div>
                        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">Ref No.</p>
                        <p className="text-sm font-black text-gray-900 dark:text-white">v{document.version}</p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                    <Button
                        to={document.href}
                        className="flex-1 flex justify-center items-center gap-3 py-4 text-lg font-bold shadow-xl shadow-primary-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        <ExternalLink className="w-5 h-5" />
                        Access Full Repository
                    </Button>
                    <Button
                        variant="secondary"
                        className="flex items-center justify-center gap-3 py-4 text-lg font-bold border-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
                    >
                        <Download className="w-5 h-5" />
                        Export Overview
                    </Button>
                </div>
            </div>

            <style>{`
                .scrollbar-premium::-webkit-scrollbar {
                    width: 6px;
                }
                .scrollbar-premium::-webkit-scrollbar-track {
                    background: transparent;
                }
                .scrollbar-premium::-webkit-scrollbar-thumb {
                    background: #e2e8f0;
                    border-radius: 10px;
                }
                .dark .scrollbar-premium::-webkit-scrollbar-thumb {
                    background: #334155;
                }
                .scrollbar-premium::-webkit-scrollbar-thumb:hover {
                    background: #cbd5e1;
                }
            `}</style>
        </Modal>
    );
}

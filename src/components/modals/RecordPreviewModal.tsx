import Modal from '../common/Modal';
import Button from '../common/Button';
import { FileSpreadsheet, FileText, Calendar, User, Tag, Download, Info } from 'lucide-react';

interface RecordPreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    record: {
        id: string;
        title: string;
        description: string;
        category: string;
        lastUpdated: string;
        fileSize: string;
        format: string;
        type: string;
    };
}

export default function RecordPreviewModal({ isOpen, onClose, record }: RecordPreviewModalProps) {
    const isXlsx = record.format === 'xlsx';

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Record Details" size="md">
            <div className="space-y-6">
                {/* Meta Header */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <div className={`p-3 rounded-xl ${isXlsx ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'}`}>
                        {isXlsx ? <FileSpreadsheet className="w-8 h-8" /> : <FileText className="w-8 h-8" />}
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{record.id}</span>
                            <span className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">
                                {record.format}
                            </span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{record.title}</h4>
                    </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 px-2">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
                            <div>
                                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter mb-0.5">Last Updated</p>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{record.lastUpdated}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Tag className="w-4 h-4 text-gray-400 mt-0.5" />
                            <div>
                                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter mb-0.5">Category</p>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">{record.category}</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <Info className="w-4 h-4 text-gray-400 mt-0.5" />
                            <div>
                                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter mb-0.5">Record Type</p>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">{record.type}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-4 h-4 flex items-center justify-center text-xs font-bold text-gray-400 mt-0.5">KB</div>
                            <div>
                                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter mb-0.5">Size</p>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{record.fileSize}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description Box */}
                <div className="p-4 bg-primary-50 dark:bg-primary-900/10 rounded-xl border border-primary-100 dark:border-primary-900/20">
                    <p className="text-xs text-primary-700 dark:text-primary-300 leading-relaxed mb-0 font-medium">
                        {record.description}
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button className="flex-1 flex justify-center items-center gap-2">
                        <Download className="w-4 h-4" />
                        Download Template
                    </Button>
                    <Button variant="ghost" className="flex items-center justify-center gap-2">
                        <User className="w-4 h-4" />
                        View History
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

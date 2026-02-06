import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { X, Calendar, CheckCircle, AlertCircle, FileText, Download, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ManagementRecord, RecordField } from '../types/records';
import { downloadPDF } from '../utils/pdf/generatePDF';
import { RecordPDF } from './pdf/RecordPDF';

interface RecordViewModalProps {
    isOpen: boolean;
    onClose: () => void;
    record: ManagementRecord | null;
}

export default function RecordViewModal({ isOpen, onClose, record }: RecordViewModalProps) {
    const { t } = useTranslation();
    const [pdfLoading, setPdfLoading] = useState(false);

    if (!record) return null;

    const handleExportPdf = async () => {
        setPdfLoading(true);
        try {
            const doc = <RecordPDF record={record} />;
            const filename = `${record.id}-${record.title.toLowerCase().replace(/\s+/g, '-')}.pdf`;
            await downloadPDF(doc, filename);
        } catch (e) {
            console.error('Record PDF export failed:', e);
        } finally {
            setPdfLoading(false);
        }
    };

    const renderFieldValue = (field: RecordField) => {
        // Removed unused 'value' variable

        switch (field.type) {
            case 'checkbox':
                return (
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 rounded" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{field.name}</span>
                    </div>
                );
            case 'signature':
                return (
                    <div className="w-48 h-16 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded flex items-center justify-center">
                        <span className="text-xs text-gray-400">Signature</span>
                    </div>
                );
            case 'select':
                return (
                    <select
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    >
                        <option>{(field as any).placeholder || 'Select...'}</option>
                        {field.options?.map((opt, idx) => (
                            <option key={idx}>{opt}</option>
                        ))}
                    </select>
                );
            case 'textarea':
                return (
                    <textarea
                        disabled
                        rows={3}
                        placeholder={(field as any).placeholder}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none"
                    />
                );
            case 'date':
                return (
                    <input
                        type="date"
                        disabled
                        defaultValue={field.defaultValue === 'today' ? new Date().toISOString().split('T')[0] : ''}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                );
            case 'currency':
                return (
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            disabled
                            placeholder="0.00"
                            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{field.currency || 'TND'}</span>
                    </div>
                );
            default:
                return (
                    <input
                        type={field.type}
                        disabled
                        placeholder={(field as any).placeholder}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                );
        }
    };

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={onClose} className="relative z-50">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
                </Transition.Child>

                <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="mx-auto max-w-4xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-2xl">
                            {/* Header */}
                            <div className="flex items-start justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex-1">
                                    <Dialog.Title className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {record.title}
                                    </Dialog.Title>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        {record.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                            <FileText className="w-3 h-3" />
                                            {record.id}
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                                            {record.department}
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                                            <Calendar className="w-3 h-3" />
                                            {t('records.version')}: {record.version}
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                                            {record.effectiveDate}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="ml-4 p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 max-h-[calc(100vh-16rem)] overflow-y-auto">
                                {/* Form Sections */}
                                <div className="space-y-6">
                                    {record.formStructure.sections.map((section, sectionIdx) => (
                                        <div
                                            key={sectionIdx}
                                            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50/50 dark:bg-gray-800/50"
                                        >
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                                {section.type === 'repeatable' && <span className="text-blue-600 dark:text-blue-400">🔄</span>}
                                                {section.title}
                                            </h3>

                                            {section.fields && (
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {section.fields.map((field, fieldIdx) => (
                                                        <div
                                                            key={fieldIdx}
                                                            className={field.type === 'textarea' || field.type === 'signature' ? 'md:col-span-2' : ''}
                                                        >
                                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                                {field.name}
                                                                {field.required && field.required !== 'conditional' && (
                                                                    <span className="text-red-500 ml-1">*</span>
                                                                )}
                                                                {field.required === 'conditional' && (
                                                                    <span className="text-amber-500 ml-1 text-xs">(conditional)</span>
                                                                )}
                                                            </label>
                                                            {renderFieldValue(field)}
                                                            {field.autoGenerated && (
                                                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Auto-generated</p>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Instructions */}
                                {record.instructions && record.instructions.length > 0 && (
                                    <div className="mt-6 p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50/50 dark:bg-blue-900/20">
                                        <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
                                            <AlertCircle className="w-4 h-4" />
                                            Instructions
                                        </h4>
                                        <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-300">
                                            {record.instructions.map((instruction, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                                                    <span>{instruction}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Validation Rules */}
                                {record.validationRules && record.validationRules.length > 0 && (
                                    <div className="mt-4 p-4 border border-green-200 dark:border-green-800 rounded-lg bg-green-50/50 dark:bg-green-900/20">
                                        <h4 className="text-sm font-semibold text-green-900 dark:text-green-200 mb-2 flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4" />
                                            Validation Rules
                                        </h4>
                                        <ul className="space-y-1 text-sm text-green-800 dark:text-green-300">
                                            {record.validationRules.map((rule, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                                                    <span>{rule}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Related Documents */}
                                {record.relatedDocuments && record.relatedDocuments.length > 0 && (
                                    <div className="mt-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center gap-2">
                                            <FileText className="w-4 h-4" />
                                            Related Documents
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {record.relatedDocuments.map((doc, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                                                >
                                                    {doc}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
                                <button
                                    onClick={onClose}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                >
                                    {t('common.close')}
                                </button>
                                <button
                                    onClick={() => window.print()}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center gap-2"
                                >
                                    {t('print.print')}
                                </button>
                                <button
                                    onClick={handleExportPdf}
                                    disabled={pdfLoading}
                                    className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-60"
                                >
                                    {pdfLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                                    {pdfLoading ? t('pdf.generating') : t('pdf.download')}
                                </button>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}

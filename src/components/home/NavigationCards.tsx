import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';
import {
    BookOpen,
    DollarSign,
    Users,
    Package,
    TrendingUp,
    Truck,
    FileText,
    ArrowRight,
    Calendar,
    Info,
} from 'lucide-react';
import { getLayer1Documents, getLayer2Documents } from '../../data/navigation';
import { useState } from 'react';
import DocumentSummaryModal from '../modals/DocumentSummaryModal';

const iconMap: Record<string, any> = {
    BookOpen,
    DollarSign,
    Users,
    Package,
    TrendingUp,
    Truck,
    FileText,
};

export default function NavigationCards() {
    const { t } = useTranslation();
    const layer1Docs = getLayer1Documents();
    const layer2Docs = getLayer2Documents();
    const [selectedDoc, setSelectedDoc] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleQuickView = (doc: any) => {
        setSelectedDoc({
            title: doc.title,
            category: doc.category,
            lastUpdated: doc.lastUpdated,
            version: "1.0", // Default or derived
            sectionCount: Math.floor(doc.pageCount / 3), // Derived
            description: doc.summary ? t(doc.summary) : doc.description,
            structuredSummary: doc.structuredSummary,
            href: `/document/${doc.id}`
        });
        setIsModalOpen(true);
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-12">
            {/* Layer 1: Company Manual */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
                    Foundation Document
                </h2>

                <motion.div variants={container} initial="hidden" animate="show">
                    {layer1Docs.map((doc) => {
                        const Icon = iconMap[doc.icon];
                        return (
                            <motion.div key={doc.id} variants={item}>
                                <Card
                                    variant="glass"
                                    className="group"
                                >
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                        {/* Icon */}
                                        <div className={`p-4 rounded-xl bg-gradient-to-br ${doc.color} flex-shrink-0`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">
                                                    {doc.title}
                                                </h3>
                                                <button
                                                    onClick={() => handleQuickView(doc)}
                                                    className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 transition-colors"
                                                    title="Quick Summary"
                                                >
                                                    <Info className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                                {doc.description}
                                            </p>

                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <FileText className="w-4 h-4" />
                                                    {doc.pageCount} pages
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    Updated {doc.lastUpdated}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Action */}
                                        <div>
                                            <Link to={`/document/${doc.id}`}>
                                                <Button variant="primary" icon={<ArrowRight className="w-4 h-4 rtl:-scale-x-100" />}>
                                                    View Document
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Layer 2: Core Modules */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
                    Core Modules
                </h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {layer2Docs.map((doc) => {
                        const Icon = iconMap[doc.icon];
                        return (
                            <motion.div key={doc.id} variants={item}>
                                <Card variant="glass" className="h-full flex flex-col">
                                    {/* Colored Header */}
                                    <div className={`-mx-6 -mt-6 mb-4 p-6 rounded-t-xl bg-gradient-to-br ${doc.color} flex justify-between items-start`}>
                                        <div>
                                            <Icon className="w-10 h-10 text-white mb-3" />
                                            <h3 className="text-xl font-bold text-white font-heading">
                                                {doc.title}
                                            </h3>
                                        </div>
                                        <button
                                            onClick={() => handleQuickView(doc)}
                                            className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
                                            title="Quick Summary"
                                        >
                                            <Info className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                                        {doc.description}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <FileText className="w-4 h-4" />
                                            {doc.pageCount} pages
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {doc.lastUpdated}
                                        </span>
                                    </div>

                                    {/* Action */}
                                    <Link to={`/document/${doc.id}`}>
                                        <Button variant="secondary" className="w-full" icon={<ArrowRight className="w-4 h-4 rtl:-scale-x-100" />}>
                                            View Document
                                        </Button>
                                    </Link>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Document Summary Modal */}
            {selectedDoc && (
                <DocumentSummaryModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    document={selectedDoc}
                />
            )}
        </section>
    );
}

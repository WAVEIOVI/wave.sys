import { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import { Search, Filter, FileText, Info } from 'lucide-react';
import Button from '../components/common/Button';
import RecordViewModal from '../components/RecordViewModal';
import { allManagementRecords } from '../data/records/index';
import type { ManagementRecord } from '../types/records';

export default function RecordsRepository() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDept, setSelectedDept] = useState<string>('all');
    const [previewingRecord, setPreviewingRecord] = useState<ManagementRecord | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePreview = (record: ManagementRecord) => {
        setPreviewingRecord(record);
        setIsModalOpen(true);
    };

    // Filter records
    const filteredRecords = useMemo(() => {
        return allManagementRecords.filter(record => {
            const matchesSearch = record.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                record.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesDept = selectedDept === 'all' || record.department === selectedDept;

            return matchesSearch && matchesDept;
        });
    }, [searchQuery, selectedDept]);

    const departments = [
        { id: 'Finance', name: 'Finance', color: 'from-blue-400 to-blue-600' },
        { id: 'HR', name: 'Human Resources', color: 'from-purple-400 to-purple-600' },
        { id: 'Sales', name: 'Sales', color: 'from-green-400 to-green-600' },
        { id: 'Operations', name: 'Operations', color: 'from-orange-400 to-orange-600' },
        { id: 'Inventory', name: 'Inventory', color: 'from-amber-400 to-amber-600' },
        { id: 'Administrative', name: 'Administrative', color: 'from-slate-400 to-slate-600' },
        { id: 'Quality', name: 'Quality', color: 'from-teal-400 to-teal-600' }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Header />

            <main className="flex-grow py-8">
                <Container>
                    {/* Header Section */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 font-heading">
                            Records Repository
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Access and download official management templates, forms, and policies.
                        </p>
                    </div>

                    {/* Search and Filters */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                            {/* Search */}
                            <div className="md:col-span-12 lg:col-span-5 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search templates..."
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Department Filter */}
                            <div className="md:col-span-6 lg:col-span-4">
                                <div className="relative">
                                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <select
                                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none"
                                        value={selectedDept}
                                        onChange={(e) => setSelectedDept(e.target.value)}
                                    >
                                        <option value="all">All Departments</option>
                                        {departments.map(dept => (
                                            <option key={dept.id} value={dept.id}>{dept.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Department Cards (if filtering by department or showing summary) */}
                    {selectedDept === 'all' && !searchQuery && (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                            {departments.map((dept) => (
                                <button
                                    key={dept.id}
                                    onClick={() => setSelectedDept(dept.id)}
                                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all group"
                                >
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${dept.color} mb-3 opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                                    <span className="text-xs font-semibold text-center text-gray-700 dark:text-gray-300">{dept.name}</span>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Records Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredRecords.map((record) => (
                            <div
                                key={record.id}
                                className="group bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 flex flex-col"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                {record.id}
                                            </span>
                                            <h3 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                {record.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-grow">
                                    {record.description}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50 mt-auto">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500">ID: {record.id}</span>
                                        <span className="text-xs font-medium text-gray-400">{record.category}</span>
                                    </div>

                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600"
                                        onClick={() => handlePreview(record)}
                                    >
                                        <Info className="w-4 h-4 mr-1" />
                                        View
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredRecords.length === 0 && (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                                <FileText className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">No records found</h3>
                            <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedDept('all'); }}
                                className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}

                    {/* Record View Modal */}
                    <RecordViewModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        record={previewingRecord}
                    />
                </Container>
            </main>

            <Footer />
        </div >
    );
}

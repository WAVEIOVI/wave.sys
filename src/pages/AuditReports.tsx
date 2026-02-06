import { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import { audits, auditCategories } from '../data/audits';
import { Search, Filter, PieChart, BarChart2, Calendar, CheckCircle, Clock, FileText } from 'lucide-react';
import Button from '../components/common/Button';
import AuditReportModal from '../components/modals/AuditReportModal';

export default function AuditReports() {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'reports'>('dashboard');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [previewingAudit, setPreviewingAudit] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePreview = (audit: any) => {
        setPreviewingAudit(audit);
        setIsModalOpen(true);
    };

    // Filter audits
    const filteredAudits = useMemo(() => {
        return audits.filter(audit => {
            const matchesSearch = audit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                audit.id.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || audit.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    // Stats calculation
    const stats = {
        total: audits.length,
        completed: audits.filter(a => a.status === 'completed').length,
        inProgress: audits.filter(a => a.status === 'in-progress').length,
        draft: audits.filter(a => a.status === 'draft').length,
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Header />

            <main className="flex-grow py-8">
                <Container>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 font-heading">
                                Audit Reports
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400">
                                Track compliance, view reports, and monitor action items.
                            </p>
                        </div>

                        <div className="flex bg-white dark:bg-gray-800 p-1 rounded-lg border border-gray-200 dark:border-gray-700 mt-4 md:mt-0">
                            <button
                                onClick={() => setActiveTab('dashboard')}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'dashboard' ? 'bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                            >
                                Dashboard
                            </button>
                            <button
                                onClick={() => setActiveTab('reports')}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'reports' ? 'bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                            >
                                All Reports
                            </button>
                        </div>
                    </div>

                    {activeTab === 'dashboard' && (
                        <div className="space-y-8">
                            {/* Stats Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Audits</p>
                                            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stats.total}</p>
                                        </div>
                                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                                            <BarChart2 className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Completed</p>
                                            <p className="text-2xl font-bold text-green-600 dark:text-green-500 mt-1">{stats.completed}</p>
                                        </div>
                                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">In Progress</p>
                                            <p className="text-2xl font-bold text-orange-600 dark:text-orange-500 mt-1">{stats.inProgress}</p>
                                        </div>
                                        <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-orange-600 dark:text-orange-400">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Drafts</p>
                                            <p className="text-2xl font-bold text-gray-600 dark:text-gray-300 mt-1">{stats.draft}</p>
                                        </div>
                                        <div className="p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg text-gray-600 dark:text-gray-400">
                                            <FileText className="w-6 h-6" /> {/* Using FileText import needed */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Categories Grid */}
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Audit Categories</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                                {auditCategories.map((cat) => (
                                    <div key={cat.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4`}>
                                            {/* Icon placeholder logic */}
                                            <PieChart className="text-white w-6 h-6" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">{cat.name}</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{cat.reportCount} Reports</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'reports' && (
                        <div className="space-y-6">
                            {/* Filters */}
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row gap-4">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Search audits..."
                                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <div className="relative w-full md:w-64">
                                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <select
                                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        <option value="all">All Categories</option>
                                        {auditCategories.map(c => (
                                            <option key={c.id} value={c.id}>{c.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* List */}
                            <div className="space-y-4">
                                {filteredAudits.map((audit) => (
                                    <div
                                        key={audit.id}
                                        className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary-500 dark:hover:border-primary-500 transition-colors cursor-pointer group"
                                        onClick={() => handlePreview(audit)}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors`}>
                                                <BarChart2 className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">{audit.id}</span>
                                                    <span className={`px-2 py-0.5 rounded text-[10px] font-medium uppercase ${audit.status === 'completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                        audit.status === 'in-progress' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                                                            'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                                                        }`}>
                                                        {audit.status}
                                                    </span>
                                                </div>
                                                <h3 className="font-bold text-gray-900 dark:text-white">{audit.title}</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{audit.category.toUpperCase()} • {audit.department} • {audit.auditor}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {audit.auditDate}
                                            </div>
                                            <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); handlePreview(audit); }}>View Report</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {/* Audit Report Modal */}
                    {previewingAudit && (
                        <AuditReportModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            audit={previewingAudit}
                        />
                    )}
                </Container>
            </main>

            <Footer />
        </div>
    );
}



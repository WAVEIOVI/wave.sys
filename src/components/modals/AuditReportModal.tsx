import { useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import {
    BarChart2, AlertCircle, FileText, Share2,
    Activity, DollarSign, ShieldAlert, User, Loader2
} from 'lucide-react';
import { AuditReport } from '../../types/audit.types';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart as RechartsPieChart, Pie, Cell
} from 'recharts';
import { downloadPDF } from '../../utils/pdf/generatePDF';
import { AuditPDF } from '../pdf/AuditPDF';

interface AuditReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    audit: AuditReport;
}

export default function AuditReportModal({ isOpen, onClose, audit }: AuditReportModalProps) {
    const [activeTab, setActiveTab] = useState<'overview' | 'findings' | 'departments' | 'risks' | 'roi'>('overview');
    const [pdfLoading, setPdfLoading] = useState(false);

    const handleExportPdf = async () => {
        setPdfLoading(true);
        try {
            const doc = <AuditPDF audit={audit} />;
            const filename = `${audit.id}-${audit.title.toLowerCase().replace(/\s+/g, '-')}.pdf`;
            await downloadPDF(doc, filename);
        } catch (e) {
            console.error('Audit PDF export failed:', e);
        } finally {
            setPdfLoading(false);
        }
    };

    const statusColor = {
        'completed': 'text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400',
        'in-progress': 'text-orange-600 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-400',
        'draft': 'text-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-gray-400'
    }[audit.status];

    const hasDetailedContent = !!audit.content.detailedExecSummary;

    // Chart Data Helpers
    const departmentChartData = audit.content.departmentAssessments?.map(d => ({
        name: d.name,
        score: d.score,
        risk: d.complianceLevel
    }));

    const riskChartData = audit.content.riskAnalysis?.map(r => ({
        name: r.category,
        score: r.score
    }));

    const RISK_COLORS = ['#EF4444', '#F97316', '#EAB308', '#22C55E'];

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Audit Report" size="xl">
            <div className="flex flex-col h-[80vh] max-h-[800px]">
                {/* Header */}
                <div className="flex-none pb-6 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex gap-4">
                            <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-2xl text-gray-400">
                                <BarChart2 className="w-10 h-10" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{audit.id}</span>
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${statusColor}`}>
                                        {audit.status}
                                    </span>
                                </div>
                                <h4 className="text-2xl font-black text-gray-900 dark:text-white leading-tight">{audit.title}</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                    {audit.category.toUpperCase()} • {audit.department} • {audit.auditDate}
                                </p>
                            </div>
                        </div>

                        {hasDetailedContent && audit.content.detailedExecSummary && (
                            <div className="flex flex-col items-center justify-center p-4 bg-primary-600 text-white rounded-2xl shadow-lg min-w-[120px]">
                                <span className="text-xs font-bold uppercase tracking-widest opacity-80">Score</span>
                                <span className="text-4xl font-black">{audit.content.detailedExecSummary.overallScore}/100</span>
                                <span className="text-[10px] font-medium bg-white/20 px-2 py-0.5 rounded mt-1">
                                    {audit.content.detailedExecSummary.riskLevel} Risk
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Navigation Tabs (Only if detailed content exists) */}
                    {hasDetailedContent && (
                        <div className="flex gap-2 mt-6 overflow-x-auto pb-2 scrollbar-hide">
                            {[
                                { id: 'overview', label: 'Overview', icon: FileText },
                                { id: 'findings', label: 'Detailed Findings', icon: AlertCircle },
                                { id: 'departments', label: 'Departments', icon: User },
                                { id: 'risks', label: 'Risk Analysis', icon: ShieldAlert },
                                { id: 'roi', label: 'Cost Benefit', icon: DollarSign },
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`
                                        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all
                                        ${activeTab === tab.id
                                            ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400'
                                            : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800'
                                        }
                                    `}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Content Area */}
                <div className="flex-grow overflow-y-auto py-6 pr-2">
                    {!hasDetailedContent ? (
                        /* Fallback for simple audits */
                        <div className="space-y-6">
                            <div className="p-5 bg-gray-50 dark:bg-gray-900/50 rounded-2xl">
                                <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Executive Summary</h5>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{audit.content.executiveSummary}</p>
                            </div>
                            <div>
                                <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Key Findings</h5>
                                <ul className="space-y-2">
                                    {audit.content.findings.map((finding, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                            <span className="text-primary-500">•</span>
                                            {finding}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        /* Detailed Views */
                        <div className="space-y-8">
                            {activeTab === 'overview' && (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-6 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-2xl">
                                            <div className="flex items-center gap-3 mb-4">
                                                <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                                                <h5 className="font-bold text-red-900 dark:text-red-300">Critical Issues</h5>
                                            </div>
                                            <p className="text-red-800 dark:text-red-200 text-3xl font-black mb-1">
                                                {audit.content.detailedExecSummary?.criticalFindingsCount}
                                            </p>
                                            <p className="text-xs text-red-600 dark:text-red-400 font-medium uppercase tracking-wide">High Priority Findings</p>
                                        </div>
                                        <div className="p-6 bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/30 rounded-2xl">
                                            <div className="flex items-center gap-3 mb-4">
                                                <Activity className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                                <h5 className="font-bold text-primary-900 dark:text-primary-300">Overall Score</h5>
                                            </div>
                                            <p className="text-primary-800 dark:text-primary-200 text-3xl font-black mb-1">
                                                {audit.content.detailedExecSummary?.overallScore}/100
                                            </p>
                                            <p className="text-xs text-primary-600 dark:text-primary-400 font-medium uppercase tracking-wide">System Readiness</p>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm">
                                        <h5 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">Executive Summary</h5>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            {audit.content.detailedExecSummary?.summary}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'findings' && (
                                <div className="space-y-4">
                                    {audit.content.detailedFindings?.map((finding) => (
                                        <div key={finding.id} className="p-5 bg-white dark:bg-gray-800 border-l-4 border-l-red-500 rounded-r-xl shadow-sm">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="px-2 py-0.5 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-[10px] font-bold uppercase rounded">
                                                        {finding.severity}
                                                    </span>
                                                    <span className="text-xs text-gray-400 font-mono">{finding.id}</span>
                                                </div>
                                                <span className="text-xs font-medium text-gray-500">{finding.department}</span>
                                            </div>
                                            <h5 className="font-bold text-gray-900 dark:text-white mb-2">{finding.description}</h5>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
                                                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Evidence</span>
                                                    <p className="text-gray-600 dark:text-gray-400">{finding.evidence}</p>
                                                </div>
                                                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Impact</span>
                                                    <p className="text-gray-600 dark:text-gray-400">{finding.impact.description}</p>
                                                    {finding.impact.estimatedCost && (
                                                        <span className="text-red-600 dark:text-red-400 text-xs font-bold mt-1 block">
                                                            Cost: {finding.impact.estimatedCost}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'departments' && (
                                <div className="space-y-6">
                                    <div className="h-64 w-full">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={departmentChartData}>
                                                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                                                <XAxis dataKey="name" fontSize={12} />
                                                <YAxis domain={[0, 100]} fontSize={12} />
                                                <Tooltip
                                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                                />
                                                <Bar dataKey="score" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {audit.content.departmentAssessments?.map((dept) => (
                                            <div key={dept.name} className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                                <div className="flex justify-between items-center mb-2">
                                                    <h6 className="font-bold text-gray-900 dark:text-white">{dept.name}</h6>
                                                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${dept.score < 40 ? 'bg-red-100 text-red-700' :
                                                        dept.score < 70 ? 'bg-orange-100 text-orange-700' :
                                                            'bg-green-100 text-green-700'
                                                        }`}>
                                                        Score: {dept.score}
                                                    </span>
                                                </div>
                                                <ul className="space-y-1">
                                                    {dept.keyIssues.map((issue, i) => (
                                                        <li key={i} className="text-xs text-gray-500 dark:text-gray-400 flex items-start gap-2">
                                                            <span className="text-red-400 mt-0.5">•</span>
                                                            {issue}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'risks' && (
                                <div className="space-y-6">
                                    <div className="h-64 w-full">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <RechartsPieChart>
                                                <Pie
                                                    data={riskChartData}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={60}
                                                    outerRadius={80}
                                                    paddingAngle={5}
                                                    dataKey="score"
                                                >
                                                    {riskChartData?.map((_, index) => (
                                                        <Cell key={`cell-${index}`} fill={RISK_COLORS[index % RISK_COLORS.length]} />
                                                    ))}
                                                </Pie>
                                                <Tooltip />
                                                <Legend />
                                            </RechartsPieChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {audit.content.riskAnalysis?.map((risk) => (
                                            <div key={risk.category} className="p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden">
                                                <div className={`absolute top-0 right-0 w-24 h-24  transform translate-x-8 -translate-y-8 rounded-full opacity-10 ${risk.impact === 'Severe' ? 'bg-red-500' : 'bg-orange-500'
                                                    }`} />
                                                <h6 className="font-bold text-gray-900 dark:text-white mb-4">{risk.category} Risk</h6>

                                                <div className="space-y-3">
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-500">Probability</span>
                                                        <span className="font-bold text-gray-700 dark:text-gray-300">{risk.probability}</span>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-500">Impact</span>
                                                        <span className="font-bold text-red-600 dark:text-red-400">{risk.impact}</span>
                                                    </div>
                                                    <div className="pt-3 mt-3 border-t border-gray-100 dark:border-gray-700">
                                                        <span className="text-[10px] font-bold text-gray-400 uppercase">Mitigation</span>
                                                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{risk.mitigationStrategy}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'roi' && audit.content.costBenefitAnalysis && (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl text-center">
                                            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase">ROI</span>
                                            <p className="text-3xl font-black text-emerald-700 dark:text-emerald-300">{audit.content.costBenefitAnalysis.roi}%</p>
                                        </div>
                                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
                                            <span className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase">Payback</span>
                                            <p className="text-3xl font-black text-blue-700 dark:text-blue-300">{audit.content.costBenefitAnalysis.paybackPeriod}m</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h6 className="font-bold text-gray-900 dark:text-white mb-4">Investment Required</h6>
                                            <ul className="space-y-3">
                                                {audit.content.costBenefitAnalysis.investment.map((item, i) => (
                                                    <li key={i} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.item}</span>
                                                        <span className="font-bold text-gray-900 dark:text-white">{item.cost.toLocaleString()} TND</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h6 className="font-bold text-gray-900 dark:text-white mb-4">Projected Benefits (Annual)</h6>
                                            <ul className="space-y-3">
                                                {audit.content.costBenefitAnalysis.benefits.map((item, i) => (
                                                    <li key={i} className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-900/20">
                                                        <div className="flex flex-col">
                                                            <span className="text-sm text-gray-900 dark:text-white font-medium">{item.item}</span>
                                                            <span className="text-[10px] text-green-600 dark:text-green-400 uppercase font-bold">{item.type}</span>
                                                        </div>
                                                        <span className="font-bold text-green-700 dark:text-green-400">{item.annualValue.toLocaleString()} TND</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                <div className="flex-none pt-6 border-t border-gray-100 dark:border-gray-800 flex gap-3">
                    <Button
                        variant="primary"
                        className="flex-1 flex justify-center gap-2"
                        onClick={handleExportPdf}
                        disabled={pdfLoading}
                    >
                        {pdfLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
                        {pdfLoading ? 'Generating PDF...' : 'Download Full PDF Report'}
                    </Button>
                    <Button variant="secondary" className="flex justify-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

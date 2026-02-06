import DocumentLayout from '../../../components/document-elements/DocumentLayout';
import LeadManagement from './LeadManagement';
import CustomerAgreements from './CustomerAgreements';
import PostQuotation from './PostQuotation';
import RelationshipManagement from './RelationshipManagement';
import ProblemResolution from './ProblemResolution';
import SalesPerformance from './SalesPerformance';

export {
    LeadManagement,
    CustomerAgreements,
    PostQuotation,
    RelationshipManagement,
    ProblemResolution,
    SalesPerformance
};

export default function SalesCustomer() {
    const tocItems = [
        { id: 'section-1', title: 'Section 1: Getting Customers (Lead to Sale)', level: 1 },
        { id: 'lead-sources', title: '1.1 Lead Sources & Tracking', level: 2 },
        { id: 'qualification', title: '1.2 Initial Customer Contact & Qualification', level: 2 },
        { id: 'site-survey', title: '1.3 Site Survey Process', level: 2 },
        { id: 'quotation-prep', title: '1.4 Quotation Preparation', level: 2 },
        { id: 'follow-up', title: '1.5 Follow-Up & Closing', level: 2 },
        { id: 'objections', title: '1.6 Overcoming Common Objections', level: 2 },

        { id: 'section-2', title: 'Section 2: Customer Agreements & Price Lists', level: 1 },
        { id: 'agreement-types', title: '2.1 Agreement Types & Structure', level: 2 },
        { id: 'content-requirements', title: '2.2 Agreement Content Requirements', level: 2 },
        { id: 'approval-process', title: '2.3 Agreement Approval Process', level: 2 },
        { id: 'price-list-mgmt', title: '2.4 Price List Management', level: 2 },

        { id: 'section-3', title: 'Section 3: Post-Quotation Process', level: 1 },
        { id: 'process-overview', title: '3.1 Overview of the Process', level: 2 },
        { id: 'confirmation-methods', title: '3.2 Client Confirmation Methods', level: 2 },
        { id: 'work-order', title: '3.3 Work Order Creation', level: 2 },
        { id: 'sla-prep', title: '3.4 SLA Preparation', level: 2 },

        { id: 'section-4', title: 'Section 4: Managing Customer Relationships', level: 1 },
        { id: 'data-management', title: '4.1 Customer Information Management (WAVE PLUS)', level: 2 },
        { id: 'history-tracking', title: '4.2 Service History Tracking', level: 2 },
        { id: 'renewal-cycle', title: '4.3 MSA Renewal Process', level: 2 },
        { id: 'key-accounts', title: '4.4 Key Account Management', level: 2 },
        { id: 'comm-standards', title: '4.5 Customer Communication Standards', level: 2 },

        { id: 'section-5', title: 'Section 5: Handling Problems', level: 1 },
        { id: 'complaint-procedure', title: '5.1 Customer Complaint Procedure', level: 2 },
        { id: 'service-failure', title: '5.2 Service Failure Response', level: 2 },
        { id: 'escalation-guidelines', title: '5.3 Escalation Guidelines', level: 2 },
        { id: 'credit-refund', title: '5.4 Credit & Refund Decisions', level: 2 },

        { id: 'section-6', title: 'Section 6: Sales Performance & Improvement', level: 1 },
        { id: 'targets-kpis', title: '6.1 Sales Targets & KPIs', level: 2 },
        { id: 'commission-structure', title: '6.2 Commission Structure', level: 2 },
        { id: 'lost-sales', title: '6.3 Lost Sales Tracking', level: 2 },
        { id: 'competitive-intelligence', title: '6.4 Competitive Intelligence', level: 2 },
        { id: 'improvement', title: '6.5 Continuous Improvement', level: 2 },
        { id: 'doc-control', title: 'Document Control', level: 1 },
    ];

    return (
        <DocumentLayout title="Sales & Customer Management Playbook" category="Business Development" docId="sales-customer" tocItems={tocItems}>
            <div className="document-content">
                {/* DOCUMENT TITLE */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">SALES & CUSTOMER MANAGEMENT PLAYBOOK</h1>
                    <h2 className="text-xl text-primary-600 dark:text-primary-400 mt-1">Sécurité Services Plus (SS+)</h2>
                    <h3 className="text-base text-slate-600 dark:text-slate-400 mt-0.5">SALES & CUSTOMER MANAGEMENT PROCESSES</h3>
                </div>

                {/* HEADER INFO */}
                <div className="mb-8 p-4 bg-gray-50 dark:bg-slate-900/50 rounded-lg text-sm text-gray-600 dark:text-gray-400 border border-slate-200 dark:border-slate-800 shadow-inner">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p><strong>Version:</strong> 1.2</p>
                            <p><strong>Effective Date:</strong> January 2026</p>
                            <p><strong>Owner:</strong> Najla BEN SALEM</p>
                        </div>
                        <div>
                            <p><strong>Review Frequency:</strong> Annual</p>
                            <p><strong>Approved By:</strong> Anis HWAS (WAVE IO)</p>
                        </div>
                    </div>
                </div>

                {/* TABLE OF CONTENTS */}
                <div className="mb-10 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Table of Contents</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                        {tocItems.filter(item => item.level === 1).map(item => (
                            <li key={item.id} className="font-medium text-slate-700 dark:text-slate-300">
                                <a href={`#${item.id}`} className="hover:text-primary-600 hover:underline">{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <LeadManagement />
                <CustomerAgreements />
                <PostQuotation />
                <RelationshipManagement />
                <ProblemResolution />
                <SalesPerformance />
            </div>
        </DocumentLayout>
    );
}

export const SalesCustomerSections = [
    { id: 'section-1', title: 'Section 1: Getting Customers', component: LeadManagement },
    { id: 'section-2', title: 'Section 2: Customer Agreements', component: CustomerAgreements },
    { id: 'section-3', title: 'Section 3: Post-Quotation Process', component: PostQuotation },
    { id: 'section-4', title: 'Section 4: Managing Customer Relationships', component: RelationshipManagement },
    { id: 'section-5', title: 'Section 5: Handling Problems', component: ProblemResolution },
    { id: 'section-6', title: 'Section 6: Sales Performance & Improvement', component: SalesPerformance }
];

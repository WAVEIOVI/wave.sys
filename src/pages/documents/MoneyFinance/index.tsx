import { useTranslation } from 'react-i18next';
import FinancialStructure from './FinancialStructure';
import RevenueInvoicing from './RevenueInvoicing';
import PaymentsCollections from './PaymentsCollections';
import ExpensesPurchases from './ExpensesPurchases';
import PricingMargins from './PricingMargins';
import CreditManagement from './CreditManagement';
import ReportingKPIs from './ReportingKPIs';
import AccountingCompliance from './AccountingCompliance';
import FinancialPlanning from './FinancialPlanning';
import Appendices from './Appendices';

import DocumentLayout from '../../../components/document-elements/DocumentLayout';

// Export all components for use in the main document viewer
export {
    FinancialStructure,
    RevenueInvoicing,
    PaymentsCollections,
    ExpensesPurchases,
    PricingMargins,
    CreditManagement,
    ReportingKPIs,
    AccountingCompliance,
    FinancialPlanning,
    Appendices
};

export default function MoneyFinance() {
    const { t } = useTranslation();

    const tocItems = [
        { id: 'section-1', title: t('moneyfinance.toc.section1'), level: 1 },
        { id: 'financial-org', title: t('moneyfinance.toc.section1sub1'), level: 2 },
        { id: 'banking', title: t('moneyfinance.toc.section1sub2'), level: 2 },
        { id: 'authority-matrix', title: t('moneyfinance.toc.section1sub3'), level: 2 },
        { id: 'internal-controls', title: t('moneyfinance.toc.section1sub4'), level: 2 },

        { id: 'section-2', title: t('moneyfinance.toc.section2'), level: 1 },
        { id: 'revenue-recognition', title: t('moneyfinance.toc.section2sub1'), level: 2 },
        { id: 'invoicing-standards', title: t('moneyfinance.toc.section2sub2'), level: 2 },
        { id: 'tax-rates', title: t('moneyfinance.toc.section2sub3'), level: 2 },

        { id: 'section-3', title: t('moneyfinance.toc.section3'), level: 1 },
        { id: 'payment-methods', title: t('moneyfinance.toc.section3sub1'), level: 2 },
        { id: 'collections', title: t('moneyfinance.toc.section3sub2'), level: 2 },
        { id: 'cash-handling', title: t('moneyfinance.toc.section3sub3'), level: 2 },
        { id: 'bank-reconciliation', title: t('moneyfinance.toc.section3sub4'), level: 2 },

        { id: 'section-4', title: t('moneyfinance.toc.section4'), level: 1 },
        { id: 'po-system', title: t('moneyfinance.toc.section4sub1'), level: 2 },
        { id: 'expense-auth', title: t('moneyfinance.toc.section4sub2'), level: 2 },
        { id: 'petty-cash-mgt', title: t('moneyfinance.toc.section4sub3'), level: 2 },
        { id: 'travel-vehicle', title: t('moneyfinance.toc.section4sub4'), level: 2 },
        { id: 'supplier-payments', title: t('moneyfinance.toc.section4sub5'), level: 2 },

        { id: 'section-5', title: t('moneyfinance.toc.section5'), level: 1 },
        { id: 'cost-markup', title: t('moneyfinance.toc.section5sub1'), level: 2 },
        { id: 'price-list', title: t('moneyfinance.toc.section5sub2'), level: 2 },
        { id: 'discount-analysis', title: t('moneyfinance.toc.section5sub3'), level: 2 },
        { id: 'travel-fees', title: t('moneyfinance.toc.section5sub4'), level: 2 },

        { id: 'section-6', title: t('moneyfinance.toc.section6'), level: 1 },
        { id: 'credit-eval', title: t('moneyfinance.toc.section6sub1'), level: 2 },
        { id: 'credit-monitoring', title: t('moneyfinance.toc.section6sub2'), level: 2 },
        { id: 'aging-analysis', title: t('moneyfinance.toc.section6sub3'), level: 2 },
        { id: 'bad-debt', title: t('moneyfinance.toc.section6sub4'), level: 2 },

        { id: 'section-7', title: t('moneyfinance.toc.section7'), level: 1 },
        { id: 'monthly-reports', title: t('moneyfinance.toc.section7sub1'), level: 2 },
        { id: 'kpis', title: t('moneyfinance.toc.section7sub2'), level: 2 },
        { id: 'budget-management', title: t('moneyfinance.toc.section7sub3'), level: 2 },
        { id: 'fiscal-calendar', title: t('moneyfinance.toc.section7sub4'), level: 2 },

        { id: 'section-8', title: t('moneyfinance.toc.section8'), level: 1 },
        { id: 'chart-accounts', title: t('moneyfinance.toc.section8sub1'), level: 2 },
        { id: 'softcom-system', title: t('moneyfinance.toc.section8sub2'), level: 2 },
        { id: 'tax-compliance', title: t('moneyfinance.toc.section8sub3'), level: 2 },
        { id: 'record-retention', title: t('moneyfinance.toc.section8sub4'), level: 2 },
        { id: 'external-audit', title: t('moneyfinance.toc.section8sub5'), level: 2 },

        { id: 'section-9', title: t('moneyfinance.toc.section9'), level: 1 },
        { id: 'budgeting-process', title: t('moneyfinance.toc.section9sub1'), level: 2 },
        { id: 'cash-forecasting', title: t('moneyfinance.toc.section9sub2'), level: 2 },
        { id: 'capex-approval', title: t('moneyfinance.toc.section9sub3'), level: 2 },
        { id: 'risk-mitigation', title: t('moneyfinance.toc.section9sub4'), level: 2 },
        { id: 'insurance', title: t('moneyfinance.toc.section9sub5'), level: 2 },

        { id: 'appendices', title: t('moneyfinance.toc.appendices'), level: 1 },
    ];

    return (
        <DocumentLayout title={t('moneyfinance.title')} category="Financial Management" docId="money-finance" tocItems={tocItems}>
            <div className="document-content">
                {/* DOCUMENT TITLE */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('moneyfinance.documentnumber')}: {t('moneyfinance.title').toUpperCase()}</h1>
                    <h2 className="text-xl text-primary-600 dark:text-primary-400 mt-1">{t('moneyfinance.companyname')}</h2>
                    <h3 className="text-base text-slate-600 dark:text-slate-400 mt-0.5">{t('moneyfinance.companytagline')}</h3>
                </div>

                {/* HEADER INFO */}
                <div className="mb-8 p-4 bg-gray-50 dark:bg-slate-900/50 rounded-lg text-sm text-gray-600 dark:text-gray-400 border border-slate-200 dark:border-slate-800 shadow-inner">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p><strong>{t('records.version')}:</strong> {t('moneyfinance.meta.version')}</p>
                            <p><strong>{t('records.effectiveDate')}:</strong> {t('moneyfinance.meta.effectivedate')}</p>
                            <p><strong>{t('moneyfinance.headers.documentowner')}:</strong> {t('moneyfinance.meta.documentowner')}</p>
                            <p><strong>{t('moneyfinance.headers.approvedby')}:</strong> {t('moneyfinance.meta.approvedby')}</p>
                            <p><strong>{t('moneyfinance.headers.reviewfrequency')}:</strong> {t('moneyfinance.meta.reviewfrequency')}</p>
                        </div>
                    </div>
                </div>

                {/* TABLE OF CONTENTS */}
                <div className="mb-10 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{t('moneyfinance.toc.title')}</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                        {tocItems.filter(item => item.level === 1).map(item => (
                            <li key={item.id} className="font-medium text-slate-700 dark:text-slate-300">
                                <a href={`#${item.id}`} className="hover:text-primary-600 hover:underline">{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <FinancialStructure />
                <RevenueInvoicing />
                <PaymentsCollections />
                <ExpensesPurchases />
                <PricingMargins />
                <CreditManagement />
                <ReportingKPIs />
                <AccountingCompliance />
                <FinancialPlanning />
                <Appendices />
            </div>
        </DocumentLayout>
    );
}

export const MoneyFinanceSections = [
    { id: 'section-1', title: '1. Financial Structure', component: FinancialStructure },
    { id: 'section-2', title: '2. Revenue & Invoicing', component: RevenueInvoicing },
    { id: 'section-3', title: '3. Payments & Collections', component: PaymentsCollections },
    { id: 'section-4', title: '4. Expenses & Purchases', component: ExpensesPurchases },
    { id: 'section-5', title: '5. Pricing & Margins', component: PricingMargins },
    { id: 'section-6', title: '6. Credit Management', component: CreditManagement },
    { id: 'section-7', title: '7. Reporting & KPIs', component: ReportingKPIs },
    { id: 'section-8', title: '8. Accounting & Compliance', component: AccountingCompliance },
    { id: 'section-9', title: '9. Financial Planning', component: FinancialPlanning },
    { id: 'appendices', title: 'Appendices', component: Appendices }
];


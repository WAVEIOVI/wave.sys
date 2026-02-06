import React, { useMemo } from 'react';
import DocumentLayout from '../../../components/document-elements/DocumentLayout';
import WelcomeMessage from './WelcomeMessage';
import AboutCompany from './AboutCompany';
import EmploymentInfo from './EmploymentInfo';
import PayAndBenefits from './PayAndBenefits';
import TimeOff from './TimeOff';
import WorkplacePolicies from './WorkplacePolicies';
import PerformanceDevelopment from './PerformanceDevelopment';
import WorkplaceBehavior from './WorkplaceBehavior';
import HealthAndSafety from './HealthAndSafety';
import PracticalInfo from './PracticalInfo';
import Acknowledgment from './Acknowledgment';

const Handbook: React.FC = () => {
    const tocItems = useMemo(() => [
        { id: 'section-1', title: 'Section 1: About SS+', level: 1 },
        { id: 'section-2', title: 'Section 2: Your Employment', level: 1 },
        { id: 'section-3', title: 'Section 3: Your Pay & Benefits', level: 1 },
        { id: 'section-4', title: 'Section 4: Time Off & Leave', level: 1 },
        { id: 'section-5', title: 'Section 5: Workplace Policies', level: 1 },
        { id: 'section-6', title: 'Section 6: Performance & Development', level: 1 },
        { id: 'section-7', title: 'Section 7: Workplace Behavior', level: 1 },
        { id: 'section-8', title: 'Section 8: Health & Safety', level: 1 },
        { id: 'section-9', title: 'Section 9: Practical Information', level: 1 },
        { id: 'section-10', title: 'Section 10: Acknowledgment', level: 1 },
    ], []);

    return (
        <DocumentLayout
            title="Employee Handbook"
            category="Employee Manual"
            docId="handbook"
            tocItems={tocItems}
        >
            <div className="mb-12 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                        <span className="block text-slate-500 dark:text-slate-400 font-medium">Version</span>
                        <span className="font-bold text-slate-900 dark:text-white">1.0</span>
                    </div>
                    <div>
                        <span className="block text-slate-500 dark:text-slate-400 font-medium">Effective Date</span>
                        <span className="font-bold text-slate-900 dark:text-white">January 2025</span>
                    </div>
                    <div>
                        <span className="block text-slate-500 dark:text-slate-400 font-medium">Owner</span>
                        <span className="font-bold text-slate-900 dark:text-white">Management Team</span>
                    </div>
                    <div>
                        <span className="block text-slate-500 dark:text-slate-400 font-medium">Review Frequency</span>
                        <span className="font-bold text-slate-900 dark:text-white">Annual</span>
                    </div>
                </div>
            </div>

            <WelcomeMessage />
            <AboutCompany />
            <EmploymentInfo />
            <PayAndBenefits />
            <TimeOff />
            <WorkplacePolicies />
            <PerformanceDevelopment />
            <WorkplaceBehavior />
            <HealthAndSafety />
            <PracticalInfo />
            <Acknowledgment />
        </DocumentLayout>
    );
};

export default Handbook;

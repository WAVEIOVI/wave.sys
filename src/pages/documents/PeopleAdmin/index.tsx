import DocumentLayout from '../../../components/document-elements/DocumentLayout';
import OrganizationalStructure from './OrganizationalStructure';
import RecruitmentOnboarding from './RecruitmentOnboarding';
import EmploymentTerms from './EmploymentTerms';
import CompensationBenefits from './CompensationBenefits';
import TrainingDevelopment from './TrainingDevelopment';
import PerformanceManagement from './PerformanceManagement';
import AttendanceLeave from './AttendanceLeave';
import DisciplineTermination from './DisciplineTermination';
import WorkplacePolicies from './WorkplacePolicies';
import EmployeeRelations from './EmployeeRelations';
import AdministrativeProcesses from './AdministrativeProcesses';
import HealthSafety from './HealthSafety';
import Appendices from './Appendices';

export {
    OrganizationalStructure,
    RecruitmentOnboarding,
    EmploymentTerms,
    CompensationBenefits,
    TrainingDevelopment,
    PerformanceManagement,
    AttendanceLeave,
    DisciplineTermination,
    WorkplacePolicies,
    EmployeeRelations,
    AdministrativeProcesses,
    HealthSafety,
    Appendices
};

export default function PeopleAdmin() {
    const tocItems = [
        { id: 'section-1', title: '1. Organizational Structure', level: 1 },
        { id: 'team-composition', title: '1.1 Current Team Composition', level: 2 },
        { id: 'org-chart', title: '1.2 Organizational Chart', level: 2 },
        { id: 'role-definitions', title: '1.3 Role Definitions', level: 2 },
        { id: 'career-progression', title: '1.4 Career Progression Paths', level: 2 },

        { id: 'section-2', title: '2. Recruitment & Hiring', level: 1 },
        { id: 'workforce-planning', title: '2.1 Workforce Planning', level: 2 },
        { id: 'job-descriptions', title: '2.2 Job Descriptions (All Positions)', level: 2 },
        { id: 'recruitment-process', title: '2.3 Recruitment Process', level: 2 },
        { id: 'selection-interview', title: '2.4 Selection & Interview Process', level: 2 },
        { id: 'offer-onboarding', title: '2.5 Offer & Onboarding', level: 2 },

        { id: 'section-3', title: '3. Employment Terms & Conditions', level: 1 },
        { id: 'employment-contracts', title: '3.1 Employment Contracts (CDD & CDI)', level: 2 },
        { id: 'probation-period', title: '3.2 Trial/Probation Period Management', level: 2 },
        { id: 'working-hours', title: '3.3 Working Hours & Schedules', level: 2 },
        { id: 'overtime-policy', title: '3.4 Overtime Policy', level: 2 },
        { id: 'employee-handbook', title: '3.5 Employee Handbook', level: 2 },

        { id: 'section-4', title: '4. Compensation & Benefits', level: 1 },
        { id: 'salary-structure', title: '4.1 Salary Structure by Position', level: 2 },
        { id: 'salary-increases', title: '4.2 Annual Salary Increases', level: 2 },
        { id: 'commission-structure', title: '4.3 Commission Structure (Sales Team)', level: 2 },
        { id: 'allowances', title: '4.4 Allowances (Transport, Meals, Mobile, etc.)', level: 2 },
        { id: 'benefits-social-security', title: '4.5 Benefits & Social Security', level: 2 },
        { id: 'payroll-process', title: '4.6 Payroll Process', level: 2 },

        { id: 'section-5', title: '5. Training & Development', level: 1 },
        { id: 'onboarding-programs', title: '5.1 New Employee Onboarding Programs', level: 2 },
        { id: 'technical-training', title: '5.2 Technical Training (Fire Safety Certification)', level: 2 },
        { id: 'safety-training', title: '5.3 Safety Training', level: 2 },
        { id: 'sales-training', title: '5.4 Sales & Customer Service Training', level: 2 },
        { id: 'management-development', title: '5.5 Management Development', level: 2 },
        { id: 'training-records', title: '5.6 Training Records & Competency Matrix', level: 2 },

        { id: 'section-6', title: '6. Performance Management', level: 1 },
        { id: 'goal-setting', title: '6.1 Goal Setting & Objectives (Annual)', level: 2 },
        { id: 'performance-review', title: '6.2 Performance Review Process', level: 2 },
        { id: 'promotion-criteria', title: '6.3 Promotion Criteria', level: 2 },
        { id: 'performance-improvement', title: '6.4 Performance Improvement Plans', level: 2 },
        { id: 'recognition-rewards', title: '6.5 Recognition & Rewards', level: 2 },

        { id: 'section-7', title: '7. Attendance & Leave Management', level: 1 },
        { id: 'time-tracking', title: '7.1 Working Hours & Time Tracking', level: 2 },
        { id: 'attendance-tracking', title: '7.2 Attendance Tracking System', level: 2 },
        { id: 'leave-entitlement', title: '7.3 Annual Leave Entitlement', level: 2 },
        { id: 'leave-types', title: '7.4 Sick & Special Leave', level: 2 },

        { id: 'section-8', title: '8. Discipline & Termination', level: 1 },
        { id: 'code-of-conduct', title: '8.1 Code of Conduct', level: 2 },
        { id: 'common-infractions', title: '8.2 Common Discipline Issues', level: 2 },
        { id: 'progressive-discipline', title: '8.3 Progressive Discipline Process', level: 2 },
        { id: 'serious-misconduct', title: '8.4 Serious Misconduct', level: 2 },
        { id: 'termination-process', title: '8.5 Termination Process & Legal Requirements', level: 2 },
        { id: 'end-of-service', title: '8.6 End-of-Service Benefits', level: 2 },

        { id: 'section-9', title: '9. Workplace Policies', level: 1 },
        { id: 'workplace-hours', title: '9.1 Working Hours & Breaks', level: 2 },
        { id: 'dress-code', title: '9.2 Dress Code & Uniform Requirements', level: 2 },
        { id: 'technology-use', title: '9.3 Mobile Phone & Technology Use', level: 2 },
        { id: 'social-media', title: '9.4 Social Media Policy', level: 2 },
        { id: 'substance-abuse', title: '9.5 Smoking & Substance Policy', level: 2 },
        { id: 'vehicle-policy', title: '9.6 Vehicle Use Policy', level: 2 },
        { id: 'confidentiality', title: '9.7 Confidentiality & Non-Compete', level: 2 },

        { id: 'section-10', title: '10. Employee Relations', level: 1 },
        { id: 'communication-channels', title: '10.1 Communication & Meetings', level: 2 },
        { id: 'grievance-procedure', title: '10.3 Grievance Procedure', level: 2 },
        { id: 'recognition-programs', title: '10.4 Employee Recognition Programs', level: 2 },
        { id: 'team-events', title: '10.5 Team Events & Celebrations', level: 2 },

        { id: 'section-11', title: '11. Administrative Processes', level: 1 },
        { id: 'personnel-files', title: '11.1 Personnel File Management', level: 2 },
        { id: 'payroll-admin', title: '11.2 Payroll Administration', level: 2 },
        { id: 'cnss-compliance', title: '11.3 & 11.4 Regulatory Compliance', level: 2 },
        { id: 'internal-regulations', title: '11.5 Internal Regulations (Règlement Intérieur)', level: 2 },

        { id: 'section-12', title: '12. Health, Safety & Wellbeing', level: 1 },
        { id: 'workplace-safety', title: '12.1 Workplace Safety Program', level: 2 },
        { id: 'work-injuries', title: '12.2 Incident Reporting & Investigation', level: 2 },
        { id: 'cnss-claims', title: '12.3 Work-Related Injuries (CNSS Claims)', level: 2 },
        { id: 'health-wellness', title: '12.4 Health & Wellness Initiatives', level: 2 },

        { id: 'appendices', title: 'Appendices', level: 1 },
    ];

    return (
        <DocumentLayout title="People & Admin Playbook" category="Human Resources" docId="people-admin" tocItems={tocItems}>
            <div className="document-content">
                {/* DOCUMENT TITLE */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">DOCUMENT 05: PEOPLE & ADMIN PLAYBOOK</h1>
                    <h2 className="text-xl text-primary-600 dark:text-primary-400 mt-1">Sécurité Services Plus (SS+)</h2>
                    <h3 className="text-base text-slate-600 dark:text-slate-400 mt-0.5">Human Resources Management & Administrative Procedures</h3>
                </div>

                {/* HEADER INFO */}
                <div className="mb-8 p-4 bg-gray-50 dark:bg-slate-900/50 rounded-lg text-sm text-gray-600 dark:text-gray-400 border border-slate-200 dark:border-slate-800 shadow-inner">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p><strong>Version:</strong> 1.1</p>
                            <p><strong>Effective Date:</strong> November 2025</p>
                            <p><strong>Document Owner:</strong> Karim BEN SALEM (Manager) & Najla BEN SALEM (Co-Manager)</p>
                            <p><strong>Document created and developed by:</strong> Anis HWAS (WAVE IO)</p>
                            <p><strong>Review Frequency:</strong> Annually or as needed</p>
                        </div>
                    </div>
                </div>

                {/* TABLE OF CONTENTS */}
                <div className="mb-10 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">TABLE OF CONTENTS</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                        {tocItems.filter(item => item.level === 1).map(item => (
                            <li key={item.id} className="font-medium text-slate-700 dark:text-slate-300">
                                <a href={`#{item.id}`} className="hover:text-primary-600 hover:underline">{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <OrganizationalStructure />
                <RecruitmentOnboarding />
                <EmploymentTerms />
                <CompensationBenefits />
                <TrainingDevelopment />
                <PerformanceManagement />
                <AttendanceLeave />
                <DisciplineTermination />
                <WorkplacePolicies />
                <EmployeeRelations />
                <AdministrativeProcesses />
                <HealthSafety />
                <Appendices />
            </div>
        </DocumentLayout>
    );
}

export const PeopleAdminSections = [
    { id: 'section-1', title: '1. Organizational Structure', component: OrganizationalStructure },
    { id: 'section-2', title: '2. Recruitment & Hiring', component: RecruitmentOnboarding },
    { id: 'section-3', title: '3. Employment Terms & Conditions', component: EmploymentTerms },
    { id: 'section-4', title: '4. Compensation & Benefits', component: CompensationBenefits },
    { id: 'section-5', title: '5. Training & Development', component: TrainingDevelopment },
    { id: 'section-6', title: '6. Performance Management', component: PerformanceManagement },
    { id: 'section-7', title: '7. Attendance & Leave Management', component: AttendanceLeave },
    { id: 'section-8', title: '8. Discipline & Termination', component: DisciplineTermination },
    { id: 'section-9', title: '9. Workplace Policies', component: WorkplacePolicies },
    { id: 'section-10', title: '10. Employee Relations', component: EmployeeRelations },
    { id: 'section-11', title: '11. Administrative Processes', component: AdministrativeProcesses },
    { id: 'section-12', title: '12. Health, Safety & Wellbeing', component: HealthSafety },
    { id: 'appendices', title: 'Appendices', component: Appendices }
];

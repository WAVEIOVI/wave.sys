import { AuditReport, AuditCategoryInfo, ActionItem } from '../types/audit.types';

export const auditCategories: AuditCategoryInfo[] = [
    {
        id: 'financial',
        name: 'Financial Audit',
        description: 'Review of financial records, transactions, and statements.',
        icon: 'DollarSign',
        color: 'from-emerald-500 to-teal-600',
        reportCount: 12
    },
    {
        id: 'operational',
        name: 'Operational',
        description: 'Assessment of operational processes and efficiency.',
        icon: 'Activity',
        color: 'from-blue-500 to-indigo-600',
        reportCount: 18
    },
    {
        id: 'compliance',
        name: 'Compliance',
        description: 'Adherence to internal policies and external regulations.',
        icon: 'ShieldCheck',
        color: 'from-orange-500 to-red-600',
        reportCount: 8
    },
    {
        id: 'hr',
        name: 'HR & Culture',
        description: 'Review of HR practices, culture, and employee satisfaction.',
        icon: 'Users',
        color: 'from-purple-500 to-pink-600',
        reportCount: 6
    },
    {
        id: 'it',
        name: 'IT & Security',
        description: 'Evaluation of IT infrastructure and cybersecurity measures.',
        icon: 'Server',
        color: 'from-cyan-500 to-blue-600',
        reportCount: 9
    }
];

const generateActionItems = (): ActionItem[] => {
    return [
        {
            id: "ACT-101",
            description: "Update financial reconciliation process",
            responsible: "Finance Manager",
            deadline: "2024-03-01",
            priority: "high",
            status: "in-progress"
        },
        {
            id: "ACT-102",
            description: "Implement 2FA for all admin accounts",
            responsible: "IT Director",
            deadline: "2024-02-15",
            priority: "high",
            status: "completed"
        },
        {
            id: "ACT-103",
            description: "Revise remote work policy",
            responsible: "HR Head",
            deadline: "2024-04-10",
            priority: "medium",
            status: "pending"
        }
    ];
};

import { preImplementationAudit } from './audit/pre-implementation-audit';

export const audits: AuditReport[] = [
    preImplementationAudit,
    {
        id: "AUD-2024-001",
        title: "Q4 2023 Financial Statement Audit",
        category: "financial",
        auditPeriod: "Q4 2023",
        auditor: "External - Deloitte",
        department: "Finance",
        auditDate: "2024-01-15",
        status: "completed",
        content: {
            executiveSummary: "The financial statements present fairly, in all material respects, the financial position of WAVE IO.",
            auditScope: "Balance sheet, income statement, and cash flow statement for Q4 2023.",
            methodology: "Risk assessment, substantive testing, and analytical procedures.",
            findings: ["Minor discrepancies in petty cash log", "Delayed vendor payments in December"],
            recommendations: ["Digitize petty cash tracking", "Automate vendor payment schedule"],
            actionPlan: generateActionItems(),
            conclusion: "Satisfactory with minor improvements needed.",
            appendices: ["Balance Sheet", "Income Statement"]
        }
    },
    {
        id: "AUD-2024-002",
        title: "IT Security Infrastructure Review",
        category: "it",
        auditPeriod: "H2 2023",
        auditor: "Internal Security Team",
        department: "IT",
        auditDate: "2024-02-10",
        status: "in-progress",
        content: {
            executiveSummary: "Overall security posture is strong, but some legacy systems need patching.",
            auditScope: "Server infrastructure, firewall configs, and endpoint security.",
            methodology: "Vulnerability scanning and penetration testing.",
            findings: ["Outdated firmware on Switch B", "Weak passwords in dev environment"],
            recommendations: ["Patch management cycle improvement", "Enforce stronger password improvement"],
            actionPlan: [],
            conclusion: "Good progress, but vigilance required.",
            appendices: ["Scan Report"]
        }
    },
    // Generate 15 more placeholder audits ...
    ...Array.from({ length: 15 }).map((_, i) => ({
        id: `AUD-2023-${100 + i}`,
        title: `${['Inventory', 'HR Compliance', 'Sales Process', 'Safety', 'GDPR'][i % 5]} Audit ${2023}`,
        category: ['operational', 'hr', 'operational', 'compliance', 'compliance'][i % 5] as any,
        auditPeriod: `Q${(i % 4) + 1} 2023`,
        auditor: i % 2 === 0 ? "Internal Audit" : "External Consultant",
        department: ['Operations', 'HR', 'Sales', 'Safety', 'Legal'][i % 5],
        auditDate: new Date(2023, i, 15).toISOString().split('T')[0],
        status: (i < 10 ? 'completed' : 'draft') as any,
        content: {
            executiveSummary: "Routine audit conducted with standard procedures.",
            auditScope: "Departmental operations and compliance.",
            methodology: "Interviews and document review.",
            findings: ["Standard finding 1", "Standard finding 2"],
            recommendations: ["Recommendation 1"],
            actionPlan: [],
            conclusion: "Audit completed successfully.",
            appendices: []
        }
    }))
];

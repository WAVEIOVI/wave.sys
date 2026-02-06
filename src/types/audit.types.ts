// Audit Report types
export interface AuditReport {
    id: string;
    title: string;
    category: AuditCategory;
    auditPeriod: string;
    auditor: string;
    department: string;
    auditDate: string;
    status: 'completed' | 'draft' | 'in-progress';
    content: AuditReportContent;
}

export type AuditCategory =
    | 'financial'
    | 'operational'
    | 'compliance'
    | 'hr'
    | 'it';

export interface AuditReportContent {
    executiveSummary: string;
    auditScope: string;
    methodology: string;
    findings: string[];
    recommendations: string[];
    actionPlan: ActionItem[];
    conclusion: string;
    appendices: string[];

    // Detailed Audit Report Extensions
    detailedExecSummary?: DetailedExecutiveSummary;
    departmentAssessments?: DepartmentAssessment[];
    riskAnalysis?: RiskAnalysis[];
    costBenefitAnalysis?: CostBenefitAnalysis;
    detailedFindings?: AuditFinding[];
}

export interface ActionItem {
    id: string;
    description: string;
    responsible: string;
    deadline: string;
    priority: 'high' | 'medium' | 'low';
    status: 'pending' | 'in-progress' | 'completed';
}

export interface AuditCategoryInfo {
    id: AuditCategory;
    name: string;
    description: string;
    icon: string;
    color: string;
    reportCount: number;
}

// New detailed audit interfaces
export interface DepartmentAssessment {
    name: string;
    score: number;
    complianceLevel: string;
    keyIssues: string[];
    riskTrend: 'Improving' | 'Stable' | 'Worsening';
}

export interface RiskAnalysis {
    category: string;
    score: number;
    probability: 'High' | 'Medium' | 'Low';
    impact: 'Severe' | 'Moderate' | 'Minor';
    mitigationStrategy: string;
}

export interface CostBenefitAnalysis {
    investment: { item: string; cost: number; }[];
    benefits: { item: string; annualValue: number; type: 'Tangible' | 'Intangible'; }[];
    roi: number;
    paybackPeriod: string;
}

export interface AuditFinding {
    id: string;
    department: string;
    category: string;
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
    description: string;
    evidence: string;
    impact: { category: string; description: string; estimatedCost?: string; };
    recommendation: string;
    priority: 'Immediate' | 'Short-term' | 'Long-term';
    status: 'Open' | 'In Progress' | 'Resolved';
}

export interface DetailedExecutiveSummary {
    overallScore: number;
    riskLevel: 'Critical' | 'High' | 'Medium' | 'Low';
    summary: string;
    criticalFindingsCount: number;
}


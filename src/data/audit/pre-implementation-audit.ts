import { AuditReport } from '../../types/audit.types';

export const preImplementationAudit: AuditReport = {
    id: "AUDIT-2024-001",
    title: "Pre-Implementation System Audit Report",
    category: "operational",
    auditPeriod: "Q1 2024",
    auditor: "Internal Audit Team",
    department: "General",
    auditDate: "2024-03-20",
    status: "completed",
    content: {
        executiveSummary: "Critical assessment of current manual processes prior to system implementation.",
        auditScope: "All departments (Finance, HR, Sales, Operations, Inventory)",
        methodology: "Interviews, document review, process observation",
        findings: ["Critical risks in all manual workflows", "Data integrity issues"],
        recommendations: ["Immediate system implementation", "Digitization of all records"],
        actionPlan: [],
        conclusion: "System implementation is critical for survival and scalability.",
        appendices: ["Departmental Raw Data"],

        detailedExecSummary: {
            overallScore: 38,
            riskLevel: "Critical",
            summary: "The current manual management system relies heavily on fragmented Word and Excel files, lacking version control, automated validation, and secure storage. Critical dependencies on individual knowledge and lack of standardized workflows pose significant operational and financial risks.",
            criticalFindingsCount: 12
        },
        departmentAssessments: [
            {
                name: "Finance",
                score: 42,
                complianceLevel: "Low",
                keyIssues: ["Manual invoice processing", "Lack of real-time budget tracking", "High risk of duplicate payments"],
                riskTrend: "Worsening"
            },
            {
                name: "HR",
                score: 45,
                complianceLevel: "Partial",
                keyIssues: ["Paper-based leave requests", "Inconsistent performance tracking", "Scattered employee records"],
                riskTrend: "Stable"
            },
            {
                name: "Sales",
                score: 35,
                complianceLevel: "Low",
                keyIssues: ["No centralized CRM", "Lost customer quotations", "Slow order processing time"],
                riskTrend: "Worsening"
            },
            {
                name: "Operations",
                score: 40,
                complianceLevel: "Low",
                keyIssues: ["Manual checklist tracking", "No incident reporting integration", "Inefficient resource allocation"],
                riskTrend: "Stable"
            },
            {
                name: "Inventory",
                score: 28,
                complianceLevel: "Critical",
                keyIssues: ["Stock discrepancies", "Manual reordering processes", "Lack of movement tracking"],
                riskTrend: "Worsening"
            }
        ],
        riskAnalysis: [
            {
                category: "Operational",
                score: 85,
                probability: "High",
                impact: "Severe",
                mitigationStrategy: "Implement centralized management system with automated workflows"
            },
            {
                category: "Financial",
                score: 75,
                probability: "Medium",
                impact: "Severe",
                mitigationStrategy: "Automate financial controls and validation rules"
            },
            {
                category: "Compliance",
                score: 60,
                probability: "Medium",
                impact: "Moderate",
                mitigationStrategy: "Standardize document templates and improve record retention"
            },
            {
                category: "Reputational",
                score: 50,
                probability: "Low",
                impact: "Moderate",
                mitigationStrategy: "Improve service delivery consistency and response times"
            }
        ],
        costBenefitAnalysis: {
            investment: [
                { item: "Software Development & Implementation", cost: 75000 },
                { item: "Hardware & Infrastructure", cost: 15000 },
                { item: "Training & Change Management", cost: 10000 },
                { item: "Data Migration", cost: 15000 }
            ],
            benefits: [
                { item: "Reduced Admin Time (20h/week)", annualValue: 125000, type: "Tangible" },
                { item: "Eliminated Printing/Paper Costs", annualValue: 25000, type: "Tangible" },
                { item: "Error Reduction & Recovery", annualValue: 50000, type: "Tangible" },
                { item: "Improved Decision Making", annualValue: 100000, type: "Intangible" },
                { item: "Customer Satisfaction Increase", annualValue: 75000, type: "Intangible" }
            ],
            roi: 226,
            paybackPeriod: "3.7"
        },
        detailedFindings: [
            {
                id: "FIND-FIN-001",
                department: "Finance",
                category: "Process Control",
                severity: "Critical",
                description: "No automated validation for purchase orders and invoice matching.",
                evidence: "Review of 50 recent POs showed 15% discrepancy rate manually corrected.",
                impact: {
                    category: "Financial",
                    description: "Risk of overpayment and duplicate payments.",
                    estimatedCost: "15,000 TND / Year"
                },
                recommendation: "Implement automated 3-way matching in new system.",
                priority: "Immediate",
                status: "Open"
            },
            {
                id: "FIND-HR-001",
                department: "HR",
                category: "Data Security",
                severity: "High",
                description: "Employee records stored in unlocked physical cabinets and unencrypted local folders.",
                evidence: "Physical site inspection and IT audit of local drives.",
                impact: {
                    category: "Compliance",
                    description: "Violation of detailed data protection regulations.",
                    estimatedCost: "Potential Fines"
                },
                recommendation: "Digitize all records to secure, role-based access database.",
                priority: "Immediate",
                status: "Open"
            },
            {
                id: "FIND-SAL-001",
                department: "Sales",
                category: "Efficiency",
                severity: "Medium",
                description: "Quotation generation takes average 45 minutes due to manual formatting.",
                evidence: "Time-motion study of sales team workflow.",
                impact: {
                    category: "Operational",
                    description: "Reduced sales throughput and delayed customer response.",
                    estimatedCost: "500 Man-hours / Year"
                },
                recommendation: "Use standardized, auto-populated quotation templates.",
                priority: "Short-term",
                status: "Open"
            },
            {
                id: "FIND-INV-001",
                department: "Inventory",
                category: "Asset Management",
                severity: "Critical",
                description: "Inventory levels tracked in shared Excel sheet with no history log.",
                evidence: "Excel file metadata shows multiple conflicting edits.",
                impact: {
                    category: "Financial",
                    description: "Stockouts and shrinkage inability to trace.",
                    estimatedCost: "30,000 TND / Year"
                },
                recommendation: "Implement real-time inventory tracking with transaction logs.",
                priority: "Immediate",
                status: "Open"
            },
            {
                id: "FIND-OPS-001",
                department: "Operations",
                category: "Quality Assurance",
                severity: "High",
                description: "Daily checklists are paper-based and often filed weekly, delaying issue visibility.",
                evidence: "Review of maintenance logs vs. incident reports.",
                impact: {
                    category: "Operational",
                    description: "Delayed maintenance leading to equipment downtime.",
                    estimatedCost: "25,000 TND / Year"
                },
                recommendation: "Digitize daily checklists for instant submission and analytics.",
                priority: "Immediate",
                status: "Open"
            }
        ]
    }
};

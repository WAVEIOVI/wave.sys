import { Document, Page, Text, View } from '@react-pdf/renderer';
import type { AuditReport } from '../../types/audit.types';
import { pdfStyles } from '../../utils/pdf/pdfStyles';

interface AuditPDFProps {
    audit: AuditReport;
}

export function AuditPDF({ audit }: AuditPDFProps) {
    const c = audit.content;
    const detailed = c.detailedExecSummary;
    const depts = c.departmentAssessments ?? [];
    const risks = c.riskAnalysis ?? [];
    const cba = c.costBenefitAnalysis;
    const findings = c.detailedFindings ?? [];

    return (
        <Document>
            <Page size="A4" style={pdfStyles.page}>
                <View style={[pdfStyles.coverPage, { paddingTop: 80 }]}>
                    <Text style={pdfStyles.coverCategory}>Audit Report</Text>
                    <Text style={pdfStyles.coverTitle}>{audit.title}</Text>
                    <Text style={pdfStyles.coverSubtitle}>
                        {audit.id} · {audit.category} · {audit.auditPeriod} · {audit.auditDate}
                    </Text>
                    <Text style={pdfStyles.coverSubtitle}>Auditor: {audit.auditor}</Text>
                    {detailed && (
                        <View style={{ marginTop: 24, alignItems: 'center' }}>
                            <Text style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>Overall Score</Text>
                            <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#111827' }}>{detailed.overallScore}/100</Text>
                            <Text style={{ fontSize: 11, color: '#6b7280', marginTop: 4 }}>{detailed.riskLevel} Risk</Text>
                        </View>
                    )}
                </View>
            </Page>

            <Page size="A4" style={pdfStyles.page}>
                <View style={pdfStyles.header} fixed>
                    <Text style={pdfStyles.headerLeft}>SS PLUS</Text>
                    <Text style={pdfStyles.headerRight}>{audit.title}</Text>
                </View>
                <View style={{ marginTop: 32 }}>
                    <Text style={pdfStyles.sectionTitle}>Executive Summary</Text>
                    <Text style={pdfStyles.paragraph}>{c.executiveSummary}</Text>
                    {detailed && (
                        <>
                            <Text style={pdfStyles.paragraph}>{detailed.summary}</Text>
                            <Text style={pdfStyles.paragraph}>
                                Critical findings: {detailed.criticalFindingsCount}. Risk level: {detailed.riskLevel}.
                            </Text>
                        </>
                    )}
                    <Text style={[pdfStyles.subsectionTitle, { marginTop: 16 }]}>Scope</Text>
                    <Text style={pdfStyles.paragraph}>{c.auditScope}</Text>
                    <Text style={pdfStyles.subsectionTitle}>Methodology</Text>
                    <Text style={pdfStyles.paragraph}>{c.methodology}</Text>
                    <Text style={pdfStyles.subsectionTitle}>Conclusion</Text>
                    <Text style={pdfStyles.paragraph}>{c.conclusion}</Text>
                </View>
                <View style={pdfStyles.footer} fixed>
                    <Text>SS PLUS · {audit.title}</Text>
                    <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
                </View>
            </Page>

            {depts.length > 0 && (
                <Page size="A4" style={pdfStyles.page}>
                    <View style={pdfStyles.header} fixed>
                        <Text style={pdfStyles.headerLeft}>SS PLUS</Text>
                        <Text style={pdfStyles.headerRight}>{audit.title}</Text>
                    </View>
                    <View style={{ marginTop: 32 }}>
                        <Text style={pdfStyles.sectionTitle}>Department Assessments</Text>
                        {depts.map((d, i) => (
                            <View key={i} style={[pdfStyles.section, { marginBottom: 12 }]}>
                                <Text style={pdfStyles.subsectionTitle}>{d.name} — Score {d.score} · {d.complianceLevel}</Text>
                                <Text style={[pdfStyles.paragraph, { marginBottom: 4 }]}>Trend: {d.riskTrend}</Text>
                                {d.keyIssues.map((iss, j) => (
                                    <View key={j} style={pdfStyles.listItem}>
                                        <Text style={pdfStyles.bullet}>•</Text>
                                        <Text style={pdfStyles.paragraph}>{iss}</Text>
                                    </View>
                                ))}
                            </View>
                        ))}
                    </View>
                    <View style={pdfStyles.footer} fixed>
                        <Text>SS PLUS · {audit.title}</Text>
                        <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
                    </View>
                </Page>
            )}

            {risks.length > 0 && (
                <Page size="A4" style={pdfStyles.page}>
                    <View style={pdfStyles.header} fixed>
                        <Text style={pdfStyles.headerLeft}>SS PLUS</Text>
                        <Text style={pdfStyles.headerRight}>{audit.title}</Text>
                    </View>
                    <View style={{ marginTop: 32 }}>
                        <Text style={pdfStyles.sectionTitle}>Risk Analysis</Text>
                        {risks.map((r, i) => (
                            <View key={i} style={[pdfStyles.section, { marginBottom: 12 }]}>
                                <Text style={pdfStyles.subsectionTitle}>{r.category} — Score {r.score}</Text>
                                <Text style={pdfStyles.paragraph}>Probability: {r.probability} · Impact: {r.impact}</Text>
                                <Text style={pdfStyles.paragraph}>{r.mitigationStrategy}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={pdfStyles.footer} fixed>
                        <Text>SS PLUS · {audit.title}</Text>
                        <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
                    </View>
                </Page>
            )}

            {cba && (
                <Page size="A4" style={pdfStyles.page}>
                    <View style={pdfStyles.header} fixed>
                        <Text style={pdfStyles.headerLeft}>SS PLUS</Text>
                        <Text style={pdfStyles.headerRight}>{audit.title}</Text>
                    </View>
                    <View style={{ marginTop: 32 }}>
                        <Text style={pdfStyles.sectionTitle}>Cost–Benefit Analysis</Text>
                        <Text style={pdfStyles.subsectionTitle}>Investment</Text>
                        {cba.investment.map((inv, i) => (
                            <View key={i} style={pdfStyles.listItem}>
                                <Text style={pdfStyles.bullet}>•</Text>
                                <Text style={pdfStyles.paragraph}>{inv.item}: {inv.cost.toLocaleString()} TND</Text>
                            </View>
                        ))}
                        <Text style={[pdfStyles.subsectionTitle, { marginTop: 12 }]}>Benefits</Text>
                        {cba.benefits.map((b, i) => (
                            <View key={i} style={pdfStyles.listItem}>
                                <Text style={pdfStyles.bullet}>•</Text>
                                <Text style={pdfStyles.paragraph}>{b.item}: {b.annualValue.toLocaleString()} TND/year ({b.type})</Text>
                            </View>
                        ))}
                        <Text style={[pdfStyles.paragraph, { marginTop: 12, fontWeight: 'bold' }]}>
                            ROI: {cba.roi}% · Payback: {cba.paybackPeriod} years
                        </Text>
                    </View>
                    <View style={pdfStyles.footer} fixed>
                        <Text>SS PLUS · {audit.title}</Text>
                        <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
                    </View>
                </Page>
            )}

            <Page size="A4" style={pdfStyles.page}>
                <View style={pdfStyles.header} fixed>
                    <Text style={pdfStyles.headerLeft}>SS PLUS</Text>
                    <Text style={pdfStyles.headerRight}>{audit.title}</Text>
                </View>
                <View style={{ marginTop: 32 }}>
                    <Text style={pdfStyles.sectionTitle}>Findings</Text>
                    {c.findings.map((f, i) => (
                        <View key={i} style={pdfStyles.listItem}>
                            <Text style={pdfStyles.bullet}>•</Text>
                            <Text style={pdfStyles.paragraph}>{f}</Text>
                        </View>
                    ))}
                    {findings.length > 0 && (
                        <>
                            <Text style={[pdfStyles.subsectionTitle, { marginTop: 16 }]}>Detailed Findings</Text>
                            {findings.map((f) => (
                                <View key={f.id} style={[pdfStyles.section, { marginBottom: 10 }]}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#374151' }}>{f.id} · {f.department} · {f.severity}</Text>
                                    <Text style={pdfStyles.paragraph}>{f.description}</Text>
                                    <Text style={[pdfStyles.paragraph, { fontSize: 10, color: '#6b7280' }]}>Evidence: {f.evidence}</Text>
                                    <Text style={[pdfStyles.paragraph, { fontSize: 10 }]}>Recommendation: {f.recommendation}</Text>
                                </View>
                            ))}
                        </>
                    )}
                    <Text style={[pdfStyles.sectionTitle, { marginTop: 16 }]}>Recommendations</Text>
                    {c.recommendations.map((r, i) => (
                        <View key={i} style={pdfStyles.listItem}>
                            <Text style={pdfStyles.bullet}>•</Text>
                            <Text style={pdfStyles.paragraph}>{r}</Text>
                        </View>
                    ))}
                </View>
                <View style={pdfStyles.footer} fixed>
                    <Text>SS PLUS · {audit.title}</Text>
                    <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
                </View>
            </Page>
        </Document>
    );
}

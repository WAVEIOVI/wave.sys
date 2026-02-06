import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { pdfStyles } from '../../utils/pdf/pdfStyles';

// Enhanced PDF styles with cover and back page
const enhancedPdfStyles = StyleSheet.create({
    ...pdfStyles,
    coverPage: {
        ...pdfStyles.coverPage,
        backgroundColor: '#f8f9fa',
    },
    coverLogo: {
        width: 100,
        height: 50,
        marginBottom: 30,
        objectFit: 'contain',
    },
    coverTitle: {
        ...pdfStyles.coverTitle,
        fontSize: 32,
        color: '#DC143C',
    },
    coverSubtitle: {
        fontSize: 14,
        color: '#495057',
        marginTop: 8,
    },
    coverDate: {
        fontSize: 10,
        color: '#6c757d',
        marginTop: 20,
    },
    coverFooter: {
        position: 'absolute',
        bottom: 40,
        textAlign: 'center',
    },
    coverFooterText: {
        fontSize: 9,
        color: '#6c757d',
        marginBottom: 5,
    },
    backPage: {
        padding: 40,
        backgroundColor: '#f8f9fa',
        flex: 1,
    },
    backPageTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#DC143C',
        marginBottom: 20,
        textAlign: 'center',
    },
    backPageContent: {
        fontSize: 11,
        lineHeight: 1.6,
        color: '#212529',
        marginBottom: 16,
    },
    backPageContactBox: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#dee2e6',
        borderRadius: 4,
    },
    backPageContactTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#212529',
    },
    backPageContactText: {
        fontSize: 10,
        color: '#495057',
        marginBottom: 3,
    },
    backPageDisclaimer: {
        marginTop: 30,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#dee2e6',
        textAlign: 'center',
    },
    disclaimerText: {
        fontSize: 9,
        color: '#6c757d',
        marginBottom: 3,
    },
    logosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 'auto',
        paddingTop: 30,
    },
    logoImage: {
        width: 80,
        height: 40,
        objectFit: 'contain',
    },
});

function stripMarkdown(s: string): string {
    return s
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/^#+\s*/gm, '')
        .replace(/`([^`]+)`/g, '$1')
        .trim();
}

function parseMdSections(md: string): { title: string; body: string }[] {
    const sections: { title: string; body: string }[] = [];
    const parts = md.split(/(?=^##\s)/m).filter(Boolean);
    for (const p of parts) {
        const lines = p.trim().split('\n');
        const first = lines[0] || '';
        const title = stripMarkdown(first.replace(/^##\s*/, '')).trim();
        const body = lines.slice(1).join('\n').trim();
        if (title || body) sections.push({ title, body });
    }
    return sections;
}

function renderBody(body: string) {
    const blocks = body.split(/\n\n+/).filter(Boolean);
    return (
        <View>
            {blocks.map((b, i) => {
                const lines = b.split('\n').filter(Boolean);
                const isList = lines.length > 0 && lines.every((l) => /^\s*[-*]\s+/.test(l) || /^\s*\d+\.\s+/.test(l));
                if (isList) {
                    return (
                        <View key={i} style={{ marginBottom: 8 }}>
                            {lines.map((line, j) => (
                                <View key={j} style={enhancedPdfStyles.listItem}>
                                    <Text style={enhancedPdfStyles.bullet}>•</Text>
                                    <Text style={enhancedPdfStyles.paragraph}>{stripMarkdown(line.replace(/^\s*[-*]\s+|\d+\.\s+/, ''))}</Text>
                                </View>
                            ))}
                        </View>
                    );
                }
                return (
                    <Text key={i} style={enhancedPdfStyles.paragraph}>
                        {stripMarkdown(b)}
                    </Text>
                );
            })}
        </View>
    );
}

interface DocumentPDFProps {
    title: string;
    category: string;
    content?: string;
    lastUpdated?: string;
}

export function DocumentPDF({ title, category, content, lastUpdated }: DocumentPDFProps) {
    const date = lastUpdated || new Date().toISOString().slice(0, 10);
    const sections = content ? parseMdSections(content) : [];
    const hasContent = sections.length > 0;

    return (
        <Document>
            {/* Cover Page */}
            <Page size="A4" style={enhancedPdfStyles.page}>
                <View style={enhancedPdfStyles.coverPage}>
                    {/* SS PLUS Logo */}
                    <Image 
                        src="/logos/logo-ss-plus-hor.png" 
                        style={enhancedPdfStyles.coverLogo} 
                    />
                    
                    <Text style={enhancedPdfStyles.coverTitle}>{title}</Text>
                    <Text style={enhancedPdfStyles.coverSubtitle}>{category}</Text>
                    <Text style={enhancedPdfStyles.coverSubtitle}>SS PLUS Management System</Text>
                    <Text style={enhancedPdfStyles.coverDate}>Generated: {date}</Text>
                    <Text style={enhancedPdfStyles.coverDate}>Version: 1.0</Text>
                    
                    {/* Footer */}
                    <View style={enhancedPdfStyles.coverFooter}>
                        <Text style={enhancedPdfStyles.coverFooterText}>Developed by WAVE IO</Text>
                        <Text style={enhancedPdfStyles.coverFooterText}>Lead Consultant: M. Anis HWAS</Text>
                        <Image 
                            src="/logos/wave-io-logo.svg" 
                            style={[enhancedPdfStyles.logoImage, { marginTop: 10 }]} 
                        />
                    </View>
                </View>
            </Page>

            {/* Content Pages */}
            {hasContent ? (
                sections.map((sec, idx) => (
                    <Page key={idx} size="A4" style={enhancedPdfStyles.page}>
                        <View style={enhancedPdfStyles.header} fixed>
                            <Text style={enhancedPdfStyles.headerLeft}>SS PLUS</Text>
                            <Text style={enhancedPdfStyles.headerRight}>{title}</Text>
                        </View>
                        <View style={{ marginTop: 32 }}>
                            {sec.title && (
                                <Text style={enhancedPdfStyles.sectionTitle}>{sec.title}</Text>
                            )}
                            {renderBody(sec.body)}
                        </View>
                        <View style={enhancedPdfStyles.footer} fixed>
                            <Text>SS PLUS Management System</Text>
                            <Text
                                render={({ pageNumber, totalPages }) =>
                                    `Page ${pageNumber} of ${totalPages}`
                                }
                            />
                        </View>
                    </Page>
                ))
            ) : (
                <Page size="A4" style={enhancedPdfStyles.page}>
                    <View style={enhancedPdfStyles.header} fixed>
                        <Text style={enhancedPdfStyles.headerLeft}>SS PLUS</Text>
                        <Text style={enhancedPdfStyles.headerRight}>{title}</Text>
                    </View>
                    <View style={{ marginTop: 32 }}>
                        <Text style={enhancedPdfStyles.sectionTitle}>Document Overview</Text>
                        <Text style={enhancedPdfStyles.paragraph}>
                            This document is generated from the SS PLUS Management System. It contains the
                            official policies and guidelines for {title}.
                        </Text>
                        <Text style={enhancedPdfStyles.paragraph}>
                            Sécurité Services Plus (SS+) is committed to the highest standards of fire safety
                            and workplace protection. The information contained herein is proprietary and
                            intended for internal use only.
                        </Text>
                    </View>
                    <View style={enhancedPdfStyles.footer} fixed>
                        <Text>SS PLUS Management System</Text>
                        <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
                    </View>
                </Page>
            )}

            {/* Back Page */}
            <Page size="A4" style={enhancedPdfStyles.page}>
                <View style={enhancedPdfStyles.backPage}>
                    <Text style={enhancedPdfStyles.backPageTitle}>Document Information</Text>
                    
                    <Text style={enhancedPdfStyles.backPageContent}>
                        This document is part of the SS PLUS Management System, developed by WAVE IO Consulting.
                    </Text>
                    
                    <View style={enhancedPdfStyles.backPageContactBox}>
                        <Text style={enhancedPdfStyles.backPageContactTitle}>
                            For questions or clarifications, please contact:
                        </Text>
                        <Text style={enhancedPdfStyles.backPageContactText}>M. Anis HWAS</Text>
                        <Text style={enhancedPdfStyles.backPageContactText}>Lead Consultant</Text>
                        <Text style={enhancedPdfStyles.backPageContactText}>WAVE IO</Text>
                        <Text style={enhancedPdfStyles.backPageContactText}>Email: info@wave-io.com</Text>
                        <Text style={enhancedPdfStyles.backPageContactText}>Phone: +[contact phone]</Text>
                    </View>

                    <View style={enhancedPdfStyles.backPageDisclaimer}>
                        <Text style={enhancedPdfStyles.disclaimerText}>• This is a controlled document</Text>
                        <Text style={enhancedPdfStyles.disclaimerText}>• Printed copies are uncontrolled</Text>
                        <Text style={enhancedPdfStyles.disclaimerText}>• Always refer to the digital version for latest updates</Text>
                        <Text style={enhancedPdfStyles.disclaimerText}>© 2024 SS PLUS. All rights reserved.</Text>
                        <Text style={enhancedPdfStyles.disclaimerText}>Confidential - For internal use only.</Text>
                    </View>

                    {/* Logos */}
                    <View style={enhancedPdfStyles.logosContainer}>
                        <Image 
                            src="/logos/logo-ss-plus-hor.png" 
                            style={enhancedPdfStyles.logoImage} 
                        />
                        <Image 
                            src="/logos/wave-io-logo.svg" 
                            style={enhancedPdfStyles.logoImage} 
                        />
                    </View>
                </View>
            </Page>
        </Document>
    );
}

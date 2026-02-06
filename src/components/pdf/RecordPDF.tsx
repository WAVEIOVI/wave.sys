import { Document, Page, Text, View } from '@react-pdf/renderer';
import type { ManagementRecord, RecordField, RecordSection } from '../../types/records';
import { pdfStyles } from '../../utils/pdf/pdfStyles';

function FieldLabel({ field }: { field: RecordField }) {
    const req = field.required ? ' *' : '';
    return (
        <Text style={pdfStyles.fieldLabel}>
            {field.name}{req}
        </Text>
    );
}

function FieldValue({ field }: { field: RecordField }) {
    if (field.type === 'signature') {
        return <View style={pdfStyles.signatureBox} />;
    }
    if (field.type === 'checkbox') {
        return <Text style={pdfStyles.fieldValue}>☐</Text>;
    }
    if (field.type === 'select' && field.options?.length) {
        return (
            <Text style={pdfStyles.fieldValue}>
                _____________ ({field.options.slice(0, 3).join(', ')}{field.options.length > 3 ? '…' : ''})
            </Text>
        );
    }
    const placeholder = field.type === 'date' ? '____/____/________' : field.type === 'currency' ? '0.00' : '_______________';
    return <Text style={pdfStyles.fieldValue}>{placeholder}</Text>;
}

function RecordSectionBlock({ sec }: { sec: RecordSection }) {
    const isRepeatable = sec.type === 'repeatable';
    const fields = sec.fields || [];
    return (
        <View style={pdfStyles.section}>
            <Text style={pdfStyles.sectionTitle}>{sec.title}{isRepeatable ? ' (repeatable)' : ''}</Text>
            {fields.map((f, i) => (
                <View key={i} style={{ marginBottom: 6 }}>
                    <FieldLabel field={f} />
                    <FieldValue field={f} />
                </View>
            ))}
        </View>
    );
}

interface RecordPDFProps {
    record: ManagementRecord;
}

export function RecordPDF({ record }: RecordPDFProps) {
    const sections = record.formStructure?.sections ?? [];

    return (
        <Document>
            <Page size="A4" style={pdfStyles.page}>
                <View style={pdfStyles.header} fixed>
                    <Text style={pdfStyles.headerLeft}>SS PLUS</Text>
                    <Text style={pdfStyles.headerRight}>{record.title}</Text>
                </View>
                <View style={{ marginTop: 24 }}>
                    <Text style={pdfStyles.coverTitle}>{record.title}</Text>
                    <Text style={pdfStyles.paragraph}>
                        {record.id} · {record.department} · {record.category} · v{record.version} · {record.effectiveDate}
                    </Text>
                    <Text style={[pdfStyles.paragraph, { marginTop: 12 }]}>{record.description}</Text>
                </View>
                {sections.map((sec, i) => (
                    <RecordSectionBlock key={i} sec={sec} />
                ))}
                {record.instructions && record.instructions.length > 0 && (
                    <View style={pdfStyles.section}>
                        <Text style={pdfStyles.sectionTitle}>Instructions</Text>
                        {record.instructions.map((inst, i) => (
                            <View key={i} style={pdfStyles.listItem}>
                                <Text style={pdfStyles.bullet}>•</Text>
                                <Text style={pdfStyles.paragraph}>{inst}</Text>
                            </View>
                        ))}
                    </View>
                )}
                {record.relatedDocuments && record.relatedDocuments.length > 0 && (
                    <View style={[pdfStyles.section, { marginTop: 12 }]}>
                        <Text style={pdfStyles.subsectionTitle}>Related documents</Text>
                        <Text style={pdfStyles.paragraph}>{record.relatedDocuments.join(', ')}</Text>
                    </View>
                )}
                <View style={pdfStyles.footer} fixed>
                    <Text>SS PLUS Management System · {record.title}</Text>
                    <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
                </View>
            </Page>
        </Document>
    );
}

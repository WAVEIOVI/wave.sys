import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Standard fonts
Font.register({
    family: 'Helvetica',
    fonts: [
        { src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/helvetica@1.0.4/Helvetica.ttf' },
        { src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/helvetica@1.0.4/Helvetica-Bold.ttf', fontWeight: 'bold' },
        { src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/helvetica@1.0.4/Helvetica-Oblique.ttf', fontStyle: 'italic' },
    ],
});

const styles = StyleSheet.create({
    page: {
        padding: 50,
        backgroundColor: '#ffffff',
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 10,
    },
    category: {
        fontSize: 10,
        color: '#3b82f6',
        textTransform: 'uppercase',
        marginBottom: 5,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111827',
    },
    section: {
        marginTop: 20,
        marginBottom: 10,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 5,
    },
    subSectionHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#374151',
        marginTop: 10,
        marginBottom: 5,
    },
    paragraph: {
        fontSize: 11,
        color: '#4b5563',
        lineHeight: 1.5,
        marginBottom: 10,
    },
    listItem: {
        fontSize: 11,
        color: '#4b5563',
        lineHeight: 1.5,
        marginLeft: 15,
        marginBottom: 5,
    },
    bullet: {
        width: 10,
        fontSize: 11,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 50,
        right: 50,
        fontSize: 9,
        color: '#9ca3af',
        textAlign: 'center',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 10,
    },
    logo: {
        width: 40,
        height: 40,
        marginBottom: 10,
    }
});

interface PDFDocumentProps {
    title: string;
    category: string;
    content?: any; // We'll expand this to handle structured content
}

export const PDFDocumentTemplate = ({ title, category }: PDFDocumentProps) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.title}>{title}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Document Overview</Text>
                <Text style={styles.paragraph}>
                    This document is generated from the SS PLUS Management System.
                    It contains the official policies and guidelines for {title}.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subSectionHeader}>SS PLUS Professional Excellence</Text>
                <Text style={styles.paragraph}>
                    Sécurité Services Plus (SS+) is committed to the highest standards of fire safety and workplace protection.
                    The information contained herein is proprietary and intended for internal use only.
                </Text>
            </View>

            <Text style={styles.footer} render={({ pageNumber, totalPages }) => (
                `SS PLUS - ${title} | Page ${pageNumber} of ${totalPages}`
            )} fixed />
        </Page>
    </Document>
);

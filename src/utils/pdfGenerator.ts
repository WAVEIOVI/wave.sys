import jsPDF from 'jspdf';
import { Document } from '../types/document.types';

export async function generatePdf(document: Document, content: string) {
    // Create new PDF document (A4, portrait, mm)
    const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;

    // Helper to add header/footer to all pages
    const addHeaderFooter = (pageNum: number, totalPages: number) => {
        // Header
        doc.setFillColor(245, 247, 250); // Light gray background
        doc.rect(0, 0, pageWidth, 25, 'F');

        doc.setFontSize(10);
        doc.setTextColor(100, 116, 139); // Gray 500
        doc.text('SS PLUS Management System', margin, 15);

        doc.setFontSize(8);
        doc.text(document.title, pageWidth - margin, 15, { align: 'right' });

        // Footer
        doc.setFillColor(245, 247, 250);
        doc.rect(0, pageHeight - 20, pageWidth, 20, 'F');

        doc.setFontSize(8);
        doc.setTextColor(148, 163, 184); // Gray 400
        doc.text(`Powered by WAVE IO`, margin, pageHeight - 10);
        doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
    };

    // Title Page
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(15, 23, 42); // Slate 900

    // Center title vertically/horizontally roughly
    doc.text(document.title, pageWidth / 2, 80, { align: 'center', maxWidth: contentWidth });

    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105); // Slate 600
    doc.text(document.category.toUpperCase(), pageWidth / 2, 95, { align: 'center' });

    doc.setFontSize(10);
    doc.setTextColor(148, 163, 184);
    doc.text(`Last Updated: ${document.lastUpdated}`, pageWidth / 2, 110, { align: 'center' });

    // Add logos using placeholder logic (rectangles) or text if images fail
    // In real implementation we'd load the image data first

    doc.addPage();

    // Content Processing
    // For MVP, we'll strip markdown syntax and wrap text
    // A robust solution uses .html() but requires DOM elements
    // We'll use splitTextToSize for now

    doc.setFontSize(11);
    doc.setTextColor(51, 65, 85); // Slate 700
    const lines = doc.splitTextToSize(content.replace(/[#*`_]/g, ''), contentWidth);

    let cursorY = 35;

    lines.forEach((line: string) => {
        if (cursorY > pageHeight - 30) {
            doc.addPage();
            cursorY = 35;
        }
        doc.text(line, margin, cursorY);
        cursorY += 6;
    });

    // Apply Headers/Footers
    const pageCount = doc.internal.pages.length - 1;
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        addHeaderFooter(i, pageCount);
    }

    // Save the PDF
    doc.save(`${document.title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
}

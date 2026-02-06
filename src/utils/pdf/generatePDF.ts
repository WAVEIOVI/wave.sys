import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import type { ReactElement } from 'react';

/**
 * Generate PDF from a @react-pdf/renderer Document and trigger download.
 */
export async function downloadPDF(document: ReactElement, filename: string): Promise<void> {
    const blob = await pdf(document).toBlob();
    saveAs(blob, filename.endsWith('.pdf') ? filename : `${filename}.pdf`);
}

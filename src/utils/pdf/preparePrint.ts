/**
 * Print Preparation Utility
 * Prepares the document for printing by converting charts, applying light theme, and adding headers/footers
 */

import { 
    prepareChartsForPrint, 
    restoreChartsAfterPrint,
    waitForImages 
} from './chartToImage';

/**
 * Prepare document for print view
 */
export async function preparePrintView(): Promise<void> {
    try {
        // 1. Store original theme
        const originalTheme = document.documentElement.getAttribute('data-theme');
        const hadDarkClass = document.documentElement.classList.contains('dark');

        // 2. Force light theme for print
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');

        // 3. Convert charts to images
        await prepareChartsForPrint();

        // 4. Add print headers and footers
        addPrintHeaderFooter();

        // 5. Wait for images to load
        await waitForImages();

        // 6. Add print class to body
        document.body.classList.add('printing');

        // 7. Trigger print dialog
        window.print();

        // 8. Cleanup after print
        window.addEventListener('afterprint', () => {
            cleanupPrintView(originalTheme, hadDarkClass);
        }, { once: true });

    } catch (error) {
        console.error('Print preparation failed:', error);
        alert('Failed to prepare document for printing. Please try again.');
    }
}

/**
 * Add print header and footer to document
 */
function addPrintHeaderFooter(): void {
    const content = document.querySelector('.document-content') ||
                   document.querySelector('main') ||
                   document.querySelector('.content-area');

    if (!content) {
        console.warn('Content area not found for adding header/footer');
        return;
    }

    // Get document title
    const documentTitle = document.title || 
                         document.querySelector('h1')?.textContent || 
                         'SS PLUS Document';

    // Create header
    const header = document.createElement('div');
    header.className = 'print-header';
    header.innerHTML = `
        <img src="/logos/logo-ss-plus-hor.png" alt="SS PLUS Logo" class="print-header-logo" />
        <span class="print-header-title">${documentTitle}</span>
        <img src="/logos/wave-io-logo.svg" alt="WAVE IO Logo" class="print-header-logo" style="height: 30px;" />
    `;

    // Create footer
    const footer = document.createElement('div');
    footer.className = 'print-footer';
    footer.innerHTML = `
        <span>Developed by WAVE IO - M. Anis HWAS</span>
        <span>© 2024 SS PLUS - Confidential</span>
        <span class="print-page-number">Page <span class="page-number"></span></span>
    `;

    // Insert header at the beginning of content
    content.insertBefore(header, content.firstChild);

    // Append footer at the end of content
    content.appendChild(footer);
}

/**
 * Cleanup print view after printing
 */
function cleanupPrintView(originalTheme: string | null, hadDarkClass: boolean): void {
    // Remove print class from body
    document.body.classList.remove('printing');

    // Remove print-specific elements
    document.querySelectorAll('.print-header, .print-footer').forEach(el => el.remove());

    // Restore charts
    restoreChartsAfterPrint();

    // Restore theme
    if (originalTheme === 'dark' || hadDarkClass) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
    }
}

/**
 * Add cover page to document
 */
export function addCoverPage(title: string, subtitle?: string): void {
    const content = document.querySelector('.document-content') ||
                   document.querySelector('main') ||
                   document.body;

    if (!content) return;

    const coverPage = document.createElement('div');
    coverPage.className = 'cover-page print-only';
    
    const date = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    coverPage.innerHTML = `
        <img src="/logos/logo-ss-plus-hor.png" alt="SS PLUS Logo" class="cover-page-logo" />
        <h1 class="cover-page-title">${title}</h1>
        ${subtitle ? `<p class="cover-page-subtitle">${subtitle}</p>` : ''}
        <p class="cover-page-info">SS PLUS Management System</p>
        <p class="cover-page-info">Generated: ${date}</p>
        <p class="cover-page-info">Version: 1.0</p>
        <div class="cover-page-footer">
            <p>Developed by WAVE IO</p>
            <p>Lead Consultant: M. Anis HWAS</p>
            <img src="/logos/wave-io-logo.svg" alt="WAVE IO Logo" style="max-width: 80px; margin-top: 10px;" />
        </div>
    `;

    // Insert at the beginning
    content.insertBefore(coverPage, content.firstChild);
}

/**
 * Add back page to document
 */
export function addBackPage(): void {
    const content = document.querySelector('.document-content') ||
                   document.querySelector('main') ||
                   document.body;

    if (!content) return;

    const backPage = document.createElement('div');
    backPage.className = 'back-page print-only';
    backPage.innerHTML = `
        <h2 class="back-page-title">Document Information</h2>
        <div class="back-page-content">
            <p>This document is part of the SS PLUS Management System, developed by WAVE IO Consulting.</p>
            
            <div class="back-page-contact">
                <p><strong>For questions or clarifications, please contact:</strong></p>
                <p>M. Anis HWAS</p>
                <p>Lead Consultant</p>
                <p>WAVE IO</p>
                <p>Email: info@wave-io.com</p>
                <p>Phone: +[contact phone]</p>
            </div>

            <div class="back-page-disclaimer">
                <p><strong>Document Control:</strong></p>
                <p>• This is a controlled document</p>
                <p>• Printed copies are uncontrolled</p>
                <p>• Always refer to the digital version for latest updates</p>
                <p>© 2024 SS PLUS. All rights reserved. Confidential - For internal use only.</p>
            </div>
        </div>
    `;

    // Append at the end
    content.appendChild(backPage);
}

/**
 * Remove cover and back pages
 */
export function removeCoverAndBackPages(): void {
    document.querySelectorAll('.cover-page, .back-page').forEach(el => el.remove());
}

/**
 * Get print status
 */
export function isPrinting(): boolean {
    return window.matchMedia('print').matches || document.body.classList.contains('printing');
}

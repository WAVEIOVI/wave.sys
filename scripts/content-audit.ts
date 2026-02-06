import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface AuditResult {
    document: string;
    mdFile: string;
    reactFile: string;
    status: 'MATCH' | 'MISSING_CONTENT' | 'EXTRA_CONTENT' | 'MODIFIED';
    missingContent: string[];
    extraContent: string[];
    modifiedContent: Array<{ original: string; current: string }>;
    statistics: {
        mdWordCount: number;
        mdSectionCount: number;
        reactWordCount: number;
        reactSectionCount: number;
        matchPercentage: number;
    };
}

const documents = [
    { name: 'Company Manual', md: 'company-manual.md', react: 'CompanyManual' },
    { name: 'Money & Finance', md: 'money-finance.md', react: 'MoneyFinance' },
    { name: 'People & Admin', md: 'people-admin.md', react: 'PeopleAdmin' },
    { name: 'Products & Inventory', md: 'products-inventory.md', react: 'ProductsInventory' },
    { name: 'Sales & Customer', md: 'sales-customer.md', react: 'SalesCustomer' },
    { name: 'Service Delivery', md: 'service-delivery.md', react: 'ServiceDelivery' },
    { name: 'Handbook', md: 'handbook.md', react: 'Handbook' }
];

function auditDocument(mdPath: string, reactPath: string): AuditResult {
    // Read files
    const mdContent = fs.readFileSync(mdPath, 'utf-8');
    // Extract text content from React (handle directory or single file)
    let reactContent = '';

    if (fs.existsSync(reactPath) && fs.lstatSync(reactPath).isDirectory()) {
        // Read all .tsx files in the directory recursively or flat
        const files = fs.readdirSync(reactPath).filter(f => f.endsWith('.tsx'));
        files.forEach(file => {
            reactContent += fs.readFileSync(path.join(reactPath, file), 'utf-8') + '\n';
        });
    } else {
        reactContent = fs.readFileSync(reactPath, 'utf-8');
    }

    const reactText = extractTextFromReact(reactContent);

    // Compare content
    const mdParagraphs = extractParagraphs(mdContent);
    const reactParagraphs = extractParagraphs(reactText);

    const missingContent = findMissingContent(mdParagraphs, reactParagraphs);
    const extraContent = findMissingContent(reactParagraphs, mdParagraphs);

    // Calculate statistics
    const statistics = {
        mdWordCount: countWords(mdContent),
        mdSectionCount: countSections(mdContent),
        reactWordCount: countWords(reactText),
        reactSectionCount: countSections(reactText),
        matchPercentage: calculateMatchPercentage(mdParagraphs, reactParagraphs)
    };

    // Determine status
    let status: AuditResult['status'] = 'MATCH';
    if (missingContent.length > 0) status = 'MISSING_CONTENT';
    if (statistics.matchPercentage < 95) status = 'MODIFIED';

    return {
        document: path.basename(mdPath),
        mdFile: mdPath,
        reactFile: reactPath,
        status,
        missingContent,
        extraContent,
        modifiedContent: [],
        statistics
    };
}

// Helper functions
function extractTextFromReact(reactContent: string): string {
    // Remove imports, exports, JSX tags
    let text = reactContent;
    text = text.replace(/^import .+$/gm, '');
    text = text.replace(/^export .+$/gm, '');
    text = text.replace(/<[^>]+>/g, ' ');
    text = text.replace(/\{[^}]+\}/g, '');
    // Remove comments
    text = text.replace(/\/\/.+$/gm, '');
    text = text.replace(/\/\*[\s\S]*?\*\//g, '');
    return text;
}

function extractParagraphs(content: string): string[] {
    return content
        .split(/\n\n+/)
        .map(p => p.trim())
        .filter(p => p.length > 20); // Ignore very short strings
}

function findMissingContent(source: string[], target: string[]): string[] {
    const missing: string[] = [];
    for (const para of source) {
        const normalized = normalizeText(para);
        const found = target.some(t => {
            const normalizedTarget = normalizeText(t);
            // Check if at least 50 characters match
            return normalizedTarget.includes(normalized.slice(0, Math.min(50, normalized.length)));
        });
        if (!found && para.length > 30) {
            missing.push(para);
        }
    }
    return missing;
}

function normalizeText(text: string): string {
    return text
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .replace(/[^\w\s]/g, '')
        .trim();
}

function countWords(text: string): number {
    return text.split(/\s+/).filter(w => w.length > 0).length;
}

function countSections(text: string): number {
    return (text.match(/^#+\s/gm) || []).length;
}

function calculateMatchPercentage(source: string[], target: string[]): number {
    if (source.length === 0) return 100;

    let matches = 0;
    for (const para of source) {
        const normalized = normalizeText(para);
        const found = target.some(t =>
            normalizeText(t).includes(normalized.slice(0, Math.min(50, normalized.length)))
        );
        if (found) matches++;
    }
    return (matches / source.length) * 100;
}

// Run audit
console.log('🔍 Starting Content Audit...\n');
console.log('='.repeat(80));
console.log('\n');

const results: AuditResult[] = [];

documents.forEach(doc => {
    const mdPath = path.join(__dirname, '../src/data/documents', doc.md);
    const reactPath = path.join(__dirname, '../src/pages/documents', doc.react);

    console.log(`📄 Auditing: ${doc.name}...`);

    try {
        const result = auditDocument(mdPath, reactPath);
        results.push(result);

        console.log(`   Status: ${result.status === 'MATCH' ? '✅' : '⚠️'} ${result.status}`);
        console.log(`   MD Words: ${result.statistics.mdWordCount.toLocaleString()}`);
        console.log(`   React Words: ${result.statistics.reactWordCount.toLocaleString()}`);
        console.log(`   Match: ${result.statistics.matchPercentage.toFixed(2)}%`);
        console.log(`   Missing: ${result.missingContent.length} paragraphs`);
        console.log('');
    } catch (error) {
        console.error(`   ❌ Error: ${error}`);
        console.log('');
    }
});

console.log('='.repeat(80));
console.log('\n');

// Generate audit report
generateAuditReport(results);

function generateAuditReport(results: AuditResult[]) {
    const reportPath = path.join(__dirname, '../audit-report.md');

    let report = '# Content Audit Report\n\n';
    report += `**Generated:** ${new Date().toISOString()}\n\n`;
    report += `**Audited Documents:** ${results.length}\n\n`;

    // Summary table
    report += '## Summary\n\n';
    report += '| Document | Status | Match % | MD Words | React Words | Missing Content |\n';
    report += '|----------|--------|---------|----------|-------------|----------------|\n';

    results.forEach(r => {
        const statusIcon = r.status === 'MATCH' ? '✅' : '⚠️';
        report += `| ${r.document} | ${statusIcon} ${r.status} | ${r.statistics.matchPercentage.toFixed(1)}% | `;
        report += `${r.statistics.mdWordCount.toLocaleString()} | ${r.statistics.reactWordCount.toLocaleString()} | `;
        report += `${r.missingContent.length} |\n`;
    });

    report += '\n---\n\n';

    // Detailed findings
    report += '## Detailed Findings\n\n';

    results.forEach(r => {
        report += `### ${r.document}\n\n`;
        report += `- **Source File:** \`${r.mdFile}\`\n`;
        report += `- **React File:** \`${r.reactFile}\`\n`;
        report += `- **Status:** ${r.status}\n`;
        report += `- **Match Percentage:** ${r.statistics.matchPercentage.toFixed(2)}%\n`;
        report += `- **MD Word Count:** ${r.statistics.mdWordCount.toLocaleString()}\n`;
        report += `- **React Word Count:** ${r.statistics.reactWordCount.toLocaleString()}\n`;
        report += `- **MD Sections:** ${r.statistics.mdSectionCount}\n`;
        report += `- **React Sections:** ${r.statistics.reactSectionCount}\n`;
        report += `- **Missing Content Items:** ${r.missingContent.length}\n\n`;

        if (r.missingContent.length > 0) {
            report += '#### Missing Content:\n\n';
            r.missingContent.slice(0, 10).forEach((content, i) => {
                report += `${i + 1}. ${content.slice(0, 150)}${content.length > 150 ? '...' : ''}\n\n`;
            });

            if (r.missingContent.length > 10) {
                report += `*... and ${r.missingContent.length - 10} more items*\n\n`;
            }
        }

        report += '---\n\n';
    });

    // Overall assessment
    const totalMatch = results.reduce((sum, r) => sum + r.statistics.matchPercentage, 0) / results.length;
    const allPerfect = results.every(r => r.statistics.matchPercentage >= 99);

    report += '## Overall Assessment\n\n';
    report += `- **Average Match Rate:** ${totalMatch.toFixed(2)}%\n`;
    report += `- **Perfect Matches:** ${results.filter(r => r.statistics.matchPercentage >= 99).length}/${results.length}\n`;
    report += `- **Status:** ${allPerfect ? '✅ All content verified' : '⚠️ Content gaps detected'}\n\n`;

    if (!allPerfect) {
        report += '### Recommendations\n\n';
        report += '1. Review documents with match percentage < 99%\n';
        report += '2. Update React components to include missing content\n';
        report += '3. Re-run audit to verify fixes\n';
        report += '4. Ensure no paraphrasing or summarization of original content\n\n';
    }

    fs.writeFileSync(reportPath, report);
    console.log(`✅ Audit report generated: ${reportPath}`);
    console.log(`\n📊 Average Match Rate: ${totalMatch.toFixed(2)}%`);
    console.log(`✨ Perfect Matches: ${results.filter(r => r.statistics.matchPercentage >= 99).length}/${results.length}\n`);
}

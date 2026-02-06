import { documents } from '../data/navigation';

// Import all markdown files as raw strings
const markdownFiles = import.meta.glob('/src/data/documents/*.md', {
    query: '?raw',
    import: 'default'
});

export async function loadDocumentContent(id: string): Promise<string | null> {
    const doc = documents.find(d => d.id === id);
    if (!doc) {
        console.error(`Document not found: ${id}`);
        return null;
    }

    // extract filename from path, e.g. "/src/data/documents/company-manual.md" -> "company-manual.md"
    // Actually, import.meta.glob keys are relative to the file or absolute based on pattern.
    // The pattern was '/src/data/documents/*.md'.
    // Let's match the filePath from the document object to the key.

    // The doc.filePath is defined as '/src/data/documents/filename.md' in navigation.ts
    const filePath = doc.filePath;

    const loader = markdownFiles[filePath];
    if (!loader) {
        console.error(`Markdown file not found for path: ${filePath}`);
        // Debug available keys
        console.log('Available files:', Object.keys(markdownFiles));
        return null;
    }

    try {
        const content = await loader() as string;
        return content;
    } catch (error) {
        console.error(`Error loading document ${id}:`, error);
        return null;
    }
}

import Fuse, { IFuseOptions, FuseResultMatch } from 'fuse.js';
import { documents } from '../data/navigation';
import { loadDocumentContent } from './documentLoader';

export interface SearchResult {
    item: SearchItem;
    matches?: ReadonlyArray<FuseResultMatch>;
    score?: number;
}

export interface SearchItem {
    id: string;
    title: string;
    content: string;
    type: 'document' | 'section';
    documentId: string;
    path: string;
    category: string;
}

let fuseInstance: Fuse<SearchItem> | null = null;
let isIndexing = false;

export async function initializeSearchIndex(): Promise<Fuse<SearchItem>> {
    if (fuseInstance) return fuseInstance;
    if (isIndexing) {
        // Wait for indexing
        while (isIndexing) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        return fuseInstance!;
    }

    isIndexing = true;
    const searchItems: SearchItem[] = [];

    try {
        for (const doc of documents) {
            const content = await loadDocumentContent(doc.id);
            if (content) {
                // Add full document
                searchItems.push({
                    id: doc.id,
                    title: doc.title,
                    content: content,
                    type: 'document',
                    documentId: doc.id,
                    path: `/document/${doc.id}`,
                    category: doc.category
                });

                // Split by headings to create section items for better granularity
                const sections = content.split(/^#+\s+/m);
                sections.forEach((section, index) => {
                    if (index === 0) return; // Skip intro before first header
                    const [title, ...body] = section.split('\n');
                    const sectionContent = body.join('\n').trim();
                    if (sectionContent.length > 50) {
                        const sectionId = title.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                        searchItems.push({
                            id: `${doc.id}#${sectionId}`,
                            title: `${doc.title} > ${title.trim()}`,
                            content: sectionContent,
                            type: 'section',
                            documentId: doc.id,
                            path: `/document/${doc.id}#${sectionId}`,
                            category: doc.category
                        });
                    }
                });
            }
        }

        const options: IFuseOptions<SearchItem> = {
            keys: [
                { name: 'title', weight: 0.7 },
                { name: 'content', weight: 0.3 }
            ],
            includeMatches: true,
            includeScore: true,
            threshold: 0.4, // lower = stricter
            ignoreLocation: true,
            minMatchCharLength: 3
        };

        fuseInstance = new Fuse(searchItems, options);
    } catch (error) {
        console.error('Failed to initialize search index', error);
    } finally {
        isIndexing = false;
    }

    return fuseInstance!;
}

export async function searchContent(query: string): Promise<SearchResult[]> {
    const fuse = await initializeSearchIndex();
    return fuse.search(query).slice(0, 10); // Limit results
}

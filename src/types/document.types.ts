// Document types
export interface Document {
    id: string;
    title: string;
    layer: 1 | 2;
    parentId?: string;
    category: 'manual' | 'finance' | 'people' | 'products' | 'sales' | 'service' | 'handbook';
    filePath: string;
    icon: string;
    description: string;
    summary?: string;
    structuredSummary?: DocumentSummary;
    pageCount: number;
    lastUpdated: string;
    color: string;
}

export interface DocumentSummary {
    documentId: string;
    overview: string;
    keyPoints: string[];
    importantSections: string[];
    targetAudience: string[];
    quickReference: string[];
}

export interface TableOfContentsItem {
    id: string;
    text: string;
    level: number;
    children?: TableOfContentsItem[];
}

import { Document } from '../types/document.types';

export const documents: Document[] = [
    // Layer 1: Company Manual
    {
        id: 'company-manual',
        title: 'Company Manual',
        layer: 1,
        category: 'manual',
        filePath: '/src/data/documents/company-manual.md',
        icon: 'BookOpen',
        description: 'Complete company operations manual and guidelines',
        summary: 'summary.companyManual.content',
        pageCount: 42,
        lastUpdated: '2024-01-28',
        color: 'from-primary-500 to-primary-700',
    },

    // Layer 2: Core Modules
    {
        id: 'money-finance',
        title: 'Money & Finance',
        layer: 2,
        category: 'finance',
        filePath: '/src/data/documents/money-finance.md',
        icon: 'DollarSign',
        description: 'Financial management, budgeting, and accounting procedures',
        pageCount: 38,
        lastUpdated: '2024-01-28',
        color: 'from-green-500 to-emerald-700',
    },
    {
        id: 'people-admin',
        title: 'People & Admin',
        layer: 2,
        category: 'people',
        filePath: '/src/data/documents/people-admin.md',
        icon: 'Users',
        description: 'HR policies, employee management, and administrative procedures',
        pageCount: 52,
        lastUpdated: '2024-01-28',
        color: 'from-blue-500 to-indigo-700',
    },
    {
        id: 'products-inventory',
        title: 'Products & Inventory',
        layer: 2,
        category: 'products',
        filePath: '/src/data/documents/products-inventory.md',
        icon: 'Package',
        description: 'Product management, inventory control, and warehouse operations',
        pageCount: 28,
        lastUpdated: '2024-01-28',
        color: 'from-orange-500 to-red-700',
    },
    {
        id: 'sales-customer',
        title: 'Sales & Customer',
        layer: 2,
        category: 'sales',
        filePath: '/src/data/documents/sales-customer.md',
        icon: 'TrendingUp',
        description: 'Sales processes, customer service, and relationship management',
        pageCount: 35,
        lastUpdated: '2024-01-28',
        color: 'from-purple-500 to-pink-700',
    },
    {
        id: 'service-delivery',
        title: 'Service Delivery',
        layer: 2,
        category: 'service',
        filePath: '/src/data/documents/service-delivery.md',
        icon: 'Truck',
        description: 'Service delivery standards, quality control, and client satisfaction',
        pageCount: 40,
        lastUpdated: '2024-01-28',
        color: 'from-teal-500 to-cyan-700',
    },
    {
        id: 'handbook',
        title: 'Employee Handbook',
        layer: 2,
        parentId: 'people-admin',
        category: 'handbook',
        filePath: '/src/data/documents/handbook.md',
        icon: 'FileText',
        description: 'Employee guidelines, policies, and company culture',
        pageCount: 45,
        lastUpdated: '2024-01-28',
        color: 'from-indigo-500 to-blue-700',
    },
];

export function getDocumentById(id: string): Document | undefined {
    return documents.find((doc) => doc.id === id);
}

export function getLayer1Documents(): Document[] {
    return documents.filter((doc) => doc.layer === 1);
}

export function getLayer2Documents(): Document[] {
    return documents.filter((doc) => doc.layer === 2 && !doc.parentId);
}

export function getTotalDocuments(): number {
    return documents.length;
}

export function getTotalSections(): number {
    // Placeholder calculation - would be dynamic based on actual document content
    return documents.reduce((acc, doc) => acc + Math.floor(doc.pageCount / 3), 0);
}


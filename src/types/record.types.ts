// Management Record types
export interface ManagementRecord {
    id: string;
    title: string;
    department: DepartmentType;
    category: string;
    description: string;
    type: 'template' | 'form' | 'checklist' | 'policy';
    version?: string;
    status: 'active' | 'draft' | 'pending';
    lastUpdated: string;
    icon?: string;
    fileSize: string;
    format: 'docx' | 'xlsx' | 'pdf';
    downloadUrl: string;
}

export type DepartmentType =
    | 'finance'
    | 'hr'
    | 'tech'
    | 'sales'
    | 'service'
    | 'legal'
    | 'all';

export interface Department {
    id: DepartmentType;
    name: string;
    description: string;
    icon: string;
    color: string;
    templateCount: number;
}

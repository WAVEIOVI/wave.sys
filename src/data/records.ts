import { ManagementRecord } from '../types/record.types';

export const departments = [
    { id: 'finance', name: 'Money & Finance', color: 'from-emerald-500 to-teal-600', icon: 'DollarSign' },
    { id: 'hr', name: 'People & Admin', color: 'from-blue-500 to-indigo-600', icon: 'Users' },
    { id: 'tech', name: 'Products & Inventory', color: 'from-orange-500 to-red-600', icon: 'Box' },
    { id: 'sales', name: 'Sales & Customer', color: 'from-purple-500 to-pink-600', icon: 'ShoppingBag' },
    { id: 'service', name: 'Service Delivery', color: 'from-cyan-500 to-blue-600', icon: 'Truck' },
    { id: 'legal', name: 'Legal & Compliance', color: 'from-slate-500 to-gray-600', icon: 'Scale' },
];

// Generate placeholder records
const generateRecords = (): ManagementRecord[] => {
    const records: ManagementRecord[] = [];
    const types = ['Template', 'Form', 'Checklist', 'Policy'];
    const depts = departments.map(d => d.id);

    // Create ~55 records distributed across departments
    for (let i = 1; i <= 55; i++) {
        const deptId = depts[i % depts.length];
        const typeLabel = types[i % types.length];

        records.push({
            id: `REC-${1000 + i}`,
            title: `${typeLabel} - ${deptId.toUpperCase()} Process ${Math.ceil(i / 6)}`,
            description: `Standard operating ${typeLabel.toLowerCase()} for ${deptId} department procedures and compliance.`,
            department: deptId as any, // Cast to any to satisfy specific DepartmentType union if needed, or rely on matching string
            category: deptId,
            type: typeLabel.toLowerCase() as any,
            lastUpdated: new Date(2024, 0, 1 + (i % 28)).toISOString().split('T')[0],
            fileSize: `${(Math.random() * 2 + 0.1).toFixed(1)} MB`,
            format: i % 3 === 0 ? 'xlsx' : 'docx',
            downloadUrl: '#',
            status: 'active'
        });
    }
    return records;
};

export const records: ManagementRecord[] = generateRecords();

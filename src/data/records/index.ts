import { ManagementRecord } from '../../types/records';
import { financialRecords } from './financial-records';
import { hrRecords } from './hr-records';
import { salesRecords } from './sales-records';
import { adminRecords } from './admin-records';
import { qualityRecords } from './quality-records';

// Operations & Inventory records (consolidated for efficiency)
const operationsRecords: ManagementRecord[] = [
  {
    id: 'OPS-001',
    title: 'Daily Operations Checklist',
    department: 'Operations',
    category: 'Quality Control',
    version: '1.5',
    effectiveDate: '2024-01-15',
    description: 'Daily checklist for operations team to ensure quality standards and safety compliance',
    formStructure: {
      sections: [
        {
          title: 'General Information',
          fields: [
            { name: 'Date', type: 'date', required: true, defaultValue: 'today' },
            { name: 'Shift', type: 'select', required: true, options: ['Morning', 'Afternoon', 'Full Day'] },
            { name: 'Team Leader', type: 'text', required: true },
            { name: 'Location', type: 'select', required: true, options: ['Sfax', 'Tunis'] }
          ]
        },
        {
          title: 'Equipment Readiness',
          fields: [
            { name: 'Tools & Equipment Checked', type: 'checkbox', required: true },
            { name: 'Vehicle Inspection Complete', type: 'checkbox', required: true },
            { name: 'Safety Gear Available', type: 'checkbox', required: true },
            { name: 'Stock Levels Verified', type: 'checkbox', required: true }
          ]
        },
        {
          title: 'Daily Tasks',
          type: 'repeatable',
          fields: [
            { name: 'Task Description', type: 'text', required: true },
            { name: 'Status', type: 'select', required: true, options: ['Completed', 'In Progress', 'Pending'] },
            { name: 'Notes', type: 'textarea' }
          ]
        },
        {
          title: 'Sign-Off',
          fields: [
            { name: 'Team Leader Signature', type: 'signature', required: true },
            { name: 'Manager Review', type: 'signature', required: true }
          ]
        }
      ]
    },
    instructions: [
      'Complete checklist at start of each day',
      'Report any equipment issues immediately',
      'Ensure all safety protocols followed',
      'Manager reviews daily before end of shift'
    ],
    relatedDocuments: ['Service Delivery Playbook', 'Safety Manual']
  },

  {
    id: 'OPS-002',
    title: 'Service Delivery Report',
    department: 'Operations',
    category: 'Service Execution',
    version: '2.0',
    effectiveDate: '2024-01-15',
    description: 'Report form for documenting service delivery details and customer sign-off',
    formStructure: {
      sections: [
        {
          title: 'Service Information',
          fields: [
            { name: 'Service Order Number', type: 'text', required: true },
            { name: 'Date', type: 'date', required: true },
            { name: 'Customer Name', type: 'text', required: true },
            { name: 'Service Type', type: 'select', required: true,
              options: ['Inspection', 'Maintenance', 'Repair', 'Installation', 'Testing'] }
          ]
        },
        {
          title: 'Work Performed',
          type: 'repeatable',
          fields: [
            { name: 'Service Description', type: 'textarea', required: true },
            { name: 'Equipment Serviced', type: 'text', required: true },
            { name: 'Findings', type: 'textarea' },
            { name: 'Actions Taken', type: 'textarea', required: true }
          ]
        },
        {
          title: 'Materials Used',
          type: 'repeatable',
          fields: [
            { name: 'Item', type: 'text', required: true },
            { name: 'Quantity', type: 'number', required: true },
            { name: 'Unit', type: 'text' }
          ]
        },
        {
          title: 'Customer Sign-Off',
          fields: [
            { name: 'Customer Name', type: 'text', required: true },
            { name: 'Customer Signature', type: 'signature', required: true },
            { name: 'Satisfaction Rating', type: 'rating', scale: '1-5' },
            { name: 'Technician Signature', type: 'signature', required: true }
          ]
        }
      ]
    },
    instructions: [
      'Complete for every service visit',
      'Document all work performed',
      'Obtain customer signature before leaving',
      'Submit to office within 24 hours'
    ],
    relatedDocuments: ['Service Delivery Playbook']
  },

  {
    id: 'OPS-003',
    title: 'Equipment Maintenance Checklist',
    department: 'Operations',
    category: 'Maintenance',
    version: '1.0',
    effectiveDate: '2024-01-15',
    description: 'Checklist for equipment maintenance',
    formStructure: {
      sections: [
        { title: 'Equipment', fields: [
          { name: 'Equipment ID', type: 'text', required: true },
          { name: 'Equipment Type', type: 'text', required: true },
          { name: 'Location', type: 'select', required: true, options: ['Sfax', 'Tunis'] },
          { name: 'Date', type: 'date', required: true, defaultValue: 'today' },
          { name: 'Performed By', type: 'text', required: true }
        ]},
        { title: 'Checklist', type: 'repeatable', fields: [
          { name: 'Task', type: 'text', required: true },
          { name: 'Status', type: 'select', required: true, options: ['OK', 'NA', 'Fail', 'Adjusted'] },
          { name: 'Notes', type: 'textarea' }
        ]},
        { title: 'Sign-off', fields: [
          { name: 'Technician Signature', type: 'signature', required: true },
          { name: 'Supervisor Review', type: 'signature', required: true }
        ]}
      ]
    },
    instructions: ['Complete per maintenance schedule', 'Report failures immediately', 'File with equipment record'],
    relatedDocuments: ['Service Delivery Playbook', 'OPS-001']
  },
  {
    id: 'OPS-004',
    title: 'Safety Incident Report',
    department: 'Operations',
    category: 'Safety',
    version: '1.0',
    effectiveDate: '2024-01-15',
    description: 'Report for safety incidents and near-misses',
    formStructure: {
      sections: [
        { title: 'Incident', fields: [
          { name: 'Report Number', type: 'text', autoGenerated: true },
          { name: 'Date', type: 'date', required: true, defaultValue: 'today' },
          { name: 'Time', type: 'text', required: true },
          { name: 'Location', type: 'text', required: true },
          { name: 'Reported By', type: 'text', required: true },
          { name: 'Type', type: 'select', required: true, options: ['Injury', 'Near-miss', 'Property Damage', 'Environmental', 'Other'] },
          { name: 'Description', type: 'textarea', required: true, maxLength: 1000 }
        ]},
        { title: 'Investigation', fields: [
          { name: 'Investigated By', type: 'text', required: true },
          { name: 'Root Cause', type: 'textarea', required: true },
          { name: 'Corrective Actions', type: 'textarea', required: true }
        ]},
        { title: 'Sign-off', fields: [
          { name: 'Investigator Signature', type: 'signature', required: true },
          { name: 'Manager Review', type: 'signature', required: true }
        ]}
      ]
    },
    instructions: ['Report within 24 hours', 'Investigate promptly', 'Implement corrective actions'],
    relatedDocuments: ['Service Delivery Playbook', 'Handbook', 'QA-002']
  },
  {
    id: 'OPS-005',
    title: 'Quality Control Inspection Form',
    department: 'Operations',
    category: 'Quality',
    version: '1.0',
    effectiveDate: '2024-01-15',
    description: 'Form for quality control inspections',
    formStructure: {
      sections: [
        { title: 'Inspection', fields: [
          { name: 'Inspection Ref', type: 'text', autoGenerated: true },
          { name: 'Date', type: 'date', required: true, defaultValue: 'today' },
          { name: 'Inspector', type: 'text', required: true },
          { name: 'Product / Service', type: 'text', required: true },
          { name: 'Batch / Job', type: 'text' }
        ]},
        { title: 'Criteria', type: 'repeatable', fields: [
          { name: 'Criterion', type: 'text', required: true },
          { name: 'Result', type: 'select', required: true, options: ['Pass', 'Fail'] },
          { name: 'Notes', type: 'textarea' }
        ]},
        { title: 'Result', fields: [
          { name: 'Overall', type: 'select', required: true, options: ['Pass', 'Fail'] },
          { name: 'Inspector Signature', type: 'signature', required: true }
        ]}
      ]
    },
    instructions: ['Inspect per QC plan', 'Raise NCR if fail', 'File with batch record'],
    relatedDocuments: ['Service Delivery Playbook', 'QA-005']
  },
  {
    id: 'OPS-006',
    title: 'Work Order Form',
    department: 'Operations',
    category: 'Service',
    version: '1.0',
    effectiveDate: '2024-01-15',
    description: 'Form for work orders and job planning',
    formStructure: {
      sections: [
        { title: 'Order', fields: [
          { name: 'Work Order Number', type: 'text', autoGenerated: true },
          { name: 'Date', type: 'date', required: true, defaultValue: 'today' },
          { name: 'Customer', type: 'text', required: true },
          { name: 'Site Address', type: 'textarea', required: true },
          { name: 'Contact', type: 'text', required: true },
          { name: 'Service Type', type: 'select', required: true, options: ['Inspection', 'Maintenance', 'Repair', 'Installation', 'Testing'] },
          { name: 'Scheduled Date', type: 'date', required: true },
          { name: 'Assigned Technician(s)', type: 'text', required: true }
        ]},
        { title: 'Work', fields: [
          { name: 'Scope', type: 'textarea', required: true },
          { name: 'Materials Required', type: 'textarea' },
          { name: 'Special Instructions', type: 'textarea' }
        ]},
        { title: 'Completion', fields: [
          { name: 'Work Performed', type: 'textarea', required: true },
          { name: 'Completion Date', type: 'date', required: true },
          { name: 'Technician Signature', type: 'signature', required: true },
          { name: 'Customer Signature', type: 'signature', required: true }
        ]}
      ]
    },
    instructions: ['Issue before site visit', 'Complete on site', 'Submit within 24 hours'],
    relatedDocuments: ['Service Delivery Playbook', 'OPS-002']
  },
  {
    id: 'OPS-007',
    title: 'Vehicle/Equipment Logbook',
    department: 'Operations',
    category: 'Fleet',
    version: '1.0',
    effectiveDate: '2024-01-15',
    description: 'Logbook for vehicle and equipment use',
    formStructure: {
      sections: [
        { title: 'Trip / Use', fields: [
          { name: 'Date', type: 'date', required: true, defaultValue: 'today' },
          { name: 'Vehicle / Equipment ID', type: 'text', required: true },
          { name: 'Driver / User', type: 'text', required: true },
          { name: 'Start Odometer / Hours', type: 'number', required: true },
          { name: 'End Odometer / Hours', type: 'number', required: true },
          { name: 'Purpose', type: 'textarea', required: true },
          { name: 'Destination', type: 'text' }
        ]},
        { title: 'Condition', fields: [
          { name: 'Pre-check OK', type: 'checkbox', required: true },
          { name: 'Post-check OK', type: 'checkbox', required: true },
          { name: 'Issues / Damage', type: 'textarea' }
        ]},
        { title: 'Sign-off', fields: [
          { name: 'Driver / User Signature', type: 'signature', required: true }
        ]}
      ]
    },
    instructions: ['Complete for each use', 'Report issues immediately', 'Submit weekly'],
    relatedDocuments: ['Service Delivery Playbook', 'OPS-003']
  },
  {
    id: 'OPS-008',
    title: 'Supplier Performance Evaluation',
    department: 'Operations',
    category: 'Procurement',
    version: '1.0',
    effectiveDate: '2024-01-15',
    description: 'Evaluation of supplier performance',
    formStructure: {
      sections: [
        { title: 'Supplier & Period', fields: [
          { name: 'Supplier Name', type: 'text', required: true },
          { name: 'Evaluation Period', type: 'text', required: true },
          { name: 'Evaluated By', type: 'text', required: true },
          { name: 'Date', type: 'date', required: true, defaultValue: 'today' }
        ]},
        { title: 'Criteria', type: 'repeatable', fields: [
          { name: 'Criterion', type: 'text', required: true },
          { name: 'Score', type: 'rating', scale: '1-5' },
          { name: 'Comments', type: 'textarea' }
        ]},
        { title: 'Result', fields: [
          { name: 'Overall Score', type: 'number', required: true },
          { name: 'Recommendation', type: 'select', required: true, options: ['Continue', 'Improvement Required', 'Review', 'Discontinue'] },
          { name: 'Evaluator Signature', type: 'signature', required: true }
        ]}
      ]
    },
    instructions: ['Evaluate quarterly or per contract', 'Share feedback with supplier', 'Update vendor file'],
    relatedDocuments: ['Products & Inventory Playbook', 'FIN-007', 'QA-004']
  },
  {
    id: 'OPS-009',
    title: 'Non-Conformance Report',
    department: 'Operations',
    category: 'Quality',
    version: '1.0',
    effectiveDate: '2024-01-15',
    description: 'Report for non-conformances',
    formStructure: {
      sections: [
        { title: 'NCR', fields: [
          { name: 'NCR Number', type: 'text', autoGenerated: true },
          { name: 'Date', type: 'date', required: true, defaultValue: 'today' },
          { name: 'Raised By', type: 'text', required: true },
          { name: 'Department', type: 'text', required: true },
          { name: 'Description', type: 'textarea', required: true, maxLength: 1000 },
          { name: 'Related Job / Batch', type: 'text' }
        ]},
        { title: 'Disposition', fields: [
          { name: 'Disposition', type: 'select', required: true, options: ['Use As-Is', 'Rework', 'Scrap', 'Return to Supplier', 'Other'] },
          { name: 'Assigned To', type: 'text', required: true },
          { name: 'Due Date', type: 'date', required: true }
        ]},
        { title: 'Closure', fields: [
          { name: 'Actions Taken', type: 'textarea', required: true },
          { name: 'Closed Date', type: 'date', required: true },
          { name: 'Raised By Signature', type: 'signature', required: true },
          { name: 'Manager Approval', type: 'signature', required: true }
        ]}
      ]
    },
    instructions: ['Raise immediately', 'Assign and track', 'Link to CAR if needed'],
    relatedDocuments: ['Service Delivery Playbook', 'QA-002', 'QA-003']
  },
  {
    id: 'OPS-010',
    title: 'Project Status Report',
    department: 'Operations',
    category: 'Project',
    version: '1.0',
    effectiveDate: '2024-01-15',
    description: 'Periodic project status reporting',
    formStructure: {
      sections: [
        { title: 'Project', fields: [
          { name: 'Project Name', type: 'text', required: true },
          { name: 'Report Period', type: 'text', required: true },
          { name: 'Report Date', type: 'date', required: true, defaultValue: 'today' },
          { name: 'Prepared By', type: 'text', required: true },
          { name: 'Project Manager', type: 'text', required: true }
        ]},
        { title: 'Status', fields: [
          { name: 'Overall Status', type: 'select', required: true, options: ['On Track', 'At Risk', 'Delayed', 'On Hold'] },
          { name: 'Progress %', type: 'number', required: true, min: 0, max: 100 },
          { name: 'Summary', type: 'textarea', required: true },
          { name: 'Key Achievements', type: 'textarea', required: true },
          { name: 'Risks / Issues', type: 'textarea' },
          { name: 'Next Steps', type: 'textarea', required: true }
        ]},
        { title: 'Sign-off', fields: [
          { name: 'Project Manager Signature', type: 'signature', required: true }
        ]}
      ]
    },
    instructions: ['Submit weekly or per plan', 'Escalate risks', 'Update stakeholders'],
    relatedDocuments: ['Service Delivery Playbook', 'OPS-006']
  }
];

const inventoryRecords: ManagementRecord[] = [
  {
    id: 'INV-001',
    title: 'Stock Requisition Form',
    department: 'Inventory',
    category: 'Stock Management',
    version: '1.8',
    effectiveDate: '2024-01-15',
    description: 'Form for requesting stock items from warehouse',
    formStructure: {
      sections: [
        {
          title: 'Requisition Details',
          fields: [
            { name: 'Requisition Number', type: 'text', autoGenerated: true },
            { name: 'Date', type: 'date', required: true, defaultValue: 'today' },
            { name: 'Requested By', type: 'text', required: true },
            { name: 'Department', type: 'select', required: true, options: ['Sales', 'Operations'] },
            { name: 'Purpose', type: 'select', required: true, options: ['Customer Order', 'Service Job', 'Internal Use'] }
          ]
        },
        {
          title: 'Items Requested',
          type: 'repeatable',
          fields: [
            { name: 'Product Code', type: 'text', required: true },
            { name: 'Description', type: 'text', required: true },
            { name: 'Quantity', type: 'number', required: true },
            { name: 'Unit', type: 'text' },
            { name: 'Reference (Order/Job #)', type: 'text' }
          ]
        },
        {
          title: 'Approval',
          fields: [
            { name: 'Requester Signature', type: 'signature', required: true },
            { name: 'Manager Approval', type: 'signature', required: true },
            { name: 'Warehouse Approval', type: 'signature', required: true },
            { name: 'Issue Date', type: 'date' }
          ]
        }
      ]
    },
    instructions: [
      'Submit requisition with proper authorization',
      'Warehouse checks stock availability',
      'Items issued against approved requisition only',
      'Return unused items to warehouse'
    ],
    relatedDocuments: ['Products & Inventory Playbook']
  },

  {
    id: 'INV-002',
    title: 'Goods Receipt Note',
    department: 'Inventory',
    category: 'Receiving',
    version: '2.1',
    effectiveDate: '2024-01-15',
    description: 'Form for recording receipt of goods into warehouse',
    formStructure: {
      sections: [
        {
          title: 'Receipt Information',
          fields: [
            { name: 'GRN Number', type: 'text', autoGenerated: true },
            { name: 'Date Received', type: 'date', required: true, defaultValue: 'today' },
            { name:'Supplier Name', type: 'text', required: true },
            { name: 'Purchase Order Number', type: 'text', required: true },
            { name: 'Delivery Note Number', type: 'text' }
          ]
        },
        {
          title: 'Items Received',
          type: 'repeatable',
          fields: [
            { name: 'Product Code', type: 'text', required: true },
            { name: 'Description', type: 'text', required: true },
            { name: 'Quantity Ordered', type: 'number', required: true },
            { name: 'Quantity Received', type: 'number', required: true },
            { name: 'Condition', type: 'select', required: true, options: ['Good', 'Damaged', 'Partial'] },
            { name: 'Bin Location', type: 'text' }
          ]
        },
        {
          title: 'Quality Check',
          fields: [
            { name: 'Items Match PO', type: 'checkbox', required: true },
            { name: 'Quantity Correct', type: 'checkbox', required: true },
            { name: 'No Damage', type: 'checkbox', required: true },
            { name: 'Quality Acceptable', type: 'checkbox', required: true },
            { name: 'Remarks', type: 'textarea' }
          ]
        },
        {
          title: 'Sign-Off',
          fields: [
            { name: 'Received By', type: 'text', required: true },
            { name: 'Receiver Signature', type: 'signature', required: true },
            { name: 'Warehouse Manager Approval', type: 'signature', required: true }
          ]
        }
      ]
    },
    instructions: [
      'Inspect all goods upon receipt',
      'Match against purchase order',
      'Note any discrepancies or damage',
      'Update inventory system immediately',
      'Forward GRN to Finance for invoice processing'
    ],
    relatedDocuments: ['Products & Inventory Playbook', 'Purchase Order Form']
  },

  {
    id: 'INV-003',
    title: 'Stock Transfer Form',
    department: 'Inventory',
    category: 'Movement',
    version: '1.0',
    effectiveDate: '2024-01-15',
    description: 'Form for transferring stock between locations',
    formStructure: {
      sections: [
        { title: 'Transfer', fields: [
          { name: 'Transfer Number', type: 'text', autoGenerated: true },
          { name: 'Date', type: 'date', required: true, defaultValue: 'today' },
          { name: 'From Location', type: 'select', required: true, options: ['Sfax', 'Tunis'] },
          { name: 'To Location', type: 'select', required: true, options: ['Sfax', 'Tunis'] },
          { name: 'Requested By', type: 'text', required: true },
          { name: 'Purpose', type: 'textarea', required: true }
        ]},
        { title: 'Items', type: 'repeatable', fields: [
          { name: 'Product Code', type: 'text', required: true },
          { name: 'Description', type: 'text', required: true },
          { name: 'Quantity', type: 'number', required: true },
          { name: 'Unit', type: 'text' }
        ]},
        { title: 'Sign-off', fields: [
          { name: 'Sender Signature', type: 'signature', required: true },
          { name: 'Receiver Signature', type: 'signature', required: true },
          { name: 'Manager Approval', type: 'signature', required: true }
        ]}
      ]
    },
    instructions: ['Record movement same day', 'Update both locations', 'File with inventory records'],
    relatedDocuments: ['Products & Inventory Playbook', 'INV-001']
  },
  {
    id: 'INV-004',
    title: 'Physical Inventory Count Sheet',
    department: 'Inventory',
    category: 'Count',
    version: '1.0',
    effectiveDate: '2024-01-15',
    description: 'Sheet for physical inventory counts',
    formStructure: {
      sections: [
        { title: 'Count', fields: [
          { name: 'Count Reference', type: 'text', autoGenerated: true },
          { name: 'Date', type: 'date', required: true, defaultValue: 'today' },
          { name: 'Location', type: 'select', required: true, options: ['Sfax', 'Tunis'] },
          { name: 'Area / Bin', type: 'text', required: true },
          { name: 'Counter(s)', type: 'text', required: true },
          { name: 'Supervisor', type: 'text', required: true }
        ]},
        { title: 'Items', type: 'repeatable', fields: [
          { name: 'Product Code', type: 'text', required: true },
          { name: 'Description', type: 'text', required: true },
          { name: 'System Quantity', type: 'number', required: true },
          { name: 'Counted Quantity', type: 'number', required: true },
          { name: 'Variance', type: 'number', readOnly: true },
          { name: 'Notes', type: 'textarea' }
        ]},
        { title: 'Sign-off', fields: [
          { name: 'Counter Signature', type: 'signature', required: true },
          { name: 'Supervisor Signature', type: 'signature', required: true }
        ]}
      ]
    },
    instructions: ['Count per cycle or full count plan', 'Record variances', 'Use for stock adjustment'],
    relatedDocuments: ['Products & Inventory Playbook', 'INV-005']
  },
  {
    id: 'INV-005',
    title: 'Stock Adjustment Form',
    department: 'Inventory',
    category: 'Adjustment',
    version: '1.0',
    effectiveDate: '2024-01-15',
    description: 'Form for stock adjustments following count or audit',
    formStructure: {
      sections: [
        { title: 'Adjustment', fields: [
          { name: 'Adjustment Number', type: 'text', autoGenerated: true },
          { name: 'Date', type: 'date', required: true, defaultValue: 'today' },
          { name: 'Location', type: 'select', required: true, options: ['Sfax', 'Tunis'] },
          { name: 'Reason', type: 'select', required: true, options: ['Count Variance', 'Damage', 'Obsolete', 'Error', 'Other'] },
          { name: 'Reference (Count / NCR)', type: 'text' },
          { name: 'Requested By', type: 'text', required: true }
        ]},
        { title: 'Items', type: 'repeatable', fields: [
          { name: 'Product Code', type: 'text', required: true },
          { name: 'Description', type: 'text', required: true },
          { name: 'Current Qty', type: 'number', required: true },
          { name: 'Adjusted Qty', type: 'number', required: true },
          { name: 'Variance', type: 'number', required: true },
          { name: 'Notes', type: 'textarea' }
        ]},
        { title: 'Approval', fields: [
          { name: 'Warehouse Manager', type: 'signature', required: true },
          { name: 'Finance / Admin', type: 'signature', required: true }
        ]}
      ]
    },
    instructions: ['Base on count or approved reason', 'Obtain approvals', 'Update system and file'],
    relatedDocuments: ['Products & Inventory Playbook', 'INV-004', 'INV-007']
  },
  {
    id: 'INV-006',
    title: 'Material Return Note',
    department: 'Inventory',
    category: 'Movement',
    version: '1.0',
    effectiveDate: '2024-01-15',
    description: 'Note for returning materials to supplier',
    formStructure: {
      sections: [
        { title: 'Return', fields: [
          { name: 'MRN Number', type: 'text', autoGenerated: true },
          { name: 'Date', type: 'date', required: true, defaultValue: 'today' },
          { name: 'Supplier', type: 'text', required: true },
          { name: 'PO Number', type: 'text', required: true },
          { name: 'Reason', type: 'select', required: true, options: ['Defective', 'Wrong Item', 'Excess', 'Other'] },
          { name: 'Authorized By', type: 'text', required: true }
        ]},
        { title: 'Items', type: 'repeatable', fields: [
          { name: 'Product Code', type: 'text', required: true },
          { name: 'Description', type: 'text', required: true },
          { name: 'Quantity', type: 'number', required: true },
          { name: 'Unit', type: 'text' }
        ]},
        { title: 'Sign-off', fields: [
          { name: 'Warehouse Signature', type: 'signature', required: true },
          { name: 'Purchase / Sales Approval', type: 'signature', required: true }
        ]}
      ]
    },
    instructions: ['Obtain approval before return', 'Update inventory on dispatch', 'Link to supplier credit'],
    relatedDocuments: ['Products & Inventory Playbook', 'FIN-008', 'SALES-008']
  },
  {
    id: 'INV-007',
    title: 'Damaged/Obsolete Stock Report',
    department: 'Inventory',
    category: 'Disposition',
    version: '1.0',
    effectiveDate: '2024-01-15',
    description: 'Report for damaged or obsolete stock',
    formStructure: {
      sections: [
        { title: 'Report', fields: [
          { name: 'Report Number', type: 'text', autoGenerated: true },
          { name: 'Date', type: 'date', required: true, defaultValue: 'today' },
          { name: 'Location', type: 'select', required: true, options: ['Sfax', 'Tunis'] },
          { name: 'Reported By', type: 'text', required: true },
          { name: 'Type', type: 'select', required: true, options: ['Damaged', 'Obsolete', 'Expired', 'Other'] }
        ]},
        { title: 'Items', type: 'repeatable', fields: [
          { name: 'Product Code', type: 'text', required: true },
          { name: 'Description', type: 'text', required: true },
          { name: 'Quantity', type: 'number', required: true },
          { name: 'Estimated Value (TND)', type: 'currency', currency: 'TND' },
          { name: 'Reason', type: 'textarea', required: true }
        ]},
        { title: 'Disposition', fields: [
          { name: 'Disposition', type: 'select', required: true, options: ['Scrap', 'Return to Supplier', 'Donate', 'Other'] },
          { name: 'Approved By', type: 'signature', required: true },
          { name: 'Finance Approval', type: 'signature', required: true }
        ]}
      ]
    },
    instructions: ['Report promptly', 'Obtain approval for disposition', 'Update inventory and file'],
    relatedDocuments: ['Products & Inventory Playbook', 'INV-005', 'FIN-008']
  },
  {
    id: 'INV-008',
    title: 'Reorder Point Alert',
    department: 'Inventory',
    category: 'Planning',
    version: '1.0',
    effectiveDate: '2024-01-15',
    description: 'Alert when stock falls below reorder point',
    formStructure: {
      sections: [
        { title: 'Alert', fields: [
          { name: 'Alert Number', type: 'text', autoGenerated: true },
          { name: 'Date', type: 'date', required: true, defaultValue: 'today' },
          { name: 'Location', type: 'select', required: true, options: ['Sfax', 'Tunis'] },
          { name: 'Raised By', type: 'text', required: true }
        ]},
        { title: 'Items', type: 'repeatable', fields: [
          { name: 'Product Code', type: 'text', required: true },
          { name: 'Description', type: 'text', required: true },
          { name: 'Current Qty', type: 'number', required: true },
          { name: 'Reorder Point', type: 'number', required: true },
          { name: 'Recommended Order Qty', type: 'number', required: true },
          { name: 'Preferred Supplier', type: 'text' }
        ]},
        { title: 'Action', fields: [
          { name: 'PO Issued', type: 'checkbox' },
          { name: 'PO Number', type: 'text' },
          { name: 'Acknowledged By', type: 'text', required: true },
          { name: 'Signature', type: 'signature', required: true }
        ]}
      ]
    },
    instructions: ['Review daily or per plan', 'Raise PO per procurement process', 'Track until receipt'],
    relatedDocuments: ['Products & Inventory Playbook', 'FIN-001', 'Purchasing Procedures']
  },
  {
    id: 'INV-009',
    title: 'Inventory Valuation Report',
    department: 'Inventory',
    category: 'Reporting',
    version: '1.0',
    effectiveDate: '2024-01-15',
    description: 'Periodic inventory valuation report',
    formStructure: {
      sections: [
        { title: 'Period', fields: [
          { name: 'Report Period', type: 'select', required: true, options: ['Monthly', 'Quarterly', 'Annual'] },
          { name: 'Period End', type: 'date', required: true },
          { name: 'Location', type: 'select', required: true, options: ['Sfax', 'Tunis', 'All'] },
          { name: 'Prepared By', type: 'text', required: true },
          { name: 'Date', type: 'date', required: true, defaultValue: 'today' }
        ]},
        { title: 'Summary', fields: [
          { name: 'Total Value (TND)', type: 'currency', required: true, currency: 'TND' },
          { name: 'Item Count', type: 'number', required: true },
          { name: 'Variance vs Previous', type: 'currency', currency: 'TND' },
          { name: 'Key Highlights', type: 'textarea', required: true },
          { name: 'Risks / Obsolescence', type: 'textarea' }
        ]},
        { title: 'Sign-off', fields: [
          { name: 'Warehouse Responsible', type: 'signature', required: true },
          { name: 'Finance Review', type: 'signature', required: true }
        ]}
      ]
    },
    instructions: ['Submit by 5th working day', 'Use for financial reporting', 'Review trends'],
    relatedDocuments: ['Products & Inventory Playbook', 'Money & Finance Playbook', 'FIN-009']
  },
  {
    id: 'INV-010',
    title: 'Cycle Count Schedule',
    department: 'Inventory',
    category: 'Count',
    version: '1.0',
    effectiveDate: '2024-01-15',
    description: 'Schedule for cycle counts',
    formStructure: {
      sections: [
        { title: 'Schedule', fields: [
          { name: 'Period', type: 'select', required: true, options: ['Weekly', 'Monthly', 'Quarterly'] },
          { name: 'Period Start', type: 'date', required: true },
          { name: 'Period End', type: 'date', required: true },
          { name: 'Location', type: 'select', required: true, options: ['Sfax', 'Tunis'] },
          { name: 'Prepared By', type: 'text', required: true }
        ]},
        { title: 'Counts', type: 'repeatable', fields: [
          { name: 'Date', type: 'date', required: true },
          { name: 'Area / Category', type: 'text', required: true },
          { name: 'Assigned To', type: 'text', required: true },
          { name: 'Completed', type: 'checkbox' },
          { name: 'Sheet Ref (INV-004)', type: 'text' }
        ]},
        { title: 'Sign-off', fields: [
          { name: 'Warehouse Responsible', type: 'signature', required: true }
        ]}
      ]
    },
    instructions: ['Plan per ABC or rotation', 'Use INV-004 for each count', 'Review variances'],
    relatedDocuments: ['Products & Inventory Playbook', 'INV-004', 'INV-005']
  }
];

// Export all records combined
export const allManagementRecords: ManagementRecord[] = [
  ...financialRecords,
  ...hrRecords,
  ...salesRecords,
  ...operationsRecords,
  ...inventoryRecords,
  ...adminRecords,
  ...qualityRecords
];

export { financialRecords, hrRecords, salesRecords, operationsRecords, inventoryRecords, adminRecords, qualityRecords };

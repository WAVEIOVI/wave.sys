import { ManagementRecord } from '../../types/records';

export const hrRecords: ManagementRecord[] = [
    {
        id: 'HR-001',
        title: 'Employee Leave Request Form',
        department: 'HR',
        category: 'Leave Management',
        version: '3.0',
        effectiveDate: '2024-01-15',
        description: 'Standard form for requesting all types of employee leave including annual, sick, emergency, and other leave types',

        formStructure: {
            sections: [
                {
                    title: 'Employee Information',
                    fields: [
                        { name: 'Employee Name', type: 'text', required: true },
                        { name: 'Employee ID', type: 'text', required: true },
                        {
                            name: 'Department', type: 'select', required: true,
                            options: ['Sales', 'Operations', 'Finance', 'HR', 'Admin']
                        },
                        { name: 'Position', type: 'text', required: true },
                        { name: 'Date of Joining', type: 'date', required: true },
                        { name: 'Direct Manager', type: 'text', required: true }
                    ]
                },
                {
                    title: 'Leave Details',
                    fields: [
                        {
                            name: 'Leave Type', type: 'select', required: true,
                            options: ['Annual Leave', 'Sick Leave', 'Emergency Leave', 'Maternity Leave',
                                'Paternity Leave', 'Unpaid Leave', 'Compensatory Leave']
                        },
                        { name: 'Start Date', type: 'date', required: true },
                        { name: 'End Date', type: 'date', required: true },
                        { name: 'Total Days', type: 'number', calculated: true, readOnly: true },
                        { name: 'Reason for Leave', type: 'textarea', required: true, maxLength: 500 },
                        { name: 'Emergency Contact During Leave', type: 'text', required: true },
                        { name: 'Phone Number', type: 'tel', required: true }
                    ]
                },
                {
                    title: 'Leave Balance',
                    fields: [
                        { name: 'Annual Leave Entitled', type: 'number', readOnly: true, defaultValue: 22 },
                        { name: 'Annual Leave Taken', type: 'number', readOnly: true },
                        { name: 'Annual Leave Remaining', type: 'number', readOnly: true, calculated: true },
                        { name: 'Sick Leave Entitled', type: 'number', readOnly: true, defaultValue: 15 },
                        { name: 'Sick Leave Taken', type: 'number', readOnly: true },
                        { name: 'Sick Leave Remaining', type: 'number', readOnly: true, calculated: true }
                    ]
                },
                {
                    title: 'Work Handover',
                    fields: [
                        { name: 'Pending Tasks Documented', type: 'checkbox', required: true },
                        { name: 'Backup Person Name', type: 'text', required: true },
                        { name: 'Backup Person Acknowledged', type: 'checkbox', required: true },
                        { name: 'Handover Notes', type: 'textarea', maxLength: 1000 }
                    ]
                },
                {
                    title: 'Approvals',
                    fields: [
                        { name: 'Employee Signature', type: 'signature', required: true },
                        { name: 'Request Date', type: 'date', required: true, defaultValue: 'today' },
                        { name: 'Manager Approval', type: 'signature', required: true },
                        { name: 'Manager Comments', type: 'textarea' },
                        { name: 'HR Approval', type: 'signature', required: true },
                        { name: 'HR Comments', type: 'textarea' },
                        { name: 'Approval Date', type: 'date', autoFill: true }
                    ]
                }
            ]
        },

        instructions: [
            'Submit leave request at least 2 weeks in advance for annual leave',
            'For sick leave beyond 3 days, medical certificate required',
            'Emergency leave requires manager approval within 24 hours',
            'Ensure work handover is completed before leave starts',
            'Check leave balance before submitting request',
            'Request will be denied if insufficient leave balance',
            'Approved form will be returned via email within 3 business days'
        ],

        leavePolicy: {
            annualLeave: {
                entitlement: '22 working days per year',
                accrual: 'Monthly basis (1.83 days per month)',
                carryOver: 'Maximum 5 days to next year',
                minimumNotice: '14 days',
                maximumConsecutive: '15 days (requires GM approval beyond this)'
            },
            sickLeave: {
                entitlement: '15 days per year',
                medicalCertificate: 'Required after 3 consecutive days',
                halfPay: 'After 10 days in a year',
                chronicIllness: 'Special consideration with medical documentation'
            },
            maternityLeave: {
                entitlement: '30 days (Tunisia labor law)',
                additionalUnpaid: 'Up to 4 months available',
                documentation: 'Medical certificate required',
                timing: 'Can start up to 2 weeks before due date'
            }
        },

        validationRules: [
            'Leave dates cannot overlap with existing approved leave',
            'Minimum 2 employees must be present in each department',
            'Public holidays not counted in leave days',
            'Weekend days not counted in leave calculation',
            'Maximum 30% of department can be on leave simultaneously'
        ],

        relatedDocuments: [
            'Employee Handbook',
            'People & Admin Playbook',
            'Leave Policy',
            'CNSS Regulations'
        ]
    },

    {
        id: 'HR-002',
        title: 'Performance Appraisal Form',
        department: 'HR',
        category: 'Performance Management',
        version: '2.5',
        effectiveDate: '2024-01-01',
        description: 'Annual employee performance evaluation form for assessing performance and setting goals',

        formStructure: {
            sections: [
                {
                    title: 'Employee Information',
                    fields: [
                        { name: 'Employee Name', type: 'text', required: true },
                        { name: 'Employee ID', type: 'text', required: true },
                        { name: 'Position', type: 'text', required: true },
                        {
                            name: 'Department', type: 'select', required: true,
                            options: ['Sales', 'Operations', 'Finance', 'HR', 'Admin']
                        },
                        { name: 'Review Period From', type: 'date', required: true },
                        { name: 'Review Period To', type: 'date', required: true },
                        { name: 'Date of Review', type: 'date', required: true }
                    ]
                },
                {
                    title: 'Performance Criteria',
                    type: 'rating',
                    fields: [
                        { name: 'Job Knowledge & Skills', type: 'rating', required: true, scale: '1-5' },
                        { name: 'Understanding of Procedures', type: 'rating', required: true, scale: '1-5' },
                        { name: 'Continuous Learning', type: 'rating', required: true, scale: '1-5' },
                        { name: 'Accuracy and Attention to Detail', type: 'rating', required: true, scale: '1-5' },
                        { name: 'Quality of Work', type: 'rating', required: true, scale: '1-5' },
                        { name: 'Meeting Deadlines', type: 'rating', required: true, scale: '1-5' },
                        { name: 'Productivity', type: 'rating', required: true, scale: '1-5' },
                        { name: 'Communication Skills', type: 'rating', required: true, scale: '1-5' },
                        { name: 'Teamwork', type: 'rating', required: true, scale: '1-5' },
                        { name: 'Initiative & Problem Solving', type: 'rating', required: true, scale: '1-5' }
                    ]
                },
                {
                    title: 'Goals Achievement',
                    fields: [
                        { name: 'Goals Set Last Review', type: 'textarea', readOnly: true },
                        { name: 'Achievement Status', type: 'rating', scale: '0-100%' },
                        { name: 'Comments on Achievement', type: 'textarea', maxLength: 1000 }
                    ]
                },
                {
                    title: 'Overall Assessment',
                    fields: [
                        { name: 'Total Score', type: 'number', calculated: true, readOnly: true },
                        {
                            name: 'Overall Rating', type: 'select', calculated: true,
                            options: ['Poor', 'Below Expectations', 'Meets Expectations',
                                'Exceeds Expectations', 'Outstanding']
                        },
                        { name: 'Strengths', type: 'textarea', required: true },
                        { name: 'Areas for Improvement', type: 'textarea', required: true },
                        { name: 'Training Recommendations', type: 'textarea' }
                    ]
                },
                {
                    title: 'Goals for Next Period',
                    type: 'repeatable',
                    fields: [
                        { name: 'Goal Description', type: 'textarea', required: true },
                        { name: 'Target Date', type: 'date', required: true },
                        { name: 'Success Metrics', type: 'text', required: true }
                    ]
                },
                {
                    title: 'Employee Self-Assessment',
                    fields: [
                        {
                            name: 'Self-Rating', type: 'select',
                            options: ['Poor', 'Below Expectations', 'Meets Expectations',
                                'Exceeds Expectations', 'Outstanding']
                        },
                        { name: 'Employee Comments', type: 'textarea', maxLength: 1000 },
                        { name: 'Career Development Interests', type: 'textarea' }
                    ]
                },
                {
                    title: 'Signatures',
                    fields: [
                        { name: 'Manager Signature', type: 'signature', required: true },
                        { name: 'Manager Comments', type: 'textarea' },
                        { name: 'Employee Signature', type: 'signature', required: true },
                        { name: 'Employee Acknowledgment', type: 'checkbox', required: true },
                        { name: 'HR Review Signature', type: 'signature', required: true },
                        { name: 'Review Date', type: 'date', autoFill: true }
                    ]
                }
            ]
        },

        instructions: [
            'Performance reviews conducted annually',
            'Manager completes evaluation and discusses with employee',
            'Employee provides self-assessment',
            'Goals for next period must be SMART (Specific, Measurable, Achievable, Relevant, Time-bound)',
            'Both parties must sign to acknowledge review',
            'HR reviews for consistency and records in employee file',
            'Performance affects annual salary review and promotion decisions'
        ],

        validationRules: [
            'All rating criteria must be scored',
            'Written justification required for ratings of 1 or 5',
            'At least 3 goals must be set for next period',
            'Employee must acknowledge receipt even if disagrees'
        ],

        relatedDocuments: [
            'People & Admin Playbook',
            'Performance Management Policy',
            'Training & Development Policy'
        ]
    },

    {
        id: 'HR-003',
        title: 'New Hire Onboarding Checklist',
        department: 'HR',
        category: 'Recruitment & Onboarding',
        version: '2.2',
        effectiveDate: '2024-01-15',
        description: 'Comprehensive checklist for onboarding new employees and ensuring smooth integration',

        formStructure: {
            sections: [
                {
                    title: 'New Employee Information',
                    fields: [
                        { name: 'Employee Name', type: 'text', required: true },
                        { name: 'Employee ID', type: 'text', autoGenerated: true },
                        { name: 'Position', type: 'text', required: true },
                        {
                            name: 'Department', type: 'select', required: true,
                            options: ['Sales', 'Operations', 'Finance', 'HR', 'Admin']
                        },
                        { name: 'Start Date', type: 'date', required: true },
                        { name: 'Direct Manager', type: 'text', required: true }
                    ]
                },
                {
                    title: 'Pre-Arrival (HR)',
                    fields: [
                        { name: 'Employment Contract Signed', type: 'checkbox', required: true },
                        { name: 'CNSS Registration Completed', type: 'checkbox', required: true },
                        { name: 'Employee File Created', type: 'checkbox', required: true },
                        { name: 'Workspace Prepared', type: 'checkbox', required: true },
                        { name: 'Equipment Ordered', type: 'checkbox', required: true },
                        { name: 'IT Account Created', type: 'checkbox', required: true }
                    ]
                },
                {
                    title: 'First Day',
                    fields: [
                        { name: 'Welcome Meeting Conducted', type: 'checkbox', required: true },
                        { name: 'Company Manual Provided', type: 'checkbox', required: true },
                        { name: 'Employee Handbook Provided', type: 'checkbox', required: true },
                        { name: 'Safety Training Completed', type: 'checkbox', required: true },
                        { name: 'Workspace Setup Complete', type: 'checkbox', required: true },
                        { name: 'Team Introduction Done', type: 'checkbox', required: true }
                    ]
                },
                {
                    title: 'First Week',
                    fields: [
                        { name: 'Department Training Started', type: 'checkbox', required: true },
                        { name: 'Systems Access Verified', type: 'checkbox', required: true },
                        { name: 'Job Responsibilities Explained', type: 'checkbox', required: true },
                        { name: 'Manager 1-on-1 Conducted', type: 'checkbox', required: true },
                        { name: 'First Week Feedback Session', type: 'checkbox', required: true }
                    ]
                },
                {
                    title: 'First Month',
                    fields: [
                        { name: 'Role-Specific Training Completed', type: 'checkbox', required: true },
                        { name: 'Performance Goals Set', type: 'checkbox', required: true },
                        { name: '30-Day Check-in Meeting', type: 'checkbox', required: true },
                        { name: 'Probation Review Scheduled', type: 'checkbox', required: true }
                    ]
                },
                {
                    title: 'Sign-Off',
                    fields: [
                        { name: 'HR Signature', type: 'signature', required: true },
                        { name: 'Manager Signature', type: 'signature', required: true },
                        { name: 'Employee Signature', type: 'signature', required: true },
                        { name: 'Completion Date', type: 'date', autoFill: true }
                    ]
                }
            ]
        },

        instructions: [
            'HR initiates onboarding process upon contract signing',
            'Complete pre-arrival tasks before employee start date',
            'Manager responsible for first day welcome and introductions',
            'All checklist items must be completed within first month',
            'HR follows up at key milestones (Day 1, Week 1, Month 1)',
            'Employee signs to confirm receipt of materials',
            'File completed checklist in employee record'
        ],

        relatedDocuments: [
            'Employee Handbook',
            'Company Manual',
            'People & Admin Playbook',
            'Employment Contract Template',
            'Safety Training Materials'
        ]
    },

    {
        id: 'HR-004',
        title: 'Training Request Form',
        department: 'HR',
        category: 'Training & Development',
        version: '1.7',
        effectiveDate: '2024-01-15',
        description: 'Form for requesting employee training and professional development activities',

        formStructure: {
            sections: [
                {
                    title: 'Employee Information',
                    fields: [
                        { name: 'Employee Name', type: 'text', required: true },
                        { name: 'Employee ID', type: 'text', required: true },
                        {
                            name: 'Department', type: 'select', required: true,
                            options: ['Sales', 'Operations', 'Finance', 'HR', 'Admin']
                        },
                        { name: 'Position', type: 'text', required: true },
                        { name: 'Time with Company', type: 'text', required: true }
                    ]
                },
                {
                    title: 'Training Details',
                    fields: [
                        { name: 'Training Title', type: 'text', required: true },
                        { name: 'Training Provider', type: 'text', required: true },
                        {
                            name: 'Training Type', type: 'select', required: true,
                            options: ['Technical Skills', 'Safety', 'Management', 'Sales', 'Software', 'Language', 'Other']
                        },
                        {
                            name: 'Format', type: 'select', required: true,
                            options: ['In-Person', 'Online', 'Workshop', 'Conference', 'Certification Program']
                        },
                        { name: 'Duration', type: 'text', required: true },
                        { name: 'Proposed Dates', type: 'text', required: true },
                        { name: 'Location', type: 'text', required: true }
                    ]
                },
                {
                    title: 'Justification',
                    fields: [
                        { name: 'Business Justification', type: 'textarea', required: true, maxLength: 500 },
                        { name: 'How Training Benefits Role', type: 'textarea', required: true, maxLength: 500 },
                        { name: 'How Training Benefits Company', type: 'textarea', required: true, maxLength: 500 },
                        { name: 'Expected Outcomes', type: 'textarea', required: true }
                    ]
                },
                {
                    title: 'Cost Information',
                    fields: [
                        { name: 'Training Fee', type: 'currency', required: true, currency: 'TND' },
                        { name: 'Travel Costs', type: 'currency', currency: 'TND' },
                        { name: 'Accommodation', type: 'currency', currency: 'TND' },
                        { name: 'Other Expenses', type: 'currency', currency: 'TND' },
                        { name: 'Total Cost', type: 'currency', calculated: true, readOnly: true, currency: 'TND' },
                        { name: 'Budget Available', type: 'checkbox', required: true }
                    ]
                },
                {
                    title: 'Approvals',
                    type: 'workflow',
                    fields: [
                        { name: 'Employee Signature', type: 'signature', required: true },
                        { name: 'Manager Approval', type: 'signature', required: true },
                        { name: 'Manager Comments', type: 'textarea' },
                        { name: 'HR Approval', type: 'signature', required: true },
                        { name: 'GM Authorization (if >2000 TND)', type: 'signature', required: 'conditional' },
                        { name: 'Approval Date', type: 'date', autoFill: true }
                    ]
                }
            ]
        },

        instructions: [
            'Submit training request at least 30 days in advance',
            'Provide detailed justification showing business benefit',
            'Manager must approve training and ensure coverage during absence',
            'HR reviews against training budget and priorities',
            'GM approval required for training costs exceeding 2,000 TND',
            'Employee commits to sharing knowledge with team after training',
            'Training certificate/completion proof must be submitted to HR'
        ],

        validationRules: [
            'Request must be submitted 30 days in advance',
            'Total cost must be within departmental training budget',
            'Manager must confirm work coverage during training period',
            'Employees on probation require special approval'
        ],

        relatedDocuments: [
            'People & Admin Playbook',
            'Training & Development Policy',
            'Budget Request Form'
        ]
    },

    {
        id: 'HR-005',
        title: 'Exit Interview Form',
        department: 'HR',
        category: 'Employee Separation',
        version: '1.4',
        effectiveDate: '2024-01-15',
        description: 'Exit interview form to gather feedback from departing employees and ensure smooth offboarding',

        formStructure: {
            sections: [
                {
                    title: 'Employee Information',
                    fields: [
                        { name: 'Employee Name', type: 'text', required: true },
                        { name: 'Employee ID', type: 'text', required: true },
                        { name: 'Department', type: 'text', required: true },
                        { name: 'Position', type: 'text', required: true },
                        { name: 'Date of Hire', type: 'date', required: true },
                        { name: 'Last Working Day', type: 'date', required: true },
                        { name: 'Length of Service', type: 'text', calculated: true }
                    ]
                },
                {
                    title: 'Separation Details',
                    fields: [
                        {
                            name: 'Reason for Leaving', type: 'select', required: true,
                            options: ['Better Opportunity', 'Career Change', 'Relocation', 'Salary',
                                'Work Environment', 'Personal Reasons', 'Retirement', 'Other']
                        },
                        {
                            name: 'Voluntary or Involuntary', type: 'select', required: true,
                            options: ['Voluntary Resignation', 'Involuntary Termination', 'Mutual Agreement', 'Retirement']
                        },
                        { name: 'Additional Comments', type: 'textarea', maxLength: 500 }
                    ]
                },
                {
                    title: 'Offboarding Checklist',
                    fields: [
                        { name: 'Company Property Returned', type: 'checkbox', required: true },
                        { name: 'Knowledge Transfer Completed', type: 'checkbox', required: true },
                        { name: 'Final Payroll Processed', type: 'checkbox', required: true },
                        { name: 'CNSS Closure Initiated', type: 'checkbox', required: true },
                        { name: 'IT Access Revoked', type: 'checkbox', required: true },
                        { name: 'Exit Documents Signed', type: 'checkbox', required: true }
                    ]
                },
                {
                    title: 'Feedback (Optional but Encouraged)',
                    fields: [
                        { name: 'Overall Job Satisfaction', type: 'rating', scale: '1-5' },
                        { name: 'Relationship with Manager', type: 'rating', scale: '1-5' },
                        { name: 'Work Environment', type: 'rating', scale: '1-5' },
                        { name: 'Career Development Opportunities', type: 'rating', scale: '1-5' },
                        { name: 'Compensation & Benefits', type: 'rating', scale: '1-5' },
                        { name: 'What did you enjoy most?', type: 'textarea' },
                        { name: 'What could be improved?', type: 'textarea' },
                        {
                            name: 'Would you recommend SS+ as employer?', type: 'select',
                            options: ['Yes', 'No', 'Neutral']
                        },
                        {
                            name: 'Would you consider returning?', type: 'select',
                            options: ['Yes', 'No', 'Maybe']
                        }
                    ]
                },
                {
                    title: 'Sign-Off',
                    fields: [
                        { name: 'Interview Conducted By', type: 'text', required: true },
                        { name: 'HR Signature', type: 'signature', required: true },
                        { name: 'Employee Signature', type: 'signature', required: true },
                        { name: 'Interview Date', type: 'date', required: true }
                    ]
                }
            ]
        },

        instructions: [
            'HR schedules exit interview for employee last week',
            'Interview should be conducted in private, confidential setting',
            'Employee feedback is voluntary but encouraged',
            'All feedback treated confidentially',
            'Complete offboarding checklist before final day',
            'Process final payments according to labor law',
            'File exit interview in confidential employee record'
        ],

        validationRules: [
            'Exit interview should be conducted before last working day',
            'All offboarding checklist items must be completed',
            'Final clearance requires HR and manager sign-off'
        ],

        relatedDocuments: [
            'People & Admin Playbook',
            'Employee Handbook',
            'Separation Policy',
            'CNSS Regulations'
        ]
    },

    {
        id: 'HR-006',
        title: 'Disciplinary Action Form',
        department: 'HR',
        category: 'Employee Relations',
        version: '1.0',
        effectiveDate: '2024-01-15',
        description: 'Form to document disciplinary actions and warnings',
        formStructure: {
            sections: [
                { title: 'Employee & Incident', fields: [
                    { name: 'Employee Name', type: 'text', required: true },
                    { name: 'Employee ID', type: 'text', required: true },
                    { name: 'Department', type: 'text', required: true },
                    { name: 'Date of Incident', type: 'date', required: true },
                    { name: 'Location', type: 'text', required: true },
                    { name: 'Description of Incident', type: 'textarea', required: true, maxLength: 1000 }
                ]},
                { title: 'Action', fields: [
                    { name: 'Disciplinary Action', type: 'select', required: true, options: ['Verbal Warning', 'Written Warning', 'Final Written Warning', 'Suspension', 'Other'] },
                    { name: 'Effective Date', type: 'date', required: true },
                    { name: 'Duration (if suspension)', type: 'text' },
                    { name: 'Improvement Required', type: 'textarea', required: true }
                ]},
                { title: 'Acknowledgement', fields: [
                    { name: 'Issued By', type: 'text', required: true },
                    { name: 'Manager Signature', type: 'signature', required: true },
                    { name: 'HR Signature', type: 'signature', required: true },
                    { name: 'Employee Signature', type: 'signature', required: true },
                    { name: 'Date', type: 'date', required: true }
                ]}
            ]
        },
        instructions: ['Document facts objectively', 'Allow employee to respond', 'File in confidential personnel record'],
        relatedDocuments: ['People & Admin Playbook', 'Employee Handbook', 'Code of Conduct']
    },
    {
        id: 'HR-007',
        title: 'Salary Advance Request',
        department: 'HR',
        category: 'Compensation',
        version: '1.0',
        effectiveDate: '2024-01-15',
        description: 'Request form for salary advance',
        formStructure: {
            sections: [
                { title: 'Request', fields: [
                    { name: 'Employee Name', type: 'text', required: true },
                    { name: 'Employee ID', type: 'text', required: true },
                    { name: 'Department', type: 'text', required: true },
                    { name: 'Request Date', type: 'date', required: true, defaultValue: 'today' },
                    { name: 'Amount Requested (TND)', type: 'currency', required: true, currency: 'TND' },
                    { name: 'Reason', type: 'textarea', required: true, maxLength: 500 },
                    { name: 'Repayment Period', type: 'select', required: true, options: ['1 month', '2 months', '3 months'] }
                ]},
                { title: 'Approval', fields: [
                    { name: 'Manager Approval', type: 'signature', required: true },
                    { name: 'HR Approval', type: 'signature', required: true },
                    { name: 'Finance Approval', type: 'signature', required: true }
                ]}
            ]
        },
        instructions: ['Maximum advance per policy', 'Deduction spread over selected period', 'One advance per 12 months unless exceptional'],
        relatedDocuments: ['People & Admin Playbook', 'Pay & Benefits Policy']
    },
    {
        id: 'HR-008',
        title: 'Overtime Authorization Form',
        department: 'HR',
        category: 'Time & Attendance',
        version: '1.0',
        effectiveDate: '2024-01-15',
        description: 'Authorization for overtime work',
        formStructure: {
            sections: [
                { title: 'Overtime Details', fields: [
                    { name: 'Employee Name', type: 'text', required: true },
                    { name: 'Employee ID', type: 'text', required: true },
                    { name: 'Department', type: 'text', required: true },
                    { name: 'Date(s) of Overtime', type: 'text', required: true },
                    { name: 'Hours Requested', type: 'number', required: true, min: 0.5 },
                    { name: 'Reason', type: 'textarea', required: true, maxLength: 300 }
                ]},
                { title: 'Approval', fields: [
                    { name: 'Team Leader / Supervisor', type: 'signature', required: true },
                    { name: 'Manager Approval', type: 'signature', required: true },
                    { name: 'Pre-approval Required', type: 'checkbox', required: true }
                ]}
            ]
        },
        instructions: ['Obtain pre-approval when possible', 'Submit within 48 hours of overtime', 'HR verifies against payroll'],
        relatedDocuments: ['People & Admin Playbook', 'Working Hours Policy']
    },
    {
        id: 'HR-009',
        title: 'Employment Verification Letter Request',
        department: 'HR',
        category: 'Administration',
        version: '1.0',
        effectiveDate: '2024-01-15',
        description: 'Request for formal employment verification letter',
        formStructure: {
            sections: [
                { title: 'Request', fields: [
                    { name: 'Employee Name', type: 'text', required: true },
                    { name: 'Employee ID', type: 'text', required: true },
                    { name: 'Request Date', type: 'date', required: true, defaultValue: 'today' },
                    { name: 'Purpose', type: 'select', required: true, options: ['Bank / Loan', 'Visa', 'Housing', 'Other'] },
                    { name: 'Recipient (if applicable)', type: 'text' },
                    { name: 'Special Information to Include', type: 'textarea' }
                ]},
                { title: 'Processing', fields: [
                    { name: 'Requested By Signature', type: 'signature', required: true },
                    { name: 'HR Processed By', type: 'text' },
                    { name: 'Letter Issued Date', type: 'date' }
                ]}
            ]
        },
        instructions: ['Allow 3–5 business days', 'Standard content: dates, position, salary (if authorized)', 'Employee consent required for salary disclosure'],
        relatedDocuments: ['People & Admin Playbook', 'Employee Handbook']
    },
    {
        id: 'HR-010',
        title: 'Change of Employment Details Form',
        department: 'HR',
        category: 'Administration',
        version: '1.0',
        effectiveDate: '2024-01-15',
        description: 'Form to request changes to personal or employment details',
        formStructure: {
            sections: [
                { title: 'Employee', fields: [
                    { name: 'Employee Name', type: 'text', required: true },
                    { name: 'Employee ID', type: 'text', required: true },
                    { name: 'Request Date', type: 'date', required: true, defaultValue: 'today' }
                ]},
                { title: 'Change Requested', fields: [
                    { name: 'Type of Change', type: 'select', required: true, options: ['Address', 'Phone', 'Bank Account', 'Emergency Contact', 'Marital Status', 'Other'] },
                    { name: 'Current Value', type: 'text', required: true },
                    { name: 'New Value', type: 'text', required: true },
                    { name: 'Supporting Document', type: 'text' }
                ]},
                { title: 'Approval', fields: [
                    { name: 'Employee Signature', type: 'signature', required: true },
                    { name: 'HR Verification', type: 'signature', required: true }
                ]}
            ]
        },
        instructions: ['Attach supporting documents (e.g. utility bill, bank letter)', 'HR updates systems and files', 'Notify payroll if bank details change'],
        relatedDocuments: ['People & Admin Playbook', 'Employee Handbook']
    }
];

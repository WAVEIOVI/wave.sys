import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import OrganizationChart from '../../../components/visuals/OrganizationChart';
import { Node, Edge } from 'reactflow';

export default function OrganizationalStructure() {
    // Total Org Chart Nodes and Edges
    const totalOrgNodes: Node[] = [
        { id: 'm1', position: { x: 500, y: 0 }, data: { label: 'Karim BEN SALEM\nManager (Owner)' }, type: 'input', className: 'bg-slate-900 text-white border-slate-800 w-[200px] font-bold text-center' },
        { id: 'm2', position: { x: 500, y: 100 }, data: { label: 'Najla BEN SALEM\nCo-Manager (Owner)' }, className: 'bg-slate-900 text-white border-slate-800 w-[200px] font-bold text-center' },

        { id: 'res1', position: { x: 100, y: 250 }, data: { label: 'Operations Responsible\nMohamed CHRAITI' }, className: 'bg-blue-900 text-white border-blue-800 w-[180px] text-center' },
        { id: 'res2', position: { x: 350, y: 250 }, data: { label: 'Sales Responsible\nNajla / Sales Reps' }, className: 'bg-blue-900 text-white border-blue-800 w-[180px] text-center' },
        { id: 'res3', position: { x: 600, y: 250 }, data: { label: 'Admin & Finance Responsible\nMohamed Ali LENDA' }, className: 'bg-blue-900 text-white border-blue-800 w-[180px] text-center' },
        { id: 'res4', position: { x: 850, y: 250 }, data: { label: 'Collection Responsible\nHela DAOUD' }, className: 'bg-blue-900 text-white border-blue-800 w-[180px] text-center' },

        { id: 'ops-teams', position: { x: 100, y: 400 }, data: { label: 'Technical Teams (A, B, C)\nWorkshop Team' }, className: 'bg-slate-100 text-slate-900 border-slate-300 w-[180px] text-center' },
        { id: 'sales-reps', position: { x: 350, y: 400 }, data: { label: 'Sales Representatives\n(Mohamed, Kais)' }, className: 'bg-slate-100 text-slate-900 border-slate-300 w-[180px] text-center' },
        { id: 'admin-support', position: { x: 600, y: 400 }, data: { label: 'Admin Assistant' }, className: 'bg-slate-100 text-slate-900 border-slate-300 w-[180px] text-center' },
    ];

    const totalOrgEdges: Edge[] = [
        { id: 'e1-2', source: 'm1', target: 'm2', type: 'smoothstep' },
        { id: 'e2-res1', source: 'm2', target: 'res1', type: 'smoothstep' },
        { id: 'e2-res2', source: 'm2', target: 'res2', type: 'smoothstep' },
        { id: 'e2-res3', source: 'm2', target: 'res3', type: 'smoothstep' },
        { id: 'e2-res4', source: 'm2', target: 'res4', type: 'smoothstep' },
        { id: 'eres1-ops', source: 'res1', target: 'ops-teams', type: 'smoothstep' },
        { id: 'eres2-sales', source: 'res2', target: 'sales-reps', type: 'smoothstep' },
        { id: 'eres3-admin', source: 'res3', target: 'admin-support', type: 'smoothstep' },
    ];

    // Technical Ops Chart Nodes and Edges
    const techOpsNodes: Node[] = [
        { id: 'ops-res', position: { x: 450, y: 0 }, data: { label: 'Operations Responsible\nMohamed CHRAITI' }, type: 'input', className: 'bg-blue-900 text-white border-blue-800 w-[200px] font-bold text-center' },

        { id: 'tl1', position: { x: 100, y: 150 }, data: { label: 'Team Leader A' }, className: 'bg-slate-800 text-white border-slate-700 w-[180px] text-center' },
        { id: 'tl2', position: { x: 350, y: 150 }, data: { label: 'Team Leader B' }, className: 'bg-slate-800 text-white border-slate-700 w-[180px] text-center' },
        { id: 'tl3', position: { x: 600, y: 150 }, data: { label: 'Team Leader C' }, className: 'bg-slate-800 text-white border-slate-700 w-[180px] text-center' },
        { id: 'wr', position: { x: 850, y: 150 }, data: { label: 'Workshop Responsible' }, className: 'bg-slate-800 text-white border-slate-700 w-[180px] text-center' },

        { id: 'techs1', position: { x: 100, y: 300 }, data: { label: 'Technicians A' }, className: 'bg-slate-100 text-slate-900 border-slate-300 w-[160px] text-center' },
        { id: 'techs2', position: { x: 350, y: 300 }, data: { label: 'Technicians B' }, className: 'bg-slate-100 text-slate-900 border-slate-300 w-[160px] text-center' },
        { id: 'techs3', position: { x: 600, y: 300 }, data: { label: 'Technicians C' }, className: 'bg-slate-100 text-slate-900 border-slate-300 w-[160px] text-center' },
    ];

    const techOpsEdges: Edge[] = [
        { id: 'eops-tl1', source: 'ops-res', target: 'tl1', type: 'smoothstep' },
        { id: 'eops-tl2', source: 'ops-res', target: 'tl2', type: 'smoothstep' },
        { id: 'eops-tl3', source: 'ops-res', target: 'tl3', type: 'smoothstep' },
        { id: 'eops-wr', source: 'ops-res', target: 'wr', type: 'smoothstep' },
        { id: 'etl1-t1', source: 'tl1', target: 'techs1', type: 'smoothstep' },
        { id: 'etl2-t2', source: 'tl2', target: 'techs2', type: 'smoothstep' },
        { id: 'etl3-t3', source: 'tl3', target: 'techs3', type: 'smoothstep' },
    ];

    return (
        <Section id="section-1">
            <SectionHeader>SECTION 1: ORGANIZATIONAL STRUCTURE</SectionHeader>

            <SubSection id="team-composition">
                <SubSectionHeader>1.1 Current Team Composition</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="font-bold text-lg text-primary-600">Total Force: 14</h4>
                            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">1 Position Open</span>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-xs mb-1.5">
                                    <span className="font-semibold text-slate-700 dark:text-slate-300">Technical Ops</span>
                                    <span className="font-bold">8 / 14</span>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                                    <div className="bg-blue-500 h-full w-[57%]"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs mb-1.5">
                                    <span className="font-semibold text-slate-700 dark:text-slate-300">Management & Admin</span>
                                    <span className="font-bold">5 / 14</span>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                                    <div className="bg-primary-500 h-full w-[35%]"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs mb-1.5">
                                    <span className="font-semibold text-slate-700 dark:text-slate-300">Sales</span>
                                    <span className="font-bold text-orange-500 flex items-center gap-1">
                                        2 / 14
                                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                                    </span>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                                    <div className="bg-orange-500 h-full w-[14%]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-slate-800 dark:text-white">9</span>
                                <span className="text-[10px] text-slate-500 uppercase font-medium">Sfax HQ</span>
                            </div>
                            <div className="text-center border-l border-slate-100 dark:border-slate-800">
                                <span className="block text-2xl font-bold text-slate-800 dark:text-white">5</span>
                                <span className="text-[10px] text-slate-500 uppercase font-medium">Tunis Branch</span>
                            </div>
                        </div>
                    </div>
                        <Table>
                            <TableRow isHeader>
                                <TableCell isHeader>Department</TableCell>
                                <TableCell isHeader>Count</TableCell>
                                <TableCell isHeader>Status</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Management</TableCell>
                                <TableCell>5</TableCell>
                                <TableCell><span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600">Full</span></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Technical Ops</TableCell>
                                <TableCell>8</TableCell>
                                <TableCell><span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600">Full</span></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sales</TableCell>
                                <TableCell>2</TableCell>
                                <TableCell><span className="text-[10px] bg-orange-100 dark:bg-orange-900/30 px-1.5 py-0.5 rounded text-orange-700 dark:text-orange-400 font-bold">Hiring</span></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Warehouse</TableCell>
                                <TableCell>1</TableCell>
                                <TableCell><span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600">Full</span></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Collections</TableCell>
                                <TableCell>1</TableCell>
                                <TableCell><span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600">Full</span></TableCell>
                            </TableRow>
                        </Table>
                </div>
            </SubSection>

            <SubSection id="org-chart">
                <SubSectionHeader>1.2 Organizational Chart</SubSectionHeader>
                <Paragraph className="mb-6">
                    The following charts represent the overall hierarchical structure of Sécurité Services Plus and the detailed structure of the Technical Operations department.
                </Paragraph>

                <h5 className="font-bold text-md mb-4 text-slate-700 dark:text-slate-300">Total Organization Hierarchy</h5>
                <div className="h-[500px] w-full border border-slate-200 dark:border-slate-800 rounded-xl mb-8 bg-white dark:bg-slate-900/50">
                    <OrganizationChart
                        nodes={totalOrgNodes}
                        edges={totalOrgEdges}
                        title=""
                    />
                </div>

                <h5 className="font-bold text-md mb-4 text-slate-700 dark:text-slate-300">Technical Operations Department</h5>
                <div className="h-[400px] w-full border border-slate-200 dark:border-slate-800 rounded-xl mb-8 bg-white dark:bg-slate-900/50">
                    <OrganizationChart
                        nodes={techOpsNodes}
                        edges={techOpsEdges}
                        title=""
                    />
                </div>
            </SubSection>

            <SubSection id="role-definitions">
                <SubSectionHeader>1.3 Role Definitions</SubSectionHeader>

                <div className="space-y-8">
                    {/* Management Roles */}
                    <div>
                        <h4 className="font-bold text-lg text-primary-700 dark:text-primary-400 mb-4 border-b border-primary-200 dark:border-primary-900 pb-2">Management Roles</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <h5 className="font-bold text-md mb-2">MANAGER (Managing Director)</h5>
                                <p className="text-xs text-slate-500 mb-2 italic">Karim BEN SALEM</p>
                                <List className="text-xs">
                                    <ListItem>Overall business strategy and direction.</ListItem>
                                    <ListItem>Final decision authority on major matters.</ListItem>
                                    <ListItem>Financial oversight and approval (unlimited).</ListItem>
                                    <ListItem>Legal and compliance responsibility.</ListItem>
                                </List>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <h5 className="font-bold text-md mb-2">CO-MANAGER & SALES RESP.</h5>
                                <p className="text-xs text-slate-500 mb-2 italic">Najla BEN SALEM</p>
                                <List className="text-xs">
                                    <ListItem>Sales strategy and business development.</ListItem>
                                    <ListItem>Purchase management and supplier relationships.</ListItem>
                                    <ListItem>Pricing and commercial decisions.</ListItem>
                                    <ListItem>Financial authority (unlimited).</ListItem>
                                </List>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <h5 className="font-bold text-md mb-2">OPERATIONS RESPONSIBLE</h5>
                                <p className="text-xs text-slate-500 mb-2 italic">Mohamed CHRAITI</p>
                                <List className="text-xs">
                                    <ListItem>Service delivery management and quality.</ListItem>
                                    <ListItem>Team coordination and scheduling.</ListItem>
                                    <ListItem>Customer service excellence.</ListItem>
                                    <ListItem>Financial authority: up to 1,000 TND.</ListItem>
                                </List>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <h5 className="font-bold text-md mb-2">ADMIN & FINANCE RESPONSIBLE</h5>
                                <p className="text-xs text-slate-500 mb-2 italic">Mohamed Ali LENDA</p>
                                <List className="text-xs">
                                    <ListItem>Financial management and accounting.</ListItem>
                                    <ListItem>Payroll and HR administration.</ListItem>
                                    <ListItem>Contract and document management.</ListItem>
                                    <ListItem>CNSS and tax compliance.</ListItem>
                                </List>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <h5 className="font-bold text-md mb-2">COLLECTION RESPONSIBLE</h5>
                                <p className="text-xs text-slate-500 mb-2 italic">Hela DAOUD</p>
                                <List className="text-xs">
                                    <ListItem>Accounts receivable management.</ListItem>
                                    <ListItem>Payment follow-up and collection.</ListItem>
                                    <ListItem>Customer payment arrangements.</ListItem>
                                    <ListItem>Overdue account management.</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>

                    {/* Technical Roles */}
                    <div>
                        <h4 className="font-bold text-lg text-blue-700 dark:text-blue-400 mb-4 border-b border-blue-200 dark:border-blue-900 pb-2">Technical Operations Roles</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Team Leader & Workshop Responsible Card */}
                            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                                <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 px-5 py-4">
                                    <h5 className="font-bold text-lg text-white flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        TEAM LEADER & WORKSHOP RESP.
                                    </h5>
                                </div>
                                <div className="p-5">
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 italic border-l-2 border-blue-500 pl-3">
                                        Supervisory roles reporting directly to the Operations Responsible, overseeing technical teams and workshop operations.
                                    </p>
                                    <div className="space-y-4">
                                        <div>
                                            <h6 className="font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Supervision & Quality</h6>
                                            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1.5">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-500 mt-1">•</span>
                                                    <span>Direct supervision of 1-2 technicians per team</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-500 mt-1">•</span>
                                                    <span>Quality Control: Review 100% of completed work before client sign-off</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-500 mt-1">•</span>
                                                    <span>Financial Authority: Expenditure approval up to 500 TND</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h6 className="font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Coordination & Development</h6>
                                            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1.5">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-500 mt-1">•</span>
                                                    <span>Coordinate tools, equipment, and material inventory for the team</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-500 mt-1">•</span>
                                                    <span>Mentoring: Conduct on-site training and skill development</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-500 mt-1">•</span>
                                                    <span>Requirement: Technical certification and valid Driver's License (B)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                            Supervisory Level
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Service Technician Card */}
                            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                                <div className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-700 dark:to-slate-900 px-5 py-4">
                                    <h5 className="font-bold text-lg text-white flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        SERVICE TECHNICIAN (Levels 0-5)
                                    </h5>
                                </div>
                                <div className="p-5">
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 italic border-l-2 border-slate-500 pl-3">
                                        Core field staff responsible for inspections, maintenance, refilling, and installations at client sites.
                                    </p>
                                    <div className="space-y-4">
                                        <div>
                                            <h6 className="font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Core Responsibilities</h6>
                                            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1.5">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-slate-500 mt-1">•</span>
                                                    <span>Primary Tasks: Fire extinguisher inspections, refilling services, and equipment installations</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-slate-500 mt-1">•</span>
                                                    <span>Documentation: Complete all service reports accurately with photos and client acknowledgment</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-slate-500 mt-1">•</span>
                                                    <span>Customer Service: Professionally represent Sécurité Services Plus to all clients</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h6 className="font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Career Levels & Progression</h6>
                                            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                                                <div className="grid grid-cols-2 gap-2 text-xs">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-[10px]">L0</span>
                                                        <span className="text-slate-600 dark:text-slate-400">Starter/Trial (0-6 mo)</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-[10px]">L1</span>
                                                        <span className="text-slate-600 dark:text-slate-400">Junior (6-12 mo)</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 rounded flex items-center justify-center font-bold text-[10px]">L2</span>
                                                        <span className="text-slate-700 dark:text-slate-300 font-medium">Technician (1-3 yrs)</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 rounded flex items-center justify-center font-bold text-[10px]">L3</span>
                                                        <span className="text-slate-700 dark:text-slate-300 font-medium">Experienced (3-5 yrs)</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-6 h-6 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 rounded flex items-center justify-center font-bold text-[10px]">L4</span>
                                                        <span className="text-slate-700 dark:text-slate-300 font-medium">Senior (5-7 yrs)</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-6 h-6 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 rounded flex items-center justify-center font-bold text-[10px]">L5</span>
                                                        <span className="text-slate-700 dark:text-slate-300 font-medium">Master (7+ yrs)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 text-xs font-semibold rounded-full">
                                            <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                                            Field Operations Level
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sales & Support */}
                    <div>
                        <h4 className="font-bold text-lg text-green-700 dark:text-green-400 mb-4 border-b border-green-200 dark:border-green-900 pb-2">Sales & Support Roles</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <h5 className="font-bold text-md mb-2">SALES REP</h5>
                                <List className="text-xs">
                                    <ListItem>New business development.</ListItem>
                                    <ListItem>Quotations & Negotiation.</ListItem>
                                    <ListItem>Territory: Sfax or Tunis.</ListItem>
                                    <ListItem>Discount Authority: Up to 15%.</ListItem>
                                </List>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <h5 className="font-bold text-md mb-2">WAREHOUSE RESP.</h5>
                                <List className="text-xs">
                                    <ListItem>Stock control & Org.</ListItem>
                                    <ListItem>Receiving & Dispatch.</ListItem>
                                    <ListItem>WAVE PLUS Inventory.</ListItem>
                                    <ListItem>Financial Authority: 500 TND.</ListItem>
                                </List>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <h5 className="font-bold text-md mb-2">COLLECTION AGENT</h5>
                                <List className="text-xs">
                                    <ListItem>Payment follow-up.</ListItem>
                                    <ListItem>Collection calls/visits.</ListItem>
                                    <ListItem>Reports to Collection Resp.</ListItem>
                                    <ListItem>Tunis Focus.</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="career-progression">
                <SubSectionHeader>1.4 Career Progression Paths</SubSectionHeader>
                <Paragraph>
                    SS+ provides clear career tracks for growth. Advancement is based on skill acquisition, performance consistency, and time in role.
                </Paragraph>

                <div className="mb-8">
                    <h5 className="font-bold text-md mb-3 text-slate-800 dark:text-slate-200">📍 Mapping: Current Roles to Advancement Paths</h5>
                        <Table>
                            <TableRow isHeader>
                                <TableCell isHeader>Current Role</TableCell>
                                <TableCell isHeader>Next Step(s)</TableCell>
                                <TableCell isHeader>Long-Term Path</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Service Technician (Levels 0–5)</TableCell>
                                <TableCell>Team Leader or Workshop Responsible</TableCell>
                                <TableCell>Operations Responsible</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Team Leader</TableCell>
                                <TableCell>New POS Responsible or Operations Responsible</TableCell>
                                <TableCell>Senior Operations Leadership</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Workshop Responsible</TableCell>
                                <TableCell>Operations Responsible</TableCell>
                                <TableCell>Senior Operations Leadership</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sales Representative</TableCell>
                                <TableCell>Senior Sales Representative</TableCell>
                                <TableCell>Sales Responsible</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Warehouse Responsible</TableCell>
                                <TableCell>Senior Team Leader (Operations)</TableCell>
                                <TableCell>Operations Responsible</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Collection Agent (Tunis)</TableCell>
                                <TableCell>Collection Responsible</TableCell>
                                <TableCell>Admin & Finance Leadership</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Admin & Finance Coordinator</TableCell>
                                <TableCell>Admin & Finance Responsible</TableCell>
                                <TableCell>Senior Admin & Finance</TableCell>
                            </TableRow>
                        </Table>
                </div>

                <div className="mb-8">
                    <h5 className="font-bold text-md mb-3 text-slate-800 dark:text-slate-200">🏆 Technical Operations Track</h5>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableRow isHeader>
                                <TableCell isHeader>Level</TableCell>
                                <TableCell isHeader>Experience</TableCell>
                                <TableCell isHeader>Core Competencies</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>L0: Starter</TableCell>
                                <TableCell>0–3 months</TableCell>
                                <TableCell>Basic safety, willingness to learn, driver's license.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>L1: Junior</TableCell>
                                <TableCell>3–12 months</TableCell>
                                <TableCell>Assisted inspections, basic refilling, documentation.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>L2: Technician</TableCell>
                                <TableCell>1–3 years</TableCell>
                                <TableCell>Independent routine services, accurate reports.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>L3: Experienced</TableCell>
                                <TableCell>3–5 years</TableCell>
                                <TableCell>Complex jobs, site problem-solving, mentoring.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>L4: Senior</TableCell>
                                <TableCell>5–7 years</TableCell>
                                <TableCell>Lead complex work, train team, handle escalations.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>L5: Master</TableCell>
                                <TableCell>7+ years</TableCell>
                                <TableCell>Expert leadership, standard-setting, procedure authoring.</TableCell>
                            </TableRow>
                        </Table>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h5 className="font-bold text-md mb-3 text-slate-800 dark:text-slate-200">💼 Sales Track</h5>
                        <Table>
                            <TableRow isHeader>
                                <TableCell isHeader>Role</TableCell>
                                <TableCell isHeader>Authority</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Rep (0-3 yr)</TableCell>
                                <TableCell>Target attainment, 15% discount.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Senior (3-5 yr)</TableCell>
                                <TableCell>Key accounts, mentoring.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Resp. (5+ yr)</TableCell>
                                <TableCell>Strategy, 20%+, Unlimited Pricing.</TableCell>
                            </TableRow>
                        </Table>
                    </div>
                    <div>
                        <h5 className="font-bold text-md mb-3 text-slate-800 dark:text-slate-200">📊 Admin Track</h5>
                        <Table>
                            <TableRow isHeader>
                                <TableCell isHeader>Role</TableCell>
                                <TableCell isHeader>Focus</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Assistant (0-3 yr)</TableCell>
                                <TableCell>Payroll, document control, accuracy.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Responsible (3-7 yr)</TableCell>
                                <TableCell>Finance ops, reporting, approvals.</TableCell>
                            </TableRow>
                        </Table>
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h5 className="font-bold text-md mb-3 text-slate-800 dark:text-slate-200">⭐ Competency Framework (All Tracks)</h5>
                    <List>
                        <ListItem>Technical Mastery: Task-specific proficiency and certification compliance.</ListItem>
                        <ListItem>Service Quality & Safety: Adherence to standards; zero safety incidents.</ListItem>
                        <ListItem>Documentation & Systems: Accurate records; WAVE PLUS/CRM competence.</ListItem>
                        <ListItem>Customer & Stakeholder Communication: Clear, professional interactions.</ListItem>
                        <ListItem>Leadership & Mentoring: Coaching, delegation, conflict resolution (leader roles).</ListItem>
                        <ListItem>Ethics & Conduct: Compliance with business ethics.</ListItem>
                    </List>
                </div>
            </SubSection>
        </Section>
    );
}

import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';
import FlowChart from '../../../components/visuals/FlowChart';
import { Node, Edge, MarkerType } from 'reactflow';

const recruitmentNodes: Node[] = [
    { id: '1', position: { x: 250, y: 0 }, data: { label: '1. Position Opening\nApproval & Posting' }, type: 'input', className: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 font-bold text-center w-48' },
    { id: '2', position: { x: 250, y: 100 }, data: { label: '2. Sourcing\nReferrals, Ads, Schools' }, className: 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-center w-48' },
    { id: '3', position: { x: 250, y: 200 }, data: { label: '3. Screening\nCV Review & Initial Log' }, className: 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-center w-48' },
    { id: '4', position: { x: 250, y: 300 }, data: { label: '4. Phone Screening\nFilter top 3-5 candidates' }, className: 'bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800 text-center w-48' },
    { id: '5', position: { x: 250, y: 400 }, data: { label: '5. Interviews\nTechnical & Behavioral' }, className: 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800 text-center w-48' },
    { id: '6', position: { x: 250, y: 500 }, data: { label: '6. Reference Checks\nVerify credentials' }, className: 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-center w-48' },
    { id: '7', position: { x: 250, y: 600 }, data: { label: '7. Offer & Contract\nSigning & Onboarding' }, type: 'output', className: 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800 font-bold text-center w-48' },
];

const recruitmentEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e2-3', source: '2', target: '3', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e3-4', source: '3', target: '4', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e4-5', source: '4', target: '5', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e5-6', source: '5', target: '6', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e6-7', source: '6', target: '7', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
];

export default function RecruitmentOnboarding() {
    return (
        <Section id="section-2">
            <SectionHeader>SECTION 2: RECRUITMENT & HIRING</SectionHeader>

            <SubSection id="workforce-planning">
                <SubSectionHeader>2.1 Workforce Planning</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-3 text-primary-600">Annual Review (December)</h5>
                        <List className="text-xs">
                            <ListItem>Analysis: Current headcount, retirements, performance issues.</ListItem>
                            <ListItem>Future Needs: Business growth, new services, seasonal changes.</ListItem>
                            <ListItem>Hiring Plan: Positions, priority, timeline, budget.</ListItem>
                            <ListItem>Budget: Advertising, agency fees, onboarding costs.</ListItem>
                        </List>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-3 text-red-600">Immediate Hiring Triggers</h5>
                        <List className="text-xs">
                            <ListItem>Critical Vacancy: Operations impact.</ListItem>
                            <ListItem>Unsustainable Workload: Team burnout risk.</ListItem>
                            <ListItem>Growth: New contract requiring staff.</ListItem>
                            <ListItem>Departure: Planned notice given.</ListItem>
                        </List>
                        <p className="mt-2 text-[10px] italic text-slate-500">Note: New positions require Manager approval. Replacements can be initiated by Responsibles.</p>
                    </div>
                </div>
            </SubSection>

            <SubSection id="job-descriptions">
                <SubSectionHeader>2.2 Key Job Descriptions (Summary)</SubSectionHeader>
                <Paragraph className="mb-4">
                    Detailed job descriptions are maintained for all roles. Below are the key operational profiles.
                </Paragraph>

                <div className="space-y-6">
                    {/* Technician */}
                    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                        <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                            <span className="font-bold text-sm">🔥 Service Technician (Fire Safety)</span>
                            <span className="text-xs font-mono bg-white dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">600 - 1,300 TND</span>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div>
                                <strong className="block mb-1 text-slate-700 dark:text-slate-300">Responsibilities:</strong>
                                <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400">
                                    <li>Inspections (Semi-annual/Annual)</li>
                                    <li>Refilling & Recharging services</li>
                                    <li>Installations & Documentation</li>
                                    <li>Vehicle & Tool maintenance</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="block mb-1 text-slate-700 dark:text-slate-300">KPIs:</strong>
                                <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400">
                                    <li>Services completed/week</li>
                                    <li>Customer Satisfaction</li>
                                    <li>QC Pass Rate ({">"}95%)</li>
                                    <li>Zero Safety Incidents</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Team Leader */}
                    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                        <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                            <span className="font-bold text-sm">👷 Team Leader</span>
                            <span className="text-xs font-mono bg-white dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">1,000 - 1,500 TND</span>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div>
                                <strong className="block mb-1 text-slate-700 dark:text-slate-300">Responsibilities:</strong>
                                <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400">
                                    <li>Supervise 1-2 Technicians</li>
                                    <li>Schedule weekly routes</li>
                                    <li>100% Quality Control review</li>
                                    <li>Technical Training & Mentoring</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="block mb-1 text-slate-700 dark:text-slate-300">KPIs:</strong>
                                <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400">
                                    <li>Team Performance & Quality</li>
                                    <li>Technician Skill Development</li>
                                    <li>On-time Delivery ({">"}90%)</li>
                                    <li>Customer Complaint Minimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sales Rep */}
                    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                        <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                            <span className="font-bold text-sm">💼 Sales Representative</span>
                            <span className="text-xs font-mono bg-white dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">1,000 - 1,300 TND</span>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div>
                                <strong className="block mb-1 text-slate-700 dark:text-slate-300">Responsibilities:</strong>
                                <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400">
                                    <li>New Business Development</li>
                                    <li>Quotations & Proposals</li>
                                    <li>Site Surveys & Negotiations</li>
                                    <li>Territory Management (Sfax/Tunis)</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="block mb-1 text-slate-700 dark:text-slate-300">KPIs:</strong>
                                <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400">
                                    <li>Sales Revenue vs Target</li>
                                    <li>New Customer Acquisition (20-40/yr)</li>
                                    <li>Quote Conversion Rate (30-40%)</li>
                                    <li>Customer Retention</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="recruitment-process">
                <SubSectionHeader>2.3 Recruitment Process</SubSectionHeader>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Recruitment Lifecycle - Takes full height to match sourcing cards */}
                    <div className="lg:col-span-2">
                        <h5 className="font-bold text-sm mb-3">Recruitment Lifecycle</h5>
                        <div className="h-[500px] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50 shadow-inner">
                            <FlowChart
                                nodes={recruitmentNodes}
                                edges={recruitmentEdges}
                                title="Standard 6-Week Hiring Process"
                            />
                        </div>
                    </div>
                    {/* Sourcing Channels - Full height column */}
                    <div className="flex flex-col">
                        <h5 className="font-bold text-sm mb-3">Sourcing Channels</h5>
                        <div className="flex-1 space-y-3">
                            <div className="p-3 border border-green-200 bg-green-50 dark:bg-green-900/10 dark:border-green-800 rounded-lg">
                                <span className="block font-bold text-xs text-green-700 dark:text-green-400 mb-1">1. Referrals</span>
                                <p className="text-[10px] text-slate-600 dark:text-slate-400">Preferred. High quality candidates recommended by trusted staff.</p>
                            </div>
                            <div className="p-3 border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 rounded-lg shadow-sm">
                                <span className="block font-bold text-xs mb-1">2. Job Boards</span>
                                <p className="text-[10px] text-slate-600 dark:text-slate-400">Tanitjobs, LinkedIn, Facebook, Emploi.nat.tn.</p>
                            </div>
                            <div className="p-3 border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 rounded-lg shadow-sm">
                                <span className="block font-bold text-xs mb-1">3. Schools</span>
                                <p className="text-[10px] text-slate-600 dark:text-slate-400">Technical institutes & training centers. Internship pathway.</p>
                            </div>
                            <div className="p-3 border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 rounded-lg shadow-sm">
                                <span className="block font-bold text-xs mb-1">4. Walk-ins</span>
                                <p className="text-[10px] text-slate-600 dark:text-slate-400">Database of walk-in applications in WAVE PLUS.</p>
                            </div>
                            <div className="p-3 border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 rounded-lg shadow-sm">
                                <span className="block font-bold text-xs mb-1">5. Employment Agencies</span>
                                <p className="text-[10px] text-slate-600 dark:text-slate-400">Last resort for urgent needs. Negotiate fees.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Responsibles Card - Full width single row */}
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900 rounded-xl">
                    <h6 className="font-bold text-xs mb-3 text-indigo-700 dark:text-indigo-400 uppercase">Responsibles</h6>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[10px]">
                        <div className="text-center p-2 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-800">
                            <span className="block font-bold text-indigo-600 dark:text-indigo-400 mb-1">Planning</span>
                            <span className="text-slate-600 dark:text-slate-400">Manager / Co-Manager</span>
                        </div>
                        <div className="text-center p-2 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-800">
                            <span className="block font-bold text-indigo-600 dark:text-indigo-400 mb-1">Posting</span>
                            <span className="text-slate-600 dark:text-slate-400">Admin Responsible</span>
                        </div>
                        <div className="text-center p-2 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-800">
                            <span className="block font-bold text-indigo-600 dark:text-indigo-400 mb-1">Technical Interview</span>
                            <span className="text-slate-600 dark:text-slate-400">Operations Responsible / TL</span>
                        </div>
                        <div className="text-center p-2 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-800">
                            <span className="block font-bold text-indigo-600 dark:text-indigo-400 mb-1">Final Decision</span>
                            <span className="text-slate-600 dark:text-slate-400">Manager</span>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="selection-interview">
                <SubSectionHeader>2.4 Selection & Interview Process</SubSectionHeader>

                <div className="mb-8">
                    <h5 className="font-bold text-sm mb-3">Interview Structure (30-45 mins)</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                            <span className="font-bold text-xs block mb-1">1. Welcome (5 min)</span>
                            <p className="text-[10px] text-slate-600">Put candidate at ease, explain process, company overview.</p>
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                            <span className="font-bold text-xs block mb-1">2. Background (15 min)</span>
                            <p className="text-[10px] text-slate-600">Walk through CV, experience, career progression.</p>
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                            <span className="font-bold text-xs block mb-1">3. Competency (20 min)</span>
                            <p className="text-[10px] text-slate-600">Technical knowledge, problem solving, scenarios.</p>
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                            <span className="font-bold text-xs block mb-1">4. Practical (15 min)</span>
                            <p className="text-[10px] text-slate-600">For tech roles: Show equipment, describe inspection.</p>
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                            <span className="font-bold text-xs block mb-1">5. Questions (10 min)</span>
                            <p className="text-[10px] text-slate-600">Candidate asks questions. Assess interest.</p>
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                            <span className="font-bold text-xs block mb-1">6. Close (5 min)</span>
                            <p className="text-[10px] text-slate-600">Next steps timeline, thank you.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h6 className="font-bold text-xs uppercase text-blue-600 dark:text-blue-400 mb-2">Technical Roles Question Bank</h6>
                        <div className="space-y-3">
                            <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                                <p className="text-xs font-bold mb-1">Technical Knowledge</p>
                                <ul className="list-disc pl-4 text-[10px] text-slate-600 dark:text-slate-400 space-y-1">
                                    <li>"Steps to refill an ABC powder extinguisher?"</li>
                                    <li>"How do you test a CO2 extinguisher?"</li>
                                    <li>"Safety equipment worn when refilling?"</li>
                                </ul>
                            </div>
                            <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                                <p className="text-xs font-bold mb-1">Problem Solving</p>
                                <ul className="list-disc pl-4 text-[10px] text-slate-600 dark:text-slate-400 space-y-1">
                                    <li>"Customer emergency with inspection tomorrow?"</li>
                                    <li>"Missing part on-site - next step?"</li>
                                    <li>"Customer disagrees with your inspection?"</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 className="font-bold text-xs uppercase text-green-600 dark:text-green-400 mb-2">Sales Roles Question Bank</h6>
                        <div className="space-y-3">
                            <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                                <p className="text-xs font-bold mb-1">Sales Experience</p>
                                <ul className="list-disc pl-4 text-[10px] text-slate-600 dark:text-slate-400 space-y-1">
                                    <li>"Walk us through your sales process."</li>
                                    <li>"Most successful sale? Lost sale lessons?"</li>
                                    <li>"Handling price objections?"</li>
                                </ul>
                            </div>
                            <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                                <p className="text-xs font-bold mb-1">Relationship Building</p>
                                <ul className="list-disc pl-4 text-[10px] text-slate-600 dark:text-slate-400 space-y-1">
                                    <li>"Building B2B long-term relationships?"</li>
                                    <li>"Follow-up approach?"</li>
                                    <li>"Manage multiple accounts?"</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="offer-onboarding">
                <SubSectionHeader>2.5 Offer & Onboarding</SubSectionHeader>

                <div className="mb-6">
                    <h5 className="font-bold text-sm mb-3">Pre-Start Requirements</h5>
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800 rounded-xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <h6 className="font-bold text-xs mb-2">Documents to Collect</h6>
                                <List className="text-[10px]">
                                    <ListItem>Signed Contract (2 copies)</ListItem>
                                    <ListItem>Copy of CIN</ListItem>
                                    <ListItem>Certificates (Edu/Prof)</ListItem>
                                    <ListItem>Driving License</ListItem>
                                    <ListItem>2 Passport Photos & RIB</ListItem>
                                    <ListItem>Medical aptitude cert</ListItem>
                                    <ListItem>Casier Judiciaire (Recent)</ListItem>
                                </List>
                            </div>
                            <div>
                                <h6 className="font-bold text-xs mb-2">Admin Setup</h6>
                                <List className="text-[10px]">
                                    <ListItem>Personnel File Created</ListItem>
                                    <ListItem>CNSS Registration</ListItem>
                                    <ListItem>Payroll & WAVE PLUS Account</ListItem>
                                    <ListItem>Uniform & ID Badge</ListItem>
                                    <ListItem>Company Mobile (if applicable)</ListItem>
                                    <ListItem>Workstation/Locker Prep</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>
                </div>

                <Blockquote type="info" title="First Day Agenda">
                    <Table>
                        <TableRow isHeader>
                            <TableCell>Time</TableCell>
                            <TableCell>Activity</TableCell>
                            <TableCell>Owner</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Morning (1h)</TableCell>
                            <TableCell>Welcome, Tour, Admin forms, IT Setup</TableCell>
                            <TableCell>Admin Resp</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Morning (1h)</TableCell>
                            <TableCell>Company Overview (Values, Products, Policies)</TableCell>
                            <TableCell>Manager</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Lunch</TableCell>
                            <TableCell>Team Lunch (Social integration)</TableCell>
                            <TableCell>Team</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Afternoon</TableCell>
                            <TableCell>Job Intro, Meet Team, Safety Training (Mandatory)</TableCell>
                            <TableCell>Direct Resp</TableCell>
                        </TableRow>
                    </Table>
                </Blockquote>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Week: Structured Learning Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 px-4 py-3">
                            <h5 className="font-bold text-sm text-white flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                First Week: Structured Learning
                            </h5>
                        </div>
                        <div className="p-4">
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 p-2 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-800">
                                    <span className="text-lg">🔧</span>
                                    <div>
                                        <span className="font-bold text-xs block text-slate-700 dark:text-slate-300">Technicians</span>
                                        <p className="text-[10px] text-slate-600 dark:text-slate-400">Shadowing, observation, manual study, tool familiarity.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-2 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-800">
                                    <span className="text-lg">💼</span>
                                    <div>
                                        <span className="font-bold text-xs block text-slate-700 dark:text-slate-300">Sales Reps</span>
                                        <p className="text-[10px] text-slate-600 dark:text-slate-400">Shadowing, product catalog, customer DB review.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <span className="text-lg">👥</span>
                                    <div>
                                        <span className="font-bold text-xs block text-slate-700 dark:text-slate-300">All Staff</span>
                                        <p className="text-[10px] text-slate-600 dark:text-slate-400">Daily check-ins, gradual responsibility, end-of-week review.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 text-[10px] font-semibold rounded-full">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                                    Week 1
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* First Month: Hands-On Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-800 dark:to-green-900 px-4 py-3">
                            <h5 className="font-bold text-sm text-white flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                First Month: Hands-On
                            </h5>
                        </div>
                        <div className="p-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 font-bold text-[10px]">W2</span>
                                    <span className="text-slate-700 dark:text-slate-300">Week 2-3: Assisted work (with mentor)</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-[10px]">W4</span>
                                    <span className="text-slate-700 dark:text-slate-300">Week 4: Independent routine tasks</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="w-6 h-6 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-[10px]">30</span>
                                    <span className="text-slate-700 dark:text-slate-300">30-Day Review: Formal sit-down, performance check</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="w-6 h-6 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-[10px]">90</span>
                                    <span className="text-slate-700 dark:text-slate-300">Probation Goal: Full autonomy by 90 days</span>
                                </div>
                            </div>
                            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 text-[10px] font-semibold rounded-full">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    Weeks 1-4
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';

export default function EmploymentTerms() {
    return (
        <Section id="section-3">
            <SectionHeader>SECTION 3: EMPLOYMENT TERMS & CONDITIONS</SectionHeader>

            <SubSection id="employment-contracts">
                <SubSectionHeader>3.1 Employment Contracts (CDD & CDI)</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-2 text-blue-600 dark:text-blue-400">CDD (Fixed-Term)</h5>
                        <List className="text-xs">
                            <ListItem>Standard: Initial 6-month contract for all new hires.</ListItem>
                            <ListItem>Probation: First 3 months are probationary.</ListItem>
                            <ListItem>Purpose: Trial period to confirm fit.</ListItem>
                            <ListItem>Legal: Defined end date; non-renewal notice required.</ListItem>
                        </List>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-2 text-green-600 dark:text-green-400">CDI (Permanent)</h5>
                        <List className="text-xs">
                            <ListItem>Conversion: Offered after successful CDD completion.</ListItem>
                            <ListItem>Status: Permanent long-term employment.</ListItem>
                            <ListItem>Protections: Full labor law rights and severance.</ListItem>
                            <ListItem>Notice: 1-3 months for termination (based on seniority).</ListItem>
                        </List>
                    </div>
                </div>

                <h5 className="font-bold text-sm mb-3">Key Contract Articles (Template Summary)</h5>
                    <Table>
                        <TableRow isHeader>
                            <TableCell>Article</TableCell>
                            <TableCell>Content Summary</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>1-2: Position & Duration</TableCell>
                            <TableCell>Job title, department, reporting line. Start/End dates or Permanent status.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>3: Working Hours</TableCell>
                            <TableCell>48 hours/week. Mon-Fri 8:00-17:00, Sat 8:00-14:30. 1h lunch.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>4-5: Pay</TableCell>
                            <TableCell>Monthly Gross Salary (paid 5th). Transport/Meal allowances.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>6: Leave Entitlements</TableCell>
                            <TableCell>Annual paid leave: 19 working days/year (increases with seniority). Sick leave per labor code with medical certificate. Maternity, paternity, family events per labor code.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>8: Probation</TableCell>
                            <TableCell>Duration: 3 months from start date. Evaluation at 90 days. Notice during probation: 1 week by either party. Extension possible: up to 6 months total (written agreement).</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>9: Termination & Notice</TableCell>
                            <TableCell>CDI: Either party may terminate with notice. Employee: 1 month notice. Employer: per labor code based on seniority (1-3 months). Immediate termination: serious misconduct (per labor code).</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>10-11: Confidentiality</TableCell>
                            <TableCell>Strict confidentiality on clients/pricing. Non-compete clauses.</TableCell>
                        </TableRow>
                    </Table>
            </SubSection>

            <SubSection id="probation-period">
                <SubSectionHeader>3.2 Probation Period Management</SubSectionHeader>
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="flex-1">
                        <Paragraph className="mb-4">
                            The 90-day probation is the critical evaluation window. Decisions are driven by a formal scorecard.
                        </Paragraph>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-center p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                                <div className="w-12 text-center font-bold text-xs text-slate-400">Week 2</div>
                                <div className="text-xs">
                                    <strong className="block text-slate-700 dark:text-slate-300">Initial Check-In (Informal)</strong>
                                    Responsible: &quot;How are you settling in?&quot; Address immediate concerns, ensure resources. Document brief notes.
                                </div>
                            </div>
                            <div className="flex gap-4 items-center p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                                <div className="w-12 text-center font-bold text-xs text-slate-400">Week 4</div>
                                <div className="text-xs">
                                    <strong className="block text-slate-700 dark:text-slate-300">First Month Review (Semi-Formal)</strong>
                                    30-minute meeting. Progress on learning job, challenges, initial performance observations. Set expectations for months 2-3. Document in personnel file.
                                </div>
                            </div>
                            <div className="flex gap-4 items-center p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                                <div className="w-12 text-center font-bold text-xs text-slate-400">Week 8</div>
                                <div className="text-xs">
                                    <strong className="block text-slate-700 dark:text-slate-300">Mid-Point Check</strong>
                                    Course correction if needed.
                                </div>
                            </div>
                            <div className="flex gap-4 items-center p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                                <div className="w-12 text-center font-bold text-xs text-blue-600">Week 12</div>
                                <div className="text-xs">
                                    <strong className="block text-blue-700 dark:text-blue-300">Final Probation Review</strong>
                                    Formal scorecard and confirmation decision.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-700 dark:to-slate-900 px-4 py-3">
                            <h6 className="font-bold text-xs uppercase tracking-wider text-white">Decision Matrix</h6>
                        </div>
                        <div className="p-4 space-y-4">
                            {/* CONFIRM Option */}
                            <div className="flex gap-3 p-3 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg">
                                <div className="flex-shrink-0 w-20 text-center">
                                    <span className="inline-block px-2 py-1 bg-green-200 dark:bg-green-800 text-green-700 dark:text-green-300 text-[10px] font-bold rounded">CONFIRM</span>
                                </div>
                                <div className="text-xs">
                                    <strong className="block text-slate-700 dark:text-slate-300 mb-1">Score 32+ (80%):</strong>
                                    <span className="text-slate-600 dark:text-slate-400">No critical concerns. Positive trajectory. Convert to CDI or continue CDD term.</span>
                                </div>
                            </div>
                            {/* EXTEND Option */}
                            <div className="flex gap-3 p-3 bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800 rounded-lg">
                                <div className="flex-shrink-0 w-20 text-center">
                                    <span className="inline-block px-2 py-1 bg-orange-200 dark:bg-orange-800 text-orange-700 dark:text-orange-300 text-[10px] font-bold rounded">EXTEND</span>
                                </div>
                                <div className="text-xs">
                                    <strong className="block text-slate-700 dark:text-slate-300 mb-1">Score 24-31 (60-79%):</strong>
                                    <span className="text-slate-600 dark:text-slate-400">Potential evident but specific gaps. Additional 1-2 months (written agreement). Cannot exceed 6 months total probation. Weekly check-ins during extension.</span>
                                </div>
                            </div>
                            {/* TERMINATE Option */}
                            <div className="flex gap-3 p-3 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg">
                                <div className="flex-shrink-0 w-20 text-center">
                                    <span className="inline-block px-2 py-1 bg-red-200 dark:bg-red-800 text-red-700 dark:text-red-300 text-[10px] font-bold rounded">TERMINATE</span>
                                </div>
                                <div className="text-xs">
                                    <strong className="block text-slate-700 dark:text-slate-300 mb-1">Score &lt; 24 (&lt;60%):</strong>
                                    <span className="text-slate-600 dark:text-slate-400">Critical deficiencies (safety, quality, attitude). Notice: 1 week during probation (per labor code). Final pay: salary + unused leave + 13th month prorated.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                    <h5 className="font-bold text-sm mb-4">Probation Evaluation Criteria (40 Points)</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div className="space-y-2">
                            <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                                <span>Technical Competence</span>
                                <span className="font-mono text-slate-400">__/5</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                                <span>Quality of Work (Accuracy)</span>
                                <span className="font-mono text-slate-400">__/5</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                                <span>Productivity (Output)</span>
                                <span className="font-mono text-slate-400">__/5</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                                <span>Learning & Development</span>
                                <span className="font-mono text-slate-400">__/5</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                                <span>Professionalism & Attitude</span>
                                <span className="font-mono text-slate-400">__/5</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                                <span>Customer Service</span>
                                <span className="font-mono text-slate-400">__/5</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                                <span>Teamwork & Culture</span>
                                <span className="font-mono text-slate-400">__/5</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                                <span>Safety & Compliance</span>
                                <span className="font-mono text-slate-400">__/5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="working-hours">
                <SubSectionHeader>3.3 Working Hours & Schedules</SubSectionHeader>
                <div className="mb-6">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex items-center justify-between">
                        <div>
                            <span className="block font-bold text-lg text-slate-700 dark:text-slate-200">48 Hours / Week</span>
                            <span className="text-xs text-slate-500">Standard Tunisian Legal Work Week</span>
                        </div>
                        <div className="text-right text-xs text-slate-500">
                            <div>Mon-Fri: 8h</div>
                            <div>Sat: 4h</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Standard Schedule Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 px-4 py-3">
                            <h5 className="font-bold text-sm text-white flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Standard Schedule
                            </h5>
                        </div>
                        <div className="p-4">
                            <Table>
                                <TableRow isHeader>
                                    <TableCell isHeader>Day</TableCell>
                                    <TableCell isHeader>Hours</TableCell>
                                    <TableCell isHeader>Break</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Mon - Fri</TableCell>
                                    <TableCell>08:00 - 17:00</TableCell>
                                    <TableCell>1 Hour (Lunch)</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Saturday</TableCell>
                                    <TableCell>08:00 - 14:30</TableCell>
                                    <TableCell>None</TableCell>
                                </TableRow>
                            </Table>
                            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                <span className="text-[10px] text-slate-500">Total: 44 Hours/Week</span>
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 text-[10px] font-semibold rounded-full">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                    Standard
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Flexibility Rules Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-800 dark:to-green-900 px-4 py-3">
                            <h5 className="font-bold text-sm text-white flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Flexibility Rules
                            </h5>
                        </div>
                        <div className="p-4">
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 p-2 bg-amber-50 dark:bg-amber-900/10 rounded-lg border border-amber-100 dark:border-amber-800">
                                    <span className="text-lg">🔧</span>
                                    <div>
                                        <span className="font-bold text-xs block text-slate-700 dark:text-slate-300">Technicians</span>
                                        <p className="text-[10px] text-slate-600 dark:text-slate-400">Start time may vary based on client site needs (e.g. 7:00 AM start = 4:00 PM finish).</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-2 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-800">
                                    <span className="text-lg">💼</span>
                                    <div>
                                        <span className="font-bold text-xs block text-slate-700 dark:text-slate-300">Sales</span>
                                        <p className="text-[10px] text-slate-600 dark:text-slate-400">Core hours 9:00-16:00; flexible for client meetings.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <span className="text-lg">⏰</span>
                                    <div>
                                        <span className="font-bold text-xs block text-slate-700 dark:text-slate-300">Punctuality</span>
                                        <p className="text-[10px] text-slate-600 dark:text-slate-400">Must be ready to work at 8:00 AM, not just arriving.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <span className="text-lg">☕</span>
                                    <div>
                                        <span className="font-bold text-xs block text-slate-700 dark:text-slate-300">Breaks</span>
                                        <p className="text-[10px] text-slate-600 dark:text-slate-400">Lunch 1h (12:00-14:00 window). Prayer breaks permitted.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 text-[10px] font-semibold rounded-full">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    Per Role
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="overtime-policy">
                <SubSectionHeader>3.4 Overtime Policy</SubSectionHeader>
                <Paragraph className="mb-4">
                    Overtime is work performed beyond 48 hours/week or on Sundays. All overtime must be pre-approved by a Responsible.
                </Paragraph>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-2 text-indigo-700 dark:text-indigo-400">Compensation Rates</h5>
                        <List className="text-xs">
                            <ListItem>Weekday ({">"}48h): +50% (First 8h), +100% (Beyond 8h).</ListItem>
                            <ListItem>Sunday/Holiday: +100% (Double Time).</ListItem>
                            <ListItem>Night Work (21h-06h): +50% premium.</ListItem>
                        </List>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-2">Compensatory Time</h5>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                            By mutual agreement, overtime can be compensated with time off instead of pay.
                        </p>
                        <div className="bg-white dark:bg-slate-800 p-2 rounded border border-slate-200 dark:border-slate-700 text-xs text-center font-mono">
                            1 Hour OT = 1.5 Hours Off
                        </div>
                    </div>
                </div>

                <Blockquote type="warning" title="Authorization Required">
                    Overtime is for valid operational needs (emergencies, deadlines). It is NOT for making up personal inefficiency. Unauthorized overtime will not be compensated.
                </Blockquote>
            </SubSection>
            <SubSection id="employee-handbook">
                <SubSectionHeader>3.5 Employee Handbook</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Handbook Overview Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-800 dark:to-indigo-900 px-4 py-3">
                            <h5 className="font-bold text-sm text-white flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Handbook Overview
                            </h5>
                        </div>
                        <div className="p-4">
                            <div className="space-y-3">
                                <div className="flex items-start gap-2 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <span className="text-blue-500 font-bold text-xs">🎯</span>
                                    <div>
                                        <span className="font-bold text-xs block text-slate-700 dark:text-slate-300">Purpose</span>
                                        <span className="text-[10px] text-slate-600 dark:text-slate-400">Comprehensive guide on values, policies, and standards.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <span className="text-green-500 font-bold text-xs">📚</span>
                                    <div>
                                        <span className="font-bold text-xs block text-slate-700 dark:text-slate-300">Distribution</span>
                                        <span className="text-[10px] text-slate-600 dark:text-slate-400">Printed booklet (Day 1) + Digital PDF (WAVE PLUS).</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <span className="text-amber-500 font-bold text-xs">✍️</span>
                                    <div>
                                        <span className="font-bold text-xs block text-slate-700 dark:text-slate-300">Acknowledgement</span>
                                        <span className="text-[10px] text-slate-600 dark:text-slate-400">Signed form required from every employee.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <span className="text-indigo-500 font-bold text-xs">🔄</span>
                                    <div>
                                        <span className="font-bold text-xs block text-slate-700 dark:text-slate-300">Updates</span>
                                        <span className="text-[10px] text-slate-600 dark:text-slate-400">Reviewed annually by HR/Admin.</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                                <h6 className="font-bold text-xs mb-2 text-slate-700 dark:text-slate-300">Content Structure:</h6>
                                <div className="grid grid-cols-2 gap-1">
                                    <span className="text-[10px] text-slate-600 dark:text-slate-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>Sec 1: Welcome & Values
                                    </span>
                                    <span className="text-[10px] text-slate-600 dark:text-slate-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>Sec 2: Employment Terms
                                    </span>
                                    <span className="text-[10px] text-slate-600 dark:text-slate-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>Sec 3: Workplace Policies
                                    </span>
                                    <span className="text-[10px] text-slate-600 dark:text-slate-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>Sec 4: Performance & Development
                                    </span>
                                    <span className="text-[10px] text-slate-600 dark:text-slate-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>Sec 5: Workplace Rules
                                    </span>
                                    <span className="text-[10px] text-slate-600 dark:text-slate-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>Sec 6: Practical Info
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Policies Highlighted Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-800 dark:to-primary-900 px-4 py-3">
                            <h5 className="font-bold text-sm text-white flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Key Policies Highlighted
                            </h5>
                        </div>
                        <div className="p-4">
                            <div className="space-y-3">
                                <div className="flex items-start gap-2 p-2 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg">
                                    <span className="text-lg">⚖️</span>
                                    <div>
                                        <span className="font-bold text-xs block text-slate-700 dark:text-slate-300">Equal Opportunity & Non-Discrimination</span>
                                        <span className="text-[10px] text-slate-600 dark:text-slate-400">Hiring/promotion based on merit. No discrimination.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 p-2 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg">
                                    <span className="text-lg">🚫</span>
                                    <div>
                                        <span className="font-bold text-xs block text-slate-700 dark:text-slate-300">Anti-Harassment</span>
                                        <span className="text-[10px] text-slate-600 dark:text-slate-400">Zero tolerance. Confidential reporting process.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 p-2 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg">
                                    <span className="text-lg">🔐</span>
                                    <div>
                                        <span className="font-bold text-xs block text-slate-700 dark:text-slate-300">Data Protection</span>
                                        <span className="text-[10px] text-slate-600 dark:text-slate-400">Customer info is confidential. Strict privacy rules.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 p-2 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-lg">
                                    <span className="text-lg">🏢</span>
                                    <div>
                                        <span className="font-bold text-xs block text-slate-700 dark:text-slate-300">Company Property</span>
                                        <span className="text-[10px] text-slate-600 dark:text-slate-400">Vehicles/tools for business use. Report damage immediately.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 p-2 bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800 rounded-lg">
                                    <span className="text-lg">📱</span>
                                    <div>
                                        <span className="font-bold text-xs block text-slate-700 dark:text-slate-300">Social Media</span>
                                        <span className="text-[10px] text-slate-600 dark:text-slate-400">Represent SS+ positively. No confidential info sharing.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

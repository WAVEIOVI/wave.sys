import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';

export default function AttendanceLeave() {
    return (
        <Section id="section-7">
            <SectionHeader>SECTION 7: ATTENDANCE & LEAVE MANAGEMENT</SectionHeader>

            <SubSection id="time-tracking">
                <SubSectionHeader>7.1 Attendance Policy</SubSectionHeader>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex-1">
                        <Paragraph>
                            Reliability is essential for our service operations. Attendance is tracked digitally via WAVE PLUS.
                        </Paragraph>
                        <h4 className="font-semibold text-sm mt-4 mb-2">Expectations:</h4>
                        <List className="text-xs">
                            <ListItem>Punctuality: Ready to work at 08:00 (not just arriving in parking).</ListItem>
                            <ListItem>Check-In: Mobile GPS check-in required upon arrival at first site/office.</ListItem>
                            <ListItem>Lateness: Notify Responsible immediately. Recurrent lateness ({">"}15m) results in deduction.</ListItem>
                            <ListItem>Absence: Unauthorized absence is unpaid and grounds for disciplinary action.</ListItem>
                        </List>
                    </div>
                    <div className="flex-1 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-200">Standard Schedule (48h/week)</h5>
                        <Table>
                            <TableRow isHeader>
                                <TableCell>Days</TableCell>
                                <TableCell>Hours</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Mon - Fri</TableCell>
                                <TableCell>08:00 - 17:00 (1h Lunch)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Saturday</TableCell>
                                <TableCell>08:00 - 14:30 (No Break)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sunday</TableCell>
                                <TableCell>Rest Day (Off)</TableCell>
                            </TableRow>
                        </Table>
                        <p className="text-[10px] text-slate-500 mt-2 italic">*Technicians may have variable start times based on client needs.*</p>
                    </div>
                </div>
            </SubSection>

            <SubSection id="attendance-tracking">
                <SubSectionHeader>7.2 Attendance Tracking (WAVE PLUS)</SubSectionHeader>
                <Paragraph className="mb-4">
                    We use a tiered system to track attendance based on role and mobility requirements.
                </Paragraph>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <strong className="block text-sm mb-2 text-indigo-600 dark:text-indigo-400">Tier 1: Hourly (GPS)</strong>
                        <p className="text-xs text-slate-500 mb-2">Technicians & Team Leaders</p>
                        <List className="text-[10px]">
                            <ListItem>Start/End: App timestamp.</ListItem>
                            <ListItem>Site Visits: Check-in/out at each customer site.</ListItem>
                            <ListItem>Metric: Precise hours & travel time.</ListItem>
                        </List>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <strong className="block text-sm mb-2 text-blue-600 dark:text-blue-400">Tier 2: Daily (Activity)</strong>
                        <p className="text-xs text-slate-500 mb-2">Sales Reps</p>
                        <List className="text-[10px]">
                            <ListItem>Check-In: Daily plan log.</ListItem>
                            <ListItem>Activity: Log meetings & calls.</ListItem>
                            <ListItem>Metric: Results & Visits (flexible hours).</ListItem>
                        </List>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <strong className="block text-sm mb-2 text-slate-600 dark:text-slate-400">Tier 3: Daily (Site)</strong>
                        <p className="text-xs text-slate-500 mb-2">Office & Admin</p>
                        <List className="text-[10px]">
                            <ListItem>Method: Manual Sign-in or Digital Check-in.</ListItem>
                            <ListItem>Metric: Presence during standard hours.</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="leave-entitlement">
                <SubSectionHeader>7.3 Annual Leave Entitlement</SubSectionHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="glass-card p-4 border-l-4 border-emerald-500 overflow-hidden relative">
                        <div className="absolute -right-4 -top-4 text-emerald-100 dark:text-emerald-900/20 transform rotate-12">
                            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 002-2h-1V1h-2z" /></svg>
                        </div>
                        <h6 className="text-xs font-bold text-slate-500 uppercase mb-1">Annual Leave</h6>
                        <div className="flex items-end gap-2 mb-2">
                            <span className="text-3xl font-bold text-slate-800 dark:text-white">19</span>
                            <span className="text-sm text-slate-500 mb-1">Days / Year</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
                            <div className="bg-emerald-500 h-full w-[100%]"></div>
                        </div>
                        <p className="text-[10px] text-slate-500 font-medium">Accrual: 1.58 days / month</p>
                    </div>

                    <div className="glass-card p-4 border-l-4 border-blue-500 overflow-hidden relative">
                        <div className="absolute -right-4 -top-4 text-blue-100 dark:text-blue-900/20 transform rotate-12">
                            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                        </div>
                        <h6 className="text-xs font-bold text-slate-500 uppercase mb-1">Sick Leave</h6>
                        <div className="flex items-end gap-2 mb-2">
                            <span className="text-3xl font-bold text-slate-800 dark:text-white">30</span>
                            <span className="text-sm text-slate-500 mb-1">Days / Year</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
                            <div className="bg-blue-500 h-full w-[40%]"></div>
                        </div>
                        <p className="text-[10px] text-slate-500 font-medium">Wait period: None (w/ cert)</p>
                    </div>

                    <div className="glass-card p-4 border-l-4 border-purple-500 overflow-hidden relative">
                        <div className="absolute -right-4 -top-4 text-purple-100 dark:text-purple-900/20 transform rotate-12">
                            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                        </div>
                        <h6 className="text-xs font-bold text-slate-500 uppercase mb-1">Maternity</h6>
                        <div className="flex items-end gap-2 mb-2">
                            <span className="text-3xl font-bold text-slate-800 dark:text-white">60</span>
                            <span className="text-sm text-slate-500 mb-1">Days (SS+)</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
                            <div className="bg-purple-500 h-full w-full"></div>
                        </div>
                        <p className="text-[10px] text-slate-500 font-medium">Supplemental pay provided</p>
                    </div>

                    <div className="glass-card p-4 border-l-4 border-orange-500 overflow-hidden relative">
                        <div className="absolute -right-4 -top-4 text-orange-100 dark:text-orange-900/20 transform rotate-12">
                            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.06-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z" /></svg>
                        </div>
                        <h6 className="text-xs font-bold text-slate-500 uppercase mb-1">Paternity</h6>
                        <div className="flex items-end gap-2 mb-2">
                            <span className="text-3xl font-bold text-slate-800 dark:text-white">3</span>
                            <span className="text-sm text-slate-500 mb-1">Days (SS+)</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
                            <div className="bg-orange-500 h-full w-full"></div>
                        </div>
                        <p className="text-[10px] text-slate-500 font-medium">Legal minimum: 1 day</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-8">
                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h5 className="font-bold text-sm mb-4 text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            Seniority Accrual Escalation
                        </h5>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-600 dark:text-slate-400">0 - 5 Years</span>
                                <span className="font-bold">19 Days</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-600 dark:text-slate-400">5 - 10 Years</span>
                                <span className="font-bold text-emerald-600">+1 Day (20 Total)</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-600 dark:text-slate-400">10 - 15 Years</span>
                                <span className="font-bold text-emerald-600">+2 Days (21 Total)</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-600 dark:text-slate-400">15 - 20 Years</span>
                                <span className="font-bold text-emerald-600">+3 Days (22 Total)</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-600 dark:text-slate-400">20+ Years</span>
                                <span className="font-bold text-emerald-600">+4 Days (23 Total)</span>
                            </div>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-4 italic border-t border-slate-100 dark:border-slate-800 pt-2">Note: Leave year follows Calendar Year (Jan-Dec).</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-4">Request Workflow</h5>
                        <div className="space-y-4 relative">
                            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800"></div>
                            <div className="flex gap-4 relative z-10">
                                <div className="h-6 w-6 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-center text-[10px] font-bold flex items-center justify-center shrink-0">1</div>
                                <div>
                                    <p className="text-xs font-bold">Check Balance</p>
                                    <p className="text-[10px] text-slate-500">View real-time entitlement in WAVE PLUS App.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 relative z-10">
                                <div className="h-6 w-6 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-center text-[10px] font-bold flex items-center justify-center shrink-0">2</div>
                                <div>
                                    <p className="text-xs font-bold">Submit Request</p>
                                    <p className="text-[10px] text-slate-500">Submit at least 2 weeks in advance via digital portal.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 relative z-10">
                                <div className="h-6 w-6 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-center text-[10px] font-bold flex items-center justify-center shrink-0">3</div>
                                <div>
                                    <p className="text-xs font-bold">Approval</p>
                                    <p className="text-[10px] text-slate-500">Responsible reviews team coverage and approves.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h5 className="font-bold text-sm mb-3">Public Holidays (Paid)</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6 text-xs">
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">New Year's (Jan 1)</div>
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">Youth Day (Jan 14)</div>
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">Independence (Mar 20)</div>
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">Martyrs' (Apr 9)</div>
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">Labor Day (May 1)</div>
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">Republic (Jul 25)</div>
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">Women's (Aug 13)</div>
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">Evacuation (Oct 15)</div>
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">Revolution (Dec 17)</div>
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">Eid Al-Fitr (3 Days)</div>
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">Eid Al-Adha (3 Days)</div>
                    <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">Mawlid (1 Day)</div>
                </div>
            </SubSection>

            <SubSection id="leave-types">
                <SubSectionHeader>7.4 Sick & Special Leave</SubSectionHeader>
                <div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-xl">
                    <Table>
                        <TableRow isHeader>
                            <TableCell>Type</TableCell>
                            <TableCell>Entitlement/Policy</TableCell>
                            <TableCell>Requirement</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><strong>Sick Leave</strong></TableCell>
                            <TableCell>Per labor code with medical certificate. First 30 days: 50% salary (maybe up to 100%); then CNSS. SS+ may supplement. Without certificate: unpaid.</TableCell>
                            <TableCell>Notify responsible before shift. Medical certificate within 48 hours. Submit to Admin Responsible.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><strong>Maternity</strong></TableCell>
                            <TableCell><strong>60 days total</strong> (30 days before due date, 30 days after birth). SS+ supplements CNSS to maintain full salary. Job protected.</TableCell>
                            <TableCell>Medical cert confirming due date. Notify responsible/HR when pregnancy confirmed.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><strong>Paternity</strong></TableCell>
                            <TableCell><strong>3 days paid</strong> (SS+ enhanced; legal minimum 1 day). Upon birth of child.</TableCell>
                            <TableCell>Notify when child born. Birth certificate. Take leave within 1 week of birth.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><strong>Marriage</strong></TableCell>
                            <TableCell>3 days paid (per labor code).</TableCell>
                            <TableCell>Marriage certificate.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><strong>Bereavement</strong></TableCell>
                            <TableCell>1-3 days depending on relation (per labor code).</TableCell>
                            <TableCell>Death certificate.</TableCell>
                        </TableRow>
                    </Table>
                </div>
                <Blockquote type="info" title="Reporting Absence">
                    Call your Team Leader or Responsible before your shift starts. SMS/WhatsApp is acceptable only if call is unanswered.
                </Blockquote>
            </SubSection>
        </Section>
    );
}

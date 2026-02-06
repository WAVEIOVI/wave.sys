import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';

export default function TimeOff() {
    return (
        <Section id="section-4">
            <SectionHeader>SECTION 4: TIME OFF & LEAVE</SectionHeader>

            <SubSection id="annual-leave">
                <SubSectionHeader>4.1 Annual Paid Leave</SubSectionHeader>

                <Paragraph className="text-lg font-semibold text-primary-700 dark:text-primary-400 mb-4">
                    Your Vacation Days - Use Them!
                </Paragraph>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <div className="p-6 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-200 dark:border-primary-800 mb-6">
                            <h4 className="text-sm font-bold uppercase text-primary-600 dark:text-primary-400 mb-2">Base Entitlement</h4>
                            <div className="text-5xl font-black text-primary-700 dark:text-primary-300 mb-2">19 Days</div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Per year - above labor code minimum!</p>
                            <List className="text-xs mt-4">
                                <ListItem>Accrues at: 1.58 days per month worked</ListItem>
                                <ListItem>Labor code minimum: 18 days/year</ListItem>
                                <ListItem>SS+ provides: +1 day above legal minimum</ListItem>
                            </List>
                        </div>

                        <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                            <h5 className="font-bold mb-3">Seniority Bonus:</h5>
                            <p className="text-sm mb-3">+1 additional day per 5 years of service</p>
                            <div className="space-y-2">
                                {[
                                    { yr: '0–4 years', days: '20 days' },
                                    { yr: '5–9 years', days: '21 days' },
                                    { yr: '10–14 years', days: '22 days' },
                                    { yr: '15–19 years', days: '23 days' },
                                    { yr: '20+ years', days: '24 days' },
                                ].map(item => (
                                    <div key={item.yr} className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-800 text-sm">
                                        <span className="text-slate-600 dark:text-slate-400">{item.yr}</span>
                                        <span className="font-bold">{item.days}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="p-5 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-200 dark:border-blue-800">
                            <h5 className="font-bold mb-3">Accrual & Availability:</h5>
                            <List>
                                <ListItem>Leave accrues monthly (earned each month worked)</ListItem>
                                <ListItem>New employees: Can take leave after 6 months (~9.5 days accrued)</ListItem>
                                <ListItem>Prorated for partial years (new hires, terminations)</ListItem>
                                <ListItem>Leave Year: January 1 - December 31</ListItem>
                            </List>
                        </div>

                        <div className="p-5 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-200 dark:border-green-800">
                            <h5 className="font-bold mb-3">Carryover Policy:</h5>
                            <List>
                                <ListItem>Unused leave carries to next year (maximum 10 days)</ListItem>
                                <ListItem>Use-it-or-lose-it after that</ListItem>
                                <ListItem>**We encourage you to use your leave!** Rest prevents burnout</ListItem>
                            </List>
                        </div>

                        <div className="p-5 bg-yellow-50 dark:bg-yellow-900/10 rounded-xl border border-yellow-200 dark:border-yellow-800">
                            <h5 className="font-bold mb-2">Payment Instead of Leave:</h5>
                            <Paragraph className="text-sm mb-2">Generally not allowed (we want you to rest)</Paragraph>
                            <Paragraph className="text-sm font-semibold">**Exception:** Upon termination - all unused leave paid in final settlement</Paragraph>
                        </div>
                    </div>
                </div>

                <div className="mt-8 p-6 bg-slate-900 text-white rounded-2xl">
                    <h4 className="text-primary-400 font-bold mb-4 text-lg">Notice Requirements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-slate-800 rounded-lg">
                            <span className="block text-3xl font-black text-primary-500 mb-2">2 Weeks</span>
                            <span className="text-sm text-slate-300">For 1–5 days leave</span>
                        </div>
                        <div className="p-4 bg-slate-800 rounded-lg">
                            <span className="block text-3xl font-black text-primary-500 mb-2">1 Month</span>
                            <span className="text-sm text-slate-300">For 6–10 days leave</span>
                        </div>
                        <div className="p-4 bg-slate-800 rounded-lg">
                            <span className="block text-3xl font-black text-primary-500 mb-2">2 Months</span>
                            <span className="text-sm text-slate-300">For 11+ days leave</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h5 className="font-bold mb-3">How to Request Leave (7-Step Process):</h5>
                    <ol className="space-y-2 list-decimal pl-5">
                        <li className="text-sm">Check your leave balance (WAVE PLUS portal or ask Admin Manager)</li>
                        <li className="text-sm">Consider team coverage and business calendar (busy periods)</li>
                        <li className="text-sm">Coordinate with colleagues (don't all leave at same time!)</li>
                        <li className="text-sm">Submit request via WAVE PLUS or written form to manager</li>
                        <li className="text-sm">Include: Dates, number of days, brief reason, emergency contact</li>
                        <li className="text-sm">Manager reviews within 3 business days</li>
                        <li className="text-sm">Receive confirmation before making final plans</li>
                    </ol>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border-l-4 border-green-500">
                        <h6 className="font-bold text-green-800 dark:text-green-300 mb-2">✅ Approval Criteria:</h6>
                        <List className="text-xs">
                            <ListItem>Adequate notice given</ListItem>
                            <ListItem>Team coverage available</ListItem>
                            <ListItem>Not peak busy season</ListItem>
                            <ListItem>You have sufficient leave balance</ListItem>
                            <ListItem>Fair to other team members</ListItem>
                        </List>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border-l-4 border-red-500">
                        <h6 className="font-bold text-red-800 dark:text-red-300 mb-2">❌ May Be Denied/Rescheduled If:</h6>
                        <Paragraph className="text-xs">Critical business needs require your presence</Paragraph>
                    </div>
                </div>
            </SubSection>

            <SubSection id="public-holidays">
                <SubSectionHeader>4.2 Public Holidays</SubSectionHeader>

                <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-200 dark:border-blue-800 mb-6 text-center">
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-bold uppercase mb-1">Approximately Per Year</p>
                    <h3 className="text-4xl font-black text-slate-900 dark:text-white">15-17 Days</h3>
                    <p className="text-xs text-slate-500 mt-1">(varies with Islamic calendar)</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h5 className="font-bold mb-4">Fixed-Date Holidays (9 days):</h5>
                        <Table>
                            <TableRow>
                                <TableCell>January 1</TableCell>
                                <TableCell>New Year's Day</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>January 14</TableCell>
                                <TableCell>Youth Day</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>March 20</TableCell>
                                <TableCell>Independence Day</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>April 9</TableCell>
                                <TableCell>Martyrs' Day</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>May 1</TableCell>
                                <TableCell>Labour Day</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>July 25</TableCell>
                                <TableCell>Republic Day</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>August 13</TableCell>
                                <TableCell>Women's Day</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>October 15</TableCell>
                                <TableCell>Evacuation Day (Bizerte)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>December 17</TableCell>
                                <TableCell>Revolution Day</TableCell>
                            </TableRow>
                        </Table>
                    </div>

                    <div className="p-5 bg-purple-50 dark:bg-purple-900/10 rounded-xl border border-purple-200 dark:border-purple-800">
                        <h5 className="font-bold mb-4">Islamic Holidays (6-8 days - vary by lunar calendar):</h5>
                        <List>
                            <ListItem>**Eid al-Fitr:** 2-3 days (end of Ramadan)</ListItem>
                            <ListItem>**Eid al-Adha:** 2-3 days</ListItem>
                            <ListItem>**Islamic New Year (Hijri New Year):** 1 day</ListItem>
                            <ListItem>**Mawlid al-Nabi (Prophet's Birthday):** 1 day</ListItem>
                        </List>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-800">
                        <h6 className="font-bold mb-2">Public Holidays Are PAID:</h6>
                        <List className="text-sm">
                            <ListItem>You don't work, but receive full pay</ListItem>
                            <ListItem>If falls on Sunday: No extra compensation</ListItem>
                        </List>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-200 dark:border-orange-800">
                        <h6 className="font-bold mb-2">Working on Public Holiday:</h6>
                        <List className="text-sm">
                            <ListItem>Only if emergency or critical need</ListItem>
                            <ListItem>Requires your agreement</ListItem>
                            <ListItem>**Compensation:** Double pay (200%) OR 2:1 time off</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="sick-leave">
                <SubSectionHeader>4.3 Sick Leave</SubSectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-200 dark:border-blue-800">
                        <h5 className="font-bold mb-4">With Medical Certificate:</h5>
                        <Paragraph className="text-sm mb-4">
                            Employee can take sick leave when genuinely ill. Must provide medical certificate from licensed doctor.
                        </Paragraph>
                        <div className="mb-4">
                            <span className="block text-xs font-bold uppercase text-slate-500 mb-1">Duration</span>
                            <span className="text-sm">Up to 6 months for the same illness</span>
                        </div>
                        <div>
                            <span className="block text-xs font-bold uppercase text-slate-500 mb-2">Payment:</span>
                            <List className="text-xs">
                                <ListItem><strong>First 30 days:</strong> 50% of salary for the first month (per labor code; may be up to 100% depending on CNSS rules and circumstances)</ListItem>
                                <ListItem><strong>Days 31–180:</strong> 66% of salary (paid by CNSS; employer may supplement)</ListItem>
                                <ListItem><strong>After 180 days:</strong> CNSS disability benefits apply</ListItem>
                            </List>
                        </div>
                    </div>

                    <div className="p-6 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-200 dark:border-green-800">
                        <h5 className="font-bold mb-4 text-green-800 dark:text-green-300">SS+ Policy (Enhanced):</h5>
                        <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-green-300 dark:border-green-700 mb-4">
                            <span className="block text-2xl font-black text-green-700 dark:text-green-400 mb-1">100% Salary</span>
                            <span className="text-xs text-slate-600 dark:text-slate-400">For first 3 months of sick leave</span>
                        </div>
                        <Paragraph className="text-sm">
                            Company supplements CNSS where required. Long-term illness handled on case-by-case, compassionate basis.
                        </Paragraph>
                    </div>
                </div>

                <div className="p-5 bg-yellow-50 dark:bg-yellow-900/10 rounded-xl border border-yellow-200 dark:border-yellow-800 mb-6">
                    <h5 className="font-bold mb-3">Without Medical Certificate:</h5>
                    <Paragraph className="mb-2">Sick leave is **not paid** (considered unauthorized absence)</Paragraph>
                    <Paragraph className="text-sm">**Exception:** 1–2 day minor illness at manager's discretion (maximum 2 times per year)</Paragraph>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6">
                    <h5 className="font-bold mb-4">Procedure (4 steps):</h5>
                    <ol className="space-y-3 list-decimal pl-5">
                        <li className="text-sm">
                            <strong>Notify immediately</strong> — Call your manager before the start of your shift (do not text or message where a call is possible). Explain the nature of the illness and expected absence.
                        </li>
                        <li className="text-sm">
                            <strong>See a doctor</strong> and obtain a medical certificate — Must be issued by a licensed doctor and obtained <strong>within 48 hours</strong> of the absence start; certificate should state diagnosis, recommended rest period, and include the doctor&apos;s stamp and signature.
                        </li>
                        <li className="text-sm">
                            <strong>Submit the certificate</strong> — Provide it to the Admin Responsible (in person, by photo via WhatsApp/email); submit the original when you return to work.
                        </li>
                        <li className="text-sm">
                            <strong>Return to work</strong> — On the date specified in the medical certificate (or sooner if recovered). If an extension is needed, obtain and submit a new certificate before the current one expires.
                        </li>
                    </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border-l-4 border-red-500">
                        <h6 className="font-bold text-red-800 dark:text-red-300 mb-2">Abuse of Sick Leave:</h6>
                        <Paragraph className="text-xs">
                            Suspected abuse (excessive absences, suspicious patterns) will be investigated. The company may require an examination by a company-designated doctor and CNSS may be involved; proven abuse can lead to disciplinary action up to termination.
                        </Paragraph>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border-l-4 border-blue-500">
                        <h6 className="font-bold text-blue-800 dark:text-blue-300 mb-2">CNSS Work Incapacity Benefits:</h6>
                        <Paragraph className="text-xs">
                            For serious illness or injury preventing work, CNSS provides financial support; Admin Responsible will assist with any CNSS claim process.
                        </Paragraph>
                    </div>
                </div>
            </SubSection>

            <SubSection id="maternity-paternity">
                <SubSectionHeader>4.4 Maternity & Paternity Leave</SubSectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 bg-pink-50 dark:bg-pink-900/10 rounded-xl border border-pink-200 dark:border-pink-800">
                        <h5 className="font-bold text-pink-800 dark:text-pink-300 mb-4">Maternity Leave (Women):</h5>

                        <div className="mb-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-pink-200 dark:border-pink-700">
                            <span className="block text-xs font-bold uppercase text-slate-500 mb-1">Duration</span>
                            <span className="block text-2xl font-black text-pink-700 dark:text-pink-400 mb-1">60 Days Total</span>
                            <span className="text-xs text-slate-600 dark:text-slate-400">30 days before + 30 days after birth</span>
                            <Paragraph className="text-xs mt-2">Can be extended if medical complications (doctor recommendation)</Paragraph>
                        </div>

                        <div className="mb-4">
                            <h6 className="font-bold mb-2">Pay:</h6>
                            <div className="p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-800">
                                <List className="text-sm">
                                    <ListItem>**Full salary maintained!**</ListItem>
                                    <ListItem>CNSS pays 66.67% (two-thirds)</ListItem>
                                    <ListItem>SS+ supplements remaining 33.33%</ListItem>
                                </List>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h6 className="font-bold mb-2">Job Protection:</h6>
                            <Paragraph className="text-sm">Your position is guaranteed. You return to same role (or equivalent) after leave.</Paragraph>
                        </div>

                        <div>
                            <h6 className="font-bold mb-2">Breastfeeding Breaks:</h6>
                            <Paragraph className="text-sm">1 hour per day for 12 months after return to work (CNSS requirement)</Paragraph>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-200 dark:border-blue-800">
                            <h5 className="font-bold text-blue-800 dark:text-blue-300 mb-4">Paternity Leave (Men):</h5>

                            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700 mb-4">
                                <span className="block text-2xl font-black text-blue-700 dark:text-blue-400 mb-1">3 Days Paid</span>
                                <span className="text-xs text-slate-600 dark:text-slate-400">SS+ enhanced benefit (above legal minimum of 1 day)</span>
                            </div>

                            <Paragraph className="text-sm">Must be taken within 1 week of birth</Paragraph>
                        </div>

                        <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                            <h6 className="font-bold mb-3">Maternity Leave Procedure (7 steps):</h6>
                            <ol className="space-y-2 list-decimal pl-5 text-xs">
                                <li><strong>Notify employer as soon as pregnancy confirmed</strong> (for planning and support)</li>
                                <li>Inform manager and Admin Manager</li>
                                <li>Submit medical certificate with expected due date</li>
                                <li>Plan leave start date (typically 30 days before due date, flexible)</li>
                                <li>Admin Manager assists with CNSS maternity benefit application</li>
                                <li>Company pays full salary; CNSS reimburses company for 66.67%</li>
                                <li>Return after 60 days (or extended period if medical reasons)</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="other-leave">
                <SubSectionHeader>4.5 Other Leave Types</SubSectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h5 className="font-bold mb-4">Compassionate Leave (Death in Family):</h5>
                        <Table>
                            <TableRow>
                                <TableCell>Spouse or Child</TableCell>
                                <TableCell className="font-bold">3 days paid</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Parent or Sibling</TableCell>
                                <TableCell className="font-bold">2 days paid</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Grandparent or In-law</TableCell>
                                <TableCell className="font-bold">1 day paid</TableCell>
                            </TableRow>
                        </Table>
                        <Paragraph className="text-xs mt-3">Can be extended unpaid if needed (manager approval)</Paragraph>
                    </div>

                    <div className="p-5 bg-purple-50 dark:bg-purple-900/10 rounded-xl border border-purple-200 dark:border-purple-800">
                        <h5 className="font-bold mb-4">Marriage Leave:</h5>
                        <List>
                            <ListItem>**Your own marriage:** 3 days paid leave</ListItem>
                            <ListItem>**Child's marriage:** 1 day paid leave</ListItem>
                            <ListItem>Celebrate important life moments!</ListItem>
                        </List>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-200 dark:border-orange-800">
                        <h5 className="font-bold mb-4">Family Emergency:</h5>
                        <Paragraph className="text-sm mb-3">Serious illness of immediate family member</Paragraph>
                        <List className="text-sm">
                            <ListItem>Case-by-case basis (manager approval)</ListItem>
                            <ListItem>Up to 3 days paid, additional unpaid if needed</ListItem>
                        </List>
                    </div>

                    <div className="p-5 bg-yellow-50 dark:bg-yellow-900/10 rounded-xl border border-yellow-200 dark:border-yellow-800">
                        <h5 className="font-bold mb-4">Unpaid Leave:</h5>
                        <Paragraph className="text-sm mb-3">When granted for personal/family reasons</Paragraph>
                        <List className="text-sm">
                            <ListItem>Maximum 1 month per year</ListItem>
                            <ListItem>Must be approved in advance</ListItem>
                            <ListItem>Salary and benefits suspended during period</ListItem>
                            <ListItem>Return to same position guaranteed</ListItem>
                        </List>
                    </div>
                </div>

                <div className="p-6 bg-teal-50 dark:bg-teal-900/10 rounded-xl border border-teal-200 dark:border-teal-800">
                    <h5 className="font-bold mb-4">Hajj / Religious Pilgrimage Leave:</h5>
                    <Paragraph className="mb-3">Once-in-a-lifetime opportunity for religious observance (Islamic pilgrimage to Mecca)</Paragraph>
                    <List>
                        <ListItem>2-3 weeks unpaid leave</ListItem>
                        <ListItem>Requires 3+ months advance notice</ListItem>
                        <ListItem>Subject to business needs and team coverage</ListItem>
                        <ListItem>Return to same position guaranteed</ListItem>
                    </List>
                </div>
            </SubSection>

            <SubSection id="leave-request-process">
                <SubSectionHeader>4.6 How to Request Leave</SubSectionHeader>

                <div className="p-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/10 dark:to-blue-900/10 rounded-2xl border border-primary-200 dark:border-primary-800">
                    <h5 className="font-bold mb-4 text-lg">Complete Leave Request Process:</h5>
                    <ol className="space-y-3 list-decimal pl-5">
                        <li className="text-sm"><strong>Check your leave balance</strong> — Use WAVE PLUS portal or ask Admin Manager for current balance</li>
                        <li className="text-sm"><strong>Consider timing</strong> — Think about team coverage needs and business calendar (avoid peak busy periods)</li>
                        <li className="text-sm"><strong>Coordinate with team</strong> — Talk to colleagues to ensure coverage (don't all leave at same time!)</li>
                        <li className="text-sm"><strong>Submit formal request</strong> — Via WAVE PLUS portal or written form to manager</li>
                        <li className="text-sm"><strong>Include complete information</strong> — Start/end dates, number of days, brief reason, emergency contact info</li>
                        <li className="text-sm"><strong>Wait for manager review</strong> — Manager will review within 3 business days and respond</li>
                        <li className="text-sm"><strong>Receive confirmation</strong> — Get written approval before making final travel/family plans</li>
                    </ol>

                    <div className="mt-6 p-4 bg-white dark:bg-slate-900 rounded-lg border border-primary-200 dark:border-primary-700">
                        <Paragraph className="text-xs text-slate-600 dark:text-slate-400">
                            **Important:** Always notify your manager immediately if late or absent. Call (don't text) before start time. Provide reason and estimated arrival/return.
                        </Paragraph>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

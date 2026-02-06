import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';

const salaryRanges = [
    { role: 'Service Technician', min: 600, max: 1300, note: '+ Transport + Overtime' },
    { role: 'Team Leader', min: 1000, max: 1500, note: '+ Transport + Overtime' },
    { role: 'Sales Representative', min: 1000, max: 1300, note: '+ Commission + Transport' },
    { role: 'Admin Assistant', min: 800, max: 1200, note: '' },
    { role: 'Manager / Co-Manager', min: 2500, max: 5000, note: 'Performance-based' },
];

const benefits = [
    { title: 'CNSS (Social Security)', desc: 'Employer covers 16.57% (incl. work injury). Employee contribution 9.18%.', icon: '🏛️' },
    { title: 'Transport Allowance', desc: 'Based on territory. Sfax: 150 TND/mo. Tunis: 200 TND/mo.', icon: '🚗' },
    { title: '13th Month Bonus', desc: 'Guaranteed (Dec). Amount = 1 month salary (pro-rated for <12mo).', icon: '🎁' },
    { title: 'Mobile Credit', desc: 'Technicians & Sales: 30-50 TND/mo (incl. in salary spec).', icon: '📱' },
    { title: 'Uniform & PPE', desc: '2 Sets/year (SS+ Logo). Safety boots (1 pair).', icon: '👕' },
    { title: 'Annual Leave', desc: '12 days (+1 per year, max 18). Cash conversion allowed (max 5 days).', icon: '🏖️' },
];

export default function CompensationBenefits() {
    return (
        <Section id="section-4">
            <SectionHeader>SECTION 4: COMPENSATION & BENEFITS</SectionHeader>

            <SubSection id="salary-structure">
                <SubSectionHeader>4.1 Salary Structure</SubSectionHeader>
                <Paragraph className="mb-4">
                    Salaries are competitive within the Tunisian fire safety sector. Base pay is defined in the contract. Adjustments happen annually based on performance and market data.
                </Paragraph>
                    <Table>
                        <TableRow isHeader>
                            <TableCell isHeader>Role</TableCell>
                            <TableCell isHeader>Base Range (TND)</TableCell>
                            <TableCell isHeader>Notes</TableCell>
                        </TableRow>
                        {salaryRanges.map((row) => (
                            <TableRow key={row.role}>
                                <TableCell>{row.role}</TableCell>
                                <TableCell>{row.min} - {row.max}</TableCell>
                                <TableCell>{row.note}</TableCell>
                            </TableRow>
                        ))}
                    </Table>
                <Blockquote type="info" title="Salary Review">
                    Annual review typically in January. Merit increases range 3-8% based on rating. Promotion = new band.
                </Blockquote>
            </SubSection>

            <SubSection id="benefits">
                <SubSectionHeader>4.2 Benefits & Allowances</SubSectionHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {benefits.map((item) => (
                        <div key={item.title} className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xl">{item.icon}</span>
                                <span className="font-bold text-xs text-primary-600">{item.title}</span>
                            </div>
                            <p className="text-[10px] text-slate-600 dark:text-slate-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </SubSection>

            <SubSection id="deductions">
                <SubSectionHeader>4.3 Salary Deductions</SubSectionHeader>
                <Paragraph className="mb-4">
                    Deductions are made per Tunisian labor law. Transparency is key.
                </Paragraph>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-300">Standard Deductions</h5>
                        <List className="text-xs">
                            <ListItem>CNSS (9.18% of gross): Social security, pension, work injury.</ListItem>
                            <ListItem>IRPP (Progressive): Roughly 1-2% for most staff after exemptions.</ListItem>
                            <ListItem>Advance/Loan Repayment: As per signed agreement.</ListItem>
                            <ListItem>Unpaid Leave: Deducted per day (Rate: Monthly / 26).</ListItem>
                        </List>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-2 text-red-700 dark:text-red-400">Prohibited Deductions</h5>
                        <List className="text-xs">
                            <ListItem>Fines or arbitrary penalties.</ListItem>
                            <ListItem>Cash shortages (unless proven theft, requires police report).</ListItem>
                            <ListItem>Client non-payment (unless employee negligence proven).</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="overtime-compensation">
                <SubSectionHeader>4.4 Overtime & Extra Hours</SubSectionHeader>
                <Paragraph className="mb-4">
                    Overtime is paid as per Tunisian law (48h standard week). It must be pre-approved by the Manager.
                </Paragraph>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-2 text-indigo-700 dark:text-indigo-400">Rates</h5>
                        <List className="text-xs">
                            <ListItem>Weekday (First 8h): +50%.</ListItem>
                            <ListItem>Weekday (Beyond 8h): +100%.</ListItem>
                            <ListItem>Sunday/Holiday: +100% (Double Time).</ListItem>
                            <ListItem>Night Work (21h-06h): +50%.</ListItem>
                        </List>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-2">Time Off In Lieu (TOIL)</h5>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                            By mutual agreement, OT can be converted to time off (1.5h off per 1h OT).
                        </p>
                        <div className="bg-white dark:bg-slate-800 p-2 rounded border border-slate-200 dark:border-slate-700 text-xs text-center font-mono">
                            1h OT = 1.5h Time Off
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="payroll">
                <SubSectionHeader>4.6 Payroll Process</SubSectionHeader>
                
                {/* Pay Day Card */}
                <div className="mb-6">
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 px-4 py-3">
                            <div className="flex items-center gap-4">
                                <div className="text-center min-w-[80px]">
                                    <span className="block text-2xl font-bold text-white">5th</span>
                                    <span className="text-[10px] uppercase font-bold text-blue-200 dark:text-blue-400">of Month</span>
                                </div>
                                <div>
                                    <h6 className="font-bold text-sm text-white">Pay Day</h6>
                                    <p className="text-xs text-blue-100 dark:text-blue-300">
                                        Salaries are transferred via bank transfer on the 5th of each month.
                                        <br/>(e.g., January work is paid Feb 5th).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Payslip Components Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-800 dark:to-green-900 px-4 py-3">
                            <h5 className="font-bold text-sm text-white flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                                </svg>
                                Payslip Components
                            </h5>
                        </div>
                        <div className="p-4">
                            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3 bg-slate-50 dark:bg-slate-800 text-xs font-mono space-y-2">
                                <div className="flex justify-between border-b border-dashed border-slate-300 dark:border-slate-600 pb-2">
                                    <span className="text-green-600 dark:text-green-400 font-bold">GROSS PAY</span>
                                    <span className="text-slate-500">(Salary + Allowances + Comm)</span>
                                </div>
                                <div className="flex justify-between text-red-500">
                                    <span>- CNSS (9.18%)</span>
                                    <span className="text-slate-500">(Social Security)</span>
                                </div>
                                <div className="flex justify-between text-red-500 border-b border-dashed border-slate-300 dark:border-slate-600 pb-2">
                                    <span>- IRPP (Tax)</span>
                                    <span className="text-slate-500">(Withholding Tax)</span>
                                </div>
                                <div className="flex justify-between font-bold text-sm pt-1">
                                    <span className="text-blue-600 dark:text-blue-400">= NET PAY</span>
                                    <span className="text-slate-500">(Bank Transfer)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Salary Advances Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-600 to-amber-700 dark:from-amber-800 dark:to-amber-900 px-4 py-3">
                            <h5 className="font-bold text-sm text-white flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Salary Advances
                            </h5>
                        </div>
                        <div className="p-4">
                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="w-5 h-5 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-[10px]">1</span>
                                    <span className="text-slate-700 dark:text-slate-300">Eligibility: After 3 months probation</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="w-5 h-5 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-[10px]">2</span>
                                    <span className="text-slate-700 dark:text-slate-300">Limit: Max 50% of monthly net salary</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="w-5 h-5 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-[10px]">3</span>
                                    <span className="text-slate-700 dark:text-slate-300">Frequency: One advance every 6 months</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="w-5 h-5 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-[10px]">4</span>
                                    <span className="text-slate-700 dark:text-slate-300">Repayment: Deducted fully from next month's salary</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="w-5 h-5 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-[10px]">5</span>
                                    <span className="text-slate-700 dark:text-slate-300">Process: Request &gt; Admin Verify &gt; Manager Approve</span>
                                </div>
                            </div>
                            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                <strong className="block text-xs mb-1 text-slate-700 dark:text-slate-300">Tax Documents</strong>
                                <p className="text-[10px] text-slate-600 dark:text-slate-400">
                                    Annual Tax Certificate (Attestation de Salaire) provided by Jan 31st for personal tax filing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

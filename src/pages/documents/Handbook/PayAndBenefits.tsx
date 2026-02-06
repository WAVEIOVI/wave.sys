import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import List, { ListItem } from '../../../components/document-elements/List';
import { Utensils, Truck, Smartphone, Shirt } from 'lucide-react';

export default function PayAndBenefits() {
    return (
        <Section id="section-3">
            <SectionHeader>SECTION 3: YOUR PAY & BENEFITS</SectionHeader>

            <SubSection id="salary">
                <SubSectionHeader>3.1 Salary & Payroll</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-4  mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                            <div className="text-3xl">🗓️</div>
                            <div>
                                <h4 className="font-bold text-green-800 dark:text-green-300">Pay Day: 5th of Each Month</h4>
                                <p className="text-sm text-green-700 dark:text-green-400">
                                    Work performed in January = paid February 5th. If the 5th falls on a weekend/holiday, payment is made on the last working day before.
                                </p>
                            </div>
                        </div>

                        <div className="mb-6 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                            <h5 className="font-bold mb-3">Salary Payment:</h5>
                            <List className="text-sm">
                                <ListItem>Bank transfer directly to your account</ListItem>
                                <ListItem>Provide RIB (bank account details) to Admin Manager</ListItem>
                                <ListItem>Payslip provided (email or printed copy)</ListItem>
                            </List>
                        </div>

                        <Paragraph>
                            <strong>Your Payslip Shows:</strong>
                        </Paragraph>
                        <List>
                            <ListItem><strong>Gross Salary:</strong> Base + allowances + overtime + commission</ListItem>
                            <ListItem><strong>Deductions:</strong> CNSS contribution, income tax, salary advances</ListItem>
                            <ListItem><strong>Net Salary:</strong> Amount deposited to your account</ListItem>
                            <ListItem><strong>Year-to-Date:</strong> Running totals for the year</ListItem>
                        </List>

                        <div className="mt-6">
                            <h5 className="font-bold text-sm mb-2">Salary Reviews</h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                                    <span className="block text-xs font-bold uppercase text-slate-500">January</span>
                                    <span className="font-semibold">Cost of Living Adjustment</span>
                                </div>
                                <div className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                                    <span className="block text-xs font-bold uppercase text-slate-500">April</span>
                                    <span className="font-semibold">Merit Increases (Performance Based)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 bg-primary-50 dark:bg-primary-900/10 rounded-xl border border-primary-100 dark:border-primary-800">
                            <h5 className="font-bold text-primary-700 dark:text-primary-400 mb-2">Questions About Pay?</h5>
                            <p className="text-sm mb-1">Contact Admin Manager (Mohamed Ali LENDA).</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Check during business hours.</p>
                            <p className="text-xs text-slate-500 italic">Payroll is confidential (don&apos;t discuss salary with colleagues).</p>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="thirteenth-month">
                <SubSectionHeader>3.5 13th Month Salary</SubSectionHeader>
                <Paragraph className="font-bold text-lg mb-4">Annual Bonus — One Extra Month&apos;s Salary!</Paragraph>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h5 className="font-bold mb-3">What It Is</h5>
                        <List className="text-sm">
                            <ListItem>Additional full month&apos;s salary paid annually</ListItem>
                            <ListItem>Not legally required; SS+ provides to all employees</ListItem>
                        </List>
                        <h5 className="font-bold mb-3 mt-4">When Paid</h5>
                        <List className="text-sm">
                            <ListItem>December (with December salary or separately before Dec 31)</ListItem>
                            <ListItem>Gives you extra money for year-end expenses and holidays</ListItem>
                        </List>
                    </div>
                    <div className="p-5 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-200 dark:border-amber-800">
                        <h5 className="font-bold mb-3">Amount</h5>
                        <Paragraph className="text-sm mb-3">Based on your current monthly base salary. Example: base 1,200 TND → receive 1,200 TND extra.</Paragraph>
                        <h5 className="font-bold mb-3">If You&apos;re New</h5>
                        <Paragraph className="text-sm mb-3">Prorated for months worked (e.g. started July 1 = 6 months = 6/12 = 0.5 month salary).</Paragraph>
                        <h5 className="font-bold mb-3">If You Leave Mid-Year</h5>
                        <Paragraph className="text-sm mb-0">Prorated 13th month included in final settlement. You get proportion for months worked.</Paragraph>
                    </div>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-200 dark:border-green-800">
                    <h6 className="font-bold mb-2">All Employees Receive</h6>
                    <List className="text-sm mb-0">
                        <ListItem>Full-time, part-time (prorated)</ListItem>
                        <ListItem>CDD and CDI contracts</ListItem>
                        <ListItem>After probation period</ListItem>
                    </List>
                </div>
            </SubSection>

            <SubSection id="overtime">
                <SubSectionHeader>3.2 Overtime</SubSectionHeader>
                <Paragraph>
                    Work beyond 48 hours/week must be **pre-approved by your manager**.
                </Paragraph>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <Table>
                            <TableRow isHeader>
                                <TableCell isHeader>Type</TableCell>
                                <TableCell isHeader>Premium Rate</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Hours 49–56 (Weekday)</TableCell>
                                <TableCell>+50%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Hours 56+ (Weekday)</TableCell>
                                <TableCell>+100%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sunday / Holiday</TableCell>
                                <TableCell>+100% (Double Time)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Night Work (21:00-06:00)</TableCell>
                                <TableCell>+50% Add-on</TableCell>
                            </TableRow>
                        </Table>
                    </div>
                    <div>
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                            <h5 className="font-bold text-sm mb-3 uppercase tracking-widest text-slate-500">Calculation Example</h5>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Base Hourly Rate:</span>
                                    <span className="font-mono">5.77 TND</span>
                                </div>
                                <div className="flex justify-between text-xs text-slate-400 border-b border-slate-200 dark:border-slate-700 pb-2">
                                    <span>(Based on 1,200 TND / 208 hrs)</span>
                                </div>
                                <div className="pt-2">
                                    <p className="font-bold mb-1">5 hours weekday overtime:</p>
                                    <p className="font-mono text-primary-600">5 hrs × 5.77 × 1.5 = 43.28 TND</p>
                                </div>
                                <div className="pt-2">
                                    <p className="font-bold mb-1">4 hours Sunday work:</p>
                                    <p className="font-mono text-primary-600">4 hrs × 5.77 × 2.0 = 46.16 TND</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                            <h6 className="font-bold text-blue-800 dark:text-blue-300 text-sm">Compensatory Time Off</h6>
                            <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">
                                Instead of pay, you may agree to take time off at the equivalent rate (e.g., 1hr overtime = 1.5hrs off). Must be taken within 3 months.
                            </p>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="allowances">
                <SubSectionHeader>3.3 Allowances & Benefits</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
                    {[
                        {
                            icon: <Utensils size={24} />,
                            title: 'Meal Allowance',
                            value: '5 TND / Day',
                            description: 'Paid monthly via Pluxee card for actual days worked.',
                            color: 'orange'
                        },
                        {
                            icon: <Truck size={24} />,
                            title: 'Transport',
                            value: '200 TND / Mo',
                            description: 'For Responsibles & TLs using personal vehicles.',
                            color: 'blue'
                        },
                        {
                            icon: <Smartphone size={24} />,
                            title: 'Mobile Plan',
                            value: 'Voice & Data',
                            description: 'SS+ SIM card provided for business & reasonable private use.',
                            color: 'indigo'
                        },
                        {
                            icon: <Shirt size={24} />,
                            title: 'Uniforms & PPE',
                            value: 'Full Kit',
                            description: 'Branded vests, shirts, pants & safety shoes provided annually.',
                            color: 'red'
                        }
                    ].map((benefit, i) => (
                        <div key={i} className={`p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-xl relative overflow-hidden group`}>
                            <div className={`absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform duration-500 text-${benefit.color}-500`}>
                                {benefit.icon}
                            </div>
                            <div className="relative z-10">
                                <div className={`p-3 w-fit rounded-2xl bg-${benefit.color}-50 dark:bg-${benefit.color}-900/20 text-${benefit.color}-600 dark:text-${benefit.color}-400 mb-4`}>
                                    {benefit.icon}
                                </div>
                                <h6 className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic mb-1">{benefit.title}</h6>
                                <p className="text-xl font-black text-slate-800 dark:text-slate-100 italic mb-3">{benefit.value}</p>
                                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-8 bg-slate-900 border border-slate-800 rounded-[3rem] shadow-2xl relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent"></div>
                    <h5 className="text-[10px] font-black text-primary-400 uppercase mb-4 tracking-[0.4em] italic relative z-10">Employee Perks & Retention</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        <div className="space-y-2">
                            <h4 className="font-black text-white italic uppercase text-sm">Professional Gear</h4>
                            <p className="text-[11px] text-slate-400">High-quality PPE & tools provided for safety and efficiency.</p>
                        </div>
                        <div className="space-y-2 border-x border-slate-800 px-4">
                            <h4 className="font-black text-white italic uppercase text-sm">Tech Integrated</h4>
                            <p className="text-[11px] text-slate-400">WAVE PLUS access & training for modern workflow management.</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-black text-white italic uppercase text-sm">Team Events</h4>
                            <p className="text-[11px] text-slate-400">Annual celebration and performance recognition awards.</p>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="social-security">
                <SubSectionHeader>3.4 CNSS & Social Security</SubSectionHeader>
                <div className="flex flex-col md:flex-row gap-6 items-start bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-900">
                    <div className="flex-1">
                        <div className="mb-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h5 className="font-bold mb-2">What is CNSS?</h5>
                            <List className="text-sm">
                                <ListItem>Caisse Nationale de Sécurité Sociale</ListItem>
                                <ListItem>Tunisia's mandatory social security system</ListItem>
                                <ListItem>Provides retirement, disability, medical, and family benefits</ListItem>
                                <ListItem>All employees must be registered</ListItem>
                            </List>
                        </div>

                        <Paragraph>
                            SS+ ensures all employees are registered with **CNSS**. This is mandatory for your protection and future.
                        </Paragraph>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <span className="block text-xs uppercase text-slate-500 font-bold">Your Contribution</span>
                                <span className="text-lg font-bold">~9.18%</span>
                            </div>
                            <div>
                                <span className="block text-xs uppercase text-slate-500 font-bold">Company Contribution</span>
                                <span className="text-lg font-bold">~16.57%</span>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800/30">
                            <span className="block text-xs uppercase text-slate-500 font-bold">Total Social Security</span>
                            <span className="text-2xl font-black text-blue-800 dark:text-blue-300">~26% of salary</span>
                        </div>
                    </div>
                    <div className="flex-1 bg-white dark:bg-slate-900 p-5 rounded-xl border border-blue-100 dark:border-blue-800/50 shadow-sm">
                        <h5 className="font-bold mb-3">Your Benefits Include:</h5>
                        <List>
                            <ListItem>**Retirement Pension:** Monthly payments after retirement based on salary history</ListItem>
                            <ListItem>**Medical Coverage:** Basic health coverage through CNSS clinics/hospitals</ListItem>
                            <ListItem>**Work Injury Benefits:** Medical costs and compensation for lost wages</ListItem>
                            <ListItem>**Family Allowances:** Monthly payments for dependent children</ListItem>
                            <ListItem>**Maternity Benefits:** Paid maternity leave (company supplements CNSS payment)</ListItem>
                        </List>
                        <p className="text-xs text-slate-400 mt-3 italic">Admin Manager registers you upon hire. You receive CNSS number - keep for your records.</p>
                    </div>
                </div>
            </SubSection>

            <SubSection id="commission">
                <SubSectionHeader>3.6 Sales Commission</SubSectionHeader>
                <div className="p-4 mb-6 bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-500 rounded-r-xl">
                    <p className="mb-0 text-sm">
                        <span className="font-bold text-purple-700 dark:text-purple-400">CRITICAL RULE:</span> Commissions are paid on **COLLECTED** revenue, not just invoiced sales. This ensures cash flow health.
                    </p>
                </div>

                <h5 className="font-bold text-sm mb-4">Commission Rates (Tiered)</h5>
                <Table>
                    <TableRow isHeader>
                        <TableCell isHeader>Product/Service Category</TableCell>
                        <TableCell isHeader>Rate</TableCell>
                        <TableCell isHeader>Notes</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>**New Fire Equipment** (Extinguishers, Alarms)</TableCell>
                        <TableCell className="text-green-600 font-bold">4%</TableCell>
                        <TableCell>New customers or projects +40k TND</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>**Installation Projects**</TableCell>
                        <TableCell className="text-green-600 font-bold">3%</TableCell>
                        <TableCell>Complex installations</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>**Annual Maintenance Contracts (AMC)**</TableCell>
                        <TableCell className="text-green-600 font-bold">6%</TableCell>
                        <TableCell>Of 1st year value</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>**PPE, Workwear & Signage**</TableCell>
                        <TableCell className="text-green-600 font-bold">3%</TableCell>
                        <TableCell>Standard category</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>**Spare Parts & Consumables**</TableCell>
                        <TableCell className="text-green-600 font-bold">2%</TableCell>
                        <TableCell>Refilling materials, parts</TableCell>
                    </TableRow>
                </Table>

                <div className="mt-6 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h6 className="font-bold mb-3">Commission Payment & Administration</h6>
                    <List className="text-sm">
                        <ListItem><strong>Critical rule:</strong> Commission paid when customer pays (not when sale is made)</ListItem>
                        <ListItem>Monthly commission statement provided by the 10th of the month</ListItem>
                        <ListItem>Commission paid with salary on the 5th of the following month (subject to collection)</ListItem>
                        <ListItem>Clawbacks: If product returned or service cancelled, commissions reversed and recovered from future payments</ListItem>
                        <ListItem>Split sales: If multiple reps contribute, split (e.g. 70/30) — document in WAVE PLUS</ListItem>
                        <ListItem><strong>Discounts:</strong> Sales reps may offer discounts up to <strong>12.5%</strong>; larger discounts require Sales Manager approval and can affect commission</ListItem>
                    </List>
                </div>

                <div className="mt-8">
                    <h5 className="font-bold text-sm mb-4">Calculation Example</h5>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                        <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                            <p className="font-bold text-sm">Sale: 20 Extinguishers (12,000 TND) + Installation (3,000 TND)</p>
                        </div>
                        <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <span className="block text-xs text-slate-500">Equipment Com.</span>
                                <span className="block font-mono text-sm">12,000 × 4% = <span className="font-bold">480 TND</span></span>
                            </div>
                            <div>
                                <span className="block text-xs text-slate-500">Installation Com.</span>
                                <span className="block font-mono text-sm">3,000 × 3% = <span className="font-bold">90 TND</span></span>
                            </div>
                            <div className="sm:text-right">
                                <span className="block text-xs text-slate-500 uppercase font-bold text-green-600">Total Payout</span>
                                <span className="block font-black text-lg">570 TND</span>
                            </div>
                        </div>
                        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 text-[10px] text-slate-500 italic">
                            Paid in the month following customer payment processing.
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

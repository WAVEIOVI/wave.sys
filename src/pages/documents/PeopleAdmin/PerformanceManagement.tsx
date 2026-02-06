import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const appraisalCycleData = [
    { name: 'Q1: Goal Setting', value: 25, color: '#4CAF50', description: 'January: SMART goals agreed' },
    { name: 'Q2: Mid-Year Review', value: 25, color: '#2196F3', description: 'July: Mid-Year Check-in (Course correction)' },
    { name: 'Q3: Progress Check', value: 25, color: '#FF9800', description: 'October: Performance dialogue' },
    { name: 'Q4: Annual Appraisal', value: 25, color: '#DC143C', description: 'December: Final Review & Scoring' }
];

export default function PerformanceManagement() {
    return (
        <Section id="section-6">
            <SectionHeader>SECTION 6: PERFORMANCE MANAGEMENT</SectionHeader>

            <SubSection id="goal-setting">
                <SubSectionHeader>6.1 System Overview</SubSectionHeader>
                <div className="flex flex-col lg:flex-row gap-6 mb-6">
                    <div className="flex-[3]">
                        <Paragraph>
                            Performance management at SS+ is about growth, not just evaluation. It is a continuous cycle of planning, feedback, and recognition.
                        </Paragraph>

                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                            <h5 className="font-bold text-sm mb-6 text-center text-slate-700 dark:text-slate-300 uppercase tracking-wider">Annual Appraisal Cycle</h5>
                            <div className="h-[350px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={appraisalCycleData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={80}
                                            outerRadius={120}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {appraisalCycleData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                                            itemStyle={{ color: '#fff' }}
                                            formatter={(_value, name, props: any) => [props.payload.description, name]}
                                        />
                                        <Legend verticalAlign="bottom" height={36} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-3">Goal Categories</h5>
                        <div className="space-y-3">
                            <div className="p-3 bg-white dark:bg-slate-950 rounded border border-slate-100 dark:border-slate-800 shadow-sm">
                                <strong className="block text-xs font-bold text-slate-700 dark:text-slate-300">1. Performance</strong>
                                <span className="text-[10px] text-slate-500">Key Results (e.g. 800 Services/yr, 30 New Clients)</span>
                            </div>
                            <div className="p-3 bg-white dark:bg-slate-950 rounded border border-slate-100 dark:border-slate-800 shadow-sm">
                                <strong className="block text-xs font-bold text-slate-700 dark:text-slate-300">2. Behavioral</strong>
                                <span className="text-[10px] text-slate-500">How we work (e.g. Teamwork, Punctuality, Ethics)</span>
                            </div>
                            <div className="p-3 bg-white dark:bg-slate-950 rounded border border-slate-100 dark:border-slate-800 shadow-sm">
                                <strong className="block text-xs font-bold text-slate-700 dark:text-slate-300">3. Development</strong>
                                <span className="text-[10px] text-slate-500">Growth (e.g. Get Verification Cert, Learn CRM)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="performance-review">
                <SubSectionHeader>6.2 Rating Scale</SubSectionHeader>
                <Paragraph className="mb-4">
                    We use a 5-point scale to evaluate performance. Ratings directly impact merit increases.
                </Paragraph>
                    <Table>
                        <TableRow isHeader>
                            <TableCell>Rating</TableCell>
                            <TableCell>Definition</TableCell>
                            <TableCell>Distribution</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>5 - Exceptional</TableCell>
                            <TableCell>Consistently exceeds ALL goals. Role model.</TableCell>
                            <TableCell>Top 5-10%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>4 - Exceeds</TableCell>
                            <TableCell>Regularly exceeds most goals. High quality.</TableCell>
                            <TableCell>20-30%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>3 - Meets</TableCell>
                            <TableCell>Solid performance. Meets all standards.</TableCell>
                            <TableCell>50-60%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2 - Needs Imp.</TableCell>
                            <TableCell>Inconsistent performance. Gaps exist.</TableCell>
                            <TableCell>10-15%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>1 - Unsatisfactory</TableCell>
                            <TableCell>Fails to meet basic requirements. PIP required.</TableCell>
                            <TableCell>&lt; 5%</TableCell>
                        </TableRow>
                    </Table>
            </SubSection>

            <SubSection id="promotion-criteria">
                <SubSectionHeader>6.3 Evaluation Methodology</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h5 className="font-bold text-sm mb-3">Core Criteria (All Staff)</h5>
                        <List className="text-xs">
                            <ListItem>Goal Achievement: Quality/Quantity of output against targets.</ListItem>
                            <ListItem>Job Knowledge: Technical competence and skill application.</ListItem>
                            <ListItem>Quality: Accuracy, thoroughness, minimal error rate.</ListItem>
                            <ListItem>Efficiency: Time management and resource use.</ListItem>
                            <ListItem>Teamwork: Collaboration and support of colleagues.</ListItem>
                            <ListItem>Communication: Clear, professional, responsive.</ListItem>
                        </List>
                    </div>
                    <div>
                        <h5 className="font-bold text-sm mb-3">Additional Factors</h5>
                        <List className="text-xs">
                            <ListItem>Customer Focus: (For client-facing) Satisfaction, rapport, dispute resolution.</ListItem>
                            <ListItem>Safety & Compliance: Adherence to safety protocols and PPE use.</ListItem>
                            <ListItem>Attendance: Reliability and punctuality records.</ListItem>
                            <ListItem>Initiative: Problem solving and proactivity.</ListItem>
                        </List>
                        <Blockquote type="info">
                            Process: Self-Evaluation (Week 1) → Responsible Assessment (Week 2) → Review Meeting (Week 3) → Sign-off.
                        </Blockquote>
                    </div>
                </div>
            </SubSection>

            <SubSection id="pip-process">
                <SubSectionHeader>6.4 Performance Improvement Plan (PIP)</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-2 text-red-700 dark:text-red-400">Trigger Conditions</h5>
                        <List className="text-xs">
                            <ListItem>Rating: "Needs Improvement" or "Unsatisfactory".</ListItem>
                            <ListItem>Behavior: Repeated policy violations or safety breaches.</ListItem>
                            <ListItem>Outcome: Formal 30-90 day improvement plan.</ListItem>
                        </List>
                    </div>
                    <div>
                         <h5 className="font-bold text-sm mb-2">PIP Steps</h5>
                         <List className="text-xs">
                            <ListItem>1. Identify Gap: Specific examples of deficiency.</ListItem>
                            <ListItem>2. Action Plan: SMART goals for improvement.</ListItem>
                            <ListItem>3. Support: Weekly coaching/check-ins.</ListItem>
                            <ListItem>4. Review: Final decision (Release, Extend, or Terminate).</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="recognition">
                <SubSectionHeader>6.5 Recognition & Rewards</SubSectionHeader>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-3 text-yellow-800 dark:text-yellow-500">🏆 Awards</h5>
                        <List className="text-xs">
                            <ListItem>Employee of the Month: Certificate + Bonus (100-200 TND).</ListItem>
                            <ListItem>Annual Awards: Top Performer, Service Champion, Safety Hero.</ListItem>
                            <ListItem>Service Milestones: 5, 10, 15 Year Bonuses.</ListItem>
                        </List>
                    </div>
                    <div className="flex-1">
                        <h5 className="font-bold text-sm mb-3">Informal Recognition</h5>
                         <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                            Immediate appreciation is key to our culture.
                        </p>
                        <List className="text-xs">
                            <ListItem>Spot Bonuses: For exceptional "above & beyond" effort (100-500 TND).</ListItem>
                            <ListItem>Team Celebrations: Lunches/outings for project milestones.</ListItem>
                            <ListItem>Public Praise: Acknowledgement in team meetings.</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

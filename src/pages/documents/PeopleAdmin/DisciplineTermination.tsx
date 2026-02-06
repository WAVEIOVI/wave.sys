import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';

export default function DisciplineTermination() {
    return (
        <Section id="section-8">
            <SectionHeader>SECTION 8: DISCIPLINE & TERMINATION</SectionHeader>

            <SubSection id="code-of-conduct">
                <SubSectionHeader>8.1 Code of Conduct</SubSectionHeader>
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 mb-6">
                    <h5 className="font-bold text-sm mb-3 text-center uppercase tracking-wide text-slate-600 dark:text-slate-400">Core Expectations</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="font-bold text-slate-800 dark:text-slate-200 mb-1">Professionalism</div>
                            <p className="text-xs text-slate-500">Represent SS+ with dignity. Avoid conflicts of interest.</p>
                        </div>
                        <div>
                            <div className="font-bold text-slate-800 dark:text-slate-200 mb-1">Integrity</div>
                            <p className="text-xs text-slate-500">Honesty in all dealings. Zero tolerance for fraud.</p>
                        </div>
                        <div>
                            <div className="font-bold text-slate-800 dark:text-slate-200 mb-1">Respect</div>
                            <p className="text-xs text-slate-500">No harassment or discrimination. Value colleagues.</p>
                        </div>
                    </div>
                </div>
            </SubSection>



            <SubSection id="common-infractions">
                <SubSectionHeader>8.2 Common Disciplinary Issues</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <strong className="block text-sm mb-2 text-slate-700 dark:text-slate-300">Minor Infractions</strong>
                        <p className="text-[10px] text-slate-500 mb-2">Typically Verbal Coaching.</p>
                        <List className="text-[10px]">
                            <ListItem>Occasional Tardiness.</ListItem>
                            <ListItem>Minor Uniform issues.</ListItem>
                            <ListItem>Phone use during work.</ListItem>
                        </List>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <strong className="block text-sm mb-2 text-orange-600 dark:text-orange-400">Moderate Infractions</strong>
                        <p className="text-[10px] text-slate-500 mb-2">Written Warning.</p>
                        <List className="text-[10px]">
                             <ListItem>Unauthorized Absence (1 day).</ListItem>
                             <ListItem>Safety Negligence (No injury).</ListItem>
                             <ListItem>Disrespect to colleagues.</ListItem>
                        </List>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <strong className="block text-sm mb-2 text-red-600 dark:text-red-400">Serious Infractions</strong>
                        <p className="text-[10px] text-slate-500 mb-2">Final Warning or Suspension.</p>
                        <List className="text-[10px]">
                             <ListItem>Verbal Abuse / Threats.</ListItem>
                             <ListItem>Reckless Driving.</ListItem>
                             <ListItem>Insubordination.</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="progressive-discipline">
                <SubSectionHeader>8.3 Progressive Discipline Process</SubSectionHeader>
                <Paragraph className="mb-4">
                    Our goal is correction, not punishment. We follow a fair, graduated process for behavioral or performance issues (excluding gross misconduct).
                </Paragraph>

                <div className="space-y-4 mb-8">
                    <div className="flex gap-4 p-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm shrink-0">1</div>
                        <div>
                            <h6 className="font-bold text-sm">Verbal Coaching (Informal)</h6>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Private discussion to clarify expectations. Documented in manager's notes.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950">
                        <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 font-bold flex items-center justify-center text-sm shrink-0">2</div>
                        <div>
                            <h6 className="font-bold text-sm">Verbal Warning (Formal)</h6>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Formal meeting. Explicit statement of consequences. Documented in personnel file.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950">
                        <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 font-bold flex items-center justify-center text-sm shrink-0">3</div>
                        <div>
                            <h6 className="font-bold text-sm">Written Warning</h6>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Serious status. Formal letter signed by employee. Improvement plan (PIP) typically attached.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950">
                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center text-sm shrink-0">4</div>
                        <div>
                            <h6 className="font-bold text-sm">Final Warning / Suspension</h6>
                            <p className="text-xs text-slate-600 dark:text-slate-400">"Last chance" status. May include 1-3 days unpaid suspension.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-3 border border-red-200 dark:border-red-900/30 rounded-lg bg-red-50 dark:bg-red-900/10">
                        <div className="w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm shrink-0">5</div>
                        <div>
                            <h6 className="font-bold text-sm text-red-700 dark:text-red-400">Termination</h6>
                            <p className="text-xs text-red-800/70 dark:text-red-300/70">Employment ending due to failure to improve.</p>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="serious-misconduct">
                <SubSectionHeader>8.4 Gross Misconduct (Immediate Action)</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Paragraph>
                            Certain actions breach trust so fundamentally that they bypass progressive discipline and may result in Immediate Termination (without notice).
                        </Paragraph>
                        <h5 className="font-bold text-sm mt-3 mb-2">Examples:</h5>
                        <List className="text-xs">
                            <ListItem>Theft/Fraud: Stealing company/client property or falsifying records.</ListItem>
                            <ListItem>Violence: Physical assault, threats, or harassment.</ListItem>
                            <ListItem>Safety Breach: Recklessness causing serious danger or injury.</ListItem>
                            <ListItem>Intoxication: Working under influence of alcohol/drugs.</ListItem>
                            <ListItem>Confidentiality: Leaking client data or trade secrets.</ListItem>
                        </List>
                    </div>
                    <div>
                        <Blockquote type="danger" title="Process">
                            1. Suspension: Employee removed immediately (paid) pending investigation.
                            <br />2. Investigation: Facts gathered and interview conducted.
                            <br />3. Decision: If confirmed, termination is effective immediately.
                        </Blockquote>
                    </div>
                </div>
            </SubSection>

            <SubSection id="termination-process">
                <SubSectionHeader>8.5 Termination Process & Notice Periods</SubSectionHeader>
                <Paragraph className="mb-4">
                    CDI (permanent) contracts: Either party may terminate with notice. Notice periods per Tunisian labor code:
                </Paragraph>
                <div className="overflow-x-auto mb-6">
                    <Table>
                        <TableRow isHeader>
                            <TableCell isHeader>Party</TableCell>
                            <TableCell isHeader>Notice Period</TableCell>
                        </TableRow>
                        <TableRow><TableCell><strong>Employee</strong></TableCell><TableCell>1 month</TableCell></TableRow>
                        <TableRow><TableCell><strong>Employer</strong></TableCell><TableCell>Per labor code based on seniority (1-3 months)</TableCell></TableRow>
                        <TableRow><TableCell><strong>During probation</strong></TableCell><TableCell>1 week by either party</TableCell></TableRow>
                        <TableRow><TableCell><strong>Serious misconduct</strong></TableCell><TableCell>Immediate termination (no notice)</TableCell></TableRow>
                    </Table>
                </div>
                <h5 className="font-bold text-sm mb-2">Termination Process (With Notice)</h5>
                <List className="text-xs space-y-1 mb-6">
                    <ListItem>Meeting with employee (explain decision, provide feedback)</ListItem>
                    <ListItem>Written termination letter</ListItem>
                    <ListItem>Final pay: salary + unused leave + 13th month prorated</ListItem>
                    <ListItem>Return company property</ListItem>
                    <ListItem>Exit interview</ListItem>
                </List>
            </SubSection>

            <SubSection id="end-of-service">
                <SubSectionHeader>8.6 End-of-Service Benefits</SubSectionHeader>
                <List className="text-xs space-y-2">
                    <ListItem><strong>Final pay:</strong> Salary for notice period (or payment in lieu) + unused annual leave paid out + 13th month salary prorated</ListItem>
                    <ListItem><strong>CNSS:</strong> Certificate of employment and CNSS attestation for new employer</ListItem>
                    <ListItem><strong>Severance:</strong> Per Tunisian labor code (length of service, contract type)</ListItem>
                    <ListItem><strong>Company property:</strong> All equipment, keys, documents returned before final settlement</ListItem>
                </List>
            </SubSection>
        </Section>
    );
}

import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';

export default function TrainingDevelopment() {
    return (
        <Section id="section-5">
            <SectionHeader>SECTION 5: TRAINING & DEVELOPMENT</SectionHeader>

            <SubSection id="onboarding-programs">
                <SubSectionHeader>5.1 New Employee Onboarding</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-2 text-indigo-700 dark:text-indigo-400">Technician (12 Weeks)</h5>
                        <List className="text-xs">
                            <ListItem>Weeks 1-4: Safety, Inspections (Extinguishers), Shadowing TL.</ListItem>
                            <ListItem>Weeks 5-8: Refilling (Powder, CO2, Foam), Workshop operations.</ListItem>
                            <ListItem>Weeks 9-12: Independent work (supervised), Performance Review.</ListItem>
                            <ListItem>Goal: Fully competent in Routine Maintenance.</ListItem>
                        </List>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-2 text-emerald-700 dark:text-emerald-400">Sales Representative (8 Weeks)</h5>
                        <List className="text-xs">
                            <ListItem>Weeks 1-2: Product Knowledge (Fire Class A-F), Pricing, CRM.</ListItem>
                            <ListItem>Weeks 3-4: Sales Process, Quotation Tools, Shadowing.</ListItem>
                            <ListItem>Weeks 5-8: Solo site surveys, Joint calls, Target setting.</ListItem>
                            <ListItem>Goal: Independent Quotation & Closing.</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="technical-training">
                <SubSectionHeader>5.2 Fire Safety Certification</SubSectionHeader>
                <Paragraph className="mb-4">
                    All technicians must obtain the professional Fire Safety Certification (Attestation de Compétence) within 24 months of hiring.
                </Paragraph>
                <div className="flex flex-col sm:flex-row gap-4 mb-6 text-xs bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                    <div className="flex-1">
                        <strong className="block text-blue-800 dark:text-blue-300 mb-1">Company Sponsorship</strong>
                        SS+ pays for training and exam fees (~1,500 TND). In return, the employee commits to 2 years of service.
                    </div>
                    <div className="flex-1">
                        <strong className="block text-blue-800 dark:text-blue-300 mb-1">Salary Impact</strong>
                        Certified technicians are eligible for a salary increase (+100-150 TND/month) and promotion to Senior Technician.
                    </div>
                </div>
            </SubSection>

            <SubSection id="safety-training">
                <SubSectionHeader>5.3 Safety Training (Mandatory)</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h5 className="font-bold text-sm mb-2">Required Modules</h5>
                        <List className="text-xs">
                            <ListItem>Day 1: Workplace Hazards, PPE, Emergency Evacuation.</ListItem>
                            <ListItem>Technicians: Chemical Handling (Powder/CO2), Pressure Vessel Safety.</ListItem>
                            <ListItem>Drivers: Defensive Driving refresher (Annual).</ListItem>
                            <ListItem>Annual Refresher: Every January (Updates & Drills).</ListItem>
                        </List>
                    </div>
                    <div>
                        <Blockquote type="warning" title="Non-Negotiable">
                            Failure to attend mandatory safety training or violate safety rules (e.g. not wearing PPE) is grounds for immediate disciplinary action.
                        </Blockquote>
                    </div>
                </div>
            </SubSection>

            <SubSection id="sales-training">
                <SubSectionHeader>5.4 Sales & Customer Service</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <h5 className="font-bold text-sm mb-2">Sales Development</h5>
                        <List className="text-xs">
                            <ListItem>Monthly Meetings: Performance review, Role-play, Market intel.</ListItem>
                            <ListItem>Quarterly Workshops: Negotiation, Needs Analysis, Proposal Writing.</ListItem>
                            <ListItem>Product Training: Updates on new equipment and regulations.</ListItem>
                        </List>
                    </div>
                    <div>
                        <h5 className="font-bold text-sm mb-2">Customer Service (All Staff)</h5>
                        <List className="text-xs">
                            <ListItem>Core Skills: Professional communication, Active listening.</ListItem>
                            <ListItem>Conflict: De-escalating disputes, Building trust.</ListItem>
                            <ListItem>Brand: Representing SS+ values on-site.</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="management-development">
                <SubSectionHeader>5.5 Management Development</SubSectionHeader>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl mb-6">
                    <h5 className="font-bold text-sm mb-3">Leadership Training (TLs & Responsibles)</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                            <strong className="block text-slate-700 dark:text-slate-300">People Management</strong>
                            <p className="text-slate-500">Delegation, Feedback, Coaching, Conflict Resolution.</p>
                        </div>
                        <div>
                            <strong className="block text-slate-700 dark:text-slate-300">Operations Management</strong>
                            <p className="text-slate-500">Planning, QA, Problem Solving, Time Mgmt.</p>
                        </div>
                        <div>
                            <strong className="block text-slate-700 dark:text-slate-300">Communication</strong>
                            <p className="text-slate-500">Facilitating meetings, Clear direction, Reporting.</p>
                        </div>
                        <div>
                            <strong className="block text-slate-700 dark:text-slate-300">Compliance</strong>
                            <p className="text-slate-500">Labor Law basics, Documentation, Disciplinary process.</p>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="training-records">
                <SubSectionHeader>5.6 Competency Matrix</SubSectionHeader>
                    <Table>
                        <TableRow isHeader>
                            <TableCell>Skill Area</TableCell>
                            <TableCell>Basic (1)</TableCell>
                            <TableCell>Competent (2)</TableCell>
                            <TableCell>Expert (3)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Inspection</TableCell>
                            <TableCell>Can clean & check pressure</TableCell>
                            <TableCell>Full 20-point inspection</TableCell>
                            <TableCell>Diagnose hidden faults</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Refilling</TableCell>
                            <TableCell>Assistant (Disassembly)</TableCell>
                            <TableCell>Indep. Powder/CO2 Fill</TableCell>
                            <TableCell>Complex Overhaul</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Documentation</TableCell>
                            <TableCell>Paper forms</TableCell>
                            <TableCell>WAVE PLUS Mobile App</TableCell>
                            <TableCell>Audit Reports</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Customer Svc</TableCell>
                            <TableCell>Polite greeting</TableCell>
                            <TableCell>Explains work clearly</TableCell>
                            <TableCell>De-escalates disputes</TableCell>
                        </TableRow>
                    </Table>
                <p className="text-[10px] text-slate-500 mt-2 text-center">
                    *Skills are assessed quarterly by Team Leaders to plan training needs.*
                </p>
            </SubSection>
        </Section>
    );
}

import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';

import Blockquote from '../../../components/document-elements/Blockquote';

export default function AdministrativeProcesses() {
    return (
        <Section id="section-11">
            <SectionHeader>SECTION 11: ADMINISTRATIVE PROCESSES</SectionHeader>

            <SubSection id="personnel-files">
                <SubSectionHeader>11.1 Personnel Files</SubSectionHeader>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                        <h5 className="font-bold text-sm mb-2">Required Content</h5>
                        <List className="text-xs">
                            <ListItem>A. Employment Contract & Job Description</ListItem>
                            <ListItem>B. ID (CIN), Photos, Certificates (Copies)</ListItem>
                            <ListItem>C. CNSS & Tax documents</ListItem>
                            <ListItem>D. Performance Reviews & Training Records</ListItem>
                            <ListItem>E. Leave requests & Medical certificates</ListItem>
                        </List>
                        <p className="text-[10px] text-slate-500 mt-2">*Files are confidential and stored securely by Admin Responsible.*</p>
                    </div>
                    <div className="flex-1">
                        <h5 className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-200">Retention Policy</h5>
                        <Paragraph>
                            Employee files are retained for 10 Years after separation to comply with CNSS and Labor Law requirements.
                        </Paragraph>
                        <Blockquote type="note" title="Access">
                            Employees may request to view their own file in the presence of the Admin Responsible.
                        </Blockquote>
                    </div>
                </div>
            </SubSection>

            <SubSection id="payroll-admin">
                <SubSectionHeader>11.2 Payroll Administration</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <strong className="block text-sm mb-2 text-slate-700 dark:text-slate-300">Monthly Cycle</strong>
                        <List className="text-xs">
                            <ListItem>25th-30th: Collect timesheets & commission data.</ListItem>
                            <ListItem>1st-3rd: Process calculations (Gross to Net).</ListItem>
                            <ListItem>5th: Bank transfer & Payslip distribution.</ListItem>
                        </List>
                    </div>
                    <div>
                        <strong className="block text-sm mb-2 text-slate-700 dark:text-slate-300">Admin Responsibility</strong>
                        <List className="text-xs">
                            <ListItem>Maintain Payroll Register (10 Years).</ListItem>
                            <ListItem>File tax withholding records.</ListItem>
                            <ListItem>Verify CNSS deductions.</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="cnss-compliance">
                <SubSectionHeader>11.3 & 11.4 Regulatory Compliance</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 border border-blue-200 dark:border-blue-800 rounded-xl bg-blue-50 dark:bg-blue-900/10">
                        <h5 className="font-bold text-sm mb-2 text-blue-800 dark:text-blue-300">CNSS Obligations</h5>
                        <List className="text-xs">
                            <ListItem>Declaration: Monthly by the 15th.</ListItem>
                            <ListItem>New Hires: Registered within 30 days.</ListItem>
                            <ListItem>Work Injury: Declared within 48 hours.</ListItem>
                        </List>
                    </div>
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                        <h5 className="font-bold text-sm mb-2 text-slate-800 dark:text-slate-200">Labor Inspectorate</h5>
                        <List className="text-xs">
                            <ListItem>Documents: Contracts, Payroll, Schedule available for inspection.</ListItem>
                            <ListItem>Postings: Schedule, Regulation Summary displayed.</ListItem>
                            <ListItem>Visits: Full cooperation required.</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="internal-regulations">
                <SubSectionHeader>11.5 Internal Regulations (Règlement Intérieur)</SubSectionHeader>
                <Paragraph>
                    The *Règlement Intérieur* is the legally binding document governing workplace rules. It is submitted to and approved by the Labor Inspectorate.
                </Paragraph>
                <div className="flex items-center gap-4 text-xs mt-4 p-3 border border-emerald-200 dark:border-emerald-900 rounded-lg bg-emerald-50 dark:bg-emerald-900/10 text-emerald-800 dark:text-emerald-300">
                    <span className="text-lg">⚖️</span>
                    <div>
                        <strong>Status:</strong> This handbook serves as the basis for the *Règlement Intérieur*. All employees must sign an acknowledgment of these rules.
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

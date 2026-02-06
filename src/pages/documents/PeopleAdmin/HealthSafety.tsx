import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';

export default function HealthSafety() {
    return (
        <Section id="section-12">
            <SectionHeader>SECTION 12: HEALTH, SAFETY & WELLBEING</SectionHeader>

            <SubSection id="workplace-safety">
                <SubSectionHeader>12.1 Workplace Safety Program</SubSectionHeader>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex-1">
                        <Paragraph>
                            Safety {">"} Productivity. No job is worth an injury. We are committed to a zero-harm environment.
                        </Paragraph>
                        <h5 className="font-bold text-sm mt-4 mb-2">Key Rules:</h5>
                        <List className="text-xs">
                            <ListItem>PPE: Mandatory safety shoes/glasses/gloves as required.</ListItem>
                            <ListItem>Chemicals: Follow SDS instructions for Powder/CO2.</ListItem>
                            <ListItem>Height: Fall protection required {">"}2m.</ListItem>
                            <ListItem>Stop Work: Right to refuse unsafe work.</ListItem>
                        </List>
                    </div>
                    <div className="flex-1 p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-2 text-red-700 dark:text-red-400">Emergency Protocol (Injury)</h5>
                        <div className="space-y-2 text-xs">
                            <div className="flex gap-2">
                                <span className="font-bold">1. Care:</span> Focus on injured person. Call 190 if serious.
                            </div>
                            <div className="flex gap-2">
                                <span className="font-bold">2. Secure:</span> Stop equipment, block area.
                            </div>
                            <div className="flex gap-2">
                                <span className="font-bold">3. Notify:</span> Call Team Leader immediately.
                            </div>
                            <div className="flex gap-2">
                                <span className="font-bold">4. Report:</span> Written report within 24 hours.
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="work-injuries">
                <SubSectionHeader>12.2 Incident Reporting</SubSectionHeader>
                <Paragraph className="mb-4">
                    Report ALL incidents, including "Near Misses" (events that *could* have caused injury). We have a No Blame culture for honest reporting.
                </Paragraph>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                        <strong className="block text-xs font-bold mb-1">Investigation Process</strong>
                        <p className="text-[10px] text-slate-500">
                            Root Cause Analysis (Why did it happen?) → Corrective Action (Fix system) → Share Learning (Prevent recurrence).
                        </p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                        <strong className="block text-xs font-bold mb-1">CNSS Compliance</strong>
                        <p className="text-[10px] text-slate-500">
                            Work-related injuries must be declared to CNSS within 48 hours to ensure medical coverage.
                        </p>
                    </div>
                </div>
            </SubSection>

            <SubSection id="cnss-claims">
                <SubSectionHeader>12.3 Work-Related Injuries (CNSS Processes)</SubSectionHeader>
                <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
                    <h5 className="font-bold text-sm mb-3 text-blue-800 dark:text-blue-300">Detailed Claims Process</h5>
                    <div className="space-y-3">
                        <div className="flex gap-3 text-xs">
                            <span className="font-bold min-w-[60px]">Step 1:</span>
                            <span className="text-slate-600 dark:text-slate-400">Immediate Medical Care (First Aid or Hospital).</span>
                        </div>
                        <div className="flex gap-3 text-xs">
                            <span className="font-bold min-w-[60px]">Step 2:</span>
                            <span className="text-slate-600 dark:text-slate-400">CNSS Declaration by Admin (Within 48h).</span>
                        </div>
                        <div className="flex gap-3 text-xs">
                            <span className="font-bold min-w-[60px]">Step 3:</span>
                            <span className="text-slate-600 dark:text-slate-400">Employee submits Medical Certificate & Witness statements.</span>
                        </div>
                        <div className="flex gap-3 text-xs">
                            <span className="font-bold min-w-[60px]">Step 4:</span>
                            <span className="text-slate-600 dark:text-slate-400">CNSS covers costs & pays Work Incapacity Benefits.</span>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="health-wellness">
                <SubSectionHeader>12.4 Health & Wellness</SubSectionHeader>
                <List className="text-xs">
                    <ListItem>Usage of Leave: Employees are expected to take their annual leave to prevent burnout.</ListItem>
                    <ListItem>Mental Health: Open conversations about stress are encouraged. Support is available.</ListItem>
                    <ListItem>Ramadan: Flexible scheduling and support during fasting periods.</ListItem>
                </List>
            </SubSection>
        </Section>
    );
}

import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Blockquote from '../../../components/document-elements/Blockquote';

export default function WorkplacePolicies() {
    return (
        <Section id="section-9">
            <SectionHeader>SECTION 9: WORKPLACE POLICIES</SectionHeader>

            <SubSection id="workplace-hours">
                <SubSectionHeader>9.1 Working Hours Summary</SubSectionHeader>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                        <h5 className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-300">Standard Schedule</h5>
                        <List className="text-xs">
                            <ListItem>Total: 48 Hours / Week</ListItem>
                            <ListItem>Mon-Fri: 08:00 - 17:00 (1h Lunch)</ListItem>
                            <ListItem>Saturday: 08:00 - 14:30</ListItem>
                        </List>
                        <p className="text-[10px] text-slate-500 mt-2">*See Section 7.1 for detailed Attendance Policy.*</p>
                    </div>
                </div>
            </SubSection>

            <SubSection id="dress-code">
                <SubSectionHeader>9.2 Dress Code & Uniforms</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-2 text-blue-800 dark:text-blue-300">Technical Staff</h5>
                        <List className="text-xs">
                            <ListItem>Provided: SS+ Polo/Shirt, Safety Shoes.</ListItem>
                            <ListItem>Required: Clean dark trousers, visible ID badge.</ListItem>
                            <ListItem>PPE: Hard hat/vest when required by site.</ListItem>
                            <ListItem>Grooming: Clean, facial hair trimmed, long hair tied back.</ListItem>
                        </List>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-2">Office & Sales</h5>
                        <List className="text-xs">
                            <ListItem>Office: Business Casual (Collared shirt, professional dress).</ListItem>
                            <ListItem>Sales: Business Professional (Shirt/Trousers) for meetings.</ListItem>
                            <ListItem>Forbidden: Shorts, sandals, offensive logos, ripped clothing.</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="technology-use">
                <SubSectionHeader>9.3 Mobile & Technology Use</SubSectionHeader>
                <Paragraph>
                    Company devices are tools for productivity. Personal use should be minimal and reasonable.
                </Paragraph>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <Blockquote type="warning" title="Prohibited">
                        <List className="text-xs ml-0 pl-4">
                            <ListItem>Social media/Gaming during work hours.</ListItem>
                            <ListItem>Phone use while driving (unless hands-free).</ListItem>
                            <ListItem>Accessing illegal or inappropriate content.</ListItem>
                        </List>
                    </Blockquote>
                    <Blockquote type="info" title="Social Media">
                        <List className="text-xs ml-0 pl-4">
                            <ListItem>Do: Share positive company news, congratulate team.</ListItem>
                            <ListItem>Don't: Share client data, vent frustrations, or speak "on behalf" of SS+ without auth.</ListItem>
                        </List>
                    </Blockquote>
                </div>
            </SubSection>

            <SubSection id="social-media">
                <SubSectionHeader>9.4 Social Media Policy</SubSectionHeader>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex-1">
                        <strong className="block text-sm mb-2 text-slate-700 dark:text-slate-300">Personal Use</strong>
                        <List className="text-xs">
                            <ListItem>Disclaimer: "Opinions are my own" on professional profiles.</ListItem>
                            <ListItem>Confidentiality: Never share client names or proprietary info.</ListItem>
                            <ListItem>Conduct: Avoid disparaging company, colleagues, or competitors.</ListItem>
                        </List>
                    </div>
                    <div className="flex-1">
                        <strong className="block text-sm mb-2 text-emerald-600 dark:text-emerald-400">Positive Engagement</strong>
                        <List className="text-xs">
                            <ListItem>Encouraged: Sharing public company news/wins.</ListItem>
                            <ListItem>Brand Ambassadors: Celebrating team achievements.</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="substance-abuse">
                <SubSectionHeader>9.5 Smoking & Substance Policy</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <Blockquote type="danger" title="Zero Tolerance">
                        Possession or influence of Alcohol/Drugs at work is gross misconduct (Immediate Termination).
                    </Blockquote>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-2">Smoking (Strictly Enforced)</h5>
                        <List className="text-xs">
                            <ListItem>Prohibited: Inside ALL buildings and vehicles.</ListItem>
                            <ListItem>Permitted: Designated outdoor areas during breaks only.</ListItem>
                            <ListItem>Uniform: No smoking while wearing uniform in public view.</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="vehicle-policy">
                <SubSectionHeader>9.6 Vehicle Use Policy</SubSectionHeader>
                <Paragraph className="text-xs mb-3">
                    Assigned vehicles are for business use only (plus authorized commuting for TLs).
                </Paragraph>
                <div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
                    <div className="grid grid-cols-3 bg-slate-100 dark:bg-slate-900 font-bold p-2 border-b border-slate-200 dark:border-slate-800">
                        <div>Responsibilities</div>
                        <div>Prohibitions</div>
                        <div>Accidents</div>
                    </div>
                    <div className="grid grid-cols-3 p-2 bg-white dark:bg-slate-950">
                        <div className="pr-2">
                            • Valid License<br />
                            • Daily Inspection<br />
                            • Cleanliness<br />
                            • Maintenance Log
                        </div>
                        <div className="pr-2 border-l border-slate-100 dark:border-slate-800 pl-2">
                            • No personal trips<br />
                            • No unauthorized passengers<br />
                            • No smoking in vehicle<br />
                            • No alcohol/drugs
                        </div>
                        <div className="pl-2 border-l border-slate-100 dark:border-slate-800">
                            • Notify Responsible (1h)<br />
                            • Do NOT admit fault<br />
                            • Photos of scene<br />
                            • Submit Report (24h)
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="confidentiality">
                <SubSectionHeader>9.7 Confidentiality & Non-Compete</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h5 className="font-bold text-sm mb-3">Confidential Information</h5>
                        <Paragraph className="mb-2">
                             Employees must protect company and client data indefinitely.
                        </Paragraph>
                        <List className="text-xs">
                            <ListItem>Protected: Client lists, pricing, technical drawings, employee data.</ListItem>
                            <ListItem>Action: Secure documents, return all data upon exit.</ListItem>
                            <ListItem>Violation: Legal action + Termination.</ListItem>
                        </List>
                    </div>
                    <div>
                        <h5 className="font-bold text-sm mb-3">Non-Solicitation / Non-Compete</h5>
                        <div className="p-3 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-lg text-xs">
                            <strong className="block mb-1 text-amber-800 dark:text-amber-500">Post-Employment Restrictions</strong>
                            <ul className="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-400">
                                <li><strong>Non-Compete:</strong> 6-12 months (Key Roles). Cannot work for direct competitors in Sfax/Tunis.</li>
                                <li><strong>Non-Solicitation:</strong> 12-24 months. Cannot poach SS+ clients or employees.</li>
                                <li><strong>IP Rights:</strong> All work product belongs to SS+.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';

import Blockquote from '../../../components/document-elements/Blockquote';

export default function EmployeeRelations() {
    return (
        <Section id="section-10">
            <SectionHeader>SECTION 10: EMPLOYEE RELATIONS</SectionHeader>

            <SubSection id="communication-channels">
                <SubSectionHeader>10.1 Communication & Meetings</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                        <strong className="block text-sm mb-1 text-slate-800 dark:text-slate-200">Team Meetings</strong>
                        <span className="text-xs text-slate-500 block mb-2">Weekly (Friday PM)</span>
                        <p className="text-[10px] leading-relaxed">Review week's work, address issues, plan next week schedule. Led by Ops Responsible.</p>
                    </div>
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                        <strong className="block text-sm mb-1 text-slate-800 dark:text-slate-200">Town Hall</strong>
                        <span className="text-xs text-slate-500 block mb-2">Quarterly</span>
                        <p className="text-[10px] leading-relaxed">All-staff meeting. Company performance updates, strategy, and major announcements.</p>
                    </div>
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                        <strong className="block text-sm mb-1 text-slate-800 dark:text-slate-200">1-on-1s</strong>
                        <span className="text-xs text-slate-500 block mb-2">Monthly</span>
                        <p className="text-[10px] leading-relaxed">Private check-in with Responsible. Focus on development, feedback, and well-being.</p>
                    </div>
                </div>
                <Blockquote type="important" title="Open Door Policy">
                    Management is accessible. Employees are encouraged to discuss concerns directly with their Responsible or escalate if needed.
                </Blockquote>
            </SubSection>

            <SubSection id="grievance-procedure">
                <SubSectionHeader>10.3 Grievance Procedure</SubSectionHeader>
                <Paragraph className="mb-4">
                    If an informal resolution fails, employees can file a formal grievance for serious issues (harassment, unsafe conditions, policy violations).
                </Paragraph>

                <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-4 text-xs bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                        <span className="flex-none font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-300">Step 1</span>
                        <div>Submit written grievance to Admin Responsible (include details, dates, witnesses).</div>
                    </div>
                    <div className="flex items-center gap-4 text-xs bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                        <span className="flex-none font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-300">Step 2</span>
                        <div>Acknowledgment within 2 days. Investigation starts (interviews & fact-finding).</div>
                    </div>
                    <div className="flex items-center gap-4 text-xs bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                        <span className="flex-none font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-300">Step 3</span>
                        <div>Decision issued within 14 days. Corrective action taken if upheld. Appeal to Manager is possible.</div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="recognition-programs">
                <SubSectionHeader>10.4 Employee Recognition</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <strong className="block text-xs font-bold mb-1">Formal Awards</strong>
                        <List className="text-[10px]">
                            <ListItem>Employee of the Month: Monthly winner.</ListItem>
                            <ListItem>Service Milestones: 5, 10, 15 Year pins.</ListItem>
                            <ListItem>Annual Awards: Top Performer, Values Champion.</ListItem>
                        </List>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                         <strong className="block text-xs font-bold mb-1">Informal Recognition</strong>
                         <List className="text-[10px]">
                            <ListItem>Spot Bonus: Immediate reward for excellence.</ListItem>
                            <ListItem>Public Praise: Town Hall mentions.</ListItem>
                            <ListItem>Thank You Notes: Personalized appreciation.</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="team-events">
                <SubSectionHeader>10.5 Team Events</SubSectionHeader>
                <List className="text-xs grid grid-cols-1 md:grid-cols-2 gap-2">
                    <ListItem>Year-End Party: Annual dinner celebrating milestones & awards (Dec).</ListItem>
                    <ListItem>Iftar Gathering: Team meal during Ramadan.</ListItem>
                    <ListItem>Team Celebrations: Small events for project wins or safety goals.</ListItem>
                    <ListItem>Personal Milestones: Recognition for marriage, birth, certifications.</ListItem>
                </List>
            </SubSection>
        </Section>
    );
}

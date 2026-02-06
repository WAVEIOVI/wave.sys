import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Blockquote from '../../../components/document-elements/Blockquote';

export default function WorkplaceBehavior() {
    return (
        <Section id="section-7">
            <SectionHeader>SECTION 7: WORKPLACE BEHAVIOR</SectionHeader>

            <SubSection id="conduct">
                <SubSectionHeader>7.1 Professional Conduct</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-3">✅ Respectful Always</h5>
                        <List className="text-xs">
                            <ListItem>Polite and courteous to everyone</ListItem>
                            <ListItem>Listen actively when others speak</ListItem>
                            <ListItem>Value different perspectives</ListItem>
                            <ListItem>Treat others as you want to be treated</ListItem>
                        </List>
                    </div>
                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-3">✅ Honest and Transparent</h5>
                        <List className="text-xs">
                            <ListItem>Tell the truth always, even when difficult</ListItem>
                            <ListItem>Admit mistakes promptly and learn</ListItem>
                            <ListItem>Keep commitments and promises</ListItem>
                            <ListItem>No gossip, rumors, or talking behind backs</ListItem>
                        </List>
                    </div>
                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-3">✅ Collaborative Team Player</h5>
                        <List className="text-xs">
                            <ListItem>Help colleagues when assistance needed</ListItem>
                            <ListItem>Share information and knowledge freely</ListItem>
                            <ListItem>Celebrate each other's successes</ListItem>
                            <ListItem>No hoarding information or credit</ListItem>
                        </List>
                    </div>
                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-3">✅ Positive & Accountable</h5>
                        <List className="text-xs">
                            <ListItem>Can-do attitude; solution-focused</ListItem>
                            <ListItem>Identify as professional in conduct</ListItem>
                            <ListItem>Take ownership of results</ListItem>
                            <ListItem>Fix mistakes promptly (reliable)</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="harassment">
                <SubSectionHeader>7.2 Respect & Anti-Harassment</SubSectionHeader>
                <Blockquote type="danger" title="Zero Tolerance">
                    SS+ is committed to a workplace free from harassment, discrimination, and intimidation. Everyone deserves respect and dignity.
                </Blockquote>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
                    <div>
                        <h5 className="font-bold text-sm mb-3">Harassment Includes:</h5>
                        <div className="space-y-4">
                            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                                <span className="block font-bold text-xs text-red-600 dark:text-red-400 mb-1">Sexual Harassment</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">Unwanted advances, suggestive comments/jokes, unwelcome touching, displaying sexual images.</p>
                            </div>
                            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                                <span className="block font-bold text-xs text-red-600 dark:text-red-400 mb-1">Verbal Harassment</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">Yelling, insults, name-calling, threats, constant criticism, offensive jokes.</p>
                            </div>
                            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                                <span className="block font-bold text-xs text-red-600 dark:text-red-400 mb-1">Discrimination & Bullying</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">Unfair treatment based on characteristics (gender, religion, etc.). Repeated mistreatment, exclusion, spreading rumors.</p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h5 className="font-bold text-sm mb-3">Reporting Steps (If You Witness/Experience)</h5>
                        <div className="space-y-4">
                            {[
                                { s: '1. STOP', d: 'Tell the person to stop if safe/comfortable.' },
                                { s: '2. REPORT', d: 'Immediately to Manager, Admin Manager (Mohamed Ali), or Gérant.' },
                                { s: '3. INVESTIGATE', d: 'Company investigates promptly (7-10 days), confidentially, and fairly.' },
                                { s: '4. ACTION', d: 'Appropriate discipline taken if confirmed (warning to termination).' },
                                { s: '5. PROTECTION', d: 'Retaliation is strictly prohibited and is a separate violation.' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-3">
                                    <div className="font-black text-primary-600 text-xs shrink-0 w-24">{item.s}</div>
                                    <p className="text-xs text-slate-600 dark:text-slate-400">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="discipline">
                <SubSectionHeader>7.3 Discipline Process</SubSectionHeader>
                <Paragraph className="mb-6">
                    Our approach is **progressive**: purpose is to correct behavior, not just punish.
                </Paragraph>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                    {[
                        { step: '1', title: 'Verbal Coaching', desc: 'Informal feedback & support note', color: 'bg-blue-50 dark:bg-blue-900/10 border-blue-200' },
                        { step: '2', title: 'Verbal Warning', desc: 'Formal meeting & documented form', color: 'bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200' },
                        { step: '3', title: 'Written Warning', desc: 'Detailed letter & final timeline', color: 'bg-orange-50 dark:bg-orange-900/10 border-orange-200' },
                        { step: '4', title: 'Final Warning', desc: 'Last chance + potential suspension', color: 'bg-red-50 dark:bg-red-900/10 border-red-200' },
                        { step: '5', title: 'Termination', desc: 'Employment ended', color: 'bg-slate-100 dark:bg-slate-800 border-slate-200' },
                    ].map(p => (
                        <div key={p.step} className={`p-3 rounded-lg border ${p.color} relative overflow-hidden`}>
                            <div className="absolute -right-2 -top-2 text-3xl font-black text-black/5 dark:text-white/5">{p.step}</div>
                            <h6 className="font-bold text-xs mb-1 relative z-10">{p.title}</h6>
                            <p className="text-[10px] text-slate-600 dark:text-slate-400 relative z-10">{p.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-lg mb-6">
                    <h5 className="font-bold text-red-800 dark:text-red-300 text-sm mb-2">🚫 Gross Misconduct = Immediate Termination</h5>
                    <Paragraph className="text-xs mb-2">
                        Serious offenses skip progressive steps: Theft, fraud, violence, sexual harassment, working under influence, weapons, sabotage, revealing confidential info.
                    </Paragraph>
                    <p className="text-xs italic text-slate-500">
                        Process: Immediate suspension → Investigation → Termination (if confirmed).
                    </p>
                </div>
            </SubSection>

            <SubSection id="problem-resolution">
                <SubSectionHeader>7.4 What To Do If You Have A Problem</SubSectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h5 className="font-bold text-sm mb-3 text-primary-600">Open Door Policy (3 Steps)</h5>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-bold px-2 py-1 rounded text-xs h-fit">Step 1</div>
                                <div>
                                    <span className="block font-bold text-xs">Talk to Direct Manager</span>
                                    <p className="text-xs text-slate-500">Most issues resolved here. Give them a chance.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-bold px-2 py-1 rounded text-xs h-fit">Step 2</div>
                                <div>
                                    <span className="block font-bold text-xs">Talk to Admin/Ops/Sales Manager</span>
                                    <p className="text-xs text-slate-500">If unresolved or if issue IS with your manager.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-bold px-2 py-1 rounded text-xs h-fit">Step 3</div>
                                <div>
                                    <span className="block font-bold text-xs">Talk to Gérant (Karim)</span>
                                    <p className="text-xs text-slate-500">For serious ethical concerns or unresolved issues.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h5 className="font-bold text-sm mb-3">Formal Grievance Procedure</h5>
                        <ol className="list-decimal pl-4 space-y-2 text-xs">
                            <li><strong>Submit Written Grievance:</strong> To Admin Manager. Detailed letter/email with facts.</li>
                            <li><strong>Acknowledgment:</strong> Within 2 business days.</li>
                            <li><strong>Investigation:</strong> Within 7-10 days. Interviews & evidence review.</li>
                            <li><strong>Decision:</strong> Within 14 days. Written outcome (Upheld/Partially/Not Upheld).</li>
                            <li><strong>Appeal:</strong> To Gérant within 7 days if dissatisfied.</li>
                        </ol>
                        <div className="mt-4 p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                            <p className="text-xs italic text-slate-600 dark:text-slate-400">
                                **No Retaliation:** You cannot be punished for raising legitimate concerns in good faith. False/malicious grievances may result in discipline.
                            </p>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

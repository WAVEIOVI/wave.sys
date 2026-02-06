import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';

export default function HealthAndSafety() {
    return (
        <Section id="section-8">
            <SectionHeader>SECTION 8: HEALTH & SAFETY</SectionHeader>

            <SubSection id="safety-commitment">
                <SubSectionHeader>8.1 Our Safety Commitment</SubSectionHeader>
                <Paragraph>
                    Safety is our **#1 Priority** — before productivity, schedule, or cost. Every employee must go home safe every day.
                </Paragraph>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="p-5 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900 rounded-xl">
                        <h5 className="font-bold text-green-800 dark:text-green-300 text-sm mb-3">Your Rights</h5>
                        <List className="text-xs">
                            <ListItem>Safe workplace & correct maintenance</ListItem>
                            <ListItem>Free PPE (Safety gear provided)</ListItem>
                            <ListItem>Proper training before tasks</ListItem>
                            <ListItem>**Right to Refuse** unsafe work</ListItem>
                            <ListItem>Report hazards without retaliation</ListItem>
                        </List>
                    </div>
                    <div className="p-5 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900 rounded-xl">
                        <h5 className="font-bold text-blue-800 dark:text-blue-300 text-sm mb-3">Management's Duty</h5>
                        <List className="text-xs">
                            <ListItem>Provide safe equipment & tools</ListItem>
                            <ListItem>Establish clear safety policies</ListItem>
                            <ListItem>Investigate all incidents</ListItem>
                            <ListItem>Foster safety culture</ListItem>
                            <ListItem>Lead by example</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="responsibilities">
                <SubSectionHeader>8.2 Your Safety Responsibilities (Daily Checklist)</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <div className="space-y-4">
                            <div>
                                <span className="font-bold text-sm block text-primary-600 mb-1">✅ Wear Required PPE</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">Safety shoes, glasses, gloves, hard hat, vest as required for task/location.</p>
                            </div>
                            <div>
                                <span className="font-bold text-sm block text-primary-600 mb-1">✅ Follow Procedures</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">Use tools correctly, follow checklists, respect customer site rules. No shortcuts.</p>
                            </div>
                            <div>
                                <span className="font-bold text-sm block text-primary-600 mb-1">✅ Keep Workplace Safe</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">Clean up spills, no trip hazards, clear exits, organized tools.</p>
                            </div>
                            <div>
                                <span className="font-bold text-sm block text-primary-600 mb-1">✅ Vehicle Safety</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">Daily inspection, seatbelt, secure loads, no phone while driving.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <div className="space-y-4">
                            <div>
                                <span className="font-bold text-sm block text-primary-600 mb-1">✅ Ladder & Height Safety</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">Inspect ladder, 3-point contact, stable footing. Don't overreach.</p>
                            </div>
                            <div>
                                <span className="font-bold text-sm block text-primary-600 mb-1">✅ Chemical Safety</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">Follow SDS, wear respirator/gloves, proper storage & ventilation.</p>
                            </div>
                            <div>
                                <span className="font-bold text-sm block text-primary-600 mb-1">✅ Report Hazards</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">Unsafe conditions, damaged tools, near-misses. Speak up immediately.</p>
                            </div>
                            <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900">
                                <span className="font-bold text-sm block text-red-600 mb-1">🛑 Stop Unsafe Work</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">If it's unsafe: STOP. Tell manager. Don't proceed until safe.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="ppe">
                <SubSectionHeader>8.3 PPE Requirements</SubSectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800">
                        <h5 className="font-bold text-primary-400 mb-4 uppercase text-xs tracking-widest">Mandatory Gear (All Techs)</h5>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🥾</span>
                                <span className="text-xs font-bold">Safety Shoes</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🥽</span>
                                <span className="text-xs font-bold">Safety Glasses</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🧤</span>
                                <span className="text-xs font-bold">Work Gloves</span>
                            </div>
                        </div>
                        <div className="border-t border-white/10 pt-3">
                            <p className="text-[10px] text-slate-400 italic">Company provides all required PPE free. Replace immediately if damaged.</p>
                        </div>
                    </div>

                    <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-3">Additional PPE (Task Based)</h5>
                        <List className="text-xs">
                            <ListItem>**Hard Hat:** Construction sites, overhead hazards.</ListItem>
                            <ListItem>**High-Vis Vest:** Traffic areas, warehouses.</ListItem>
                            <ListItem>**Respirator:** Powder, dust, chemicals.</ListItem>
                            <ListItem>**Chemical Gloves:** Foam, acids, cleaning.</ListItem>
                            <ListItem>**Hearing Protection:** Loud areas ({">"}85dB).</ListItem>
                            <ListItem>**Face Shield:** Grinding, high-pressure.</ListItem>
                            <ListItem>**Safety Harness:** Heights {">"} 2 meters.</ListItem>
                        </List>
                        <div className="mt-4 p-2 bg-red-50 dark:bg-red-900/10 rounded text-[10px] text-red-600 dark:text-red-400 font-bold">
                            Consequence of Not Wearing: Warning → Suspension → Termination.
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="incident-reporting">
                <SubSectionHeader>8.4 Reporting Incidents</SubSectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-3">What Must Be Reported?</h5>
                        <List className="text-xs">
                            <ListItem>**Injuries:** Any cut, burn, sprain, eye injury (even minor).</ListItem>
                            <ListItem>**Near-Misses:** Close calls (learn from them!).</ListItem>
                            <ListItem>**Property Damage:** Equipment, vehicle, customer property.</ListItem>
                            <ListItem>**Vehicle Accidents:** Any collision/damage.</ListItem>
                            <ListItem>**Environmental:** Spills, leaks, fire.</ListItem>
                            <ListItem>**Security:** Theft, vandalism, threats.</ListItem>
                        </List>
                    </div>

                    <div className="space-y-4">
                        <h5 className="font-bold text-sm mb-1">Immediate Actions (Priority 1-3)</h5>
                        <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900">
                            <span className="font-bold text-xs text-red-700 dark:text-red-400 block mb-1">1. Care for Injured</span>
                            <p className="text-[10px]">Stop work. First aid. Call emergency (190) if serious. Don't move if danger.</p>
                        </div>
                        <div className="p-3 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-100 dark:border-orange-900">
                            <span className="font-bold text-xs text-orange-700 dark:text-orange-400 block mb-1">2. Secure Scene</span>
                            <p className="text-[10px]">Ensure no further danger. Don't disturb evidence. Take photos if safe.</p>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900">
                            <span className="font-bold text-xs text-blue-700 dark:text-blue-400 block mb-1">3. Notify Management</span>
                            <p className="text-[10px]">Call Ops Manager IMMEDIATELY. Follow instructions.</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-l-4 border-primary-500 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">
                    <h5 className="font-bold text-sm mb-2">Written Report (Within 24 Hours)</h5>
                    <Paragraph className="text-xs mb-0">
                        Submit form with details: Date/time, people involved, detailed description, equipment involved, photos. **Submit to Ops Manager.**
                    </Paragraph>
                </div>
            </SubSection>

            <SubSection id="work-injuries">
                <SubSectionHeader>8.5 Work Injury Process (CNSS)</SubSectionHeader>

                <div className="mb-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-xl mb-4">
                        <h5 className="font-bold text-blue-800 dark:text-blue-300 text-sm mb-2">CNSS Coverage Includes:</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                            <ul className="list-disc pl-4 space-y-1">
                                <li>100% Medical treatment costs</li>
                                <li>Salary replacement (Incapacity benefit)</li>
                            </ul>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>Rehabilitation services</li>
                                <li>Permanent disability benefits</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {[
                        { s: 'Step 1', t: 'Medical Care', d: 'First aid or hospital immediately. Use CNSS facility if possible.' },
                        { s: 'Step 2', t: 'Declaration (48h)', d: 'CRITICAL: Admin Mgr must submit to CNSS within 48 hours.' },
                        { s: 'Step 3', t: 'Treatment', d: 'Follow doctor orders. Keep all docs/receipts. CNSS pays costs.' },
                        { s: 'Step 4', t: 'Incapacity', d: 'Submit "Arrêt de travail" for salary benefits.' },
                        { s: 'Step 5', t: 'Recovery', d: 'Focus on healing. Return when doctor clears (Fitness Cert).' },
                        { s: 'Step 6', t: 'Disability', d: 'If permanent impairment, CNSS rates % for pension.' },
                    ].map(step => (
                        <div key={step.s} className="p-3 border border-slate-200 dark:border-slate-800 rounded-lg">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">{step.s}</span>
                            <span className="font-bold text-xs block mb-1">{step.t}</span>
                            <p className="text-[10px] text-slate-500 leading-tight">{step.d}</p>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-800">
                    <span className="text-lg">🎯</span>
                    <p className="text-xs font-bold text-green-800 dark:text-green-300 mb-0">
                        Goal: Zero Injuries. Report hazards before they become accidents!
                    </p>
                </div>
            </SubSection>
        </Section>
    );
}

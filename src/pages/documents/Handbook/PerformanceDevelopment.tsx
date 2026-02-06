import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';

import List, { ListItem } from '../../../components/document-elements/List';

export default function PerformanceDevelopment() {
    return (
        <Section id="section-6">
            <SectionHeader>SECTION 6: PERFORMANCE & DEVELOPMENT</SectionHeader>

            <SubSection id="expectations">
                <SubSectionHeader>6.1 Performance Expectations</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                        <h4 className="font-bold text-primary-600 mb-3">We Expect You To:</h4>
                        <div className="space-y-3">
                            {[
                                { title: 'Know Your Job', desc: 'Understand your responsibilities and SS+ quality standards.' },
                                { title: 'Do Quality Work', desc: 'Accurate, thorough, and pride in output. Minimal errors.' },
                                { title: 'Be Productive', desc: 'Manage time effectively and meet deadlines.' },
                                { title: 'Serve Customers', desc: 'Professional, courteous, and responsive always.' },
                                { title: 'Be Safe', desc: 'Zero shortcuts. Follow all safety rules and wear PPE.' },
                                { title: 'Be Reliable', desc: 'Consistent attendance and follow-through on commitments.' },
                                { title: 'Communicate Well', desc: 'Keep manager informed and ask for help when needed.' },
                                { title: 'Improve Continuously', desc: 'Learn new skills and accept feedback with open mind.' },
                            ].map(item => (
                                <div key={item.title} className="flex gap-3 p-2 border-l-2 border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">{item.title}</p>
                                        <p className="text-xs text-slate-500 leading-tight">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-6">
                            <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-3">Your Manager Will:</h4>
                            <List className="text-sm">
                                <ListItem>Set clear expectations and goals</ListItem>
                                <ListItem>Provide resources, training, and support</ListItem>
                                <ListItem>Give regular feedback (positive and constructive)</ListItem>
                                <ListItem>Recognize and appreciate good work</ListItem>
                                <ListItem>Address problems promptly and fairly</ListItem>
                                <ListItem>Support your development and career growth</ListItem>
                            </List>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="reviews">
                <SubSectionHeader>6.2 Performance Reviews</SubSectionHeader>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
                        <h5 className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-4">Review Schedule</h5>
                        <div className="space-y-4">
                            <div className="flex border-b border-slate-100 dark:border-slate-800 pb-3">
                                <div className="w-24 shrink-0 font-bold text-sm text-slate-900 dark:text-white">Day 30/60</div>
                                <div className="text-xs text-slate-500 italic">Probation Check-ins</div>
                            </div>
                            <div className="flex border-b border-slate-100 dark:border-slate-800 pb-3">
                                <div className="w-24 shrink-0 font-bold text-sm text-slate-900 dark:text-white">Day 90</div>
                                <div className="text-xs text-slate-500 italic font-bold text-primary-600">Formal Probation Review (Critical)</div>
                            </div>
                            <div className="flex border-b border-slate-100 dark:border-slate-800 pb-3">
                                <div className="w-24 shrink-0 font-bold text-sm text-slate-900 dark:text-white">Annual</div>
                                <div className="text-xs text-slate-500 italic">Comprehensive Review (December)</div>
                            </div>
                            <div className="flex">
                                <div className="w-24 shrink-0 font-bold text-sm text-slate-900 dark:text-white">Ongoing</div>
                                <div className="text-xs text-slate-500 italic">Monthly 1-on-1s & continuous feedback</div>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
                        <h5 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Rating Scale (1-5)</h5>
                        <ul className="space-y-2 text-xs">
                            <li className="flex gap-2"><span className="font-bold w-4 text-primary-600">5</span> <span>**Exceptional** (Top 5-10% - Consistently exceeds)</span></li>
                            <li className="flex gap-2"><span className="font-bold w-4 text-green-600">4</span> <span>**Exceeds Expectations** (20-30% - Regularly exceeds)</span></li>
                            <li className="flex gap-2"><span className="font-bold w-4 text-blue-600">3</span> <span>**Meets Expectations** (Solid, reliable - PROMOTION READY)</span></li>
                            <li className="flex gap-2"><span className="font-bold w-4 text-yellow-600">2</span> <span>**Needs Improvement** (Plan required)</span></li>
                            <li className="flex gap-2"><span className="font-bold w-4 text-red-600">1</span> <span>**Unsatisfactory** (Serious concerns)</span></li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h5 className="font-bold text-sm mb-3">12 Performance Areas Evaluated</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                            <ul className="text-xs list-disc pl-4 space-y-1">
                                <li>Goal Achievement</li>
                                <li>Job Knowledge & Skills</li>
                                <li>Quality of Work</li>
                                <li>Productivity & Efficiency</li>
                                <li>Customer Focus</li>
                                <li>Teamwork & Collaboration</li>
                            </ul>
                            <ul className="text-xs list-disc pl-4 space-y-1">
                                <li>Communication</li>
                                <li>Attendance & Punctuality</li>
                                <li>Safety & Compliance</li>
                                <li>Initiative & Problem-Solving</li>
                                <li>Professionalism</li>
                                <li>Leadership (if applicable)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-5 bg-slate-50 dark:bg-slate-900/50">
                        <h5 className="font-bold text-sm mb-3">Review Process (4 Steps)</h5>
                        <ol className="text-xs list-decimal pl-4 space-y-2">
                            <li><strong>Self-Assessment:</strong> You evaluate yourself honestly.</li>
                            <li><strong>Manager Assessment:</strong> Independent evaluation based on data/feedback.</li>
                            <li><strong>Review Meeting:</strong> 1-2 hour open discussion on performance & goals.</li>
                            <li><strong>Documentation:</strong> Signed and filed.</li>
                        </ol>
                    </div>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900 rounded-lg">
                    <h6 className="font-bold text-green-800 dark:text-green-300 text-sm mb-1">Merit Increases (Annual Raise)</h6>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs mt-2">
                        <div className="text-center p-2 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
                            <span className="block font-bold text-green-600">8 - 12%</span>
                            <span className="text-[10px] text-slate-500">Exceptional (5)</span>
                        </div>
                        <div className="text-center p-2 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
                            <span className="block font-bold text-green-600">5 - 8%</span>
                            <span className="text-[10px] text-slate-500">Exceeds (4)</span>
                        </div>
                        <div className="text-center p-2 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
                            <span className="block font-bold text-green-600">3 - 5%</span>
                            <span className="text-[10px] text-slate-500">Meets (3)</span>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="training">
                <SubSectionHeader>6.3 Training & Career Growth</SubSectionHeader>

                <div className="mb-8">
                    <h5 className="font-bold text-sm mb-3">Training Opportunities</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                            <span className="block font-bold text-xs mb-2 text-primary-600 uppercase">New Employees</span>
                            <ul className="text-xs space-y-1 list-disc pl-3">
                                <li>Day 1 Orientation & Safety</li>
                                <li>Week 1-12: Onboarding Program</li>
                                <li>Sales Training (8 weeks)</li>
                                <li>Mentoring & Buddy System</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                            <span className="block font-bold text-xs mb-2 text-primary-600 uppercase">Ongoing Training</span>
                            <ul className="text-xs space-y-1 list-disc pl-3">
                                <li>Annual Safety Refresher (Mandatory)</li>
                                <li>Technical/Product Updates</li>
                                <li>Customer Service Skills</li>
                                <li>WAVE PLUS System Training</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                            <span className="block font-bold text-xs mb-2 text-primary-600 uppercase">Responsibilities</span>
                            <ul className="text-xs space-y-1 list-disc pl-3">
                                <li>Attend all mandatory sessions</li>
                                <li>Apply learning to work</li>
                                <li>Help train newer employees</li>
                                <li>Take initiative!</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="flex-1">
                                <h4 className="font-bold text-primary-400 mb-2 inline-flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center">
                                        <span className="text-[10px] text-primary-500">★</span>
                                    </div>
                                    Fire Safety Certification (Technicians)
                                </h4>
                                <p className="text-xs text-slate-300 mb-3">
                                    Required within 12 months. SS+ sponsors 100% of training costs (2-4 weeks).
                                </p>
                                <div className="grid grid-cols-2 gap-4 text-xs">
                                    <div className="bg-slate-800 p-2 rounded">
                                        <span className="block text-slate-400 text-[10px] uppercase">Reward</span>
                                        <span className="font-bold text-green-400">+100–150 TND / Month</span>
                                    </div>
                                    <div className="bg-slate-800 p-2 rounded">
                                        <span className="block text-slate-400 text-[10px] uppercase">Commitment</span>
                                        <span className="font-bold text-white">2 Years Post-Cert</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
                        <h5 className="font-bold mb-3 text-sm text-blue-600 dark:text-blue-400">Technician Career Path & Salary</h5>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-xs p-2 bg-slate-50 dark:bg-slate-800 rounded">
                                <span>Junior Technician (0-1 yr)</span>
                                <span className="font-bold">900 - 1,100 TND</span>
                            </div>
                            <div className="flex justify-between items-center text-xs p-2 bg-slate-50 dark:bg-slate-800 rounded">
                                <span>Technician (1-3 yrs)</span>
                                <span className="font-bold">1,000 - 1,300 TND</span>
                            </div>
                            <div className="flex justify-between items-center text-xs p-2 bg-slate-50 dark:bg-slate-800 rounded">
                                <span>Senior Technician (3-5 yrs)</span>
                                <span className="font-bold">1,200 - 1,500 TND</span>
                            </div>
                            <div className="flex justify-between items-center text-xs p-2 bg-slate-50 dark:bg-slate-800 rounded">
                                <span>Team Leader (5+ yrs)</span>
                                <span className="font-bold">1,400 - 1,800 TND</span>
                            </div>
                            <div className="flex justify-between items-center text-xs p-2 bg-primary-50 dark:bg-primary-900/20 rounded border border-primary-100 dark:border-primary-800">
                                <span className="font-bold text-primary-700 dark:text-primary-400">Operations Manager</span>
                                <span className="font-bold text-primary-700 dark:text-primary-400">2,000 - 2,800 TND</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
                        <h5 className="font-bold mb-3 text-sm text-purple-600 dark:text-purple-400">Sales Career Path</h5>
                        <div className="space-y-4">
                            <div className="p-3 border-l-2 border-purple-200 dark:border-purple-800">
                                <span className="block font-bold text-xs">Sales Representative</span>
                                <span className="text-xs text-slate-500">Building customer base, learning territory.</span>
                            </div>
                            <div className="p-3 border-l-2 border-purple-400 dark:border-purple-600">
                                <span className="block font-bold text-xs">Senior Sales Rep</span>
                                <span className="text-xs text-slate-500">Established relationships, consistent high performance.</span>
                            </div>
                            <div className="p-3 border-l-2 border-purple-600 dark:border-purple-400 bg-purple-50 dark:bg-purple-900/10">
                                <span className="block font-bold text-xs">Sales Manager</span>
                                <span className="text-xs text-slate-500">Leading sales team, strategy development.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

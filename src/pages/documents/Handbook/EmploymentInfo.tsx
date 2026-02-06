import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import { BadgeCheck, Rocket, Info } from 'lucide-react';

export default function EmploymentInfo() {
    return (
        <Section id="section-2">
            <SectionHeader>SECTION 2: YOUR EMPLOYMENT</SectionHeader>

            <SubSection id="employment-relationship">
                <SubSectionHeader>2.1 Employment Relationship</SubSectionHeader>

                <Paragraph className="text-lg mb-6">
                    **Your Contract:**
                </Paragraph>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                    <div className="relative p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                        <div className="absolute top-0 right-0 p-3 bg-secondary-500 text-white text-[10px] font-bold uppercase tracking-tighter">Initial</div>
                        <h4 className="font-bold text-lg mb-4">CDD Contract</h4>
                        <List>
                            <ListItem>Standard 6-month duration</ListItem>
                            <ListItem>3-month probation period</ListItem>
                            <ListItem>Learning and evaluation phase</ListItem>
                            <ListItem>Notice period: 1 week</ListItem>
                        </List>
                        <Paragraph className="text-xs text-slate-400 mt-4 leading-normal italic">
                            Used for all new hires to ensure a mutual fit before permanent commitment.
                        </Paragraph>
                    </div>
                    <div className="relative p-6 bg-slate-900 text-white rounded-2xl overflow-hidden shadow-xl border border-slate-800">
                        <div className="absolute top-0 right-0 p-3 bg-primary-500 text-white text-[10px] font-bold uppercase tracking-tighter">Target</div>
                        <h4 className="font-bold text-lg mb-4 text-white">CDI Contract</h4>
                        <List>
                            <ListItem>Permanent employment relationship</ListItem>
                            <ListItem>Full benefits and long-term security</ListItem>
                            <ListItem>Career growth opportunities</ListItem>
                            <ListItem>Career path to Senior/Leader roles</ListItem>
                        </List>
                        <Paragraph className="text-xs text-primary-300/60 mt-4 leading-normal italic">
                            Converted after successful CDD performance and 6-month review.
                        </Paragraph>
                    </div>
                </div>

                <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-[2.5rem] border border-blue-100 dark:border-blue-900/30 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-150 transition-transform duration-700 text-blue-500">
                        <BadgeCheck size={80} />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-500 rounded-lg text-white">
                                <BadgeCheck size={20} />
                            </div>
                            <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 italic uppercase tracking-tight">Your Rights & Protections</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Tunisia labor law protections",
                                "Fair treatment & due process",
                                "Safe working conditions",
                                "Proper compensation & benefits"
                            ].map((right, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                    {right}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="probation">
                <SubSectionHeader>2.2 Probation Period</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="md:col-span-2">
                        <h5 className="font-bold text-sm mb-3">First 3 Months</h5>
                        <Paragraph>
                            This is a learning period for you and an evaluation period for us. We provide training and support to help you succeed.
                        </Paragraph>
                        <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                            <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900">
                                <span className="block text-[10px] text-slate-500 uppercase font-bold">Day 30</span>
                                <span className="text-xs font-bold">Check-in</span>
                            </div>
                            <div className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900">
                                <span className="block text-[10px] text-slate-500 uppercase font-bold">Day 60</span>
                                <span className="text-xs font-bold">Check-in</span>
                            </div>
                            <div className="p-2 border border-primary-100 dark:border-primary-900 rounded bg-primary-50 dark:bg-primary-900/20">
                                <span className="block text-[10px] text-primary-600 dark:text-primary-400 uppercase font-bold">Day 90</span>
                                <span className="text-xs font-bold text-primary-700 dark:text-primary-300">Decision</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl text-xs">
                        <h6 className="font-bold mb-2 uppercase text-slate-500">Expectations</h6>
                        <ul className="list-disc pl-4 space-y-2">
                            <li>Ask questions (we want you to learn!)</li>
                            <li>Accept feedback with open mind.</li>
                            <li>Build relationships with the team.</li>
                            <li>Show up on time, work hard.</li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-5 bg-yellow-50 dark:bg-yellow-900/10 rounded-xl border border-yellow-200 dark:border-yellow-800">
                        <h5 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">Notice Period:</h5>
                        <Paragraph className="text-sm">
                            If you or company decides it's not working: **1 week notice**. This allows both parties to transition smoothly.
                        </Paragraph>
                    </div>
                    <div className="p-5 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-200 dark:border-green-800">
                        <h5 className="font-bold mb-3 text-green-800 dark:text-green-300">After Probation:</h5>
                        <List className="text-sm">
                            <ListItem>Continue toward CDI conversion at 6 months</ListItem>
                            <ListItem>Ongoing performance feedback and development</ListItem>
                            <ListItem>Long-term career opportunities</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="hours">
                <SubSectionHeader>2.3 Working Hours & Schedule</SubSectionHeader>
                <div className="bg-primary-50 dark:bg-primary-900/10 p-6 rounded-2xl border border-primary-100 dark:border-primary-900/20 mb-6 text-center">
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-bold uppercase tracking-widest mb-1">Standard Work Week</p>
                    <h3 className="text-4xl font-black text-slate-900 dark:text-white">48 HOURS</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h5 className="font-bold mb-2">Monday – Friday</h5>
                        <p className="text-sm text-slate-500">8:00 AM – 5:00 PM</p>
                        <p className="text-xs text-slate-400 mt-1 italic">9 hours on-site (8 hours work + 1-hour lunch)</p>
                    </div>
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h5 className="font-bold mb-2">Saturday</h5>
                        <p className="text-sm text-slate-500">8:00 AM – 2:30 PM</p>
                        <p className="text-xs text-slate-400 mt-1 italic">8 hours. Contributes to 48-hour week; schedule may vary based on customer needs.</p>
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h5 className="font-bold mb-3">Lunch Break:</h5>
                        <List>
                            <ListItem>1 hour (unpaid)</ListItem>
                            <ListItem>Flexible between 12:00-14:00</ListItem>
                            <ListItem>Coordinate with your team (coverage needed)</ListItem>
                        </List>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-200 dark:border-purple-800">
                            <h5 className="font-bold mb-2 text-purple-800 dark:text-purple-300">Prayer Breaks:</h5>
                            <List className="text-sm">
                                <ListItem>Reasonable time allowed for those who observe</ListItem>
                                <ListItem>Balance religious observance with work duties</ListItem>
                                <ListItem>Coordinate with your work schedule</ListItem>
                            </List>
                        </div>
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h5 className="font-bold mb-2 text-blue-800 dark:text-blue-300">Short Breaks:</h5>
                            <List className="text-sm">
                                <ListItem>5-10 minute breaks permitted (coffee, restroom)</ListItem>
                                <ListItem>Don't abuse the privilege</ListItem>
                                <ListItem>Keep work flowing</ListItem>
                            </List>
                        </div>
                    </div>
                </div>

                <div className="mt-8 p-6 bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                        <Rocket size={60} className="text-primary-500" />
                    </div>
                    <div className="relative z-10 flex items-start gap-6">
                        <div className="p-4 bg-primary-500/10 rounded-2xl text-primary-500">
                            <Info size={24} />
                        </div>
                        <div>
                            <h5 className="text-lg font-black text-white italic uppercase mb-2 tracking-tight">Field Staff Flexibility</h5>
                            <p className="text-sm text-slate-400 leading-relaxed font-medium">
                                Technicians may start earlier/later for customer appointments. Example: If first appointment is 7:00 AM, start at 7:00 AM. Must still complete 48 hours per week + Saturday. Coordinate with Team Leader.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="font-bold mb-2 text-green-800 dark:text-green-300">Sales Representatives:</h5>
                    <List className="text-sm">
                        <ListItem>Flexible for customer meetings</ListItem>
                        <ListItem>Core hours expected: 9:00-16:00 available</ListItem>
                        <ListItem>Evening or early meetings accommodated</ListItem>
                        <ListItem>Saturday may vary based on customer needs</ListItem>
                    </List>
                </div>
            </SubSection>

            <SubSection id="attendance">
                <SubSectionHeader>2.4 Attendance & Punctuality</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="p-4 bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 rounded-r-lg">
                            <h6 className="font-bold text-green-800 dark:text-green-300 text-xs uppercase mb-1">We Count on You to:</h6>
                            <List>
                                <ListItem>Arrive on time (ready to work at start time, not just arriving)</ListItem>
                                <ListItem>Work your full schedule (no leaving early without permission)</ListItem>
                                <ListItem>Return from breaks on time</ListItem>
                                <ListItem>Notify manager immediately if late or absent</ListItem>
                            </List>
                        </div>
                        <div className="p-4 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-lg">
                            <h6 className="font-bold text-red-800 dark:text-red-300 text-xs uppercase mb-1">If Late or Absent:</h6>
                            <Paragraph className="text-xs mb-0">
                                <strong>Call your manager BEFORE start time</strong> (do not text). Provide reason and estimated arrival. For sickness, medical certificate required within 48 hours.
                            </Paragraph>
                        </div>
                    </div>
                    <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-4">Attendance Tracking:</h5>
                        <div className="space-y-4">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                                <div className="flex gap-3 items-start">
                                    <span className="text-2xl">📱</span>
                                    <div className="flex-1">
                                        <span className="block font-bold text-sm mb-1">Technicians/Team Leaders:</span>
                                        <List className="text-xs">
                                            <ListItem>GPS-enabled WAVE PLUS web app</ListItem>
                                            <ListItem>Check in at start of day</ListItem>
                                            <ListItem>Log arrival/departure at each site</ListItem>
                                            <ListItem>Check out at end of day</ListItem>
                                            <ListItem>Automatic timesheet generation</ListItem>
                                        </List>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 bg-green-50 dark:bg-green-900/10 rounded-lg">
                                <div className="flex gap-3 items-start">
                                    <span className="text-2xl">💼</span>
                                    <div className="flex-1">
                                        <span className="block font-bold text-sm mb-1">Sales Representatives:</span>
                                        <List className="text-xs">
                                            <ListItem>Daily check-in/check-out via WAVE PLUS</ListItem>
                                            <ListItem>Log customer visits and activities</ListItem>
                                            <ListItem>Flexible but accountable</ListItem>
                                        </List>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                                <div className="flex gap-3 items-start">
                                    <span className="text-2xl">📋</span>
                                    <div className="flex-1">
                                        <span className="block font-bold text-sm mb-1">Office/Admin Staff:</span>
                                        <List className="text-xs">
                                            <ListItem>Sign-in sheet or simple check-in system</ListItem>
                                            <ListItem>Standard office hours</ListItem>
                                        </List>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border-l-4 border-red-500">
                            <h6 className="font-bold text-red-800 dark:text-red-300 text-xs mb-1">Why It Matters:</h6>
                            <List className="text-xs">
                                <ListItem>Your team counts on you (coverage needed)</ListItem>
                                <ListItem>Customers expect reliability</ListItem>
                                <ListItem>Chronic absence/tardiness = discipline up to termination</ListItem>
                            </List>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

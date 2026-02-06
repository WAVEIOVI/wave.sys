import Section, { SectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import { Heart, Info, BookOpen, CreditCard, Calendar, Shield, Cpu, Users, LifeBuoy, CheckCircle, Smartphone } from 'lucide-react';

export default function WelcomeMessage() {
    return (
        <>
            <Section id="welcome">
                <SectionHeader>WELCOME MESSAGE</SectionHeader>

                <div className="relative mb-12 p-10 bg-gradient-to-br from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-xl overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -mr-32 -mt-32 transition-colors group-hover:bg-primary-500/10"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-primary-500/10 rounded-2xl text-primary-500">
                                <Heart size={32} className="fill-primary-500/20" />
                            </div>
                            <h3 className="text-3xl font-black text-slate-800 dark:text-slate-100 italic uppercase tracking-tight">Dear Team Member,</h3>
                        </div>

                        <Paragraph className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            Welcome to the <span className="font-bold text-primary-600 dark:text-primary-400 italic">Sécurité Services Plus</span> family! Whether you're just joining us or have been part of our team for years, this handbook is your guide to our culture, standards, and shared success.
                        </Paragraph>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                            <div className="space-y-4">
                                <Paragraph className="text-slate-600 dark:text-slate-400">
                                    Since 2002, we've built our reputation on <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-sm italic">quality, professionalism, and reliability</span>. Our success comes from the dedication of people like you.
                                </Paragraph>
                                <Paragraph className="text-slate-600 dark:text-slate-400">
                                    This guide is designed to help you navigate your journey here, explaining what we expect from each other and how we protect what matters most.
                                </Paragraph>
                            </div>
                            <div className="p-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl">
                                <h5 className="text-[10px] font-black text-primary-600 uppercase mb-4 tracking-[0.3em] italic">What's Inside:</h5>
                                <div className="grid grid-cols-1 gap-3">
                                    {[
                                        "SS+ Employer Commitments",
                                        "Team Member Expectations",
                                        "Benefits & Workplace Rules",
                                        "Customer Service Excellence"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-r-xl">
                            <p className="text-sm font-bold text-amber-900 dark:text-amber-200">
                                <Info size={16} className="inline mr-2 -mt-1" />
                                Please read this handbook carefully. It's a living document that guides our daily operations and professional growth.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-100 dark:border-primary-900/30 mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xl">KB</div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-lg">Karim BEN SALEM</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">Gérant</p>
                            <p className="text-xs text-slate-400">Sécurité Services Plus</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="table-of-contents">
                <SectionHeader>TABLE OF CONTENTS</SectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { id: 'section-1', title: '1: ABOUT SS+', icon: <BookOpen />, items: ['Company Overview', 'Our Values', 'Core Services', 'Team Structure'], color: 'slate' },
                        { id: 'section-2', title: '2: EMPLOYMENT', icon: <Users />, items: ['Relationship', 'Probation', 'Hours', 'Attendance'], color: 'blue' },
                        { id: 'section-3', title: '3: PAY & BENEFITS', icon: <CreditCard />, items: ['Salary', 'Overtime', 'Allowances', 'Bonus'], color: 'emerald' },
                        { id: 'section-4', title: '4: TIME OFF', icon: <Calendar />, items: ['Annual Leave', 'Sick Leave', 'Public Holidays', 'Requests'], color: 'primary' },
                        { id: 'section-5', title: '5: POLICIES', icon: <Shield />, items: ['Conduct', 'Dress Code', 'Social Media', 'Vehicles'], color: 'orange' },
                        { id: 'section-6', title: '6: PERFORMANCE', icon: <Cpu />, items: ['Expectations', 'Reviews', 'Training', 'Growth'], color: 'purple' },
                        { id: 'section-7', title: '7: BEHAVIOR', icon: <LifeBuoy />, items: ['Professionalism', 'Respect', 'Discipline', 'Problems'], color: 'indigo' },
                        { id: 'section-8', title: '8: SAFETY', icon: <CheckCircle />, items: ['Commitment', 'PPE', 'Incidents', 'Reporting'], color: 'red' },
                        { id: 'section-9', title: '9: PRACTICAL INFO', icon: <Smartphone />, items: ['Emergency', 'Facilities', 'Contacts', 'FAQs'], color: 'slate' }
                    ].map((section) => (
                        <div key={section.id} className="group p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-200 group-hover:scale-110 transition-transform`}>
                                    {section.icon}
                                </div>
                                <h4 className="font-black text-slate-800 dark:text-slate-200 text-sm italic uppercase tracking-wider">{section.title}</h4>
                            </div>
                            <div className="space-y-2">
                                {section.items.map((item, j) => (
                                    <div key={j} className="flex items-center gap-2 text-xs font-bold text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                                        <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="p-6 bg-primary-900 border border-primary-800 rounded-[2.5rem] shadow-xl flex flex-col justify-center text-center group overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-700">
                            <Shield size={120} />
                        </div>
                        <h4 className="font-black text-white text-sm italic uppercase tracking-wider mb-2 relative z-10">10: ACKNOWLEDGMENT</h4>
                        <p className="text-primary-300 text-xs font-bold relative z-10">Employee receipt & confirmation of handbook understanding.</p>
                    </div>
                </div>
            </Section>
        </>
    );
}

import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import { Target, Zap, ShieldCheck, Heart } from 'lucide-react';

export default function AboutCompany() {
    return (
        <Section id="section-1">
            <SectionHeader>SECTION 1: ABOUT SS+</SectionHeader>

            <SubSection id="company-overview">
                <SubSectionHeader>1.1 Our Company</SubSectionHeader>

                <div className="mb-6">
                    <h4 className="font-bold text-lg mb-4 text-slate-800 dark:text-slate-200">Who We Are:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                            <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-2 italic uppercase text-sm">Founded</h4>
                            <p className="text-2xl font-bold">2002</p>
                            <p className="text-sm text-slate-500">23 years serving Tunisia</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                            <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-2 italic uppercase text-sm">Locations</h4>
                            <p className="text-xl font-bold">Sfax & Tunis</p>
                            <p className="text-sm text-slate-500">Main office/workshop + branch</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                            <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-2 italic uppercase text-sm">Team</h4>
                            <p className="text-2xl font-bold">14</p>
                            <p className="text-sm text-slate-500">Dedicated professionals</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                            <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-2 italic uppercase text-sm">Mission</h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-tight">
                                Protecting people, property, and peace of mind through quality fire safety and workplace safety solutions
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-lg mb-3 text-slate-800 dark:text-slate-200">Our Reputation:</h4>
                    <List>
                        <ListItem>Trusted by hundreds of businesses across Tunisia</ListItem>
                        <ListItem>Certified technicians and quality products</ListItem>
                        <ListItem>Fast, reliable service with professional team</ListItem>
                        <ListItem>Modern technology (WAVE PLUS system for efficiency)</ListItem>
                    </List>
                </div>
            </SubSection>

            <SubSection id="values">
                <SubSectionHeader>1.2 Our Values</SubSectionHeader>
                <Paragraph className="text-lg mb-6">
                    **What We Stand For:**
                </Paragraph>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <Target size={24} />,
                            title: 'Quality First',
                            description: "We don't cut corners or compromise standards. Work is done right the first time.",
                            color: '#DC143C', // SS+ Red
                            items: ['No Shortcuts', 'Certified Standards', 'Excellence']
                        },
                        {
                            icon: <Zap size={24} />,
                            title: 'Quick Response',
                            description: "We value our customers' time. Fast service and 24h emergency support.",
                            color: '#2196F3', // Blue
                            items: ['On-time Delivery', 'Emergency Care', 'Efficiency']
                        },
                        {
                            icon: <ShieldCheck size={24} />,
                            title: 'Professionalism',
                            description: "We represent SS+ with pride. Expertise and reliability in all we do.",
                            color: '#64748b', // Slate
                            items: ['Branded Identity', 'Reliable Experts', 'Pride']
                        },
                        {
                            icon: <Heart size={24} />,
                            title: 'Reliability',
                            description: "We do what we say we'll do. Building long-term trusted relationships.",
                            color: '#10b981', // Emerald
                            items: ['Count On Us', 'Trusted Partners', 'Consistency']
                        }
                    ].map((value, idx) => (
                        <div key={idx} className="group relative p-8 bg-white dark:bg-slate-950 border-2 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden" style={{ borderColor: `${value.color}10` }}>
                            <div className="absolute top-0 right-0 w-24 h-24 blur-3xl rounded-full opacity-10 -mr-12 -mt-12 transition-colors group-hover:opacity-20" style={{ backgroundColor: value.color }}></div>
                            <div className="relative z-10">
                                <div className="mb-6 p-3 w-fit rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-transform group-hover:scale-110" style={{ color: value.color }}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-black text-slate-800 dark:text-slate-100 italic uppercase mb-3 tracking-tight">{value.title}</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">{value.description}</p>
                                <div className="space-y-2">
                                    {value.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                                            <div className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800" style={{ backgroundColor: `${value.color}40` }}></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SubSection>

            <SubSection id="what-we-do">
                <SubSectionHeader>1.3 What We Do</SubSectionHeader>

                <div className="mb-6">
                    <h4 className="font-bold text-lg mb-4 text-slate-800 dark:text-slate-200">Our Services:</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-800">
                            <h5 className="font-bold text-lg mb-3 text-red-800 dark:text-red-300 flex items-center gap-2">
                                <span>🔥</span> Fire Safety Equipment
                            </h5>
                            <List>
                                <ListItem>Fire extinguisher sales, installation, inspection, maintenance</ListItem>
                                <ListItem>Fire hose reels, fire blankets, smoke detectors</ListItem>
                                <ListItem>Fire alarm systems</ListItem>
                                <ListItem>Full compliance and certification services</ListItem>
                            </List>
                        </div>

                        <div className="p-5 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-200 dark:border-orange-800">
                            <h5 className="font-bold text-lg mb-3 text-orange-800 dark:text-orange-300 flex items-center gap-2">
                                <span>👷</span> Workplace Safety Products
                            </h5>
                            <List>
                                <ListItem>Personal Protective Equipment (PPE) - all types</ListItem>
                                <ListItem>Workwear and uniforms (with custom branding)</ListItem>
                                <ListItem>Safety signage and emergency equipment</ListItem>
                                <ListItem>First aid supplies and safety showers</ListItem>
                            </List>
                        </div>
                    </div>
                </div>

                <div className="p-5 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h4 className="font-bold text-lg mb-3 text-blue-800 dark:text-blue-300">Our Customers:</h4>
                    <List>
                        <ListItem>Small businesses to large corporations</ListItem>
                        <ListItem>All industries across Tunisia</ListItem>
                        <ListItem>Government and private sector</ListItem>
                        <ListItem>Anyone who values safety and compliance</ListItem>
                    </List>
                </div>
            </SubSection>

            <SubSection id="team-structure">
                <SubSectionHeader>1.4 Our Team</SubSectionHeader>

                <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl border border-primary-200 dark:border-primary-800">
                        <h4 className="font-bold text-lg mb-4 text-primary-800 dark:text-primary-300">Leadership:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                                <div className="font-bold text-slate-900 dark:text-white">Karim BEN SALEM</div>
                                <div className="text-sm text-slate-500">Gérant (Managing Director)</div>
                            </div>
                            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                                <div className="font-bold text-slate-900 dark:text-white">Najla BEN SALEM</div>
                                <div className="text-sm text-slate-500">Co-Gérant & Sales Manager</div>
                            </div>
                            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                                <div className="font-bold text-slate-900 dark:text-white">Mohamed CHRAITI</div>
                                <div className="text-sm text-slate-500">Operations Manager</div>
                            </div>
                            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                                <div className="font-bold text-slate-900 dark:text-white">Mohamed Ali LENDA</div>
                                <div className="text-sm text-slate-500">Admin & Finance Manager</div>
                            </div>
                            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                                <div className="font-bold text-slate-900 dark:text-white">Hela DAOUD</div>
                                <div className="text-sm text-slate-500">Collection Manager</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                            <h4 className="font-bold text-lg mb-3 text-slate-800 dark:text-slate-200">Technical Operations:</h4>
                            <List>
                                <ListItem>2 Team Leaders supervising service delivery</ListItem>
                                <ListItem>8 Service Technicians in the field (Include Team Leaders)</ListItem>
                                <ListItem>Workshop Responsible managing refilling operations</ListItem>
                                <ListItem>Warehouse Responsible managing inventory</ListItem>
                            </List>
                        </div>

                        <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                            <h4 className="font-bold text-lg mb-3 text-slate-800 dark:text-slate-200">Sales & Commercial:</h4>
                            <List>
                                <ListItem>2 Sales Representatives (Sfax & Tunis territories)</ListItem>
                                <ListItem>Collection Agent supporting accounts receivable</ListItem>
                            </List>
                        </div>
                    </div>

                    <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border-l-4 border-primary-500">
                        <Paragraph className="font-bold text-lg text-primary-900 dark:text-primary-100 mb-0">
                            **We Work as One Team** - every role is important to our success!
                        </Paragraph>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

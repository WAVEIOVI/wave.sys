import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import List, { ListItem } from '../../../components/document-elements/List';
import { Phone, UserCheck, Shield, LifeBuoy, CreditCard, Clock, Info, AlertTriangle } from 'lucide-react';

export default function PracticalInfo() {
    return (
        <Section id="section-9">
            <SectionHeader>SECTION 9: PRACTICAL INFORMATION</SectionHeader>

            <SubSection id="emergency">
                <SubSectionHeader>9.1 Emergency Procedures</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                        <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl mb-6 shadow-sm">
                            <h5 className="font-bold text-sm mb-3 flex items-center gap-2">
                                <AlertTriangle className="text-red-500" size={18} />
                                🚨 Emergency Contacts
                            </h5>
                            <Table>
                                <TableRow isHeader>
                                    <TableCell isHeader>Service</TableCell>
                                    <TableCell isHeader>Number</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>**Police**</TableCell>
                                    <TableCell>197</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>**Ambulance**</TableCell>
                                    <TableCell>190</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>**Fire / Civil Prot.**</TableCell>
                                    <TableCell>198 / 193</TableCell>
                                </TableRow>
                            </Table>
                            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-2xl">
                                <span className="block text-[10px] font-black uppercase text-red-600 dark:text-red-400 mb-2 tracking-widest italic">SS+ Internal Response</span>
                                <div className="space-y-1">
                                    <span className="block text-sm font-bold text-slate-800 dark:text-slate-200">Ops Manager (Mohamed CHRAITI)</span>
                                    <span className="block text-sm font-bold text-slate-800 dark:text-slate-200">Gérant (Karim BEN SALEM)</span>
                                    <span className="block text-sm font-bold text-slate-800 dark:text-slate-200">Admin Manager (Mohamed Ali LENDA)</span>
                                </div>
                                <p className="text-[10px] text-slate-500 mt-3 font-bold italic">After-hours: Call Operations Manager first.</p>
                            </div>
                        </div>

                        <div className="p-6 bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-500 rounded-r-3xl">
                            <h6 className="font-black text-orange-800 dark:text-orange-300 text-xs uppercase mb-4 tracking-widest italic">🏃 Evacuation Procedure</h6>
                            <List type="ordered" className="text-xs font-bold space-y-2">
                                <ListItem>**Alarm Sounds:** Stop work immediately.</ListItem>
                                <ListItem>**Leave Belongings:** Take only phone/keys.</ListItem>
                                <ListItem>**Evacuate:** Use nearest safe exit. NO elevators.</ListItem>
                                <ListItem>**Assembly Point:** Parking lot across street.</ListItem>
                                <ListItem>**Wait:** Do NOT re-enter until "All Clear".</ListItem>
                            </List>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="p-6 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-3xl">
                            <h6 className="font-black text-red-800 dark:text-red-300 text-xs uppercase mb-4 tracking-widest italic">🔥 Fire Emergency</h6>
                            <List type="ordered" className="text-xs font-bold space-y-2">
                                <ListItem>**Discover Fire:** Activate alarm / Shout "Fire!".</ListItem>
                                <ListItem>**Call 198:** Give address/details.</ListItem>
                                <ListItem>**Evacuate:** Close doors behind you.</ListItem>
                                <ListItem>**Small Fire:** Use extinguisher (PASS) ONLY if trained.</ListItem>
                            </List>
                        </div>
                        <div className="p-6 bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 rounded-r-3xl">
                            <h6 className="font-black text-blue-800 dark:text-blue-300 text-xs uppercase mb-4 tracking-widest italic">🚑 Medical Emergency</h6>
                            <List type="ordered" className="text-xs font-bold space-y-2">
                                <ListItem>**Serious Injury:** Call 190 (Ambulance).</ListItem>
                                <ListItem>**First Aid:** Only if trained. Kits in office/vehicles.</ListItem>
                                <ListItem>**Stay:** Don't move person unless danger.</ListItem>
                                <ListItem>**Report:** Notify Manager immediately.</ListItem>
                            </List>
                        </div>
                        <div className="p-6 bg-slate-100 dark:bg-slate-800 border-l-4 border-slate-500 rounded-r-3xl">
                            <h6 className="font-black text-slate-800 dark:text-slate-300 text-xs uppercase mb-4 tracking-widest italic">🛡️ Security Emergency</h6>
                            <List className="text-xs font-bold space-y-2">
                                <ListItem>**Threat/Violence:** Leave area. Call 197.</ListItem>
                                <ListItem>**Theft:** Report to manager. Don't touch evidence.</ListItem>
                                <ListItem>**Suspicious Person:** Describe to manager. Don't confront.</ListItem>
                            </List>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="facilities">
                <SubSectionHeader>9.2 Facilities & Amenities</SubSectionHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { icon: '🏢', title: 'Office & Workshop', desc: 'Sfax (Main) & Tunis. Mo-Fr 8-17, Sa 8-12. Limited access zones.' },
                        { icon: '🅿️', title: 'Parking', desc: 'Free employee parking. Designated spots for company vehicles only.' },
                        { icon: '☕', title: 'Kitchen / Break', desc: 'Fridge/Microwave available. Clean up daily. Clear fridge Friday.' },
                        { icon: '🚭', title: 'Smoking Area', desc: 'Outdoor designated spots ONLY. Prohibited in reach of buildings/cars.' }
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-sm flex flex-col items-center text-center group hover:shadow-xl transition-all">
                            <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</span>
                            <h6 className="font-black text-xs uppercase mb-2 text-slate-800 dark:text-slate-100 italic">{item.title}</h6>
                            <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </SubSection>

            <SubSection id="contacts">
                <SubSectionHeader>9.3 Company Contacts</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { role: 'Gérant', name: 'Karim BEN SALEM', contact: 'Escalations, Major Issues', icon: <Shield /> },
                        { role: 'Co-Gérant / Sales', name: 'Najla BEN SALEM', contact: 'Sales Support, Clients', icon: <UserCheck /> },
                        { role: 'Operations Mgr', name: 'Mohamed CHRAITI', contact: 'Technical, Safety, Logistics', icon: <LifeBuoy /> },
                        { role: 'Admin & Finance', name: 'Mohamed Ali LENDA', contact: 'HR, Payroll, IT, Grievances', icon: <Info /> },
                        { role: 'Collection Mgr', name: 'Hela DAOUD', contact: 'Billing & Collection', icon: <CreditCard /> },
                    ].map((person, i) => (
                        <div key={i} className="group p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-150 transition-transform duration-700 text-primary-500">
                                {person.icon}
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-2xl bg-primary-50 dark:bg-primary-900/20 text-primary-600">
                                        {person.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-800 dark:text-slate-200 text-sm italic uppercase tracking-wider">{person.name}</h4>
                                        <p className="text-[10px] font-bold text-primary-500 uppercase">{person.role}</p>
                                    </div>
                                </div>
                                <p className="text-[11px] text-slate-500 font-medium border-t border-slate-100 dark:border-slate-800 pt-4 leading-relaxed">{person.contact}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-10 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent"></div>
                    <div className="flex items-center gap-4 mb-10 relative z-10">
                        <div className="p-3 bg-blue-500 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                            <Phone size={24} />
                        </div>
                        <h5 className="text-2xl font-black text-white italic uppercase tracking-tight">Who To Contact For...</h5>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 relative z-10">
                        {[
                            { label: 'Payroll / Benefits / Leave', value: 'Admin Manager' },
                            { label: 'HR Policies / Grievances', value: 'Admin Manager' },
                            { label: 'Technical / Field Issues', value: 'Team Leader → Ops Mgr' },
                            { label: 'Customer issues / escalations', value: 'TL → Ops Manager' },
                            { label: 'IT / WAVE PLUS', value: 'Admin Manager' },
                            { label: 'Facilities / Repairs', value: 'Admin Manager' }
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center py-3 border-b border-slate-800 group hover:border-primary-500 transition-colors">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] group-hover:text-slate-200 transition-colors">{item.label}</span>
                                <span className="text-xs font-black text-primary-400 italic uppercase group-hover:text-primary-300 transition-colors">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </SubSection>

            <SubSection id="faqs">
                <SubSectionHeader>9.4 Frequently Asked Questions</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6 px-4">
                            <div className="p-2 bg-emerald-500 rounded-xl text-white">
                                <UserCheck size={20} />
                            </div>
                            <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 italic uppercase tracking-tight">Employment & Pay</h4>
                        </div>
                        {[
                            { q: "When do I convert from CDD to CDI?", a: "After successful completion of 6-month CDD contract (assuming satisfactory performance)." },
                            { q: "What if payday falls on weekend or holiday?", a: "Salary paid on last working day before the 5th." },
                            { q: "When is the 13th month paid?", a: "December (with December salary or separately before Dec 31)." },
                            { q: "Can I get a salary advance?", a: "After probation, for emergencies (max 50% net salary). 1 per 6 months. Repaid next paycheck." },
                            { q: "How much notice for resignation?", a: "1 month written notice." }
                        ].map((faq, i) => (
                            <div key={i} className="group p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-start gap-5">
                                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-primary-500 font-black italic scale-90 group-hover:scale-100 transition-transform">Q</div>
                                    <div>
                                        <p className="text-sm font-black text-slate-800 dark:text-slate-100 italic uppercase mb-3 leading-tight tracking-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{faq.q}</p>
                                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6 px-4">
                            <div className="p-2 bg-orange-500 rounded-xl text-white">
                                <Clock size={20} />
                            </div>
                            <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 italic uppercase tracking-tight">Workplace & Leave</h4>
                        </div>
                        {[
                            { q: "Can I take leave in first 6 months?", a: "Generally no. Accrued leave available after 6 months. Emergency unpaid leave with approval." },
                            { q: "Sick on Saturday?", a: "Only if strictly necessary/emergency. Doctor's certificate required." },
                            { q: "What if I'm injured at work?", a: "CNSS covers costs + incapacity benefits (if declared in 48h). SS+ may supplement salary." },
                            { q: "Unsafe task?", a: "STOP. Tell Team Leader immediately. You have the right to refuse unsafe work." }
                        ].map((faq, i) => (
                            <div key={i} className="group p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-start gap-5">
                                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-primary-500 font-black italic scale-90 group-hover:scale-100 transition-transform">Q</div>
                                    <div>
                                        <p className="text-sm font-black text-slate-800 dark:text-slate-100 italic uppercase mb-3 leading-tight tracking-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{faq.q}</p>
                                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

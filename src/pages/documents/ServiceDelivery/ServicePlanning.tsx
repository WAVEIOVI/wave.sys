
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ReferenceLine } from 'recharts';
import { motion } from 'framer-motion';
import { 
    Clock, 
    ShieldCheck, 
    Target, 
    ClipboardList, 
    Map as MapIcon, 
    Users, 
    Calendar, 
    Share2 
} from 'lucide-react';

export default function ServicePlanning() {
    return (
        <Section id="section-1">
            <SectionHeader>SECTION 1: SERVICE PLANNING & SCHEDULING</SectionHeader>

            <SubSection id="annual-monthly-planning">
                <SubSectionHeader>1.1 ANNUAL AND MONTHLY PLANNING</SubSectionHeader>

                <div className="space-y-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Objective Section */}
                        <div className="relative overflow-hidden p-8 rounded-[2.5rem] bg-gradient-to-br from-primary-50 to-white dark:from-slate-900 dark:to-slate-950 border border-primary-100 dark:border-primary-900/30">
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <Target className="w-24 h-24 text-primary-600" />
                            </div>
                            <div className="relative z-10">
                                <h4 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-2 italic">Annual Service Planning</h4>
                                <p className="text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed italic">
                                    <strong className="text-primary-600 uppercase text-xs tracking-widest block mb-1">Objective</strong>
                                    Plan all contracted services for the year to ensure timely delivery and optimal resource utilization. 
                                    Conducted every December for the following year.
                                </p>
                            </div>
                        </div>

                        {/* Steps Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    step: "01",
                                    title: "MSA Review",
                                    role: "Ops + Sales Responsible",
                                    icon: ClipboardList,
                                    items: [
                                        "Review all active MSA contracts",
                                        "Categorize by frequency (Annual/Semi/Quarterly)",
                                        "Note renewal schedules and start/end dates",
                                        "Calculate total required annual visits"
                                    ],
                                    color: "primary"
                                },
                                {
                                    step: "02",
                                    title: "Geographic Mapping",
                                    role: "Operations Team",
                                    icon: MapIcon,
                                    items: [
                                        "Plot all customers on geographic map",
                                        "Group into zones (Sfax/Tunis/Greater/Other)",
                                        "Define 50km and 120km regional boundaries",
                                        "Identify density clusters for route optimization"
                                    ],
                                    color: "blue"
                                },
                                {
                                    step: "03",
                                    title: "Resource Allocation",
                                    role: "Operations Responsible",
                                    icon: Users,
                                    items: [
                                        "Assign teams based on site proximity",
                                        "Calculate technician capacity (22 days/month)",
                                        "Match capacity to contracted commitments",
                                        "Plan for peak period temporary staffing"
                                    ],
                                    color: "emerald"
                                },
                                {
                                    step: "04",
                                    title: "Annual Calendar",
                                    role: "Operations Responsible",
                                    icon: Calendar,
                                    items: [
                                        "Balance workload evenly across 12 months",
                                        "Respect customer blackout/preferred dates",
                                        "Align service before MSA renewal dates",
                                        "Factor in seasonal and holiday constraints"
                                    ],
                                    color: "orange"
                                },
                                {
                                    step: "05",
                                    title: "Communicate",
                                    role: "Full Team Briefing",
                                    icon: Share2,
                                    items: [
                                        "Load full annual plan into WAVE PLUS",
                                        "Configure automated due-date reminders",
                                        "Share renewal planning with Sales team",
                                        "Brief team leaders on performance targets"
                                    ],
                                    color: "purple"
                                }
                            ].map((item, idx) => {
                                const themeClasses: Record<string, string> = {
                                    primary: "bg-primary-50 dark:bg-primary-950/30 text-primary-600",
                                    blue: "bg-blue-50 dark:bg-blue-950/30 text-blue-600",
                                    emerald: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600",
                                    orange: "bg-orange-50 dark:bg-orange-950/30 text-orange-600",
                                    purple: "bg-purple-50 dark:bg-purple-950/30 text-purple-600",
                                };
                                return (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="group p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-primary-500/50 transition-all duration-300 relative overflow-hidden"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={`p-3 rounded-2xl ${themeClasses[item.color] || themeClasses.primary} group-hover:scale-110 transition-transform`}>
                                                <item.icon size={24} />
                                            </div>
                                            <span className="text-4xl font-black text-slate-100 dark:text-slate-900 group-hover:text-primary-500/10 transition-colors uppercase italic">{item.step}</span>
                                        </div>
                                        <h5 className="font-bold text-slate-800 dark:text-slate-100 mb-1">{item.title}</h5>
                                        <p className="text-[10px] font-black text-primary-600 uppercase tracking-widest mb-4 opacity-70 italic">{item.role}</p>
                                        <ul className="space-y-2">
                                            {item.items.map((li, i) => (
                                                <li key={i} className="text-[11px] text-slate-500 dark:text-slate-400 flex gap-2 leading-relaxed">
                                                    <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 mt-1.5 shrink-0" />
                                                    {li}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                );
                            })}
                            
                            {/* Special Note Card for Step 2 Detail */}
                            <div className="p-6 bg-slate-900 border border-slate-800 rounded-[2rem] shadow-xl text-white flex flex-col justify-center">
                                <h6 className="text-[10px] font-black text-primary-400 uppercase mb-4 tracking-widest text-center border-b border-white/10 pb-2 italic">Regional Zones Definition</h6>
                                <div className="space-y-2">
                                    {[
                                        { n: "Core Region", d: "Within 50km of office" },
                                        { n: "Greater Region", d: "50-120km from office" },
                                        { n: "Outlying", d: "Beyond 120km reach" }
                                    ].map((zone, i) => (
                                        <div key={i} className="flex justify-between items-center text-[10px] p-2 bg-white/5 rounded-lg border border-white/5">
                                            <span className="font-bold text-slate-300 italic">{zone.n}</span>
                                            <span className="text-primary-400 font-mono">{zone.d}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Monthly Service Planning Section */}
                    <div className="pt-16 border-t border-slate-200 dark:border-slate-800">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white shadow-xl shadow-primary-500/20 transform -rotate-3 hover:rotate-0 transition-all">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-3xl font-black text-slate-800 dark:text-slate-100 italic">Monthly Service Planning</h4>
                                    <p className="text-[10px] font-black text-primary-600 uppercase tracking-[0.3em] opacity-80 flex items-center gap-2 italic">
                                        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                                        Process Conducted Last Week of Previous Month
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    {
                                        step: "01",
                                        title: "Generate Service List",
                                        role: "Operations Responsible",
                                        icon: ClipboardList,
                                        desc: "WAVE PLUS generates a comprehensive list of all services due, including MSA commitments, ad-hoc orders, follow-ups, and overdue tasks.",
                                        color: "blue"
                                    },
                                    {
                                        step: "02",
                                        title: "Planning Meeting",
                                        role: "Ops + Team Leaders",
                                        icon: Users,
                                        desc: "Review services due and identify constraints like staff leave, vehicle maintenance, material levels, and customer site access windows.",
                                        color: "emerald"
                                    },
                                    {
                                        step: "03",
                                        title: "Customer Confirmation",
                                        role: "Operations Team",
                                        icon: Share2,
                                        desc: "Verification calls to confirm access and schedule. MSA customers are notified of their assigned week; new services are formally scheduled.",
                                        color: "purple"
                                    },
                                    {
                                        step: "04",
                                        title: "Material & Resource Check",
                                        role: "Full Team Ready",
                                        icon: ShieldCheck,
                                        desc: "Final verification of refilling agents, vehicle status, and equipment calibration. Materials are ordered if lead times require.",
                                        color: "orange"
                                    }
                                ].map((item, idx) => {
                                    const colorMap: Record<string, string> = {
                                        blue: "bg-blue-500 text-blue-500 shadow-blue-500/20",
                                        emerald: "bg-emerald-500 text-emerald-500 shadow-emerald-500/20",
                                        purple: "bg-purple-500 text-purple-500 shadow-purple-500/20",
                                        orange: "bg-orange-500 text-orange-500 shadow-orange-500/20",
                                    };
                                    const theme = colorMap[item.color] || colorMap.blue;
                                    const [bgColor, textColor, shadowColor] = theme.split(' ');

                                    return (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ y: -5 }}
                                            className="relative p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                                        >
                                            <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 -mr-8 -mt-8 group-hover:scale-110 transition-transform ${textColor}`}>
                                                <item.icon className="w-full h-full" />
                                            </div>
                                            
                                            <div className="flex justify-between items-start mb-8">
                                                <div className={`w-12 h-12 rounded-2xl ${bgColor} flex items-center justify-center text-white shadow-lg ${shadowColor}`}>
                                                    <item.icon size={24} />
                                                </div>
                                                <span className="text-4xl font-black text-slate-100 dark:text-slate-900 group-hover:text-primary-500/10 transition-colors uppercase italic">{item.step}</span>
                                            </div>
                                            
                                            <h5 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{item.title}</h5>
                                            <p className="text-[10px] font-black text-primary-600 uppercase tracking-widest mb-6 opacity-70 italic">{item.role}</p>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium italic">
                                                {item.desc}
                                            </p>

                                            <div className={`mt-8 h-1 w-12 ${bgColor} opacity-20 group-hover:w-full group-hover:opacity-100 transition-all duration-700`} />
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <Blockquote type="info" title="Finalization Rule" className="mt-12">
                                The monthly schedule must include strategic buffer days for emergencies and unexpected delays. 
                                Once finalized, it is pushed to all technician tablets via WAVE PLUS before the 1st of each month.
                            </Blockquote>
                        </motion.div>
                    </div>
                </div>

                <div className="p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3.5rem] shadow-xl my-12">
                    <h5 className="text-[10px] font-black text-primary-600 uppercase mb-8 tracking-[0.4em] italic text-center">Projected Service Delivery Timeline (Typical Large Site)</h5>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                layout="vertical"
                                data={[
                                    { stage: 'Site Survey & Planning', start: 0, duration: 2, fill: '#94a3b8' },
                                    { stage: 'Material Preparation', start: 2, duration: 1, fill: '#64748b' },
                                    { stage: 'Mobilization', start: 3, duration: 1, fill: '#475569' },
                                    { stage: 'Execution (On-Site)', start: 4, duration: 7, fill: '#3b82f6' },
                                    { stage: 'Testing & QC', start: 11, duration: 2, fill: '#10b981' },
                                    { stage: 'Reporting & Closure', start: 13, duration: 2, fill: '#f59e0b' },
                                ]}
                                margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
                            >
                                <XAxis type="number" hide domain={[0, 16]} />
                                <YAxis
                                    dataKey="stage"
                                    type="category"
                                    tick={{ fontSize: 10, fontWeight: 'bold', fill: '#64748b' }}
                                    width={140}
                                />
                                <Tooltip
                                    cursor={{ fill: 'transparent' }}
                                    content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            const data = payload[0].payload;
                                            return (
                                                <div className="bg-slate-900 text-white p-3 rounded-xl border border-slate-800 text-[10px] shadow-2xl">
                                                    <p className="font-bold text-primary-400 mb-1 uppercase italic">{data.stage}</p>
                                                    <p className="text-slate-400">Duration: <span className="text-white">{data.duration} Days</span></p>
                                                    <p className="text-slate-400">Timeline: Day {data.start} - {data.start + data.duration}</p>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Bar dataKey="duration" minPointSize={5} radius={[0, 12, 12, 0]}>
                                    {[
                                        { fill: '#94a3b8' },
                                        { fill: '#64748b' },
                                        { fill: '#475569' },
                                        { fill: '#3b82f6' },
                                        { fill: '#10b981' },
                                        { fill: '#f59e0b' },
                                    ].map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Bar>
                                <ReferenceLine x={4} stroke="#ef4444" strokeDasharray="3 3" label={{ position: 'top', value: 'Mobilized', fill: '#ef4444', fontSize: 10, fontWeight: 'bold' }} />
                                <ReferenceLine x={11} stroke="#10b981" strokeDasharray="3 3" label={{ position: 'top', value: 'Testing', fill: '#10b981', fontSize: 10, fontWeight: 'bold' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </SubSection>

            <SubSection id="weekly-route-planning">
                <SubSectionHeader>1.2 WEEKLY ROUTE PLANNING</SubSectionHeader>
                <div className="space-y-12 my-10">
                    {/* Meeting Overview Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 bg-gradient-to-br from-slate-900 to-slate-950 rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Calendar className="w-32 h-32 text-primary-500" />
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-[10px] font-black uppercase tracking-widest">
                                    <Clock className="w-3 h-3" /> Recurring Event
                                </div>
                                <h4 className="text-3xl font-black text-white italic">Weekly Planning Meeting</h4>
                                <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-primary-500" />
                                        <span>Every <strong className="text-white">Friday</strong></span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <Clock className="w-4 h-4 text-primary-500" />
                                        <span>30-45 Minutes</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 min-w-[280px]">
                                <p className="text-[10px] font-black text-primary-500 uppercase tracking-widest mb-4">Core Attendees</p>
                                <div className="space-y-3">
                                    {[
                                        { name: "Mohamed CHRAITI", role: "Ops Responsible" },
                                        { name: "All Team Leaders", role: "Coordination" },
                                        { name: "Technicians", role: "Optional Input" }
                                    ].map((person, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-primary-500" />
                                            <div>
                                                <p className="text-xs font-bold text-slate-100 uppercase">{person.name}</p>
                                                <p className="text-[9px] text-slate-500 font-black tracking-tighter uppercase italic">{person.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Operational Agenda Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Review Current Week", time: "10 Min", icon: Share2, desc: "Services completed vs. planned, issues found, and feedback.", color: "blue" },
                            { step: "02", title: "Plan Next Week", time: "25 Min", icon: Target, desc: "List all services due & optimize routes per zone.", color: "emerald" },
                            { step: "03", title: "Communicate", time: "05 Min", icon: Users, desc: "Distribute daily schedules via Print + WAVE PLUS.", color: "purple" },
                            { step: "04", title: "Material Prep", time: "Continuous", icon: ShieldCheck, desc: "Verify refilling mats, parts, and equipment readiness.", color: "orange" }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="group p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-2xl bg-${item.color}-50 dark:bg-${item.color}-950/30 text-${item.color}-600 group-hover:scale-110 transition-transform`}>
                                        <item.icon size={20} />
                                    </div>
                                    <span className="text-2xl font-black text-slate-100 dark:text-slate-900 group-hover:text-primary-500/10 transition-colors uppercase italic">{item.step}</span>
                                </div>
                                <h6 className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-1">{item.title}</h6>
                                <p className="text-[9px] font-black text-primary-600 uppercase tracking-widest mb-4 opacity-70 italic">{item.time}</p>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 italic leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Deep Dive Section: Step 2 Route Optimization */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="p-10 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] border border-slate-200 dark:border-slate-800 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/5 blur-[100px] -ml-32 -mt-32"></div>
                        
                        <div className="flex flex-col items-center text-center mb-12">
                            <h5 className="text-[10px] font-black text-primary-600 uppercase tracking-[0.4em] mb-4 italic">Geographic Route Optimization</h5>
                            <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100 max-w-xl">Strategy: Minimize Travel & Maximize On-Site Time</h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Optimization Principles */}
                            <div className="lg:col-span-1 space-y-4">
                                <div className="p-6 bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                    <h6 className="text-[10px] font-black text-primary-600 uppercase mb-6 tracking-widest border-b border-slate-100 dark:border-slate-800 pb-2">Core Principles</h6>
                                    <ul className="space-y-4">
                                        {[
                                            "Group services by zone (same area same day)",
                                            "Plan logical routes (avoid crisscrossing)",
                                            "Account for 30 min travel between nearby",
                                            "Max 1-3 services per tech per day"
                                        ].map((p, i) => (
                                            <li key={i} className="flex gap-3 text-xs text-slate-600 dark:text-slate-400 font-medium italic">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Good vs Bad Route Visualizer */}
                            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-200/50 dark:border-emerald-800/30 rounded-3xl group">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                                            <Share2 size={18} />
                                        </div>
                                        <span className="font-black text-xs text-emerald-800 dark:text-emerald-400 uppercase tracking-widest italic">✓ Operational Excellence</span>
                                    </div>
                                    <p className="text-[11px] text-emerald-700 dark:text-emerald-300 font-medium italic mb-4">Monday AM: Sfax Industrial Zone (Cust A) → Monday PM: Sfax Industrial Zone (Cust B) + Cust C (nearby). Minimal travel.</p>
                                    <div className="h-2 w-full bg-emerald-200 dark:bg-emerald-900 rounded-full overflow-hidden">
                                        <div className="h-full w-[90%] bg-emerald-500"></div>
                                    </div>
                                    <p className="text-[9px] text-emerald-600/50 mt-2 font-black uppercase tracking-widest">Travel Efficiency: 90%</p>
                                </div>

                                <div className="p-6 bg-rose-50/50 dark:bg-rose-950/10 border border-rose-200/50 dark:border-rose-800/30 rounded-3xl group">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-lg shadow-rose-500/20">
                                            <Target size={18} />
                                        </div>
                                        <span className="font-black text-xs text-rose-800 dark:text-rose-400 uppercase tracking-widest italic">✗ Route Inefficiency</span>
                                    </div>
                                    <p className="text-[11px] text-rose-700 dark:text-rose-300 font-medium italic mb-4">Monday AM: North Sfax → Monday PM: South Sfax (40km) → Tuesday AM: North Sfax again. Wasted time and fuel.</p>
                                    <div className="h-2 w-full bg-rose-200 dark:bg-rose-900 rounded-full overflow-hidden">
                                        <div className="h-full w-[30%] bg-rose-500"></div>
                                    </div>
                                    <p className="text-[9px] text-rose-600/50 mt-2 font-black uppercase tracking-widest">Travel Efficiency: 30%</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 3: Technician Assignment Grid */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h4 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-widest italic border-l-4 border-primary-500 pl-4">Step 3: Team Configuration</h4>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter italic">Criteria: Skills Match, Workload & Geography</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "3-PERSON TEAM", icon: "👥👤", role: "TL + 2 Technicians", desc: "Large facilities (50+ units), complex installs, extended projects (2-15 days), VIP QA.", color: "primary" },
                                { title: "2-PERSON TEAM", icon: "👥", role: "TL + 1 Technician", desc: "Medium facilities (20-50 units), training pairings, installations/complex repairs.", color: "blue" },
                                { title: "SOLO TECHNICIAN", icon: "👤", role: "Level 3+ Only", desc: "Routine inspections (< 20 units), simple refilling, quick service calls. High mobility.", color: "emerald" }
                            ].map((team, idx) => (
                                <motion.div 
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform text-2xl rotate-12">
                                        {team.icon}
                                    </div>
                                    <p className={`text-[10px] font-black text-${team.color}-600 uppercase tracking-widest mb-1 italic`}>{team.title}</p>
                                    <h6 className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-4">{team.role}</h6>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400 italic leading-relaxed">{team.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Daily Schedule Mockup */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <div className="text-center">
                            <h4 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-widest italic mb-2">Step 5: Daily Schedule Format</h4>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Automatic Synchronization: WAVE PLUS → Tablet Interface</p>
                        </div>
                        
                        <div className="max-w-4xl mx-auto p-1 bg-gradient-to-br from-slate-700 to-slate-900 rounded-[2.5rem] shadow-2xl relative">
                            <div className="p-8 bg-slate-950 rounded-[2.3rem] overflow-hidden">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-6 mb-6 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-primary-500 font-black uppercase tracking-[0.2em] italic">Technician Assignment</p>
                                        <p className="text-sm font-bold text-white tracking-widest">YASSIN B. <span className="text-slate-600 mx-2">/</span> <span className="text-slate-400">TL: AMINE K.</span></p>
                                    </div>
                                    <div className="px-4 py-2 bg-white/5 rounded-2xl border border-white/10 text-right">
                                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Vehicle Fleet ID</p>
                                        <p className="text-xs font-mono font-bold text-primary-400">TU-2024-V02</p>
                                    </div>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/5">
                                                <th className="py-4 text-[9px] font-black text-slate-600 uppercase tracking-widest">Time</th>
                                                <th className="py-4 text-[9px] font-black text-slate-600 uppercase tracking-widest">Customer Site</th>
                                                <th className="py-4 text-[9px] font-black text-slate-600 uppercase tracking-widest">Service Type</th>
                                                <th className="py-4 text-[9px] font-black text-slate-600 uppercase tracking-widest">Zone</th>
                                                <th className="py-4 text-[9px] font-black text-slate-600 uppercase tracking-widest">Contact</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-[10px]">
                                            {[
                                                { time: "08:00", cust: "ABC Co (15 units)", type: "Annual Insp.", zone: "Sfax Industry", contact: "Ahmed (22...)" },
                                                { time: "10:30", cust: "XYZ Factory", type: "Refill (3x 6kg)", zone: "Km 8 Gabes", contact: "Fatima (98...)" },
                                                { time: "14:00", cust: "DEF Services (8u)", type: "Semi-Annual", zone: "Centre Ville", contact: "Mohamed (55...)" }
                                            ].map((row, i) => (
                                                <tr key={i} className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors group">
                                                    <td className="py-4 font-black text-white">{row.time}</td>
                                                    <td className="py-4 text-slate-400 font-bold group-hover:text-primary-400 transition-colors">{row.cust}</td>
                                                    <td className="py-4">
                                                        <span className="px-2 py-0.5 rounded-full bg-primary-500/10 text-primary-500 text-[8px] font-black uppercase">
                                                            {row.type}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 text-slate-500">{row.zone}</td>
                                                    <td className="py-4 text-slate-500 font-mono italic">{row.contact}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mt-8 flex flex-col md:flex-row gap-6 p-6 bg-white/[0.03] rounded-3xl border border-white/5">
                                    <div className="flex-1 space-y-4">
                                        <p className="text-[9px] font-black text-primary-500 uppercase tracking-widest italic flex items-center gap-2">
                                            <ClipboardList size={12} /> Special Instructions
                                        </p>
                                        <p className="text-[10px] text-slate-400 leading-relaxed italic">
                                            ABC: Use rear entrance. XYZ: Mandatory PPE. DEF: Confirm replacement POC for next visit.
                                        </p>
                                    </div>
                                    <div className="flex-1 space-y-4 border-l border-white/5 pl-6">
                                        <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest italic flex items-center gap-2">
                                            <ShieldCheck size={12} /> Required Materials
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {["ABC Powder (18kg)", "Gauges (x2)", "Service Tags (x25)", "O-Rings (Kit)"].map((m, i) => (
                                                <span key={i} className="text-[9px] px-2 py-1 bg-white/5 rounded-lg text-slate-400 font-mono border border-white/5">{m}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </SubSection>

            <SubSection id="technician-assignment-rules">
                <SubSectionHeader>1.3 TECHNICIAN ASSIGNMENT RULES</SubSectionHeader>
                <div className="space-y-6">
                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">Competency-Based Assignment</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                        {[
                            { l: "Level 0 - Starter/Trial", e: "0-3 Months", d: "Basic visual inspections; equipment handling assistance.", s: "Always paired with Level 3+ or Team Leader.", f: "Assessing competency, performance, discipline, learning capacity.", c: "border-slate-200" },
                            { l: "Level 1 - Junior", e: "3-12 Months", d: "Visual inspections, basic maintenance, simple refilling under supervision.", s: "Paired with Level 2+ or Team Leader.", f: "Building foundational skills and customer service abilities.", c: "border-blue-100" },
                            { l: "Level 2 - Technician", e: "1-3 Years", d: "Routine inspections independently, powder/CO2 refilling, component replacement.", s: "Works solo for routine; paired for complex.", f: "Improving efficiency (25-50 units/day) and problem-solving.", c: "border-blue-300" },
                            { l: "Level 3 - Experienced", e: "3-5 Years", d: "All routine services, foam/clean agent, complex repairs, complaint handling.", s: "Mentors Level 0-1, quality oversight.", f: "Trusted for Large/VIP/Multi-day projects. (35-60 units/day)", c: "border-emerald-300" },
                            { l: "Level 4 - Senior", e: "5-7 Years", d: "Specialized systems, training delivery, complex problem-solving.", s: "Mentors junior techs, assists TLs, QC role.", f: "Trusted for VIP/Extended/Emergency recovery. (50-75 units/day)", c: "border-emerald-500" },
                            { l: "Level 5 - Master", e: "7+ Years", d: "Expert level all services, technical consultations, process improvements.", s: "Technical authority, mentors all levels.", f: "Supports operational excellence. (60-75 units/day)", c: "border-primary-500" },
                        ].map((item, i) => (
                            <div key={i} className={`p-6 bg-white dark:bg-slate-950 border-2 ${item.c} rounded-[2.5rem] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow`}>
                                <h6 className="text-[10px] font-black text-slate-800 dark:text-slate-200 uppercase mb-2 tracking-tighter flex justify-between">
                                    <span>{item.l}</span>
                                    <span className="text-slate-400 font-normal">{item.e}</span>
                                </h6>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mb-2 font-medium">{item.d}</p>
                                <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-900 space-y-2">
                                    <p className="text-[9px] text-slate-400 italic leading-tight"><span className="font-bold uppercase text-[8px] text-slate-500 not-italic">Supervision:</span> {item.s}</p>
                                    <p className="text-[9px] text-primary-600/70 dark:text-primary-400/70 font-bold leading-tight uppercase"><span className="text-slate-500 text-[8px]">Focus:</span> {item.f}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[3rem] border border-slate-200 dark:border-slate-800">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                            <ShieldCheck className="text-primary-500" size={18} />
                            Team Leader Levels
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { l: "Team Leader Level 1", r: "Must be Level 3+ tech + license. Leads 2-person teams; coordinates daily work.", f: "Leadership & organizational skills." },
                                { l: "Team Leader Level 2", r: "Must be Level 4+ tech + license. Leads 3-person teams; manages complex projects & escalations.", f: "Strategic thinking & people management." },
                                { l: "Team Leader Level 3", r: "Must be Level 5 tech + license. Leads large teams; mentors other TLs.", f: "Operational efficiency optimization." },
                            ].map((tl, i) => (
                                <div key={i} className="space-y-2 italic">
                                    <span className="font-black block uppercase text-[10px] text-primary-600">{tl.l}</span>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{tl.r}</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Focus: {tl.f}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                        <Table>
                            <TableRow isHeader>
                                <TableCell isHeader className="bg-slate-50 dark:bg-slate-900 italic">Service Type</TableCell>
                                <TableCell isHeader className="bg-slate-50 dark:bg-slate-900 italic">Assign To</TableCell>
                                <TableCell isHeader className="bg-slate-50 dark:bg-slate-900 italic">Notes</TableCell>
                            </TableRow>
                            {[
                                { t: "Routine Semi-Annual Inspection (< 20 units)", a: "Level 2-5 solo", n: "Straightforward, 1 work order" },
                                { t: "Routine Annual Inspection (< 20 units)", a: "Level 2-5 solo", n: "Document thoroughly, 1 work order" },
                                { t: "Large Facility Inspection (50+ units)", a: "3-person team: TL + 2 technicians (Level 2+)", n: "Efficiency and coverage, 1-2 work orders" },
                                { t: "Medium Facility Inspection (20-50 units)", a: "2-person team: TL + technician or Level 3+ pair", n: "Balanced approach, 1 work order" },
                                { t: "Refilling - Simple (1-5 units, powder or CO2)", a: "Level 2-5 solo", n: "Workshop or on-site, 1 work order" },
                                { t: "Refilling - Complex (foam, clean agent)", a: "Level 3-5 solo or with supervision for Level 2", n: "More technical, 1 work order" },
                                { t: "Installation - New Equipment", a: "2-person team: Level 3+ with Level 2+", n: "Quality critical, 1-2 work orders" },
                                { t: "Extended-Duration Projects (2-15+ days)", a: "3-person team: TL (Level 2-3) + 2 technicians", n: "Sustained effort, multiple work orders" },
                                { t: "Fire Alarm System Service", a: "Level 4-5 with electrical knowledge or TL Level 2+", n: "Specialized, 1 work order" },
                                { t: "VIP/Key Account Service", a: "Level 4-5 or 2-person team with TL review", n: "Relationship important, 1 work order" },
                                { t: "Emergency Breakdown", a: "Level 3-5 solo if available; Level 2 with TL support", n: "Problem-solving needed, 1 work order" },
                                { t: "Customer Complaint Follow-up", a: "Level 4-5 + TL or Operations Responsible", n: "Recover relationship, 1 work order" },
                            ].map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-bold text-xs">{row.t}</TableCell>
                                    <TableCell className="text-xs text-slate-600 dark:text-slate-400">{row.a}</TableCell>
                                    <TableCell className="text-[10px] italic text-slate-500">{row.n}</TableCell>
                                </TableRow>
                            ))}
                        </Table>
                    <div className="p-10 bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 rounded-[3.5rem] shadow-2xl text-white italic relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <ShieldCheck size={120} />
                        </div>
                        <h6 className="text-[10px] font-black text-primary-400 uppercase mb-4 tracking-[0.4em] text-center border-b border-white/10 pb-4">Workload Balancing & Capacity</h6>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            <div className="space-y-4">
                                <Paragraph className="text-xs text-slate-300">Each technician processes 1-4 work orders/day (avg 2-3). Capacity varies by level: Level 0-1 (15-30u), Level 2 (25-50u), Level 3 (35-60u), Level 4-5 (50-75u). Adjust for complexity, travel, and training.</Paragraph>
                            </div>
                            <div className="space-y-4">
                                <Paragraph className="text-xs text-slate-400 font-bold uppercase tracking-widest text-[8px] mb-2">Monitor & Adjust:</Paragraph>
                                <p className="text-[11px] text-slate-300">Track weekly completion metrics. Redistribute if imbalanced. Investigate root causes for delays. Team leaders maintain technical output while coordinating.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="vehicle-allocation">
                <SubSectionHeader>1.4 VEHICLE & EQUIPMENT ALLOCATION</SubSectionHeader>
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <ShieldCheck size={40} />
                            </div>
                            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                                <span className="p-1 px-2 bg-primary-50 dark:bg-primary-900/40 rounded-lg text-xs font-black text-primary-600">SFAX</span>
                                Vehicle Fleet
                            </h4>
                            <p className="text-2xl font-black text-slate-800 dark:text-slate-200 mb-1 italic">02 Vehicles</p>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold font-mono">[List vehicle types/IDs]</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <ShieldCheck size={40} />
                            </div>
                            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                                <span className="p-1 px-2 bg-primary-50 dark:bg-primary-900/40 rounded-lg text-xs font-black text-primary-600">TUNIS</span>
                                Vehicle Fleet
                            </h4>
                            <p className="text-2xl font-black text-slate-800 dark:text-slate-200 mb-1 italic">01 Vehicle</p>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold font-mono">[List vehicle types/IDs]</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 italic">
                        <div className="space-y-4">
                            <h4 className="text-sm font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight italic border-l-4 border-primary-500 pl-4">Primary Assignment</h4>
                            <Paragraph className="text-xs text-slate-600 dark:text-slate-400">Each technician/team has a primary vehicle they normally use. <strong>Benefits:</strong> Familiarity, responsibility, and increased accountability for vehicle condition.</Paragraph>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sm font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight italic border-l-4 border-primary-500 pl-4">Daily Assignment</h4>
                            <Paragraph className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">May change based on job requirements:
                                <List className="mt-1 space-y-1">
                                    <ListItem><span className="text-[11px]"><strong>Large jobs:</strong> Larger vehicle allocation</span></ListItem>
                                    <ListItem><span className="text-[11px]"><strong>Small jobs:</strong> Smaller vehicle for fuel efficiency</span></ListItem>
                                    <ListItem><span className="text-[11px]"><strong>Specialized:</strong> Vehicles equipped with specific pumps/gauges</span></ListItem>
                                </List>
                            </Paragraph>
                        </div>
                    </div>

                    <div className="p-10 bg-slate-50 dark:bg-slate-1000 border border-slate-100 dark:border-slate-900 rounded-[3.5rem] italic">
                        <h6 className="text-[11px] font-black text-slate-400 uppercase mb-8 tracking-[0.4em] border-b border-slate-200 dark:border-slate-800 pb-4 text-center">Vehicle Checkout Procedure (Daily)</h6>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h5 className="font-black text-xs uppercase mb-4 text-primary-600 flex items-center gap-2">
                                    <Clock size={16} />
                                    Start of Day
                                </h5>
                                <List className="text-[10px] text-slate-500 space-y-2">
                                    <ListItem>Technician arrives at workshop/office.</ListItem>
                                    <ListItem><strong>Complete Vehicle Daily Check Sheet (Appendix F):</strong>
                                        <List className="ml-4 mt-1 space-y-1 text-slate-400">
                                            <ListItem>Fuel level (minimum 1/4 tank to start day)</ListItem>
                                            <ListItem>Tire condition and pressure</ListItem>
                                            <ListItem>Lights (headlights, brake lights, turn signals)</ListItem>
                                            <ListItem>Fluid levels (oil, coolant, washer fluid)</ListItem>
                                            <ListItem>Interior cleanliness & SS+ branding visibility</ListItem>
                                            <ListItem>Safety: First aid kit & vehicle extinguisher present</ListItem>
                                            <ListItem>Tools and equipment inventory check</ListItem>
                                        </List>
                                    </ListItem>
                                    <ListItem>Note any issues immediately to Team Leader.</ListItem>
                                    <ListItem>Sign check sheet (driver responsible for vehicle condition).</ListItem>
                                </List>
                            </div>
                            <div>
                                <h5 className="font-black text-xs uppercase mb-4 text-primary-600 flex items-center gap-2">
                                    <Clock size={16} />
                                    End of Day
                                </h5>
                                <List className="text-[10px] text-slate-500 space-y-2">
                                    <ListItem>Return to workshop/office by 17:00 (or as scheduled).</ListItem>
                                    <ListItem>Refuel if below half tank.</ListItem>
                                    <ListItem>Clean interior (remove trash, customer documents filed).</ListItem>
                                    <ListItem>Restock vehicle (see Section 6).</ListItem>
                                    <ListItem>Report any damage or mechanical issues.</ListItem>
                                    <ListItem>Park securely.</ListItem>
                                    <ListItem>Submit vehicle log (mileage, fuel, issues).</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="service-preparation">
                <SubSectionHeader>1.5 SERVICE PREPARATION CHECKLIST</SubSectionHeader>
                <div className="p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3.5rem] shadow-xl italic relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary-500"></div>
                    <h6 className="text-[11px] font-black text-slate-400 uppercase mb-8 text-center tracking-[0.4em] italic border-b border-slate-100 dark:border-slate-900 pb-4">Before Leaving for Service (The Night Before or Morning Of)</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                        <div className="space-y-6">
                            <div>
                                <span className="font-black text-primary-600 block mb-1">1. REVIEW CUSTOMER INFO (WAVE PLUS)</span>
                                Customer name/contact,site location (GPS), access reqs (security, PPE), service history, equipment list, and special notes.
                            </div>
                            <div>
                                <span className="font-black text-primary-600 block mb-1">2. REVIEW SERVICE SCOPE</span>
                                Type (inspection/refill/repair), quantity of equipment, estimated duration, and customer-specific requirements.
                            </div>
                            <div>
                                <span className="font-black text-primary-600 block mb-1">3. PREPARE MATERIALS</span>
                                Calculate refilling chemicals (Powder/CO2/Foam); verify vehicle stock; load extra materials; ensure spare parts (gauges, hoses) available.
                            </div>
                            <div>
                                <span className="font-black text-primary-600 block mb-1">4. PREPARE TOOLS & EQUIPMENT</span>
                                Standard toolbox + specialized tools (CO2 scales, calibrated gauges); verify calibration is current; check safety gear (PPE).
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <span className="font-black text-primary-600 block mb-1">5. PREPARE DOCUMENTATION</span>
                                Charged Tablet (WAVE PLUS app working) + paper backups (work orders, checklists); customer agreement and history accessibility.
                            </div>
                            <div>
                                <span className="font-black text-primary-600 block mb-1">6. COMMUNICATION</span>
                                Save customer contact; confirm Team Leader and Operations Responsible contact route; share daily plan with team.
                            </div>
                            <div>
                                <span className="font-black text-primary-600 block mb-1">7. ROUTE PLANNING</span>
                                Confirm GPS route/traffic; estimate travel time; set exact departure time for punctuality.
                            </div>
                            <div>
                                <span className="font-black text-primary-600 block mb-1">8. PERSONAL PREPARATION</span>
                                Clean SS+ Uniform, visible ID, charged phone, appropriate PPE for weather/site, and basic refreshments.
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="emergency-call-handling">
                <SubSectionHeader>1.6 EMERGENCY CALL HANDLING</SubSectionHeader>
                <div className="space-y-6">
                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">What Constitutes an Emergency</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-5 bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900/50 rounded-[2rem] italic">
                            <h6 className="text-[11px] font-black text-red-600 uppercase mb-2">P1: CRITICAL EMERGENCY</h6>
                            <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Non-functional high-risk site, leaks, fire event, regulatory audit in 48h, or customer cannot operate due to failure.</p>
                        </div>
                        <div className="p-5 bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-900/50 rounded-[2rem] italic">
                            <h6 className="text-[11px] font-black text-orange-600 uppercase mb-2">P2: URGENT</h6>
                            <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Malfunction with backup present, MSA urgent needs, or key account requests. Time-sensitive but non-critical.</p>
                        </div>
                        <div className="p-5 bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 rounded-[2rem] italic">
                            <h6 className="text-[11px] font-black text-slate-400 uppercase mb-2">P3: STANDARD</h6>
                            <p className="text-[10px] text-slate-500 leading-relaxed font-medium">General service requests, routine maintenance, non-urgent repairs. Handled within normal schedule.</p>
                        </div>
                    </div>

                    <div className="p-10 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3.5rem] shadow-inner my-12 italic">
                        <h6 className="text-[11px] font-black text-slate-500 uppercase mb-10 text-center tracking-[0.4em] italic border-b border-slate-200 dark:border-slate-800 pb-4">Emergency Response Process</h6>
                        <div className="space-y-8">
                            {[
                                { s: "1. RECEPTION", c: "Identify P-Level, Customer, Nature of emergency, and risk level. Confirm treatment as P-Level and response timeframe." },
                                { s: "2. ASSESS & ASSIGN", c: "Ops Responsible checks tech locations; assigns nearest LVL 3+ tech; notifies Team Leader; creates W+ order." },
                                { s: "3. DISPATCH", c: "Call tech immediately; brief on situation; confirm equipment; set contact goal (15min)." },
                                { s: "4. CUSTOMER COMM", c: "Ops calls customer with Tech Name, contact number, and ETA. Update proactively if delay expected." },
                                { s: "5. TECH RESPONSE", c: "Tech calls customer from current location; confirms details and providing exact ETA; begins travel." },
                                { s: "6. ON-SITE SERVICE", c: "Assess safely; Fix on-site, temp-fix, or workshop removal with loaner if available. Communicate clearly." },
                                { s: "7. FOLLOW-UP", c: "Completion report; customer satisfaction call; schedule follow-up if temp-fix; document lessons learned." },
                            ].map((p, i) => (
                                <div key={i} className="flex gap-8 items-start group">
                                    <div className="text-[11px] font-black text-primary-600 whitespace-nowrap pt-1 bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-sm group-hover:scale-110 transition-transform">STEP {p.s}</div>
                                    <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed border-l-2 border-slate-300 dark:border-slate-700 pl-6 group-hover:border-primary-500 transition-colors">{p.c}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    
                        <Table>
                            <TableRow isHeader>
                                <TableCell isHeader className="italic">Priority Level</TableCell>
                                <TableCell isHeader className="italic">Contact Customer</TableCell>
                                <TableCell isHeader className="italic">Arrive On-Site</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span className="font-black text-red-600 italic">P1: CRITICAL</span></TableCell>
                                <TableCell>Within 15 Minutes</TableCell>
                                <TableCell><span className="font-bold underline">Within 4 Hours (6h for distant)</span></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span className="font-black text-orange-600 italic">P2: URGENT</span></TableCell>
                                <TableCell>Within 1 Hour</TableCell>
                                <TableCell>Within 24 Hours</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span className="font-black text-slate-500 italic">P3: STANDARD</span></TableCell>
                                <TableCell>Within 4 Hours</TableCell>
                                <TableCell>Per normal schedule</TableCell>
                            </TableRow>
                        </Table>
                    <div className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] italic text-xs mb-8">
                        <span className="font-black uppercase text-primary-600 block mb-2 tracking-widest text-[10px]">After Hours Emergency</span>
                        <Paragraph className="text-slate-600 dark:text-slate-400">Agreement customers have an emergency contact number. An on-call technician responds per rotation schedule. Note: Additional fees apply for after-hours service, except for MSA customers.</Paragraph>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                        <div className="p-8 bg-slate-900 border border-slate-800 rounded-[3rem] shadow-2xl text-white italic">
                            <h6 className="text-[11px] font-black text-primary-400 uppercase mb-4 tracking-[0.3em] text-center border-b border-white/10 pb-4">Emergency Stock in Vehicles</h6>
                            <div className="grid grid-cols-2 gap-x-6">
                                <List className="text-[10px] text-slate-300 space-y-1">
                                    <ListItem>2-3 replacement gauges</ListItem>
                                    <ListItem>2-3 spare discharge hoses</ListItem>
                                    <ListItem>O-rings and seals (assorted)</ListItem>
                                    <ListItem>Safety pins and clips</ListItem>
                                    <ListItem>1-2 complete valve assemblies</ListItem>
                                </List>
                                <List className="text-[10px] text-slate-300 space-y-1">
                                    <ListItem>ABC powder (at least 20kg)</ListItem>
                                    <ListItem>CO2 small cylinders (if equipped)</ListItem>
                                    <ListItem>Basic repair tools</ListItem>
                                    <ListItem>Temporary tags and labels</ListItem>
                                </List>
                            </div>
                            <p className="mt-4 text-[9px] text-slate-500 text-center font-bold uppercase tracking-tighter">Purpose: Enable on-site repairs without workshop return.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-xl relative overflow-hidden group h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-blue-600">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h6 className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Response Time Efficiency</h6>
                                        <p className="text-2xl font-black text-slate-800 dark:text-slate-200 italic">98% Success</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] font-bold">
                                            <span className="text-slate-400 uppercase">Target (P1)</span>
                                            <span className="text-emerald-500">Goal: &lt; 4h</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 rounded-full" style={{ width: '98%' }}></div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] font-bold">
                                            <span className="text-slate-400 uppercase">Resolution Rate (P2)</span>
                                            <span className="text-emerald-500">Goal: 24h</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '95%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Blockquote type="note" title="Operational Readiness">
                        Agreement customers use emergency rotation numbers. Every vehicle MUST carry emergency stock to prevent return trips and ensure immediate site safety.
                    </Blockquote>
                </div>
            </SubSection>
        </Section>
    );
}


import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';
import { motion } from 'framer-motion';
import { 
    TrendingDown, 
    PhoneOff, 
    MessageSquareOff, 
    DollarSign, 
    Activity, 
    Users, 
    Clock, 
    Cpu, 
    Gavel, 
    FileEdit, 
    PhoneCall, 
    Share2, 
    Mail, 
    ChevronRight,
    SearchX
} from 'lucide-react';

export default function SalesPerformance() {
    return (
        <Section id="section-6">
            <SectionHeader>SECTION 6: SALES PERFORMANCE & IMPROVEMENT</SectionHeader>

            {/* 6.1 SALES TARGETS & KPIs */}
            <SubSection id="targets-kpis">
                <SubSectionHeader>6.1 SALES TARGETS & KPIs</SubSectionHeader>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
                    <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h6 className="text-xs font-bold text-primary-600 uppercase mb-6 border-b pb-2">Individual Sales Targets</h6>
                        <Paragraph className="text-xs text-slate-500 italic mb-6">Set annually based on territory, experience, and market potential. Reviewed quarterly and adjusted if needed to align with company growth goals.</Paragraph>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { t: "Total Revenue", d: "Aggregated TND targets" },
                                { t: "New Acquisition", d: "Net new customer count" },
                                { t: "MSA Renewals", d: "Retention percentage" },
                                { t: "Conversion Rate", d: "Quote-to-order ratio" },
                            ].map((item, idx) => (
                                <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                                    <p className="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase mb-1">{item.t}</p>
                                    <p className="text-xs text-slate-500 italic leading-snug">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg text-white relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute top-0 right-10 w-48 h-48 bg-primary-500/10 blur-[6rem]"></div>
                        <h6 className="text-xs font-bold text-primary-400 uppercase mb-6 border-b border-slate-800 pb-2">Key Performance Indicators</h6>
                        <div className="space-y-6">
                            {[
                                { group: "Activity Metrics", items: ["Leads qualified", "Site visits conducted", "Quotations issued", "Follow-ups completed"] },
                                { group: "Results Metrics", items: ["Revenue vs. target", "Deals closed", "New customers", "Renewal rate"] },
                                { group: "Quality Metrics", items: ["CSAT score", "Service delivery quality", "Collection rate"] },
                            ].map((group, idx) => (
                                <div key={idx} className="space-y-2">
                                    <p className="text-xs font-bold uppercase text-slate-300 border-l-2 border-primary-500 pl-3">{group.group}</p>
                                    <div className="flex flex-wrap gap-2 px-3">
                                        {group.items.map((item, i) => (
                                            <span key={i} className="text-xs text-slate-400 italic px-2 py-0.5 bg-slate-950 rounded-md border border-slate-800 whitespace-nowrap">{item}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 text-center">
                    {[
                        { t: "Daily", d: "Update WAVE PLUS" },
                        { t: "Weekly", d: "Self-review progress" },
                        { t: "Monthly", d: "Report to Sales Responsible" },
                        { t: "Quarterly", d: "Performance review meeting" },
                    ].map((cycle, idx) => (
                        <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl group hover:border-primary-500 transition-colors">
                            <h6 className="text-xs font-bold text-primary-600 uppercase mb-2">{cycle.t}</h6>
                            <p className="text-xs text-slate-500 italic">{cycle.d}</p>
                        </div>
                    ))}
                </div>
                <Blockquote type="info" title="Detailed Policy">
                    Detailed targets, KPI definitions, and measurement methods are in separate document: <span className="underline italic">"Sales Targets & KPIs Policy"</span>.
                </Blockquote>
            </SubSection>

            {/* 6.2 COMMISSION STRUCTURE */}
            <SubSection id="commission-structure">
                <SubSectionHeader>6.2 COMMISSION STRUCTURE</SubSectionHeader>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
                    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg text-white flex flex-col justify-center text-center overflow-hidden relative">
                         <h6 className="text-xs font-bold text-emerald-400 uppercase mb-8 border-b border-slate-800 pb-2">Compensation Model</h6>
                         <div className="space-y-6 relative z-10">
                            <div className="p-4 bg-white/5 rounded-lg border border-white/10 shadow-inner">
                                <p className="text-xl font-bold text-white italic">Base Salary</p>
                                <p className="text-xs text-slate-400 uppercase mt-1">Provides Stability</p>
                            </div>
                            <div className="text-xl font-bold text-emerald-500">+</div>
                            <div className="p-4 bg-emerald-500/10 rounded-lg border border-emerald-400/20 shadow-lg">
                                <p className="text-xl font-bold text-white italic">Commission</p>
                                <p className="text-xs text-emerald-400/80 uppercase mt-1">Rewards Performance</p>
                            </div>
                            <div className="text-xl font-bold text-emerald-500">+</div>
                            <div className="p-4 bg-white/5 rounded-lg border border-white/10 shadow-inner">
                                <p className="text-xl font-bold text-white italic">Bonuses</p>
                                <p className="text-xs text-slate-400 uppercase mt-1">Exceptional Achievement</p>
                            </div>
                         </div>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                            <h6 className="text-xs font-bold text-slate-800 dark:text-slate-100 uppercase mb-6 border-b pb-2">Commission Principles</h6>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-3 underline">Paid On:</p>
                                    <List className="space-y-2 text-xs text-slate-500 italic">
                                        <ListItem>Collected revenue (not just invoiced)</ListItem>
                                        <ListItem>Service-specific tiered rates</ListItem>
                                        <ListItem>Accelerated rates for high achievement</ListItem>
                                    </List>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-3 underline">Key Rules:</p>
                                    <List className="space-y-2 text-xs text-slate-500 italic">
                                        <ListItem>Renewals: Original rep entitlement</ListItem>
                                        <ListItem>Team Sales: Pro-rata sharing</ListItem>
                                        <ListItem>Clawback: Applied for bad debt</ListItem>
                                    </List>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-inner">
                            <h6 className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mb-4 decoration-emerald-500 underline underline-offset-4">Payment Terms & Review</h6>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                                        <span className="text-xs font-bold italic text-slate-700 dark:text-slate-300">Timing</span>
                                        <span className="text-xs bg-slate-900 text-white px-3 py-1 rounded-full uppercase italic">10 days post month-end</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                                        <span className="text-xs font-bold italic text-slate-700 dark:text-slate-300">Structure Review</span>
                                        <span className="text-xs bg-emerald-500 text-white px-3 py-1 rounded-full uppercase italic">Annual Alignment</span>
                                    </div>
                                </div>
                                <Paragraph className="text-xs text-slate-500 italic leading-relaxed border-l-2 border-emerald-500/20 pl-4">"Commission structures are reviewed yearly to ensure fairness, competitiveness, and alignment with company growth trajectories."</Paragraph>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            {/* 6.3 LOST SALES TRACKING */}
            <SubSection id="lost-sales">
                <SubSectionHeader>6.3 LOST SALES TRACKING</SubSectionHeader>
                <div className="mb-12 text-center relative overflow-hidden p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <SearchX className="w-24 h-24 text-slate-400" />
                    </div>
                    <Paragraph className="italic text-slate-500 max-w-3xl mx-auto relative z-10 text-lg leading-relaxed">
                        "Tracking lost sales reveals why we lose, identifies patterns in pricing or service gaps, and provides critical competitive intelligence to improve our win rate."
                    </Paragraph>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
                    {/* The Exit Interview Protocol */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-white relative group overflow-hidden flex flex-col justify-center"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[80px] -mr-32 -mt-32 rounded-full group-hover:bg-red-500/20 transition-colors duration-700"></div>
                        
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center border border-red-500/30">
                                <PhoneOff className="w-6 h-6 text-red-400" />
                            </div>
                            <div>
                                <h6 className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-1">Methodology</h6>
                                <h4 className="text-xl font-bold italic">The Exit Interview Protocol</h4>
                            </div>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="p-4 bg-white/5 border border-white/10 rounded-xl italic text-sm text-slate-300 backdrop-blur-sm"
                            >
                                <MessageSquareOff className="w-4 h-4 text-red-400 mb-2" />
                                "To help us improve, may I ask a few quick questions about why you decided to go in a different direction?"
                            </motion.div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Main reason for decision?",
                                    "Who did you choose instead?",
                                    "Competitor's edge?",
                                    "Could we have done differently?",
                                    "Consider us in future?",
                                    "Permission to stay in touch?",
                                ].map((q, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex gap-3 items-center text-xs text-slate-400 italic hover:text-white transition-colors cursor-default"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                                        {q}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Lost Sale Categories */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm relative overflow-hidden"
                    >
                        <h6 className="text-xs font-bold text-slate-800 dark:text-slate-100 uppercase mb-8 border-b pb-4 flex items-center justify-between">
                            <span>Lost Sale Categories</span>
                            <TrendingDown className="w-4 h-4 text-slate-400" />
                        </h6>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { t: "Price", c: "Budget / Cheaper rival", icon: DollarSign, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                                { t: "Service", c: "Quality / Past exp.", icon: Activity, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                                { t: "Relationship", c: "Incumbent loyalty", icon: Users, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                                { t: "Timing", c: "Project delayed", icon: Clock, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
                                { t: "Technical", c: "Speclimit / Mismatch", icon: Cpu, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
                                { t: "Process", c: "Tender / Governance", icon: Gavel, color: "text-slate-500", bg: "bg-slate-500/10", border: "border-slate-500/20" },
                            ].map((cat, idx) => (
                                <motion.div 
                                    key={idx} 
                                    whileHover={{ y: -5 }}
                                    className={`p-4 bg-slate-50 dark:bg-slate-900/50 border ${cat.border} rounded-2xl flex flex-col items-center gap-3 group transition-all duration-300 hover:shadow-md hover:bg-white dark:hover:bg-slate-900 text-center`}
                                >
                                    <div className={`w-10 h-10 shrink-0 rounded-[14px] flex items-center justify-center ${cat.bg} ${cat.color} group-hover:scale-110 transition-transform shadow-inner`}>
                                        <cat.icon className="w-5 h-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight mb-1">{cat.t}</p>
                                        <p className="text-[10px] text-slate-500 italic leading-tight">{cat.c}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Reporting Workflow (Full Width Row) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl text-white relative overflow-hidden my-10"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[80px] -mr-32 -mt-32 rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-500/5 blur-[80px] -ml-32 -mb-32 rounded-full"></div>
                    
                    <h6 className="text-xs font-bold text-slate-500 uppercase mb-10 border-b border-slate-800 pb-4 text-center tracking-widest">Reporting Workflow (WAVE PLUS)</h6>
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-around relative z-10">
                        {[
                            { s: "1", t: "Log Reason", icon: FileEdit, d: "Document the loss immediately" },
                            { s: "2", t: "Debrief Call", icon: PhoneCall, d: "Internal review of the deal" },
                            { s: "3", t: "Share Insights", icon: Share2, d: "Upload to central DB" },
                            { s: "4", t: "Nurture List", icon: Mail, d: "Schedule future touchpoints" },
                        ].map((step, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row items-center gap-6 grow group">
                                <div className="flex flex-col items-center gap-4 group shrink-0">
                                    <motion.div 
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-20 h-20 rounded-3xl bg-slate-800/80 border-2 border-slate-700 flex items-center justify-center relative group-hover:border-primary-500 group-hover:bg-slate-800 transition-all duration-300 shadow-xl"
                                    >
                                        <step.icon className="w-8 h-8 text-slate-400 group-hover:text-primary-400 transition-colors" />
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-xs font-black italic shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                                            {step.s}
                                        </div>
                                    </motion.div>
                                    <div className="text-center">
                                        <p className="text-sm font-black text-slate-200 uppercase tracking-tighter mb-1 mt-2">{step.t}</p>
                                        <p className="text-[10px] text-slate-500 italic max-w-[120px] leading-tight">{step.d}</p>
                                    </div>
                                </div>
                                {idx < 3 && <ChevronRight className="hidden md:block w-6 h-6 text-slate-700/50 shrink-0" />}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </SubSection>

            {/* 6.4 COMPETITIVE Intelligence */}
            <SubSection id="competitive-intelligence">
                <SubSectionHeader>6.4 COMPETITIVE Intelligence</SubSectionHeader>
                <div className="bg-slate-900 rounded-xl p-8 text-white shadow-lg relative overflow-hidden my-10 border border-slate-800">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
                        <div>
                            <h6 className="text-xs font-bold text-primary-400 uppercase mb-6 underline decoration-primary-500/30">SS+ Comparative Advantages</h6>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { t: "Experience", d: "23 Years in Tunisian market" },
                                    { t: "Technology", d: "WAVE PLUS & QR Tracking" },
                                    { t: "Compliance", d: "Full certification / documentation" },
                                    { t: "Coverage", d: "Tunis & Sfax strategic hubs" },
                                ].map((adv, idx) => (
                                    <div key={idx} className="space-y-1">
                                        <p className="text-xs font-bold uppercase text-slate-100">{adv.t}</p>
                                        <p className="text-xs text-slate-400 italic leading-snug">{adv.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h6 className="text-xs font-bold text-amber-500 uppercase mb-6 underline decoration-amber-500/30">Sales Response Strategy</h6>
                            <div className="space-y-4">
                                {[
                                    { v: "Against Cheaper Rivals", a: "Focus on TCO (Total Cost of Ownership) & Risk of non-compliance." },
                                    { v: "Against Larger Groups", a: "Emphasize personalization, local access, and responsiveness." },
                                    { v: "Against Specialists", a: "Highlight 'One-Stop Shop' convenience and bundled value." },
                                ].map((strat, idx) => (
                                    <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-lg group hover:bg-white/[0.08] transition-colors">
                                        <p className="text-xs font-bold text-slate-300 uppercase mb-1">{strat.v}</p>
                                        <p className="text-xs text-slate-400 italic group-hover:text-slate-300">{strat.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h6 className="text-xs font-bold text-slate-400 uppercase mb-6 border-b pb-2 flex items-center gap-2">
                             <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                             Ethical Intelligence Sources
                        </h6>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Customer Feedback", "Lost Sales Debriefs", "Public Marketing", "Industry Events", "Trade Publications", "Supplier Conversations"
                            ].map((src, i) => (
                                <span key={i} className="text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-full uppercase italic font-bold text-slate-500">{src}</span>
                            ))}
                        </div>
                    </div>
                    <div className="p-6 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-xl shadow-sm">
                        <h6 className="text-xs font-bold text-red-600 dark:text-red-400 uppercase mb-6 border-b pb-2 flex items-center gap-2">
                             <span className="w-2 h-2 rounded-full bg-red-600"></span>
                             Strictly Prohibited
                        </h6>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Impersonation / Lying", "Bribing employees", "Stealing documents", "Corporate espionage"
                            ].map((item, i) => (
                                <span key={i} className="text-xs bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-900/50 px-3 py-1.5 rounded-full uppercase italic font-bold text-red-600 dark:text-red-400">{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </SubSection>

            {/* 6.5 CONTINUOUS IMPROVEMENT */}
            <SubSection id="improvement">
                <SubSectionHeader>6.5 CONTINUOUS IMPROVEMENT</SubSectionHeader>
                <div className="p-8 bg-slate-900 border border-slate-800 rounded-xl shadow-lg text-white relative overflow-hidden my-10">
                    <h6 className="text-xs font-bold text-secondary-500 uppercase mb-10 text-center underline">Net Promoter Score (NPS) Action Strategy</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center relative z-10">
                        <div className="space-y-4">
                            <div className="text-4xl font-bold text-secondary-500 italic">9-10</div>
                            <h5 className="text-xs font-bold uppercase text-slate-100 border-b border-slate-800 pb-1">PROMOTERS</h5>
                            <p className="text-xs text-slate-500 italic px-4">Identify as reference sites. Request testimonials and referrals.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-4xl font-bold text-slate-500 italic">7-8</div>
                            <h5 className="text-xs font-bold uppercase text-slate-100 border-b border-slate-800 pb-1">PASSIVES</h5>
                            <p className="text-xs text-slate-500 italic px-4">Understand what would make them promoters before they switch.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-4xl font-bold text-red-500 italic">0-6</div>
                            <h5 className="text-xs font-bold uppercase text-red-400 border-b border-slate-800 pb-1">DETRACTORS</h5>
                            <p className="text-xs text-slate-500 italic px-4 underline decoration-red-500/50">Urgent Intervention. Sales Responsible call immediately to resolve.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                    <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h6 className="text-xs font-bold text-slate-800 dark:text-slate-100 uppercase mb-6 border-b pb-2 text-center">Sales Process Optimization</h6>
                        <div className="space-y-4 text-xs text-slate-500 italic leading-relaxed">
                            <p><strong className="text-slate-800 dark:text-slate-200 block uppercase mb-1 underline decoration-primary-500">Quarterly Reviews:</strong> Analyze conversion rates, deal size, and sales cycle length by source.</p>
                            <p><strong className="text-slate-800 dark:text-slate-200 block uppercase mb-1 underline decoration-primary-500">Bottleneck Hunting:</strong> Identify where deals get stuck and update scripts/templates accordingly.</p>
                        </div>
                    </div>
                    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg text-white">
                        <h6 className="text-xs font-bold text-slate-500 uppercase mb-6 border-b border-slate-800 pb-2 text-center">Technology Utilization</h6>
                        <div className="space-y-4 text-xs text-slate-500 italic leading-relaxed">
                            <p><strong className="text-slate-100 block uppercase mb-1">WAVE PLUS Optimization:</strong> Automated workflows, mobile app tracking, and custom report views.</p>
                            <p><strong className="text-slate-100 block uppercase mb-1">Communication Tools:</strong> Digital signature (contracts), Video conferencing, and CRM mobile access.</p>
                        </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h6 className="text-xs font-bold text-slate-800 dark:text-slate-100 uppercase mb-6 border-b pb-2 text-center">Knowledge Management</h6>
                        <div className="space-y-4 text-xs text-slate-500 italic leading-relaxed">
                            <p><strong className="text-slate-800 dark:text-slate-200 block uppercase mb-1 underline decoration-primary-500">Sales Knowledge Base:</strong> Technical FAQs, competitive battlecards, and success stories.</p>
                            <p><strong className="text-slate-800 dark:text-slate-200 block uppercase mb-1 underline decoration-primary-500">Sharing Platform:</strong> Centralized cloud access for the latest pricing, regs, and product updates.</p>
                        </div>
                    </div>
                </div>
            </SubSection>

            {/* DOCUMENT CONTROL */}
            <SubSection id="doc-control">
                <SubSectionHeader>DOCUMENT CONTROL & VERSION HISTORY</SubSectionHeader>
                    <Table>
                        <TableRow isHeader>
                            <TableCell isHeader>Version</TableCell>
                            <TableCell isHeader>Date</TableCell>
                            <TableCell isHeader>Changes</TableCell>
                            <TableCell isHeader>Approved By</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>1.0</TableCell>
                            <TableCell>Jan 2025</TableCell>
                            <TableCell>Initial release</TableCell>
                            <TableCell>Najla BEN SALEM</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>1.1</TableCell>
                            <TableCell>Nov 2025</TableCell>
                            <TableCell>Updated terminology</TableCell>
                            <TableCell>Najla BEN SALEM</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>1.2</TableCell>
                            <TableCell>Jan 2026</TableCell>
                            <TableCell>Updated structure and content</TableCell>
                            <TableCell>Najla BEN SALEM</TableCell>
                        </TableRow>
                    </Table>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h6 className="text-xs font-bold text-slate-400 uppercase mb-4">Authorized Recipients</h6>
                        <List className="text-xs text-slate-500 italic space-y-2">
                            <ListItem>All sales representatives (full copy)</ListItem>
                            <ListItem>Sales Responsible (full copy)</ListItem>
                            <ListItem>Operations Responsible (relevant sections)</ListItem>
                        </List>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h6 className="text-xs font-bold text-slate-400 uppercase mb-4">Update Process</h6>
                        <Paragraph className="text-xs text-slate-500 italic leading-relaxed">"Annual review by Sales Responsible. PDF distribution via shared drive and WAVE PLUS. Previous versions archived for reference."</Paragraph>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

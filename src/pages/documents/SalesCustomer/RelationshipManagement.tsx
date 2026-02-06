import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import Blockquote from '../../../components/document-elements/Blockquote';
import { motion } from 'framer-motion';
import { 
    Database, Layers, Binary, MapPin, History, QrCode, 
    Users, Clock, Trash2, Layout, ShieldCheck, 
    Briefcase, Wrench, Target, Search, CheckCircle2,
    Zap, ArrowRight
} from 'lucide-react';

export default function RelationshipManagement() {
    return (
        <Section id="section-4">
            <SectionHeader>SECTION 4: MANAGING CUSTOMER RELATIONSHIPS</SectionHeader>

            <SubSection id="data-management">
                <SubSectionHeader>4.1 Customer Information Management (WAVE PLUS)</SubSectionHeader>
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
                        <Database className="w-6 h-6 text-primary-600" />
                    </div>
                    <Paragraph className="mb-0 italic flex-1">
                        WAVE PLUS is our central system for managing all customer information and relationships. 
                        It serves as the <span className="text-primary-600 font-bold">single source of truth</span> for the entire organization.
                    </Paragraph>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 blur-[5rem] group-hover:bg-primary-500/10 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
                                <Layers className="w-5 h-5 text-primary-400" />
                                <h6 className="font-bold text-primary-400 uppercase text-xs tracking-widest">Customer Master Data Matrix</h6>
                            </div>
                            <div className="grid grid-cols-1 gap-y-6">
                                {[
                                    { t: "Basic Information", d: "Legal/Trade names, Tax ID, Industry sector, physical/mailing addresses.", icon: <Search className="w-3.5 h-3.5" /> },
                                    { t: "Contact Network", d: "Decision Makers, HSE Managers, Procurement, and Facility Managers.", icon: <Users className="w-3.5 h-3.5" /> },
                                    { t: "Financial Profile", d: "Credit status, payment terms, and real-time balance tracking.", icon: <Target className="w-3.5 h-3.5" /> },
                                    { t: "Sales Intel", d: "Customer Type, Lead Source, Assigned Rep, and Lifetime Value analytics.", icon: <Briefcase className="w-3.5 h-3.5" /> },
                                    { t: "Service Geography", d: "Locations, equipment inventory, site access, and preferred schedules.", icon: <MapPin className="w-3.5 h-3.5" /> },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 group/item">
                                        <div className="mt-1 w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500 group-hover/item:bg-primary-500/20 group-hover/item:text-primary-400 transition-colors">
                                            {item.icon}
                                        </div>
                                        <div className="space-y-1 flex-1">
                                            <p className="font-bold text-slate-200 uppercase text-[10px] tracking-wider leading-none">{item.t}</p>
                                            <p className="text-[11px] text-slate-500 leading-snug">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl relative flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-4 border-b pb-4">
                            <QrCode className="w-5 h-5 text-primary-600" />
                            <h6 className="font-bold text-primary-600 uppercase text-xs tracking-widest">Equipment DNA Tracking</h6>
                        </div>
                        <Paragraph className="text-xs text-slate-500 mb-8 leading-relaxed">
                            Every unit serviced receives a unique digital identifier, creating a transparent compliance trail for the customer.
                        </Paragraph>
                        
                        <div className="space-y-4 mb-8 flex-1">
                            {[
                                { t: "Equipment ID", d: "Manufacturer, model, serial number, and capacity.", icon: <Binary className="w-4 h-4 text-primary-500" /> },
                                { t: "Facility Mapping", d: "Precise location within the customer's premises.", icon: <MapPin className="w-4 h-4 text-primary-500" /> },
                                { t: "Lifecycle Tracking", d: "Installation, and all historical/future service dates.", icon: <History className="w-4 h-4 text-primary-500" /> },
                            ].map((f, i) => (
                                <div key={i} className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800/50 flex items-center gap-4 hover:border-primary-500/30 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-950 flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-800">
                                        {f.icon}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800 dark:text-slate-200 uppercase text-[10px] tracking-wider">{f.t}</p>
                                        <p className="text-[11px] text-slate-500 leading-tight">{f.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Blockquote type="info" title="QR Code Advantage" className="mt-auto">
                            Customers scan stickers to see real-time history and next due dates. 
                            This transparency is a major <span className="font-bold underline">SS+ differentiator</span>.
                        </Blockquote>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-10 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl my-20 relative overflow-hidden"
                >
                    {/* Refined Background decoration */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 blur-[100px] -mr-64 -mt-64 rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[80px] -ml-48 -mb-48 rounded-full rotate-45"></div>
                    
                    <div className="relative z-10">
                        <div className="flex flex-col items-center mb-2">
                            <div className="flex items-center gap-3 mb-4 py-1.5 px-4 bg-primary-500/10 rounded-full border border-primary-500/20">
                                <ShieldCheck className="w-4 h-4 text-primary-600" />
                                <span className="text-[10px] font-black text-primary-600 uppercase tracking-[0.2em]">Compliance Framework</span>
                            </div>
                            <h5 className="font-bold text-slate-800 dark:text-slate-100 uppercase text-xl text-center tracking-tight">Data Governance & Entry Responsibilities</h5>
                            <p className="text-xs text-slate-500 mt-2 text-center max-w-lg">Maintaining data integrity is a shared responsibility across all departments to ensure SS+ remains the single source of truth.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12  border-t border-slate-200 dark:border-slate-800 pt-12">
                            {/* Ownership Side */}
                            <div className="lg:col-span-4 flex flex-col gap-6">
                                <div className="px-2">
                                    <p className="font-bold text-slate-400 uppercase text-[10px] tracking-widest mb-6 flex items-center gap-2">
                                        <Users className="w-3 h-3" /> Data Ownership
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            { role: "Sales Reps", desc: "Leads, contacts, and status updates.", icon: <Briefcase className="w-5 h-5 text-blue-500" /> },
                                            { role: "Ops Responsible", desc: "Schedules, equipment, and completion.", icon: <Wrench className="w-5 h-5 text-orange-500" /> },
                                            { role: "Admin Team", desc: "Contract processing and financial clean-up.", icon: <Target className="w-5 h-5 text-emerald-500" /> },
                                        ].map((item, i) => (
                                            <div key={i} className="relative group p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md hover:border-primary-500/20">
                                                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                    {item.icon}
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="font-extrabold text-slate-800 dark:text-slate-200 uppercase text-[10px] tracking-wider">{item.role}</p>
                                                    <p className="text-[11px] text-slate-500 leading-snug pr-8">{item.desc}</p>
                                                </div>
                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-slate-200 dark:bg-slate-800 group-hover:bg-primary-500 transition-colors rounded-r-full"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Protocol Grid */}
                            <div className="lg:col-span-8">
                                <p className="font-bold text-slate-400 uppercase text-[10px] tracking-widest mb-6 px-2 flex items-center gap-2">
                                    <CheckCircle2 className="w-3 h-3" /> System Protocols
                                </p>
                                <div className="flex flex-col gap-2">
                                    {[
                                        { t: "24-Hour Entry Rule", d: "All data must be synced within 24 hours of receiving it.", icon: <Clock className="w-5 h-5" />, color: "emerald", badge: "Critical" },
                                        { t: "De-duplication", d: "Strict 'No Duplicates' policy to maintain data integrity.", icon: <Trash2 className="w-5 h-5" />, color: "blue", badge: "Integrity" },
                                        { t: "Standardized Formatting", d: "Uniform entry for phones, addresses, and tax identifiers.", icon: <Layout className="w-5 h-5" />, color: "purple", badge: "Quality" },
                                        { t: "Mandatory Fields", d: "Records will not save unless compliance data is present.", icon: <ShieldCheck className="w-5 h-5" />, color: "rose", badge: "System" },
                                    ].map((q, idx) => (
                                        <div key={idx} className="relative p-5 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-6 hover:border-primary-500/20 transition-all group overflow-hidden">
                                            {/* Number Indicator */}
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-100 dark:bg-slate-900 group-hover:bg-primary-500/40 transition-colors"></div>
                                            
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-transparent transition-all group-hover:scale-105
                                                ${q.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 group-hover:border-emerald-500/30' : ''}
                                                ${q.color === 'blue' ? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 group-hover:border-blue-500/30' : ''}
                                                ${q.color === 'purple' ? 'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 group-hover:border-purple-500/30' : ''}
                                                ${q.color === 'rose' ? 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 group-hover:border-rose-500/30' : ''}
                                            `}>
                                                {q.icon}
                                            </div>
                                            
                                            <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-3">
                                                        <p className="font-bold text-slate-800 dark:text-slate-100 uppercase text-xs tracking-tight">{q.t}</p>
                                                        <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full border hidden md:inline-block
                                                            ${q.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-500/5 dark:border-emerald-500/20' : ''}
                                                            ${q.color === 'blue' ? 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-500/5 dark:border-blue-500/20' : ''}
                                                            ${q.color === 'purple' ? 'bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-500/5 dark:border-purple-500/20' : ''}
                                                            ${q.color === 'rose' ? 'bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-500/5 dark:border-rose-500/20' : ''}
                                                        `}>{q.badge}</span>
                                                    </div>
                                                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{q.d}</p>
                                                </div>
                                                
                                                <div className="flex md:hidden">
                                                    <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full border
                                                        ${q.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-500/5 dark:border-emerald-500/20' : ''}
                                                        ${q.color === 'blue' ? 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-500/5 dark:border-blue-500/20' : ''}
                                                        ${q.color === 'purple' ? 'bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-500/5 dark:border-purple-500/20' : ''}
                                                        ${q.color === 'rose' ? 'bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-500/5 dark:border-rose-500/20' : ''}
                                                    `}>{q.badge}</span>
                                                </div>
                                            </div>

                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity pr-2 hidden md:block">
                                                <CheckCircle2 className="w-4 h-4 text-primary-500/40" />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 p-4 bg-primary-50 dark:bg-primary-900/10 rounded-2xl border border-primary-100 dark:border-primary-900/20 flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center shrink-0">
                                        <Zap className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-[10px] font-bold text-primary-700 dark:text-primary-400 uppercase tracking-widest leading-normal">
                                        Failure to comply with these standards results in immediate technical escalation.
                                    </p>
                                    <ArrowRight className="w-4 h-4 text-primary-300 ml-auto group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </SubSection>

            <SubSection id="history-tracking">
                <SubSectionHeader>4.2 Service History Tracking</SubSectionHeader>
                <Paragraph className="mb-6 italic">Comprehensive service history protects SS+ from liability, proves customer compliance, and supports renewal conversations with undeniable data.</Paragraph>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
                    <div className="lg:col-span-2 p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg relative text-white">
                         <h6 className="font-bold text-primary-500 uppercase mb-8 text-xs border-b border-slate-800 pb-2">The Digital Service Log (WAVE Capture)</h6>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                "Work Order Reference", "Technician Identity", "Intervention Date/Time",
                                "Materials & Parts Consumed", "Defects Identified", "Corrective Recommendations",
                                "Before/After Visuals", "Customer Digital Approval", "Certificates Issued"
                            ].map((point, idx) => (
                                <div key={idx} className="p-3 bg-slate-950 rounded-lg border border-slate-800 flex gap-2">
                                    <div className="w-1.5 h-1.5 bg-slate-700 rounded-full mt-1.5 shrink-0"></div>
                                    <p className="text-xs text-slate-400 font-bold leading-tight">{point}</p>
                                </div>
                            ))}
                         </div>
                    </div>

                    <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h6 className="font-bold text-primary-600 uppercase mb-6 text-center underline text-xs">Auto-Generated Outputs</h6>
                        <div className="space-y-6">
                            <div className="text-center pb-4 border-b border-slate-100 dark:border-slate-800">
                                <p className="font-bold text-slate-800 dark:text-slate-100 uppercase mb-1 text-xs">Instant Compliance</p>
                                <p className="text-xs text-slate-500 leading-tight">Service certificates and inspection reports delivered immediately to the customer.</p>
                            </div>
                            <div className="text-center pb-4 border-b border-slate-100 dark:border-slate-800">
                                <p className="font-bold text-slate-800 dark:text-slate-100 uppercase mb-1 text-xs">Commercial Insights</p>
                                <p className="text-xs text-slate-500 leading-tight">Identifies upsell opportunities based on technical defects and findings.</p>
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-slate-800 dark:text-slate-100 uppercase mb-1 text-xs">Quality Control</p>
                                <p className="text-xs text-slate-500 leading-tight">Operations Responsible can review technical work remotely via uploaded visuals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="renewal-cycle">
                <SubSectionHeader>4.3 MSA Renewal Process</SubSectionHeader>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-1 space-y-6">
                        <Paragraph className="italic">Proactive renewals prevent service gaps and secure long-term recurring revenue. We start 90 days out to ensure zero friction.</Paragraph>
                        <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 rounded-lg">
                            <h6 className="font-bold text-emerald-700 dark:text-emerald-400 uppercase mb-4 underline text-xs">Strategic Pricing Logic</h6>
                            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
                                <li><strong>• Satisfied Clients:</strong> Target +5% annual increase or hold for multi-year commitment.</li>
                                <li><strong>• Price Sensitive:</strong> Offer 3-5 year discounts to lock in volume over price.</li>
                                <li><strong>• Troubled Accounts:</strong> Acknowledge past issues, show RCA, and offer "Proof Period" discounts.</li>
                            </ul>
                        </div>
                        <Blockquote type="important" title="Exit Interview">
                            If an MSA is not renewed, an exit interview is MANDATORY to document root causes and keep the channel open for future re-engagement.
                        </Blockquote>
                    </div>

                    <div className="lg:col-span-2 relative pl-6">
                        <div className="absolute top-0 bottom-0 left-[21px] w-[1px] bg-slate-200 dark:bg-slate-800"></div>
                        <div className="space-y-10">
                            {[
                                { d: "T-90 Days", t: "WAVE Alert & Account Audit", c: "Sales review history, payment discipline, and expansion opportunities. Internal quality audit performed." },
                                { d: "T-60 Days", t: "Satisfaction Call", c: "Contact decision maker. Verify satisfaction and discuss any changing needs before proposal." },
                                { d: "T-45 Days", t: "Renewal Proposal Submission", c: "Send formal proposal with Value Summary (inspections/savings) and 1, 3, 5-year options." },
                                { d: "T-30 Days", t: "Escalation & Negotiation", c: "Intensify follow-up. Address objections or negotiate long-term incentives to close." },
                                { d: "T-15 Days", t: "Final Management Push", c: "Manager/Co-Manager call for key accounts. Final commitment or non-renewal documentation." },
                            ].map((item, i) => (
                                <div key={i} className="relative pl-14 group">
                                    <div className="absolute left-0 top-1 w-10 h-10 bg-slate-50 dark:bg-slate-900 border-2 border-primary-500 rounded-full flex items-center justify-center text-[10px] font-bold text-primary-600 shadow-sm z-10">
                                        {item.d.split(' ')[0]}
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-800 dark:text-slate-200 uppercase mb-1 text-xs">{item.t}</h5>
                                        <p className="text-xs text-slate-500 leading-relaxed">{item.c}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="key-accounts">
                <SubSectionHeader>4.4 Key Account Management</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h6 className="font-bold text-primary-600 uppercase mb-6 text-xs border-b pb-2">What Defines a Key Account?</h6>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                                <div className="text-xl">💰</div>
                                <div>
                                    <p className="font-bold text-slate-800 dark:text-slate-200 uppercase mb-0.5 underline text-xs">Revenue Benchmark</p>
                                    <p className="text-xs text-slate-500">Annual revenue (or potential) &gt; 50,000 TND with multi-year contract stability.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                                <div className="text-xl">⭐</div>
                                <div>
                                    <p className="font-bold text-slate-800 dark:text-slate-200 uppercase mb-0.5 underline text-xs">Strategic Value</p>
                                    <p className="text-xs text-slate-500">Industry leaders, high-profile brands, or gateway customers to new market segments.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                                <div className="text-xl">🌐</div>
                                <div>
                                    <p className="font-bold text-slate-800 dark:text-slate-200 uppercase mb-0.5 underline text-xs">Complexity & Scale</p>
                                    <p className="text-xs text-slate-500">Multi-location entities requiring consolidated billing and unified reporting.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg text-white">
                        <h6 className="font-bold text-primary-500 uppercase mb-6 text-xs border-b border-slate-800 pb-2">The Key Account Protocol</h6>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {[
                                { t: "Dedicated Attention", d: "Personal involvement by Sales Responsible and direct C-Level access." },
                                { t: "Priority Service", d: "First access to scheduling, materials, and emergency response teams." },
                                { t: "Account Planning", d: "Annual strategic plans mapping decision-makers and growth targets." },
                                { t: "Custom Reporting", d: "Advanced benchmarking, cost-saving logs, and portfolio performance audits." },
                                { t: "Special Benefits", d: "Volume-locked pricing, extended payment terms, and consolidated invoicing." },
                                { t: "Relationship Tiering", d: "Active connections across multiple levels (Finance, Safety, Operations)." },
                            ].map((p, idx) => (
                                <div key={idx} className="space-y-1">
                                    <p className="font-bold text-slate-200 uppercase text-xs underline">• {p.t}</p>
                                    <p className="text-xs text-slate-500 leading-snug">{p.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center">
                    <h6 className="font-bold text-slate-800 dark:text-slate-200 uppercase mb-4 border-b pb-2 inline-block text-xs">Account Review Meetings</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
                        <div className="p-6 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                            <p className="font-bold text-primary-600 uppercase mb-2 text-xs">Quarterly Business Reviews (QBR)</p>
                            <p className="text-xs text-slate-500">Scorecard Performance, Compliance Status, Issues/Resolutions, and Recommendation Roadmap.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                            <p className="font-bold text-primary-600 uppercase mb-2 text-xs">Annual Strategic Planning</p>
                            <p className="text-xs text-slate-500">Full-year performance recap, customer's upcoming year plans, and major contract renewals.</p>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="comm-standards">
                <SubSectionHeader>4.5 Customer Communication Standards</SubSectionHeader>
                <Paragraph className="mb-6 italic">Professionalism, timeliness, and clarity are the benchmarks of SS+ communication. Every interaction must reinforce our expertise and reliability.</Paragraph>

                <div className="my-10 overflow-hidden border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                    <table className="w-full text-left text-xs">
                        <thead className="text-white uppercase">
                            <tr>
                                <th className="p-4 font-bold">Communication Type</th>
                                <th className="p-4 font-bold">Target Response Time</th>
                                <th className="p-4 font-bold">Primary Responsibility</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400">
                            <tr className="border-b border-slate-200 dark:border-slate-800">
                                <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Phone Calls</td>
                                <td className="p-4">Answer within 3 rings</td>
                                <td className="p-4">Available Staff</td>
                            </tr>
                            <tr className="border-b border-slate-200 dark:border-slate-800">
                                <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Voicemails</td>
                                <td className="p-4">Return within 4 hours</td>
                                <td className="p-4">Direct Recipient</td>
                            </tr>
                            <tr className="border-b border-slate-200 dark:border-slate-800">
                                <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Email Inquiries</td>
                                <td className="p-4">Initial response within 4 hours</td>
                                <td className="p-4">Assigned Sales Rep</td>
                            </tr>
                            <tr className="border-b border-slate-200 dark:border-slate-800">
                                <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Quotation Requests</td>
                                <td className="p-4">1 Business Day (2 for Complex)</td>
                                <td className="p-4">Sales Rep / Estimator</td>
                            </tr>
                            <tr className="border-b border-slate-200 dark:border-slate-800">
                                <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Complaints</td>
                                <td className="p-4">Acknowledge within 4 hours</td>
                                <td className="p-4">Relevant Manager</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Service Issues</td>
                                <td className="p-4">Technical response within 24h</td>
                                <td className="p-4">Operations Team</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                    <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h6 className="font-bold text-slate-400 uppercase mb-4 underline text-center text-xs">Digital Etiquette</h6>
                        <div className="space-y-4 text-xs text-slate-500">
                            <p><strong>• Email Structure:</strong> Professional greeting, clear purpose in 1st sentence, bulleted body, and explicit Call to Action (CTA).</p>
                            <p><strong>• Subject Lines:</strong> "SS+ [Action] - [Ref #] - [Customer Name]" format mandatory. No vague subjects.</p>
                            <p><strong>• Attachments:</strong> Strictly Descriptive file names. Reference all attachments in the body.</p>
                        </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h6 className="font-bold text-slate-400 uppercase mb-4 underline text-center text-xs">Voice Standards</h6>
                        <div className="space-y-4 text-xs text-slate-500">
                            <p><strong>• The SS+ Smile:</strong> Smile while talking—customers hear the energy and approachability.</p>
                            <p><strong>• Live Transfers:</strong> Never cold-transfer. Explain the situation to your colleague before completing the transfer.</p>
                            <p><strong>• Closures:</strong> Summarize action items and let the customer hang up first.</p>
                        </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h6 className="font-bold text-slate-400 uppercase mb-4 underline text-center text-xs">F2F Professionalism</h6>
                        <div className="space-y-4 text-xs text-slate-500">
                            <p><strong>• Appearance:</strong> Full SS+ Uniform/Business attire with visible ID badge. Safety considerations priority.</p>
                            <p><strong>• Body Language:</strong> Open posture, firm handshake, and consistent eye contact.</p>
                            <p><strong>• Etiquette:</strong> Arrive T-5 minutes. Phones silenced. Full attention on client challenges.</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg text-white">
                    <h6 className="font-bold text-primary-500 uppercase mb-6 text-xs border-b border-slate-800 pb-2 text-center">Adapting to Customer Profiles</h6>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { t: "SME Owners", d: "Value personal ties and honest, practical benefits. Communication can be direct and conversational." },
                            { t: "Corporate Proc.", d: "Process-driven and formal. Bullet-proof documentation and detailed audit trails are mandatory." },
                            { t: "HSE/Safety Mgrs", d: "Highly technical. Focus on risk mitigation, compliance data, and deep product expertise." },
                            { t: "Government", d: "Extreme formality. Strict adherence to rigid procurement cycles and legal procedures." },
                        ].map((profile, idx) => (
                            <div key={idx} className="p-4 bg-slate-950 rounded-lg border border-slate-800">
                                <p className="font-bold text-slate-100 uppercase mb-1 underline text-xs">{profile.t}</p>
                                <p className="text-xs text-slate-500 leading-snug">{profile.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}



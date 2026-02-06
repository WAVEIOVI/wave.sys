
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import FlowChart from '../../../components/visuals/FlowChart';
import { Node, Edge } from 'reactflow';
import { motion } from 'framer-motion';
import { 
    FilePlus, ShieldCheck, Users, Handshake, CheckCircle2, 
    PenTool, Zap, User, Award, Building2, ClipboardList, 
    Settings, BarChart3, UserCheck, Database,
    Home, Briefcase, Landmark, Search, FileText, TrendingUp,
    RefreshCw, Layers, PieChart, CheckCircle, Gavel, Scale
} from 'lucide-react';

export default function CustomerAgreements() {
    const msaNodes: Node[] = [
        { id: '1', data: { label: 'Identify Need' }, position: { x: 250, y: 0 } },
        { id: '2', data: { label: 'Legal Draft' }, position: { x: 250, y: 80 } },
        { id: '3', data: { label: 'Stakeholder Review' }, position: { x: 250, y: 160 } },
        { id: '4', data: { label: 'Value > 50k?' }, position: { x: 250, y: 240 } },
        { id: '5', data: { label: 'GM Approval' }, position: { x: 450, y: 240 } },
        { id: '6', data: { label: 'Board Approval' }, position: { x: 450, y: 320 } },
        { id: '7', data: { label: 'Customer Negotiation' }, position: { x: 250, y: 400 } },
        { id: '8', data: { label: 'Execution & WAVE' }, position: { x: 250, y: 480 } },
    ];

    const msaEdges: Edge[] = [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e2-3', source: '2', target: '3' },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e4-5', source: '4', target: '5', label: 'Yes' },
        { id: 'e4-7', source: '4', target: '7', label: 'No' },
        { id: 'e5-6', source: '5', target: '6', label: 'High Val' },
        { id: 'e6-7', source: '6', target: '7' },
        { id: 'e7-8', source: '7', target: '8' },
    ];

    return (
        <Section id="section-2">
            <SectionHeader>SECTION 2: CUSTOMER AGREEMENTS & PRICE LISTS</SectionHeader>

            <SubSection id="agreement-types">
                <SubSectionHeader>2.1 Agreement Types & Structure</SubSectionHeader>
                <Paragraph className="mb-6 italic">SS+ utilizes a two-tier agreement structure to establish clear expectations and protect both parties:</Paragraph>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="p-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-xl relative overflow-hidden text-white group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Scale className="w-24 h-24 text-primary-500" />
                        </div>
                        <div className="relative z-10">
                            <h6 className="font-bold text-primary-400 uppercase tracking-[0.2em] mb-6 text-[10px] border-b border-slate-800 pb-3">Master Service Agreement (MSA)</h6>
                            <div className="space-y-6">
                                <div>
                                    <p className="font-bold text-slate-400 uppercase text-[9px] mb-1 tracking-tighter">Core Purpose</p>
                                    <p className="text-sm text-slate-200 leading-relaxed font-semibold">Establishes general terms for ongoing, long-term relationships (1-5 years).</p>
                                </div>
                                <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 shadow-inner group-hover:border-primary-500/20 transition-colors">
                                    <p className="font-bold text-primary-500 uppercase mb-2 text-[10px] flex items-center gap-2">
                                        <Award className="w-3 h-3" /> Strategic Use Case
                                    </p>
                                    <p className="text-xs text-slate-400 leading-relaxed">Key accounts, recurring services, and government partnerships requiring formal governance.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-lg relative overflow-hidden group shadow-primary-500/5"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Zap className="w-24 h-24 text-primary-600" />
                        </div>
                        <div className="relative z-10">
                            <h6 className="font-bold text-primary-600 uppercase tracking-[0.2em] mb-6 text-[10px] border-b border-slate-200 dark:border-slate-800 pb-3">Service Level Agreement (SLA)</h6>
                            <div className="space-y-6">
                                <div>
                                    <p className="font-bold text-slate-400 uppercase text-[9px] mb-1 tracking-tighter">Operational Purpose</p>
                                    <p className="text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-semibold">Defines specific service expectations and performance metrics for individual orders.</p>
                                </div>
                                <div className="p-4 bg-primary-50 dark:bg-primary-900/10 rounded-2xl border border-primary-100 dark:border-primary-900/20 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/20 transition-all">
                                    <p className="font-bold text-primary-600 uppercase mb-2 text-[10px] flex items-center gap-2">
                                        <ShieldCheck className="w-3 h-3" /> Mandatory Rule
                                    </p>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 font-bold leading-relaxed">Required for ALL orders regardless of MSA status. No exceptions.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm my-12"
                >
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <h6 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-[10px]">MSA vs SLA Decision Matrix</h6>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Guideline Table</span>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableRow isHeader>
                                <TableCell isHeader className="text-[10px] py-4">Assessment Factor</TableCell>
                                <TableCell isHeader className="text-[10px] py-4 text-primary-600 dark:text-primary-400">MSA Recommended</TableCell>
                                <TableCell isHeader className="text-[10px] py-4">SLA Only</TableCell>
                            </TableRow>
                            {[
                                { f: "Order Value", m: "> 10,000 TND annually", s: "< 10,000 TND" },
                                { f: "Relationship Type", m: "Strategic / Long-term", s: "Transactional" },
                                { f: "Service Frequency", m: "Recurring / Ongoing", s: "One-time / Periodic" },
                                { f: "Customer Type", m: "Key accounts, government", s: "Standard customers" },
                                { f: "Complexity", m: "High (multiple services)", s: "Low to medium" },
                                { f: "Investment Level", m: "Significant Capital/Staff", s: "Moderate" },
                            ].map((row, idx) => (
                                <TableRow key={idx}>
                                    <TableCell className="font-bold text-slate-700 dark:text-slate-300 py-4 text-xs">{row.f}</TableCell>
                                    <TableCell className="text-xs font-semibold text-primary-700 dark:text-primary-300">{row.m}</TableCell>
                                    <TableCell className="text-xs text-slate-500">{row.s}</TableCell>
                                </TableRow>
                            ))}
                        </Table>
                    </div>
                </motion.div>

                <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl my-12 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-600 opacity-50"></div>
                    <div className="flex flex-col items-center mb-10">
                        <h6 className="font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest text-[10px] mb-2 flex items-center gap-2">
                             <Gavel className="w-3 h-3 text-primary-500" /> Statutory & Legal Compliance
                        </h6>
                        <div className="h-0.5 w-12 bg-slate-300 dark:bg-slate-700"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                                    <TrendingUp className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                                </div>
                                <p className="font-bold text-slate-900 dark:text-white uppercase tracking-tighter text-xs">Tunisian Business Law</p>
                            </div>
                            <ul className="grid grid-cols-1 gap-3">
                                {[
                                    "All agreements governed by Tunisian commercial law",
                                    "Arabic and French language provisions as required",
                                    "Local jurisdiction and dispute resolution standards",
                                    "Full Tax compliance and VAT treatment requirements",
                                    "Labor law adherence for on-site service delivery"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[11px] text-slate-600 dark:text-slate-400 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0 group-hover/item:scale-125 transition-transform"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                                    <ShieldCheck className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                                </div>
                                <p className="font-bold text-slate-900 dark:text-white uppercase tracking-tighter text-xs">Standard Legal Protections</p>
                            </div>
                            <ul className="grid grid-cols-1 gap-3">
                                {[
                                    "Limitation of liability and exclusion clauses",
                                    "Comprehensive indemnification provisions",
                                    "Standardized Force Majeure definitions",
                                    "Minimum insurance & liability coverage mandates",
                                    "Non-disclosure (Confidentiality) & IP protections"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[11px] text-slate-600 dark:text-slate-400 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0 group-hover/item:scale-125 transition-transform"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="content-requirements">
                <SubSectionHeader>2.2 Agreement Content Requirements</SubSectionHeader>
                
                <div className="space-y-12 my-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl relative text-white overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-500/5 blur-[120px] -mr-64 -mt-64 group-hover:bg-secondary-500/10 transition-all duration-1000"></div>
                        
                        <div className="relative z-10 flex flex-col items-center mb-14">
                            <h6 className="font-bold text-secondary-500 uppercase tracking-[0.3em] mb-3 text-[10px]">Master Service Agreement</h6>
                            <h3 className="text-3xl font-black text-white tracking-tight">Core Components Registry</h3>
                            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-secondary-500 to-transparent mt-6"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
                            {[
                                { t: "1. Legal Framework", l: ["Tax IDs & records", "Effective durations", "Governing law", "Sig authorizations"], i: <Gavel className="w-4 h-4" /> },
                                { t: "2. Service Scope", l: ["Deliverable specs", "Product categories", "Exclusion lists", "Geo coverage"], i: <Layers className="w-4 h-4" /> },
                                { t: "3. Commercials", l: ["Pricing model", "Net 30 terms", "Currency (TND)", "Price adjustment"], i: <BarChart3 className="w-4 h-4" /> },
                                { t: "4. Deployment", l: ["Staff credentials", "Subcontractor rules", "Safety protocols", "Facility access"], i: <Database className="w-4 h-4" /> },
                                { t: "5. Risk & Liability", l: ["NDA (3yr min)", "IP ownership", "Liability caps", "Insurance mandates"], i: <ShieldCheck className="w-4 h-4" /> },
                                { t: "6. Operational Governance", l: ["Escalation paths", "QBR schedules", "Primary POCs", "Perf. Reporting"], i: <Settings className="w-4 h-4" /> },
                                { t: "7. Lifecycle & Exit", l: ["60-day notice", "Cause termination", "Transition help", "Data destruction"], i: <RefreshCw className="w-4 h-4" /> }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(15, 23, 42, 0.9)" }}
                                    className="p-6 bg-slate-950 rounded-3xl border border-slate-800 transition-all duration-300 group/item flex flex-col"
                                >
                                    <div className="w-10 h-10 rounded-2xl bg-secondary-500/10 text-secondary-400 flex items-center justify-center mb-5 shrink-0 border border-secondary-500/20 group-hover/item:border-secondary-500/50 transition-colors">
                                        {item.i}
                                    </div>
                                    <p className="font-bold text-white mb-4 uppercase tracking-tighter text-xs group-hover/item:text-secondary-400 transition-colors">{item.t}</p>
                                    <ul className="space-y-2.5 mt-auto">
                                        {item.l.map((li, lidx) => (
                                            <li key={lidx} className="text-[10px] text-slate-500 flex items-start gap-2 group-hover/item:text-slate-400 transition-colors">
                                                <div className="w-1 h-1 rounded-full bg-secondary-600 mt-1.5 shrink-0"></div>
                                                {li}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* SLA Components */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/5 blur-[100px] -ml-32 -mt-32"></div>
                        
                        <div className="relative z-10 flex flex-col items-center mb-14">
                            <h6 className="font-bold text-primary-600 dark:text-primary-400 uppercase tracking-[0.3em] mb-3 text-[10px]">Service Level Agreement</h6>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Technical Delivery Standards</h3>
                            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary-500 to-transparent mt-6 opacity-30"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative z-10">
                            {[
                                { t: "1. Service Definition", d: "Detailed descriptions, specific deliverables, and shared responsibilities Matrix.", icon: <FileText className="w-5 h-5 text-blue-500" /> },
                                { t: "2. Performance Standards", d: "Quantifiable availability, response/resolution times, and quality audit criteria.", icon: <TrendingUp className="w-5 h-5 text-indigo-500" /> },
                                { t: "3. Priority Matrix", d: "Definitions for Critical (P1), High (P2), and Medium (P3) urgency tickets.", icon: <PieChart className="w-5 h-5 text-red-500" /> },
                                { t: "4. Governance & Reporting", d: "KPI methodology, tool selection, and monthly performance review cycles.", icon: <ShieldCheck className="w-5 h-5 text-emerald-500" /> },
                                { t: "5. Operational Procedures", d: "Incident lifecycle, escalation paths, and scheduled maintenance windows.", icon: <Settings className="w-5 h-5 text-slate-500" /> },
                                { t: "6. Commercial Adjustments", d: "Fees, service credit penalties for breaches, and strict budget controls.", icon: <BarChart3 className="w-5 h-5 text-amber-500" /> }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 group transition-all duration-300 hover:shadow-lg hover:border-primary-500/20">
                                    <div className="mb-6">{item.icon}</div>
                                    <p className="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-tighter text-xs mb-3">{item.t}</p>
                                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{item.d}</p>
                                </div>
                            ))}
                        </div>

                        {/* SLA Priorities Table */}
                        <div className="relative z-10 p-1 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 rounded-[2rem] overflow-hidden shadow-inner border border-slate-200 dark:border-slate-800">
                             <div className="p-8 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm rounded-[1.8rem]">
                                <div className="flex items-center justify-between mb-8 px-4">
                                    <h6 className="font-bold text-primary-600 uppercase tracking-widest text-[10px]">Response & Resolution Commitments</h6>
                                    <div className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full border border-primary-200 dark:border-primary-900/20">
                                        <p className="text-[9px] font-black text-primary-600 dark:text-primary-400 uppercase tracking-tight">Standard Baseline</p>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableRow isHeader>
                                            <TableCell isHeader className="text-[10px] py-4">SLA Priority Level</TableCell>
                                            <TableCell isHeader className="text-[10px] py-4">Max. Response</TableCell>
                                            <TableCell isHeader className="text-[10px] py-4">Max. Resolution</TableCell>
                                            <TableCell isHeader className="text-[10px] py-4">Proactive Updates</TableCell>
                                        </TableRow>
                                        {[
                                            { p: "P1 Critical", r: "2 Hours", rs: "12 Hours", u: "Every Hour", c: "text-red-500 bg-red-500/10 border-red-500/20" },
                                            { p: "P2 High", r: "8 Hours", rs: "24 Hours", u: "Twice Daily", c: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
                                            { p: "P3 Medium", r: "24 Hours", rs: "72 Hours", u: "Daily", c: "text-slate-500 bg-slate-500/10 border-slate-500/20" },
                                        ].map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell>
                                                    <div className={`inline-flex items-center px-3 py-1 rounded-full border font-black text-[9px] uppercase tracking-tighter ${row.c}`}>
                                                        {row.p}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-xs font-bold text-slate-700 dark:text-slate-300">{row.r}</TableCell>
                                                <TableCell className="text-xs font-bold text-slate-900 dark:text-white">{row.rs}</TableCell>
                                                <TableCell className="text-[11px] text-slate-500 italic">{row.u}</TableCell>
                                            </TableRow>
                                        ))}
                                    </Table>
                                </div>
                                <div className="mt-8 flex items-center gap-4 bg-slate-50 dark:bg-slate-900/80 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                                        <CheckCircle className="w-4 h-4 text-red-500" />
                                    </div>
                                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                                        <span className="font-bold text-slate-900 dark:text-white uppercase">Critical Definition:</span> Entire system failure, security breach, or immediate life safety risk.
                                    </p>
                                </div>
                             </div>
                        </div>
                    </motion.div>
                </div>
            </SubSection>

            <SubSection id="approval-process">
                <SubSectionHeader>2.3 Agreement Approval Process</SubSectionHeader>
                <div className="space-y-16 my-16">
                    {/* MSA Workflow */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl dark:shadow-2xl relative overflow-hidden group text-slate-900 dark:text-white"
                    >
                        
                        
                        <div className="relative z-10">
                            <div className="space-y-12">
                                {/* Row 1: Process Map */}
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="h-[500px] w-full border border-slate-200 dark:border-slate-800/50 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-950/80 shadow-inner group/chart"
                                >
                                    <div className="absolute inset-0 bg-grid-slate-200/[0.05] dark:bg-grid-slate-800/[0.05] pointer-events-none"></div>
                                    <FlowChart initialNodes={msaNodes} initialEdges={msaEdges} title="MSA Process Map" />
                                </motion.div>

                                {/* Row 2: Steps Stack */}
                                <div className="grid grid-cols-1 gap-2">
                                    {[
                                        { s: "1. Request", d: "Sales rep completes form in WAVE PLUS with requirements.", icon: <FilePlus className="w-4 h-4" /> },
                                        { s: "2. Legal Review", d: "Drafting using standard template; customized as needed.", icon: <ShieldCheck className="w-4 h-4" /> },
                                        { s: "3. Stakeholder", d: "Commercial, Finance, Ops, and IT review drafts.", icon: <Users className="w-4 h-4" /> },
                                        { s: "4. Negotiation", d: "Presenter presents & negotiates within approved parameters.", icon: <Handshake className="w-4 h-4" /> },
                                        { s: "5. Approval", d: "Legal review of final version; Sales Responsible confirms terms.", icon: <CheckCircle2 className="w-4 h-4" /> },
                                        { s: "6. Execution", d: "Both parties sign; original stored in secure repository.", icon: <PenTool className="w-4 h-4" /> },
                                        { s: "7. Implementation", d: "Uploaded to WAVE PLUS; renewal alerts set in calendar.", icon: <Zap className="w-4 h-4" /> },
                                    ].map((step, idx) => (
                                        <motion.div 
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.05 * idx }}
                                            whileHover={{ x: 5 }}
                                            className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 flex gap-4 items-center transition-all duration-300 group/step"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 flex items-center justify-center border border-slate-200 dark:border-slate-800 group-hover/step:border-primary-500/50 transition-colors shadow-sm shrink-0">
                                                {step.icon}
                                            </div>
                                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 flex-1">
                                                <p className="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-wider min-w-[140px]">{step.s}</p>
                                                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight font-medium">{step.d}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="mt-12 p-8 bg-slate-50 dark:bg-slate-950/80 rounded-2xl border border-slate-200 dark:border-slate-800 relative z-10"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-slate-200 dark:via-slate-800 dark:to-slate-800"></div>
                                    <h4 className="font-bold text-primary-600 dark:text-primary-400 uppercase tracking-[0.2em] text-[10px]">Approval Authority Matrix (Annual Value)</h4>
                                    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-200 to-slate-200 dark:via-slate-800 dark:to-slate-800"></div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { k: "Up to 20,000 TND", a: "Sales Responsible", icon: <User className="w-5 h-5 text-blue-500 dark:text-blue-400" /> },
                                        { k: "20,001 - 50,000 TND", a: "General Manager", icon: <Award className="w-5 h-5 text-purple-500 dark:text-purple-400" /> },
                                        { k: "Above 50,000 TND", a: "Board of Directors", icon: <Building2 className="w-5 h-5 text-amber-500 dark:text-amber-400" /> },
                                    ].map((step, idx) => (
                                        <div key={idx} className="relative p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center group/matrix overflow-hidden shadow-sm">
                                            <div className="absolute top-0 right-0 -mr-4 -mt-4 p-4 opacity-5 group-hover/matrix:opacity-10 transition-opacity">
                                                {step.icon}
                                            </div>
                                            <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-950 flex items-center justify-center mb-4 border border-slate-200 dark:border-slate-800 shadow-sm group-hover/matrix:border-primary-500/30 transition-all transform group-hover/matrix:scale-110">
                                                {step.icon}
                                            </div>
                                            <p className="font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter mb-2 text-[10px]">{step.k}</p>
                                            <p className="font-extrabold text-slate-900 dark:text-white uppercase text-xs tracking-widest">{step.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* SLA Process */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="p-1 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 shadow-xl overflow-hidden"
                    >
                        <div className="bg-white dark:bg-slate-950 rounded-[23px] p-8">
                            <div className="flex flex-col items-center mb-16">
                                <h6 className="font-bold text-primary-600 uppercase tracking-widest text-xs mb-2">Operational Execution</h6>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center">SLA Approval Process</h3>
                                <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary-500 to-transparent mt-4 opacity-30"></div>
                            </div>

                            <div className="max-w-6xl mx-auto relative px-4">
                                {/* Connecting Line */}
                                <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-[2px] bg-gradient-to-r from-primary-500/10 via-primary-500/40 to-primary-500/10 z-0"></div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
                                    {[
                                        { t: "1. Preparation", d: "Sales rep selects template and customizes specs.", icon: <ClipboardList className="w-5 h-5" /> },
                                        { t: "2. Tech Review", d: "Ops validates resource/capacity & metrics.", icon: <Settings className="w-5 h-5" /> },
                                        { t: "3. Comm. Review", d: "Sales Responsible reviews pricing & alignment.", icon: <BarChart3 className="w-5 h-5" /> },
                                        { t: "4. Acceptance", d: "Customer signs & accepts performance metrics.", icon: <UserCheck className="w-5 h-5" /> },
                                        { t: "5. Implementation", d: "Attached to WO & scanned into WAVE PLUS.", icon: <Database className="w-5 h-5" /> },
                                    ].map((step, idx) => (
                                        <motion.div 
                                            key={idx} 
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 * idx }}
                                            className="flex flex-col items-center text-center relative pointer-events-none group/sla"
                                        >
                                            <div className="w-22 h-22 mb-6 flex flex-col items-center">
                                                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border-2 border-primary-500 flex items-center justify-center text-primary-600 shadow-2xl shadow-primary-500/20 z-10 relative transform rotate-3 hover:rotate-0 transition-all duration-300">
                                                    {step.icon}
                                                    <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-[10px] font-black border-2 border-white dark:border-slate-950">
                                                        {idx + 1}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="space-y-2 max-w-[180px]">
                                                <p className="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-tighter text-xs">{step.t}</p>
                                                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight font-medium">{step.d}</p>
                                            </div>

                                            {idx < 4 && (
                                                <div className="lg:hidden w-px h-12 bg-primary-500/20 my-6"></div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </SubSection>

            <SubSection id="price-list-mgmt">
                <SubSectionHeader>2.4 Price List Management</SubSectionHeader>
                
                <div className="space-y-12 my-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Standard Products Table */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-950"
                        >
                            <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between">
                                <h6 className="font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest text-[10px]">Standard Product Price Lists</h6>
                                <div className="px-2 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md text-[9px] font-bold border border-blue-500/20 uppercase">Baseline Rates</div>
                            </div>
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableRow isHeader>
                                        <TableCell isHeader className="text-[10px]">Product Category</TableCell>
                                        <TableCell isHeader className="text-[10px]">Update Freq.</TableCell>
                                        <TableCell isHeader className="text-[10px]">Rep Disc.</TableCell>
                                        <TableCell isHeader className="text-[10px]">Resp. Disc.</TableCell>
                                    </TableRow>
                                    {[
                                        { c: "Fire Detection / Suppr.", f: "Quarterly", d1: "15%", d2: "20%" },
                                        { c: "CCTV & Security Systems", f: "Quarterly", d1: "15%", d2: "20%" },
                                        { c: "Access & Intrusion", f: "Quarterly", d1: "15%", d2: "20%" },
                                        { c: "PPE & Safety Gear", f: "Semi-Annual", d1: "15%", d2: "20%" },
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell className="py-4"><span className="font-bold text-slate-800 dark:text-slate-200 text-xs">{row.c}</span></TableCell>
                                            <TableCell className="text-xs text-slate-500">{row.f}</TableCell>
                                            <TableCell className="text-xs font-mono text-slate-400">{row.d1}</TableCell>
                                            <TableCell className="text-xs font-bold text-primary-600 dark:text-primary-400">{row.d2}</TableCell>
                                        </TableRow>
                                    ))}
                                </Table>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800">
                                <p className="text-[10px] text-slate-400 italic text-center">* All standard product pricing updates require General Manager (GM) approval.</p>
                            </div>
                        </motion.div>

                        {/* Special Pricing Matrix */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 bg-slate-900 border border-slate-800 rounded-[2rem] text-white relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-500/10 blur-[60px] -mr-16 -mt-16"></div>
                            
                            <div className="flex flex-col items-center mb-8">
                                <h6 className="font-bold text-secondary-500 uppercase tracking-[0.2em] text-[10px] mb-2">Authority Delegation</h6>
                                <h4 className="text-xl font-black">Special Pricing Matrix</h4>
                                <div className="h-0.5 w-12 bg-secondary-900 mt-4"></div>
                            </div>

                            <div className="space-y-3 mb-8">
                                {[
                                    { d: "Up to 15%", v: "Any", a: "Sales Rep", r: "Immediate" },
                                    { d: "16-25%", v: "< 25k TND", a: "Sales Resp.", r: "24h" },
                                    { d: "16-25%", v: "25k+ TND", a: "General Manager", r: "48h" },
                                    { d: "26-35%", v: "Any", a: "General Manager", r: "48h" },
                                    { d: "Above 35%", v: "Any", a: "Board of Directors", r: "1 week" },
                                ].map((matrix, idx) => (
                                    <div key={idx} className="px-5 py-3.5 bg-slate-950 rounded-2xl border border-slate-800 grid grid-cols-4 gap-4 items-center group/row hover:border-secondary-500/30 transition-all duration-300">
                                        <div className="font-black text-white text-xs tracking-tighter group-hover/row:text-secondary-400 transition-colors">{matrix.d}</div>
                                        <div className="text-[10px] text-slate-500 font-medium">{matrix.v}</div>
                                        <div className="font-bold text-secondary-500 uppercase text-[10px] tracking-tight">{matrix.a}</div>
                                        <div className="text-[10px] text-slate-600 font-mono text-right">{matrix.r}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-5 bg-black/40 rounded-2xl border border-slate-800 shadow-inner">
                                <div className="flex items-center gap-3 mb-4">
                                    <ClipboardList className="w-4 h-4 text-slate-500" />
                                    <p className="font-bold text-slate-400 uppercase tracking-widest text-[9px]">Submission Checklist</p>
                                </div>
                                <ul className="space-y-2.5">
                                    {[
                                        "Documented justification in WAVE PLUS system",
                                        "Competitive intel & customer commitment details",
                                        "90-day maximum validity period for special rates"
                                    ].map((check, ci) => (
                                        <li key={ci} className="text-[10px] text-slate-500 flex items-start gap-3">
                                            <div className="w-1 h-1 rounded-full bg-secondary-600 mt-1.5 shrink-0"></div>
                                            {check}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Segment Pricing */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl overflow-hidden relative"
                    >
                        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/5 blur-[80px] -ml-32 -mt-32"></div>
                        
                        <div className="relative z-10 text-center mb-12">
                            <h6 className="font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest text-xs mb-2">Market Strategy</h6>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Customer Segment Pricing</h3>
                            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mt-4"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                            {[
                                { s: "Government", b: "5%", v: "10k+: +3% / 50k+: +5% / 100k+: +8%", t: "1y: +2% / 2y: +4% / 3y+: +6%", icon: <Landmark className="w-5 h-5" />, color: "blue" },
                                { s: "Corporate", b: "0%", v: "15k+: +5% / 75k+: +8% / 150k+: +12%", t: "1y: +3% / 2y: +5% / 3y+: +8%", icon: <Building2 className="w-5 h-5" />, color: "indigo" },
                                { s: "SME", b: "0%", v: "5k+: +3% / 25k+: +5% / 50k+: +8%", t: "1y: +2% / 2y: +4% / 3y+: +6%", icon: <Briefcase className="w-5 h-5" />, color: "emerald" },
                                { s: "Residential", b: "0%", v: "2.5k+: +2% / 10k+: +5%", t: "1y: +2% / 2y: +3%", icon: <Home className="w-5 h-5" />, color: "amber" },
                            ].map((segment, idx) => (
                                <motion.div 
                                    key={idx} 
                                    whileHover={{ y: -5 }}
                                    className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300 group/card shadow-sm hover:shadow-md"
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0 transition-transform group-hover/card:scale-110 shadow-lg
                                        ${segment.color === 'blue' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20' : ''}
                                        ${segment.color === 'indigo' ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20' : ''}
                                        ${segment.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' : ''}
                                        ${segment.color === 'amber' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20' : ''}
                                    `}>
                                        {segment.icon}
                                    </div>
                                    <p className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-4">{segment.s}</p>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
                                            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">Base:</span>
                                            <span className="font-black text-primary-600 dark:text-primary-400 text-xs">{segment.b}</span>
                                        </div>
                                        <div className="group/tier">
                                            <div className="flex items-center gap-2 mb-1.5 opacity-60">
                                                <TrendingUp className="w-3 h-3 text-slate-400" />
                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Volume Tiers</p>
                                            </div>
                                            <p className="text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-relaxed border-l-2 border-slate-200 dark:border-slate-800 pl-3 group-hover/tier:border-primary-500 transition-colors">
                                                {segment.v}
                                            </p>
                                        </div>
                                        <div className="group/term">
                                            <div className="flex items-center gap-2 mb-1.5 opacity-60">
                                                <RefreshCw className="w-3 h-3 text-slate-400" />
                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Contract Term</p>
                                            </div>
                                            <p className="text-[10px] text-slate-600 dark:text-slate-400 font-semibold leading-relaxed border-l-2 border-slate-200 dark:border-slate-800 pl-3 group-hover/term:border-primary-500 transition-colors">
                                                {segment.t}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Update Cycle */}
                    <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl flex flex-col items-center shadow-inner relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200 dark:bg-slate-800/20 blur-[100px] -mr-32 -mt-32"></div>
                        
                        <div className="text-center mb-16 relative z-10 w-full">
                            <h6 className="font-bold text-slate-500 uppercase tracking-widest text-[10px] mb-2">Governance Process</h6>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Quarterly Price Update Cycle</h3>
                            <div className="h-0.5 w-16 bg-slate-300 dark:bg-slate-700 mx-auto mt-4"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full relative z-10">
                            {/* Horizontal Line (Hidden on Mobile) */}
                            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
                            
                            {[
                                { t: "1. Initiation", d: "Finance triggers review based on market & FX fluctuations.", icon: <Zap className="w-4 h-4" /> },
                                { t: "2. Collection", d: "Updated supplier catalogs & competitive pricing intel.", icon: <Search className="w-4 h-4" /> },
                                { t: "3. Analysis", d: "Calculate margins & project impact on key accounts.", icon: <BarChart3 className="w-4 h-4" /> },
                                { t: "4. Review", d: "Prepare draft sheets with rationale for changes.", icon: <FileText className="w-4 h-4" /> },
                                { t: "5. Implementation", d: "GM Approval and WAVE PLUS system update.", icon: <CheckCircle className="w-4 h-4" /> },
                            ].map((step, idx) => (
                                <motion.div 
                                    key={idx} 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx }}
                                    className="flex flex-col items-center text-center group/step"
                                >
                                    <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-xl mb-6 relative z-10 group-hover/step:border-primary-500/50 group-hover/step:scale-110 transition-all duration-500">
                                        {step.icon}
                                        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[9px] font-black border border-white dark:border-slate-900 flex items-center justify-center">
                                            {idx + 1}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wider text-[11px] group-hover/step:text-primary-600 transition-colors">{step.t}</p>
                                        <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium px-2">{step.d}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>

    );
}


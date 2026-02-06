
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Blockquote from '../../../components/document-elements/Blockquote';
import { motion } from 'framer-motion';
import { 
    Clock, ShieldCheck, Target, ClipboardList, 
    Layout, Eye, Gauge, Zap, PenTool, FileCheck,
    CheckCircle2, AlertCircle, XCircle, Users, Activity,
    Calendar, ClipboardCheck, ArrowRight, Settings,
    FileText, Check, Info, Box, Brush,
    RefreshCw, MapPin, Archive, AlertTriangle, Wind, Scale, Droplets, Wrench, Camera
} from 'lucide-react';


export default function FireExtinguisherServices() {
    return (
        <Section id="section-2">
            <SectionHeader>SECTION 2: FIRE EXTINGUISHER SERVICES</SectionHeader>

            <SubSection id="inspection-services">
                <SubSectionHeader>2.1 INSPECTION SERVICES</SubSectionHeader>

                {/* Legal Framework */}
                <div className="mb-12">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-l-4 border-primary-500 pl-4">Legal Framework (Tunisia)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h5 className="font-bold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                                Regulatory Requirements
                            </h5>
                            <List>
                                <ListItem><strong>Semi-Annual Inspection (6 Months):</strong> Required by law; performed by certified in-house tech or approved provider (SS+).</ListItem>
                                <ListItem><strong>Annual Inspection (12 Months):</strong> Must be performed by an approved service provider.</ListItem>
                                <ListItem><strong>Fire Detection Systems:</strong> Inspection every 3 months (Alarms, Smoke Detectors).</ListItem>
                            </List>
                        </div>
                        <div className="p-6 bg-primary-50 dark:bg-primary-900/10 rounded-2xl border border-primary-100 dark:border-primary-900/30">
                            <h5 className="font-bold text-primary-700 dark:text-primary-300 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                                Our Service Offering
                            </h5>
                            <List>
                                <ListItem><strong>Monthly Visual Inspection:</strong> Customer self-service via WAVE PLUS portal.</ListItem>
                                <ListItem><strong>Semi-Annual Inspection:</strong> Professional technical service.</ListItem>
                                <ListItem><strong>Annual Comprehensive:</strong> Detailed annual baseline/compliance inspection.</ListItem>
                            </List>
                        </div>
                    </div>
                </div>

                {/* Customer Self-Service */}
                <div className="mb-12 p-8 bg-amber-50 dark:bg-amber-950/10 border border-amber-200 dark:border-amber-900/30 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    </div>
                    <h4 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-4">Customer Monthly Visual Inspection (Self-Service)</h4>
                    <Paragraph className="text-amber-700/80 dark:text-amber-300/80 mb-6">Customers with WAVE PLUS portal access can record monthly visual checks to maintain high safety standards between professional visits.</Paragraph>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h5 className="font-bold text-sm uppercase tracking-wider text-amber-900 dark:text-amber-100 mb-3">Monthly Visual Checklist:</h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <div className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                    <input type="checkbox" readOnly checked className="mt-1" /> <span>In designated location</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                    <input type="checkbox" readOnly checked className="mt-1" /> <span>Access not obstructed</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                    <input type="checkbox" readOnly checked className="mt-1" /> <span>Signage visible</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                    <input type="checkbox" readOnly checked className="mt-1" /> <span>No visible damage</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                    <input type="checkbox" readOnly checked className="mt-1" /> <span>Gauge in green zone</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                    <input type="checkbox" readOnly checked className="mt-1" /> <span>Pin and seal intact</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                    <input type="checkbox" readOnly checked className="mt-1" /> <span>Tag readable</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                    <input type="checkbox" readOnly checked className="mt-1" /> <span>Nozzle/hose OK</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white/50 dark:bg-black/20 p-4 rounded-xl">
                                <h6 className="font-bold text-xs uppercase text-amber-900 dark:text-amber-100 mb-2">SS+ Role in Self-Service</h6>
                                <p className="text-xs text-amber-800 dark:text-amber-300">We provide training, checklists, and monitor submissions. If issues are found, the customer contacts SS+ for standard or emergency service.</p>
                            </div>
                            <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs">
                                <strong>Benefits:</strong> Early identification, reduced liability, and documented due diligence.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Semi-Annual Inspection */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="p-2 bg-primary-100 dark:bg-primary-900/40 rounded-xl text-primary-600">
                                    <Calendar className="w-6 h-6" />
                                </span>
                                <h4 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
                                    Semi-Annual Inspection
                                </h4>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">Mandatory safety verification every 6 months</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-2xl text-xs font-bold text-slate-600 border border-slate-200 dark:border-slate-700">
                                <Box className="w-3.5 h-3.5" />
                                On-Site Service
                            </span>
                            <span className="flex items-center gap-1.5 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-2xl text-xs font-bold text-primary-600 border border-primary-200 dark:border-primary-900/50">
                                <Clock className="w-3.5 h-3.5" />
                                6mo Frequency
                            </span>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {[
                            { label: "Performed By", value: "SS+ Certified Technician", icon: Users, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/10" },
                            { label: "Objective", value: "Verify operational readiness", icon: Target, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/10" },
                            { label: "Typical Duration", value: "45 mins to 6+ hours", valueSub: "Dependent on site size", icon: Clock, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-900/10" }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -4 }}
                                className="group p-6 bg-white dark:bg-slate-900/40 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-800 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <p className="text-[10px] font-black uppercase text-slate-400 mb-1 tracking-widest">{item.label}</p>
                                <p className="text-base font-bold text-slate-700 dark:text-slate-200">{item.value}</p>
                                {item.valueSub && <p className="text-[10px] text-slate-500 mt-1">{item.valueSub}</p>}
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative p-8 bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800 rounded-[3rem] overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        
                        <h5 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-3">
                            <span className="p-2.5 bg-primary-500 text-white rounded-xl shadow-lg shadow-primary-500/20">
                                <ClipboardList className="w-5 h-5" />
                            </span>
                            Detailed Service Execution Workflow
                        </h5>

                        <div className="space-y-12 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-primary-500/50 via-slate-200 dark:via-slate-800 to-transparent"></div>

                            {/* Phase 1 */}
                            <div className="relative pl-16">
                                <div className="absolute left-4 top-0 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-primary-500 rounded-full z-10"></div>
                                <h6 className="text-sm font-black uppercase tracking-widest text-primary-600 mb-4 flex items-center gap-2">
                                    Phase 1: Preparation
                                    <span className="text-[10px] font-bold px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 tracking-normal">5-10 mins</span>
                                </h6>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        { title: "Review Data", desc: "Check WAVE PLUS for equipment list, history, and special requirements.", icon: FileText },
                                        { title: "Client Check-In", desc: "Report to security; brief contact person on scope and timing.", icon: Users },
                                        { title: "Set Up", desc: "Wear PPE; prepare tablet/tools (flashlight, tags, pins).", icon: Settings }
                                    ].map((step, i) => (
                                        <div key={i} className="p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col gap-2">
                                            <div className="w-8 h-8 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-center justify-center">
                                                <step.icon className="w-4 h-4 text-slate-500" />
                                            </div>
                                            <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{i+1}. {step.title}</p>
                                            <p className="text-[11px] text-slate-500 leading-relaxed">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Phase 2 */}
                            <div className="relative pl-16">
                                <div className="absolute left-4 top-0 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-primary-500 rounded-full z-10"></div>
                                <h6 className="text-sm font-black uppercase tracking-widest text-primary-600 mb-4 flex items-center gap-2">
                                    Phase 2: Inspection Process
                                    <span className="text-[10px] font-bold px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 tracking-normal text-nowrap">3-10 mins per unit</span>
                                </h6>
                                
                                <div className="space-y-6">
                                    <div className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                                            {[
                                                { 
                                                    title: "Location & Accessibility", 
                                                    icon: Layout,
                                                    items: ["Correct location & suitable for hazard", "Visible and not obstructed", "Properly mounted at correct height", "Signage: visible, photoluminescent"] 
                                                },
                                                { 
                                                    title: "External Examination", 
                                                    icon: Eye,
                                                    items: ["Cylinder: No damage, rust, or leaks", "Labels: Present, legible, French/Arabic", "Properly sized for hazard type"] 
                                                },
                                                { 
                                                    title: "Pressure Gauge", 
                                                    icon: Gauge,
                                                    items: ["Needle in GREEN zone (Fail if Red)", "Cover intact; securely attached", "Check for moisture/fogging inside"] 
                                                },
                                                { 
                                                    title: "Hose & Nozzle", 
                                                    icon: Zap,
                                                    items: ["No cracks/cuts; not brittle", "No blockage or insect nests", "Discharge horn (CO2) intact/secure"] 
                                                },
                                                { 
                                                    title: "Discharge Mechanism", 
                                                    icon: Settings,
                                                    items: ["Handle moves freely; not bent", "Pin & Seal: Present, intact", "Safety lock functioning correctly"] 
                                                },
                                                { 
                                                    title: "Technical Checks", 
                                                    icon: Activity,
                                                    items: ["Shake gently: Powder not clumped", "CO2 Weight: Check if >10% below", "Verify manufacturing/hydro dates"] 
                                                }
                                            ].map((group, i) => (
                                                <div key={i} className="space-y-3">
                                                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                                                        <group.icon className="w-4 h-4 text-primary-500" />
                                                        <p className="text-xs font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide">{i+1}. {group.title}</p>
                                                    </div>
                                                    <ul className="space-y-1.5">
                                                        {group.items.map((item, j) => (
                                                            <li key={j} className="flex items-start gap-2 text-[11px] text-slate-500 group">
                                                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-200 dark:bg-primary-800 group-hover:bg-primary-500 transition-colors"></span>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-10 p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
                                            <div className="flex items-center gap-2 mb-4">
                                                <PenTool className="w-4 h-4 text-primary-500" />
                                                <p className="text-xs font-black text-slate-800 dark:text-slate-100 uppercase">7. Tagging & Sync</p>
                                            </div>
                                            <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
                                                Update physical service tag with Date, Technician ID, and Next Service Due. Synchronize all findings to <strong>WAVE PLUS</strong> including Equipment ID, Result status, and photographic evidence.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {[
                                            { status: "PASS", icon: CheckCircle2, color: "emerald", desc: "Ready for use. Update tag and sync to WAVE PLUS." },
                                            { status: "MINOR ISSUE", icon: AlertCircle, color: "amber", desc: "Faded labels, minor rust. Note for next visit; remains in service." },
                                            { status: "FAIL", icon: XCircle, color: "red", desc: "Pressure/damage issues. Red tag 'Out of Service'; inform client." }
                                        ].map((item, i) => (
                                            <div key={i} className={`p-5 bg-${item.color}-50/50 dark:bg-${item.color}-900/10 rounded-[2rem] border border-${item.color}-200 dark:border-${item.color}-900/30 flex flex-col items-center text-center gap-2 group hover:scale-[1.02] transition-transform`}>
                                                <item.icon className={`w-8 h-8 text-${item.color}-500 mb-1 group-hover:rotate-12 transition-transform`} />
                                                <h6 className={`text-xs font-black text-${item.color}-600 tracking-widest uppercase`}>{item.status}</h6>
                                                <p className={`text-[11px] text-${item.color}-800/70 dark:text-${item.color}-300/70`}>{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Phase 3 */}
                            <div className="relative pl-16">
                                <div className="absolute left-4 top-0 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-primary-500 rounded-full z-10"></div>
                                <h6 className="text-sm font-black uppercase tracking-widest text-primary-600 mb-4 flex items-center gap-2">
                                    Phase 3: Completion
                                    <span className="text-[10px] font-bold px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 tracking-normal">10-15 mins</span>
                                </h6>
                                <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                        <FileCheck className="w-24 h-24 text-white" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 relative z-10">
                                        {[
                                            "Compile stats (Pass/Minor/Fail)",
                                            "Brief customer on finding summary",
                                            "Request digital sign-off via WAVE",
                                            "Upload photos; generate certificate",
                                            "Create quotes for FAIL items <24h",
                                            "Record materials (tags, seals, kg)"
                                        ].map((step, i) => (
                                            <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0 md:[&:nth-last-child(2)]:border-0">
                                                <span className="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center">
                                                    <Check className="w-3 h-3" />
                                                </span>
                                                <p className="text-xs font-medium text-slate-300">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>


                {/* Annual Comprehensive Inspection */}
                {/* Annual Comprehensive Inspection */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="pt-16 border-t border-slate-200 dark:border-slate-800"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="p-2 bg-secondary-100 dark:bg-secondary-900/40 rounded-xl text-secondary-600">
                                    <ClipboardCheck className="w-6 h-6" />
                                </span>
                                <h4 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
                                    Annual Comprehensive Inspection
                                </h4>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">Full baseline audit & compliance verification every 12 months</p>
                        </div>
                        <span className="px-4 py-2 bg-secondary-100 dark:bg-secondary-900/30 rounded-2xl text-xs font-bold text-secondary-600 border border-secondary-200 dark:border-secondary-900/50 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            Compliance Baseline
                        </span>
                    </div>

                    <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-200 dark:border-amber-900/30 mb-10 flex gap-4 items-start">
                        <div className="p-2 bg-amber-100 dark:bg-amber-900/40 rounded-lg text-amber-600">
                            <Info className="w-5 h-5" />
                        </div>
                        <Paragraph className="text-amber-800 dark:text-amber-200/80 mb-0 font-medium leading-relaxed font-bold">
                            The Annual Inspection includes <strong>EVERYTHING</strong> in the Semi-Annual Inspection PLUS these critical mandatory procedures defined by Tunisian safety protocols:
                        </Paragraph>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            { 
                                title: "1. Internal Examination", 
                                desc: "Mandatory for dry chemical powder types annually or if contamination is suspected.",
                                icon: Eye,
                                items: ["Depressurize and remove valve", "Check for internal pitting/corrosion", "Verify powder state (free-flowing)", "Service valve assembly & O-rings"],
                                color: "primary"
                            },
                            { 
                                title: "2. Hydrostatic Check", 
                                desc: "Verify dates on all units (10yr first test, then 5yr cycles).",
                                icon: Activity,
                                items: ["Audit manufacturing dates", "Identify units due for testing", "Tag and inform client (See Section 2.4)", "Record findings in asset registry"],
                                color: "secondary"
                            },
                            { 
                                title: "3. Detailed Weighing", 
                                desc: "Precision weight check for ALL units against nameplate specs.",
                                icon: Gauge,
                                items: ["Identify slow leaks or agent loss", "Compare to factory tare/gross", "Document exact weights in WAVE PLUS", "Calibrate against previous inspection data"],
                                color: "emerald"
                            }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -8 }}
                                className="relative p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`}></div>
                                
                                <h5 className={`font-black text-xs uppercase mb-4 text-${item.color}-600 tracking-widest flex items-center gap-2 relative z-10`}>
                                    <item.icon className="w-4 h-4" />
                                    {item.title}
                                </h5>
                                
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 italic mb-6 relative z-10 leading-relaxed font-medium">
                                    {item.desc}
                                </p>

                                <ul className="space-y-2 relative z-10">
                                    {item.items.map((li, j) => (
                                        <li key={j} className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                                            <Check className={`w-3.5 h-3.5 text-${item.color}-500`} />
                                            {li}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative p-10 bg-slate-900 border border-slate-800 rounded-[4rem] text-white/90 mb-12 overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
                        
                        <div className="relative z-10">
                            <h5 className="font-black text-xs uppercase mb-10 text-primary-400 text-center tracking-[0.4em]">
                                4. Broad Facility Assessment
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { icon: Target, title: "Coverage Adequacy", desc: "Distances within limits? New areas covered?" },
                                    { icon: Zap, title: "Type Appropriateness", desc: "Match equipment to current hazards?" },
                                    { icon: FileText, title: "Signage Complete", desc: "Exit signs visible? Assembly points marked?" },
                                    { icon: Brush, title: "Housekeeping", desc: "Exits clear? No blockage of equipment?" }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center text-center group">
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-300">
                                            <item.icon className="w-6 h-6 text-primary-400" />
                                        </div>
                                        <h6 className="font-bold text-xs mb-2 text-white">{item.title}</h6>
                                        <p className="text-[10px] text-slate-400 leading-relaxed max-w-[150px]">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm flex flex-col group">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="p-2.5 bg-slate-100 dark:bg-slate-900 rounded-xl text-slate-500">
                                    <FileText className="w-5 h-5" />
                                </span>
                                <h5 className="font-black text-xs uppercase text-slate-400 tracking-widest">The Annual Report</h5>
                            </div>
                            
                            <Paragraph className="text-[11px] text-slate-700 dark:text-slate-300 mb-6 font-bold flex items-center gap-2 italic">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                Comprehensive output including:
                            </Paragraph>

                            <div className="space-y-3 mt-auto">
                                {[
                                    "Executive Summary (Pass/Fail stats)",
                                    "Compliance Status vs Tunisian Laws",
                                    "Detailed Findings with Photo Evidence",
                                    "Equipment Lifecycle & Budget Planning",
                                    "Certificate of Compliance (or Conditional)"
                                ].map((step, i) => (
                                    <div key={i} className="flex items-start gap-3 text-[11px] text-slate-500 dark:text-slate-400 py-2 border-b border-slate-50 dark:border-slate-900 last:border-0">
                                        <ArrowRight className="w-3.5 h-3.5 mt-0.5 text-primary-500" />
                                        {step}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-primary-950 border border-primary-900/50 rounded-[2.5rem] text-primary-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                                <Users className="w-24 h-24 text-white" />
                            </div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="p-2.5 bg-primary-900 rounded-xl text-primary-400">
                                        <Users className="w-5 h-5" />
                                    </span>
                                    <h5 className="font-black text-xs uppercase text-primary-400 tracking-widest">Annual Completion Meeting</h5>
                                </div>

                                <Paragraph className="text-[11px] mb-8 text-primary-100/80 font-medium leading-relaxed italic">
                                    Beyond the inspection, the Annual visit serves as a strategic safety consultation:
                                </Paragraph>

                                <div className="space-y-4 mt-auto">
                                    {[
                                        "Present full written report (not verbal only)",
                                        "Discuss long-term safety strategy",
                                        "Schedule required remedial work",
                                        "Plan next 12-month service cycle"
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-5 h-5 bg-primary-500/20 rounded-full flex items-center justify-center">
                                                <Check className="w-3 h-3 text-primary-400" />
                                            </div>
                                            <p className="text-[11px] font-bold">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </SubSection>

            <SubSection id="refilling-steps">
                <SubSectionHeader>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-lg shadow-lg shadow-primary-500/20">
                            <RefreshCw className="w-6 h-6 text-white" />
                        </div>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-400">
                            2.2 REFILLING & RECHARGING PROCEDURES
                        </span>
                    </div>
                </SubSectionHeader>

                {/* 2.2 Overview */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="p-6 bg-gradient-to-br from-primary-50 to-white dark:from-slate-900 dark:to-slate-900/50 rounded-2xl border border-primary-100 dark:border-primary-900/20 shadow-lg shadow-primary-900/5 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-primary-100 dark:bg-primary-900/30 rounded-xl text-primary-600 dark:text-primary-400">
                                    <RefreshCw className="w-5 h-5" />
                                </div>
                                <h5 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wider">
                                    Refilling vs. Recharging
                                </h5>
                            </div>
                            <List className="text-[11px] text-slate-600 dark:text-slate-400 space-y-2">
                                <ListItem><strong className="text-primary-700 dark:text-primary-300">Refilling:</strong> Replacing the extinguishing agent (powder, CO2, foam, water).</ListItem>
                                <ListItem><strong className="text-primary-700 dark:text-primary-300">Recharging:</strong> Refilling + restoring correct operating pressure.</ListItem>
                            </List>
                        </motion.div>

                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="p-6 bg-gradient-to-br from-amber-50 to-white dark:from-slate-900 dark:to-slate-900/50 rounded-2xl border border-amber-100 dark:border-amber-900/20 shadow-lg shadow-amber-900/5 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-amber-100 dark:bg-amber-900/30 rounded-xl text-amber-600 dark:text-amber-400">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <h5 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wider">
                                    When Required
                                </h5>
                            </div>
                            <List className="text-[11px] text-slate-600 dark:text-slate-400 space-y-2">
                                <ListItem>After use (even partial discharge).</ListItem>
                                <ListItem>If pressure gauge shows low pressure.</ListItem>
                                <ListItem>If agent contaminated or expired.</ListItem>
                                <ListItem>As part of scheduled maintenance (annual internal examination).</ListItem>
                                <ListItem>If seal broken for any reason.</ListItem>
                            </List>
                        </motion.div>

                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="p-6 bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-900/50 rounded-2xl border border-emerald-100 dark:border-emerald-900/20 shadow-lg shadow-emerald-900/5 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-600 dark:text-emerald-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <h5 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wider">
                                    Service Location
                                </h5>
                            </div>
                            <List className="text-[11px] text-slate-600 dark:text-slate-400 space-y-2">
                                <ListItem><strong className="text-emerald-700 dark:text-emerald-300">On-Site:</strong> Accessible locations, customer preference.</ListItem>
                                <ListItem><strong className="text-emerald-700 dark:text-emerald-300">Workshop:</strong> Large quantities, complex work, better controlled environment.</ListItem>
                            </List>
                        </motion.div>
                    </div>

                    <Blockquote type="danger" title="Safety Critical">
                        These procedures must be followed exactly. Improper refilling can result in equipment failure in emergency or injury to technician.
                    </Blockquote>
                </motion.div>

                {/* 2.2.1 General Safety Rules */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-12 p-8 bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-slate-900 border border-red-100 dark:border-red-900/30 rounded-3xl shadow-xl shadow-red-900/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    
                    <div className="md:flex justify-between items-center mb-8 relative z-10">
                        <h4 className="text-xl font-bold text-red-900 dark:text-red-100 flex items-center gap-3">
                            <span className="p-2.5 bg-red-100 dark:bg-red-900/50 rounded-xl text-lg shadow-inner shadow-red-500/10">⚠️</span>
                            General Safety Rules for Refilling Operations
                        </h4>
                        <div className="mt-4 md:mt-0 px-4 py-2 bg-red-100 dark:bg-red-900/40 rounded-full border border-red-200 dark:border-red-800">
                             <span className="text-xs font-bold text-red-700 dark:text-red-300 uppercase tracking-wider">Before Starting ANY Refilling</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {[
                            { 
                                title: "Personal Safety", 
                                icon: Users, 
                                items: [
                                    "Wear safety glasses/goggles (mandatory)", 
                                    "Wear gloves (chemical/leather)", 
                                    "Wear dust mask/respirator (powder)", 
                                    "Wear protective clothing/coveralls",
                                    "Remove jewelry (rings, watches)"
                                ] 
                            },
                            { 
                                title: "Work Area Safety", 
                                icon: Layout, 
                                items: [
                                    "Well-ventilated area (CO2 risk)", 
                                    "No smoking, open flames, sparks", 
                                    "Fire extinguisher present", 
                                    "First aid kit accessible",
                                    "Eye wash station accessible"
                                ] 
                            },
                            { 
                                title: "Equipment Safety", 
                                icon: Wrench, 
                                items: [
                                    "Inspect cylinder BEFORE opening", 
                                    "Never exceed rated pressure", 
                                    "Never use damaged/expired cylinder", 
                                    "Never refill with wrong agent",
                                    "Use calibrated scales & gauges"
                                ] 
                            },
                            { 
                                title: "Environmental", 
                                icon: ShieldCheck, 
                                items: [
                                    "Proper ventilation for powder dust", 
                                    "Spill containment for liquids", 
                                    "Waste disposal procedures followed", 
                                    "Stop if in doubt - ask Team Leader"
                                ] 
                            }
                        ].map((section, idx) => (
                            <div key={idx} className="space-y-4 p-4 bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-red-100/50 dark:border-red-900/20 hover:bg-white dark:hover:bg-slate-900 transition-colors">
                                <h6 className="text-[10px] font-black uppercase text-red-600 tracking-widest flex items-center gap-2">
                                    <section.icon className="w-3 h-3" />
                                    {section.title}
                                </h6>
                                <List className="text-[11px] text-red-900/70 dark:text-red-200/70 space-y-1.5">
                                    {section.items.map((item, i) => (
                                        <ListItem key={i}>
                                            {item.includes('Stop if in doubt') ? (
                                                <strong className="underline decoration-red-400 underline-offset-2">{item}</strong>
                                            ) : item.includes('mandatory') ? (
                                                 <span>{item.replace('(mandatory)', '')} <strong>(mandatory)</strong></span>
                                            ) : item}
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 2.2.2 ABC Powder Procedure */}
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
                        <div>
                            <h4 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight flex items-center gap-3">
                                <span className="w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl">
                                    <Archive className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                                </span>
                                ABC Powder Extinguisher Refilling
                            </h4>
                            <div className="mt-2 text-xs text-slate-500 font-medium">Type: Dry Chemical ABC Powder (Monoammonium Phosphate based)</div>
                        </div>
                        <div className="text-right">
                            <span className="inline-block px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-slate-200 dark:border-slate-700">
                                Sizes: 1kg - 50kg • Grades: 30%, 40%, 60%
                            </span>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Preparation & Depressurization */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <motion.div 
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform duration-500">
                                    <ClipboardList className="w-24 h-24 text-slate-500" />
                                </div>
                                <h6 className="text-sm font-bold text-primary-600 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 rounded-xl text-xs shadow-sm text-primary-600 dark:text-primary-400">1</span>
                                    PREPARATION (5 minutes)
                                </h6>
                                <List className="text-[11px] space-y-4">
                                    <ListItem>
                                        <div className="flex gap-2">
                                            <span className="font-bold text-slate-700 dark:text-slate-200 min-w-[70px]">1. Verify:</span>
                                            <span className="text-slate-500">Extinguisher type/size, capacity, condition (no damage), and hydrostatic test validity.</span>
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <div className="flex gap-2">
                                            <span className="font-bold text-slate-700 dark:text-slate-200 min-w-[70px]">2. Gather:</span>
                                            <div className="text-slate-500 space-y-1">
                                                <p>ABC powder (correct grade + 10%), O-rings, safety pin, tamper seal, inspection tag.</p>
                                                <p className="italic text-[10px] opacity-80 pl-2 border-l-2 border-slate-200">Tools: Wrenches, Funnel/Machine, Calibrated gauge/scale, Brush.</p>
                                            </div>
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <div className="flex gap-2">
                                            <span className="font-bold text-slate-700 dark:text-slate-200 min-w-[70px]">3. Safety:</span>
                                            <span className="text-slate-500">Glasses ON, Gloves ON, Dust mask ON. Area clean.</span>
                                        </div>
                                    </ListItem>
                                </List>
                            </motion.div>

                            <motion.div 
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="p-8 bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-slate-950 border border-amber-200 dark:border-amber-900/30 rounded-[2.5rem] shadow-sm relative overflow-hidden"
                            >
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-100 dark:bg-amber-900/20 rounded-full blur-2xl"></div>
                                <h6 className="text-sm font-black text-amber-700 dark:text-amber-500 mb-6 flex items-center gap-3 uppercase tracking-wide relative z-10">
                                    <span className="w-8 h-8 flex items-center justify-center bg-amber-100 dark:bg-amber-900/30 rounded-xl text-xs shadow-sm ring-1 ring-amber-200 dark:ring-amber-800">2</span>
                                    Step 1: Depressurize (3-5 min)
                                </h6>
                                <div className="space-y-4 relative z-10">
                                    <div className="p-3 bg-amber-100/50 dark:bg-amber-900/10 rounded-2xl border border-amber-200/50 dark:border-amber-800/30 flex items-center gap-3">
                                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                                        <div className="text-[10px] text-amber-800 dark:text-amber-200">
                                            <strong>CRITICAL:</strong> Ensure gauge reads ZERO and hissing ceased. Position away from people.
                                        </div>
                                    </div>
                                    <List className="text-[11px] space-y-2">
                                        <ListItem>
                                            <strong className="text-amber-800 dark:text-amber-200 block mb-0.5">Prepare:</strong> 
                                            Position securely. If outdoors, check wind. Remove safety pin.
                                        </ListItem>
                                        <ListItem>
                                            <strong className="text-amber-800 dark:text-amber-200 block mb-0.5">Method A (Controlled):</strong> 
                                            Loosen valve stem slowly. Listen for hissing.
                                        </ListItem>
                                        <ListItem>
                                            <strong className="text-amber-800 dark:text-amber-200 block mb-0.5">Method B (Discharge):</strong> 
                                            Squeeze handle to discharge. <em>Caution: Dust cloud - use mask.</em>
                                        </ListItem>
                                    </List>
                                </div>
                            </motion.div>
                        </div>

                        {/* Steps 2-6: Detailed Procedure */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { 
                                    step: "Step 2", 
                                    title: "Disassemble", 
                                    color: "slate",
                                    icon: Settings,
                                    items: [
                                        "Remove hose/nozzle (inspect for damage).",
                                        "Unscrew valve (counter-clockwise).",
                                        "Lift out valve assembly with siphon tube."
                                    ] 
                                },
                                { 
                                    step: "Step 3", 
                                    title: "Empty & Clean", 
                                    color: "slate",
                                    icon: Brush,
                                    items: [
                                        "Empty old powder (DO NOT reuse).",
                                        "Clean cylinder interior/threads.",
                                        "Inspect for corrosion/pitting (Critical).",
                                        "Clean valve assembly & siphon tube."
                                    ] 
                                },
                                { 
                                    step: "Step 4", 
                                    title: "Refill Powder", 
                                    color: "primary",
                                    icon: Archive,
                                    items: [
                                        "Select correct powder (check cert).",
                                        "Weigh exact mass (±50g).",
                                        "Fill using Machine (preferred) or Funnel.",
                                        "Verify fill level (Total - Tare)."
                                    ] 
                                },
                                { 
                                    step: "Step 5", 
                                    title: "Reassemble", 
                                    color: "primary",
                                    icon: Wrench,
                                    items: [
                                        "Replace O-ring (Seated, lubed).",
                                        "Insert siphon tube (check not bent).",
                                        "Install valve (Hand thread first).",
                                        "Tighten key/wrench firm.",
                                        "Reconnect hose/nozzle securely."
                                    ] 
                                },
                                { 
                                    step: "Step 6", 
                                    title: "Pressurize", 
                                    color: "secondary",
                                    icon: Gauge,
                                    items: [
                                        "Use Regulated Nitrogen (NO AIR).",
                                        "Set regulator 10-15 bar (Check label).",
                                        "Pressurize slowly. Monitor gauge.",
                                        "Stop when needle is centered in GREEN.",
                                        "Disconnect & Check pressure."
                                    ] 
                                }
                            ].map((card, i) => (
                                <motion.div 
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className={`p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm border-t-4 ${
                                        card.color === 'primary' ? 'border-t-primary-500' : 
                                        card.color === 'secondary' ? 'border-t-secondary-500' : 'border-t-slate-400'
                                    }`}
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <h6 className={`text-[10px] font-black uppercase tracking-widest ${
                                            card.color === 'primary' ? 'text-primary-600' : 
                                            card.color === 'secondary' ? 'text-secondary-600' : 'text-slate-500'
                                        }`}>
                                            {card.step}: {card.title}
                                        </h6>
                                        <card.icon className={`w-4 h-4 ${
                                            card.color === 'primary' ? 'text-primary-400' : 
                                            card.color === 'secondary' ? 'text-secondary-400' : 'text-slate-400'
                                        }`} />
                                    </div>
                                    <List className="text-[11px] space-y-2">
                                        {card.items.map((item, idx) => (
                                            <ListItem key={idx}>
                                                {item.includes('REPLACE') || item.includes('NO AIR') || item.includes('DO NOT') ? (
                                                    <span dangerouslySetInnerHTML={{ __html: item
                                                        .replace('REPLACE', '<strong class="text-red-500">REPLACE</strong>')
                                                        .replace('NO AIR', '<strong class="text-red-500">NO AIR</strong>')
                                                        .replace('DO NOT', '<strong class="text-red-500">DO NOT</strong>')
                                                    }} />
                                                ) : item}
                                            </ListItem>
                                        ))}
                                    </List>
                                </motion.div>
                            ))}
                        </div>

                        {/* QC & Completion */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-10 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-[3rem] text-white overflow-hidden relative shadow-2xl"
                        >
                             <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-primary-500/20 rounded-lg">
                                            <CheckCircle2 className="w-5 h-5 text-primary-400" />
                                        </div>
                                        <h6 className="text-xs font-black text-primary-400 uppercase tracking-[0.3em]">Step 7 & 8: Seal, Tag & QC</h6>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <p className="text-[11px] font-bold text-slate-300 border-b border-slate-700 pb-2">Step 7: Seal & Tag</p>
                                            <List className="text-[10px] text-slate-400 space-y-2">
                                                <ListItem><span className="text-primary-400 mr-2">1.</span>Install new safety pin.</ListItem>
                                                <ListItem><span className="text-primary-400 mr-2">2.</span>Secure new tamper seal.</ListItem>
                                                <ListItem><span className="text-primary-400 mr-2">3.</span>Attach Service Tag (Date, Tech ID, Next Due).</ListItem>
                                            </List>
                                        </div>
                                        <div className="space-y-3">
                                            <p className="text-[11px] font-bold text-slate-300 border-b border-slate-700 pb-2">Step 8: Quality Check</p>
                                            <List className="text-[10px] text-slate-400 space-y-1.5">
                                                <ListItem><span className="text-emerald-400 mr-1">✓</span> Visual (Clean, Valve tight)</ListItem>
                                                <ListItem><span className="text-emerald-400 mr-1">✓</span> Pressure (Green zone)</ListItem>
                                                <ListItem><span className="text-emerald-400 mr-1">✓</span> Weight (±100g tolerance)</ListItem>
                                                <ListItem><span className="text-emerald-400 mr-1">✓</span> Leak Test (Soap/Listen)</ListItem>
                                                <ListItem><span className="text-emerald-400 mr-1">✓</span> Functional (Pin works)</ListItem>
                                            </List>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-3 bg-red-900/30 border border-red-500/30 rounded-xl text-[10px] text-red-200 text-center font-bold">
                                        If ANY check fails: CORRECT BEFORE RELEASE
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-primary-500/20 rounded-lg">
                                            <FileText className="w-5 h-5 text-primary-400" />
                                        </div>
                                        <h6 className="text-xs font-black text-primary-400 uppercase tracking-[0.3em]">Step 9: Documentation</h6>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-[11px] font-bold text-slate-300 mb-2">1. Update WAVE PLUS</p>
                                            <p className="text-[10px] text-slate-400 leading-relaxed">
                                                ID, Service Type (Refill), Materials (kg used), Pressure set, Next Due, Before/After Photos.
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold text-slate-300 mb-2">2. Logs & Reports</p>
                                            <p className="text-[10px] text-slate-400 leading-relaxed">
                                                Record materials usage (powder, seals) in log. Generate Customer Report with signature.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </motion.div>
                    </div>
                </div>

                {/* 2.2.3 CO2 Extinguisher Procedure */}
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <h4 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight flex items-center gap-3">
                            <span className="w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl">
                                <Wind className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                            </span>
                            CO2 Extinguisher Refilling
                        </h4>
                        <div className="px-4 py-1.5 bg-secondary-100 dark:bg-secondary-900/30 border border-secondary-200 dark:border-secondary-900/50 rounded-full text-xs font-bold text-secondary-600 dark:text-secondary-400 flex items-center gap-2">
                             <Scale className="w-3.5 h-3.5" />
                             Weight-Based Only • Sizes: 2kg, 5kg
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 space-y-6">
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="p-6 bg-gradient-to-br from-red-950 to-red-900 border border-red-800 rounded-3xl text-red-100 shadow-xl shadow-red-900/20"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <AlertTriangle className="w-5 h-5 text-red-400" />
                                    <h6 className="text-[10px] font-black uppercase text-red-400 tracking-widest">CO2 Safety Warnings</h6>
                                </div>
                                <List className="text-[11px] space-y-3">
                                    <ListItem>
                                        <strong className="text-white block mb-0.5">Cold Burn Hazard:</strong> 
                                        <span className="text-red-200/80">-78°C agent. Wear insulated gloves. Don't touch discharge horn.</span>
                                    </ListItem>
                                    <ListItem>
                                        <strong className="text-white block mb-0.5">Asphyxiation:</strong> 
                                        <span className="text-red-200/80">Displaces oxygen. Work in well-ventilated area only.</span>
                                    </ListItem>
                                    <ListItem>
                                        <strong className="text-white block mb-0.5">High Pressure:</strong> 
                                        <span className="text-red-200/80">~60 bar stored. Handle cylinder with extreme care.</span>
                                    </ListItem>
                                </List>
                            </motion.div>
                            
                            {/* Step 1 & 2 */}
                            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm space-y-6">
                                <div>
                                    <h6 className="text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest flex items-center gap-2">
                                        <span className="w-5 h-5 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500 font-bold">1</span>
                                        Step 1: Prep & Weigh
                                    </h6>
                                    <Paragraph className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">Weigh before opening. Discharge remaining gas slowly. Note Tare/Gross weights.</Paragraph>
                                </div>
                                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <h6 className="text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest flex items-center gap-2">
                                        <span className="w-5 h-5 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500 font-bold">2</span>
                                        Step 2: Inspect
                                    </h6>
                                    <Paragraph className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">Check interior for corrosion/pitting. Critical for high pressure cylinders. Verify Test Date.</Paragraph>
                                </div>
                            </div>
                        </div>
                        
                        <div className="lg:col-span-2 p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                            <h6 className="text-sm font-black text-secondary-600 mb-8 flex items-center gap-3 relative z-10">
                                <span className="p-2.5 bg-secondary-50 dark:bg-secondary-900/30 rounded-xl shadow-sm">⚖️</span>
                                Step 3, 4 & 5: Refill, Seal & QC
                            </h6>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                                        <Activity className="w-4 h-4 text-secondary-500" />
                                        <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200">Step 3: Refill Protocol</p>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { title: "Connect", desc: "Use high-pressure filling hose to regulated CO2 source." },
                                            { title: "Calculate", desc: "Target = Full Weight - Tare Weight." },
                                            { title: "Fill", desc: "Fill slowly. Monitor precision scale continuously." },
                                            { title: "Stabilize", desc: "Stop at target. Let frost dissipate (5-10m). Re-weigh." }
                                        ].map((step, i) => (
                                            <div key={i} className="flex gap-3">
                                                <div className="w-1.5 h-1.5 mt-1.5 bg-secondary-400 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <strong className="text-[11px] text-slate-700 dark:text-slate-300 block mb-0.5">{step.title}</strong>
                                                    <p className="text-[10px] text-slate-500 leading-tight">{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-4 bg-secondary-50 dark:bg-secondary-900/10 border border-secondary-100 dark:border-secondary-900/20 rounded-2xl">
                                        <div className="flex items-center gap-2 mb-2">
                                            <AlertCircle className="w-4 h-4 text-secondary-600" />
                                            <p className="text-[10px] font-black text-secondary-600 uppercase">Target Accuracy</p>
                                        </div>
                                        <p className="text-[11px] text-secondary-900/80 dark:text-secondary-300/80 font-medium leading-tight">
                                            Must be within <strong>±2%</strong> of rated weight. Never overfill (rupture risk).
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2 mb-4">
                                            <PenTool className="w-4 h-4 text-slate-500" />
                                            <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200">Step 4: Reassemble</p>
                                        </div>
                                        <List className="text-[10px] text-slate-500 space-y-2">
                                            <ListItem>Install valve with new seals.</ListItem>
                                            <ListItem>Tighten securely.</ListItem>
                                            <ListItem>Re-weigh full unit to verify charge.</ListItem>
                                        </List>
                                    </div>
                                    
                                    <div className="flex-1 p-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-3xl">
                                        <div className="flex items-center gap-2 mb-3 justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            <p className="text-[10px] font-black text-slate-500 uppercase">Step 5: QC Check</p>
                                        </div>
                                        <List className="text-[10px] text-slate-500 space-y-2">
                                            <ListItem>✓ Valve leak-free.</ListItem>
                                            <ListItem>✓ Pin & Seal installed.</ListItem>
                                            <ListItem>✓ Tagged & Weight Logged.</ListItem>
                                        </List>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2.2.4 Foam & Clean Agent */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="p-10 bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/20 dark:to-slate-900 border border-emerald-100 dark:border-emerald-900/30 rounded-[3.5rem] relative overflow-hidden group shadow-lg shadow-emerald-900/5"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                            <Droplets className="w-32 h-32 text-emerald-600" />
                        </div>
                        <h4 className="text-xl font-black text-emerald-800 dark:text-emerald-100 mb-6 flex items-center gap-3 relative z-10">
                            <span className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
                                <Droplets className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                            </span>
                            Foam (AFFF) Refilling
                        </h4>
                        
                        <div className="space-y-6 relative z-10">
                            <div className="p-4 bg-white/60 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-900/20">
                                <p className="text-[10px] font-bold text-emerald-800 dark:text-emerald-200 uppercase mb-2">Mixing Procedure (Critical)</p>
                                <List className="text-[10px] text-emerald-900/80 dark:text-emerald-200/80 space-y-1.5">
                                    <ListItem>1. Calculate: 6L unit @ 6% = 360ml Conc + 5.64L Water.</ListItem>
                                    <ListItem>2. <strong className="text-emerald-700 dark:text-emerald-300">Add WATER FIRST</strong>, then concentrate (Avoid foaming).</ListItem>
                                    <ListItem>3. Mix gently. Pour into cylinder slowly.</ListItem>
                                </List>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { label: "Finalize", val: "Pressurize w/ Nitrogen (10-12 bar). NO AIR." },
                                    { label: "Labeling", val: "Show Type, Conc %, Mix Date, Expiry (5yr)." },
                                    { label: "Advice", val: "Invert cylinder annually to mix solution." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start pb-4 border-b border-emerald-200/50 dark:border-emerald-800/20 last:border-0 last:pb-0">
                                        <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase w-16 flex-shrink-0 pt-0.5">{item.label}</span>
                                        <span className="text-[11px] text-emerald-900/80 dark:text-emerald-200/80 leading-snug">{item.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="p-10 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
                        <h4 className="text-xl font-black text-white mb-6 flex items-center gap-3 relative z-10">
                            <span className="p-2 bg-slate-800 rounded-xl border border-slate-700">
                                <Wind className="w-6 h-6 text-primary-400" />
                            </span>
                            Clean Agent (FM-200)
                        </h4>
                        <Paragraph className="text-[11px] text-slate-300 mb-8 italic relative z-10 leading-relaxed">High-value, environmentally regulated agents requiring dedicated high-pressure weighing systems.</Paragraph>
                        <div className="space-y-4 relative z-10">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                <h6 className="text-[10px] font-bold text-primary-400 mb-3 uppercase">Refill Process</h6>
                                <List className="text-[10px] text-slate-300 space-y-2">
                                    <ListItem>1. Weigh empty. Inspect interior (High Value).</ListItem>
                                    <ListItem>2. Connect to dedicated supply. Fill to weight.</ListItem>
                                    <ListItem>3. Verify Weight (±2%). Pressure rises as it warms.</ListItem>
                                </List>
                            </div>
                            {[
                                "No substitution allowed (Must use exact agent).",
                                "ZERO leakage policy (Avoid venting/waste)."
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                                    <span className="text-[11px] text-slate-200">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </SubSection>

            <SubSection id="component-replacement">
                <SubSectionHeader>2.3 COMPONENT REPLACEMENT</SubSectionHeader>
                
                <Paragraph className="mb-8">During inspections or refilling, certain components wear out and need replacement to maintain the extinguisher's integrity and performance. Below are the standard procedures for common component replacements.</Paragraph>

                <div className="space-y-12">
                    {/* Pressure Gauge */}
                    <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform duration-500">
                            <span className="text-6xl">⏲️</span>
                        </div>
                        <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                            Pressure Gauge Replacement
                        </h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="p-6 bg-slate-50 dark:bg-slate-950/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <h5 className="text-[10px] font-black uppercase text-primary-600 mb-4 tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                    When to Replace
                                </h5>
                                <List className="text-[11px] space-y-2">
                                    <ListItem>Gauge needle stuck or not returning to zero</ListItem>
                                    <ListItem>Gauge face cracked or damaged</ListItem>
                                    <ListItem>Reading erratic or clearly incorrect</ListItem>
                                    <ListItem>Gauge corroded or illegible</ListItem>
                                    <ListItem>During annual service as preventive (if old)</ListItem>
                                </List>
                            </div>
                            <div className="p-6 bg-primary-50/30 dark:bg-primary-900/10 rounded-2xl border border-primary-100 dark:border-primary-900/20">
                                <h5 className="text-[10px] font-black uppercase text-primary-600 mb-4 tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                    Replacement Procedure
                                </h5>
                                <div className="space-y-4">
                                    <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-primary-200 dark:before:bg-primary-800">
                                        <div className="absolute left-[-2.5px] top-1.5 w-[6px] h-[6px] bg-primary-500 rounded-full"></div>
                                        <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">1. Depressurize & Remove</p>
                                        <p className="text-[10px] text-slate-500">Follow depressurization procedures. Verify zero pressure. Unscrew gauge from valve body (wrench if needed).</p>
                                    </div>
                                    <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-primary-200 dark:before:bg-primary-800">
                                        <div className="absolute left-[-2.5px] top-1.5 w-[6px] h-[6px] bg-primary-500 rounded-full"></div>
                                        <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">2. Select Replacement</p>
                                        <p className="text-[10px] text-slate-500">Must match thread size, pressure range (Powder: 0-25 bar; CO2: 0-200 bar), and mounting orientation.</p>
                                    </div>
                                    <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-primary-200 dark:before:bg-primary-800">
                                        <div className="absolute left-[-2.5px] top-1.5 w-[6px] h-[6px] bg-primary-500 rounded-full"></div>
                                        <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">3. Install & Test</p>
                                        <p className="text-[10px] text-slate-500">Use new sealing washer. Hand-tighten then wrench (don't over-tighten). Repressurize and check for leaks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Valve Seal & O-Ring */}
                    <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-secondary-100 dark:border-secondary-900/30 rounded-[3rem] shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform duration-500">
                            <span className="text-6xl">⭕</span>
                        </div>
                        <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                            Valve Seal & O-Ring Replacement
                        </h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="p-6 bg-white dark:bg-slate-950/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                    <h5 className="text-[10px] font-black uppercase text-secondary-600 mb-4 tracking-widest">When to Replace</h5>
                                    <List className="text-[11px] grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                                        <ListItem>Every refilling service</ListItem>
                                        <ListItem>If leak detected</ListItem>
                                        <ListItem>If compressed/cracked</ListItem>
                                        <ListItem>Rubber degrades over time</ListItem>
                                    </List>
                                </div>
                                <div className="p-6 bg-emerald-50/50 dark:bg-emerald-950/10 rounded-2xl border border-emerald-100 dark:border-emerald-900/20">
                                    <p className="text-[10px] font-black uppercase text-emerald-600 mb-2">Pro-Tip:</p>
                                    <p className="text-[11px] text-emerald-800/80 dark:text-emerald-300/80 italic">Always use compatible material (Rubber, EPDM, Viton) based on agent type. Seat properly without twisting.</p>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl text-white">
                                <h5 className="text-[10px] font-black uppercase text-secondary-400 mb-6 tracking-widest">Procedure</h5>
                                <div className="space-y-4 text-[11px]">
                                    <div className="flex gap-4">
                                        <span className="w-5 h-5 flex items-center justify-center bg-secondary-500 rounded-full text-[10px] font-bold flex-shrink-0">1</span>
                                        <p><strong className="text-secondary-400">Disassemble & Remove:</strong> Disassemble valve during refill. Pry out old O-ring with a pick (don't damage groove).</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-5 h-5 flex items-center justify-center bg-secondary-500 rounded-full text-[10px] font-bold flex-shrink-0">2</span>
                                        <p><strong className="text-secondary-400">Clean & Inspect:</strong> Remove residue from groove. Inspect for physical damage or pitting.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-5 h-5 flex items-center justify-center bg-secondary-500 rounded-full text-[10px] font-bold flex-shrink-0">3</span>
                                        <p><strong className="text-secondary-400">Install & Reassemble:</strong> Select correct size. Use light lubricant if specified. Reassemble and pressure test.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hose Replacement */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Hose */}
                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm flex flex-col">
                            <h4 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
                                <span className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xl">🐍</span>
                                Hose Replacement
                            </h4>
                            <div className="space-y-4 mb-6">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">When to Replace:</p>
                                <List className="text-[11px] space-y-1">
                                    <ListItem>Visible cracks, cuts, or abrasions</ListItem>
                                    <ListItem>Rubber brittle or perished</ListItem>
                                    <ListItem>Leaking or Bulging under pressure</ListItem>
                                </List>
                            </div>
                            <div className="mt-auto p-4 bg-slate-50 dark:bg-slate-950/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <p className="text-[10px] font-black text-primary-600 mb-2 uppercase tracking-tighter">Key Steps:</p>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed tabular-nums">
                                    1. Depressurize unit. <br/>
                                    2. Match length, type (POW/CO2), and fittings. <br/>
                                    3. Tighten securely; route without kinks. <br/>
                                    4. Pressure test for leaks at connections.
                                </p>
                            </div>
                        </div>

                        {/* Safety Pin & Seal */}
                        <div className="p-8 bg-slate-900 border border-slate-800 rounded-[3rem] shadow-sm flex flex-col text-white">
                            <div className="flex justify-between items-start mb-6">
                                <h4 className="text-lg font-black text-primary-400 flex items-center gap-2">
                                    <span className="p-2 bg-white/5 rounded-xl text-xl">📌</span>
                                    Safety Pin & Tamper Seal
                                </h4>
                                <span className="px-2 py-0.5 bg-primary-500 rounded text-[9px] font-bold text-white uppercase tracking-tighter">Mandatory Every Service</span>
                            </div>
                            <div className="space-y-4 mb-6">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Procedure:</p>
                                <div className="space-y-3">
                                    <div className="p-3 bg-white/5 rounded-xl">
                                        <p className="text-[11px] font-bold text-slate-300 mb-1">1. Install Pin</p>
                                        <p className="text-[10px] text-slate-400 italic">Select correct size. Pin should prevent handle operation but remain removable by hand in emergency.</p>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-xl">
                                        <p className="text-[11px] font-bold text-slate-300 mb-1">2. Apply Seal</p>
                                        <p className="text-[10px] text-slate-400 italic">Thread through pin holes. Pull tight (not too tight). Use SS+ branded seals with date.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nozzle/Horn & Handle */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm relative overflow-hidden group">
                           <h4 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                                <span className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xl">📢</span>
                                Discharge Nozzle & CO2 Horn
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <h5 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">CO2 Horn (Plastic/Metal)</h5>
                                    <p className="text-[11px] text-slate-500 leading-relaxed italic border-l-2 border-slate-200 pl-4">Ensure secure attachment (can detach under high pressure). Designed to reduce risk of cold burns during discharge.</p>
                                </div>
                                <div className="space-y-3">
                                    <h5 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Powder/Foam Nozzle</h5>
                                    <p className="text-[11px] text-slate-500 leading-relaxed italic border-l-2 border-slate-200 pl-4">Clean threads before installation. Match agent type and thread size. Tighten securely.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 bg-red-50 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 rounded-[3rem] shadow-sm flex flex-col">
                            <h4 className="text-lg font-black text-red-700 dark:text-red-400 mb-4 flex items-center gap-2 tracking-tighter">
                                <span className="p-2 bg-red-100 dark:bg-red-900/50 rounded-xl text-xl">⚙️</span>
                                Handle/Lever
                            </h4>
                            <p className="text-[11px] text-red-800/70 dark:text-red-300/80 mb-6 font-bold leading-tight">Replace if broken, bent, spring failure, or excessive corrosion.</p>
                            <div className="mt-auto p-4 bg-white/50 dark:bg-black/20 rounded-2xl text-[10px] text-red-900 dark:text-red-200 border border-red-200/50 dark:border-red-800/50">
                                <p className="font-bold mb-1">⚠️ Tech Note:</p>
                                <p className="italic leading-snug">Complex repair - requires valve disassembly. It is often more cost-effective to replace the entire valve assembly. Consult Team Leader.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="hydrostatic-testing">
                <SubSectionHeader>2.4 HYDROSTATIC TESTING COORDINATION</SubSectionHeader>
                <div className="space-y-12">
                    {/* Overview & Regulation */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm">
                            <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-4">What is Hydrostatic Testing?</h4>
                            <Paragraph className="text-sm mb-6">A pressure test of the extinguisher cylinder to verify structural integrity, ensuring it can safely hold operating pressure without failure.</Paragraph>
                            <div className="p-6 bg-slate-50 dark:bg-slate-950/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <h5 className="text-[10px] font-black uppercase text-secondary-600 mb-4 tracking-widest">Regulatory Requirement (Tunisia)</h5>
                                <List className="text-[11px] space-y-2">
                                    <ListItem><strong>First Test:</strong> 10 years from manufacturing date.</ListItem>
                                    <ListItem><strong>Subsequent Tests:</strong> Every 5 years after the first test.</ListItem>
                                    <ListItem><strong>Mandatory:</strong> Must be performed by a certified testing facility.</ListItem>
                                </List>
                            </div>
                        </div>
                        <div className="p-8 bg-secondary-900 border border-secondary-800 rounded-[3rem] text-white italic relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                             <h4 className="text-xl font-black text-secondary-400 mb-4">SS+ Coordination Role</h4>
                             <Paragraph className="text-sm text-secondary-100 mb-6 italic">SS+ does NOT perform hydrostatic testing in-house as it requires specialized third-party certification. We act as the technical coordinator.</Paragraph>
                             <div className="grid grid-cols-2 gap-4">
                                 <div className="text-[10px] text-secondary-300 border-l border-secondary-700 pl-3">
                                     <strong className="text-white block mb-1">1. Identify</strong> Detect due units during inspection.
                                 </div>
                                 <div className="text-[10px] text-secondary-300 border-l border-secondary-700 pl-3">
                                     <strong className="text-white block mb-1">2. Inform</strong> Notify customer of legal mandate.
                                 </div>
                                 <div className="text-[10px] text-secondary-300 border-l border-secondary-700 pl-3">
                                     <strong className="text-white block mb-1">3. Transport</strong> Secure handling to/from facility.
                                 </div>
                                 <div className="text-[10px] text-secondary-300 border-l border-secondary-700 pl-3">
                                     <strong className="text-white block mb-1">4. Re-service</strong> Refill and re-tag after certification.
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* The 8-Step Process */}
                    <div className="p-10 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[3.5rem]">
                        <h4 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight mb-8 text-center italic">The Hydrostatic Lifecycle Procedure</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { step: "1", title: "Identification", desc: "Check dates; if due, tag 'Hydrostatic Test Required' and remove from service." },
                                { step: "2", title: "Communication", desc: "Inform customer of cost, duration (1-2 weeks), and replacement options; get approval." },
                                { step: "3", title: "Preparation", desc: "Depressurize, empty agent, remove valve, and document serial numbers/equipment ID." },
                                { step: "4", title: "Transport", desc: "Deliver safely to a certified provider and obtain tracking numbers." },
                                { step: "5", title: "Testing (3rd Party)", desc: "1.5x working pressure check for leaks/deformation. PASS (Stamp) or FAIL (Condemn)." },
                                { step: "6", title: "Retrieval", desc: "Verify test stamps and certificates; inspect for any damage during transit." },
                                { step: "7", title: "Re-Service", desc: "Refill/recharge; install new seals, pin, and gauge; apply service tag with test date." },
                                { step: "8", title: "Return", desc: "Deliver with certificate; update WAVE PLUS with 5-year next due reminder." },
                            ].map((s, i) => (
                                <div key={i} className="p-6 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="w-8 h-8 flex items-center justify-center bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 rounded-full text-xs font-black mb-4 group-hover:bg-secondary-500 group-hover:text-white transition-colors">{s.step}</div>
                                    <h6 className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase mb-2 leading-tight">{s.title}</h6>
                                    <p className="text-[10px] text-slate-500 leading-relaxed italic">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Failed Tests */}
                    <div className="p-8 bg-red-50 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 rounded-[3rem] flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-20 h-20 flex-shrink-0 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center text-4xl">🚫</div>
                        <div>
                            <h4 className="text-xl font-black text-red-900 dark:text-red-100 mb-2 tracking-tight">Handling Failed Hydrostatic Tests</h4>
                            <Paragraph className="text-[11px] text-red-800/70 dark:text-red-300/80 mb-4 font-bold italic underline">Failed cylinders are UNLAWFUL and UNSAFE to return to service. They must be condemned.</Paragraph>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[10px] text-red-800 dark:text-red-200">
                                <List className="space-y-1">
                                    <ListItem><strong>Immediately Notify:</strong> Explain the safety risk to customer.</ListItem>
                                    <ListItem><strong>Replacement:</strong> Customer must purchase new unit (SS+ or other).</ListItem>
                                </List>
                                <List className="space-y-1">
                                    <ListItem><strong>Condemnation:</strong> Facility destroys or marks "CONDEMNED".</ListItem>
                                    <ListItem><strong>Documentation:</strong> Issue failure certificate and record disposal.</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="quality-control">
                <SubSectionHeader>2.5 QUALITY CONTROL PROCEDURES</SubSectionHeader>
                
                {/* 3-Layer System Overview */}
                <div className="p-12 bg-slate-900 border border-slate-800 rounded-[4rem] text-white relative overflow-hidden mb-16 shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                    <h4 className="text-3xl font-black mb-12 text-center tracking-tight bg-gradient-to-r from-primary-400 to-primary-200 bg-clip-text text-transparent">Three-Layer Quality Control System</h4>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                        {/* Layer 1: Tech */}
                        <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-colors">
                            <span className="text-[10px] font-black text-primary-400 uppercase tracking-[0.3em] block mb-4">LAYER 1 (100%)</span>
                            <h5 className="text-lg font-bold mb-4">Technician Self-Check</h5>
                            <Paragraph className="text-xs text-slate-400 italic leading-relaxed">Mandatory check of 100% of work before leaving any customer site. Focus: Service completion, work quality, and housekeeping.</Paragraph>
                        </div>
                        {/* Layer 2: TL */}
                        <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem] border-t-4 border-t-primary-500 hover:bg-white/10 transition-colors scale-105 shadow-2xl shadow-primary-500/10">
                            <span className="text-[10px] font-black text-primary-400 uppercase tracking-[0.3em] block mb-4">LAYER 2 (100%)</span>
                            <h5 className="text-lg font-bold mb-4">Team Leader Review</h5>
                            <Paragraph className="text-xs text-slate-400 italic leading-relaxed">Daily 100% audit of digital documentation in WAVE PLUS + Weekly random site visits to verify technical compliance.</Paragraph>
                        </div>
                        {/* Layer 3: Responsible */}
                        <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-colors">
                            <span className="text-[10px] font-black text-primary-400 uppercase tracking-[0.3em] block mb-4">LAYER 3 (20%)</span>
                            <h5 className="text-lg font-bold mb-4">Ops Responsible Audit</h5>
                            <Paragraph className="text-xs text-slate-400 italic leading-relaxed">Random monthly audit of 20% of all services. Includes quality assurance calls and physical integrity inspections.</Paragraph>
                        </div>
                    </div>
                </div>

                {/* Layer 1 Details */}
                <div className="mb-16">
                    <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-8 border-l-4 border-primary-500 pl-4">Layer 1: The 5-Minute Self-Check Checklist</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Service Completion", items: ["All work orders finished", "Equipment locations verified", "Nothing missed"] },
                            { title: "Quality & Safety", items: ["Pressure correct & no leaks", "Pins and seals installed", "Repairs done properly"] },
                            { title: "Documentation", items: ["WAVE PLUS forms complete", "Photos taken (Before/After)", "Digital signature obtained"] },
                            { title: "Housekeeping", items: ["Work area cleaned", "No tools/materials left", "Customer property protected"] },
                            { title: "Customer Satisfaction", items: ["Findings explained clearly", "Questions answered", "Customer feels secure"] },
                        ].map((c, i) => (
                             <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
                                 <h6 className="text-[10px] font-black uppercase text-primary-600 mb-4 tracking-widest">{c.title}</h6>
                                 <div className="space-y-2">
                                     {c.items.map((item, idx) => (
                                         <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-500 italic">
                                             <span className="w-1 h-1 bg-primary-500 rounded-full"></span> {item}
                                         </div>
                                     ))}
                                 </div>
                             </div>
                        ))}
                    </div>
                </div>

                {/* Layer 2 & 3 Review Methods */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 border-l-4 border-secondary-500 pl-4">Layer 2: Team Leader Daily Audit</h4>
                        <div className="p-8 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem]">
                            <h5 className="text-xs font-bold text-secondary-600 mb-4 uppercase">B. Document Red Flags</h5>
                            <List className="text-[11px] space-y-3">
                                <ListItem><strong>Speed:</strong> Service completed suspiciously fast (rushed work?).</ListItem>
                                <ListItem><strong>Consistency:</strong> Multiple "PASS" with zero findings at aged sites (too good to be true?).</ListItem>
                                <ListItem><strong>Missing Data:</strong> Missing photos, signatures, or material usage logs.</ListItem>
                                <ListItem><strong>Action:</strong> Immediate follow-up or return visit at SS+ cost if quality is doubted.</ListItem>
                            </List>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 border-l-4 border-emerald-500 pl-4">Layer 3: Ops Head Monthly Trend Analysis</h4>
                        <div className="p-8 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/30 rounded-[2.5rem]">
                            <h5 className="text-xs font-bold text-emerald-600 mb-4 uppercase">Quality Assurance Protocols</h5>
                            <List className="text-[11px] space-y-3 italic">
                                <ListItem><strong>QA Calls:</strong> 5-10 random customer calls per month to verify professionalism.</ListItem>
                                <ListItem><strong>Technical Audit:</strong> Detailed review of pressure/weight math in WAVE PLUS.</ListItem>
                                <ListItem><strong>Trend Identification:</strong> Is a specific technician always finding the same issue? Identifying training gaps.</ListItem>
                            </List>
                        </div>
                    </div>
                </div>

                {/* Handling Quality Issues */}
                <div className="p-8 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] italic">
                    <h4 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-6 text-center">Corrective Action Matrix</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white dark:bg-slate-950/50 rounded-2xl border-t-2 border-t-amber-400">
                             <h6 className="text-[10px] font-black text-amber-600 uppercase mb-2">MINOR (Doc Errors)</h6>
                             <p className="text-[10px] text-slate-500">Coaching with Team Leader; corrective entry in WAVE PLUS.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-950/50 rounded-2xl border-t-2 border-t-orange-500">
                             <h6 className="text-[10px] font-black text-orange-600 uppercase mb-2">MODERATE (Incomplete Work)</h6>
                             <p className="text-[10px] text-slate-500">Mandatory return visit; formal retraining; increased supervision.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-950/50 rounded-2xl border-t-2 border-t-red-600">
                             <h6 className="text-[10px] font-black text-red-600 uppercase mb-2">SERIOUS (Safety Risk)</h6>
                             <p className="text-[10px] text-slate-500">Escalation to Gérant; disciplinary action; possible suspension of solo field duties.</p>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="sign-off-documentation">
                <SubSectionHeader>2.6 SIGN-OFF & PHOTO STANDARDS</SubSectionHeader>
                
                {/* Sign-Off Procedure */}
                <div className="mb-16">
                    <h4 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-8 tracking-tight">The Customer Sign-Off Procedure</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Process Steps */}
                        <div className="space-y-4">
                            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
                                <h5 className="text-[11px] font-black text-primary-600 uppercase mb-3 flex items-center gap-2">
                                    <span className="w-5 h-5 flex items-center justify-center bg-primary-100 rounded-full text-[9px]">1</span>
                                    Completion Review
                                </h5>
                                <p className="text-[11px] text-slate-500 leading-relaxed italic">Find the safety/facility manager. Present list of equipment serviced. Explain FAIL items and show physical issues. Answer all questions patiently.</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
                                <h5 className="text-[11px] font-black text-primary-600 uppercase mb-3 flex items-center gap-2">
                                    <span className="w-5 h-5 flex items-center justify-center bg-primary-100 rounded-full text-[9px]">2</span>
                                    The Signature (Digital First)
                                </h5>
                                <p className="text-[11px] text-slate-500 leading-relaxed italic">Capture digital signature on WAVE PLUS Tablet. System auto-emails a copy. Use paper as fallback (Original to client, copy to SS+ scanned within 24h).</p>
                            </div>
                        </div>
                        {/* Handling Refusals */}
                        <div className="p-8 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 rounded-[3rem] text-amber-900 dark:text-amber-100">
                             <h5 className="font-black text-xs uppercase mb-4 tracking-widest text-amber-700 dark:text-amber-400">If Customer Refuses to Sign</h5>
                             <Paragraph className="text-[11px] mb-4 font-bold border-b border-amber-200 dark:border-amber-800 pb-2 italic">Do not argue. Listen to concerns and document situation.</Paragraph>
                             <List className="text-[10px] space-y-2">
                                 <ListItem><strong>Document in System:</strong> Note reason (Unhappy? No authority? Policy?).</ListItem>
                                 <ListItem><strong>Evidence:</strong> Take high-quality photos of all completed work for proof.</ListItem>
                                 <ListItem><strong>Alternative:</strong> Request confirmation via email within 24 hours.</ListItem>
                                 <ListItem><strong>Escalate:</strong> Inform Team Leader immediately for resolution.</ListItem>
                             </List>
                        </div>
                    </div>
                </div>

                {/* Photo Standards Detail */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border border-slate-800 rounded-[4rem] text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                    
                    <div className="flex flex-col items-center mb-12 relative z-10">
                        <div className="p-4 bg-secondary-500/10 rounded-2xl mb-4 border border-secondary-500/20">
                            <Camera className="w-8 h-8 text-secondary-400" />
                        </div>
                        <h4 className="text-3xl font-black text-center tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            Photo Documentation Excellence
                        </h4>
                        <div className="h-1 w-20 bg-secondary-500/50 rounded-full mt-4"></div>
                    </div>

                    <div className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 gap-6">
                            <motion.div whileHover={{ x: 10 }} className="flex flex-col sm:flex-row gap-8 p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-sm group">
                                <div className="space-y-4 min-w-[180px]">
                                    <div className="p-4 bg-secondary-500/10 rounded-2xl w-fit">
                                        <Clock className="w-6 h-6 text-secondary-400" />
                                    </div>
                                    <h6 className="text-xs font-black text-secondary-500 uppercase tracking-[0.2em] leading-tight">When to Shoot<br/><span className="text-[10px] text-slate-500 normal-case tracking-normal">Mandatory Events</span></h6>
                                </div>
                                <div className="h-full w-px bg-white/10 hidden sm:block"></div>
                                <List className="text-xs text-slate-400 space-y-4 flex-1 pt-1">
                                    <ListItem><strong className="text-secondary-300">Critical Events:</strong> All FAIL items, physical damage, safety hazards, and customer disputes.</ListItem>
                                    <ListItem><strong className="text-secondary-300">Routine Proof:</strong> Samples of each extinguisher type, gauge pressure readings, and newly attached tags.</ListItem>
                                </List>
                            </motion.div>

                            <motion.div whileHover={{ x: 10 }} className="flex flex-col sm:flex-row gap-8 p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-sm group">
                                <div className="space-y-4 min-w-[180px]">
                                    <div className="p-4 bg-emerald-500/10 rounded-2xl w-fit">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <h6 className="text-xs font-black text-secondary-500 uppercase tracking-[0.2em] leading-tight">Quality Checklist<br/><span className="text-[10px] text-slate-500 normal-case tracking-normal">Technical Standards</span></h6>
                                </div>
                                <div className="h-full w-px bg-white/10 hidden sm:block"></div>
                                <List className="text-xs text-slate-400 space-y-4 flex-1 pt-1">
                                    <ListItem><strong className="text-emerald-400">Visual Clarity:</strong> Ensure photos are in sharp focus, well-lit, and zoomed appropriately on the subject.</ListItem>
                                    <ListItem><strong className="text-emerald-400">Contextual Evidence:</strong> Capture clear subjects showing the equipment ID and the facility location context.</ListItem>
                                    <ListItem><strong className="text-emerald-400">Reparation Proof:</strong> Mandatory "Before vs. After" shots side-by-side for all performed repairs and part replacements.</ListItem>
                                </List>
                            </motion.div>
                        </div>

                        <motion.div whileHover={{ y: -5 }} className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[3rem] relative">
                             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/5 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary-500/10 rounded-2xl">
                                        <ShieldCheck className="w-6 h-6 text-primary-400" />
                                    </div>
                                    <div>
                                        <h6 className="text-[11px] font-black text-primary-400 uppercase tracking-[0.2em]">Data Integrity Policy</h6>
                                        <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mt-0.5">Global Compliance Standard</p>
                                    </div>
                                </div>
                                <div className="px-5 py-2 bg-primary-500/10 border border-primary-500/20 rounded-xl text-[10px] font-black text-primary-400 uppercase tracking-widest">
                                    Encrypted & Verified
                                </div>
                             </div>
                             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { label: "Privacy", desc: "No people or confidential info in shots.", icon: Eye },
                                    { label: "Tagging", desc: "Label all photos in WAVE PLUS (Unit ID).", icon: PenTool },
                                    { label: "Timeline", desc: "Same-day upload required for compliance.", icon: Calendar },
                                    { label: "Security", desc: "Automatic tamper-proof timestamps.", icon: ShieldCheck }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex items-center gap-2 mb-1">
                                            <item.icon className="w-4 h-4 text-slate-400" />
                                            <span className="text-[10px] font-black text-slate-200 uppercase tracking-wider">{item.label}</span>
                                        </div>
                                        <p className="text-[10px] text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                             </div>
                        </motion.div>
                    </div>
                </motion.div>
            </SubSection>
        </Section>
    );
}


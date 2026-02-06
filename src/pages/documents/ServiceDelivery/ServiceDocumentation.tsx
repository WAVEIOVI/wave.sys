
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Blockquote from '../../../components/document-elements/Blockquote';
import { motion } from 'framer-motion';
import { Clock, Package, MessageSquare, AlertCircle, ShieldCheck, FileText, Send } from 'lucide-react';

export default function ServiceDocumentation() {
    return (
        <Section id="section-5">
            <SectionHeader>SECTION 5: SERVICE DOCUMENTATION</SectionHeader>

            <SubSection id="required-forms">
                <SubSectionHeader>5.1 REQUIRED FORMS & REPORTS</SubSectionHeader>
                <div className="space-y-12">
                    {/* Documentation Purpose */}
                    <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3.5rem] italic text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary-500/20 transition-colors"></div>
                        <h4 className="text-[10px] font-black text-primary-500 uppercase mb-8 tracking-[0.4em] relative">Documentation Purpose: Why We Document Everything</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                            {[
                                { t: "Legal protection", d: "Proof of service and compliance for all stakeholders." },
                                { t: "Quality control", d: "Verifying that work was done properly to SS+ standards." },
                                { t: "Customer transparency", d: "Full visibility for the client on exactly what was done." },
                                { t: "Service history", d: "Tracking the complete lifecycle of every piece of equipment." },
                                { t: "Billing accuracy", d: "Precise recording of materials used and time spent." },
                                { t: "Continuous improvement", d: "Identifying patterns and specific training needs." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start p-4 bg-white/5 rounded-2xl border border-white/5 group/item hover:border-white/10 transition-colors">
                                    <span className="text-emerald-500 font-black">✓</span>
                                    <div>
                                        <p className="font-black text-[10px] uppercase text-slate-200">{item.t}</p>
                                        <p className="text-[10px] text-slate-400 leading-relaxed mt-1">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/5 text-center">
                            <p className="text-xs font-black uppercase tracking-widest text-primary-400 italic">Documentation is Mandatory — Not Optional</p>
                        </div>
                    </div>

                    {/* Core Documentation Requirements */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 ml-4 italic">Core Documentation (Mandatory For EVERY Service)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { 
                                    t: "1. Work Order", 
                                    d: "Created before service; contains customer, scope, schedule, and tech info. Signed upon completion." 
                                },
                                { 
                                    t: "2. Service Report", 
                                    d: "Detailed record for EACH piece of equipment (ID, location, type, service, findings, materials, time)." 
                                },
                                { 
                                    t: "3. Inspection Checklist", 
                                    d: "Use standardized semi-annual/annual checklist. Check every item; note N/A if not applicable." 
                                },
                                { 
                                    t: "4. Customer Sign-Off Form", 
                                    d: "Customer acknowledges work completed with signature and date. Documents any concerns noted." 
                                },
                                { 
                                    t: "5. Photos", 
                                    d: "Mandatory for failures, damage, hazards, and repairs. Recommended for facility and installations." 
                                },
                                { 
                                    t: "6. Materials Usage Log", 
                                    d: "Record ALL refilling agents, spare parts, and consumables used for inventory and billing." 
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm italic group hover:border-primary-500/50 transition-colors">
                                    <h5 className="font-black text-xs text-primary-600 mb-4 border-b-2 border-primary-100 dark:border-primary-900/30 w-fit pr-6 pb-1 group-hover:pr-10 transition-all uppercase tracking-tighter">{item.t}</h5>
                                    <p className="text-[11px] text-slate-500 leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Additional Documentation */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 ml-4 italic">Additional Documentation (As Needed)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { 
                                    t: "7. Intervention File", 
                                    s: "Mission Folder",
                                    d: "For complex projects. Contains work orders, reports, correspondence, quotations, drawings, and photos." 
                                },
                                { 
                                    t: "8. Non-Conformance Report", 
                                    s: "Safety / Compliance",
                                    d: "When significant issues are found: equipment failed, site unsafe, or compliance violations observed." 
                                },
                                { 
                                    t: "9. Incident Report", 
                                    s: "Accidents / Damage",
                                    d: "Any accident, injury, property damage, or near-miss. Report to Operations Responsible IMMEDIATELY." 
                                },
                                { 
                                    t: "10. Warranty Claim Form", 
                                    s: "Corrective Action",
                                    d: "If performing warranty work (free service for previous error). Requires manager approval." 
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] italic flex gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h5 className="font-black text-xs text-slate-800 dark:text-slate-200 uppercase tracking-tighter">{item.t}</h5>
                                            <span className="px-2 py-0.5 bg-secondary-100 dark:bg-secondary-900/30 text-[8px] font-black text-secondary-600 rounded-full uppercase tracking-widest">{item.s}</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="waveplus-documentation">
                <SubSectionHeader>5.2 WAVE PLUS DIGITAL DOCUMENTATION</SubSectionHeader>
                <div className="space-y-12">
                    <Paragraph className="italic ml-4 text-slate-500">WAVE PLUS Mobile App is our primary documentation tool. It ensures accuracy, speed, and professional reporting.</Paragraph>

                    {/* Before Leaving Checklist */}
                    <div className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm italic">
                        <h4 className="text-xs font-black uppercase tracking-widest text-primary-600 mb-6 border-b pb-2">Using WAVE PLUS in the Field: Pre-Service</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "Tablet/phone charged (100%)",
                                "WAVE PLUS app updated to latest version",
                                "Download work orders for offline access",
                                "Verify customer data synced correctly",
                                "Backup: Carry paper forms for tech issues"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-center text-[11px] text-slate-500 font-bold">
                                    <span className="w-5 h-5 rounded-lg border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center text-[10px] text-primary-500">☐</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* WAVE PLUS Workflow */}
                    <div className="p-10 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[4rem] shadow-inner relative group">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase mb-12 text-center tracking-[0.4em] italic">The 7-Step WAVE PLUS Workflow</h4>
                        <div className="space-y-8 max-w-4xl mx-auto">
                            {[
                                { s: "1", t: "ACCESS WORK ORDER", c: "Open Schedule/My Work Orders and review customer details, equipment list, and previous notes." },
                                { s: "2", t: "START SERVICE", c: "Tap \"Start Service\" to record start time and capture GPS location (verifies on-site presence)." },
                                { s: "3", t: "DOCUMENT EQUIPMENT", c: "Scan QR codes, complete checklists, enter findings (Pass/Fail, readings, weight, notes), and take photos." },
                                { s: "4", t: "SERVICE SUMMARY", c: "Review all entries, add general notes, and prioritize recommendations (Urgent/Soon/Future)." },
                                { s: "5", t: "CUSTOMER SIGN-OFF", c: "Review findings on screen; request digital signature; customer can add comments." },
                                { s: "6", t: "COMPLETE SERVICE", c: "Tap \"Complete Service\" to record end time and submit data to server (syncs when online)." },
                                { s: "7", t: "GENERATE REPORTS", c: "System automatically emails Completion Certificate, Inspection Report, and Summary to customer." },
                            ].map((p, i) => (
                                <div key={i} className="flex gap-8 group/step">
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-xs font-black text-primary-600 shadow-sm group-hover/step:scale-110 transition-transform">{p.s}</div>
                                        {i !== 6 && <div className="w-px flex-1 bg-slate-200 dark:bg-slate-800 my-2"></div>}
                                    </div>
                                    <div className="pt-2 pb-8">
                                        <h5 className="text-[10px] font-black text-slate-800 dark:text-slate-200 mb-1 tracking-widest uppercase">{p.t}</h5>
                                        <p className="text-[11px] text-slate-500 leading-relaxed italic">{p.c}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* WAVE PLUS Benefits */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {[
                            { 
                                group: "FOR TECHNICIANS", 
                                items: ["Faster documentation", "No lost paperwork", "Auto-calculations", "Access to history", "Real-time guidance"] 
                            },
                            { 
                                group: "FOR CUSTOMERS", 
                                items: ["Immediate reports", "Portal access", "QR code tracking", "Automated reminders", "Total transparency"] 
                            },
                            { 
                                group: "FOR SS+", 
                                items: ["Real-time visibility", "Remote QC review", "Data analytics", "Compliance audits", "Reduced admin time"] 
                            }
                        ].map((group, i) => (
                            <div key={i} className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm italic hover:border-primary-500/50 transition-colors">
                                <h5 className="text-[10px] font-black text-primary-600 uppercase mb-4 tracking-widest border-b pb-2">{group.group}</h5>
                                <div className="space-y-2">
                                    {group.items.map((item, j) => (
                                        <div key={j} className="flex gap-2 items-center text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                                            <span className="text-emerald-500">✓</span> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Paper Backup */}
                    <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3.5rem] italic text-white flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <h4 className="text-xs font-black uppercase tracking-widest text-primary-500 mb-4 border-b border-white/5 pb-2">Paper Backup Forms</h4>
                            <p className="text-xs text-slate-400 leading-relaxed mb-6 italic">Always carry a supply of paper forms (Work orders, Reports, Checklists, Sign-off, Logs). Use for technical issues or customer requests.</p>
                            <div className="p-4 bg-red-950/30 border border-red-900 rounded-2xl">
                                <p className="text-[10px] text-red-400 font-black uppercase tracking-widest leading-relaxed">
                                    CRITICAL: Transcribe all paper data to WAVE PLUS within 24 hours. Scan and upload the physical copies.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 grid grid-cols-1 gap-2">
                            <div className="text-[9px] font-black uppercase text-slate-600 mb-2 tracking-[0.2em] text-center">Required Paper Supply</div>
                            {["Service Report Template", "Annual Checklist", "Customer Sign-Off", "Materials Usage Log"].map((item, i) => (
                                <div key={i} className="px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-[10px] text-slate-400 text-center uppercase tracking-tighter">{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="photo-standards">
                <SubSectionHeader>5.3 PHOTO DOCUMENTATION STANDARDS</SubSectionHeader>
                <div className="p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3.5rem] shadow-xl italic relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary-500/10 transition-colors"></div>
                    <div className="flex items-center gap-6 mb-8">
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl text-xl">📸</div>
                        <h4 className="text-sm font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest italic border-b-2 border-primary-500 pb-1 pr-12">Quick Reference Standards</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { t: "Good Lighting", d: "Ensure high visibility for all components." },
                            { t: "In Focus", d: "Avoid blurry shots; verify quality before saving." },
                            { t: "Context & Detail", d: "Capture the location AND the specific issue." },
                            { t: "Daily Upload", d: "Sync and label all photos same day." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl">
                                <p className="text-[10px] font-black text-primary-500 uppercase mb-1">{item.t}</p>
                                <p className="text-[10px] text-slate-500 italic leading-tight">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SubSection>

            <SubSection id="sign-off-procedures">
                <SubSectionHeader>5.4 CUSTOMER SIGN-OFF PROCEDURES</SubSectionHeader>
                <div className="p-10 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3.5rem] italic shadow-inner">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b dark:border-slate-800 pb-2 flex items-center gap-3">
                                ✍️ Procedure Overview
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-bold uppercase tracking-tight">
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <span className="text-primary-500">01</span>
                                        <p>Always obtain a signature BEFORE leaving the customer site.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-primary-500">02</span>
                                        <p>Digital signature in WAVE PLUS is the standard requirement.</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <span className="text-primary-500">03</span>
                                        <p>Use paper backup only if technical issues prevent digital sign-off.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-primary-500">04</span>
                                        <p>If refusal occurs: Document reason and inform manager immediately.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] flex flex-col justify-center text-center">
                            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1 italic">Professional Tip</p>
                            <p className="text-[10px] text-slate-500 leading-relaxed italic italic">"Walk through the highlights with the customer; it builds value and reinforces your expertise before asking for the signature."</p>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="submission-filing">
                <SubSectionHeader>5.5 DOCUMENT SUBMISSION & FILING</SubSectionHeader>
                <div className="space-y-12 my-8">
                    {/* Same-Day Requirements */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between px-8 mb-8">
                            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 italic">Same-Day Requirements (End of Day By 17:00)</h4>
                            <div className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
                                <Clock className="w-3 h-3 text-red-500" />
                                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Strict Deadline</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Card 1: WAVE PLUS Submission */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ x: 10 }}
                                className="flex flex-col sm:flex-row gap-8 p-10 bg-slate-900 border border-slate-800 rounded-[3rem] text-white overflow-hidden relative group shadow-2xl"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary-500/10 transition-colors"></div>
                                <div className="space-y-4 min-w-[220px]">
                                    <div className="p-4 bg-primary-500/10 rounded-2xl w-fit">
                                        <Send className="w-6 h-6 text-primary-400" />
                                    </div>
                                    <div>
                                        <h6 className="text-xs font-black text-primary-400 uppercase tracking-[0.2em] leading-tight">1. WAVE PLUS SUBMISSION</h6>
                                        <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-widest">Digital Compliance</p>
                                    </div>
                                </div>
                                <div className="h-full w-px bg-white/10 hidden sm:block"></div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 flex-1 pt-1">
                                    {[
                                        "All Work Orders", "Service Reports", 
                                        "Inspection Checklists", "Photos & Materials Log", 
                                        "Customer Signatures"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center text-[11px] text-slate-300 font-bold uppercase tracking-tighter">
                                            <span className="w-4 h-4 rounded bg-white/5 flex items-center justify-center text-[8px] border border-white/10 text-emerald-400 shrink-0">✓</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Card 2: Physical Items */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ x: 10 }}
                                className="flex flex-col sm:flex-row gap-8 p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-xl overflow-hidden relative group"
                            >
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-500/5 rounded-full -mr-32 -mb-32 blur-3xl group-hover:bg-secondary-500/10 transition-colors"></div>
                                <div className="space-y-4 min-w-[220px]">
                                    <div className="p-4 bg-secondary-500/10 rounded-2xl w-fit">
                                        <Package className="w-6 h-6 text-secondary-500" />
                                    </div>
                                    <div>
                                        <h6 className="text-xs font-black text-secondary-600 uppercase tracking-[0.2em] leading-tight">2. PHYSICAL ITEMS</h6>
                                        <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-widest">Inventory & Admin</p>
                                    </div>
                                </div>
                                <div className="h-full w-px bg-slate-100 dark:bg-slate-800 hidden sm:block"></div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 flex-1 pt-1">
                                    {[
                                        "Return paper forms to admin", "Submit purchase receipts", 
                                        "Submit vehicle logs", "Return to workshop/office"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center text-[11px] text-slate-500 font-bold uppercase tracking-tighter">
                                            <span className="w-4 h-4 rounded bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-[8px] border border-slate-200 dark:border-slate-800 text-emerald-500 shrink-0">✓</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Card 3: Communication */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ x: 10 }}
                                className="flex flex-col sm:flex-row gap-8 p-10 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-inner overflow-hidden relative group"
                            >
                                <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full -ml-24 -mt-24 blur-3xl group-hover:bg-emerald-500/10 transition-colors"></div>
                                <div className="space-y-4 min-w-[220px]">
                                    <div className="p-4 bg-emerald-500/10 rounded-2xl w-fit">
                                        <MessageSquare className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h6 className="text-xs font-black text-emerald-600 uppercase tracking-[0.2em] leading-tight">3. COMMUNICATION</h6>
                                        <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-widest">Reporting & Feedback</p>
                                    </div>
                                </div>
                                <div className="h-full w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 flex-1 pt-1">
                                    {[
                                        { l: "Issues", d: "Report any site problems to Team Leader.", icon: AlertCircle },
                                        { l: "Complaints", d: "Report customer complaints immediately.", icon: AlertCircle },
                                        { l: "Follow-up", d: "Highlight urgent corrective actions needed.", icon: AlertCircle }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <item.icon className="w-3.5 h-3.5 text-slate-400 mt-0.5" />
                                            <div className="text-[11px] text-slate-500 leading-relaxed uppercase tracking-tight">
                                                <strong className="text-slate-700 dark:text-slate-300 mr-2">{item.l}:</strong>
                                                {item.d}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Filing & Retention */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] italic">
                            <h5 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest border-b dark:border-slate-800 pb-2">Digital Records (WAVE PLUS)</h5>
                            <List className="text-[11px] text-slate-500 space-y-2">
                                <ListItem>Automatically filed and linked to equipment history.</ListItem>
                                <ListItem>Instantly searchable and retrievable for audits.</ListItem>
                                <ListItem>Backed up continuously on secure cloud servers.</ListItem>
                                <ListItem><strong>Retention:</strong> Minimum 7 years per company policy.</ListItem>
                            </List>
                        </div>
                        <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] italic">
                            <h5 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest border-b dark:border-slate-800 pb-2">Paper Records</h5>
                            <List className="text-[11px] text-slate-500 space-y-2">
                                <ListItem>Admin team scans and uploads all paper submissions.</ListItem>
                                <ListItem>Original physical documents stored in secure files.</ListItem>
                                <ListItem>Destroyed per company security policy after retention period.</ListItem>
                                <ListItem><strong>Retention:</strong> Minimum 2 years on-site before off-site archiving.</ListItem>
                            </List>
                        </div>
                    </div>
                </div>
                <Blockquote type="info" title="Expertise">
                    Excellence in documentation is the bridge between technical skill and customer trust. At SS+, we don't just do the job; we prove the job was done better than anyone else.
                </Blockquote>
            </SubSection>
        </Section>
    );
}

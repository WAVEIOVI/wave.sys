import * as React from 'react';
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import Blockquote from '../../../components/document-elements/Blockquote';
import { motion } from 'framer-motion';
import { 
    FilePlus, UserCheck, Calendar, Activity, 
    CheckCircle, ShieldCheck, Lock as LockIcon, ArrowRight,
    Settings, RefreshCw
} from 'lucide-react';

export default function PostQuotation() {
    return (
        <Section id="section-3">
            <SectionHeader>SECTION 3: POST-QUOTATION PROCESS</SectionHeader>

            <SubSection id="process-overview">
                <SubSectionHeader>3.1 Overview of the Process</SubSectionHeader>
                <Paragraph className="mb-6 italic">
                    After a quotation is sent, the post-quotation process ensures we capture customer confirmation formally, create work orders correctly, and prepare SLAs before execution.
                </Paragraph>
                
                <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm my-10 relative overflow-hidden">
                    <div className="hidden md:block absolute top-0 right-0 p-6 opacity-5 font-bold italic text-6xl text-slate-400 select-none uppercase">Sequence</div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                        {[
                            { step: "01", t: "CONFIRMATION", d: "Obtain formal confirmation (PO, Signed Quote, or Email)." },
                            { step: "02", t: "VERIFICATION", d: "Verify and record confirmation in WAVE PLUS system." },
                            { step: "03", t: "WORK ORDER", d: "Create WO with detailed scope, resources, and logistics." },
                            { step: "04", t: "SLA PREP", d: "Prepare and sign mandatory Service Level Agreement." },
                            { step: "05", t: "DELIVERY", d: "Proceed to execution and service delivery." },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs font-bold mb-4 shadow-md shadow-primary-500/20">{item.step}</div>
                                <h6 className="font-bold text-slate-800 dark:text-slate-100 uppercase mb-2 text-xs">{item.t}</h6>
                                <p className="text-xs text-slate-500 leading-tight">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Blockquote type="info">
                    <strong>Critical Requirement:</strong> All confirmation documents must be scanned and attached to the customer record in WAVE PLUS before a work order can be generated.
                </Blockquote>
            </SubSection>

            <SubSection id="confirmation-methods">
                <SubSectionHeader>3.2 Client Confirmation Methods</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                    {[
                        { 
                            t: "Purchase Order (PO)", 
                            q: "Preferred Method", 
                            color: "primary",
                            req: [
                                "Reference quotation number explicitly",
                                "Authorized signature and title",
                                "Specify products/services ordered",
                                "Delivery location & timeline",
                                "Billing info & payment terms",
                                "PO number for invoicing"
                            ],
                            protocol: [
                                "Verify PO matches quotation exactly",
                                "Resolve discrepancies before proceeding",
                                "Enter all PO details in WAVE PLUS",
                                "Proceed to work order creation"
                            ]
                        },
                        { 
                            t: "Signed Quotation", 
                            q: "Acceptable Alternative", 
                            color: "emerald",
                            req: [
                                "Signed by authorized representative",
                                "Include date of signature",
                                "Note special conditions/changes",
                                "Return complete doc (all pages)"
                            ],
                            protocol: [
                                "Verify signature authority",
                                "Enter acceptance in WAVE PLUS",
                                "Attach signed copy to record",
                                "Proceed to work order creation"
                            ]
                        },
                        { 
                            t: "Email Confirmation", 
                            q: "Minimum Requirement", 
                            color: "blue",
                            req: [
                                "From authorized representative",
                                "Reference quotation number",
                                "State acceptance of terms",
                                "Include special instructions",
                                "Save in communication record"
                            ],
                            protocol: [
                                "Acknowledge receipt of confirmation",
                                "Forward to order processing",
                                "Enter details in WAVE PLUS",
                                "Attach email copy to record"
                            ]
                        },
                        { 
                            t: "Verbal Confirmation", 
                            q: "Limited Application", 
                            color: "amber",
                            req: [
                                "Existing customers with history",
                                "Orders under 5,000 TND only",
                                "From known authorized rep",
                                "Document in call notes",
                                "Follow with written in 48 hours"
                            ],
                            protocol: [
                                "Send confirmation email to customer",
                                "Request written confirmation explicitly",
                                "Set 'Verbal Pending Written' status",
                                "Follow up after 48h if missing"
                            ]
                        },
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h6 className={`font-bold text-primary-600 uppercase text-xs`}>{item.t}</h6>
                                    <div className="text-xs font-bold text-slate-400 uppercase">{item.q}</div>
                                </div>
                                <div className={`px-2 py-1 rounded-md bg-primary-100 dark:bg-primary-900/30 text-primary-600 text-xs font-bold uppercase`}>Method {i+1}</div>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <p className="font-bold text-slate-800 dark:text-slate-200 uppercase text-xs underline mb-2">Requirements:</p>
                                    <div className="space-y-1.5">
                                        {item.req.map((r, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-500">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></div>
                                                {r}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800 dark:text-slate-200 uppercase text-xs underline mb-2">Processing Protocol:</p>
                                    <div className="space-y-1.5">
                                        {item.protocol.map((p, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-500">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0"></div>
                                                {p}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <h6 className="font-bold text-slate-800 dark:text-slate-100 uppercase mb-4 text-xs border-b border-slate-200 dark:border-slate-700 pb-2">Customer Confirmation Tracking System</h6>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-500">
                        <li>• All confirmations recorded in WAVE PLUS with reference to original quotation.</li>
                        <li>• Automated reminders for pending written confirmations for verbal approvals.</li>
                        <li>• Escalation alerts for overdue confirmations to ensure timely order processing.</li>
                    </ul>
                </div>
            </SubSection>

            <SubSection id="work-order">
                <SubSectionHeader>3.3 Work Order Creation</SubSectionHeader>
                <Paragraph className="mb-6">The work order serves as the bridge between sales commitments and operational execution, initiating service delivery or product fulfillment.</Paragraph>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg relative overflow-hidden text-white">
                            <div className="absolute top-0 right-12 w-32 h-32 bg-primary-500/10 blur-[4rem]"></div>
                            <h6 className="font-bold text-primary-500 uppercase mb-6 text-xs border-b border-slate-800 pb-2">Work Order Components (The Internal Framework)</h6>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-xs text-slate-400">
                                <div>
                                    <p className="text-white font-bold mb-1 uppercase text-xs">1. Customer Information</p>
                                    <p>Legal name, address, contacts, Site address, Customer ID, and credit status.</p>
                                </div>
                                <div>
                                    <p className="text-white font-bold mb-1 uppercase text-xs">2. Order Identification</p>
                                    <p>WO-YY-MM-XXXX. References Quote #, Customer PO #, and priority level.</p>
                                </div>
                                <div>
                                    <p className="text-white font-bold mb-1 uppercase text-xs">3. Detailed Scope of Work</p>
                                    <p>Service/product descriptions, quantities, constraints, access hours, and quality standards.</p>
                                </div>
                                <div>
                                    <p className="text-white font-bold mb-1 uppercase text-xs">4. Resource Requirements</p>
                                    <p>Personnel roles, equipment, tools, materials, subcontractors, and transport needs.</p>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="text-white font-bold mb-1 uppercase text-xs">5. Documentation and Compliance</p>
                                    <p>Required forms, checklists, testing/commissioning data, and regulatory compliance documentation.</p>
                                </div>
                            </div>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/5 blur-[80px] -ml-32 -mt-32"></div>
                            
                            <div className="flex flex-col items-center mb-10">
                                <h6 className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-[10px] mb-2 flex items-center gap-2">
                                    <Activity className="w-3 h-3 text-primary-500" /> Operational Lifecycle
                                </h6>
                                <h4 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Work Order Status Pipeline</h4>
                                <div className="h-0.5 w-16 bg-slate-200 dark:bg-slate-800 mt-4"></div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-10 relative z-10">
                                {[
                                    { s: "CREATED", i: <FilePlus />, c: "text-slate-500 bg-slate-500/10 border-slate-500/20" },
                                    { s: "APPROVED", i: <UserCheck />, c: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
                                    { s: "SCHEDULED", i: <Calendar />, c: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
                                    { s: "IN PROGRESS", i: <RefreshCw className="animate-spin-slow" />, c: "text-primary-500 bg-primary-500/10 border-primary-500/20" },
                                    { s: "COMPLETED", i: <CheckCircle />, c: "text-emerald-600 bg-emerald-600/10 border-emerald-600/20" },
                                    { s: "VERIFIED", i: <ShieldCheck />, c: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
                                    { s: "CLOSED", i: <LockIcon />, c: "text-slate-600 bg-slate-600/10 border-slate-600/30 dark:text-slate-400" }
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        className={`py-8 px-4 border-2 rounded-[2.5rem] flex flex-col items-center gap-8 transition-all duration-500 relative group/status ${item.c} min-h-[220px]`}
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 shadow-lg flex items-center justify-center border border-inherit group-hover/status:scale-110 transition-transform duration-500">
                                            {React.cloneElement(item.i as React.ReactElement, { className: "w-6 h-6" })}
                                        </div>
                                        
                                        <p className="font-black uppercase text-[10px] tracking-[0.2em] text-center [writing-mode:vertical-lr] rotate-180 whitespace-nowrap mt-auto">
                                            {item.s}
                                        </p>
                                        
                                        {i < 6 && (
                                            <div className="hidden lg:flex absolute top-1/2 -right-4 translate-y-[-50%] z-20 opacity-20 group-hover/status:opacity-100 group-hover/status:translate-x-2 transition-all duration-500">
                                                <ArrowRight className="w-5 h-5 text-slate-400" />
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                            
                            <div className="flex flex-col items-center gap-4 p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 border-dashed">
                                <div className="flex items-center gap-3">
                                    <div className="p-1.5 bg-primary-500/10 rounded-lg">
                                        <Settings className="w-4 h-4 text-primary-500" />
                                    </div>
                                    <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl text-center">
                                        Operations Coordinator updates status in <span className="text-primary-600 dark:text-primary-400 font-bold">WAVE PLUS</span>. Daily throughput reports and weekly velocity reviews ensure no order exceeds its defined SLA resolution window.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl">
                        <h6 className="font-bold text-slate-800 dark:text-slate-100 uppercase mb-6 border-b pb-2 text-center text-xs">WO Creation Process</h6>
                        <div className="space-y-4">
                            {[
                                { t: "1. Info Gathering", m: "15-30m", d: "Collect confirmation docs, review quote/site survey, check availability." },
                                { t: "2. Generation", m: "15-30m", d: "Create WO in WAVE PLUS, enter data accurately, attach references/docs." },
                                { t: "3. Resource Allocation", m: "15-30m", d: "Assign technicians, reserve tools, create material requisitions." },
                                { t: "4. Internal Approval", m: "15-60m", d: "Ops Resp (<5k). Manager/Co-Manager (>10k or complex/specialty)." },
                                { t: "5. Distribution", m: "10-15m", d: "Send to ops team, techs, inventory, and subcontractors for execution." },
                            ].map((s, idx) => (
                                <div key={idx} className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm relative group overflow-hidden">
                                     <div className="absolute top-0 right-0 p-2 text-[10px] font-bold text-slate-400 dark:text-slate-600 bg-slate-50 dark:bg-slate-900/50 rounded-bl-lg">{s.m}</div>
                                    <p className="font-bold text-slate-800 dark:text-slate-200 uppercase mb-1 text-xs">{s.t}</p>
                                    <p className="text-xs text-slate-500 leading-tight">{s.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="sla-prep">
                <SubSectionHeader>3.4 Service Level Agreement (SLA) Preparation</SubSectionHeader>
                <div className="mb-8">
                    <Blockquote type="danger" title="MANDATORY RULE">
                        An SLA is <strong>MANDATORY</strong> for ALL service orders, regardless of whether an MSA exists. The SLA defines specific performance standards and expectations for the particular order or project.
                    </Blockquote>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                    <div className="lg:col-span-2 p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg relative text-white">
                        <h6 className="font-bold text-primary-500 uppercase mb-8 text-xs border-b border-slate-800 pb-2">SLA Development & Performance Lifecycle</h6>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p className="font-bold text-slate-200 uppercase mb-1 text-xs">Development Process:</p>
                                <div className="space-y-3">
                                    {[
                                        { t: "Step 1: Template Selection", m: "5-10m", d: "Recurring, One-time, Installation, or Emergency template." },
                                        { t: "Step 2: Customization", m: "20-40m", d: "Define metrics, response times, and escalation procedures." },
                                        { t: "Step 3: Internal Review", m: "15-30m", d: "Technical, Commercial, and Legal (if non-standard)." },
                                        { t: "Step 4: Customer Review", m: "Variable", d: "Explain provisions, address concerns, negotiate modifications." },
                                        { t: "Step 5: Finalization", m: "10-20m", d: "Final document signature and WAVE PLUS upload." }
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex gap-3 text-xs text-slate-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-1.5 shrink-0"></div>
                                            <div>
                                                <span className="text-slate-200 font-bold uppercase mr-2">{step.t}</span>
                                                <span className="text-xs text-primary-400 font-bold">({step.m})</span> — {step.d}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg">
                                <p className="font-bold text-secondary-500 uppercase mb-3 underline text-xs">Ongoing Compliance Monitoring:</p>
                                <ul className="text-xs text-slate-500 space-y-3">
                                    <li><strong className="text-slate-300 uppercase">Daily Monitoring:</strong> Track response/resolution times for all requests. Document breaches immediately.</li>
                                    <li><strong className="text-slate-300 uppercase">Weekly Reporting:</strong> Compile performance statistics; identify trends/issues for management.</li>
                                    <li><strong className="text-slate-300 uppercase">Monthly Review:</strong> Full analysis, satisfaction assessment, and report sharing with customer.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-xl shadow-sm">
                        <div className="text-3xl mb-2 text-center">🚨</div>
                        <h6 className="font-bold text-red-700 dark:text-red-400 uppercase mb-2 text-center underline text-xs">SLA Breach Response Protocol</h6>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                            <div className="flex">
                                <p>1. Immediate acknowledgment of breach (Internal Triage).</p>
                            </div>
                            <div className="flex">
                                <p>2. Root cause analysis (RCA) and corrective action.</p>
                            </div>
                            <div className="flex">
                                <p>3. Customer communication and project recovery plan.</p>
                            </div>
                            <div className="flex">
                                <p>4. Credit application if required by agreement term.</p>
                            </div>
                            <div className="flex">
                                <p>5. Process improvement implementation to prevent recurrence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}


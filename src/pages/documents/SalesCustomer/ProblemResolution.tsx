
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Blockquote from '../../../components/document-elements/Blockquote';

export default function ProblemResolution() {
    return (
        <Section id="section-5">
            <SectionHeader>SECTION 5: HANDLING PROBLEMS</SectionHeader>

            {/* 5.1 CUSTOMER COMPLAINT PROCEDURE */}
            <SubSection id="complaint-procedure">
                <SubSectionHeader>5.1 CUSTOMER COMPLAINT PROCEDURE</SubSectionHeader>
                <Paragraph className="mb-6 italic text-slate-500">(Refer to Company Manual Document, Section 3.5 for complete procedure)</Paragraph>

                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 border-l-4 border-red-500 pl-4">Sales Rep's Role in Complaints</h4>
                <Paragraph className="mb-6">When a customer complains to you, follow this immediate action protocol:</Paragraph>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {[
                        { 
                            step: "Step 1: Listen & Acknowledge", 
                            timing: "Immediate", 
                            items: ["Don't interrupt or defend", "Listen completely", "Show empathy", "Apologize for inconvenience", "Thank them for telling you"] 
                        },
                        { 
                            step: "Step 2: Document", 
                            timing: "Immediate", 
                            items: ["Record in WAVE PLUS complaint log", "Collect what, when, where, who", "Note requested resolution", "Assign reference number"] 
                        },
                        { 
                            step: "Step 3: Respond", 
                            timing: "Within 4 Hours", 
                            items: ["Acknowledge in writing (email)", "Include reference number", "Explain next steps", "Set timeline expectations", "Provide direct contact info"] 
                        },
                        { 
                            step: "Step 4: Escalate", 
                            timing: "Context Dependent", 
                            items: ["Select appropriate stakeholder", "Stick to response time SLA", "Provide all documented facts", "Ensure clear hand-off"] 
                        },
                        { 
                            step: "Step 5: Follow Through", 
                            timing: "Ongoing", 
                            items: ["Stay involved (no hand-off/forget)", "Check progress weekly", "Keep customer informed", "Confirm resolution completion", "Post-resolution satisfaction check"] 
                        },
                        { 
                            step: "Step 6: Learn & Improve", 
                            timing: "Post-Incident", 
                            items: ["Document lesson learned", "Suggest process improvements", "Share with team", "Use in training"] 
                        },
                    ].map((step, idx) => (
                        <div key={idx} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-bold text-white bg-red-500 px-3 py-1 rounded-full uppercase">{step.timing}</span>
                                <span className="text-2xl font-black text-slate-100 dark:text-slate-800">0{idx + 1}</span>
                            </div>
                            <h5 className="font-bold text-slate-800 dark:text-slate-100 mb-3">{step.step}</h5>
                            <ul className="space-y-2">
                                {step.items.map((item, i) => (
                                    <li key={i} className="text-xs text-slate-500 flex gap-2">
                                        <span className="text-red-500">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ESCALATION MATRIX */}
                {/* ESCALATION MATRIX */}
                <div className="mb-10 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm">
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 border-b border-slate-200 dark:border-slate-800">
                        <h5 className="font-bold text-slate-800 dark:text-slate-100 uppercase text-xs">Escalation SLA Matrix</h5>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                            <thead>
                                <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 uppercase">
                                    <th className="p-4 border-b border-slate-200 dark:border-slate-800">Complaint Type</th>
                                    <th className="p-4 border-b border-slate-200 dark:border-slate-800">Escalate To</th>
                                    <th className="p-4 border-b border-slate-200 dark:border-slate-800">Response Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {[
                                    { t: "Service quality issue", e: "Operations Responsible", r: "24 hours" },
                                    { t: "Product defect", e: "Sales Responsible", r: "24 hours" },
                                    { t: "Billing error", e: "Admin & Finance Responsible", r: "24 hours" },
                                    { t: "Safety incident", e: "Operations Responsible + Manager/Co-Manager", r: "Immediate" },
                                    { t: "Major customer impact", e: "Sales Responsible + Manager/Co-Manager", r: "4 hours" },
                                    { t: "Legal threat", e: "Manager/Co-Manager", r: "Immediate" },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
                                        <td className="p-4 font-medium text-slate-700 dark:text-slate-300">{row.t}</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-400 font-bold italic">{row.e}</td>
                                        <td className="p-4">
                                            <span className={`px-2 py-0.5 rounded-full font-bold uppercase text-[10px] ${row.r === 'Immediate' ? 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}>{row.r}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 border-l-4 border-slate-500 pl-4">Types of Complaints & Resolution Guidelines</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                    {[
                        { 
                            title: "Service Quality", 
                            items: [
                                { q: "Missed appointment", a: "Apologize, reschedule priority (within 24h), consider discount" },
                                { q: "Incomplete work", a: "Complete immediately (within 48h), no charge" },
                                { q: "Poor workmanship", a: "Redo properly (free), possibly compensate customer" },
                                { q: "Unprofessional technician", a: "Apologize, disciplinary action, different technician next time" }
                            ]
                        },
                        { 
                            title: "Product Complaints", 
                            items: [
                                { q: "Defective product", a: "Replace immediately or full credit" },
                                { q: "Wrong product shipped", a: "Correct immediately, absorb shipping cost" },
                                { q: "Damaged in delivery", a: "Replace, file insurance claim" },
                                { q: "Technical Mismatch", a: "Full refund or replacement if specs not met" }
                            ]
                        },
                        { 
                            title: "Billing & Admin", 
                            items: [
                                { q: "Overcharged", a: "Immediate credit or refund" },
                                { q: "Charged for work not done", a: "Credit plus apology" },
                                { q: "Invoice errors", a: "Correct invoice immediately" },
                                { q: "Unauthorized charges", a: "Remove charges, apologize" }
                            ]
                        },
                        { 
                            title: "Communication", 
                            items: [
                                { q: "No response to inquiry", a: "Apologize, respond immediately, escalate internally" },
                                { q: "Commitment not kept", a: "Acknowledge, make it right, explain why it happened" },
                                { q: "Rude/Unprofessional", a: "Apologize sincerely, disciplinary action, possible compensation" }
                            ]
                        }
                    ].map((cat, idx) => (
                        <div key={idx} className="space-y-3">
                            <h6 className="text-xs font-bold text-slate-400 uppercase border-b pb-2">{cat.title}</h6>
                            <div className="space-y-4">
                                {cat.items.map((item, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{item.q}</span>
                                        <span className="text-xs text-slate-500 italic">{item.a}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <Blockquote type="warning" title="What NOT to Do">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        {[
                            "Argue with customer or get defensive",
                            "Blame others (technician, admin, supplier, etc.)",
                            "Make excuses",
                            "Promise what you can't deliver",
                            "Ignore complaint hoping it goes away",
                            "Badmouth the customer to colleagues",
                            "Over-promise to make them happy (then under-deliver)",
                            "Give unauthorized discounts/refunds (stay within authority)"
                        ].map((item, idx) => (
                            <li key={idx} className="flex gap-2 items-center text-xs text-slate-600 dark:text-slate-400">
                                <span className="text-red-500 select-none">❌</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </Blockquote>
            </SubSection>

            {/* 5.2 SERVICE FAILURE RESPONSE */}
            <SubSection id="service-failure">
                <SubSectionHeader>5.2 SERVICE FAILURE RESPONSE</SubSectionHeader>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-10">
                    <div className="space-y-6">
                        <Paragraph>Service failures happen. How we respond defines our reputation. If you learn of a failure, act immediately:</Paragraph>
                        <div className="space-y-4">
                            {[
                                { t: "Notify Customer", d: "Call personally, apologize sincerely, explain how you'll fix it and give a timeline." },
                                { t: "Notify Operations", d: "Alert the Operations Responsible so they can address the root cause." },
                                { t: "Document", d: "Log the incident report in WAVE PLUS immediately." },
                                { t: "Prioritize Fix", d: "Ensure this resolution takes priority over other non-emergency work." },
                                { t: "Post-Fix Follow-up", d: "Verify satisfaction after the resolution is implemented." }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                    <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-100 flex items-center justify-center text-white dark:text-slate-900 font-bold shrink-0 text-sm">{idx + 1}</div>
                                    <div>
                                        <p className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-1">{step.t}</p>
                                        <p className="text-xs text-slate-500 italic leading-snug">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 rounded-xl text-slate-800 dark:text-indigo-100 shadow-sm">
                        <h6 className="font-bold text-indigo-600 dark:text-indigo-400 uppercase mb-4 text-xs">The Service Recovery Paradox</h6>
                        <Paragraph className="text-indigo-800 dark:text-indigo-200 text-sm italic mb-8">Customers whose problems are handled well often become more loyal than customers who never had problems.</Paragraph>
                        
                        <div className="space-y-6">
                            <h5 className="font-bold text-lg border-b border-indigo-200 dark:border-indigo-800 pb-2">Recovery Strategy: Make it Right + Better</h5>
                            <div className="grid grid-cols-2 gap-4 text-xs">
                                <div className="p-4 bg-white dark:bg-slate-900/50 rounded-lg border border-indigo-100 dark:border-indigo-900/50">
                                    <p className="font-bold text-indigo-600 dark:text-indigo-400 uppercase mb-2">Fix the Problem</p>
                                    <p className="italic text-slate-600 dark:text-slate-400">Obviously resolve the core issue first.</p>
                                </div>
                                <div className="p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg border border-indigo-200 dark:border-indigo-800">
                                    <p className="font-bold text-indigo-700 dark:text-indigo-300 uppercase mb-2">Do Something Extra</p>
                                    <p className="italic text-indigo-800 dark:text-indigo-200">Discount, credit, expedited service, or free add-on.</p>
                                </div>
                            </div>

                            <div className="space-y-3 mt-6">
                                <p className="text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400 tracking-widest">Authority Limits</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs border-b border-indigo-200 dark:border-indigo-800 pb-1">
                                        <span className="text-slate-600 dark:text-slate-400">Ops Responsible</span>
                                        <span className="font-bold">Up to 1,000 TND</span>
                                    </div>
                                    <div className="flex justify-between text-xs border-b border-indigo-200 dark:border-indigo-800 pb-1">
                                        <span className="text-slate-600 dark:text-slate-400">Sales Responsible</span>
                                        <span className="font-bold">Up to 5,000 TND</span>
                                    </div>
                                    <div className="flex justify-between text-xs border-b border-indigo-200 dark:border-indigo-800 pb-1">
                                        <span className="text-slate-600 dark:text-slate-400">Manager/Co-Manager</span>
                                        <span className="font-bold">Above 5,000 TND</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-10 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm">
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <h5 className="font-bold text-slate-800 dark:text-slate-100 uppercase text-xs">Recovery Examples</h5>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                            <thead>
                                <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 uppercase">
                                    <th className="p-4 border-b border-slate-200 dark:border-slate-800">Failure</th>
                                    <th className="p-4 border-b border-slate-200 dark:border-slate-800">Make it Right</th>
                                    <th className="p-4 border-b border-slate-200 dark:border-slate-800">Make it Better</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {[
                                    { f: "Missed appointment", r: "Reschedule within 24h", b: "10% discount on service" },
                                    { f: "Equipment not working after service", r: "Fix immediately (same day)", b: "Free next inspection" },
                                    { f: "Technician unprofessional", r: "Apologize, reassign technician", b: "Manager performs next service personally" },
                                    { f: "Multiple issues", r: "Address all issues comprehensively", b: "Free service for inconvenience + direct manager contact" },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
                                        <td className="p-4 font-bold text-slate-800 dark:text-slate-200 italic">{row.f}</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-400">{row.r}</td>
                                        <td className="p-4 text-indigo-600 dark:text-indigo-400 font-bold italic">{row.b}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </SubSection>

            {/* 5.3 ESCALATION GUIDELINES */}
            <SubSection id="escalation-guidelines">
                <SubSectionHeader>5.3 ESCALATION GUIDELINES</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h6 className="text-xs font-bold text-amber-600 dark:text-amber-500 uppercase mb-6 border-b pb-2">Escalate to Sales Responsible When:</h6>
                        <List className="space-y-3">
                            <ListItem>Customer threatens to cancel contract</ListItem>
                            <ListItem>Complaint is complex or high-value</ListItem>
                            <ListItem>Customer specifically requests manager</ListItem>
                            <ListItem>Multiple issues with same customer</ListItem>
                            <ListItem>You've tried to resolve but customer still unsatisfied</ListItem>
                            <ListItem>Legal or compliance implications</ListItem>
                            <ListItem>Reputation risk (social media, public complaint)</ListItem>
                            <ListItem>Safety incident involved</ListItem>
                        </List>
                    </div>
                    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg text-white">
                        <h6 className="text-xs font-bold text-red-500 uppercase mb-6 border-b border-slate-800 pb-2">Escalate to Manager/Co-Manager When:</h6>
                        <List className="space-y-3 text-slate-300">
                            <ListItem>Major financial impact ({'>'}5,000 TND)</ListItem>
                            <ListItem>Legal action threatened or filed</ListItem>
                            <ListItem>Media involvement or reputation crisis</ListItem>
                            <ListItem>Government customer (special handling)</ListItem>
                            <ListItem>Key account at risk</ListItem>
                            <ListItem>Ethical or compliance violation alleged</ListItem>
                            <ListItem>Safety incident with injury</ListItem>
                        </List>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {[
                        { 
                            t: "1. Prepare", 
                            c: "Gather all facts, communications, and previous attempts. Identify requested resolution vs financial impact." 
                        },
                        { 
                            t: "2. Communicate", 
                            c: "Brief manager verbally first, then follow up with written summary in WAVE PLUS. Provide all documents." 
                        },
                        { 
                            t: "3. Post-Escalation", 
                            c: "Support resolution efforts, maintain relationship, and document outcome and learnings in WAVE PLUS." 
                        }
                    ].map((step, idx) => (
                        <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl">
                            <p className="text-xs font-bold text-slate-400 uppercase mb-2">Phase {idx + 1}</p>
                            <h5 className="font-bold text-slate-800 dark:text-slate-100 mb-2">{step.t}</h5>
                            <p className="text-xs text-slate-500 leading-relaxed">{step.c}</p>
                        </div>
                    ))}
                </div>
            </SubSection>

            {/* 5.4 CREDIT & REFUND DECISIONS */}
            <SubSection id="credit-refund">
                <SubSectionHeader>5.4 CREDIT & REFUND DECISIONS</SubSectionHeader>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
                    <div className="space-y-6">
                        <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm relative overflow-hidden">
                            <h6 className="text-xs font-bold text-slate-400 uppercase mb-6 border-b pb-2">Authority Matrix (TND)</h6>
                            <div className="space-y-3 px-2">
                                {[
                                    { v: "Up to 1,000", a: "Operations Responsible" },
                                    { v: "1,001 - 5,000", a: "Sales Responsible" },
                                    { v: "Over 5,000", a: "Manager/Co-Manager" },
                                ].map((row, idx) => (
                                    <div key={idx} className="flex justify-between items-center text-sm">
                                        <span className="font-bold text-slate-700 dark:text-slate-300 italic">{row.v}</span>
                                        <div className="h-[1px] flex-grow mx-4 bg-slate-100 dark:bg-slate-800 border-t border-dashed border-slate-200 dark:border-slate-700"></div>
                                        <span className="text-xs font-bold text-slate-500 uppercase">{row.a}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-xl">
                            <h6 className="text-xs font-bold text-amber-600 dark:text-amber-500 uppercase mb-4">Decision Framework</h6>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-bold uppercase text-amber-800 dark:text-amber-400 mb-1">Automatic Approval</p>
                                    <p className="text-xs text-slate-500 italic">SS+ error (billing, pricing), service not performed, defective product, unauthorized work charges.</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-amber-800 dark:text-amber-400 mb-1">Judgment Call</p>
                                    <p className="text-xs text-slate-500 italic">Legitimate dissatisfaction, service below KPI standards, goodwill for relationship preservation, competitive retention.</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-amber-800 dark:text-amber-400 mb-1">Generally Denied</p>
                                    <p className="text-xs text-slate-500 italic">Customer changed mind, misunderstanding of clear terms, work done properly per contract, causeless discount request.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="p-6 bg-slate-900 rounded-xl text-white shadow-lg flex flex-col justify-center">
                            <h6 className="text-xs font-bold text-primary-400 uppercase mb-8 text-center underline">Credit vs Refund Strategy</h6>
                            
                            <div className="space-y-6">
                                <div className="p-5 bg-white/5 rounded-lg border border-white/10">
                                    <h5 className="font-bold text-sm mb-2 flex items-center justify-between">
                                        <span>Prefer Credit Note</span>
                                        <span className="text-[10px] bg-primary-600 px-2 py-0.5 rounded-full uppercase">Primary Action</span>
                                    </h5>
                                    <Paragraph className="text-xs text-slate-400 italic mb-0 leading-relaxed">Keeps customer engaged, applied to future services, better for cash flow. Usually acceptable for ongoing contracts.</Paragraph>
                                </div>

                                <div className="p-5 bg-white/5 rounded-lg border border-white/10">
                                    <h5 className="font-bold text-sm mb-2">Cash Refund When...</h5>
                                    <Paragraph className="text-xs text-slate-400 italic mb-0 leading-relaxed">Customer insists, relationship is ending, small amounts (under 200 TND), or specific goodwill gestures for billing disputes.</Paragraph>
                                </div>

                                <div className="pt-6 border-t border-white/10 mt-6">
                                    <h6 className="text-xs font-bold text-amber-400 uppercase mb-4">Documentation Required</h6>
                                    <List className="text-xs text-slate-400 space-y-2">
                                        <ListItem>Written justification logged in WAVE PLUS</ListItem>
                                        <ListItem>Approval per authority matrix (email/signature)</ListItem>
                                        <ListItem>Customer acknowledgment (email/letter)</ListItem>
                                        <ListItem>Updated invoice or credit note issued and recorded</ListItem>
                                    </List>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

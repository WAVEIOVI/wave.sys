
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';
import { Flame, Sun, Snowflake, Ghost, ArrowRight, Clock, Phone, Mail, CheckCircle, FileText, Settings, UserCheck, Award, Sparkles, Tag, Zap, ShieldAlert, MessageSquare, ThumbsUp, Search, Send, Check, TrendingUp, HelpCircle, ThumbsDown, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LeadManagement() {

    return (
        <Section id="section-1">
            <SectionHeader>SECTION 1: GETTING CUSTOMERS (LEAD TO SALE)</SectionHeader>

            <SubSection id="lead-sources">
                <SubSectionHeader>1.1 Lead Sources & Tracking</SubSectionHeader>
                <Paragraph className="mb-6 italic">SS+ generates business from multiple channels. Understanding the source helps us prioritize and approach appropriately to maximize conversion and build lasting relationships.</Paragraph>

                <div className="grid grid-cols-1 gap-6 my-8">
                    <Table>
                        <TableRow isHeader>
                            <TableCell isHeader>Lead Source</TableCell>
                            <TableCell isHeader>Quality & Conversion</TableCell>
                            <TableCell isHeader>Handler & Priority</TableCell>
                            <TableCell isHeader>Primary Action</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-bold text-primary-600 italic">1. Existing Customer Referrals ⭐</div>
                                <div className="text-[10px] text-slate-500">Highest Quality</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-bold">Very High (60-80%)</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-bold">Assigned Sales Rep</div>
                                <div className="text-[10px] text-red-500 font-black">HIGH - 2h Response</div>
                            </TableCell>
                            <TableCell className="text-[11px] italic">Thank referrer; follow up immediately.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-bold text-primary-600 italic">2. Repeat Customers ⭐</div>
                                <div className="text-[10px] text-slate-500">Highest Value</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-bold">Excellent (70-90%)</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-bold">Relationship Owner</div>
                                <div className="text-[10px] text-red-500 font-black">HIGH - Same Day</div>
                            </TableCell>
                            <TableCell className="text-[11px] italic">Review history before contact.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-bold text-primary-600 italic">3. Website Inquiries</div>
                                <div className="text-[10px] text-slate-500">www.ssplus.tn</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-bold">Med-High (30-50%)</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-bold">By Location (Sfax/Tunis)</div>
                                <div className="text-[10px] text-red-500 font-black">HIGH - 4h Response</div>
                            </TableCell>
                            <TableCell className="text-[11px] italic">Acknowledge immediately; qualify within 24h.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-bold text-primary-600 italic">4. Phone Calls</div>
                                <div className="text-[10px] text-slate-500">Direct Office Lines</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-bold">Medium (25-40%)</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-bold">Whoever Answers → Assign</div>
                                <div className="text-[10px] text-red-500 font-black">IMMEDIATE</div>
                            </TableCell>
                            <TableCell className="text-[11px] italic">Qualify on call; schedule follow-up.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-bold text-primary-600 italic">5. Showroom Walk-ins</div>
                                <div className="text-[10px] text-slate-500">In-person Visit</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-bold">Medium (30-50%)</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-bold">Sales Rep on Duty</div>
                                <div className="text-[10px] text-red-500 font-black">IMMEDIATE</div>
                            </TableCell>
                            <TableCell className="text-[11px] italic">Demo products; needs assessment; same-day quote.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-bold text-primary-600 italic">6. Tenders / RFPs</div>
                                <div className="text-[10px] text-slate-500">Gov & Large Co.</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-bold">Variable (10-20%)</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-bold">Sales Resp. + Operations</div>
                                <div className="text-[10px] text-slate-500 font-black">BY DEADLINE</div>
                            </TableCell>
                            <TableCell className="text-[11px] italic">Bid decision in 24h; assign resources.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-bold text-primary-600 italic">7. Sales Rep Outreach</div>
                                <div className="text-[10px] text-slate-500">Cold Visits/Calls</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-bold">Low-Med (5-15%)</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-bold">Originating Sales Rep</div>
                                <div className="text-[10px] text-slate-500 font-black">LOWER</div>
                            </TableCell>
                            <TableCell className="text-[11px] italic">Build relationship; educate on value.</TableCell>
                        </TableRow>
                    </Table>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl my-12">
                    <h5 className="font-bold text-primary-600 mb-6 text-center">Lead Registration Process (EVERY lead within 24h)</h5>
                    <div className="w-full">
                        <svg viewBox="0 0 1000 320" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lead registration flowchart">
                            <style>{`
                                .box { fill: #0f172a; stroke: #1f2937; stroke-width: 1; }
                                @media (prefers-color-scheme: light) { .box { fill: #ffffff; stroke: #e2e8f0; } }
                                .title-svg { fill: #ffffff; font: 700 13px/1.2 'Arial'; }
                                @media (prefers-color-scheme: light) { .title-svg { fill: #0f172a; } }
                                .subtitle-svg { fill: #94a3b8; font: 400 12px/1.1 'Arial'; }
                                .line-svg { stroke: #94a3b8; stroke-width: 2; }
                                .note-svg { fill: #94a3b8; font: 400 11px/1.1 'Arial'; }
                            `}</style>

                            <rect x="40" y="20" width="300" height="56" rx="6" className="box" />
                            <text x="190" y="44" textAnchor="middle" className="title-svg">Receive Lead</text>
                            <text x="190" y="62" textAnchor="middle" className="subtitle-svg">Phone / Email / Web / Walk-in</text>

                            <rect x="380" y="20" width="300" height="56" rx="6" className="box" />
                            <text x="530" y="44" textAnchor="middle" className="title-svg">Record in WAVE PLUS</text>
                            <text x="530" y="62" textAnchor="middle" className="subtitle-svg">Complete required fields within 24h</text>

                            <line x1="340" y1="48" x2="380" y2="48" className="line-svg" />

                            <rect x="40" y="110" width="260" height="56" rx="6" className="box" />
                            <text x="170" y="136" textAnchor="middle" className="title-svg">Assign Sales Rep</text>
                            <text x="170" y="154" textAnchor="middle" className="subtitle-svg">By region or specialty</text>

                            <rect x="360" y="110" width="280" height="56" rx="6" className="box" />
                            <text x="500" y="136" textAnchor="middle" className="title-svg">Set Next Action & Due Date</text>
                            <text x="500" y="154" textAnchor="middle" className="subtitle-svg">Call / Site survey / Quote</text>

                            <rect x="680" y="110" width="260" height="56" rx="6" className="box" />
                            <text x="810" y="136" textAnchor="middle" className="title-svg">Categorize</text>
                            <text x="810" y="154" textAnchor="middle" className="subtitle-svg">Hot / Warm / Cold</text>

                            <line x1="170" y1="86" x2="170" y2="110" className="line-svg" />
                            <line x1="500" y1="86" x2="500" y2="110" className="line-svg" />
                            <line x1="640" y1="136" x2="680" y2="136" className="line-svg" />

                            <rect x="360" y="200" width="280" height="56" rx="6" fill="#0c4a6e" stroke="#0ea5e9" strokeWidth="1" />
                            <text x="500" y="228" textAnchor="middle" className="title-svg">No action within 48 hours?</text>
                            <text x="500" y="246" textAnchor="middle" className="note-svg">If yes — escalate to Sales Responsible</text>

                            <line x1="500" y1="166" x2="500" y2="200" className="line-svg" />

                            <rect x="680" y="200" width="260" height="56" rx="6" className="box" />
                            <text x="810" y="228" textAnchor="middle" className="title-svg">Escalate to Sales Responsible</text>
                            <text x="810" y="246" textAnchor="middle" className="subtitle-svg">Review & reassign</text>

                            <line x1="640" y1="228" x2="680" y2="228" className="line-svg" />

                            <text x="60" y="296" className="note-svg">Note: Always include contact phone/email and agreed next step in WAVE PLUS.</text>
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 max-w-5xl mx-auto">
                    {[
                        {
                            type: "HOT LEADS",
                            icon: <Flame className="w-6 h-6" />,
                            color: "red",
                            desc: "Urgent need; Budget Approved; Decision Maker Engaged.",
                            action: "Daily Follow-up. Close < 7 days.",
                            badge: "Critical"
                        },
                        {
                            type: "WARM LEADS",
                            icon: <Sun className="w-6 h-6" />,
                            color: "orange",
                            desc: "Active interest; Clear need; Timeline 1-3 months.",
                            action: "2-3 Follow-ups/Week. Close < 30 days.",
                            badge: "Active"
                        },
                        {
                            type: "COLD LEADS",
                            icon: <Snowflake className="w-6 h-6" />,
                            color: "blue",
                            desc: "Future opportunity; No immediate need; Nurture for 90+ days.",
                            action: "Bi-weekly/Monthly follow-up.",
                            badge: "Nurturing"
                        },
                        {
                            type: "LOST/DEAD LEADS",
                            icon: <Ghost className="w-6 h-6" />,
                            color: "slate",
                            desc: "Competitor chosen or project canceled.",
                            action: "Archive in DB; Re-activate quarterly.",
                            badge: "Inactive"
                        }
                    ].map((lead, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className={`relative p-6 rounded-2xl border bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden
                                ${lead.color === 'red' ? 'border-red-100 dark:border-red-900/30' : ''}
                                ${lead.color === 'orange' ? 'border-orange-100 dark:border-orange-900/30' : ''}
                                ${lead.color === 'blue' ? 'border-blue-100 dark:border-blue-900/30' : ''}
                                ${lead.color === 'slate' ? 'border-slate-100 dark:border-slate-800' : ''}
                            `}
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 opacity-[0.03] dark:opacity-[0.05] pointer-events-none rotate-12
                                ${lead.color === 'red' ? 'text-red-600' : ''}
                                ${lead.color === 'orange' ? 'text-orange-600' : ''}
                                ${lead.color === 'blue' ? 'text-blue-600' : ''}
                                ${lead.color === 'slate' ? 'text-slate-600' : ''}
                            `}>
                                {lead.icon}
                            </div>

                            <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center shadow-inner
                                ${lead.color === 'red' ? 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400' : ''}
                                ${lead.color === 'orange' ? 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' : ''}
                                ${lead.color === 'blue' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : ''}
                                ${lead.color === 'slate' ? 'bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400' : ''}
                            `}>
                                {lead.icon}
                            </div>
                            
                            <div className="flex items-center justify-between mb-3">
                                <h6 className={`font-bold text-[10px] uppercase tracking-[0.1em]
                                    ${lead.color === 'red' ? 'text-red-600 dark:text-red-400' : ''}
                                    ${lead.color === 'orange' ? 'text-orange-600 dark:text-orange-400' : ''}
                                    ${lead.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : ''}
                                    ${lead.color === 'slate' ? 'text-slate-500 dark:text-slate-400' : ''}
                                `}>
                                    {lead.type}
                                </h6>
                                <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider
                                    ${lead.color === 'red' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' : ''}
                                    ${lead.color === 'orange' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' : ''}
                                    ${lead.color === 'blue' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' : ''}
                                    ${lead.color === 'slate' ? 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300' : ''}
                                `}>
                                    {lead.badge}
                                </span>
                            </div>

                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                                {lead.desc}
                            </p>

                            <div className={`pt-4 border-t
                                ${lead.color === 'red' ? 'border-red-100 dark:border-red-900/20' : ''}
                                ${lead.color === 'orange' ? 'border-orange-100 dark:border-orange-900/20' : ''}
                                ${lead.color === 'blue' ? 'border-blue-100 dark:border-blue-900/20' : ''}
                                ${lead.color === 'slate' ? 'border-slate-100 dark:border-slate-800' : ''}
                            `}>
                                <div className="flex items-center gap-2 mb-2">
                                    <Clock className="w-3 h-3 text-slate-400" />
                                    <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-tighter">Recommended Action</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <ArrowRight className={`w-3 h-3 mt-0.5 shrink-0
                                        ${lead.color === 'red' ? 'text-red-500' : ''}
                                        ${lead.color === 'orange' ? 'text-orange-500' : ''}
                                        ${lead.color === 'blue' ? 'text-blue-500' : ''}
                                        ${lead.color === 'slate' ? 'text-slate-500' : ''}
                                    `} />
                                    <p className={`text-[11px] font-semibold leading-snug
                                        ${lead.color === 'red' ? 'text-red-700 dark:text-red-300' : ''}
                                        ${lead.color === 'orange' ? 'text-orange-700 dark:text-orange-300' : ''}
                                        ${lead.color === 'blue' ? 'text-blue-700 dark:text-blue-300' : ''}
                                        ${lead.color === 'slate' ? 'text-slate-600 dark:text-slate-400' : ''}
                                    `}>
                                        {lead.action}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl my-8">
                    <h6 className="font-bold text-primary-600 mb-4 border-b pb-2">Lead Assignment Rules</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600 dark:text-slate-400">
                        <div>
                            <p className="font-bold text-slate-900 dark:text-slate-100 mb-1">Geographic</p>
                            <p>Sfax: Mohamed CHRAITI</p>
                            <p>Tunis: Kais KHAIRALLAH</p>
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 dark:text-slate-100 mb-1">Specialty</p>
                            <p>Tenders {">"} 10k TND: Najla (Lead)</p>
                            <p>Key Accounts: Sales Resp. involvement</p>
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 dark:text-slate-100 mb-1">Reassignment</p>
                            <p>No action 48h: Escalate</p>
                            <p>Sales Rep on Leave: Temporary Reassign</p>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="qualification">
                <SubSectionHeader>1.2 Initial Customer Contact & Qualification</SubSectionHeader>
                <Paragraph className="mb-6 italic">Every first contact should make an excellent impression, understand the need, and qualify the opportunity using the BANT framework before significant time investment.</Paragraph>

                <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl my-10">
                    <h5 className="font-bold text-primary-600 mb-8 text-center">Initial Contact & Qualification Flow</h5>
                    <div className="w-full">
                        <svg viewBox="0 0 1000 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Initial contact and qualification flowchart">
                            <style>{`
                                .box { fill: #0f172a; stroke: #1f2937; stroke-width: 1; }
                                @media (prefers-color-scheme: light) { .box { fill: #ffffff; stroke: #e2e8f0; } }
                                .title-svg { fill: #ffffff; font: 700 13px/1.2 'Arial'; }
                                @media (prefers-color-scheme: light) { .title-svg { fill: #0f172a; } }
                                .subtitle-svg { fill: #94a3b8; font: 400 12px/1.1 'Arial'; }
                                .line-svg { stroke: #94a3b8; stroke-width: 2; }
                                .note-svg { fill: #94a3b8; font: 400 11px/1.1 'Arial'; }
                            `}</style>
                            <rect x="40" y="20" width="420" height="64" rx="6" className="box" />
                            <text x="250" y="48" textAnchor="middle" className="title-svg">Initial Contact</text>
                            <text x="250" y="66" textAnchor="middle" className="subtitle-svg">Acknowledge, listen, capture basic info</text>

                            <rect x="500" y="20" width="420" height="64" rx="6" className="box" />
                            <text x="710" y="40" textAnchor="middle" className="title-svg">Qualification (BANT)</text>
                            <text x="710" y="58" textAnchor="middle" className="subtitle-svg">Budget / Authority / Need / Timeline</text>

                            <line x1="460" y1="52" x2="500" y2="52" className="line-svg" />

                            <rect x="300" y="120" width="400" height="64" rx="6" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1" />
                            <text x="500" y="152" textAnchor="middle" className="title-svg" style={{ fill: '#ffffff' }}>Is the lead qualified?</text>
                            <text x="500" y="168" textAnchor="middle" className="note-svg">Use BANT answers to decide</text>

                            <rect x="40" y="220" width="280" height="64" rx="6" className="box" />
                            <text x="180" y="252" textAnchor="middle" className="title-svg">Qualified</text>
                            <text x="180" y="270" textAnchor="middle" className="subtitle-svg">Proceed → Site survey / Quotation</text>

                            <rect x="360" y="220" width="280" height="64" rx="6" className="box" />
                            <text x="500" y="252" textAnchor="middle" className="title-svg">Partially Qualified</text>
                            <text x="500" y="270" textAnchor="middle" className="subtitle-svg">Nurture → Follow-up schedule</text>

                            <rect x="680" y="220" width="300" height="64" rx="6" className="box" />
                            <text x="830" y="252" textAnchor="middle" className="title-svg">Not Qualified</text>
                            <text x="830" y="270" textAnchor="middle" className="subtitle-svg">Add to long-term nurture list</text>

                            <line x1="500" y1="184" x2="180" y2="220" className="line-svg" />
                            <line x1="500" y1="184" x2="500" y2="220" className="line-svg" />
                            <line x1="500" y1="184" x2="830" y2="220" className="line-svg" />

                            <text x="60" y="320" className="note-svg">Note: always record contact phone/email, agreed next step and due date in WAVE PLUS within 24h.</text>
                            <text x="60" y="338" className="note-svg">If no response to follow-ups, escalate to Sales Responsible for review.</text>
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {[
                        { icon: "✅", t: "First Impression", c: "Professional, responsive, helpful tone." },
                        { icon: "✅", t: "Understand Need", c: "Listen to the customer's specific pain points." },
                        { icon: "✅", t: "Project Viability", c: "Confirm if it's a real project or just exploration." },
                        { icon: "✅", t: "Establish Steps", c: "Agree on next actions and timelines immediately." },
                    ].map((item, i) => (
                        <div key={i} className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                            <span className="text-xl mb-2 block">{item.icon}</span>
                            <h6 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">{item.t}</h6>
                            <p className="text-xs text-slate-500 leading-relaxed">{item.c}</p>
                        </div>
                    ))}
                </div>

                <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm my-12">
                    <h6 className="font-bold text-primary-600 mb-8 text-center">BANT Qualification Framework</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                <h5 className="font-bold text-primary-600 text-sm mb-2">B - BUDGET</h5>
                                <p className="text-sm text-slate-500 mb-2">Does the customer have the financial capacity? Is it approved?</p>
                                <ul className="text-xs text-slate-500 space-y-1">
                                    <li>• "What budget range are you working with?"</li>
                                    <li>• "Is this already approved or needs approval?"</li>
                                </ul>
                            </div>
                            <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                <h5 className="font-bold text-primary-600 text-sm mb-2">A - AUTHORITY</h5>
                                <p className="text-sm text-slate-500 mb-2">Are we talking to the decision maker or an influencer?</p>
                                <ul className="text-xs text-slate-500 space-y-1">
                                    <li>• "Who else is involved in this decision?"</li>
                                    <li>• "Who has final approval authority?"</li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                <h5 className="font-bold text-primary-600 text-sm mb-2">N - NEED</h5>
                                <p className="text-sm text-slate-500 mb-2">What is the pain point? What happens if they don't act?</p>
                                <ul className="text-xs text-slate-500 space-y-1">
                                    <li>• "What's driving this need right now?"</li>
                                    <li>• "What happens if you don't address this?"</li>
                                </ul>
                            </div>
                            <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                <h5 className="font-bold text-primary-600 text-sm mb-2">T - TIMELINE</h5>
                                <p className="text-sm text-slate-500 mb-2">How urgent is the implementation?</p>
                                <ul className="text-xs text-slate-500 space-y-1">
                                    <li>• "When do you need this in place?"</li>
                                    <li>• "When are you making a decision?"</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-200 to-primary-600 dark:via-primary-900/40 dark:to-primary-600"></div>
                        <h6 className="font-bold text-primary-600 text-sm uppercase tracking-widest px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-full border border-primary-100 dark:border-primary-900/30">Expert Scripts & Templates</h6>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary-200 to-primary-600 dark:via-primary-900/40 dark:to-primary-600"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                        {/* Phone Script */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col p-1 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-50 dark:from-slate-800 dark:to-slate-900 shadow-sm transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="bg-white dark:bg-slate-950 rounded-[15px] p-6 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-100 dark:border-blue-900/30">
                                        <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h5 className="font-bold text-slate-800 dark:text-slate-200">Phone Script <span className="text-[10px] text-slate-400 font-normal ml-2 tracking-wider uppercase">Inbound</span></h5>
                                </div>
                                
                                <div className="flex-1 relative text-sm text-slate-600 dark:text-slate-300 font-mono bg-slate-50 dark:bg-slate-900/80 p-6 rounded-xl border border-slate-100 dark:border-slate-800/50 leading-relaxed overflow-hidden">
                                    <div className="absolute -top-4 -right-4 p-2 opacity-[0.03] dark:opacity-[0.05] pointer-events-none rotate-12">
                                        <Phone className="w-24 h-24" />
                                    </div>
                                    <p className="mb-4">"Good morning, <span className="text-primary-600 dark:text-primary-400 font-bold">Sécurité Services Plus</span>, [Name] speaking. How can I help you today?"</p>
                                    <p className="mb-4 text-slate-400 dark:text-slate-500 italic border-l-2 border-slate-200 dark:border-slate-700 pl-4 py-1">
                                        [Listen carefully and use the BANT framework to qualify]
                                    </p>
                                    <p>"Based on what you've described, I'd like to propose a professional site visit for [Day] at [Time]. Would that work for you?"</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Email Template */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col p-1 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-50 dark:from-slate-800 dark:to-slate-900 shadow-sm transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="bg-white dark:bg-slate-950 rounded-[15px] p-6 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center border border-purple-100 dark:border-purple-900/30">
                                        <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <h5 className="font-bold text-slate-800 dark:text-slate-200">Email Template <span className="text-[10px] text-slate-400 font-normal ml-2 tracking-wider uppercase">First Response</span></h5>
                                </div>
                                
                                <div className="flex-1 relative text-sm text-slate-600 dark:text-slate-300 font-mono bg-slate-50 dark:bg-slate-900/80 p-6 rounded-xl border border-slate-100 dark:border-slate-800/50 leading-relaxed overflow-hidden">
                                    <div className="absolute -top-4 -right-4 p-2 opacity-[0.03] dark:opacity-[0.05] pointer-events-none rotate-12">
                                        <Mail className="w-24 h-24" />
                                    </div>
                                    <div className="p-3 bg-white dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700/50 mb-5 text-[11px] space-y-1 shadow-sm">
                                        <p><span className="text-slate-400">Subject:</span> <span className="font-bold text-slate-900 dark:text-slate-100">RE: Inquiry - Fire Safety Solutions</span></p>
                                    </div>
                                    <div className="space-y-4">
                                        <p>Dear [Customer Name],</p>
                                        <p>Thank you for contacting SS+. Regarding [Need], I'd like to learn more to provide an accurate quotation.</p>
                                        <p className="text-slate-400 dark:text-slate-500 italic border-l-2 border-slate-300 dark:border-slate-700 pl-4 py-1 leading-relaxed">
                                            Could we schedule a brief call this week? I'm available [Day/Time]. Alternatively, please provide facility type...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="site-survey">
                <SubSectionHeader>1.3 Site Survey Process</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h6 className="font-bold text-primary-600 mb-2 border-b pb-2">Mandatory Surveyor Mandates</h6>
                        <List className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <ListItem>MANDATORY for all new equipment installations.</ListItem>
                            <ListItem>MANDATORY for first-time Annual Maintenance Contracts.</ListItem>
                            <ListItem>MANDATORY for complex projects (multiple product types).</ListItem>
                            <ListItem>MANDATORY for custom safety signage or PPE sizing assessments.</ListItem>
                            <ListItem>EXCEPTION: Remote desert/offshore sites can use photo/video walkthroughs + floor plans if visit cost is excessive.</ListItem>
                        </List>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h6 className="font-bold text-secondary-600 mb-2 border-b pb-2">Site Survey Objectives</h6>
                        <List className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <ListItem>Hazard Identification & Risk Assessment.</ListItem>
                            <ListItem>Detailed Equipment Inventory & Condition Audit.</ListItem>
                            <ListItem>Facility Layout & Installation Logistics Planning.</ListItem>
                            <ListItem>Relationship Building with Key Stakeholders.</ListItem>
                        </List>
                    </div>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-md my-12">
                    <h5 className="font-bold text-primary-600 mb-8 text-center">Comprehensive Site Survey Objectives</h5>
                    <div className="w-full max-w-4xl mx-auto">
                        <svg viewBox="0 0 800 500" width="100%" xmlns="http://www.w3.org/2000/svg" aria-label="Site Survey Objectives Detailed Flowchart">
                            <style>{`
                                .box-survey { fill: #0f172a; stroke: #1f2937; stroke-width: 1; rx: 6; }
                                @media (prefers-color-scheme: light) { .box-survey { fill: #ffffff; stroke: #e2e8f0; } }
                                .title-survey { fill: #fff; font: 700 13px 'Arial'; }
                                @media (prefers-color-scheme: light) { .title-survey { fill: #0f172a; } }
                                .subtitle-survey { fill: #c7d2fe; font: 400 11px 'Arial'; }
                                @media (prefers-color-scheme: light) { .subtitle-survey { fill: #64748b; } }
                                .line-survey { stroke: #94a3b8; stroke-width: 2; }
                            `}</style>
                            {/* ... kept content ... */}
                            <rect x="300" y="10" width="200" height="50" className="box-survey" />
                            <text x="400" y="35" textAnchor="middle" className="title-survey">Site Survey Objectives</text>
                            <text x="400" y="50" textAnchor="middle" className="subtitle-survey">Comprehensive Assessment Plan</text>

                            <line x1="400" y1="60" x2="400" y2="90" className="line-survey" />

                            <rect x="50" y="90" width="200" height="70" className="box-survey" />
                            <text x="150" y="115" textAnchor="middle" className="title-survey">Risk Assessment</text>
                            <text x="150" y="135" textAnchor="middle" className="subtitle-survey">• Fire hazards</text>
                            <text x="150" y="150" textAnchor="middle" className="subtitle-survey">• Safety measures</text>

                            <rect x="300" y="90" width="200" height="70" className="box-survey" />
                            <text x="400" y="115" textAnchor="middle" className="title-survey">Equipment Survey</text>
                            <text x="400" y="135" textAnchor="middle" className="subtitle-survey">• Inventory count</text>
                            <text x="400" y="150" textAnchor="middle" className="subtitle-survey">• Condition assessment</text>

                            <rect x="550" y="90" width="200" height="70" className="box-survey" />
                            <text x="650" y="115" textAnchor="middle" className="title-survey">Facility Analysis</text>
                            <text x="650" y="135" textAnchor="middle" className="subtitle-survey">• Layout & access</text>
                            <text x="650" y="150" textAnchor="middle" className="subtitle-survey">• Buildings & floors</text>

                            <line x1="150" y1="90" x2="650" y2="90" className="line-survey" />

                            <rect x="50" y="200" width="200" height="70" className="box-survey" />
                            <text x="150" y="225" textAnchor="middle" className="title-survey">PPE Requirements</text>
                            <text x="150" y="245" textAnchor="middle" className="subtitle-survey">• Employee count by role</text>
                            <text x="150" y="260" textAnchor="middle" className="subtitle-survey">• Current PPE status</text>

                            <rect x="300" y="200" width="200" height="70" className="box-survey" />
                            <text x="400" y="225" textAnchor="middle" className="title-survey">Installation Planning</text>
                            <text x="400" y="245" textAnchor="middle" className="subtitle-survey">• Mounting locations</text>
                            <text x="400" y="260" textAnchor="middle" className="subtitle-survey">• Access logistics</text>

                            <rect x="550" y="200" width="200" height="70" className="box-survey" />
                            <text x="650" y="225" textAnchor="middle" className="title-survey">Stakeholder Relations</text>
                            <text x="650" y="245" textAnchor="middle" className="subtitle-survey">• Key contacts</text>
                            <text x="650" y="260" textAnchor="middle" className="subtitle-survey">• Decision makers</text>

                            <line x1="150" y1="160" x2="150" y2="200" className="line-survey" />
                            <line x1="400" y1="160" x2="400" y2="200" className="line-survey" />
                            <line x1="650" y1="160" x2="650" y2="200" className="line-survey" />

                            <rect x="200" y="320" width="400" height="60" className="box-survey" />
                            <text x="400" y="345" textAnchor="middle" className="title-survey">Comprehensive Site Understanding</text>
                            <text x="400" y="365" textAnchor="middle" className="subtitle-survey">Foundation for Accurate Quotation</text>

                            <line x1="150" y1="270" x2="150" y2="350" className="line-survey" />
                            <line x1="400" y1="270" x2="400" y2="320" className="line-survey" />
                            <line x1="650" y1="270" x2="650" y2="350" className="line-survey" />
                            <line x1="150" y1="350" x2="200" y2="350" className="line-survey" />
                            <line x1="650" y1="350" x2="600" y2="350" className="line-survey" />
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-12">
                    <div className="space-y-4">
                        <h6 className="font-bold text-slate-800 dark:text-slate-200 border-l-4 border-primary-600 pl-4">Site Survey Preparation</h6>
                        <div className="w-full">
                            <svg viewBox="0 0 700 260" width="100%" xmlns="http://www.w3.org/2000/svg" aria-label="Site Survey Preparation Flowchart">
                                <style>{`
                                    .box-prep { fill: #0f172a; stroke: #1f2937; stroke-width: 1; rx: 6; }
                                    @media (prefers-color-scheme: light) { .box-prep { fill: #ffffff; stroke: #e2e8f0; } }
                                    .title-prep { fill: #fff; font: 700 13px 'Arial'; }
                                    @media (prefers-color-scheme: light) { .title-prep { fill: #0f172a; } }
                                    .subtitle-prep { fill: #c7d2fe; font: 400 12px 'Arial'; }
                                    @media (prefers-color-scheme: light) { .subtitle-prep { fill: #64748b; } }
                                    .line-prep { stroke: #94a3b8; stroke-width: 2; }
                                `}</style>
                                <rect x="250" y="10" width="200" height="40" className="box-prep" />
                                <text x="350" y="35" textAnchor="middle" className="title-prep">Site Survey Preparation</text>
                                <line x1="350" y1="50" x2="350" y2="70" className="line-prep" />

                                <rect x="60" y="70" width="140" height="40" className="box-prep" />
                                <text x="130" y="95" textAnchor="middle" className="subtitle-prep">Research Customer</text>
                                <rect x="210" y="70" width="140" height="40" className="box-prep" />
                                <text x="280" y="95" textAnchor="middle" className="subtitle-prep">Confirm Appt.</text>
                                <rect x="360" y="70" width="140" height="40" className="box-prep" />
                                <text x="430" y="95" textAnchor="middle" className="subtitle-prep">Prepare Materials</text>
                                <rect x="510" y="70" width="140" height="40" className="box-prep" />
                                <text x="580" y="95" textAnchor="middle" className="subtitle-prep">Dress Professional</text>
                                <line x1="130" y1="70" x2="580" y2="70" className="line-prep" />
                            </svg>
                        </div>
                        <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 pl-4">
                            <li><strong>Research:</strong> Review WAVE PLUS for history and industry hazards.</li>
                            <li><strong>Confirm:</strong> Call day before to verify contact and site access.</li>
                            <li><strong>Materials:</strong> Checklist, Camera, Tablet, Tape Measure, PPE.</li>
                            <li><strong>Dress:</strong> SS+ Uniform/Badge; clean and professional.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h6 className="font-bold text-slate-800 dark:text-slate-200 border-l-4 border-secondary-600 pl-4">During Site Survey</h6>
                        <div className="w-full bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                             <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0 text-xs font-bold text-primary-600 dark:text-primary-400">01</div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-slate-200 text-sm">Arrival & Intro (15m)</p>
                                        <p className="text-xs text-slate-500">Punctual arrival; meet contact; explain process; discuss challenges.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start border-t border-slate-200 dark:border-slate-800 pt-4">
                                    <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0 text-xs font-bold text-primary-600 dark:text-primary-400">02</div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-slate-200 text-sm">Physical Assessment (45m)</p>
                                        <p className="text-xs text-slate-500">Walk facility; count equipment; photograph hazards; check PPE needs.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start border-t border-slate-200 dark:border-slate-800 pt-4">
                                    <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0 text-xs font-bold text-primary-600 dark:text-primary-400">03</div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-slate-200 text-sm">Closing Discussion (15m)</p>
                                        <p className="text-xs text-slate-500">Summarize findings; confirm scope; set quotation expectations.</p>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                    <div className="p-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/50 rounded-xl">
                        <h6 className="font-bold text-green-700 dark:text-green-400 text-sm mb-4 border-b border-green-200 dark:border-green-900/40 pb-2">✅ SURVEY DO'S</h6>
                        <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <li>Be thorough but efficient; respect visitor time.</li>
                            <li>Point out safety risks and compliance gaps professionally.</li>
                            <li>Listen more than talk; understand the customer's culture.</li>
                            <li>Document EVERYTHING (photos, measurements, counts).</li>
                            <li>Follow all site safety rules and visitor protocols.</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-xl">
                        <h6 className="font-bold text-red-700 dark:text-red-400 text-sm mb-4 border-b border-red-200 dark:border-red-900/40 pb-2">❌ SURVEY DON'TS</h6>
                        <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <li>Don't rush or criticize their current situation harshly.</li>
                            <li>Don't make promises on timelines you can't guarantee.</li>
                            <li>Don't quote prices on the spot (wait for official calc).</li>
                            <li>Don't take calls or be distracted during the walkthrough.</li>
                            <li>Don't forget to thank the host and exchange cards.</li>
                        </ul>
                    </div>
                </div>

                <Blockquote type="caution" title="Escalation Rule">
                    Leads in Sfax region go to <strong>Mohamed CHRAITI</strong>; Tunis region to <strong>Kais KHAIRALLAH</strong>. Tenders {">"} 10,000 TND must be led by <strong>Najla BEN SALEM</strong>.
                </Blockquote>
            </SubSection>

            <SubSection id="quotation-prep">
                <SubSectionHeader>1.4 Quotation Preparation</SubSectionHeader>
                <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl my-8">
                    <h6 className="font-bold text-primary-600 mb-4 text-center">Quotation Quality Standards</h6>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {[
                            { t: "Accurate", c: "Correct pricing, specs, scope." },
                            { t: "Complete", c: "Address all customer requirements." },
                            { t: "Professional", c: "Well-formatted, clear, branded." },
                            { t: "Compliant", c: "T&Cs and validity included." },
                            { t: "Timely", c: "Sent in 1d (2d if complex)." },
                        ].map((item, i) => (
                            <div key={i} className="p-4 bg-white dark:bg-slate-950 rounded-lg shadow-sm text-center border border-slate-200 dark:border-slate-800">
                                <h6 className="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase mb-1">{item.t}</h6>
                                <p className="text-xs text-slate-500 leading-tight">{item.c}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl my-12">
                    <h5 className="font-bold text-primary-600 mb-8 text-center">Quotation Process Overview</h5>
                    <div className="w-full">
                        <svg viewBox="0 0 800 400" width="100%" xmlns="http://www.w3.org/2000/svg" aria-label="Quotation Process Overview">
                            <style>{`
                                .box-q { fill: #0f172a; stroke: #1f2937; stroke-width: 1; rx: 6; }
                                @media (prefers-color-scheme: light) { .box-q { fill: #ffffff; stroke: #e2e8f0; } }
                                .title-q { fill: #fff; font: 700 13px 'Arial'; }
                                @media (prefers-color-scheme: light) { .title-q { fill: #0f172a; } }
                                .subtitle-q { fill: #c7d2fe; font: 400 11px 'Arial'; }
                                @media (prefers-color-scheme: light) { .subtitle-q { fill: #64748b; } }
                                .line-q { stroke: #94a3b8; stroke-width: 2; }
                                .note-q { fill: #c7d2fe; font: italic 10px 'Arial'; }
                                @media (prefers-color-scheme: light) { .note-q { fill: #64748b; } }
                            `}</style>
                            <rect x="250" y="10" width="300" height="50" className="box-q" />
                            <text x="400" y="35" textAnchor="middle" className="title-q">Quotation Preparation Process</text>
                            <text x="400" y="50" textAnchor="middle" className="subtitle-q">6-Step Workflow (95-165 minutes total)</text>
                            
                            <rect x="50" y="100" width="200" height="60" className="box-q" />
                            <text x="150" y="125" textAnchor="middle" className="title-q">Step 1</text>
                            <text x="150" y="140" textAnchor="middle" className="subtitle-q">Review Requirements</text>
                            <text x="150" y="155" textAnchor="middle" className="subtitle-q">(15-30 minutes)</text>
                            
                            <rect x="300" y="100" width="200" height="60" className="box-q" />
                            <text x="400" y="125" textAnchor="middle" className="title-q">Step 2</text>
                            <text x="400" y="140" textAnchor="middle" className="subtitle-q">Determine Pricing</text>
                            <text x="400" y="155" textAnchor="middle" className="subtitle-q">(30-60 minutes)</text>
                            
                            <rect x="550" y="100" width="200" height="60" className="box-q" />
                            <text x="650" y="125" textAnchor="middle" className="title-q">Step 3</text>
                            <text x="650" y="140" textAnchor="middle" className="subtitle-q">Prepare Document</text>
                            <text x="650" y="155" textAnchor="middle" className="subtitle-q">(30-45 minutes)</text>
                            
                            <rect x="50" y="200" width="200" height="60" className="box-q" />
                            <text x="150" y="225" textAnchor="middle" className="title-q">Step 4</text>
                            <text x="150" y="240" textAnchor="middle" className="subtitle-q">Internal Review</text>
                            <text x="150" y="255" textAnchor="middle" className="subtitle-q">(10-15 minutes)</text>
                            
                            <rect x="300" y="200" width="200" height="60" className="box-q" />
                            <text x="400" y="225" textAnchor="middle" className="title-q">Step 5</text>
                            <text x="400" y="240" textAnchor="middle" className="subtitle-q">Send Quotation</text>
                            <text x="400" y="255" textAnchor="middle" className="subtitle-q">(5-10 minutes)</text>
                            
                            <rect x="550" y="200" width="200" height="60" className="box-q" />
                            <text x="650" y="225" textAnchor="middle" className="title-q">Step 6</text>
                            <text x="650" y="240" textAnchor="middle" className="subtitle-q">Record in WAVE PLUS</text>
                            <text x="650" y="255" textAnchor="middle" className="subtitle-q">(5 minutes)</text>
                            
                            <line x1="400" y1="60" x2="400" y2="100" className="line-q" />
                            <line x1="250" y1="130" x2="300" y2="130" className="line-q" />
                            <line x1="500" y1="130" x2="550" y2="130" className="line-q" />
                            <line x1="250" y1="230" x2="300" y2="230" className="line-q" />
                            <line x1="500" y1="230" x2="550" y2="230" className="line-q" />
                            
                            <line x1="50" y1="300" x2="750" y2="300" className="line-q" />
                            <text x="400" y="320" textAnchor="middle" className="note-q">Total Process Time: 95-165 minutes</text>
                        </svg>
                    </div>
                </div>

                <div className="space-y-16">
                    {/* STEP 1 */}
                    <div className="space-y-6">
                        <h6 className="font-bold text-slate-800 dark:text-slate-200 border-l-4 border-primary-600 pl-4">Step 1: Review Requirements (15-30m)</h6>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="w-full bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                                <svg viewBox="0 0 800 450" width="100%" xmlns="http://www.w3.org/2000/svg" aria-label="Requirements Review Process">
                                    <style>{`
                                        .box-r { fill: #0f172a; stroke: #1f2937; stroke-width: 1; rx: 6; }
                                        @media (prefers-color-scheme: light) { .box-r { fill: #ffffff; stroke: #e2e8f0; } }
                                        .title-r { fill: #fff; font: 700 13px 'Arial'; }
                                        @media (prefers-color-scheme: light) { .title-r { fill: #0f172a; } }
                                        .subtitle-r { fill: #c7d2fe; font: 400 11px 'Arial'; }
                                        @media (prefers-color-scheme: light) { .subtitle-r { fill: #64748b; } }
                                        .line-r { stroke: #94a3b8; stroke-width: 2; }
                                    `}</style>
                                    <rect x="200" y="10" width="400" height="60" className="box-r" />
                                    <text x="400" y="35" textAnchor="middle" className="title-r">Step 1: Review Requirements</text>
                                    <text x="400" y="55" textAnchor="middle" className="subtitle-r">Info Gathering (15-30m)</text>
                                    <rect x="50" y="120" width="200" height="90" className="box-r" />
                                    <text x="150" y="145" textAnchor="middle" className="title-r">Customer Details</text>
                                    <text x="150" y="165" textAnchor="middle" className="subtitle-r">• Inquiry specs</text>
                                    <text x="150" y="180" textAnchor="middle" className="subtitle-r">• WAVE profile</text>
                                    <rect x="300" y="120" width="200" height="90" className="box-r" />
                                    <text x="400" y="145" textAnchor="middle" className="title-r">Survey Data</text>
                                    <text x="400" y="165" textAnchor="middle" className="subtitle-r">• Site findings</text>
                                    <text x="400" y="180" textAnchor="middle" className="subtitle-r">• Photos</text>
                                    <rect x="550" y="120" width="200" height="90" className="box-r" />
                                    <text x="650" y="145" textAnchor="middle" className="title-r">Special Needs</text>
                                    <text x="650" y="165" textAnchor="middle" className="subtitle-r">• Constraints</text>
                                    <text x="650" y="180" textAnchor="middle" className="subtitle-r">• Requests</text>
                                    <line x1="400" y1="70" x2="400" y2="120" className="line-r" />
                                </svg>
                            </div>
                            <div className="space-y-4">
                                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                    <li><strong>Information Gathering:</strong> Compile inquiry details, site survey photos, WAVE PLUS customer profile, and any previous quote history.</li>
                                    <li><strong>Clarify Uncertainties:</strong> If anything is unclear, call the customer BEFORE quoting. Never guess or assume technical safety specs.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* STEP 2 */}
                    <div className="space-y-6">
                        <h6 className="font-bold text-slate-800 dark:text-slate-200 border-l-4 border-primary-600 pl-4">Step 2: Determine Pricing (30-60m)</h6>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4 order-2 lg:order-1">
                                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
                                    <li><strong>Fire Equip. Services:</strong> Master price list + travel fees (if {">"}120km) + volume discounts.</li>
                                    <li><strong>PPE & Workwear:</strong> Supplier catalogs + standard markup + custom printing costs + tiered pricing.</li>
                                    <li><strong>MSA:</strong> Equipment count x frequency - 10-20% package discount.</li>
                                    <li><strong>Authority:</strong> Stay within 15% authority for reps; justification required for all discounts.</li>
                                </ul>
                            </div>
                            <div className="w-full bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 order-1 lg:order-2">
                                <svg viewBox="0 0 800 520" width="100%" xmlns="http://www.w3.org/2000/svg" aria-label="Determine Pricing Flowchart">
                                    <style>{`
                                        .box-p { fill: #0f172a; stroke: #1f2937; stroke-width: 1; rx: 6; }
                                        @media (prefers-color-scheme: light) { .box-p { fill: #ffffff; stroke: #e2e8f0; } }
                                        .title-p { fill: #fff; font: 700 13px 'Arial'; }
                                        @media (prefers-color-scheme: light) { .title-p { fill: #0f172a; } }
                                        .subtitle-p { fill: #94a3b8; font: 400 11px 'Arial'; }
                                        @media (prefers-color-scheme: light) { .subtitle-p { fill: #64748b; } }
                                        .line-p { stroke: #94a3b8; stroke-width: 2; }
                                    `}</style>
                                    <rect x="250" y="10" width="300" height="50" className="box-p" />
                                    <text x="400" y="35" textAnchor="middle" className="title-p">Pricing Calculation</text>
                                    <rect x="30" y="100" width="220" height="90" className="box-p" />
                                    <text x="140" y="130" textAnchor="middle" className="title-p">Master Price List</text>
                                    <rect x="290" y="100" width="220" height="90" className="box-p" />
                                    <text x="400" y="130" textAnchor="middle" className="title-p">Supplier Check</text>
                                    <rect x="550" y="100" width="220" height="90" className="box-p" />
                                    <text x="660" y="130" textAnchor="middle" className="title-p">Travel & Fees</text>
                                    <rect x="200" y="240" width="400" height="100" className="box-p" />
                                    <text x="400" y="270" textAnchor="middle" className="title-p">Cost + Markup + Labor</text>
                                    <line x1="400" y1="340" x2="400" y2="400" className="line-p" />
                                    <text x="400" y="420" textAnchor="middle" className="title-p" style={{ fill: '#3b82f6' }}>FINAL APPROVED PRICE</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* STEP 3 */}
                    <div className="space-y-6">
                        <h6 className="font-bold text-slate-800 dark:text-slate-200 border-l-4 border-primary-600 pl-4">Step 3: Prepare Quotation Document (30-45m)</h6>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                                <h6 className="font-bold text-primary-600 uppercase mb-4 text-xs border-b pb-2">Mandatory Document Sections</h6>
                                <div className="grid grid-cols-1 gap-2 text-xs text-slate-500">
                                    <div className="flex gap-2"><span>•</span> <strong>Header:</strong> Unique Ref#, Date, 30d Validity, Contact Info.</div>
                                    <div className="flex gap-2"><span>•</span> <strong>Scope:</strong> Detailed tech specs, quantities, brands, models.</div>
                                    <div className="flex gap-2"><span>•</span> <strong>Pricing:</strong> Subtotal, VAT (19%), Total in TND.</div>
                                    <div className="flex gap-2"><span>•</span> <strong>T&Cs:</strong> Payment terms, Delivery, Warranty, Exclusions.</div>
                                    <div className="flex gap-2"><span>•</span> <strong>Steps:</strong> Acceptance process and follow-up timeline.</div>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm text-slate-900 dark:text-slate-100 flex flex-col justify-center">
                                <h6 className="font-bold text-secondary-600 uppercase mb-4 text-xs">Product Line-Item Format</h6>
                                <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-600 dark:text-slate-400">
                                    | Item | Desc | Qty | Price | Total |<br/>
                                    |------|------|-----|-------|-------|<br/>
                                    | 01 | 6kg Powder | 10 | 85 TND | 850 TND |<br/>
                                    | 02 | Mount/Sign | 10 | 15 TND | 150 TND |
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STEP 4 & 5 & 6 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
                            <h6 className="font-bold text-slate-800 dark:text-slate-200 uppercase mb-6 text-xs border-b pb-2">Step 4: Internal Review (10-15m)</h6>
                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
                                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Self-Review Checklist:</p>
                                    <ul className="text-xs text-slate-500 space-y-1">
                                        <li>✅ Math/Totals double-checked</li>
                                        <li>✅ Pricing vs Approved Matrix</li>
                                        <li>✅ Scope captures all Site Survey data</li>
                                        <li>✅ Attachments included (Datasheets/Certs)</li>
                                    </ul>
                                </div>
                                <div className="text-xs text-slate-500">
                                    <p><strong>Over 10,000 TND:</strong> Sales Resp. Review Required</p>
                                    <p><strong>Over 20,000 TND:</strong> General Manager Approval Required</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                            <h6 className="font-bold text-primary-600 dark:text-primary-400 uppercase mb-6 text-xs border-b border-slate-200 dark:border-slate-800 pb-2">Step 5: Send Quotation (5-10m)</h6>
                            <div className="space-y-4">
                                <div className="p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400">
                                    <p className="text-secondary-600 mb-2">Subject: Quotation [Number] - [Description] - SS+</p>
                                    <p>"Thank you for the opportunity... find attached our quotation... I'll follow up in 2-3 days to answer questions."</p>
                                </div>
                                <p className="text-xs text-slate-500">Deliver via PDF (not editable). Deliver printed copy for key accounts if requested.</p>
                            </div>
                        </div>
                    </div>

                    {/* STEP 6 */}
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h6 className="font-bold text-slate-800 dark:text-slate-200 uppercase mb-6 text-center text-xs">Step 6: Record in WAVE PLUS (5m)</h6>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <p className="text-xs font-black text-slate-900 dark:text-slate-100">LOG DATE</p>
                                <p className="text-xs text-slate-500">Date quote sent</p>
                            </div>
                            <div>
                                <p className="text-xs font-black text-slate-900 dark:text-slate-100">LOG VALUE</p>
                                <p className="text-xs text-slate-500">Total TND value</p>
                            </div>
                            <div>
                                <p className="text-xs font-black text-slate-900 dark:text-slate-100">ATTACH PDF</p>
                                <p className="text-xs text-slate-500">Official copy stored</p>
                            </div>
                            <div>
                                <p className="text-xs font-black text-slate-900 dark:text-slate-100">SET FOLLOW-UP</p>
                                <p className="text-xs text-slate-500">Reminder for Day +3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="follow-up">
                <SubSectionHeader>1.5 Follow-Up & Closing the Sale</SubSectionHeader>
                <Paragraph className="mb-6 italic"><strong>The fortune is in the follow-up</strong>. Most sales are won or lost in how well we follow up after sending the quotation.</Paragraph>

                <div className="space-y-12">
                    {/* Follow-Up Timeline */}
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h5 className="font-bold text-primary-600 mb-8 text-center uppercase">Strategic Follow-Up timeline</h5>
                        
                        <div className="grid grid-cols-1 gap-10">
                            {/* Day 0 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0 border border-primary-200 dark:border-primary-800">
                                    <span className="text-primary-600 dark:text-primary-400 font-bold">D0</span>
                                </div>
                                <div className="space-y-2">
                                    <h6 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Quotation Sent</h6>
                                    <List className="text-sm text-slate-600 dark:text-slate-400">
                                        <ListItem>Confirm customer received quotation (phone or email).</ListItem>
                                        <ListItem>Ask if they need clarification on anything.</ListItem>
                                        <ListItem>Set expectation: "I'll check back with you in 2-3 days."</ListItem>
                                    </List>
                                </div>
                            </div>

                            {/* Day 2-3 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0 border border-primary-200 dark:border-primary-800">
                                    <span className="text-primary-600 dark:text-primary-400 font-bold">D2</span>
                                </div>
                                <div className="space-y-4 flex-1">
                                    <h6 className="font-bold text-slate-900 dark:text-slate-100 text-sm">First Follow-Up Call 📞</h6>
                                    <p className="text-sm text-slate-500">Purpose: Ensure review, answer questions, gauge interest.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-900/50 border-l-4 border-l-green-600">
                                            <p className="font-bold text-green-700 dark:text-green-400 uppercase text-xs mb-2">Scenario: Reviewed (YES)</p>
                                            <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">"Great! Any questions? How does it compare to expectations? What are your thoughts on moving forward? What's the timeline/next steps?"</p>
                                        </div>
                                        <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-xl border border-orange-200 dark:border-orange-900/50 border-l-4 border-l-orange-600">
                                            <p className="font-bold text-orange-700 dark:text-orange-400 uppercase text-xs mb-2">Scenario: Not Reviewed (NO)</p>
                                            <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">"No problem. When will you have time? Anything preventing review? Can I help? Would a phone walkthrough help?"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Day 7 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0 border border-primary-200 dark:border-primary-800">
                                    <span className="text-primary-600 dark:text-primary-400 font-bold">D7</span>
                                </div>
                                <div className="space-y-4 flex-1">
                                    <h6 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Second Follow-Up 📧/📞</h6>
                                    <div className="p-6 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 relative">
                                        <div className="absolute top-4 right-6 text-xs font-mono text-slate-400 uppercase">Email Template</div>
                                        <p className="font-bold text-primary-600 dark:text-primary-400 text-xs mb-2 font-mono">Subject: Following up - Quotation [Number]</p>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
                                            "I wanted to follow up on last week's quotation... making sure it arrived and you don't have questions... Still interested? Let me know your timeline."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Day 10-14 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0 border border-primary-200 dark:border-primary-800">
                                    <span className="text-primary-600 dark:text-primary-400 font-bold">D10</span>
                                </div>
                                <div className="space-y-4 flex-1">
                                    <h6 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Third Follow-Up Call (Direct)</h6>
                                    <div className="p-5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                                        "I want to respect your time, so I'm wondering: Are you still interested? Is there something holding up the decision? Anything I can do to help move this forward?"
                                    </div>
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                        {['Budget Delays', 'Price Concerns', 'Chose Competitor', 'Not Interested'].map((reason, idx) => (
                                            <div key={idx} className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg text-center text-xs text-slate-500 bg-slate-50 dark:bg-slate-900">{reason}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Day 21 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/30 flex items-center justify-center shrink-0 border border-red-200 dark:border-red-900">
                                    <span className="text-red-600 dark:text-red-400 font-bold">D21</span>
                                </div>
                                <div className="space-y-4 flex-1">
                                    <h6 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Final Follow-Up (Break-up) 📧</h6>
                                    <div className="p-6 bg-white dark:bg-slate-950 rounded-xl border border-red-200 dark:border-red-900/30 relative">
                                        <p className="font-bold text-red-600 dark:text-red-500 text-xs mb-2 font-mono uppercase">Subject: Final follow-up - Quotation [Number]</p>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
                                            "Reached out several times... assuming this isn't a priority right now... please feel free to reach out anytime in the future."
                                        </p>
                                    </div>
                                    <p className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">After D21: Move to "Cold" Status + Monthly Check-in</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Best Practices & Closing */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
                        <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                            <h6 className="font-bold text-slate-800 dark:text-slate-100 uppercase mb-6 text-xs border-b pb-2">Follow-Up Best Practices</h6>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                                <div>
                                    <p className="font-bold text-green-600 uppercase mb-3 text-center lg:text-left text-xs">✅ DO:</p>
                                    <div className="grid grid-cols-1 gap-2 text-xs text-slate-500">
                                        <p>• Be persistent (4-5 touches is standard).</p>
                                        <p>• Mix calls, emails, and in-person visits.</p>
                                        <p>• Add value: provide data, insights, answers.</p>
                                        <p>• Document ALL touches in WAVE PLUS.</p>
                                        <p>• Ask direct questions: "Are you still interested?"</p>
                                        <p>• Listen more than you talk.</p>
                                    </div>
                                </div>
                                <div className="mt-4 lg:mt-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-slate-800">
                                    <p className="font-bold text-red-600 uppercase mb-3 text-center lg:text-left text-xs">❌ DON'T:</p>
                                    <div className="grid grid-cols-1 gap-2 text-xs text-slate-500">
                                        <p>• Give up after one follow-up.</p>
                                        <p>• Be passive ("Just checking in...").</p>
                                        <p>• Pressure or guilt-trip the customer.</p>
                                        <p>• Fake urgency (e.g., false price expiration).</p>
                                        <p>• Fail to document follow-ups.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl text-white">
                            <h6 className="font-bold text-secondary-500 uppercase mb-6 text-xs border-b border-slate-800 pb-2 text-center">Closing Techniques</h6>
                            <div className="space-y-4">
                                {[
                                    { t: "Ask for the Business", d: '"Would you like to proceed? When can we start?"' },
                                    { t: "Assumptive Close", d: '"I\'ll schedule you for [Date]. Do you prefer email or print paperwork?"' },
                                    { t: "Choice Close", d: '"3-year or 5-year contract? Installation next week or the after?"' },
                                    { t: "Trial Close", d: '"If we start next week, would that work? If price was okay, would you say yes?"' },
                                    { t: "Direct Close", d: '"What do we need to do to earn your business today?"' },
                                ].map((item, i) => (
                                    <div key={i} className="p-4 bg-slate-950 rounded-lg border border-slate-800">
                                        <p className="font-bold text-slate-200 uppercase mb-1 text-xs">{item.t}</p>
                                        <p className="text-xs text-slate-500 italic leading-tight">"{item.d}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* When Customer Says YES */}
                    <div className="relative p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl my-12 shadow-sm overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                        <h6 className="relative font-black text-green-600 dark:text-green-400 uppercase mb-12 text-sm tracking-[0.2em] text-center flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-green-200 dark:bg-green-800"></span>
                            10 Steps: When Customer Says YES
                            <span className="h-px w-8 bg-green-200 dark:bg-green-800"></span>
                        </h6>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative">
                            {[
                                { title: "Confirm Verbally", icon: <CheckCircle className="w-4 h-4" /> },
                                { title: "Summarize Agreement", icon: <FileText className="w-4 h-4" /> },
                                { title: "Explain Next Steps", icon: <ArrowRight className="w-4 h-4" /> },
                                { title: "Set Timeline", icon: <Clock className="w-4 h-4" /> },
                                { title: "Confirmation Email", icon: <Mail className="w-4 h-4" /> },
                                { title: "Prepare Contract", icon: <FileText className="w-4 h-4" /> },
                                { title: "Coordinate Ops", icon: <Settings className="w-4 h-4" /> },
                                { title: "Thank Customer", icon: <UserCheck className="w-4 h-4" /> },
                                { title: "Update WAVE (WON)", icon: <Award className="w-4 h-4" /> },
                                { title: "Celebrate! 🎉", icon: <Sparkles className="w-4 h-4" /> }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="group relative p-2 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:border-green-300 dark:hover:border-green-800 hover:shadow-lg hover:shadow-green-500/5"
                                >
                                    <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[10px] font-black text-slate-400 group-hover:text-green-600 group-hover:border-green-500 transition-colors shadow-sm">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    
                                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-green-50 dark:group-hover:bg-green-900/30 text-slate-400 group-hover:text-green-600 transition-all duration-300">
                                        {step.icon}
                                    </div>
                                    
                                    <p className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase leading-tight tracking-wider group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                        {step.title}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="objections">
                <SubSectionHeader>1.6 Overcoming Common Objections</SubSectionHeader>
                <Paragraph className="mb-6 italic">Objections are normal and healthy parts of the sales process. They indicate the customer is engaged and thinking seriously about the decision. Use this framework to clarify value and build trust.</Paragraph>

                {/* Types of Objections */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
                    {[
                        { t: "Price", c: "\"Too expensive\"", icon: <Tag className="w-4 h-4" />, color: "rose" },
                        { t: "Value", c: "\"Don't see the need\"", icon: <Zap className="w-4 h-4" />, color: "amber" },
                        { t: "Timing", c: "\"Not right now\"", icon: <Clock className="w-4 h-4" />, color: "blue" },
                        { t: "Competition", c: "\"Competitor is cheaper\"", icon: <ShieldAlert className="w-4 h-4" />, color: "purple" },
                        { t: "Trust", c: "\"Don't know you\"", icon: <HelpCircle className="w-4 h-4" />, color: "emerald" },
                        { t: "Authority", c: "\"Check with boss\"", icon: <UserCheck className="w-4 h-4" />, color: "slate" },
                    ].map((obj, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm text-center flex flex-col items-center group transition-all duration-300 hover:shadow-xl hover:border-primary-500/30"
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors duration-300
                                ${obj.color === 'rose' ? 'bg-rose-50 text-rose-500 dark:bg-rose-950/30' : ''}
                                ${obj.color === 'amber' ? 'bg-amber-50 text-amber-500 dark:bg-amber-950/30' : ''}
                                ${obj.color === 'blue' ? 'bg-blue-50 text-blue-500 dark:bg-blue-950/30' : ''}
                                ${obj.color === 'purple' ? 'bg-purple-50 text-purple-500 dark:bg-purple-950/30' : ''}
                                ${obj.color === 'emerald' ? 'bg-emerald-50 text-emerald-500 dark:bg-emerald-950/30' : ''}
                                ${obj.color === 'slate' ? 'bg-slate-50 text-slate-500 dark:bg-slate-800' : ''}
                                group-hover:bg-primary-500 group-hover:text-white
                            `}>
                                {obj.icon}
                            </div>
                            <h6 className="font-black text-slate-800 dark:text-slate-200 uppercase mb-2 text-[10px] tracking-widest">{obj.t}</h6>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight italic font-medium px-2">{obj.c}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Framework */}
                <div className="relative p-1 rounded-3xl bg-gradient-to-br from-slate-200 to-slate-50 dark:from-slate-800 dark:to-slate-900 shadow-2xl my-16 overflow-hidden">
                    <div className="bg-white dark:bg-slate-950 rounded-[22px] p-8 lg:p-12 relative overflow-hidden">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

                        <div className="relative mb-12 text-center">
                            <h6 className="font-black text-primary-600 dark:text-primary-400 uppercase text-xs tracking-[0.3em] mb-3">Objection Protocol</h6>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Handling Framework</h3>
                            <div className="w-12 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
                            {[
                                { step: "01", t: "Listen", c: "Let customer fully express concern. Don't interrupt; show empathy.", icon: <MessageSquare className="w-4 h-4" /> },
                                { step: "02", t: "Acknowledge", c: "Validate concern: \"I understand your concern about...\"", icon: <ThumbsUp className="w-4 h-4" /> },
                                { step: "03", t: "Clarify", c: "Ask questions to find the real hidden issue.", icon: <Search className="w-4 h-4" /> },
                                { step: "04", t: "Respond", c: "Address with facts, examples, and testimonials.", icon: <Send className="w-4 h-4" /> },
                                { step: "05", t: "Confirm", c: "\"Does that address your concern? What else is important?\"", icon: <Check className="w-4 h-4" /> },
                                { step: "06", t: "Move Forward", c: "Return to closing: \"So if we can resolve [concern]...\"", icon: <TrendingUp className="w-4 h-4" /> },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative flex flex-col items-center text-center group"
                                >
                                    {/* Number Circle */}
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 shadow-sm relative z-10">
                                        {item.icon}
                                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-50 dark:border-slate-900 flex items-center justify-center text-[9px] font-black text-slate-400 group-hover:text-primary-500 transition-colors">
                                            {item.step}
                                        </div>
                                    </div>
                                    
                                    <h6 className="font-bold text-slate-900 dark:text-white uppercase mb-3 text-[11px] tracking-wider transition-colors group-hover:text-primary-500">{item.t}</h6>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.c}</p>
                                    
                                    {/* Connector line for desktop */}
                                    {i < 5 && (
                                        <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-slate-100 dark:bg-slate-800/50 -z-0"></div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-16 my-16">
                    {/* Common Objection #1: Price */}
                    <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm relative overflow-hidden">
                        <div className="flex flex-col lg:flex-row gap-12">
                            <div className="lg:w-1/3">
                                <h5 className="font-bold text-slate-800 dark:text-slate-100 uppercase mb-6 border-b-2 border-primary-600 pb-2 inline-block">01. "Your Price is Too High"</h5>
                                <div className="space-y-6">
                                    <div>
                                        <p className="font-bold text-primary-600 uppercase mb-3 text-xs">What They Really Mean:</p>
                                        <ul className="text-xs text-slate-500 space-y-2">
                                            <li>• I don't see the value yet.</li>
                                            <li>• I got a cheaper quote elsewhere.</li>
                                            <li>• I need ammunition for my boss.</li>
                                            <li>• I need to negotiate / Budget limits.</li>
                                        </ul>
                                    </div>
                                    <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-100 dark:border-red-900/50">
                                        <p className="font-bold text-red-600 dark:text-red-400 uppercase mb-2 text-xs">When to Discount:</p>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Large volume, strategic account, or meeting legitimate competitor pricing (within 15% authority).</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-2/3">
                                <p className="font-bold text-slate-800 dark:text-slate-200 uppercase mb-6 text-center lg:text-left text-xs underline decoration-primary-500">Response Techniques</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                                        <h6 className="font-bold text-slate-900 dark:text-slate-100 uppercase mb-2 text-xs">1. Value Justification</h6>
                                        <p className="text-xs text-slate-500 leading-relaxed">"23 years expertise, certified technicians, genuine parts, and Tunisia-wide coverage. You're buying protection for your people, not just a service."</p>
                                    </div>
                                    <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                                        <h6 className="font-bold text-slate-900 dark:text-slate-100 uppercase mb-2 text-xs">2. Cost of Failure</h6>
                                        <p className="text-xs text-slate-500 leading-relaxed">"What's the cost if an extinguisher fails during a fire or insurance denies a claim due to non-compliance? Is the difference worth the risk?"</p>
                                    </div>
                                    <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                                        <h6 className="font-bold text-slate-900 dark:text-slate-100 uppercase mb-2 text-xs">3. Break Down the Price</h6>
                                        <p className="text-xs text-slate-500 leading-relaxed">"3,000 TND/year is 250 TND/month. For 25 extinguishers, that's less than 0.35 TND per day per unit. Less than the cost of a coffee."</p>
                                    </div>
                                    <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                                        <h6 className="font-bold text-slate-900 dark:text-slate-100 uppercase mb-2 text-xs">4. Compare Apples to Apples</h6>
                                        <p className="text-xs text-slate-500 leading-relaxed">"May I review the other quote? Cheaper options often use non-certified materials, skip documentation, or lack warranty support."</p>
                                    </div>
                                    <div className="p-6 bg-primary-600/5 dark:bg-primary-600/10 rounded-xl border border-primary-600/20 md:col-span-2">
                                        <h6 className="font-bold text-primary-600 dark:text-primary-400 uppercase mb-2 text-center text-xs">5. Offer Options</h6>
                                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-center">"Phase the project over months, start with critical equipment, or committed 3-5 year contracts for better pricing."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Common Objection #2: Maintenance Value */}
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <div className="flex flex-col lg:flex-row gap-12">
                            <div className="lg:w-1/3">
                                <h5 className="font-bold text-slate-800 dark:text-slate-100 uppercase mb-6 border-b-2 border-secondary-600 pb-2 inline-block">02. "No Value in Maintenance"</h5>
                                <p className="text-xs text-slate-500 mb-6">Common when they haven't had an incident. Focus on the cost of non-compliance and catastrophic failure.</p>
                                <div className="p-6 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                                    <p className="font-bold text-secondary-600 uppercase mb-2 underline text-xs">The Risk Script:</p>
                                    <p className="text-xs text-slate-500 leading-relaxed">"Without maintenance, insurance may deny claims, you face regulatory fines, and potentially face criminal charges if someone is injured."</p>
                                </div>
                            </div>
                            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                                    <h6 className="font-bold text-slate-900 dark:text-slate-100 uppercase mb-2 text-xs">Legal/Regulatory Requirement</h6>
                                    <p className="text-xs text-slate-500 leading-relaxed">"Fire equipment maintenance isn't optional—it's required by Tunisian law. Annual inspections and current service tags are mandatory for compliance."</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                                    <h6 className="font-bold text-slate-900 dark:text-slate-100 uppercase mb-2 text-xs">Insurance Requirement</h6>
                                    <p className="text-xs text-slate-500 leading-relaxed">"Most commercial policies require maintenance records to keep coverage active. Without them, your claim could be denied after a fire."</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                                    <h6 className="font-bold text-slate-900 dark:text-slate-100 uppercase mb-2 text-xs">Equipment Reliability</h6>
                                    <p className="text-xs text-slate-500 leading-relaxed">"Extinguishers are like car tires—they look fine until you need them. Internal seals degrade and pressure drops. We ensure they work when lives depend on it."</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                                    <h6 className="font-bold text-slate-900 dark:text-slate-100 uppercase mb-2 text-xs">Cost Comparison</h6>
                                    <p className="text-xs text-slate-500 leading-relaxed">"Annual maintenance (2,500 TND) vs. Full replacement (15,000 TND) vs. Catastrophic fire loss (Millions). Maintenance is cheap insurance."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Common Objection #3: Competitors */}
                    <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <div className="flex flex-col lg:flex-row gap-12">
                            <div className="lg:w-1/3">
                                <h5 className="font-bold text-slate-800 dark:text-slate-100 uppercase mb-6 border-b-2 border-primary-600 pb-2 inline-block">03. "Competitors Are Cheaper"</h5>
                                <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800 space-y-4">
                                    <p className="font-bold text-primary-600 uppercase mb-1 text-xs">When to Walk Away:</p>
                                    <p className="text-xs text-slate-500 leading-relaxed">"We'd rather not get the business than compromise on quality. If the other route doesn't work out, we're here for you."</p>
                                </div>
                            </div>
                            <div className="lg:w-2/3 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 bg-slate-950 rounded-xl border border-slate-800">
                                        <h6 className="font-bold text-slate-100 uppercase mb-2 text-xs">Differentiate on Service</h6>
                                        <p className="text-xs text-slate-500 leading-relaxed">Highlight WAVE PLUS tracking, 23-year history, 6-month warranty, and certified technicians that competitors often lack.</p>
                                    </div>
                                    <div className="p-6 bg-slate-950 rounded-xl border border-slate-800">
                                        <h6 className="font-bold text-slate-100 uppercase mb-2 text-xs">Question Viability</h6>
                                        <p className="text-xs text-slate-500 leading-relaxed">"We know the cost of certified materials. If they are significantly lower, they are cutting corners on quality or safety standards."</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-primary-600/10 rounded-xl border border-primary-600/30 text-center">
                                    <h6 className="font-bold text-primary-600 dark:text-primary-400 uppercase mb-2 text-xs">Matching Protocol</h6>
                                    <p className="text-xs text-slate-600 dark:text-slate-300">"If you have a legitimate written quote for the exact same scope/quality from a reputable company, I'll review it for a match (up to 15%)."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Common Objection #4: Think About It */}
                    <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
                        <div className="flex flex-col lg:flex-row gap-12 relative">
                            <div className="lg:w-1/3">
                                <h5 className="font-bold text-white uppercase mb-6 border-b-2 border-blue-600 pb-2 inline-block">04. "Need to Think About It"</h5>
                                <p className="text-xs text-slate-400 mb-6">Often an evasion. Uncover the real issue through specific questions.</p>
                            </div>
                            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                    <h6 className="font-bold text-white uppercase mb-2 text-xs">Uncover the Real Issue</h6>
                                    <p className="text-xs text-slate-500 leading-relaxed">"What specific aspects do you need to think about? Is it price, scope, timing, or something else?"</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                    <h6 className="font-bold text-white uppercase mb-2 text-xs">Create Urgency</h6>
                                    <p className="text-xs text-slate-500 leading-relaxed">"Our schedule is filling up for next week and this quote is valid for 30 days. Let's lock this in to ensure your compliance."</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                    <h6 className="font-bold text-white uppercase mb-2 text-xs">Offer Trial/Pilot</h6>
                                    <p className="text-xs text-slate-500 leading-relaxed">"What if we start with a smaller scope or just the most critical equipment so you can see our quality first?"</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                    <h6 className="font-bold text-white uppercase mb-2 text-xs">Schedule Follow-Up</h6>
                                    <p className="text-xs text-slate-500 leading-relaxed">"Take your time. When exactly should I call you back? Next Tuesday at 10 AM?"</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Common Objection #5: Don't Know Company */}
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <div className="flex flex-col lg:flex-row gap-12">
                            <div className="lg:w-1/3">
                                <h5 className="font-bold text-slate-800 dark:text-slate-100 uppercase mb-6 border-b-2 border-primary-600 pb-2 inline-block">05. "Don't Know your Company"</h5>
                                <div className="p-6 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                                    <p className="font-bold text-primary-600 uppercase mb-1 text-xs">The Pedigree:</p>
                                    <p className="text-xs text-slate-500 font-bold">TUNISIA SINCE 2002</p>
                                    <p className="text-xs text-slate-500">Hundreds of Satisfied Clients</p>
                                </div>
                            </div>
                            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                                    <h6 className="font-bold text-slate-900 dark:text-slate-100 uppercase mb-2 text-xs">Company Credentials</h6>
                                    <p className="text-xs text-slate-500 leading-relaxed">"We aren't a fly-by-night operation. 23 years in business, two regional facilities, and a fully licensed/insured team."</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                                    <h6 className="font-bold text-slate-900 dark:text-slate-100 uppercase mb-2 text-xs">Demonstrate Technology</h6>
                                    <p className="text-xs text-slate-500 leading-relaxed">Show them the WAVE PLUS demo. "No one else in Tunisia offers this level of transparent equipment history tracking."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Common Objection #6: Handle Internally */}
                    <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl shadow-xl text-white">
                        <div className="flex flex-col lg:flex-row gap-12">
                            <div className="lg:w-1/3">
                                <h5 className="font-bold text-secondary-500 uppercase mb-6 border-b-2 border-secondary-600 pb-2 inline-block">06. "Handle it Internally"</h5>
                                <p className="text-xs text-slate-400">Often a cost-saving measure that creates massive liability and compliance gaps.</p>
                            </div>
                            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                    <h6 className="font-bold text-white uppercase mb-2 text-xs">Certification & Compliance</h6>
                                    <p className="text-xs text-slate-500 leading-relaxed">"Does your team have calibrated test equipment and the authority to issue legally recognized compliance certificates for insurance?"</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                    <h6 className="font-bold text-white uppercase mb-2 text-xs">Core Business Focus</h6>
                                    <p className="text-xs text-slate-500 leading-relaxed">"Is fire safety your core competency? Most companies outsource this specialized liability to experts so their team can focus on production."</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10 md:col-span-2">
                                    <h6 className="font-bold text-white uppercase mb-2 text-center text-xs">Offer Partnership</h6>
                                    <p className="text-xs text-slate-500 leading-relaxed text-center">"Have your staff do monthly visual checks, but use SS+ for the annual certification and professional maintenance. It's the best of both worlds."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Best Practices */}
                {/* Best Practices */}
                <div className="my-16">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-slate-400 dark:via-slate-800 dark:to-slate-600"></div>
                        <h6 className="font-black text-slate-800 dark:text-slate-200 uppercase text-[10px] tracking-[0.3em] px-6 py-2 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800">Best Practices</h6>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-200 to-slate-400 dark:via-slate-800 dark:to-slate-600"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* DO LIST */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative p-8 bg-emerald-50/30 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/40 rounded-[2rem] overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-[0.05] dark:opacity-[0.1]">
                                <ThumbsUp className="w-32 h-32 text-emerald-600" />
                            </div>

                            <div className="relative mb-8 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                                    <ThumbsUp className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-black text-emerald-700 dark:text-emerald-400 uppercase text-xs tracking-widest leading-none mb-1">Success Strategy</h4>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">The "DO" List</h3>
                                </div>
                            </div>

                            <div>
                                {[
                                    "Listen completely before responding.",
                                    "Acknowledge and empathize with their concern.",
                                    "Ask clarifying questions to find the root issue.",
                                    "Tell success stories and give examples.",
                                    "Use facts and data, not just opinions.",
                                    "Focus on value, not just price.",
                                    "Stay calm and professional.",
                                    "Be honest if you aren't the right fit."
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i} 
                                        initial={{ opacity: 0, y: 5 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-start gap-3 group"
                                    >
                                        <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                                            <Check className="w-3 h-3 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300">
                                            {item}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* DON'T LIST */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative p-8 bg-rose-50/30 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-900/40 rounded-[2rem] overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-[0.05] dark:opacity-[0.1]">
                                <ThumbsDown className="w-32 h-32 text-rose-600" />
                            </div>

                            <div className="relative mb-8 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-lg shadow-rose-500/20">
                                    <ThumbsDown className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-black text-rose-700 dark:text-rose-400 uppercase text-xs tracking-widest leading-none mb-1">Common Pitfalls</h4>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">The "DONT" List</h3>
                                </div>
                            </div>

                            <div>
                                {[
                                    "Get defensive or argumentative.",
                                    "Interrupt or talk over the customer.",
                                    "Badmouth competitors directly.",
                                    "Lie or exaggerate results.",
                                    "Pressure or manipulate the customer.",
                                    "Take it personally.",
                                    "Give up after the first objection.",
                                    "Discount too quickly; sell value first."
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i} 
                                        initial={{ opacity: 0, y: 5 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-start gap-3 group"
                                    >
                                        <div className="mt-1 w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                                            <XCircle className="w-3 h-3 text-rose-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300">
                                            {item}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

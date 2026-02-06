
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Blockquote from '../../../components/document-elements/Blockquote';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';

export default function PurchasingProcedures() {
    return (
        <Section id="section-2">
            <SectionHeader>SECTION 2: PURCHASING PROCEDURES</SectionHeader>

            {/* 2.1 Purchase Requisition */}
            <SubSection id="purchase-requisition">
                <SubSectionHeader>2.1 Purchase Requisition Process</SubSectionHeader>
                <Paragraph className="mb-6">Strategic procurement at SS+ begins with a formal Purchase Requisition (PR) to ensure all expenditures are tracked, justified, and authorized before commitment.</Paragraph>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                    <Blockquote title="Mandatory PR For:" type="danger">
                         <List>
                            <ListItem>✅ All inventory items (FEQ, PPE, Workwear, Materials)</ListItem>
                            <ListItem>✅ All purchases above <strong>1,000 TND</strong></ListItem>
                            <ListItem>✅ New suppliers (even for small amounts)</ListItem>
                            <ListItem>✅ Import purchases & Custom products</ListItem>
                            <ListItem>✅ Capital equipment (Tools, Machinery, Vehicles)</ListItem>
                        </List>
                        <div className="mt-4 pt-4 border-t border-red-200 dark:border-red-900/30">
                             <h6 className="text-xs font-bold text-red-700 dark:text-red-400 uppercase mb-2">❌ PR Not Required For:</h6>
                             <p className="text-sm text-red-600 dark:text-red-400">Petty cash (&lt;100 TND), Utilities (Elec/Water/Phone), Emergency materials (&lt;500 TND with retro approval).</p>
                        </div>
                    </Blockquote>

                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                        <h6 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-4 tracking-wider border-b border-slate-200 dark:border-slate-700 pb-2">Initiation Authority</h6>
                        <Table headers={["Position", "Limit", "Example"]}>
                            <TableRow>
                                <TableCell>Warehouse Responsible</TableCell>
                                <TableCell className="font-bold">5,000 TND</TableCell>
                                <TableCell>Stock replenishment</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Team Leaders</TableCell>
                                <TableCell className="font-bold">2,000 TND</TableCell>
                                <TableCell>Service parts, tools</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Operations Responsible</TableCell>
                                <TableCell className="font-bold">10,000 TND</TableCell>
                                <TableCell>Major repairs, bulk</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sales Reps</TableCell>
                                <TableCell className="font-bold">1,000 TND</TableCell>
                                <TableCell>Customer items, samples</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Technicians</TableCell>
                                <TableCell className="font-bold">500 TND</TableCell>
                                <TableCell>Immediate service needs</TableCell>
                            </TableRow>
                        </Table>
                        <p className="mt-4 text-xs text-slate-500 text-center uppercase">Any employee can request higher amounts via escalation</p>
                    </div>
                </div>

                <div className="space-y-4 my-8">
                    <h6 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-2">5-Step Requisition Protocol</h6>
                    {[
                        { s: "STEP 1", t: "Verify Need & Check Stock", c: "Check WAVE PLUS inventory module. Confirm genuine need (Order vs. Reorder point). Verify items aren't already on order." },
                        { s: "STEP 2", t: "Complete PR Form", c: "Provide product code, quantity, estimated price, and justification (Customer ref/Urgency). Suggest suppliers if known." },
                        { s: "STEP 3", t: "Submit for Approval", c: "Preferred: Electronic via WAVE PLUS. Alternatives: Email scan or Physical (Urgent only). Wed 17:00 deadline for weekly cycle." },
                        { s: "STEP 4", t: "Approval Workflow", c: "Level 1 (Dept Technical) → Level 2 (Commercial/Najla) → Level 3 (Mgmt for high value) → Finance (Budget check)." },
                        { s: "STEP 5", t: "PO Creation", c: "Once approved, Purchase Responsible creates formal PO, assigns number, and notifies stock receiving department." },
                    ].map((step, i) => (
                        <div key={i} className="flex gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                            <div className="text-lg font-bold text-slate-400 shrink-0">{step.s}</div>
                            <div>
                                <h6 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-1">{step.t}</h6>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.c}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SubSection>

            {/* 2.2 Approval Workflow */}
            <SubSection id="approval-workflow">
                <SubSectionHeader>2.2 Approval Workflow & Authority Limits</SubSectionHeader>
                <Paragraph className="mb-6">Per Company Manual Document 01, clear authority thresholds ensure financial control while maintaining operational speed.</Paragraph>

                <div className="mb-8">
                    <h6 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-4">Approval Authority Matrix</h6>
                    <Table headers={["Value Range", "Primary Approver", "Secondary Approval", "Notes"]}>
                        <TableRow>
                            <TableCell className="font-bold text-secondary-600">Up to 500 TND</TableCell>
                            <TableCell>Team Leader / Whse Resp.</TableCell>
                            <TableCell><span className="text-slate-400">None</span></TableCell>
                            <TableCell>Routine supplies, emergency parts</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold text-secondary-600">501 - 1,000 TND</TableCell>
                            <TableCell>Operations Responsible</TableCell>
                            <TableCell><span className="text-slate-400">None</span></TableCell>
                            <TableCell>Service equip, tools</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold text-secondary-600">1,001 - 5,000 TND</TableCell>
                            <TableCell>Purchase Resp. (Najla)</TableCell>
                            <TableCell><span className="text-slate-400">None</span></TableCell>
                            <TableCell>Standard inventory, bulk supplies</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold text-secondary-600">5,001 - 20,000 TND</TableCell>
                            <TableCell>Purchase Resp. (Najla)</TableCell>
                            <TableCell>Manager Notification</TableCell>
                            <TableCell>Large inventory purchases</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold text-secondary-600">Above 20,000 TND</TableCell>
                            <TableCell>Purchase Resp. (Najla)</TableCell>
                            <TableCell>Manager/Co-Manager</TableCell>
                            <TableCell>Capital equipment, major stock</TableCell>
                        </TableRow>
                    </Table>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <Blockquote title="Delegation Rules">
                         <List>
                            <ListItem>Authority can be delegated in writing for specific periods (Max 30 days).</ListItem>
                            <ListItem>Higher authority levels automatically include all lower-level approval rights.</ListItem>
                            <ListItem>Emergency overrides are reserved for Managers/Co-Managers only.</ListItem>
                            <ListItem><strong>Special Cases:</strong> New suppliers, Imports, and Hazardous materials REQUIRE Purchase Responsible approval regardless of amount.</ListItem>
                         </List>
                    </Blockquote>
                    
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col justify-center">
                        <h6 className="text-xs font-bold text-slate-500 uppercase mb-4 text-center">Process Flow Logic</h6>
                        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
                            <div className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">Request</div>
                            <div className="text-slate-400">→</div>
                            <div className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm text-primary-600">Technical Review</div>
                            <div className="text-slate-400">→</div>
                            <div className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm text-secondary-600">Commercial Review</div>
                            <div className="text-slate-400">→</div>
                            <div className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm text-emerald-600">PO Placed</div>
                        </div>
                    </div>
                </div>
            </SubSection>

            {/* 2.3 Supplier Selection & POs */}
            <SubSection id="supplier-po">
                <SubSectionHeader>2.3 Supplier Selection & Purchase Orders</SubSectionHeader>
                <Paragraph className="mb-6">Strategic vendors are scored against a 100-point performance benchmark. Minimum pass threshold is <strong>70/100 points</strong> for active status.</Paragraph>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h6 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">Scoring Weightage Matrix</h6>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-center">
                                <span className="block text-2xl mb-2">💎</span>
                                <span className="text-lg font-bold text-primary-600 block">40 PTS</span>
                                <span className="text-xs uppercase text-slate-500 font-bold">Quality & Certs</span>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-center">
                                <span className="block text-2xl mb-2">💰</span>
                                <span className="text-lg font-bold text-secondary-600 block">30 PTS</span>
                                <span className="text-xs uppercase text-slate-500 font-bold">Pricing & Terms</span>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-center">
                                <span className="block text-2xl mb-2">⚡</span>
                                <span className="text-lg font-bold text-emerald-600 block">20 PTS</span>
                                <span className="text-xs uppercase text-slate-500 font-bold">Svc & Speed</span>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-center">
                                <span className="block text-2xl mb-2">🤝</span>
                                <span className="text-lg font-bold text-indigo-600 block">10 PTS</span>
                                <span className="text-xs uppercase text-slate-500 font-bold">Relationship</span>
                            </div>
                        </div>
                    </div>
                    
                    <Blockquote title="Purchase Order Management">
                         <div className="space-y-4">
                            <div>
                                <strong className="block text-slate-900 dark:text-white text-sm mb-1">Creation Step:</strong>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Supplier selection (estab. vs. 3 quotes if &gt;5k TND) → PO Preparation (Prefix: PO-2025-) → Transmission (PDF via Email).</p>
                            </div>
                            <div>
                                <strong className="block text-slate-900 dark:text-white text-sm mb-1">Tracking Routine:</strong>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Day 1 Acknowledgement → Midpoint Check → T-72 Hours Delivery Confirmation → Daily Overdue Escalation.</p>
                            </div>
                            <div>
                                <strong className="block text-slate-900 dark:text-white text-sm mb-1">Special Types:</strong>
                                <p className="text-sm text-slate-600 dark:text-slate-400"><strong>Blanket POs</strong> (release schedules), <strong>Emergency POs</strong> (verbal authorized), <strong>Import POs</strong> (Incoterms & Customs).</p>
                            </div>
                        </div>
                    </Blockquote>
                </div>
            </SubSection>

            {/* 2.4 Emergency Purchasing */}
            <SubSection id="emergency-purchasing">
                <SubSectionHeader>2.4 Emergency Purchasing</SubSectionHeader>
                <Paragraph className="mb-6">Authorized ONLY for critical service disruption, safety risks, or equipment breakdown halting operations.</Paragraph>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <Blockquote title="✅ Qualifying Conditions" type="success">
                        <List>
                            <ListItem><strong>Service Disruption:</strong> Cannot complete site work without item.</ListItem>
                            <ListItem><strong>Safety Risk:</strong> Immediate hazard from equipment failure.</ListItem>
                            <ListItem><strong>Commitment:</strong> Failure to deliver on firm firm customer POC.</ListItem>
                            <ListItem><strong>Breakdown:</strong> Operational equipment failure (e.g., Service Vehicle).</ListItem>
                        </List>
                        <div className="mt-4 pt-4 border-t border-emerald-200 dark:border-emerald-900/30 text-xs text-emerald-700 dark:text-emerald-400 font-bold">
                            Authority Limit: Najla (10k), Ops Resp (5k), Team Leader (1k TND).
                        </div>
                    </Blockquote>
                    
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                        <h6 className="text-sm font-bold text-red-600 uppercase mb-6 tracking-wide border-b border-red-100 dark:border-slate-800 pb-2">The "Verbal First" Protocol</h6>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <span className="text-xs font-bold text-slate-400 uppercase w-12 pt-1">Step 1</span>
                                <p className="text-sm text-slate-700 dark:text-slate-300">Verify & document (5 mins). Confirm Normal Supply vs. Cost of Delay.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-xs font-bold text-slate-400 uppercase w-12 pt-1">Step 2</span>
                                <p className="text-sm text-slate-700 dark:text-slate-300">Contact Supplier (15 mins). Check availability & arrange payment.</p>
                            </div>
                            <div className="flex gap-4 p-2 -mx-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                <span className="text-xs font-bold text-red-500 uppercase w-12 pt-1">Step 3</span>
                                <p className="text-sm text-red-700 dark:text-red-300 font-medium">Get Verbal Approval. Document who/when/amount.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-xs font-bold text-slate-400 uppercase w-12 pt-1">Step 4</span>
                                <p className="text-sm text-slate-700 dark:text-slate-300">Place order. Confirm specs & delivery time.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-xs font-bold text-slate-400 uppercase w-12 pt-1">Step 5</span>
                                <p className="text-sm text-slate-700 dark:text-slate-300"><strong>Documentation Loophole:</strong> Formal PR & PO creation mandatory within 24 hours plus Lessons Learned report.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            {/* 2.5 Import Procedures */}
            <SubSection id="import-procedures">
                <SubSectionHeader>2.5 Import Procedures</SubSectionHeader>
                <Paragraph className="mb-6">International procurement is subject to strict CE certification audits and Tunisian Customs regulations.</Paragraph>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h6 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-4 tracking-wide border-b border-slate-200 dark:border-slate-700 pb-2">Mandatory Document Set</h6>
                        <div className="grid grid-cols-2 gap-3">
                            <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">📄 Commercial Invoice</span>
                            <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">📄 Packing List</span>
                            <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">🌍 Cert. of Origin</span>
                            <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">🇪🇺 CE Certificates</span>
                            <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">🧪 Test Reports</span>
                            <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">⚖️ Conformity Dec.</span>
                        </div>
                        <p className="mt-4 text-xs text-slate-500 font-bold border-t border-slate-200 dark:border-slate-700 pt-2">Must carry CE marking for all fire safety categories.</p>
                    </div>

                    <Blockquote title="Import Workflow">
                        <List>
                            <ListItem><strong>1. Qualification:</strong> Verify Mfg status, CE authority, and communication flow.</ListItem>
                            <ListItem><strong>2. Proforma:</strong> Confirm Incoterms (CIF/DDP), estimate landed costs.</ListItem>
                            <ListItem><strong>3. PO & Payment:</strong> L/C or Wire, shipping instructions.</ListItem>
                            <ListItem><strong>4. Shipping:</strong> Freight Forwarder liaison, customs declaration/clearance.</ListItem>
                            <ListItem><strong>5. Receiving:</strong> CE verification and Certificate acceptance filing.</ListItem>
                        </List>
                    </Blockquote>
                </div>

                    <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                         <h6 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">Landed Cost Calculation Matrix</h6>
                    </div>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableRow isHeader={true}>
                                <TableCell isHeader={true}>Component</TableCell>
                                <TableCell isHeader={true} className="text-right">Calculation Base</TableCell>
                                <TableCell isHeader={true} className="text-right">Value (EUR)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Product (FOB)</TableCell>
                                <TableCell className="text-right text-slate-500">Supplier Invoice</TableCell>
                                <TableCell className="text-right font-bold">1,000.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sea/Air Freight</TableCell>
                                <TableCell className="text-right text-slate-500">International Carrier</TableCell>
                                <TableCell className="text-right font-bold">200.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Cargo Insurance</TableCell>
                                <TableCell className="text-right text-slate-500">0.1 - 0.3% range</TableCell>
                                <TableCell className="text-right font-bold">15.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-bold text-primary-600">CIF Value</TableCell>
                                <TableCell className="text-right text-slate-500">Base for Duties</TableCell>
                                <TableCell className="text-right font-bold text-primary-600 underline">1,215.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Import Duty</TableCell>
                                <TableCell className="text-right text-slate-500">10% Average</TableCell>
                                <TableCell className="text-right font-bold">121.50</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>VAT</TableCell>
                                <TableCell className="text-right text-slate-500">19% on (Value + Duty)</TableCell>
                                <TableCell className="text-right font-bold">253.94</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Local Logistics</TableCell>
                                <TableCell className="text-right text-slate-500">Broker + Port to Whse</TableCell>
                                <TableCell className="text-right font-bold">80.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-bold text-slate-900 dark:text-white uppercase">Total Landed Cost</TableCell>
                                <TableCell className="text-right text-slate-500 italic">Real Inventory Cost</TableCell>
                                <TableCell className="text-right font-black text-slate-900 dark:text-slate-100 underline decoration-double">1,670.44</TableCell>
                            </TableRow>
                        </Table>
                    </div>
            </SubSection>

            {/* 2.6 Receiving & QC */}
            <SubSection id="receiving-qc">
                <SubSectionHeader>2.6 Receiving & Quality Control</SubSectionHeader>
                <Paragraph className="mb-6">Physical verification and certification audits are mandatory for every SKU before stock entry into WAVE PLUS.</Paragraph>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    {/* QC Standards */}
                    <Blockquote title="Incoming Inspection Standards">
                        <div className="space-y-4">
                            <div>
                                <h6 className="text-xs font-bold text-red-600 uppercase mb-1">🔥 Fire Extinguishers</h6>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Visual damage check, CE logo verification, Pressure gauge reading, CO2 weight verification. Technical certificates MUST be present.</p>
                            </div>
                            <div>
                                <h6 className="text-xs font-bold text-blue-600 uppercase mb-1">👕 PPE & Workwear</h6>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Standard compliance (EN 388 etc), Color/Sizing accuracy, Functional sample testing (Gloves/Glasses). Packaging integrity check.</p>
                            </div>
                            <div>
                                <h6 className="text-xs font-bold text-emerald-600 uppercase mb-1">🧪 Raw Materials</h6>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Seal verification (No clumping), Correct Lot IDs, Certificate of Analysis review. Storage environment compatibility.</p>
                            </div>
                        </div>
                    </Blockquote>

                    <div className="flex flex-col gap-6">
                         {/* Discrepancy Protocol */}
                         <div className="p-6 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-xl">
                            <h6 className="text-sm font-bold text-red-700 dark:text-red-400 uppercase mb-4 border-b border-red-200 dark:border-red-800/30 pb-2">Non-Conforming Product (NCP)</h6>
                            <div className="space-y-3">
                                <p className="text-sm text-red-800 dark:text-red-300"><span className="font-bold">1. ISOLATE:</span> Separate and "Red Tag" immediately.</p>
                                <p className="text-sm text-red-800 dark:text-red-300"><span className="font-bold">2. DOCUMENT:</span> Photography + Status report in WAVE PLUS.</p>
                                <p className="text-sm text-red-800 dark:text-red-300"><span className="font-bold">3. RESOLVE:</span> Reject (Full ship back), Repair (If cost effective), or Discard (Last resort).</p>
                            </div>
                         </div>
                         <Blockquote title="WAVE PLUS Integration" type="info">
                             <List>
                                <ListItem>Stock levels increase ONLY on GRN confirmation.</ListItem>
                                <ListItem>Automatic location assignment based on SKU category.</ListItem>
                                <ListItem>Quality flags trigger automated supplier performance scores.</ListItem>
                             </List>
                         </Blockquote>
                    </div>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl my-8 shadow-sm">
                    <h6 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-6 text-center border-b border-slate-200 dark:border-slate-700 pb-2">Sample Testing Frequency</h6>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="text-2xl font-bold text-red-600">100%</div>
                            <div className="text-xs text-slate-500 uppercase font-bold mt-1">New Suppliers</div>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="text-2xl font-bold text-primary-600">10%</div>
                            <div className="text-xs text-slate-500 uppercase font-bold mt-1">Est. Suppliers</div>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="text-2xl font-bold text-secondary-600">100%</div>
                            <div className="text-xs text-slate-500 uppercase font-bold mt-1">Suspected Issues</div>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="text-2xl font-bold text-emerald-600">SPOT</div>
                            <div className="text-xs text-slate-500 uppercase font-bold mt-1">Customer Complaints</div>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

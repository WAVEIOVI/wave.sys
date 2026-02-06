import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Blockquote from '../../../components/document-elements/Blockquote';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const abcData = [
    { category: 'Class A (Critical)', itemCount: 150, totalValue: 450000, color: '#f43f5e', description: '~20% Items | ~80% Value' },
    { category: 'Class B (Standard)', itemCount: 450, totalValue: 350000, color: '#f59e0b', description: '~30% Items | ~15% Value' },
    { category: 'Class C (Bulk)', itemCount: 900, totalValue: 100000, color: '#10b981', description: '~50% Items | ~5% Value' }
];

const StockIndicator = ({ level, reorderPoint, label }: { level: number; reorderPoint: number; label: string }) => {
    const status = level > reorderPoint ? 'in-stock' : level > 0 ? 'low' : 'out';
    const statusConfig = {
        'in-stock': { color: 'bg-emerald-500', text: 'Healthy', labelColor: 'text-emerald-600' },
        'low': { color: 'bg-orange-500', text: 'Reorder', labelColor: 'text-orange-600' },
        'out': { color: 'bg-rose-500', text: 'Critical', labelColor: 'text-rose-600' }
    };
    const config = statusConfig[status];
    const percentage = Math.min((level / (reorderPoint * 2)) * 100, 100);

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold uppercase text-slate-500">{label}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${config.color} text-white`}>{config.text}</span>
            </div>
            <div className="flex items-end gap-2 mb-2">
                <span className="text-xl font-bold text-slate-900 dark:text-white">{level}</span>
                <span className="text-xs text-slate-400 mb-1">Units</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
                <div className={`${config.color} h-full transition-all duration-500`} style={{ width: `${percentage}%` }}></div>
            </div>
            <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-400">ROP: {reorderPoint}</span>
                <span className={config.labelColor}>{Math.round(percentage)}% Cap</span>
            </div>
        </div>
    );
};

export default function InventoryControl() {
    return (
        <Section id="section-4">
            <SectionHeader>SECTION 4: INVENTORY CONTROL</SectionHeader>

            {/* 4.1 Stock Level Management */}
            <SubSection id="min-max-system">
                <SubSectionHeader>4.1 Stock Level Management (MIN/MAX System)</SubSectionHeader>
                <Paragraph className="mb-6">Visual monitoring of critical SKUs and real-time reorder point (ROP) tracking via WAVE PLUS.</Paragraph>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <StockIndicator label="6KG ABC Powder" level={124} reorderPoint={50} />
                    <StockIndicator label="2KG CO2 Ext." level={18} reorderPoint={40} />
                    <StockIndicator label="Safety Seals (G)" level={850} reorderPoint={200} />
                    <StockIndicator label="Brass Valve A1" level={0} reorderPoint={15} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <Blockquote title="Core Definitions">
                         <div className="space-y-4">
                            <div>
                                <span className="text-xs font-bold uppercase text-slate-900 dark:text-white">Minimum (Min):</span>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Minimum stock level before reorder. Stock must <strong>not</strong> routinely fall below Min.</p>
                            </div>
                            <div>
                                <span className="text-xs font-bold uppercase text-slate-900 dark:text-white">Maximum (Max):</span>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Target upper level after replenishment. Avoid overstocking beyond Max.</p>
                            </div>
                            <div>
                                <span className="text-xs font-bold uppercase text-slate-900 dark:text-white">Reorder Point (ROP):</span>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Stock level at which a replenishment order <strong>must</strong> be placed.</p>
                            </div>
                         </div>
                    </Blockquote>
                    
                    <Blockquote title="Exact Reorder Formulas" type="info">
                        <div className="space-y-4">
                            <div>
                                <div className="text-xs font-bold uppercase mb-1 text-slate-500">Reorder Point (ROP)</div>
                                <div className="bg-slate-100 dark:bg-slate-900 px-4 py-3 rounded-lg font-mono text-xs">
                                    ROP = (Avg Daily Demand × Lead Time) + Safety Stock
                                </div>
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase mb-1 text-slate-500">Safety Stock (Target)</div>
                                <div className="bg-slate-100 dark:bg-slate-900 px-4 py-3 rounded-lg font-mono text-xs">
                                    Safety Stock = Avg Daily Demand × (Max LT − Avg LT)
                                </div>
                                <p className="text-xs text-slate-500 mt-1">Buffer: 3–7 days of demand for A‑items; adjust by criticality.</p>
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase mb-1 text-slate-500">EOQ (Economic Order Quantity)</div>
                                <div className="bg-slate-100 dark:bg-slate-900 px-4 py-3 rounded-lg font-mono text-xs">
                                    EOQ = √(2 × Annual Demand × Order Cost ÷ Holding Cost)
                                </div>
                            </div>
                        </div>
                    </Blockquote>
                </div>
            </SubSection>

            {/* 4.2 ABC Classification */}
            <SubSection id="abc-classification">
                <SubSectionHeader>4.2 ABC Inventory Classification</SubSectionHeader>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-6 text-center">Inventory Value vs Volume (ABC)</h5>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={abcData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                                    <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 600 }} />
                                    <YAxis yAxisId="left" orientation="left" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} label={{ value: 'Item Count', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: '#94a3b8' } }} />
                                    <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} label={{ value: 'Value (TND)', angle: 90, position: 'insideRight', style: { fontSize: 10, fill: '#94a3b8' } }} />
                                    <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} itemStyle={{ color: '#fff', fontSize: '11px' }} />
                                    <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '10px', fontWeight: 600 }} />
                                    <Bar yAxisId="left" dataKey="itemCount" name="Item Count" radius={[4, 4, 0, 0]}>
                                        {abcData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} opacity={0.3} />)}
                                    </Bar>
                                    <Bar yAxisId="right" dataKey="totalValue" name="Total Value (TND)" radius={[4, 4, 0, 0]}>
                                        {abcData.map((entry, index) => <Cell key={`cell-v-${index}`} fill={entry.color} />)}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Blockquote type="danger" title="Class A - High Value / High Turnover">
                            <p className="text-sm">~20% SKUs, ~80% Value. Tight control; Weekly counts. Safety stock buffer: Max.</p>
                        </Blockquote>
                         <Blockquote type="warning" title="Class B - Moderate Status">
                            <p className="text-sm">~30% SKUs, ~15% Value. Regular review; Monthly counts. Systematic Min/Max.</p>
                        </Blockquote>
                         <Blockquote type="success" title="Class C - Low Value / Bulk">
                            <p className="text-sm">~50% SKUs, ~5% Value. Periodic review; Quarterly counts. Simple bulk reorder.</p>
                        </Blockquote>
                    </div>
                </div>
            </SubSection>

            {/* 4.3 Demand Forecasting */}
            <SubSection id="demand-forecasting">
                <SubSectionHeader>4.3 Demand Forecasting & Reorder Points</SubSectionHeader>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8">
                    <Blockquote title="Analysis Sources">
                        <List>
                            <ListItem><strong>WAVE PLUS 3/12 Mo:</strong> Automated rolling averages for baseline demand.</ListItem>
                            <ListItem><strong>Seasonality Adjust:</strong> Manual peaks for winter/summer safety contract renewals.</ListItem>
                            <ListItem><strong>New Products:</strong> Proxy-data from "Similar Product" history until 6-month maturity.</ListItem>
                        </List>
                    </Blockquote>
                    
                    <div className="lg:col-span-2 p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h4 className="font-bold text-sm uppercase text-slate-500 mb-4">Dynamic ROP Maintenance</h4>
                        <Paragraph className="mb-6">Reorder Points are <strong>organic</strong>, not static. They must be audited quarterly (every 90 days) to reflect real-world supply chain shifts.</Paragraph>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg">
                                <span className="text-xs font-bold text-secondary-600 uppercase block mb-1">Trigger 1</span>
                                <span className="text-sm font-bold">Demand Shift &gt; 10%</span>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg">
                                <span className="text-xs font-bold text-primary-600 uppercase block mb-1">Trigger 2</span>
                                <span className="text-sm font-bold">Lead Time &gt; 5 Days</span>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            {/* 4.4 Physical Inventory */}
            <SubSection id="physical-inventory">
                <SubSectionHeader>4.4 Physical Inventory Procedures</SubSectionHeader>
                <Paragraph className="mb-6">Full site shutdown count required at least once per year (Year-End) or following major discrepancy audits.</Paragraph>

                <div className="space-y-6 my-8">
                    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h5 className="font-bold text-primary-600 mb-2">Phase 1: PRE-COUNT (Logistics & Housekeeping)</h5>
                        <List>
                            <ListItem><strong>Announce & Freeze:</strong> Stop all picks/receipts.</ListItem>
                            <ListItem><strong>Prepare Tools:</strong> Clear open GRNs; print sheets by location.</ListItem>
                            <ListItem><strong>Housekeeping:</strong> Segregate damaged/obsolete stock.</ListItem>
                        </List>
                    </div>
                    
                    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h5 className="font-bold text-primary-600 mb-2">Phase 2: COUNT DAY (The Blind Counting Protocol)</h5>
                        <List>
                            <ListItem><strong>Execute Blind Count:</strong> Counter records qty only (no system data visible).</ListItem>
                            <ListItem><strong>Two-Person Verification:</strong> Mandatory for Class A and High-Value items.</ListItem>
                            <ListItem><strong>Collect & Verify:</strong> Ensure 100% location coverage before completion.</ListItem>
                        </List>
                    </div>
                    
                    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h5 className="font-bold text-primary-600 mb-2">Phase 3: POST-COUNT (Reconciliation & Sign-Off)</h5>
                        <List>
                            <ListItem><strong>Reconcile:</strong> Compare WAVE PLUS vs. Physical; document variances.</ListItem>
                            <ListItem><strong>Approve Adjustments:</strong> Warehouse Responsible + Manager authority.</ListItem>
                            <ListItem><strong>Final Sign-Off:</strong> Post adjustments and retain signed report for audit.</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            {/* 4.5 Cycle Counting */}
            <SubSection id="cycle-counting">
                <SubSectionHeader>4.5 Cycle Counting (Continuous Verification)</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                    <Blockquote title="ABC Frequency Mandate">
                        <div className="space-y-3 mt-2">
                            <div className="flex justify-between items-center bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                                <span className="text-sm font-bold text-rose-500">Class A Items</span>
                                <span className="text-xs font-bold text-slate-500 uppercase">Weekly / Bi-Weekly</span>
                            </div>
                            <div className="flex justify-between items-center bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                                <span className="text-sm font-bold text-orange-500">Class B Items</span>
                                <span className="text-xs font-bold text-slate-500 uppercase">Monthly</span>
                            </div>
                            <div className="flex justify-between items-center bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                                <span className="text-sm font-bold text-emerald-500">Class C Items</span>
                                <span className="text-xs font-bold text-slate-500 uppercase">Quarterly</span>
                            </div>
                        </div>
                    </Blockquote>
                    
                    <div className="p-6 bg-slate-900 text-white rounded-xl border border-slate-800">
                        <h5 className="font-bold text-secondary-400 uppercase mb-4 text-sm border-b border-slate-700 pb-2">The Cycle Count Loop</h5>
                        <List className="text-slate-300 space-y-2">
                            <ListItem><span className="text-white font-bold">1. Select:</span> Generate WAVE PLUS list based on ABC frequency and recent moves.</ListItem>
                            <ListItem><span className="text-white font-bold">2. Count:</span> Blind count at location; record actual quantity.</ListItem>
                            <ListItem><span className="text-white font-bold">3. Reconcile:</span> Compare vs. System. Recount if variance &gt; 5% (or any for A-items).</ListItem>
                            <ListItem><span className="text-white font-bold">4. Adjust/Audit:</span> Post approved mods; investigate root cause (Mislocation/Picking error).</ListItem>
                            <ListItem><span className="text-white font-bold">5. Record:</span> Log date, SKU, variance, and corrective action in Process Audit Log.</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            {/* 4.6 Slow-Moving & Obsolete */}
            <SubSection id="slow-moving-obsolete">
                <SubSectionHeader>4.6 Slow-Moving & Obsolete Stock Management</SubSectionHeader>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <Blockquote title="Condition Indicators">
                        <div className="space-y-4">
                            <div>
                                <span className="text-amber-600 font-bold text-sm block mb-1">Slow-Moving Status</span>
                                <p className="text-sm text-slate-600 dark:text-slate-400">No issue in 12 months OR Stock Level &gt; 12 months supply. Quarterly review mandatory.</p>
                            </div>
                            <div>
                                <span className="text-red-600 font-bold text-sm block mb-1">Obsolete Status</span>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Superseded models, discontinued specifications, or expired chemical chemical dates.</p>
                            </div>
                        </div>
                    </Blockquote>
                    
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                         <h5 className="font-bold text-slate-900 dark:text-white uppercase mb-4 text-sm">Standard Actions</h5>
                         <List>
                            <ListItem><span className="text-emerald-600 font-bold">PROMOTIONS:</span> Discount or bundle slow-moving units into large projects.</ListItem>
                            <ListItem><span className="text-amber-600 font-bold">QUARANTINE:</span> Immediately segregate obsolete stock; zero pick-rate.</ListItem>
                            <ListItem><span className="text-red-600 font-bold">WRITE-OFF:</span> Approved scrap/donations. Post to financial records quarterly.</ListItem>
                            <ListItem><span className="text-slate-600 font-bold">PREVENT:</span> Align purchasing with actual contract renewals; zero speculative ordering.</ListItem>
                         </List>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

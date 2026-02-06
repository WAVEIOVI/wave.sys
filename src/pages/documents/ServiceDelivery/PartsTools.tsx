
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import { motion } from 'framer-motion';
import { 
    Package, Gauge, Tag, ShieldCheck, FileText, AlertTriangle,
    Calendar, CalendarCheck, ClipboardList, Truck, Box, Droplets,
    Wind, RefreshCw, CheckCircle2, ArrowRight, Settings, Wrench,
    Scale, Clock, Users, Eye, Target, Zap, Archive, Layers,
    Shield, Activity, BarChart3, TrendingUp,
    DollarSign, AlertCircle, Search, Clipboard, Check
} from 'lucide-react';



export default function PartsTools() {
    return (
        <div className="space-y-12">
            <Section id="section-6">
                <SectionHeader>SECTION 6: PARTS & MATERIALS MANAGEMENT</SectionHeader>

                <SubSection id="vehicle-stock-management">
                    <SubSectionHeader>6.1 VEHICLE STOCK MANAGEMENT</SubSectionHeader>
                    <div className="space-y-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-5 bg-gradient-to-r from-primary-50 to-white dark:from-primary-950/30 dark:to-slate-900 border border-primary-100 dark:border-primary-900/30 rounded-2xl flex items-center gap-4"
                        >
                            <div className="p-3 bg-primary-100 dark:bg-primary-900/40 rounded-xl text-primary-600">
                                <Truck className="w-6 h-6" />
                            </div>
                            <Paragraph className="text-slate-600 dark:text-slate-300 font-medium mb-0">
                                Every service vehicle must carry the <strong className="text-primary-600">standard stock list</strong> to ensure first-visit resolution of customer issues.
                            </Paragraph>
                        </motion.div>

                        {/* Standard Vehicle Stock List */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary-500/10 transition-colors duration-700"></div>
                            
                            <div className="flex items-center justify-center gap-3 mb-10 relative z-10">
                                <span className="p-2.5 bg-primary-100 dark:bg-primary-900/40 rounded-xl text-primary-600 shadow-lg shadow-primary-500/10">
                                    <Package className="w-5 h-5" />
                                </span>
                                <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-widest">Standard Vehicle Stock List</h4>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                                {[
                                    {
                                        title: "A. REFILLING MATERIALS",
                                        icon: Droplets,
                                        color: "primary",
                                        items: [
                                            { label: "ABC Powder", desc: "40% grade (50kg min), 30/60% (20kg)" },
                                            { label: "CO2", desc: "Small cylinders or source access" },
                                            { label: "Foam", desc: "AFFF concentrate (5L)" },
                                            { label: "Water", desc: "Additive (2L)" }
                                        ]
                                    },
                                    {
                                        title: "B. SPARE PARTS",
                                        icon: Settings,
                                        color: "primary",
                                        items: [
                                            { label: "Gauges", desc: "0-25 bar (3pcs), 0-200 bar (1pc)" },
                                            { label: "Hoses", desc: "Powder (2m), CO2 w/ horn (1pc)" },
                                            { label: "Seals/O-Rings", desc: "Assorted sizes (10-20pcs)" },
                                            { label: "Nozzles/Pins", desc: "Various sizes (2-20pcs)" },
                                            { label: "Valve", desc: "Stems and Springs (2-3pcs)" }
                                        ]
                                    },
                                    {
                                        title: "C. CONSUMABLES",
                                        icon: Tag,
                                        color: "primary",
                                        items: [
                                            { label: "Tags", desc: "SS+ Service Tags (50pcs min)" },
                                            { label: "Seals", desc: "Branded Tamper Seals (50pcs min)" },
                                            { label: "Labels", desc: "Hazard and Instruction (replacement)" },
                                            { label: "Cleaning", desc: "Rags, brushes, solution" }
                                        ]
                                    },
                                    {
                                        title: "E. SAFETY PPE",
                                        icon: ShieldCheck,
                                        color: "secondary",
                                        items: [
                                            { label: "Personal", desc: "Glasses, work/chem gloves, masks (5)" },
                                            { label: "Site", desc: "Hard hats, High-vis vests, safety boots" },
                                            { label: "Hearing", desc: "1 set ear protection" }
                                        ]
                                    },
                                    {
                                        title: "F. DOCUMENTATION",
                                        icon: FileText,
                                        color: "secondary",
                                        items: [
                                            { label: "Digital", desc: "Tablet/Phone (100% charged)" },
                                            { label: "Backup", desc: "20 sets paper forms" },
                                            { label: "Tools", desc: "Pens, markers, clipboard, calculator" }
                                        ]
                                    },
                                    {
                                        title: "G. EMERGENCY",
                                        icon: AlertTriangle,
                                        color: "secondary",
                                        items: [
                                            { label: "First Aid", desc: "Basic kit (antiseptic, etc.)" },
                                            { label: "Vehicle Ext", desc: "6kg ABC minimum" },
                                            { label: "Spill", desc: "Absorption pads and contact card" }
                                        ]
                                    }
                                ].map((category, idx) => (
                                    <motion.div 
                                        key={idx}
                                        whileHover={{ y: -4 }}
                                        className={`p-6 bg-gradient-to-br from-${category.color}-50/50 to-white dark:from-slate-900 dark:to-slate-900/50 border border-${category.color}-100 dark:border-${category.color}-900/30 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-${category.color}-500/5`}
                                    >
                                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                                            <category.icon className={`w-4 h-4 text-${category.color}-500`} />
                                            <h5 className={`font-black text-xs text-${category.color}-600 uppercase tracking-wide`}>{category.title}</h5>
                                        </div>
                                        <div className="space-y-3">
                                            {category.items.map((item, i) => (
                                                <div key={i} className="flex items-start gap-2 text-[11px]">
                                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${category.color}-400 flex-shrink-0`}></span>
                                                    <div>
                                                        <strong className="text-slate-700 dark:text-slate-200">{item.label}:</strong>
                                                        <span className="text-slate-500 ml-1">{item.desc}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Monitoring & Triggers */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-5">
                                    <BarChart3 className="w-24 h-24" />
                                </div>
                                <div className="flex items-center gap-3 mb-8 relative z-10">
                                    <span className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400">
                                        <Activity className="w-5 h-5" />
                                    </span>
                                    <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide">Stock Level Monitoring</h4>
                                </div>
                                <div className="space-y-6 relative z-10">
                                    {[
                                        { code: "DAY", icon: Calendar, title: "Daily Check (Technician)", desc: "Verify stock levels at start of day; report low items to Team Leader.", color: "emerald" },
                                        { code: "WK", icon: CalendarCheck, title: "Weekly Inventory (Team Leader)", desc: "Physical count vs. usage logs; plan restocking for upcoming jobs.", color: "blue" },
                                        { code: "MO", icon: ClipboardList, title: "Monthly Audit (Ops)", desc: "Verify consistency across fleet; check for expired stock; adjust standard levels.", color: "purple" }
                                    ].map((item, i) => (
                                        <motion.div 
                                            key={i}
                                            whileHover={{ x: 4 }}
                                            className="flex gap-4 p-4 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all"
                                        >
                                            <div className={`w-12 h-12 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-900/20 border border-${item.color}-100 dark:border-${item.color}-900/30 flex items-center justify-center flex-shrink-0`}>
                                                <item.icon className={`w-5 h-5 text-${item.color}-500`} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">{item.title}</p>
                                                <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-950 relative"
                            >
                                <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-amber-50 to-white dark:from-amber-950/20 dark:to-slate-950">
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="p-2 bg-amber-100 dark:bg-amber-900/40 rounded-xl text-amber-600">
                                            <AlertCircle className="w-5 h-5" />
                                        </span>
                                        <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide">Minimum Stock Levels (Trigger)</h4>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <Table>
                                        <TableRow isHeader>
                                            <TableCell isHeader>Item</TableCell>
                                            <TableCell isHeader>Min Level</TableCell>
                                            <TableCell isHeader>Restock To</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><span className="font-bold text-[11px]">ABC Powder 40%</span></TableCell>
                                            <TableCell><span className="text-red-500 font-bold">20kg</span></TableCell>
                                            <TableCell><span className="text-emerald-500 font-bold">50kg</span></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><span className="font-bold text-[11px]">Pressure Gauges</span></TableCell>
                                            <TableCell><span className="text-red-500 font-bold">2 pcs</span></TableCell>
                                            <TableCell><span className="text-emerald-500 font-bold">5 pcs</span></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><span className="font-bold text-[11px]">O-Rings/Seals</span></TableCell>
                                            <TableCell><span className="text-red-500 font-bold">5 pcs</span></TableCell>
                                            <TableCell><span className="text-emerald-500 font-bold">20 pcs</span></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><span className="font-bold text-[11px]">Service Tags / Seals</span></TableCell>
                                            <TableCell><span className="text-red-500 font-bold">10 pcs</span></TableCell>
                                            <TableCell><span className="text-emerald-500 font-bold">50 pcs</span></TableCell>
                                        </TableRow>
                                    </Table>
                                    <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-950/30 rounded-2xl border border-primary-100 dark:border-primary-900/30 flex items-center justify-center gap-2">
                                        <Zap className="w-4 h-4 text-primary-500" />
                                        <p className="text-[11px] text-primary-600 font-bold uppercase tracking-wide">When minimum reached → Request restocking SAME DAY</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SubSection>

                <SubSection id="refilling-inventory">
                    <SubSectionHeader>6.2 REFILLING MATERIALS INVENTORY</SubSectionHeader>
                    <div className="space-y-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            <div className="flex items-center justify-center gap-3 mb-10 relative z-10">
                                <span className="p-2.5 bg-primary-900/50 rounded-xl text-primary-400 shadow-lg">
                                    <Archive className="w-5 h-5" />
                                </span>
                                <h4 className="text-sm font-black text-white uppercase tracking-widest">Workshop/Warehouse Storage</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                                {[
                                    { icon: Wind, title: "ABC Powder", desc: "30%, 40%, 60% grades. Dry, cool area. 500kg min stock. Shelf life: 5+ years sealed." },
                                    { icon: Gauge, title: "CO2 Supply", desc: "Air Liquide cylinders/tank. Safety regulations per Tunisia gas standards. 50-100 refill capacity." },
                                    { icon: Droplets, title: "Foam (AFFF)", desc: "3% and 6% concentrations. 50L min stock. Avoid freezing. 5 year typical shelf life." }
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        whileHover={{ y: -4 }}
                                        className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary-500/30 transition-all hover:bg-white/10"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <item.icon className="w-4 h-4 text-primary-400" />
                                            <h5 className="text-primary-400 font-black text-xs uppercase">{item.title}</h5>
                                        </div>
                                        <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-lg relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <ShieldCheck className="w-24 h-24" />
                                </div>
                                <div className="flex items-center gap-3 mb-6 relative z-10">
                                    <span className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-600">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </span>
                                    <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide">Material Quality Control</h4>
                                </div>
                                <div className="space-y-3 relative z-10">
                                    {[
                                        "Verify CE certification on all incoming material",
                                        "Check expiry dates - Reject short-dated stock",
                                        "Inspect packaging for leaks or contamination",
                                        "Visual flow test for powder before issuance",
                                        "FIFO (First-In, First-Out) rotation mandatory",
                                        "Maintain SDS (Safety Data Sheets) access"
                                    ].map((item, i) => (
                                        <motion.div 
                                            key={i}
                                            whileHover={{ x: 4 }}
                                            className="flex gap-3 items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors"
                                        >
                                            <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                            <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-inner"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600">
                                        <Layers className="w-5 h-5" />
                                    </span>
                                    <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide">Storage Conditions</h4>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { label: "TEMPERATURE", value: "Cool area, avoid extremes" },
                                        { label: "HUMIDITY", value: "Keep powder dry to prevent clumping" },
                                        { label: "ORGANIZATION", value: "Labeled clearly by type, grade, and date" },
                                        { label: "INSPECTION", value: "Monthly checks for deterioration" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800">
                                            <span className="text-[10px] font-black text-blue-600 min-w-[100px] uppercase">{item.label}</span>
                                            <span className="text-[11px] text-slate-500">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SubSection>

                <SubSection id="spare-parts-inventory">
                    <SubSectionHeader>6.3 SPARE PARTS INVENTORY</SubSectionHeader>
                    <div className="space-y-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-5 bg-gradient-to-r from-secondary-50 to-white dark:from-secondary-950/30 dark:to-slate-900 border border-secondary-100 dark:border-secondary-900/30 rounded-2xl flex items-center gap-4"
                        >
                            <div className="p-3 bg-secondary-100 dark:bg-secondary-900/40 rounded-xl text-secondary-600">
                                <Settings className="w-6 h-6" />
                            </div>
                            <Paragraph className="text-slate-600 dark:text-slate-300 font-medium mb-0">
                                Maintain adequate stock levels to prevent service delays. Use <strong className="text-secondary-600">WAVE PLUS</strong> data to forecast demand.
                            </Paragraph>
                        </motion.div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                className="p-8 bg-gradient-to-br from-primary-50 to-white dark:from-slate-900 dark:to-slate-950 border-2 border-primary-100 dark:border-primary-900/50 rounded-[2.5rem] shadow-lg"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="p-2 bg-primary-100 dark:bg-primary-900/40 rounded-xl text-primary-600">
                                        <Box className="w-5 h-5" />
                                    </span>
                                    <h5 className="font-black text-sm uppercase text-primary-600 tracking-wide">Parts Sourcing</h5>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { label: "OEM Preferred", desc: "Use original manufacturer parts for reliability." },
                                        { label: "Aftermarket", desc: "Acceptable if CE certified and approved." },
                                        { label: "Supplier Mix", desc: "Combine fast local delivery with volume international orders." },
                                        { label: "Approved List", desc: "Only order from vetted SS+ suppliers." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2 text-[11px]">
                                            <ArrowRight className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <strong className="text-slate-700 dark:text-slate-200">{item.label}:</strong>
                                                <span className="text-slate-500 ml-1">{item.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-lg"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400">
                                        <TrendingUp className="w-5 h-5" />
                                    </span>
                                    <h5 className="font-black text-sm uppercase text-slate-700 dark:text-slate-200 tracking-wide">Stock Level Logic</h5>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { label: "Fast-Moving", desc: "Higher stock levels for gauges, seals, and pins.", color: "emerald" },
                                        { label: "Slow-Moving", desc: "Order as needed for specialized valves or large components.", color: "amber" },
                                        { label: "Critical", desc: "NEVER run out of mandatory compliance parts (Tags, Seals, Gauges).", color: "red" }
                                    ].map((item, i) => (
                                        <div key={i} className={`p-4 bg-${item.color}-50 dark:bg-${item.color}-950/20 rounded-xl border border-${item.color}-100 dark:border-${item.color}-900/30`}>
                                            <span className={`text-xs font-black text-${item.color}-600 block mb-1`}>{item.label}</span>
                                            <span className="text-[11px] text-slate-500">{item.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SubSection>

                <SubSection id="stock-usage-recording">
                    <SubSectionHeader>6.4 STOCK USAGE RECORDING</SubSectionHeader>
                    <div className="space-y-12">
                        {/* Why Record Usage? */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-inner relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <BarChart3 className="w-32 h-32" />
                            </div>
                            <div className="flex items-center justify-center gap-3 mb-10 relative z-10">
                                <span className="p-2.5 bg-emerald-100 dark:bg-emerald-900/40 rounded-xl text-emerald-600 shadow-lg shadow-emerald-500/10">
                                    <Clipboard className="w-5 h-5" />
                                </span>
                                <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-widest">Why We Record Every Part</h4>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
                                {[
                                    { t: "INVENTORY", d: "Real-time Accuracy", icon: Package },
                                    { t: "COSTING", d: "Job Profitability", icon: DollarSign },
                                    { t: "BILLING", d: "Precise Invoicing", icon: FileText },
                                    { t: "ORDERING", d: "Auto-Reorder Triggers", icon: RefreshCw },
                                    { t: "TRENDS", d: "Demand Forecasting", icon: TrendingUp },
                                    { t: "LOSS PREV", d: "Team Accountability", icon: Shield }
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        className="p-5 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 text-center hover:border-emerald-300 dark:hover:border-emerald-800 hover:shadow-lg transition-all"
                                    >
                                        <div className="w-10 h-10 mx-auto mb-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-emerald-500" />
                                        </div>
                                        <div className="text-[10px] font-black text-slate-800 dark:text-slate-200 uppercase mb-1">{item.t}</div>
                                        <div className="text-[9px] text-slate-500">{item.d}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Usage Recording Process */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            <div className="flex items-center justify-center gap-3 mb-12 relative z-10">
                                <span className="p-2.5 bg-primary-100 dark:bg-primary-900/40 rounded-xl text-primary-600 shadow-lg shadow-primary-500/10">
                                    <ClipboardList className="w-5 h-5" />
                                </span>
                                <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-widest">Usage Recording Process</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                                {[
                                    { num: "1", title: "THE JOB (Tech)", items: ["Record parts in WAVE PLUS for EACH unit", "Capture powder kg, gauge count, seal usage", "Link components to serial numbers"] },
                                    { num: "2", title: "END OF DAY", items: ["Submit final daily materials usage log", "Update vehicle stock sheet (subtract usage)", "Flag restocking needs to Team Leader"] },
                                    { num: "3", title: "VERIFICATION", items: ["Team Leader reviews logs daily", "Cross-check usage vs. service report", "Batch update main inventory system"] },
                                    { num: "4", title: "ANALYSIS", items: ["Monthly physical vs. system reconciliation", "Investigate and document discrepancies", "Submit cost analysis to management"] }
                                ].map((step, i) => (
                                    <motion.div 
                                        key={i}
                                        whileHover={{ y: -4 }}
                                        className="p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="w-8 h-8 bg-primary-100 dark:bg-primary-900/40 rounded-xl flex items-center justify-center text-primary-600 font-black text-sm">
                                                {step.num}
                                            </span>
                                            <h5 className="font-black text-xs text-primary-600 uppercase tracking-wide">{step.title}</h5>
                                        </div>
                                        <div className="space-y-2">
                                            {step.items.map((item, j) => (
                                                <div key={j} className="flex items-start gap-2 text-[11px] text-slate-500">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0"></span>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </SubSection>

                <SubSection id="restocking-procedures">
                    <SubSectionHeader>6.5 RESTOCKING PROCEDURES</SubSectionHeader>
                    <div className="space-y-10">
                        {/* Vehicle Restocking Flow */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-500/5 rounded-full -ml-24 -mb-24 blur-3xl"></div>
                            <div className="flex items-center gap-3 mb-10 relative z-10">
                                <span className="p-2.5 bg-primary-900/50 rounded-xl text-primary-400 shadow-lg">
                                    <RefreshCw className="w-5 h-5" />
                                </span>
                                <h4 className="text-sm font-black text-white uppercase tracking-widest">Vehicle Restocking Flow</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                                {[
                                    { s: "STEP 1", t: "REQUEST", c: "Technician submits list via WAVE PLUS or verbally. Priority: Urgent vs Routine.", icon: FileText },
                                    { s: "STEP 2", t: "PREPARE", c: "Warehouse picks items, checks quality/expiry, and prepares issuance forms.", icon: Package },
                                    { s: "STEP 3", t: "TRANSFER", c: "Technician verify counts, signs for stock, and loads vehicle securely.", icon: Truck },
                                    { s: "STEP 4", t: "DOC", c: "Update inventory system immediately. File physical forms with Admin.", icon: Clipboard }
                                ].map((step, i) => (
                                    <motion.div 
                                        key={i}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary-500/30 hover:bg-white/10 transition-all"
                                    >
                                        <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center mb-4">
                                            <step.icon className="w-5 h-5 text-primary-400" />
                                        </div>
                                        <div className="text-[10px] font-black text-primary-400 mb-1">{step.s}</div>
                                        <div className="text-sm font-black uppercase mb-3 text-white">{step.t}</div>
                                        <p className="text-[11px] text-slate-400 leading-relaxed">{step.c}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Workshop Restocking */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-lg flex flex-col md:flex-row items-center gap-8"
                        >
                            <div className="w-full md:w-1/3">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="p-2 bg-secondary-100 dark:bg-secondary-900/40 rounded-xl text-secondary-600">
                                        <Archive className="w-5 h-5" />
                                    </span>
                                    <h6 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase">Workshop Restocking</h6>
                                </div>
                                <p className="text-xs text-slate-500 font-medium">Refilling from External Suppliers</p>
                            </div>
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-5 bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-slate-900 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                                    <div className="flex items-center gap-2 mb-2">
                                        <AlertCircle className="w-4 h-4 text-amber-500" />
                                        <strong className="text-xs text-amber-700 dark:text-amber-400 uppercase">Triggers</strong>
                                    </div>
                                    <p className="text-[11px] text-slate-600 dark:text-slate-400">Minimum warehouse level reached or special project order.</p>
                                </div>
                                <div className="p-5 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-slate-900 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                                    <div className="flex items-center gap-2 mb-2">
                                        <ArrowRight className="w-4 h-4 text-blue-500" />
                                        <strong className="text-xs text-blue-700 dark:text-blue-400 uppercase">Process</strong>
                                    </div>
                                    <p className="text-[11px] text-slate-600 dark:text-slate-400">Requisition → Approval → PO sent → Receiving/Inspecting → System entry.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </SubSection>
            </Section>

            <Section id="section-7">
                <SectionHeader>SECTION 7: EQUIPMENT & TOOLS</SectionHeader>

                <SubSection id="tool-kit">
                    <SubSectionHeader>7.1 REQUIRED EQUIPMENT PER VEHICLE</SubSectionHeader>
                    <div className="space-y-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-5 bg-gradient-to-r from-primary-50 to-white dark:from-primary-950/30 dark:to-slate-900 border border-primary-100 dark:border-primary-900/30 rounded-2xl flex items-center gap-4"
                        >
                            <div className="p-3 bg-primary-100 dark:bg-primary-900/40 rounded-xl text-primary-600">
                                <Wrench className="w-6 h-6" />
                            </div>
                            <Paragraph className="text-slate-600 dark:text-slate-300 font-medium mb-0">
                                Every service vehicle must have a <strong className="text-primary-600">complete, professional tool kit</strong>. Performance varies with the quality of tools used.
                            </Paragraph>
                        </motion.div>

                        {/* Standard Tool Kit - High Fidelity Grids */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Hand Tools */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-lg relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-5">
                                    <Wrench className="w-24 h-24" />
                                </div>
                                <div className="flex items-center gap-3 mb-8 relative z-10">
                                    <span className="p-2 bg-primary-100 dark:bg-primary-900/40 rounded-xl text-primary-600">
                                        <Wrench className="w-5 h-5" />
                                    </span>
                                    <h4 className="text-sm font-black text-primary-600 uppercase tracking-wide">A. Hand Tools</h4>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                                    <div className="space-y-3">
                                        <h5 className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase border-b border-slate-100 dark:border-slate-800 pb-2">Wrenches & Sockets</h5>
                                        <div className="space-y-2">
                                            {["Adjustable: 300mm (Large) & 200mm (Small)", "Open-end & Box Sets (8-24mm)", "Socket Set (8-32mm) with Ratchet", "Allen Key Set: Metric (2-12mm)"].map((item, i) => (
                                                <div key={i} className="flex items-start gap-2 text-[11px] text-slate-500">
                                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0"></span>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <h5 className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase border-b border-slate-100 dark:border-slate-800 pb-2">Screwdrivers & Pliers</h5>
                                        <div className="space-y-2">
                                            {["Flathead & Phillips Sets (S/M/L)", "Torx Set: T10-T40", "Combination, Needle-nose, & Vice-Grips", "Heavy-duty Wire Cutters"].map((item, i) => (
                                                <div key={i} className="flex items-start gap-2 text-[11px] text-slate-500">
                                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0"></span>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <h5 className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase mb-3">Other Essential Hand Tools</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {["Rubber Mallet", "Hacksaw + Blades", "Flat/Round Files", "Utility Knife", "Heavy Duty Scissors", "5m Tape Measure", "Small Level", "Flashlight/Torch", "Magnet Tool"].map((tool, i) => (
                                                <motion.span 
                                                    key={i}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-[10px] text-slate-600 dark:text-slate-400 font-medium hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                                                >
                                                    {tool}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Specialized Equipment */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                <div className="flex items-center gap-3 mb-8 relative z-10">
                                    <span className="p-2 bg-primary-900/50 rounded-xl text-primary-400">
                                        <Zap className="w-5 h-5" />
                                    </span>
                                    <h4 className="text-sm font-black text-primary-400 uppercase tracking-wide">B. Specialized Equipment</h4>
                                </div>
                                <div className="space-y-4 relative z-10">
                                    {[
                                        { title: "Weighing & Measuring", items: ["Digital scale (CO2): 50kg capacity; ±10g accuracy", "1L measuring cup; various funnel sets"], icon: Scale },
                                        { title: "Pressure & Refilling", items: ["Gauge Testers: Reference gauges (0-25 / 0-200 bar)", "Nitrogen: Regulator with compatible couplings", "CO2/Powder: Filling adapters, hoses, and funnels"], icon: Gauge },
                                        { title: "Testing & Electronics", items: ["Leak detection spray, smoke canister", "Test magnet, multimeter"], icon: Search }
                                    ].map((section, i) => (
                                        <motion.div 
                                            key={i}
                                            whileHover={{ x: 4 }}
                                            className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary-500/30 transition-all"
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <section.icon className="w-4 h-4 text-primary-400" />
                                                <h5 className="text-xs font-black text-white/80 uppercase">{section.title}</h5>
                                            </div>
                                            <div className="space-y-1 pl-6">
                                                {section.items.map((item, j) => (
                                                    <p key={j} className="text-[11px] text-slate-400">{item}</p>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Safety & Maintenance Grids */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-lg"
                            >
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <span className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-600">
                                        <Shield className="w-5 h-5" />
                                    </span>
                                    <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide">C. Safety Equipment</h4>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <span className="text-xs font-black text-primary-600 block mb-3 uppercase">Technician PPE</span>
                                        <div className="space-y-2">
                                            {["Safety Glasses & Leather Gloves", "Chem-resistant Gloves", "Respirator + 10 Dust Masks", "Ear plugs/muffs", "Hard hat & High-vis vest"].map((item, i) => (
                                                <div key={i} className="flex items-center gap-2 text-[11px] text-slate-500">
                                                    <ShieldCheck className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="border-l border-slate-100 dark:border-slate-800 pl-6">
                                        <span className="text-xs font-black text-primary-600 block mb-3 uppercase">Work Zone Safety</span>
                                        <div className="space-y-2">
                                            {["2 Warning Cones/Signs", "Vehicle Fire Ext (6kg ABC)", "First Aid Kit", "Absorbent Pads & Sheeting"].map((item, i) => (
                                                <div key={i} className="flex items-center gap-2 text-[11px] text-slate-500">
                                                    <AlertTriangle className="w-3 h-3 text-amber-500 flex-shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-inner"
                            >
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600">
                                        <RefreshCw className="w-5 h-5" />
                                    </span>
                                    <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide">D. Cleaning & Maintenance</h4>
                                </div>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {["20 Clean Rags", "Wire & Soft Brushes", "Cleaning Solvent", "WD-40 Lubricant", "Penetrating Oil", "Mech Grease", "Zip Ties (50)", "Duct & Elec Tape", "Waste/Parts Bags"].map((item, i) => (
                                        <motion.span 
                                            key={i}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-3 py-2 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-[11px] text-slate-600 dark:text-slate-400 font-medium shadow-sm hover:shadow-md transition-all"
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Ladders & Access */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-gradient-to-br from-primary-50 to-white dark:from-slate-900 dark:to-slate-950 border-2 border-primary-100 dark:border-primary-900/50 rounded-[2.5rem] shadow-lg flex flex-col md:flex-row gap-10 items-center"
                        >
                            <div className="w-full md:w-1/3 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                    <span className="p-3 bg-primary-100 dark:bg-primary-900/40 rounded-xl text-primary-600">
                                        <Layers className="w-6 h-6" />
                                    </span>
                                </div>
                                <h4 className="text-xl font-black text-primary-600 uppercase tracking-tight mb-2">E. Ladders & Access</h4>
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Safe Work at Height</p>
                            </div>
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h5 className="font-black text-sm text-slate-800 dark:text-slate-200 uppercase border-b-2 border-primary-500 w-fit pr-4">Specifications</h5>
                                    <div className="space-y-2">
                                        {["Step Ladder: 2m-3m (150kg rated)", "Extension: 5m (High ceilings)", "Stored securely & inspected daily"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-[11px] text-slate-500">
                                                <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                                    <div className="flex items-center gap-2 mb-3">
                                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                                        <h5 className="text-xs font-black text-amber-700 dark:text-amber-400 uppercase">Ladder Safety Rules</h5>
                                    </div>
                                    <div className="space-y-1">
                                        {["Maintain 3-point contact", "Set up on level, stable surface", "Don't overreach; Move ladder", "Second person for heavy work"].map((item, i) => (
                                            <p key={i} className="text-[11px] text-slate-600 dark:text-slate-400">{item}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Documentation & Communication */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-inner"
                        >
                            <div className="flex items-center justify-center gap-3 mb-10">
                                <span className="p-2.5 bg-secondary-100 dark:bg-secondary-900/40 rounded-xl text-secondary-600 shadow-lg shadow-secondary-500/10">
                                    <FileText className="w-5 h-5" />
                                </span>
                                <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-widest">F. Documentation & Communication</h4>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                                {[
                                    { icon: Package, t: "TABLET", d: "Charge 100%" },
                                    { icon: Zap, t: "CHARGER", d: "Car Adapter" },
                                    { icon: Activity, t: "POWER BANK", d: "Backup Batt" },
                                    { icon: FileText, t: "FORMS", d: "20 Sets Paper" },
                                    { icon: ClipboardList, t: "CLIPBOARD", d: "Solid Base" },
                                    { icon: ArrowRight, t: "PENS", d: "Multi-Color" },
                                    { icon: BarChart3, t: "CALC", d: "Manual Backup" }
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        className="p-5 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 text-center hover:shadow-lg hover:border-secondary-300 dark:hover:border-secondary-800 transition-all"
                                    >
                                        <div className="w-10 h-10 mx-auto mb-3 bg-secondary-50 dark:bg-secondary-900/20 rounded-xl flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-secondary-500" />
                                        </div>
                                        <div className="text-[10px] font-black text-slate-800 dark:text-slate-200 uppercase mb-1">{item.t}</div>
                                        <div className="text-[9px] text-slate-500">{item.d}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tool Organization */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-lg"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600">
                                        <Truck className="w-5 h-5" />
                                    </span>
                                    <h5 className="font-black text-sm text-slate-800 dark:text-slate-200 uppercase">Vehicle Organization</h5>
                                </div>
                                <p className="text-[11px] text-slate-500 leading-relaxed">Use Tool Chests organized by category. Secure storage ensures tools don't slide. Keep clean and dry to prevent rust. Perform weekly inventory checks.</p>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-lg"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-600">
                                        <Settings className="w-5 h-5" />
                                    </span>
                                    <h5 className="font-black text-sm text-slate-800 dark:text-slate-200 uppercase">Tool Maintenance</h5>
                                </div>
                                <p className="text-[11px] text-slate-500 leading-relaxed">Clean after use (especially dirty jobs). Wipe down metal to prevent rust. Sharpen blades/bits. Lubricate joints (pliers/wrenches) and replace worn tools.</p>
                            </motion.div>
                        </div>
                    </div>
                </SubSection>

                <SubSection id="tool-maintenance">
                    <SubSectionHeader>7.2 TOOL MAINTENANCE & CARE</SubSectionHeader>
                    <div className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-inner"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="p-2 bg-primary-100 dark:bg-primary-900/40 rounded-xl text-primary-600">
                                        <Clock className="w-5 h-5" />
                                    </span>
                                    <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide">Daily Care (End of Day)</h4>
                                </div>
                                <div className="space-y-3">
                                    {["Clean dirty tools (wipe down debris)", "Return all tools to proper place", "Check for damage and report if found", "Secure tool box (locked if possible)"].map((item, i) => (
                                        <motion.div 
                                            key={i}
                                            whileHover={{ x: 4 }}
                                            className="flex gap-3 items-center p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-primary-300 dark:hover:border-primary-800 transition-colors"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                                            <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-inner"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="p-2 bg-secondary-100 dark:bg-secondary-900/40 rounded-xl text-secondary-600">
                                        <Calendar className="w-5 h-5" />
                                    </span>
                                    <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide">Weekly Checklist</h4>
                                </div>
                                <div className="space-y-3">
                                    {["Inspect for wear, damage, or rust", "Lubricate tools with moving parts", "Tighten loose handles", "Complete physical inventory count"].map((item, i) => (
                                        <motion.div 
                                            key={i}
                                            whileHover={{ x: 4 }}
                                            className="flex gap-3 items-center p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-secondary-300 dark:hover:border-secondary-800 transition-colors"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                                            <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Calibration Strategy */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            <div className="flex items-center justify-center gap-3 mb-10 relative z-10">
                                <span className="p-2.5 bg-primary-900/50 rounded-xl text-primary-400 shadow-lg">
                                    <Target className="w-5 h-5" />
                                </span>
                                <h4 className="text-sm font-black text-white uppercase tracking-widest">Why Calibration Matters</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                                {[
                                    { title: "Accuracy", desc: "Ensures measurements are correct to standard", icon: Target },
                                    { title: "Safety", desc: "Prevents dangerous pressure readings", icon: Shield },
                                    { title: "Compliance", desc: "Required by international and national law", icon: ShieldCheck },
                                    { title: "Liability", desc: "Protects the technician and the SS+ brand", icon: Users }
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        whileHover={{ y: -4 }}
                                        className="p-5 bg-white/5 rounded-xl border border-white/10 hover:border-primary-500/30 transition-all text-center"
                                    >
                                        <div className="w-10 h-10 mx-auto mb-3 bg-primary-500/20 rounded-xl flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-primary-400" />
                                        </div>
                                        <span className="text-xs font-black text-primary-400 block uppercase mb-2">{item.title}</span>
                                        <p className="text-[10px] text-slate-400">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Calibration Process Step-by-Step */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Settings className="w-32 h-32" />
                            </div>
                            <div className="flex items-center justify-center gap-3 mb-12 relative z-10">
                                <span className="p-2.5 bg-primary-100 dark:bg-primary-900/40 rounded-xl text-primary-600 shadow-lg shadow-primary-500/10">
                                    <Settings className="w-5 h-5" />
                                </span>
                                <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-widest">The Calibration Process</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                                {[
                                    { num: "1", title: "SCHEDULING", desc: "Ops Responsible maintains calendar in WAVE PLUS. Auto reminders trigger 30 days prior. Plan equipment rotation to avoid disruption." },
                                    { num: "2", title: "SENDING", desc: "Remove from vehicle; Clean and tag with Date/Vehicle ID. Send to approved lab. Issue temporary replacement gear." },
                                    { num: "3", title: "RECEIVING", desc: "Verify certificate. Apply calibration sticker (Date/Next Due). Scan cert to WAVE PLUS and return to vehicle." }
                                ].map((step, i) => (
                                    <motion.div 
                                        key={i}
                                        whileHover={{ y: -4 }}
                                        className="p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="w-8 h-8 bg-primary-100 dark:bg-primary-900/40 rounded-xl flex items-center justify-center text-primary-600 font-black text-sm">
                                                {step.num}
                                            </span>
                                            <h5 className="font-black text-xs text-primary-600 uppercase tracking-wide">{step.title}</h5>
                                        </div>
                                        <p className="text-[11px] text-slate-500 leading-relaxed">{step.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-8 p-5 bg-red-50 dark:bg-red-950/20 rounded-2xl border border-red-100 dark:border-red-900/30 relative z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <AlertTriangle className="w-4 h-4 text-red-500" />
                                    <strong className="text-xs text-red-700 dark:text-red-400 uppercase">If Equipment Fails Calibration</strong>
                                </div>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400">DO NOT USE. Mark clearly "Out of Calibration". Repair/replace immediately and re-verify recent work performed with that unit.</p>
                            </div>
                        </motion.div>
                    </div>
                </SubSection>

                <SubSection id="calibration-schedule">
                    <SubSectionHeader>7.3 EQUIPMENT CALIBRATION SCHEDULE</SubSectionHeader>
                    <div className="space-y-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="overflow-x-auto rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-950 p-8"
                        >
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <span className="p-2.5 bg-secondary-100 dark:bg-secondary-900/40 rounded-xl text-secondary-600 shadow-lg shadow-secondary-500/10">
                                    <CalendarCheck className="w-5 h-5" />
                                </span>
                                <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-widest">Annual Calibration Calendar</h4>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { id: "REF-GAUGE-XX", type: "Pressure Gauge Testers (0-25 / 0-200 bar)", freq: "Annually", who: "Certified Lab" },
                                    { id: "SCALE-XX", type: "Digital Scales (CO2 Weighing)", freq: "Annually", who: "Certified Lab" },
                                    { id: "E-TEST-XX", type: "Multimeters / Electrical Test Gear", freq: "Annually", who: "Certified Lab" },
                                    { id: "MISC-XX", type: "Measuring Beakers / Other specialized gear", freq: "Annually", who: "Internal / External" }
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        whileHover={{ x: 4 }}
                                        className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-4 hover:border-secondary-300 dark:hover:border-secondary-800 transition-colors"
                                    >
                                        <span className="px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900/40 rounded-lg text-secondary-600 font-black text-xs">{item.id}</span>
                                        <div className="flex-1">
                                            <span className="text-[11px] text-slate-700 dark:text-slate-300 font-medium">{item.type}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg text-emerald-600 text-[10px] font-bold uppercase">{item.freq}</span>
                                            <span className="text-[10px] text-slate-500">{item.who}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-inner flex gap-8 items-center"
                        >
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-xl text-amber-600">
                                        <Calendar className="w-5 h-5" />
                                    </span>
                                    <h5 className="font-black text-sm text-slate-800 dark:text-slate-200 uppercase">Stagger Calibration Dates</h5>
                                </div>
                                <p className="text-[11px] text-slate-500 leading-relaxed">Don't send all equipment at once—this disrupts operations. Plan 1-2 items per month. Coordinate with light work periods to maintain constant service capacity.</p>
                            </div>
                            <div className="w-1/4 p-6 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl text-center">
                                <p className="text-[2.5rem] font-black leading-none text-primary-500 mb-1">1-2</p>
                                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Items / Mo</p>
                            </div>
                        </motion.div>
                    </div>
                </SubSection>

                <SubSection id="lost-damaged-equipment">
                    <SubSectionHeader>7.4 LOST OR DAMAGED EQUIPMENT</SubSectionHeader>
                    <div className="space-y-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <AlertTriangle className="w-32 h-32" />
                            </div>
                            <div className="flex items-center justify-center gap-3 mb-10 relative z-10">
                                <span className="p-2.5 bg-red-100 dark:bg-red-900/40 rounded-xl text-red-600 shadow-lg shadow-red-500/10">
                                    <AlertCircle className="w-5 h-5" />
                                </span>
                                <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-widest">Reporting Protocol</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                <motion.div 
                                    whileHover={{ y: -4 }}
                                    className="p-6 bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-slate-900 rounded-2xl border border-red-100 dark:border-red-900/30"
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <AlertTriangle className="w-5 h-5 text-red-500" />
                                        <h5 className="font-black text-sm text-red-600 uppercase">Technician Duty</h5>
                                    </div>
                                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">Report immediately (same day). Complete incident report in WAVE PLUS including Description, ID, Time/Location, Circumstances, and Estimated Value.</p>
                                </motion.div>
                                <motion.div 
                                    whileHover={{ y: -4 }}
                                    className="p-6 bg-gradient-to-br from-primary-50 to-white dark:from-primary-950/20 dark:to-slate-900 rounded-2xl border border-primary-100 dark:border-primary-900/30"
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <Eye className="w-5 h-5 text-primary-500" />
                                        <h5 className="font-black text-sm text-primary-600 uppercase">Management Review</h5>
                                    </div>
                                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">Team Leader investigates theft, loss, or breakage. Determines if technician fault (negligence) or unavoidable wear. Ops decides on pay deduction or company-cost replacement.</p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                className="p-8 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-slate-950 border border-emerald-100 dark:border-emerald-900/30 rounded-[2.5rem] shadow-lg"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="p-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-xl text-emerald-600">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </span>
                                    <h5 className="font-black text-sm text-emerald-600 uppercase">Normal Wear & Tear</h5>
                                </div>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">Replace at SS+ cost. No technician charge. Order replacement promptly to prevent downtime.</p>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                className="p-8 bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-slate-950 border border-red-100 dark:border-red-900/30 rounded-[2.5rem] shadow-lg"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="p-2 bg-red-100 dark:bg-red-900/40 rounded-xl text-red-600">
                                        <AlertCircle className="w-5 h-5" />
                                    </span>
                                    <h5 className="font-black text-sm text-red-600 uppercase">Negligence or Loss</h5>
                                </div>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">Potential technician charge (partial/full cost). Personnel file documentation. Counseling and disciplinary action for repeated incidents.</p>
                            </motion.div>
                        </div>
                    </div>
                </SubSection>
            </Section>
        </div>
    );
}

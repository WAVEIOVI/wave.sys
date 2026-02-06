import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';
import { 
    HardHat, 
    Eye, 
    Hand, 
    Wind, 
    Ear, 
    Anchor, 
    Footprints, 
    Shirt, 
    ShieldCheck, 
    Palette, 
    Printer, 
    Maximize,
    AlertTriangle,
    Flame,
    PenTool
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductCatalog() {
    return (
        <Section id="section-1">
            <SectionHeader>SECTION 1: PRODUCT CATALOG & SPECIFICATIONS</SectionHeader>

            <SubSection id="fire-equipment">
                <SubSectionHeader>1.1 Fire Equipment Product Range</SubSectionHeader>
                <Paragraph className="mb-6">SS+ maintains a comprehensive inventory of CE/EN3 certified fire equipment. Standard stock levels are calculated based on a 3-month rolling average demand across Sfax and Tunis locations.</Paragraph>

                {/* Fire Extinguisher Categories */}
                <h4 className="font-bold text-sm mb-3 uppercase tracking-widest text-primary-600">Primary Stock (Level 1 - High Volume)</h4>
                <div className="mb-8">
                    <Table>
                        <TableRow>
                            <TableCell className="font-bold">6kg Powder Extinguisher (ABC)</TableCell>
                            <TableCell>SICLI, NAFCO, Mobiak</TableCell>
                            <TableCell>12-15 bar | 13-18s discharge</TableCell>
                            <TableCell className="text-right">Target: 100-150 units</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold">9kg Powder Extinguisher (ABC)</TableCell>
                            <TableCell>SICLI, NAFCO, Mobiak</TableCell>
                            <TableCell>12-15 bar | 18-25s discharge</TableCell>
                            <TableCell className="text-right">Target: 50-80 units</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold">2kg CO2 Extinguisher</TableCell>
                            <TableCell>European Standards</TableCell>
                            <TableCell>99.5% Purity | No residue</TableCell>
                            <TableCell className="text-right">Target: 60-100 units</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold">5kg CO2 Extinguisher</TableCell>
                            <TableCell>European Standards</TableCell>
                            <TableCell>12-15s discharge | Industrial use</TableCell>
                            <TableCell className="text-right">Target: 30-50 units</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold">6kg Water Extinguisher</TableCell>
                            <TableCell>Standard Additive</TableCell>
                            <TableCell>10-12 bar | 60+s discharge</TableCell>
                            <TableCell className="text-right">Target: 30-50 units</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold">6kg Foam Extinguisher (AFFF)</TableCell>
                            <TableCell>6% AFFF Formula</TableCell>
                            <TableCell>10-12 bar | Film-forming</TableCell>
                            <TableCell className="text-right">Target: 20-40 units</TableCell>
                        </TableRow>
                    </Table>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h5 className="font-bold text-sm mb-2 text-primary-600">Secondary (Level 2)</h5>
                        <p className="font-bold text-xs mb-1">50kg Mobile Powder Units</p>
                        <p className="text-xs text-slate-500">Wheeled unit | Sfax: 5-10 units</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h5 className="font-bold text-sm mb-2 text-primary-600">Tertiary (Level 3)</h5>
                        <p className="font-bold text-xs mb-1">1kg/2kg Powder</p>
                        <p className="text-xs text-slate-500">Vehicle/Small spaces | 35-55 units total</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h5 className="font-bold text-sm mb-2 text-primary-600">Specialty (Level 4)</h5>
                        <p className="font-bold text-xs mb-1">Clean Agent / Kitchen</p>
                        <p className="text-xs text-slate-500">FM-200, Halotron, K-Class. (Order on Demand)</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Blockquote title="Fire Hose Reels & Accessories">
                        <List>
                            <ListItem><strong>Complete Units:</strong> 20m, 25m, 30m lengths | 19mm/25mm diam. (Stock: 10-15)</ListItem>
                            <ListItem><strong>Replacement Hoses:</strong> 20m / 25m (5-10 each)</ListItem>
                            <ListItem><strong>Nozzles & Brackets:</strong> Adjustable Spray (10-20 each)</ListItem>
                        </List>
                    </Blockquote>
                    <Blockquote title="Fire Blankets">
                        <List>
                            <ListItem><strong>Standard & Large Sizes:</strong> 1.2m x 1.2m and 1.8m x 1.2m.</ListItem>
                            <ListItem>Fiberglass fabric, heat-resistant up to 550°C. Wall-mounted rigid case. (Stock: 50-80 units)</ListItem>
                            <ListItem>Standards: ISO 3864, EN 1869</ListItem>
                        </List>
                    </Blockquote>
                </div>
            </SubSection>

            <SubSection id="ppe-workwear">
                <SubSectionHeader>1.2 PPE & Workwear Categories</SubSectionHeader>
                <Paragraph className="mb-8">Complete range of CE-certified Personal Protective Equipment and industrial workwear meeting European safety standards.</Paragraph>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                        { icon: HardHat, title: "Head Protection", items: ["Safety Helmets (EN 397)", "Bump Caps (Low-risk)"], stock: "120-180" },
                        { icon: Eye, title: "Eye & Face", items: ["Safety Glasses (EN 166)", "Face Shields (Welding)"], stock: "250-400" },
                        { icon: Hand, title: "Hand Protection", items: ["Work Gloves (Leather/Syn)", "Cut-resistant & Kevlar"], stock: "500-1000" },
                        { icon: Wind, title: "Respiratory", items: ["Dust Masks (FFP1-FFP3)", "Half-Face P2/P3 Filters"], stock: "1100+" },
                        { icon: Ear, title: "Hearing", items: ["Earplugs (25-35 dB)", "Earmuffs (Electronic)"], stock: "2100+" },
                        { icon: Anchor, title: "Fall Protection", items: ["Full/Half-body Harnesses", "Energy-absorbing Lanyards"], stock: "150-300" },
                        { icon: Footprints, title: "Foot Protection", items: ["Safety Boots (S1, S3)", "Waterproof & Composite"], stock: "200-300" },
                        { icon: ShieldCheck, title: "CE Certified", items: ["All PPE meets EN standards", "Regular safety audits"], stock: "100%" }
                    ].map((cat, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ y: -4 }}
                            className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                                    <cat.icon size={20} />
                                </div>
                                <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm leading-tight">{cat.title}</h4>
                            </div>
                            <ul className="text-xs space-y-1.5 text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                                {cat.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-1.5">
                                        <span className="w-1 h-1 rounded-full bg-primary-400 dark:bg-primary-600 mt-1.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-baseline">
                                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Stock Target</span>
                                <span className="text-xs font-bold text-primary-600 dark:text-primary-400">{cat.stock}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 p-1">
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-[14px]">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                                    <Shirt className="text-primary-400" />
                                    Workwear & Uniforms
                                </h4>
                                <p className="text-slate-400 text-sm max-w-xl">Professional industrial apparel designed for durability, safety, and corporate identity across all operational environments.</p>
                            </div>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-[10px] font-bold uppercase tracking-wider rounded-full">EN ISO 20471</span>
                                <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-wider rounded-full">Flame Resistant</span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { 
                                    title: "Industrial Wear", 
                                    desc: "Coveralls, Shirts, Trousers in Navy, Gray, Khaki.", 
                                    specs: "Sizes S-XXXL | 500-900 units",
                                    color: "bg-blue-500/10 border-blue-500/20 text-blue-400"
                                },
                                { 
                                    title: "High-Visibility", 
                                    desc: "Class 1-3 Vests and Jackets for site safety.", 
                                    specs: "Standards compliant | 250-500 units",
                                    color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
                                },
                                { 
                                    title: "Specialized FR", 
                                    desc: "Nomex Flame-Resistant garments (EN 11612).", 
                                    specs: "On Request | High-risk environments",
                                    color: "bg-orange-500/10 border-orange-500/20 text-orange-400"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-xl">
                                    <h5 className="font-bold text-white mb-2">{item.title}</h5>
                                    <p className="text-slate-400 text-xs mb-4 leading-relaxed">{item.desc}</p>
                                    <div className="text-[10px] font-mono text-slate-500 uppercase">{item.specs}</div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-primary-500/10 rounded-lg">
                                    <Palette className="text-primary-400" size={18} />
                                </div>
                                <div>
                                    <span className="text-white font-bold text-sm block">Custom Branding Available</span>
                                    <span className="text-slate-500 text-xs">Embroidery & Screen Printing (Up to 4 colors)</span>
                                </div>
                            </div>
                            <div className="text-xs text-slate-400 italic">
                                * Customer vector logo required for production.
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="safety-signage">
                <SubSectionHeader>1.3 Safety Signage & Accessories</SubSectionHeader>
                <Paragraph className="mb-8">Standard and custom safety identification solutions compliant with EN ISO 3864 and local regulations.</Paragraph>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="md:col-span-2 space-y-6">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3 text-lg">
                                <AlertTriangle className="text-amber-500" />
                                Standard Safety Signs
                            </h4>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {[
                                    { title: "Fire Safety", icon: Flame, color: "bg-red-500", text: "Location & Exit signs. Photoluminescent (Glow) mandatory.", stock: "700+" },
                                    { title: "Warning", icon: AlertTriangle, color: "bg-amber-500", text: "Flammable, No Smoking, PPE Requirements.", stock: "600+" },
                                    { title: "Prohibition", icon: ShieldCheck, color: "bg-slate-800", text: "No Entry, No Mobile Phones. ISO Standards.", stock: "150+" }
                                ].map((type, i) => (
                                    <div key={i} className="flex flex-col">
                                        <div className={`h-1.5 w-full rounded-full ${type.color} mb-4`} />
                                        <span className="font-bold text-sm mb-2">{type.title}</span>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-grow">{type.text}</p>
                                        <div className="text-[10px] font-bold text-primary-600">Stock: {type.stock}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-primary-600 rounded-2xl p-6 text-white overflow-hidden relative">
                            <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="max-w-md">
                                    <h4 className="text-xl font-bold mb-2">Technical Capacity</h4>
                                    <p className="text-primary-100 text-sm">Industrial projects ranging from small 50mm safety labels up to 3000mm site signage.</p>
                                </div>
                                <div className="flex -space-x-2">
                                    <div className="w-12 h-12 rounded-full border-4 border-primary-600 bg-white shadow-sm flex items-center justify-center text-primary-600 font-bold text-xs italic">PVC</div>
                                    <div className="w-12 h-12 rounded-full border-4 border-primary-600 bg-slate-100 shadow-sm flex items-center justify-center text-slate-800 font-bold text-xs italic">ALU</div>
                                    <div className="w-12 h-12 rounded-full border-4 border-primary-600 bg-primary-400 shadow-sm flex items-center justify-center text-white font-bold text-xs italic">VIN</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col">
                        <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                            <PenTool className="text-primary-600" size={20} />
                            Production
                        </h4>
                        
                        <div className="space-y-6 flex-grow">
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-3">Materials</span>
                                <div className="space-y-2">
                                    {["PVC (3mm / 5mm)", "Aluminum (1.5mm / 2mm)", "Self-adhesive Vinyl"].map((m, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                            {m}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-3">Methods</span>
                                <div className="grid grid-cols-1 gap-2">
                                    {[
                                        { label: "Digital Printing", icon: Printer },
                                        { label: "Vinyl Cutting", icon: Maximize },
                                        { label: "Screen Printing", icon: Palette }
                                    ].map((m, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                            <m.icon size={14} className="text-primary-600" />
                                            <span className="text-xs font-bold">{m.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
                            <span className="text-[10px] text-slate-400 uppercase tracking-tighter">Fast Turnaround Production</span>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="refilling-materials">
                <SubSectionHeader>1.4 Refilling Materials & Consumables</SubSectionHeader>
                <Paragraph className="mb-6">Certified refilling agents and precision spare parts for fire equipment maintenance and service operations.</Paragraph>

                <div className="grid md:grid-cols-2 gap-6">
                    <Blockquote title="Refilling Agents" type="warning">
                        <List>
                            <ListItem><strong>ABC Powder (MAP-Based):</strong> 30%, 40%, 60% Grades. Moisture &lt;0.25%. 25kg bags / 50kg drums. Stock: 2-5 Tons (FIFO rotation).</ListItem>
                            <ListItem><strong>CO2 & Foam Agents:</strong> CO2 (99.5% Purity, Air Liquide). 6% AFFF Foam (Biodegradable, 7:1 Expansion). Water Additives (Antifreeze).</ListItem>
                        </List>
                        <p className="text-sm mt-2 pt-2 border-t border-orange-200 dark:border-orange-800">
                            <strong>Storage:</strong> Dry, well-ventilated, &lt;50% RH. CO2 outdoor storage mandatory with detectors.
                        </p>
                    </Blockquote>

                    <div className="space-y-4">
                        <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                             <h5 className="font-bold text-sm mb-2 text-primary-600">Precision Spare Parts</h5>
                             <List>
                                <ListItem><strong>Mechanical:</strong> Gauges (0-25 bar), Antistatic Hoses, Horns, Valve Bodies. (Stock: 500+ units)</ListItem>
                                <ListItem><strong>Internal:</strong> O-Rings (Viton/NBR), Valve Stems, Springs, Safety Pins. (Stock: 2000+ units)</ListItem>
                             </List>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                             <h5 className="font-bold text-sm mb-2 text-primary-600">Service Consumables</h5>
                             <List>
                                <ListItem><strong>Service Tags:</strong> Weather-resistant (5000+ units)</ListItem>
                                <ListItem><strong>Inspection Labels:</strong> Tamper-Evident VOID pattern</ListItem>
                                <ListItem><strong>QR Asset Tags:</strong> WAVE PLUS Numbered</ListItem>
                                <ListItem><strong>Sealants:</strong> Industrial Cleaning & Thread Sealants</ListItem>
                             </List>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="product-coding">
                <SubSectionHeader>1.5 Standardized Coding System</SubSectionHeader>
                <Paragraph className="mb-6">Integration with <strong>WAVE PLUS</strong> requires strict adherence to the 12-character alpha-numeric coding structure for all inventory movements.</Paragraph>

                <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 mb-6">
                    <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xl font-bold mb-6">
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded">FEQ</span>
                        <span>-</span>
                        <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 px-3 py-1 rounded">EXT</span>
                        <span>-</span>
                        <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 px-3 py-1 rounded">06P</span>
                        <span>-</span>
                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 px-3 py-1 rounded">SIC</span>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="border-l-4 border-blue-500 pl-3">
                            <span className="font-bold block text-blue-600">Category (XXX)</span>
                            <span className="text-slate-600 dark:text-slate-400">FEQ / PPE / WWR / SGN / MAT / PRT</span>
                        </div>
                        <div className="border-l-4 border-emerald-500 pl-3">
                            <span className="font-bold block text-emerald-600">Type (YYY)</span>
                            <span className="text-slate-600 dark:text-slate-400">EXT / HOS / HEAD / COV / PWD / VAL</span>
                        </div>
                        <div className="border-l-4 border-orange-500 pl-3">
                            <span className="font-bold block text-orange-600">Serie (ZZZ)</span>
                            <span className="text-slate-600 dark:text-slate-400">06P (6kg Powder) / 150 (Size) / 40M (40% MAP)</span>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-3">
                            <span className="font-bold block text-purple-600">Brand (Suffix)</span>
                            <span className="text-slate-600 dark:text-slate-400">SIC (Sicli) / NAF (Nafco) / MOB / GEN</span>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Blockquote title="WAVE PLUS Integration" type="info">
                        <List>
                            <ListItem>Unique barcode generation for every SKU</ListItem>
                            <ListItem>Mobile app sync for real-time warehouse scanning</ListItem>
                            <ListItem>Automatic stock level triggers on scan-out</ListItem>
                        </List>
                    </Blockquote>
                    <Blockquote title="Example Complete Codes">
                        <List>
                            <ListItem><span className="font-mono">FEQ-EXT-06P-SIC</span> (6kg Powder SICLI)</ListItem>
                            <ListItem><span className="font-mono">PPE-HND-09G-GEN</span> (Size 9 Gloves)</ListItem>
                            <ListItem><span className="font-mono">SGN-FIR-150-STD</span> (150mm Fire Sign)</ListItem>
                        </List>
                    </Blockquote>
                </div>
            </SubSection>
        </Section>
    );
}


import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';

export default function WorkshopOperations() {
    return (
        <Section id="section-8">
            <SectionHeader>SECTION 8: WORKSHOP OPERATIONS</SectionHeader>

            <SubSection id="sfax-workshop">
                <SubSectionHeader>8.1 SFAX MAIN WORKSHOP</SubSectionHeader>
                <div className="space-y-12">
                    <div className="p-10 bg-white dark:bg-slate-950 border-2 border-primary-500 dark:border-primary-900 rounded-[3.5rem] italic shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary-500/10 transition-colors"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
                            <div>
                                <h4 className="font-black text-2xl italic text-slate-800 dark:text-slate-200 mb-4 uppercase tracking-tighter text-primary-600">Sfax Main Workshop</h4>
                                <Paragraph className="text-sm font-bold text-slate-500 mb-6 uppercase tracking-widest border-b pb-2">Route de Gabès Km 3.5, Sfax</Paragraph>
                                <div className="grid grid-cols-2 gap-4 text-[11px] text-slate-500 font-bold uppercase tracking-tight">
                                    <div className="space-y-2">
                                        <p>✓ Service Workshop</p>
                                        <p>✓ Refilling Station</p>
                                        <p>✓ Parts Storage</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p>✓ Vehicle Parking</p>
                                        <p>✓ Office / Admin Area</p>
                                        <p>✓ Showroom</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-inner">
                                <h5 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest italic border-b pb-1">Core Capabilities</h5>
                                <List className="text-[10px] text-slate-500 space-y-2">
                                    <ListItem>Full refilling/recharging (ABC, CO2, Foam, Water).</ListItem>
                                    <ListItem>Complex repairs & component replacement.</ListItem>
                                    <ListItem>Hydrostatic testing & calibration coordination.</ListItem>
                                    <ListItem>Master inventory & Fleet restocking hub.</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>

                    {/* Workshop Mapping */}
                    <div className="p-10 bg-slate-900 border border-slate-800 rounded-[4rem] text-white italic relative overflow-hidden group">
                        <h4 className="text-[10px] font-black text-primary-500 uppercase mb-12 text-center tracking-[0.4em] relative italic">Workshop Zone Logic (5-Zone Mapping)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
                            {[
                                { z: "ZONE 1", h: "RECEIVING", d: "Drop-off, Initial Inspection, Triage, Work Order creation." },
                                { z: "ZONE 2", h: "REFILLING", d: "Powder, CO2, & Foam stations. High-ventilation zone." },
                                { z: "ZONE 3", h: "REPAIR", d: "Workbenches, Specialized tools, Component assembly." },
                                { z: "ZONE 4", h: "DISPATCH", d: "Final QC, Branded tags, customer pickup area." },
                                { z: "ZONE 5", h: "STORAGE", d: "Customer units organized by date/SLA. Staging." }
                            ].map((zone, i) => (
                                <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-white/10 transition-colors text-center flex flex-col items-center">
                                    <div className="text-[10px] font-black text-primary-400 mb-1">{zone.z}</div>
                                    <div className="text-xs font-black uppercase mb-3 text-slate-200 border-b border-primary-500/30 pb-1">{zone.h}</div>
                                    <p className="text-[10px] text-slate-400 leading-relaxed italic">{zone.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="tunis-workshop">
                <SubSectionHeader>8.2 TUNIS BRANCH WORKSHOP</SubSectionHeader>
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3.5rem] shadow-sm italic">
                            <h4 className="font-black text-xl italic text-slate-800 dark:text-slate-200 mb-2 uppercase tracking-tight text-secondary-600">Tunis Branch Workshop</h4>
                            <Paragraph className="text-[10px] font-black text-slate-400 mb-6 uppercase tracking-widest border-b pb-1">Raoud, Tunis</Paragraph>
                            <List className="text-[11px] text-slate-500 space-y-3">
                                <ListItem><strong>Capabilities:</strong> Routine Powder/CO2 refilling, basic maintenance.</ListItem>
                                <ListItem><strong>Facilities:</strong> Basic station, parts storage, office, vehicle parking.</ListItem>
                                <ListItem><strong>Limitations:</strong> Specialized agents (FM-200) on demand; Complex repairs referred to Sfax.</ListItem>
                            </List>
                        </div>
                        <div className="p-10 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3.5rem] shadow-inner flex flex-col justify-center">
                            <h5 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest border-b dark:border-slate-800 pb-1 italic text-center">Service Coordination Standard</h5>
                            <Paragraph className="text-[11px] text-slate-500 italic leading-relaxed uppercase tracking-tighter">
                                Each workshop serves its area independently. For complex cases, Tunis consults Sfax (via Ops Responsible). Parts and technicians are shared between branches to maintain consistent service capacity across the national network.
                            </Paragraph>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="safety-organization">
                <SubSectionHeader>8.3 WORKSHOP SAFETY & ORGANIZATION</SubSectionHeader>
                <div className="space-y-12">
                    {/* Safety Rules Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-[11px] italic">
                        <div className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm">
                            <h5 className="font-black text-[10px] text-red-600 uppercase mb-4 border-b pb-1 tracking-widest">General & Personal Safety</h5>
                            <ul className="space-y-2 text-slate-500 font-bold uppercase tracking-tight">
                                <li className="flex gap-2"><span>☐</span> NO SMOKING at any time.</li>
                                <li className="flex gap-2"><span>☐</span> PPE Mandatory (Glasses, Gloves, Masks).</li>
                                <li className="flex gap-2"><span>☐</span> Emergency Exits kept 100% clear.</li>
                                <li className="flex gap-2"><span>☐</span> Safety shoes / no loose clothing.</li>
                                <li className="flex gap-2"><span>☐</span> First Aid & Spill Kits accessible.</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm">
                            <h5 className="font-black text-[10px] text-primary-600 uppercase mb-4 border-b pb-1 tracking-widest">Equipment & Gas Safety</h5>
                            <ul className="space-y-2 text-slate-500 font-bold uppercase tracking-tight">
                                <li className="flex gap-2"><span>☐</span> Nitrogen cylinders chained/secured.</li>
                                <li className="flex gap-2"><span>☐</span> CO2 storage in ventilated areas.</li>
                                <li className="flex gap-2"><span>☐</span> Never exceed vessel rated pressure.</li>
                                <li className="flex gap-2"><span>☐</span> Tool shadow boards for organization.</li>
                                <li className="flex gap-2"><span>☐</span> SDS sheets accessible for all agents.</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm">
                            <h5 className="font-black text-[10px] text-slate-800 dark:text-slate-200 uppercase mb-4 border-b pb-1 tracking-widest">Housekeeping (End of Day)</h5>
                            <ul className="space-y-2 text-slate-500 font-bold uppercase tracking-tight">
                                <li className="flex gap-2"><span>☐</span> Clean work areas (powder/spills).</li>
                                <li className="flex gap-2"><span>☐</span> Organize tools to proper silhouettes.</li>
                                <li className="flex gap-2"><span>☐</span> Empty trash and clear walkways.</li>
                                <li className="flex gap-2"><span>☐</span> Sweep floors (no water on powder).</li>
                                <li className="flex gap-2"><span>☐</span> Verify secure locking of facility.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Chemical Storage & Handling */}
                    <div className="p-10 bg-slate-900 border border-slate-800 rounded-[4rem] text-white italic shadow-2xl">
                        <h4 className="text-[10px] font-black text-primary-500 uppercase mb-10 text-center tracking-[0.4em] italic uppercase">Chemical Storage & Handling Matrix</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="space-y-3">
                                <h6 className="text-[10px] font-black uppercase text-slate-400 border-l-2 border-primary-500 pl-3">Powder Agents</h6>
                                <Paragraph className="text-[10px] text-slate-400 italic">Sealed containers, Keep 100% dry. FIFO rotation. Label type/grade/date. 500kg min stock.</Paragraph>
                            </div>
                            <div className="space-y-3">
                                <h6 className="text-[10px] font-black uppercase text-slate-400 border-l-2 border-primary-500 pl-3">CO2 Cylinders</h6>
                                <Paragraph className="text-[10px] text-slate-400 italic">Chained upright, Valve caps in place. Ventilated low-areas. Warning signs mandatory.</Paragraph>
                            </div>
                            <div className="space-y-3">
                                <h6 className="text-[10px] font-black uppercase text-slate-400 border-l-2 border-primary-500 pl-3">Foam & Liquids</h6>
                                <Paragraph className="text-[10px] text-slate-400 italic">Original containers. Avoid freezing. Away from heat. Expiry date tracking via WAVE PLUS.</Paragraph>
                            </div>
                            <div className="space-y-3">
                                <h6 className="text-[10px] font-black uppercase text-slate-400 border-l-2 border-primary-500 pl-3">Waste Protocol</h6>
                                <Paragraph className="text-[10px] text-slate-400 italic">Sweep powder (don't wash). Scrap metal to recycle. Depressurize before scrapping.</Paragraph>
                            </div>
                        </div>
                    </div>

                    {/* Workshop Efficiency (5S) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3.5rem] italic shadow-sm flex flex-col justify-center">
                            <h5 className="text-[10px] font-black text-primary-600 uppercase mb-4 tracking-widest border-b pb-1 italic">The 5S Discipline</h5>
                            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 text-center">
                                {["SORT", "SET", "SHINE", "LEVEL", "SUSTAIN"].map((s, i) => (
                                    <div key={i} className="p-2 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                        <div className="text-[9px] font-black text-slate-800 dark:text-slate-200">{s}</div>
                                    </div>
                                ))}
                            </div>
                            <Paragraph className="text-[10px] text-slate-500 mt-4 font-bold uppercase tracking-tight">Goal: Minimize cross-traffic, eliminate backtracking, and sustain peak professional standards.</Paragraph>
                        </div>
                        <div className="p-10 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3.5rem] italic shadow-inner flex flex-col justify-center">
                            <h5 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest border-b dark:border-slate-800 pb-1 italic">Organization Tools</h5>
                            <List className="text-[11px] text-slate-500 space-y-2">
                                <ListItem><strong>Shadow Boards:</strong> Instant visual inventory of workshop tools.</ListItem>
                                <ListItem><strong>Color Coding:</strong> Red (Powder), Blue (CO2), Yellow (Parts).</ListItem>
                                <ListItem><strong>Labeling:</strong> Every bin, container, and shelf must be ID-tagged.</ListItem>
                            </List>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="equipment-maintenance">
                <SubSectionHeader>8.4 EQUIPMENT MAINTENANCE</SubSectionHeader>
                <div className="space-y-12">
                    {/* Workshop Maint Table */}
                    <div className="overflow-x-auto rounded-[3.5rem] border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-950 p-6 italic">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase mb-8 text-center tracking-[0.4em] italic uppercase border-b pb-4">Workshop Equipment Maintenance Schedule</h4>
                        <Table>
                            <TableRow isHeader>
                                <TableCell isHeader>Cycle</TableCell>
                                <TableCell isHeader>Tasks & Inspections</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span className="font-black text-primary-600 italic uppercase">Daily</span></TableCell>
                                <TableCell className="text-[11px] text-slate-500">Clean work surfaces; Check N2/CO2 levels; Sweep floors; Empty waste.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span className="font-black text-primary-600 italic uppercase">Weekly</span></TableCell>
                                <TableCell className="text-[11px] text-slate-500">Inspect filling equipment; Clean filters; Lubricate machinery; Inventory audit (Parts/Stock).</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span className="font-black text-primary-600 italic uppercase">Monthly</span></TableCell>
                                <TableCell className="text-[11px] text-slate-500">Deep clean facility; Inspect all Safety PPE & Safety Gear; Review procedures with team.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span className="font-black text-emerald-600 italic uppercase">Annual</span></TableCell>
                                <TableCell className="text-[11px] text-slate-500 font-bold uppercase">Full Calibration (Section 7.3); Major servicing of filling machines & compressors.</TableCell>
                            </TableRow>
                        </Table>
                    </div>

                    {/* Vehicle Fleet Fleet Maintenance */}
                    <div className="p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3.5rem] italic shadow-sm relative group">
                        <h4 className="font-black text-[11px] italic text-slate-800 dark:text-slate-200 mb-8 uppercase tracking-[0.2em] border-b pb-2 flex items-center gap-3 italic">🚐 SS+ Vehicle Fleet Maintenance</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-3xl">
                                    <h6 className="text-[10px] font-black text-primary-600 uppercase mb-2">Regular Servicing</h6>
                                    <List className="text-[10px] text-slate-500 space-y-1">
                                        <ListItem>Oil Change: Every 5,000-10,000 km.</ListItem>
                                        <ListItem>Tire Rotation: Every 10,000 km.</ListItem>
                                        <ListItem>Brake Inspection: Every 20,000 km.</ListItem>
                                        <ListItem>Major Service: Per manufacturer schedule.</ListItem>
                                    </List>
                                </div>
                                <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-3xl">
                                    <h6 className="text-[10px] font-black text-slate-800 dark:text-slate-200 uppercase mb-2">Check Cycles</h6>
                                    <p className="text-[10px] text-slate-500 leading-relaxed italic">Daily Pre-trip check (Driver); Weekly Log/Cleanliness review (Team Leader).</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h6 className="text-[10px] font-black text-red-600 uppercase mb-4 tracking-widest border-b pb-1">Replacement Criteria</h6>
                                <Paragraph className="text-[11px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed italic">
                                    Plan replacement at 200,000+ km, or if frequent breakdowns impact reliability, or if repair costs exceed economic value.
                                </Paragraph>
                                <Blockquote type="important" title="Service Reliability">
                                    Operations Responsible schedules maintenance during light work periods. Immediate reporting of mechanical issues is mandatory.
                                </Blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}


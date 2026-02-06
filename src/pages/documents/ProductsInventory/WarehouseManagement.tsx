import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';

const WarehouseLayoutMap = () => {
    return (
        <div className="relative w-full h-[400px] bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 overflow-hidden">
            <div className="absolute inset-0 opacity-20 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="relative h-full grid grid-cols-6 grid-rows-4 gap-4">
                <div className="col-start-1 row-start-2 row-end-4 border-r-4 border-dashed border-blue-400 flex flex-col items-center justify-center bg-blue-50/50 dark:bg-blue-900/10 rounded-l-lg">
                    <span className="text-xs font-bold text-blue-500 rotate-90 uppercase whitespace-nowrap tracking-wider">Receiving Gate</span>
                </div>

                {/* Zone A: Fire Eq */}
                <div className="col-start-2 col-end-4 row-start-1 row-end-2 bg-white dark:bg-slate-950 border-2 border-red-500/20 rounded-lg p-3 flex flex-col justify-between shadow-sm">
                    <div className="text-xs font-bold text-red-600 uppercase">Zone A</div>
                    <span className="text-xs font-bold text-slate-500 uppercase">Fire Equipment</span>
                </div>

                {/* Zone B: Hazmat */}
                <div className="col-start-4 col-end-5 row-start-1 row-end-2 bg-amber-500/5 border-2 border-amber-500/20 rounded-lg p-3 flex flex-col justify-between">
                    <div className="text-xs font-bold text-amber-600 uppercase">Zone B</div>
                    <span className="text-xs font-bold text-slate-500 uppercase">Hazmat</span>
                </div>

                {/* Zone C: PPE */}
                <div className="col-start-5 col-end-6 row-start-1 row-end-3 bg-blue-500/5 border-2 border-blue-500/20 rounded-lg p-3 flex flex-col justify-between">
                    <div className="text-xs font-bold text-blue-600 uppercase">Zone C</div>
                    <span className="text-xs font-bold text-slate-500 uppercase">PPE / Wear</span>
                </div>

                <div className="col-start-2 col-end-5 row-start-2 row-end-4 bg-slate-200/30 dark:bg-slate-800/30 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-slate-400 uppercase tracking-widest font-bold underline decoration-slate-300">Central Operational Aisle</span>
                </div>

                {/* Zone D: Signage */}
                <div className="col-start-2 col-end-4 row-start-4 row-end-5 border-2 border-emerald-500/20 bg-emerald-500/5 flex flex-col justify-between rounded-lg p-3">
                    <div className="text-xs font-bold text-emerald-600 uppercase">Zone D</div>
                    <span className="text-xs font-bold text-slate-500 uppercase">Signage</span>
                </div>

                {/* Zone E: Parts */}
                <div className="col-start-4 col-end-6 row-start-4 row-end-5 bg-purple-500/5 border-2 border-purple-500/20 rounded-lg p-3 flex flex-col justify-between">
                    <div className="text-xs font-bold text-purple-600 uppercase">Zone E</div>
                    <span className="text-xs font-bold text-slate-500 uppercase">Parts & Bin</span>
                </div>

                <div className="col-start-6 row-start-2 row-end-4 border-l-4 border-dashed border-primary-400 flex flex-col items-center justify-center bg-primary-50/50 dark:bg-primary-900/10 rounded-r-lg">
                    <span className="text-xs font-bold text-primary-500 -rotate-90 uppercase whitespace-nowrap tracking-wider">Dispatch</span>
                </div>
            </div>
        </div>
    );
};

export default function WarehouseManagement() {
    return (
        <Section id="section-3">
            <SectionHeader>SECTION 3: WAREHOUSE MANAGEMENT</SectionHeader>

            {/* 3.1 Warehouse Layout */}
            <SubSection id="warehouse-layout">
                <SubSectionHeader>3.1 Warehouse Layout & Organization</SubSectionHeader>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
                    <WarehouseLayoutMap />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h6 className="text-sm font-bold text-primary-600 uppercase mb-4 tracking-wide border-b border-slate-200 dark:border-slate-700 pb-2">Sfax Main Warehouse (Km 3.5)</h6>
                        <List>
                            <ListItem><strong>Zone A (Fire Equipment):</strong> High-security area. Heavy-duty pallet racking (2 tons/level). High-pressure cylinders kept off wet floors.</ListItem>
                            <ListItem><strong>Zone B (Hazmat):</strong> ABC Powder, CO2, AFFF. Specialized mechanical ventilation, spill containment (bunded), eyewash stations.</ListItem>
                            <ListItem><strong>Zone C (PPE & Workwear):</strong> organized by Product Type → Size → Brand. High-vis stock protected from UV/Natural light.</ListItem>
                        </List>
                    </div>
                    
                    <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h6 className="text-sm font-bold text-secondary-600 uppercase mb-4 tracking-wide border-b border-slate-200 dark:border-slate-700 pb-2">Tunis Branch Warehouse (Raoud)</h6>
                        <div className="space-y-4">
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">Focus: Fast-moving items and local tech support.</p>
                            <List>
                                <ListItem>Level 1 Fire Equipment (6kg Powder, 2kg CO2)</ListItem>
                                <ListItem>Essential PPE (Hard hats, glasses, gloves)</ListItem>
                                <ListItem>Basic Workwear (Coveralls, High-Vis)</ListItem>
                                <ListItem>Standard Fire Safety Signage</ListItem>
                            </List>
                            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                                <strong>Capacity:</strong> 20-30% of total company inventory. Weekly replenishment from Sfax.
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            {/* 3.2 Receiving Procedures */}
            <SubSection id="receiving-detailed">
                <SubSectionHeader>3.2 Daily Receiving Operations (6-Step Protocol)</SubSectionHeader>
                <Paragraph className="mb-8">Standard sequence to ensure 100% accuracy and quality compliance before stock enters the <strong>WAVE PLUS</strong> system.</Paragraph>

                <div className="my-8">
                     <Table headers={["Step", "Action", "Details"]}>
                        <TableRow>
                            <TableCell className="font-bold">STEP 1</TableCell>
                            <TableCell className="font-bold">Pre-Receiving Preparation</TableCell>
                            <TableCell>Review expected deliveries in WAVE PLUS. Clear dock area, assign staff, and prepare material handling equipment.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold">STEP 2</TableCell>
                            <TableCell className="font-bold">Arrival & Initial Check</TableCell>
                            <TableCell>Verify driver ID and Delivery Note. Safety brief for site rules. Initial assessment of load condition.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold">STEP 3</TableCell>
                            <TableCell className="font-bold">Physical Unloading</TableCell>
                            <TableCell>Systematic unloading (one type at a time). Two-person count for high-value items. Photograph damage.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold">STEP 4</TableCell>
                            <TableCell className="font-bold">Quality Control (L1 - L3)</TableCell>
                            <TableCell>L1: Visual package check. L2: CE/EN standards audit. L3: Detailed testing (for new suppliers or suspected issues).</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold">STEP 5</TableCell>
                            <TableCell className="font-bold">Documentation (GRN)</TableCell>
                            <TableCell>Create Goods Received Note in WAVE PLUS. Record inspection results and obtain driver signature acknowledgment.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold">STEP 6</TableCell>
                            <TableCell className="font-bold">System Update</TableCell>
                            <TableCell>Automatic stock increase in system. Physical transfer to location (Zone-Row-Bay-Shelf). Strict FIFO compliance.</TableCell>
                        </TableRow>
                     </Table>
                </div>
            </SubSection>

            {/* 3.3 Storage Standards */}
            <SubSection id="storage-standards">
                <SubSectionHeader>3.3 Storage Standards by Product Type</SubSectionHeader>
                <div className="my-8">
                    <Table headers={["Category", "Storage Requirements"]}>
                        <TableRow>
                            <TableCell className="font-bold text-red-600">Fire Equipment</TableCell>
                            <TableCell>Heavy racking; no direct sunlight. 50kg units floor-stored only (secured). Segregate types to prevent contamination.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold text-amber-600">Refilling Materials</TableCell>
                            <TableCell>ABC Powder in sealed containers (&lt;50% RH). CO2 in ventilated areas only. AFFF in bunded storage; avoid freezing.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold text-blue-600">PPE & Workwear</TableCell>
                            <TableCell>Sorted by Type → Size → Brand. High-vis away from UV. Dust-protected shelving for respirators.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold text-emerald-600">Signage & Custom</TableCell>
                            <TableCell>Flat/A-frame storage to prevent bending. Humidity control for printed surfaces. Clean branding area.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold text-purple-600">Parts & Consumables</TableCell>
                            <TableCell>Labeled bin system. High-movement items near dispatch. O-Rings and Seals protected from dirt/moisture. Strict FIFO for tags.</TableCell>
                        </TableRow>
                    </Table>
                </div>
            </SubSection>

            {/* 3.4 Stock Identification */}
            <SubSection id="stock-identification">
                <SubSectionHeader>3.4 Stock Location & Identification System</SubSectionHeader>
                
                <div className="my-8">
                    <Blockquote title="5-Section Alpha-Numeric Locator" type="info">
                        <Paragraph>
                            Format: <strong>ZONE - ROW - BAY - SHELF - POS</strong>
                        </Paragraph>
                        <div className="flex flex-wrap gap-2 font-mono text-lg font-bold my-4 dark:text-white">
                            <span className="px-2 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">A</span>
                            <span className="text-slate-400">-</span>
                            <span className="px-2 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-blue-500">01</span>
                            <span className="text-slate-400">-</span>
                            <span className="px-2 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-emerald-500">05</span>
                            <span className="text-slate-400">-</span>
                            <span className="px-2 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-orange-500">B</span>
                            <span className="text-slate-400">-</span>
                            <span className="px-2 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-purple-500">3</span>
                        </div>
                        <Paragraph className="text-sm">
                            Example: <strong>A-01-05-B-3</strong> assigns the item to Zone A (Fire Eq), Row 1, Bay 5, Shelf B, Position 3.
                        </Paragraph>
                    </Blockquote>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h6 className="text-sm font-bold text-slate-800 dark:text-white uppercase mb-3">Identification Rules</h6>
                        <List>
                            <ListItem>One primary location per SKU; overflow linked in system.</ListItem>
                            <ListItem>Location label at every bay; product code at every bin.</ListItem>
                            <ListItem>Barcode/QR scanning for all put-away and pick operations.</ListItem>
                        </List>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h6 className="text-sm font-bold text-primary-600 uppercase mb-3">WAVE PLUS Logic</h6>
                        <List>
                             <ListItem>Automated location suggestion for new arrivals.</ListItem>
                             <ListItem>Optimized pick pathing based on aisle sequence.</ListItem>
                             <ListItem>Movement history logs for every internal transfer.</ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>

            {/* 3.5 Picking & Issuing */}
            <SubSection id="picking-issuing">
                <SubSectionHeader>3.5 Picking & Issuing Procedures</SubSectionHeader>
                
                <div className="my-8">
                    <h6 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-4">Standard Issuing Sequence</h6>
                    <List type="ordered">
                        <ListItem><strong>Pick List Generation:</strong> Generated via Sales Order or Service Job. Priority items flagged.</ListItem>
                        <ListItem><strong>Execution:</strong> Follow path by zone/aisle. Scan verify product and location.</ListItem>
                        <ListItem><strong>Staging:</strong> Stage in dispatch. Verify quantity against physical pick.</ListItem>
                        <ListItem><strong>Issue/Sign:</strong> Issue to recipient. Digital sign-off in WAVE PLUS.</ListItem>
                        <ListItem><strong>Update:</strong> Instant stock decrease. Automatic reorder trigger if below Min.</ListItem>
                    </List>
                </div>

                <Blockquote title="First-In First-Out (FIFO) Mandate" type="warning">
                    <Paragraph>
                        Mandatory for all cylinders (leakage risk) and chemical agents (finite performance window). Newer stock must always be placed <strong>BEHIND</strong> existing stock to ensure natural picking rotation.
                    </Paragraph>
                </Blockquote>
            </SubSection>

            {/* 3.6 Hazardous Materials */}
            <SubSection id="hazmat-handling">
                <SubSectionHeader>3.6 Hazardous Materials Handling</SubSectionHeader>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <Blockquote title="Hazmat Scope & Protection" type="danger">
                        <List>
                             <ListItem><strong>Scope:</strong> ABC Powder, CO2, AFFF Concentrates, Wet chemicals, and industrial cleaning agents.</ListItem>
                             <ListItem><strong>Handling:</strong> PPE mandatory per SDS (Safety Data Sheets). No eating/drinking in Zones B/Hazmat.</ListItem>
                             <ListItem><strong>Spills:</strong> Contain immediately with spill kits. Report all incidents per Safety Protocol.</ListItem>
                        </List>
                    </Blockquote>
                    
                    <div className="flex flex-col gap-4">
                        <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                            <h6 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-3 tracking-wider">Transport Rules</h6>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Secure all containers during transport; zero leakage policy. Do not transport incompatible chemicals in the same vehicle without secondary containment.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
                            <h6 className="text-sm font-bold text-primary-600 uppercase mb-3">Facility Requirement</h6>
                            <p className="text-sm text-slate-600 dark:text-slate-400">SDS must be displayed at Zone B entry. All personnel must complete Hazmat Handling Level 1 training before unescorted access.</p>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

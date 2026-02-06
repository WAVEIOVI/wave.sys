import { useTranslation } from 'react-i18next';
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';

export default function OtherFireEquipment() {
    const { t } = useTranslation();

    return (
        <Section id="section-3">
            <SectionHeader>{t('servicedelivery.otherFireEquipment.title')}</SectionHeader>

            <SubSection id="fire-hose-reels">
                <SubSectionHeader>{t('servicedelivery.otherFireEquipment.hoseReel.sectionNumber')} {t('servicedelivery.otherFireEquipment.hoseReel.title')}</SubSectionHeader>
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                                {t('servicedelivery.otherFireEquipment.hoseReel.intro')}
                            </h4>
                            <List className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
                                <ListItem><strong>Fixed installation:</strong> Wall-mounted reel with hose</ListItem>
                                <ListItem><strong>Water supply:</strong> Connected to building water system</ListItem>
                                <ListItem><strong>Typically:</strong> 20-30 meters of hose</ListItem>
                                <ListItem><strong>Nozzle:</strong> For water projection</ListItem>
                                <ListItem><strong>Usage:</strong> First-response firefighting before fire department arrives</ListItem>
                            </List>
                        </div>
                        <div className="p-6 bg-primary-50/50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/30 rounded-3xl">
                            <h4 className="text-sm font-bold text-primary-900 dark:text-primary-100 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                                SS+ Services
                            </h4>
                            <List className="text-xs space-y-1 text-primary-800/70 dark:text-primary-400/70">
                                <ListItem>Inspection (semi-annual and annual)</ListItem>
                                <ListItem>Testing (water flow and pressure)</ListItem>
                                <ListItem>Repairs (hose replacement, reel mechanism, nozzle)</ListItem>
                                <ListItem>Maintenance (lubrication, rust prevention)</ListItem>
                            </List>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{t('servicedelivery.otherFireEquipment.hoseReel.inspection.procedure.title')}</span>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
                        </div>
                        <div className="flex justify-center gap-8 text-[10px] items-center italic text-slate-500">
                            <span className="flex items-center gap-2 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                Frequency: Semi-annual & Annual
                            </span>
                            <span className="flex items-center gap-2 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                Time: 10-15 minutes/reel
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm">
                                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                                    <h5 className="text-[11px] font-black uppercase tracking-wider">{t('servicedelivery.otherFireEquipment.hoseReel.inspection.checklist.title')}</h5>
                                    <span className="text-[9px] px-2 py-0.5 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-400">Standard</span>
                                </div>
                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    <div className="space-y-3">
                                        <div>
                                            <h6 className="text-[10px] font-bold text-slate-400 uppercase mb-2">1. Location & Signage</h6>
                                            <List className="text-[11px] space-y-1">
                                                <ListItem>{t('servicedelivery.otherFireEquipment.hoseReel.inspection.checklist.items.signage')}</ListItem>
                                                <ListItem>Area well-lit & clear space</ListItem>
                                            </List>
                                        </div>
                                        <div>
                                            <h6 className="text-[10px] font-bold text-slate-400 uppercase mb-2">2. Reel Mechanism</h6>
                                            <List className="text-[11px] space-y-1">
                                                <ListItem>Frame secure to wall (not loose)</ListItem>
                                                <ListItem>Reel rotates freely (not stuck)</ListItem>
                                                <ListItem>Guide mechanism works smoothly</ListItem>
                                                <ListItem>{t('servicedelivery.otherFireEquipment.hoseReel.inspection.checklist.items.cabinet')}</ListItem>
                                            </List>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <h6 className="text-[10px] font-bold text-slate-400 uppercase mb-2">3. Hose & Nozzle</h6>
                                            <List className="text-[11px] space-y-1">
                                                <ListItem>{t('servicedelivery.otherFireEquipment.hoseReel.inspection.checklist.items.hose')}</ListItem>
                                                <ListItem>{t('servicedelivery.otherFireEquipment.hoseReel.inspection.checklist.items.nozzle')}</ListItem>
                                                <ListItem>{t('servicedelivery.otherFireEquipment.hoseReel.inspection.checklist.items.connection')}</ListItem>
                                            </List>
                                        </div>
                                        <div>
                                            <h6 className="text-[10px] font-bold text-slate-400 uppercase mb-2">4. Water Supply</h6>
                                            <List className="text-[11px] space-y-1">
                                                <ListItem>Supply valve accessible</ListItem>
                                                <ListItem>{t('servicedelivery.otherFireEquipment.hoseReel.inspection.checklist.items.valve')}</ListItem>
                                                <ListItem>Valve clearly marked (Open/Close)</ListItem>
                                            </List>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary-500/20 transition-colors"></div>
                                <h6 className="text-[10px] font-black text-primary-400 uppercase mb-4 tracking-widest relative">Annual Operational Test</h6>
                                <div className="space-y-4 relative">
                                    <div className="space-y-2">
                                        <p className="text-[10px] text-slate-400 font-bold italic border-b border-slate-800 pb-1">Water Flow Test:</p>
                                        <List className="text-[10px] text-slate-300 space-y-1">
                                            <ListItem>Deploy 5-10m of hose</ListItem>
                                            <ListItem>Verify free flow & pressure</ListItem>
                                            <ListItem>Check for leaks in hose material</ListItem>
                                            <ListItem>Test nozzle spray patterns</ListItem>
                                            <ListItem>{t('servicedelivery.otherFireEquipment.hoseReel.inspection.procedure.rewind')}</ListItem>
                                        </List>
                                    </div>
                                    <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                        <p className="text-[9px] text-primary-300 font-bold mb-1 uppercase">Pressure Test:</p>
                                        <p className="text-[10px] text-slate-400 leading-tight">{t('servicedelivery.otherFireEquipment.hoseReel.inspection.checklist.items.pressure')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 text-center">{t('servicedelivery.otherFireEquipment.hoseReel.commonIssues.title')}</h4>
                            <Table>
                                <TableRow isHeader>
                                    <TableCell isHeader>Issue</TableCell>
                                    <TableCell isHeader>Possible Cause</TableCell>
                                    <TableCell isHeader>Remedy</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="text-xs font-bold">{t('servicedelivery.otherFireEquipment.hoseReel.commonIssues.items.reelJam.title')}</TableCell>
                                    <TableCell className="text-xs">Rust, lack of lubrication</TableCell>
                                    <TableCell className="text-xs text-blue-600 dark:text-blue-400">Lubricate mechanism, remove rust</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="text-xs font-bold">{t('servicedelivery.otherFireEquipment.hoseReel.commonIssues.items.hoseDamage.title')}</TableCell>
                                    <TableCell className="text-xs">{t('servicedelivery.otherFireEquipment.hoseReel.commonIssues.items.hoseDamage.issue')}</TableCell>
                                    <TableCell className="text-xs text-red-600 dark:text-red-400 font-bold">{t('servicedelivery.otherFireEquipment.hoseReel.commonIssues.items.hoseDamage.action')}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="text-xs font-bold">Low Pressure</TableCell>
                                    <TableCell className="text-xs">Building supply, blockage</TableCell>
                                    <TableCell className="text-xs">Check valve, test building pressure</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="text-xs font-bold">{t('servicedelivery.otherFireEquipment.hoseReel.commonIssues.items.nozzleClog.title')}</TableCell>
                                    <TableCell className="text-xs">{t('servicedelivery.otherFireEquipment.hoseReel.commonIssues.items.nozzleClog.issue')}</TableCell>
                                    <TableCell className="text-xs">{t('servicedelivery.otherFireEquipment.hoseReel.commonIssues.items.nozzleClog.action')}</TableCell>
                                </TableRow>
                            </Table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mr-8 -mt-8"></div>
                            <h5 className="text-xs font-black uppercase mb-4 text-slate-400 tracking-widest border-b dark:border-slate-800 pb-2">Routine Maintenance</h5>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">1. Lubrication & Rust Prevention</p>
                                    <p className="text-[10px] text-slate-500">Apply lubricant to pivot points. Wire brush any surface rust and apply preventive paint.</p>
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">2. Exercise Hose</p>
                                    <p className="text-[10px] text-slate-500">Fully deploy and rewind hose annually to prevent sticking and flat-spotting.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-100 dark:border-emerald-900/30 rounded-[2.5rem] relative overflow-hidden">
                            <div className="absolute top-4 right-6 text-emerald-200 dark:text-emerald-900/50">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                            </div>
                            <h5 className="text-xs font-black uppercase mb-4 text-emerald-600 dark:text-emerald-400 tracking-widest border-b border-emerald-100 dark:border-emerald-900/30 pb-2">Hose Replacement</h5>
                            <div className="space-y-3">
                                <p className="text-[10px] text-emerald-800/80 dark:text-emerald-300/80 font-bold uppercase">When to replace:</p>
                                <p className="text-[10px] text-slate-600 dark:text-slate-400 italic mb-2 leading-relaxed">If cracked, brittle, leaking, or failed pressure test.</p>
                                <div className="p-3 bg-white/50 dark:bg-emerald-950/40 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                                    <p className="text-[10px] text-emerald-700 dark:text-emerald-400 leading-relaxed">
                                        <strong>Steps:</strong> Close water → Drain → Disconnect (Inlet/Nozzle) → Install new (19/25mm fire-rated) → Use new washer → Rewind → Pressure Test → Update WAVE PLUS.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="fire-blankets">
                <SubSectionHeader>{t('servicedelivery.otherFireEquipment.fireBlanket.sectionNumber')} {t('servicedelivery.otherFireEquipment.fireBlanket.title')}</SubSectionHeader>
                <div className="space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-4">
                        <div className="space-y-6">
                            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl">
                                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3">Overview</h4>
                                <Paragraph className="text-xs text-slate-500 leading-relaxed">
                                    {t('servicedelivery.otherFireEquipment.fireBlanket.intro')}
                                </Paragraph>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
                                <h4 className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest border-b pb-2">{t('servicedelivery.otherFireEquipment.fireBlanket.inspection.title')}</h4>
                                <List className="text-[11px] space-y-2">
                                    <ListItem><strong>1. Location & Signage:</strong> {t('servicedelivery.otherFireEquipment.fireBlanket.inspection.items.signage')}</ListItem>
                                    <ListItem><strong>2. Case/Housing:</strong> {t('servicedelivery.otherFireEquipment.fireBlanket.inspection.items.container')}</ListItem>
                                    <ListItem><strong>3. Seal & Tamper:</strong> {t('servicedelivery.otherFireEquipment.fireBlanket.inspection.items.seal')}</ListItem>
                                    <ListItem><strong>4. Blanket Condition:</strong> {t('servicedelivery.otherFireEquipment.fireBlanket.inspection.items.tabs')}</ListItem>
                                    <ListItem><strong>5. Expiration:</strong> {t('servicedelivery.otherFireEquipment.fireBlanket.inspection.items.expiry')}</ListItem>
                                </List>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <Blockquote type="warning" title="Annual Pull Test">
                                <div className="space-y-2">
                                    <p className="text-[11px] leading-relaxed">Caution: Only do this annually to avoid repeated handling damage.</p>
                                    <List className="text-[11px] space-y-1">
                                        <ListItem>1. Break seal carefully and pull blanket out 25-50cm.</ListItem>
                                        <ListItem>2. Inspect fabric for holes, tears, or thin spots.</ListItem>
                                        <ListItem>3. Verify no oil/chemical contamination or deterioration.</ListItem>
                                        <ListItem>4. Return carefully to case and install new seal.</ListItem>
                                    </List>
                                </div>
                            </Blockquote>

                            <div className="p-8 bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-100 dark:border-emerald-900/30 rounded-[2.5rem] relative overflow-hidden">
                                <h6 className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase mb-4 tracking-widest">Replacement Procedure</h6>
                                <div className="space-y-4">
                                    <p className="text-[10px] text-slate-600 dark:text-slate-400 italic">{t('servicedelivery.otherFireEquipment.fireBlanket.note.content')}</p>
                                    <div className="p-4 bg-white/60 dark:bg-emerald-950/40 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
                                        <p className="text-[10px] text-emerald-800/80 dark:text-emerald-300/80 leading-relaxed font-medium">
                                            <strong>Steps:</strong> Install case at 1.0-1.5m height → Insert blanket → Apply seal & service tag → Install signage → <strong>Demonstrate use:</strong> Pull taps down, hold edges, drape over fire, leave until cool.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="smoke-detectors">
                <SubSectionHeader>{t('servicedelivery.otherFireEquipment.smokeDetector.sectionNumber')} {t('servicedelivery.otherFireEquipment.smokeDetector.title')}</SubSectionHeader>
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3">{t('servicedelivery.otherFireEquipment.smokeDetector.overview.title')}</h4>
                            <p className="text-xs text-slate-500 leading-relaxed italic mb-4">
                                {t('servicedelivery.otherFireEquipment.smokeDetector.overview.intro')}
                            </p>
                            <div className="p-4 bg-primary-50/50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/30 rounded-2xl">
                                <h6 className="text-[10px] font-black uppercase text-primary-600 dark:text-primary-400 mb-2 tracking-wider">SS+ Service Level</h6>
                                <List className="text-[10px] text-slate-600 dark:text-slate-400 space-y-1">
                                    <ListItem>Visual inspection & cleaning</ListItem>
                                    <ListItem>Functional testing (button/smoke)</ListItem>
                                    <ListItem>Battery replacement (for portable units)</ListItem>
                                    <ListItem className="text-red-500 font-bold">NOT for complex systems (refer specialist)</ListItem>
                                </List>
                            </div>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest border-b pb-2">{t('servicedelivery.otherFireEquipment.smokeDetector.inspection.checklist.title')}</h4>
                                <span className="text-[9px] px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full font-bold">Quarterly</span>
                            </div>
                            <List className="text-[11px] space-y-2">
                                <ListItem><strong>1. Location:</strong> {t('servicedelivery.otherFireEquipment.smokeDetector.inspection.checklist.items.location')}</ListItem>
                                <ListItem><strong>2. Physical Condition:</strong> Housing intact, clean (no dust), mounting secure.</ListItem>
                                <ListItem><strong>3. Power Status:</strong> {t('servicedelivery.otherFireEquipment.smokeDetector.inspection.checklist.items.power')}</ListItem>
                                <ListItem><strong>4. Functional Test:</strong> {t('servicedelivery.otherFireEquipment.smokeDetector.inspection.checklist.items.test')}</ListItem>
                            </List>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm italic">
                            <h6 className="text-[10px] font-black text-slate-400 uppercase mb-6 tracking-widest border-b pb-2">Functional Test Methods</h6>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <h5 className="font-bold text-xs flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                                        Test Button Method (Standard)
                                    </h5>
                                    <p className="text-[11px] text-slate-500 leading-relaxed">
                                        {t('servicedelivery.otherFireEquipment.smokeDetector.inspection.procedure.testButton')}
                                    </p>
                                    <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-[10px] text-slate-400">
                                        PASS = Clear alarm / FAIL = Weak/No alarm
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h5 className="font-bold text-xs text-primary-600 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                                        Smoke Test Method (Annual)
                                    </h5>
                                    <p className="text-[11px] text-slate-500 leading-relaxed">
                                        {t('servicedelivery.otherFireEquipment.smokeDetector.inspection.procedure.sensitivityTest')}
                                    </p>
                                    <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-[10px] text-primary-600/70">
                                        Clear air with fan to reset alarm.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] text-white shadow-xl flex flex-col justify-center">
                            <h6 className="text-[10px] font-black text-primary-400 uppercase mb-4 tracking-widest">{t('servicedelivery.otherFireEquipment.smokeDetector.maintenance.title')}</h6>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-[11px] font-bold text-slate-300 mb-1">Annual Cleaning:</p>
                                    <p className="text-[10px] text-slate-500">{t('servicedelivery.otherFireEquipment.smokeDetector.maintenance.items.cleaning')}</p>
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold text-slate-300 mb-1">Battery Replacement:</p>
                                    <p className="text-[10px] text-slate-500">{t('servicedelivery.otherFireEquipment.smokeDetector.maintenance.items.battery')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-red-50 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 rounded-3xl">
                        <p className="text-[11px] text-red-600 dark:text-red-400 font-bold italic text-center">
                            {t('servicedelivery.otherFireEquipment.smokeDetector.maintenance.items.replacement')}
                        </p>
                    </div>
                </div>
            </SubSection>

            <SubSection id="fire-alarm-systems">
                <SubSectionHeader>{t('servicedelivery.otherFireEquipment.fireAlarm.sectionNumber')} {t('servicedelivery.otherFireEquipment.fireAlarm.title')}</SubSectionHeader>
                <div className="space-y-8">
                    <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] italic">
                        <h6 className="text-[10px] font-black text-primary-600 uppercase mb-4 tracking-widest text-center">{t('servicedelivery.otherFireEquipment.fireAlarm.preparation.title')}</h6>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <h5 className="font-bold text-xs">1. Customer Coordination:</h5>
                                <List className="text-[11px] text-slate-500 space-y-1">
                                    <ListItem>{t('servicedelivery.otherFireEquipment.fireAlarm.preparation.notify')}</ListItem>
                                    <ListItem>{t('servicedelivery.otherFireEquipment.fireAlarm.preparation.coordinate')}</ListItem>
                                    <ListItem>Schedule for least disruptive time</ListItem>
                                </List>
                            </div>
                            <div className="space-y-3">
                                <h5 className="font-bold text-xs">2. System Understanding:</h5>
                                <List className="text-[11px] text-slate-500 space-y-1">
                                    <ListItem>Review previous reports & recurring issues</ListItem>
                                    <ListItem>Identify control panel location & access codes</ListItem>
                                    <ListItem>Coordinate with safety officers</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">{t('servicedelivery.otherFireEquipment.fireAlarm.inspection.procedure.title')}</h4>
                            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm hover:border-primary-500/30 transition-colors">
                                <h5 className="font-black text-[10px] text-primary-500 uppercase mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">PART 1: CONTROL PANEL</h5>
                                <List className="text-[10px] text-slate-500 space-y-2">
                                    <ListItem><strong>Visual:</strong> {t('servicedelivery.otherFireEquipment.fireAlarm.inspection.procedure.panel')}</ListItem>
                                    <ListItem><strong>Display:</strong> Legible LCD, clean/dry housing.</ListItem>
                                    <ListItem><strong>Docs:</strong> Zone maps & instructions present.</ListItem>
                                    <ListItem><strong>Battery:</strong> {t('servicedelivery.otherFireEquipment.fireAlarm.inspection.procedure.batteryTest')}</ListItem>
                                </List>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm hover:border-primary-500/30 transition-colors md:scale-105 z-10">
                                <h5 className="font-black text-[10px] text-primary-500 uppercase mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">PART 2: DEVICE TESTING</h5>
                                <div className="space-y-3">
                                    <p className="text-[10px] text-slate-400 font-bold italic">Test min 10% of devices (rotate quarterly):</p>
                                    <List className="text-[10px] text-slate-500 space-y-2">
                                        <ListItem><strong>Detectors:</strong> {t('servicedelivery.otherFireEquipment.fireAlarm.inspection.procedure.detectors')}</ListItem>
                                        <ListItem><strong>Call Points:</strong> {t('servicedelivery.otherFireEquipment.fireAlarm.inspection.procedure.callPoints')}</ListItem>
                                        <ListItem><strong>Alarms:</strong> {t('servicedelivery.otherFireEquipment.fireAlarm.inspection.procedure.sounders')}</ListItem>
                                    </List>
                                </div>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm hover:border-primary-500/30 transition-colors">
                                <h5 className="font-black text-[10px] text-primary-500 uppercase mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">PART 3: FUNCTIONALITY</h5>
                                <List className="text-[10px] text-slate-500 space-y-2">
                                    <ListItem><strong>Zones:</strong> Verify panel identifies correct zone.</ListItem>
                                    <ListItem><strong>Reset:</strong> {t('servicedelivery.otherFireEquipment.fireAlarm.inspection.procedure.reset')}</ListItem>
                                    <ListItem><strong>Monitoring:</strong> Confirm test signal received by station.</ListItem>
                                    <ListItem><strong>Completion:</strong> {t('servicedelivery.otherFireEquipment.fireAlarm.inspection.procedure.report')}</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                        
                            <Table>
                                <TableRow isHeader>
                                    <TableCell isHeader>Issue Found</TableCell>
                                    <TableCell isHeader>Possible Cause</TableCell>
                                    <TableCell isHeader>Action</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="text-xs font-bold">Wrong Zone Indicated</TableCell>
                                    <TableCell className="text-xs">Programming/Wiring</TableCell>
                                    <TableCell className="text-xs text-red-500">Note for specialist</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="text-xs font-bold">{t('servicedelivery.otherFireEquipment.fireAlarm.commonIssues.items.panelFault')}</TableCell>
                                    <TableCell className="text-xs">Fault/Battery/Dead device</TableCell>
                                    <TableCell className="text-xs">Document error code</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="text-xs font-bold">{t('servicedelivery.otherFireEquipment.fireAlarm.commonIssues.items.sounderFailure')}</TableCell>
                                    <TableCell className="text-xs">Wiring/Volume/Failure</TableCell>
                                    <TableCell className="text-xs text-orange-500">Refer to specialist</TableCell>
                                </TableRow>
                            </Table>
                        <div className="space-y-6">
                            <Blockquote type="warning" title={t('servicedelivery.otherFireEquipment.fireAlarm.limitations.title')}>
                                <p className="text-[11px] leading-relaxed">
                                    {t('servicedelivery.otherFireEquipment.fireAlarm.limitations.intro')} {t('servicedelivery.otherFireEquipment.fireAlarm.limitations.note')}
                                </p>
                            </Blockquote>
                            <div className="p-6 bg-slate-900 border border-slate-800 rounded-[2.5rem] text-white">
                                <h6 className="text-[9px] font-black text-primary-400 uppercase mb-2 tracking-widest pb-1 border-b border-white/5">Completion & WAVE PLUS</h6>
                                <p className="text-[10px] text-slate-400 leading-relaxed mb-4">
                                    System must be returned to <strong>NORMAL (Green)</strong> status before leaving. All devices tested must be listed specifically in the test report.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}
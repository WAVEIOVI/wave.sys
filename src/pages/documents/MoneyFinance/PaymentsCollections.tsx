
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';
import { useTranslation } from 'react-i18next';

export default function PaymentsCollections() {
    const { t } = useTranslation();
    
    return (
        <Section id="section-3">
            <SectionHeader>{t('moneyfinance.paymentscollections.section.header')}</SectionHeader>

            <SubSection id="payment-methods">
                <SubSectionHeader>{t('moneyfinance.paymentscollections.paymentmethods.subsectionheader')}</SubSectionHeader>

                {/* ROW 1: PREFERRED METHODS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    {/* TRANSFER */}
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-10 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative p-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl h-full flex flex-col">
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-blue-600 font-black text-3xl italic tracking-tighter uppercase">{t('moneyfinance.paymentscollections.paymentmethods.transfer.title')}</div>
                                <span className="text-[10px] font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 px-3 py-1 rounded-full uppercase tracking-widest">{t('moneyfinance.paymentscollections.paymentmethods.transfer.badge')}</span>
                            </div>
                            <p className="text-[12px] text-slate-500 leading-relaxed flex-grow italic mb-6">{t('moneyfinance.paymentscollections.paymentmethods.transfer.description')}</p>
                            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase text-slate-400 italic">{t('moneyfinance.paymentscollections.paymentmethods.transfer.allocationlabel')}</span>
                                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-tighter underline underline-offset-4 decoration-blue-500">{t('moneyfinance.paymentscollections.paymentmethods.transfer.allocationvalue')}</span>
                            </div>
                        </div>
                    </div>

                    {/* BANK CHECKS */}
                    <div className="p-7 bg-slate-950 text-white rounded-3xl flex flex-col relative overflow-hidden group border border-slate-800 shadow-2xl">
                        <div className="absolute top-0 right-0 p-6 opacity-10 font-black text-7xl text-primary-500/30">CHECKS</div>
                        <h5 className="font-bold text-xl mb-3 text-primary-400 tracking-tight uppercase italic">{t('moneyfinance.paymentscollections.paymentmethods.checks.title')}</h5>
                        <p className="text-[12px] text-slate-400 leading-relaxed mb-8">{t('moneyfinance.paymentscollections.paymentmethods.checks.description')}</p>
                        <div className="bg-slate-900/80 p-5 rounded-[1.5rem] border border-slate-800/80 backdrop-blur-sm">
                            <div className="text-[10px] uppercase font-black text-slate-500 mb-3 tracking-[0.2em]">Security Protocol</div>
                            <List className="text-[10px] text-slate-400 space-y-2">
                                <ListItem>Verify signature, numeric/word date match perfectly.</ListItem>
                                <ListItem>Mandatory deposit within 1 business day of receipt.</ListItem>
                                <ListItem>High-res scan required for Softcom customer records.</ListItem>
                            </List>
                        </div>
                    </div>
                </div>

                {/* ROW 2: ALTERNATIVE & TRADITIONAL METHODS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    {/* TRAITE BANCAIRE */}
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-3xl blur opacity-10 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative p-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl h-full flex flex-col shadow-lg overflow-hidden">
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-purple-600 font-black text-2xl italic tracking-tighter uppercase">{t('moneyfinance.paymentscollections.paymentmethods.traite.title')}</div>
                                <div className="text-[40px] opacity-10 font-black text-purple-600 absolute bottom-4 right-4 rotate-12">{t('moneyfinance.paymentscollections.paymentmethods.traite.watermark')}</div>
                            </div>
                            <p className="text-[11px] text-slate-500 leading-relaxed mb-6 italic">{t('moneyfinance.paymentscollections.paymentmethods.traite.description')}</p>
                            
                            <div className="space-y-3 mt-auto">
                                {[
                                    { label: t('moneyfinance.paymentscollections.paymentmethods.traite.accounting'), val: t('moneyfinance.paymentscollections.paymentmethods.traite.accountingvalue') },
                                    { label: t('moneyfinance.paymentscollections.paymentmethods.traite.lodgement'), val: t('moneyfinance.paymentscollections.paymentmethods.traite.lodgementvalue') },
                                    { label: t('moneyfinance.paymentscollections.paymentmethods.traite.dishonor'), val: t('moneyfinance.paymentscollections.paymentmethods.traite.dishonorvalue') },
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between items-center text-[10px]">
                                        <span className="font-black text-slate-400 uppercase italic">{row.label}:</span>
                                        <span className="font-bold text-purple-600 uppercase tracking-widest">{row.val}</span>
                                    </div>
                                ))}
                                <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
                                    <p className="text-[9px] text-slate-400 italic">{t('moneyfinance.paymentscollections.paymentmethods.traite.dishonornote')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VERSEMENT */}
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-br from-teal-600/20 to-emerald-600/20 rounded-3xl blur opacity-10 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative p-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl h-full flex flex-col shadow-lg overflow-hidden">
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-teal-600 font-black text-2xl italic tracking-tighter uppercase">{t('moneyfinance.paymentscollections.paymentmethods.versement.title')}</div>
                                <div className="text-[40px] opacity-10 font-black text-teal-600 absolute bottom-4 right-4 rotate-12">{t('moneyfinance.paymentscollections.paymentmethods.versement.watermark')}</div>
                            </div>
                            <p className="text-[11px] text-slate-500 leading-relaxed mb-6 italic">{t('moneyfinance.paymentscollections.paymentmethods.versement.description')}</p>
                            
                            <div className="space-y-3 mt-auto">
                                {[
                                    { label: t('moneyfinance.paymentscollections.paymentmethods.versement.verification'), val: t('moneyfinance.paymentscollections.paymentmethods.versement.verificationvalue') },
                                    { label: t('moneyfinance.paymentscollections.paymentmethods.versement.clearing'), val: t('moneyfinance.paymentscollections.paymentmethods.versement.clearingvalue') },
                                    { label: t('moneyfinance.paymentscollections.paymentmethods.versement.security'), val: t('moneyfinance.paymentscollections.paymentmethods.versement.securityvalue') },
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between items-center text-[10px]">
                                        <span className="font-black text-slate-400 uppercase italic">{row.label}:</span>
                                        <span className="font-bold text-teal-600 uppercase tracking-widest">{row.val}</span>
                                    </div>
                                ))}
                                <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
                                    <p className="text-[9px] text-slate-400 italic">{t('moneyfinance.paymentscollections.paymentmethods.versement.note')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CASH */}
                    <div className="p-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl relative flex flex-col">
                        <div className="absolute top-0 right-10 h-1 w-20 bg-red-600 rounded-b-full shadow-[0_4px_12px_rgba(220,38,38,0.3)]"></div>
                        <h5 className="font-black text-lg mb-2 text-red-600 flex items-center gap-2 uppercase italic">
                            {t('moneyfinance.paymentscollections.paymentmethods.cash.title')}
                            <span className="text-[9px] font-black bg-red-100 dark:bg-red-900/40 text-red-700 px-2 rounded-full uppercase tracking-widest">{t('moneyfinance.paymentscollections.paymentmethods.cash.restricted')}</span>
                        </h5>
                        <p className="text-[11px] text-slate-500 leading-relaxed mb-8 font-medium italic">{t('moneyfinance.paymentscollections.paymentmethods.cash.description')}</p>
                        
                        <div className="w-full space-y-4 mb-6">
                            {[
                                { label: t('moneyfinance.paymentscollections.paymentmethods.cash.maxsfax'), val: "2,000 TND" },
                                { label: t('moneyfinance.paymentscollections.paymentmethods.cash.maxtunis'), val: "1,500 TND" },
                                { label: t('moneyfinance.paymentscollections.paymentmethods.cash.dualsignlimit'), val: t('moneyfinance.paymentscollections.paymentmethods.cash.dualsignvalue') },
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between items-center text-[10px] border-b border-slate-50 dark:border-slate-800/50 pb-2">
                                    <span className="font-bold text-slate-400 uppercase tracking-tighter">{row.label}</span>
                                    <span className="font-mono font-black text-slate-900 dark:text-white underline decoration-red-900/20">{row.val}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto p-4 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-xl text-[9px] text-red-800 dark:text-red-400 italic leading-tight">
                            {t('moneyfinance.paymentscollections.paymentmethods.cash.note')}
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h5 className="font-bold text-sm text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                        {t('moneyfinance.paymentscollections.paymentmethods.dailyroutine.title')}
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                            <div className="text-[10px] font-black text-slate-400 uppercase mb-2">{t('moneyfinance.paymentscollections.paymentmethods.dailyroutine.morning.title')}</div>
                            <List className="text-[10px] space-y-1">
                                <ListItem>{t('moneyfinance.paymentscollections.paymentmethods.dailyroutine.morning.item1')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.paymentmethods.dailyroutine.morning.item2')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.paymentmethods.dailyroutine.morning.item3')}</ListItem>
                            </List>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                            <div className="text-[10px] font-black text-slate-400 uppercase mb-2">{t('moneyfinance.paymentscollections.paymentmethods.dailyroutine.midday.title')}</div>
                            <List className="text-[10px] space-y-1">
                                <ListItem>{t('moneyfinance.paymentscollections.paymentmethods.dailyroutine.midday.item1')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.paymentmethods.dailyroutine.midday.item2')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.paymentmethods.dailyroutine.midday.item3')}</ListItem>
                            </List>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                            <div className="text-[10px] font-black text-slate-400 uppercase mb-2">{t('moneyfinance.paymentscollections.paymentmethods.dailyroutine.endofday.title')}</div>
                            <List className="text-[10px] space-y-1">
                                <ListItem>{t('moneyfinance.paymentscollections.paymentmethods.dailyroutine.endofday.item1')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.paymentmethods.dailyroutine.endofday.item2')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.paymentmethods.dailyroutine.endofday.item3')}</ListItem>
                            </List>
                        </div>
                    </div>
                </div>

                <div className="p-8 bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] my-12">
                    <h5 className="font-black text-xs uppercase tracking-widest text-center mb-8 italic">{t('moneyfinance.paymentscollections.paymentmethods.allocationrules.title')}</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-center mx-auto mb-4 font-black text-primary-600">{t('moneyfinance.paymentscollections.paymentmethods.allocationrules.fifo.number')}</div>
                            <h6 className="text-[10px] font-black uppercase mb-2">{t('moneyfinance.paymentscollections.paymentmethods.allocationrules.fifo.title')}</h6>
                            <p className="text-[10px] text-slate-500 italic">{t('moneyfinance.paymentscollections.paymentmethods.allocationrules.fifo.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-center mx-auto mb-4 font-black text-primary-600">{t('moneyfinance.paymentscollections.paymentmethods.allocationrules.partial.number')}</div>
                            <h6 className="text-[10px] font-black uppercase mb-2">{t('moneyfinance.paymentscollections.paymentmethods.allocationrules.partial.title')}</h6>
                            <p className="text-[10px] text-slate-500 italic">{t('moneyfinance.paymentscollections.paymentmethods.allocationrules.partial.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-center mx-auto mb-4 font-black text-primary-600">{t('moneyfinance.paymentscollections.paymentmethods.allocationrules.overpayments.number')}</div>
                            <h6 className="text-[10px] font-black uppercase mb-2">{t('moneyfinance.paymentscollections.paymentmethods.allocationrules.overpayments.title')}</h6>
                            <p className="text-[10px] text-slate-500 italic">{t('moneyfinance.paymentscollections.paymentmethods.allocationrules.overpayments.description')}</p>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="collections">
                <SubSectionHeader>{t('moneyfinance.paymentscollections.collections.subsectionheader')}</SubSectionHeader>
                <div className="flex items-center gap-4 mb-8 p-4 bg-slate-900 rounded-2xl border border-slate-800">
                    <div className="flex-1 text-center border-r border-slate-800">
                        <div className="text-[9px] font-bold text-slate-500 uppercase italic">{t('moneyfinance.paymentscollections.collections.targets.targetrate')}</div>
                        <div className="text-2xl font-black text-green-500">{t('moneyfinance.paymentscollections.collections.targets.targetratevalue')}</div>
                    </div>
                    <div className="flex-1 text-center border-r border-slate-800">
                        <div className="text-[9px] font-bold text-slate-500 uppercase italic">{t('moneyfinance.paymentscollections.collections.targets.dsotarget')}</div>
                        <div className="text-2xl font-black text-primary-500">{t('moneyfinance.paymentscollections.collections.targets.dsotargetvalue')}</div>
                    </div>
                    <div className="flex-1 text-center">
                        <div className="text-[9px] font-bold text-slate-500 uppercase italic">{t('moneyfinance.paymentscollections.collections.targets.writeoffcap')}</div>
                        <div className="text-2xl font-black text-red-500">{t('moneyfinance.paymentscollections.collections.targets.writeoffcapvalue')}</div>
                    </div>
                </div>

                <div className="relative my-10 space-y-4">
                    <h5 className="font-black text-xs uppercase italic text-slate-400 mb-6 border-l-4 border-slate-200 dark:border-slate-800 pl-4">{t('moneyfinance.paymentscollections.collections.timeline.title')}</h5>

                    {[
                        { key: "dayminus5", color: "bg-green-500" },
                        { key: "day0", color: "bg-blue-500" },
                        { key: "day10", color: "bg-amber-500" },
                        { key: "day20", color: "bg-orange-500" },
                        { key: "day35", color: "bg-red-600" },
                        { key: "day60", color: "bg-red-800" },
                        { key: "day75", color: "bg-black" },
                    ].map((step, idx) => (
                        <div key={idx} className="flex gap-4 items-center">
                            <div className="w-20 text-right text-[10px] font-black text-slate-400 font-mono italic">{t(`moneyfinance.paymentscollections.collections.timeline.${step.key}.time`)}</div>
                            <div className={`w-3 h-3 rounded-full ${step.color} shadow-lg shadow-slate-200 dark:shadow-none`}></div>
                            <div className="flex-1 p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl flex items-center justify-between shadow-sm">
                                <span className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 w-32">{t(`moneyfinance.paymentscollections.collections.timeline.${step.key}.label`)}</span>
                                <span className="text-[10px] text-slate-500 italic flex-1 text-right">{t(`moneyfinance.paymentscollections.collections.timeline.${step.key}.action`)}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="my-10">
                    <h5 className="font-black text-xs uppercase italic text-primary-600 mb-4 border-b pb-2">{t('moneyfinance.paymentscollections.collections.negotiation.title')}</h5>
                    <Table>
                        <TableRow isHeader>
                            <TableCell isHeader>{t('moneyfinance.paymentscollections.collections.negotiation.table.amountoverdue')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.paymentscollections.collections.negotiation.table.maxinstallments')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.paymentscollections.collections.negotiation.table.decisionlevel')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('moneyfinance.paymentscollections.collections.negotiation.table.upto3k')}</TableCell>
                            <TableCell>{t('moneyfinance.paymentscollections.collections.negotiation.table.3months')}</TableCell>
                            <TableCell>{t('moneyfinance.paymentscollections.collections.negotiation.table.collectionsales')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('moneyfinance.paymentscollections.collections.negotiation.table.3001to10k')}</TableCell>
                            <TableCell>{t('moneyfinance.paymentscollections.collections.negotiation.table.6months')}</TableCell>
                            <TableCell>{t('moneyfinance.paymentscollections.collections.negotiation.table.salesrespmanager')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-black italic">{t('moneyfinance.paymentscollections.collections.negotiation.table.above10k')}</span></TableCell>
                            <TableCell><span className="underline italic">{t('moneyfinance.paymentscollections.collections.negotiation.table.casebycase')}</span></TableCell>
                            <TableCell><span className="font-black text-red-600 underline">{t('moneyfinance.paymentscollections.collections.negotiation.table.bothmanagers')}</span></TableCell>
                        </TableRow>
                    </Table>
                    <Paragraph className="text-[10px] text-slate-400 mt-2 font-bold italic">{t('moneyfinance.paymentscollections.collections.negotiation.note')}</Paragraph>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                    <div>
                        <h5 className="font-bold text-xs uppercase text-slate-500 mb-4">{t('moneyfinance.paymentscollections.collections.communication.title')}</h5>
                        <div className="space-y-4">
                            <div className="p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-xl">
                                <div className="text-[10px] font-black text-green-700 dark:text-green-400 uppercase mb-1">{t('moneyfinance.paymentscollections.collections.communication.effective.title')}</div>
                                <List className="text-[10px] text-slate-600 dark:text-slate-400">
                                    <ListItem>{t('moneyfinance.paymentscollections.collections.communication.effective.item1')}</ListItem>
                                    <ListItem>{t('moneyfinance.paymentscollections.collections.communication.effective.item2')}</ListItem>
                                    <ListItem>{t('moneyfinance.paymentscollections.collections.communication.effective.item3')}</ListItem>
                                </List>
                            </div>
                            <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-xl">
                                <div className="text-[10px] font-black text-red-700 dark:text-red-400 uppercase mb-1">{t('moneyfinance.paymentscollections.collections.communication.forbidden.title')}</div>
                                <List className="text-[10px] text-slate-600 dark:text-slate-400">
                                    <ListItem>{t('moneyfinance.paymentscollections.collections.communication.forbidden.item1')}</ListItem>
                                    <ListItem>{t('moneyfinance.paymentscollections.collections.communication.forbidden.item2')}</ListItem>
                                    <ListItem>{t('moneyfinance.paymentscollections.collections.communication.forbidden.item3')}</ListItem>
                                    <ListItem>{t('moneyfinance.paymentscollections.collections.communication.forbidden.item4')}</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-xs uppercase text-slate-500 mb-4">{t('moneyfinance.paymentscollections.collections.reporting.title')}</h5>
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl mb-4">
                            <div className="text-xs font-bold mb-2">{t('moneyfinance.paymentscollections.collections.reporting.weeklyreport.title')}</div>
                            <p className="text-[10px] text-slate-500 mb-2">{t('moneyfinance.paymentscollections.collections.reporting.weeklyreport.sentto')}</p>
                            <List className="text-[10px]">
                                <ListItem>{t('moneyfinance.paymentscollections.collections.reporting.weeklyreport.item1')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.collections.reporting.weeklyreport.item2')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.collections.reporting.weeklyreport.item3')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.collections.reporting.weeklyreport.item4')}</ListItem>
                            </List>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="cash-handling">
                <SubSectionHeader>{t('moneyfinance.paymentscollections.cashhandling.subsectionheader')}</SubSectionHeader>
                <h5 className="font-bold text-sm mb-3">{t('moneyfinance.paymentscollections.cashhandling.pettycash.title')}</h5>
                <Table>
                    <TableRow isHeader>
                        <TableCell isHeader>{t('moneyfinance.paymentscollections.cashhandling.pettycash.table.location')}</TableCell>
                        <TableCell isHeader>{t('moneyfinance.paymentscollections.cashhandling.pettycash.table.floatamount')}</TableCell>
                        <TableCell isHeader>{t('moneyfinance.paymentscollections.cashhandling.pettycash.table.custodian')}</TableCell>
                        <TableCell isHeader>{t('moneyfinance.paymentscollections.cashhandling.pettycash.table.replenishmentthreshold')}</TableCell>
                    </TableRow>
                    <TableRow><TableCell><strong>{t('moneyfinance.paymentscollections.cashhandling.pettycash.table.sfaxoffice')}</strong></TableCell><TableCell>{t('moneyfinance.paymentscollections.cashhandling.pettycash.table.sfaxamount')}</TableCell><TableCell>{t('moneyfinance.paymentscollections.cashhandling.pettycash.table.sfaxcustodian')}</TableCell><TableCell>{t('moneyfinance.paymentscollections.cashhandling.pettycash.table.sfaxthreshold')}</TableCell></TableRow>
                    <TableRow><TableCell><strong>{t('moneyfinance.paymentscollections.cashhandling.pettycash.table.tunisoffice')}</strong></TableCell><TableCell>{t('moneyfinance.paymentscollections.cashhandling.pettycash.table.tunisamount')}</TableCell><TableCell>{t('moneyfinance.paymentscollections.cashhandling.pettycash.table.tuniscustodian')}</TableCell><TableCell>{t('moneyfinance.paymentscollections.cashhandling.pettycash.table.tunisthreshold')}</TableCell></TableRow>
                    <TableRow><TableCell><strong>{t('moneyfinance.paymentscollections.cashhandling.pettycash.table.mobile')}</strong></TableCell><TableCell>{t('moneyfinance.paymentscollections.cashhandling.pettycash.table.mobileamount')}</TableCell><TableCell>{t('moneyfinance.paymentscollections.cashhandling.pettycash.table.mobilecustodian')}</TableCell><TableCell>{t('moneyfinance.paymentscollections.cashhandling.pettycash.table.mobilethreshold')}</TableCell></TableRow>
                </Table>

                <div className="my-8">
                    <h5 className="font-bold text-sm mb-4">{t('moneyfinance.paymentscollections.cashhandling.userestriction.title')}</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                            <div className="text-[10px] font-black text-green-600 uppercase mb-2">{t('moneyfinance.paymentscollections.cashhandling.userestriction.allowed.title')}</div>
                            <List className="text-[10px] text-slate-600 dark:text-slate-400">
                                <ListItem>{t('moneyfinance.paymentscollections.cashhandling.userestriction.allowed.item1')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.cashhandling.userestriction.allowed.item2')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.cashhandling.userestriction.allowed.item3')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.cashhandling.userestriction.allowed.item4')}</ListItem>
                            </List>
                        </div>
                        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
                            <div className="text-[10px] font-black text-red-600 uppercase mb-2">{t('moneyfinance.paymentscollections.cashhandling.userestriction.prohibited.title')}</div>
                            <List className="text-[10px] text-slate-600 dark:text-slate-400">
                                <ListItem>{t('moneyfinance.paymentscollections.cashhandling.userestriction.prohibited.item1')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.cashhandling.userestriction.prohibited.item2')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.cashhandling.userestriction.prohibited.item3')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.cashhandling.userestriction.prohibited.item4')}</ListItem>
                            </List>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <h5 className="font-bold text-sm mb-4">{t('moneyfinance.paymentscollections.cashhandling.customerreceipts.title')}</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                            <h6 className="font-bold text-xs mb-2">{t('moneyfinance.paymentscollections.cashhandling.customerreceipts.atoffice.title')}</h6>
                            <List className="text-[10px]">
                                <ListItem>{t('moneyfinance.paymentscollections.cashhandling.customerreceipts.atoffice.item1')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.cashhandling.customerreceipts.atoffice.item2')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.cashhandling.customerreceipts.atoffice.item3')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.cashhandling.customerreceipts.atoffice.item4')}</ListItem>
                            </List>
                        </div>
                        <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                            <h6 className="font-bold text-xs mb-2">{t('moneyfinance.paymentscollections.cashhandling.customerreceipts.atcustomersite.title')}</h6>
                            <Blockquote type="warning">{t('moneyfinance.paymentscollections.cashhandling.customerreceipts.atcustomersite.warning')}</Blockquote>
                            <List className="text-[10px]">
                                <ListItem>{t('moneyfinance.paymentscollections.cashhandling.customerreceipts.atcustomersite.item1')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.cashhandling.customerreceipts.atcustomersite.item2')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.cashhandling.customerreceipts.atcustomersite.item3')}</ListItem>
                                <ListItem>{t('moneyfinance.paymentscollections.cashhandling.customerreceipts.atcustomersite.item4')}</ListItem>
                            </List>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="bank-reconciliation">
                <SubSectionHeader>{t('moneyfinance.paymentscollections.bankreconciliation.subsectionheader')}</SubSectionHeader>
                <div className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-bl-[100%]"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h6 className="font-black text-xs uppercase text-primary-600 mb-6 tracking-widest">{t('moneyfinance.paymentscollections.bankreconciliation.workflow.title')}</h6>
                            <div>
                                {[
                                    t('moneyfinance.paymentscollections.bankreconciliation.workflow.step1'),
                                    t('moneyfinance.paymentscollections.bankreconciliation.workflow.step2'),
                                    t('moneyfinance.paymentscollections.bankreconciliation.workflow.step3'),
                                    t('moneyfinance.paymentscollections.bankreconciliation.workflow.step4'),
                                    t('moneyfinance.paymentscollections.bankreconciliation.workflow.step5'),
                                    t('moneyfinance.paymentscollections.bankreconciliation.workflow.step6')
                                ].map((step, i) => (
                                    <div key={i} className="gap-2 items-start">
                                        <p className="text-[11px] text-slate-500 font-medium">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                            <div className="text-[9px] font-black text-slate-500 uppercase mb-4 tracking-[0.3em]">{t('moneyfinance.paymentscollections.bankreconciliation.variancealert.title')}</div>
                            <div className="text-5xl font-mono font-black text-white italic">{t('moneyfinance.paymentscollections.bankreconciliation.variancealert.value')}</div>
                            <div className="text-[10px] text-primary-400 font-bold uppercase mt-4">{t('moneyfinance.paymentscollections.bankreconciliation.variancealert.label')}</div>
                            <p className="text-[9px] text-slate-500 mt-6 italic">{t('moneyfinance.paymentscollections.bankreconciliation.variancealert.note')}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 p-6 bg-slate-900 rounded-2xl border border-slate-800 text-slate-300">
                    <h6 className="font-black text-xs uppercase text-white mb-4 flex items-center gap-2">
                        <span>🔒</span> {t('moneyfinance.paymentscollections.bankreconciliation.segregation.title')}
                    </h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[11px]">
                        <div>
                            <strong className="text-white block mb-1">{t('moneyfinance.paymentscollections.bankreconciliation.segregation.incompatible.title')}</strong>
                            <p className="mb-2 text-slate-400">{t('moneyfinance.paymentscollections.bankreconciliation.segregation.incompatible.description')}</p>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>{t('moneyfinance.paymentscollections.bankreconciliation.segregation.incompatible.item1')}</li>
                                <li>{t('moneyfinance.paymentscollections.bankreconciliation.segregation.incompatible.item2')}</li>
                                <li>{t('moneyfinance.paymentscollections.bankreconciliation.segregation.incompatible.item3')}</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="text-white block mb-1">{t('moneyfinance.paymentscollections.bankreconciliation.segregation.controls.title')}</strong>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>{t('moneyfinance.paymentscollections.bankreconciliation.segregation.controls.item1')}</li>
                                <li>{t('moneyfinance.paymentscollections.bankreconciliation.segregation.controls.item2')}</li>
                                <li>{t('moneyfinance.paymentscollections.bankreconciliation.segregation.controls.item3')}</li>
                                <li>{t('moneyfinance.paymentscollections.bankreconciliation.segregation.controls.item4')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

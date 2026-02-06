
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';
import { useTranslation } from 'react-i18next';

export default function RevenueInvoicing() {
    const { t } = useTranslation();
    
    return (
        <Section id="section-2">
            <SectionHeader>{t('moneyfinance.revenueinvoicing.section.header')}</SectionHeader>

            <SubSection id="invoicing-procedures">
                <SubSectionHeader>{t('moneyfinance.revenueinvoicing.invoicingprocedures.subsectionheader')}</SubSectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
                        <h4 className="font-bold text-sm mb-4 text-primary-600 uppercase tracking-widest pl-2 border-l-4 border-primary-500 italic">{t('moneyfinance.revenueinvoicing.invoicingprocedures.triggerevents.title')}</h4>
                        <div className="space-y-4">
                            <div>
                                <div className="text-xs font-black uppercase text-slate-400 mb-2">{t('moneyfinance.revenueinvoicing.invoicingprocedures.triggerevents.servicework.title')}</div>
                                <List className="text-[10px] space-y-1">
                                    <ListItem><span className="font-bold">{t('moneyfinance.revenueinvoicing.invoicingprocedures.triggerevents.servicework.inspection')}</span> {t('moneyfinance.revenueinvoicing.invoicingprocedures.triggerevents.servicework.inspectiondesc')}</ListItem>
                                    <ListItem><span className="font-bold">{t('moneyfinance.revenueinvoicing.invoicingprocedures.triggerevents.servicework.installation')}</span> {t('moneyfinance.revenueinvoicing.invoicingprocedures.triggerevents.servicework.installationdesc')}</ListItem>
                                    <ListItem><span className="font-bold">{t('moneyfinance.revenueinvoicing.invoicingprocedures.triggerevents.servicework.contract')}</span> {t('moneyfinance.revenueinvoicing.invoicingprocedures.triggerevents.servicework.contractdesc')}</ListItem>
                                </List>
                            </div>
                            <div>
                                <div className="text-xs font-black uppercase text-slate-400 mb-2">{t('moneyfinance.revenueinvoicing.invoicingprocedures.triggerevents.productsales.title')}</div>
                                <List className="text-[10px] space-y-1">
                                    <ListItem><span className="font-bold text-secondary-600">{t('moneyfinance.revenueinvoicing.invoicingprocedures.triggerevents.productsales.stock')}</span> {t('moneyfinance.revenueinvoicing.invoicingprocedures.triggerevents.productsales.stockdesc')}</ListItem>
                                    <ListItem><span className="font-bold">{t('moneyfinance.revenueinvoicing.invoicingprocedures.triggerevents.productsales.special')}</span> {t('moneyfinance.revenueinvoicing.invoicingprocedures.triggerevents.productsales.specialdesc')}</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl flex flex-col justify-center">
                        <div className="text-center">
                            <div className="text-sm font-bold text-slate-500 uppercase">{t('moneyfinance.revenueinvoicing.invoicingprocedures.timingstandard.label')}</div>
                            <div className="text-4xl font-black text-primary-600 my-2">{t('moneyfinance.revenueinvoicing.invoicingprocedures.timingstandard.value')}</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase">{t('moneyfinance.revenueinvoicing.invoicingprocedures.timingstandard.description')}</div>
                        </div>
                    </div>
                </div>

                <div className="my-10 relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 z-0"></div>
                    <h5 className="font-black text-xs uppercase tracking-[0.2em] mb-8 bg-white dark:bg-slate-950 inline-block px-4 relative z-10">{t('moneyfinance.revenueinvoicing.invoicingprocedures.workflow.title')}</h5>

                    <div className="space-y-8 pl-12">
                        {[
                            { step: "01", titleKey: "step1title", descKey: "step1desc" },
                            { step: "02", titleKey: "step2title", descKey: "step2desc" },
                            { step: "03", titleKey: "step3title", descKey: "step3desc" },
                            { step: "04", titleKey: "step4title", descKey: "step4desc" },
                            { step: "05", titleKey: "step5title", descKey: "step5desc" },
                        ].map((item, idx) => (
                            <div key={idx} className="relative group">
                                <div className="absolute -left-[52px] top-0 w-10 h-10 rounded-full bg-slate-900 border-4 border-white dark:border-slate-950 flex items-center justify-center text-white font-bold text-xs group-hover:bg-primary-600 transition-colors duration-300">
                                    {item.step}
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm group-hover:border-primary-500/30 transition-all duration-300">
                                    <div className="text-xs font-black uppercase mb-1">{t(`moneyfinance.revenueinvoicing.invoicingprocedures.workflow.${item.titleKey}`)}</div>
                                    <div className="text-[11px] text-slate-500 leading-relaxed">{t(`moneyfinance.revenueinvoicing.invoicingprocedures.workflow.${item.descKey}`)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Blockquote type="danger" title={t('moneyfinance.revenueinvoicing.invoicingprocedures.legalmandatory.title')}>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-[9px] font-bold uppercase text-slate-500">
                        <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> {t('moneyfinance.revenueinvoicing.invoicingprocedures.legalmandatory.item1')}</div>
                        <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> {t('moneyfinance.revenueinvoicing.invoicingprocedures.legalmandatory.item2')}</div>
                        <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> {t('moneyfinance.revenueinvoicing.invoicingprocedures.legalmandatory.item3')}</div>
                        <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> {t('moneyfinance.revenueinvoicing.invoicingprocedures.legalmandatory.item4')}</div>
                        <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> {t('moneyfinance.revenueinvoicing.invoicingprocedures.legalmandatory.item5')}</div>
                        <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> {t('moneyfinance.revenueinvoicing.invoicingprocedures.legalmandatory.item6')}</div>
                    </div>
                </Blockquote>
            </SubSection>

            <SubSection id="invoice-numbering">
                <SubSectionHeader>{t('moneyfinance.revenueinvoicing.numberingsystem.subsectionheader')}</SubSectionHeader>
                <Paragraph className="mb-4">{t('moneyfinance.revenueinvoicing.numberingsystem.description')}</Paragraph>

                <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 mb-8">
                    <div className="text-center mb-6">
                        <div className="inline-block px-4 py-1 bg-slate-900 rounded-full text-[10px] text-secondary-500 font-bold tracking-widest border border-slate-800">STANDARD FORMAT</div>
                        <div className="text-2xl font-mono text-white mt-2">[PREFIX]-[YEAR]-[SEQUENCE]</div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { prefix: "FAC", type: "Standard Invoice", ex: "FAC-2025-00042" },
                            { prefix: "PRO", type: "Proforma", ex: "PRO-2025-00103" },
                            { prefix: "CN", type: "Credit Note", ex: "CN-2025-00004" },
                            { prefix: "DN", type: "Debit Note", ex: "DN-2025-00001" },
                        ].map((p, i) => (
                            <div key={i} className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                                <div className="text-secondary-400 font-black text-lg">{p.prefix}</div>
                                <div className="text-[9px] text-slate-500 uppercase font-bold">{p.type}</div>
                                <div className="text-[10px] text-slate-300 font-mono mt-2">{p.ex}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-3xl border border-amber-200 dark:border-amber-900/30">
                    <h5 className="text-amber-700 dark:text-amber-500 font-black uppercase text-xs mb-3 italic">{t('moneyfinance.revenueinvoicing.numberingsystem.voidedrules.title')}</h5>
                    <List className="text-[11px] text-amber-800 dark:text-amber-400 ml-4 font-medium italic space-y-2">
                        <ListItem>{t('moneyfinance.revenueinvoicing.numberingsystem.voidedrules.rule1')}</ListItem>
                        <ListItem>{t('moneyfinance.revenueinvoicing.numberingsystem.voidedrules.rule2')}</ListItem>
                        <ListItem>{t('moneyfinance.revenueinvoicing.numberingsystem.voidedrules.rule3')}</ListItem>
                    </List>
                </div>
            </SubSection>

            <SubSection id="revenue-recognition">
                <SubSectionHeader>{t('moneyfinance.revenueinvoicing.revenuerecognition.subsectionheader')}</SubSectionHeader>
                <div className="overflow-x-auto my-6">
                    <Table>
                        <TableRow isHeader>
                            <TableCell isHeader>{t('moneyfinance.revenueinvoicing.revenuerecognition.table.lineitemtype')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.revenueinvoicing.revenuerecognition.table.code')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.revenueinvoicing.revenuerecognition.table.recognitionlogic')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-bold">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.fireequipmentsales')}</span></TableCell>
                            <TableCell><span className="font-mono">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.fireequipmentsalescode')}</span></TableCell>
                            <TableCell>{t('moneyfinance.revenueinvoicing.revenuerecognition.table.fireequipmentsaleslogic')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-bold">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.fireequipmentservices')}</span></TableCell>
                            <TableCell><span className="font-mono">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.fireequipmentservicescode')}</span></TableCell>
                            <TableCell>{t('moneyfinance.revenueinvoicing.revenuerecognition.table.fireequipmentserviceslogic')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-bold">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.installationprojects')}</span></TableCell>
                            <TableCell><span className="font-mono">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.installationprojectscode')}</span></TableCell>
                            <TableCell>{t('moneyfinance.revenueinvoicing.revenuerecognition.table.installationprojectslogic')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-bold">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.ppeworkwear')}</span></TableCell>
                            <TableCell><span className="font-mono">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.ppeworkwearcode')}</span></TableCell>
                            <TableCell>{t('moneyfinance.revenueinvoicing.revenuerecognition.table.ppeworkwearlogic')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-bold">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.workwearcustomization')}</span></TableCell>
                            <TableCell><span className="font-mono">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.workwearcustomizationcode')}</span></TableCell>
                            <TableCell>{t('moneyfinance.revenueinvoicing.revenuerecognition.table.workwearcustomizationlogic')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-bold">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.safetysignage')}</span></TableCell>
                            <TableCell><span className="font-mono">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.safetysignagecode')}</span></TableCell>
                            <TableCell>{t('moneyfinance.revenueinvoicing.revenuerecognition.table.safetysignagelogic')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-bold">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.amc')}</span></TableCell>
                            <TableCell><span className="font-mono">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.amccode')}</span></TableCell>
                            <TableCell><span className="underline italic">SS+</span> {t('moneyfinance.revenueinvoicing.revenuerecognition.table.amclogic')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-bold">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.travelfees')}</span></TableCell>
                            <TableCell><span className="font-mono">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.travelfeescode')}</span></TableCell>
                            <TableCell>{t('moneyfinance.revenueinvoicing.revenuerecognition.table.travelfeeslogic')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-bold">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.otherrevenue')}</span></TableCell>
                            <TableCell><span className="font-mono">{t('moneyfinance.revenueinvoicing.revenuerecognition.table.otherrevenuecode')}</span></TableCell>
                            <TableCell>{t('moneyfinance.revenueinvoicing.revenuerecognition.table.otherrevenuelogic')}</TableCell>
                        </TableRow>
                    </Table>
                </div>

                <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl relative overflow-hidden group">
                    <div className="absolute bottom-0 right-0 p-8 opacity-5 text-8xl font-black text-white decoration-primary-500 decoration-8 underline">DEPOSIT</div>
                    <h5 className="text-primary-400 font-black text-xs uppercase mb-4 italic tracking-[0.2em] relative z-10">{t('moneyfinance.revenueinvoicing.revenuerecognition.advancepayment.title')}</h5>
                    <div className="text-xs text-slate-400 space-y-4 relative z-10 font-medium">
                        <p>{t('moneyfinance.revenueinvoicing.revenuerecognition.advancepayment.description1')}</p>
                        <p>{t('moneyfinance.revenueinvoicing.revenuerecognition.advancepayment.description2')}</p>
                    </div>
                </div>
            </SubSection>

            <SubSection id="credit-notes">
                <SubSectionHeader>{t('moneyfinance.revenueinvoicing.creditnotes.subsectionheader')}</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                    <div className="space-y-6">
                        <h6 className="font-black text-xs uppercase text-slate-400 italic mb-4 border-b-2 border-slate-100 dark:border-slate-800 pb-2">{t('moneyfinance.revenueinvoicing.creditnotes.validityfilter')}</h6>
                        <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-200 dark:border-green-900/30">
                            <div className="text-[10px] font-black text-green-700 uppercase mb-2">{t('moneyfinance.revenueinvoicing.creditnotes.approvedreasons.title')}</div>
                            <List className="text-[10px] text-green-800 dark:text-green-400 space-y-1">
                                <ListItem>{t('moneyfinance.revenueinvoicing.creditnotes.approvedreasons.reason1')}</ListItem>
                                <ListItem>{t('moneyfinance.revenueinvoicing.creditnotes.approvedreasons.reason2')}</ListItem>
                                <ListItem>{t('moneyfinance.revenueinvoicing.creditnotes.approvedreasons.reason3')}</ListItem>
                            </List>
                        </div>
                        <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-2xl border border-red-200 dark:border-red-900/30">
                            <div className="text-[10px] font-black text-red-700 uppercase mb-2">{t('moneyfinance.revenueinvoicing.creditnotes.rejectedreasons.title')}</div>
                            <List className="text-[10px] text-red-800 dark:text-red-400 space-y-1 italic font-medium">
                                <ListItem>{t('moneyfinance.revenueinvoicing.creditnotes.rejectedreasons.reason1')}</ListItem>
                                <ListItem>{t('moneyfinance.revenueinvoicing.creditnotes.rejectedreasons.reason2')}</ListItem>
                                <ListItem>{t('moneyfinance.revenueinvoicing.creditnotes.rejectedreasons.reason3')}</ListItem>
                            </List>
                        </div>
                    </div>

                    <div className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl">
                        <h6 className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center mb-6">{t('moneyfinance.revenueinvoicing.creditnotes.authorization.title')}</h6>
                        <Table>
                            <TableRow isHeader>
                                <TableCell isHeader>{t('moneyfinance.revenueinvoicing.creditnotes.authorization.table.creditamount')}</TableCell>
                                <TableCell isHeader>{t('moneyfinance.revenueinvoicing.creditnotes.authorization.table.requiredapproval')}</TableCell>
                                <TableCell isHeader>{t('moneyfinance.revenueinvoicing.creditnotes.authorization.table.documentationrequired')}</TableCell>
                            </TableRow>
                            <TableRow><TableCell>{t('moneyfinance.revenueinvoicing.creditnotes.authorization.table.upto500')}</TableCell><TableCell>{t('moneyfinance.revenueinvoicing.creditnotes.authorization.table.opsorsalesresp')}</TableCell><TableCell>{t('moneyfinance.revenueinvoicing.creditnotes.authorization.table.servicereportreturn')}</TableCell></TableRow>
                            <TableRow><TableCell>{t('moneyfinance.revenueinvoicing.creditnotes.authorization.table.501to1k')}</TableCell><TableCell>{t('moneyfinance.revenueinvoicing.creditnotes.authorization.table.salesresp')}</TableCell><TableCell>{t('moneyfinance.revenueinvoicing.creditnotes.authorization.table.asabovewritten')}</TableCell></TableRow>
                            <TableRow><TableCell>{t('moneyfinance.revenueinvoicing.creditnotes.authorization.table.1001to5k')}</TableCell><TableCell>{t('moneyfinance.revenueinvoicing.creditnotes.authorization.table.salesrespmanager')}</TableCell><TableCell>{t('moneyfinance.revenueinvoicing.creditnotes.authorization.table.asabovecustomerletter')}</TableCell></TableRow>
                            <TableRow><TableCell>{t('moneyfinance.revenueinvoicing.creditnotes.authorization.table.above5k')}</TableCell><TableCell>{t('moneyfinance.revenueinvoicing.creditnotes.authorization.table.bothmanagers')}</TableCell><TableCell>{t('moneyfinance.revenueinvoicing.creditnotes.authorization.table.fulldocinvestigation')}</TableCell></TableRow>
                        </Table>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

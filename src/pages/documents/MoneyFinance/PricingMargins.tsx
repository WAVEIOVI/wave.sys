
import { useTranslation } from 'react-i18next';
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';

import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';


export default function PricingMargins() {
    const { t } = useTranslation();
    return (
        <Section id="section-5">
            <SectionHeader>{t('moneyfinance.pricingmargins.section.header')}</SectionHeader>

            <SubSection id="cost-markup">
                <SubSectionHeader>{t('moneyfinance.pricingmargins.costmarkup.subsectionheader')}</SubSectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="p-8 bg-slate-950 rounded-[2.5rem] border border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10 font-black text-4xl text-white">COST</div>
                        <h6 className="text-[10px] font-black text-slate-500 uppercase mb-4 tracking-widest italic decoration-primary-500 decoration-2 underline">{t('moneyfinance.pricingmargins.costmarkup.componentbreakdown.title')}</h6>
                        <div className="space-y-4">
                            <div>
                                <div className="text-xs font-black text-white uppercase mb-1">{t('moneyfinance.pricingmargins.costmarkup.componentbreakdown.productcost.title')}</div>
                                <p className="text-[10px] text-slate-400 italic">{t('moneyfinance.pricingmargins.costmarkup.componentbreakdown.productcost.desc')}</p>
                            </div>
                            <div className="border-t border-slate-800 pt-4">
                                <div className="text-xs font-black text-white uppercase mb-1">{t('moneyfinance.pricingmargins.costmarkup.componentbreakdown.servicecost.title')}</div>
                                <p className="text-[10px] text-slate-400 italic">{t('moneyfinance.pricingmargins.costmarkup.componentbreakdown.servicecost.desc')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-xl">
                        <div className="text-center mb-6">
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('moneyfinance.pricingmargins.costmarkup.baseformula.title')}</div>
                            <div className="text-xl font-mono font-black text-primary-600 mt-2">{t('moneyfinance.pricingmargins.costmarkup.baseformula.formula')}</div>
                        </div>
                        <div className="space-y-1">
                            {[
                                t('moneyfinance.pricingmargins.costmarkup.markuptable.fireextinguishers', { returnObjects: true }),
                                t('moneyfinance.pricingmargins.costmarkup.markuptable.firehosereels', { returnObjects: true }),
                                t('moneyfinance.pricingmargins.costmarkup.markuptable.ppestandard', { returnObjects: true }),
                                t('moneyfinance.pricingmargins.costmarkup.markuptable.ppespecialty', { returnObjects: true }),
                                t('moneyfinance.pricingmargins.costmarkup.markuptable.workwearstandard', { returnObjects: true }),
                                t('moneyfinance.pricingmargins.costmarkup.markuptable.workwearcustom', { returnObjects: true }),
                                t('moneyfinance.pricingmargins.costmarkup.markuptable.signagestandard', { returnObjects: true }),
                                t('moneyfinance.pricingmargins.costmarkup.markuptable.signagecustom', { returnObjects: true }),
                                t('moneyfinance.pricingmargins.costmarkup.markuptable.inspectionservices', { returnObjects: true }),
                                t('moneyfinance.pricingmargins.costmarkup.markuptable.refillingmaint', { returnObjects: true }),
                                t('moneyfinance.pricingmargins.costmarkup.markuptable.installation', { returnObjects: true }),
                                t('moneyfinance.pricingmargins.costmarkup.markuptable.amccontracts', { returnObjects: true }),
                            ].map((item: any, i) => (
                                <div key={i} className="flex justify-between items-center text-[10px] border-b border-slate-50 dark:border-slate-800 pb-1">
                                    <span className="font-bold text-slate-500">{item.cat}</span>
                                    <div className="flex gap-3">
                                        <span className="text-slate-400">Min: {item.min}</span>
                                        <span className="font-black text-primary-600 italic">Target: {item.mark}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
                        <h6 className="font-black text-[10px] text-slate-400 uppercase tracking-widest mb-4">{t('moneyfinance.pricingmargins.costmarkup.considerations.title')}</h6>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="text-[9px] font-black text-green-600 uppercase mb-2">{t('moneyfinance.pricingmargins.costmarkup.considerations.increase.title')}</div>
                                <ul className="text-[10px] text-slate-500 space-y-1 list-disc pl-4">
                                    <li>{t('moneyfinance.pricingmargins.costmarkup.considerations.increase.item1')}</li>
                                    <li>{t('moneyfinance.pricingmargins.costmarkup.considerations.increase.item2')}</li>
                                    <li>{t('moneyfinance.pricingmargins.costmarkup.considerations.increase.item3')}</li>
                                    <li>{t('moneyfinance.pricingmargins.costmarkup.considerations.increase.item4')}</li>
                                </ul>
                            </div>
                            <div>
                                <div className="text-[9px] font-black text-blue-600 uppercase mb-2">{t('moneyfinance.pricingmargins.costmarkup.considerations.decrease.title')}</div>
                                <ul className="text-[10px] text-slate-500 space-y-1 list-disc pl-4">
                                    <li>{t('moneyfinance.pricingmargins.costmarkup.considerations.decrease.item1')}</li>
                                    <li>{t('moneyfinance.pricingmargins.costmarkup.considerations.decrease.item2')}</li>
                                    <li>{t('moneyfinance.pricingmargins.costmarkup.considerations.decrease.item3')}</li>
                                    <li>{t('moneyfinance.pricingmargins.costmarkup.considerations.decrease.item4')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
                        <h6 className="font-black text-[10px] text-slate-400 uppercase tracking-widest mb-4">{t('moneyfinance.pricingmargins.costmarkup.psychology.title')}</h6>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 font-bold text-xs">.95</div>
                                <div className="text-[10px] text-slate-500">{t('moneyfinance.pricingmargins.costmarkup.psychology.usepoints')}</div>
                            </div>
                            <div className="border-t dark:border-slate-800 pt-3">
                                <div className="text-[9px] font-black text-slate-400 uppercase mb-2">{t('moneyfinance.pricingmargins.costmarkup.psychology.volumediscounts.title')}</div>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px]">
                                    <div className="flex justify-between"><span>{t('moneyfinance.pricingmargins.costmarkup.psychology.volumediscounts.tier1.range')}</span> <span className="font-bold">{t('moneyfinance.pricingmargins.costmarkup.psychology.volumediscounts.tier1.value')}</span></div>
                                    <div className="flex justify-between"><span>{t('moneyfinance.pricingmargins.costmarkup.psychology.volumediscounts.tier2.range')}</span> <span className="font-bold">{t('moneyfinance.pricingmargins.costmarkup.psychology.volumediscounts.tier2.value')}</span></div>
                                    <div className="flex justify-between"><span>{t('moneyfinance.pricingmargins.costmarkup.psychology.volumediscounts.tier3.range')}</span> <span className="font-bold">{t('moneyfinance.pricingmargins.costmarkup.psychology.volumediscounts.tier3.value')}</span></div>
                                    <div className="flex justify-between"><span>{t('moneyfinance.pricingmargins.costmarkup.psychology.volumediscounts.tier4.range')}</span> <span className="font-bold italic">{t('moneyfinance.pricingmargins.costmarkup.psychology.volumediscounts.tier4.value')}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="price-list">
                <SubSectionHeader>{t('moneyfinance.pricingmargins.pricelist.subsectionheader')}</SubSectionHeader>
                <div className="my-8">
                    <h5 className="font-bold text-sm text-slate-900 dark:text-white mb-4">{t('moneyfinance.pricingmargins.pricelist.masterlists.title')}</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {[
                            t('moneyfinance.pricingmargins.pricelist.masterlists.fireequipment', { returnObjects: true }),
                            t('moneyfinance.pricingmargins.pricelist.masterlists.ppeworkwear', { returnObjects: true }),
                            t('moneyfinance.pricingmargins.pricelist.masterlists.safetysignage', { returnObjects: true })
                        ].map((list: any, i) => (
                            <div key={i} className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <div className="font-black text-xs uppercase text-primary-600 mb-1">{list.title}</div>
                                <div className="text-[10px] text-slate-500">{list.desc}</div>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800">
                        <div className="flex justify-between items-center mb-6">
                            <h6 className="font-black text-xs uppercase tracking-widest text-secondary-500">{t('moneyfinance.pricingmargins.pricelist.protocol.title')}</h6>
                            <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-400">{t('moneyfinance.pricingmargins.pricelist.protocol.frequency')}</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold shrink-0">1</div>
                                <div>
                                    <div className="text-xs font-bold mb-1">{t('moneyfinance.pricingmargins.pricelist.protocol.step1.title')}</div>
                                    <p className="text-[10px] text-slate-400">{t('moneyfinance.pricingmargins.pricelist.protocol.step1.desc')}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold shrink-0">2</div>
                                <div>
                                    <div className="text-xs font-bold mb-1">{t('moneyfinance.pricingmargins.pricelist.protocol.step2.title')}</div>
                                    <p className="text-[10px] text-slate-400">{t('moneyfinance.pricingmargins.pricelist.protocol.step2.desc')}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold shrink-0">3</div>
                                <div>
                                    <div className="text-xs font-bold mb-1">{t('moneyfinance.pricingmargins.pricelist.protocol.step3.title')}</div>
                                    <p className="text-[10px] text-slate-400">{t('moneyfinance.pricingmargins.pricelist.protocol.step3.desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-4 border-l-4 border-primary-500 bg-primary-50 dark:bg-slate-900">
                        <h6 className="font-bold text-xs text-primary-700 mb-2">{t('moneyfinance.pricingmargins.pricelist.policy.title')}</h6>
                        <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-600 dark:text-slate-400">
                            <li><strong>{t('moneyfinance.pricingmargins.pricelist.policy.items.quotations.label')}:</strong> {t('moneyfinance.pricingmargins.pricelist.policy.items.quotations.value')}</li>
                            <li><strong>{t('moneyfinance.pricingmargins.pricelist.policy.items.contracts.label')}:</strong> {t('moneyfinance.pricingmargins.pricelist.policy.items.contracts.value')}</li>
                            <li><strong>{t('moneyfinance.pricingmargins.pricelist.policy.items.notice.label')}:</strong> {t('moneyfinance.pricingmargins.pricelist.policy.items.notice.value')}</li>
                        </ul>
                    </div>
                </div>
            </SubSection>

            <SubSection id="discount-analysis">
                <SubSectionHeader>{t('moneyfinance.pricingmargins.discountanalysis.subsectionheader')}</SubSectionHeader>
                <div className="my-8 rounded-[3rem] bg-red-950 border border-red-900 p-8 relative overflow-hidden group">
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all duration-700"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                        <div className="space-y-6">
                            <h6 className="font-black text-red-500 uppercase text-xs italic tracking-[0.2em]">{t('moneyfinance.pricingmargins.discountanalysis.impact.title')}</h6>
                            <Paragraph className="text-red-200/70 text-xs italic leading-relaxed">
                                {t('moneyfinance.pricingmargins.discountanalysis.impact.description')}
                            </Paragraph>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-red-900/40 rounded-2xl border border-red-800">
                                    <div className="text-[9px] font-bold text-red-400 uppercase">{t('moneyfinance.pricingmargins.discountanalysis.example.discount.label')}</div>
                                    <div className="text-2xl font-black text-white">{t('moneyfinance.pricingmargins.discountanalysis.example.discount.value')}</div>
                                </div>
                                <div className="p-4 bg-red-900/40 rounded-2xl border border-red-800">
                                    <div className="text-[9px] font-bold text-red-400 uppercase">{t('moneyfinance.pricingmargins.discountanalysis.example.volumeneeded.label')}</div>
                                    <div className="text-2xl font-black text-white">{t('moneyfinance.pricingmargins.discountanalysis.example.volumeneeded.value')}</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h6 className="font-black text-red-500 uppercase text-xs italic tracking-[0.2em] text-right">{t('moneyfinance.pricingmargins.discountanalysis.guardrails.title')}</h6>
                            {[
                                t('moneyfinance.pricingmargins.discountanalysis.guardrails.salesreps', { returnObjects: true }),
                                t('moneyfinance.pricingmargins.discountanalysis.guardrails.saleshead', { returnObjects: true }),
                                t('moneyfinance.pricingmargins.discountanalysis.guardrails.managers', { returnObjects: true }),
                            ].map((g: any, i) => (
                                <div key={i} className="flex justify-between items-center text-xs p-3 bg-red-900/20 rounded-xl border border-red-900/40">
                                    <span>
                                        <div className="font-black text-white uppercase italic">{g.level}</div>
                                        <div className="text-[9px] text-red-400 italic">{g.desc}</div>
                                    </span>
                                    <span className="text-lg font-black text-white font-mono">{g.cap}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
                        <h6 className="font-black text-xs uppercase text-primary-600 mb-6 tracking-widest">{t('moneyfinance.pricingmargins.discountanalysis.alternatives.title')}</h6>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <div className="text-[10px] font-bold text-slate-900 dark:text-white uppercase mb-2">{t('moneyfinance.pricingmargins.discountanalysis.alternatives.valueadd.title')}</div>
                                <ul className="text-[10px] text-slate-500 space-y-2">
                                    {(t('moneyfinance.pricingmargins.discountanalysis.alternatives.valueadd.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-slate-900 dark:text-white uppercase mb-2">{t('moneyfinance.pricingmargins.discountanalysis.alternatives.terms.title')}</div>
                                <ul className="text-[10px] text-slate-500 space-y-2">
                                    {(t('moneyfinance.pricingmargins.discountanalysis.alternatives.terms.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 rounded-3xl">
                        <h6 className="font-black text-xs uppercase text-red-600 mb-6 tracking-widest">{t('moneyfinance.pricingmargins.discountanalysis.walkaway.title')}</h6>
                        <ul className="text-[10px] text-slate-600 dark:text-slate-400 space-y-3">
                            {(t('moneyfinance.pricingmargins.discountanalysis.walkaway.items', { returnObjects: true }) as string[]).map((item, i) => (
                                <li key={i} className="flex gap-2">
                                    <span className="text-red-500 font-bold">!</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SubSection>

            <SubSection id="travel-fees">
                <SubSectionHeader>{t('moneyfinance.pricingmargins.travelfees.subsectionheader')}</SubSectionHeader>
                <div className="overflow-x-auto my-6">
                    <Table>
                        <TableRow isHeader>
                            <TableCell isHeader>{t('moneyfinance.pricingmargins.travelfees.table.zone')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.pricingmargins.travelfees.table.distanceradius')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.pricingmargins.travelfees.table.standardfee')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.pricingmargins.travelfees.table.waiverthreshold')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-black text-primary-600 italic">{t('moneyfinance.pricingmargins.travelfees.table.zone1.name')}</span></TableCell>
                            <TableCell>{t('moneyfinance.pricingmargins.travelfees.table.zone1.radius')}</TableCell>
                            <TableCell><span className="font-black text-green-600 uppercase">{t('moneyfinance.pricingmargins.travelfees.table.zone1.fee')}</span></TableCell>
                            <TableCell>{t('moneyfinance.pricingmargins.travelfees.table.zone1.waiver')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-black text-slate-800 dark:text-white italic">{t('moneyfinance.pricingmargins.travelfees.table.zone2.name')}</span></TableCell>
                            <TableCell>{t('moneyfinance.pricingmargins.travelfees.table.zone2.radius')}</TableCell>
                            <TableCell><span className="font-mono font-bold">{t('moneyfinance.pricingmargins.travelfees.table.zone2.fee')}</span></TableCell>
                            <TableCell>{t('moneyfinance.pricingmargins.travelfees.table.zone2.waiver')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-black text-slate-800 dark:text-white italic">{t('moneyfinance.pricingmargins.travelfees.table.zone3.name')}</span></TableCell>
                            <TableCell>{t('moneyfinance.pricingmargins.travelfees.table.zone3.radius')}</TableCell>
                            <TableCell><span className="font-mono font-bold">{t('moneyfinance.pricingmargins.travelfees.table.zone3.fee')}</span></TableCell>
                            <TableCell>{t('moneyfinance.pricingmargins.travelfees.table.zone3.waiver')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-black text-red-600 italic">{t('moneyfinance.pricingmargins.travelfees.table.zone4.name')}</span></TableCell>
                            <TableCell>{t('moneyfinance.pricingmargins.travelfees.table.zone4.radius')}</TableCell>
                            <TableCell><span className="font-mono font-bold italic underline">{t('moneyfinance.pricingmargins.travelfees.table.zone4.fee')}</span></TableCell>
                            <TableCell>{t('moneyfinance.pricingmargins.travelfees.table.zone4.waiver')}</TableCell>
                        </TableRow>
                    </Table>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-950/20 rounded-3xl border border-slate-200 dark:border-slate-800">
                    <h6 className="font-black text-[10px] text-slate-400 uppercase tracking-widest mb-3 italic">{t('moneyfinance.pricingmargins.travelfees.rules.title')}</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-[10px] italic font-medium text-slate-500 leading-relaxed">
                        <p>{t('moneyfinance.pricingmargins.travelfees.rules.rule1')}</p>
                        <p>{t('moneyfinance.pricingmargins.travelfees.rules.rule2')}</p>
                        <p>{t('moneyfinance.pricingmargins.travelfees.rules.rule3')}</p>
                        <p>{t('moneyfinance.pricingmargins.travelfees.rules.rule4')}</p>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

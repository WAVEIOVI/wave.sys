import { useTranslation } from 'react-i18next';
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';


export default function FinancialPlanning() {
    const { t } = useTranslation();

    return (
        <Section id="section-9">
            <SectionHeader>{t('moneyfinance.financialplanning.section.header')}</SectionHeader>

            <SubSection id="budgeting-process">
                <SubSectionHeader>{t('moneyfinance.financialplanning.budgeting.subsectionheader')}</SubSectionHeader>
                <div className="my-8">
                    <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-8 space-y-8">
                        {[
                            { step: t('moneyfinance.financialplanning.budgeting.steps.step1.step'), title: t('moneyfinance.financialplanning.budgeting.steps.step1.title'), mo: t('moneyfinance.financialplanning.budgeting.steps.step1.mo'), desc: t('moneyfinance.financialplanning.budgeting.steps.step1.desc') },
                            { step: t('moneyfinance.financialplanning.budgeting.steps.step2.step'), title: t('moneyfinance.financialplanning.budgeting.steps.step2.title'), mo: t('moneyfinance.financialplanning.budgeting.steps.step2.mo'), desc: t('moneyfinance.financialplanning.budgeting.steps.step2.desc') },
                            { step: t('moneyfinance.financialplanning.budgeting.steps.step3.step'), title: t('moneyfinance.financialplanning.budgeting.steps.step3.title'), mo: t('moneyfinance.financialplanning.budgeting.steps.step3.mo'), desc: t('moneyfinance.financialplanning.budgeting.steps.step3.desc') },
                            { step: t('moneyfinance.financialplanning.budgeting.steps.step4.step'), title: t('moneyfinance.financialplanning.budgeting.steps.step4.title'), mo: t('moneyfinance.financialplanning.budgeting.steps.step4.mo'), desc: t('moneyfinance.financialplanning.budgeting.steps.step4.desc') },
                        ].map((s, i) => (
                            <div key={i} className="relative">
                                <span className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-white dark:bg-slate-900 border-2 border-primary-500 flex items-center justify-center z-10">
                                    <span className="h-2 w-2 rounded-full bg-primary-500"></span>
                                </span>
                                <div className="text-[10px] font-black text-slate-400 mb-1">{s.step} — {s.mo}</div>
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase italic">{s.title}</h4>
                                <p className="text-xs text-slate-500 italic leading-relaxed max-w-lg">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SubSection>

            <SubSection id="cash-forecasting">
                <SubSectionHeader>{t('moneyfinance.financialplanning.cashforecasting.subsectionheader')}</SubSectionHeader>
                <div className="p-8 bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-800 rounded-[3rem] my-8 shadow-inner">
                    <h6 className="text-[10px] font-black text-slate-500 uppercase mb-8 text-center italic tracking-widest border-b pb-2">{t('moneyfinance.financialplanning.cashforecasting.model.title')}</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <Paragraph className="text-[11px] text-slate-500 italic leading-relaxed">
                                {t('moneyfinance.financialplanning.cashforecasting.model.description_prefix')} <span className="text-primary-600 font-bold underline italic">{t('moneyfinance.financialplanning.cashforecasting.model.description_highlight')}</span>{t('moneyfinance.financialplanning.cashforecasting.model.description_suffix')}
                            </Paragraph>
                            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl">
                                <div className="text-[10px] font-black text-slate-400 uppercase mb-2">{t('moneyfinance.financialplanning.cashforecasting.model.alerts_title')}</div>
                                <List className="text-[10px] text-slate-500 space-y-1">
                                    <ListItem>{t('moneyfinance.financialplanning.cashforecasting.model.alert1')}</ListItem>
                                    <ListItem>{t('moneyfinance.financialplanning.cashforecasting.model.alert2')}</ListItem>
                                    <ListItem>{t('moneyfinance.financialplanning.cashforecasting.model.alert3')}</ListItem>
                                </List>
                            </div>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-[2rem] flex flex-col justify-around text-center border border-slate-800">
                            <div>
                                <div className="text-[9px] font-black text-slate-500 uppercase">{t('moneyfinance.financialplanning.cashforecasting.zones.comfort.label')}</div>
                                <div className="text-xl font-mono font-black text-green-500 italic">{t('moneyfinance.financialplanning.cashforecasting.zones.comfort.value')}</div>
                            </div>
                            <div className="border-y border-slate-800 py-4 my-2">
                                <div className="text-[9px] font-black text-slate-500 uppercase">{t('moneyfinance.financialplanning.cashforecasting.zones.critical.label')}</div>
                                <div className="text-xl font-mono font-black text-white italic underline decoration-primary-500 decoration-3 underline-offset-4">{t('moneyfinance.financialplanning.cashforecasting.zones.critical.value')}</div>
                            </div>
                            <div>
                                <div className="text-[9px] font-black text-red-500 uppercase">{t('moneyfinance.financialplanning.cashforecasting.zones.trigger.label')}</div>
                                <div className="text-xl font-mono font-black text-red-600 italic animate-pulse">{t('moneyfinance.financialplanning.cashforecasting.zones.trigger.value')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="capex-approval">
                <SubSectionHeader>{t('moneyfinance.financialplanning.capex.subsectionheader')}</SubSectionHeader>
                <Paragraph className="mb-6 italic">{t('moneyfinance.financialplanning.capex.description')}</Paragraph>
                <div className="overflow-x-auto my-6">
                    <Table>
                        <TableRow isHeader>
                            <TableCell isHeader>{t('moneyfinance.financialplanning.capex.table.header.amount')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.financialplanning.capex.table.header.level')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.financialplanning.capex.table.header.docs')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('moneyfinance.financialplanning.capex.table.row1.amount')}</TableCell>
                            <TableCell>{t('moneyfinance.financialplanning.capex.table.row1.level')}</TableCell>
                            <TableCell>{t('moneyfinance.financialplanning.capex.table.row1.docs')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('moneyfinance.financialplanning.capex.table.row2.amount')}</TableCell>
                            <TableCell><span className="font-black italic text-secondary-600 underline">{t('moneyfinance.financialplanning.capex.table.row2.level')}</span></TableCell>
                            <TableCell>{t('moneyfinance.financialplanning.capex.table.row2.docs')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-black italic text-red-600 underline">{t('moneyfinance.financialplanning.capex.table.row3.amount')}</span></TableCell>
                            <TableCell><span className="font-black italic text-red-600 underline uppercase">{t('moneyfinance.financialplanning.capex.table.row3.level')}</span></TableCell>
                            <TableCell>{t('moneyfinance.financialplanning.capex.table.row3.docs')}</TableCell>
                        </TableRow>
                    </Table>
                </div>
                <div className="p-6 bg-slate-950 rounded-3xl border border-slate-800">
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic decoration-primary-500 underline decoration-2 underline-offset-4">{t('moneyfinance.financialplanning.capex.hurdle.label')}</span>
                        <span className="text-2xl font-mono font-black text-white italic tracking-tighter decoration-secondary-500 underline decoration-8">{t('moneyfinance.financialplanning.capex.hurdle.value')}</span>
                    </div>
                </div>
            </SubSection>

            <SubSection id="risk-mitigation">
                <SubSectionHeader>{t('moneyfinance.financialplanning.riskmitigation.subsectionheader')}</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                    {[
                        { title: t('moneyfinance.financialplanning.riskmitigation.risks.credit.title'), risk: t('moneyfinance.financialplanning.riskmitigation.risks.credit.risk'), fix: t('moneyfinance.financialplanning.riskmitigation.risks.credit.fix') },
                        { title: t('moneyfinance.financialplanning.riskmitigation.risks.liquidity.title'), risk: t('moneyfinance.financialplanning.riskmitigation.risks.liquidity.risk'), fix: t('moneyfinance.financialplanning.riskmitigation.risks.liquidity.fix') },
                        { title: t('moneyfinance.financialplanning.riskmitigation.risks.supplier.title'), risk: t('moneyfinance.financialplanning.riskmitigation.risks.supplier.risk'), fix: t('moneyfinance.financialplanning.riskmitigation.risks.supplier.fix') },
                        { title: t('moneyfinance.financialplanning.riskmitigation.risks.fraud.title'), risk: t('moneyfinance.financialplanning.riskmitigation.risks.fraud.risk'), fix: t('moneyfinance.financialplanning.riskmitigation.risks.fraud.fix') },
                        { title: t('moneyfinance.financialplanning.riskmitigation.risks.fx.title'), risk: t('moneyfinance.financialplanning.riskmitigation.risks.fx.risk'), fix: t('moneyfinance.financialplanning.riskmitigation.risks.fx.fix') },
                        { title: t('moneyfinance.financialplanning.riskmitigation.risks.regulatory.title'), risk: t('moneyfinance.financialplanning.riskmitigation.risks.regulatory.risk'), fix: t('moneyfinance.financialplanning.riskmitigation.risks.regulatory.fix') }
                    ].map((box, i) => (
                        <div key={i} className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl relative overflow-hidden group hover:border-primary-500/20 transition-all">
                            <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl font-black italic">0{i + 1}</div>
                            <h6 className="text-[10px] font-black text-primary-600 uppercase mb-2 italic">{box.title}</h6>
                            <div className="space-y-2">
                                <div className="text-[9px] font-bold text-slate-400 uppercase">Risk: <span className="text-slate-950 dark:text-white normal-case italic">{box.risk}</span></div>
                                <div className="text-[9px] font-bold text-slate-400 uppercase">Mitigation: <span className="text-primary-600 normal-case italic underline decoration-slate-100 dark:decoration-slate-800 underline-offset-2">{box.fix}</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </SubSection>

            <SubSection id="insurance">
                <SubSectionHeader>{t('moneyfinance.financialplanning.insurance.subsectionheader')}</SubSectionHeader>
                <div className="p-8 bg-slate-900 rounded-[3rem] border border-slate-800 relative shadow-2xl overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-primary-600"></div>
                    <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                        <div className="w-20 h-20 bg-slate-950 rounded-2xl flex items-center justify-center text-4xl shadow-xl border border-slate-800 group-hover:scale-110 transition-transform duration-500">🛡️</div>
                        <div className="flex-1">
                            <h6 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 italic">{t('moneyfinance.financialplanning.insurance.title')}</h6>
                            <p className="text-xs text-slate-400 font-medium leading-relaxed italic border-l-2 border-slate-800 pl-4">
                                {t('moneyfinance.financialplanning.insurance.description_prefix')} <span className="text-white underline font-black decoration-primary-500">{t('moneyfinance.financialplanning.insurance.publicliability')}</span> {t('moneyfinance.financialplanning.insurance.and')} <span className="text-white underline font-black decoration-blue-500">{t('moneyfinance.financialplanning.insurance.indemnity')}</span> {t('moneyfinance.financialplanning.insurance.description_suffix')}
                            </p>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

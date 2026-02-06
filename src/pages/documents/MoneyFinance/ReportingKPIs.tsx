import { useTranslation } from 'react-i18next';
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import FinancialReportingCycle from './FinancialReportingCycle';

export default function ReportingKPIs() {
    const { t } = useTranslation();

    return (
        <Section id="section-7">
            <SectionHeader>{t('moneyfinance.reportingkpis.section.header')}</SectionHeader>

            <SubSection id="monthly-reports">
                <SubSectionHeader>{t('moneyfinance.reportingkpis.monthlyreports.subsectionheader')}</SubSectionHeader>
                <div className="p-8 bg-slate-900 border border-slate-800 rounded-[3rem] my-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-white font-black text-6xl opacity-10 italic tracking-tighter">{t('moneyfinance.reportingkpis.monthlyreports.standardreporting.day10')}</div>
                    <div className="relative z-10">
                        <h6 className="text-[10px] font-black text-secondary-500 uppercase mb-6 tracking-widest italic underline decoration-4 underline-offset-8 decoration-slate-800">{t('moneyfinance.reportingkpis.monthlyreports.standardreporting.title')}</h6>
                        <Paragraph className="text-xs text-slate-400 mb-8 max-w-xl">{t('moneyfinance.reportingkpis.monthlyreports.standardreporting.description')}</Paragraph>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { title: t('moneyfinance.reportingkpis.monthlyreports.standardreporting.items.incomestatement.title'), icon: "📊", desc: t('moneyfinance.reportingkpis.monthlyreports.standardreporting.items.incomestatement.desc') },
                                { title: t('moneyfinance.reportingkpis.monthlyreports.standardreporting.items.balancesheet.title'), icon: "⚖️", desc: t('moneyfinance.reportingkpis.monthlyreports.standardreporting.items.balancesheet.desc') },
                                { title: t('moneyfinance.reportingkpis.monthlyreports.standardreporting.items.cashflow.title'), icon: "💧", desc: t('moneyfinance.reportingkpis.monthlyreports.standardreporting.items.cashflow.desc') },
                                { title: t('moneyfinance.reportingkpis.monthlyreports.standardreporting.items.aging.title'), icon: "⏳", desc: t('moneyfinance.reportingkpis.monthlyreports.standardreporting.items.aging.desc') },
                                { title: t('moneyfinance.reportingkpis.monthlyreports.standardreporting.items.kpidashboard.title'), icon: "📉", desc: t('moneyfinance.reportingkpis.monthlyreports.standardreporting.items.kpidashboard.desc') },
                                { title: t('moneyfinance.reportingkpis.monthlyreports.standardreporting.items.mgmtcommentary.title'), icon: "📝", desc: t('moneyfinance.reportingkpis.monthlyreports.standardreporting.items.mgmtcommentary.desc') },
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 hover:border-secondary-500/30 transition-all cursor-default relative overflow-hidden">
                                     <div className="absolute top-2 right-2 text-white/20 font-black text-4xl">{i + 1}</div>
                                     <div className="relative z-10">
                                        <div className="text-xl mb-2">{item.icon}</div>
                                        <div className="text-[10px] font-black uppercase text-white mb-1">{item.title}</div>
                                        <p className="text-[9px] text-slate-500 italic leading-tight">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl mt-8">
                    <h6 className="font-black text-[10px] text-slate-400 uppercase tracking-widest mb-4">{t('moneyfinance.reportingkpis.monthlyreports.managementcommentary.title')}</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-[10px] text-slate-500 italic">
                        <p>• {t('moneyfinance.reportingkpis.monthlyreports.managementcommentary.item1')}</p>
                        <p>• {t('moneyfinance.reportingkpis.monthlyreports.managementcommentary.item2')}</p>
                        <p>• {t('moneyfinance.reportingkpis.monthlyreports.managementcommentary.item3')}</p>
                        <p>• {t('moneyfinance.reportingkpis.monthlyreports.managementcommentary.item4')}</p>
                    </div>
                </div>
            </SubSection>

            <SubSection id="kpis">
                <SubSectionHeader>{t('moneyfinance.reportingkpis.kpis.subsectionheader')}</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-xl">
                        <h6 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest italic">{t('moneyfinance.reportingkpis.kpis.profitabilitytargets.title')}</h6>
                        <div className="space-y-4">
                            {[
                                { label: t('moneyfinance.reportingkpis.kpis.profitabilitytargets.grossmargin.label'), val: "40% — 45%", status: t('moneyfinance.reportingkpis.kpis.profitabilitytargets.grossmargin.status') },
                                { label: t('moneyfinance.reportingkpis.kpis.profitabilitytargets.netmargin.label'), val: "10% — 15%", status: t('moneyfinance.reportingkpis.kpis.profitabilitytargets.netmargin.status') },
                                { label: t('moneyfinance.reportingkpis.kpis.profitabilitytargets.ebitdagap.label'), val: "< 5%", status: t('moneyfinance.reportingkpis.kpis.profitabilitytargets.ebitdagap.status') },
                            ].map((k, i) => (
                                <div key={i} className="flex justify-between items-end border-b border-slate-100 dark:border-slate-800 pb-2">
                                    <span>
                                        <div className="text-[9px] font-black text-slate-400 uppercase">{k.status}</div>
                                        <div className="text-sm font-black text-slate-900 dark:text-white uppercase italic">{k.label}</div>
                                    </span>
                                    <div className="text-lg font-mono font-black text-primary-600 italic">{k.val}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 bg-slate-950 rounded-[2.5rem] border border-slate-800 relative overflow-hidden">
                        <h6 className="text-[10px] font-black text-slate-500 uppercase mb-4 tracking-widest italic">{t('moneyfinance.reportingkpis.kpis.cashefficiency.title')}</h6>
                        <div className="space-y-4">
                            {[
                                { label: t('moneyfinance.reportingkpis.kpis.cashefficiency.dso.label'), val: "< 45 Days", desc: t('moneyfinance.reportingkpis.kpis.cashefficiency.dso.desc') },
                                { label: t('moneyfinance.reportingkpis.kpis.cashefficiency.dpo.label'), val: "30-45 Days", desc: t('moneyfinance.reportingkpis.kpis.cashefficiency.dpo.desc') },
                                { label: t('moneyfinance.reportingkpis.kpis.cashefficiency.turnover.label'), val: "6x — 8x / Yr", desc: t('moneyfinance.reportingkpis.kpis.cashefficiency.turnover.desc') },
                                { label: t('moneyfinance.reportingkpis.kpis.cashefficiency.collectionrate.label'), val: "> 95%", desc: t('moneyfinance.reportingkpis.kpis.cashefficiency.collectionrate.desc') },
                            ].map((k, i) => (
                                <div key={i} className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                                    <span>
                                        <div className="font-bold text-slate-400 uppercase">{k.label}</div>
                                        <div className="text-[9px] text-slate-600 italic leading-none">{k.desc}</div>
                                    </span>
                                    <span className="font-mono font-black text-secondary-500 italic">{k.val}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-4 border-t border-slate-800/50">
                             <div className="text-[10px] font-black text-slate-600 uppercase mb-2">{t('moneyfinance.reportingkpis.kpis.operational.title')}</div>
                             <div className="grid grid-cols-2 gap-4">
                                  <div className="text-center p-3 bg-slate-900 rounded-xl border border-slate-800">
                                       <div className="text-white text-xs font-bold">95%+</div>
                                       <div className="text-[8px] text-slate-500 uppercase">{t('moneyfinance.reportingkpis.kpis.operational.ontimeservice')}</div>
                                  </div>
                                  <div className="text-center p-3 bg-slate-900 rounded-xl border border-slate-800">
                                       <div className="text-white text-xs font-bold">4.5/5.0</div>
                                       <div className="text-[8px] text-slate-500 uppercase">{t('moneyfinance.reportingkpis.kpis.operational.csatscore')}</div>
                                  </div>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl mb-8">
                     <h6 className="font-black text-[10px] text-slate-400 uppercase tracking-widest mb-6">{t('moneyfinance.reportingkpis.kpis.revenueanalysis.title')}</h6>
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          {[
                              { label: t('moneyfinance.reportingkpis.kpis.revenueanalysis.revpertech.label'), target: "8,000 TND", trend: t('moneyfinance.reportingkpis.kpis.revenueanalysis.revpertech.trend') },
                              { label: t('moneyfinance.reportingkpis.kpis.revenueanalysis.avginvoice.label'), target: "2,500 TND", trend: t('moneyfinance.reportingkpis.kpis.revenueanalysis.avginvoice.trend') },
                              { label: t('moneyfinance.reportingkpis.kpis.revenueanalysis.productmix.label'), target: t('moneyfinance.reportingkpis.kpis.revenueanalysis.productmix.target'), trend: t('moneyfinance.reportingkpis.kpis.revenueanalysis.productmix.trend') },
                              { label: t('moneyfinance.reportingkpis.kpis.revenueanalysis.newcust.label'), target: t('moneyfinance.reportingkpis.kpis.revenueanalysis.newcust.target'), trend: t('moneyfinance.reportingkpis.kpis.revenueanalysis.newcust.trend') }
                          ].map((m, i) => (
                              <div key={i} className="text-center p-4 bg-white dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800 rounded-2xl">
                                   <div className="text-[8px] font-black text-slate-400 uppercase mb-1">{m.label}</div>
                                   <div className="text-lg font-black text-primary-600 italic mb-1">{m.target}</div>
                                   <div className="text-[8px] text-slate-500 italic">{m.trend}</div>
                              </div>
                          ))}
                     </div>
                </div>
            </SubSection>

            <SubSection id="budget-management">
                <SubSectionHeader>{t('moneyfinance.reportingkpis.budgetmanagement.subsectionheader')}</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] relative overflow-hidden group">
                         <div className="absolute -top-4 -right-4 w-40 h-40 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-all duration-700"></div>
                         <h6 className="text-[10px] font-black text-primary-500 uppercase mb-8 tracking-widest italic block">{t('moneyfinance.reportingkpis.budgetmanagement.timeline.title')}</h6>
                         <div className="space-y-6">
                              {[
                                  { mo: t('moneyfinance.reportingkpis.budgetmanagement.timeline.october.month'), step: t('moneyfinance.reportingkpis.budgetmanagement.timeline.october.step'), desc: t('moneyfinance.reportingkpis.budgetmanagement.timeline.october.desc') },
                                  { mo: t('moneyfinance.reportingkpis.budgetmanagement.timeline.november.month'), step: t('moneyfinance.reportingkpis.budgetmanagement.timeline.november.step'), desc: t('moneyfinance.reportingkpis.budgetmanagement.timeline.november.desc') },
                                  { mo: t('moneyfinance.reportingkpis.budgetmanagement.timeline.december.month'), step: t('moneyfinance.reportingkpis.budgetmanagement.timeline.december.step'), desc: t('moneyfinance.reportingkpis.budgetmanagement.timeline.december.desc') },
                                  { mo: t('moneyfinance.reportingkpis.budgetmanagement.timeline.january.month'), step: t('moneyfinance.reportingkpis.budgetmanagement.timeline.january.step'), desc: t('moneyfinance.reportingkpis.budgetmanagement.timeline.january.desc') },
                              ].map((s, i) => (
                                  <div key={i} className="flex gap-4">
                                       <div className="w-12 text-[10px] font-black text-slate-600 uppercase pt-1">{s.mo}</div>
                                       <div className="border-l-2 border-slate-800 pl-4 py-1">
                                            <div className="text-xs font-bold text-white mb-1 uppercase tracking-tighter">{s.step}</div>
                                            <p className="text-[10px] text-slate-500 italic leading-tight">{s.desc}</p>
                                       </div>
                                  </div>
                              ))}
                         </div>
                    </div>
                    <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-xl">
                         <h6 className="text-[10px] font-black text-slate-400 uppercase mb-8 tracking-widest italic underline decoration-slate-200 decoration-3">{t('moneyfinance.reportingkpis.budgetmanagement.monitoring.title')}</h6>
                         <div className="space-y-6">
                              <div>
                                   <div className="text-xs font-black text-slate-900 dark:text-white uppercase mb-2 italic">{t('moneyfinance.reportingkpis.budgetmanagement.monitoring.variancethresholds.title')}</div>
                                   <div className="grid grid-cols-3 gap-2">
                                        <div className="p-3 bg-green-50 dark:bg-green-900/10 rounded-xl text-center border border-green-100 dark:border-green-900/40">
                                             <div className="text-xs font-bold text-green-600 italic">&lt; 5%</div>
                                             <div className="text-[7px] text-green-800 uppercase font-black">{t('moneyfinance.reportingkpis.budgetmanagement.monitoring.variancethresholds.normal')}</div>
                                        </div>
                                        <div className="p-3 bg-orange-50 dark:bg-orange-900/10 rounded-xl text-center border border-orange-100 dark:border-orange-900/40">
                                             <div className="text-xs font-bold text-orange-600 italic">5-10%</div>
                                             <div className="text-[7px] text-orange-800 uppercase font-black">{t('moneyfinance.reportingkpis.budgetmanagement.monitoring.variancethresholds.explain')}</div>
                                        </div>
                                        <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded-xl text-center border border-red-100 dark:border-red-900/40">
                                             <div className="text-xs font-bold text-red-600 italic">&gt; 10%</div>
                                             <div className="text-[7px] text-red-800 uppercase font-black">{t('moneyfinance.reportingkpis.budgetmanagement.monitoring.variancethresholds.action')}</div>
                                        </div>
                                   </div>
                              </div>

                              <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                                   <div className="text-xs font-black text-slate-900 dark:text-white uppercase mb-3 italic">{t('moneyfinance.reportingkpis.budgetmanagement.monitoring.components.title')}</div>
                                   <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-[10px] text-slate-500 italic">
                                        <div className="flex justify-between border-b pb-1"><span>{t('moneyfinance.reportingkpis.budgetmanagement.monitoring.components.revenue.label')}</span> <span className="font-bold text-primary-600">{t('moneyfinance.reportingkpis.budgetmanagement.monitoring.components.revenue.value')}</span></div>
                                        <div className="flex justify-between border-b pb-1"><span>{t('moneyfinance.reportingkpis.budgetmanagement.monitoring.components.cogs.label')}</span> <span className="font-bold text-primary-600">{t('moneyfinance.reportingkpis.budgetmanagement.monitoring.components.cogs.value')}</span></div>
                                        <div className="flex justify-between border-b pb-1"><span>{t('moneyfinance.reportingkpis.budgetmanagement.monitoring.components.opex.label')}</span> <span className="font-bold text-primary-600">{t('moneyfinance.reportingkpis.budgetmanagement.monitoring.components.opex.value')}</span></div>
                                        <div className="flex justify-between border-b pb-1"><span>{t('moneyfinance.reportingkpis.budgetmanagement.monitoring.components.capex.label')}</span> <span className="font-bold text-primary-600">{t('moneyfinance.reportingkpis.budgetmanagement.monitoring.components.capex.value')}</span></div>
                                   </div>
                              </div>
                         </div>
                    </div>
                </div>

                <div className="my-10">
                    <FinancialReportingCycle />
                </div>

            </SubSection>

            <SubSection id="fiscal-calendar">
                <SubSectionHeader>{t('moneyfinance.reportingkpis.fiscalcalendar.subsectionheader')}</SubSectionHeader>
                <div className="bg-slate-900 p-8 rounded-[3rem] border border-slate-800 flex flex-col justify-center my-8">
                    <h6 className="text-[10px] font-black text-slate-500 uppercase mb-8 text-center italic tracking-widest">{t('moneyfinance.reportingkpis.fiscalcalendar.quarters.title')}</h6>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { q: t('moneyfinance.reportingkpis.fiscalcalendar.quarters.q1.label'), range: t('moneyfinance.reportingkpis.fiscalcalendar.quarters.q1.range'), col: "border-blue-700" },
                            { q: t('moneyfinance.reportingkpis.fiscalcalendar.quarters.q2.label'), range: t('moneyfinance.reportingkpis.fiscalcalendar.quarters.q2.range'), col: "border-green-700" },
                            { q: t('moneyfinance.reportingkpis.fiscalcalendar.quarters.q3.label'), range: t('moneyfinance.reportingkpis.fiscalcalendar.quarters.q3.range'), col: "border-secondary-700" },
                            { q: t('moneyfinance.reportingkpis.fiscalcalendar.quarters.q4.label'), range: t('moneyfinance.reportingkpis.fiscalcalendar.quarters.q4.range'), col: "border-red-700" },
                        ].map((q, i) => (
                            <div key={i} className={`p-4 bg-slate-950 rounded-2xl border-l-4 ${q.col} text-center`}>
                                <div className="text-xs font-black text-white">{q.q}</div>
                                <div className="text-[9px] font-bold text-slate-500 uppercase">{q.range}</div>
                            </div>
                        ))}
                    </div>
                    <Paragraph className="text-[9px] text-center text-slate-600 mt-6 font-bold underline decoration-dotted decoration-slate-800">{t('moneyfinance.reportingkpis.fiscalcalendar.taxfiling')}</Paragraph>
                </div>
            </SubSection>
        </Section >
    );
}

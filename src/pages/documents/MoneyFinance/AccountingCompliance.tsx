
import { useTranslation } from 'react-i18next';
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';


export default function AccountingCompliance() {
    const { t } = useTranslation();

    const accountCategories = [
        { code: "1000-1999", name: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.assets'), desc: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.assetsdesc') },
        { code: "2000-2999", name: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.liabilities'), desc: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.liabilitiesdesc') },
        { code: "3000-3999", name: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.equity'), desc: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.equitydesc') },
        { code: "4000-4999", name: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.revenue'), desc: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.revenuedesc') },
        { code: "5000-5999", name: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.costofsales'), desc: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.costofsalesdesc') },
        { code: "6000-6999", name: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.opex'), desc: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.opexdesc') },
        { code: "7000-7999", name: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.other'), desc: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.otherdesc') },
    ];

    const primaryAccounts = [
        { c: "1010/11", n: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.bankubci') },
        { c: "1100", n: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.accountsreceivable') },
        { c: "1200+", n: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.inventory') },
        { c: "2000", n: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.accountspayable') },
        { c: "2400/10", n: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.vatpayable') },
    ];

    const keyAccounts = [
        { c: "4100", n: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.fireextsales') },
        { c: "4200", n: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.equipmaintservices') },
        { c: "6000-20", n: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.salaries') },
        { c: "6100/10", n: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.rent') },
        { c: "6200/10", n: t('moneyfinance.accountingcompliance.chartaccounts.accountcodes.fuelvehicle') },
    ];

    const retentionData = [
        { cat: t('moneyfinance.accountingcompliance.recordretention.taxfinancialrecords'), time: t('moneyfinance.accountingcompliance.recordretention.years10') },
        { cat: t('moneyfinance.accountingcompliance.recordretention.customercontracts'), time: t('moneyfinance.accountingcompliance.recordretention.years10') },
        { cat: t('moneyfinance.accountingcompliance.recordretention.employeefiles'), time: t('moneyfinance.accountingcompliance.recordretention.durationplus5') },
        { cat: t('moneyfinance.accountingcompliance.recordretention.insurancepolicies'), time: t('moneyfinance.accountingcompliance.recordretention.permanent') },
    ];

    const auditTags = [
        t('moneyfinance.accountingcompliance.externalaudit.reliability'),
        t('moneyfinance.accountingcompliance.externalaudit.transparency'),
        t('moneyfinance.accountingcompliance.externalaudit.compliance'),
        t('moneyfinance.accountingcompliance.externalaudit.accuracy'),
    ];

    return (
        <Section id="section-8">
            <SectionHeader>{t('moneyfinance.accountingcompliance.section.header')}</SectionHeader>

            <SubSection id="chart-of-accounts">
                <SubSectionHeader>{t('moneyfinance.accountingcompliance.chartaccounts.subsectionheader')}</SubSectionHeader>
                <div className="my-6">
                    <Paragraph className="mb-4 text-xs italic">{t('moneyfinance.accountingcompliance.chartaccounts.intro')}</Paragraph>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {accountCategories.map((acc, i) => (
                            <div key={i} className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                                <div className="font-mono font-black text-xs text-secondary-600 mb-1">{acc.code}</div>
                                <div className="font-bold text-xs text-slate-900 dark:text-white">{acc.name}</div>
                                <div className="text-[10px] text-slate-500 truncate">{acc.desc}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800">
                              <h6 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-tighter italic">{t('moneyfinance.accountingcompliance.chartaccounts.primaryassetliability')}</h6>
                              <div className="space-y-2">
                                   {primaryAccounts.map((a, i) => (
                                       <div key={i} className="flex justify-between items-center py-1 border-b border-slate-900 text-[10px]">
                                            <span className="font-mono text-secondary-500 font-bold">{a.c}</span>
                                            <span className="text-slate-400 italic">{a.n}</span>
                                       </div>
                                   ))}
                              </div>
                         </div>
                         <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800">
                              <h6 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-tighter italic">{t('moneyfinance.accountingcompliance.chartaccounts.keyrevenueexpense')}</h6>
                              <div className="space-y-2">
                                   {keyAccounts.map((a, i) => (
                                       <div key={i} className="flex justify-between items-center py-1 border-b border-slate-900 text-[10px]">
                                            <span className="font-mono text-primary-500 font-bold">{a.c}</span>
                                            <span className="text-slate-400 italic">{a.n}</span>
                                       </div>
                                   ))}
                              </div>
                         </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="softcom-system">
                <SubSectionHeader>{t('moneyfinance.accountingcompliance.softcomsystem.subsectionheader')}</SubSectionHeader>
                <div className="p-8 bg-slate-950 rounded-[3rem] border border-slate-800 my-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-white font-black text-8xl opacity-5 italic tracking-tighter">BACKUP</div>
                    <Paragraph className="text-secondary-400 font-black text-xs uppercase mb-6 italic tracking-widest underline decoration-slate-800 decoration-4 underline-offset-8">{t('moneyfinance.accountingcompliance.softcomsystem.datagovernance')}</Paragraph>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        <div className="space-y-4">
                            <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-secondary-500/30 transition-colors">
                                <div className="text-[10px] font-black text-white uppercase mb-2 italic">{t('moneyfinance.accountingcompliance.softcomsystem.morningroutine')}</div>
                                <List className="text-[10px] text-slate-500 space-y-1">
                                    {(t('moneyfinance.accountingcompliance.softcomsystem.morningroutineitems', { returnObjects: true }) as string[]).map((item, i) => (
                                        <ListItem key={i}>{item}</ListItem>
                                    ))}
                                </List>
                            </div>
                            <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-secondary-500/30 transition-colors">
                                <div className="text-[10px] font-black text-white uppercase mb-2 italic">{t('moneyfinance.accountingcompliance.softcomsystem.dataentry')}</div>
                                <List className="text-[10px] text-slate-500 space-y-1">
                                    {(t('moneyfinance.accountingcompliance.softcomsystem.dataentryitems', { returnObjects: true }) as string[]).map((item, i) => (
                                        <ListItem key={i}>{item}</ListItem>
                                    ))}
                                </List>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center p-6 bg-slate-900/30 rounded-[2rem] border border-dashed border-slate-800">
                            <div className="w-16 h-16 bg-white rounded-3xl mb-4 flex items-center justify-center text-3xl">💾</div>
                            <div className="text-xs font-black text-white uppercase italic">{t('moneyfinance.accountingcompliance.softcomsystem.systemaccess')}</div>
                            <div className="text-[10px] text-slate-500 mt-2 leading-relaxed">{t('moneyfinance.accountingcompliance.softcomsystem.systemaccessdesc')}</div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="tax-compliance">
                <SubSectionHeader>{t('moneyfinance.accountingcompliance.taxcompliance.subsectionheader')}</SubSectionHeader>
                <div className="overflow-x-auto my-6">
                    <Table>
                        <TableRow isHeader>
                            <TableCell isHeader>{t('moneyfinance.accountingcompliance.taxcompliance.statutoryfiling')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.accountingcompliance.taxcompliance.cycle')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.accountingcompliance.taxcompliance.duedate')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.accountingcompliance.taxcompliance.standardrate')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-black text-primary-600 italic uppercase">{t('moneyfinance.accountingcompliance.taxcompliance.tva')}</span></TableCell>
                            <TableCell>{t('moneyfinance.accountingcompliance.taxcompliance.monthly')}</TableCell>
                            <TableCell>{t('moneyfinance.accountingcompliance.taxcompliance.tvaduedate')}</TableCell>
                            <TableCell><span className="font-mono font-bold">{t('moneyfinance.accountingcompliance.taxcompliance.tvarate')}</span></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-black text-slate-800 dark:text-white italic uppercase">{t('moneyfinance.accountingcompliance.taxcompliance.cnss')}</span></TableCell>
                            <TableCell>{t('moneyfinance.accountingcompliance.taxcompliance.quarterly')}</TableCell>
                            <TableCell>{t('moneyfinance.accountingcompliance.taxcompliance.cnssduedate')}</TableCell>
                            <TableCell><span className="font-mono">{t('moneyfinance.accountingcompliance.taxcompliance.cnssrate')}</span></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-black text-slate-800 dark:text-white italic uppercase">{t('moneyfinance.accountingcompliance.taxcompliance.retailwht')}</span></TableCell>
                            <TableCell>{t('moneyfinance.accountingcompliance.taxcompliance.monthly')}</TableCell>
                            <TableCell>{t('moneyfinance.accountingcompliance.taxcompliance.whtduedate')}</TableCell>
                            <TableCell><span className="font-mono font-bold">{t('moneyfinance.accountingcompliance.taxcompliance.whtrate')}</span></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-black text-red-600 dark:text-white underline uppercase italic">{t('moneyfinance.accountingcompliance.taxcompliance.incometax')}</span></TableCell>
                            <TableCell>{t('moneyfinance.accountingcompliance.taxcompliance.annualadvance')}</TableCell>
                            <TableCell>{t('moneyfinance.accountingcompliance.taxcompliance.isduedate')}</TableCell>
                            <TableCell><span className="font-mono font-black italic underline">{t('moneyfinance.accountingcompliance.taxcompliance.israte')}</span></TableCell>
                        </TableRow>
                    </Table>
                </div>
                <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-3xl border border-amber-200 dark:border-amber-900/30 flex items-center gap-6">
                    <div className="text-4xl">⚠️</div>
                    <div className="text-[10px] text-amber-900 dark:text-amber-500 font-bold italic leading-relaxed">
                        {t('moneyfinance.accountingcompliance.taxcompliance.latefilingwarning')}
                    </div>
                </div>
            </SubSection>

            <SubSection id="record-retention">
                <SubSectionHeader>{t('moneyfinance.accountingcompliance.recordretention.subsectionheader')}</SubSectionHeader>
                <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                        <div className="absolute bottom-0 right-0 p-8 opacity-5 text-7xl font-black text-primary-600 italic">10Y</div>
                        <h6 className="font-black text-xs uppercase text-slate-400 mb-6 tracking-widest border-b pb-2 italic">{t('moneyfinance.accountingcompliance.recordretention.retentiontimeline')}</h6>
                        <div className="space-y-4">
                            {retentionData.map((r, i) => (
                                <div key={i} className="flex justify-between items-center text-xs">
                                    <span className="font-bold text-slate-500 uppercase italic underline decoration-slate-100 decoration-2 underline-offset-4">{r.cat}</span>
                                    <span className="font-mono font-black text-primary-600 underline">{r.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-8 bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-800 rounded-[2.5rem]">
                        <h6 className="font-black text-xs uppercase text-slate-400 mb-4 tracking-widest italic border-b pb-2">{t('moneyfinance.accountingcompliance.recordretention.destructionprotocol')}</h6>
                        <Paragraph className="text-[11px] text-slate-500 italic leading-relaxed mb-4">{t('moneyfinance.accountingcompliance.recordretention.destructiondesc')}</Paragraph>
                        <List className="text-[10px] text-slate-400 space-y-1">
                            {(t('moneyfinance.accountingcompliance.recordretention.destructionitems', { returnObjects: true }) as string[]).map((item, i) => (
                                <ListItem key={i}>{item}</ListItem>
                            ))}
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="external-audit">
                <SubSectionHeader>{t('moneyfinance.accountingcompliance.externalaudit.subsectionheader')}</SubSectionHeader>
                <div className="p-8 bg-slate-900 rounded-[3rem] border border-slate-800 relative overflow-hidden text-center shadow-2xl">
                    <div className="relative z-10">
                        <div className="text-[10px] font-black text-slate-500 uppercase mb-4 tracking-[0.4em] italic">{t('moneyfinance.accountingcompliance.externalaudit.annualfiscal')}</div>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {auditTags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-slate-950 rounded-full border border-slate-800 text-[8px] font-black text-white italic tracking-widest uppercase">{tag}</span>
                            ))}
                        </div>
                        <p className="text-xs text-slate-400 italic max-w-2xl mx-auto leading-relaxed">
                            {t('moneyfinance.accountingcompliance.externalaudit.auditdesc')}
                        </p>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

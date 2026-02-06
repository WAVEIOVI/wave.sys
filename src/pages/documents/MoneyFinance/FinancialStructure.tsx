
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';
import PaymentAuthorizationMatrix from './PaymentAuthorizationMatrix';
import { formatCurrency } from '../../../utils/formatters';
import { useTranslation } from 'react-i18next';

export default function FinancialStructure() {
    const { t } = useTranslation();
    
    return (
        <Section id="section-1">
            <SectionHeader>{t('moneyfinance.financialstructure.section.header')}</SectionHeader>

            <SubSection id="financial-org">
                <SubSectionHeader>{t('moneyfinance.financialstructure.financialorg.subsectionheader')}</SubSectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="p-6 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl">
                        <h4 className="font-bold text-sm mb-4 text-secondary-600 dark:text-secondary-400 uppercase tracking-widest">{t('moneyfinance.financialstructure.financialorg.legalidentity.title')}</h4>
                        <div className="space-y-3">
                            <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">{t('moneyfinance.financialstructure.financialorg.legalidentity.legalentity')}</span>
                                <span className="text-xs font-bold font-mono">{t('moneyfinance.financialstructure.financialorg.legalidentity.sarl')}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">{t('moneyfinance.financialstructure.financialorg.legalidentity.companyname')}</span>
                                <span className="text-xs font-bold font-mono">{t('moneyfinance.financialstructure.financialorg.legalidentity.companynamevalue')}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">{t('moneyfinance.financialstructure.financialorg.legalidentity.taxid')}</span>
                                <span className="text-xs font-bold font-mono text-secondary-600 dark:text-secondary-500 underline">{t('moneyfinance.financialstructure.financialorg.legalidentity.taxidvalue')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">{t('moneyfinance.financialstructure.financialorg.legalidentity.financialyear')}</span>
                                <span className="text-xs font-bold">{t('moneyfinance.financialstructure.financialorg.legalidentity.financialyearvalue')}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
                        <h4 className="font-bold text-sm mb-4 text-primary-600 uppercase tracking-widest pl-2 border-l-4 border-primary-500">{t('moneyfinance.financialstructure.financialorg.managementteam.title')}</h4>
                        <div className="space-y-4">
                            <div>
                                <div className="text-xs font-black mb-1">{t('moneyfinance.financialstructure.financialorg.managementteam.mohamedali.name')}</div>
                                <div className="text-[9px] font-bold text-slate-400 uppercase mb-1 italic">{t('moneyfinance.financialstructure.financialorg.managementteam.mohamedali.role')}</div>
                                <List className="text-[10px] text-slate-500 leading-tight">
                                    <ListItem>{t('moneyfinance.financialstructure.financialorg.managementteam.mohamedali.responsibility')}</ListItem>
                                </List>
                            </div>
                            <div>
                                <div className="text-xs font-black mb-1">{t('moneyfinance.financialstructure.financialorg.managementteam.managers.name')}</div>
                                <div className="text-[9px] font-bold text-slate-400 uppercase mb-1 italic">{t('moneyfinance.financialstructure.financialorg.managementteam.managers.role')}</div>
                                <List className="text-[10px] text-slate-500 leading-tight">
                                    <ListItem>{t('moneyfinance.financialstructure.financialorg.managementteam.managers.responsibility')}</ListItem>
                                </List>
                            </div>
                            <div>
                                <div className="text-xs font-black mb-1">{t('moneyfinance.financialstructure.financialorg.managementteam.hela.name')}</div>
                                <div className="text-[9px] font-bold text-slate-400 uppercase mb-1 italic">{t('moneyfinance.financialstructure.financialorg.managementteam.hela.role')}</div>
                                <List className="text-[10px] text-slate-500 leading-tight">
                                    <ListItem>{t('moneyfinance.financialstructure.financialorg.managementteam.hela.responsibility')}</ListItem>
                                </List>
                            </div>
                            <div>
                                <div className="text-xs font-black mb-1">{t('moneyfinance.financialstructure.financialorg.managementteam.mohamed.name')}</div>
                                <div className="text-[9px] font-bold text-slate-400 uppercase mb-1 italic">{t('moneyfinance.financialstructure.financialorg.managementteam.mohamed.role')}</div>
                                <List className="text-[10px] text-slate-500 leading-tight">
                                    <ListItem>{t('moneyfinance.financialstructure.financialorg.managementteam.mohamed.responsibility')}</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="banking">
                <SubSectionHeader>{t('moneyfinance.financialstructure.banking.subsectionheader')}</SubSectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-5 bg-slate-50 dark:bg-slate-950/20 border-l-8 border-l-blue-600 rounded-2xl border border-slate-200 dark:border-slate-800 relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-2xl">01</div>
                        <h5 className="font-bold text-lg mb-2 text-slate-800 dark:text-white">{t('moneyfinance.financialstructure.banking.ubci.title')}</h5>
                        <p className="text-[10px] text-slate-500 font-bold uppercase mb-3">{t('moneyfinance.financialstructure.banking.ubci.subtitle')}</p>
                        <List className="text-xs space-y-1">
                            <ListItem>{t('moneyfinance.financialstructure.banking.ubci.item1')}</ListItem>
                            <ListItem>{t('moneyfinance.financialstructure.banking.ubci.item2')}</ListItem>
                            <ListItem>{t('moneyfinance.financialstructure.banking.ubci.item3')}</ListItem>
                        </List>
                    </div>
                    <div className="p-5 bg-slate-50 dark:bg-slate-950/20 border-l-8 border-l-slate-600 rounded-2xl border border-slate-200 dark:border-slate-800 relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-2xl">02</div>
                        <h5 className="font-bold text-lg mb-2 text-slate-800 dark:text-white">{t('moneyfinance.financialstructure.banking.btk.title')}</h5>
                        <p className="text-[10px] text-slate-500 font-bold uppercase mb-3">{t('moneyfinance.financialstructure.banking.btk.subtitle')}</p>
                        <List className="text-xs space-y-1">
                            <ListItem>{t('moneyfinance.financialstructure.banking.btk.item1')}</ListItem>
                            <ListItem>{t('moneyfinance.financialstructure.banking.btk.item2')}</ListItem>
                            <ListItem>{t('moneyfinance.financialstructure.banking.btk.item3')}</ListItem>
                        </List>
                    </div>
                </div>

                <div className="my-8">
                    <h5 className="font-bold text-sm uppercase italic text-primary-600 mb-4 border-b pb-2">{t('moneyfinance.financialstructure.banking.authority.title')}</h5>
                    <Table>
                        <TableRow isHeader>
                            <TableCell isHeader>{t('moneyfinance.financialstructure.banking.authority.table.transactiontype')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.financialstructure.banking.authority.table.amount')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.financialstructure.banking.authority.table.signaturerequirement')}</TableCell>
                        </TableRow>
                        <TableRow><TableCell><strong>{t('moneyfinance.financialstructure.banking.authority.table.checks')}</strong></TableCell><TableCell>{t('moneyfinance.financialstructure.banking.authority.table.upto5k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.banking.authority.table.onesig')}</TableCell></TableRow>
                        <TableRow><TableCell><strong>{t('moneyfinance.financialstructure.banking.authority.table.checks')}</strong></TableCell><TableCell>{t('moneyfinance.financialstructure.banking.authority.table.above5k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.banking.authority.table.twosig')}</TableCell></TableRow>
                        <TableRow><TableCell><strong>{t('moneyfinance.financialstructure.banking.authority.table.banktransfers')}</strong></TableCell><TableCell>{t('moneyfinance.financialstructure.banking.authority.table.upto5k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.banking.authority.table.onesig')}</TableCell></TableRow>
                        <TableRow><TableCell><strong>{t('moneyfinance.financialstructure.banking.authority.table.banktransfers')}</strong></TableCell><TableCell>{t('moneyfinance.financialstructure.banking.authority.table.above5k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.banking.authority.table.twosig')}</TableCell></TableRow>
                        <TableRow><TableCell><strong>{t('moneyfinance.financialstructure.banking.authority.table.cashwithdrawals')}</strong></TableCell><TableCell>{t('moneyfinance.financialstructure.banking.authority.table.upto2k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.banking.authority.table.onesig')}</TableCell></TableRow>
                        <TableRow><TableCell><strong>{t('moneyfinance.financialstructure.banking.authority.table.cashwithdrawals')}</strong></TableCell><TableCell>{t('moneyfinance.financialstructure.banking.authority.table.above2k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.banking.authority.table.twosig')}</TableCell></TableRow>
                        <TableRow><TableCell><strong>{t('moneyfinance.financialstructure.banking.authority.table.standingorders')}</strong></TableCell><TableCell>{t('moneyfinance.financialstructure.banking.authority.table.anyamount')}</TableCell><TableCell>{t('moneyfinance.financialstructure.banking.authority.table.twosigssetup')}</TableCell></TableRow>
                        <TableRow><TableCell><strong>{t('moneyfinance.financialstructure.banking.authority.table.creditfacilities')}</strong></TableCell><TableCell>{t('moneyfinance.financialstructure.banking.authority.table.anyamount')}</TableCell><TableCell>{t('moneyfinance.financialstructure.banking.authority.table.bothmanagers')}</TableCell></TableRow>
                    </Table>
                </div>

                <div className="mb-8">
                    <h5 className="font-bold text-sm uppercase italic text-slate-600 dark:text-slate-400 mb-4 border-b pb-2">{t('moneyfinance.financialstructure.banking.schedule.title')}</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                            <h6 className="font-bold text-xs text-secondary-600 mb-2">{t('moneyfinance.financialstructure.banking.schedule.daily.title')}</h6>
                            <List className="text-[10px] space-y-1">
                                <ListItem>{t('moneyfinance.financialstructure.banking.schedule.daily.item1')}</ListItem>
                                <ListItem>{t('moneyfinance.financialstructure.banking.schedule.daily.item2')}</ListItem>
                                <ListItem>{t('moneyfinance.financialstructure.banking.schedule.daily.item3')}</ListItem>
                            </List>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                            <h6 className="font-bold text-xs text-primary-600 mb-2">{t('moneyfinance.financialstructure.banking.schedule.weekly.title')}</h6>
                            <List className="text-[10px] space-y-1">
                                <ListItem>{t('moneyfinance.financialstructure.banking.schedule.weekly.item1')}</ListItem>
                                <ListItem>{t('moneyfinance.financialstructure.banking.schedule.weekly.item2')}</ListItem>
                                <ListItem>{t('moneyfinance.financialstructure.banking.schedule.weekly.item3')}</ListItem>
                            </List>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                            <h6 className="font-bold text-xs text-purple-600 mb-2">{t('moneyfinance.financialstructure.banking.schedule.monthly.title')}</h6>
                            <List className="text-[10px] space-y-1">
                                <ListItem>{t('moneyfinance.financialstructure.banking.schedule.monthly.item1')}</ListItem>
                                <ListItem>{t('moneyfinance.financialstructure.banking.schedule.monthly.item2')}</ListItem>
                                <ListItem>{t('moneyfinance.financialstructure.banking.schedule.monthly.item3')}</ListItem>
                            </List>
                        </div>
                    </div>
                </div>

                <Blockquote type="info" title={t('moneyfinance.financialstructure.banking.d17.title')}>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="text-xs space-y-2">
                            <p>{t('moneyfinance.financialstructure.banking.d17.description')}</p>
                            <List className="text-[10px]">
                                <ListItem>{t('moneyfinance.financialstructure.banking.d17.item1')}</ListItem>
                                <ListItem>{t('moneyfinance.financialstructure.banking.d17.item2')}</ListItem>
                            </List>
                        </div>
                        <div className="bg-slate-900 p-4 rounded-xl flex items-center justify-center">
                            <div className="text-secondary-500 font-black text-2xl animate-pulse italic">{t('moneyfinance.financialstructure.banking.d17.badge')}</div>
                        </div>
                    </div>
                </Blockquote>
            </SubSection>

            <SubSection id="authority-matrix">
                <SubSectionHeader>{t('moneyfinance.financialstructure.authoritymatrix.subsectionheader')}</SubSectionHeader>
                <Paragraph className="mb-6">
                    {t('moneyfinance.financialstructure.authoritymatrix.description')}
                </Paragraph>

                <div className="overflow-x-auto mb-10">
                    <PaymentAuthorizationMatrix />
                </div>

                <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2rem] my-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-white font-black text-6xl opacity-5 italic tracking-tighter">LEVELS</div>
                    <div className="relative z-10">
                        <h5 className="text-secondary-500 font-black text-xs uppercase mb-6 italic tracking-widest underline decoration-4 underline-offset-8 decoration-slate-800">{t('moneyfinance.financialstructure.authoritymatrix.thresholdoverview.title')}</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { title: "Petty Cash", limit: 500, label: "Daily Ops", role: "Team Leader" },
                                { title: "Operating Exp", limit: 2000, label: "Standard", role: "AF Resp." },
                                { title: "High Value", limit: 5000, label: "Critical", role: "Sales Resp." },
                                { title: "Strategic", limit: 10000, label: "Unlimited", role: "Managers" },
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col hover:border-secondary-500/50 transition-colors">
                                    <span className="text-[10px] font-black text-slate-500 uppercase mb-1">{item.title}</span>
                                    <span className="text-lg font-black text-white italic">{formatCurrency(item.limit)}</span>
                                    <div className="mt-2 pt-2 border-t border-slate-800 flex justify-between items-center">
                                        <span className="text-[9px] font-bold text-secondary-500 uppercase">{item.label}</span>
                                        <span className="text-[8px] text-slate-500 italic">{item.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <h5 className="font-bold text-sm mb-3 mt-8">{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.title')}</h5>
                <div className="overflow-x-auto mb-8">
                    <Table>
                        <TableRow isHeader>
                            <TableCell isHeader>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.transactiontype')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.amountrange')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.requiredapproval')}</TableCell>
                        </TableRow>
                        <TableRow><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.customerinvoices')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.upto5k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.adminfinance')}</TableCell></TableRow>
                        <TableRow><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.customerinvoices')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.above5k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.adminfinancesales')}</TableCell></TableRow>
                        <TableRow><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.purchaseorders')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.upto500')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.warehouseops')}</TableCell></TableRow>
                        <TableRow><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.purchaseorders')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.501to5k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.salesresp')}</TableCell></TableRow>
                        <TableRow><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.purchaseorders')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.above5k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.salesrespmanager')}</TableCell></TableRow>
                        <TableRow><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.creditnotes')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.upto1k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.opssales')}</TableCell></TableRow>
                        <TableRow><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.creditnotes')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.above1k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.salesrespmanager')}</TableCell></TableRow>
                        <TableRow><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.expensereimb')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.upto500')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.adminfinance')}</TableCell></TableRow>
                        <TableRow><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.expensereimb')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.above500')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.managerapproval')}</TableCell></TableRow>
                        <TableRow><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.pettycashreplen')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.upto1k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.adminfinance')}</TableCell></TableRow>
                        <TableRow><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.supplierpayments')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.upto5k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.adminfinancepo')}</TableCell></TableRow>
                        <TableRow><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.supplierpayments')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.above5k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.managerapproval')}</TableCell></TableRow>
                        <TableRow><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.salarypayments')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.monthlypayroll')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.adminpreparesmanagerapproves')}</TableCell></TableRow>
                        <TableRow><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.taxpayments')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.anyamount')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.adminpreparesmanagerapproves')}</TableCell></TableRow>
                        <TableRow><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.baddebtwriteoff')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.upto2k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.bothmanagers')}</TableCell></TableRow>
                        <TableRow><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.baddebtwriteoff')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.above2k')}</TableCell><TableCell>{t('moneyfinance.financialstructure.authoritymatrix.transactionmatrix.table.managersdoc')}</TableCell></TableRow>
                    </Table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 bg-red-950 rounded-3xl border border-red-900">
                        <h5 className="font-black text-red-500 uppercase text-xs mb-3 tracking-widest italic decoration-red-900 decoration-4 underline">{t('moneyfinance.financialstructure.authoritymatrix.emergency.title')}</h5>
                        <p className="text-[11px] text-red-200/60 mb-4 leading-relaxed italic">{t('moneyfinance.financialstructure.authoritymatrix.emergency.description')}</p>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-xs">
                                <span className="font-bold text-white uppercase">{t('moneyfinance.financialstructure.authoritymatrix.emergency.opsresp')}</span>
                                <span className="font-black text-red-400">2,000 TND</span>
                            </div>
                            <div className="flex justify-between items-center text-xs border-t border-red-900 pt-2">
                                <span className="font-bold text-white uppercase">{t('moneyfinance.financialstructure.authoritymatrix.emergency.adminresp')}</span>
                                <span className="font-black text-red-400">3,000 TND</span>
                            </div>
                        </div>
                        <p className="text-[9px] text-red-700 font-bold mt-4 uppercase">{t('moneyfinance.financialstructure.authoritymatrix.emergency.note')}</p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                        <h5 className="font-black text-slate-900 dark:text-white uppercase text-xs mb-3 tracking-widest italic decoration-primary-200 decoration-4 underline">{t('moneyfinance.financialstructure.authoritymatrix.transactionrules.title')}</h5>
                        <div className="space-y-1">
                            <div className="text-[10px] font-bold text-slate-500">{t('moneyfinance.financialstructure.authoritymatrix.transactionrules.invoicesover10k')}</div>
                            <div className="text-xs font-black underline decoration-slate-300">{t('moneyfinance.financialstructure.authoritymatrix.transactionrules.managersignoff')}</div>
                            <div className="text-[10px] font-bold text-slate-500 mt-3 italic underline decoration-dotted decoration-primary-300">{t('moneyfinance.financialstructure.authoritymatrix.transactionrules.baddebtwriteoffs')}</div>
                            <div className="text-xs font-black text-slate-700 dark:text-slate-300 italic">{t('moneyfinance.financialstructure.authoritymatrix.transactionrules.requiresmanagersdoc')}</div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="internal-controls">
                <SubSectionHeader>{t('moneyfinance.financialstructure.controls.subsectionheader')}</SubSectionHeader>
                <div className="space-y-8 my-6">
                    <div className="p-8 bg-slate-950 rounded-[3rem] border border-slate-800 relative overflow-hidden group shadow-2xl">
                        <div className="absolute top-0 right-0 p-8 text-slate-900 text-6xl font-black">SOD</div>
                        <h5 className="font-black text-secondary-500 uppercase tracking-tighter text-xl mb-6 italic relative z-10 underline decoration-4 underline-offset-8 decoration-slate-900">{t('moneyfinance.financialstructure.controls.segregation.title')}</h5>
                        <div className="overflow-x-auto relative z-10">
                            <Table>
                                <TableRow isHeader><TableCell isHeader>{t('moneyfinance.financialstructure.controls.segregation.table.function')}</TableCell><TableCell isHeader>{t('moneyfinance.financialstructure.controls.segregation.table.responsibleperson')}</TableCell><TableCell isHeader>{t('moneyfinance.financialstructure.controls.segregation.table.cannotalso')}</TableCell></TableRow>
                                <TableRow><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.salesservice')}</TableCell><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.salesrepstechs')}</TableCell><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.invoicecreationpayment')}</TableCell></TableRow>
                                <TableRow><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.invoicecreation')}</TableCell><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.salesopsresp')}</TableCell><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.serviceauthpayment')}</TableCell></TableRow>
                                <TableRow><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.paymentreceipt')}</TableCell><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.adminfinancecollection')}</TableCell><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.invoicecreationreconciliation')}</TableCell></TableRow>
                                <TableRow><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.bankreconciliation')}</TableCell><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.adminfinanceresp')}</TableCell><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.paymentreceiptalone')}</TableCell></TableRow>
                                <TableRow><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.purchaseordering')}</TableCell><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.warehouseresp')}</TableCell><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.paymentauthgoods')}</TableCell></TableRow>
                                <TableRow><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.goodsreceipt')}</TableCell><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.warehousestaff')}</TableCell><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.purchaseordersupplierpayment')}</TableCell></TableRow>
                                <TableRow><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.supplierpayment')}</TableCell><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.adminfinanceresp')}</TableCell><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.purchaseorderingpaymentauth')}</TableCell></TableRow>
                                <TableRow><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.paymentauthorization')}</TableCell><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.managers')}</TableCell><TableCell>{t('moneyfinance.financialstructure.controls.segregation.table.paymentprocessingreconciliation')}</TableCell></TableRow>
                            </Table>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
                            <h6 className="font-bold text-xs uppercase text-slate-400 mb-3 tracking-widest">{t('moneyfinance.financialstructure.controls.bankreconciliationdrill.title')}</h6>
                            <p className="text-[11px] text-slate-500 mb-4">{t('moneyfinance.financialstructure.controls.bankreconciliationdrill.description')}</p>
                            <List className="text-[10px] space-y-1">
                                <ListItem>{t('moneyfinance.financialstructure.controls.bankreconciliationdrill.item1')}</ListItem>
                                <ListItem>{t('moneyfinance.financialstructure.controls.bankreconciliationdrill.item2')}</ListItem>
                                <ListItem>{t('moneyfinance.financialstructure.controls.bankreconciliationdrill.item3')}</ListItem>
                                <ListItem>{t('moneyfinance.financialstructure.controls.bankreconciliationdrill.item4')}</ListItem>
                            </List>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
                            <h6 className="font-bold text-xs uppercase text-slate-400 mb-3 tracking-widest">{t('moneyfinance.financialstructure.controls.cashsecurity.title')}</h6>
                            <List className="text-[10px] space-y-1">
                                <ListItem>{t('moneyfinance.financialstructure.controls.cashsecurity.item1')}</ListItem>
                                <ListItem>{t('moneyfinance.financialstructure.controls.cashsecurity.item2')}</ListItem>
                                <ListItem>{t('moneyfinance.financialstructure.controls.cashsecurity.item3')}</ListItem>
                                <ListItem>{t('moneyfinance.financialstructure.controls.cashsecurity.item4')}</ListItem>
                            </List>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-amber-600 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative p-8 bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 leading-tight">
                            <h5 className="text-red-600 font-black uppercase text-xs mb-4 tracking-[0.2em] italic">{t('moneyfinance.financialstructure.controls.fraudprevention.title')}</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
                                <div>
                                    <div className="font-black mb-2 text-slate-900 dark:text-white">{t('moneyfinance.financialstructure.controls.fraudprevention.behavioralredflags')}</div>
                                    <List className="text-[10px] text-slate-500 space-y-1">
                                        <ListItem>{t('moneyfinance.financialstructure.controls.fraudprevention.flag1')}</ListItem>
                                        <ListItem>{t('moneyfinance.financialstructure.controls.fraudprevention.flag2')}</ListItem>
                                        <ListItem>{t('moneyfinance.financialstructure.controls.fraudprevention.flag3')}</ListItem>
                                    </List>
                                </div>
                                <div>
                                    <div className="font-black mb-2 text-slate-900 dark:text-white">{t('moneyfinance.financialstructure.controls.fraudprevention.reportingchannel')}</div>
                                    <p className="text-[10px] text-slate-500 leading-normal">
                                        {t('moneyfinance.financialstructure.controls.fraudprevention.reportingdesc')}
                                        <br />{t('moneyfinance.financialstructure.controls.fraudprevention.reportingemail')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="document-retention">
                <SubSectionHeader>{t('moneyfinance.financialstructure.documentretention.subsectionheader')}</SubSectionHeader>
                <Paragraph>{t('moneyfinance.financialstructure.documentretention.description')}</Paragraph>
                <Table>
                    <TableRow isHeader>
                        <TableCell isHeader>{t('moneyfinance.financialstructure.documentretention.table.documenttype')}</TableCell>
                        <TableCell isHeader>{t('moneyfinance.financialstructure.documentretention.table.retentionperiod')}</TableCell>
                        <TableCell isHeader>{t('moneyfinance.financialstructure.documentretention.table.storagelocation')}</TableCell>
                    </TableRow>
                    <TableRow><TableCell>{t('moneyfinance.financialstructure.documentretention.table.invoices')}</TableCell><TableCell>{t('moneyfinance.financialstructure.documentretention.table.10years')}</TableCell><TableCell>{t('moneyfinance.financialstructure.documentretention.table.softcomarchive')}</TableCell></TableRow>
                    <TableRow><TableCell>{t('moneyfinance.financialstructure.documentretention.table.bankstatements')}</TableCell><TableCell>{t('moneyfinance.financialstructure.documentretention.table.10years')}</TableCell><TableCell>{t('moneyfinance.financialstructure.documentretention.table.physicalarchive')}</TableCell></TableRow>
                    <TableRow><TableCell>{t('moneyfinance.financialstructure.documentretention.table.taxreturns')}</TableCell><TableCell>{t('moneyfinance.financialstructure.documentretention.table.10yearsmin')}</TableCell><TableCell>{t('moneyfinance.financialstructure.documentretention.table.archivedigital')}</TableCell></TableRow>
                    <TableRow><TableCell>{t('moneyfinance.financialstructure.documentretention.table.payrollrecords')}</TableCell><TableCell>{t('moneyfinance.financialstructure.documentretention.table.10years')}</TableCell><TableCell>{t('moneyfinance.financialstructure.documentretention.table.securephysicaldigital')}</TableCell></TableRow>
                    <TableRow><TableCell>{t('moneyfinance.financialstructure.documentretention.table.contracts')}</TableCell><TableCell>{t('moneyfinance.financialstructure.documentretention.table.7yearsafterexpiry')}</TableCell><TableCell>{t('moneyfinance.financialstructure.documentretention.table.physicalarchive')}</TableCell></TableRow>
                    <TableRow><TableCell>{t('moneyfinance.financialstructure.documentretention.table.expensereports')}</TableCell><TableCell>{t('moneyfinance.financialstructure.documentretention.table.7years')}</TableCell><TableCell>{t('moneyfinance.financialstructure.documentretention.table.physicalarchive')}</TableCell></TableRow>
                </Table>
            </SubSection>
        </Section>
    );
}

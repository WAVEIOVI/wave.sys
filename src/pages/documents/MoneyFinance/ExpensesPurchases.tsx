
import { useTranslation } from 'react-i18next';
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';

import BudgetApprovalFlow from './BudgetApprovalFlow';
import { formatCurrency } from '../../../utils/formatters';

export default function ExpensesPurchases() {
    const { t } = useTranslation();

    const threeWayMatchItems = [
        { title: t('moneyfinance.expensespurchases.purchaseorders.threewaymatch1'), ref: "PO", icon: "📄", desc: t('moneyfinance.expensespurchases.purchaseorders.threewaymatchdesc1') },
        { title: t('moneyfinance.expensespurchases.purchaseorders.threewaymatch2'), ref: "GRN/DN", icon: "📦", desc: t('moneyfinance.expensespurchases.purchaseorders.threewaymatchdesc2') },
        { title: t('moneyfinance.expensespurchases.purchaseorders.threewaymatch3'), ref: "FAC", icon: "💰", desc: t('moneyfinance.expensespurchases.purchaseorders.threewaymatchdesc3') },
    ];

    const expensePolicyItems = [
        { title: t('moneyfinance.expensespurchases.expenseauth.mealsentertainment'), rule: t('moneyfinance.expensespurchases.expenseauth.mealsrule') },
        { title: t('moneyfinance.expensespurchases.expenseauth.mobilephones'), rule: t('moneyfinance.expensespurchases.expenseauth.phonesrule') },
        { title: t('moneyfinance.expensespurchases.expenseauth.internetwfh'), rule: t('moneyfinance.expensespurchases.expenseauth.internetrule') },
    ];

    const pettyCashItems = [
        { loc: t('moneyfinance.expensespurchases.pettycash.sfaxhq'), float: 1000, trigger: 300 },
        { loc: t('moneyfinance.expensespurchases.pettycash.tunisbranch'), float: 800, trigger: 250 },
        { loc: t('moneyfinance.expensespurchases.pettycash.mobileunits'), float: 200, trigger: 50 },
    ];

    const supplierPaymentSteps = [
        { step: t('moneyfinance.expensespurchases.supplierpayments.verification'), day: t('moneyfinance.expensespurchases.supplierpayments.verificationday'), desc: t('moneyfinance.expensespurchases.supplierpayments.verificationdesc') },
        { step: t('moneyfinance.expensespurchases.supplierpayments.approval'), day: t('moneyfinance.expensespurchases.supplierpayments.approvalday'), desc: t('moneyfinance.expensespurchases.supplierpayments.approvaldesc') },
        { step: t('moneyfinance.expensespurchases.supplierpayments.execution'), day: t('moneyfinance.expensespurchases.supplierpayments.executionday'), desc: t('moneyfinance.expensespurchases.supplierpayments.executiondesc') },
        { step: t('moneyfinance.expensespurchases.supplierpayments.notification'), day: t('moneyfinance.expensespurchases.supplierpayments.notificationday'), desc: t('moneyfinance.expensespurchases.supplierpayments.notificationdesc') },
    ];

    return (
        <Section id="section-4">
            <SectionHeader>{t('moneyfinance.expensespurchases.section.header')}</SectionHeader>

            <SubSection id="purchase-orders">
                <SubSectionHeader>{t('moneyfinance.expensespurchases.purchaseorders.subsectionheader')}</SubSectionHeader>

                <div className="p-8 bg-slate-900 border border-slate-800 rounded-[3rem] my-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-white font-black text-8xl opacity-5 italic tracking-tighter">CONTROL</div>
                    <div className="relative z-10">
                        <h5 className="text-secondary-500 font-black text-xs uppercase mb-6 italic tracking-widest underline decoration-4 underline-offset-8 decoration-slate-800">{t('moneyfinance.expensespurchases.purchaseorders.threewaymatchprotocol')}</h5>
                        <p className="text-xs text-slate-400 mb-8 leading-relaxed max-w-xl">{t('moneyfinance.expensespurchases.purchaseorders.threewaymatchdesc')}</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {threeWayMatchItems.map((item, i) => (
                                <div key={i} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col items-center text-center group-hover:border-secondary-500/50 transition-colors">
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <div className="text-[10px] font-black uppercase text-white mb-1">{item.title}</div>
                                    <div className="text-[9px] font-bold text-secondary-500 font-mono mb-2">[{item.ref}]</div>
                                    <p className="text-[9px] text-slate-500 italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="my-10">
                    <BudgetApprovalFlow />
                </div>

                <div className="my-10 p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 font-black text-6xl rotate-12 group-hover:rotate-0 transition-transform duration-700">RULES</div>
                    <h5 className="font-black text-xs text-primary-600 uppercase tracking-widest mb-8 italic underline decoration-4 underline-offset-8 decoration-slate-100 dark:decoration-slate-800">{t('moneyfinance.expensespurchases.purchaseorders.pomandaterules')}</h5>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="bg-slate-50 dark:bg-slate-950/40 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 relative h-full">
                                <span className="absolute -top-3 left-6 bg-slate-900 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">{t('moneyfinance.expensespurchases.purchaseorders.standardops')}</span>
                                <div className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-[0.2em]">{t('moneyfinance.expensespurchases.purchaseorders.mandatoryinclusion')}</div>
                                <List className="text-[11px] space-y-4 font-medium text-slate-500">
                                    <ListItem><span className="text-slate-900 dark:text-white font-black italic tracking-tight uppercase mr-2">{t('moneyfinance.expensespurchases.purchaseorders.inventory')}:</span> {t('moneyfinance.expensespurchases.purchaseorders.inventorydesc')}</ListItem>
                                    <ListItem><span className="text-slate-900 dark:text-white font-black italic tracking-tight uppercase mr-2">{t('moneyfinance.expensespurchases.purchaseorders.capitalassets')}:</span> {t('moneyfinance.expensespurchases.purchaseorders.capitalassetsdesc')}</ListItem>
                                    <ListItem><span className="text-slate-900 dark:text-white font-black italic tracking-tight uppercase mr-2">{t('moneyfinance.expensespurchases.purchaseorders.servicecontracts')}:</span> {t('moneyfinance.expensespurchases.purchaseorders.servicecontractsdesc', { amount: formatCurrency(500) })}</ListItem>
                                </List>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="p-6 border-l-4 border-amber-400 bg-amber-50/20 dark:bg-amber-900/10 rounded-r-3xl flex-grow">
                                <div className="text-[10px] font-black uppercase text-amber-600 mb-3 tracking-widest flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                                    {t('moneyfinance.expensespurchases.purchaseorders.policywaiver')}
                                </div>
                                <p className="text-[11px] text-slate-500 leading-relaxed italic">{t('moneyfinance.expensespurchases.purchaseorders.policywaiverdesc')}</p>
                            </div>

                            <div className="px-6 py-5 bg-red-600 text-white rounded-3xl flex items-center gap-6 shadow-xl shadow-red-500/10">
                                 <div className="text-3xl font-black italic opacity-50 select-none">!</div>
                                 <div>
                                     <div className="text-[10px] font-black uppercase opacity-60 leading-none mb-1">{t('moneyfinance.expensespurchases.purchaseorders.criticalcontrolpoint')}</div>
                                     <div className="text-[12px] font-bold italic tracking-tight">{t('moneyfinance.expensespurchases.purchaseorders.criticalcontroldesc')}</div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="expense-auth">
                <SubSectionHeader>{t('moneyfinance.expensespurchases.expenseauth.subsectionheader')}</SubSectionHeader>
                <div className="overflow-x-auto my-6">
                    <Table>
                        <TableRow isHeader>
                            <TableCell isHeader>{t('moneyfinance.expensespurchases.expenseauth.expensecategory')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.expensespurchases.expenseauth.primaryapprover')}</TableCell>
                            <TableCell isHeader>{t('moneyfinance.expensespurchases.expenseauth.controlconstraint')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-bold">{t('moneyfinance.expensespurchases.expenseauth.salariesstatutory')}</span></TableCell>
                            <TableCell><span className="text-red-600 font-black">{t('moneyfinance.expensespurchases.expenseauth.salariesapprover')}</span></TableCell>
                            <TableCell>{t('moneyfinance.expensespurchases.expenseauth.salariesconstraint')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-bold">{t('moneyfinance.expensespurchases.expenseauth.vehiclelogistics')}</span></TableCell>
                            <TableCell>{t('moneyfinance.expensespurchases.expenseauth.vehicleapprover')}</TableCell>
                            <TableCell>{t('moneyfinance.expensespurchases.expenseauth.vehicleconstraint')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-bold">{t('moneyfinance.expensespurchases.expenseauth.officesupplies')}</span></TableCell>
                            <TableCell>{t('moneyfinance.expensespurchases.expenseauth.officeapprover')}</TableCell>
                            <TableCell>{t('moneyfinance.expensespurchases.expenseauth.officeconstraint', { amount: formatCurrency(2000) })}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-bold">{t('moneyfinance.expensespurchases.expenseauth.marketingevents')}</span></TableCell>
                            <TableCell>{t('moneyfinance.expensespurchases.expenseauth.marketingapprover')}</TableCell>
                            <TableCell>{t('moneyfinance.expensespurchases.expenseauth.marketingconstraint')}</TableCell>
                        </TableRow>
                    </Table>
                </div>

                <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800">
                    <h6 className="text-[10px] font-black text-slate-500 uppercase mb-4 tracking-widest">{t('moneyfinance.expensespurchases.expenseauth.employeereimbursement')}</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-[11px] text-slate-400 leading-relaxed font-medium">
                            {t('moneyfinance.expensespurchases.expenseauth.expenseformdesc', { form: t('moneyfinance.expensespurchases.expenseauth.expenseform') })}
                        </div>
                        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
                            <div className="text-[10px] font-black text-white uppercase italic">{t('moneyfinance.expensespurchases.expenseauth.processingcycle')}</div>
                            <div className="text-[11px] font-bold text-secondary-500">{t('moneyfinance.expensespurchases.expenseauth.processingvalue')}</div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                     {expensePolicyItems.map((p, i) => (
                         <div key={i} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                             <div className="font-bold text-xs mb-2 text-slate-700 dark:text-slate-300">{p.title}</div>
                             <div className="text-[10px] text-slate-500 leading-tight">{p.rule}</div>
                         </div>
                     ))}
                </div>
            </SubSection>

            <SubSection id="petty-cash-mgt">
                <SubSectionHeader>{t('moneyfinance.expensespurchases.pettycash.subsectionheader')}</SubSectionHeader>
                <Paragraph>
                    {t('moneyfinance.expensespurchases.pettycash.pettycashdesc')}
                </Paragraph>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                    {pettyCashItems.map((item, i) => (
                        <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-[10px] font-black text-slate-400 uppercase mb-4">{item.loc}</div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="text-[9px] font-bold text-slate-500 uppercase leading-none mb-1">{t('moneyfinance.expensespurchases.pettycash.maxfloat')}</div>
                                    <div className="text-xl font-black text-slate-900 dark:text-white italic">{formatCurrency(item.float)}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[9px] font-bold text-primary-500 uppercase leading-none mb-1">{t('moneyfinance.expensespurchases.pettycash.replenishat')}</div>
                                    <div className="text-sm font-black text-primary-600 italic">&lt;{formatCurrency(item.trigger)}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SubSection>

            <SubSection id="travel-vehicle">
                <SubSectionHeader>{t('moneyfinance.expensespurchases.travelvehicle.subsectionheader')}</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem]">
                        <h5 className="font-bold text-sm mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                             <span>🚗</span> {t('moneyfinance.expensespurchases.travelvehicle.vehiclefleetpolicy')}
                        </h5>
                        <List className="text-[10px] space-y-2 text-slate-500">
                            <ListItem><strong className="text-slate-700 dark:text-slate-300">{t('moneyfinance.expensespurchases.travelvehicle.assignment')}</strong> {t('moneyfinance.expensespurchases.travelvehicle.assignmentdesc')}</ListItem>
                            <ListItem><strong className="text-slate-700 dark:text-slate-300">{t('moneyfinance.expensespurchases.travelvehicle.fuelcards')}</strong> {t('moneyfinance.expensespurchases.travelvehicle.fueldesc')}</ListItem>
                            <ListItem><strong className="text-slate-700 dark:text-slate-300">{t('moneyfinance.expensespurchases.travelvehicle.logbooks')}</strong> {t('moneyfinance.expensespurchases.travelvehicle.logbooksdesc')}</ListItem>
                        </List>
                    </div>

                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem]">
                        <h5 className="font-bold text-sm mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                             <span>🔧</span> {t('moneyfinance.expensespurchases.travelvehicle.maintenanceprotocol')}
                        </h5>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-[10px] border-b border-slate-200 dark:border-slate-800 pb-2">
                                <span className="text-slate-500">{t('moneyfinance.expensespurchases.travelvehicle.routinemaintenance')}</span>
                                <span className="font-bold text-green-600">{t('moneyfinance.expensespurchases.travelvehicle.routineapprover')}</span>
                            </div>
                            <div className="flex justify-between items-center text-[10px] border-b border-slate-200 dark:border-slate-800 pb-2">
                                <span className="text-slate-500">{t('moneyfinance.expensespurchases.travelvehicle.majorrepairs')}</span>
                                <span className="font-bold text-red-600">{t('moneyfinance.expensespurchases.travelvehicle.majorapprover')}</span>
                            </div>
                            <div className="text-[9px] text-slate-400 italic mt-2">
                                {t('moneyfinance.expensespurchases.travelvehicle.serviceinterval')}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 bg-slate-900 rounded-[2.5rem] border border-slate-800 my-8 shadow-xl">
                    <h5 className="text-[10px] font-black text-slate-500 uppercase mb-6 tracking-widest text-center">{t('moneyfinance.expensespurchases.travelvehicle.stafftravelreimbursement')}</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white divide-y md:divide-y-0 md:divide-x divide-slate-800">
                        <div className="text-center pt-4 md:pt-0">
                            <div className="text-2xl mb-2">🏨</div>
                            <div className="text-[10px] font-bold uppercase mb-1 text-secondary-500">{t('moneyfinance.expensespurchases.travelvehicle.accommodation')}</div>
                            <div className="text-xl font-black mb-1 italic">{t('moneyfinance.expensespurchases.travelvehicle.accommodationstd')}</div>
                            <p className="text-[9px] text-slate-400">{t('moneyfinance.expensespurchases.travelvehicle.accommodationdesc')}</p>
                        </div>
                        <div className="text-center pt-4 md:pt-0">
                            <div className="text-2xl mb-2">🍽️</div>
                            <div className="text-[10px] font-bold uppercase mb-1 text-secondary-500">{t('moneyfinance.expensespurchases.travelvehicle.perdiem')}</div>
                            <div className="text-xl font-black mb-1 italic">{t('moneyfinance.expensespurchases.travelvehicle.perdiemdesc')}</div>
                            <p className="text-[9px] text-slate-400">{t('moneyfinance.expensespurchases.travelvehicle.perdiemnote')}</p>
                        </div>
                        <div className="text-center pt-4 md:pt-0">
                            <div className="text-2xl mb-2">⛽</div>
                            <div className="text-[10px] font-bold uppercase mb-1 text-secondary-500">{t('moneyfinance.expensespurchases.travelvehicle.mileage')}</div>
                            <div className="text-xl font-black mb-1 italic">{t('moneyfinance.expensespurchases.travelvehicle.mileagerate')}</div>
                            <p className="text-[9px] text-slate-400">{t('moneyfinance.expensespurchases.travelvehicle.mileagedesc')}</p>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="supplier-payments">
                <SubSectionHeader>{t('moneyfinance.expensespurchases.supplierpayments.subsectionheader')}</SubSectionHeader>
                <div className="p-1 gap-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-8">
                    {supplierPaymentSteps.map((s, i) => (
                        <div key={i} className="p-5 bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-800 rounded-2xl">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[8px] font-black py-1 px-2 bg-slate-900 text-white rounded-md tracking-widest">{s.day}</span>
                                <span className="text-primary-500 font-mono font-black italic">STEP {i + 1}</span>
                            </div>
                            <div className="text-xs font-black text-slate-900 dark:text-white uppercase mb-1 italic">{s.step}</div>
                            <p className="text-[10px] text-slate-500 leading-tight italic">{s.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="p-6 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-3xl">
                        <h5 className="font-bold text-xs uppercase text-red-700 dark:text-red-400 mb-4">{t('moneyfinance.expensespurchases.supplierpayments.paymentcontrols')}</h5>
                        <List className="text-[10px] text-slate-600 dark:text-slate-400 space-y-2">
                             <ListItem><strong>{t('moneyfinance.expensespurchases.supplierpayments.threewaymatch')}</strong> {t('moneyfinance.expensespurchases.supplierpayments.threewaymatchdetail')}</ListItem>
                             <ListItem><strong>{t('moneyfinance.expensespurchases.supplierpayments.duplicatecheck')}</strong> {t('moneyfinance.expensespurchases.supplierpayments.duplicatedetail')}</ListItem>
                             <ListItem><strong>{t('moneyfinance.expensespurchases.supplierpayments.bankdetails')}</strong> {t('moneyfinance.expensespurchases.supplierpayments.bankdetailsdesc')}</ListItem>
                             <ListItem><strong>{t('moneyfinance.expensespurchases.supplierpayments.approvalsignoff')}</strong> {t('moneyfinance.expensespurchases.supplierpayments.approvaldetail')}</ListItem>
                        </List>
                    </div>
                    <div className="p-6 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-3xl">
                        <h5 className="font-bold text-xs uppercase text-amber-700 dark:text-amber-400 mb-4">{t('moneyfinance.expensespurchases.supplierpayments.latepaymentprotocol')}</h5>
                        <div className="text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2">
                            <p>{t('moneyfinance.expensespurchases.supplierpayments.latepaymentdesc')}</p>
                            <div className="pl-2 border-l-2 border-amber-300 space-y-1">
                                <div>{t('moneyfinance.expensespurchases.supplierpayments.communicateearly')}</div>
                                <div>{t('moneyfinance.expensespurchases.supplierpayments.proposesolution')}</div>
                                <div>{t('moneyfinance.expensespurchases.supplierpayments.honorcommitment')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

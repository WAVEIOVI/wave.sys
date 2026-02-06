
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
    Clock, AlertCircle, Target, TrendingDown, Info,
    BadgeCheck, ShieldAlert, FileWarning, ShieldCheck,
    Gavel, Scale, History, Ban, ArrowRight
} from 'lucide-react';
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Card from '../../../components/common/Card';

export default function CreditManagement() {
    const { t } = useTranslation();

    const scorecardItems = [
        { title: t('moneyfinance.creditmanagement.crediteval.tradehistory'), score: "40%", desc: t('moneyfinance.creditmanagement.crediteval.tradehistorydesc') },
        { title: t('moneyfinance.creditmanagement.crediteval.legalstanding'), score: "30%", desc: t('moneyfinance.creditmanagement.crediteval.legalstandingdesc') },
        { title: t('moneyfinance.creditmanagement.crediteval.financialops'), score: "30%", desc: t('moneyfinance.creditmanagement.crediteval.financialopsdesc') },
    ];

    const creditProcessItems = [
        { step: t('moneyfinance.creditmanagement.crediteval.step1info'), desc: t('moneyfinance.creditmanagement.crediteval.step1infodesc') },
        { step: t('moneyfinance.creditmanagement.crediteval.step2verification'), desc: t('moneyfinance.creditmanagement.crediteval.step2verificationdesc') },
        { step: t('moneyfinance.creditmanagement.crediteval.step3decision'), desc: t('moneyfinance.creditmanagement.crediteval.step3decisiondesc') },
        { step: t('moneyfinance.creditmanagement.crediteval.step4terms'), desc: t('moneyfinance.creditmanagement.crediteval.step4termsdesc') },
    ];

    const dailyItems: string[] = [
        t('moneyfinance.creditmanagement.creditmonitoring.dailyitem1'),
        t('moneyfinance.creditmanagement.creditmonitoring.dailyitem2'),
        t('moneyfinance.creditmanagement.creditmonitoring.dailyitem3'),
        t('moneyfinance.creditmanagement.creditmonitoring.dailyitem4'),
    ];


    const agingBars = [
        { 
            label: t('moneyfinance.creditmanagement.aginganalysis.current'), 
            val: t('moneyfinance.creditmanagement.aginganalysis.currentval'), 
            col: "from-emerald-400 to-emerald-600", 
            icon: BadgeCheck,
            shadow: "shadow-emerald-500/20"
        },
        { 
            label: t('moneyfinance.creditmanagement.aginganalysis.d1to30'), 
            val: t('moneyfinance.creditmanagement.aginganalysis.d1to30val'), 
            col: "from-blue-400 to-blue-600", 
            icon: Clock,
            shadow: "shadow-blue-500/20"
        },
        { 
            label: t('moneyfinance.creditmanagement.aginganalysis.d31to60'), 
            val: t('moneyfinance.creditmanagement.aginganalysis.d31to60val'), 
            col: "from-amber-400 to-amber-600", 
            icon: AlertCircle,
            shadow: "shadow-amber-500/20"
        },
        { 
            label: t('moneyfinance.creditmanagement.aginganalysis.d61to90'), 
            val: t('moneyfinance.creditmanagement.aginganalysis.d61to90val'), 
            col: "from-rose-500 to-rose-700", 
            icon: ShieldAlert,
            shadow: "shadow-rose-500/20"
        },
        { 
            label: t('moneyfinance.creditmanagement.aginganalysis.d90plus'), 
            val: t('moneyfinance.creditmanagement.aginganalysis.d90plusval'), 
            col: "from-slate-700 to-slate-900", 
            icon: Info,
            shadow: "shadow-slate-500/20"
        },
    ];

    const agingActions = [
        { label: t('moneyfinance.creditmanagement.aginganalysis.current'), action: t('moneyfinance.creditmanagement.aginganalysis.currentaction') },
        { label: t('moneyfinance.creditmanagement.aginganalysis.d1to30'), action: t('moneyfinance.creditmanagement.aginganalysis.d1to30action') },
        { label: t('moneyfinance.creditmanagement.aginganalysis.d31to60'), action: t('moneyfinance.creditmanagement.aginganalysis.d31to60action') },
        { label: t('moneyfinance.creditmanagement.aginganalysis.d61to90'), action: t('moneyfinance.creditmanagement.aginganalysis.d61to90action') },
        { label: t('moneyfinance.creditmanagement.aginganalysis.d90plus'), action: t('moneyfinance.creditmanagement.aginganalysis.d90plusaction') },
    ];

    const limitControlOptions = [
        { title: t('moneyfinance.creditmanagement.creditmonitoring.requirepayment'), desc: t('moneyfinance.creditmanagement.creditmonitoring.requirepaymentdesc') },
        { title: t('moneyfinance.creditmanagement.creditmonitoring.tempincrease'), desc: t('moneyfinance.creditmanagement.creditmonitoring.tempincreasedesc') },
        { title: t('moneyfinance.creditmanagement.creditmonitoring.cashexcess'), desc: t('moneyfinance.creditmanagement.creditmonitoring.cashexcessdesc') },
    ];

    const warningItems = [
        t('moneyfinance.creditmanagement.baddebt.warningitem1') || "Customer unresponsive to contact.",
        t('moneyfinance.creditmanagement.baddebt.warningitem2') || "Business appears closed or moved.",
        t('moneyfinance.creditmanagement.baddebt.warningitem3') || "Dishonored checks or traites.",
        t('moneyfinance.creditmanagement.baddebt.warningitem4') || "Known legal disputes/bankruptcy.",
    ];

    const preventionItems = [
        t('moneyfinance.creditmanagement.baddebt.preventionitem1') || "Prompt invoicing (same day delivery).",
        t('moneyfinance.creditmanagement.baddebt.preventionitem2') || "No credit for Tier D (Cash Only).",
        t('moneyfinance.creditmanagement.baddebt.preventionitem3') || "Strict enforcement of credit limits.",
        t('moneyfinance.creditmanagement.baddebt.preventionitem4') || "Deposits required for first orders.",
    ];

    return (
        <Section id="section-6">
            <SectionHeader>{t('moneyfinance.creditmanagement.section.header')}</SectionHeader>

            <SubSection id="credit-eval">
                <SubSectionHeader>{t('moneyfinance.creditmanagement.crediteval.subsectionheader')}</SubSectionHeader>

                <div className="p-8 bg-slate-900 border border-slate-800 rounded-[3rem] my-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-white font-black text-8xl opacity-5 italic tracking-tighter">SCORE</div>
                    <div className="relative z-10">
                        <h6 className="text-[10px] font-black text-slate-500 uppercase mb-6 tracking-widest italic decoration-primary-500 decoration-2 underline">{t('moneyfinance.creditmanagement.crediteval.newaccountscorecard')}</h6>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {scorecardItems.map((s, i) => (
                                <div key={i} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col justify-center">
                                    <div className="text-secondary-500 font-black text-xl mb-1 italic">{s.score}</div>
                                    <div className="text-[10px] font-black text-white uppercase mb-2">{s.title}</div>
                                    <p className="text-[9px] text-slate-500 leading-tight italic">{s.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-slate-800 pt-6">
                            <h6 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">{t('moneyfinance.creditmanagement.crediteval.creditapplicationprocess')}</h6>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                {creditProcessItems.map((s, i) => (
                                    <div key={i} className="p-3 bg-slate-800/40 rounded-xl border border-slate-700">
                                        <div className="text-[9px] font-black text-white mb-1 uppercase tracking-tighter">{s.step}</div>
                                        <p className="text-[9px] text-slate-400 italic leading-tight">{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableRow isHeader>
                                <TableCell isHeader>{t('moneyfinance.creditmanagement.crediteval.riskprofile')}</TableCell>
                                <TableCell isHeader>{t('moneyfinance.creditmanagement.crediteval.limitrange')}</TableCell>
                                <TableCell isHeader>{t('moneyfinance.creditmanagement.crediteval.decisionlevel')}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span className="font-bold text-green-600">{t('moneyfinance.creditmanagement.crediteval.tiera')}</span></TableCell>
                                <TableCell>{t('moneyfinance.creditmanagement.crediteval.tieralimit')}</TableCell>
                                <TableCell>{t('moneyfinance.creditmanagement.crediteval.tieraddecision')}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span className="font-bold text-blue-600">{t('moneyfinance.creditmanagement.crediteval.tierb')}</span></TableCell>
                                <TableCell>{t('moneyfinance.creditmanagement.crediteval.tierblimit')}</TableCell>
                                <TableCell>{t('moneyfinance.creditmanagement.crediteval.tierbdecision')}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span className="font-bold text-red-600">{t('moneyfinance.creditmanagement.crediteval.tierstrategic')}</span></TableCell>
                                <TableCell>{t('moneyfinance.creditmanagement.crediteval.tierstrategiclimit')}</TableCell>
                                <TableCell>{t('moneyfinance.creditmanagement.crediteval.tierstrategicdecision')}</TableCell>
                            </TableRow>
                        </Table>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
                        <h6 className="font-black text-[10px] text-slate-400 uppercase tracking-widest mb-4">{t('moneyfinance.creditmanagement.crediteval.accountreviews')}</h6>
                        <ul className="text-[10px] text-slate-500 space-y-2 leading-relaxed">
                            <li>• <span className="text-slate-900 dark:text-white font-bold">{t('moneyfinance.creditmanagement.crediteval.newcustomers')}:</span> {t('moneyfinance.creditmanagement.crediteval.newcustomersreview')}</li>
                            <li>• <span className="text-slate-900 dark:text-white font-bold">{t('moneyfinance.creditmanagement.crediteval.standardreview')}:</span> {t('moneyfinance.creditmanagement.crediteval.standardreviewdesc')}</li>
                            <li>• <span className="text-slate-900 dark:text-white font-bold">{t('moneyfinance.creditmanagement.crediteval.largelimits')}:</span> {t('moneyfinance.creditmanagement.crediteval.largelimitsreview')}</li>
                            <li>• <span className="text-slate-900 dark:text-white font-bold">{t('moneyfinance.creditmanagement.crediteval.problemaccounts')}:</span> {t('moneyfinance.creditmanagement.crediteval.problemaccountsreview')}</li>
                        </ul>
                    </div>
                </div>
            </SubSection>

            <SubSection id="credit-monitoring">
                <SubSectionHeader>{t('moneyfinance.creditmanagement.creditmonitoring.subsectionheader')}</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
                        <h6 className="font-black text-xs uppercase text-slate-400 mb-4 tracking-widest italic">{t('moneyfinance.creditmanagement.creditmonitoring.dailymonitoring')}</h6>
                        <ul className="text-[10px] text-slate-500 space-y-2">
                            {dailyItems.map((item, i) => <li key={i}>• {item}</li>)}
                        </ul>
                    </div>
                    <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800">
                        <h6 className="font-black text-xs uppercase text-primary-500 mb-4 tracking-widest italic">{t('moneyfinance.creditmanagement.creditmonitoring.weeklycreditmeeting')}</h6>
                        <div className="text-[10px] space-y-2 opacity-80">
                            <p className="font-bold">{t('moneyfinance.creditmanagement.creditmonitoring.attendees')}</p>
                            <p>1. {t('moneyfinance.creditmanagement.creditmonitoring.meetingitem1')}</p>
                            <p>2. {t('moneyfinance.creditmanagement.creditmonitoring.meetingitem2')}</p>
                            <p>3. {t('moneyfinance.creditmanagement.creditmonitoring.meetingitem3')}</p>
                            <p>4. {t('moneyfinance.creditmanagement.creditmonitoring.meetingitem4')}</p>
                        </div>
                    </div>
                    <div className="p-6 bg-slate-950 rounded-3xl border border-slate-800 flex flex-col justify-center text-center">
                        <div className="text-[10px] font-black text-slate-600 uppercase mb-2">{t('moneyfinance.creditmanagement.creditmonitoring.accountstatus')}</div>
                        <div className="text-3xl font-black text-red-600 italic tracking-tighter animate-pulse mb-3 uppercase">{t('moneyfinance.creditmanagement.creditmonitoring.onhold')}</div>
                        <p className="text-[10px] text-slate-400 font-medium italic underline underline-offset-4 decoration-red-800/50">{t('moneyfinance.creditmanagement.creditmonitoring.onholddesc')}</p>
                    </div>
                </div>

                <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem]">
                    <h6 className="font-black text-xs uppercase text-slate-400 mb-4 tracking-widest italic underline decoration-slate-200 decoration-3">{t('moneyfinance.creditmanagement.creditmonitoring.limitcontroloptions')}</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         {limitControlOptions.map((opt, i) => (
                             <div key={i} className="p-4 bg-white dark:bg-slate-800/50 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                                 <div className="text-xs font-black text-primary-600 uppercase mb-2 italic tracking-tighter">{opt.title}</div>
                                 <div className="text-[10px] text-slate-500 leading-tight">{opt.desc}</div>
                             </div>
                         ))}
                    </div>
                </div>
            </SubSection>

            <SubSection id="aging-analysis">
                <SubSectionHeader>{t('moneyfinance.creditmanagement.aginganalysis.subsectionheader')}</SubSectionHeader>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="my-8"
                >
                    <Card variant="glass" className="p-8 border-slate-200/60 dark:border-slate-800/60 shadow-xl shadow-slate-200/20 dark:shadow-none overflow-hidden relative" hover={false}>
                        {/* Background Decoration */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
                        
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4 relative z-10">
                            <div>
                                <h6 className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
                                    {t('moneyfinance.creditmanagement.aginganalysis.debtorsledgeraging')}
                                </h6>
                            </div>
                        </div>

                        {/* Chart Area */}
                        <div className="relative h-64 mb-12 px-2 md:px-8">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
                                {[100, 75, 50, 25, 0].map((level) => (
                                    <div key={level} className="flex items-center gap-3">
                                        <span className="text-[8px] font-bold text-slate-300 dark:text-slate-600 w-6">{level}%</span>
                                        <div className="flex-1 border-t border-slate-100 dark:border-slate-800/50 border-dashed" />
                                    </div>
                                ))}
                            </div>

                            {/* Bars Container */}
                            <div className="absolute inset-x-2 md:inset-x-8 bottom-0 top-2 flex items-end justify-around gap-4 md:gap-8 pb-2">
                                {agingBars.map((bar, i) => (
                                    <div key={i} className="flex flex-col items-center flex-1 group relative h-full justify-end">
                                        {/* Value Label (Always visible but subtle) */}
                                        <span className="text-[10px] font-black text-slate-400 group-hover:text-primary-600 transition-colors mb-2">
                                            {bar.val}
                                        </span>

                                        <div className="relative w-full max-w-[48px] h-full flex flex-col justify-end">
                                            <motion.div 
                                                initial={{ height: 0 }}
                                                whileInView={{ height: bar.val }}
                                                transition={{ duration: 1.2, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                                                viewport={{ once: true }}
                                                className={`bg-gradient-to-t ${bar.col} w-full rounded-t-xl shadow-lg ${bar.shadow} relative group-hover:scale-105 transition-transform cursor-help z-10 overflow-hidden`}
                                            >
                                                {/* Gloss effect overlay */}
                                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                            </motion.div>
                                            
                                            {/* Bar bottom icon */}
                                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-slate-300 group-hover:text-primary-500 transition-colors">
                                                <bar.icon size={14} />
                                            </div>
                                        </div>

                                        <div className="text-[9px] font-bold uppercase text-slate-400 mt-10 text-center leading-tight whitespace-nowrap">
                                            {bar.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Actions Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            {agingActions.map((s, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-4 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-primary-200 dark:hover:border-primary-800 transition-all group"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className={`w-1.5 h-1.5 rounded-full ${agingBars[i].col}`} />
                                        <div className="text-[10px] font-bold text-slate-400 group-hover:text-primary-600 transition-colors uppercase tracking-tight">
                                            {s.label}
                                        </div>
                                    </div>
                                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug font-medium">
                                        {s.action}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </Card>
                </motion.div>

                {/* KPI Benchmarks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card variant="outlined" className="p-6 bg-primary-50/30 dark:bg-primary-950/10 border-primary-100 dark:border-primary-900/30" hover={true}>
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-2xl text-primary-600">
                                <Target size={24} />
                            </div>
                            <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                On Track
                            </div>
                        </div>
                        <h5 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1 italic">
                            {t('moneyfinance.creditmanagement.aginganalysis.targetdso')}
                        </h5>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
                                {t('moneyfinance.creditmanagement.aginganalysis.dsovalue')}
                            </span>
                            <span className="text-slate-500 text-sm font-bold italic">Days</span>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                            <TrendingDown size={14} className="text-green-500" />
                            <span>Decreased by 4 days since last quarter</span>
                        </div>
                    </Card>

                    <Card variant="outlined" className="p-6 bg-amber-50/30 dark:bg-amber-950/10 border-amber-100 dark:border-amber-900/30" hover={true}>
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-amber-100 dark:bg-amber-900/50 rounded-2xl text-amber-600">
                                <AlertCircle size={24} />
                            </div>
                            <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                Warning
                            </div>
                        </div>
                        <h5 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1 italic">
                            {t('moneyfinance.creditmanagement.aginganalysis.overduemax')}
                        </h5>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
                                {t('moneyfinance.creditmanagement.aginganalysis.overduevalue')}
                            </span>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                            <Info size={14} className="text-amber-500" />
                            <span>Maximum allowed exposure per single debtor</span>
                        </div>
                    </Card>
                </div>
            </SubSection>

            <SubSection id="bad-debt">
                <SubSectionHeader>{t('moneyfinance.creditmanagement.baddebt.subsectionheader')}</SubSectionHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                    {/* Warning Signs */}
                    <Card variant="glass" className="p-6 border-rose-100 dark:border-rose-900/20" hover={true}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-rose-100 dark:bg-rose-900/30 rounded-lg text-rose-600">
                                <FileWarning size={20} />
                            </div>
                            <h6 className="font-bold text-sm uppercase tracking-wider text-slate-700 dark:text-slate-200">
                                {t('moneyfinance.creditmanagement.baddebt.warningsigns')}
                            </h6>
                        </div>
                        <ul className="space-y-3">
                            {warningItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 group">
                                    
                                    <span className="text-xs text-slate-600 dark:text-slate-400 leading-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    {/* Prevention */}
                    <Card variant="glass" className="p-6 border-emerald-100 dark:border-emerald-900/20" hover={true}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600">
                                <ShieldCheck size={20} />
                            </div>
                            <h6 className="font-bold text-sm uppercase tracking-wider text-slate-700 dark:text-slate-200">
                                {t('moneyfinance.creditmanagement.baddebt.prevention')}
                            </h6>
                        </div>
                        <ul className="space-y-3">
                            {preventionItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 group">
                                    <ArrowRight size={12} className="mt-1 text-emerald-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    <span className="text-xs text-slate-600 dark:text-slate-400 leading-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    {/* Provisioning Reserve */}
                    <Card variant="outlined" className="p-6 bg-slate-900 text-white border-0 relative overflow-hidden" hover={false}>
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <History size={80} />
                        </div>
                        <h6 className="text-xs font-bold text-primary-400 uppercase tracking-widest relative z-10">
                            {t('moneyfinance.creditmanagement.baddebt.provisioningreserve')}
                        </h6>
                        <div className="grid grid-cols-2 gap-x-4 relative z-10">
                            {[
                                { label: t('moneyfinance.creditmanagement.baddebt.current'), val: t('moneyfinance.creditmanagement.baddebt.currentval'), class: "text-emerald-400" },
                                { label: t('moneyfinance.creditmanagement.baddebt.d1to30label'), val: t('moneyfinance.creditmanagement.baddebt.d1to30val'), class: "text-blue-400" },
                                { label: t('moneyfinance.creditmanagement.baddebt.d31to60label'), val: t('moneyfinance.creditmanagement.baddebt.d31to60val'), class: "text-amber-400" },
                                { label: t('moneyfinance.creditmanagement.baddebt.d61to90label'), val: t('moneyfinance.creditmanagement.baddebt.d61to90val'), class: "text-orange-400" },
                                { label: t('moneyfinance.creditmanagement.baddebt.d91to180'), val: t('moneyfinance.creditmanagement.baddebt.d91to180val'), class: "text-rose-400" },
                                { label: t('moneyfinance.creditmanagement.baddebt.d180plus'), val: t('moneyfinance.creditmanagement.baddebt.d180plusval'), class: "text-rose-600 font-bold underline" }
                            ].map((row, i) => (
                                <div key={i} className="border-b border-white/5 pb-2">
                                    <p className="text-[10px] text-slate-500 uppercase font-medium mb-1">{row.label}</p>
                                    <p className={`text-xs font-black ${row.class}`}>{row.val}</p>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Legal Trigger */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="p-1 rounded-3xl bg-gradient-to-r from-rose-600 via-rose-500 to-rose-700 shadow-xl shadow-rose-900/20">
                        <div className="p-8 bg-rose-950 rounded-[1.4rem] relative overflow-hidden">
                            {/* Decorative Background Icon */}
                            <Gavel size={200} className="absolute -bottom-10 -right-10 text-rose-900/20 rotate-12 pointer-events-none" />
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-rose-500 text-white rounded-2xl shadow-lg shadow-rose-900/40">
                                        <Ban size={24} />
                                    </div>
                                    <div>
                                        <h6 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.2em]">
                                            {t('moneyfinance.creditmanagement.baddebt.legaltrigger')}
                                        </h6>
                                        <h4 className="text-xl font-bold text-white uppercase italic">
                                            Account Termination & Legal Action
                                        </h4>
                                    </div>
                                </div>

                                <Paragraph className="text-rose-100/70 text-sm leading-relaxed mb-8 max-w-2xl font-medium border-l-4 border-rose-500/30 pl-6">
                                    {t('moneyfinance.creditmanagement.baddebt.legaldesc')}
                                </Paragraph>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors">
                                        <div className="flex justify-between items-center text-xs text-rose-300 uppercase font-bold tracking-wider mb-2">
                                            <span className="flex items-center gap-2">
                                                <Scale size={14} className="text-rose-500" />
                                                {t('moneyfinance.creditmanagement.baddebt.threshold')}
                                            </span>
                                            <span className="font-mono text-white text-lg">{t('moneyfinance.creditmanagement.baddebt.thresholdvalue')}</span>
                                        </div>
                                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-rose-500 h-full w-[85%]" />
                                        </div>
                                    </div>

                                    <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-rose-500/20 rounded-lg text-rose-400">
                                                <ShieldAlert size={18} />
                                            </div>
                                            <span className="text-xs text-rose-300 uppercase font-bold tracking-wider">
                                                {t('moneyfinance.creditmanagement.baddebt.approval')}
                                            </span>
                                        </div>
                                        <span className="text-sm font-black text-white italic bg-rose-500/20 px-4 py-2 rounded-xl">
                                            {t('moneyfinance.creditmanagement.baddebt.approvalvalue')}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-8 flex items-center justify-center gap-3 pt-6 border-t border-rose-900/50">
                                    <AlertCircle size={14} className="text-rose-500 animate-pulse" />
                                    <p className="text-[10px] text-rose-400 font-black uppercase tracking-widest text-center">
                                        {t('moneyfinance.creditmanagement.baddebt.deletionwarning')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </SubSection>
        </Section>
    );
}

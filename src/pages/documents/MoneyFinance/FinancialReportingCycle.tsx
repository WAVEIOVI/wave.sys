import React from 'react';
import { useTranslation } from 'react-i18next';

const ReportingCycleNode = ({ month, title, desc, icon, active = false }: any) => {
    return (
        <div className={`relative flex flex-col items-center group transition-all duration-500 ${active ? 'scale-110' : 'opacity-70 hover:opacity-100 hover:scale-105'}`}>
            <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4 border-4 transition-all duration-500 ${active
                    ? 'bg-primary-500 border-white dark:border-slate-900 shadow-[0_0_30px_rgba(220,20,60,0.5)] text-white'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 group-hover:border-primary-300 dark:group-hover:border-primary-700'
                }`}>
                {icon}
            </div>

            <div className="text-center w-32">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 block ${active ? 'text-primary-500' : 'text-slate-400'}`}>
                    {month}
                </span>
                <h6 className="text-xs font-black text-slate-900 dark:text-white uppercase italic leading-tight mb-2">
                    {title}
                </h6>
                <p className="text-[9px] text-slate-500 italic leading-snug">
                    {desc}
                </p>
            </div>

            {active && (
                <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></div>
            )}
        </div>
    );
};

const FinancialReportingCycle = () => {
    const { t } = useTranslation();

    const steps = [
        { month: t('financialReportingCycle.steps.october.month'), title: t('financialReportingCycle.steps.october.title'), desc: t('financialReportingCycle.steps.october.desc'), icon: '🎯' },
        { month: t('financialReportingCycle.steps.november.month'), title: t('financialReportingCycle.steps.november.title'), desc: t('financialReportingCycle.steps.november.desc'), icon: '📝' },
        { month: t('financialReportingCycle.steps.december.month'), title: t('financialReportingCycle.steps.december.title'), desc: t('financialReportingCycle.steps.december.desc'), icon: '⚖️' },
        { month: t('financialReportingCycle.steps.january.month'), title: t('financialReportingCycle.steps.january.title'), desc: t('financialReportingCycle.steps.january.desc'), icon: '🚀', active: true },
    ];

    return (
        <div className="group relative">
            {/* Ambient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary-600/10 to-secondary-600/10 rounded-[3rem] blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative py-12 px-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-xl overflow-hidden">
                {/* Background Watermark */}
                <div className="absolute bottom-4 right-8 text-primary-500 font-black text-9xl opacity-[0.03] italic tracking-tighter select-none pointer-events-none rotate-6 transition-transform group-hover:rotate-0 duration-700">
                    {t('financialReportingCycle.watermark')}
                </div>

                {/* Header Section */}
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <h5 className="font-black text-2xl text-slate-900 dark:text-white uppercase italic tracking-tighter">{t('financialReportingCycle.header.title')}</h5>
                        <p className="text-xs text-slate-500 italic mt-1 font-medium">{t('financialReportingCycle.header.subtitle')}</p>
                    </div>
                    <div className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-2xl">
                        <span className="text-[10px] font-black text-primary-600 uppercase tracking-widest">{t('financialReportingCycle.header.activeStatus')}</span>
                    </div>
                </div>

                {/* Workflow Nodes */}
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
                    {steps.map((step, i) => (
                        <React.Fragment key={i}>
                            <ReportingCycleNode {...step} />
                            {i < steps.length - 1 && (
                                <div className="hidden md:block w-full h-px bg-slate-100 dark:bg-slate-800 relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Footer Metadata */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                    {[
                        { label: t('financialReportingCycle.footer.monthlyClose.label'), val: t('financialReportingCycle.footer.monthlyClose.val'), ref: t('financialReportingCycle.footer.monthlyClose.ref') },
                        { label: t('financialReportingCycle.footer.taxFiling.label'), val: t('financialReportingCycle.footer.taxFiling.val'), ref: t('financialReportingCycle.footer.taxFiling.ref') },
                        { label: t('financialReportingCycle.footer.fiscalYear.label'), val: t('financialReportingCycle.footer.fiscalYear.val'), ref: t('financialReportingCycle.footer.fiscalYear.ref') },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</span>
                            <div className="flex items-center gap-3">
                                <span className="text-lg font-black text-slate-900 dark:text-white italic">{item.val}</span>
                                <span className="text-[8px] font-bold text-primary-500/50 uppercase font-mono">[{item.ref}]</span>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Security Bar */}
                <div className="absolute top-0 right-20 h-1.5 w-32 bg-primary-500 rounded-b-full shadow-[0_4px_20px_rgba(220,20,60,0.3)]"></div>
            </div>
        </div>
    );
};

export default FinancialReportingCycle;

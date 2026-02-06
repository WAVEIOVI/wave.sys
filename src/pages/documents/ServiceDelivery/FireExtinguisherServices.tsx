import { useTranslation } from 'react-i18next';
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Blockquote from '../../../components/document-elements/Blockquote';
import { motion } from 'framer-motion';
import { 
    Clock, ShieldCheck, Target, ClipboardList, 
    Layout, Eye, Gauge, Zap, PenTool, FileCheck,
    CheckCircle2, AlertCircle, XCircle, Users, Activity,
    Calendar, ClipboardCheck, ArrowRight, Settings,
    FileText, Check, Info, Box, Brush,
    RefreshCw, MapPin, Archive, AlertTriangle, Wind, Scale, Droplets, Wrench, Camera
} from 'lucide-react';

export default function FireExtinguisherServices() {
    const { t } = useTranslation();

    return (
        <Section id="section-2">
            <SectionHeader>{t('fireextinguisherservices.title')}</SectionHeader>

            <SubSection id="inspection-services">
                <SubSectionHeader>{t('fireextinguisherservices.inspectionServices.sectionNumber')} {t('fireextinguisherservices.inspectionServices.title')}</SubSectionHeader>

                {/* Legal Framework */}
                <div className="mb-12">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-l-4 border-primary-500 pl-4">{t('fireextinguisherservices.inspectionServices.legalFramework.title')}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h5 className="font-bold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                                {t('fireextinguisherservices.inspectionServices.legalFramework.regulatory.title')}
                            </h5>
                            <List>
                                <ListItem><strong>{t('fireextinguisherservices.inspectionServices.legalFramework.regulatory.semiAnnual')}</strong></ListItem>
                                <ListItem><strong>{t('fireextinguisherservices.inspectionServices.legalFramework.regulatory.annual')}</strong></ListItem>
                                <ListItem><strong>{t('fireextinguisherservices.inspectionServices.legalFramework.regulatory.fireDetection')}</strong></ListItem>
                            </List>
                        </div>
                        <div className="p-6 bg-primary-50 dark:bg-primary-900/10 rounded-2xl border border-primary-100 dark:border-primary-900/30">
                            <h5 className="font-bold text-primary-700 dark:text-primary-300 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                                {t('fireextinguisherservices.inspectionServices.legalFramework.serviceOffering.title')}
                            </h5>
                            <List>
                                <ListItem><strong>{t('fireextinguisherservices.inspectionServices.legalFramework.serviceOffering.monthly')}</strong></ListItem>
                                <ListItem><strong>{t('fireextinguisherservices.inspectionServices.legalFramework.serviceOffering.semiAnnual')}</strong></ListItem>
                                <ListItem><strong>{t('fireextinguisherservices.inspectionServices.legalFramework.serviceOffering.annualComprehensive')}</strong></ListItem>
                            </List>
                        </div>
                    </div>
                </div>

                {/* Customer Self-Service */}
                <div className="mb-12 p-8 bg-amber-50 dark:bg-amber-950/10 border border-amber-200 dark:border-amber-900/30 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    </div>
                    <h4 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-4">{t('fireextinguisherservices.inspectionServices.customerSelfService.title')}</h4>
                    <Paragraph className="text-amber-700/80 dark:text-amber-300/80 mb-6">{t('fireextinguisherservices.inspectionServices.customerSelfService.description')}</Paragraph>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h5 className="font-bold text-sm uppercase tracking-wider text-amber-900 dark:text-amber-100 mb-3">{t('fireextinguisherservices.inspectionServices.customerSelfService.checklistTitle')}</h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <div className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                    <input type="checkbox" readOnly checked className="mt-1" /> <span>{t('fireextinguisherservices.inspectionServices.customerSelfService.checklist.location')}</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                    <input type="checkbox" readOnly checked className="mt-1" /> <span>{t('fireextinguisherservices.inspectionServices.customerSelfService.checklist.access')}</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                    <input type="checkbox" readOnly checked className="mt-1" /> <span>{t('fireextinguisherservices.inspectionServices.customerSelfService.checklist.signage')}</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                    <input type="checkbox" readOnly checked className="mt-1" /> <span>{t('fireextinguisherservices.inspectionServices.customerSelfService.checklist.damage')}</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                    <input type="checkbox" readOnly checked className="mt-1" /> <span>{t('fireextinguisherservices.inspectionServices.customerSelfService.checklist.gauge')}</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                    <input type="checkbox" readOnly checked className="mt-1" /> <span>{t('fireextinguisherservices.inspectionServices.customerSelfService.checklist.pin')}</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                    <input type="checkbox" readOnly checked className="mt-1" /> <span>{t('fireextinguisherservices.inspectionServices.customerSelfService.checklist.tag')}</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                    <input type="checkbox" readOnly checked className="mt-1" /> <span>{t('fireextinguisherservices.inspectionServices.customerSelfService.checklist.nozzle')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white/50 dark:bg-black/20 p-4 rounded-xl">
                                <h6 className="font-bold text-xs uppercase text-amber-900 dark:text-amber-100 mb-2">{t('fireextinguisherservices.inspectionServices.customerSelfService.ssRole.title')}</h6>
                                <p className="text-xs text-amber-800 dark:text-amber-300">{t('fireextinguisherservices.inspectionServices.customerSelfService.ssRole.description')}</p>
                            </div>
                            <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs">
                                {t('fireextinguisherservices.inspectionServices.customerSelfService.benefits')}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Semi-Annual Inspection */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="p-2 bg-primary-100 dark:bg-primary-900/40 rounded-xl text-primary-600">
                                    <Calendar className="w-6 h-6" />
                                </span>
                                <h4 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
                                    {t('fireextinguisherservices.inspectionServices.semiAnnual.title')}
                                </h4>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">{t('fireextinguisherservices.inspectionServices.semiAnnual.subtitle')}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-2xl text-xs font-bold text-slate-600 border border-slate-200 dark:border-slate-700">
                                <Box className="w-3.5 h-3.5" />
                                {t('fireextinguisherservices.inspectionServices.semiAnnual.badges.onSite')}
                            </span>
                            <span className="flex items-center gap-1.5 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-2xl text-xs font-bold text-primary-600 border border-primary-200 dark:border-primary-900/50">
                                <Clock className="w-3.5 h-3.5" />
                                {t('fireextinguisherservices.inspectionServices.semiAnnual.badges.frequency')}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {[
                            { label: t('fireextinguisherservices.inspectionServices.semiAnnual.metadata.performedBy.label'), value: t('fireextinguisherservices.inspectionServices.semiAnnual.metadata.performedBy.value'), icon: Users, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/10" },
                            { label: t('fireextinguisherservices.inspectionServices.semiAnnual.metadata.objective.label'), value: t('fireextinguisherservices.inspectionServices.semiAnnual.metadata.objective.value'), icon: Target, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/10" },
                            { label: t('fireextinguisherservices.inspectionServices.semiAnnual.metadata.duration.label'), value: t('fireextinguisherservices.inspectionServices.semiAnnual.metadata.duration.value'), valueSub: t('fireextinguisherservices.inspectionServices.semiAnnual.metadata.duration.sub'), icon: Clock, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-900/10" }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -4 }}
                                className="group p-6 bg-white dark:bg-slate-900/40 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-800 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <p className="text-[10px] font-black uppercase text-slate-400 mb-1 tracking-widest">{item.label}</p>
                                <p className="text-base font-bold text-slate-700 dark:text-slate-200">{item.value}</p>
                                {item.valueSub && <p className="text-[10px] text-slate-500 mt-1">{item.valueSub}</p>}
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative p-8 bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800 rounded-[3rem] overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                        <h5 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-3">
                            <span className="p-2.5 bg-primary-500 text-white rounded-xl shadow-lg shadow-primary-500/20">
                                <ClipboardList className="w-5 h-5" />
                            </span>
                            {t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.title')}
                        </h5>

                        <div className="space-y-12 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-primary-500/50 via-slate-200 dark:via-slate-800 to-transparent"></div>

                            {/* Phase 1 */}
                            <div className="relative pl-16">
                                <div className="absolute left-4 top-0 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-primary-500 rounded-full z-10"></div>
                                <h6 className="text-sm font-black uppercase tracking-widest text-primary-600 mb-4 flex items-center gap-2">
                                    {t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase1.title')}
                                    <span className="text-[10px] font-bold px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 tracking-normal">{t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase1.duration')}</span>
                                </h6>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        { title: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase1.steps.review.title'), desc: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase1.steps.review.description'), icon: FileText },
                                        { title: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase1.steps.checkIn.title'), desc: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase1.steps.checkIn.description'), icon: Users },
                                        { title: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase1.steps.setup.title'), desc: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase1.steps.setup.description'), icon: Settings }
                                    ].map((step, i) => (
                                        <div key={i} className="p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col gap-2">
                                            <div className="w-8 h-8 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-center justify-center">
                                                <step.icon className="w-4 h-4 text-slate-500" />
                                            </div>
                                            <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{i+1}. {step.title}</p>
                                            <p className="text-[11px] text-slate-500 leading-relaxed">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Phase 2 */}
                            <div className="relative pl-16">
                                <div className="absolute left-4 top-0 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-primary-500 rounded-full z-10"></div>
                                <h6 className="text-sm font-black uppercase tracking-widest text-primary-600 mb-4 flex items-center gap-2">
                                    {t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.title')}
                                    <span className="text-[10px] font-bold px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 tracking-normal text-nowrap">{t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.duration')}</span>
                                </h6>

                                <div className="space-y-6">
                                    <div className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                                            {[
                                                { 
                                                    title: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.locationAccessibility.title'), 
                                                    icon: Layout,
                                                    items: [
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.locationAccessibility.items.location'),
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.locationAccessibility.items.visible'),
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.locationAccessibility.items.mounted'),
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.locationAccessibility.items.signage')
                                                    ] 
                                                },
                                                { 
                                                    title: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.externalExam.title'), 
                                                    icon: Eye,
                                                    items: [
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.externalExam.items.cylinder'),
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.externalExam.items.labels'),
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.externalExam.items.sized')
                                                    ] 
                                                },
                                                { 
                                                    title: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.pressureGauge.title'), 
                                                    icon: Gauge,
                                                    items: [
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.pressureGauge.items.greenZone'),
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.pressureGauge.items.cover'),
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.pressureGauge.items.moisture')
                                                    ] 
                                                },
                                                { 
                                                    title: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.hoseNozzle.title'), 
                                                    icon: Zap,
                                                    items: [
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.hoseNozzle.items.cracks'),
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.hoseNozzle.items.blockage'),
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.hoseNozzle.items.horn')
                                                    ] 
                                                },
                                                { 
                                                    title: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.dischargeMechanism.title'), 
                                                    icon: Settings,
                                                    items: [
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.dischargeMechanism.items.handle'),
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.dischargeMechanism.items.pin'),
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.dischargeMechanism.items.lock')
                                                    ] 
                                                },
                                                { 
                                                    title: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.technicalChecks.title'), 
                                                    icon: Activity,
                                                    items: [
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.technicalChecks.items.shake'),
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.technicalChecks.items.weight'),
                                                        t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.categories.technicalChecks.items.dates')
                                                    ] 
                                                }
                                            ].map((group, i) => (
                                                <div key={i} className="space-y-3">
                                                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                                                        <group.icon className="w-4 h-4 text-primary-500" />
                                                        <p className="text-xs font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide">{i+1}. {group.title}</p>
                                                    </div>
                                                    <ul className="space-y-1.5">
                                                        {group.items.map((item, j) => (
                                                            <li key={j} className="flex items-start gap-2 text-[11px] text-slate-500 group">
                                                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-200 dark:bg-primary-800 group-hover:bg-primary-500 transition-colors"></span>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-10 p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
                                            <div className="flex items-center gap-2 mb-4">
                                                <PenTool className="w-4 h-4 text-primary-500" />
                                                <p className="text-xs font-black text-slate-800 dark:text-slate-100 uppercase">{t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.tagging.title')}</p>
                                            </div>
                                            <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
                                                {t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.tagging.description')}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {[
                                            { status: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.results.pass.status'), icon: CheckCircle2, color: "emerald", desc: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.results.pass.description') },
                                            { status: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.results.minorIssue.status'), icon: AlertCircle, color: "amber", desc: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.results.minorIssue.description') },
                                            { status: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.results.fail.status'), icon: XCircle, color: "red", desc: t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase2.results.fail.description') }
                                        ].map((item, i) => (
                                            <div key={i} className={`p-5 bg-${item.color}-50/50 dark:bg-${item.color}-900/10 rounded-[2rem] border border-${item.color}-200 dark:border-${item.color}-900/30 flex flex-col items-center text-center gap-2 group hover:scale-[1.02] transition-transform`}>
                                                <item.icon className={`w-8 h-8 text-${item.color}-500 mb-1 group-hover:rotate-12 transition-transform`} />
                                                <h6 className={`text-xs font-black text-${item.color}-600 tracking-widest uppercase`}>{item.status}</h6>
                                                <p className={`text-[11px] text-${item.color}-800/70 dark:text-${item.color}-300/70`}>{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Phase 3 */}
                            <div className="relative pl-16">
                                <div className="absolute left-4 top-0 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-primary-500 rounded-full z-10"></div>
                                <h6 className="text-sm font-black uppercase tracking-widest text-primary-600 mb-4 flex items-center gap-2">
                                    {t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase3.title')}
                                    <span className="text-[10px] font-bold px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 tracking-normal">{t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase3.duration')}</span>
                                </h6>
                                <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                        <FileCheck className="w-24 h-24 text-white" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 relative z-10">
                                        {[
                                            t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase3.steps.compileStats'),
                                            t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase3.steps.briefCustomer'),
                                            t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase3.steps.signOff'),
                                            t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase3.steps.uploadPhotos'),
                                            t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase3.steps.createQuotes'),
                                            t('fireextinguisherservices.inspectionServices.semiAnnual.workflow.phase3.steps.recordMaterials')
                                        ].map((step, i) => (
                                            <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0 md:[&:nth-last-child(2)]:border-0">
                                                <span className="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center">
                                                    <Check className="w-3 h-3" />
                                                </span>
                                                <p className="text-xs font-medium text-slate-300">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>


                {/* Annual Comprehensive Inspection */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="pt-16 border-t border-slate-200 dark:border-slate-800"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="p-2 bg-secondary-100 dark:bg-secondary-900/40 rounded-xl text-secondary-600">
                                    <ClipboardCheck className="w-6 h-6" />
                                </span>
                                <h4 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
                                    {t('fireextinguisherservices.inspectionServices.annualComprehensive.title')}
                                </h4>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">{t('fireextinguisherservices.inspectionServices.annualComprehensive.subtitle')}</p>
                        </div>
                        <span className="px-4 py-2 bg-secondary-100 dark:bg-secondary-900/30 rounded-2xl text-xs font-bold text-secondary-600 border border-secondary-200 dark:border-secondary-900/50 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            {t('fireextinguisherservices.inspectionServices.annualComprehensive.badge')}
                        </span>
                    </div>

                    <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-200 dark:border-amber-900/30 mb-10 flex gap-4 items-start">
                        <div className="p-2 bg-amber-100 dark:bg-amber-900/40 rounded-lg text-amber-600">
                            <Info className="w-5 h-5" />
                        </div>
                        <Paragraph className="text-amber-800 dark:text-amber-200/80 mb-0 font-medium leading-relaxed font-bold">
                            {t('fireextinguisherservices.inspectionServices.annualComprehensive.note')}
                        </Paragraph>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            { 
                                title: t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.internalExamination.title'), 
                                desc: t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.internalExamination.description'),
                                icon: Eye,
                                items: [
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.internalExamination.items.depressurize'),
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.internalExamination.items.check'),
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.internalExamination.items.verify'),
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.internalExamination.items.service')
                                ],
                                color: "primary"
                            },
                            { 
                                title: t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.hydrostaticCheck.title'), 
                                desc: t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.hydrostaticCheck.description'),
                                icon: Activity,
                                items: [
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.hydrostaticCheck.items.audit'),
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.hydrostaticCheck.items.identify'),
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.hydrostaticCheck.items.tag'),
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.hydrostaticCheck.items.record')
                                ],
                                color: "secondary"
                            },
                            { 
                                title: t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.detailedWeighing.title'), 
                                desc: t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.detailedWeighing.description'),
                                icon: Gauge,
                                items: [
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.detailedWeighing.items.identify'),
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.detailedWeighing.items.compare'),
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.detailedWeighing.items.document'),
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.procedures.detailedWeighing.items.calibrate')
                                ],
                                color: "emerald"
                            }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -8 }}
                                className="relative p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`}></div>

                                <h5 className={`font-black text-xs uppercase mb-4 text-${item.color}-600 tracking-widest flex items-center gap-2 relative z-10`}>
                                    <item.icon className="w-4 h-4" />
                                    {item.title}
                                </h5>

                                <p className="text-[11px] text-slate-500 dark:text-slate-400 italic mb-6 relative z-10 leading-relaxed font-medium">
                                    {item.desc}
                                </p>

                                <ul className="space-y-2 relative z-10">
                                    {item.items.map((li, j) => (
                                        <li key={j} className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                                            <Check className={`w-3.5 h-3.5 text-${item.color}-500`} />
                                            {li}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative p-10 bg-slate-900 border border-slate-800 rounded-[4rem] text-white/90 mb-12 overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>

                        <div className="relative z-10">
                            <h5 className="font-black text-xs uppercase mb-10 text-primary-400 text-center tracking-[0.4em]">
                                {t('fireextinguisherservices.inspectionServices.annualComprehensive.facilityAssessment.title')}
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { icon: Target, title: t('fireextinguisherservices.inspectionServices.annualComprehensive.facilityAssessment.coverage.title'), desc: t('fireextinguisherservices.inspectionServices.annualComprehensive.facilityAssessment.coverage.description') },
                                    { icon: Zap, title: t('fireextinguisherservices.inspectionServices.annualComprehensive.facilityAssessment.type.title'), desc: t('fireextinguisherservices.inspectionServices.annualComprehensive.facilityAssessment.type.description') },
                                    { icon: FileText, title: t('fireextinguisherservices.inspectionServices.annualComprehensive.facilityAssessment.signage.title'), desc: t('fireextinguisherservices.inspectionServices.annualComprehensive.facilityAssessment.signage.description') },
                                    { icon: Brush, title: t('fireextinguisherservices.inspectionServices.annualComprehensive.facilityAssessment.housekeeping.title'), desc: t('fireextinguisherservices.inspectionServices.annualComprehensive.facilityAssessment.housekeeping.description') }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center text-center group">
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-300">
                                            <item.icon className="w-6 h-6 text-primary-400" />
                                        </div>
                                        <h6 className="font-bold text-xs mb-2 text-white">{item.title}</h6>
                                        <p className="text-[10px] text-slate-400 leading-relaxed max-w-[150px]">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm flex flex-col group">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="p-2.5 bg-slate-100 dark:bg-slate-900 rounded-xl text-slate-500">
                                    <FileText className="w-5 h-5" />
                                </span>
                                <h5 className="font-black text-xs uppercase text-slate-400 tracking-widest">{t('fireextinguisherservices.inspectionServices.annualComprehensive.annualReport.title')}</h5>
                            </div>

                            <Paragraph className="text-[11px] text-slate-700 dark:text-slate-300 mb-6 font-bold flex items-center gap-2 italic">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                {t('fireextinguisherservices.inspectionServices.annualComprehensive.annualReport.description')}
                            </Paragraph>

                            <div className="space-y-3 mt-auto">
                                {[
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.annualReport.items.summary'),
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.annualReport.items.compliance'),
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.annualReport.items.findings'),
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.annualReport.items.lifecycle'),
                                    t('fireextinguisherservices.inspectionServices.annualComprehensive.annualReport.items.certificate')
                                ].map((step, i) => (
                                    <div key={i} className="flex items-start gap-3 text-[11px] text-slate-500 dark:text-slate-400 py-2 border-b border-slate-50 dark:border-slate-900 last:border-0">
                                        <ArrowRight className="w-3.5 h-3.5 mt-0.5 text-primary-500" />
                                        {step}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-primary-950 border border-primary-900/50 rounded-[2.5rem] text-primary-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                                <Users className="w-24 h-24 text-white" />
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="p-2.5 bg-primary-900 rounded-xl text-primary-400">
                                        <Users className="w-5 h-5" />
                                    </span>
                                    <h5 className="font-black text-xs uppercase text-primary-400 tracking-widest">{t('fireextinguisherservices.inspectionServices.annualComprehensive.completionMeeting.title')}</h5>
                                </div>

                                <Paragraph className="text-[11px] mb-8 text-primary-100/80 font-medium leading-relaxed italic">
                                    {t('fireextinguisherservices.inspectionServices.annualComprehensive.completionMeeting.description')}
                                </Paragraph>

                                <div className="space-y-4 mt-auto">
                                    {[
                                        t('fireextinguisherservices.inspectionServices.annualComprehensive.completionMeeting.items.presentReport'),
                                        t('fireextinguisherservices.inspectionServices.annualComprehensive.completionMeeting.items.discussStrategy'),
                                        t('fireextinguisherservices.inspectionServices.annualComprehensive.completionMeeting.items.scheduleWork'),
                                        t('fireextinguisherservices.inspectionServices.annualComprehensive.completionMeeting.items.planCycle')
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-5 h-5 bg-primary-500/20 rounded-full flex items-center justify-center">
                                                <Check className="w-3 h-3 text-primary-400" />
                                            </div>
                                            <p className="text-[11px] font-bold">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </SubSection>

            <SubSection id="refilling-steps">
                <SubSectionHeader>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-lg shadow-lg shadow-primary-500/20">
                            <RefreshCw className="w-6 h-6 text-white" />
                        </div>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-400">
                            {t('fireextinguisherservices.refillingRecharging.sectionNumber')} {t('fireextinguisherservices.refillingRecharging.title')}
                        </span>
                    </div>
                </SubSectionHeader>

                {/* 2.2 Overview */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="p-6 bg-gradient-to-br from-primary-50 to-white dark:from-slate-900 dark:to-slate-900/50 rounded-2xl border border-primary-100 dark:border-primary-900/20 shadow-lg shadow-primary-900/5 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-primary-100 dark:bg-primary-900/30 rounded-xl text-primary-600 dark:text-primary-400">
                                    <RefreshCw className="w-5 h-5" />
                                </div>
                                <h5 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wider">
                                    {t('fireextinguisherservices.refillingRecharging.overview.refillingVsRecharging.title')}
                                </h5>
                            </div>
                            <List className="text-[11px] text-slate-600 dark:text-slate-400 space-y-2">
                                <ListItem><strong className="text-primary-700 dark:text-primary-300">{t('fireextinguisherservices.refillingRecharging.overview.refillingVsRecharging.refilling')}</strong></ListItem>
                                <ListItem><strong className="text-primary-700 dark:text-primary-300">{t('fireextinguisherservices.refillingRecharging.overview.refillingVsRecharging.recharging')}</strong></ListItem>
                            </List>
                        </motion.div>

                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="p-6 bg-gradient-to-br from-amber-50 to-white dark:from-slate-900 dark:to-slate-900/50 rounded-2xl border border-amber-100 dark:border-amber-900/20 shadow-lg shadow-amber-900/5 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-amber-100 dark:bg-amber-900/30 rounded-xl text-amber-600 dark:text-amber-400">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <h5 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wider">
                                    {t('fireextinguisherservices.refillingRecharging.overview.whenRequired.title')}
                                </h5>
                            </div>
                            <List className="text-[11px] text-slate-600 dark:text-slate-400 space-y-2">
                                <ListItem>{t('fireextinguisherservices.refillingRecharging.overview.whenRequired.items.afterUse')}</ListItem>
                                <ListItem>{t('fireextinguisherservices.refillingRecharging.overview.whenRequired.items.lowPressure')}</ListItem>
                                <ListItem>{t('fireextinguisherservices.refillingRecharging.overview.whenRequired.items.contaminated')}</ListItem>
                                <ListItem>{t('fireextinguisherservices.refillingRecharging.overview.whenRequired.items.maintenance')}</ListItem>
                                <ListItem>{t('fireextinguisherservices.refillingRecharging.overview.whenRequired.items.sealBroken')}</ListItem>
                            </List>
                        </motion.div>

                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="p-6 bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-900/50 rounded-2xl border border-emerald-100 dark:border-emerald-900/20 shadow-lg shadow-emerald-900/5 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-600 dark:text-emerald-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <h5 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wider">
                                    {t('fireextinguisherservices.refillingRecharging.overview.serviceLocation.title')}
                                </h5>
                            </div>
                            <List className="text-[11px] text-slate-600 dark:text-slate-400 space-y-2">
                                <ListItem><strong className="text-emerald-700 dark:text-emerald-300">{t('fireextinguisherservices.refillingRecharging.overview.serviceLocation.onSite')}</strong></ListItem>
                                <ListItem><strong className="text-emerald-700 dark:text-emerald-300">{t('fireextinguisherservices.refillingRecharging.overview.serviceLocation.workshop')}</strong></ListItem>
                            </List>
                        </motion.div>
                    </div>

                    <Blockquote type="danger" title={t('fireextinguisherservices.refillingRecharging.safetyCritical.title')}>
                        {t('fireextinguisherservices.refillingRecharging.safetyCritical.warning')}
                    </Blockquote>
                </motion.div>

                {/* 2.2.1 General Safety Rules */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-12 p-8 bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-slate-900 border border-red-100 dark:border-red-900/30 rounded-3xl shadow-xl shadow-red-900/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                    <div className="md:flex justify-between items-center mb-8 relative z-10">
                        <h4 className="text-xl font-bold text-red-900 dark:text-red-100 flex items-center gap-3">
                            <span className="p-2.5 bg-red-100 dark:bg-red-900/50 rounded-xl text-lg shadow-inner shadow-red-500/10">⚠️</span>
                            {t('fireextinguisherservices.refillingRecharging.generalSafety.title')}
                        </h4>
                        <div className="mt-4 md:mt-0 px-4 py-2 bg-red-100 dark:bg-red-900/40 rounded-full border border-red-200 dark:border-red-800">
                             <span className="text-xs font-bold text-red-700 dark:text-red-300 uppercase tracking-wider">{t('fireextinguisherservices.refillingRecharging.generalSafety.subtitle')}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {[
                            { 
                                title: t('fireextinguisherservices.refillingRecharging.generalSafety.categories.personalSafety.title'), 
                                icon: Users, 
                                items: [
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.personalSafety.items.glasses'),
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.personalSafety.items.gloves'),
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.personalSafety.items.mask'),
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.personalSafety.items.clothing'),
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.personalSafety.items.jewelry')
                                ] 
                            },
                            { 
                                title: t('fireextinguisherservices.refillingRecharging.generalSafety.categories.workAreaSafety.title'), 
                                icon: Layout, 
                                items: [
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.workAreaSafety.items.ventilation'),
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.workAreaSafety.items.noSmoking'),
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.workAreaSafety.items.extinguisher'),
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.workAreaSafety.items.firstAid'),
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.workAreaSafety.items.eyeWash')
                                ] 
                            },
                            { 
                                title: t('fireextinguisherservices.refillingRecharging.generalSafety.categories.equipmentSafety.title'), 
                                icon: Wrench, 
                                items: [
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.equipmentSafety.items.inspect'),
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.equipmentSafety.items.pressure'),
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.equipmentSafety.items.damaged'),
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.equipmentSafety.items.wrongAgent'),
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.equipmentSafety.items.calibrated')
                                ] 
                            },
                            { 
                                title: t('fireextinguisherservices.refillingRecharging.generalSafety.categories.environmental.title'), 
                                icon: ShieldCheck, 
                                items: [
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.environmental.items.ventilation'),
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.environmental.items.spillContainment'),
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.environmental.items.wasteDisposal'),
                                    t('fireextinguisherservices.refillingRecharging.generalSafety.categories.environmental.items.stopIfDoubt')
                                ] 
                            }
                        ].map((section, idx) => (
                            <div key={idx} className="space-y-4 p-4 bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-red-100/50 dark:border-red-900/20 hover:bg-white dark:hover:bg-slate-900 transition-colors">
                                <h6 className="text-[10px] font-black uppercase text-red-600 tracking-widest flex items-center gap-2">
                                    <section.icon className="w-3 h-3" />
                                    {section.title}
                                </h6>
                                <List className="text-[11px] text-red-900/70 dark:text-red-200/70 space-y-1.5">
                                    {section.items.map((item, i) => (
                                        <ListItem key={i}>
                                            {item}
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 2.2.2 ABC Powder Procedure */}
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
                        <div>
                            <h4 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight flex items-center gap-3">
                                <span className="w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl">
                                    <Archive className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                                </span>
                                {t('fireextinguisherservices.refillingRecharging.abcPowder.title')}
                            </h4>
                            <div className="mt-2 text-xs text-slate-500 font-medium">{t('fireextinguisherservices.refillingRecharging.abcPowder.type')}</div>
                        </div>
                        <div className="text-right">
                            <span className="inline-block px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-slate-200 dark:border-slate-700">
                                {t('fireextinguisherservices.refillingRecharging.abcPowder.sizes')}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Preparation & Depressurization */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <motion.div 
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform duration-500">
                                    <ClipboardList className="w-24 h-24 text-slate-500" />
                                </div>
                                <h6 className="text-sm font-bold text-primary-600 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 rounded-xl text-xs shadow-sm text-primary-600 dark:text-primary-400">1</span>
                                    {t('fireextinguisherservices.refillingRecharging.abcPowder.preparation.title')} ({t('fireextinguisherservices.refillingRecharging.abcPowder.preparation.duration')})
                                </h6>
                                <List className="text-[11px] space-y-4">
                                    <ListItem>
                                        <div className="flex gap-2">
                                            <span className="font-bold text-slate-700 dark:text-slate-200 min-w-[70px]">1. {t('fireextinguisherservices.refillingRecharging.abcPowder.preparation.steps.verify.label')}:</span>
                                            <span className="text-slate-500">{t('fireextinguisherservices.refillingRecharging.abcPowder.preparation.steps.verify.description')}</span>
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <div className="flex gap-2">
                                            <span className="font-bold text-slate-700 dark:text-slate-200 min-w-[70px]">2. {t('fireextinguisherservices.refillingRecharging.abcPowder.preparation.steps.gather.label')}:</span>
                                            <div className="text-slate-500 space-y-1">
                                                <p>{t('fireextinguisherservices.refillingRecharging.abcPowder.preparation.steps.gather.description')}</p>
                                                <p className="italic text-[10px] opacity-80 pl-2 border-l-2 border-slate-200">{t('fireextinguisherservices.refillingRecharging.abcPowder.preparation.steps.gather.tools')}</p>
                                            </div>
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <div className="flex gap-2">
                                            <span className="font-bold text-slate-700 dark:text-slate-200 min-w-[70px]">3. {t('fireextinguisherservices.refillingRecharging.abcPowder.preparation.steps.safety.label')}:</span>
                                            <span className="text-slate-500">{t('fireextinguisherservices.refillingRecharging.abcPowder.preparation.steps.safety.description')}</span>
                                        </div>
                                    </ListItem>
                                </List>
                            </motion.div>

                            <motion.div 
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="p-8 bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-slate-950 border border-amber-200 dark:border-amber-900/30 rounded-[2.5rem] shadow-sm relative overflow-hidden"
                            >
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-100 dark:bg-amber-900/20 rounded-full blur-2xl"></div>
                                <h6 className="text-sm font-black text-amber-700 dark:text-amber-500 mb-6 flex items-center gap-3 uppercase tracking-wide relative z-10">
                                    <span className="w-8 h-8 flex items-center justify-center bg-amber-100 dark:bg-amber-900/30 rounded-xl text-xs shadow-sm ring-1 ring-amber-200 dark:ring-amber-800">2</span>
                                    {t('fireextinguisherservices.refillingRecharging.abcPowder.depressurize.title')} ({t('fireextinguisherservices.refillingRecharging.abcPowder.depressurize.duration')})
                                </h6>
                                <div className="space-y-4 relative z-10">
                                    <div className="p-3 bg-amber-100/50 dark:bg-amber-900/10 rounded-2xl border border-amber-200/50 dark:border-amber-800/30 flex items-center gap-3">
                                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                                        <div className="text-[10px] text-amber-800 dark:text-amber-200">
                                            <strong>{t('fireextinguisherservices.refillingRecharging.abcPowder.depressurize.critical')}</strong>
                                        </div>
                                    </div>
                                    <List className="text-[11px] space-y-2">
                                        <ListItem>
                                            <strong className="text-amber-800 dark:text-amber-200 block mb-0.5">{t('fireextinguisherservices.refillingRecharging.abcPowder.depressurize.steps.prepare.title')}:</strong> 
                                            {t('fireextinguisherservices.refillingRecharging.abcPowder.depressurize.steps.prepare.description')}
                                        </ListItem>
                                        <ListItem>
                                            <strong className="text-amber-800 dark:text-amber-200 block mb-0.5">{t('fireextinguisherservices.refillingRecharging.abcPowder.depressurize.steps.methodA.title')}:</strong> 
                                            {t('fireextinguisherservices.refillingRecharging.abcPowder.depressurize.steps.methodA.description')}
                                        </ListItem>
                                        <ListItem>
                                            <strong className="text-amber-800 dark:text-amber-200 block mb-0.5">{t('fireextinguisherservices.refillingRecharging.abcPowder.depressurize.steps.methodB.title')}:</strong> 
                                            {t('fireextinguisherservices.refillingRecharging.abcPowder.depressurize.steps.methodB.description')}
                                        </ListItem>
                                    </List>
                                </div>
                            </motion.div>
                        </div>

                        {/* Steps 2-6: Detailed Procedure */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { 
                                    step: t('fireextinguisherservices.refillingRecharging.abcPowder.disassemble.step'), 
                                    title: t('fireextinguisherservices.refillingRecharging.abcPowder.disassemble.title'), 
                                    color: "slate",
                                    icon: Settings,
                                    items: [
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.disassemble.items.hose'),
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.disassemble.items.valve'),
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.disassemble.items.lift')
                                    ] 
                                },
                                { 
                                    step: t('fireextinguisherservices.refillingRecharging.abcPowder.emptyClean.step'), 
                                    title: t('fireextinguisherservices.refillingRecharging.abcPowder.emptyClean.title'), 
                                    color: "slate",
                                    icon: Brush,
                                    items: [
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.emptyClean.items.empty'),
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.emptyClean.items.clean'),
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.emptyClean.items.inspect'),
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.emptyClean.items.cleanValve')
                                    ] 
                                },
                                { 
                                    step: t('fireextinguisherservices.refillingRecharging.abcPowder.refillPowder.step'), 
                                    title: t('fireextinguisherservices.refillingRecharging.abcPowder.refillPowder.title'), 
                                    color: "primary",
                                    icon: Archive,
                                    items: [
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.refillPowder.items.select'),
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.refillPowder.items.weigh'),
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.refillPowder.items.fill'),
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.refillPowder.items.verify')
                                    ] 
                                },
                                { 
                                    step: t('fireextinguisherservices.refillingRecharging.abcPowder.reassemble.step'), 
                                    title: t('fireextinguisherservices.refillingRecharging.abcPowder.reassemble.title'), 
                                    color: "primary",
                                    icon: Wrench,
                                    items: [
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.reassemble.items.oring'),
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.reassemble.items.siphon'),
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.reassemble.items.valve'),
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.reassemble.items.tighten'),
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.reassemble.items.hose')
                                    ] 
                                },
                                { 
                                    step: t('fireextinguisherservices.refillingRecharging.abcPowder.pressurize.step'), 
                                    title: t('fireextinguisherservices.refillingRecharging.abcPowder.pressurize.title'), 
                                    color: "secondary",
                                    icon: Gauge,
                                    items: [
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.pressurize.items.nitrogen'),
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.pressurize.items.regulator'),
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.pressurize.items.slow'),
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.pressurize.items.stop'),
                                        t('fireextinguisherservices.refillingRecharging.abcPowder.pressurize.items.disconnect')
                                    ] 
                                }
                            ].map((card, i) => (
                                <motion.div 
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className={`p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm border-t-4 ${
                                        card.color === 'primary' ? 'border-t-primary-500' : 
                                        card.color === 'secondary' ? 'border-t-secondary-500' : 'border-t-slate-400'
                                    }`}
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <h6 className={`text-[10px] font-black uppercase tracking-widest ${
                                            card.color === 'primary' ? 'text-primary-600' : 
                                            card.color === 'secondary' ? 'text-secondary-600' : 'text-slate-500'
                                        }`}>
                                            {card.step}: {card.title}
                                        </h6>
                                        <card.icon className={`w-4 h-4 ${
                                            card.color === 'primary' ? 'text-primary-400' : 
                                            card.color === 'secondary' ? 'text-secondary-400' : 'text-slate-400'
                                        }`} />
                                    </div>
                                    <List className="text-[11px] space-y-2">
                                        {card.items.map((item, idx) => (
                                            <ListItem key={idx}>
                                                {item}
                                            </ListItem>
                                        ))}
                                    </List>
                                </motion.div>
                            ))}
                        </div>

                        {/* QC & Completion */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-10 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-[3rem] text-white overflow-hidden relative shadow-2xl"
                        >
                             <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-primary-500/20 rounded-lg">
                                            <CheckCircle2 className="w-5 h-5 text-primary-400" />
                                        </div>
                                        <h6 className="text-xs font-black text-primary-400 uppercase tracking-[0.3em]">{t('fireextinguisherservices.refillingRecharging.abcPowder.sealTag.step')}: {t('fireextinguisherservices.refillingRecharging.abcPowder.sealTag.title')}</h6>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <p className="text-[11px] font-bold text-slate-300 border-b border-slate-700 pb-2">{t('fireextinguisherservices.refillingRecharging.abcPowder.sealTag.seal.title')}</p>
                                            <List className="text-[10px] text-slate-400 space-y-2">
                                                <ListItem><span className="text-primary-400 mr-2">1.</span>{t('fireextinguisherservices.refillingRecharging.abcPowder.sealTag.seal.items.pin')}</ListItem>
                                                <ListItem><span className="text-primary-400 mr-2">2.</span>{t('fireextinguisherservices.refillingRecharging.abcPowder.sealTag.seal.items.seal')}</ListItem>
                                                <ListItem><span className="text-primary-400 mr-2">3.</span>{t('fireextinguisherservices.refillingRecharging.abcPowder.sealTag.seal.items.tag')}</ListItem>
                                            </List>
                                        </div>
                                        <div className="space-y-3">
                                            <p className="text-[11px] font-bold text-slate-300 border-b border-slate-700 pb-2">{t('fireextinguisherservices.refillingRecharging.abcPowder.sealTag.qc.title')}</p>
                                            <List className="text-[10px] text-slate-400 space-y-1.5">
                                                <ListItem><span className="text-emerald-400 mr-1">✓</span> {t('fireextinguisherservices.refillingRecharging.abcPowder.sealTag.qc.items.visual')}</ListItem>
                                                <ListItem><span className="text-emerald-400 mr-1">✓</span> {t('fireextinguisherservices.refillingRecharging.abcPowder.sealTag.qc.items.pressure')}</ListItem>
                                                <ListItem><span className="text-emerald-400 mr-1">✓</span> {t('fireextinguisherservices.refillingRecharging.abcPowder.sealTag.qc.items.weight')}</ListItem>
                                                <ListItem><span className="text-emerald-400 mr-1">✓</span> {t('fireextinguisherservices.refillingRecharging.abcPowder.sealTag.qc.items.leak')}</ListItem>
                                                <ListItem><span className="text-emerald-400 mr-1">✓</span> {t('fireextinguisherservices.refillingRecharging.abcPowder.sealTag.qc.items.functional')}</ListItem>
                                            </List>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-3 bg-red-900/30 border border-red-500/30 rounded-xl text-[10px] text-red-200 text-center font-bold">
                                        {t('fireextinguisherservices.refillingRecharging.abcPowder.sealTag.failWarning')}
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-primary-500/20 rounded-lg">
                                            <FileText className="w-5 h-5 text-primary-400" />
                                        </div>
                                        <h6 className="text-xs font-black text-primary-400 uppercase tracking-[0.3em]">{t('fireextinguisherservices.refillingRecharging.abcPowder.documentation.step')}: {t('fireextinguisherservices.refillingRecharging.abcPowder.documentation.title')}</h6>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-[11px] font-bold text-slate-300 mb-2">1. {t('fireextinguisherservices.refillingRecharging.abcPowder.documentation.wavePlus.title')}</p>
                                            <p className="text-[10px] text-slate-400 leading-relaxed">
                                                {t('fireextinguisherservices.refillingRecharging.abcPowder.documentation.wavePlus.description')}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold text-slate-300 mb-2">2. {t('fireextinguisherservices.refillingRecharging.abcPowder.documentation.logs.title')}</p>
                                            <p className="text-[10px] text-slate-400 leading-relaxed">
                                                {t('fireextinguisherservices.refillingRecharging.abcPowder.documentation.logs.description')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </motion.div>
                    </div>
                </div>

                {/* 2.2.3 CO2 Extinguisher Procedure */}
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <h4 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight flex items-center gap-3">
                            <span className="w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl">
                                <Wind className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                            </span>
                            {t('fireextinguisherservices.refillingRecharging.co2.title')}
                        </h4>
                        <div className="px-4 py-1.5 bg-secondary-100 dark:bg-secondary-900/30 border border-secondary-200 dark:border-secondary-900/50 rounded-full text-xs font-bold text-secondary-600 dark:text-secondary-400 flex items-center gap-2">
                             <Scale className="w-3.5 h-3.5" />
                             {t('fireextinguisherservices.refillingRecharging.co2.badge')}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 space-y-6">
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="p-6 bg-gradient-to-br from-red-950 to-red-900 border border-red-800 rounded-3xl text-red-100 shadow-xl shadow-red-900/20"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <AlertTriangle className="w-5 h-5 text-red-400" />
                                    <h6 className="text-[10px] font-black uppercase text-red-400 tracking-widest">{t('fireextinguisherservices.refillingRecharging.co2.safetyWarnings.title')}</h6>
                                </div>
                                <List className="text-[11px] space-y-3">
                                    <ListItem>
                                        <strong className="text-white block mb-0.5">{t('fireextinguisherservices.refillingRecharging.co2.safetyWarnings.coldBurn.title')}:</strong> 
                                        <span className="text-red-200/80">{t('fireextinguisherservices.refillingRecharging.co2.safetyWarnings.coldBurn.description')}</span>
                                    </ListItem>
                                    <ListItem>
                                        <strong className="text-white block mb-0.5">{t('fireextinguisherservices.refillingRecharging.co2.safetyWarnings.asphyxiation.title')}:</strong> 
                                        <span className="text-red-200/80">{t('fireextinguisherservices.refillingRecharging.co2.safetyWarnings.asphyxiation.description')}</span>
                                    </ListItem>
                                    <ListItem>
                                        <strong className="text-white block mb-0.5">{t('fireextinguisherservices.refillingRecharging.co2.safetyWarnings.highPressure.title')}:</strong> 
                                        <span className="text-red-200/80">{t('fireextinguisherservices.refillingRecharging.co2.safetyWarnings.highPressure.description')}</span>
                                    </ListItem>
                                </List>
                            </motion.div>

                            {/* Step 1 & 2 */}
                            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm space-y-6">
                                <div>
                                    <h6 className="text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest flex items-center gap-2">
                                        <span className="w-5 h-5 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500 font-bold">1</span>
                                        {t('fireextinguisherservices.refillingRecharging.co2.prepWeigh.title')}
                                    </h6>
                                    <Paragraph className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">{t('fireextinguisherservices.refillingRecharging.co2.prepWeigh.description')}</Paragraph>
                                </div>
                                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <h6 className="text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest flex items-center gap-2">
                                        <span className="w-5 h-5 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500 font-bold">2</span>
                                        {t('fireextinguisherservices.refillingRecharging.co2.inspect.title')}
                                    </h6>
                                    <Paragraph className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">{t('fireextinguisherservices.refillingRecharging.co2.inspect.description')}</Paragraph>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                            <h6 className="text-sm font-black text-secondary-600 mb-8 flex items-center gap-3 relative z-10">
                                <span className="p-2.5 bg-secondary-50 dark:bg-secondary-900/30 rounded-xl shadow-sm">⚖️</span>
                                {t('fireextinguisherservices.refillingRecharging.co2.refillProtocol.title')}, {t('fireextinguisherservices.refillingRecharging.co2.reassemble.title')} & {t('fireextinguisherservices.refillingRecharging.co2.qc.title')}
                            </h6>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                                        <Activity className="w-4 h-4 text-secondary-500" />
                                        <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200">{t('fireextinguisherservices.refillingRecharging.co2.refillProtocol.title')}</p>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { title: t('fireextinguisherservices.refillingRecharging.co2.refillProtocol.steps.connect.title'), desc: t('fireextinguisherservices.refillingRecharging.co2.refillProtocol.steps.connect.description') },
                                            { title: t('fireextinguisherservices.refillingRecharging.co2.refillProtocol.steps.calculate.title'), desc: t('fireextinguisherservices.refillingRecharging.co2.refillProtocol.steps.calculate.description') },
                                            { title: t('fireextinguisherservices.refillingRecharging.co2.refillProtocol.steps.fill.title'), desc: t('fireextinguisherservices.refillingRecharging.co2.refillProtocol.steps.fill.description') },
                                            { title: t('fireextinguisherservices.refillingRecharging.co2.refillProtocol.steps.stabilize.title'), desc: t('fireextinguisherservices.refillingRecharging.co2.refillProtocol.steps.stabilize.description') }
                                        ].map((step, i) => (
                                            <div key={i} className="flex gap-3">
                                                <div className="w-1.5 h-1.5 mt-1.5 bg-secondary-400 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <strong className="text-[11px] text-slate-700 dark:text-slate-300 block mb-0.5">{step.title}</strong>
                                                    <p className="text-[10px] text-slate-500 leading-tight">{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-4 bg-secondary-50 dark:bg-secondary-900/10 border border-secondary-100 dark:border-secondary-900/20 rounded-2xl">
                                        <div className="flex items-center gap-2 mb-2">
                                            <AlertCircle className="w-4 h-4 text-secondary-600" />
                                            <p className="text-[10px] font-black text-secondary-600 uppercase">{t('fireextinguisherservices.refillingRecharging.co2.refillProtocol.accuracy.title')}</p>
                                        </div>
                                        <p className="text-[11px] text-secondary-900/80 dark:text-secondary-300/80 font-medium leading-tight">
                                            {t('fireextinguisherservices.refillingRecharging.co2.refillProtocol.accuracy.description')}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div>
                                        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2 mb-4">
                                            <PenTool className="w-4 h-4 text-slate-500" />
                                            <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200">{t('fireextinguisherservices.refillingRecharging.co2.reassemble.title')}</p>
                                        </div>
                                        <List className="text-[10px] text-slate-500 space-y-2">
                                            <ListItem>{t('fireextinguisherservices.refillingRecharging.co2.reassemble.items.valve')}</ListItem>
                                            <ListItem>{t('fireextinguisherservices.refillingRecharging.co2.reassemble.items.tighten')}</ListItem>
                                            <ListItem>{t('fireextinguisherservices.refillingRecharging.co2.reassemble.items.weigh')}</ListItem>
                                        </List>
                                    </div>

                                    <div className="flex-1 p-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-3xl">
                                        <div className="flex items-center gap-2 mb-3 justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            <p className="text-[10px] font-black text-slate-500 uppercase">{t('fireextinguisherservices.refillingRecharging.co2.qc.title')}</p>
                                        </div>
                                        <List className="text-[10px] text-slate-500 space-y-2">
                                            <ListItem>✓ {t('fireextinguisherservices.refillingRecharging.co2.qc.items.leak')}</ListItem>
                                            <ListItem>✓ {t('fireextinguisherservices.refillingRecharging.co2.qc.items.seal')}</ListItem>
                                            <ListItem>✓ {t('fireextinguisherservices.refillingRecharging.co2.qc.items.logged')}</ListItem>
                                        </List>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2.2.4 Foam & Clean Agent */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="p-10 bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/20 dark:to-slate-900 border border-emerald-100 dark:border-emerald-900/30 rounded-[3.5rem] relative overflow-hidden group shadow-lg shadow-emerald-900/5"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                            <Droplets className="w-32 h-32 text-emerald-600" />
                        </div>
                        <h4 className="text-xl font-black text-emerald-800 dark:text-emerald-100 mb-6 flex items-center gap-3 relative z-10">
                            <span className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
                                <Droplets className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                            </span>
                            {t('fireextinguisherservices.refillingRecharging.foam.title')}
                        </h4>

                        <div className="space-y-6 relative z-10">
                            <div className="p-4 bg-white/60 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-900/20">
                                <p className="text-[10px] font-bold text-emerald-800 dark:text-emerald-200 uppercase mb-2">{t('fireextinguisherservices.refillingRecharging.foam.mixingProcedure.title')}</p>
                                <List className="text-[10px] text-emerald-900/80 dark:text-emerald-200/80 space-y-1.5">
                                    <ListItem>1. {t('fireextinguisherservices.refillingRecharging.foam.mixingProcedure.items.calculate')}</ListItem>
                                    <ListItem>2. <strong className="text-emerald-700 dark:text-emerald-300">{t('fireextinguisherservices.refillingRecharging.foam.mixingProcedure.items.waterFirst')}</strong></ListItem>
                                    <ListItem>3. {t('fireextinguisherservices.refillingRecharging.foam.mixingProcedure.items.mix')}</ListItem>
                                </List>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { label: t('fireextinguisherservices.refillingRecharging.foam.finalize.label'), val: t('fireextinguisherservices.refillingRecharging.foam.finalize.value') },
                                    { label: t('fireextinguisherservices.refillingRecharging.foam.labeling.label'), val: t('fireextinguisherservices.refillingRecharging.foam.labeling.value') },
                                    { label: t('fireextinguisherservices.refillingRecharging.foam.advice.label'), val: t('fireextinguisherservices.refillingRecharging.foam.advice.value') }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start pb-4 border-b border-emerald-200/50 dark:border-emerald-800/20 last:border-0 last:pb-0">
                                        <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase w-16 flex-shrink-0 pt-0.5">{item.label}</span>
                                        <span className="text-[11px] text-emerald-900/80 dark:text-emerald-200/80 leading-snug">{item.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="p-10 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
                        <h4 className="text-xl font-black text-white mb-6 flex items-center gap-3 relative z-10">
                            <span className="p-2 bg-slate-800 rounded-xl border border-slate-700">
                                <Wind className="w-6 h-6 text-primary-400" />
                            </span>
                            {t('fireextinguisherservices.refillingRecharging.cleanAgent.title')}
                        </h4>
                        <Paragraph className="text-[11px] text-slate-300 mb-8 italic relative z-10 leading-relaxed">{t('fireextinguisherservices.refillingRecharging.cleanAgent.description')}</Paragraph>
                        <div className="space-y-4 relative z-10">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                <h6 className="text-[10px] font-bold text-primary-400 mb-3 uppercase">{t('fireextinguisherservices.refillingRecharging.cleanAgent.refillProcess.title')}</h6>
                                <List className="text-[10px] text-slate-300 space-y-2">
                                    <ListItem>1. {t('fireextinguisherservices.refillingRecharging.cleanAgent.refillProcess.items.weigh')}</ListItem>
                                    <ListItem>2. {t('fireextinguisherservices.refillingRecharging.cleanAgent.refillProcess.items.connect')}</ListItem>
                                    <ListItem>3. {t('fireextinguisherservices.refillingRecharging.cleanAgent.refillProcess.items.verify')}</ListItem>
                                </List>
                            </div>
                            {[
                                t('fireextinguisherservices.refillingRecharging.cleanAgent.notes.noSubstitution'),
                                t('fireextinguisherservices.refillingRecharging.cleanAgent.notes.zeroLeakage')
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                                    <span className="text-[11px] text-slate-200">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </SubSection>

            <SubSection id="component-replacement">
                <SubSectionHeader>{t('fireextinguisherservices.componentReplacement.sectionNumber')} {t('fireextinguisherservices.componentReplacement.title')}</SubSectionHeader>

                <Paragraph className="mb-8">{t('fireextinguisherservices.componentReplacement.intro')}</Paragraph>

                <div className="space-y-12">
                    {/* Pressure Gauge */}
                    <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform duration-500">
                            <span className="text-6xl">⏲️</span>
                        </div>
                        <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                            {t('fireextinguisherservices.componentReplacement.pressureGauge.title')}
                        </h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="p-6 bg-slate-50 dark:bg-slate-950/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <h5 className="text-[10px] font-black uppercase text-primary-600 mb-4 tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                    {t('fireextinguisherservices.componentReplacement.pressureGauge.whenToReplace.title')}
                                </h5>
                                <List className="text-[11px] space-y-2">
                                    <ListItem>{t('fireextinguisherservices.componentReplacement.pressureGauge.whenToReplace.items.stuck')}</ListItem>
                                    <ListItem>{t('fireextinguisherservices.componentReplacement.pressureGauge.whenToReplace.items.cracked')}</ListItem>
                                    <ListItem>{t('fireextinguisherservices.componentReplacement.pressureGauge.whenToReplace.items.erratic')}</ListItem>
                                    <ListItem>{t('fireextinguisherservices.componentReplacement.pressureGauge.whenToReplace.items.corroded')}</ListItem>
                                    <ListItem>{t('fireextinguisherservices.componentReplacement.pressureGauge.whenToReplace.items.preventive')}</ListItem>
                                </List>
                            </div>
                            <div className="p-6 bg-primary-50/30 dark:bg-primary-900/10 rounded-2xl border border-primary-100 dark:border-primary-900/20">
                                <h5 className="text-[10px] font-black uppercase text-primary-600 mb-4 tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                    {t('fireextinguisherservices.componentReplacement.pressureGauge.procedure.title')}
                                </h5>
                                <div className="space-y-4">
                                    <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-primary-200 dark:before:bg-primary-800">
                                        <div className="absolute left-[-2.5px] top-1.5 w-[6px] h-[6px] bg-primary-500 rounded-full"></div>
                                        <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">1. {t('fireextinguisherservices.componentReplacement.pressureGauge.procedure.depressurize.title')}</p>
                                        <p className="text-[10px] text-slate-500">{t('fireextinguisherservices.componentReplacement.pressureGauge.procedure.depressurize.description')}</p>
                                    </div>
                                    <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-primary-200 dark:before:bg-primary-800">
                                        <div className="absolute left-[-2.5px] top-1.5 w-[6px] h-[6px] bg-primary-500 rounded-full"></div>
                                        <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">2. {t('fireextinguisherservices.componentReplacement.pressureGauge.procedure.select.title')}</p>
                                        <p className="text-[10px] text-slate-500">{t('fireextinguisherservices.componentReplacement.pressureGauge.procedure.select.description')}</p>
                                    </div>
                                    <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-primary-200 dark:before:bg-primary-800">
                                        <div className="absolute left-[-2.5px] top-1.5 w-[6px] h-[6px] bg-primary-500 rounded-full"></div>
                                        <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">3. {t('fireextinguisherservices.componentReplacement.pressureGauge.procedure.install.title')}</p>
                                        <p className="text-[10px] text-slate-500">{t('fireextinguisherservices.componentReplacement.pressureGauge.procedure.install.description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Valve Seal & O-Ring */}
                    <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-secondary-100 dark:border-secondary-900/30 rounded-[3rem] shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform duration-500">
                            <span className="text-6xl">⭕</span>
                        </div>
                        <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                            {t('fireextinguisherservices.componentReplacement.valveSeal.title')}
                        </h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="p-6 bg-white dark:bg-slate-950/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                    <h5 className="text-[10px] font-black uppercase text-secondary-600 mb-4 tracking-widest">{t('fireextinguisherservices.componentReplacement.valveSeal.whenToReplace.title')}</h5>
                                    <List className="text-[11px] grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                                        <ListItem>{t('fireextinguisherservices.componentReplacement.valveSeal.whenToReplace.items.refilling')}</ListItem>
                                        <ListItem>{t('fireextinguisherservices.componentReplacement.valveSeal.whenToReplace.items.leak')}</ListItem>
                                        <ListItem>{t('fireextinguisherservices.componentReplacement.valveSeal.whenToReplace.items.compressed')}</ListItem>
                                        <ListItem>{t('fireextinguisherservices.componentReplacement.valveSeal.whenToReplace.items.degrades')}</ListItem>
                                    </List>
                                </div>
                                <div className="p-6 bg-emerald-50/50 dark:bg-emerald-950/10 rounded-2xl border border-emerald-100 dark:border-emerald-900/20">
                                    <p className="text-[10px] font-black uppercase text-emerald-600 mb-2">{t('fireextinguisherservices.componentReplacement.valveSeal.proTip.title')}</p>
                                    <p className="text-[11px] text-emerald-800/80 dark:text-emerald-300/80 italic">{t('fireextinguisherservices.componentReplacement.valveSeal.proTip.description')}</p>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl text-white">
                                <h5 className="text-[10px] font-black uppercase text-secondary-400 mb-6 tracking-widest">{t('fireextinguisherservices.componentReplacement.valveSeal.procedure.title')}</h5>
                                <div className="space-y-4 text-[11px]">
                                    <div className="flex gap-4">
                                        <span className="w-5 h-5 flex items-center justify-center bg-secondary-500 rounded-full text-[10px] font-bold flex-shrink-0">1</span>
                                        <p><strong className="text-secondary-400">{t('fireextinguisherservices.componentReplacement.valveSeal.procedure.disassemble.title')}:</strong> {t('fireextinguisherservices.componentReplacement.valveSeal.procedure.disassemble.description')}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-5 h-5 flex items-center justify-center bg-secondary-500 rounded-full text-[10px] font-bold flex-shrink-0">2</span>
                                        <p><strong className="text-secondary-400">{t('fireextinguisherservices.componentReplacement.valveSeal.procedure.clean.title')}:</strong> {t('fireextinguisherservices.componentReplacement.valveSeal.procedure.clean.description')}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-5 h-5 flex items-center justify-center bg-secondary-500 rounded-full text-[10px] font-bold flex-shrink-0">3</span>
                                        <p><strong className="text-secondary-400">{t('fireextinguisherservices.componentReplacement.valveSeal.procedure.install.title')}:</strong> {t('fireextinguisherservices.componentReplacement.valveSeal.procedure.install.description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hose Replacement */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Hose */}
                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm flex flex-col">
                            <h4 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
                                <span className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xl">🐍</span>
                                {t('fireextinguisherservices.componentReplacement.hose.title')}
                            </h4>
                            <div className="space-y-4 mb-6">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('fireextinguisherservices.componentReplacement.hose.whenToReplace.title')}</p>
                                <List className="text-[11px] space-y-1">
                                    <ListItem>{t('fireextinguisherservices.componentReplacement.hose.whenToReplace.items.cracks')}</ListItem>
                                    <ListItem>{t('fireextinguisherservices.componentReplacement.hose.whenToReplace.items.brittle')}</ListItem>
                                    <ListItem>{t('fireextinguisherservices.componentReplacement.hose.whenToReplace.items.leaking')}</ListItem>
                                </List>
                            </div>
                            <div className="mt-auto p-4 bg-slate-50 dark:bg-slate-950/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <p className="text-[10px] font-black text-primary-600 mb-2 uppercase tracking-tighter">{t('fireextinguisherservices.componentReplacement.hose.keySteps.title')}</p>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed tabular-nums">
                                    {t('fireextinguisherservices.componentReplacement.hose.keySteps.description')}
                                </p>
                            </div>
                        </div>

                        {/* Safety Pin & Seal */}
                        <div className="p-8 bg-slate-900 border border-slate-800 rounded-[3rem] shadow-sm flex flex-col text-white">
                            <div className="flex justify-between items-start mb-6">
                                <h4 className="text-lg font-black text-primary-400 flex items-center gap-2">
                                    <span className="p-2 bg-white/5 rounded-xl text-xl">📌</span>
                                    {t('fireextinguisherservices.componentReplacement.safetyPin.title')}
                                </h4>
                                <span className="px-2 py-0.5 bg-primary-500 rounded text-[9px] font-bold text-white uppercase tracking-tighter">{t('fireextinguisherservices.componentReplacement.safetyPin.badge')}</span>
                            </div>
                            <div className="space-y-4 mb-6">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t('fireextinguisherservices.componentReplacement.safetyPin.procedure.title')}</p>
                                <div className="space-y-3">
                                    <div className="p-3 bg-white/5 rounded-xl">
                                        <p className="text-[11px] font-bold text-slate-300 mb-1">1. {t('fireextinguisherservices.componentReplacement.safetyPin.procedure.installPin.title')}</p>
                                        <p className="text-[10px] text-slate-400 italic">{t('fireextinguisherservices.componentReplacement.safetyPin.procedure.installPin.description')}</p>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-xl">
                                        <p className="text-[11px] font-bold text-slate-300 mb-1">2. {t('fireextinguisherservices.componentReplacement.safetyPin.procedure.applySeal.title')}</p>
                                        <p className="text-[10px] text-slate-400 italic">{t('fireextinguisherservices.componentReplacement.safetyPin.procedure.applySeal.description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nozzle/Horn & Handle */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm relative overflow-hidden group">
                           <h4 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                                <span className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xl">📢</span>
                                {t('fireextinguisherservices.componentReplacement.nozzleHorn.title')}
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <h5 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{t('fireextinguisherservices.componentReplacement.nozzleHorn.co2Horn.title')}</h5>
                                    <p className="text-[11px] text-slate-500 leading-relaxed italic border-l-2 border-slate-200 pl-4">{t('fireextinguisherservices.componentReplacement.nozzleHorn.co2Horn.description')}</p>
                                </div>
                                <div className="space-y-3">
                                    <h5 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{t('fireextinguisherservices.componentReplacement.nozzleHorn.powderNozzle.title')}</h5>
                                    <p className="text-[11px] text-slate-500 leading-relaxed italic border-l-2 border-slate-200 pl-4">{t('fireextinguisherservices.componentReplacement.nozzleHorn.powderNozzle.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 bg-red-50 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 rounded-[3rem] shadow-sm flex flex-col">
                            <h4 className="text-lg font-black text-red-700 dark:text-red-400 mb-4 flex items-center gap-2 tracking-tighter">
                                <span className="p-2 bg-red-100 dark:bg-red-900/50 rounded-xl text-xl">⚙️</span>
                                {t('fireextinguisherservices.componentReplacement.handle.title')}
                            </h4>
                            <p className="text-[11px] text-red-800/70 dark:text-red-300/80 mb-6 font-bold leading-tight">{t('fireextinguisherservices.componentReplacement.handle.description')}</p>
                            <div className="mt-auto p-4 bg-white/50 dark:bg-black/20 rounded-2xl text-[10px] text-red-900 dark:text-red-200 border border-red-200/50 dark:border-red-800/50">
                                <p className="font-bold mb-1">⚠️ {t('fireextinguisherservices.componentReplacement.handle.techNote.title')}</p>
                                <p className="italic leading-snug">{t('fireextinguisherservices.componentReplacement.handle.techNote.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="hydrostatic-testing">
                <SubSectionHeader>{t('fireextinguisherservices.hydrostaticTesting.sectionNumber')} {t('fireextinguisherservices.hydrostaticTesting.title')}</SubSectionHeader>
                <div className="space-y-12">
                    {/* Overview & Regulation */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm">
                            <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-4">{t('fireextinguisherservices.hydrostaticTesting.whatIs.title')}</h4>
                            <Paragraph className="text-sm mb-6">{t('fireextinguisherservices.hydrostaticTesting.whatIs.description')}</Paragraph>
                            <div className="p-6 bg-slate-50 dark:bg-slate-950/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <h5 className="text-[10px] font-black uppercase text-secondary-600 mb-4 tracking-widest">{t('fireextinguisherservices.hydrostaticTesting.whatIs.regulatory.title')}</h5>
                                <List className="text-[11px] space-y-2">
                                    <ListItem><strong>{t('fireextinguisherservices.hydrostaticTesting.whatIs.regulatory.firstTest')}</strong></ListItem>
                                    <ListItem><strong>{t('fireextinguisherservices.hydrostaticTesting.whatIs.regulatory.subsequent')}</strong></ListItem>
                                    <ListItem><strong>{t('fireextinguisherservices.hydrostaticTesting.whatIs.regulatory.mandatory')}</strong></ListItem>
                                </List>
                            </div>
                        </div>
                        <div className="p-8 bg-secondary-900 border border-secondary-800 rounded-[3rem] text-white italic relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                             <h4 className="text-xl font-black text-secondary-400 mb-4">{t('fireextinguisherservices.hydrostaticTesting.ssRole.title')}</h4>
                             <Paragraph className="text-sm text-secondary-100 mb-6 italic">{t('fireextinguisherservices.hydrostaticTesting.ssRole.description')}</Paragraph>
                             <div className="grid grid-cols-2 gap-4">
                                 <div className="text-[10px] text-secondary-300 border-l border-secondary-700 pl-3">
                                     <strong className="text-white block mb-1">1. {t('fireextinguisherservices.hydrostaticTesting.ssRole.steps.identify.title')}</strong> {t('fireextinguisherservices.hydrostaticTesting.ssRole.steps.identify.description')}
                                 </div>
                                 <div className="text-[10px] text-secondary-300 border-l border-secondary-700 pl-3">
                                     <strong className="text-white block mb-1">2. {t('fireextinguisherservices.hydrostaticTesting.ssRole.steps.inform.title')}</strong> {t('fireextinguisherservices.hydrostaticTesting.ssRole.steps.inform.description')}
                                 </div>
                                 <div className="text-[10px] text-secondary-300 border-l border-secondary-700 pl-3">
                                     <strong className="text-white block mb-1">3. {t('fireextinguisherservices.hydrostaticTesting.ssRole.steps.transport.title')}</strong> {t('fireextinguisherservices.hydrostaticTesting.ssRole.steps.transport.description')}
                                 </div>
                                 <div className="text-[10px] text-secondary-300 border-l border-secondary-700 pl-3">
                                     <strong className="text-white block mb-1">4. {t('fireextinguisherservices.hydrostaticTesting.ssRole.steps.reservice.title')}</strong> {t('fireextinguisherservices.hydrostaticTesting.ssRole.steps.reservice.description')}
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* The 8-Step Process */}
                    <div className="p-10 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[3.5rem]">
                        <h4 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight mb-8 text-center italic">{t('fireextinguisherservices.hydrostaticTesting.lifecycle.title')}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { step: "1", title: t('fireextinguisherservices.hydrostaticTesting.lifecycle.steps.identification.title'), desc: t('fireextinguisherservices.hydrostaticTesting.lifecycle.steps.identification.description') },
                                { step: "2", title: t('fireextinguisherservices.hydrostaticTesting.lifecycle.steps.communication.title'), desc: t('fireextinguisherservices.hydrostaticTesting.lifecycle.steps.communication.description') },
                                { step: "3", title: t('fireextinguisherservices.hydrostaticTesting.lifecycle.steps.preparation.title'), desc: t('fireextinguisherservices.hydrostaticTesting.lifecycle.steps.preparation.description') },
                                { step: "4", title: t('fireextinguisherservices.hydrostaticTesting.lifecycle.steps.transport.title'), desc: t('fireextinguisherservices.hydrostaticTesting.lifecycle.steps.transport.description') },
                                { step: "5", title: t('fireextinguisherservices.hydrostaticTesting.lifecycle.steps.testing.title'), desc: t('fireextinguisherservices.hydrostaticTesting.lifecycle.steps.testing.description') },
                                { step: "6", title: t('fireextinguisherservices.hydrostaticTesting.lifecycle.steps.retrieval.title'), desc: t('fireextinguisherservices.hydrostaticTesting.lifecycle.steps.retrieval.description') },
                                { step: "7", title: t('fireextinguisherservices.hydrostaticTesting.lifecycle.steps.reservice.title'), desc: t('fireextinguisherservices.hydrostaticTesting.lifecycle.steps.reservice.description') },
                                { step: "8", title: t('fireextinguisherservices.hydrostaticTesting.lifecycle.steps.return.title'), desc: t('fireextinguisherservices.hydrostaticTesting.lifecycle.steps.return.description') },
                            ].map((s, i) => (
                                <div key={i} className="p-6 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="w-8 h-8 flex items-center justify-center bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 rounded-full text-xs font-black mb-4 group-hover:bg-secondary-500 group-hover:text-white transition-colors">{s.step}</div>
                                    <h6 className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase mb-2 leading-tight">{s.title}</h6>
                                    <p className="text-[10px] text-slate-500 leading-relaxed italic">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Failed Tests */}
                    <div className="p-8 bg-red-50 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 rounded-[3rem] flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-20 h-20 flex-shrink-0 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center text-4xl">🚫</div>
                        <div>
                            <h4 className="text-xl font-black text-red-900 dark:text-red-100 mb-2 tracking-tight">{t('fireextinguisherservices.hydrostaticTesting.failedTests.title')}</h4>
                            <Paragraph className="text-[11px] text-red-800/70 dark:text-red-300/80 mb-4 font-bold italic underline">{t('fireextinguisherservices.hydrostaticTesting.failedTests.warning')}</Paragraph>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[10px] text-red-800 dark:text-red-200">
                                <List className="space-y-1">
                                    <ListItem><strong>{t('fireextinguisherservices.hydrostaticTesting.failedTests.steps.notify')}</strong></ListItem>
                                    <ListItem><strong>{t('fireextinguisherservices.hydrostaticTesting.failedTests.steps.replacement')}</strong></ListItem>
                                </List>
                                <List className="space-y-1">
                                    <ListItem><strong>{t('fireextinguisherservices.hydrostaticTesting.failedTests.steps.condemnation')}</strong></ListItem>
                                    <ListItem><strong>{t('fireextinguisherservices.hydrostaticTesting.failedTests.steps.documentation')}</strong></ListItem>
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="quality-control">
                <SubSectionHeader>{t('fireextinguisherservices.qualityControl.sectionNumber')} {t('fireextinguisherservices.qualityControl.title')}</SubSectionHeader>

                {/* 3-Layer System Overview */}
                <div className="p-12 bg-slate-900 border border-slate-800 rounded-[4rem] text-white relative overflow-hidden mb-16 shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                    <h4 className="text-3xl font-black mb-12 text-center tracking-tight bg-gradient-to-r from-primary-400 to-primary-200 bg-clip-text text-transparent">{t('fireextinguisherservices.qualityControl.threeLayer.title')}</h4>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                        {/* Layer 1: Tech */}
                        <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-colors">
                            <span className="text-[10px] font-black text-primary-400 uppercase tracking-[0.3em] block mb-4">{t('fireextinguisherservices.qualityControl.threeLayer.layer1.label')}</span>
                            <h5 className="text-lg font-bold mb-4">{t('fireextinguisherservices.qualityControl.threeLayer.layer1.title')}</h5>
                            <Paragraph className="text-xs text-slate-400 italic leading-relaxed">{t('fireextinguisherservices.qualityControl.threeLayer.layer1.description')}</Paragraph>
                        </div>
                        {/* Layer 2: TL */}
                        <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem] border-t-4 border-t-primary-500 hover:bg-white/10 transition-colors scale-105 shadow-2xl shadow-primary-500/10">
                            <span className="text-[10px] font-black text-primary-400 uppercase tracking-[0.3em] block mb-4">{t('fireextinguisherservices.qualityControl.threeLayer.layer2.label')}</span>
                            <h5 className="text-lg font-bold mb-4">{t('fireextinguisherservices.qualityControl.threeLayer.layer2.title')}</h5>
                            <Paragraph className="text-xs text-slate-400 italic leading-relaxed">{t('fireextinguisherservices.qualityControl.threeLayer.layer2.description')}</Paragraph>
                        </div>
                        {/* Layer 3: Responsible */}
                        <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-colors">
                            <span className="text-[10px] font-black text-primary-400 uppercase tracking-[0.3em] block mb-4">{t('fireextinguisherservices.qualityControl.threeLayer.layer3.label')}</span>
                            <h5 className="text-lg font-bold mb-4">{t('fireextinguisherservices.qualityControl.threeLayer.layer3.title')}</h5>
                            <Paragraph className="text-xs text-slate-400 italic leading-relaxed">{t('fireextinguisherservices.qualityControl.threeLayer.layer3.description')}</Paragraph>
                        </div>
                    </div>
                </div>

                {/* Layer 1 Details */}
                <div className="mb-16">
                    <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-8 border-l-4 border-primary-500 pl-4">{t('fireextinguisherservices.qualityControl.layer1Details.title')}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: t('fireextinguisherservices.qualityControl.layer1Details.categories.serviceCompletion.title'), items: [
                                t('fireextinguisherservices.qualityControl.layer1Details.categories.serviceCompletion.items.workOrders'),
                                t('fireextinguisherservices.qualityControl.layer1Details.categories.serviceCompletion.items.locations'),
                                t('fireextinguisherservices.qualityControl.layer1Details.categories.serviceCompletion.items.nothing')
                            ] },
                            { title: t('fireextinguisherservices.qualityControl.layer1Details.categories.qualitySafety.title'), items: [
                                t('fireextinguisherservices.qualityControl.layer1Details.categories.qualitySafety.items.pressure'),
                                t('fireextinguisherservices.qualityControl.layer1Details.categories.qualitySafety.items.pins'),
                                t('fireextinguisherservices.qualityControl.layer1Details.categories.qualitySafety.items.repairs')
                            ] },
                            { title: t('fireextinguisherservices.qualityControl.layer1Details.categories.documentation.title'), items: [
                                t('fireextinguisherservices.qualityControl.layer1Details.categories.documentation.items.forms'),
                                t('fireextinguisherservices.qualityControl.layer1Details.categories.documentation.items.photos'),
                                t('fireextinguisherservices.qualityControl.layer1Details.categories.documentation.items.signature')
                            ] },
                            { title: t('fireextinguisherservices.qualityControl.layer1Details.categories.housekeeping.title'), items: [
                                t('fireextinguisherservices.qualityControl.layer1Details.categories.housekeeping.items.cleaned'),
                                t('fireextinguisherservices.qualityControl.layer1Details.categories.housekeeping.items.noTools'),
                                t('fireextinguisherservices.qualityControl.layer1Details.categories.housekeeping.items.protected')
                            ] },
                            { title: t('fireextinguisherservices.qualityControl.layer1Details.categories.customerSatisfaction.title'), items: [
                                t('fireextinguisherservices.qualityControl.layer1Details.categories.customerSatisfaction.items.explained'),
                                t('fireextinguisherservices.qualityControl.layer1Details.categories.customerSatisfaction.items.questions'),
                                t('fireextinguisherservices.qualityControl.layer1Details.categories.customerSatisfaction.items.secure')
                            ] },
                        ].map((c, i) => (
                             <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
                                 <h6 className="text-[10px] font-black uppercase text-primary-600 mb-4 tracking-widest">{c.title}</h6>
                                 <div className="space-y-2">
                                     {c.items.map((item, idx) => (
                                         <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-500 italic">
                                             <span className="w-1 h-1 bg-primary-500 rounded-full"></span> {item}
                                         </div>
                                     ))}
                                 </div>
                             </div>
                        ))}
                    </div>
                </div>

                {/* Layer 2 & 3 Review Methods */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 border-l-4 border-secondary-500 pl-4">{t('fireextinguisherservices.qualityControl.layer2Details.title')}</h4>
                        <div className="p-8 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem]">
                            <h5 className="text-xs font-bold text-secondary-600 mb-4 uppercase">{t('fireextinguisherservices.qualityControl.layer2Details.redFlags.title')}</h5>
                            <List className="text-[11px] space-y-3">
                                <ListItem><strong>{t('fireextinguisherservices.qualityControl.layer2Details.redFlags.speed')}</strong></ListItem>
                                <ListItem><strong>{t('fireextinguisherservices.qualityControl.layer2Details.redFlags.consistency')}</strong></ListItem>
                                <ListItem><strong>{t('fireextinguisherservices.qualityControl.layer2Details.redFlags.missing')}</strong></ListItem>
                                <ListItem><strong>{t('fireextinguisherservices.qualityControl.layer2Details.redFlags.action')}</strong></ListItem>
                            </List>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 border-l-4 border-emerald-500 pl-4">{t('fireextinguisherservices.qualityControl.layer3Details.title')}</h4>
                        <div className="p-8 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/30 rounded-[2.5rem]">
                            <h5 className="text-xs font-bold text-emerald-600 mb-4 uppercase">{t('fireextinguisherservices.qualityControl.layer3Details.protocols.title')}</h5>
                            <List className="text-[11px] space-y-3 italic">
                                <ListItem><strong>{t('fireextinguisherservices.qualityControl.layer3Details.protocols.qaCalls')}</strong></ListItem>
                                <ListItem><strong>{t('fireextinguisherservices.qualityControl.layer3Details.protocols.technicalAudit')}</strong></ListItem>
                                <ListItem><strong>{t('fireextinguisherservices.qualityControl.layer3Details.protocols.trendIdentification')}</strong></ListItem>
                            </List>
                        </div>
                    </div>
                </div>

                {/* Handling Quality Issues */}
                <div className="p-8 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] italic">
                    <h4 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-6 text-center">{t('fireextinguisherservices.qualityControl.correctiveAction.title')}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white dark:bg-slate-950/50 rounded-2xl border-t-2 border-t-amber-400">
                             <h6 className="text-[10px] font-black text-amber-600 uppercase mb-2">{t('fireextinguisherservices.qualityControl.correctiveAction.minor.title')}</h6>
                             <p className="text-[10px] text-slate-500">{t('fireextinguisherservices.qualityControl.correctiveAction.minor.description')}</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-950/50 rounded-2xl border-t-2 border-t-orange-500">
                             <h6 className="text-[10px] font-black text-orange-600 uppercase mb-2">{t('fireextinguisherservices.qualityControl.correctiveAction.moderate.title')}</h6>
                             <p className="text-[10px] text-slate-500">{t('fireextinguisherservices.qualityControl.correctiveAction.moderate.description')}</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-950/50 rounded-2xl border-t-2 border-t-red-600">
                             <h6 className="text-[10px] font-black text-red-600 uppercase mb-2">{t('fireextinguisherservices.qualityControl.correctiveAction.serious.title')}</h6>
                             <p className="text-[10px] text-slate-500">{t('fireextinguisherservices.qualityControl.correctiveAction.serious.description')}</p>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="sign-off-documentation">
                <SubSectionHeader>{t('fireextinguisherservices.signOffDocumentation.sectionNumber')} {t('fireextinguisherservices.signOffDocumentation.title')}</SubSectionHeader>

                {/* Sign-Off Procedure */}
                <div className="mb-16">
                    <h4 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-8 tracking-tight">{t('fireextinguisherservices.signOffDocumentation.signOff.title')}</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Process Steps */}
                        <div className="space-y-4">
                            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
                                <h5 className="text-[11px] font-black text-primary-600 uppercase mb-3 flex items-center gap-2">
                                    <span className="w-5 h-5 flex items-center justify-center bg-primary-100 rounded-full text-[9px]">1</span>
                                    {t('fireextinguisherservices.signOffDocumentation.signOff.completionReview.title')}
                                </h5>
                                <p className="text-[11px] text-slate-500 leading-relaxed italic">{t('fireextinguisherservices.signOffDocumentation.signOff.completionReview.description')}</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
                                <h5 className="text-[11px] font-black text-primary-600 uppercase mb-3 flex items-center gap-2">
                                    <span className="w-5 h-5 flex items-center justify-center bg-primary-100 rounded-full text-[9px]">2</span>
                                    {t('fireextinguisherservices.signOffDocumentation.signOff.signature.title')}
                                </h5>
                                <p className="text-[11px] text-slate-500 leading-relaxed italic">{t('fireextinguisherservices.signOffDocumentation.signOff.signature.description')}</p>
                            </div>
                        </div>
                        {/* Handling Refusals */}
                        <div className="p-8 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 rounded-[3rem] text-amber-900 dark:text-amber-100">
                             <h5 className="font-black text-xs uppercase mb-4 tracking-widest text-amber-700 dark:text-amber-400">{t('fireextinguisherservices.signOffDocumentation.signOff.refusal.title')}</h5>
                             <Paragraph className="text-[11px] mb-4 font-bold border-b border-amber-200 dark:border-amber-800 pb-2 italic">{t('fireextinguisherservices.signOffDocumentation.signOff.refusal.description')}</Paragraph>
                             <List className="text-[10px] space-y-2">
                                 <ListItem><strong>{t('fireextinguisherservices.signOffDocumentation.signOff.refusal.steps.document')}</strong></ListItem>
                                 <ListItem><strong>{t('fireextinguisherservices.signOffDocumentation.signOff.refusal.steps.evidence')}</strong></ListItem>
                                 <ListItem><strong>{t('fireextinguisherservices.signOffDocumentation.signOff.refusal.steps.alternative')}</strong></ListItem>
                                 <ListItem><strong>{t('fireextinguisherservices.signOffDocumentation.signOff.refusal.steps.escalate')}</strong></ListItem>
                             </List>
                        </div>
                    </div>
                </div>

                {/* Photo Standards Detail */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border border-slate-800 rounded-[4rem] text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                    <div className="flex flex-col items-center mb-12 relative z-10">
                        <div className="p-4 bg-secondary-500/10 rounded-2xl mb-4 border border-secondary-500/20">
                            <Camera className="w-8 h-8 text-secondary-400" />
                        </div>
                        <h4 className="text-3xl font-black text-center tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            {t('fireextinguisherservices.signOffDocumentation.photoStandards.title')}
                        </h4>
                        <div className="h-1 w-20 bg-secondary-500/50 rounded-full mt-4"></div>
                    </div>

                    <div className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 gap-6">
                            <motion.div whileHover={{ x: 10 }} className="flex flex-col sm:flex-row gap-8 p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-sm group">
                                <div className="space-y-4 min-w-[180px]">
                                    <div className="p-4 bg-secondary-500/10 rounded-2xl w-fit">
                                        <Clock className="w-6 h-6 text-secondary-400" />
                                    </div>
                                    <h6 className="text-xs font-black text-secondary-500 uppercase tracking-[0.2em] leading-tight">{t('fireextinguisherservices.signOffDocumentation.photoStandards.whenToShoot.title')}<br/><span className="text-[10px] text-slate-500 normal-case tracking-normal">{t('fireextinguisherservices.signOffDocumentation.photoStandards.whenToShoot.subtitle')}</span></h6>
                                </div>
                                <div className="h-full w-px bg-white/10 hidden sm:block"></div>
                                <List className="text-xs text-slate-400 space-y-4 flex-1 pt-1">
                                    <ListItem><strong className="text-secondary-300">{t('fireextinguisherservices.signOffDocumentation.photoStandards.whenToShoot.critical')}</strong></ListItem>
                                    <ListItem><strong className="text-secondary-300">{t('fireextinguisherservices.signOffDocumentation.photoStandards.whenToShoot.routine')}</strong></ListItem>
                                </List>
                            </motion.div>

                            <motion.div whileHover={{ x: 10 }} className="flex flex-col sm:flex-row gap-8 p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-sm group">
                                <div className="space-y-4 min-w-[180px]">
                                    <div className="p-4 bg-emerald-500/10 rounded-2xl w-fit">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <h6 className="text-xs font-black text-secondary-500 uppercase tracking-[0.2em] leading-tight">{t('fireextinguisherservices.signOffDocumentation.photoStandards.qualityChecklist.title')}<br/><span className="text-[10px] text-slate-500 normal-case tracking-normal">{t('fireextinguisherservices.signOffDocumentation.photoStandards.qualityChecklist.subtitle')}</span></h6>
                                </div>
                                <div className="h-full w-px bg-white/10 hidden sm:block"></div>
                                <List className="text-xs text-slate-400 space-y-4 flex-1 pt-1">
                                    <ListItem><strong className="text-emerald-400">{t('fireextinguisherservices.signOffDocumentation.photoStandards.qualityChecklist.visualClarity')}</strong></ListItem>
                                    <ListItem><strong className="text-emerald-400">{t('fireextinguisherservices.signOffDocumentation.photoStandards.qualityChecklist.contextual')}</strong></ListItem>
                                    <ListItem><strong className="text-emerald-400">{t('fireextinguisherservices.signOffDocumentation.photoStandards.qualityChecklist.reparation')}</strong></ListItem>
                                </List>
                            </motion.div>
                        </div>

                        <motion.div whileHover={{ y: -5 }} className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[3rem] relative">
                             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/5 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary-500/10 rounded-2xl">
                                        <ShieldCheck className="w-6 h-6 text-primary-400" />
                                    </div>
                                    <div>
                                        <h6 className="text-[11px] font-black text-primary-400 uppercase tracking-[0.2em]">{t('fireextinguisherservices.signOffDocumentation.photoStandards.dataIntegrity.title')}</h6>
                                        <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mt-0.5">{t('fireextinguisherservices.signOffDocumentation.photoStandards.dataIntegrity.subtitle')}</p>
                                    </div>
                                </div>
                                <div className="px-5 py-2 bg-primary-500/10 border border-primary-500/20 rounded-xl text-[10px] font-black text-primary-400 uppercase tracking-widest">
                                    {t('fireextinguisherservices.signOffDocumentation.photoStandards.dataIntegrity.badge')}
                                </div>
                             </div>
                             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { label: t('fireextinguisherservices.signOffDocumentation.photoStandards.dataIntegrity.privacy.label'), desc: t('fireextinguisherservices.signOffDocumentation.photoStandards.dataIntegrity.privacy.description'), icon: Eye },
                                    { label: t('fireextinguisherservices.signOffDocumentation.photoStandards.dataIntegrity.tagging.label'), desc: t('fireextinguisherservices.signOffDocumentation.photoStandards.dataIntegrity.tagging.description'), icon: PenTool },
                                    { label: t('fireextinguisherservices.signOffDocumentation.photoStandards.dataIntegrity.timeline.label'), desc: t('fireextinguisherservices.signOffDocumentation.photoStandards.dataIntegrity.timeline.description'), icon: Calendar },
                                    { label: t('fireextinguisherservices.signOffDocumentation.photoStandards.dataIntegrity.security.label'), desc: t('fireextinguisherservices.signOffDocumentation.photoStandards.dataIntegrity.security.description'), icon: ShieldCheck }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex items-center gap-2 mb-1">
                                            <item.icon className="w-4 h-4 text-slate-400" />
                                            <span className="text-[10px] font-black text-slate-200 uppercase tracking-wider">{item.label}</span>
                                        </div>
                                        <p className="text-[10px] text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                             </div>
                        </motion.div>
                    </div>
                </motion.div>
            </SubSection>
        </Section>
    );
}
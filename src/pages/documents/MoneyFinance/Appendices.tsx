
import { useTranslation } from 'react-i18next';
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';

export default function Appendices() {
    const { t } = useTranslation();

    const operationalForms = t('moneyfinance.appendices.formstemplates.forms', { returnObjects: true }) as string[];
    const financialTools = t('moneyfinance.appendices.formstemplates.tools', { returnObjects: true }) as string[];
    const glossaryTerms = t('moneyfinance.appendices.glossary.terms', { returnObjects: true }) as Array<{ term: string; def: string }>;

    return (
        <Section id="appendices">
            <SectionHeader>{t('moneyfinance.appendices.section.header')}</SectionHeader>

            <SubSection id="forms-templates">
                <SubSectionHeader>{t('moneyfinance.appendices.formstemplates.subsectionheader')}</SubSectionHeader>
                <Paragraph className="mb-4">{t('moneyfinance.appendices.formstemplates.intro')}</Paragraph>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <div className="font-bold text-xs uppercase text-slate-500 mb-2">{t('moneyfinance.appendices.formstemplates.operationalforms')}</div>
                        <List className="text-xs space-y-1">
                            {operationalForms.map((item, i) => (
                                <ListItem key={i}>{item}</ListItem>
                            ))}
                        </List>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <div className="font-bold text-xs uppercase text-slate-500 mb-2">{t('moneyfinance.appendices.formstemplates.financialtools')}</div>
                        <List className="text-xs space-y-1">
                            {financialTools.map((item, i) => (
                                <ListItem key={i}>{item}</ListItem>
                            ))}
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="quick-reference">
                <SubSectionHeader>{t('moneyfinance.appendices.quickreference.subsectionheader')}</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 text-white">
                        <h6 className="font-black text-xs uppercase text-slate-400 mb-4 tracking-widest border-b border-slate-800 pb-2">{t('moneyfinance.appendices.quickreference.criticaldeadlines')}</h6>
                        <div className="space-y-3 text-xs">
                            <div className="flex justify-between">
                                <span className="text-slate-400">{t('moneyfinance.appendices.quickreference.monthlyclose')}</span>
                                <span className="font-bold text-white">{t('moneyfinance.appendices.quickreference.day5')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">{t('moneyfinance.appendices.quickreference.financialreports')}</span>
                                <span className="font-bold text-white">{t('moneyfinance.appendices.quickreference.day10')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">{t('moneyfinance.appendices.quickreference.supplierpayments')}</span>
                                <span className="font-bold text-white">{t('moneyfinance.appendices.quickreference.thursdayweekly')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">{t('moneyfinance.appendices.quickreference.vatreturn')}</span>
                                <span className="font-bold text-white">{t('moneyfinance.appendices.quickreference.monthend')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <h6 className="font-black text-xs uppercase text-slate-400 mb-4 tracking-widest border-b border-slate-100 dark:border-slate-800 pb-2">{t('moneyfinance.appendices.quickreference.financialtargets')}</h6>
                        <div className="space-y-3 text-xs">
                            <div className="flex justify-between">
                                <span className="font-bold text-slate-500">{t('moneyfinance.appendices.quickreference.grossmargin')}</span>
                                <span className="font-mono font-black text-primary-600">{t('moneyfinance.appendices.quickreference.grossmarginvalue')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold text-slate-500">{t('moneyfinance.appendices.quickreference.netmargin')}</span>
                                <span className="font-mono font-black text-primary-600">{t('moneyfinance.appendices.quickreference.netmarginvalue')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold text-slate-500">{t('moneyfinance.appendices.quickreference.dsotarget')}</span>
                                <span className="font-mono font-black text-primary-600">{t('moneyfinance.appendices.quickreference.dsovalue')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold text-slate-500">{t('moneyfinance.appendices.quickreference.mincashbal')}</span>
                                <span className="font-mono font-black text-primary-600">{t('moneyfinance.appendices.quickreference.mincashvalue')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="glossary">
                <SubSectionHeader>{t('moneyfinance.appendices.glossary.subsectionheader')}</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 my-8">
                    {glossaryTerms.map((item, i) => (
                        <div key={i} className="border-l-2 border-slate-200 dark:border-slate-800 pl-4 py-1">
                            <div className="text-[10px] font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">{item.term}</div>
                            <p className="text-[10px] text-slate-500 italic leading-tight">{item.def}</p>
                        </div>
                    ))}
                </div>
            </SubSection>
        </Section>
    );
}

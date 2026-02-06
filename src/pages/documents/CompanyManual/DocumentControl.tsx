
import { useTranslation } from 'react-i18next';
import { SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';

export default function DocumentControl() {
    const { t } = useTranslation();
    
    return (
        <SubSection id="document-control">
            <SubSectionHeader>{t('companyManual.sections.section4.subsections.documentControl.title')}</SubSectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div>
                    <h5 className="font-bold text-xs mb-3 uppercase tracking-widest text-primary-600 border-b pb-1">{t('companyManual.sections.section4.subsections.documentControl.content.versionHistory')}</h5>
                    <Table>
                        <TableRow isHeader>
                            <TableCell isHeader>{t('companyManual.sections.section4.subsections.documentControl.content.versionTableHeaders.version')}</TableCell>
                            <TableCell isHeader>{t('companyManual.sections.section4.subsections.documentControl.content.versionTableHeaders.date')}</TableCell>
                            <TableCell isHeader>{t('companyManual.sections.section4.subsections.documentControl.content.versionTableHeaders.changes')}</TableCell>
                            <TableCell isHeader>{t('companyManual.sections.section4.subsections.documentControl.content.versionTableHeaders.approvedBy')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('companyManual.sections.section4.subsections.documentControl.content.versionRows.0.version')}</TableCell>
                            <TableCell>{t('companyManual.sections.section4.subsections.documentControl.content.versionRows.0.date')}</TableCell>
                            <TableCell>{t('companyManual.sections.section4.subsections.documentControl.content.versionRows.0.changes')}</TableCell>
                            <TableCell>{t('companyManual.sections.section4.subsections.documentControl.content.versionRows.0.approvedBy')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><span className="font-bold text-primary-600">{t('companyManual.sections.section4.subsections.documentControl.content.versionRows.1.version')}</span></TableCell>
                            <TableCell>{t('companyManual.sections.section4.subsections.documentControl.content.versionRows.1.date')}</TableCell>
                            <TableCell>{t('companyManual.sections.section4.subsections.documentControl.content.versionRows.1.changes')}</TableCell>
                            <TableCell>{t('companyManual.sections.section4.subsections.documentControl.content.versionRows.1.approvedBy')}</TableCell>
                        </TableRow>
                    </Table>
                </div>

                <div>
                    <h5 className="font-bold text-xs mb-3 uppercase tracking-widest text-primary-600 border-b pb-1">{t('companyManual.sections.section4.subsections.documentControl.content.controlledDistribution')}</h5>
                    <p className="text-xs font-bold mb-2">{t('companyManual.sections.section4.subsections.documentControl.content.whoReceives')}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                            <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400">{t('companyManual.sections.section4.subsections.documentControl.content.distributionList.0')}</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                            <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400">{t('companyManual.sections.section4.subsections.documentControl.content.distributionList.1')}</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                            <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400">{t('companyManual.sections.section4.subsections.documentControl.content.distributionList.2')}</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                            <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400">{t('companyManual.sections.section4.subsections.documentControl.content.distributionList.3')}</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                            <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400">{t('companyManual.sections.section4.subsections.documentControl.content.distributionList.4')}</span>
                        </div>
                    </div>
                    <p className="text-xs font-bold mt-3 mb-1">{t('companyManual.sections.section4.subsections.documentControl.content.format')}</p>
                    <Paragraph className="text-[10px] text-slate-500 italic">
                        {t('companyManual.sections.section4.subsections.documentControl.content.formatText')}
                    </Paragraph>
                </div>
            </div>

            <div className="p-8 bg-slate-900 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all"></div>

                <h5 className="font-black text-white text-lg mb-6 underline decoration-4 decoration-primary-900 underline-offset-8 italic">{t('companyManual.sections.section4.subsections.documentControl.content.formalUpdateProcess')}</h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                    <div className="space-y-1">
                        <div className="text-secondary-500 font-black text-xs uppercase tracking-tighter italic">{t('companyManual.sections.section4.subsections.documentControl.content.step01')}</div>
                        <p className="text-[10px] text-slate-400">{t('companyManual.sections.section4.subsections.documentControl.content.step01Text')}</p>
                    </div>
                    <div className="space-y-1">
                        <div className="text-secondary-500 font-black text-xs uppercase tracking-tighter italic">{t('companyManual.sections.section4.subsections.documentControl.content.step02')}</div>
                        <p className="text-[10px] text-slate-400">{t('companyManual.sections.section4.subsections.documentControl.content.step02Text')}</p>
                    </div>
                    <div className="space-y-1">
                        <div className="text-secondary-500 font-black text-xs uppercase tracking-tighter italic">{t('companyManual.sections.section4.subsections.documentControl.content.step03')}</div>
                        <p className="text-[10px] text-slate-400">{t('companyManual.sections.section4.subsections.documentControl.content.step03Text')}</p>
                    </div>
                    <div className="space-y-1">
                        <div className="text-secondary-500 font-black text-xs uppercase tracking-tighter italic">{t('companyManual.sections.section4.subsections.documentControl.content.step04')}</div>
                        <p className="text-[10px] text-slate-400">{t('companyManual.sections.section4.subsections.documentControl.content.step04Text')}</p>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="bg-primary-950/20 p-3 rounded-xl border border-primary-900">
                            <div className="text-primary-500 font-black text-xs uppercase tracking-tighter italic mb-1 shrink-0">{t('companyManual.sections.section4.subsections.documentControl.content.emergencyUpdates')}</div>
                            <p className="text-[10px] text-primary-200/60 leading-tight">{t('companyManual.sections.section4.subsections.documentControl.content.emergencyUpdatesText')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <h5 className="font-bold text-sm mb-3 mt-12 uppercase tracking-widest text-primary-600 border-b pb-2">{t('companyManual.sections.section4.subsections.documentControl.content.appendixQuickReference')}</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div>
                    <h6 className="font-bold text-xs mb-2">{t('companyManual.sections.section4.subsections.documentControl.content.keyContactsSummary')}</h6>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                        {t('companyManual.sections.section4.subsections.documentControl.content.keyContactsText')}
                    </p>
                </div>
                <div>
                    <h6 className="font-bold text-xs mb-2">{t('companyManual.sections.section4.subsections.documentControl.content.quickDecisionGuide')}</h6>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                        {t('companyManual.sections.section4.subsections.documentControl.content.quickDecisionText')}
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div>
                    <h6 className="font-bold text-xs mb-2">{t('companyManual.sections.section4.subsections.documentControl.content.responseTimeQuickRef')}</h6>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">
                        {t('companyManual.sections.section4.subsections.documentControl.content.responseTimeText')}
                    </p>
                </div>
                <div>
                    <h6 className="font-bold text-xs mb-2">{t('companyManual.sections.section4.subsections.documentControl.content.servicePromise')}</h6>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">
                        {t('companyManual.sections.section4.subsections.documentControl.content.servicePromiseText')}
                    </p>
                </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h5 className="font-bold text-sm mb-4 uppercase tracking-widest text-primary-600 border-b pb-2">{t('companyManual.sections.section4.subsections.documentControl.content.acknowledgment')}</h5>
                <p className="text-xs font-bold mb-2">{t('companyManual.sections.section4.subsections.documentControl.content.employeeAcknowledgment')}</p>
                <p className="text-xs text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                    {t('companyManual.sections.section4.subsections.documentControl.content.acknowledgmentText')}
                </p>
                <List className="text-xs text-slate-700 dark:text-slate-300 mb-4 space-y-1">
                    <ListItem>{t('companyManual.sections.section4.subsections.documentControl.content.acknowledgmentItems.0')}</ListItem>
                    <ListItem>{t('companyManual.sections.section4.subsections.documentControl.content.acknowledgmentItems.1')}</ListItem>
                    <ListItem>{t('companyManual.sections.section4.subsections.documentControl.content.acknowledgmentItems.2')}</ListItem>
                    <ListItem>{t('companyManual.sections.section4.subsections.documentControl.content.acknowledgmentItems.3')}</ListItem>
                    <ListItem>{t('companyManual.sections.section4.subsections.documentControl.content.acknowledgmentItems.4')}</ListItem>
                </List>
                <p className="text-xs text-slate-700 dark:text-slate-300 mb-4">{t('companyManual.sections.section4.subsections.documentControl.content.commitmentText')}</p>
                <p className="text-[11px] text-slate-500">
                    <strong>{t('companyManual.sections.section4.subsections.documentControl.content.signatureLine')}</strong> _____________________ 
                    <strong> {t('companyManual.sections.section4.subsections.documentControl.content.dateLine')}</strong> _____________________ 
                    <strong> {t('companyManual.sections.section4.subsections.documentControl.content.positionLine')}</strong> _____________________ 
                    <strong> {t('companyManual.sections.section4.subsections.documentControl.content.managerSignatureLine')}</strong> _____________________
                </p>
            </div>

            <p className="text-[10px] text-slate-500 mt-8 italic">{t('companyManual.sections.section4.subsections.documentControl.content.footerText')}</p>
        </SubSection>
    );
}

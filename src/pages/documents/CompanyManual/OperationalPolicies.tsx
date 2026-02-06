
import { useTranslation } from 'react-i18next';
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';

interface CustomerPledge { title: string; description: string; }
interface InquiryRow { channel: string; time: string; responsibility: string; }
interface TimeRow { type: string; time: string; }
interface ProductRow { category: string; warranty: string; conditions: string; }
interface ResolutionRow { issue: string; resolution: string; }

export default function OperationalPolicies() {
    const { t } = useTranslation();
    
    const customerPledges = t('companyManual.sections.section3.subsections.customerService.content.customerPledges', { returnObjects: true }) as CustomerPledge[];
    const inquiryRows = t('companyManual.sections.section3.subsections.responseTime.content.inquiryRows', { returnObjects: true }) as InquiryRow[];
    const serviceTimes = t('companyManual.sections.section3.subsections.responseTime.content.serviceTimes', { returnObjects: true }) as TimeRow[];
    const commTimes = t('companyManual.sections.section3.subsections.responseTime.content.commTimes', { returnObjects: true }) as TimeRow[];
    const workmanshipList = t('companyManual.sections.section3.subsections.technicalService.content.workmanshipList', { returnObjects: true }) as string[];
    const conductList = t('companyManual.sections.section3.subsections.technicalService.content.conductList', { returnObjects: true }) as string[];
    const productRows = t('companyManual.sections.section3.subsections.qualityGuarantees.content.productWarrantyTableHeaders', { returnObjects: true }) as ProductRow[];
    const faultRows = t('companyManual.sections.section3.subsections.complaintHandling.content.faultRows', { returnObjects: true }) as ResolutionRow[];
    const notFaultRows = t('companyManual.sections.section3.subsections.complaintHandling.content.notFaultRows', { returnObjects: true }) as ResolutionRow[];
    
    return (
        <Section id="part-c">
            <SectionHeader>{t('companyManual.sections.section3.title')}</SectionHeader>

            <SubSection id="customer-service">
                <SubSectionHeader>{t('companyManual.sections.section3.subsections.customerService.sectionNumber')} {t('companyManual.sections.section3.subsections.customerService.title')}</SubSectionHeader>
                <h4 className="font-bold text-sm mb-3 mt-4">{t('companyManual.sections.section3.subsections.customerService.content.ourPromise')}</h4>
                <Paragraph className="mb-4">{t('companyManual.sections.section3.subsections.customerService.content.atSsPlus')}</Paragraph>
                <List className="space-y-2 text-sm">
                    {customerPledges.map((pledge, index) => (
                        <ListItem key={index}><strong>{pledge.title}</strong> - {pledge.description}</ListItem>
                    ))}
                </List>
            </SubSection>

            <SubSection id="response-time">
                <SubSectionHeader>{t('companyManual.sections.section3.subsections.responseTime.sectionNumber')} {t('companyManual.sections.section3.subsections.responseTime.title')}</SubSectionHeader>
                <div className="space-y-8 my-6">
                    <div>
                        <h5 className="font-bold text-sm mb-3 text-secondary-500 italic">{t('companyManual.sections.section3.subsections.responseTime.content.inquiriesQuotations')}</h5>
                        <Table variant="document">
                            <TableRow isHeader>
                                <TableCell isHeader>{t('companyManual.sections.section3.subsections.responseTime.content.inquiryTableHeaders.channelService')}</TableCell>
                                <TableCell isHeader>{t('companyManual.sections.section3.subsections.responseTime.content.inquiryTableHeaders.targetTime')}</TableCell>
                                <TableCell isHeader>{t('companyManual.sections.section3.subsections.responseTime.content.inquiryTableHeaders.responsibility')}</TableCell>
                            </TableRow>
                            {inquiryRows.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.channel}</TableCell>
                                    <TableCell><span className="font-bold text-green-600 underline">{row.time}</span></TableCell>
                                    <TableCell>{row.responsibility}</TableCell>
                                </TableRow>
                            ))}
                        </Table>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h5 className="font-bold text-sm mb-3 border-l-4 border-primary-500 pl-3">{t('companyManual.sections.section3.subsections.responseTime.content.serviceScheduling')}</h5>
                            <Table variant="document">
                                <TableRow><TableCell className="font-bold text-xs uppercase">{t('companyManual.sections.section3.subsections.responseTime.content.serviceTable.regularMaint')}</TableCell><TableCell>{serviceTimes[0]?.time}</TableCell></TableRow>
                                <TableRow><TableCell className="font-bold text-xs uppercase text-red-500">{t('companyManual.sections.section3.subsections.responseTime.content.serviceTable.emergencyCall')}</TableCell><TableCell>{serviceTimes[1]?.time}</TableCell></TableRow>
                                <TableRow><TableCell className="font-bold text-xs uppercase">{t('companyManual.sections.section3.subsections.responseTime.content.serviceTable.installations')}</TableCell><TableCell>{serviceTimes[2]?.time}</TableCell></TableRow>
                            </Table>
                        </div>
                        <div>
                            <h5 className="font-bold text-sm mb-3 border-l-4 border-secondary-500 pl-3">{t('companyManual.sections.section3.subsections.responseTime.content.communications')}</h5>
                            <Table variant="document">
                                <TableRow><TableCell className="font-bold text-xs uppercase">{t('companyManual.sections.section3.subsections.responseTime.content.commTable.complaints')}</TableCell><TableCell>{commTimes[0]?.time}</TableCell></TableRow>
                                <TableRow><TableCell className="font-bold text-xs uppercase">{t('companyManual.sections.section3.subsections.responseTime.content.commTable.serviceReports')}</TableCell><TableCell>{commTimes[1]?.time}</TableCell></TableRow>
                                <TableRow><TableCell className="font-bold text-xs uppercase">{t('companyManual.sections.section3.subsections.responseTime.content.commTable.billingQues')}</TableCell><TableCell>{commTimes[2]?.time}</TableCell></TableRow>
                            </Table>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="technical-service">
                <SubSectionHeader>{t('companyManual.sections.section3.subsections.technicalService.sectionNumber')} {t('companyManual.sections.section3.subsections.technicalService.title')}</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl blur opacity-25"></div>
                        <div className="relative p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                            <h5 className="font-black text-lg mb-4 text-primary-600 italic underline decoration-4 decoration-primary-200 uppercase">{t('companyManual.sections.section3.subsections.technicalService.content.workmanship')}</h5>
                            <List className="text-xs space-y-3">
                                {workmanshipList.map((item, index) => (
                                    <ListItem key={index}>{item}</ListItem>
                                ))}
                            </List>
                        </div>
                    </div>
                    <div className="p-6 bg-slate-900 text-white rounded-3xl shadow-xl">
                        <h5 className="font-black text-lg mb-4 text-secondary-500 italic underline decoration-4 decoration-secondary-900 uppercase">{t('companyManual.sections.section3.subsections.technicalService.content.professionalConduct')}</h5>
                        <List className="text-xs space-y-2 opacity-80">
                            {conductList.map((item, index) => (
                                <ListItem key={index}>{item}</ListItem>
                            ))}
                        </List>
                    </div>
                </div>
            </SubSection>

            <SubSection id="quality-guarantees">
                <SubSectionHeader>{t('companyManual.sections.section3.subsections.qualityGuarantees.sectionNumber')} {t('companyManual.sections.section3.subsections.qualityGuarantees.title')}</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                    <div className="md:col-span-2">
                        <Blockquote type="success" title={t('companyManual.sections.section3.subsections.qualityGuarantees.content.serviceWarranty')}>
                            <Paragraph className="text-xs leading-relaxed">
                                {t('companyManual.sections.section3.subsections.qualityGuarantees.content.warrantyText')}
                                <br /><span className="font-bold text-primary-700 italic">{t('companyManual.sections.section3.subsections.qualityGuarantees.content.excludes')}</span>
                            </Paragraph>
                        </Blockquote>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border flex flex-col justify-center items-center text-center">
                        <div className="text-3xl font-black text-primary-600 mb-1">{t('companyManual.sections.section3.subsections.qualityGuarantees.content.hours48')}</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{t('companyManual.sections.section3.subsections.qualityGuarantees.content.warrantyClaimResponse')}</div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <Table variant="document">
                        <TableRow isHeader>
                            <TableCell isHeader>{t('companyManual.sections.section3.subsections.qualityGuarantees.content.productWarrantyTableHeaders.productCategory')}</TableCell>
                            <TableCell isHeader>{t('companyManual.sections.section3.subsections.qualityGuarantees.content.productWarrantyTableHeaders.standardWarranty')}</TableCell>
                            <TableCell isHeader>{t('companyManual.sections.section3.subsections.qualityGuarantees.content.productWarrantyTableHeaders.conditions')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('companyManual.sections.section3.subsections.qualityGuarantees.content.productRows.0.category')}</TableCell>
                            <TableCell>{t('companyManual.sections.section3.subsections.qualityGuarantees.content.productRows.0.warranty')}</TableCell>
                            <TableCell>{t('companyManual.sections.section3.subsections.qualityGuarantees.content.productRows.0.conditions')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('companyManual.sections.section3.subsections.qualityGuarantees.content.productRows.1.category')}</TableCell>
                            <TableCell>{t('companyManual.sections.section3.subsections.qualityGuarantees.content.productRows.1.warranty')}</TableCell>
                            <TableCell>{t('companyManual.sections.section3.subsections.qualityGuarantees.content.productRows.1.conditions')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('companyManual.sections.section3.subsections.qualityGuarantees.content.productRows.2.category')}</TableCell>
                            <TableCell>{t('companyManual.sections.section3.subsections.qualityGuarantees.content.productRows.2.warranty')}</TableCell>
                            <TableCell>{t('companyManual.sections.section3.subsections.qualityGuarantees.content.productRows.2.conditions')}</TableCell>
                        </TableRow>
                    </Table>
                </div>
                <Paragraph className="text-[10px] text-slate-500 mt-3 italic underline decoration-dotted decoration-primary-300">
                    {t('companyManual.sections.section3.subsections.qualityGuarantees.content.freeReinspection')}
                </Paragraph>
            </SubSection>

            <SubSection id="complaint-handling">
                <SubSectionHeader>{t('companyManual.sections.section3.subsections.complaintHandling.sectionNumber')} {t('companyManual.sections.section3.subsections.complaintHandling.title')}</SubSectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 text-2xl font-black text-slate-100 dark:text-slate-800 group-hover:text-primary-100 transition-colors">{t('companyManual.sections.section3.subsections.complaintHandling.content.step01')}</div>
                        <div className="font-bold text-primary-600 mb-2 uppercase text-[10px] tracking-widest">{t('companyManual.sections.section3.subsections.complaintHandling.content.receive')}</div>
                        <p className="text-[11px] leading-tight">{t('companyManual.sections.section3.subsections.complaintHandling.content.receiveText')}</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 text-2xl font-black text-slate-100 dark:text-slate-800 group-hover:text-primary-100 transition-colors">{t('companyManual.sections.section3.subsections.complaintHandling.content.step02')}</div>
                        <div className="font-bold text-primary-600 mb-2 uppercase text-[10px] tracking-widest">{t('companyManual.sections.section3.subsections.complaintHandling.content.investigate')}</div>
                        <p className="text-[11px] leading-tight text-slate-500 italic">{t('companyManual.sections.section3.subsections.complaintHandling.content.investigateTime')}</p>
                        <p className="text-[11px] leading-tight">{t('companyManual.sections.section3.subsections.complaintHandling.content.investigateText')}</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 text-2xl font-black text-slate-100 dark:text-slate-800 group-hover:text-primary-100 transition-colors">{t('companyManual.sections.section3.subsections.complaintHandling.content.step03')}</div>
                        <div className="font-bold text-primary-600 mb-2 uppercase text-[10px] tracking-widest">{t('companyManual.sections.section3.subsections.complaintHandling.content.resolve')}</div>
                        <p className="text-[11px] leading-tight text-slate-500 italic">{t('companyManual.sections.section3.subsections.complaintHandling.content.resolveTime')}</p>
                        <p className="text-[11px] leading-tight">{t('companyManual.sections.section3.subsections.complaintHandling.content.resolveText')}</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 text-2xl font-black text-slate-100 dark:text-slate-800 group-hover:text-primary-100 transition-colors">{t('companyManual.sections.section3.subsections.complaintHandling.content.step04')}</div>
                        <div className="font-bold text-primary-600 mb-2 uppercase text-[10px] tracking-widest">{t('companyManual.sections.section3.subsections.complaintHandling.content.followUp')}</div>
                        <p className="text-[11px] leading-tight text-slate-500 italic">{t('companyManual.sections.section3.subsections.complaintHandling.content.followUpTime')}</p>
                        <p className="text-[11px] leading-tight">{t('companyManual.sections.section3.subsections.complaintHandling.content.followUpText')}</p>
                    </div>
                </div>

                <div className="p-6 bg-slate-950 rounded-[2rem] border border-slate-800 my-8">
                    <h5 className="font-black text-secondary-500 uppercase tracking-tighter text-xl mb-6 italic">{t('companyManual.sections.section3.subsections.complaintHandling.content.resolutionGuidelines')}</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Table variant="document">
                            <TableRow isHeader><TableCell isHeader>{t('companyManual.sections.section3.subsections.complaintHandling.content.ifSsAtFault')}</TableCell></TableRow>
                            <TableRow><TableCell className="text-xs">{t('companyManual.sections.section3.subsections.complaintHandling.content.faultRows.0.issue')}</TableCell><TableCell className="text-xs text-green-500 font-bold">{t('companyManual.sections.section3.subsections.complaintHandling.content.faultRows.0.resolution')}</TableCell></TableRow>
                            <TableRow><TableCell className="text-xs">{t('companyManual.sections.section3.subsections.complaintHandling.content.faultRows.1.issue')}</TableCell><TableCell className="text-xs text-green-500 font-bold">{t('companyManual.sections.section3.subsections.complaintHandling.content.faultRows.1.resolution')}</TableCell></TableRow>
                            <TableRow><TableCell className="text-xs">{t('companyManual.sections.section3.subsections.complaintHandling.content.faultRows.2.issue')}</TableCell><TableCell className="text-xs text-green-500 font-bold">{t('companyManual.sections.section3.subsections.complaintHandling.content.faultRows.2.resolution')}</TableCell></TableRow>
                        </Table>
                        <Table variant="document">
                            <TableRow isHeader><TableCell isHeader>{t('companyManual.sections.section3.subsections.complaintHandling.content.ifNotSsFault')}</TableCell></TableRow>
                            <TableRow><TableCell className="text-xs">{t('companyManual.sections.section3.subsections.complaintHandling.content.notFaultRows.0.issue')}</TableCell><TableCell className="text-xs text-slate-400 font-bold italic">{t('companyManual.sections.section3.subsections.complaintHandling.content.notFaultRows.0.resolution')}</TableCell></TableRow>
                            <TableRow><TableCell className="text-xs">{t('companyManual.sections.section3.subsections.complaintHandling.content.notFaultRows.1.issue')}</TableCell><TableCell className="text-xs text-slate-400 font-bold italic">{t('companyManual.sections.section3.subsections.complaintHandling.content.notFaultRows.1.resolution')}</TableCell></TableRow>
                            <TableRow><TableCell className="text-xs">{t('companyManual.sections.section3.subsections.complaintHandling.content.notFaultRows.2.issue')}</TableCell><TableCell className="text-xs text-slate-400 font-bold italic">{t('companyManual.sections.section3.subsections.complaintHandling.content.notFaultRows.2.resolution')}</TableCell></TableRow>
                        </Table>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

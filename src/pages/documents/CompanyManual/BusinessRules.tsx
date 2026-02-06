import { useTranslation } from 'react-i18next';
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';

interface PricingRow { product: string; method: string; notes: string; }
interface PaymentRow { category: string; terms: string; requirement: string; }
interface TravelRow { distance: string; fee: string; }
interface SeverityRow { severity: string; credit: string; }
interface RedFlagItem { flag: string; desc: string; }

export default function BusinessRules() {
    const { t } = useTranslation();
    
    const pricingRows = t('companyManual.sections.section4.subsections.pricingGuidelines.content.rows', { returnObjects: true }) as PricingRow[];
    const discountList = t('companyManual.sections.section4.subsections.discountAuthority.content.appropriateReasonsList', { returnObjects: true }) as string[];
    const paymentRows = t('companyManual.sections.section4.subsections.paymentTerms.content.rows', { returnObjects: true }) as PaymentRow[];
    const creditList = t('companyManual.sections.section4.subsections.paymentTerms.content.creditApprovalList', { returnObjects: true }) as string[];
    const travelRows = t('companyManual.sections.section4.subsections.travelFees.content.rows', { returnObjects: true }) as TravelRow[];
    const notEligibleList = t('companyManual.sections.section4.subsections.warrantyReturns.content.notEligibleList', { returnObjects: true }) as string[];
    const defectiveList = t('companyManual.sections.section4.subsections.warrantyReturns.content.defectiveList', { returnObjects: true }) as string[];
    const severityRows = t('companyManual.sections.section4.subsections.warrantyReturns.content.severityRows', { returnObjects: true }) as SeverityRow[];
    const approvalList = t('companyManual.sections.section4.subsections.warrantyReturns.content.approvalList', { returnObjects: true }) as string[];
    const redFlagList = t('companyManual.sections.section4.subsections.riskManagement.content.redFlagList', { returnObjects: true }) as RedFlagItem[];
    
    return (
        <Section id="part-d">
            <SectionHeader>{t('companyManual.sections.section4.title')}</SectionHeader>

            <SubSection id="pricing-guidelines">
                <SubSectionHeader>{t('companyManual.sections.section4.subsections.pricingGuidelines.sectionNumber')} {t('companyManual.sections.section4.subsections.pricingGuidelines.title')}</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
                    <div>
                        <h5 className="font-bold text-sm mb-3 text-primary-600 uppercase tracking-widest pl-2 border-l-4 border-primary-500">{t('companyManual.sections.section4.subsections.pricingGuidelines.content.pricingPhilosophy')}</h5>
                        <Paragraph className="text-xs leading-relaxed">
                            {t('companyManual.sections.section4.subsections.pricingGuidelines.content.pricingPhilosophyText')}
                        </Paragraph>
                    </div>
                    <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                        <h5 className="font-bold text-xs mb-3 italic">{t('companyManual.sections.section4.subsections.pricingGuidelines.content.standardProductMarkup')}</h5>
                        <div className="flex items-end gap-3">
                            <div className="text-4xl font-black text-slate-900 dark:text-white">{t('companyManual.sections.section4.subsections.pricingGuidelines.content.markupValue')}</div>
                            <div className="text-[10px] text-slate-500 mb-1 leading-tight pb-1 border-b">{t('companyManual.sections.section4.subsections.pricingGuidelines.content.markupDescription')}</div>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto my-6">
                    <Table variant="document">
                        <TableRow isHeader>
                            <TableCell isHeader>{t('companyManual.sections.section4.subsections.pricingGuidelines.content.tableHeaders.productService')}</TableCell>
                            <TableCell isHeader>{t('companyManual.sections.section4.subsections.pricingGuidelines.content.tableHeaders.pricingMethod')}</TableCell>
                            <TableCell isHeader>{t('companyManual.sections.section4.subsections.pricingGuidelines.content.tableHeaders.notes')}</TableCell>
                        </TableRow>
                        {pricingRows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.product}</TableCell>
                                <TableCell>{row.method}</TableCell>
                                <TableCell>{row.notes}</TableCell>
                            </TableRow>
                        ))}
                    </Table>
                </div>
            </SubSection>

            <SubSection id="discount-authority">
                <SubSectionHeader>{t('companyManual.sections.section4.subsections.discountAuthority.sectionNumber')} {t('companyManual.sections.section4.subsections.discountAuthority.title')}</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800">
                        <h5 className="font-black text-secondary-500 uppercase text-[10px] mb-4 tracking-widest">{t('companyManual.sections.section4.subsections.discountAuthority.content.authorityLevels')}</h5>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                                <span className="text-xs font-bold">{t('companyManual.sections.section4.subsections.discountAuthority.content.salesReps')}</span>
                                <span className="text-sm font-black text-secondary-400 italic">{t('companyManual.sections.section4.subsections.discountAuthority.content.salesRepsDiscount')}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                                <span className="text-xs font-bold">{t('companyManual.sections.section4.subsections.discountAuthority.content.salesResponsible')}</span>
                                <span className="text-sm font-black text-secondary-400 italic">{t('companyManual.sections.section4.subsections.discountAuthority.content.salesResponsibleDiscount')}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold">{t('companyManual.sections.section4.subsections.discountAuthority.content.managers')}</span>
                                <span className="text-sm font-black text-secondary-400 italic underline decoration-dotted">{t('companyManual.sections.section4.subsections.discountAuthority.content.managersDiscount')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <Blockquote type="info" title={t('companyManual.sections.section4.subsections.discountAuthority.content.appropriateReasons')}>
                            <List className="text-[10px]">
                                {discountList.map((item, index) => (
                                    <ListItem key={index}>{item}</ListItem>
                                ))}
                            </List>
                        </Blockquote>
                        <Blockquote type="warning" title={t('companyManual.sections.section4.subsections.discountAuthority.content.inappropriateReasons')}>
                            <p className="text-[10px] text-slate-500">{t('companyManual.sections.section4.subsections.discountAuthority.content.inappropriateReasonsText')}</p>
                        </Blockquote>
                    </div>
                </div>
            </SubSection>

            <SubSection id="payment-terms">
                <SubSectionHeader>{t('companyManual.sections.section4.subsections.paymentTerms.sectionNumber')} {t('companyManual.sections.section4.subsections.paymentTerms.title')}</SubSectionHeader>
                <div className="space-y-6 my-6">
                    <Table variant="document">
                        <TableRow isHeader>
                            <TableCell isHeader>{t('companyManual.sections.section4.subsections.paymentTerms.content.tableHeaders.category')}</TableCell>
                            <TableCell isHeader>{t('companyManual.sections.section4.subsections.paymentTerms.content.tableHeaders.standardTerms')}</TableCell>
                            <TableCell isHeader>{t('companyManual.sections.section4.subsections.paymentTerms.content.tableHeaders.requirement')}</TableCell>
                        </TableRow>
                        {paymentRows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell><span className="font-bold text-primary-600">{row.category}</span></TableCell>
                                <TableCell>{row.terms}</TableCell>
                                <TableCell>{row.requirement}</TableCell>
                            </TableRow>
                        ))}
                    </Table>

                    <h5 className="font-bold text-sm uppercase italic text-slate-500 border-b pb-2">{t('companyManual.sections.section4.subsections.paymentTerms.content.collectionTimeline')}</h5>
                    <div className="grid grid-cols-5 gap-2 h-16">
                        <div className="bg-green-100 dark:bg-green-900/30 rounded flex items-center justify-center text-[10px] text-center p-1 border border-green-200 dark:border-green-800">{t('companyManual.sections.section4.subsections.paymentTerms.content.dueReminder')}</div>
                        <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded flex items-center justify-center text-[10px] text-center p-1 border border-yellow-200 dark:border-yellow-800">{t('companyManual.sections.section4.subsections.paymentTerms.content.politeCall')}</div>
                        <div className="bg-orange-100 dark:bg-orange-900/30 rounded flex items-center justify-center text-[10px] text-center p-1 border border-orange-200 dark:border-orange-800">{t('companyManual.sections.section4.subsections.paymentTerms.content.escalation')}</div>
                        <div className="bg-red-100 dark:bg-red-900/30 rounded flex items-center justify-center text-[10px] text-center p-1 border border-red-200 dark:border-red-800 font-bold">{t('companyManual.sections.section4.subsections.paymentTerms.content.hold')}</div>
                        <div className="bg-red-950 rounded flex items-center justify-center text-[10px] text-center p-1 border border-red-900 font-bold text-white">{t('companyManual.sections.section4.subsections.paymentTerms.content.legal')}</div>
                    </div>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                    <h5 className="font-bold text-xs mb-3 italic">{t('companyManual.sections.section4.subsections.paymentTerms.content.creditApprovalProcess')}</h5>
                    <List className="text-[10px] grid grid-cols-1 md:grid-cols-2 gap-x-8">
                        {creditList.map((item, index) => (
                            <ListItem key={index}>{item}</ListItem>
                        ))}
                    </List>
                </div>
            </SubSection>

            <SubSection id="travel-fees">
                <SubSectionHeader>{t('companyManual.sections.section4.subsections.travelFees.sectionNumber')} {t('companyManual.sections.section4.subsections.travelFees.title')}</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
                    <div className="p-6 bg-green-50 dark:bg-green-900/20 border-2 border-dashed border-green-200 dark:border-green-800 rounded-3xl flex flex-col justify-center items-center text-center">
                        <div className="text-secondary-500 font-black text-2xl uppercase italic">{t('companyManual.sections.section4.subsections.travelFees.content.freeZone')}</div>
                        <div className="text-xs font-bold text-green-800 mb-1">{t('companyManual.sections.section4.subsections.travelFees.content.freeZoneDescription')}</div>
                        <div className="text-[10px] text-green-600/60 leading-tight italic">{t('companyManual.sections.section4.subsections.travelFees.content.freeZoneNote')}</div>
                    </div>
                    <Table variant="document">
                        <TableRow isHeader>
                            <TableCell isHeader>{t('companyManual.sections.section4.subsections.travelFees.content.tableHeaders.distance')}</TableCell>
                            <TableCell isHeader>{t('companyManual.sections.section4.subsections.travelFees.content.tableHeaders.standardFee')}</TableCell>
                        </TableRow>
                        {travelRows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.distance}</TableCell>
                                <TableCell>{row.fee}</TableCell>
                            </TableRow>
                        ))}
                    </Table>
                </div>
                <Paragraph className="text-[10px] text-slate-500 italic">
                    {t('companyManual.sections.section4.subsections.travelFees.content.feeWaivedNote')}
                </Paragraph>
            </SubSection>

            <SubSection id="warranty-returns">
                <SubSectionHeader>{t('companyManual.sections.section4.subsections.warrantyReturns.sectionNumber')} {t('companyManual.sections.section4.subsections.warrantyReturns.title')}</SubSectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
                    <div>
                        <h5 className="font-bold text-sm mb-3 text-primary-600 uppercase tracking-widest pl-2 border-l-4 border-primary-500">{t('companyManual.sections.section4.subsections.warrantyReturns.content.productReturnPolicy')}</h5>
                        <Paragraph className="text-xs mb-4">
                            {t('companyManual.sections.section4.subsections.warrantyReturns.content.productReturnText')}
                        </Paragraph>
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h6 className="text-[10px] font-black uppercase text-slate-400 mb-2">{t('companyManual.sections.section4.subsections.warrantyReturns.content.notEligible')}</h6>
                            <List className="text-[10px] text-slate-500">
                                {notEligibleList.map((item, index) => (
                                    <ListItem key={index}>{item}</ListItem>
                                ))}
                            </List>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-sm mb-3 text-red-600 uppercase tracking-widest pl-2 border-l-4 border-red-500">{t('companyManual.sections.section4.subsections.warrantyReturns.content.defectiveProducts')}</h5>
                        <Paragraph className="text-xs mb-2 italic font-bold text-red-700 dark:text-red-400">{t('companyManual.sections.section4.subsections.warrantyReturns.content.defectiveSubtitle')}</Paragraph>
                        <List className="text-xs space-y-2">
                            {defectiveList.map((item, index) => (
                                <ListItem key={index}>{item}</ListItem>
                            ))}
                        </List>
                    </div>
                </div>

                <div className="p-6 border-2 border-slate-900 rounded-[3rem] bg-white dark:bg-slate-950 my-8">
                    <h5 className="font-black text-slate-900 dark:text-white uppercase tracking-tighter text-xl mb-4 italic">{t('companyManual.sections.section4.subsections.warrantyReturns.content.serviceRefundPolicy')}</h5>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-xs font-bold mb-4">{t('companyManual.sections.section4.subsections.warrantyReturns.content.serviceRefundText')}</p>
                            <Table variant="document">
                                <TableRow isHeader>
                                    <TableCell isHeader>{t('companyManual.sections.section4.subsections.warrantyReturns.content.issueSeverityHeaders.severity')}</TableCell>
                                    <TableCell isHeader>{t('companyManual.sections.section4.subsections.warrantyReturns.content.issueSeverityHeaders.creditRange')}</TableCell>
                                </TableRow>
                                {severityRows.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.severity}</TableCell>
                                        <TableCell>{row.credit}</TableCell>
                                    </TableRow>
                                ))}
                            </Table>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border">
                                <h6 className="text-[10px] font-black uppercase text-secondary-600 mb-1">{t('companyManual.sections.section4.subsections.warrantyReturns.content.approvalLevels')}</h6>
                                <ul className="text-[10px] space-y-1">
                                    {approvalList.map((item, index) => (
                                        <li key={index}>• {item}</li>
                                    ))}
                                </ul>
                            </div>
                            <Blockquote type="info" title={t('companyManual.sections.section4.subsections.warrantyReturns.content.refundVsCredit')}>
                                {t('companyManual.sections.section4.subsections.warrantyReturns.content.refundNoteText')}
                            </Blockquote>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="risk-management">
                <SubSectionHeader>{t('companyManual.sections.section4.subsections.riskManagement.sectionNumber')} {t('companyManual.sections.section4.subsections.riskManagement.title')}</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 my-6">
                    <div className="p-8 bg-slate-950 text-white rounded-[3.5rem] border border-slate-800 shadow-all-around flex flex-col justify-between">
                        <div>
                            <h5 className="text-2xl font-black italic uppercase tracking-tighter text-secondary-500 mb-6">{t('companyManual.sections.section4.subsections.riskManagement.content.decliningBusiness')}</h5>
                            <Paragraph className="text-xs opacity-70 mb-8 font-medium">{t('companyManual.sections.section4.subsections.riskManagement.content.decliningBusinessText')}</Paragraph>

                            <div className="space-y-6">
                                <div className="border-l-2 border-slate-800 pl-4">
                                    <h6 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{t('companyManual.sections.section4.subsections.riskManagement.content.financialRisk')}</h6>
                                    <p className="text-[11px] text-slate-400">{t('companyManual.sections.section4.subsections.riskManagement.content.financialRiskText')}</p>
                                </div>
                                <div className="border-l-2 border-slate-800 pl-4">
                                    <h6 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{t('companyManual.sections.section4.subsections.riskManagement.content.technicalRisk')}</h6>
                                    <p className="text-[11px] text-slate-400">{t('companyManual.sections.section4.subsections.riskManagement.content.technicalRiskText')}</p>
                                </div>
                                <div className="border-l-2 border-slate-800 pl-4">
                                    <h6 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{t('companyManual.sections.section4.subsections.riskManagement.content.customerRisk')}</h6>
                                    <p className="text-[11px] text-slate-400">{t('companyManual.sections.section4.subsections.riskManagement.content.customerRiskText')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-slate-900/50 rounded-3xl border border-white/5">
                            <h6 className="text-[10px] font-black text-primary-500 uppercase mb-3">{t('companyManual.sections.section4.subsections.riskManagement.content.professionalRefusal')}</h6>
                            <p className="text-[11px] italic text-slate-300">{t('companyManual.sections.section4.subsections.riskManagement.content.refusalLanguage')}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] italic h-full">
                            <h5 className="font-black text-slate-900 dark:text-white uppercase tracking-tighter text-lg mb-6 border-b pb-2">{t('companyManual.sections.section4.subsections.riskManagement.content.redFlagWarning')}</h5>
                            <div className="space-y-3">
                                {redFlagList.map((item, i) => (
                                    <div key={i} className="flex gap-4 p-3 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all">
                                        <div className="text-secondary-600 font-black text-xs shrink-0">🚩</div>
                                        <div className="text-[10px] leading-tight text-slate-500"><span className="text-slate-900 dark:text-slate-100 font-bold uppercase">{item.flag}</span> {item.desc}</div>
                                    </div>
                                ))}
                            </div>
                            <Blockquote type="warning">
                                {t('companyManual.sections.section4.subsections.riskManagement.content.escalationWarning')}
                            </Blockquote>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

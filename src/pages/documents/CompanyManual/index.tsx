import { useTranslation } from 'react-i18next';
import DocumentLayout from '../../../components/document-elements/DocumentLayout';
import Introduction from './Introduction';
import OrganizationalStructure from './OrganizationalStructure';
import ManagementRoles from './ManagementRoles';
import OperationalPolicies from './OperationalPolicies';
import BusinessRules from './BusinessRules';
import DocumentControl from './DocumentControl';

export default function CompanyManual() {
    const { t } = useTranslation();
    
    const tocItems = [
        { id: 'part-a', title: t('companyManual.sections.section1.title'), level: 1 },
        { id: 'company-profile', title: `${t('companyManual.sections.section1.subsections.companyProfile.sectionNumber')} ${t('companyManual.sections.section1.subsections.companyProfile.title')}`, level: 2 },
        { id: 'what-we-do', title: `${t('companyManual.sections.section1.subsections.whatWeDo.sectionNumber')} ${t('companyManual.sections.section1.subsections.whatWeDo.title')}`, level: 2 },
        { id: 'service-commitment', title: `${t('companyManual.sections.section1.subsections.serviceCommitment.sectionNumber')} ${t('companyManual.sections.section1.subsections.serviceCommitment.title')}`, level: 2 },
        { id: 'coverage-facilities', title: `${t('companyManual.sections.section1.subsections.coverageFacilities.sectionNumber')} ${t('companyManual.sections.section1.subsections.coverageFacilities.title')}`, level: 2 },
        { id: 'organization-structure', title: `${t('companyManual.sections.section1.subsections.organizationStructure.sectionNumber')} ${t('companyManual.sections.section1.subsections.organizationStructure.title')}`, level: 2 },
        { id: 'key-contacts', title: `${t('companyManual.sections.section1.subsections.keyContacts.sectionNumber')} ${t('companyManual.sections.section1.subsections.keyContacts.title')}`, level: 2 },
        { id: 'part-b', title: t('companyManual.sections.section2.title'), level: 1 },
        { id: 'authority-matrix', title: `${t('companyManual.sections.section2.subsections.authorityMatrix.sectionNumber')} ${t('companyManual.sections.section2.subsections.authorityMatrix.title')}`, level: 2 },
        { id: 'financial-limits', title: `${t('companyManual.sections.section2.subsections.financialLimits.sectionNumber')} ${t('companyManual.sections.section2.subsections.financialLimits.title')}`, level: 2 },
        { id: 'signature-authority', title: `${t('companyManual.sections.section2.subsections.signatureAuthority.sectionNumber')} ${t('companyManual.sections.section2.subsections.signatureAuthority.title')}`, level: 2 },
        { id: 'ethics-conduct', title: `${t('companyManual.sections.section2.subsections.ethicsConduct.sectionNumber')} ${t('companyManual.sections.section2.subsections.ethicsConduct.title')}`, level: 2 },
        { id: 'part-c', title: t('companyManual.sections.section3.title'), level: 1 },
        { id: 'customer-service', title: `${t('companyManual.sections.section3.subsections.customerService.sectionNumber')} ${t('companyManual.sections.section3.subsections.customerService.title')}`, level: 2 },
        { id: 'response-time', title: `${t('companyManual.sections.section3.subsections.responseTime.sectionNumber')} ${t('companyManual.sections.section3.subsections.responseTime.title')}`, level: 2 },
        { id: 'technical-service', title: `${t('companyManual.sections.section3.subsections.technicalService.sectionNumber')} ${t('companyManual.sections.section3.subsections.technicalService.title')}`, level: 2 },
        { id: 'quality-guarantees', title: `${t('companyManual.sections.section3.subsections.qualityGuarantees.sectionNumber')} ${t('companyManual.sections.section3.subsections.qualityGuarantees.title')}`, level: 2 },
        { id: 'complaint-handling', title: `${t('companyManual.sections.section3.subsections.complaintHandling.sectionNumber')} ${t('companyManual.sections.section3.subsections.complaintHandling.title')}`, level: 2 },
        { id: 'part-d', title: t('companyManual.sections.section4.title'), level: 1 },
        { id: 'pricing-guidelines', title: `${t('companyManual.sections.section4.subsections.pricingGuidelines.sectionNumber')} ${t('companyManual.sections.section4.subsections.pricingGuidelines.title')}`, level: 2 },
        { id: 'discount-authority', title: `${t('companyManual.sections.section4.subsections.discountAuthority.sectionNumber')} ${t('companyManual.sections.section4.subsections.discountAuthority.title')}`, level: 2 },
        { id: 'payment-terms', title: `${t('companyManual.sections.section4.subsections.paymentTerms.sectionNumber')} ${t('companyManual.sections.section4.subsections.paymentTerms.title')}`, level: 2 },
        { id: 'travel-fees', title: `${t('companyManual.sections.section4.subsections.travelFees.sectionNumber')} ${t('companyManual.sections.section4.subsections.travelFees.title')}`, level: 2 },
        { id: 'warranty-returns', title: `${t('companyManual.sections.section4.subsections.warrantyReturns.sectionNumber')} ${t('companyManual.sections.section4.subsections.warrantyReturns.title')}`, level: 2 },
        { id: 'risk-management', title: `${t('companyManual.sections.section4.subsections.riskManagement.sectionNumber')} ${t('companyManual.sections.section4.subsections.riskManagement.title')}`, level: 2 },
        { id: 'document-control', title: 'Document Control', level: 1 },
    ];
    return (
        <DocumentLayout title={t('companyManual.title')} category="Foundational Document" docId="company-manual" tocItems={tocItems}>
            <div className="document-content">
                {/* DOCUMENT TITLE */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('companyManual.documentNumber')}: {t('companyManual.title').toUpperCase()}</h1>
                    <h2 className="text-xl text-primary-600 dark:text-primary-400 mt-1">{t('companyManual.companyName')}</h2>
                    <h3 className="text-base text-slate-600 dark:text-slate-400 mt-0.5">{t('companyManual.companyTagline')}</h3>
                </div>

                {/* HEADER INFO */}
                <div className="mb-8 p-4 bg-gray-50 dark:bg-slate-900/50 rounded-lg text-sm text-gray-600 dark:text-gray-400">
                    <p><strong>{t('records.version')}:</strong> 0.4</p>
                    <p><strong>{t('records.effectiveDate')}:</strong> {t('companyManual.meta.effectiveDate')}</p>
                    <p><strong>Document Owner:</strong> {t('companyManual.meta.documentOwner')}</p>
                    <p><strong>Document created and developed by:</strong> {t('companyManual.meta.createdBy')}</p>
                    <p><strong>Review Frequency:</strong> {t('companyManual.meta.reviewFrequency')}</p>
                </div>

                {/* TABLE OF CONTENTS */}
                <div className="mb-10 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{t('companyManual.toc.title')}</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                        {tocItems.filter(item => item.level === 1).map(item => (
                            <li key={item.id} className="font-medium text-slate-700 dark:text-slate-300">
                                <a href={`#${item.id}`} className="hover:text-primary-600 hover:underline">{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <Introduction />
                <OrganizationalStructure />
                <ManagementRoles />
                <OperationalPolicies />
                <BusinessRules />
                <DocumentControl />
            </div>
        </DocumentLayout>
    );
}

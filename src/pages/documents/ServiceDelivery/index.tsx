import { useTranslation } from 'react-i18next';
import DocumentLayout from '../../../components/document-elements/DocumentLayout';
import ServicePlanning from './ServicePlanning';
import FireExtinguisherServices from './FireExtinguisherServices';
import OtherFireEquipment from './OtherFireEquipment';
import OnSiteStandards from './OnSiteStandards';
import ServiceDocumentation from './ServiceDocumentation';
import PartsTools from './PartsTools';
import WorkshopOperations from './WorkshopOperations';

// Export all components for use in the main document viewer
export {
    ServicePlanning,
    FireExtinguisherServices,
    OtherFireEquipment,
    OnSiteStandards,
    ServiceDocumentation,
    PartsTools,
    WorkshopOperations
};

export default function ServiceDelivery() {
    const { t } = useTranslation();

    const tocItems = [
        { id: 'section-1', title: t('servicedelivery.toc.section1'), level: 1 },
        { id: 'annual-monthly-planning', title: t('servicedelivery.toc.section1sub1'), level: 2 },
        { id: 'weekly-route-planning', title: t('servicedelivery.toc.section1sub2'), level: 2 },
        { id: 'technician-assignment-rules', title: t('servicedelivery.toc.section1sub3'), level: 2 },
        { id: 'vehicle-allocation', title: t('servicedelivery.toc.section1sub4'), level: 2 },
        { id: 'service-preparation', title: t('servicedelivery.toc.section1sub5'), level: 2 },
        { id: 'emergency-call-handling', title: t('servicedelivery.toc.section1sub6'), level: 2 },

        { id: 'section-2', title: t('servicedelivery.toc.section2'), level: 1 },
        { id: 'inspection-services', title: t('servicedelivery.toc.section2sub1'), level: 2 },
        { id: 'refilling-steps', title: t('servicedelivery.toc.section2sub2'), level: 2 },
        { id: 'component-replacement', title: t('servicedelivery.toc.section2sub3'), level: 2 },
        { id: 'hydrostatic-testing', title: t('servicedelivery.toc.section2sub4'), level: 2 },
        { id: 'quality-control', title: t('servicedelivery.toc.section2sub5'), level: 2 },
        { id: 'sign-off-documentation', title: t('servicedelivery.toc.section2sub6'), level: 2 },

        { id: 'section-3', title: t('servicedelivery.toc.section3'), level: 1 },
        { id: 'fire-hose-reels', title: t('servicedelivery.toc.section3sub1'), level: 2 },
        { id: 'fire-blankets', title: t('servicedelivery.toc.section3sub2'), level: 2 },
        { id: 'smoke-detectors', title: t('servicedelivery.toc.section3sub3'), level: 2 },
        { id: 'fire-alarm-systems', title: t('servicedelivery.toc.section3sub4'), level: 2 },

        { id: 'section-4', title: t('servicedelivery.toc.section4'), level: 1 },
        { id: 'site-access-safety', title: t('servicedelivery.toc.section4sub1'), level: 2 },
        { id: 'professional-conduct', title: t('servicedelivery.toc.section4sub2'), level: 2 },
        { id: 'customer-communication', title: t('servicedelivery.toc.section4sub3'), level: 2 },
        { id: 'site-specific-requirements', title: t('servicedelivery.toc.section4sub4'), level: 2 },
        { id: 'execution-methods', title: t('servicedelivery.toc.section4sub5'), level: 2 },

        { id: 'section-5', title: t('servicedelivery.toc.section5'), level: 1 },
        { id: 'required-forms', title: t('servicedelivery.toc.section5sub1'), level: 2 },
        { id: 'waveplus-documentation', title: t('servicedelivery.toc.section5sub2'), level: 2 },
        { id: 'photo-standards', title: t('servicedelivery.toc.section5sub3'), level: 2 },
        { id: 'sign-off-procedures', title: t('servicedelivery.toc.section5sub4'), level: 2 },
        { id: 'submission-filing', title: t('servicedelivery.toc.section5sub5'), level: 2 },

        { id: 'section-6', title: t('servicedelivery.toc.section6'), level: 1 },
        { id: 'vehicle-stock-management', title: t('servicedelivery.toc.section6sub1'), level: 2 },
        { id: 'refilling-inventory', title: t('servicedelivery.toc.section6sub2'), level: 2 },
        { id: 'spare-parts-inventory', title: t('servicedelivery.toc.section6sub3'), level: 2 },
        { id: 'stock-usage-recording', title: t('servicedelivery.toc.section6sub4'), level: 2 },
        { id: 'restocking-procedures', title: t('servicedelivery.toc.section6sub5'), level: 2 },
        
        { id: 'section-7', title: t('servicedelivery.toc.section7'), level: 1 },
        { id: 'tool-kit', title: t('servicedelivery.toc.section7sub1'), level: 2 },
        { id: 'tool-maintenance', title: t('servicedelivery.toc.section7sub2'), level: 2 },
        { id: 'calibration-schedule', title: t('servicedelivery.toc.section7sub3'), level: 2 },
        { id: 'lost-damaged-equipment', title: t('servicedelivery.toc.section7sub4'), level: 2 },

        { id: 'section-8', title: t('servicedelivery.toc.section8'), level: 1 },
        { id: 'sfax-workshop', title: t('servicedelivery.toc.section8sub1'), level: 2 },
        { id: 'tunis-workshop', title: t('servicedelivery.toc.section8sub2'), level: 2 },
        { id: 'safety-organization', title: t('servicedelivery.toc.section8sub3'), level: 2 },
        { id: 'equipment-maintenance', title: t('servicedelivery.toc.section8sub4'), level: 2 },
    ];

    return (
        <DocumentLayout title={t('servicedelivery.title')} category="Operations" docId="service-delivery" tocItems={tocItems}>
            <div className="document-content">
                {/* DOCUMENT TITLE */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('servicedelivery.documentnumber')}: {t('servicedelivery.title').toUpperCase()}</h1>
                    <h2 className="text-xl text-primary-600 dark:text-primary-400 mt-1">{t('servicedelivery.companyname')}</h2>
                    <h3 className="text-base text-slate-600 dark:text-slate-400 mt-0.5">{t('servicedelivery.companytagline')}</h3>
                </div>

                {/* HEADER INFO */}
                <div className="mb-8 p-4 bg-gray-50 dark:bg-slate-900/50 rounded-lg text-sm text-gray-600 dark:text-gray-400 border border-slate-200 dark:border-slate-800 shadow-inner">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p><strong>{t('records.version')}:</strong> {t('servicedelivery.meta.version')}</p>
                            <p><strong>{t('records.effectiveDate')}:</strong> {t('servicedelivery.meta.effectivedate')}</p>
                            <p><strong>{t('servicedelivery.headers.documentowner')}:</strong> {t('servicedelivery.meta.documentowner')}</p>
                            <p><strong>{t('servicedelivery.headers.approvedby')}:</strong> {t('servicedelivery.meta.approvedby')}</p>
                            <p><strong>{t('servicedelivery.headers.reviewfrequency')}:</strong> {t('servicedelivery.meta.reviewfrequency')}</p>
                        </div>
                    </div>
                </div>

                {/* TABLE OF CONTENTS */}
                <div className="mb-10 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{t('servicedelivery.toc.title')}</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                        {tocItems.filter(item => item.level === 1).map(item => (
                            <li key={item.id} className="font-medium text-slate-700 dark:text-slate-300">
                                <a href={`#${item.id}`} className="hover:text-primary-600 hover:underline">{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <ServicePlanning />
                <FireExtinguisherServices />
                <OtherFireEquipment />
                <OnSiteStandards />
                <ServiceDocumentation />
                <PartsTools />
                <WorkshopOperations />
            </div>
        </DocumentLayout>
    );
}

export const ServiceDeliverySections = [
    { id: 'section-1', title: '1. Service Planning & Scheduling', component: ServicePlanning },
    { id: 'section-2', title: '2. Fire Extinguisher Services', component: FireExtinguisherServices },
    { id: 'section-3', title: '3. Other Fire Equipment', component: OtherFireEquipment },
    { id: 'section-4', title: '4. On-Site Service Standards', component: OnSiteStandards },
    { id: 'section-5', title: '5. Service Documentation', component: ServiceDocumentation },
    { id: 'section-6', title: '6. Parts & Materials Management', component: PartsTools },
    { id: 'section-7', title: '7. Equipment & Tools', component: PartsTools },
    { id: 'section-8', title: '8. Workshop Operations', component: WorkshopOperations }
];

import { useTranslation } from 'react-i18next';
import DocumentLayout from '../../../components/document-elements/DocumentLayout';
import ProductCatalog from './ProductCatalog';
import PurchasingProcedures from './PurchasingProcedures';
import WarehouseManagement from './WarehouseManagement';
import InventoryControl from './InventoryControl';

// Export all components for use in the main document viewer
export {
    ProductCatalog,
    PurchasingProcedures,
    WarehouseManagement,
    InventoryControl
};

export default function ProductsInventory() {
    const { t } = useTranslation();

    const tocItems = [
        { id: 'section-1', title: t('productsinventory.toc.section1'), level: 1 },
        { id: 'fire-equipment', title: t('productsinventory.toc.section1sub1'), level: 2 },
        { id: 'ppe-workwear', title: t('productsinventory.toc.section1sub2'), level: 2 },
        { id: 'safety-signage', title: t('productsinventory.toc.section1sub3'), level: 2 },
        { id: 'refilling-materials', title: t('productsinventory.toc.section1sub4'), level: 2 },
        { id: 'product-coding', title: t('productsinventory.toc.section1sub5'), level: 2 },

        { id: 'section-2', title: t('productsinventory.toc.section2'), level: 1 },
        { id: 'purchase-requisition', title: t('productsinventory.toc.section2sub1'), level: 2 },
        { id: 'approval-workflow', title: t('productsinventory.toc.section2sub2'), level: 2 },
        { id: 'supplier-po', title: t('productsinventory.toc.section2sub3'), level: 2 },
        { id: 'emergency-purchasing', title: t('productsinventory.toc.section2sub4'), level: 2 },
        { id: 'import-procedures', title: t('productsinventory.toc.section2sub5'), level: 2 },
        { id: 'receiving-qc', title: t('productsinventory.toc.section2sub6'), level: 2 },

        { id: 'section-3', title: t('productsinventory.toc.section3'), level: 1 },
        { id: 'warehouse-layout', title: t('productsinventory.toc.section3sub1'), level: 2 },
        { id: 'receiving-detailed', title: t('productsinventory.toc.section3sub2'), level: 2 },
        { id: 'storage-standards', title: t('productsinventory.toc.section3sub3'), level: 2 },
        { id: 'stock-identification', title: t('productsinventory.toc.section3sub4'), level: 2 },
        { id: 'picking-issuing', title: t('productsinventory.toc.section3sub5'), level: 2 },
        { id: 'hazmat-handling', title: t('productsinventory.toc.section3sub6'), level: 2 },

        { id: 'section-4', title: t('productsinventory.toc.section4'), level: 1 },
        { id: 'min-max-system', title: t('productsinventory.toc.section4sub1'), level: 2 },
        { id: 'abc-classification', title: t('productsinventory.toc.section4sub2'), level: 2 },
        { id: 'demand-forecasting', title: t('productsinventory.toc.section4sub3'), level: 2 },
        { id: 'physical-inventory', title: t('productsinventory.toc.section4sub4'), level: 2 },
        { id: 'cycle-counting', title: t('productsinventory.toc.section4sub5'), level: 2 },
        { id: 'slow-moving-obsolete', title: t('productsinventory.toc.section4sub6'), level: 2 },

        { id: 'section-5', title: t('productsinventory.toc.section5'), level: 1 },
        { id: 'supplier-database', title: t('productsinventory.toc.section5sub1'), level: 2 },
        { id: 'supplier-qualification', title: t('productsinventory.toc.section5sub2'), level: 2 },
        { id: 'supplier-performance', title: t('productsinventory.toc.section5sub3'), level: 2 },
        { id: 'supplier-relationship', title: t('productsinventory.toc.section5sub4'), level: 2 },
        { id: 'new-supplier-dev', title: t('productsinventory.toc.section5sub5'), level: 2 },

        { id: 'section-6', title: t('productsinventory.toc.section6'), level: 1 },
        { id: 'custom-branded', title: t('productsinventory.toc.section6sub1'), level: 2 },
        { id: 'import-mgmt', title: t('productsinventory.toc.section6sub2'), level: 2 },
        { id: 'high-value-items', title: t('productsinventory.toc.section6sub3'), level: 2 },
        { id: 'hazmat-detailed', title: t('productsinventory.toc.section6sub4'), level: 2 },
        { id: 'parts-consumables', title: t('productsinventory.toc.section6sub5'), level: 2 },

        { id: 'section-7', title: t('productsinventory.toc.section7'), level: 1 },
        { id: 'valuation-methods', title: t('productsinventory.toc.section7sub1'), level: 2 },
        { id: 'cost-tracking', title: t('productsinventory.toc.section7sub2'), level: 2 },
        { id: 'pricing-updates', title: t('productsinventory.toc.section7sub3'), level: 2 },
        { id: 'investment-opt', title: t('productsinventory.toc.section7sub4'), level: 2 },
        { id: 'financial-reporting', title: t('productsinventory.toc.section7sub5'), level: 2 },
    ];

    return (
        <DocumentLayout 
            title={t('productsinventory.title')} 
            category="Supply Chain" 
            docId="products-inventory" 
            tocItems={tocItems}
        >
            <div className="document-content">
                {/* DOCUMENT TITLE */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {t('productsinventory.documentnumber')}: {t('productsinventory.title').toUpperCase()}
                    </h1>
                    <h2 className="text-xl text-primary-600 dark:text-primary-400 mt-1">
                        {t('productsinventory.companyname')}
                    </h2>
                    <h3 className="text-base text-slate-600 dark:text-slate-400 mt-0.5">
                        {t('productsinventory.companytagline')}
                    </h3>
                </div>

                {/* HEADER INFO */}
                <div className="mb-8 p-4 bg-gray-50 dark:bg-slate-900/50 rounded-lg text-sm text-gray-600 dark:text-gray-400 border border-slate-200 dark:border-slate-800 shadow-inner">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p><strong>{t('records.version')}:</strong> {t('productsinventory.meta.version')}</p>
                            <p><strong>{t('records.effectiveDate')}:</strong> {t('productsinventory.meta.effectivedate')}</p>
                            <p><strong>{t('productsinventory.headers.documentowner')}:</strong> {t('productsinventory.meta.documentowner')}</p>
                            <p><strong>{t('productsinventory.headers.approvedby')}:</strong> {t('productsinventory.meta.approvedby')}</p>
                            <p><strong>{t('productsinventory.headers.reviewfrequency')}:</strong> {t('productsinventory.meta.reviewfrequency')}</p>
                        </div>
                    </div>
                </div>

                {/* TABLE OF CONTENTS */}
                <div className="mb-10 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{t('productsinventory.toc.title')}</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                        {tocItems.filter(item => item.level === 1).map(item => (
                            <li key={item.id} className="font-medium text-slate-700 dark:text-slate-300">
                                <a href={`#${item.id}`} className="hover:text-primary-600 hover:underline">{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <ProductCatalog />
                <PurchasingProcedures />
                <WarehouseManagement />
                <InventoryControl />
                
                {/* Empty divs for TOC anchors for unimplemented sections */}
                <div id="section-5"></div>
                <div id="section-6"></div>
                <div id="section-7"></div>
            </div>
        </DocumentLayout>
    );
}

export const ProductsInventorySections = [
    { id: 'section-1', title: '1. Product Catalog', component: ProductCatalog },
    { id: 'section-2', title: '2. Purchasing Procedures', component: PurchasingProcedures },
    { id: 'section-3', title: '3. Warehouse Management', component: WarehouseManagement },
    { id: 'section-4', title: '4. Inventory Control', component: InventoryControl },
    { id: 'section-5', title: '5. Supplier Management', component: () => <div>Section 5 Placeholder</div> },
    { id: 'section-6', title: '6. Special Product Categories', component: () => <div>Section 6 Placeholder</div> },
    { id: 'section-7', title: '7. Cost Management', component: () => <div>Section 7 Placeholder</div> }
];

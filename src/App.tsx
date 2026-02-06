import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingSpinner from './components/common/LoadingSpinner';
import ErrorBoundary from './components/common/ErrorBoundary';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const DocumentViewer = lazy(() => import('./pages/DocumentViewer'));
const RecordsRepository = lazy(() => import('./pages/RecordsRepository'));
const AuditReports = lazy(() => import('./pages/AuditReports'));

// Document Pages
const CompanyManual = lazy(() => import('./pages/documents/CompanyManual/index'));
const MoneyFinance = lazy(() => import('./pages/documents/MoneyFinance/index'));
const PeopleAdmin = lazy(() => import('./pages/documents/PeopleAdmin/index'));
const ProductsInventory = lazy(() => import('./pages/documents/ProductsInventory/index'));
const SalesCustomer = lazy(() => import('./pages/documents/SalesCustomer/index'));
const ServiceDelivery = lazy(() => import('./pages/documents/ServiceDelivery/index'));
const Handbook = lazy(() => import('./pages/documents/Handbook/index'));

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                    <Suspense
                        fallback={
                            <div className="min-h-screen flex items-center justify-center">
                                <LoadingSpinner size="lg" />
                            </div>
                        }
                    >
                        <Routes>
                            <Route path="/" element={<HomePage />} />

                            {/* Native Document Routes */}
                            <Route path="/document/company-manual" element={<CompanyManual />} />
                            <Route path="/document/money-finance" element={<MoneyFinance />} />
                            <Route path="/document/people-admin" element={<PeopleAdmin />} />
                            <Route path="/document/products-inventory" element={<ProductsInventory />} />
                            <Route path="/document/sales-customer" element={<SalesCustomer />} />
                            <Route path="/document/service-delivery" element={<ServiceDelivery />} />
                            <Route path="/document/handbook" element={<Handbook />} />

                            <Route path="/document/:id" element={<DocumentViewer />} />
                            <Route path="/records" element={<RecordsRepository />} />
                            <Route path="/audits" element={<AuditReports />} />
                        </Routes>
                    </Suspense>
                </div>
            </Router>
        </ErrorBoundary>
    );
}

export default App;

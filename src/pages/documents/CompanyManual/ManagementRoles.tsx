import { useTranslation } from 'react-i18next';
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';
import Mermaid from 'react-mermaid2';

interface AuthorityMatrixContent {
    intro: string;
    workflowTitle: string;
    strategicTitle: string;
    strategy: string;
    investment: string;
    personnel: string;
    financial: string;
    legal: string;
    salesCommercialTitle: string;
    salesResponsibleTitle: string;
    salesResponsibleItems: string[];
    salesRepsTitle: string;
    salesRepsItems: string[];
    operationsTitle: string;
    opsResponsibleTitle: string;
    opsResponsibleItems: string[];
    teamLeadersTitle: string;
    teamLeadersItems: string[];
    financePurchaseTitle: string;
    adminFinanceTitle: string;
    adminFinanceItems: string[];
    purchaseRespTitle: string;
    purchaseRespItems: string[];
}

interface FinancialLimitsContent {
    tableHeaders: {
        position: string;
        purchaseAuthority: string;
        serviceCredit: string;
        discountAuthority: string;
    };
    positions: {
        managers: string;
        salesResponsible: string;
        opsResponsible: string;
        adminFinance: string;
        teamLeaders: string;
        salesReps: string;
        technicians: string;
        warehouseResp: string;
    };
    values: {
        unlimited: string;
        perApprovedPO: string;
        notApplicable: string;
    };
    approvalRequirementsTitle: string;
    transactionTable: {
        amount: string;
        approver: string;
    };
    transactions: Array<{ amount: string; approver: string }>;
    multipleApprovalsTitle: string;
    multipleApprovalsItems: string[];
}

interface SignatureAuthorityContent {
    title: string;
    contractsTitle: string;
    contractsFull: string;
    contractsLimited: string;
    bankingTitle: string;
    bankingTransactions: string;
    checksValue: string;
    billingTitle: string;
    invoices: string;
    poApproval: string;
    certificatesTitle: string;
    workOrders: string;
    certification: string;
}

interface EthicsConductContent {
    prohibitedTitle: string;
    prohibitedItems: string[];
    requiredTitle: string;
    requiredItems: string[];
}

export default function ManagementRoles() {
    const { t } = useTranslation();
    
    const authorityMatrix = t('companyManual.sections.section2.subsections.authorityMatrix.content', { returnObjects: true }) as AuthorityMatrixContent;
    const financialLimits = t('companyManual.sections.section2.subsections.financialLimits.content', { returnObjects: true }) as FinancialLimitsContent;
    const signatureAuthority = t('companyManual.sections.section2.subsections.signatureAuthority.content', { returnObjects: true }) as SignatureAuthorityContent;
    const ethicsConduct = t('companyManual.sections.section2.subsections.ethicsConduct.content', { returnObjects: true }) as EthicsConductContent;
    
    const flowChart = `
graph TD
    A[Request Initiated] --> B{Amount?}
    B -->|< 1000 TND| C[Dept Manager]
    B -->|1000-5000 TND| D[Finance Manager]
    B -->|> 5000 TND| E[General Manager]
    C --> F[Approved]
    D --> F
    E --> F
    
    style A fill:#e3f2fd,stroke:#2196f3,stroke-width:2px
    style B fill:#fff3e0,stroke:#ff9800,stroke-width:2px
    style C fill:#f3e5f5,stroke:#9c27b0,stroke-width:2px
    style D fill:#e8f5e9,stroke:#4caf50,stroke-width:2px
    style E fill:#ffebee,stroke:#f44336,stroke-width:2px
    style F fill:#e8f5e9,stroke:#2e7d32,stroke-width:4px
`;

    return (
        <Section id="part-b">
            <SectionHeader>{t('companyManual.sections.section2.title')}</SectionHeader>

            <SubSection id="authority-matrix">
                <SubSectionHeader>{t('companyManual.sections.section2.subsections.authorityMatrix.sectionNumber')} {t('companyManual.sections.section2.subsections.authorityMatrix.title')}</SubSectionHeader>
                <Paragraph>
                    {authorityMatrix.intro}
                </Paragraph>

                {/* Flowchart Integration */}
                <div className="my-10 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-inner">
                    <h4 className="text-center font-bold text-slate-900 dark:text-white uppercase tracking-wider text-lg mb-8">{authorityMatrix.workflowTitle}</h4>
                    <div className="flex justify-center overflow-x-auto">
                        <Mermaid chart={flowChart} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    {/* Strategic Decisions */}
                    <div className="bg-slate-900 p-6 rounded-3xl border border-slate-700 shadow-xl text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center font-black text-slate-900 text-xs">S</div>
                            <h4 className="font-bold uppercase tracking-widest text-sm text-secondary-400">{authorityMatrix.strategicTitle}</h4>
                        </div>
                        <List className="text-slate-400 text-xs space-y-2">
                            <ListItem><strong>Strategy:</strong> {authorityMatrix.strategy.replace('Strategy: ', '')}</ListItem>
                            <ListItem><strong>Investment:</strong> {authorityMatrix.investment.replace('Investment: ', '')}</ListItem>
                            <ListItem><strong>Personnel:</strong> {authorityMatrix.personnel.replace('Personnel: ', '')}</ListItem>
                            <ListItem><strong>Financial:</strong> {authorityMatrix.financial.replace('Financial: ', '')}</ListItem>
                            <ListItem><strong>Legal:</strong> {authorityMatrix.legal.replace('Legal: ', '')}</ListItem>
                        </List>
                    </div>

                    {/* Sales & Commercial */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center font-black text-white text-xs">C</div>
                            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-sm text-primary-600">{authorityMatrix.salesCommercialTitle}</h4>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h5 className="font-bold text-xs mb-2">{authorityMatrix.salesResponsibleTitle}</h5>
                                <List className="text-[10px] text-slate-500">
                                    {authorityMatrix.salesResponsibleItems.map((item, index) => (
                                        <ListItem key={index}>{item}</ListItem>
                                    ))}
                                </List>
                            </div>
                            <div>
                                <h5 className="font-bold text-xs mb-2">{authorityMatrix.salesRepsTitle}</h5>
                                <List className="text-[10px] text-slate-500">
                                    {authorityMatrix.salesRepsItems.map((item, index) => (
                                        <ListItem key={index}>{item}</ListItem>
                                    ))}
                                </List>
                            </div>
                        </div>
                    </div>

                    {/* Operations */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center font-black text-white text-xs">O</div>
                            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-sm text-green-600">{authorityMatrix.operationsTitle}</h4>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h5 className="font-bold text-xs mb-2">{authorityMatrix.opsResponsibleTitle}</h5>
                                <List className="text-[10px] text-slate-500">
                                    {authorityMatrix.opsResponsibleItems.map((item, index) => (
                                        <ListItem key={index}>{item}</ListItem>
                                    ))}
                                </List>
                            </div>
                            <div>
                                <h5 className="font-bold text-xs mb-2">{authorityMatrix.teamLeadersTitle}</h5>
                                <List className="text-[10px] text-slate-500">
                                    {authorityMatrix.teamLeadersItems.map((item, index) => (
                                        <ListItem key={index}>{item}</ListItem>
                                    ))}
                                </List>
                            </div>
                        </div>
                    </div>

                    {/* Financial & Purchase */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center font-black text-white text-xs">F</div>
                            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-sm text-amber-600">{authorityMatrix.financePurchaseTitle}</h4>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h5 className="font-bold text-xs mb-2">{authorityMatrix.adminFinanceTitle}</h5>
                                <List className="text-[10px] text-slate-500">
                                    {authorityMatrix.adminFinanceItems.map((item, index) => (
                                        <ListItem key={index}>{item}</ListItem>
                                    ))}
                                </List>
                            </div>
                            <div>
                                <h5 className="font-bold text-xs mb-2">{authorityMatrix.purchaseRespTitle}</h5>
                                <List className="text-[10px] text-slate-500">
                                    {authorityMatrix.purchaseRespItems.map((item, index) => (
                                        <ListItem key={index}>{item}</ListItem>
                                    ))}
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="financial-limits">
                <SubSectionHeader>{t('companyManual.sections.section2.subsections.financialLimits.sectionNumber')} {t('companyManual.sections.section2.subsections.financialLimits.title')}</SubSectionHeader>
                <div className="my-6">
                    <Table variant="document">
                        <TableRow isHeader>
                            <TableCell isHeader>{financialLimits.tableHeaders.position}</TableCell>
                            <TableCell isHeader>{financialLimits.tableHeaders.purchaseAuthority}</TableCell>
                            <TableCell isHeader>{financialLimits.tableHeaders.serviceCredit}</TableCell>
                            <TableCell isHeader>{financialLimits.tableHeaders.discountAuthority}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell isHeader><span className="font-bold uppercase text-[10px] text-slate-400">{financialLimits.positions.managers}</span></TableCell>
                            <TableCell><span className="font-black text-slate-900 dark:text-[#DC143C] italic">{financialLimits.values.unlimited}</span></TableCell>
                            <TableCell><span className="font-black text-slate-900 dark:text-[#DC143C] italic">{financialLimits.values.unlimited}</span></TableCell>
                            <TableCell><span className="font-black text-slate-900 dark:text-[#DC143C] italic">{financialLimits.values.unlimited}</span></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell isHeader><span className="font-bold uppercase text-[10px] text-slate-400">{financialLimits.positions.salesResponsible}</span></TableCell>
                            <TableCell><span className="font-black text-slate-900 dark:text-[#DC143C] italic">{financialLimits.values.unlimited}</span></TableCell>
                            <TableCell><span className="font-black text-slate-900 dark:text-[#DC143C] italic">{financialLimits.values.unlimited}</span></TableCell>
                            <TableCell>20%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell isHeader><span className="font-bold uppercase text-[10px] text-slate-400">{financialLimits.positions.opsResponsible}</span></TableCell>
                            <TableCell>1,000 TND</TableCell>
                            <TableCell>1,000 TND</TableCell>
                            <TableCell>{financialLimits.values.notApplicable}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell isHeader><span className="font-bold uppercase text-[10px] text-slate-400">{financialLimits.positions.adminFinance}</span></TableCell>
                            <TableCell>{financialLimits.values.perApprovedPO}</TableCell>
                            <TableCell>{financialLimits.values.notApplicable}</TableCell>
                            <TableCell>{financialLimits.values.notApplicable}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell isHeader><span className="font-bold uppercase text-[10px] text-slate-400">{financialLimits.positions.teamLeaders}</span></TableCell>
                            <TableCell>500 TND</TableCell>
                            <TableCell>500 TND</TableCell>
                            <TableCell>{financialLimits.values.notApplicable}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell isHeader><span className="font-bold uppercase text-[10px] text-slate-400">{financialLimits.positions.salesReps}</span></TableCell>
                            <TableCell>{financialLimits.values.notApplicable}</TableCell>
                            <TableCell>{financialLimits.values.notApplicable}</TableCell>
                            <TableCell>15%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell isHeader><span className="font-bold uppercase text-[10px] text-slate-400">{financialLimits.positions.technicians}</span></TableCell>
                            <TableCell>100 TND</TableCell>
                            <TableCell>{financialLimits.values.notApplicable}</TableCell>
                            <TableCell>{financialLimits.values.notApplicable}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell isHeader><span className="font-bold uppercase text-[10px] text-slate-400">{financialLimits.positions.warehouseResp}</span></TableCell>
                            <TableCell>500 TND</TableCell>
                            <TableCell>{financialLimits.values.notApplicable}</TableCell>
                            <TableCell>{financialLimits.values.notApplicable}</TableCell>
                        </TableRow>
                    </Table>
                </div>

                <h5 className="font-bold text-sm mb-3 mt-8">{financialLimits.approvalRequirementsTitle}</h5>
                <Table variant="document">
                    <TableRow isHeader>
                        <TableCell isHeader>{financialLimits.transactionTable.amount}</TableCell>
                        <TableCell isHeader>{financialLimits.transactionTable.approver}</TableCell>
                    </TableRow>
                    {financialLimits.transactions.map((transaction, index) => (
                        <TableRow key={index}>
                            <TableCell>{transaction.amount}</TableCell>
                            <TableCell>{transaction.approver}</TableCell>
                        </TableRow>
                    ))}
                </Table>

                <Blockquote type="important" title={financialLimits.multipleApprovalsTitle}>
                    <List className="text-xs">
                        {financialLimits.multipleApprovalsItems.map((item, index) => (
                            <ListItem key={index}>{item}</ListItem>
                        ))}
                    </List>
                </Blockquote>
            </SubSection>

            <SubSection id="signature-authority">
                <SubSectionHeader>{t('companyManual.sections.section2.subsections.signatureAuthority.sectionNumber')} {signatureAuthority.title}</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30">
                        <h5 className="font-black text-[10px] uppercase tracking-widest text-slate-400 mb-3 border-b pb-2">{signatureAuthority.contractsTitle}</h5>
                        <p className="text-xs mb-2"><strong>Full Authority:</strong> {signatureAuthority.contractsFull.replace('Full Authority: ', '')}</p>
                        <p className="text-xs"><strong>Limited Authority:</strong> {signatureAuthority.contractsLimited.replace('Limited Authority: ', '')}</p>
                    </div>
                    <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30">
                        <h5 className="font-black text-[10px] uppercase tracking-widest text-slate-400 mb-3 border-b pb-2">{signatureAuthority.bankingTitle}</h5>
                        <p className="text-xs mb-2">{signatureAuthority.bankingTransactions}</p>
                        <p className="text-xs">{signatureAuthority.checksValue}</p>
                    </div>
                    <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30">
                        <h5 className="font-black text-[10px] uppercase tracking-widest text-slate-400 mb-3 border-b pb-2">{signatureAuthority.billingTitle}</h5>
                        <p className="text-xs mb-2">{signatureAuthority.invoices}</p>
                        <p className="text-xs">{signatureAuthority.poApproval}</p>
                    </div>
                    <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30">
                        <h5 className="font-black text-[10px] uppercase tracking-widest text-slate-400 mb-3 border-b pb-2">{signatureAuthority.certificatesTitle}</h5>
                        <p className="text-xs mb-2">{signatureAuthority.workOrders}</p>
                        <p className="text-xs">{signatureAuthority.certification}</p>
                    </div>
                </div>
            </SubSection>
            <SubSection id="ethics-conduct">
                <SubSectionHeader>{t('companyManual.sections.section2.subsections.ethicsConduct.sectionNumber')} {t('companyManual.sections.section2.subsections.ethicsConduct.title')}</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="p-6 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-3xl">
                        <h5 className="font-black text-red-600 uppercase text-xs mb-3 tracking-widest">{ethicsConduct.prohibitedTitle}</h5>
                        <List className="text-xs text-red-800/80 dark:text-red-300">
                            {ethicsConduct.prohibitedItems.map((item, index) => (
                                <ListItem key={index}>{item}</ListItem>
                            ))}
                        </List>
                    </div>
                    <div className="p-6 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-3xl">
                        <h5 className="font-black text-green-600 uppercase text-xs mb-3 tracking-widest">{ethicsConduct.requiredTitle}</h5>
                        <List className="text-xs text-green-800/80 dark:text-green-300">
                            {ethicsConduct.requiredItems.map((item, index) => (
                                <ListItem key={index}>{item}</ListItem>
                            ))}
                        </List>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

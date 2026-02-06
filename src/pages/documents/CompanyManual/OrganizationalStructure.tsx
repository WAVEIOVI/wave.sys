import { useTranslation } from 'react-i18next';
import { SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import { Tree, TreeNode } from 'react-organizational-chart';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';

interface Contact { name: string; position: string; phone: string; email: string; responsibility: string; }
interface SalesRow { region: string; contact: string; phoneEmail: string; }

export default function OrganizationalStructure() {
    const { t } = useTranslation();
    
    const karimResponsibilities = t('companyManual.sections.section1.subsections.organizationStructure.content.karimResponsibilities', { returnObjects: true }) as string[];
    const najlaResponsibilities = t('companyManual.sections.section1.subsections.organizationStructure.content.najlaResponsibilities', { returnObjects: true }) as string[];
    const mohamedResponsibilities = t('companyManual.sections.section1.subsections.organizationStructure.content.mohamedResponsibilities', { returnObjects: true }) as string[];
    const kaisResponsibilities = t('companyManual.sections.section1.subsections.organizationStructure.content.kaisResponsibilities', { returnObjects: true }) as string[];
    const managementContacts = t('companyManual.sections.section1.subsections.keyContacts.content.managementContacts', { returnObjects: true }) as Contact[];
    const salesRows = t('companyManual.sections.section1.subsections.keyContacts.content.salesRows', { returnObjects: true }) as SalesRow[];
    
    return (
        <>
            <SubSection id="organization-structure">
                <SubSectionHeader>{t('companyManual.sections.section1.subsections.organizationStructure.sectionNumber')} {t('companyManual.sections.section1.subsections.organizationStructure.title')}</SubSectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                    {/* Management Team */}
                    <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-700 shadow-xl lg:col-span-2">
                        <h4 className="font-bold text-lg mb-6 text-secondary-400 uppercase tracking-widest">{t('companyManual.sections.section1.subsections.organizationStructure.content.managementTeam')}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <div className="text-xl font-black mb-1 italic">{t('companyManual.sections.section1.subsections.organizationStructure.content.karimBenSalem')}</div>
                                <div className="text-xs font-bold text-secondary-500 mb-3 uppercase underline">{t('companyManual.sections.section1.subsections.organizationStructure.content.karimRole')}</div>
                                <List className="text-slate-400 text-xs">
                                    {karimResponsibilities.map((item, index) => (
                                        <ListItem key={index}>{item}</ListItem>
                                    ))}
                                </List>
                            </div>
                            <div>
                                <div className="text-xl font-black mb-1 italic">{t('companyManual.sections.section1.subsections.organizationStructure.content.najlaBenSalem')}</div>
                                <div className="text-xs font-bold text-secondary-500 mb-3 uppercase underline">{t('companyManual.sections.section1.subsections.organizationStructure.content.najlaRole')}</div>
                                <List className="text-slate-400 text-xs">
                                    {najlaResponsibilities.map((item, index) => (
                                        <ListItem key={index}>{item}</ListItem>
                                    ))}
                                </List>
                            </div>
                        </div>
                    </div>

                    {/* Operations Leadership */}
                    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
                        <h4 className="font-bold text-primary-600 mb-4 uppercase text-xs tracking-wider">{t('companyManual.sections.section1.subsections.organizationStructure.content.operationsLeadership')}</h4>
                        <div className="text-lg font-bold mb-1">{t('companyManual.sections.section1.subsections.organizationStructure.content.mohamedChraiti')}</div>
                        <div className="text-[10px] font-black text-slate-500 mb-3 uppercase border-b pb-2">{t('companyManual.sections.section1.subsections.organizationStructure.content.mohamedRole')}</div>
                        <List className="text-[10px] text-slate-500 space-y-1">
                            {mohamedResponsibilities.map((item, index) => (
                                <ListItem key={index}>{item}</ListItem>
                            ))}
                        </List>
                    </div>
                </div>

                {/* Sales & Customer Service */}
                <div className="my-8">
                    <h4 className="font-bold text-sm mb-4 uppercase tracking-widest text-primary-600">{t('companyManual.sections.section1.subsections.organizationStructure.content.salesCustomerService')}</h4>
                    <div className="mb-4">
                        <p className="font-bold text-sm mb-2">{t('companyManual.sections.section1.subsections.organizationStructure.content.salesRepresentatives')}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <p className="font-bold text-xs">{t('companyManual.sections.section1.subsections.organizationStructure.content.mohamedChraitiSfax')}</p>
                            </div>
                            <div>
                                <p className="font-bold text-xs mb-1">{t('companyManual.sections.section1.subsections.organizationStructure.content.kaisKhairallah')}</p>
                                <List className="text-[10px] text-slate-500 ps-4 space-y-0.5">
                                    {kaisResponsibilities.map((item, index) => (
                                        <ListItem key={index}>{item}</ListItem>
                                    ))}
                                </List>
                            </div>
                        </div>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 italic border-s-4 border-primary-500 ps-3">
                        <strong>{t('companyManual.sections.section1.subsections.organizationStructure.content.note')}</strong> {t('companyManual.sections.section1.subsections.organizationStructure.content.noteText')}
                    </p>
                </div>

                {/* Sub-Roles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <div className="font-bold text-sm mb-1">{t('companyManual.sections.section1.subsections.organizationStructure.content.mohamedAliLenda')}</div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase mb-2 italic">{t('companyManual.sections.section1.subsections.organizationStructure.content.mohamedAliRole')}</div>
                        <p className="text-[10px] text-slate-500">{t('companyManual.sections.section1.subsections.organizationStructure.content.mohamedAliDesc')}</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <div className="font-bold text-sm mb-1">{t('companyManual.sections.section1.subsections.organizationStructure.content.helaDaoud')}</div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase mb-2 italic">{t('companyManual.sections.section1.subsections.organizationStructure.content.helaRole')}</div>
                        <p className="text-[10px] text-slate-500">{t('companyManual.sections.section1.subsections.organizationStructure.content.helaDesc')}</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <div className="font-bold text-sm mb-1">{t('companyManual.sections.section1.subsections.organizationStructure.content.kaisSalesTunis')}</div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase mb-2 italic">{t('companyManual.sections.section1.subsections.organizationStructure.content.kaisSalesRole')}</div>
                        <p className="text-[10px] text-slate-500">{t('companyManual.sections.section1.subsections.organizationStructure.content.kaisSalesDesc')}</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <div className="font-bold text-sm mb-1">{t('companyManual.sections.section1.subsections.organizationStructure.content.teamLeaders')}</div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase mb-2 italic">{t('companyManual.sections.section1.subsections.organizationStructure.content.teamLeadersRole')}</div>
                        <p className="text-[10px] text-slate-500">{t('companyManual.sections.section1.subsections.organizationStructure.content.teamLeadersDesc')}</p>
                    </div>
                </div>

                {/* VISUAL ORGANIGRAMS */}
                <div className="space-y-12 my-12">
                    <div className="p-8 bg-slate-50 dark:bg-slate-950/20 rounded-[3rem] border border-slate-200 dark:border-slate-800">
                        <h4 className="text-center font-black text-slate-900 dark:text-white uppercase tracking-tighter text-2xl mb-12 italic">{t('companyManual.sections.section1.subsections.organizationStructure.content.companyOrganigram')}</h4>
                        <div className="max-w-[1000px] mx-auto overflow-x-auto pb-8">
                            <Tree
                                lineWidth={'2px'}
                                lineColor={'#DC143C'}
                                lineBorderRadius={'10px'}
                                label={<PositionCard name={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.karimManager')} title={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.karimTitle')} />}
                            >
                                <TreeNode label={<PositionCard name={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.najlaCoManager')} title={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.najlaTitle')} />}>
                                    <div className="flex justify-center gap-4 mt-8">
                                        <TreeNode label={<PositionCard name={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.mohamedOps')} title={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.mohamedOpsTitle')} />} />
                                        <TreeNode label={<PositionCard name={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.salesReps')} title={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.salesTitle')} />} />
                                        <TreeNode label={<PositionCard name={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.financeAdmin')} title={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.financeTitle')} />} />
                                        <TreeNode label={<PositionCard name={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.collections')} title={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.collectionsTitle')} />} />
                                    </div>
                                </TreeNode>
                            </Tree>
                        </div>
                    </div>

                    <div className="p-8 bg-slate-900 border border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 text-slate-800 text-6xl font-black">TECH</div>
                        <h4 className="font-black text-secondary-500 uppercase tracking-tighter text-2xl mb-12 italic relative z-10">{t('companyManual.sections.section1.subsections.organizationStructure.content.technicalOrganigram')}</h4>
                        <div className="max-w-[900px] mx-auto overflow-x-auto pb-8 relative z-10">
                            <Tree
                                lineWidth={'2px'}
                                lineColor={'#00D4AA'}
                                lineBorderRadius={'10px'}
                                label={<PositionCard name={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.karimManager')} title={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.karimTitle')} isDark />}
                            >
                                <TreeNode label={<PositionCard name={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.najlaCoManager')} title={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.najlaTitleShort')} isDark />}>
                                    <TreeNode label={<PositionCard name={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.mohamedOps')} title={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.mohamedOpsTitleDark')} isDark />}>
                                        <div className="flex justify-center gap-4 mt-8">
                                            <TreeNode label={<PositionCard title={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.teamLeaderA')} isDark />} />
                                            <TreeNode label={<PositionCard title={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.workshopResp')} isDark />} />
                                            <TreeNode label={<PositionCard title={t('companyManual.sections.section1.subsections.organizationStructure.content.positions.teamLeaderB')} isDark />} />
                                        </div>
                                    </TreeNode>
                                </TreeNode>
                            </Tree>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="key-contacts">
                <SubSectionHeader>{t('companyManual.sections.section1.subsections.keyContacts.sectionNumber')} {t('companyManual.sections.section1.subsections.keyContacts.title')}</SubSectionHeader>
                <div className="space-y-8 my-6">
                    <h5 className="font-bold text-sm mb-2">{t('companyManual.sections.section1.subsections.keyContacts.content.generalInquiries')}</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        <strong>{t('companyManual.sections.section1.subsections.keyContacts.content.email')}:</strong> {t('companyManual.sections.section1.subsections.keyContacts.content.contactEmail')} · <strong>{t('companyManual.sections.section1.subsections.keyContacts.content.phone')}:</strong> {t('companyManual.sections.section1.subsections.keyContacts.content.contactPhone')} · <strong>{t('companyManual.sections.section1.subsections.keyContacts.content.website')}:</strong> {t('companyManual.sections.section1.subsections.keyContacts.content.websiteUrl')}
                    </p>

                    <h5 className="font-bold text-sm mb-2">{t('companyManual.sections.section1.subsections.keyContacts.content.management')}</h5>
                    <Table variant="document">
                        <TableRow isHeader>
                            <TableCell isHeader>{t('companyManual.sections.section1.subsections.keyContacts.content.tableHeaders.name')}</TableCell>
                            <TableCell isHeader>{t('companyManual.sections.section1.subsections.keyContacts.content.tableHeaders.position')}</TableCell>
                            <TableCell isHeader>{t('companyManual.sections.section1.subsections.keyContacts.content.tableHeaders.phone')}</TableCell>
                            <TableCell isHeader>{t('companyManual.sections.section1.subsections.keyContacts.content.tableHeaders.email')}</TableCell>
                            <TableCell isHeader>{t('companyManual.sections.section1.subsections.keyContacts.content.tableHeaders.responsibility')}</TableCell>
                        </TableRow>
                        {managementContacts.map((contact, index) => (
                            <TableRow key={index}>
                                <TableCell><span className="font-bold">{contact.name}</span></TableCell>
                                <TableCell>{contact.position}</TableCell>
                                <TableCell><span className="font-mono">{contact.phone}</span></TableCell>
                                <TableCell><span className="text-primary-600">{contact.email}</span></TableCell>
                                <TableCell>{contact.responsibility}</TableCell>
                            </TableRow>
                        ))}
                    </Table>

                    <h5 className="font-bold text-sm mb-2">{t('companyManual.sections.section1.subsections.keyContacts.content.salesContacts')}</h5>
                    <Table variant="document">
                        <TableRow isHeader>
                            <TableCell isHeader>{t('companyManual.sections.section1.subsections.keyContacts.content.salesTableHeaders.region')}</TableCell>
                            <TableCell isHeader>{t('companyManual.sections.section1.subsections.keyContacts.content.salesTableHeaders.contactPerson')}</TableCell>
                            <TableCell isHeader>{t('companyManual.sections.section1.subsections.keyContacts.content.salesTableHeaders.phoneEmail')}</TableCell>
                        </TableRow>
                        {salesRows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.region}</TableCell>
                                <TableCell>{row.contact}</TableCell>
                                <TableCell>{row.phoneEmail}</TableCell>
                            </TableRow>
                        ))}
                    </Table>

                    <h5 className="font-bold text-sm mb-2">{t('companyManual.sections.section1.subsections.keyContacts.content.emergencyService')}</h5>
                    <List className="mb-6">
                        <ListItem><strong>{t('companyManual.sections.section1.subsections.keyContacts.content.emergencyLine')}</strong> {t('companyManual.sections.section1.subsections.keyContacts.content.emergencyPhone')}</ListItem>
                        <ListItem><strong>{t('companyManual.sections.section1.subsections.keyContacts.content.emergencyEmail')}</strong> {t('companyManual.sections.section1.subsections.keyContacts.content.emergencyEmailValue')}</ListItem>
                    </List>

                    <h5 className="font-bold text-sm mb-2">{t('companyManual.sections.section1.subsections.keyContacts.content.customerPortal')}</h5>
                    <List className="mb-4">
                        <ListItem><strong>{t('companyManual.sections.section1.subsections.keyContacts.content.wavePlusApp')}</strong> {t('companyManual.sections.section1.subsections.keyContacts.content.wavePlusUrl')}</ListItem>
                        <ListItem>{t('companyManual.sections.section1.subsections.keyContacts.content.wavePlusDesc')}</ListItem>
                    </List>
                    <a href={t('companyManual.sections.section1.subsections.keyContacts.content.wavePlusUrl')} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-primary-600 text-white font-bold rounded-lg text-xs hover:bg-primary-700 transition-colors">{t('companyManual.sections.section1.subsections.keyContacts.content.launchWavePlus')}</a>
                </div>
            </SubSection>
        </>
    );
}

const PositionCard = ({ title, name, isDark = false }: { title: string; name?: string; isDark?: boolean }) => (
    <div className={`org-card inline-block ${isDark ? 'border-secondary-500 bg-slate-800' : ''}`}>
        <div className={`position-title ${isDark ? 'text-secondary-400' : ''}`}>{title}</div>
        {name && <div className={`person-name ${isDark ? 'text-slate-300' : ''}`}>{name}</div>}
    </div>
);

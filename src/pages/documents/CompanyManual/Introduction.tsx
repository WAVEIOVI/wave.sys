import { useTranslation } from 'react-i18next';
import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';
import Card from '../../../components/common/Card';
import { 
    MapPin,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';

interface CompanyProfileContent {
    companyIdentity: string;
    officialName: string;
    legalName: string;
    founded: string;
    yearsOfExperience: string;
    yearsOfExperienceValue: string;
    legalStructure: string;
    taxId: string;
    contactInfo: string;
    website: string;
    email: string;
    phone: string;
    phoneSfax: string;
    phoneTunis: string;
    locations: string;
    sfaxMainOffice: string;
    tunisBranchOffice: string;
    addressSfax: string;
    addressTunis: string;
    corporateOffice: string;
    productShowroom: string;
    mainWorkshop: string;
    mainWarehouse: string;
    branchOffice: string;
    secondaryWorkshop: string;
    secondaryWarehouse: string;
    servicesAvailable: string;
}

interface WhatWeDoContent {
    intro: string;
    fireSafetyEquipment: string;
    fireExtinguisherServices: string;
    salesInstallation: string;
    allTypes: string;
    allSizes: string;
    professionalInstallation: string;
    certificateProvided: string;
    inspectionMaintenance: string;
    annualInspection: string;
    semiAnnualInspection: string;
    quarterlyInspection: string;
    maintenanceRefilling: string;
    hydrostaticTesting: string;
    complianceDocs: string;
    fireHoseReel: string;
    hoseReelSales: string;
    hoseReelInspection: string;
    hoseReelTesting: string;
    hoseReelRepairs: string;
    fireDetection: string;
    detectorSales: string;
    alarmInstallation: string;
    detectionInspection: string;
    detectionRepair: string;
    otherFireEquipment: string;
    fireBlankets: string;
    fireCabinets: string;
    emergencyLighting: string;
    fireSignage: string;
    fireRatedDoors: string;
    ppeTitle: string;
    ppeIntro: string;
    headProtection: string;
    headHelmets: string;
    headBumpCaps: string;
    headAccessories: string;
    eyeProtection: string;
    eyeGlasses: string;
    eyeFaceShields: string;
    eyeWelding: string;
    eyePrescription: string;
    handProtection: string;
    handGloves: string;
    handChemical: string;
    handCut: string;
    handHeat: string;
    handDisposable: string;
    respiratoryProtection: string;
    respMasks: string;
    respHalfFull: string;
    respFilters: string;
    respEscape: string;
    hearingProtection: string;
    hearEarplugs: string;
    hearEarmuffs: string;
    hearHeadsets: string;
    fallProtection: string;
    fallHarnesses: string;
    fallLanyards: string;
    fallAnchors: string;
    fallArrest: string;
    fallRescue: string;
    footProtection: string;
    footBoots: string;
    footChemical: string;
    footSlip: string;
    footIndustrial: string;
    workwearTitle: string;
    industrialWorkwear: string;
    coveralls: string;
    workShirts: string;
    highVis: string;
    protectiveClothing: string;
    customBranding: string;
    logoEmbroidery: string;
    screenPrinting: string;
    heatTransfer: string;
    uniformPrograms: string;
    industryWorkwear: string;
    oilGas: string;
    construction: string;
    manufacturing: string;
    foodProcessing: string;
    healthcare: string;
    hospitality: string;
    safetySignageTitle: string;
    safetySigns: string;
    exitSigns: string;
    warningSigns: string;
    mandatorySigns: string;
    prohibitionSigns: string;
    fireSigns: string;
    customSignage: string;
    signProduction: string;
    signMaterials: string;
    signSizes: string;
    signInstallation: string;
    signCompliance: string;
    firstAidTitle: string;
    firstAidBoxes: string;
    firstAidRoom: string;
    emergencyShowers: string;
    spillKits: string;
    stretchers: string;
}

interface ServiceCommitmentContent {
    committedTo: string;
    qualityWorkmanship: string;
    qualityTechnicians: string;
    qualityStandards: string;
    qualityProducts: string;
    qualityDocs: string;
    qualityExpertise: string;
    quickResponse: string;
    responseInquiries: string;
    responseEmergencies: string;
    responseQuotations: string;
    responseAppointments: string;
    responseCoverage: string;
    professionalService: string;
    profStaff: string;
    profVehicles: string;
    profAppearance: string;
    profCommunication: string;
    profRespect: string;
    reliability: string;
    relCommitments: string;
    relProactive: string;
    relQuality: string;
    relWarranty: string;
    relReinspection: string;
    relEmergency: string;
    whatMakesDifferent: string;
    diffExperience: string;
    diffCertified: string;
    diffLocations: string;
    diffSolutions: string;
    diffProducts: string;
    diffTechnology: string;
    diffPortal: string;
}

interface CoverageFacilitiesContent {
    facilityCapabilities: string;
    sfaxFacility: string;
    tunisFacility: string;
    showroom: string;
    showroomFull: string;
    showroomPPE: string;
    showroomDemo: string;
    showroomConsultation: string;
    workshop: string;
    workshopRefilling: string;
    workshopRepairs: string;
    workshopQC: string;
    warehouse: string;
    warehouseExtinguishers: string;
    warehouseAgents: string;
    warehousePPE: string;
    warehouseWorkwear: string;
    warehouseSignage: string;
    warehouseParts: string;
    tunisWorkshop: string;
    tunisTesting: string;
    tunisStock: string;
    tunisMaterials: string;
    tunisPPE: string;
    tunisParts: string;
    geographicArea: string;
    serveTunisia: string;
    primaryCoverage: string;
    extendedCoverage: string;
    travelFeesApply: string;
}

export default function Introduction() {
    const { t } = useTranslation();
    
    const companyProfile = t('companyManual.sections.section1.subsections.companyProfile.content', { returnObjects: true }) as CompanyProfileContent;
    const whatWeDo = t('companyManual.sections.section1.subsections.whatWeDo.content', { returnObjects: true }) as WhatWeDoContent;
    const serviceCommitment = t('companyManual.sections.section1.subsections.serviceCommitment.content', { returnObjects: true }) as ServiceCommitmentContent;
    const coverageFacilities = t('companyManual.sections.section1.subsections.coverageFacilities.content', { returnObjects: true }) as CoverageFacilitiesContent;
    
    return (
        <Section id="part-a">
            <SectionHeader>{t('companyManual.sections.section1.title')}</SectionHeader>

            <SubSection id="company-profile">
                <SubSectionHeader>{t('companyManual.sections.section1.subsections.companyProfile.sectionNumber')} {t('companyManual.sections.section1.subsections.companyProfile.title')}</SubSectionHeader>
                
                {/* Company Overview Cards */}
                <div className="grid md:grid-cols-3 gap-4 my-6">
                    <Card variant="default"  className="md:col-span-2">
                        <div className="flex items-start gap-4">
                           
                            <div className="flex-1">
                                <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{companyProfile.companyIdentity}</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{t('companyManual.companyName')}</p>
                                <Table variant="document">
                                    <TableRow>
                                        <TableCell className="font-semibold w-1/3">{companyProfile.officialName}</TableCell>
                                        <TableCell>{t('companyManual.companyName')}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-semibold">{companyProfile.legalName}</TableCell>
                                        <TableCell>{t('companyManual.companyName')}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-semibold">{companyProfile.founded}</TableCell>
                                        <TableCell>2002</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-semibold">{companyProfile.yearsOfExperience}</TableCell>
                                        <TableCell><span className="inline-flex items-center gap-1">{companyProfile.yearsOfExperienceValue}</span></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-semibold">{companyProfile.legalStructure}</TableCell>
                                        <TableCell><span className="badge badge-primary">{ 'SARL'}</span></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-semibold">{companyProfile.taxId}</TableCell>
                                        <TableCell className="font-mono text-xs">0004567B/A/M/000</TableCell>
                                    </TableRow>
                                </Table>
                            </div>
                        </div>
                    </Card>
                    
                    {/* Contact Information Card */}
                    <Card variant="outlined" hover={false}>
                        <div className="flex items-center gap-2 mb-4">
                            
                            <h4 className="font-bold text-sm uppercase tracking-wider text-primary-600">{companyProfile.contactInfo}</h4>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <div>
                                    <p className="text-xs text-gray-500">{companyProfile.website}</p>
                                    <p className="text-sm font-medium">www.ssplus.tn</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div>
                                    <p className="text-xs text-gray-500">{companyProfile.email}</p>
                                    <p className="text-sm font-medium">contact@ssplus.tn</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div>
                                    <p className="text-xs text-gray-500">{companyProfile.phone}</p>
                                    <p className="text-sm font-medium">{companyProfile.phoneSfax}</p>
                                    <p className="text-sm font-medium">{companyProfile.phoneTunis}</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Locations Section */}
                <div className="mt-6">
                    <div className="flex items-center gap-2 mb-4">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-primary-600">{companyProfile.locations}</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Sfax Main Office */}
                        <Card variant="default" hover={true} className="relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 dark:bg-primary-900/10 rounded-bl-full -mr-4 -mt-4" />
                            <div className="relative">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-bold rounded">HQ</span>
                                    <h5 className="font-bold text-gray-900 dark:text-white">{companyProfile.sfaxMainOffice}</h5>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {companyProfile.addressSfax}
                                </p>
                                <div className="space-y-2">
                                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">{companyProfile.corporateOffice}</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">
                                            <ArrowRight className="w-3 h-3" />{companyProfile.productShowroom}
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">
                                            <ArrowRight className="w-3 h-3" />{companyProfile.mainWorkshop}
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">
                                            <ArrowRight className="w-3 h-3" />{companyProfile.mainWarehouse}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                        <ShieldCheck className="w-4 h-4 text-green-500" />
                                        {companyProfile.servicesAvailable}
                                    </p>
                                </div>
                            </div>
                        </Card>
                        
                        {/* Tunis Branch Office */}
                        <Card variant="default" hover={true} className="relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 dark:bg-primary-900/10 rounded-bl-full -mr-4 -mt-4" />
                            <div className="relative">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold rounded">BRANCH</span>
                                    <h5 className="font-bold text-gray-900 dark:text-white">{companyProfile.tunisBranchOffice}</h5>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {companyProfile.addressTunis}
                                </p>
                                <div className="space-y-2">
                                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">{companyProfile.branchOffice}</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">
                                            <ArrowRight className="w-3 h-3" />{companyProfile.secondaryWorkshop}
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">
                                            <ArrowRight className="w-3 h-3" />{companyProfile.secondaryWarehouse}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                        <ShieldCheck className="w-4 h-4 text-green-500" />
                                        {companyProfile.servicesAvailable}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </SubSection>

            <SubSection id="what-we-do">
                <SubSectionHeader>{t('companyManual.sections.section1.subsections.whatWeDo.sectionNumber')} {t('companyManual.sections.section1.subsections.whatWeDo.title')}</SubSectionHeader>
                <Paragraph>
                    {whatWeDo.intro}
                </Paragraph>

                <div className="space-y-6 mt-6">
                    <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="font-bold text-primary-600 mb-3">{whatWeDo.fireSafetyEquipment}</h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="font-bold text-sm mb-2">{whatWeDo.fireExtinguisherServices}</h5>
                                <List>
                                    <ListItem><strong>{whatWeDo.salesInstallation}</strong><ul className="list-disc ps-5 mt-1 space-y-0.5 text-sm"><li>{whatWeDo.allTypes}</li><li>{whatWeDo.allSizes}</li><li>{whatWeDo.professionalInstallation}</li><li>{whatWeDo.certificateProvided}</li></ul></ListItem>
                                    <ListItem><strong>{whatWeDo.inspectionMaintenance}</strong><ul className="list-disc ps-5 mt-1 space-y-0.5 text-sm"><li>{whatWeDo.annualInspection}</li><li>{whatWeDo.semiAnnualInspection}</li><li>{whatWeDo.quarterlyInspection}</li><li>{whatWeDo.maintenanceRefilling}</li><li>{whatWeDo.hydrostaticTesting}</li><li>{whatWeDo.complianceDocs}</li></ul></ListItem>
                                </List>
                            </div>
                            <div>
                                <h5 className="font-bold text-sm mb-2">{whatWeDo.fireHoseReel}</h5>
                                <List>
                                    <ListItem>{whatWeDo.hoseReelSales}</ListItem>
                                    <ListItem>{whatWeDo.hoseReelInspection}</ListItem>
                                    <ListItem>{whatWeDo.hoseReelTesting}</ListItem>
                                    <ListItem>{whatWeDo.hoseReelRepairs}</ListItem>
                                </List>
                            </div>
                            <div>
                                <h5 className="font-bold text-sm mb-2">{whatWeDo.fireDetection}</h5>
                                <List>
                                    <ListItem>{whatWeDo.detectorSales}</ListItem>
                                    <ListItem>{whatWeDo.alarmInstallation}</ListItem>
                                    <ListItem>{whatWeDo.detectionInspection}</ListItem>
                                    <ListItem>{whatWeDo.detectionRepair}</ListItem>
                                </List>
                            </div>
                            <div>
                                <h5 className="font-bold text-sm mb-2">{whatWeDo.otherFireEquipment}</h5>
                                <List>
                                    <ListItem>{whatWeDo.fireBlankets}</ListItem>
                                    <ListItem>{whatWeDo.fireCabinets}</ListItem>
                                    <ListItem>{whatWeDo.emergencyLighting}</ListItem>
                                    <ListItem>{whatWeDo.fireSignage}</ListItem>
                                    <ListItem>{whatWeDo.fireRatedDoors}</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="font-bold text-primary-600 mb-3">{whatWeDo.ppeTitle}</h4>
                        <p className="text-sm mb-4">{whatWeDo.ppeIntro}</p>
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div>
                                <h5 className="font-bold text-xs mb-1">{whatWeDo.headProtection}</h5>
                                <List>
                                    <ListItem>{whatWeDo.headHelmets}</ListItem>
                                    <ListItem>{whatWeDo.headBumpCaps}</ListItem>
                                    <ListItem>{whatWeDo.headAccessories}</ListItem>
                                </List>
                            </div>
                            <div>
                                <h5 className="font-bold text-xs mb-1">{whatWeDo.eyeProtection}</h5>
                                <List>
                                    <ListItem>{whatWeDo.eyeGlasses}</ListItem>
                                    <ListItem>{whatWeDo.eyeFaceShields}</ListItem>
                                    <ListItem>{whatWeDo.eyeWelding}</ListItem>
                                    <ListItem>{whatWeDo.eyePrescription}</ListItem>
                                </List>
                            </div>
                            <div>
                                <h5 className="font-bold text-xs mb-1">{whatWeDo.handProtection}</h5>
                                <List>
                                    <ListItem>{whatWeDo.handGloves}</ListItem>
                                    <ListItem>{whatWeDo.handChemical}</ListItem>
                                    <ListItem>{whatWeDo.handCut}</ListItem>
                                    <ListItem>{whatWeDo.handHeat}</ListItem>
                                    <ListItem>{whatWeDo.handDisposable}</ListItem>
                                </List>
                            </div>
                            <div>
                                <h5 className="font-bold text-xs mb-1">{whatWeDo.respiratoryProtection}</h5>
                                <List>
                                    <ListItem>{whatWeDo.respMasks}</ListItem>
                                    <ListItem>{whatWeDo.respHalfFull}</ListItem>
                                    <ListItem>{whatWeDo.respFilters}</ListItem>
                                    <ListItem>{whatWeDo.respEscape}</ListItem>
                                </List>
                            </div>
                            <div>
                                <h5 className="font-bold text-xs mb-1">{whatWeDo.hearingProtection}</h5>
                                <List>
                                    <ListItem>{whatWeDo.hearEarplugs}</ListItem>
                                    <ListItem>{whatWeDo.hearEarmuffs}</ListItem>
                                    <ListItem>{whatWeDo.hearHeadsets}</ListItem>
                                </List>
                            </div>
                            <div>
                                <h5 className="font-bold text-xs mb-1">{whatWeDo.fallProtection}</h5>
                                <List>
                                    <ListItem>{whatWeDo.fallHarnesses}</ListItem>
                                    <ListItem>{whatWeDo.fallLanyards}</ListItem>
                                    <ListItem>{whatWeDo.fallAnchors}</ListItem>
                                    <ListItem>{whatWeDo.fallArrest}</ListItem>
                                    <ListItem>{whatWeDo.fallRescue}</ListItem>
                                </List>
                            </div>
                            <div>
                                <h5 className="font-bold text-xs mb-1">{whatWeDo.footProtection}</h5>
                                <List>
                                    <ListItem>{whatWeDo.footBoots}</ListItem>
                                    <ListItem>{whatWeDo.footChemical}</ListItem>
                                    <ListItem>{whatWeDo.footSlip}</ListItem>
                                    <ListItem>{whatWeDo.footIndustrial}</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                            <h4 className="font-bold text-primary-600 mb-3">{whatWeDo.workwearTitle}</h4>
                            <h5 className="font-bold text-sm mb-2">{whatWeDo.industrialWorkwear}</h5>
                            <List>
                                <ListItem>{whatWeDo.coveralls}</ListItem>
                                <ListItem>{whatWeDo.workShirts}</ListItem>
                                <ListItem>{whatWeDo.highVis}</ListItem>
                                <ListItem>{whatWeDo.protectiveClothing}</ListItem>
                            </List>
                            <h5 className="font-bold text-sm mb-2 mt-4">{whatWeDo.customBranding}</h5>
                            <List>
                                <ListItem>{whatWeDo.logoEmbroidery}</ListItem>
                                <ListItem>{whatWeDo.screenPrinting}</ListItem>
                                <ListItem>{whatWeDo.heatTransfer}</ListItem>
                                <ListItem>{whatWeDo.uniformPrograms}</ListItem>
                            </List>
                            <h5 className="font-bold text-sm mb-2 mt-4">{whatWeDo.industryWorkwear}</h5>
                            <List>
                                <ListItem>{whatWeDo.oilGas}</ListItem>
                                <ListItem>{whatWeDo.construction}</ListItem>
                                <ListItem>{whatWeDo.manufacturing}</ListItem>
                                <ListItem>{whatWeDo.foodProcessing}</ListItem>
                                <ListItem>{whatWeDo.healthcare}</ListItem>
                                <ListItem>{whatWeDo.hospitality}</ListItem>
                            </List>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                            <h4 className="font-bold text-primary-600 mb-3">{whatWeDo.safetySignageTitle}</h4>
                            <h5 className="font-bold text-sm mb-2">{whatWeDo.safetySigns}</h5>
                            <List>
                                <ListItem>{whatWeDo.exitSigns}</ListItem>
                                <ListItem>{whatWeDo.warningSigns}</ListItem>
                                <ListItem>{whatWeDo.mandatorySigns}</ListItem>
                                <ListItem>{whatWeDo.prohibitionSigns}</ListItem>
                                <ListItem>{whatWeDo.fireSigns}</ListItem>
                                <ListItem>{whatWeDo.customSignage}</ListItem>
                            </List>
                            <h5 className="font-bold text-sm mb-2 mt-4">{whatWeDo.signProduction}</h5>
                            <List>
                                <ListItem>{whatWeDo.signMaterials}</ListItem>
                                <ListItem>{whatWeDo.signSizes}</ListItem>
                                <ListItem>{whatWeDo.signInstallation}</ListItem>
                                <ListItem>{whatWeDo.signCompliance}</ListItem>
                            </List>
                            <h5 className="font-bold text-sm mb-2 mt-4">{whatWeDo.firstAidTitle}</h5>
                            <List>
                                <ListItem>{whatWeDo.firstAidBoxes}</ListItem>
                                <ListItem>{whatWeDo.firstAidRoom}</ListItem>
                                <ListItem>{whatWeDo.emergencyShowers}</ListItem>
                                <ListItem>{whatWeDo.spillKits}</ListItem>
                                <ListItem>{whatWeDo.stretchers}</ListItem>
                            </List>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="service-commitment">
                <SubSectionHeader>{t('companyManual.sections.section1.subsections.serviceCommitment.sectionNumber')} {t('companyManual.sections.section1.subsections.serviceCommitment.title')}</SubSectionHeader>
                <Paragraph className="mb-6">{serviceCommitment.committedTo}</Paragraph>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <Blockquote type="success" title={serviceCommitment.qualityWorkmanship}>
                        <List>
                            <ListItem>{serviceCommitment.qualityTechnicians}</ListItem>
                            <ListItem>{serviceCommitment.qualityStandards}</ListItem>
                            <ListItem>{serviceCommitment.qualityProducts}</ListItem>
                            <ListItem>{serviceCommitment.qualityDocs}</ListItem>
                            <ListItem>{serviceCommitment.qualityExpertise}</ListItem>
                        </List>
                    </Blockquote>
                    <Blockquote type="info" title={serviceCommitment.quickResponse}>
                        <List>
                            <ListItem>{serviceCommitment.responseInquiries}</ListItem>
                            <ListItem>{serviceCommitment.responseEmergencies}</ListItem>
                            <ListItem>{serviceCommitment.responseQuotations}</ListItem>
                            <ListItem>{serviceCommitment.responseAppointments}</ListItem>
                            <ListItem>{serviceCommitment.responseCoverage}</ListItem>
                        </List>
                    </Blockquote>
                    <Blockquote type="note" title={serviceCommitment.professionalService}>
                        <List>
                            <ListItem>{serviceCommitment.profStaff}</ListItem>
                            <ListItem>{serviceCommitment.profVehicles}</ListItem>
                            <ListItem>{serviceCommitment.profAppearance}</ListItem>
                            <ListItem>{serviceCommitment.profCommunication}</ListItem>
                            <ListItem>{serviceCommitment.profRespect}</ListItem>
                        </List>
                    </Blockquote>
                    <Blockquote type="warning" title={serviceCommitment.reliability}>
                        <List>
                            <ListItem>{serviceCommitment.relCommitments}</ListItem>
                            <ListItem>{serviceCommitment.relProactive}</ListItem>
                            <ListItem>{serviceCommitment.relQuality}</ListItem>
                            <ListItem>{serviceCommitment.relWarranty}</ListItem>
                            <ListItem>{serviceCommitment.relReinspection}</ListItem>
                            <ListItem>{serviceCommitment.relEmergency}</ListItem>
                        </List>
                    </Blockquote>
                </div>
                <div className="p-4 bg-primary-50 dark:bg-primary-900/10 rounded-xl border border-primary-100 dark:border-primary-800">
                    <h5 className="font-bold text-center mb-4 text-primary-700 dark:text-primary-300">{serviceCommitment.whatMakesDifferent}</h5>
                    <List className="space-y-2 text-sm">
                        <ListItem>✓ <strong>{serviceCommitment.diffExperience}</strong></ListItem>
                        <ListItem>✓ <strong>{serviceCommitment.diffCertified}</strong></ListItem>
                        <ListItem>✓ <strong>{serviceCommitment.diffLocations}</strong></ListItem>
                        <ListItem>✓ <strong>{serviceCommitment.diffSolutions}</strong></ListItem>
                        <ListItem>✓ <strong>{serviceCommitment.diffProducts}</strong></ListItem>
                        <ListItem>✓ <strong>{serviceCommitment.diffTechnology}</strong></ListItem>
                        <ListItem>✓ <strong>{serviceCommitment.diffPortal}</strong></ListItem>
                    </List>
                </div>
            </SubSection>

            <SubSection id="coverage-facilities">
                <SubSectionHeader>{t('companyManual.sections.section1.subsections.coverageFacilities.sectionNumber')} {t('companyManual.sections.section1.subsections.coverageFacilities.title')}</SubSectionHeader>
                <div className="grid md:grid-cols-2 gap-8 mt-4">
                    <div>
                        <h4 className="font-bold mb-4">{coverageFacilities.facilityCapabilities}</h4>
                        <div className="space-y-6">
                            <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <h5 className="font-bold text-sm mb-2">{coverageFacilities.sfaxFacility}</h5>
                                <h6 className="font-semibold text-xs mb-1">{coverageFacilities.showroom}</h6>
                                <List>
                                    <ListItem>{coverageFacilities.showroomFull}</ListItem>
                                    <ListItem>{coverageFacilities.showroomPPE}</ListItem>
                                    <ListItem>{coverageFacilities.showroomDemo}</ListItem>
                                    <ListItem>{coverageFacilities.showroomConsultation}</ListItem>
                                </List>
                                <h6 className="font-semibold text-xs mb-1 mt-3">{coverageFacilities.workshop}</h6>
                                <List>
                                    <ListItem>{coverageFacilities.workshopRefilling}</ListItem>
                                    <ListItem>{coverageFacilities.workshopRepairs}</ListItem>
                                    <ListItem>{coverageFacilities.workshopQC}</ListItem>
                                </List>
                                <h6 className="font-semibold text-xs mb-1 mt-3">{coverageFacilities.warehouse}</h6>
                                <List>
                                    <ListItem>{coverageFacilities.warehouseExtinguishers}</ListItem>
                                    <ListItem>{coverageFacilities.warehouseAgents}</ListItem>
                                    <ListItem>{coverageFacilities.warehousePPE}</ListItem>
                                    <ListItem>{coverageFacilities.warehouseWorkwear}</ListItem>
                                    <ListItem>{coverageFacilities.warehouseSignage}</ListItem>
                                    <ListItem>{coverageFacilities.warehouseParts}</ListItem>
                                </List>
                            </div>
                            <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <h5 className="font-bold text-sm mb-2">{coverageFacilities.tunisFacility}</h5>
                                <h6 className="font-semibold text-xs mb-1">{coverageFacilities.workshop}</h6>
                                <List>
                                    <ListItem>{coverageFacilities.tunisWorkshop}</ListItem>
                                    <ListItem>{coverageFacilities.tunisTesting}</ListItem>
                                </List>
                                <h6 className="font-semibold text-xs mb-1 mt-3">{coverageFacilities.warehouse}</h6>
                                <List>
                                    <ListItem>{coverageFacilities.tunisStock}</ListItem>
                                    <ListItem>{coverageFacilities.tunisMaterials}</ListItem>
                                    <ListItem>{coverageFacilities.tunisPPE}</ListItem>
                                    <ListItem>{coverageFacilities.tunisParts}</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">{coverageFacilities.geographicArea}</h4>
                        <p className="font-bold text-sm mb-2">{coverageFacilities.serveTunisia}</p>
                        <List>
                            <ListItem><strong>{coverageFacilities.primaryCoverage}</strong></ListItem>
                            <ListItem><strong>{coverageFacilities.extendedCoverage}</strong></ListItem>
                            <ListItem><strong>{coverageFacilities.travelFeesApply}</strong></ListItem>
                        </List>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

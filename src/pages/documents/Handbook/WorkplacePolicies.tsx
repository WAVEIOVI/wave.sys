import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import List, { ListItem } from '../../../components/document-elements/List';
import Paragraph from '../../../components/document-elements/Paragraph';

export default function WorkplacePolicies() {
    return (
        <Section id="section-5">
            <SectionHeader>SECTION 5: WORKPLACE POLICIES</SectionHeader>

            <SubSection id="code-of-conduct">
                <SubSectionHeader>5.1 Code of Conduct</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h4 className="font-bold text-primary-600 mb-3">We Expect You To:</h4>
                        <div className="space-y-4">
                            <div>
                                <span className="font-bold text-sm block">✅ Be Professional</span>
                                <List className="text-xs mt-1">
                                    <ListItem>Represent SS+ with pride at all times</ListItem>
                                    <ListItem>Courteous and respectful to everyone</ListItem>
                                    <ListItem>Honest and ethical in all dealings</ListItem>
                                    <ListItem>Maintain appropriate business relationships</ListItem>
                                </List>
                            </div>
                            <div>
                                <span className="font-bold text-sm block">✅ Work Hard</span>
                                <List className="text-xs mt-1">
                                    <ListItem>Give your best effort every day</ListItem>
                                    <ListItem>Meet commitments and deadlines</ListItem>
                                    <ListItem>Take responsibility for your work</ListItem>
                                </List>
                            </div>
                            <div>
                                <span className="font-bold text-sm block">✅ Be a Team Player</span>
                                <List className="text-xs mt-1">
                                    <ListItem>Help colleagues when needed</ListItem>
                                    <ListItem>Share information and knowledge</ListItem>
                                    <ListItem>No gossip, drama, or negativity</ListItem>
                                </List>
                            </div>
                            <div>
                                <span className="font-bold text-sm block">✅ Follow the Rules</span>
                                <List className="text-xs mt-1">
                                    <ListItem>Company policies and safety protocols</ListItem>
                                    <ListItem>Customer site requirements</ListItem>
                                    <ListItem>Tunisian laws and regulations</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                            <div className="space-y-4">
                                <div>
                                    <span className="font-bold text-sm block">✅ Be Honest</span>
                                    <List className="text-xs mt-1">
                                        <ListItem>Tell the truth always</ListItem>
                                        <ListItem>Admit mistakes and learn from them</ListItem>
                                        <ListItem>Don't falsify any documents</ListItem>
                                    </List>
                                </div>
                                <div>
                                    <span className="font-bold text-sm block">✅ Respect Everyone</span>
                                    <List className="text-xs mt-1">
                                        <ListItem>No harassment, discrimination, or bullying</ListItem>
                                        <ListItem>Professional communication</ListItem>
                                        <ListItem>Value diversity</ListItem>
                                    </List>
                                </div>
                                <div>
                                    <span className="font-bold text-sm block">✅ Be Accountable</span>
                                    <List className="text-xs mt-1">
                                        <ListItem>Own your actions and results</ListItem>
                                        <ListItem>Deliver on promises</ListItem>
                                        <ListItem>Fix mistakes promptly</ListItem>
                                        <ListItem>Continuous improvement mindset</ListItem>
                                    </List>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border-l-4 border-primary-500">
                            <Paragraph className="text-sm italic">
                                Our reputation is built on **trust**. Any breach of integrity, theft, or serious misconduct will result in disciplinary action up to termination.
                            </Paragraph>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="dress-code">
                <SubSectionHeader>5.2 Dress Code & Uniforms</SubSectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                    <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-lg mb-4 text-blue-700 dark:text-blue-400">🛠️ Technical Staff</h5>
                        <div className="space-y-4">
                            <div>
                                <span className="font-bold text-xs uppercase text-slate-500 block mb-2">Uniform Required</span>
                                <List className="text-sm">
                                    <ListItem>SS+ branded shirt/polo (provided - keep clean!)</ListItem>
                                    <ListItem>Clean work trousers (dark blue or black)</ListItem>
                                    <ListItem>Safety shoes (steel toe, closed, slip-resistant)</ListItem>
                                    <ListItem>ID badge visible at all times</ListItem>
                                    <ListItem>PPE as required (hard hat, vest, gloves)</ListItem>
                                </List>
                            </div>
                            <div>
                                <span className="font-bold text-xs uppercase text-slate-500 block mb-2">Grooming</span>
                                <List className="text-sm">
                                    <ListItem>Clean and well-groomed appearance</ListItem>
                                    <ListItem>Facial hair trimmed and neat</ListItem>
                                    <ListItem>Hair tied back if long (safety requirement)</ListItem>
                                    <ListItem>Minimal jewelry (safety hazard)</ListItem>
                                    <ListItem>No offensive tattoos visible</ListItem>
                                </List>
                            </div>
                            <div className="bg-red-50 dark:bg-red-900/10 p-3 rounded-lg border border-red-100 dark:border-red-900">
                                <span className="font-bold text-xs text-red-700 dark:text-red-400 block mb-1">❌ NOT Permitted:</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">
                                    Torn/stained clothing, shorts, sandals, offensive logos, excessive perfume/cologne, slovenly appearance.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl">
                            <h5 className="font-bold text-lg mb-4 text-purple-700 dark:text-purple-400">🤝 Sales & Office</h5>
                            <div className="space-y-4">
                                <div>
                                    <span className="font-bold text-xs uppercase text-slate-500 block mb-2">Sales Representatives</span>
                                    <List className="text-sm">
                                        <ListItem>**Men:** Dress shirt, trousers, dress shoes</ListItem>
                                        <ListItem>**Women:** Professional dress/blouse, professional shoes</ListItem>
                                        <ListItem>SS+ polo allowed for site visits</ListItem>
                                        <ListItem>Business formal for important meetings</ListItem>
                                    </List>
                                </div>
                                <div>
                                    <span className="font-bold text-xs uppercase text-slate-500 block mb-2">Office Staff (Business Casual)</span>
                                    <List className="text-sm">
                                        <ListItem>Collared shirt/blouse, trousers/skirt</ListItem>
                                        <ListItem>Smart casual acceptable most days</ListItem>
                                        <ListItem>No jeans unless Friday</ListItem>
                                    </List>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                                    <span className="font-bold text-xs block mb-1">Fridays - Casual Day:</span>
                                    <p className="text-xs text-slate-600 dark:text-slate-400">
                                        Relaxed dress code (clean jeans/polo) allowed. Exception: If customer-facing appointment scheduled, must dress professionally.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                            <h5 className="font-bold text-sm mb-2">Uniform Provision & Care</h5>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <span className="font-bold text-xs block mb-1">Company Provides:</span>
                                    <ul className="text-xs list-disc pl-3 text-slate-600 dark:text-slate-400">
                                        <li>3-5 shirts/year</li>
                                        <li>Safety shoes annually</li>
                                        <li>Replacements for wear/tear</li>
                                    </ul>
                                </div>
                                <div>
                                    <span className="font-bold text-xs block mb-1">Your Duty:</span>
                                    <ul className="text-xs list-disc pl-3 text-slate-600 dark:text-slate-400">
                                        <li>Launder regularly</li>
                                        <li>Maintain condition</li>
                                        <li>Return upon separation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="technology">
                <SubSectionHeader>5.3 Mobile Phones & Technology</SubSectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border-t-4 border-green-500 shadow-sm">
                        <h5 className="font-bold text-sm uppercase tracking-wide text-green-700 dark:text-green-400 mb-3">✅ Permitted Personal Use</h5>
                        <List className="text-sm">
                            <ListItem>Brief personal calls during breaks</ListItem>
                            <ListItem>Emergency calls anytime (family, urgent)</ListItem>
                            <ListItem>Checking messages during breaks</ListItem>
                            <ListItem>Use for work if needed (GPS, photos)</ListItem>
                        </List>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border-t-4 border-red-500 shadow-sm">
                        <h5 className="font-bold text-sm uppercase tracking-wide text-red-700 dark:text-red-400 mb-3">❌ NOT Permitted</h5>
                        <List className="text-sm">
                            <ListItem>Extended personal calls during work time</ListItem>
                            <ListItem>Social media/gaming/entertainment during work</ListItem>
                            <ListItem>Phone use while driving (hands-free only!)</ListItem>
                            <ListItem>Phone use during customer interactions</ListItem>
                            <ListItem>Phone use during meetings or training sessions</ListItem>
                        </List>
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 mb-6">
                    <h5 className="font-bold mb-2">Company Provided Devices</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <span className="font-bold text-xs uppercase text-slate-500 block mb-2">Mobile Phones</span>
                            <List className="text-xs">
                                <ListItem>**Primary purpose:** Business use (WAVE PLUS, calls)</ListItem>
                                <ListItem>**Personal use:** Allowed within reason</ListItem>
                                <ListItem>**Prohibited:** Excessive use, inappropriate content</ListItem>
                                <ListItem>**Care:** Keep charged, protect from damage</ListItem>
                                <ListItem>Company may monitor usage/data</ListItem>
                            </List>
                        </div>
                        <div>
                            <span className="font-bold text-xs uppercase text-slate-500 block mb-2">Computers & Internet</span>
                            <List className="text-xs">
                                <ListItem>**Acceptable:** Work tasks, brief personal use (breaks)</ListItem>
                                <ListItem>**Prohibited:** Inappropriate content, illegal downloads, excessive social media</ListItem>
                                <ListItem>**Security:** Protect passwords, lock screen when away</ListItem>
                                <ListItem>No expectation of privacy on company systems</ListItem>
                            </List>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h6 className="font-bold text-sm mb-2">📸 Photography & Recording</h6>
                    <Paragraph className="text-xs mb-0">
                        **At Customer Sites:** Only with explicit permission for work. **Confidential Info:** Never photograph customer data, pricing, or proprietary info. **Colleagues:** Ask permission first.
                    </Paragraph>
                </div>
            </SubSection>

            <SubSection id="social-media">
                <SubSectionHeader>5.4 Social Media Policy</SubSectionHeader>
                <Paragraph className="mb-4">
                    Your personal accounts are your own, but your posts can affect your professional reputation and the company's image.
                </Paragraph>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30">
                            <h6 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ Never Share (Confidentiality)</h6>
                            <List className="text-xs">
                                <ListItem>Customer info (names, projects, issues)</ListItem>
                                <ListItem>Proprietary SS+ info (pricing, margins, strategies)</ListItem>
                                <ListItem>Photos of customer sites without permission</ListItem>
                                <ListItem>Internal employment matters (salaries, discipline)</ListItem>
                            </List>
                        </div>
                        <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/30">
                            <h6 className="font-bold text-orange-700 dark:text-orange-400 mb-2">⚠️ Professionalism</h6>
                            <List className="text-xs">
                                <ListItem>Don't badmouth SS+, management, or colleagues</ListItem>
                                <ListItem>No offensive/discriminatory posts</ListItem>
                                <ListItem>Separate personal from professional (opinions are your own)</ListItem>
                            </List>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/30 h-full">
                            <h6 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ Positive Engagement</h6>
                            <Paragraph className="text-sm">
                                We encourage you to share positive news, celebrate team wins, and build your professional brand (especially on LinkedIn).
                            </Paragraph>
                            <div className="mt-4 p-3 bg-white dark:bg-slate-900 rounded-lg text-xs italic border border-green-200 dark:border-green-800">
                                "Think Before You Post: The internet is permanent. Would you want your manager or customer to see it?"
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="smoking">
                <SubSectionHeader>5.5 Smoking & Substance Policy</SubSectionHeader>

                <div className="mb-6">
                    <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="text-3xl">🚭</div>
                        <div className="flex-1">
                            <h5 className="font-bold text-sm uppercase mb-1">Smoking Policy (Includes Vaping)</h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                                <div>
                                    <span className="font-bold text-red-600 block">PROHIBITED:</span>
                                    Inside all buildings, company vehicles, customer sites, and while wearing uniform in public view.
                                </div>
                                <div>
                                    <span className="font-bold text-green-600 block">PERMITTED:</span>
                                    Designated outdoor areas only, during breaks, away from non-smokers.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 bg-red-50 dark:bg-red-900/10 rounded-xl border-l-4 border-red-500">
                    <div className="flex items-start gap-3">
                        <span className="text-2xl">🚫</span>
                        <div>
                            <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">Alcohol & Drugs: ZERO TOLERANCE</h5>
                            <Paragraph className="text-sm mb-2">
                                Strictly prohibited to possess, use, or be under influence of alcohol or illegal drugs at work. Reporting to work impaired is gross misconduct.
                            </Paragraph>
                            <List className="text-xs">
                                <ListItem>**Testing:** Company may require testing if reasonable suspicion.</ListItem>
                                <ListItem>**Consequences:** Suspension, termination, possible legal action.</ListItem>
                                <ListItem>**Prescription Meds:** Allowed if legal. Notify manager if safety affected.</ListItem>
                            </List>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="vehicles">
                <SubSectionHeader>5.6 Vehicle Use Policy</SubSectionHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-3 text-blue-600 dark:text-blue-400">Authorized Use Only</h5>
                        <div className="space-y-3">
                            <div>
                                <span className="font-bold text-xs text-green-600 block">✅ FOR:</span>
                                <p className="text-xs">Business travel, equipment transport, authorized commute (mgrs).</p>
                            </div>
                            <div>
                                <span className="font-bold text-xs text-red-600 block">❌ NOT FOR:</span>
                                <p className="text-xs">Personal errands, vacations, unauthorized passengers, side jobs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                        <h5 className="font-bold text-sm mb-3">Driver Responsibilities</h5>
                        <List className="text-xs">
                            <ListItem>Valid license + clean driving record + authorization</ListItem>
                            <ListItem>Daily vehicle inspection (checklist)</ListItem>
                            <ListItem>Cleanliness (inside/out) and maintenance reporting</ListItem>
                            <ListItem>Accurate mileage/fuel logs</ListItem>
                            <ListItem>**Fines:** You pay your own traffic/parking fines.</ListItem>
                        </List>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-900">
                        <h5 className="font-bold text-red-800 dark:text-red-400 text-sm mb-3">Accident Protocol (Within 1 Hour)</h5>
                        <ol className="list-decimal pl-5 space-y-2 text-xs">
                            <li><strong>Ensure Safety:</strong> Check injuries, move to safety.</li>
                            <li><strong>Notify Police:</strong> If injury, damage, or dispute.</li>
                            <li><strong>Exchange Info:</strong> Name, phone, insurance.</li>
                            <li><strong>Take Photos:</strong> Damage, scene, vehicles.</li>
                            <li><strong>NOTIFY OPS MANAGER:</strong> Within 1 hour (Critical!).</li>
                            <li><strong>Report:</strong> Complete form same day.</li>
                            <li><strong>Do NOT admit fault:</strong> Let insurance handle it.</li>
                        </ol>
                    </div>

                    <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h5 className="font-bold text-sm mb-3">Maintenance & Fuel</h5>
                        <div className="space-y-3">
                            <div>
                                <span className="font-bold text-xs block mb-1">Company Provides:</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">Routine maintenance, insurance, registration, fuel for business.</p>
                            </div>
                            <div>
                                <span className="font-bold text-xs block mb-1">Fuel Cards:</span>
                                <List className="text-xs">
                                    <ListItem>Use ONLY for assigned vehicle</ListItem>
                                    <ListItem>Keep all receipts for reporting</ListItem>
                                    <ListItem>**Misuse = Theft:** Immediate termination</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="confidentiality">
                <SubSectionHeader>5.7 Confidentiality & Non-Compete</SubSectionHeader>

                <div className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-xl border-l-4 border-yellow-400 mb-6">
                    <h5 className="font-bold text-yellow-800 dark:text-yellow-200 text-sm mb-3">Strictly Confidential Information</h5>
                    <Paragraph className="text-sm mb-3">
                        Customer lists, pricing structures, discounts, profit margins, strategies, and employee data are proprietary.
                    </Paragraph>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                            <span className="font-bold block mb-1">You MUST:</span>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>Protect info at all times</li>
                                <li>Secure documents/passwords</li>
                                <li>Return all data upon separation</li>
                                <li>Maintain obligation indefinitely</li>
                            </ul>
                        </div>
                        <div>
                            <span className="font-bold block mb-1">You MUST NOT:</span>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>Share with competitors/outsiders</li>
                                <li>Use for personal benefit</li>
                                <li>Take documents when leaving</li>
                                <li>Discuss on social media</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl">
                    <h5 className="font-bold text-primary-600 text-sm mb-3 uppercase tracking-wide">Non-Compete & Non-Solicitation</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h6 className="font-bold text-xs mb-2">Non-Competition (Key Roles)</h6>
                            <Paragraph className="text-xs">
                                Management, senior sales, and specialized tech staff may be subject to non-compete agreements (6-12 months, Sfax/Tunis). Prohibits working for direct competitors in similar roles.
                            </Paragraph>
                        </div>
                        <div>
                            <h6 className="font-bold text-xs mb-2">Non-Solicitation (Everyone)</h6>
                            <Paragraph className="text-xs">
                                Even without a formal non-compete, you **cannot solicit SS+ customers** you served or **recruit SS+ employees** to your new employer for 12-24 months after leaving.
                            </Paragraph>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}

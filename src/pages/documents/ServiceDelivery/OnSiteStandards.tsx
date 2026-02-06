import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import List, { ListItem } from '../../../components/document-elements/List';
import Table, { TableRow, TableCell } from '../../../components/document-elements/Table';
import Blockquote from '../../../components/document-elements/Blockquote';

export default function OnSiteStandards() {
    return (
        <Section id="section-4">
            <SectionHeader>SECTION 4: ON-SITE SERVICE STANDARDS</SectionHeader>

            <SubSection id="site-access-safety">
                <SubSectionHeader>4.1 CUSTOMER SITE ACCESS & SAFETY</SubSectionHeader>
                <div className="space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                        {/* Pre-Arrival */}
                        <div className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm">
                            <h4 className="text-xs font-black uppercase tracking-widest text-primary-600 mb-6 border-b pb-2">Pre-Arrival Preparation</h4>
                            <div className="space-y-6 text-xs">
                                <div>
                                    <p className="font-bold text-slate-800 dark:text-slate-200 mb-2 italic underline">1. Confirm Appointment (Day Before/Morning Of):</p>
                                    <List className="space-y-1 text-slate-500">
                                        <ListItem>Call customer contact person; confirm date, time, and location.</ListItem>
                                        <ListItem>Confirm site access requirements & availability of contact person.</ListItem>
                                        <ListItem>Notify immediately if running late.</ListItem>
                                    </List>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800 dark:text-slate-200 mb-2 italic underline">2. Review Site Requirements:</p>
                                    <List className="space-y-1 text-slate-500">
                                        <ListItem>Check WAVE PLUS for sign-in procedures & PPE needs.</ListItem>
                                        <ListItem>Confirm required permits (hot work, confined space, etc.).</ListItem>
                                        <ListItem>Check parking location & special rules (no photos, etc.).</ListItem>
                                    </List>
                                </div>
                            </div>
                        </div>

                        {/* Arrival */}
                        <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] italic shadow-inner">
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 border-b dark:border-slate-800 pb-2">Arrival Procedure</h4>
                            <List className="text-[11px] space-y-3 text-slate-600 dark:text-slate-400">
                                <ListItem><strong>Park Appropriately:</strong> Follow instructions; don't block exits or loading zones. Brand visibility matters.</ListItem>
                                <ListItem><strong>Security Check-In:</strong> Report to reception, state purpose clearly, and wear visitor badge visibly.</ListItem>
                                <ListItem><strong>Contact Person:</strong> Ask reception to notify contact; wait in designated area only.</ListItem>
                                <ListItem><strong>Initial Meeting:</strong> Greet professionally, confirm scope, ask about site changes, and request access/escort.</ListItem>
                            </List>
                        </div>
                    </div>

                    {/* Site Safety Rules */}
                    <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3.5rem] italic text-white flex flex-col items-center">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px w-12 bg-primary-500"></div>
                            <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-500 italic">General Safety Principles</h6>
                            <div className="h-px w-12 bg-primary-500"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-xs">
                            <div className="space-y-2">
                                <span className="text-primary-400 font-black text-xs block uppercase">Safety First</span>
                                <p className="text-slate-400">Don't take shortcuts that compromise safety.</p>
                            </div>
                            <div className="space-y-2">
                                <span className="text-primary-400 font-black text-xs block uppercase">When in Doubt</span>
                                <p className="text-slate-400">Ask the customer contact or immediately stop work.</p>
                            </div>
                            <div className="space-y-2">
                                <span className="text-primary-400 font-black text-xs block uppercase">Customer's Rules</span>
                                <p className="text-slate-400">Follow all customer safety policies, even if different from SS+.</p>
                            </div>
                        </div>
                    </div>

                    {/* PPE & Site Rules */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8 text-xs">
                        <div className="lg:col-span-2 p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3.5rem] shadow-xl italic relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary-500/10 transition-colors"></div>
                            <h4 className="text-[10px] font-black uppercase text-slate-400 mb-8 tracking-widest border-b pb-2">PPE Requirements</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h5 className="font-bold text-xs text-primary-600">Minimum (Always):</h5>
                                    <List className="space-y-1 text-slate-500">
                                        <ListItem>Safety shoes/boots (slip-resistant).</ListItem>
                                        <ListItem>SS+ Uniform or Professional attire.</ListItem>
                                        <ListItem>ID Badge visible at all times.</ListItem>
                                    </List>
                                </div>
                                <div className="space-y-4">
                                    <h5 className="font-bold text-xs text-slate-400">Additional (As Needed):</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {["Hard Hat", "Safety Glasses", "Hi-Vis Vest", "Ear Protection", "Gloves", "Respirator"].map((item, i) => (
                                            <span key={i} className="px-3 py-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-[9px] text-slate-500">{item}</span>
                                        ))}
                                    </div>
                                    <p className="text-[9px] text-slate-400 italic mt-2 font-bold leading-tight uppercase tracking-tighter">Carry basic PPE in vehicle. Comply or don't proceed.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-inner font-serif italic flex flex-col justify-center">
                            <h4 className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest border-b dark:border-slate-800 pb-2">Site-Specific Rules</h4>
                            <p className="text-[10px] text-slate-500 leading-relaxed space-y-1">
                                Follow Customer Rules For: Smoking areas, Food/Drink restrictions, Mobile use, Photography permissions, and Emergency Assembly Points.
                                <br /><br />
                                <strong>Industrial Permits:</strong> Know when to ask for Hot Work, Lock-out/Tag-out, or Confined Space permits.
                            </p>
                        </div>
                    </div>

                    {/* Unsafe Conditions */}
                    <div className="p-10 bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900/50 rounded-[4rem] italic group hover:border-red-500/50 transition-colors">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="p-4 bg-red-100 dark:bg-red-900/40 rounded-3xl text-red-600 font-black text-xl italic group-hover:scale-110 transition-transform shadow-sm">!</div>
                            <div>
                                <h6 className="text-[10px] font-black text-red-600 uppercase tracking-widest">Unsafe Conditions handling</h6>
                                <p className="text-xs text-slate-500">Technician Safety &gt; Customer Schedule</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed uppercase tracking-tighter font-black">
                            <div className="p-4 bg-white/50 dark:bg-slate-900/50 rounded-2xl">1. IMMEDIATELY STOP WORK; move to safe location.</div>
                            <div className="p-4 bg-white/50 dark:bg-slate-900/50 rounded-2xl">2. NOTIFY customer contact and SS+ Operations Team.</div>
                            <div className="p-4 bg-white/50 dark:bg-slate-900/50 rounded-2xl">3. DOCUMENT with photos in WAVE PLUS if safe.</div>
                            <div className="p-4 bg-white/50 dark:bg-slate-900/50 rounded-2xl">4. DON'T PROCEED until corrected or risk accepted in writing.</div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="professional-conduct">
                <SubSectionHeader>4.2 PROFESSIONAL CONDUCT STANDARDS</SubSectionHeader>
                <div className="space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-8">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400">Personal Presentation</h4>
                                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-6 bg-white dark:bg-slate-950 border border-emerald-100 dark:border-emerald-900 border-l-4 border-l-emerald-500 rounded-2xl shadow-sm italic">
                                    <h5 className="text-[10px] font-black text-emerald-600 uppercase mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                        Appearance (Checklist)
                                    </h5>
                                    <List className="text-[10px] text-slate-500 space-y-1">
                                        <ListItem>Clean SS+ uniform or professional trousers/shirt.</ListItem>
                                        <ListItem>Well-groomed (trimmed beard, neat hair).</ListItem>
                                        <ListItem>Clean hands and fingernails.</ListItem>
                                        <ListItem>Minimal jewelry (safety hazard).</ListItem>
                                        <ListItem>ID badge visible & appropriate safety shoes.</ListItem>
                                    </List>
                                </div>
                                <div className="p-6 bg-white dark:bg-slate-950 border border-red-50/50 dark:border-red-900/30 border-l-4 border-l-red-500 rounded-2xl shadow-sm italic">
                                    <h5 className="text-[10px] font-black text-red-600 uppercase mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                        What NOT to Wear
                                    </h5>
                                    <List className="text-[10px] text-slate-500 space-y-1">
                                        <ListItem>Dirty, torn, or stained clothing.</ListItem>
                                        <ListItem>Shorts, sandals, or inappropriate footwear.</ListItem>
                                        <ListItem>Excessive jewelry or piercings.</ListItem>
                                        <ListItem>Clothing with inappropriate logos/messages.</ListItem>
                                    </List>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400">Behavior Standards</h4>
                                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-inner">
                                    <h5 className="text-[10px] font-black text-slate-400 uppercase mb-4 border-b dark:border-slate-800 pb-1 italic">ALWAYS BE:</h5>
                                    <List className="text-[10px] text-slate-500 space-y-1">
                                        <ListItem>Polite, Courteous, & Professional.</ListItem>
                                        <ListItem>Punctual (on time or early).</ListItem>
                                        <ListItem>Respectful to ALL staff.</ListItem>
                                        <ListItem>Patient & Honest (admit when unsure).</ListItem>
                                        <ListItem>Clean (cleanup after yourself).</ListItem>
                                    </List>
                                </div>
                                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl text-white italic">
                                    <h5 className="text-[10px] font-black text-red-400 uppercase mb-4 border-b border-white/5 pb-1 tracking-widest">STRICTLY DON'T:</h5>
                                    <List className="text-[10px] text-slate-400 space-y-1">
                                        <ListItem>Use inappropriate/slang language.</ListItem>
                                        <ListItem>Discuss politics/religion/gossip.</ListItem>
                                        <ListItem>Use customer facilities without permission.</ListItem>
                                        <ListItem>Accept tips or gifts (politely decline).</ListItem>
                                        <ListItem>Smoke or eat in customer work areas.</ListItem>
                                    </List>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm italic flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/3">
                            <h6 className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-[0.2em]">Vehicle Conduct</h6>
                            <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-tighter font-black italic">Represent SS+ professionally everywhere.</p>
                        </div>
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 text-[10px] text-slate-500">
                            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                                <strong>Driving:</strong> Obey laws; drive defensively; keep vehicle clean. No smoking or phone use while driving.
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                                <strong>Parking:</strong> Park legally; don't block emergency routes; respect designated spaces (Director spots, etc.).
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>

            <SubSection id="execution-methods">
                <SubSectionHeader>4.5 ON-SITE SERVICE EXECUTION METHODS</SubSectionHeader>
                <div className="space-y-16 my-8">
                    {/* Overview */}
                    <div className="p-8 bg-slate-900 border border-slate-800 rounded-[3rem] text-white italic">
                        <div className="flex items-center gap-4 mb-6">
                            <h4 className="text-lg font-black uppercase tracking-tight">Overview of Service Models</h4>
                            <div className="h-px flex-1 bg-white/10"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                                <h5 className="text-primary-400 font-black text-xs uppercase mb-2">Method 1: SS+ Collection</h5>
                                <p className="text-slate-400 text-xs leading-relaxed italic">We tour the facility, collect equipment, service in our work zone, and return to original locations.</p>
                            </div>
                            <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                                <h5 className="text-primary-400 font-black text-xs uppercase mb-2">Method 2: Customer Delivery</h5>
                                <p className="text-slate-400 text-xs leading-relaxed italic">Customer staff collects equipment and brings it to our designated work zone; they handle the return.</p>
                            </div>
                        </div>
                    </div>

                    {/* Method 1 Details */}
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                            <div>
                                <h4 className="text-2xl font-black italic text-slate-800 dark:text-slate-200 uppercase tracking-tighter">METHOD 1: SS+ COLLECTION & RETURN</h4>
                                <p className="text-xs text-slate-500 uppercase font-black tracking-widest mt-1">Full-Service Convenience Model</p>
                            </div>
                            <div className="px-4 py-2 bg-primary-50 dark:bg-primary-950/20 border border-primary-100 dark:border-primary-900/30 rounded-2xl">
                                <p className="text-[10px] text-primary-600 font-bold italic">Preferred for: Large sites, VIP clients, & heavy equipment.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                            {[
                                { step: "1", title: "Identification", content: "Tour facility, verify locations in WAVE PLUS, take reference photos, and tag units." },
                                { step: "2", title: "Collection", content: "Systematic removal using trolleys; keep mounting hardware secure; transport to work zone." },
                                { step: "3", title: "Execution", content: "Perform standard service procedures (Section 2) in the designated Work Zone." },
                                { step: "4", title: "Return", content: "Match units using photos; remount securely; remove tags; conduct optional walk-through." },
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm italic hover:border-primary-500/50 transition-colors">
                                    <span className="text-4xl font-black text-slate-100 dark:text-slate-900 block mb-2 leading-none">{item.step}</span>
                                    <h5 className="font-black text-[10px] uppercase mb-1 text-slate-400">{item.title}</h5>
                                    <p className="text-[10px] text-slate-500 leading-relaxed">{item.content}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl italic">
                                <h6 className="text-[10px] font-black text-slate-400 uppercase mb-3">Small/Medium Sites (1-50 units)</h6>
                                <p className="text-[10px] text-slate-500 font-bold leading-tight">INCLUDED FREE. Standard practice to build customer relationships and ensure convenience.</p>
                            </div>
                            <div className="md:col-span-2 p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl italic">
                                <h6 className="text-[10px] font-black text-slate-400 uppercase mb-3">Large Sites (50+ units)</h6>
                                <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-tighter font-medium">May be charged based on geographic spread & access complexity. Flat fee (50-200 TND) or hourly rate. Logistics included in project pricing for multi-day jobs.</p>
                            </div>
                        </div>
                    </div>

                    {/* Method 2 Details */}
                    <div className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                            <div>
                                <h4 className="text-2xl font-black italic text-emerald-600 dark:text-emerald-500 uppercase tracking-tighter">METHOD 2: CUSTOMER COLLECTION & DELIVERY</h4>
                                <p className="text-xs text-slate-500 uppercase font-black tracking-widest mt-1">Cost-Efficiency & Collaborative Model</p>
                            </div>
                            <div className="px-4 py-2 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl">
                                <p className="text-[10px] text-emerald-600 font-bold italic">Preferred for: High-security sites & budget-conscious clients.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm italic">
                                    <h6 className="text-[10px] font-black text-emerald-600 uppercase mb-4 tracking-widest border-b pb-1">Our Coordination:</h6>
                                    <List className="text-[11px] text-slate-500 space-y-2">
                                        <ListItem>Provide checklist 3 days before.</ListItem>
                                        <ListItem>Confirm designated delivery location.</ListItem>
                                        <ListItem>Verify equipment count upon arrival.</ListItem>
                                        <ListItem>Perform service & notify when ready.</ListItem>
                                    </List>
                                </div>
                                <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-inner italic">
                                    <h6 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest border-b dark:border-slate-800 pb-1">Customer Responsibility:</h6>
                                    <List className="text-[11px] text-slate-600 dark:text-slate-400 space-y-2">
                                        <ListItem>Collect from brackets safely.</ListItem>
                                        <ListItem>Transport to SS+ Work Zone.</ListItem>
                                        <ListItem>Return & remount after service.</ListItem>
                                        <ListItem>Verify correct placement.</ListItem>
                                    </List>
                                </div>
                            </div>
                            <div className="lg:col-span-4 p-8 bg-emerald-600 border border-emerald-500 rounded-[3rem] text-white italic shadow-xl flex flex-col justify-center text-center">
                                <h6 className="text-[10px] font-black text-white/50 uppercase mb-4 tracking-widest">Pricing Benefit:</h6>
                                <p className="text-4xl font-black mb-2 leading-none">10-20%</p>
                                <p className="text-xs font-bold uppercase tracking-tight">Typical Discount</p>
                                <p className="text-[10px] text-white/70 mt-4 leading-relaxed line-clamp-2">Discount reflects reduced labor time, faster completion, and higher productivity.</p>
                            </div>
                        </div>
                    </div>

                    {/* Work Zone Setup */}
                    <div className="space-y-12 py-12 bg-slate-50 dark:bg-slate-900/30 rounded-[4rem] px-8 border border-slate-200 dark:border-slate-800/50">
                        <div className="text-center space-y-2">
                            <h4 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400 italic">Work Zone Setup & Breakdown</h4>
                            <p className="text-[11px] text-slate-500 uppercase tracking-tighter">Ensuring a temporary professional workspace on every site.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-sm italic">
                                <h5 className="text-[10px] font-black text-primary-600 uppercase mb-6 tracking-widest border-b pb-1">Minimum Requirements:</h5>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-[10px] text-slate-500">
                                    <div className="space-y-1">
                                        <p className="font-bold text-slate-800 dark:text-slate-200 underline">Physical Space:</p>
                                        <p>Open area for vehicle, layout rows, and technician movement.</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-bold text-slate-800 dark:text-slate-200 underline">Vehicle Access:</p>
                                        <p>Drive-in capable, stable surface, and height/width clearance.</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-bold text-slate-800 dark:text-slate-200 underline">Safety:</p>
                                        <p>Away from lanes, level ground, and well-lit (daylight or lights).</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-bold text-slate-800 dark:text-slate-200 underline">Enhancements:</p>
                                        <p>Water access, power outlet, & nearby restroom facilities.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 border border-slate-800 rounded-[3rem] italic text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary-500/20 transition-colors"></div>
                                <h5 className="text-[10px] font-black text-slate-500 uppercase mb-6 tracking-widest border-b border-white/5 pb-1 relative">Work Zone Layout (The Zones):</h5>
                                <div className="grid grid-cols-2 gap-4 text-[10px] text-slate-400 relative">
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                                        <span className="font-black text-primary-400 block mb-1">ZONE A: STAGING</span>
                                        Incoming units organized by type or location.
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                                        <span className="font-black text-primary-400 block mb-1">ZONE B: WORK area</span>
                                        Active service area with tools and lighting.
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                                        <span className="font-black text-primary-400 block mb-1">ZONE C: COMPLETED</span>
                                        Serviced, tagged, & outgoing equipment.
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                                        <span className="font-black text-primary-400 block mb-1">ZONE D: WASTE</span>
                                        Refilling residuals, old parts, & packaging.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b dark:border-slate-800 pb-1">Setup Process</h5>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black flex-shrink-0">1</span>
                                        <p className="text-[11px] text-slate-500 italic"><strong>Park Strategically:</strong> Rear doors accessible; engine off; branding visible; won't block operations.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black flex-shrink-0">2</span>
                                        <p className="text-[11px] text-slate-500 italic"><strong>Safety Setup:</strong> Warning cones; "Work in Progress" signs; area clearly defined.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black flex-shrink-0">3</span>
                                        <p className="text-[11px] text-slate-500 italic"><strong>Mobile Tent:</strong> Branded pop-up (3x3m) for sun/rain protection & multi-day jobs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 bg-white dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-800 rounded-[3rem] italic">
                                <h5 className="text-[10px] font-black text-red-600 uppercase mb-4 tracking-widest italic">Work Zone Breakdown (Cleanup):</h5>
                                <List className="text-[11px] text-slate-500 space-y-2">
                                    <ListItem><strong>Final Verification:</strong> All units accounted for & documented.</ListItem>
                                    <ListItem><strong>Waste Removal:</strong> Take all powder/residue with you to the workshop.</ListItem>
                                    <ListItem><strong>Area Restoration:</strong> Sweep & return site to original condition.</ListItem>
                                    <ListItem><strong>Sign-Off:</strong> Obtain customer walk-through & signature.</ListItem>
                                </List>
                            </div>
                        </div>
                    </div>

                    {/* Decision Factors */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 text-center">Choosing the Right Method</h4>
                            <Table>
                                <TableRow isHeader>
                                    <TableCell isHeader>Factor</TableCell>
                                    <TableCell isHeader>Method 1: SS+ Collection</TableCell>
                                    <TableCell isHeader>Method 2: Cust. Delivery</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="text-[11px] font-bold italic">Site Size</TableCell>
                                    <TableCell className="text-[10px] text-slate-500">Small to Medium (1-50)</TableCell>
                                    <TableCell className="text-[10px] text-slate-500">Any (Best for large)</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="text-[11px] font-bold italic">Staffing</TableCell>
                                    <TableCell className="text-[10px] text-slate-500">Not required from customer</TableCell>
                                    <TableCell className="text-[10px] text-slate-500">Customer staff required</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="text-[11px] font-bold italic">Security</TableCell>
                                    <TableCell className="text-[10px] text-slate-500">Requires multi-area escort</TableCell>
                                    <TableCell className="text-[10px] text-slate-500">Minimizes site access</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="text-[11px] font-bold italic">Budget</TableCell>
                                    <TableCell className="text-[10px] text-slate-500">Standard Service Price</TableCell>
                                    <TableCell className="text-[10px] text-emerald-600 font-bold">10-20% Reduced Cost</TableCell>
                                </TableRow>
                            </Table>
                        <Blockquote type="info" title="Sales Communication TIP">
                            Always present both options: <em>"We can provide a full collection service, or if your staff delivers to our work zone, we can offer a 15% discount. Which suits your workflow better?"</em>
                        </Blockquote>
                    </div>

                    {/* Special Considerations */}
                    <div className="p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3.5rem] shadow-sm italic">
                        <h5 className="text-[10px] font-black text-slate-400 uppercase mb-8 tracking-[0.2em] border-b pb-2">Special Considerations</h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[10px] text-slate-500 leading-relaxed uppercase tracking-tighter">
                            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-3xl">
                                <span className="font-black text-slate-800 dark:text-slate-200 block mb-2 underline italic">Weather:</span>
                                Postpone if outdoor rain; provide shade/hydration if extreme heat.
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-3xl">
                                <span className="font-black text-slate-800 dark:text-slate-200 block mb-2 underline italic">Multi-Day Security:</span>
                                Secure work zone overnight; lock tent; coordinate with site security.
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-3xl">
                                <span className="font-black text-slate-800 dark:text-slate-200 block mb-2 underline italic">Training:</span>
                                For Method 2, briefly train customer staff on safe removal & visual checks.
                            </div>
                        </div>
                    </div>
                </div>
            </SubSection>
        </Section>
    );
}


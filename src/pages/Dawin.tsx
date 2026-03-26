import React, { useState } from 'react';
import { ThermometerSun, Building2, BusFront, CarFront } from 'lucide-react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { universitiesdarwin } from "../data/universities";

const Dawin: React.FC = () => {
    const [expanded, setExpanded] = useState(null);
    const toggle = (index: any) => {
    setExpanded(expanded === index ? null : index);
    };
    React.useEffect(() => {
        document.title = 'Student Visa Information | Study in Australia';
    }, []);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const infoData = [
        {
            title: "Climate",
            icon: <ThermometerSun className="w-5 h-5 text-primary-600" />,
            content:
                "Tropical savanna – wet (Nov–Apr, 25–33°C, high humidity) and dry seasons (May–Oct, 21–32°C). Monsoonal rains and cyclones possible in wet season.",
        },
        {
            title: "Working Culture",
            icon: <Building2 className="w-5 h-5 text-primary-600" />,
            content:
                "Very casual and outdoorsy – shorts and shirts common. Tourism, mining, and Indigenous services are big employers. Early starts (7 AM–3 PM) to avoid heat. High turnover due to remote work (FIFO common).",
        },
        {
            title: "Public Transport",
            icon: <BusFront className="w-5 h-5 text-primary-600" />,
            content: (
                <>
                    <p>
                        Modes: Buses only. Managed by{" "}
                        <strong>Darwinbus</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>No trains, trams, or ferries.</li>
                        <li>Smart Card: <strong>Tap & Ride</strong> card (or pay with cash).</li>
                        <li>Coverage: Limited, mostly serves inner suburbs.</li>
                        <li>Pros: Cheap, simple.</li>
                        <li>Cons: Very infrequent, no Sunday services in some areas.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Driving & License Info",
            icon: <CarFront className="w-5 h-5 text-primary-600" />,
            content: (
                <>
                    <p>
                        Licensing handled by{" "}
                        <strong>Department of Infrastructure, Planning and Logistics</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Learner’s Permit (16+): Pass theory test.</li>
                        <li>Practical Driving Test: Must hold learner’s for 6 months (if under 25).</li>
                        <li>P1 License (Red P): Valid for 1 year.</li>
                        <li>P2 License (Green P): Valid for 2 years.</li>
                        <li>Full License: After completing P2.</li>
                        <li><strong>No minimum logbook hours required.</strong></li>
                        <li><strong>Overseas license valid for 3 months before conversion.</strong></li>
                    </ul>
                </>
            ),
        }
    ];
    
    return (
        <>
            <section className="relative bg-primary-800 py-12 md:py-24">
                <img 
                src="/images/DARWIN.png" 
                alt="Melbourne Skyline" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 "
                />
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6"> Study in Darwin </h1>
                    </div>
                </div>
            </section>
            
            <section className="relative overflow-hidden section bg-gradient-to-b from-white via-emerald-50/50 to-white py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.10),_transparent_24%)]" />
                <div className="container relative">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 font-semibold rounded-full text-sm tracking-wide shadow-sm">
                            Why Choose Darwin
                        </span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
                            A Tropical Adventure Awaits
                        </h2>
                        <p className="mt-4 mx-auto text-gray-600 text-lg">
                            Set sail from Darwin to the Tiwi Islands, glide through lush wetlands teeming with wildlife, or cool off beneath a sparkling waterfall in Litchfield National Park. As the vibrant capital of the Northern Territory, Darwin beckons travelers with its laid-back tropical charm, rich history, and breathtaking natural wonders—all just moments from the city center.
                        </p>
                    </div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                    >

                        <div className="relative bg-gradient-to-b from-white to-emerald-50/80 border border-emerald-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Museum and Art Gallery of the Northern Territory</h3>
                            <p className="text-gray-600 text-sm">
                                Begin your Darwin journey with a visit to this cultural gem, home to stunning Aboriginal art, from intricate paintings to traditional tools and instruments. Dive into Darwin’s maritime history, explore Southeast Asian connections, and come face-to-face with Sweetheart, the legendary 5-meter saltwater crocodile (don’t worry—he’s taxidermied!)
                            </p>
                        </div>

                        <div className="relative bg-gradient-to-b from-white to-lime-50/80 border border-emerald-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Defence of Darwin Experience</h3>
                            <p className="text-gray-600 text-sm">
                                Step back in time at this gripping military museum, where the story of Darwin’s pivotal role in WWII unfolds. Learn about the devastating 1942 Japanese bombings and how the city helped turn the tide for the Allies.
                            </p>
                        </div>

                        <div className="relative bg-gradient-to-b from-white to-emerald-50/80 border border-emerald-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mindil Beach Sunset Markets</h3>
                            <p className="text-gray-600 text-sm">
                                A Darwin icon! Stroll through bustling stalls offering global flavors—from Indonesian satay to crocodile burgers—while local buskers serenade you under a fiery Top End sunset. Open Thursdays and Sundays (May–October), it’s the perfect way to soak up the city’s lively spirit.
                            </p>
                        </div>

                        <div className="relative bg-gradient-to-b from-white to-lime-50/80 border border-emerald-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Litchfield National Park</h3>
                            <p className="text-gray-600 text-sm">
                                Just 90 minutes from Darwin, this natural paradise dazzles with cascading waterfalls, crystal-clear swimming holes, and monsoon forests. Spend a day exploring or stay overnight to fully immerse yourself in its beauty.
                            </p>
                        </div>

                        <div className="relative bg-gradient-to-b from-white to-emerald-50/80 border border-emerald-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mary River Wetlands</h3>
                            <p className="text-gray-600 text-sm">
                                A wildlife lover’s dream! Cruise through these lush wetlands, home to crocs, barramundi, and countless bird species. Ideal for a day trip or a stop en route to Kakadu National Park
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Fast Facts Section */}
            <section className="section bg-white py-10">
                <div className="container rounded-[28px] border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/70 p-8 shadow-sm">
                    <h2 className="text-3xl font-bold mb-4">Fast Facts About Darwin</h2>
                    <ul className="space-y-2">
                        <li>✈️ <strong>Easy Access:</strong> Well-connected by air, with quick flights from major Australian cities and international hubs like Singapore.</li>
                        <li>🌞 <strong>Endless Summer:</strong> Warm year-round, averaging 30°C (86°F)—perfect for outdoor adventures.</li>
                        <li>🍺 <strong>Beer Can Regatta:</strong> Darwin’s quirkiest event! Watch boats made of beer cans race for charity.</li>
                        <li>🌀 <strong>Resilient Spirit:</strong> Rebuilt after WWII bombings and Cyclone Tracy, Darwin thrives with a welcoming, adventurous vibe.</li>
                    </ul>
                </div>
            </section>

            {/* Art & Culture Intro */}
            <section className="section bg-white py-10">
                <div className="container rounded-[28px] border border-emerald-100 bg-gradient-to-b from-white to-lime-50/70 p-8 shadow-sm">
                    <h2 className="text-3xl font-bold mb-4">Discover the Vibrant Art & Culture of the Northern Territory</h2>
                    <p className="text-lg">
                        The Northern Territory is a melting pot of cultures, where ancient traditions meet contemporary creativity. From sacred rock art and Dreamtime stories to modern galleries and lively performances, the Territory offers endless ways to immerse yourself in its rich artistic heritage.
                    </p>
                </div>
            </section>

            {/* Art Trails & Experiences */}
            <section className="section bg-white py-10">
                <div className="container rounded-[28px] border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/70 p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Art Trails & Indigenous Experiences</h2>
                    <ul className="space-y-3">
                        <li>🎨 <strong>Territory Arts Trail</strong> – Explore regional and remote galleries, workshops, and demonstrations showcasing Aboriginal art, historical artifacts, and stunning rock art sites. Plan your journey: <a target='_blank' href="https://northernterritory.com/arts-trail" className="text-blue-600 underline">northernterritory.com/arts-trail</a></li>
                        <li>🖌️ <strong>Street Art & Public Installations</strong> – Art isn’t confined to galleries here! Discover murals, sculptures, and outdoor masterpieces in Darwin, Katherine, and beyond, blending local and international talent.</li>
                    </ul>
                </div>
            </section>

            {/* Cultural Hotspots */}
            <section className="section bg-white py-10">
                <div className="container rounded-[28px] border border-emerald-100 bg-gradient-to-b from-white to-lime-50/70 p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Must-Visit Cultural Hotspots</h2>
                    <ul className="space-y-2">
                        <li>🏛️ <strong>Museum and Art Gallery of the NT (MAGNT)</strong> – Located on Larrakia land in Darwin, this iconic museum houses world-class Aboriginal art, scientific exhibits, and the famous 5m croc, Sweetheart.</li>
                        <li>🎭 <strong>Performing Arts Scene</strong> – Catch cutting-edge theatre, dance, and live music at:
                        <ul className="ml-6 list-disc">
                            <li>Darwin Entertainment Centre</li>
                            <li>Brown’s Mart Theatre</li>
                            <li>Railway Club (Parap)</li>
                        </ul>
                        </li>
                        <li>🏜️ <strong>Alice Springs Arts Hub</strong> – Dive into Central Australia’s creative heart at the Araluen Cultural Precinct and Watch This Space, where desert artistry thrives.</li>
                    </ul>
                </div>
            </section>

            {/* Indigenous Art Centres */}
            <section className="section bg-white py-10">
                <div className="container rounded-[28px] border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/70 p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Unique Indigenous Art Centres</h2>
                    <ul className="space-y-2">
                        <li>✋ <strong>Marrawuddi Arts & Culture (Jabiru)</strong> – Stunning Kakadu-inspired works.</li>
                        <li>🌿 <strong>Tjanpi Desert Weavers</strong> – Celebrating fibre art by Central Australian women.</li>
                        <li>🎨 <strong>Venture into Arnhem Land</strong> – Experience Yolngu culture and breathtaking art.</li>
                    </ul>
                </div>
            </section>

            {/* Event Guides */}
            <section className="section bg-white py-10">
                <div className="container rounded-[28px] border border-emerald-100 bg-gradient-to-b from-white to-lime-50/70 p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Stay in the Loop – Free Event Guides</h2>
                    <ul className="space-y-2">
                        <li>📅 <strong>Darwin</strong> – Off The Leash | Darwin Waterfront | Activate Darwin</li>
                        <li>🏙️ <strong>Palmerston</strong> – City Events</li>
                        <li>🔥 <strong>Alice Springs</strong> – Red Hot Arts</li>
                    </ul>
                </div>
            </section>

            {/* Final Note */}
            <section className="section bg-white py-10">
                <div className="container rounded-[28px] border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/70 p-8 shadow-sm">
                    <p className="text-lg font-medium">
                        Whether you're admiring ancient rock art, catching a live show, or exploring vibrant street murals, the NT’s culture is as vast and dynamic as its landscapes. 🌏✨
                    </p>
                </div>
            </section>


            <section className="relative overflow-hidden bg-white py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(220,252,231,0.95),_transparent_24%)]" />
                <div className="container relative mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-extrabold text-slate-900">Accommodation Details</h2>
                        <p className="text-lg text-gray-600 mt-4">Understanding co-renting, sub-letting, and bond responsibilities in Darwin.</p>
                    </div>

                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                                <div className="relative overflow-hidden min-h-[280px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                                        alt="Co-renting in Darwin"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Darwin</p>
                                        <h3 className="mt-2 text-2xl font-bold">Co-renting</h3>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 bg-gradient-to-b from-white to-emerald-50/80">
                                    <p className="text-gray-700 leading-7 mb-4">
                                        Co-renting (formerly co-tenancy) is when multiple individuals rent a property together, sharing the responsibilities of the lease. Each co-renter signs the rental agreement and is equally responsible for rent payments and property upkeep.
                                    </p>
                                    <ul className="mt-5 space-y-3 text-sm text-gray-700">
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Co-renters are responsible for the rent and maintenance.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Everyone must be listed on the rental agreement.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Disagreements should be resolved directly between co-renters.</li>
                                    </ul>
                                    <p className="mt-5 text-sm text-gray-500">
                                        Co-renters must ensure that the rental provider is notified when someone moves in or out to avoid complications.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                                <div className="relative overflow-hidden min-h-[280px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
                                        alt="Sub-letting in Darwin"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Darwin</p>
                                        <h3 className="mt-2 text-2xl font-bold">Sub-letting</h3>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 bg-gradient-to-b from-white to-lime-50/80">
                                    <p className="text-gray-700 leading-7 mb-4">
                                        Sub-letting involves a tenant renting out their space to another person. This can only happen with the approval of the rental provider (landlord). The head renter remains responsible for the property, and sub-letting should be disclosed properly.
                                    </p>
                                    <ul className="mt-5 space-y-3 text-sm text-gray-700">
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">The head renter must obtain written permission from the rental provider.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Sub-letting without permission can result in eviction.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">The head renter must manage all property maintenance and repairs.</li>
                                    </ul>
                                    <p className="mt-5 text-sm text-gray-500">
                                        Sub-letting is not allowed unless the rental provider has given written consent. If a sub-renter is found without permission, they may be asked to vacate.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                                <div className="relative overflow-hidden min-h-[280px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
                                        alt="Bond and responsibilities in Darwin housing"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Darwin</p>
                                        <h3 className="mt-2 text-2xl font-bold">Bond & Responsibilities</h3>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 bg-gradient-to-b from-white to-emerald-50/80">
                                    <p className="text-gray-700 leading-7 mb-4">
                                        Both co-renters and sub-renters must ensure that the bond is paid and handled correctly. The head renter is responsible for managing bonds in sub-letting scenarios, while co-renters usually share a bond equally.
                                    </p>
                                    <ul className="mt-5 space-y-3 text-sm text-gray-700">
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">The bond must be lodged with the Residential Tenancies Bond Authority (RTBA).</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Co-renters should transfer their bond portion if someone new moves in.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Failure to properly handle the bond can result in delays during move-out and deductions.</li>
                                    </ul>
                                    <p className="mt-5 text-sm text-gray-500">
                                        If any disputes arise about the bond or property damage, co-renters or sub-renters can apply to VCAT (Victorian Civil and Administrative Tribunal) for resolution.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className="text-center mt-12">
                        <h4 className="text-2xl font-semibold text-slate-900 mb-4">Legal Insights</h4>
                        <p className="text-lg text-gray-600 mb-6">
                            The Residential Tenancies Act 1997 provides comprehensive guidelines for both co-renting and sub-letting. It&apos;s important to understand your rights and responsibilities as a renter.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mx-auto space-y-2 text-left max-w-2xl">
                            <li>Section 25: Notice of assignment or transfer by a renter.</li>
                            <li>Section 81: Assignment and sub-letting by a renter.</li>
                        </ul>
                        <p className="text-sm text-gray-500 mt-4">
                            Ensure compliance with the Act to avoid disputes and legal issues during your rental experience.
                        </p>
                    </div>
                </div>
            </section>

            <motion.section
                className="bg-primary-50 py-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                >
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Top Universities & Master’s Programs
                    </h2>
                    <p className="text-xl text-gray-600 text-center mb-6">
                    Melbourne is a top destination for international students, offering world-class universities and a wide range of master's degree programs. Here’s a guide to some of the best universities and popular courses for international students:
                    </p>
                    
                    {/* Grid - 3 items in a row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {universitiesdarwin.map((uni, index) => (
                        <motion.div
                        key={index}
                        className="bg-white border border-gray-400 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden p-6"
                        whileHover={{ scale: 1.03 }}
                        >
                        <div className="flex items-center gap-2 mb-4">
                            <HiOutlineAcademicCap className="text-primary-600 w-6 h-6" />
                            <h3 className="text-lg font-semibold">{uni.name}</h3>
                        </div>
                        <p className="text-primary-700 text-sm font-semibold mb-2">{uni.ranking}</p>

                        <div className="mb-4">
                            <h4 className="font-semibold text-sm mb-1">Popular Master&apos;s Programs:</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                            {uni.programs.map((program, idx) => (
                                <li key={idx}>{program}</li>
                            ))}
                            </ul>
                        </div>

                        {uni.keyFeatures && (
                            <div className="mb-4">
                            <h4 className="font-semibold text-sm mb-1">Key Features:</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                {uni.keyFeatures.map((keyFeatures, idx) => (
                                <li key={idx}>{keyFeatures}</li>
                                ))}
                            </ul>
                            </div>
                        )}

                        <a
                            href={uni.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full mt-4 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-primary-700 transition"
                        >
                            Visit Website
                        </a>
                        </motion.div>
                    ))}
                    </div>
                    
                </div>
            </motion.section>

            <motion.section
                className="py-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <img
                    src="https://cdn.britannica.com/36/165136-050-42FF0B8F/view-Darwin-Australia.jpg"
                    alt="Info Visual"
                    className="w-full max-h-[400px] object-contain rounded-xl shadow-lg"
                />

                <div>
                    <div>
                        <h4 className="text-4xl font-bold text-primary mb-8 text-left">Other's Information</h4>
                    </div>
                    <div className="space-y-4">
                    {infoData.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                            className="w-full flex items-center justify-between p-4 hover:bg-gray-100"
                            onClick={() => toggle(index)}
                        >
                            <div className="flex items-center gap-3">
                            {item.icon}
                            <span className="text-base font-semibold">{item.title}</span>
                            </div>
                            <span className="text-xl">{expanded === index ? "−" : "+"}</span>
                        </button>
                        {expanded === index && (
                            <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="p-4 pt-0 text-sm text-gray-700 leading-relaxed"
                            >
                            {item.content}
                            </motion.div>
                        )}
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </motion.section>  

        </>
    )
}


// GraduationCap component
interface GraduationCapProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const GraduationCap: React.FC<GraduationCapProps> = ({ className = "", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
);

export default Dawin;

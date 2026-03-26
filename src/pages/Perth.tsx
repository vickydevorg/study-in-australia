import React, { useState } from 'react';
import { ThermometerSun, Building2, BusFront, CarFront } from 'lucide-react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { universitiesperth } from "../data/universities";

const Perth: React.FC = () => {
    const [expanded, setExpanded] = useState<number | null>(null);
    const toggle = (index: number) => {
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
    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55 }
        }
    };
    const infoData = [
        {
            title: "Climate",
            icon: <ThermometerSun className="w-5 h-5 text-primary-600" />,
            content:
                "Mediterranean climate – hot, dry summers (Dec–Feb, 25–35°C) and mild, wet winters (Jun–Aug, 8–18°C). Low humidity, lots of sunshine (3,000+ hours/year). Occasional heatwaves in summer (can exceed 40°C).",
        },
        {
            title: "Working Culture",
            icon: <Building2 className="w-5 h-5 text-primary-600" />,
            content:
                "Relaxed and outdoorsy – work-life balance is valued. Mining, construction, and resources dominate (FIFO work common). Business casual (shorts acceptable in some industries). Workweek typically 8:30 AM–5 PM, with flexible arrangements in corporate jobs.",
        },
        {
            title: "Public Transport",
            icon: <BusFront className="w-5 h-5 text-primary-600" />,
            content: (
                <>
                    <p>
                        Modes: Trains, buses, ferries (limited). Managed by{" "}
                        <strong>Transperth</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Trains: 6 lines (mostly radial from CBD).</li>
                        <li>Buses: Extensive, including high-frequency CAT buses.</li>
                        <li>Ferry: Swan River ferry (Barrack St to South Perth).</li>
                        <li>Smart Card: <strong>SmartRider</strong> (discounted fares).</li>
                        <li>Coverage: Good in inner/middle suburbs, weaker in outer areas.</li>
                        <li>Pros: Reliable, clean, free transit zone in CBD.</li>
                        <li>Cons: Limited night services, no trams.</li>
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
                        Licensing handled by <strong>Department of Transport (DoT)</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Learner’s Permit (16+): Pass a theory and eyesight test.</li>
                        <li>Hazard Perception Test (HPT): After 6 months (if under 25).</li>
                        <li>Practical Driving Test: 50+ supervised hours (25 at night) if under 25.</li>
                        <li>P1 License (Red P): Must be at least 17, valid for 1 year.</li>
                        <li>P2 License (Green P): Valid for 2 years.</li>
                        <li>Full License: Granted after completing P2.</li>
                        <li>Overseas license holders may need to convert depending on visa status.</li>
                    </ul>
                </>
            ),
        },
    ];
    return (
        <>
            <section className="relative bg-primary-800 py-12 md:py-24">
                <img 
                src="/images/PERTH.png" 
                alt="Melbourne Skyline" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 "
                />
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6"> Study in Perth </h1>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden section bg-gradient-to-b from-white via-emerald-50/50 to-white py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.10),_transparent_24%)]" />
                <div className="container relative">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45 }}
                            className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 font-semibold rounded-full text-sm tracking-wide shadow-sm"
                        >
                            Places in Perth, Western Australia
                        </motion.span>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.05 }}
                            className="mt-4 max-2xl mx-auto text-gray-600 text-lg"
                        >
                            Perth, Australia’s sunniest capital city, blends urban sophistication with stunning natural beauty. From pristine beaches to lush parks and vibrant cultural hubs, here are the top places to explore:
                        </motion.p>
                    </div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                    >
                        
                        <motion.div variants={itemVariants} className="container">
                            <motion.div whileHover={{ y: -8, scale: 1.01 }} className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50/80 p-6 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-green-400" />
                            <h2 className="text-2xl font-bold mb-4">🌊 Iconic Beaches & Waterfronts</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Cottesloe Beach</strong> – Perth’s most famous beach, perfect for swimming, sunsets, and the annual Sculpture by the Sea exhibition.</li>
                                <li><strong>Scarborough Beach</strong> – A hotspot for surfers, with a buzzing esplanade full of bars and eateries.</li>
                                <li><strong>Elizabeth Quay</strong> – A scenic waterfront precinct with dining, ferries to South Perth, and the stunning Spanda sculpture.</li>
                                <li><strong>Swan River</strong> – Cruise, kayak, or cycle along Perth’s glittering river, with views of the city skyline.</li>
                            </ul>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="container">
                            <motion.div whileHover={{ y: -8, scale: 1.01 }} className="relative overflow-hidden bg-gradient-to-b from-white to-lime-50/80 p-6 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lime-500 to-emerald-400" />
                            <h2 className="text-2xl font-bold mb-4">🌿 Nature & Parks</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Kings Park & Botanic Garden</strong> – One of the world’s largest inner-city parks, offering bushwalking trails, wildflower displays, and panoramic views of Perth.</li>
                                <li><strong>Rottnest Island</strong> – Meet the adorable quokkas, snorkel in turquoise waters, or bike around this car-free paradise.</li>
                                <li><strong>Perth Zoo</strong> – Home to native Australian wildlife, including kangaroos, koalas, and Tasmanian devils.</li>
                                <li><strong>John Forrest National Park</strong> – A great spot for hiking, waterfalls, and wild kangaroos (just 30 mins from the city).</li>
                            </ul>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="container">
                            <motion.div whileHover={{ y: -8, scale: 1.01 }} className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50/80 p-6 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-400" />
                            <h2 className="text-2xl font-bold mb-4">🏛️ Culture & History</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Fremantle (Freo)</strong> – A historic port town with convict-built Fremantle Prison, lively markets, and craft breweries.</li>
                                <li><strong>WA Museum Boola Bardip</strong> – A world-class museum showcasing Western Australia’s natural and cultural history.</li>
                                <li><strong>Art Gallery of Western Australia</strong> – Features Indigenous art, contemporary works, and international exhibitions.</li>
                                <li><strong>The Bell Tower</strong> – Climb this iconic landmark for views and try ringing the historic Swan Bells.</li>
                            </ul>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="container">
                            <motion.div whileHover={{ y: -8, scale: 1.01 }} className="relative overflow-hidden bg-gradient-to-b from-white to-lime-50/80 p-6 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-400 to-lime-400" />
                            <h2 className="text-2xl font-bold mb-4">🛍️ Shopping & Entertainment</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Perth CBD (Murray & Hay Streets)</strong> – High-end shopping, laneway cafes, and street art.</li>
                                <li><strong>Northbridge</strong> – Perth’s nightlife hub, with bars, live music, and multicultural dining.</li>
                                <li><strong>Subiaco & Leederville</strong> – Trendy suburbs with boutique shops, brunch spots, and indie cinemas.</li>
                                <li><strong>Perth Cultural Centre</strong> – A hub of galleries, theatres, and the State Library.</li>
                            </ul>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="container">
                            <motion.div whileHover={{ y: -8, scale: 1.01 }} className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50/80 p-6 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 to-emerald-400" />
                            <h2 className="text-2xl font-bold mb-4">🚗 Day Trips from Perth</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>The Pinnacles Desert</strong> – Otherworldly limestone formations in Nambung National Park.</li>
                                <li><strong>Margaret River</strong> – Famous for wineries, caves, and surf beaches (3-hour drive).</li>
                                <li><strong>Lancelin Sand Dunes</strong> – Try sandboarding on these massive white dunes.</li>
                                <li><strong>Penguin Island</strong> – Spot wild penguins and dolphins (near Rockingham).</li>
                            </ul>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="container">
                            <motion.div whileHover={{ y: -8, scale: 1.01 }} className="relative overflow-hidden bg-gradient-to-b from-white to-lime-50/80 p-6 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 to-emerald-400" />
                            <h2 className="text-2xl font-bold mb-4">🍽️ Food & Drink Hotspots</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Elizabeth Quay & Crown Perth</strong> – Fine dining with river views.</li>
                                <li><strong>Fremantle Markets</strong> – Fresh produce, gourmet street food, and handmade crafts.</li>
                                <li><strong>Swan Valley</strong> – WA’s oldest wine region, just 25 mins from Perth (wineries, breweries, and chocolate factories).</li>
                            </ul>
                            </motion.div>
                        </motion.div>
                        
                    </motion.div>
                </div>
            </section>

            <section id="tips" className="relative overflow-hidden bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 p-6 shadow-md space-y-3 section py-12 text-white text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_28%)]" />
                <div className="container relative">
                    <h2 className="text-2xl font-bold">✈️ Quick Perth Travel Tips</h2>
                    <ul className="list-disc pl-5 list-none space-y-2">
                    <li><strong>Best Time to Visit:</strong> Spring (Sep–Nov) for wildflowers or Autumn (Mar–May) for mild weather.</li>
                    <li><strong>Getting Around:</strong> Free CAT buses in the city, trains to Fremantle, and ferries to Rottnest.</li>
                    <li><strong>Must-Do:</strong> A sunset drink at Cottesloe Beach Hotel or a river cruise on the Swan River.</li>
                    </ul>
                    <p className="text-lg font-medium">
                    Perth is a city of endless blue skies, golden beaches, and laid-back charm—ready for you to explore!
                    </p>
                </div>
            </section>

            <section className="relative overflow-hidden bg-white py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(220,252,231,0.95),_transparent_24%)]" />
                <div className="container relative mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-extrabold text-slate-900">Accommodation Details</h2>
                        <p className="text-lg text-gray-600 mt-4">Understanding co-renting, sub-letting, and bond responsibilities in Perth.</p>
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
                                        src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80"
                                        alt="Co-renting in Perth"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Perth</p>
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
                                        src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80"
                                        alt="Sub-letting in Perth"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Perth</p>
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
                                        src="https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1400&q=80"
                                        alt="Bond and responsibilities in Perth housing"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Perth</p>
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
                        Western Australia (WA) is home to several reputable universities offering a wide range of courses across various disciplines. Here’s an overview of the major universities and some of their popular programs:
                    </p>
                    
                    {/* Grid - 3 items in a row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {universitiesperth.map((uni, index) => (
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
                    src="https://img.freepik.com/premium-photo/skyline-perth-by-swan-river-western-australia-wa-australia_1324215-159.jpg"
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

export default Perth;

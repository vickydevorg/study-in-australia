import React, { useState } from 'react';
import { ThermometerSun, Building2, BusFront, CarFront, Globe } from 'lucide-react';

import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { universitiesBribane } from "../data/universities";

const Brisbane: React.FC = () => {
    const [expanded, setExpanded] = useState(null);
    const toggle = (index: any) => {
        setExpanded(expanded === index ? null : index);
    };
    React.useEffect(() => {
        document.title = 'Student Visa Information | Study in Australia';
    }, []);

    const infoData = [
        {
            title: "Climate",
            icon: <ThermometerSun className="w-5 h-5 text-primary-600" />,
            content:
                "Subtropical – hot, humid summers (Dec–Feb, 21–30°C) and mild winters (Jun–Aug, 10–21°C). Summer storms and occasional flooding.",
        },
        {
            title: "Working Culture",
            icon: <Building2 className="w-5 h-5 text-primary-600" />,
            content:
                "Relaxed but professional – less formal than Sydney/Melbourne. Strong in construction, tourism, and healthcare. Business casual (short sleeves acceptable). Flexible hours (some workplaces offer 7 AM–3 PM to beat heat).",
        },
        {
            title: "Public Transport",
            icon: <BusFront className="w-5 h-5 text-primary-600" />,
            content: (
                <>
                    <p>
                        Modes: Trains, trams, buses, ferries (limited). Managed by{" "}
                        <strong>Public Transport Victoria (PTV)</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Trams: Largest network in the world (CBD-centric).</li>
                        <li>Trains: 16 lines (radial from CBD).</li>
                        <li>Buses: Fill gaps but less reliable.</li>
                        <li>Smart Card: <strong>myki</strong>.</li>
                        <li>Coverage: Excellent inner city, patchy outer suburbs.</li>
                        <li>Pros: Frequent trams, 24-hour weekend trains/trams.</li>
                        <li>Cons: Overcrowded peak trains, myki system criticized.</li>
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
                        Licensing handled by <strong>Department of Transport and Main Roads (TMR)</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Learner’s Permit (16+): Pass theory test.</li>
                        <li>Hazard Perception Test (HPT): After 1 year (if under 25).</li>
                        <li>Practical Test: Complete 100+ supervised hours (10 at night).</li>
                        <li>P1 License (Red P): Must be 17+, valid for 1 year.</li>
                        <li>P2 License (Green P): Valid for 2 years.</li>
                        <li>Full License: Granted after completing P2.</li>
                    </ul>
                </>
            ),
        },
    ];

    return (
        <>
            <motion.section
                className="relative bg-primary-800 py-12 md:py-24 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src="/images/Brisbane.png"
                    alt="Melbourne Skyline"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-900/40 to-transparent" />
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                        >
                            Study in Brisbane
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="text-white/80 text-lg md:text-xl"
                        >
                            Australia’s sunshine city for students, startups, and study success.
                        </motion.p>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="section bg-white py-10"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
            >
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: -8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block px-4 py-1 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm tracking-wide"
                        >
                            Why Choose Brisbane
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.05 }}
                            className="mt-4 text-3xl md:text-4xl font-bold text-gray-800"
                        >
                            Why Study in Brisbane?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-gray-600 mt-4"
                        >
                            Brisbane offers a friendly and affordable student lifestyle, strong research hubs, and close access to beaches and rainforests.
                        </motion.p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.35 }}
                            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg"
                        >
                            <h3 className="text-xl font-semibold text-primary-700 mb-3">Innovation & Research</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li><strong>Translational Research Institute (TRI)</strong> – Pioneering medical breakthroughs.</li>
                                <li><strong>QIMR Berghofer</strong> – Leading medical research facility.</li>
                                <li><strong>2032 Olympics Prep</strong> – Surge in infrastructure and green tech jobs.</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.35, delay: 0.05 }}
                            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg"
                        >
                            <h3 className="text-xl font-semibold text-primary-700 mb-3">Unbeatable Lifestyle</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li><strong>240 Sunny Days/Year</strong>: River, rainforest and beach access.</li>
                                <li><strong>Affordable Living</strong>: Cheaper than Sydney and Melbourne.</li>
                                <li><strong>Green City</strong>: Major parks and urban tree canopy.</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.35, delay: 0.1 }}
                            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg"
                        >
                            <h3 className="text-xl font-semibold text-primary-700 mb-3">Study Support</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>Friendly student services and international student programs.</li>
                                <li>Part-time jobs in hospitality, retail, and tourism.</li>
                                <li>Wide network of student accommodation options.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="relative bg-gradient-to-br from-blue-50 to-white py-14 px-6 md:px-16 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-cyan-200/60 blur-3xl" />
                    <div className="absolute bottom-0 right-20 w-52 h-52 rounded-full bg-blue-200/40 blur-3xl" />
                </div>

                <div className="relative max-w-6xl mx-auto space-y-16">
                    <div>
                        <h2 className="text-3xl font-extrabold text-primary-700 mb-6 text-center">
                            Top Places to Visit
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <motion.div
                                whileHover={{ y: -4, scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                className="p-5 rounded-2xl bg-white shadow-md border border-gray-200"
                            >
                                <h3 className="text-lg font-semibold mb-2">🏙️ Iconic Attractions</h3>
                                <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                    <li>South Bank Parklands – Streets Beach + markets.</li>
                                    <li>Lone Pine Koala Sanctuary – koalas and kangaroos.</li>
                                    <li>Story Bridge Climb – sunset views.</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -4, scale: 1.02 }}
                                transition={{ duration: 0.4, delay: 0.05 }}
                                className="p-5 rounded-2xl bg-white shadow-md border border-gray-200"
                            >
                                <h3 className="text-lg font-semibold mb-2">🎨 Arts & Culture</h3>
                                <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                    <li>QAGOMA – large modern art collection.</li>
                                    <li>Brisbane Powerhouse – music + theatre.</li>
                                    <li>Fortitude Valley – nightlife and live music.</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -4, scale: 1.02 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="p-5 rounded-2xl bg-white shadow-md border border-gray-200"
                            >
                                <h3 className="text-lg font-semibold mb-2">🌿 Nature Escapes</h3>
                                <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                    <li>Moreton Island – snorkel shipwrecks.</li>
                                    <li>Mount Coot-tha – skyline views.</li>
                                    <li>Springbrook – waterfalls + glow worms.</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-extrabold text-primary-700 mb-6 text-center">
                            Things to Do as a Student & Student Life Essentials
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {[
                                { title: 'Free Events', content:'Riverfire fireworks, Paniyiri Greek Festival, BrisAsia.' },
                                { title: 'Eat & Drink', content:'Eat Street Northshore: 180+ food stalls by the river. Fish Lane: Trendy cafes and street art.' },
                                { title: 'Part-Time Jobs', content:'Hospitality, research roles, or internships in booming sectors (health, tech).'},
                                { title: 'Transport', content:'Free City Loop buses, bike-friendly paths, and Cross River Rail (2025) for faster commutes.'},
                                { title: 'Housing', content:'Shared apartments in Kelvin Grove or West End (vibrant student hubs).'},
                                { title: 'Pro Tip', content:'Grab a Go Card for discounted travel!'},
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-lg"
                                >
                                    <h3 className="text-lg font-semibold text-black-700 mb-1">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.content}</p>
                                </motion.div>
                            ))}
                        </div>
                        <p className="mt-4 text-lg font-semibold text-primary-700 text-center">
                            Brisbane = Sunshine + Smart Careers + Adventure.
                        </p>
                    </div>
                </div>
            </motion.section>



            <section className="relative overflow-hidden bg-white py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(219,234,254,0.7),_transparent_24%)]" />
                <div className="container relative mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-extrabold text-slate-900">Accommodation Options</h2>
                        <p className="text-lg text-gray-600 mt-4">Understanding Co-renting and Sub-letting in Brisbane.</p>
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
                            className="overflow-hidden rounded-[32px] border border-sky-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                                <div className="relative overflow-hidden min-h-[280px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                                        alt="Co-renting in Brisbane"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">Accommodation in Brisbane</p>
                                        <h3 className="mt-2 text-2xl font-bold">Co-renting</h3>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 bg-gradient-to-b from-white to-sky-50/80">
                                    <p className="text-gray-700 leading-7 mb-4">
                                        Co-renting (formerly co-tenancy) is when multiple individuals rent a property together, sharing the responsibilities of the lease. Each co-renter signs the rental agreement and is equally responsible for rent payments and property upkeep.
                                    </p>
                                    <ul className="mt-5 space-y-3 text-sm text-gray-700">
                                        <li className="rounded-2xl bg-white border border-sky-100 px-4 py-3">Co-renters are responsible for the rent and maintenance.</li>
                                        <li className="rounded-2xl bg-white border border-sky-100 px-4 py-3">Everyone must be listed on the rental agreement.</li>
                                        <li className="rounded-2xl bg-white border border-sky-100 px-4 py-3">Disagreements should be resolved directly between co-renters.</li>
                                    </ul>
                                    <p className="mt-5 text-sm text-gray-500">
                                        Co-renters must ensure that the rental provider is notified when someone moves in or out to avoid complications.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="overflow-hidden rounded-[32px] border border-sky-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                                <div className="relative overflow-hidden min-h-[280px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
                                        alt="Sub-letting in Brisbane"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">Accommodation in Brisbane</p>
                                        <h3 className="mt-2 text-2xl font-bold">Sub-letting</h3>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 bg-gradient-to-b from-white to-blue-50/80">
                                    <p className="text-gray-700 leading-7 mb-4">
                                        Sub-letting involves a tenant renting out their space to another person. This can only happen with the approval of the rental provider (landlord). The head renter remains responsible for the property, and sub-letting should be disclosed properly.
                                    </p>
                                    <ul className="mt-5 space-y-3 text-sm text-gray-700">
                                        <li className="rounded-2xl bg-white border border-sky-100 px-4 py-3">The head renter must obtain written permission from the rental provider.</li>
                                        <li className="rounded-2xl bg-white border border-sky-100 px-4 py-3">Sub-letting without permission can result in eviction.</li>
                                        <li className="rounded-2xl bg-white border border-sky-100 px-4 py-3">The head renter must manage all property maintenance and repairs.</li>
                                    </ul>
                                    <p className="mt-5 text-sm text-gray-500">
                                        Sub-letting is not allowed unless the rental provider has given written consent. If a sub-renter is found without permission, they may be asked to vacate.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="overflow-hidden rounded-[32px] border border-sky-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                                <div className="relative overflow-hidden min-h-[280px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
                                        alt="Bond and responsibilities in Brisbane housing"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">Accommodation in Brisbane</p>
                                        <h3 className="mt-2 text-2xl font-bold">Bond & Responsibilities</h3>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 bg-gradient-to-b from-white to-sky-50/80">
                                    <p className="text-gray-700 leading-7 mb-4">
                                        Both co-renters and sub-renters must ensure that the bond is paid and handled correctly. The head renter is responsible for managing bonds in sub-letting scenarios, while co-renters usually share a bond equally.
                                    </p>
                                    <ul className="mt-5 space-y-3 text-sm text-gray-700">
                                        <li className="rounded-2xl bg-white border border-sky-100 px-4 py-3">The bond must be lodged with the Residential Tenancies Bond Authority (RTBA).</li>
                                        <li className="rounded-2xl bg-white border border-sky-100 px-4 py-3">Co-renters should transfer their bond portion if someone new moves in.</li>
                                        <li className="rounded-2xl bg-white border border-sky-100 px-4 py-3">Failure to properly handle the bond can result in delays during move-out and deductions.</li>
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
                        Queensland is home to several world-class universities offering a diverse range of courses. The state is known for its strong research output, industry connections, and a sunny, relaxed lifestyle. Here’s a breakdown of the major universities and popular courses in Queensland
                    </p>

                    {/* Grid - 3 items in a row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {universitiesBribane.map((uni, index) => (
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
                        src="https://cdn.britannica.com/58/74858-050-13370EC5/Brisbane-Queensland-Austl.jpg"
                        alt="Info Visual"
                        className="w-full max-h-[400px] object-contain rounded-xl shadow-lg"
                    />

                    <div>
                        <div>
                            {/* <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 font-medium rounded-full mb-3">Free Consultation</span> */}
                            <h4 className="text-4xl font-bold text-primary mb-8 text-left">Other's Information</h4>
                        </div>
                        <div className="space-y-4">
                            {infoData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    whileHover={{ scale: 1.01 }}
                                    transition={{ duration: 0.25 }}
                                >
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
                                            transition={{ duration: 0.3 }}
                                            className="p-4 pt-0 text-sm text-gray-700 leading-relaxed"
                                        >
                                            {item.content}
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Brisbane;

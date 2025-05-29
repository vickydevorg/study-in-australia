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
            <section className="relative bg-primary-800 py-12 md:py-24">
                <img
                    src="/images/Brisbane.png"
                    alt="Melbourne Skyline"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 "
                />
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6"> Study in Brisbane </h1>
                    </div>
                </div>
            </section>

            <section className="section bg-white py-10">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm tracking-wide">
                            Why Choose Brisbane
                        </span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
                            Why Study in Brisbane? Embrace the Tassie Lifestyle
                        </h2>
                        <p className="mt-4 mx-auto text-gray-600 text-lg">
                            Tasmania offers a unique blend of pristine nature, vibrant culture, and world-class education—all wrapped in a safe, welcoming community. Here’s why students love calling Tassie home
                        </p>
                    </div>
                </div>
            </section>

            <motion.section
                className="relative bg-gradient-to-br from-blue-50 to-white py-14 px-6 md:px-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto space-y-20">

                    {/* Section 1: Innovation & Lifestyle */}
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="flex items-center text-yellow-500 mb-3">
                                <h3 className="text-2xl text-primary-600 ml-3">Innovation & Research</h3>
                            </div>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li><strong>Translational Research Institute (TRI)</strong> – Pioneering medical breakthroughs.</li>
                                <li><strong>QIMR Berghofer</strong> – Leading medical research facility.</li>
                                <li><strong>2032 Olympics Prep</strong>: Surge in infrastructure and tech jobs (AI, logistics, green energy).</li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex items-center text-orange-500 mb-3">
                                <h3 className="text-2xl text-primary-600 ml-3">Unbeatable Lifestyle</h3>
                            </div>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li><strong>240 Sunny Days/Year</strong>: Study by the river, hike rainforests, or visit Gold Coast beaches (1hr away).</li>
                                <li><strong>Affordable Living</strong>: Cheaper than Sydney/Melbourne, with 50% student transport discounts.</li>
                                <li><strong>Green City</strong>: 44,000 hectares of nature reserves + 13,500 new trees planted yearly.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 2: Top Places to Visit */}

                </div>
            </motion.section>

            <motion.section
                className="relative bg-gradient-to-br from-blue-50 to-white py-14 px-6 md:px-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >

                {/* Top Places to Visit */}
                <div>
                    <h2 className="text-3xl font-extrabold text-primary-700 mb-6 border-l-4 text-center">
                        Top Places to Visit
                    </h2>

                    <div className="max-w-6xl mx-auto py-10">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-black-600">🏙️ Iconic Attractions</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>South Bank Parklands – Swim at Streets Beach, stroll through rainforest gardens, and hit weekend markets.</li>
                                <li>Lone Pine Koala Sanctuary – Cuddle koalas and feed kangaroos.</li>
                                <li>Story Bridge Adventure Climb – Panoramic city views at sunset.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-black-600">🎨 Arts & Culture</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>QAGOMA – Asia-Pacific’s largest modern art collection (free entry!).</li>
                                <li>Brisbane Powerhouse – Edgy theatre and live music by the river.</li>
                                <li>Fortitude Valley – Australia’s first entertainment precinct (live music, nightlife).</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-black-600">🌿 Nature Escapes</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Moreton Island – Snorkel shipwrecks, sandboard dunes, and spot dolphins.</li>
                                <li>Mount Coot-tha – Hike or drive for skyline views + botanic gardens.</li>
                                <li>Springbrook National Park – Waterfalls and glow-worm caves (90-min drive).</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Things to Do as a Student & Student Life Essentials */}
                <div className='max-w-6xl mx-auto py-10'>
                    <h2 className="text-3xl font-extrabold text-primary-700 mb-6  pl-4">
                        Things to Do as a Student & Student Life Essentials
                    </h2>

                    <div className="space-y-8 text-gray-800">

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-black-600">Free Events</h3>
                            <p>Riverfire fireworks, Paniyiri Greek Festival, BrisAsia.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-black-600">Eat & Drink</h3>
                            <p>Eat Street Northshore: 180+ food stalls by the river.<br />Fish Lane: Trendy cafes and street art.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-black-600">Part-Time Jobs</h3>
                            <p>Hospitality, research roles, or internships in booming sectors (health, tech).</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-black-600">Transport</h3>
                            <p>Free City Loop buses, bike-friendly paths, and Cross River Rail (2025) for faster commutes.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-black-600">Housing</h3>
                            <p>Shared apartments in Kelvin Grove or West End (vibrant student hubs).</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-black-600">Pro Tip</h3>
                            <p>Grab a Go Card for discounted travel!</p>
                        </div>

                        <p className="mt-4 text-lg font-semibold text-primary-700">
                            Brisbane = Sunshine + Smart Careers + Adventure.
                        </p>
                    </div>
                </div>
            </motion.section>



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

export default Brisbane;
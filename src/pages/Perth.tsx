import React, { useState } from 'react';
import { ThermometerSun, Building2, BusFront, CarFront } from 'lucide-react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { universitiesperth } from "../data/universities";

const Perth: React.FC = () => {
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

            <section className="section bg-white py-10">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm tracking-wide">
                            Places in Perth, Western Australia
                        </span>
                        <p className="mt-4 max-2xl mx-auto text-gray-600 text-lg">
                            Perth, Australia’s sunniest capital city, blends urban sophistication with stunning natural beauty. From pristine beaches to lush parks and vibrant cultural hubs, here are the top places to explore:
                        </p>
                    </div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                    >
                        
                        <div className="container">
                            <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
                            <h2 className="text-2xl font-bold mb-4">🌊 Iconic Beaches & Waterfronts</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Cottesloe Beach</strong> – Perth’s most famous beach, perfect for swimming, sunsets, and the annual Sculpture by the Sea exhibition.</li>
                                <li><strong>Scarborough Beach</strong> – A hotspot for surfers, with a buzzing esplanade full of bars and eateries.</li>
                                <li><strong>Elizabeth Quay</strong> – A scenic waterfront precinct with dining, ferries to South Perth, and the stunning Spanda sculpture.</li>
                                <li><strong>Swan River</strong> – Cruise, kayak, or cycle along Perth’s glittering river, with views of the city skyline.</li>
                            </ul>
                            </div>
                        </div>

                        <div className="container">
                            <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
                            <h2 className="text-2xl font-bold mb-4">🌿 Nature & Parks</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Kings Park & Botanic Garden</strong> – One of the world’s largest inner-city parks, offering bushwalking trails, wildflower displays, and panoramic views of Perth.</li>
                                <li><strong>Rottnest Island</strong> – Meet the adorable quokkas, snorkel in turquoise waters, or bike around this car-free paradise.</li>
                                <li><strong>Perth Zoo</strong> – Home to native Australian wildlife, including kangaroos, koalas, and Tasmanian devils.</li>
                                <li><strong>John Forrest National Park</strong> – A great spot for hiking, waterfalls, and wild kangaroos (just 30 mins from the city).</li>
                            </ul>
                            </div>
                        </div>

                        <div className="container">
                            <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
                            <h2 className="text-2xl font-bold mb-4">🏛️ Culture & History</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Fremantle (Freo)</strong> – A historic port town with convict-built Fremantle Prison, lively markets, and craft breweries.</li>
                                <li><strong>WA Museum Boola Bardip</strong> – A world-class museum showcasing Western Australia’s natural and cultural history.</li>
                                <li><strong>Art Gallery of Western Australia</strong> – Features Indigenous art, contemporary works, and international exhibitions.</li>
                                <li><strong>The Bell Tower</strong> – Climb this iconic landmark for views and try ringing the historic Swan Bells.</li>
                            </ul>
                            </div>
                        </div>

                        <div className="container">
                            <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
                            <h2 className="text-2xl font-bold mb-4">🛍️ Shopping & Entertainment</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Perth CBD (Murray & Hay Streets)</strong> – High-end shopping, laneway cafes, and street art.</li>
                                <li><strong>Northbridge</strong> – Perth’s nightlife hub, with bars, live music, and multicultural dining.</li>
                                <li><strong>Subiaco & Leederville</strong> – Trendy suburbs with boutique shops, brunch spots, and indie cinemas.</li>
                                <li><strong>Perth Cultural Centre</strong> – A hub of galleries, theatres, and the State Library.</li>
                            </ul>
                            </div>
                        </div>

                        <div className="container">
                            <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
                            <h2 className="text-2xl font-bold mb-4">🚗 Day Trips from Perth</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>The Pinnacles Desert</strong> – Otherworldly limestone formations in Nambung National Park.</li>
                                <li><strong>Margaret River</strong> – Famous for wineries, caves, and surf beaches (3-hour drive).</li>
                                <li><strong>Lancelin Sand Dunes</strong> – Try sandboarding on these massive white dunes.</li>
                                <li><strong>Penguin Island</strong> – Spot wild penguins and dolphins (near Rockingham).</li>
                            </ul>
                            </div>
                        </div>

                        <div className="container">
                            <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
                            <h2 className="text-2xl font-bold mb-4">🍽️ Food & Drink Hotspots</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Elizabeth Quay & Crown Perth</strong> – Fine dining with river views.</li>
                                <li><strong>Fremantle Markets</strong> – Fresh produce, gourmet street food, and handmade crafts.</li>
                                <li><strong>Swan Valley</strong> – WA’s oldest wine region, just 25 mins from Perth (wineries, breweries, and chocolate factories).</li>
                            </ul>
                            </div>
                        </div>
                        
                    </motion.div>
                </div>
            </section>

            <section id="tips" className="bg-primary-500 p-6 shadow-md space-y-3 section py-10 text-white text-center">
                <div className="container">
                    <h2 className="text-2xl font-bold">✈️ Quick Perth Travel Tips</h2>
                    <ul className="list-disc pl-5 list-none">
                    <li><strong>Best Time to Visit:</strong> Spring (Sep–Nov) for wildflowers or Autumn (Mar–May) for mild weather.</li>
                    <li><strong>Getting Around:</strong> Free CAT buses in the city, trains to Fremantle, and ferries to Rottnest.</li>
                    <li><strong>Must-Do:</strong> A sunset drink at Cottesloe Beach Hotel or a river cruise on the Swan River.</li>
                    </ul>
                    <p className="text-lg font-medium">
                    Perth is a city of endless blue skies, golden beaches, and laid-back charm—ready for you to explore!
                    </p>
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
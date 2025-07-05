import React, { useState } from 'react';
import { ThermometerSun, Building2, BusFront, CarFront } from 'lucide-react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { universitiestasmania } from "../data/universities";

const Tasmania: React.FC = () => {
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
                "Cool temperate oceanic – mild summers (Dec–Feb, 12–21°C) and cold winters (Jun–Aug, 3–11°C). Rainy year-round, can snow in highlands.",
        },
        {
            title: "Working Culture",
            icon: <Building2 className="w-5 h-5 text-primary-600" />,
            content:
                "Slow-paced and community-focused – small-town vibe. Key industries: agriculture, tourism, public sector. Business casual, very relaxed. 9 AM–5 PM standard, strong focus on work-life balance.",
        },
        {
            title: "Public Transport",
            icon: <BusFront className="w-5 h-5 text-primary-600" />,
            content: (
                <>
                    <p>
                        Modes: Buses only. Managed by{" "}
                        <strong>Metro Tasmania</strong> (Hobart, Launceston, Burnie).
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>No trains or trams.</li>
                        <li>Smart Card: <strong>Greencard</strong> (Hobart only).</li>
                        <li>Coverage: Poor – car-dependent city.</li>
                        <li>Pros: Cheap fares.</li>
                        <li>Cons: Infrequent services, limited routes.</li>
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
                        Licensing handled by <strong>Service Tasmania</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Learner’s Permit (16+): Pass theory test.</li>
                        <li>Practical Test: Must hold learner’s for 12 months (if under 25).</li>
                        <li>P1 License (Red P): Valid for 1 year (must be 17+).</li>
                        <li>P2 License (Green P): Valid for 2 years.</li>
                        <li>Full License: Granted after completing P2.</li>
                        <li>No minimum logbook hours required.</li>
                        <li>Overseas license valid for 3 months.</li>
                    </ul>
                </>
            ),
        }
    ];


    return (
        <>
            <section className="relative bg-primary-800 py-12 md:py-24">
                <img
                    src="https://tasmaniatours.com.au/wp-content/uploads/sites/2/2021/07/132779-56-scaled.jpg"
                    alt="Melbourne Skyline"
                    className="absolute inset-0 w-full h-full object-cover opacity-20 "
                />
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6"> Study in Tasmania </h1>
                    </div>
                </div>
            </section>

            <section className="section bg-white py-10">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm tracking-wide">
                            Why Choose Tasmania
                        </span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
                            Why Study in Tasmania? Embrace the Tassie Lifestyle
                        </h2>
                        <p className="mt-4 mx-auto text-gray-600 text-lg">
                            Tasmania offers a unique blend of pristine nature, vibrant culture, and world-class education—all wrapped in a safe, welcoming community. Here’s why students love calling Tassie home
                        </p>
                    </div>
                </div>
            </section>

            <motion.section
                className="relative bg-gray-50 py-5 px-6 md:px-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">🎓 Top Reasons to Study in Tasmania</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                            <div className="h-2 bg-green-600"></div>
                            <div className="p-6">
                                <div className="flex items-center mb-4 text-indigo-700">
                                    <h3 className="text-xl font-semibold ml-2">🌿 Unmatched Natural Beauty</h3>
                                </div>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Cleanest air & water in the world, with wilderness at your doorstep.</li>
                                    <li>Adventure-ready: Hike kunanyi/Mount Wellington, kayak the River Derwent, or surf at nearby beaches—all within 20km of Hobart.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                            <div className="h-2 bg-indigo-600"></div>
                            <div className="p-6">
                                <div className="flex items-center mb-4 text-indigo-700">
                                    <h3 className="text-xl font-semibold ml-2">🏛️ World-Class Education</h3>
                                </div>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>University of Tasmania (UTAS): Ranked in the top 2% globally, renowned for marine science, agriculture, and Antarctic research.</li>
                                    <li>Small class sizes: Personalized learning with strong industry connections.</li>
                                    <li>Affordable living: Lower costs than mainland Australia, with scholarships for international students.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                            <div className="h-2 bg-teal-600"></div>
                            <div className="p-6">
                                <div className="flex items-center mb-4 text-indigo-700">
                                    <h3 className="text-xl font-semibold ml-2">🏡 Safe & Welcoming Communities</h3>
                                </div>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Australia’s safest cities: Walkable, friendly, and multicultural.</li>
                                    <li>Rich culture: Historic towns with modern amenities, boutique cafes, and vibrant festivals (Dark Mofo, Taste of Tasmania).</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                            <div className="h-2 bg-orange-500"></div>
                            <div className="p-6">
                                <div className="flex items-center mb-4 text-indigo-700">
                                    <h3 className="text-xl font-semibold ml-2">🍽️ Foodie Paradise</h3>
                                </div>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Farm-to-table dining, urban wineries, and whisky distilleries (like Lark).</li>
                                    <li>Salamanca Market: A Saturday tradition for 50+ years, offering local crafts and fresh produce.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.section>

            <motion.section
                className="relative bg-gradient-to-br from-blue-50 to-white py-14 px-6 md:px-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Side - Places to Explore */}
                    <div>
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">🌟 Top Places to Explore</h2>

                        <div className="space-y-12">
                            <div>
                                <div className="flex items-center text-pink-600 mb-3">
                                    <h3 className="text-2xl font-semibold ml-3">🏙️ Hobart Highlights</h3>
                                </div>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li><strong>MONA</strong> – Edgy, world-famous gallery with a subterranean design.</li>
                                    <li><strong>Salamanca Place</strong> – Historic sandstone warehouses turned into galleries, bars, and cafes.</li>
                                    <li><strong>TMAG</strong> – Tasmanian Museum & Art Gallery showcasing Indigenous and colonial history.</li>
                                    <li><strong>Battery Point</strong> – Quaint 19th-century cottages and cobblestone streets.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex items-center text-green-600 mb-3">
                                    <h3 className="text-2xl font-semibold ml-3">🌲 Nature Escapes</h3>
                                </div>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li><strong>kunanyi/Mount Wellington</strong> – Hike or bike for panoramic city views.</li>
                                    <li><strong>Bruny Island</strong> – Spot wildlife, eat fresh oysters, and stroll rugged coastlines.</li>
                                    <li><strong>Port Arthur Historic Site</strong> – UNESCO-listed convict ruins (90-min drive).</li>
                                    <li><strong>Freycinet National Park</strong> – Wineglass Bay’s iconic white sands (2.5hrs away).</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex items-center text-indigo-600 mb-3">
                                    <h3 className="text-2xl font-semibold ml-3">🎪 Culture & Events</h3>
                                </div>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li><strong>Dark Mofo (Winter Festival)</strong> – Bonfires, art installations, and midnight feasts.</li>
                                    <li><strong>Taste of Tasmania</strong> – Summer food and wine festival on the waterfront.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Student Life Essentials */}
                    <div>
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">🎒 Student Life Essentials</h2>

                        <div className="space-y-12">
                            <div>
                                <div className="flex items-center text-purple-600 mb-3">
                                    <h3 className="text-2xl font-semibold ml-3">📚 Study Perks</h3>
                                </div>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>UTAS campuses in Hobart, Launceston, and Burnie—each with unique specialties.</li>
                                    <li>Internships in thriving industries: aquaculture, renewable energy, and tourism.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex items-center text-blue-600 mb-3">
                                    <h3 className="text-2xl font-semibold ml-3">🚌 Getting Around</h3>
                                </div>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Walkable cities: Hobart’s CBD is compact and bike-friendly.</li>
                                    <li>Metro buses: Affordable transport across the state.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex items-center text-yellow-600 mb-3">
                                    <h3 className="text-2xl font-semibold ml-3">💰 Budget Tips</h3>
                                </div>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Cheap eats: Farmgate Market (Sundays) or local fish ’n’ chips.</li>
                                    <li>Free adventures: Coastal walks, museum entry days, and public parks.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex items-center text-teal-600 mb-3">
                                    <h3 className="text-2xl font-semibold ml-3">🗺️ Insider Tips for Students</h3>
                                </div>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Download the Discover Tasmania app for real-time event updates and hidden gems.</li>
                                    <li>Join UTAS clubs: From mountaineering to whisky tasting!</li>
                                    <li>Weekend trips: Cradle Mountain (3hrs) or Maria Island (ferry from Triabunna).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center text-lg font-semibold text-primary-800 mt-12">
                    Tasmania = Fresh air, fresh food, and fresh opportunities
                </p>
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
                        Tasmania, Australia's island state, offers high-quality education in a stunning natural environment with a relaxed lifestyle. Here are the key universities and courses available in Tasmania:
                    </p>

                    {/* Grid - 3 items in a row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {universitiestasmania.map((uni, index) => (
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
                                            {uni.keyFeatures.map((keyFeature, idx) => (
                                                <li key={idx}>{keyFeature}</li>
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
                        src="https://tasmaniatours.com.au/wp-content/uploads/sites/2/2021/07/132779-56-scaled.jpg"
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

export default Tasmania;
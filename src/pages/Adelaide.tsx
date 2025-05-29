import React, { useState } from 'react';
import { ThermometerSun, Building2, BusFront, CarFront } from 'lucide-react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { universitiesadelaide } from "../data/universities";

const Adelaide: React.FC = () => {
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
                "Mediterranean – hot, dry summers (Dec–Feb, 17–30°C) and cool, wet winters (Jun–Aug, 7–15°C). Known for sudden temperature drops in summer ('Adelaide heat then cold snap').",
        },
        {
            title: "Working Culture",
            icon: <Building2 className="w-5 h-5 text-primary-600" />,
            content:
                "Slow-paced but professional – less hustle than Sydney/Melbourne. Strong in healthcare, education, and manufacturing. Business casual, relaxed Fridays. Standard hours (9 AM–5 PM), good work-life balance.",
        },
        {
            title: "Public Transport",
            icon: <BusFront className="w-5 h-5 text-primary-600" />,
            content: (
                <>
                    <p>
                        Modes: Trains, trams, buses. Managed by{" "}
                        <strong>Adelaide Metro</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Trams: 1 line (Glenelg to CBD, free in city center).</li>
                        <li>Trains: 4 lines (limited coverage).</li>
                        <li>Buses: Extensive network.</li>
                        <li>Smart Card: <strong>Metrocard</strong>.</li>
                        <li>Coverage: Decent in inner suburbs, weaker in outer areas.</li>
                        <li>Pros: Free tram in CBD, affordable.</li>
                        <li>Cons: Trains are slow, limited frequency.</li>
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
                        Licensing handled by <strong>Service SA</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Learner’s Permit (16+): Pass theory test.</li>
                        <li>Hazard Perception Test (HPT): After 12 months (if under 25).</li>
                        <li>Practical Test: Complete 75+ hours (15 at night) if under 25.</li>
                        <li>P1 License (Red P): Must be 17+, valid for 1 year.</li>
                        <li>P2 License (Green P): Valid for 2 years.</li>
                        <li>Full License: Granted after completing P2.</li>
                        <li>Overseas license holders must convert within 3 months.</li>
                    </ul>
                </>
            ),
        },
    ];

    return (
        <>
            <section className="relative bg-primary-800 py-12 md:py-24">
                <img
                    src="/images/Adelaide.png"
                    alt="Melbourne Skyline"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 "
                />
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6"> Study in Adelaide </h1>
                    </div>
                </div>
            </section>

            <section className="section bg-white py-10">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm tracking-wide">
                            Why Choose Adelaide
                        </span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
                            Study in Adelaide – City of Excellence, Opportunity & Adventure
                        </h2>
                        <p className="mt-4 mx-auto text-gray-600 text-lg">
                            Adelaide blends world-class education, affordable living, and unforgettable lifestyle experiences. With a welcoming community and direct pathways to global careers, it’s the perfect place to grow, learn, and explore.
                        </p>
                    </div>
                </div>
            </section>

            <motion.section
                className="bg-white py-16 px-6 md:px-20 text-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold mb-10 text-center">10 Reasons to Study in Adelaide – A City of Excellence, Opportunity & Adventure!</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🎓 #1 Thrive in a City of Excellence</h3>
                            <p>Study where Nobel Prize winners and world-class researchers began their journeys. Adelaide’s top-tier institutions and expert educators will help you achieve your goals.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">💼 #2 Part-Time Jobs Made Easy</h3>
                            <p>Score a job while you study! StudyAdelaide’s Job Shop connects international students with hundreds of local employers actively hiring.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">💰 #3 Affordable Living, Unforgettable Life</h3>
                            <p>Enjoy one of Australia’s most budget-friendly cities! Save on accommodation, transport, and food—so you can spend more on experiences.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🚀 #4 Clear Pathways to Success</h3>
                            <p>Adelaide’s universities and colleges partner with global companies to create direct routes to your dream career.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🚌 #5 Easy & Cheap Transport</h3>
                            <p>Get 50% off public transport as an international student—plus free trams and buses in the city center!</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🤝 #6 A Welcoming Community</h3>
                            <p>Join a multicultural hub where students from 130+ countries feel at home. Locals are friendly, and making friends is easy!</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🍴 #7 A Food Lover’s Paradise</h3>
                            <p>From cheap eats to award-winning restaurants, Adelaide’s food scene rivals the world’s coolest cities.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🎉 #8 Festivals & Fun All Year</h3>
                            <p>With 400+ annual events (Fringe Festival, WOMADelaide, sports, and more), boredom doesn’t exist here!</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🌿 #9 Nature at Your Doorstep</h3>
                            <p>Beaches, wildlife, wine regions, and the Outback are just a short trip away. Hello, kangaroos and sunsets!</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🏢 #10 Global Companies Await</h3>
                            <p>Microsoft, Tesla, Deloitte, and more call Adelaide home. Gain work experience and launch your career locally.</p>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-lg font-medium">📢 Ready to make Adelaide your study destination?</p>
                        <p className="mt-2 text-blue-600 underline">👉 Explore more: <a href='https://studyadelaide.com/' target="_blank" rel="noopener noreferrer">studyadelaide.com</a></p>
                        <p className="text-sm mt-1 text-gray-500">📸 Follow the adventure: #StudyAdelaide @StudyAdelaide</p>
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
                        South Australia (SA) is home to several high-quality universities offering a diverse range of courses. The state capital, Adelaide, is known for its affordability, high quality of life, and strong education sector. Below are the key universities and popular courses in South Australia:
                    </p>

                    {/* Grid - 3 items in a row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {universitiesadelaide.map((uni, index) => (
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
                        src="https://www.shutterstock.com/image-photo/adelaide-south-australia-december-11-600nw-2565890935.jpg"
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

export default Adelaide;
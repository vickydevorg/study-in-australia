import React, { useState } from 'react';
import { ThermometerSun, Building2, BusFront, CarFront } from 'lucide-react';

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

export default Brisbane;
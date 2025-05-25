import React from 'react';
import { CalendarDays, UserCheck, FileText, Stethoscope, Hammer, Briefcase, Banknote, ShieldCheck } from 'lucide-react';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { universitiestasmania } from "../data/universities";

const Tasmania: React.FC = () => {
    React.useEffect(() => {
        document.title = 'Student Visa Information | Study in Australia';
    }, []);
    return (
        <>
            <section className="relative bg-primary-800 py-12 md:py-24">
                <img 
                src="/images/Melbourne_city.jpg" 
                alt="Melbourne Skyline" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 "
                />
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6"> Study in Tasmania </h1>
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
                    
                    {/* <div className="container mx-auto py-6">
                        <div className="flex flex-col md:flex-row border border-gray-400 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                            <img src="https://placehold.co/600x200.png" alt="Study Areas in Sydney" className="rounded-lg shadow-md" />
                            <div className="bg-white p-8 md:w-1/2">
                                <h3 className="text-2xl font-bold mb-4">Key Study Areas in Sydney</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li><strong>Business & Management:</strong> MBA, Finance, Marketing</li>
                                    <li><strong>Engineering & IT:</strong> AI, Robotics, Data Science</li>
                                    <li><strong>Health Sciences:</strong> Medicine, Nursing, Public Health</li>
                                    <li><strong>Law & Social Sciences</strong></li>
                                    <li><strong>Creative Arts & Design:</strong> UTS & UNSW are top-ranked</li>
                                    <li><strong>Environmental Science & Sustainability</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                </div>
            </motion.section>
        </>
    )
}


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

export default Tasmania;
import React, { useState } from 'react';
import { FileText, Stethoscope, Hammer, Briefcase, Banknote, ShieldCheck, ThermometerSun, Building2,BusFront, CarFront, Award } from 'lucide-react';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { universitiesMelbourne } from "../data/universities";

const Melbourne: React.FC = () => {
    const [expanded, setExpanded] = useState<number | null>(null);
    const toggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
    };
    React.useEffect(() => {
        document.title = 'Student Visa Information | Study in Australia';
    }, []);

    const visaTypes = [
        {
            name: 'Construction & Engineering',
            description: 'Many roles in the industries of construction and engineering were identified as being in shortage  Metal fitters and machinists, electricians, civil engineers, construction managers and motor mechanics were all noted as being in the top 20 in-demand professions in the country. With Victoria`s population projected to reach 10 million by 2051, Victoria`s Big Build is delivering more than 180 major road and rail projects to keep Victorians moving in the decades to come Victoria’s Big Build graduate program offers a 2-year paid program for university graduates across a wide range of disciplines – international graduates are eligible if they hold full Australian working rights for the entire duration of the program, for example, if they hold a temporary graduate visa',
            icon: <Hammer className="w-6 h-6" />
        },
        {
            name: 'Healthcare',
            description: 'Australia’s need for health professionals has continued to grow and there are opportunities for registered nurses, general practitioners and resident medical officers.',
            icon: <Stethoscope className="w-6 h-6" />
        },
        {
            name: 'Education & Social Assistance',
            description: 'Australia is facing a shortage of teachers, particularly in early childhood and pre-primary schools. Additionally, social assistance roles, including social workers, child care workers and aged and disability carers, are in high demand.',
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            name: 'Business & IT',
            description: 'Shortages exist in professional occupations in information technology, particularly software and applications programmers. The Australian Computer Society provides resources and networking opportunities for emerging IT professionals. In business, there is a particular need for advertising and marketing professionals, human resource professionals and public relations and sales managers. Ready to take the first step towards an amazing future? Use our Course Finder to discover your perfect course.',
            icon: <Briefcase className="w-6 h-6" />
        }
    ];

    const infoData = [
        {
            title: "Climate",
            icon: <ThermometerSun className="w-5 h-5 text-emerald-600" />,
            content:
            "Temperate oceanic – 'four seasons in one day.' Summers (Dec–Feb, 14–26°C), winters (Jun–Aug, 6–14°C). Unpredictable weather with rain, wind, and sudden changes.",
        },
        {
            title: "Working Culture",
            icon: <Building2 className="w-5 h-5 text-emerald-600" />,
            content:
            "Fast-paced, corporate, and creative – finance, tech, and arts hub. Business formal in CBD, smart casual in startups. Longer hours in finance/law with some late finishes. Strong café culture – meetings often held at cafés.",
        },
        {
            title: "Public Transport",
            icon: <BusFront className="w-5 h-5 text-emerald-600" />,
            content: (
            <>
                <p>
                Modes: Trains, trams, buses, and ferries (limited), managed by{" "}
                <strong>Public Transport Victoria (PTV)</strong>.
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                <li>Trams: Largest network in the world (CBD-centric).</li>
                <li>Trains: 16 lines radiating from the CBD.</li>
                <li>Buses: Fill network gaps but can be unreliable.</li>
                <li>Smart Card: <strong>myki</strong>.</li>
                <li>Coverage: Excellent in the inner city, patchy in outer suburbs.</li>
                <li>Pros: Frequent trams, 24-hour weekend trains/trams.</li>
                <li>Cons: Overcrowded peak trains, myki system criticized.</li>
                </ul>
            </>
            ),
        },
        {
            title: "Driving & License Info",
            icon: <CarFront className="w-5 h-5 text-emerald-600" />,
            content: (
            <>
                <p>
                Licensing handled by <strong>VicRoads</strong>.
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                <li>Learner’s Permit (16+): Pass theory and eyesight tests.</li>
                <li>Hazard Perception Test (HPT): After 12 months (if under 21).</li>
                <li>Practical Test: Requires 120+ logged hours (20 at night).</li>
                <li>P1 License (Red P): Must be 18+, valid for 1 year.</li>
                <li>P2 License (Green P): Valid for 3 years.</li>
                <li>Full License: Granted after completing P2.</li>
                <li>Overseas license holders can drive for up to 6 months.</li>
                </ul>
            </>
            ),
        },
    ];
    const reasons = [
    {
        icon: <GraduationCap className="w-6 h-6" />,
        title: "Top Global Rankings",
        description:
        "#1 Student City in Australia, #5 globally. Ranked 8th safest and voted the world’s friendliest city. Melbourne is also Australia's most liveable city (#4 globally).",
    },
    {
        icon: <Award className="w-6 h-6" />,
        title: "Things to Do",
        description:
        "From sports to arts, there’s always something happening in Melbourne: Formula One Grand Prix, Boxing Day Test & Australian Open, Music festivals, exhibitions, and cultural events ",
    },
    {
        icon: <Briefcase className="w-6 h-6" />,
        title: "Student Support",
        description:
        "Free employment and accommodation legal advice. Help understanding your rights and the law. Support from Study Melbourne Hub and ISEALS",
    }
    ];
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };
    return (
        <>
            <section className="relative bg-primary-800 py-12 md:py-24">
                <img 
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/75/b3/b3/glorious-fed-square.jpg" 
                alt="Melbourne Skyline" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 "
                />
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6"> Study in Melbourne </h1>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden section bg-white py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(187,247,208,0.45),_transparent_26%)]" />
                <div className="container relative">
                    <div className="section-title">
                        <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 font-medium rounded-full mb-3 shadow-sm">
                            Why Choose Melbourne
                        </span>
                        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                            Melbourne is one of Australia’s most culturally and socially diverse cities with over 40% of its residents born overseas, and it's extremely linguistically diverse.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
                    >
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -6, scale: 1.01 }}
                                className="rounded-3xl border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/70 p-6 group shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-slate-900">{reason.title}</h3>
                                <p className="text-gray-600 leading-7">{reason.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            
            <motion.section 
                className="relative overflow-hidden section bg-gradient-to-b from-emerald-50 via-white to-lime-50 py-14 md:py-14"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.14),_transparent_24%)]" />
                <div className="container relative">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">In-Demand Skills & Careers</h2>
                    <p className="text-xl text-gray-600 text-center mb-8">
                    According to the Jobs and Skills Report 2023 and Victorian Labour Market Report 2023, key industries with job opportunities include:
                    </p>

                    <Tab.Group>
                    <Tab.List className="flex flex-wrap justify-center gap-4 pb-4">
                        {visaTypes.map((visa, index) => (
                        <Tab key={index} className={({ selected }) =>
                            `px-5 py-2.5 rounded-full text-sm font-medium border transition shadow-sm ${
                            selected ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-white border-emerald-100 text-slate-700 hover:bg-emerald-50'
                            }`
                        }>
                            {visa.name}
                        </Tab>
                        ))}
                    </Tab.List>

                    <Tab.Panels className="mt-8">
                        {visaTypes.map((visa, index) => (
                        <Tab.Panel key={index}>
                            <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35 }}
                            className="overflow-hidden shadow-lg border border-emerald-100 rounded-3xl bg-white">
                            <div className="p-6 bg-gradient-to-r from-emerald-600 to-green-500 text-white">
                                <div className="flex items-center">
                                {visa.icon}
                                <h3 className="text-xl font-semibold ml-2">{visa.name}</h3>
                                </div>
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-gray-700 leading-7 mb-4">{visa.description}</p>
                            </div>
                            </motion.div>
                        </Tab.Panel>
                        ))}
                    </Tab.Panels>
                    </Tab.Group>
                </div>
            </motion.section>

            <motion.section 
                    className="relative overflow-hidden bg-gradient-to-r from-emerald-50 via-white to-lime-50 py-14 md:py-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.12),_transparent_35%)]" />
                <div className="container relative text-center">
                    <div className="flex justify-center mb-4">
                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md border border-emerald-100">
                            <HiOutlineBuildingOffice2 className="w-10 h-10 text-emerald-600" />
                        </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Victoria’s Big Build
                    </h2>
                    <p className="text-gray-700 mb-2 max-w-2xl mx-auto leading-7">
                        Over <strong>180 major road and rail projects</strong> are transforming Victoria’s infrastructure.
                    </p>
                    <p className="text-gray-700 mb-2 max-w-2xl mx-auto leading-7">
                        The <strong>Graduate Program</strong> offers a <strong>2-year paid opportunity</strong> for university grads.
                    </p>
                    <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-7">
                        Open to <strong>international graduates</strong> with full work rights (e.g., Temporary Graduate Visa).
                    </p>
                    <a 
                    href="https://bigbuild.vic.gov.au" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-medium shadow-md transition hover:bg-emerald-700 hover:-translate-y-0.5"
                    >
                        Learn More About the Graduate Program
                    </a>
                </div>
            </motion.section>

            <motion.section 
                    className="relative overflow-hidden bg-white py-14 px-6 md:px-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(220,252,231,0.95),_transparent_22%)]" />
                <div className="max-w-6xl mx-auto relative">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Working on a Student Visa</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-b from-white to-emerald-50/70 rounded-3xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-xl transition-all">
                            <div className="h-2 bg-emerald-500"></div>
                            <div className='p-5'>
                                <div className="flex items-center mb-4">
                                    <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center mr-3">
                                        <Briefcase className="text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        Working on a Student Visa
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-7">
                                    If you hold a Student (subclass 500) visa, you are permitted to work up to 48 hours
                                    per fortnight during the semester and unlimited hours during term breaks and holidays.
                                    This ensures that you can focus on your learning while gaining valuable work experience.
                                    However, it is important that working part time does not interfere with your studies.
                                    While employed, you must remain enrolled in your course, meet all attendance
                                    requirements and maintain satisfactory academic results.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-b from-white to-lime-50/80 rounded-3xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-xl transition-all">
                            <div className="h-2 bg-lime-500"></div>
                            <div className='p-5'>
                                <div className="flex items-center mb-4">
                                    <div className="w-11 h-11 rounded-2xl bg-lime-100 flex items-center justify-center mr-3">
                                        <Banknote className="text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        Opening a Bank Account
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-7">
                                    To be paid while working in Australia, you will need to open a bank account.
                                    You can open a bank account online before arriving in Australia or when you get here.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-b from-white to-emerald-50/70 rounded-3xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-xl transition-all">
                            <div className="h-2 bg-emerald-400"></div>
                            <div className='p-5'>
                                <div className="flex items-center mb-4">
                                    <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center mr-3">
                                        <FileText className="text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        Tax File Number
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-7">
                                You will need to have a Tax File Number (TFN) to work while you are here.
                                    Once you have arrived, you can apply for a TFN through the Australian Taxation Office.
                                    If you are in Australia for more than six months, you will be considered a resident
                                    for tax purposes and will have to pay income tax and submit an international student
                                    tax return each year.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-b from-white to-lime-50/80 rounded-3xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-xl transition-all">
                            <div className="h-2 bg-lime-400"></div>
                            <div className='p-5'>
                                <div className="flex items-center mb-4">
                                    <div className="w-11 h-11 rounded-2xl bg-lime-100 flex items-center justify-center mr-3">
                                        <ShieldCheck className="text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        Police and Working with Children Checks
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-7">
                                    For some jobs, you may be asked to provide a police check. This is a summary of
                                    your criminal history or involvement with the justice system.
                                    In jobs where you are in contact with children, such as education or childcare,
                                    you must submit a Working with Children Check. This may be required for paid
                                    employment, volunteering and internships.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-b from-white to-emerald-50/70 rounded-3xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-xl transition-all">
                            <div className="h-2 bg-green-500"></div>
                            <div className='p-5'>
                                <div className="flex items-center mb-4">
                                    <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center mr-3">
                                        <ShieldCheck className="text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        Australian Business Number
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-7">
                                    Most students will not need an Australian Business Number (ABN) to work in Australia.
                                    You are only required to have an ABN if you run your own business or are an independent
                                    contractor (e.g. a freelancer, rideshare driver or food courier).
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-emerald-50 py-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(187,247,208,0.7),_transparent_24%)]" />
                <div className="container relative mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
                    Top Universities & Master’s Programs
                    </h2>
                    <p className="text-xl text-gray-600 text-center mb-6">
                    Melbourne is a top destination for international students, offering world-class universities and a wide range of master's degree programs. Here’s a guide to some of the best universities and popular courses for international students:
                    </p>
                    
                    {/* Grid - 3 items in a row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {universitiesMelbourne && universitiesMelbourne.map((uni, index) => (
                        <motion.div
                        key={index}
                        className="bg-white border border-emerald-100 rounded-3xl shadow-sm hover:shadow-xl transition overflow-hidden p-6"
                        whileHover={{ scale: 1.03, y: -4 }}
                        >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center">
                                <HiOutlineAcademicCap className="text-emerald-600 w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold">{uni.name}</h3>
                        </div>
                        <p className="text-emerald-700 text-sm font-semibold mb-2">{uni.ranking}</p>

                        <div className="mb-4">
                            <h4 className="font-semibold text-sm mb-1">Popular Master&apos;s Programs:</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                            {uni.programs.map((program, idx) => (
                                <li key={idx}>{program}</li>
                            ))}
                            </ul>
                        </div>

                        {uni.scholarships && (
                            <div className="mb-4">
                            <h4 className="font-semibold text-sm mb-1">Scholarships:</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                {uni.scholarships.map((scholarship, idx) => (
                                <li key={idx}>{scholarship}</li>
                                ))}
                            </ul>
                            </div>
                        )}

                        <a
                            href={uni.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full mt-4 bg-emerald-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium text-center hover:bg-emerald-700 transition"                        >
                            Visit Website
                        </a>
                        </motion.div>
                    ))}
                    </div>
                    
                    {/* <div className="container mx-auto py-6">
                        <div className="flex flex-col md:flex-row border border-gray-400 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                        
                        <img src="https://placehold.co/600x200.png" alt="Co-renting" className=" rounded-lg shadow-md" />

                        <div className="bg-white p-8 md:w-1/2">
                            <h3 className="text-2xl font-bold mb-4">Key Considerations for International Students</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>Entry Requirements:</strong> Bachelor’s degree; some programs (like MBA) require work experience.</li>
                            <li><strong>English Proficiency:</strong> IELTS 6.5 overall (minimum 6.0 in each band); 7.0 for Health programs.</li>
                            <li><strong>Scholarships:</strong> Significant scholarships available for high-achieving international students.</li>
                            <li><strong>Post-Study Work Visa:</strong> Graduates can stay up to 3 years after completing a master's degree.</li>
                            </ul>
                        </div>

                        </div>
                    </div> */}
                </div>
            </motion.section>

            <section className="relative overflow-hidden bg-white py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(220,252,231,0.95),_transparent_24%)]" />
                <div className="container relative mx-auto px-4">
                    {/* Title Section */}
                    <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-slate-900">Accommodation Options</h2>
                    <p className="text-lg text-gray-600 mt-4">Understanding Co-renting and Sub-letting in Melbourne.</p>
                    </div>

                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                            <div className="relative overflow-hidden min-h-[280px]">
                                <img
                                    src="https://www.colive.com/blog/wp-content/uploads/2019/01/coliving.webp"
                                    alt="Co-renting"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Melbourne</p>
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
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                            <div className="relative overflow-hidden min-h-[280px]">
                                <img
                                    src="https://flatmates-res.cloudinary.com/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Ch_342%2Cq_auto%2Cw_414/fskh9y7hrm4sec866ppl"
                                    alt="Sub-letting"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Melbourne</p>
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
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                            <div className="relative overflow-hidden min-h-[280px]">
                                <img
                                    src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=900&q=80"
                                    alt="Bond & Responsibilities"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Melbourne</p>
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

                    {/* Legal Insights Section */}
                    <div className="text-center mt-12">
                        <h4 className="text-2xl font-semibold text-slate-900 mb-4">Legal Insights</h4>
                        <p className="text-lg text-gray-600 mb-6">
                            The Residential Tenancies Act 1997 provides comprehensive guidelines for both co-renting and sub-letting. It's important to understand your rights and responsibilities as a renter.
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
                className="relative overflow-hidden py-16 bg-gradient-to-b from-white to-emerald-50/70"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(187,247,208,0.8),_transparent_20%)]" />
                <div className="container relative mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <img
                    src="https://cdn.britannica.com/09/93309-050-DCAC1FDB/bridge-Yarra-River-Melbourne.jpg"
                    alt="Info Visual"
                    className="w-full max-h-[400px] object-contain rounded-3xl shadow-xl border border-emerald-100"
                />

                <div>
                    <div>
                        {/* <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 font-medium rounded-full mb-3">Free Consultation</span> */}
                        <h4 className="text-4xl font-bold text-emerald-700 mb-8 text-left">Other's Information</h4>
                    </div>
                    <div className="space-y-4">
                    {infoData.map((item, index) => (
                        <div key={index} className="border border-emerald-100 bg-white rounded-2xl overflow-hidden shadow-sm">
                        <button
                            className="w-full flex items-center justify-between p-4 hover:bg-emerald-50 transition-colors"
                            onClick={() => toggle(index)}
                        >
                            <div className="flex items-center gap-3">
                            {item.icon}
                            <span className="text-base font-semibold">{item.title}</span>
                            </div>
                            <span className="text-xl">{expanded === index ? "-" : "+"}</span>
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
    );
};

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

export default Melbourne;

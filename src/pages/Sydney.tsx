import React, { useState } from 'react';
import { ThermometerSun, Building2, BusFront, Briefcase, CarFront, Award, Stethoscope, BookOpen, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { universitiesSydney } from "../data/universities";

const Sydney: React.FC = () => {
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

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const infoData = [
        {
            title: "Climate",
            icon: <ThermometerSun className="w-5 h-5 text-primary-600" />,
            content:
                "Humid subtropical – warm summers (Dec–Feb, 18–26°C) and mild winters (Jun–Aug, 8–17°C). High humidity in summer, occasional heavy rain.",
        },
        {
            title: "Working Culture",
            icon: <Building2 className="w-5 h-5 text-primary-600" />,
            content:
                "Corporate and competitive – finance, tech, and law dominate. Business formal in CBD, smart casual in creative industries. Longer hours in finance (some workplaces expect late finishes). Networking is crucial (many after-work events).",
        },
        {
            title: "Public Transport",
            icon: <BusFront className="w-5 h-5 text-primary-600" />,
            content: (
                <>
                    <p>
                        Modes: Trains, buses, ferries, light rail. Managed by{" "}
                        <strong>Transport for NSW</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Trains: Extensive (Sydney Trains + intercity).</li>
                        <li>Ferries: Iconic (e.g., Manly, Parramatta River).</li>
                        <li>Light Rail: 2 lines (CBD & Inner West).</li>
                        <li>Buses: Extensive but traffic-delayed.</li>
                        <li>Smart Card: <strong>Opal</strong>.</li>
                        <li>Coverage: Best in Australia (but congestion issues).</li>
                        <li>Pros: Ferries are scenic, frequent trains.</li>
                        <li>Cons: Expensive, train delays common.</li>
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
                        Licensing handled by <strong>Service NSW</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Learner’s Permit (16+): Pass theory test.</li>
                        <li>Hazard Perception Test (HPT): After 10 months.</li>
                        <li>Practical Test: Complete 120+ hours (20 at night).</li>
                        <li>P1 License (Red P): Must be 17+, valid for 1 year.</li>
                        <li>P2 License (Green P): Valid for 2 years.</li>
                        <li>Full License: Granted after completing P2.</li>
                        <li>Logbook mandatory for under 25s.</li>
                        <li>Overseas license holders can drive for up to 3 months.</li>
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
                "#2 Student City in Australia, Top 10 globally. Sydney is consistently ranked among the world’s safest and most beautiful cities. A leading hub for education and innovation with globally ranked universities.",
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Things to Do",
            description:
                "Explore world-famous landmarks like the Sydney Opera House and Harbour Bridge. Enjoy Vivid Sydney, NYE fireworks, film and food festivals, beach culture, and major sporting events throughout the year.",
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Student Support",
            description:
                "Access free legal help, accommodation advice, and career workshops. Study NSW Hub offers community events, wellbeing support, and practical resources to help students thrive.",
        }
    ];

    const careers = [
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Construction & Engineering",
            description:
                "Major projects like Sydney Metro and Western Sydney Airport are driving demand for civil engineers, electricians, and construction managers. Programs like the NSW Infrastructure Traineeship support graduate entry.",
        },
        {
            icon: <Stethoscope className="w-6 h-6" />,
            title: "Healthcare",
            description:
                "NSW needs registered nurses, aged care workers, and medical officers to support growing health needs in both urban and rural areas.",
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Education & Community Services",
            description:
                "There's strong demand for early childhood educators, school teachers, social workers, and aged & disability carers across the state.",
        },
        {
            icon: <Laptop className="w-6 h-6" />,
            title: "Business & Information Technology",
            description:
                "Sydney’s tech and business hub needs software developers, marketing professionals, cybersecurity analysts, and HR managers. ACS NSW supports young IT professionals.",
        },
    ];

    const bubbleColors = [
        "bg-blue-100 text-blue-600",
        "bg-green-100 text-green-600",
        "bg-rose-100 text-rose-600",
        "bg-yellow-100 text-yellow-600",
    ];

    const borderColors = [
        "border-blue-600",
        "border-green-600",
        "border-rose-600",
        "border-yellow-500",
    ];

    const WorkingStudent = [
        {
            title: "Working on a Student Visa",
            content:
                "If you hold a Student (subclass 500) visa in Sydney, you're allowed to work up to 48 hours per fortnight during semesters, and unlimited hours during holidays. It’s important that part-time work doesn’t impact your studies—you must stay enrolled, attend classes regularly, and maintain good academic performance.",
        },
        {
            title: "Opening a Bank Account",
            content:
                "To receive payments in Australia, you need a local bank account. You can open one online before arrival or visit a branch once you’re in Sydney.",
        },
        {
            title: "Tax File Number (TFN)",
            content:
                "You must apply for a Tax File Number (TFN) to legally work in Sydney. Once you're in Australia, apply via the Australian Taxation Office. Staying over six months makes you a resident for tax purposes, meaning you must pay tax and file a student tax return yearly.",
        },
        {
            title: "Police & Working with Children Checks",
            content:
                "Some jobs, especially in education or childcare, require background checks. A Police Check may be needed, and roles involving children will require a valid Working with Children Check for both paid and volunteer work.",
        },
        {
            title: "Australian Business Number (ABN)",
            content:
                "You only need an ABN if you’re self-employed—like freelancing, delivery driving, or running a small business. Most student jobs don’t need one.",
        },
    ];
    const accommodationData = [
        {
            title: "Co-renting",
            content:
                "Co-renting in Sydney means two or more people rent a property together, sharing legal responsibility. All co-renters must be on the rental agreement and are jointly responsible for rent and property upkeep.",
            points: [
                "Each tenant is listed on the rental agreement.",
                "All co-renters are responsible for rent, bills, and maintenance.",
                "Conflicts should be resolved internally.",
                "The landlord must be notified when a tenant joins or leaves.",
            ],
            image : 'https://media.istockphoto.com/id/1320795558/photo/signing-on-the-agreement-term-of-car-rental-service-business-and-transportation-service.jpg?s=612x612&w=0&k=20&c=hc4z-DWUnx-O9u3AgtEQclZdFfWnO2Ch8heHJg5Q06U='
        },
        {
            title: "Sub-letting",
            content:
                "Sub-letting happens when a tenant rents out part or all of the property to someone else. This requires written permission from the property owner or real estate agent in Sydney.",
            points: [
                "Written permission from the rental provider is mandatory.",
                "Illegal sub-letting may lead to eviction.",
                "The main tenant handles repairs and rent.",
                "Unauthorized sub-tenants can be removed.",
            ],
            image : 'https://www.financialexpress.com/wp-content/uploads/2020/01/rent660.jpg?w=440'
        },
        {
            title: "Bond & Responsibilities",
            content:
                "In Sydney, bonds protect both parties. Co-renters typically split the bond equally. For sub-lets, the head tenant is responsible for lodging the bond correctly.",
            points: [
                "Bond must be lodged with NSW Fair Trading (Rental Bonds Online).",
                "Co-renters should update bond details when someone moves out.",
                "Incorrect handling may delay bond refunds.",
                "Disputes can be taken to NSW Civil and Administrative Tribunal (NCAT).",
            ],
            image : 'https://media.gettyimages.com/id/588263194/photo/fun-outdoors.jpg?s=612x612&w=gi&k=20&c=BWsmN7ENMg003ywW2eH5MU65qE8b1XFRu6ePUq3tC2Y='
        },
    ]

    return (
        <>
            <section className="relative bg-primary-800 py-12 md:py-24">
                <img
                    src="https://cdn.britannica.com/86/156586-050-EFB37140/Harbour-Bridge-Sydney.jpg"
                    alt="Melbourne Skyline"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 "
                />
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6"> Study in Sydney </h1>
                    </div>
                </div>
            </section>

            <section className="section bg-white py-10">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm tracking-wide">
                            Why Choose Sydney
                        </span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
                            A Global City Full of Opportunities
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
                            Sydney is Australia’s most iconic and globally recognised city, with stunning natural beauty, rich culture, and a diverse international student community.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                            >
                                <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 text-primary-700 text-2xl">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-600 text-base">{reason.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="bg-gray-50 py-10">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm tracking-wide">
                            In-Demand Skills & Careers
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Explore Career Growth in Sydney
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto mt-4">
                            Sydney is a hotspot for high-demand careers in infrastructure, healthcare, tech, and education.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                    >
                        {careers.map((career, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`relative bg-white border-l-4 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${borderColors[index % borderColors.length]}`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 flex items-center justify-center rounded-full ${bubbleColors[index % bubbleColors.length]}`}>
                                        {career.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                            {career.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">{career.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
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
                        {universitiesSydney.map((uni, index) => (
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
                                    className="block w-full mt-4 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-primary-700 transition"
                                >
                                    Visit Website
                                </a>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </motion.section>

            <section className="bg-gray-50 py-10">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="mb-14 text-center">
                        <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-2">
                            Work & Compliance
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Student Visa Info for Sydney
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto mt-4">
                            Everything international students need to know about working, banking, and legal requirements while living in Sydney.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {WorkingStudent.map((step, index) => (
                            <div key={index} className="relative pl-10">
                            <div className="absolute left-0 top-1 text-white bg-teal-600 w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {step.title}
                            </h3>
                                <p className="text-gray-600">{step.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-14 text-center">
                        <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium mb-2">
                            Living in Sydney
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Accommodation Options
                        </h2>
                        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                            Understand co-renting, sub-letting, and your responsibilities while living and studying in Sydney.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {accommodationData.map((data,) => (
                        <>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                    {data.title}
                                </h2>
                                <p className="text-gray-600 mb-6">{data.content}</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    {data.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="overflow-hidden rounded-2xl shadow-md">
                                <img
                                src={data.image}
                                alt="Student Accommodation in Sydney"
                                className="w-full h-full object-cover"
                                />
                            </div>
                        </>
                        ))}
                    </div>
                </div>
            </section>


            <motion.section
                className="py-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <img
                        src="https://cdn.britannica.com/86/156586-050-EFB37140/Harbour-Bridge-Sydney.jpg"
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

export default Sydney;
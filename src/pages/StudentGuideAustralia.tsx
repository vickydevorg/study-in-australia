import { motion } from "framer-motion";
import {
    HeartPulse,
    Plane,
    GraduationCap,
    Briefcase,
    Users,
} from "lucide-react";
import { facts } from "../data/universities";

const sections = [
    // {
    //     title: "Health Insurance",
    //     icon: <HeartPulse className="text-primary-600 w-6 h-6" />,
    //     content:
    //         "All international students in Australia must have Overseas Student Health Cover (OSHC). It helps cover doctor visits, hospital care, ambulance, and limited pharmaceuticals. OSHC must be arranged before arriving in Australia.",
    //     image: "https://thumbs.dreamstime.com/b/health-insurance-concept-doodle-chart-keywords-icons-78777274.jpg",
    // },
    {
        title: "Travel Guide",
        icon: <Plane className="text-primary-600 w-6 h-6" />,
        content:
            "Australia has a vast and well-connected travel network. Major cities are connected by flights, and public transport like buses, trains, and trams is reliable. Use travel cards like Opal (NSW), Myki (VIC), and Go Card (QLD).",
        image: "https://img.freepik.com/free-vector/tourists-wearing-face-masks_23-2148586886.jpg?semt=ais_hybrid&w=740",
    },
    {
        title: "Student Life in Australia",
        icon: <GraduationCap className="text-primary-600 w-6 h-6" />,
        content:
            "Student life is dynamic with on-campus clubs, part-time jobs, festivals, and vibrant multicultural communities. Cities like Melbourne and Sydney are student-friendly with events, discounts, and dedicated student hubs.",
        image: "https://www.shutterstock.com/image-photo/stylish-students-walking-along-hall-600nw-2507996211.jpg",
    },
    {
        title: "Career Opportunities",
        icon: <Briefcase className="text-primary-600 w-6 h-6" />,
        content:
            "Australia offers part-time work (up to 48 hours per fortnight) during semesters and full-time during breaks. Post-study work visas allow graduates to gain work experience. Sectors like IT, healthcare, and engineering are in demand.",
        image: "https://img.freepik.com/free-photo/visa-application-composition-with-australian-flag_23-2149117800.jpg?semt=ais_hybrid&w=740",
    },
    {
        title: "Student Testimonials",
        icon: <Users className="text-primary-600 w-6 h-6" />,
        content:
            "\"Studying in Australia has changed my life. I met friends from across the world and learned from world-class professors.\" – Aarti, India\n\"The balance of academics, part-time work, and travel is perfect here.\" – Miguel, Peru",
        image: "https://i.ytimg.com/vi/cU691j9KRhI/hqdefault.jpg",
    },
];

const data = {
    providers: ["CBHS", "AHM", "NIB", "Worldcare", "Medibank", "Bupa"],
    rows: [
        {
            title: "Price (Annual)",
            values: ["$411.48", "$435.95", "$442.12", "$460.29", "$466.25", "$519.00"],
        },
        {
            title: "Visa Compliance",
            values: ["Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
        },
        {
            title: "In-Hospital Treatment - Accommodation",
            values: [
                "All hospitals",
                "All hospitals",
                "Public & Agreement only",
                "Public & Agreement only",
                "All hospitals",
                "Public & Agreement only",
            ],
        },
        {
            title: "In-Hospital Treatment - Doctor Services (MBS)",
            values: ["100%", "100%", "100%", "100%", "100%", "100%"],
        },
        {
            title: "Out-of-Hospital - GP Consultation",
            values: [
                "Agreement: 100% cost\nNon-Agreement: 100% MBS",
                "100% MBS",
                "100% MBS",
                "100% MBS",
                "100% MBS",
                "100% MBS",
            ],
        },
        {
            title: "Out-of-Hospital - Telehealth",
            values: ["100% MBS", "100% MBS", "100% MBS", "85% MBS", "100% MBS", "100% MBS"],
        },
        {
            title: "Out-of-Hospital - Specialists",
            values: ["85% MBS", "85% MBS", "85% MBS", "85% MBS", "85% MBS", "100% MBS"],
        },
        {
            title: "Out-of-Hospital - Pathology/X-rays",
            values: ["85% MBS", "85% MBS", "85% MBS", "85% MBS", "85% MBS", "100% MBS"],
        },
        {
            title: "Prescription Medicines",
            values: [
                "$50/item limit, $31.60 co-pay",
                "Same",
                "Same",
                "Same",
                "$70/item limit, $31.60 co-pay",
                "Same",
            ],
        },
        {
            title: "Annual Limit",
            values: [
                "$500 (individual), $1000 (family)",
                "Same",
                "Same",
                "Same",
                "Same",
                "Same",
            ],
        },
        {
            title: "Waiting - Pre-existing Psychiatric",
            values: ["2 months", "2 months", "2 months", "0 months", "0 months", "2 months (waived)"],
        },
        {
            title: "Waiting - Pre-existing Conditions",
            values: ["12 months", "12 months", "12 months", "12 months", "12 months", "12 months"],
        },
        {
            title: "Waiting - Obstetrics",
            values: ["12 months", "12 months", "12 months", "12 months", "12 months", "12 months"],
        },
        {
            title: "Refund Policy",
            values: ["Limited fees", "Limited fees", "No fees", "No fees", "Limited fees", "No fees"],
        },
        {
            title: "Support Services",
            values: [
                "24/7 health & emergency line",
                "24/7 health & emergency line",
                "24/7 health line + in-person safety",
                "24/7 virtual doctor visits",
                "24/7 health & emergency line",
                "24/7 student health line",
            ],
        },
    ],
};

export default function StudentGuideAustralia() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-6"
                >
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Discover Life as a Student in Australia
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        Your guide to health, travel, student life, career, and real experiences
                    </p>
                </motion.div>
            </section>

            {/* Essentials Section */}


            <motion.section
                className="py-24"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="container">
                    <div className="overflow-x-auto text-center">
                        <div className="flex items-center gap-4 py-5 text-center">
                            <HeartPulse className="text-primary-600 w-6 h-6" />
                            <h3 className="text-3xl font-semibold text-gray-900">
                                Health Insurance
                            </h3>
                        </div>
                        <table className="min-w-full border border-gray-300 text-sm">
                            <thead className="bg-green-600 text-white sticky top-0 z-10">
                                <tr>
                                    <th className="p-3 text-left bg-green-700">Feature</th>
                                    {data.providers.map((provider, i) => (
                                    <th key={i} className="p-3 text-center border-l border-green-500">
                                        {provider}
                                    </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {data.rows.map((row, i) => (
                                    <tr key={i} className="hover:bg-green-50 transition duration-200">
                                    <td className="p-3 font-medium text-gray-700 whitespace-pre-line">{row.title}</td>
                                    {row.values.map((val, j) => (
                                        <td key={j} className="p-3 text-center whitespace-pre-line">
                                        {val}
                                        </td>
                                    ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="py-24"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-6 space-y-24">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="md:w-1/2 space-y-6">
                                <div className="flex items-center gap-4">
                                    {section.icon}
                                    <h3 className="text-3xl font-semibold text-gray-900">
                                        {section.title}
                                    </h3>
                                </div>
                                <p className="text-gray-700 text-lg whitespace-pre-line">
                                    {section.content}
                                </p>
                            </div>
                            <img
                                src={section.image}
                                alt={section.title}
                                className="md:w-1/2 w-full h-[350px] object-cover rounded-2xl shadow-md"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <section id="tips" className="bg-primary-500 p-6 shadow-md space-y-3 section py-10 text-white text-center">
                <div className="container">
                    <h2 className="text-2xl font-bold">✈️ Key Takeaways</h2>
                    <ul className="list-disc pl-5 list-none">
                        <li><strong>Cheapest Option:</strong>CBHS ($411.48)</li>
                        <li><strong>Best Hospital Coverage:</strong>CBHS, AHM, Medibank (all hospitals).</li>
                        <li><strong>Best Specialist Coverage:</strong>Bupa (100% MBS).</li>
                        <li><strong>No Waiting for Psychiatric:</strong>Worldcare & Medibank.</li>
                        <li><strong>Higher Prescription Limit:</strong>Medibank ($70/item).</li>
                    </ul>
                </div>
            </section>

            <section className="px-4 py-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-primary-700 mb-8">
                    🇦🇺 50 Amazing Facts About Australia
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {facts.map((fact, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-200"
                        >
                            <div className="flex items-start gap-3">
                                <span className="text-primary-600 font-bold text-lg">
                                    {index + 1}.
                                </span>
                                <p className="text-gray-700 text-sm">{fact}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

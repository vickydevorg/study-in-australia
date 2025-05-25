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
    {
        title: "Health Insurance",
        icon: <HeartPulse className="text-primary-600 w-6 h-6" />,
        content:
            "All international students in Australia must have Overseas Student Health Cover (OSHC). It helps cover doctor visits, hospital care, ambulance, and limited pharmaceuticals. OSHC must be arranged before arriving in Australia.",
        image: "https://thumbs.dreamstime.com/b/health-insurance-concept-doodle-chart-keywords-icons-78777274.jpg",
    },
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

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { universitiescanberra } from "../data/universities";
import {
    Building2,
    BusFront,
    CarFront,
    ThermometerSun,
    Sparkles,
    Landmark,
    Trees,
    Theater,
    UtensilsCrossed,
    GraduationCap,
    MapPinned,
    Wallet,
} from 'lucide-react';

const Canberra: React.FC = () => {
    const [expanded, setExpanded] = useState<number | null>(null);
    const toggle = (index: number) => {
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
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: 'easeOut' },
        },
    };

    const infoData = [
        {
            title: "Climate",
            icon: <ThermometerSun className="w-5 h-5 text-primary-600" />,
            content:
                "Temperate continental climate with warm summers and cold winters. Frost is common in winter, and Canberra enjoys low humidity with clear skies through much of the year.",
        },
        {
            title: "Working Culture",
            icon: <Building2 className="w-5 h-5 text-primary-600" />,
            content:
                "Government and policy-related jobs shape Canberra's working culture, with strong sectors in public service, defence, research, and administration. Work-life balance is valued and office culture is often professional and structured.",
        },
        {
            title: "Transport in Canberra",
            icon: <BusFront className="w-5 h-5 text-primary-600" />,
            content: (
                <>
                    <p>
                        Modes: Buses and light rail operated by <strong>Transport Canberra</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Light Rail connects Gungahlin to the City.</li>
                        <li>The bus network is broad, though Canberra remains bus-dependent.</li>
                        <li>MyWay is the main travel card.</li>
                        <li>Rapid routes offer frequent and affordable travel.</li>
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
                        Licensing is handled by <strong>Access Canberra</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Learner's Permit begins with a theory test.</li>
                        <li>P1 and P2 stages apply before a full license.</li>
                        <li>No minimum logbook hours are required.</li>
                        <li>Overseas drivers can usually drive for 3 months before converting.</li>
                    </ul>
                </>
            ),
        },
    ];

    const highlightCards = [
        {
            title: "Capital City Advantage",
            description: "Canberra brings the opportunities of a national capital together with a calm and highly liveable student environment.",
            icon: Landmark,
            accent: "from-emerald-500 to-green-400",
        },
        {
            title: "Global Education",
            description: "Top universities like ANU and the University of Canberra give students access to strong academic and research pathways.",
            icon: GraduationCap,
            accent: "from-green-500 to-lime-400",
        },
        {
            title: "Safe and Connected",
            description: "Students benefit from clean neighborhoods, reliable infrastructure, green spaces, and a welcoming multicultural population.",
            icon: MapPinned,
            accent: "from-teal-500 to-emerald-400",
        },
        {
            title: "Balanced Lifestyle",
            description: "Museums, cafes, lakefront spaces, and outdoor spots are all close by, making daily life convenient and enjoyable.",
            icon: Wallet,
            accent: "from-lime-500 to-emerald-400",
        },
    ];

    const exploreCards = [
        {
            title: "Iconic Landmarks & Museums",
            icon: Landmark,
            accent: "from-emerald-500 to-green-400",
            items: [
                "Parliament House - Tour Australia's political heart, including the House of Representatives and Senate.",
                "Australian War Memorial - A moving tribute to military history with a striking memorial setting.",
                "National Gallery of Australia - Home to Indigenous art, international masterpieces, and Blue Poles.",
                "Questacon - Interactive science museum ideal for hands-on learning.",
                "National Museum of Australia - Explore Australia's social history and Indigenous culture.",
            ],
        },
        {
            title: "Nature & Outdoor Activities",
            icon: Trees,
            accent: "from-green-500 to-lime-400",
            items: [
                "Lake Burley Griffin - Cycle, kayak, or picnic with city views.",
                "Australian National Botanic Gardens - Native flora and bushwalking trails.",
                "Mount Ainslie Lookout - Panoramic views over Canberra's city layout.",
                "Tidbinbilla Nature Reserve - Spot kangaroos, koalas, and emus in the wild.",
            ],
        },
        {
            title: "Arts, Culture & Entertainment",
            icon: Theater,
            accent: "from-teal-500 to-emerald-400",
            items: [
                "Canberra Theatre Centre - Plays, concerts, and comedy shows throughout the year.",
                "NewActon Precinct - Creative district with cafes, bars, and indie cinemas.",
                "Lonsdale Street in Braddon - Street art, brunch spots, and boutique shopping.",
            ],
        },
        {
            title: "Food & Nightlife",
            icon: UtensilsCrossed,
            accent: "from-lime-500 to-green-400",
            items: [
                "Capital Region Farmers Market - Fresh local produce every Saturday.",
                "Dickson Asian Food District - Popular for dumplings, ramen, and bubble tea.",
                "Kingston Foreshore - Waterfront dining with stylish restaurants.",
            ],
        },
        {
            title: "Things to Do as a Student",
            icon: GraduationCap,
            accent: "from-emerald-500 to-teal-400",
            items: [
                "Free events such as Enlighten Festival, Floriade, and the National Multicultural Festival.",
                "Student discounts at many museums, galleries, and transport services.",
                "Active clubs and societies at ANU and UC across sports, debating, and culture.",
                "Weekend getaways to the Snowy Mountains, Sydney, or the South Coast.",
            ],
        },
        {
            title: "Living in Canberra",
            icon: MapPinned,
            accent: "from-green-500 to-emerald-400",
            items: [
                "More affordable than Sydney or Melbourne, especially for shared housing.",
                "Bike-friendly planning with dedicated cycling paths.",
                "Four distinct seasons with warm summers, colorful autumns, and chilly winters.",
            ],
        },
    ];

    const tips = [
        "Public Transport: Use a MyWay card for buses and light rail.",
        "Part-Time Jobs: Hospitality, tutoring, and university research roles are common options.",
        "Must-Try: A cheese and wine night at The Hamlet in Braddon.",
    ];

    return (
        <>
            <section className="relative bg-primary-800 py-12 md:py-24">
                <img
                    src="/images/CANBERRA.png"
                    alt="Canberra Skyline"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Study in Canberra</h1>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/60 to-white py-14 md:py-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.10),_transparent_26%)]" />
                <div className="container relative">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]"
                    >
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                                <Sparkles className="h-4 w-4" />
                                Why Choose Canberra
                            </span>
                            <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight text-slate-900">
                                A Global City Full of Opportunities
                            </h2>
                            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                                Canberra is Australia&apos;s capital and one of its most welcoming, liveable, and student-friendly cities. Known for its clean air, safe neighborhoods, and high quality of life, over one-third of Canberra&apos;s population was born overseas, making it culturally diverse and globally connected. The city is home to top-ranked universities like ANU and the University of Canberra, and offers a relaxed lifestyle with access to green spaces, modern infrastructure, and world-class museums and galleries, all within minutes of each other. Canberra combines the opportunities of a capital city with the comfort of a close-knit community, making it an ideal place for international students to live, study, and thrive.
                            </p>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="grid gap-4 sm:grid-cols-2"
                        >
                            {highlightCards.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
                                        variants={itemVariants}
                                        whileHover={{ y: -6, scale: 1.01 }}
                                        className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
                                    >
                                        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`} />
                                        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-md`}>
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
                                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <motion.section
                className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-lime-50 py-16 px-6 md:px-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(132,204,22,0.10),_transparent_25%)]" />
                <div className="max-w-6xl mx-auto relative">
                    <div className="text-center mb-12">
                        <span className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                            Top Places to Visit in Canberra
                        </span>
                        <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900">
                            Explore Canberra as a Student
                        </h2>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.12 }}
                        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                    >
                        {exploreCards.map((card) => {
                            const Icon = card.icon;

                            return (
                                <motion.div
                                    key={card.title}
                                    variants={itemVariants}
                                    whileHover={{ y: -6, scale: 1.01 }}
                                    className="relative overflow-hidden rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.accent}`} />
                                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${card.accent} text-white shadow-md`}>
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-5 text-xl font-semibold text-slate-900">{card.title}</h3>
                                    <ul className="mt-4 list-disc list-inside space-y-2 text-sm leading-7 text-slate-600">
                                        {card.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.08 }}
                        viewport={{ once: true }}
                        className="mt-10 rounded-[32px] bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 p-8 text-white shadow-xl"
                    >
                        <h3 className="text-2xl font-bold">Quick Tips for Students</h3>
                        <ul className="mt-5 space-y-3 text-sm md:text-base">
                            {tips.map((tip) => (
                                <li key={tip} className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
                                    {tip}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-base md:text-lg font-medium">
                            Canberra is more than politics. It is a smart, scenic, and student-friendly city with strong academic and lifestyle opportunities.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            <section className="relative overflow-hidden bg-white py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(220,252,231,0.95),_transparent_24%)]" />
                <div className="container relative mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-extrabold text-slate-900">Accommodation Details</h2>
                        <p className="text-lg text-gray-600 mt-4">Understanding co-renting, sub-letting, and bond responsibilities in Canberra.</p>
                    </div>

                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                                <div className="relative overflow-hidden min-h-[280px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                                        alt="Co-renting in Canberra"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Canberra</p>
                                        <h3 className="mt-2 text-2xl font-bold">Co-renting</h3>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 bg-gradient-to-b from-white to-emerald-50/80">
                                    <p className="text-gray-700 leading-7 mb-4">
                                        Co-renting is when multiple people rent a property together and share lease responsibilities. Everyone listed on the rental agreement shares responsibility for rent, property care, and communication with the rental provider.
                                    </p>
                                    <ul className="mt-5 space-y-3 text-sm text-gray-700">
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">All co-renters should be listed clearly on the agreement.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Shared costs and household rules should be discussed early.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">If one renter leaves, the agreement should be updated properly.</li>
                                    </ul>
                                    <p className="mt-5 text-sm text-gray-500">
                                        Clear communication between co-renters helps avoid disputes over rent, bills, and responsibilities.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                                <div className="relative overflow-hidden min-h-[280px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
                                        alt="Sub-letting in Canberra"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Canberra</p>
                                        <h3 className="mt-2 text-2xl font-bold">Sub-letting</h3>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 bg-gradient-to-b from-white to-lime-50/80">
                                    <p className="text-gray-700 leading-7 mb-4">
                                        Sub-letting happens when a tenant rents part or all of their place to someone else. This should only happen with the rental provider&apos;s permission, and the main tenant usually remains responsible for the property and agreement.
                                    </p>
                                    <ul className="mt-5 space-y-3 text-sm text-gray-700">
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Permission should be requested before any sub-letting begins.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">The head renter remains accountable for rent and property condition.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Written agreements help clarify rent, bills, and move-out arrangements.</li>
                                    </ul>
                                    <p className="mt-5 text-sm text-gray-500">
                                        Keeping everything documented helps protect both the main renter and the sub-renter.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                                <div className="relative overflow-hidden min-h-[280px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
                                        alt="Bond and responsibilities in Canberra housing"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Canberra</p>
                                        <h3 className="mt-2 text-2xl font-bold">Bond & Responsibilities</h3>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 bg-gradient-to-b from-white to-emerald-50/80">
                                    <p className="text-gray-700 leading-7 mb-4">
                                        Bond handling should be discussed clearly before moving in. Co-renters usually split the bond, while in sub-letting arrangements the main tenant often manages payments and any deductions at the end of the tenancy.
                                    </p>
                                    <ul className="mt-5 space-y-3 text-sm text-gray-700">
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Keep written records of payments and condition reports.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Update bond arrangements if a new renter replaces someone.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Unclear agreements can delay bond returns or cause disputes.</li>
                                    </ul>
                                    <p className="mt-5 text-sm text-gray-500">
                                        A simple written agreement between housemates can make the tenancy smoother from start to finish.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
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
                        Top Universities & Master&apos;s Programs
                    </h2>
                    <p className="text-xl text-gray-600 text-center mb-6">
                        Canberra, Australia&apos;s capital, is home to world-class universities offering high-quality education with strong ties to government, research, and industry.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {universitiescanberra.map((uni, index) => (
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
                                            {uni.keyFeatures.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
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
                        src="https://images.unsplash.com/photo-1549965738-e9b2a7c7b7d0?auto=format&fit=crop&w=1200&q=80"
                        alt="Canberra city landmark view"
                        className="w-full max-h-[400px] object-cover rounded-xl shadow-lg"
                    />

                    <div>
                        <h4 className="text-4xl font-bold text-primary mb-8 text-left">Other's Information</h4>

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

export default Canberra;

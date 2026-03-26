import React, { useState } from 'react';
import {
    ThermometerSun,
    Building2,
    BusFront,
    CarFront,
    Sparkles,
    Leaf,
    GraduationCap,
    Home,
    Compass,
    Wallet,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { universitiestasmania } from "../data/universities";

const Tasmania: React.FC = () => {
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
                "Cool temperate oceanic climate with mild summers and cold winters. Tasmania is rainy year-round and can experience snow in the highlands.",
        },
        {
            title: "Working Culture",
            icon: <Building2 className="w-5 h-5 text-primary-600" />,
            content:
                "Slow-paced and community-focused with a small-town feel. Key industries include agriculture, tourism, and the public sector, with a strong focus on work-life balance.",
        },
        {
            title: "Public Transport",
            icon: <BusFront className="w-5 h-5 text-primary-600" />,
            content: (
                <>
                    <p>
                        Modes: Buses only. Managed by{" "}
                        <strong>Metro Tasmania</strong> in Hobart, Launceston, and Burnie.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>No trains or trams.</li>
                        <li>Greencard is used in Hobart.</li>
                        <li>Coverage is more limited, so some areas are car-dependent.</li>
                        <li>Transport is affordable but services can be infrequent.</li>
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
                        Licensing is handled by <strong>Service Tasmania</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Learner&apos;s Permit starts with a theory test.</li>
                        <li>P1 and P2 stages apply before moving to a full license.</li>
                        <li>No minimum logbook hours are required.</li>
                        <li>Overseas licenses are generally valid for 3 months.</li>
                    </ul>
                </>
            ),
        }
    ];

    const studyHighlights = [
        {
            title: "Nature, Every Day",
            description: "Clean air, coastlines, national parks, and outdoor adventure are all part of student life in Tasmania.",
            icon: Leaf,
            accent: "from-emerald-500 to-green-400",
        },
        {
            title: "Strong Education",
            description: "Tasmania offers globally respected education, especially through the University of Tasmania and its specialist strengths.",
            icon: GraduationCap,
            accent: "from-green-500 to-lime-400",
        },
        {
            title: "Safe Communities",
            description: "Students enjoy smaller, friendlier cities with welcoming communities and a relaxed lifestyle.",
            icon: Home,
            accent: "from-teal-500 to-emerald-400",
        },
        {
            title: "Affordable Lifestyle",
            description: "Living costs can be lower than many mainland cities, helping students balance study and daily life more easily.",
            icon: Wallet,
            accent: "from-lime-500 to-emerald-400",
        },
    ];

    const reasonCards = [
        {
            title: "Unmatched Natural Beauty",
            items: [
                "Cleanest air and water in the world, with wilderness at your doorstep.",
                "Adventure-ready lifestyle with hiking, kayaking, and nearby beaches around Hobart.",
            ],
            accent: "from-emerald-500 to-green-400",
        },
        {
            title: "World-Class Education",
            items: [
                "University of Tasmania is ranked in the top 2% globally and is known for marine science, agriculture, and Antarctic research.",
                "Small class sizes and strong industry connections support more personalized learning.",
                "Affordable living and scholarships help international students manage costs.",
            ],
            accent: "from-green-500 to-lime-400",
        },
        {
            title: "Safe & Welcoming Communities",
            items: [
                "Tasmania offers walkable, friendly, and multicultural cities.",
                "Historic towns, modern amenities, cafes, and festivals create a vibrant lifestyle.",
            ],
            accent: "from-teal-500 to-emerald-400",
        },
        {
            title: "Foodie Paradise",
            items: [
                "Farm-to-table dining, urban wineries, and whisky distilleries make Tasmania special.",
                "Salamanca Market remains a long-running favorite for local produce and crafts.",
            ],
            accent: "from-lime-500 to-green-400",
        },
    ];

    const exploreColumns = [
        {
            title: "Hobart Highlights",
            accent: "from-emerald-500 to-green-400",
            items: [
                "MONA - Edgy, world-famous gallery with a subterranean design.",
                "Salamanca Place - Historic sandstone warehouses turned into galleries, bars, and cafes.",
                "TMAG - Tasmanian Museum & Art Gallery showcasing Indigenous and colonial history.",
                "Battery Point - Quaint 19th-century cottages and cobblestone streets.",
            ],
        },
        {
            title: "Nature Escapes",
            accent: "from-green-500 to-lime-400",
            items: [
                "kunanyi/Mount Wellington - Hike or bike for panoramic city views.",
                "Bruny Island - Spot wildlife, eat fresh oysters, and stroll rugged coastlines.",
                "Port Arthur Historic Site - UNESCO-listed convict ruins about 90 minutes away.",
                "Freycinet National Park - Wineglass Bay's iconic white sands are around 2.5 hours away.",
            ],
        },
        {
            title: "Culture & Events",
            accent: "from-teal-500 to-emerald-400",
            items: [
                "Dark Mofo - Bonfires, art installations, and midnight feasts.",
                "Taste of Tasmania - Summer food and wine festival on the waterfront.",
            ],
        },
    ];

    const studentLifeCards = [
        {
            title: "Study Perks",
            items: [
                "UTAS campuses in Hobart, Launceston, and Burnie, each with unique specialties.",
                "Internships in industries such as aquaculture, renewable energy, and tourism.",
            ],
        },
        {
            title: "Getting Around",
            items: [
                "Hobart's CBD is compact, walkable, and bike-friendly.",
                "Metro buses provide affordable transport across the state.",
            ],
        },
        {
            title: "Budget Tips",
            items: [
                "Try Farmgate Market or local fish and chips for affordable meals.",
                "Enjoy free adventures like coastal walks, public parks, and museum entry days.",
            ],
        },
        {
            title: "Insider Tips for Students",
            items: [
                "Use the Discover Tasmania app for local event updates and hidden gems.",
                "Join UTAS clubs, from mountaineering to social interest groups.",
                "Plan weekend trips to Cradle Mountain or Maria Island.",
            ],
        },
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

            <section className="relative overflow-hidden section bg-gradient-to-b from-white via-emerald-50/60 to-white py-14 md:py-20">
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
                                Why Choose Tasmania
                            </span>
                            <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight text-slate-900">
                                Why Study in Tasmania? Embrace the Tassie Lifestyle
                            </h2>
                            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                                Tasmania offers a unique blend of pristine nature, vibrant culture, and world-class education, all wrapped in a safe, welcoming community. Here&apos;s why students love calling Tassie home.
                            </p>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="grid gap-4 sm:grid-cols-2"
                        >
                            {studyHighlights.map((item) => {
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
                            Top Reasons to Study in Tasmania
                        </span>
                        <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900">
                            Top Reasons to Study in Tasmania
                        </h2>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.12 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {reasonCards.map((card) => (
                            <motion.div
                                key={card.title}
                                variants={itemVariants}
                                whileHover={{ y: -6, scale: 1.01 }}
                                className="relative overflow-hidden rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
                            >
                                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.accent}`} />
                                <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                                    {card.items.map((item) => (
                                        <li key={item} className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-emerald-50/70 px-4 py-3">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            <section className="relative overflow-hidden bg-white py-16 px-6 md:px-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(220,252,231,0.95),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(209,250,229,0.95),_transparent_24%)]" />
                <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="rounded-[32px] border border-emerald-100 bg-white p-6 md:p-8 shadow-sm"
                    >
                        <div className="flex items-center gap-3">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 text-white shadow-md">
                                <Compass className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Top Places to Explore</p>
                                <h2 className="mt-2 text-3xl font-bold text-slate-900">Explore Tasmania Beyond the Classroom</h2>
                            </div>
                        </div>

                        <div className="mt-8 space-y-6">
                            {exploreColumns.map((section) => (
                                <motion.div
                                    key={section.title}
                                    whileHover={{ x: 4 }}
                                    className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-white to-emerald-50/60 p-5"
                                >
                                    <div className={`mb-4 h-1 w-20 rounded-full bg-gradient-to-r ${section.accent}`} />
                                    <h3 className="text-xl font-semibold text-slate-900">{section.title}</h3>
                                    <ul className="mt-4 list-disc list-inside space-y-2 text-sm leading-7 text-slate-600">
                                        {section.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="rounded-[32px] border border-emerald-100 bg-gradient-to-b from-emerald-50/80 to-white p-6 md:p-8 shadow-sm"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Student Life Essentials</p>
                        <h2 className="mt-3 text-3xl font-bold text-slate-900">Everyday Life in Tasmania</h2>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.12 }}
                            className="mt-8 grid gap-4"
                        >
                            {studentLifeCards.map((card, index) => (
                                <motion.div
                                    key={card.title}
                                    variants={itemVariants}
                                    whileHover={{ y: -4 }}
                                    className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                                        <span className="text-sm font-semibold text-emerald-600">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <ul className="mt-4 list-disc list-inside space-y-2 text-sm leading-7 text-slate-600">
                                        {card.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="mt-8 rounded-3xl bg-gradient-to-r from-emerald-500 to-green-400 px-6 py-5 text-white shadow-lg">
                            <p className="text-lg font-semibold">
                                Tasmania = Fresh air, fresh food, and fresh opportunities
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-white py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(220,252,231,0.95),_transparent_24%)]" />
                <div className="container relative mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-extrabold text-slate-900">Accommodation Details</h2>
                        <p className="text-lg text-gray-600 mt-4">Understanding co-renting, sub-letting, and bond responsibilities in Tasmania.</p>
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
                                        alt="Co-renting in Tasmania"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Tasmania</p>
                                        <h3 className="mt-2 text-2xl font-bold">Co-renting</h3>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 bg-gradient-to-b from-white to-emerald-50/80">
                                    <p className="text-gray-700 leading-7 mb-4">
                                        Co-renting is when multiple individuals rent a property together and share the lease responsibilities. Each co-renter is listed on the agreement and shares responsibility for rent, upkeep, and communication with the rental provider.
                                    </p>
                                    <ul className="mt-5 space-y-3 text-sm text-gray-700">
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Everyone listed on the agreement shares responsibility for rent and maintenance.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">New housemates should be formally added to avoid future disputes.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Communication between co-renters is important when bills, rent, or exits are involved.</li>
                                    </ul>
                                    <p className="mt-5 text-sm text-gray-500">
                                        Co-renters should notify the rental provider if one tenant moves out and another person moves in.
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
                                        alt="Sub-letting in Tasmania"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Tasmania</p>
                                        <h3 className="mt-2 text-2xl font-bold">Sub-letting</h3>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 bg-gradient-to-b from-white to-lime-50/80">
                                    <p className="text-gray-700 leading-7 mb-4">
                                        Sub-letting happens when a renter lets another person stay in the property for rent. This should only happen with the rental provider&apos;s permission, and the head renter remains responsible for the property and agreement conditions.
                                    </p>
                                    <ul className="mt-5 space-y-3 text-sm text-gray-700">
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Written approval should be obtained before sub-letting begins.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">The main renter still handles rent obligations and property care.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Clear agreements help avoid disputes about payments, bond shares, and utilities.</li>
                                    </ul>
                                    <p className="mt-5 text-sm text-gray-500">
                                        Undisclosed sub-letting can create tenancy issues, so proper approval and records matter.
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
                                        alt="Bond and responsibilities in Tasmania housing"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Tasmania</p>
                                        <h3 className="mt-2 text-2xl font-bold">Bond & Responsibilities</h3>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 bg-gradient-to-b from-white to-emerald-50/80">
                                    <p className="text-gray-700 leading-7 mb-4">
                                        Bond handling and shared responsibilities should be discussed clearly at the start of a tenancy. Co-renters usually split the bond, while in sub-letting situations the head renter often manages the bond and any deductions.
                                    </p>
                                    <ul className="mt-5 space-y-3 text-sm text-gray-700">
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Keep written records of payments, condition reports, and any room changes.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">If someone new joins the household, bond arrangements should be updated clearly.</li>
                                        <li className="rounded-2xl bg-white border border-emerald-100 px-4 py-3">Damage, unpaid bills, or unclear agreements can delay bond returns.</li>
                                    </ul>
                                    <p className="mt-5 text-sm text-gray-500">
                                        A clear written understanding between housemates helps protect everyone when the tenancy ends.
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
                        Tasmania, Australia&apos;s island state, offers high-quality education in a stunning natural environment with a relaxed lifestyle. Here are the key universities and courses available in Tasmania:
                    </p>

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
    )
}

export default Tasmania;

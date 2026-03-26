import React, { useState } from 'react';
import {
    ThermometerSun,
    Building2,
    BusFront,
    CarFront,
    GraduationCap,
    Briefcase,
    Wallet,
    Route,
    TramFront,
    Users,
    UtensilsCrossed,
    CalendarDays,
    Trees,
    Sparkles,
    ArrowUpRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { universitiesadelaide } from "../data/universities";

const Adelaide: React.FC = () => {
    const [expanded, setExpanded] = useState<number | null>(null);

    const toggle = (index: number) => {
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
                "Mediterranean climate with hot, dry summers and cool, wet winters. Adelaide is known for bright days, lower humidity, and occasional quick summer temperature shifts.",
        },
        {
            title: "Working Culture",
            icon: <Building2 className="w-5 h-5 text-primary-600" />,
            content:
                "Professional but less rushed than larger cities, with strong sectors in healthcare, education, research, manufacturing, and services. Work-life balance is one of Adelaide's biggest advantages.",
        },
        {
            title: "Public Transport",
            icon: <BusFront className="w-5 h-5 text-primary-600" />,
            content: (
                <>
                    <p>
                        Modes: trains, trams, and buses managed by{" "}
                        <strong>Adelaide Metro</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Free tram travel is available within the CBD.</li>
                        <li>Buses cover most inner and middle suburbs well.</li>
                        <li>Metrocard is the main smart card for travel.</li>
                        <li>Student concessions help keep weekly transport costs low.</li>
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
                        Licensing is handled by <strong>Service SA</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Learner permits begin with a theory test.</li>
                        <li>Progression depends on age, supervised hours, and testing stages.</li>
                        <li>International license conversion rules can vary by country and visa status.</li>
                        <li>Many students choose public transport first because the city is compact.</li>
                    </ul>
                </>
            ),
        },
    ];

    const spotlightPoints = [
        "World-class education with a strong tradition of excellence and research",
        "Affordable living with easy transport and a balanced student lifestyle",
        "Welcoming communities, career pathways, and unforgettable experiences",
    ];

    const cityHighlights = [
        { label: "Education", value: "World-class learning" },
        { label: "Living", value: "Affordable and balanced" },
        { label: "Lifestyle", value: "Friendly and vibrant" },
    ];

    const reasons = [
        {
            title: "Thrive in a City of Excellence",
            description:
                "It's inspiring to study in a place with such a strong tradition of excellence. A place that's produced many Nobel Prize winners and world-renowned researchers. In Adelaide, no matter where you choose to study, you're closer to the highly qualified teachers and lecturers who can help you achieve your goals.",
            icon: GraduationCap,
            accent: "from-emerald-500 to-green-400",
        },
        {
            title: "Part-Time Jobs Made Easy",
            description:
                "We make it easier for students to get a part-time or casual job while they're studying. StudyAdelaide has created Job Shop, an award-winning website dedicated to connecting international students with hundreds of job opportunities with businesses who are actively looking to employ them.",
            icon: Briefcase,
            accent: "from-green-500 to-lime-400",
        },
        {
            title: "Affordable Living, Better Balance",
            description:
                "Spend less on living expenses and more on enjoying life in Adelaide, one of the most affordable cities in Australia. The cost of accommodation, transport, and food is lower, and with major campuses, accommodation, and workplaces clustered together, you will have more time and money to enjoy a balanced life.",
            icon: Wallet,
            accent: "from-emerald-600 to-teal-400",
        },
        {
            title: "Clear Pathways to Success",
            description:
                "In Adelaide, you can make real progress towards your dream job as you study. Universities, colleges, and VET providers work with key employers, including major global companies, to connect students with their dream job.",
            icon: Route,
            accent: "from-green-600 to-emerald-400",
        },
        {
            title: "Easy and Affordable Transport",
            description:
                "International students in Adelaide enjoy the same student discounts on public transport as local students. A 28-day pass for full-time students is 50% cheaper than a full fare pass, and there are also free trams and buses in the Adelaide city centre.",
            icon: TramFront,
            accent: "from-teal-500 to-green-400",
        },
        {
            title: "A Welcoming Community",
            description:
                "Visitors say in Adelaide, people from all nations, cultures, and beliefs are warmly welcomed. It's a close-knit, multicultural community where it is quick to make friends with locals and other international students from more than 130 countries.",
            icon: Users,
            accent: "from-emerald-500 to-lime-400",
        },
        {
            title: "A Food Lover's Paradise",
            description:
                "Adelaide's vibrant city centre and cafe, restaurant, and food scene is as exciting as some of the coolest cities in the world. You will find everything from casual, affordable student spots to highly awarded top-end restaurants.",
            icon: UtensilsCrossed,
            accent: "from-green-500 to-emerald-300",
        },
        {
            title: "Festivals and Fun All Year",
            description:
                "In Adelaide, you're spoiled for choice with more than 400 festivals and events held every year in and around the city, including Adelaide Festival, Fringe Festival, Tour Down Under, WOMADelaide, Illuminate Adelaide, cricket, car racing, film festivals, and OzAsia.",
            icon: CalendarDays,
            accent: "from-lime-500 to-emerald-400",
        },
        {
            title: "Nature at Your Doorstep",
            description:
                "In Adelaide you'll be surrounded by nature, with the parklands encircling the city centre. Within minutes you can enjoy beautiful beaches, rolling hills, wildlife, wine regions, the Flinders Ranges, and Kangaroo Island.",
            icon: Trees,
            accent: "from-green-600 to-emerald-400",
        },
        {
            title: "Global Companies and Career Access",
            description:
                "Did you know Microsoft, Tesla, and Deloitte all have offices in Adelaide? Some of the biggest technology, engineering, renewable energy, resources, and consulting businesses are here, creating valuable work experience opportunities and clear post-study pathways.",
            icon: Building2,
            accent: "from-emerald-700 to-green-500",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 28 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: "easeOut" },
        },
    };

    return (
        <>
            <section className="relative bg-primary-800 py-12 md:py-24">
                <img
                    src="/images/Adelaide.png"
                    alt="Adelaide skyline"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Study in Adelaide</h1>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/60 to-white py-14 md:py-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_28%)]" />
                <div className="container relative">
                    <motion.div
                        className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
                                <Sparkles className="h-4 w-4" />
                                Study in Adelaide
                            </span>
                            <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                                Study in Adelaide - City of Excellence, Opportunity & Adventure
                            </h2>
                            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                                Adelaide blends world-class education, affordable living, and unforgettable lifestyle experiences. With a welcoming community and direct pathways to global careers, it's the perfect place to grow, learn, and explore.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                {cityHighlights.map((item) => (
                                    <div key={item.label} className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                                        <p className="text-sm font-medium text-slate-500">{item.label}</p>
                                        <p className="mt-2 text-lg font-semibold text-slate-900">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-green-100 blur-2xl" />
                            <div className="absolute -right-6 bottom-6 h-28 w-28 rounded-full bg-emerald-100 blur-2xl" />
                            <div className="relative rounded-[28px] border border-emerald-100 bg-white p-6 text-slate-900 shadow-xl">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                                        Adelaide Snapshot
                                    </p>
                                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                                        Student-first city
                                    </span>
                                </div>
                                <div className="mt-6 space-y-4">
                                    {spotlightPoints.map((point, index) => (
                                        <motion.div
                                            key={point}
                                            className="flex gap-4 rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-emerald-50/70 p-4"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.45, delay: index * 0.12 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-sm font-bold text-emerald-200">
                                                0{index + 1}
                                            </div>
                                            <p className="text-sm leading-6 text-slate-700">{point}</p>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-400 px-5 py-4 text-slate-950">
                                    <ArrowUpRight className="h-5 w-5" />
                                    <p className="text-sm font-semibold">
                                        Adelaide combines excellence, affordability, and opportunity in one student-friendly city.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <motion.section
                className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-lime-50 px-6 py-16 text-slate-900 md:px-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_25%)]" />
                <div className="relative mx-auto max-w-6xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                            10 Reasons to Study in Adelaide
                        </span>
                        <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                            10 Reasons to Study in Adelaide - A City of Excellence, Opportunity & Adventure!
                        </h2>
                        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
                            Adelaide offers world-class education, affordable living, strong career pathways, and unforgettable lifestyle experiences for international students.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.12 }}
                        className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
                    >
                        {reasons.map((reason, index) => {
                            const Icon = reason.icon;

                            return (
                                <motion.div
                                    key={reason.title}
                                    variants={itemVariants}
                                    whileHover={{ y: -6, scale: 1.01 }}
                                    className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${reason.accent}`} />
                                    <div className="flex items-start justify-between gap-4">
                                        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${reason.accent} text-white shadow-lg`}>
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <span className="text-sm font-semibold text-slate-400">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <h3 className="mt-6 text-xl font-semibold text-slate-900">{reason.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-600">{reason.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <div className="mt-12 rounded-3xl border border-emerald-100 bg-white p-6 text-center shadow-sm">
                        <p className="text-lg font-semibold text-slate-900">Ready to make Adelaide your study destination?</p>
                        <p className="mt-2 text-slate-600">
                            Explore more at{" "}
                            <a
                                href="https://studyadelaide.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-emerald-300 underline underline-offset-4"
                            >
                                studyadelaide.com
                            </a>
                        </p>
                        <p className="mt-1 text-sm text-slate-500">Follow the journey with #StudyAdelaide and @StudyAdelaide</p>
                    </div>
                </div>
            </motion.section>

            <section className="relative overflow-hidden bg-white py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(220,252,231,0.95),_transparent_24%)]" />
                <div className="container relative mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-extrabold text-slate-900">Accommodation Details</h2>
                        <p className="text-lg text-gray-600 mt-4">Understanding co-renting, sub-letting, and bond responsibilities in Adelaide.</p>
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
                                        alt="Co-renting in Adelaide"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Adelaide</p>
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
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                                <div className="relative overflow-hidden min-h-[280px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
                                        alt="Sub-letting in Adelaide"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Adelaide</p>
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
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                                <div className="relative overflow-hidden min-h-[280px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
                                        alt="Bond and responsibilities in Adelaide housing"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 max-w-lg text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Accommodation in Adelaide</p>
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

                    <div className="text-center mt-12">
                        <h4 className="text-2xl font-semibold text-slate-900 mb-4">Legal Insights</h4>
                        <p className="text-lg text-gray-600 mb-6">
                            The Residential Tenancies Act 1997 provides comprehensive guidelines for both co-renting and sub-letting. It&apos;s important to understand your rights and responsibilities as a renter.
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
                        South Australia is home to high-quality universities offering a diverse range of courses. Adelaide is especially known for its affordability, quality of life, and strong education sector.
                    </p>

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
                        alt="Adelaide city view"
                        className="w-full max-h-[400px] object-contain rounded-xl shadow-lg"
                    />

                    <div>
                        <div>
                            <h4 className="text-4xl font-bold text-primary mb-8 text-left">Other Information</h4>
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
    );
};

export default Adelaide;

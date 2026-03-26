import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Briefcase, Landmark, BookOpenCheck } from 'lucide-react';
import homePageContent from '../../data/homePageContent.json';

const LivingInAustralia: React.FC = () => {
    const departure = homePageContent.preDepartureGuide;
    const living = homePageContent.livingInAustralia;

    const preDepartureCards = [
        {
            title: departure.beforeYouDepart.essentialDocumentsTitle,
            items: departure.beforeYouDepart.essentialDocuments,
            intro: departure.beforeYouDepart.essentialDocumentsIntro,
            accent: 'from-emerald-500 to-green-400',
            icon: Plane,
        },
        {
            title: departure.beforeYouDepart.packingChecklistTitle,
            items: departure.beforeYouDepart.packingChecklist,
            intro: '',
            accent: 'from-green-500 to-lime-400',
            icon: Landmark,
        },
        {
            title: departure.beforeYouDepart.moneyMattersTitle,
            items: departure.beforeYouDepart.moneyMatters,
            intro: '',
            accent: 'from-teal-500 to-emerald-400',
            icon: Briefcase,
        },
    ];

    return (
        <section id="pre-departure-guide" className="relative overflow-hidden bg-white py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(220,252,231,0.9),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(209,250,229,0.85),_transparent_24%)]" />
            <div className="container relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                        Pre-Departure and Living Guide
                    </span>
                    <h2 className="mt-5 text-3xl md:text-5xl font-bold text-slate-900">
                        {departure.title}
                    </h2>
                    <p className="mt-5 max-w-4xl mx-auto text-lg leading-8 text-slate-600">
                        {departure.intro}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[0.96fr_1.04fr] gap-8 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80"
                            alt="Student preparing for departure"
                            className="h-80 w-full object-cover"
                        />
                        <div className="p-7">
                            <h3 className="text-2xl font-semibold text-slate-900">{departure.arrivalInAustralia.airportTitle}</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                                {departure.arrivalInAustralia.airport.map((item) => (
                                    <li key={item} className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-emerald-50/60 px-4 py-3">{item}</li>
                                ))}
                            </ul>

                            <h3 className="mt-8 text-2xl font-semibold text-slate-900">{departure.arrivalInAustralia.firstStepsTitle}</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                                {departure.arrivalInAustralia.firstSteps.map((item) => (
                                    <li key={item} className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-lime-50/60 px-4 py-3">{item}</li>
                                ))}
                            </ul>

                            <h3 className="mt-8 text-2xl font-semibold text-slate-900">{departure.arrivalInAustralia.healthSafetyTitle}</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                                {departure.arrivalInAustralia.healthSafety.map((item) => (
                                    <li key={item} className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-emerald-50/60 px-4 py-3">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <div className="grid gap-6">
                        {preDepartureCards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -4 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="relative overflow-hidden rounded-[30px] border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
                            >
                                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.accent}`} />
                                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${card.accent} text-white shadow-md`}>
                                    <card.icon className="w-5 h-5" />
                                </div>
                                <h3 className="mt-5 text-2xl font-semibold text-slate-900">{card.title}</h3>
                                {card.intro && <p className="mt-3 text-sm leading-7 text-slate-600">{card.intro}</p>}
                                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                                    {card.items.map((item) => (
                                        <li key={item} className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-emerald-50/60 px-4 py-3">{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    id="living-in-australia"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="mt-12"
                >
                    <div className="text-center mb-10">
                        <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                            Student Life
                        </span>
                        <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900">{living.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {living.sections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -6, scale: 1.01 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                                className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 text-white shadow-md">
                                    <BookOpenCheck className="w-6 h-6" />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-slate-900">{section.title}</h3>
                                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                                    {section.items.map((item) => (
                                        <li key={item} className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-emerald-50/60 px-4 py-3">{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LivingInAustralia;

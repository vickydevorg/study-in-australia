import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Briefcase, BadgeCheck, Clock3 } from 'lucide-react';
import homePageContent from '../../data/homePageContent.json';

const CricosGuide: React.FC = () => {
    const cricos = homePageContent.cricosGuide;
    const durationRule = homePageContent.studyDurationRule;

    const icons = [ShieldCheck, BadgeCheck, Briefcase, Clock3];
    const accents = [
        'from-emerald-500 to-green-400',
        'from-green-500 to-lime-400',
        'from-teal-500 to-emerald-400',
        'from-lime-500 to-green-400',
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/50 to-white py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.10),_transparent_24%)]" />
            <div className="container relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                        CRICOS Guide
                    </span>
                    <h2 className="mt-5 text-3xl md:text-5xl font-bold text-slate-900">
                        {cricos.title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {cricos.sections.map((section, index) => {
                        const Icon = icons[index] ?? ShieldCheck;

                        return (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -6, scale: 1.01 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="relative overflow-hidden rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
                            >
                                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accents[index]}`} />
                                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accents[index]} text-white shadow-md`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-slate-900">{section.title}</h3>
                                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                                    {section.items.map((item) => (
                                        <li key={item} className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-emerald-50/60 px-4 py-3">{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="mt-10 overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-xl"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] items-center">
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
                            alt="Students planning academic future"
                            className="h-full min-h-[320px] w-full object-cover"
                        />
                        <div className="p-8 md:p-10">
                            <h3 className="text-3xl font-bold text-slate-900">{durationRule.title}</h3>
                            <p className="mt-4 text-base leading-8 text-slate-600">
                                {durationRule.intro}
                            </p>

                            <div className="mt-6 grid gap-4">
                                <div className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-emerald-50/60 px-4 py-4">
                                    <h4 className="font-semibold text-slate-900">Duration Requirement</h4>
                                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                                        {durationRule.durationRequirement.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-lime-50/60 px-4 py-4">
                                    <h4 className="font-semibold text-slate-900">Why It Matters</h4>
                                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                                        {durationRule.whyItMatters.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-emerald-50/60 px-4 py-4">
                                    <h4 className="font-semibold text-slate-900">Exceptions</h4>
                                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                                        {durationRule.exceptions.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-400 px-5 py-4 text-white shadow-lg">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">Key Takeaway</p>
                                <p className="mt-2 text-base font-medium">{durationRule.keyTakeaway}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CricosGuide;

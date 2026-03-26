import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, FileText, Wallet, Plane, ShieldCheck } from 'lucide-react';
import homePageContent from '../../data/homePageContent.json';

const WhyStudyAustralia: React.FC = () => {
    const sections = [
        {
            icon: FileText,
            title: homePageContent.applicationGuide.hyperlinkLabel,
            description: 'Full student document checklist, sponsor documents, and available funds proof.',
            accent: 'from-emerald-500 to-green-400',
        },
        {
            icon: Wallet,
            title: homePageContent.financialRequirements.title,
            description: 'Visa fund requirements, annual income options, loan support, and OSHC guidance.',
            accent: 'from-green-500 to-lime-400',
        },
        {
            icon: Plane,
            title: homePageContent.preDepartureGuide.title,
            description: 'Travel preparation, arrival guidance, and living in Australia essentials.',
            accent: 'from-teal-500 to-emerald-400',
        },
        {
            icon: ShieldCheck,
            title: homePageContent.cricosGuide.title,
            description: 'CRICOS compliance, student protection, and study duration planning for visa benefits.',
            accent: 'from-lime-500 to-green-400',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/60 to-white py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.10),_transparent_25%)]" />
            <div className="container relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                        <Sparkles className="h-4 w-4" />
                        Home Page Guide
                    </span>
                    <h2 className="mt-5 text-3xl md:text-5xl font-bold text-slate-900">
                        Complete Student Information in One Place
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        {homePageContent.overview.summary}
                    </p>
                </motion.div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -6, scale: 1.01 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="relative overflow-hidden rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
                        >
                            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${section.accent}`} />
                            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${section.accent} text-white shadow-md`}>
                                <section.icon className="w-6 h-6" />
                            </div>
                            <h3 className="mt-5 text-xl font-semibold text-slate-900">{section.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{section.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyStudyAustralia;

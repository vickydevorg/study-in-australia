import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, PiggyBank, Shield, WalletCards, Languages, HelpCircle } from 'lucide-react';
import homePageContent from '../../data/homePageContent.json';

const FinancialGuide: React.FC = () => {
    const finance = homePageContent.financialRequirements;
    const english = homePageContent.englishLanguageRequirements;
    const loans = homePageContent.educationLoanAssistance;
    const oshc = homePageContent.oshc;

    const topCards = [
        {
            icon: Calculator,
            title: 'Funds Required',
            items: finance.fundsRequired,
            accent: 'from-emerald-500 to-green-400',
        },
        {
            icon: WalletCards,
            title: 'Family Costs',
            items: finance.familyCosts,
            accent: 'from-green-500 to-lime-400',
        },
        {
            icon: PiggyBank,
            title: 'Alternative Income Proof',
            items: finance.alternativeIncomeProof,
            accent: 'from-teal-500 to-emerald-400',
        },
        {
            icon: Shield,
            title: 'Mandatory Costs',
            items: finance.mandatoryCosts,
            accent: 'from-lime-500 to-green-400',
        },
    ];

    return (
        <section id="financial-requirements" className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-white py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.12),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(132,204,22,0.10),_transparent_24%)]" />
            <div className="container relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                        Financial Planning
                    </span>
                    <h2 className="mt-5 text-3xl md:text-5xl font-bold text-slate-900">
                        {finance.title}
                    </h2>
                    <p className="mt-5 max-w-4xl mx-auto text-lg leading-8 text-slate-600">
                        {finance.intro}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
                    {topCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -6, scale: 1.01 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="relative overflow-hidden rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
                        >
                            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.accent}`} />
                            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${card.accent} text-white shadow-md`}>
                                <card.icon className="w-6 h-6" />
                            </div>
                            <h3 className="mt-5 text-xl font-semibold text-slate-900">{card.title}</h3>
                            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                                {card.items.map((item) => (
                                    <li key={item} className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-emerald-50/60 px-4 py-3">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="rounded-[30px] border border-emerald-100 bg-white p-6 shadow-sm">
                            <h3 className="text-2xl font-semibold text-slate-900">Income Notes and Reminders</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                                {finance.incomeNotes.map((item) => (
                                    <li key={item} className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-emerald-50/60 px-4 py-3">{item}</li>
                                ))}
                                {finance.reminders.map((item) => (
                                    <li key={item} className="rounded-2xl border border-lime-100 bg-gradient-to-r from-white to-lime-50/60 px-4 py-3">{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div id="english-language-requirements" className="rounded-[30px] border border-emerald-100 bg-gradient-to-b from-white to-lime-50/70 p-6 shadow-sm">
                            <div className="flex items-center gap-3">
                                <Languages className="h-6 w-6 text-emerald-600" />
                                <h3 className="text-2xl font-semibold text-slate-900">{english.title}</h3>
                            </div>
                            <div className="mt-5 space-y-4 text-sm leading-8 text-slate-600">
                                {english.paragraphs.map((paragraph) => (
                                    <p key={paragraph} className="rounded-2xl border border-emerald-100 bg-white px-4 py-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div id="education-loan-assistance" className="rounded-[30px] border border-emerald-100 bg-white p-6 shadow-sm">
                            <h3 className="text-2xl font-semibold text-slate-900">{loans.title}</h3>
                            <div className="mt-5 space-y-4 text-sm leading-8 text-slate-600">
                                {loans.paragraphs.map((paragraph) => (
                                    <p key={paragraph} className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-emerald-50/60 px-4 py-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div id="health-insurance" className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80"
                                alt="Financial planning for study abroad"
                                className="h-72 w-full object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-slate-900">{oshc.title}</h3>
                                <div className="mt-5 grid gap-3">
                                    {oshc.providers.map((provider) => (
                                        <div key={provider.provider} className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-emerald-50/60 px-4 py-4">
                                            <div className="flex items-center justify-between gap-4">
                                                <h4 className="font-semibold text-slate-900">{provider.provider}</h4>
                                                <span className="text-sm font-semibold text-emerald-700">{provider.price}</span>
                                            </div>
                                            <p className="mt-2 text-sm text-slate-600">Waiting periods: {provider.waitingPeriods}</p>
                                            <p className="mt-1 text-sm text-slate-600">Extras: {provider.extrasCoverage}</p>
                                            <p className="mt-1 text-sm text-slate-600">Direct billing: {provider.directBilling}</p>
                                            <p className="mt-1 text-sm text-slate-600">Support: {provider.customerSupport}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[30px] border border-emerald-100 bg-white p-6 shadow-sm">
                            <h3 className="text-2xl font-semibold text-slate-900">OSHC Key Notes</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                                {oshc.keyNotes.map((item) => (
                                    <li key={item} className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-lime-50/60 px-4 py-3">{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-[30px] border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/70 p-6 shadow-sm">
                            <div className="flex items-center gap-3">
                                <HelpCircle className="h-6 w-6 text-emerald-600" />
                                <h3 className="text-2xl font-semibold text-slate-900">OSHC FAQs</h3>
                            </div>
                            <div className="mt-5 space-y-4">
                                {oshc.faqs.map((faq) => (
                                    <div key={faq.question} className="rounded-2xl border border-emerald-100 bg-white px-4 py-4">
                                        <h4 className="text-base font-semibold text-slate-900">{faq.question}</h4>
                                        <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FinancialGuide;

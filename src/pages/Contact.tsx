import { motion } from 'framer-motion';
import React from 'react';
import { Mail, MapPin, MessageSquare, Phone, Send, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
    const contactCards = [
        {
            title: 'Visit Us',
            value: '123 Sydney Study Lane, NSW 2000, Australia',
            icon: MapPin,
            accent: 'from-emerald-500 to-green-400',
        },
        {
            title: 'Email Us',
            value: 'info@sydneyedu.com',
            icon: Mail,
            accent: 'from-green-500 to-lime-400',
            href: 'mailto:info@sydneyedu.com',
        },
        {
            title: 'Call Us',
            value: '+61 2 1234 5678',
            icon: Phone,
            accent: 'from-teal-500 to-emerald-400',
        },
    ];

    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/70 to-white py-16 md:py-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_26%)]" />
                <div className="container relative mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="mx-auto max-w-5xl"
                    >
                        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                            <div>
                                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                                    <Sparkles className="h-4 w-4" />
                                    Contact Us
                                </span>
                                <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                                    Let&apos;s Plan Your Study Journey Together
                                </h1>
                                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                                    Reach out for guidance on universities, programs, admissions, and the next steps for studying in Australia. Our team is here to help you move forward with clarity and confidence.
                                </p>

                                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                    {contactCards.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <motion.div
                                                key={item.title}
                                                whileHover={{ y: -6, scale: 1.01 }}
                                                className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl"
                                            >
                                                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`} />
                                                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-md`}>
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <p className="mt-4 text-sm font-semibold text-slate-500">{item.title}</p>
                                                {item.href ? (
                                                    <a href={item.href} className="mt-2 block text-sm font-medium leading-6 text-slate-800 hover:text-emerald-700">
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="mt-2 text-sm font-medium leading-6 text-slate-800">{item.value}</p>
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 24 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.75, delay: 0.08 }}
                                className="relative"
                            >
                                <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-green-100 blur-2xl" />
                                <div className="absolute -right-6 bottom-6 h-32 w-32 rounded-full bg-emerald-100 blur-2xl" />
                                <div className="relative overflow-hidden rounded-[32px] border border-emerald-100 bg-white p-7 shadow-xl">
                                    <img
                                        src="https://blog.mypat.in/wp-content/uploads/2021/07/Exam-Study-Plan-1.png"
                                        alt="Students discussing study plans"
                                        className="h-72 w-full rounded-[24px] object-cover"
                                    />
                                    <div className="mt-6 rounded-3xl bg-gradient-to-r from-emerald-500 to-green-400 px-6 py-5 text-white shadow-lg">
                                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-100">Student Support</p>
                                        <p className="mt-2 text-lg font-semibold">
                                            Quick answers, helpful guidance, and a smoother path from inquiry to application.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-white py-16">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(220,252,231,0.9),_transparent_22%),radial-gradient(circle_at_top_right,_rgba(209,250,229,0.85),_transparent_24%)]" />
                <div className="container relative mx-auto px-4">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="rounded-[32px] border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/80 p-8 shadow-sm"
                        >
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 text-white shadow-md">
                                <MessageSquare className="h-6 w-6" />
                            </div>
                            <h2 className="mt-5 text-3xl font-bold text-slate-900">Get in Touch</h2>
                            <p className="mt-4 text-base leading-7 text-slate-600">
                                We&apos;d love to hear from you. Whether you have a question about universities, programs, admissions, or next steps, our team is ready to help.
                            </p>

                            <div className="mt-8 space-y-4">
                                {contactCards.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <motion.div
                                            key={item.title}
                                            whileHover={{ x: 4 }}
                                            className="flex items-start gap-4 rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm"
                                        >
                                            <div className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-md`}>
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-slate-500">{item.title}</p>
                                                {item.href ? (
                                                    <a href={item.href} className="mt-1 block text-base font-medium leading-7 text-slate-800 hover:text-emerald-700">
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="mt-1 text-base font-medium leading-7 text-slate-800">{item.value}</p>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.08 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="rounded-[32px] border border-emerald-100 bg-white p-8 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 text-white shadow-md">
                                    <Send className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">Contact Form</p>
                                    <h2 className="text-3xl font-bold text-slate-900">Send Us a Message</h2>
                                </div>
                            </div>

                            <form className="mt-8 grid gap-5">
                                <div className="grid gap-5 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-slate-800 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            className="w-full rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-slate-800 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-slate-800 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                                    <textarea
                                        rows={6}
                                        placeholder="Your message..."
                                        className="w-full rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-slate-800 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ y: -2, scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:shadow-xl"
                                >
                                    <Send className="h-4 w-4" />
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;

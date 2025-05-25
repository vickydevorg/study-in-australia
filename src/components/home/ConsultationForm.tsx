import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Clock, Calendar, CheckCircle } from 'lucide-react';

const ConsultationForm: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        studyLevel: '',
        preferredTime: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would send this data to a server
        console.log('Form submitted:', formState);
        setIsSubmitted(true);
    };

    return (
        <section className="section bg-white" id="consultation">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 font-medium rounded-full mb-3">
                            Free Consultation
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Get Personalized Guidance for Your Australian Education Journey
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Our education consultants will help you navigate the application process, find the right course and university, and answer all your questions about studying in Australia.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Personalized Consultation</h3>
                                    <p className="text-gray-600">Get advice tailored to your academic background, career goals and budget.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Fast Response Time</h3>
                                    <p className="text-gray-600">Our consultants will get back to you within 24 hours to schedule your session.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">End-to-End Support</h3>
                                    <p className="text-gray-600">We'll guide you from university selection to visa application and pre-departure preparation.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="card p-6 md:p-8 shadow-lg border border-gray-100">
                            {!isSubmitted ? (
                                <>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Free Consultation</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                                    placeholder="Your name"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                                    placeholder="Your email"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formState.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                                    placeholder="Your phone number"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country of Residence</label>
                                                <input
                                                    type="text"
                                                    id="country"
                                                    name="country"
                                                    value={formState.country}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                                    placeholder="Your country"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="studyLevel" className="block text-sm font-medium text-gray-700 mb-1">Study Level</label>
                                                <select
                                                    id="studyLevel"
                                                    name="studyLevel"
                                                    value={formState.studyLevel}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                                    required
                                                >
                                                    <option value="">Select level</option>
                                                    <option value="undergraduate">Undergraduate</option>
                                                    <option value="postgraduate">Postgraduate</option>
                                                    <option value="research">Research</option>
                                                    <option value="vocational">Vocational</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">Preferred Consultation Time</label>
                                                <select
                                                    id="preferredTime"
                                                    name="preferredTime"
                                                    value={formState.preferredTime}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                                    required
                                                >
                                                    <option value="">Select time</option>
                                                    <option value="morning">Morning (9AM - 12PM)</option>
                                                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                                                    <option value="evening">Evening (5PM - 8PM)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formState.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                                placeholder="Tell us about your educational background and goals"
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="mt-6 w-full btn btn-primary flex items-center justify-center"
                                        >
                                            Book Consultation <Send className="w-4 h-4 ml-2" />
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 text-accent-600 mb-4">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                                    <p className="text-gray-600 mb-6">
                                        Your consultation request has been received. One of our education advisors will contact you within 24 hours to schedule your session.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="btn btn-secondary"
                                    >
                                        Submit Another Request
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationForm;
import { motion } from 'framer-motion';
import React from 'react';

const Contact: React.FC = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-6"
                >
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Explore Courses in Australia
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        Discover thousands of undergraduate, postgraduate, and research programs offered by Australian universities.
                    </p>
                </motion.div>
            </section>
            <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Left - Contact Information */}
                <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary-700">Get in Touch</h2>
                <p className="text-gray-700 mb-4">
                    We'd love to hear from you! Whether you have a question about universities, programs, or anything else, our team is ready to answer.
                </p>
                <div className="space-y-4 text-sm text-gray-600">
                    <div>
                    <span className="font-semibold block">Address:</span>
                    123 Sydney Study Lane, NSW 2000, Australia
                    </div>
                    <div>
                    <span className="font-semibold block">Email:</span>
                    <a href="mailto:info@sydneyedu.com" className="text-primary-600 hover:underline">
                        info@sydneyedu.com
                    </a>
                    </div>
                    <div>
                    <span className="font-semibold block">Phone:</span>
                    +61 2 1234 5678
                    </div>
                </div>
                </div>

                {/* Right - Contact Form */}
                <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary-700">Contact Form</h2>
                <form className="space-y-4">
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input type="text" placeholder="Subject" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea  placeholder="Your message..." className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary-600 text-white py-2 rounded-lg font-medium hover:bg-primary-700 transition">
                    Send Message
                    </button>
                </form>
                </div>

            </div>
            </div>
        </>
    )
}

export default Contact;
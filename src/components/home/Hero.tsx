import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-primary-800 to-primary-900 text-white py-10 md:py-10 lg:py-10">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-700 opacity-20"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-700 opacity-20"></div>
            </div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-3 py-1 bg-primary-700 text-white text-sm font-medium rounded-full mb-4">
                            Begin Your Academic Journey
                        </span>
                        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                            Study in Australia: <span className="text-secondary-400">Your Gateway</span> to World-Class Education
                        </h1>
                        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl">
                            Join thousands of international students pursuing their dreams in Australia's prestigious universities. Get comprehensive guidance on admissions, visas, and scholarships.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <a href="#consultation" className="btn btn-accent">
                                Free Consultation
                                <ChevronRight className="w-5 h-5 ml-1" />
                            </a>
                            <a href="#universities" className="btn bg-white text-primary-800 hover:bg-gray-100">
                                Explore Universities
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-center">
                                <Check className="w-5 h-5 text-secondary-400 mr-2" />
                                <span>40+ Top Universities</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-5 h-5 text-secondary-400 mr-2" />
                                <span>5,000+ Courses</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-5 h-5 text-secondary-400 mr-2" />
                                <span>Scholarship Support</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-5 h-5 text-secondary-400 mr-2" />
                                <span>Post-Study Work Options</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/australia.png" 
                                alt="University of Sydney"
                                className="w-full h-[500px] object-scale-down"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900/90 to-transparent p-6">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                                    <span className="text-accent-300 font-medium">Application deadline approaching</span>
                                </div>
                                <h3 className="text-xl font-semibold mt-2">Fall 2025 Admissions</h3>
                                <p className="text-gray-200">Apply now for top Australian universities</p>
                            </div>
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 rounded-xl shadow-xl p-4 max-w-xs">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-100 text-primary-600">
                                    <span className="text-lg font-bold">8</span>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-gray-500">Australian Universities in</p>
                                    <p className="font-semibold">World's Top 100</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
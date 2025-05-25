import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, GraduationCap, Award, Users, Briefcase, Globe, Heart, Shield } from 'lucide-react';

const WhyAustralia: React.FC = () => {
    const reasons = [
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: 'World-Class Education',
            description: 'Home to 8 of the top 100 universities globally with internationally recognized qualifications.'
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: 'Diverse Course Options',
            description: 'Over 5,000 courses across 40+ universities covering every field and specialization imaginable.'
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: 'Post-Study Work Rights',
            description: 'Work in Australia for 2-4 years after graduation, gaining valuable international experience.'
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Safe Environment',
            description: 'One of the safest countries with excellent healthcare and support for international students.'
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: 'Multicultural Society',
            description: 'A welcoming, diverse society with students from over 190 countries creating a global community.'
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: 'Quality of Life',
            description: `Australian cities consistently rank among the world's most livable with excellent amenities.`
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="section bg-gray-50" id="why-australia">
            <div className="container">
                <div className="section-title">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 font-medium rounded-full mb-3">
                        Why Choose Australia
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        The Perfect Destination for Your Education Journey
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                        Australia offers a unique blend of academic excellence, cultural diversity, and incredible lifestyle options for international students.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
                >
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="card p-6 group hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                            <p className="text-gray-600">{reason.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <a href="#universities" className="btn btn-primary">
                        Discover Australian Universities
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhyAustralia;
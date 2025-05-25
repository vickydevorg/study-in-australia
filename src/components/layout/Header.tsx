import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';
import { FaHome } from 'react-icons/fa';
import { Send, CheckCircle } from 'lucide-react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        studyLevel: '',
        preferredTime: '',
        message: ''
    });
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

    useEffect(() => {
        const hasShownPopup = localStorage.getItem("hasShownConsultationPopup")
        if (!hasShownPopup) {
            const timer = setTimeout(() => {
                setIsModalOpen(true)
                localStorage.setItem("hasShownConsultationPopup", "true")
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [

        { name: 'Home', path: '/', icon: <FaHome /> },
        { name: 'Melbourne', path: '/melbourne' },
        { name: 'Sydney', path: '/sydney' },
        { name: 'Brisbane', path: '/brisbane' },
        { name: 'Adelaide', path: '/adelaide' },
        { name: 'Perth', path: '/perth' },
        { name: 'Dawin', path: '/dawin' },
        { name: 'Tasmania', path: '/tasmania' },
        { name: 'Canberra', path: '/canberra' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <GraduationCap className="w-10 h-10 text-primary-600" />
                    <div className="ml-2">
                        <span className="block font-heading font-bold text-xl text-primary-800">Study in</span>
                        <span className="block font-heading font-bold text-xl text-accent-600">AUSTRALIA</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive ? 'nav-link nav-link-active' : 'nav-link'
                            }
                        >
                            {item.icon ? (
                                <span className="text-xl">{item.icon}</span>
                            ) : (
                                item.name
                            )}
                        </NavLink>
                    ))}
                    <a
                        onClick={() => setIsModalOpen(true)}
                        className="ml-2 btn btn-primary"
                    >
                        Free Consultation
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-primary-50 focus:outline-none"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg p-4"
                >
                    <nav className="flex flex-col space-y-2">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? 'nav-link nav-link-active' : 'nav-link'
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <a
                            onClick={() => setIsModalOpen(true)}
                            className="btn btn-primary text-center"
                        >
                            Free Consultation
                        </a>
                    </nav>
                </motion.div>
            )}
            {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl max-w-3xl w-full p-6 md:p-8 shadow-xl relative"
                >
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    <X className="w-6 h-6" />
                </button>
                
                {/* Paste your full consultation form here */}
                {/* (Your full form JSX) */}
                        <div className="p-6">
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
            )}
        </header>
    );
};

export default Header;
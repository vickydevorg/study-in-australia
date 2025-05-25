import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
              <div className="ml-2">
                <span className="block font-heading font-bold text-lg text-white">Study in</span>
                <span className="block font-heading font-bold text-lg text-secondary-400">AUSTRALIA</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4">
              Your comprehensive guide to studying in Australia. We help international students navigate the application process, visa requirements, and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/visa-information" className="text-gray-300 hover:text-white transition-colors">Visa Information</Link>
              </li>
              <li>
                <Link to="/application-process" className="text-gray-300 hover:text-white transition-colors">Application Process</Link>
              </li>
              <li>
                <Link to="/cost-of-living" className="text-gray-300 hover:text-white transition-colors">Cost of Living</Link>
              </li>
              <li>
                <Link to="/scholarships" className="text-gray-300 hover:text-white transition-colors">Scholarships</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Helpful Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/student-guid-australia" className="text-gray-300 hover:text-white transition-colors">Health Insurance</a>
              </li>
              <li>
                <a href="/student-guid-australia" className="text-gray-300 hover:text-white transition-colors">Travel Guide</a>
              </li>
              <li>
                <a href="/student-guid-australia" className="text-gray-300 hover:text-white transition-colors">Student Life in Australia</a>
              </li>
              <li>
                <a href="/student-guid-australia" className="text-gray-300 hover:text-white transition-colors">Career Opportunities</a>
              </li>
              <li>
                <Link to="/student-guid-australia" className="text-gray-300 hover:text-white transition-colors">Student Testimonials</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-2 text-secondary-400 flex-shrink-0" />
                <span className="text-gray-300">123 Education Street, Sydney, NSW 2000, Australia</span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-2 text-secondary-400 flex-shrink-0" />
                <a href="tel:+61234567890" className="text-gray-300 hover:text-white transition-colors">+61 2 3456 7890</a>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-2 text-secondary-400 flex-shrink-0" />
                <a href="mailto:info@studyinaustralia.com" className="text-gray-300 hover:text-white transition-colors">info@studyinaustralia.com</a>
              </li>
            </ul>
            <div className="mt-4">
              <a href="#consultation" className="btn btn-accent">Free Consultation</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-950 py-2">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Study in Australia. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileCheck, Plane, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicationGuide: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Research and Choose',
      description: 'Research universities and courses that align with your academic goals and career aspirations.',
      color: 'bg-primary-500'
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Apply for Admission',
      description: 'Submit applications to your chosen universities with all required academic documents.',
      color: 'bg-secondary-500'
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: 'Obtain Student Visa',
      description: 'Apply for your student visa once you receive your university offer letter.',
      color: 'bg-accent-500'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Prepare for Departure',
      description: 'Book accommodation, flights and prepare for your journey to Australia.',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 font-medium rounded-full mb-3">
              Application Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Journey to Studying in Australia
            </h2>
            <p className="text-gray-600 mb-6">
              The path to studying in Australia is straightforward when you know the steps. Our guide simplifies the application process from research to arrival.
            </p>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full ${step.color} text-white flex items-center justify-center mr-4`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <Link to="/application-process" className="btn btn-primary">
                Detailed Application Guide
              </Link>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img 
              src="https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg" 
              alt="Australian student application process" 
              className="w-full h-auto rounded-xl shadow-lg" 
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 max-w-xs">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Academic Calendar</h4>
                  <p className="text-sm text-gray-500">Semester 1: February - June</p>
                  <p className="text-sm text-gray-500">Semester 2: July - November</p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Apply at least 6 months before your preferred intake
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationGuide;
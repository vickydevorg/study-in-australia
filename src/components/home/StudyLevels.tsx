import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MoonStar as Mortar, Beaker, GraduationCap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudyLevels: React.FC = () => {
  const levels = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Undergraduate',
      description: 'Bachelor degrees spanning 3-4 years across all disciplines',
      courses: ['Bachelor of Science', 'Bachelor of Arts', 'Bachelor of Business', 'Bachelor of Engineering'],
      color: 'bg-primary-500'
    },
    {
      icon: <Mortar className="w-8 h-8" />,
      title: 'Postgraduate',
      description: `Master's programs focusing on specialized knowledge`,
      courses: ['Master of Business Administration', 'Master of Science', 'Master of Engineering', 'Master of Laws'],
      color: 'bg-secondary-500'
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      title: 'Research',
      description: 'Doctoral programs for aspiring researchers and academics',
      courses: ['Doctor of Philosophy (PhD)', 'Doctor of Business Administration', 'Master of Philosophy'],
      color: 'bg-accent-500'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Vocational',
      description: 'Practical skills-based training for specific careers',
      courses: ['Diploma of Nursing', 'Certificate IV in Accounting', 'Advanced Diploma of Engineering'],
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="section-title">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 font-medium rounded-full mb-3">
            Academic Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Study Levels and Course Options
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Australia offers a wide range of study options to suit every student's academic and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden"
            >
              <div className="flex items-center p-5 border-b border-gray-100">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${level.color} text-white mr-4`}>
                  {level.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{level.title}</h3>
                  <p className="text-gray-600">{level.description}</p>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Popular Courses</h4>
                <ul className="space-y-2">
                  {level.courses.map((course, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                      {course}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/courses" 
                  className="inline-flex items-center mt-4 text-primary-600 hover:text-primary-800 font-medium"
                >
                  Explore all courses <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyLevels;
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Filter, ChevronRight } from 'lucide-react';

const Courses: React.FC = () => {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: 'Bachelor of Computer Science',
      university: 'University of Melbourne',
      duration: '3 years',
      fees: '$35,000 per year',
      category: 'Technology',
      description: 'Comprehensive program covering algorithms, software development, artificial intelligence, and more.'
    },
    {
      id: 2,
      title: 'Master of Business Administration',
      university: 'University of Sydney',
      duration: '1.5 years',
      fees: '$45,000 per year',
      category: 'Business',
      description: 'World-renowned MBA program focusing on leadership, strategy, and global business practices.'
    },
    {
      id: 3,
      title: 'Bachelor of Nursing',
      university: 'Queensland University of Technology',
      duration: '3 years',
      fees: '$32,000 per year',
      category: 'Health',
      description: 'Accredited nursing degree preparing students for careers in healthcare with hands-on clinical experience.'
    },
    {
      id: 4,
      title: 'Master of Engineering',
      university: 'University of New South Wales',
      duration: '2 years',
      fees: '$42,000 per year',
      category: 'Engineering',
      description: 'Advanced engineering program with specializations in civil, mechanical, electrical, and more.'
    },
    {
      id: 5,
      title: 'Bachelor of Arts',
      university: 'Australian National University',
      duration: '3 years',
      fees: '$30,000 per year',
      category: 'Humanities',
      description: 'Flexible arts degree allowing students to explore disciplines across humanities and social sciences.'
    },
    {
      id: 6,
      title: 'Doctor of Medicine',
      university: 'University of Melbourne',
      duration: '4 years',
      fees: '$75,000 per year',
      category: 'Health',
      description: 'Graduate entry medical program leading to registration as a medical practitioner.'
    }
  ];

  const categories = ['All', 'Business', 'Technology', 'Health', 'Engineering', 'Humanities', 'Sciences', 'Education'];

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Explore Courses in Australia
        </h1>
        <p className="text-xl text-gray-600">
          Discover thousands of undergraduate, postgraduate, and research programs offered by Australian universities.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            </div>
            <div className="relative">
              <select className="appearance-none pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white">
                <option value="">All Study Levels</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="research">Research</option>
                <option value="vocational">Vocational</option>
              </select>
              <Filter className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <ChevronRight className="absolute right-3 top-3.5 text-gray-400 w-5 h-5 rotate-90" />
            </div>
          </div>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className={`h-2 ${course.category === 'Business' ? 'bg-blue-500' : 
              course.category === 'Technology' ? 'bg-purple-500' : 
              course.category === 'Health' ? 'bg-green-500' : 
              course.category === 'Engineering' ? 'bg-orange-500' : 
              course.category === 'Humanities' ? 'bg-pink-500' : 'bg-gray-500'}`} 
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <BookOpen className="w-4 h-4 mr-1" />
                {course.category}
                <span className="mx-2">•</span>
                {course.duration}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-800">{course.university}</span>
                <span className="text-primary-600 font-semibold">{course.fees}</span>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <a 
                href="#" 
                className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
              >
                View course details <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <div className="flex space-x-1">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md bg-primary-500 text-white">
            1
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
            3
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
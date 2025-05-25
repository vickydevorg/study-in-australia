import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Kim',
      origin: 'South Korea',
      university: 'University of Melbourne',
      course: 'Master of Business Administration',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      text: `Studying in Australia has been transformative. The education quality is exceptional, and I've made lifelong friends from around the world. The work opportunities after graduation helped me land my dream job.`
    },
    {
      name: 'Raj Patel',
      origin: 'India',
      university: 'University of Sydney',
      course: 'Bachelor of Engineering',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      text: 'The practical approach to learning in Australia prepared me well for the industry. The multicultural environment and quality of life is something I couldn\'t have experienced elsewhere.'
    },
    {
      name: 'Maria Rodriguez',
      origin: 'Colombia',
      university: 'Queensland University of Technology',
      course: 'PhD in Environmental Science',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      text: 'The research facilities and support I received during my PhD were exceptional. Australia\'s unique biodiversity made it the perfect place for my environmental studies, and the welcoming culture made it feel like home.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="container">
        <div className="section-title">
          <span className="inline-block px-3 py-1 bg-white/10 text-white font-medium rounded-full mb-3">
            Student Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Hear From Our Students
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-200">
            Read about the experiences of international students who chose Australia for their education journey.
          </p>
        </div>

        <div className="mt-12 relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="card bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-white"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20">
                    <img 
                      src={current.image} 
                      alt={current.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{current.name}</h3>
                  <p className="text-gray-300">{current.origin}</p>
                  <div className="mt-2 text-sm">
                    <p className="text-gray-200">{current.university}</p>
                    <p className="text-gray-300">{current.course}</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg md:text-xl italic text-gray-100 leading-relaxed">
                  "{current.text}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
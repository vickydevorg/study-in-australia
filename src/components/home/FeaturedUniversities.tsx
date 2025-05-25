import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedUniversities: React.FC = () => {
  const universities = [
    {
      name: 'University of Melbourne',
      location: 'Melbourne, Victoria',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
      ranking: '#1 in Australia, #33 Worldwide',
      description: 'Known for excellence in research, teaching and learning in a range of disciplines.'
    },
    {
      name: 'University of Sydney',
      location: 'Sydney, New South Wales',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
      ranking: '#2 in Australia, #38 Worldwide',
      description: `Australia's first university with a legacy of excellence and innovation since 1850.`
    },
    {
      name: 'Australian National University',
      location: 'Canberra, ACT',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
      ranking: '#3 in Australia, #42 Worldwide',
      description: 'The only university created by the Parliament of Australia, focused on research excellence.'
    },
    {
      name: 'University of Queensland',
      location: 'Brisbane, Queensland',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
      ranking: '#4 in Australia, #47 Worldwide',
      description: 'Pioneering research institution with beautiful campus and cutting-edge facilities.'
    },
  ];

  return (
    <section className="section bg-white" id="universities">
      <div className="container">
        <div className="section-title">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 font-medium rounded-full mb-3">
            Top Universities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Discover Australia's Leading Institutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Australia is home to some of the world's top-ranked universities, offering world-class education across diverse fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {universities.map((university, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={university.image} 
                  alt={university.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-semibold py-1 px-2 rounded-full flex items-center">
                  <Star className="w-3 h-3 mr-1" fill="white" />
                  {university.ranking}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" /> 
                  {university.location}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{university.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{university.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium text-sm"
                >
                  Learn more <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/universities" className="btn btn-secondary">
            View All Universities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedUniversities;
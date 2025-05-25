import React from 'react';
import { MapPin, Star, Info, Search } from 'lucide-react';

const Universities: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Australian Universities | Study in Australia';
  }, []);

  const universities = [
    {
      name: 'University of Melbourne',
      location: 'Melbourne, Victoria',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
      ranking: '#1 in Australia, #33 Worldwide',
      established: '1853',
      students: '52,000+',
      faculties: 'Arts, Business, Engineering, Medicine, Sciences, Law'
    },
    {
      name: 'University of Sydney',
      location: 'Sydney, New South Wales',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
      ranking: '#2 in Australia, #38 Worldwide',
      established: '1850',
      students: '73,000+',
      faculties: 'Arts, Business, Engineering, Medicine, Sciences, Law, Architecture'
    },
    {
      name: 'Australian National University',
      location: 'Canberra, ACT',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
      ranking: '#3 in Australia, #42 Worldwide',
      established: '1946',
      students: '25,000+',
      faculties: 'Arts, Business, Law, Science, Medicine, Engineering'
    },
    {
      name: 'University of Queensland',
      location: 'Brisbane, Queensland',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
      ranking: '#4 in Australia, #47 Worldwide',
      established: '1909',
      students: '55,000+',
      faculties: 'Business, Economics, Law, Engineering, Sciences, Medicine'
    },
    {
      name: 'Monash University',
      location: 'Melbourne, Victoria',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
      ranking: '#5 in Australia, #55 Worldwide',
      established: '1958',
      students: '86,000+',
      faculties: 'Arts, Business, Engineering, IT, Medicine, Pharmacy, Science'
    },
    {
      name: 'University of New South Wales',
      location: 'Sydney, New South Wales',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
      ranking: '#6 in Australia, #58 Worldwide',
      established: '1949',
      students: '59,000+',
      faculties: 'Arts, Business, Engineering, Law, Medicine, Science'
    },
    {
      name: 'University of Western Australia',
      location: 'Perth, Western Australia',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
      ranking: '#7 in Australia, #85 Worldwide',
      established: '1911',
      students: '25,000+',
      faculties: 'Arts, Business, Engineering, Law, Medicine, Science'
    },
    {
      name: 'University of Adelaide',
      location: 'Adelaide, South Australia',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
      ranking: '#8 in Australia, #108 Worldwide',
      established: '1874',
      students: '29,000+',
      faculties: 'Arts, Business, Engineering, Sciences, Health Sciences'
    }
  ];

  return (
    <>
      <section className="bg-primary-800 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Australian Universities
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Discover Australia's prestigious universities offering world-class education across diverse disciplines.
            </p>
            
            <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
              <Search className="text-gray-400 w-5 h-5 ml-2 mr-3" />
              <input
                type="text"
                placeholder="Search universities..."
                className="flex-1 bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-400"
              />
              <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {universities.map((university, index) => (
              <div key={index} className="card group overflow-hidden">
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
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{university.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Established:</span>
                      <p className="font-medium">{university.established}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Students:</span>
                      <p className="font-medium">{university.students}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-500">Faculties:</span>
                      <p className="font-medium">{university.faculties}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium text-sm"
                    >
                      <Info className="w-4 h-4 mr-1" />
                      University Details
                    </a>
                    <a
                      href="#"
                      className="text-sm font-medium text-accent-600 hover:text-accent-800"
                    >
                      Available Courses
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-primary-50 py-12">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing the Right University?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our education consultants can help you select the best university based on your academic background, career goals, and preferences.
          </p>
          <a href="#consultation" className="btn btn-primary">Get Free Consultation</a>
        </div>
      </section>
    </>
  );
};

export default Universities;
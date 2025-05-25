import React from 'react';

const Scholarships = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Scholarships for Studying in Australia</h1>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-6">
          Australia offers numerous scholarships for international students at all study levels. 
          Below you'll find information about some of the most prestigious scholarship programs.
        </p>
        
        <div className="grid gap-8 mt-10">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3">Australia Awards</h2>
            <p className="mb-3">
              Government-funded scholarships that promote knowledge, education links, and enduring ties between Australia and its neighbors.
            </p>
            <a href="#" className="text-blue-600 hover:underline">Learn more</a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3">Endeavour Leadership Program</h2>
            <p className="mb-3">
              The Endeavour Leadership Program supports high-achieving individuals to undertake study, research, and professional development.
            </p>
            <a href="#" className="text-blue-600 hover:underline">Learn more</a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3">Research Training Program (RTP)</h2>
            <p className="mb-3">
              The RTP provides fee offsets, stipends, and allowances to support students undertaking Research Doctorate and Research Masters degrees.
            </p>
            <a href="#" className="text-blue-600 hover:underline">Learn more</a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3">University-Specific Scholarships</h2>
            <p className="mb-3">
              Many Australian universities offer their own scholarships specifically for international students based on academic merit.
            </p>
            <a href="#" className="text-blue-600 hover:underline">View university scholarships</a>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Need Help Finding Scholarships?</h3>
          <p className="mb-4">
            Our education consultants can help you identify and apply for scholarships that match your academic profile and career goals.
          </p>
          <a href="/contact" className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Contact Us for Scholarship Guidance
          </a>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
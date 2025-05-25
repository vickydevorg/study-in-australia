import React from 'react';
import { FileText, Clock, DollarSign, HelpCircle, Shield, Calendar, AlignLeft, CheckSquare } from 'lucide-react';

const VisaInfo: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Student Visa Information | Study in Australia';
  }, []);

  const visaTypes = [
    {
      name: 'Student Visa (Subclass 500)',
      description: 'The primary visa for international students studying full-time in Australia.',
      eligibility: 'Enrolled in a CRICOS-registered course, meet financial requirements, English proficiency, and health insurance.',
      duration: 'Duration of your course, with additional months after completion.',
      icon: <FileText className="w-6 h-6" />
    },
    {
      name: 'Student Guardian Visa (Subclass 590)',
      description: 'For guardians of international students under 18 years of age.',
      eligibility: 'Nominated by the student\'s parents, meet character requirements, and provide accommodation.',
      duration: 'Same as the student visa period or until the student turns 18.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: 'Temporary Graduate Visa (Subclass 485)',
      description: 'Allows recent graduates to work in Australia after completing their studies.',
      eligibility: 'Completed at least 2 years of study in Australia, meet English requirements, and under 50 years of age.',
      duration: '2-4 years, depending on the qualification level obtained.',
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];
  
  return (
    <>
      <section className="bg-primary-800 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Australian Student Visa Information
            </h1>
            <p className="text-xl text-gray-100">
              Everything you need to know about obtaining and maintaining your student visa for studying in Australia.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <Clock className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Processing Time</h3>
              <p className="text-gray-600">
                Student visa applications typically take 4-6 weeks to process. Apply at least 2-3 months before your course start date.
              </p>
            </div>
            
            <div className="card p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <DollarSign className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visa Costs</h3>
              <p className="text-gray-600">
                The current student visa application fee is AUD 630. Additional costs may include health examinations and biometrics.
              </p>
            </div>
            
            <div className="card p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <HelpCircle className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visa Assistance</h3>
              <p className="text-gray-600">
                Our team provides guidance throughout the visa application process. Contact us for personalized support.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Types of Student Visas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visaTypes.map((visa, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="p-5 bg-primary-700 text-white">
                  <div className="flex items-center">
                    {visa.icon}
                    <h3 className="text-xl font-semibold ml-2">{visa.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 mb-4">{visa.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-gray-500 block">ELIGIBILITY</span>
                      <p className="text-gray-800">{visa.eligibility}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-500 block">DURATION</span>
                      <p className="text-gray-800">{visa.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visa Application Process</h2>
              <div className="space-y-5">
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Receive Your Offer Letter</h3>
                    <p className="text-gray-600">
                      Apply and receive an unconditional offer letter from your chosen Australian educational institution.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Accept Your Offer</h3>
                    <p className="text-gray-600">
                      Accept the offer and pay the required deposit to receive your Confirmation of Enrollment (CoE).
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Prepare Required Documents</h3>
                    <p className="text-gray-600">
                      Gather all necessary documents, including your CoE, financial evidence, English proficiency results, and health insurance.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Submit Your Application</h3>
                    <p className="text-gray-600">
                      Create an ImmiAccount and submit your visa application online with all required documents.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Attend Biometrics Appointment</h3>
                    <p className="text-gray-600">
                      If required, attend a biometrics appointment at a designated center in your country.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Receive Visa Decision</h3>
                    <p className="text-gray-600">
                      Wait for the decision on your visa application, which will be communicated via email.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Visa Requirements</h2>
              
              <div className="space-y-6">
                <div className="card p-5 border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Calendar className="w-5 h-5 text-primary-600 mr-2" />
                    <h3 className="text-lg font-semibold">Genuine Temporary Entrant (GTE)</h3>
                  </div>
                  <p className="text-gray-600">
                    You must demonstrate that you're a genuine student intending to return to your home country after completing your studies.
                  </p>
                </div>
                
                <div className="card p-5 border border-gray-100">
                  <div className="flex items-center mb-3">
                    <AlignLeft className="w-5 h-5 text-primary-600 mr-2" />
                    <h3 className="text-lg font-semibold">English Language Proficiency</h3>
                  </div>
                  <p className="text-gray-600">
                    Provide evidence of sufficient English language skills through tests like IELTS, TOEFL, or PTE.
                  </p>
                </div>
                
                <div className="card p-5 border border-gray-100">
                  <div className="flex items-center mb-3">
                    <DollarSign className="w-5 h-5 text-primary-600 mr-2" />
                    <h3 className="text-lg font-semibold">Financial Requirements</h3>
                  </div>
                  <p className="text-gray-600">
                    Show that you have sufficient funds to cover tuition fees, living expenses, and travel costs for yourself and any accompanying family members.
                  </p>
                </div>
                
                <div className="card p-5 border border-gray-100">
                  <div className="flex items-center mb-3">
                    <CheckSquare className="w-5 h-5 text-primary-600 mr-2" />
                    <h3 className="text-lg font-semibold">Health Insurance</h3>
                  </div>
                  <p className="text-gray-600">
                    Purchase Overseas Student Health Cover (OSHC) for the duration of your stay in Australia.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#consultation" className="btn btn-primary">
                  Need Help With Your Visa Application?
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-primary-50 py-12">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions About Student Visas?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our visa specialists can guide you through the entire application process and help increase your chances of approval.
          </p>
          <a href="#consultation" className="btn btn-primary">Get Expert Visa Guidance</a>
        </div>
      </section>
    </>
  );
};

const GraduationCap = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

export default VisaInfo;
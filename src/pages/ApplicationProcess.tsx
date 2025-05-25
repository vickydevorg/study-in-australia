import React from 'react';

const ApplicationProcess = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Application Process</h1>
      <p className="mb-4">Information about the application process for studying in Australia will be provided here.</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Steps to Apply</h2>
          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>Research universities and courses that match your academic interests and career goals</li>
            <li>Check entry requirements for your chosen program</li>
            <li>Prepare necessary documents (academic transcripts, English proficiency scores, etc.)</li>
            <li>Submit your application through the university's online portal</li>
            <li>Wait for an offer letter from the institution</li>
            <li>Accept the offer and pay any required fees</li>
            <li>Apply for your student visa</li>
            <li>Arrange accommodation and travel</li>
          </ol>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Required Documents</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Academic transcripts and certificates</li>
            <li>Proof of English language proficiency (IELTS, TOEFL, etc.)</li>
            <li>Statement of purpose or personal statement</li>
            <li>Letters of recommendation</li>
            <li>Resume/CV (for postgraduate applications)</li>
            <li>Portfolio (for creative courses)</li>
            <li>Passport copy</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ApplicationProcess;
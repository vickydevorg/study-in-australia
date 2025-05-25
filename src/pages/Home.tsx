import React from 'react';
import Hero from '../components/home/Hero';
import WhyAustralia from '../components/home/WhyAustralia';
import FeaturedUniversities from '../components/home/FeaturedUniversities';
import StudyLevels from '../components/home/StudyLevels';
import ApplicationGuide from '../components/home/ApplicationGuide';
import Testimonials from '../components/home/Testimonials';
import ConsultationForm from '../components/home/ConsultationForm';

const Home: React.FC = () => {
  // Set page title
  React.useEffect(() => {
    document.title = 'Study in Australia - Your Guide to Australian Education';
  }, []);

  return (
    <>
      <Hero />
      <WhyAustralia />
      <FeaturedUniversities />
      <StudyLevels />
      <ApplicationGuide />
      <Testimonials />
      <ConsultationForm />
    </>
  );
};

export default Home;
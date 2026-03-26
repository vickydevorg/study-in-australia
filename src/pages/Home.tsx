import React from 'react';
import Hero from '../components/home/Hero';
import WhyStudyAustralia from '../components/home/WhyStudyAustralia';
import ApplicationProcess from '../components/home/ApplicationProcess';
import FinancialGuide from '../components/home/FinancialGuide';
import LivingInAustralia from '../components/home/LivingInAustralia';
import CricosGuide from '../components/home/CricosGuide';
import ConsultationForm from '../components/home/ConsultationForm';

const Home: React.FC = () => {
  // Set page title
  React.useEffect(() => {
    document.title = 'Study in Australia - Your Guide to Australian Education';
  }, []);

  return (
    <>
      <Hero />
      <WhyStudyAustralia />
      <ApplicationProcess />
      <FinancialGuide />
      <LivingInAustralia />
      <CricosGuide />
      <ConsultationForm />
    </>
  );
};

export default Home;

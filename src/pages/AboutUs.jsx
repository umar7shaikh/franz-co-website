import React from 'react';
import AboutHero from '../components/Aboutuscomponents/AboutHero';
import AboutStory from '../components/Aboutuscomponents/AboutStory';
import MissionVision from '../components/Aboutuscomponents/MissionVision';
import CoreValues from '../components/Aboutuscomponents/CoreValues';
import ImpactStats from '../components/Aboutuscomponents/ImpactStats';
import WhyChooseUs from '../components/Aboutuscomponents/WhyChooseUs';
import Leadership from '../components/Aboutuscomponents/Leadership';
import PartnersCertifications from '../components/Aboutuscomponents/PartnersCertifications';
import Serve from '../components/Aboutuscomponents/Serve';
import Recognition from '../components/Aboutuscomponents/Recognition';
import Testimonials from '../components/common/Testimonials';
import Commitment from '../components/Aboutuscomponents/Commitment';
import ContactDetails from '../components/Aboutuscomponents/ContactDetails';
import Footer from '../components/common/footerMenus ';


const AboutUs = () => {
  
  return (
    <div>
        <AboutHero />
        <AboutStory />
        <MissionVision />
        <CoreValues />  
        <ImpactStats />
        <WhyChooseUs />
        <Leadership />
        <PartnersCertifications />
        <Serve />
        <Recognition />
        <Testimonials />
        <Commitment />
        <ContactDetails />
        <Footer />
        

        




      
      {/* Page content goes here */}
    </div>
  );
};


export default AboutUs

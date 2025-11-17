import React from 'react';

import Hero from '../components/homecomponents/Hero';
import Solutions from '../components/homecomponents/Solutions';
import Segments from '../components/homecomponents/Segments';
import Process from '../components/homecomponents/Process';
import Impact from '../components/homecomponents/Impact';
import Advantage from '../components/homecomponents/Advantage';
import Projects from '../components/homecomponents/Projects';
import Equipment from '../components/homecomponents/Equipment';
import Solutions2 from '../components/homecomponents/Solutions2'; 
import Steps from '../components/homecomponents/Steps';
import Testimonials from '../components/common/Testimonials';
import BlogSection from '../components/homecomponents/BlogSection';
import CTASection from '../components/homecomponents/CTASection';
import ContactSection from '../components/homecomponents/ContactSection';
import Footer from '../components/common/footerMenus ';

const Home = () => {
  
  return (
    <div>
      
      <Hero />
      <Solutions />
      <Segments />
      <Process />
      <Impact />
      <Advantage />
      <Projects />  
      <Equipment /> 
      <Solutions2 />
      <Steps />
      <Testimonials />
      <BlogSection />
      <CTASection />  
      <ContactSection />
      <Footer />
      
      {/* Page content goes here */}
    </div>
  );
};

export default Home;

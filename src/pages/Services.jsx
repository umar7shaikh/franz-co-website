import React from 'react'
import ServicesHero from '../components/Servicescomponents/ServicesHero'
import FullSpectrumBanner from '../components/Servicescomponents/FullSpectrumBanner.jsx'
import ServicesSection from '../components/Servicescomponents/ServicesSection'
import Residential from '../components/Servicescomponents/Residential'
import Corporate from '../components/Servicescomponents/Corporate'
import Hotel from '../components/Servicescomponents/Hotel'
import Private from '../components/Servicescomponents/Private'
import Comparison from '../components/Servicescomponents/Comparison'
import AddServices from '../components/Servicescomponents/AddServices'
import AmenityCTASection from '../components/Servicescomponents/AmenityCTASection'
import ContactDetails2 from '../components/Servicescomponents/ContactDetails2'
import FAQs from '../components/Servicescomponents/FAQs'
import CommitmentToSuccess from '../components/Servicescomponents/CommitmentToSuccess.jsx'
import FitnessCta from '../components/Servicescomponents/FitnessCta'
import Footer from '../components/common/footerMenus '

const Services = () => {
  return (
    <div>
        <ServicesHero />
        <FullSpectrumBanner />
        <ServicesSection />
        <Residential />
        <Corporate />
        <Hotel />
        <Private />
        {/* <Comparison /> */}
        <AddServices /> 
        <AmenityCTASection />
        <ContactDetails2 />
        <FAQs />
        <CommitmentToSuccess />
        <FitnessCta />
        <Footer />

    </div>
  )
}

export default Services

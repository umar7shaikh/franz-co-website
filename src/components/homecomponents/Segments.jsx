import { useState } from 'react';
import Segments1 from '../../assets/Segments1.png';
import Segments2 from '../../assets/Segments2.png';
import Segments3 from '../../assets/Segments3.png';
import Segments4 from '../../assets/Segments4.png';


const Segments = () => {
  const [activeTab, setActiveTab] = useState('residential');
  const [direction, setDirection] = useState('right');


  const segmentsData = {
    residential: {
      title: 'Premium Community Wellness Centers',
      subtitle: 'RESIDENTIAL SOCIETIES',
      description: 'From gated townships to high-rise complexes, create fitness amenities that become the pride of your community. Our designs accommodate 50-500 members with equipment selection optimized for family demographics.',
      image: Segments1,
      features: [
        { label: 'Luxury Villas', size: '1,500 - 8,000 sq.ft.', investment: '₹15-75 Lakhs' },
        { label: 'Penthouses', size: '', investment: '' },
        { label: 'Farmhouses', size: '', investment: '' },
        { label: 'Private Estates', size: '', investment: '' }
      ],
      button: 'View Residential Projects'
    },
    corporate: {
      title: 'Executive Fitness Facilities',
      subtitle: 'CORPORATE OFFICES',
      description: 'Design premium corporate wellness centers that boost employee productivity and retention. Our solutions integrate seamlessly with office aesthetics while providing professional-grade equipment.',
      image: Segments2,
      features: [
        { label: 'Tech Parks', size: '2,000 - 10,000 sq.ft.', investment: '₹20-100 Lakhs' },
        { label: 'IT Campuses', size: '', investment: '' },
        { label: 'Business Centers', size: '', investment: '' },
        { label: 'Co-working Spaces', size: '', investment: '' }
      ],
      button: 'View Corporate Projects'
    },
    hospitality: {
      title: 'Luxury Hotel & Resort Gyms',
      subtitle: 'HOSPITALITY & HOTELS',
      description: 'Elevate your guest experience with world-class fitness centers. From boutique hotels to 5-star resorts, we deliver turnkey solutions that match your hospitality standards.',
      image: Segments3,
      features: [
        { label: '5-Star Hotels', size: '1,500 - 5,000 sq.ft.', investment: '₹15-50 Lakhs' },
        { label: 'Luxury Resorts', size: '', investment: '' },
        { label: 'Boutique Hotels', size: '', investment: '' },
        { label: 'Service Apartments', size: '', investment: '' }
      ],
      button: 'View Hospitality Projects'
    },
    private: {
      title: 'Bespoke Private Gyms',
      subtitle: 'PRIVATE ESTATES',
      description: 'Create your personal fitness sanctuary with custom-designed private gyms. From home gyms to estate wellness centers, we deliver exclusive solutions tailored to your lifestyle.',
      image: Segments4,
      features: [
        { label: 'Private Villas', size: '500 - 2,000 sq.ft.', investment: '₹5-25 Lakhs' },
        { label: 'Farmhouses', size: '', investment: '' },
        { label: 'Penthouses', size: '', investment: '' },
        { label: 'Home Gyms', size: '', investment: '' }
      ],
      button: 'View Private Projects'
    }
  };


  const tabOrder = ['residential', 'corporate', 'hospitality', 'private'];


  const handleTabChange = (newTab) => {
    const currentIndex = tabOrder.indexOf(activeTab);
    const newIndex = tabOrder.indexOf(newTab);
    setDirection(newIndex > currentIndex ? 'right' : 'left');
    setActiveTab(newTab);
  };


  const currentSegment = segmentsData[activeTab];


  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16" style={{ backgroundColor: '#F9ECEA' }}>
      {/* Main Container with specified dimensions */}
      <div 
        className="mx-auto flex flex-col"
        style={{
          width: '100%',
          maxWidth: '1280px',
          minHeight: '1092px',
          gap: '80px',
          opacity: 1
        }}
      >
        {/* Header Section with specified dimensions */}
        <div 
          className="text-center flex flex-col justify-center mx-auto"
          style={{
            width: '100%',
            maxWidth: '1280px',
            height: '207px',
            gap: '32px',
            opacity: 1
          }}
        >
          {/* Segments Label */}
          <p 
            className="font-poppins mx-auto"
            style={{ 
              width: '83px',
              height: '24px',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#C34A36',
              opacity: 1
            }}
          >
            Segments
          </p>
          
          {/* Main Heading */}
          <h2 
            className="font-unbounded mx-auto"
            style={{
              width: '100%',
              maxWidth: '1280px',
              height: '116px',
              fontWeight: 500,
              fontSize: '48px',
              lineHeight: '120%',
              letterSpacing: '-1%',
              textAlign: 'center',
              color: '#18191A',
              opacity: 1
            }}
          >
            Specialized gym solutions for every real estate category
          </h2>
          
          {/* Description */}
          <p 
            className="font-poppins mx-auto"
            style={{
              width: '100%',
              maxWidth: '1280px',
              height: '27px',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '150%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#404040',
              opacity: 1
            }}
          >
            Custom fitness amenities designed for residential, corporate, hospitality, and private estate environments
          </p>
        </div>


        {/* Tabs with darker background and no gaps */}
        <div 
          className="flex justify-center items-center mx-auto p-1"
          style={{
            backgroundColor: '#F5D5D1',
            borderRadius: '12px',
            width: 'fit-content',
            gap: '0px'
          }}
        >
          <button
            onClick={() => handleTabChange('residential')}
            className={`font-poppins font-medium text-[13px] sm:text-[14px] px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
              activeTab === 'residential'
                ? 'bg-white shadow-sm'
                : 'bg-transparent'
            }`}
            style={{
              color: activeTab === 'residential' ? '#C34A36' : '#999999'
            }}
          >
            RESIDENTIAL SOCIETIES
          </button>
          
          <button
            onClick={() => handleTabChange('corporate')}
            className={`font-poppins font-medium text-[13px] sm:text-[14px] px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
              activeTab === 'corporate'
                ? 'bg-white shadow-sm'
                : 'bg-transparent'
            }`}
            style={{
              color: activeTab === 'corporate' ? '#C34A36' : '#999999'
            }}
          >
            CORPORATE OFFICES
          </button>
          
          <button
            onClick={() => handleTabChange('hospitality')}
            className={`font-poppins font-medium text-[13px] sm:text-[14px] px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
              activeTab === 'hospitality'
                ? 'bg-white shadow-sm'
                : 'bg-transparent'
            }`}
            style={{
              color: activeTab === 'hospitality' ? '#C34A36' : '#999999'
            }}
          >
            HOSPITALITY & HOTELS
          </button>
          
          <button
            onClick={() => handleTabChange('private')}
            className={`font-poppins font-medium text-[13px] sm:text-[14px] px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
              activeTab === 'private'
                ? 'bg-white shadow-sm'
                : 'bg-transparent'
            }`}
            style={{
              color: activeTab === 'private' ? '#C34A36' : '#999999'
            }}
          >
            PRIVATE ESTATES
          </button>
        </div>


        {/* Content Container with specified dimensions */}
        <div 
          className="overflow-hidden"
          style={{
            width: '100%',
            maxWidth: '1280px',
            height: '600px',
            gap: '64px',
            opacity: 1
          }}
        >
          <div 
            key={activeTab}
            className="flex flex-col lg:flex-row items-start"
            style={{
              animation: `slideIn${direction === 'right' ? 'Right' : 'Left'} 0.5s ease-out`,
              gap: '80px',
              height: '100%'
            }}
          >
            {/* Left Side - Text Content Container */}
            <div 
              className="flex flex-col w-full lg:w-auto"
              style={{
                maxWidth: '600px',
                height: '471px',
                gap: '32px',
                opacity: 1,
                paddingTop: '64.5px'
              }}
            >
              {/* Subtitle */}
              <p 
                className="font-poppins font-semibold"
                style={{ 
                  width: '181px',
                  height: '24px',
                  fontSize: '14px',
                  color: '#C34A36',
                  opacity: 1
                }}
              >
                {currentSegment.subtitle}
              </p>
              
              {/* Title */}
              <h3 
                className="font-unbounded"
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  height: '84px',
                  fontWeight: 500,
                  fontSize: '32px',
                  lineHeight: '130%',
                  letterSpacing: '-1%',
                  color: '#18191A',
                  opacity: 1
                }}
              >
                {currentSegment.title}
              </h3>
              
              {/* Description */}
              <p 
                className="font-poppins"
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  height: '63px',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  color: '#404040',
                  opacity: 1
                }}
              >
                {currentSegment.description}
              </p>


              {/* Features List */}
              <div className="space-y-3">
                {currentSegment.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-[#C34A36] text-[18px] mt-1">✓</span>
                    <div className="flex flex-col sm:flex-row items-start gap-4 flex-1">
                      <p 
                        className="font-poppins"
                        style={{
                          width: '250px',
                          height: '21px',
                          fontWeight: 500,
                          fontSize: '14px',
                          lineHeight: '150%',
                          letterSpacing: '0%',
                          color: '#18191A',
                          opacity: 1
                        }}
                      >
                        {feature.label}
                      </p>
                      {feature.size && (
                        <div className="flex gap-6">
                          <div className="flex flex-col gap-1">
                            <p className="font-poppins text-[13px] font-medium" style={{ color: '#C34A36' }}>
                              Size Range:
                            </p>
                            <p className="font-poppins text-[13px]" style={{ color: '#18191A' }}>
                              {feature.size}
                            </p>
                          </div>
                          {feature.investment && (
                            <div className="flex flex-col gap-1">
                              <p className="font-poppins text-[13px] font-medium" style={{ color: '#C34A36' }}>
                                Investment:
                              </p>
                              <p className="font-poppins text-[13px]" style={{ color: '#18191A' }}>
                                {feature.investment}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>


              <button className="font-poppins font-medium text-[14px] bg-[#C34A36] hover:bg-[#A63D2A] text-white px-6 py-3 rounded-lg transition-all inline-flex items-center gap-2 w-fit">
                {currentSegment.button}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>


            {/* Right Side - Image Container */}
            <div 
              className="w-full lg:w-auto"
              style={{
                maxWidth: '600px',
                height: '600px',
                opacity: 1
              }}
            >
              <img 
                src={currentSegment.image} 
                alt={currentSegment.title}
                className="w-full h-full rounded-xl shadow-lg object-cover"
                style={{
                  mixBlendMode: 'darken'
                }}
              />
            </div>
          </div>
        </div>


        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {Object.keys(segmentsData).map((key) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeTab === key ? 'bg-[#C34A36] w-8' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>
      </div>


      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }


        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};


export default Segments;

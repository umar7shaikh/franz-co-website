import { useState } from 'react';
import Advantage1 from '../../assets/Advantage1.png';
import Advantage2 from '../../assets/Advantage2.png';
import Advantage3 from '../../assets/Advantage3.png';
import Advantage4 from '../../assets/Advantage4.png';
import Advantage5 from '../../assets/Advantage5.png';
import Advantage6 from '../../assets/Advantage6.png';

const Advantage = () => {
  const [activeTab, setActiveTab] = useState('accountability');
  const [isAnimating, setIsAnimating] = useState(false);

  const tabs = [
    { key: 'accountability', label: 'Accountability' },
    { key: 'roi', label: 'ROI' },
    { key: 'equipment', label: 'Equipment' },
    { key: 'compliance', label: 'Compliance' },
    { key: 'support', label: 'Support' },
    { key: 'flexibility', label: 'Flexibility' }
  ];

  const advantageData = {
    accountability: {
      title: 'End-to-End Accountability',
      description: 'One partner. One contract. One point of contact. Unlike fragmented vendors, we own the entire process from design to after-sales service.',
      image: Advantage1
    },
    roi: {
      title: 'Measurable ROI',
      description: 'Track tangible returns with our data-driven approach. Premium fitness amenities increase property values and accelerate sales cycles.',
      image: Advantage2
    },
    equipment: {
      title: 'Premium Equipment',
      description: 'World-class brands and cutting-edge technology. We source and install only the finest equipment tailored to your project needs.',
      image: Advantage3
    },
    compliance: {
      title: 'Full Compliance',
      description: 'Navigate regulations effortlessly. We handle all certifications, safety standards, and documentation requirements.',
      image: Advantage4
    },
    support: {
      title: 'Ongoing Support',
      description: 'Comprehensive after-sales service and maintenance. Our team ensures your fitness facility operates flawlessly year after year.',
      image: Advantage5
    },
    flexibility: {
      title: 'Design Flexibility',
      description: 'Custom solutions for any space or budget. From compact urban gyms to sprawling wellness centers, we adapt to your vision.',
      image: Advantage6
    }
  };

  const currentAdvantage = advantageData[activeTab];

  const handleTabChange = (newTab) => {
    if (newTab !== activeTab) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(newTab);
        setIsAnimating(false);
      }, 150);
    }
  };

  return (
    <section 
      className="w-full px-4 sm:px-8 lg:px-16" 
      style={{ 
        backgroundColor: 'white',
        paddingTop: '112px'
      }}
    >
      {/* Main Container */}
      <div 
        className="mx-auto flex flex-col"
        style={{
          width: '100%',
          maxWidth: '1280px',
          minHeight: '958px',
          gap: '80px',
          opacity: 1
        }}
      >
        {/* Header Section */}
        <div 
          className="text-center flex flex-col justify-center mx-auto"
          style={{
            width: '100%',
            maxWidth: '1280px',
            gap: '32px',
            opacity: 1
          }}
        >
          {/* Advantage Label */}
          <p 
            className="font-poppins mx-auto"
            style={{ 
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#C34A36',
              opacity: 1
            }}
          >
            Advantage
          </p>
          
          {/* Main Heading */}
          <h2 
            className="font-unbounded mx-auto"
            style={{
              width: '100%',
              maxWidth: '1280px',
              fontWeight: 500,
              fontSize: '48px',
              lineHeight: '120%',
              letterSpacing: '-1%',
              textAlign: 'center',
              color: '#18191A',
              opacity: 1
            }}
          >
            Why developers choose us
          </h2>
          
          {/* Description */}
          <p 
            className="font-poppins mx-auto"
            style={{
              width: '100%',
              maxWidth: '1280px',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '150%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#404040',
              opacity: 1
            }}
          >
            Comprehensive solutions that deliver measurable value and exceptional fitness experiences
          </p>
        </div>

        {/* Content Box */}
        <div 
          style={{
            width: '100%',
            maxWidth: '1280px',
            height: '720px',
            borderRadius: '16px',
            opacity: 1,
            overflow: 'hidden'
          }}
        >
          {/* Tabs Container */}
          <div 
            className="flex"
            style={{
              width: '100%',
              maxWidth: '1280px',
              height: '72px',
              opacity: 1
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className="font-poppins transition-all duration-300"
                style={{
                  width: '213.33px',
                  height: '72px',
                  paddingTop: '24px',
                  paddingRight: '32px',
                  paddingBottom: '24px',
                  paddingLeft: '32px',
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px',
                  backgroundColor: activeTab === tab.key ? '#F9ECEA' : 'white',
                  color: activeTab === tab.key ? '#C34A36' : 'rgba(10, 4, 3, 0.3)',
                  fontWeight: 500,
                  fontSize: '14px',
                  opacity: 1,
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div 
            className="relative"
            style={{
              width: '100%',
              height: 'calc(720px - 72px)',
              backgroundColor: '#F9ECEA',
              opacity: 1
            }}
          >
            {/* Text Content - Left Side */}
            <div 
              className="absolute flex flex-col transition-all duration-300"
              style={{
                width: '424px',
                gap: '32px',
                top: '190px',
                left: '112px',
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'translateY(20px)' : 'translateY(0)'
              }}
            >
              {/* Title - Fixed Height Container */}
              <div style={{ minHeight: '94px' }}>
                <h3 
                  className="font-unbounded"
                  style={{
                    fontWeight: 500,
                    fontSize: '36px',
                    lineHeight: '130%',
                    letterSpacing: '-1%',
                    color: '#0A0403',
                    opacity: 1
                  }}
                >
                  {currentAdvantage.title}
                </h3>
              </div>
              
              {/* Description */}
              <p 
                className="font-poppins"
                style={{
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  color: '#0A0403',
                  opacity: 1
                }}
              >
                {currentAdvantage.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 items-center">
                <button 
                  className="font-poppins font-medium transition-all hover:bg-[#A63D2A]"
                  style={{
                    fontSize: '14px',
                    backgroundColor: '#C34A36',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Learn more
                </button>
                <button 
                  className="font-poppins font-medium transition-all inline-flex items-center gap-2 hover:text-[#A63D2A]"
                  style={{
                    fontSize: '14px',
                    color: '#C34A36',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Explore details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image - Right Side */}
            <div 
              className="absolute transition-all duration-300"
              style={{
                width: '552px',
                height: '552px',
                top: '48px',
                right: '112px',
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'scale(0.95)' : 'scale(1)'
              }}
            >
              <img 
                src={currentAdvantage.image} 
                alt={currentAdvantage.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  mixBlendMode: 'darken'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;

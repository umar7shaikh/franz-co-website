import { useState } from 'react';
import Solutions21 from '../../assets/Solutions21.png';
import Solutions22 from '../../assets/Solutions22.png';
import Solutions23 from '../../assets/Solutions23.png';
import Solutions24 from '../../assets/Solutions24.png';
import Solutions25 from '../../assets/Solutions25.png';

const Solutions2 = () => {
  const [activeTab, setActiveTab] = useState('design');
  const [isAnimating, setIsAnimating] = useState(false);

  const tabs = [
    { key: 'design', label: 'Design' },
    { key: 'equipment', label: 'Equipment' },
    { key: 'installation', label: 'Installation' },
    { key: 'training', label: 'Training' },
    { key: 'support', label: 'Support' }
  ];

  const solutionData = {
    design: {
      title: 'DESIGN & PLANNING',
      bullets: [
        'Site survey and load analysis',
        '3D visualization and virtual walkthrough',
        'Equipment selection consultation',
        'Regulatory compliance documentation',
        'Electrical and HVAC planning'
      ],
      image: Solutions21
    },
    equipment: {
      title: 'EQUIPMENT SUPPLY',
      bullets: [
        'Multi-brand procurement',
        'Delivery and logistics management',
        'Warranty and installation coordination',
        'Quality assurance and testing',
        'Innovative technology sourcing'
      ],
      image: Solutions22
    },
    installation: {
      title: 'INSTALLATION',
      bullets: [
        'Onsite professional installation',
        'Testing and calibration',
        'Operational handover',
        'Safety compliance checks',
        'Post-installation support'
      ],
      image: Solutions23
    },
    training: {
      title: 'TRAINING',
      bullets: [
        'Staff onboarding',
        'Equipment use training',
        'Safety best practices',
        'Customized training programs',
        'Ongoing skill development'
      ],
      image: Solutions24
    },
    support: {
      title: 'SUPPORT',
      bullets: [
        'Staff onboarding',
        'Equipment use training',
        'Safety best practices',
        'Customized training programs',
        'Ongoing skill development'
      ],
      image: Solutions25
    }
  };

  const currentAdvantage = solutionData[activeTab];

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
    <>
      {/* MOBILE-ONLY STYLES */}
      <style>
        {`
          @media (max-width: 767px) {
            .solutions-section {
              padding-top: 64px !important;
              padding-bottom: 24px !important;
              padding-left: 16px !important;
              padding-right: 16px !important;
              margin-bottom: 0 !important;
            }

            .solutions-main-container {
              gap: 24px !important;
              min-height: auto !important;
            }

            .solutions-header {
              text-align: left !important;
              gap: 12px !important;
              align-items: flex-start !important;
              padding: 0 !important;
              margin-bottom: 0 !important;
              width: 100% !important;
            }

            .solutions-label {
              text-align: left !important;
              font-size: 14px !important;
              margin: 0 !important;
              padding: 0 !important;
              line-height: 1.3 !important;
            }

            .solutions-title {
              text-align: left !important;
              font-size: 24px !important;
              line-height: 1.2 !important;
              margin: 0 !important;
              padding: 0 !important;
            }

            .solutions-description {
              text-align: left !important;
              font-size: 14px !important;
              line-height: 1.4 !important;
              margin: 0 !important;
              padding: 0 !important;
            }

            /* Content box: much more compact */
            .solutions-content-box {
              height: auto !important;
              min-height: 400px !important;
              display: flex !important;
              flex-direction: column !important;
              overflow: visible !important;
              margin-bottom: 0 !important;
              border-radius: 12px !important;
            }

            /* Tabs: reduced size even more */
            .solutions-tabs {
              height: 44px !important;
              justify-content: space-around !important;
              padding: 0 !important;
              margin: 0 !important;
            }

            .solutions-tab-btn {
              flex: 1 !important;
              max-width: 90px !important;
              padding: 4px 8px !important;
              font-size: 11px !important;
              height: 36px !important;
              border-radius: 8px 8px 0 0 !important;
              line-height: 1.2 !important;
            }

            /* Content area: tighter padding */
            .solutions-content-area {
              height: auto !important;
              min-height: 320px !important;
              padding: 16px !important;
              position: relative !important;
              display: block !important;
              margin: 0 !important;
              border-radius: 0 0 12px 12px !important;
            }

            .solutions-text-content {
              position: static !important;
              width: 100% !important;
              top: auto !important;
              left: auto !important;
              transform: none !important;
              gap: 16px !important;
              padding: 0 !important;
              margin: 0 !important;
              min-height: auto !important;
            }

            .solutions-title-container {
              min-height: auto !important;
              width: 100% !important;
              margin-bottom: 0 !important;
            }

            .solutions-main-title {
              font-size: 20px !important;
              line-height: 1.2 !important;
              text-align: left !important;
              margin: 0 !important;
              padding: 0 !important;
            }

            .solutions-bullets {
              font-size: 13px !important;
              line-height: 1.4 !important;
              padding-left: 16px !important;
              margin: 0 !important;
              padding-top: 0 !important;
              padding-bottom: 0 !important;
            }

            .solutions-bullets li {
              margin-bottom: 6px !important;
              padding: 0 !important;
            }

            .solutions-buttons {
              width: 100% !important;
              flex-direction: column !important;
              gap: 8px !important;
              margin-top: 0 !important;
              padding-top: 0 !important;
            }

            .solutions-primary-btn,
            .solutions-secondary-btn {
              width: 100% !important;
              justify-content: center !important;
              padding: 10px 16px !important;
              margin: 0 !important;
              height: auto !important;
            }

            .solutions-primary-btn {
              font-size: 13px !important;
            }

            .solutions-secondary-btn {
              font-size: 13px !important;
              padding: 8px 12px !important;
              align-self: flex-start !important;
            }

            /* Hide image completely on mobile */
            .solutions-image-container {
              display: none !important;
            }
          }
        `}
      </style>

      <section
        className="w-full px-4 sm:px-8 lg:px-16 solutions-section"
        style={{
          backgroundColor: 'white',
          paddingTop: '112px',
          paddingBottom: '64px'
        }}
      >
        {/* Main Container */}
        <div
          className="mx-auto flex flex-col solutions-main-container"
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
            className="text-center flex flex-col justify-center mx-auto solutions-header"
            style={{
              width: '100%',
              maxWidth: '1280px',
              gap: '32px',
              opacity: 1
            }}
          >
            {/* Advantage Label */}
            <p
              className="font-poppins mx-auto solutions-label"
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
              Solution
            </p>

            {/* Main Heading */}
            <h2
              className="font-unbounded mx-auto solutions-title"
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
              Complete turnkey fitness solutions
            </h2>

            {/* Description */}
            <p
              className="font-poppins mx-auto solutions-description"
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
              Comprehensive end-to-end services that transform fitness amenity planning and execution.
            </p>
          </div>

          {/* Content Box */}
          <div
            className="solutions-content-box"
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
              className="flex solutions-tabs"
              style={{
                width: '100%',
                maxWidth: '1280px',
                height: '72px',
                opacity: 1,
                justifyContent: 'space-between'
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className="font-poppins transition-all duration-300 solutions-tab-btn"
                  style={{
                    flex: 1,
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
              className="relative solutions-content-area"
              style={{
                width: '100%',
                height: 'calc(720px - 72px)',
                backgroundColor: '#F9ECEA',
                opacity: 1
              }}
            >
              {/* Text Content - Full width on mobile */}
              <div
                className="absolute flex flex-col transition-all duration-300 solutions-text-content"
                style={{
                  width: '424px',
                  gap: '32px',
                  top: '190px',
                  left: '112px',
                  opacity: isAnimating ? 0 : 1,
                  transform: isAnimating ? 'translateY(20px)' : 'translateY(0)'
                }}
              >
                {/* Title Container */}
                <div className="solutions-title-container" style={{ minHeight: '94px' }}>
                  <h3
                    className="font-unbounded solutions-main-title"
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

                {/* Bullets List */}
                <ul
                  className="font-poppins solutions-bullets"
                  style={{
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                    color: '#0A0403',
                    opacity: 1,
                    paddingLeft: '20px',
                    margin: 0,
                    listStyleType: 'disc'
                  }}
                >
                  {currentAdvantage.bullets.map((bullet, index) => (
                    <li key={index} style={{ marginBottom: '8px' }}>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex gap-4 items-center solutions-buttons">
                  <button
                    className="font-poppins font-medium solutions-primary-btn transition-all hover:bg-[#A63D2A]"
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
                    className="font-poppins font-medium solutions-secondary-btn transition-all inline-flex items-center gap-2 hover:text-[#A63D2A]"
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

              {/* Image - Hidden on mobile */}
              <div
                className="absolute transition-all duration-300 solutions-image-container"
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
    </>
  );
};

export default Solutions2;

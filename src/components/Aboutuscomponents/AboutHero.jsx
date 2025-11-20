import { useNavigate } from 'react-router-dom';
import AboutHeroImage from '../../assets/AboutHero.png';

const AboutHero = () => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/contact');
  };
  
  const handleServicesClick = () => {
    navigate('/services');
  };

  return (
    <>
      {/* MOBILE-ONLY STYLES */}
      <style>
        {`
          @media (max-width: 767px) {
            .about-hero-section {
              padding: 48px 16px !important;
              margin-top: 24px !important;
              margin-bottom: 24px !important;
            }

            .about-main-container {
              flex-direction: column !important;
              gap: 32px !important;
              min-height: auto !important;
              width: 100% !important;
              max-width: 100% !important;
            }

            .about-text-container {
              width: 100% !important;
              height: auto !important;
              padding: 0 !important;
              gap: 20px !important;
            }

            .about-image-container {
              width: 100% !important;
              height: 280px !important;
              border-radius: 12px !important;
              overflow: hidden !important;
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
              margin: 0 auto !important;
            }

            .about-label {
              font-size: 14px !important;
              text-align: left !important;
              margin: 0 !important;
              padding: 0 !important;
            }

            .about-heading {
              width: 100% !important;
              font-size: 28px !important;
              line-height: 1.3 !important;
              text-align: left !important;
              margin: 0 !important;
              padding: 0 !important;
            }

            .about-subheading {
              width: 100% !important;
              height: auto !important;
              font-size: 15px !important;
              line-height: 1.5 !important;
              text-align: left !important;
              margin: 0 !important;
              padding: 0 !important;
            }

            .about-stats-container {
              flex-direction: column !important;
              gap: 20px !important;
              width: 100% !important;
            }

            .about-stat-item {
              width: 100% !important;
              gap: 8px !important;
              padding: 0 !important;
            }

            .about-stat-number {
              width: 100% !important;
              font-size: 20px !important;
              line-height: 1.3 !important;
              text-align: left !important;
            }

            .about-stat-description {
              width: 100% !important;
              height: auto !important;
              font-size: 15px !important;
              line-height: 1.5 !important;
              text-align: left !important;
            }

            .about-buttons {
              flex-direction: column !important;
              gap: 12px !important;
              width: 100% !important;
            }

            .about-primary-btn,
            .about-secondary-btn {
              width: 100% !important;
              justify-content: center !important;
              padding: 12px 20px !important;
              font-size: 14px !important;
              text-align: center !important;
            }

            .about-image {
              width: 100% !important;
              height: 100% !important;
              object-fit: cover !important;
              max-width: 100% !important;
            }
          }
        `}
      </style>

      <section className="w-full py-16 px-4 sm:px-8 lg:px-16 about-hero-section" style={{ marginTop: '40px', marginBottom: '40px' }}>
        {/* Main Container */}
        <div 
          className="mx-auto flex flex-col lg:flex-row items-center about-main-container"
          style={{
            width: '100%',
            maxWidth: '1280px',
            minHeight: '640px',
            gap: '80px',
            opacity: 1
          }}
        >
          {/* Left Side - Text Content Container */}
          <div 
            className="flex flex-col w-full lg:w-auto justify-center about-text-container"
            style={{
              width: '600px',
              height: '524px',
              gap: '32px',
              opacity: 1,
              paddingTop: '58px',
              paddingBottom: '58px'
            }}
          >
            {/* Label */}
            <p 
              className="font-poppins about-label"
              style={{ 
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#C34A36',
                opacity: 1
              }}
            >
              ABOUT US
            </p>
            
            {/* Main Heading - Will wrap naturally in 3 lines at 600px width */}
            <h1 
              className="font-unbounded about-heading"
              style={{
                width: '600px',
                fontWeight: 500,
                fontSize: '48px',
                lineHeight: '130%',
                letterSpacing: '-1%',
                color: '#18191A',
                opacity: 1
              }}
            >
              Building Fitness Ecosystems That Elevate Properties And Empower Communities
            </h1>
            
            {/* Subheading */}
            <p 
              className="font-poppins about-subheading"
              style={{
                width: '600px',
                height: '54px',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#404040',
                opacity: 1
              }}
            >
              India's most trusted partner for commercial gym installations across residential, corporate, and hospitality real estate.
            </p>

            {/* Stats Container */}
            <div className="flex gap-6 flex-wrap about-stats-container">
              {/* Stat 1 */}
              <div 
                className="flex flex-col about-stat-item" 
                style={{ 
                  width: '288px',
                  gap: '8px'
                }}
              >
                <h3 
                  className="font-unbounded about-stat-number"
                  style={{
                    width: '288px',
                    height: '28px',
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '140%',
                    letterSpacing: '-1%',
                    color: '#C34A36',
                    opacity: 1
                  }}
                >
                  2 Million+ Sq. Ft.
                </h3>
                <p 
                  className="font-poppins about-stat-description"
                  style={{
                    width: '288px',
                    height: '120px',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                    color: '#404040',
                    opacity: 1
                  }}
                >
                  FranzCo has turned over 2 million square feet of unused amenity spaces into world-class fitness destinations that enhance property value and community living.
                </p>
              </div>

              {/* Stat 2 */}
              <div 
                className="flex flex-col about-stat-item" 
                style={{ 
                  width: '288px',
                  gap: '8px'
                }}
              >
                <h3 
                  className="font-unbounded about-stat-number"
                  style={{
                    width: '288px',
                    height: '28px',
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '140%',
                    letterSpacing: '-1%',
                    color: '#C34A36',
                    opacity: 1
                  }}
                >
                  Since 2016
                </h3>
                <p 
                  className="font-poppins about-stat-description"
                  style={{
                    width: '288px',
                    height: '120px',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                    color: '#404040',
                    opacity: 1
                  }}
                >
                  Delivering innovative fitness solutions that accelerate property sales and enrich the lives of thousands across India.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 about-buttons">
              <button 
                className="font-poppins font-semibold text-[15px] bg-[#f1eeed] hover:bg-[#e5e0df] transition-colors px-6 py-3 rounded-lg about-primary-btn"
                style={{
                  color: '#C34A36'
                }}
                onClick={handleContactClick}
              >
                Contact Us
              </button>
              
              <button 
                className="font-poppins font-semibold text-[15px] bg-transparent hover:bg-[#FFF5F3] transition-colors px-6 py-3 rounded-lg inline-flex items-center gap-2 about-secondary-btn"
                style={{
                  color: '#C34A36'
                }}
                onClick={handleServicesClick}
              >
                Our Services
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Image Container */}
          <div 
            className="w-full lg:w-auto flex-shrink-0 about-image-container"
            style={{
              width: '600px',
              height: '640px',
              opacity: 1
            }}
          >
            <img 
              src={AboutHeroImage} 
              alt="FranzCo Fitness Ecosystem - Modern gym facilities"
              className="about-image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;

import AboutHeroImage from '../../assets/AboutHero.png';

const AboutHero = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16" style={{ marginTop: '40px',marginBottom: '40px' }}>
      {/* Main Container */}
      <div 
        className="mx-auto flex flex-col lg:flex-row items-center"
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
          className="flex flex-col w-full lg:w-auto justify-center"
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
            className="font-poppins"
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
            className="font-unbounded"
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
            className="font-poppins"
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
          <div className="flex gap-6 flex-wrap">
            {/* Stat 1 */}
            <div 
              className="flex flex-col" 
              style={{ 
                width: '288px',
                gap: '8px'
              }}
            >
              <h3 
                className="font-unbounded"
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
                className="font-poppins"
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
              className="flex flex-col" 
              style={{ 
                width: '288px',
                gap: '8px'
              }}
            >
              <h3 
                className="font-unbounded"
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
                className="font-poppins"
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
          <div className="flex gap-4">
            <button 
              className="font-poppins font-semibold text-[15px] bg-[#f1eeed] hover:bg-[#e5e0df] transition-colors px-6 py-3 rounded-lg"
              style={{
                color: '#C34A36'
              }}
            >
              Contact Us
            </button>
            
            <button 
              className="font-poppins font-semibold text-[15px] bg-transparent hover:bg-[#FFF5F3] transition-colors px-6 py-3 rounded-lg inline-flex items-center gap-2"
              style={{
                color: '#C34A36'
              }}
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
          className="w-full lg:w-auto flex-shrink-0"
          style={{
            width: '600px',
            height: '640px',
            opacity: 1
          }}
        >
          <img 
            src={AboutHeroImage} 
            alt="FranzCo Fitness Ecosystem - Modern gym facilities"
            className="w-full h-full object-cover"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

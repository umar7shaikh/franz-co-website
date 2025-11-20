import ServicesHeroImg from '../../assets/ServicesHero.png';
import { useNavigate } from 'react-router-dom';

const ServicesHero = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <>
      {/* MOBILE-ONLY STYLES */}
      <style>
        {`
          @media (max-width: 767px) {
            .services-hero-section {
              padding: 40px 16px !important;
            }

            .services-hero-top {
              flex-direction: column !important;
              gap: 16px !important;
            }

            .services-hero-heading {
              font-size: 24px !important;
              line-height: 1.3 !important;
              margin-bottom: 12px !important;
              text-align: left !important;
            }

            .services-hero-subheading {
              font-size: 16px !important;
              line-height: 1.5 !important;
              margin-bottom: 16px !important;
            }

            .services-hero-description {
              font-size: 16px !important;
              line-height: 1.5 !important;
            }

            .services-hero-buttons {
              display: none !important;
            }
          }
        `}
      </style>

      <section className="w-full bg-white px-6 py-20 services-hero-section">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-16">
          {/* Top content row - Two columns */}
          <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-16 services-hero-top">
            {/* Left column - Heading and subheading */}
            <div className="flex-1 flex flex-col justify-start">
              <h1 className="font-unbounded text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-[#18191A] mb-6 services-hero-heading">
                Comprehensive Gym Solutions Engineered For Commercial Success
              </h1>
              <p className="font-poppins text-base lg:text-lg text-[#404040] font-normal leading-relaxed services-hero-subheading">
                FranzCo specializes in creating commercial-grade fitness amenities that meet the demanding requirements of modern real estate developments. Our end-to-end service model ensures seamless execution, regulatory compliance, and long-term operational excellence.
              </p>
            </div>

            {/* Right column - Description and CTAs */}
            <div className="flex-1 flex flex-col justify-start services-hero-right">
              <p className="font-poppins text-base lg:text-lg text-[#404040] font-normal leading-relaxed mb-8 services-hero-description">
                From concept to commission, we deliver turnkey fitness facilities that enhance property value and tenant satisfaction across every real estate segment.
              </p>
              <div className="flex gap-4 services-hero-buttons">
                <button className="bg-[#C34A36] text-white font-poppins font-medium text-sm px-8 py-3 rounded-md transition hover:bg-[#A33B28]">
                  Button
                </button>
                <button 
                  className="text-[#C34A36] font-poppins font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                  onClick={handleContactClick}
                >
                  Contact <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Image section - Full width below content */}
          <div className="w-full">
            <img
              src={ServicesHeroImg}
              alt="Comprehensive Gym Solutions - Commercial Fitness Facility"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesHero;

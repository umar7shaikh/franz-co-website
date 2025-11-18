import Solutions1 from '../../assets/Solutions1.png';
import Solutions2 from '../../assets/Solutions2.png';

const Solutions = ({ scrollToSolutions2, scrollToSegments }) => {
  return (
    <>
      <style>
        {`
          /* Mobile-only responsiveness */
          @media (max-width: 767px) {
            .responsive-width {
              width: 100% !important;
              max-width: 100% !important;
            }
            .responsive-height-auto {
              height: auto !important;
            }

            /* Section & container padding / margins */
            .solutions-section {
              margin-top: 40px !important;
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
            .solutions-inner {
              padding: 16px !important;
            }

            /* Stack columns with smaller gap */
            .solutions-flex {
              flex-direction: column !important;
              gap: 32px !important;
              align-items: flex-start !important;
            }

            /* Heading & paragraph: remove fixed sizes */
            .solutions-heading {
              width: 100% !important;
              height: auto !important;
              font-size: 24px !important;
              line-height: 1.3 !important;
            }
            .solutions-text {
              width: 100% !important;
              height: auto !important;
              font-size: 14px !important;
              text-align: left !important;
            }

            /* Right column list container */
            .solutions-right-box {
              width: 100% !important;
              gap: 16px !important;
            }

            /* Buttons: stack on very small screens */
            .solutions-buttons {
              flex-wrap: wrap !important;
            }
          }
        `}
      </style>

      <section
        className="w-full py-16 px-4 sm:px-8 lg:px-16 solutions-section"
        style={{ marginTop: '60px' }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="relative p-6 lg:p-8 solutions-inner">
            <div
              className="absolute -top-3 left-6 px-3 py-1"
              style={{
                width: '76px',
                height: '24px',
                fontFamily: 'Poppins',
                fontWeight: '600',
                fontSize: '16px',
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#C34A36',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Solutions
            </div>

            <div
              className="flex flex-col md:flex-row solutions-flex"
              style={{ gap: '80px', alignItems: 'flex-start' }}
            >
              <div className="flex flex-col" style={{ gap: '48px' }}>
                <div className="flex flex-col" style={{ gap: '8px' }}>
                  <h2
                    className="font-unbounded font-medium leading-[120%] responsive-width solutions-heading"
                    style={{
                      width: '600px',
                      height: '168px',
                      fontSize: '36px',
                      color: '#18191A'
                    }}
                  >
                    The amenity that adds{' '}
                    <span style={{ color: '#E85D4A' }}>₹200–300/sq.ft.</span>{' '}
                    to your property value
                  </h2>

                  <p
                    className="font-poppins leading-[150%] text-justify responsive-width solutions-text"
                    style={{
                      width: '600px',
                      height: '96px',
                      fontWeight: '400',
                      fontSize: '16px',
                      letterSpacing: '0%',
                      color: '#0A0403'
                    }}
                  >
                    FranzCo eliminates the guesswork. We handle every detail—from 3D space
                    planning and equipment procurement to installation and handover—so
                    you can offer a turnkey amenity that homebuyers appreciate faster and
                    commands premium pricing.
                  </p>
                </div>

                {/* Hide this image on mobile, show on md+ */}
                <div className="hidden md:block">
                  <img
                    src={Solutions2}
                    alt="Gym layout illustration"
                    className="rounded-xl responsive-width responsive-height-auto"
                    style={{
                      width: '600px',
                      height: '350px',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                {/* Show this image only on mobile after text */}
                <div className="block md:hidden mt-6">
                  <img
                    src={Solutions2}
                    alt="Gym layout illustration"
                    className="rounded-xl responsive-width responsive-height-auto"
                    style={{
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col" style={{ gap: '52px' }}>
                <div className="hidden md:block">
                  <img
                    src={Solutions1}
                    alt="Modern gym interior and fitness professional"
                    className="rounded-lg responsive-width responsive-height-auto"
                    style={{
                      width: '600px',
                      height: '300px',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                <div
                  className="flex flex-col responsive-width solutions-right-box"
                  style={{
                    width: '600px',
                    gap: '16px'
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[#E85D4A] text-[20px] mt-0.5">✓</span>
                    <p
                      className="font-poppins leading-[150%]"
                      style={{
                        fontWeight: '500',
                        fontSize: '14px',
                        letterSpacing: '0%',
                        color: '#404040'
                      }}
                    >
                      Comprehensive design tailored to your specific property needs
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#E85D4A] text-[20px] mt-0.5">✓</span>
                    <p
                      className="font-poppins leading-[150%]"
                      style={{
                        fontWeight: '500',
                        fontSize: '14px',
                        letterSpacing: '0%',
                        color: '#404040'
                      }}
                    >
                      Commercial-grade equipment sourced from top international brands
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#E85D4A] text-[20px] mt-0.5">✓</span>
                    <p
                      className="font-poppins leading-[150%]"
                      style={{
                        fontWeight: '500',
                        fontSize: '14px',
                        letterSpacing: '0%',
                        color: '#404040'
                      }}
                    >
                      Compliance with safety and structural load regulations
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#E85D4A] text-[20px] mt-0.5">✓</span>
                    <p
                      className="font-poppins leading-[150%]"
                      style={{
                        fontWeight: '500',
                        fontSize: '14px',
                        letterSpacing: '0%',
                        color: '#404040'
                      }}
                    >
                      Ongoing maintenance planning that protects your investment
                    </p>
                  </div>

                  <div className="flex gap-4 mt-8 solutions-buttons">
                    <button
                      onClick={scrollToSegments}
                      className="font-poppins font-medium text-[14px] bg-[#FFF5F3] hover:bg-[#FFE5DE] transition-colors px-4 py-2 rounded"
                      style={{
                        color: '#C34A36'
                      }}
                    >
                      Learn more
                    </button>

                    <button
                      onClick={scrollToSolutions2}
                      className="font-poppins font-medium text-[14px] bg-transparent hover:bg-[#FFF5F3] transition-colors px-4 py-2 rounded inline-flex items-center gap-2"
                      style={{
                        color: '#C34A36'
                      }}
                    >
                      Explore solutions
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;

import Solutions1 from '../../assets/Solutions1.png';
import Solutions2 from '../../assets/Solutions2.png';

const Solutions = () => {
  return (
     <section className="w-full py-16 px-4 sm:px-8 lg:px-16" style={{ marginTop: '60px' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="relative p-6 lg:p-8">
          
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

          <div className="flex" style={{ gap: '80px', alignItems: 'flex-start' }}>
            <div className="flex flex-col" style={{ gap: '48px' }}>
              <div className="flex flex-col" style={{ gap: '8px' }}>
                <h2 
                  className="font-unbounded font-medium leading-[120%]"
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
                  className="font-poppins leading-[150%] text-justify"
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

              <div>
                <img 
                  src={Solutions2} 
                  alt="Gym layout illustration" 
                  className="rounded-xl"
                  style={{
                    width: '600px',
                    height: '350px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col" style={{ gap: '52px' }}>
              <div>
                <img 
                  src={Solutions1} 
                  alt="Modern gym interior and fitness professional" 
                  className="rounded-lg"
                  style={{
                    width: '600px',
                    height: '300px',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <div 
                className="flex flex-col"
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
                  <p className="font-poppins leading-[150%]"
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

                <div className="flex gap-4 mt-8">
                  <button 
                    className="font-poppins font-medium text-[14px] bg-[#FFF5F3] hover:bg-[#FFE5DE] transition-colors px-4 py-2 rounded"
                    style={{
                      color: '#C34A36'
                    }}
                  >
                    Learn more
                  </button>
                  
                  <button 
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
  );
};

export default Solutions;

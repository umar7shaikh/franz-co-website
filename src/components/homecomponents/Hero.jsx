import { useState, useRef, useEffect } from 'react';
import HeroBg from '../../assets/HeroBg.png';
import HomeHeroVideo from '../../assets/homeherovideo.mp4';

const Hero = () => {
  const [isVideoMode, setIsVideoMode] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isVideoMode && videoRef.current) {
      videoRef.current.play().catch(error => console.warn('Autoplay blocked:', error));
    }
  }, [isVideoMode]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      {/* Static Image Background - Mobile Only in Initial State */}
      {!isVideoMode && (
        <div
          className="lg:hidden absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HeroBg})`
          }}
        />
      )}

      {/* Video Specific Frame as Thumbnail - Desktop Initial State */}
      {!isVideoMode && (
        <video
          className="hidden lg:block absolute inset-0 w-full h-full object-cover"
          preload="metadata"
          muted
          playsInline
        >
          {/* Change the time value (in seconds) to display different frame as thumbnail */}
          {/* Examples: #t=0.5 (half second), #t=2 (2 seconds), #t=5.3 (5.3 seconds) */}
          <source src={`${HomeHeroVideo}#t=40`} type="video/mp4" />
        </video>
      )}

      {/* Video Background - Video Mode Only (Desktop Only) */}
      {isVideoMode && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
          muted={isMuted}
          loop
          playsInline
          preload="auto"
        >
          <source src={HomeHeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Full Dark Overlay - appears in video mode */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-700 ${
          isVideoMode ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backdropFilter: isVideoMode ? 'blur(3px)' : 'none' }}
      />

      {/* Play Button - Center of Screen (hidden in video mode and on mobile) */}
      <div
        className={`absolute inset-0 items-center justify-center z-20 transition-all duration-500 hidden lg:flex ${
          isVideoMode ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
      >
        <button
          onClick={() => setIsVideoMode(true)}
          className="group relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 p-4"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            opacity: 1
          }}
        >
          <svg
            className="w-6 h-6 text-white ml-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      {/* Top Right Controls - Sound and Close Buttons (Video Mode Only) */}
      {isVideoMode && (
        <div className="fixed top-20 right-6 z-50 flex gap-3">
          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white/20 backdrop-blur-md hover:bg-white/30"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMuted ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              )}
            </svg>
          </button>

          {/* Close Button */}
          <button
            onClick={() => setIsVideoMode(false)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white/20 backdrop-blur-md hover:bg-white/30"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Top Right Description - appears in video mode (desktop only) */}
      <div
        className={`absolute top-16 right-16 max-w-[620px] z-30 transition-all duration-1000 delay-500 hidden lg:block ${
          isVideoMode ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <p className="font-poppins text-white text-[16px] font-medium leading-[150%]">
          Transform empty amenity spaces into revenue-generating fitness destinations. 
          FranzCo delivers end-to-end gym installations for residential societies, corporate 
          buildings, and hospitality projects across India.
        </p>
      </div>

      {/* INITIAL STATE - Bottom Overlay */}
      {!isVideoMode && (
        <div className="absolute left-0 bottom-0 w-full min-h-[225px] flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-16 py-8 lg:py-0 z-20 mx-auto gap-6 lg:gap-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.225) 0%, rgba(0,0,0,0.45) 100%)',
            backdropFilter: 'blur(2px)',
            maxWidth: '1920px'
          }}
        >
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center gap-3 lg:gap-4 max-w-full lg:max-w-[700px]">
            <h1
              className="font-unbounded font-medium text-white text-[24px] sm:text-[32px] lg:text-[40px]"
              style={{
                lineHeight: '120%',
                letterSpacing: '-0.48px'
              }}
            >
              Elevate your property value with
              <br />
              world-class fitness amenities
            </h1>

            <p
              className="font-poppins font-medium text-[12px] sm:text-[13px] lg:text-[14px]"
              style={{
                color: '#F3DAD6',
                lineHeight: '150%',
                letterSpacing: '0px'
              }}
            >
              Premium Turnkey Gym Solutions for Commercial Real Estate Developers | From Blueprint to Grand Opening
            </p>
          </div>

          {/* Right Side - Stats and Buttons (Desktop only) */}
          <div className="hidden lg:flex flex-col gap-6 ml-34">
            <div className="flex gap-12">
              <div className="flex flex-col gap-4 min-w-[180px]">
                <span className="material-symbols-outlined text-white text-[48px]">
                  deployed_code
                </span>
                <p
                  className="font-poppins font-medium text-[14px]"
                  style={{
                    color: '#F3DAD6',
                    lineHeight: '150%',
                    letterSpacing: '0px'
                  }}
                >
                  Trusted by 150+ developers
                </p>
              </div>

              <div className="flex flex-col gap-4 min-w-[180px]">
                <span className="material-symbols-outlined text-white text-[48px]">
                  deployed_code
                </span>
                <p
                  className="font-poppins font-medium text-[14px]"
                  style={{
                    color: '#F3DAD6',
                    lineHeight: '150%',
                    letterSpacing: '0px'
                  }}
                >
                  2M+ sq.ft. of spaces delivered
                </p>
              </div>

              <div className="flex flex-col gap-4 min-w-[180px]">
                <span className="material-symbols-outlined text-white text-[48px]">
                  deployed_code
                </span>
                <p
                  className="font-poppins font-medium text-[14px]"
                  style={{
                    color: '#F3DAD6',
                    lineHeight: '150%',
                    letterSpacing: '0px'
                  }}
                >
                  ISO 9001:2015 Certified
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-white text-[#18191A] font-poppins font-medium text-[14px] px-6 py-2.5 rounded-md hover:bg-gray-100 transition">
                Schedule consultation
              </button>
              <button className="bg-white/10 text-white font-poppins font-medium text-[14px] px-6 py-2.5 rounded-md hover:bg-white/20 transition">
                View portfolio
              </button>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden gap-3 w-full justify-center">
            <button className="bg-white text-[#18191A] font-poppins font-medium text-[13px] px-5 py-2 rounded-md hover:bg-gray-100 transition">
              Schedule consultation
            </button>
            <button className="bg-white/10 text-white font-poppins font-medium text-[13px] px-5 py-2 rounded-md hover:bg-white/20 transition">
              View portfolio
            </button>
          </div>
        </div>
      )}

      {/* VIDEO MODE - Repositioned Layout (Desktop only) */}
      {isVideoMode && (
        <>
          {/* Left Content - Centered */}
          <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 z-20 transition-all duration-700">
            <div className="flex flex-col justify-center gap-4 lg:gap-5 max-w-[90vw] lg:max-w-[600px]">
              <h1
                className="font-unbounded font-semibold text-white text-[32px] lg:text-[52px]"
                style={{
                  lineHeight: '120%',
                  letterSpacing: '-0.48px'
                }}
              >
                Elevate your property value with
                <br />
                world-class fitness amenities
              </h1>

              <p
                className="font-poppins font-medium text-[14px] lg:text-[16px]"
                style={{
                  color: '#F3DAD6',
                  lineHeight: '150%',
                  letterSpacing: '0px'
                }}
              >
                Premium Turnkey Gym Solutions for Commercial Real Estate Developers | From Blueprint to Grand Opening
              </p>
            </div>
          </div>

          {/* Right Content - Fixed Position (Desktop only) */}
          <div className="hidden lg:block absolute right-16 z-30 transition-all duration-700" style={{ top: '60%' }}>
            <div className="flex flex-col gap-6">
              <div className="flex gap-12">
                <div className="flex flex-col gap-4 min-w-[180px]">
                  <span className="material-symbols-outlined text-white text-[56px]">
                    deployed_code
                  </span>
                  <p
                    className="font-poppins font-medium text-[16px]"
                    style={{
                      color: '#F3DAD6',
                      lineHeight: '150%',
                      letterSpacing: '0px'
                    }}
                  >
                    Trusted by 150+ developers
                  </p>
                </div>

                <div className="flex flex-col gap-4 min-w-[180px]">
                  <span className="material-symbols-outlined text-white text-[56px]">
                    deployed_code
                  </span>
                  <p
                    className="font-poppins font-medium text-[16px]"
                    style={{
                      color: '#F3DAD6',
                      lineHeight: '150%',
                      letterSpacing: '0px'
                    }}
                  >
                    2M+ sq.ft. of spaces delivered
                  </p>
                </div>

                <div className="flex flex-col gap-4 min-w-[180px]">
                  <span className="material-symbols-outlined text-white text-[56px]">
                    deployed_code
                  </span>
                  <p
                    className="font-poppins font-medium text-[16px]"
                    style={{
                      color: '#F3DAD6',
                      lineHeight: '150%',
                      letterSpacing: '0px'
                    }}
                  >
                    ISO 9001:2015 Certified
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="bg-white text-[#18191A] font-poppins font-medium text-[14px] px-6 py-2.5 rounded-md hover:bg-gray-100 transition">
                  Schedule consultation
                </button>
                <button className="bg-white/10 text-white font-poppins font-medium text-[14px] px-6 py-2.5 rounded-md hover:bg-white/20 transition">
                  View portfolio
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;

import MissionVision1 from '../../assets/MissionVision1.png';
import MissionVision2 from '../../assets/MissionVision2.png';

const MissionVision = () => {
  return (
    <>
      {/* MOBILE-ONLY STYLES */}
      <style>
        {`
          @media (max-width: 767px) {
            .mission-vision-section {
              padding: 48px 16px !important;
            }

            .mission-vision-container {
              flex-direction: column !important;
              gap: 20px !important;
              width: 100% !important;
              max-width: 100% !important;
            }

            .mission-vision-card {
              width: 100% !important;
              max-width: 100% !important;
              border-radius: 16px !important;
              overflow: hidden !important;
              box-shadow: 0 4px 16px rgba(0,0,0,0.08) !important;
            }

            .mission-vision-content {
              padding: 20px !important;
              flex: none !important;
            }

            .mission-vision-heading {
              font-size: 24px !important;
              line-height: 1.3 !important;
              margin-bottom: 12px !important;
              text-align: left !important;
            }

            .mission-vision-text {
              font-size: 14px !important;
              line-height: 1.5 !important;
              margin-bottom: 16px !important;
            }

            .mission-vision-btn {
              width: 100% !important;
              max-width: 100% !important;
              padding: 12px 20px !important;
              font-size: 14px !important;
              justify-content: center !important;
              text-align: center !important;
            }

            .mission-vision-image {
              height: 200px !important;
              min-height: 160px !important;
              max-height: 200px !important;
              object-fit: cover !important;
            }

            /* Ensure consistent card order */
            .mission-card {
              order: 1 !important;
            }

            .vision-card {
              order: 2 !important;
            }
          }
        `}
      </style>

      <section className="w-full py-14 px-4 lg:px-8 mission-vision-section" style={{ background: '#F9ECEA' }}>
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8 lg:flex-row lg:gap-8 mission-vision-container">
          {/* Mission Card */}
          <div className="flex flex-col bg-white rounded-2xl border border-[#f5e9e2] shadow-lg w-full lg:w-1/2 overflow-hidden mission-card mission-vision-card">
            <div className="p-8 flex-1 flex flex-col mission-vision-content">
              <h2 className="font-unbounded text-2xl md:text-3xl font-bold mb-4 text-[#18191A] mission-vision-heading">
                OUR MISSION
              </h2>
              <p className="font-poppins text-[15px] text-[#404040] mb-6 leading-relaxed mission-vision-text">
                To partner with real estate developers in creating fitness amenities that enhance property value, accelerate sales velocity, and deliver exceptional experiences to end-users through turnkey solutions built on quality, transparency, and long-term partnership.
              </p>
              <button
                className="font-poppins font-semibold text-[15px] bg-[#C34A36] hover:bg-[#A63D36] text-white transition-colors px-6 py-3 rounded-lg w-fit mission-vision-btn"
              >
                Meet the Team
              </button>
            </div>
            <img
              src={MissionVision1}
              alt="Mission"
              className="w-full h-60 object-cover rounded-b-2xl mission-vision-image"
              style={{ minHeight: 180, maxHeight: 240 }}
            />
          </div>
          
          {/* Vision Card */}
          <div className="flex flex-col bg-white rounded-2xl border border-[#f5e9e2] shadow-lg w-full lg:w-1/2 overflow-hidden vision-card mission-vision-card">
            <img
              src={MissionVision2}
              alt="Vision"
              className="w-full h-60 object-cover rounded-t-2xl mission-vision-image"
              style={{ minHeight: 180, maxHeight: 240 }}
            />
            <div className="p-8 flex-1 flex flex-col mission-vision-content">
              <h2 className="font-unbounded text-2xl md:text-3xl font-bold mb-4 text-[#18191A] mission-vision-heading">
                OUR VISION
              </h2>
              <p className="font-poppins text-[15px] text-[#404040] mb-6 leading-relaxed mission-vision-text">
                To become India's most trusted name in commercial fitness facility development, setting the industry standard for quality, innovation, and customer-centricity while making premium wellness accessible to communities across the nation.
              </p>
              <button
                className="font-poppins font-semibold text-[15px] bg-[#C34A36] hover:bg-[#A63D36] text-white transition-colors px-6 py-3 rounded-lg w-fit mission-vision-btn"
              >
                Testimonials
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVision;

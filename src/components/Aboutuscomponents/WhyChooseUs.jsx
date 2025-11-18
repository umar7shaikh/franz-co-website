import WhyChooseUs1 from '../../assets/WhyChooseUs1.png';
import WhyChooseUs2 from '../../assets/WhyChooseUs2.png';
import WhyChooseUs3 from '../../assets/WhyChooseUs3.png';

const WhyChooseUs = () => (
  <>
    {/* MOBILE-ONLY STYLES */}
    <style>
      {`
        @media (max-width: 767px) {
          .whychooseus-section {
            padding: 40px 16px !important;
          }

          .whychooseus-main-container {
            flex-direction: column !important;
            gap: 16px !important;
            width: 100% !important;
            max-width: 100% !important;
          }

          .whychooseus-card {
            width: 100% !important;
            max-width: 100% !important;
            border-radius: 16px !important;
            overflow: hidden !important;
            box-shadow: 0 4px 16px rgba(0,0,0,0.08) !important;
            height: auto !important;
            margin-bottom: 16px !important;
          }

          .whychooseus-content {
            padding: 20px !important;
            flex: none !important;
          }

          .whychooseus-main-heading {
            font-size: 28px !important;
            line-height: 1.2 !important;
            margin-bottom: 24px !important;
            text-align: center !important;
          }

          .whychooseus-card-heading {
            font-size: 20px !important;
            line-height: 1.3 !important;
            margin-bottom: 12px !important;
            text-align: left !important;
          }

          .whychooseus-text {
            font-size: 14px !important;
            line-height: 1.5 !important;
            margin-bottom: 16px !important;
          }

          .whychooseus-image {
            height: 200px !important;
            min-height: 160px !important;
            max-height: 200px !important;
            object-fit: cover !important;
          }

          .whychooseus-icon {
            font-size: 24px !important;
            margin-bottom: 12px !important;
          }

          /* HIDE BUTTONS ON MOBILE ONLY */
          .whychooseus-btn {
            display: none !important;
          }

          /* Horizontal cards - stack vertically on mobile */
          .whychooseus-horizontal-card {
            flex-direction: column !important;
          }

          .whychooseus-horizontal-image {
            width: 100% !important;
            height: 200px !important;
            order: 2 !important;
          }

          .whychooseus-horizontal-content {
            width: 100% !important;
            height: auto !important;
            order: 1 !important;
            padding: 20px !important;
          }

          /* Ensure consistent card order for vertical stacking */
          .whychooseus-card-1 { order: 1 !important; }
          .whychooseus-card-2 { order: 2 !important; }
          .whychooseus-card-3 { order: 3 !important; }
          .whychooseus-card-4 { order: 4 !important; }
          .whychooseus-card-5 { order: 5 !important; }
          .whychooseus-card-6 { order: 6 !important; }
        }
      `}
    </style>

    <section className="w-full bg-white py-10 md:py-16 lg:py-20 px-4 whychooseus-section">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <h2 className="font-unbounded text-2xl md:text-3xl lg:text-4xl font-bold text-[#18191A] text-center mb-8 md:mb-12 lg:mb-20 whychooseus-main-heading">
          Why Developers Choose Us
        </h2>
        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 whychooseus-main-container">
          {/* First column */}
          <div className="flex flex-col flex-1 max-w-[624px] order-1">
            {/* First card */}
            <div
              className="rounded-2xl border-2 border-[#E5E5E5] bg-[#F2F2F2] shadow-sm overflow-hidden flex flex-col mb-6 md:mb-8 whychooseus-card whychooseus-card-1"
              style={{ height: '580px', borderRadius: '24px' }}
            >
              <div className="h-1/2">
                <img
                  src={WhyChooseUs1}
                  alt="Real Estate DNA"
                  className="w-full h-full object-cover whychooseus-image"
                />
              </div>
              <div className="flex flex-col px-4 md:px-10 py-6 md:py-8 h-1/2 whychooseus-content">
                <h3
                  className="font-unbounded font-semibold text-[#40281A] mb-3 text-xl md:text-2xl whychooseus-card-heading"
                  style={{ lineHeight: '42px', fontSize: '24px' }}
                >
                  Real Estate DNA
                </h3>
                <p className="font-poppins text-[15px] text-[#404040] leading-relaxed mb-4 whychooseus-text">
                  Unlike fitness equipment retailers, we built our company specifically for the real estate industry. We understand RERA timelines, possession pressures, and the importance of amenities in your sales strategy.
                </p>
                <button className="font-poppins font-medium text-[15px] text-[#C34A36] hover:text-[#A63D36] transition-colors inline-flex items-center gap-2 w-fit whychooseus-btn">
                  View Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Second card */}
            <div
              className="rounded-xl border-2 border-[#E5E5E5] bg-[#F2F2F2] shadow-sm overflow-hidden flex flex-col sm:flex-row whychooseus-horizontal-card whychooseus-card whychooseus-card-2"
              style={{ height: '423px', borderRadius: '16px' }}
            >
              {/* Image: left half */}
              <div className="w-full sm:w-1/2 h-1/2 sm:h-full order-2 sm:order-1 whychooseus-horizontal-image">
                <img
                  src={WhyChooseUs2}
                  alt="Proven Track Record"
                  className="w-full h-full object-cover whychooseus-image"
                />
              </div>
              {/* Text: right half */}
              <div className="flex flex-col px-4 md:px-8 py-4 md:py-6 justify-center w-full sm:w-1/2 h-1/2 sm:h-full order-1 sm:order-2 whychooseus-horizontal-content whychooseus-content">
                <h3 className="font-unbounded text-lg sm:text-xl font-semibold text-[#3A1610] mb-2 whychooseus-card-heading">
                  Proven Track Record
                </h3>
                <p className="font-poppins text-[15px] text-[#404040] leading-relaxed mb-4 whychooseus-text">
                  95% of our clients come back for their next project or refer us to their peers. In an industry built on relationships, this speaks volumes.
                </p>
                <button className="font-poppins font-medium text-[15px] text-[#C34A36] hover:text-[#A63D36] transition-colors inline-flex items-center gap-2 w-fit whychooseus-btn">
                  View Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Second column */}
          <div className="flex flex-col flex-1 max-w-[624px] justify-between order-2 lg:order-2 gap-6 md:gap-8">
            {/* First card */}
            <div
              className="rounded-2xl border-2 border-[#E5E5E5] bg-[#F2F2F2] shadow-sm flex flex-col justify-between p-8 md:p-12 mb-0 whychooseus-card whychooseus-card-3"
              style={{ height: '274px', borderRadius: '24px' }}
            >
              <span className="material-symbols-outlined mb-2 whychooseus-icon" style={{ fontSize: 28, color: '#C34A36' }}>
                deployed_code
              </span>
              <h3 className="font-unbounded text-lg sm:text-xl font-semibold text-[#3A1610] mb-2 whychooseus-card-heading">
                End-to-end Ownership
              </h3>
              <p className="font-poppins text-[15px] text-[#404040] leading-relaxed mb-2 whychooseus-text">
                One partner. One contract. One point of contact. From initial site assessment to post-handover maintenance, we own the entire journey.
              </p>
              <button className="font-poppins font-medium text-[15px] text-[#C34A36] hover:text-[#A63D36] transition-colors inline-flex items-center gap-2 w-fit whychooseus-btn">
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {/* Second card */}
            <div
              className="rounded-2xl border-2 border-[#E5E5E5] bg-[#F2F2F2] shadow-sm flex flex-col justify-between p-8 md:p-12 mb-0 whychooseus-card whychooseus-card-4"
              style={{ height: '274px', borderRadius: '24px' }}
            >
              <span className="material-symbols-outlined mb-2 whychooseus-icon" style={{ fontSize: 28, color: '#C34A36' }}>
                deployed_code
              </span>
              <h3 className="font-unbounded text-lg sm:text-xl font-semibold text-[#3A1610] mb-2 whychooseus-card-heading">
                Commercial-grade Focus
              </h3>
              <p className="font-poppins text-[15px] text-[#404040] leading-relaxed mb-2 whychooseus-text">
                We exclusively deal with commercial-grade equipment built for high-traffic environments. Every piece is vetted for durability, safety, and longevity.
              </p>
              <button className="font-poppins font-medium text-[15px] text-[#C34A36] hover:text-[#A63D36] transition-colors inline-flex items-center gap-2 w-fit whychooseus-btn">
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {/* Third card (image left, text right) */}
            <div
              className="rounded-xl border-2 border-[#E5E5E5] bg-[#F2F2F2] shadow-sm overflow-hidden flex flex-col sm:flex-row whychooseus-horizontal-card whychooseus-card whychooseus-card-6"
              style={{ height: '423px', borderRadius: '16px' }}
            >
              {/* Image: left half */}
              <div className="w-full sm:w-1/2 h-1/2 sm:h-full order-2 sm:order-1 whychooseus-horizontal-image">
                <img
                  src={WhyChooseUs3}
                  alt="Post-installation Commitment"
                  className="w-full h-full object-cover whychooseus-image"
                />
              </div>
              {/* Text: right half */}
              <div className="flex flex-col px-4 md:px-8 py-4 md:py-6 justify-center w-full sm:w-1/2 h-1/2 sm:h-full order-1 sm:order-2 whychooseus-horizontal-content whychooseus-content">
                <h3 className="font-unbounded text-lg sm:text-xl font-semibold text-[#3A1610] mb-2 whychooseus-card-heading">
                  Post-installation Commitment
                </h3>
                <p className="font-poppins text-[15px] text-[#404040] leading-relaxed mb-4 whychooseus-text">
                  Our job doesn't end at ribbon-cutting. Comprehensive AMC programs, staff training, and responsive support ensure your gym remains an asset for years to come.
                </p>
                <button className="font-poppins font-medium text-[15px] text-[#C34A36] hover:text-[#A63D36] transition-colors inline-flex items-center gap-2 w-fit whychooseus-btn">
                  View Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default WhyChooseUs;

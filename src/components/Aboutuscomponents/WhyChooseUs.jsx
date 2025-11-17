import WhyChooseUs1 from '../../assets/WhyChooseUs1.png';
import WhyChooseUs2 from '../../assets/WhyChooseUs2.png';
import WhyChooseUs3 from '../../assets/WhyChooseUs3.png';

const WhyChooseUs = () => (
  <section className="w-full bg-white py-20 px-4">
    <div className="max-w-[1280px] mx-auto">
      {/* Heading */}
      <h2 className="font-unbounded text-3xl md:text-4xl font-bold text-[#18191A] text-center mb-20">
        Why Developers Choose Us
      </h2>
      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* First column */}
        <div className="flex flex-col flex-1 max-w-[624px]">
          {/* First card */}
          <div
            className="rounded-2xl border-2 border-[#E5E5E5] bg-[#F2F2F2] shadow-sm overflow-hidden flex flex-col mb-8"
            style={{ height: '580px', borderRadius: '24px' }}
          >
            <div className="h-1/2">
              <img
                src={WhyChooseUs1}
                alt="Real Estate DNA"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col px-10 py-8 h-1/2">
              <h3
                className="font-unbounded font-semibold text-[#40281A] mb-3"
                style={{ lineHeight: '42px', fontSize: '24px' }}
              >
                Real Estate DNA
              </h3>
              <p className="font-poppins text-[15px] text-[#404040] leading-relaxed mb-4">
                Unlike fitness equipment retailers, we built our company specifically for the real estate industry. We understand RERA timelines, possession pressures, and the importance of amenities in your sales strategy.
              </p>
              <button className="font-poppins font-medium text-[15px] text-[#C34A36] hover:text-[#A63D36] transition-colors inline-flex items-center gap-2 w-fit">
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          {/* Second card */}
          <div
            className="rounded-xl border-2 border-[#E5E5E5] bg-[#F2F2F2] shadow-sm overflow-hidden flex flex-row"
            style={{ height: '423px', borderRadius: '16px' }}
          >
            {/* Image: left half */}
            <div className="w-1/2 h-full">
              <img
                src={WhyChooseUs2}
                alt="Proven Track Record"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text: right half */}
            <div className="flex flex-col px-8 py-6 justify-center w-1/2 h-full">
              <h3 className="font-unbounded text-xl font-semibold text-[#3A1610] mb-2">
                Proven Track Record
              </h3>
              <p className="font-poppins text-[15px] text-[#404040] leading-relaxed mb-4">
                95% of our clients come back for their next project or refer us to their peers. In an industry built on relationships, this speaks volumes.
              </p>
              <button className="font-poppins font-medium text-[15px] text-[#C34A36] hover:text-[#A63D36] transition-colors inline-flex items-center gap-2 w-fit">
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Second column */}
        <div className="flex flex-col flex-1 max-w-[624px] justify-between">
          {/* First card */}
          <div
            className="rounded-2xl border-2 border-[#E5E5E5] bg-[#F2F2F2] shadow-sm flex flex-col justify-between p-12 mb-8"
            style={{ height: '274px', borderRadius: '24px' }}
          >
            <span className="material-symbols-outlined mb-2" style={{ fontSize: 28, color: '#C34A36' }}>
              deployed_code
            </span>
            <h3 className="font-unbounded text-xl font-semibold text-[#3A1610] mb-2">
              End-to-end Ownership
            </h3>
            <p className="font-poppins text-[15px] text-[#404040] leading-relaxed mb-2">
              One partner. One contract. One point of contact. From initial site assessment to post-handover maintenance, we own the entire journey.
            </p>
            <button className="font-poppins font-medium text-[15px] text-[#C34A36] hover:text-[#A63D36] transition-colors inline-flex items-center gap-2 w-fit">
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Second card */}
          <div
            className="rounded-2xl border-2 border-[#E5E5E5] bg-[#F2F2F2] shadow-sm flex flex-col justify-between p-12 mb-8"
            style={{ height: '274px', borderRadius: '24px' }}
          >
            <span className="material-symbols-outlined mb-2" style={{ fontSize: 28, color: '#C34A36' }}>
              deployed_code
            </span>
            <h3 className="font-unbounded text-xl font-semibold text-[#3A1610] mb-2">
              Commercial-grade Focus
            </h3>
            <p className="font-poppins text-[15px] text-[#404040] leading-relaxed mb-2">
              We exclusively deal with commercial-grade equipment built for high-traffic environments. Every piece is vetted for durability, safety, and longevity.
            </p>
            <button className="font-poppins font-medium text-[15px] text-[#C34A36] hover:text-[#A63D36] transition-colors inline-flex items-center gap-2 w-fit">
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Third card (image left, text right) */}
          <div
            className="rounded-xl border-2 border-[#E5E5E5] bg-[#F2F2F2] shadow-sm overflow-hidden flex flex-row"
            style={{ height: '423px', borderRadius: '16px' }}
          >
            {/* Image: left half */}
            <div className="w-1/2 h-full">
              <img
                src={WhyChooseUs3}
                alt="Post-installation Commitment"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text: right half */}
            <div className="flex flex-col px-8 py-6 justify-center w-1/2 h-full">
              <h3 className="font-unbounded text-xl font-semibold text-[#3A1610] mb-2">
                Post-installation Commitment
              </h3>
              <p className="font-poppins text-[15px] text-[#404040] leading-relaxed mb-4">
                Our job doesn't end at ribbon-cutting. Comprehensive AMC programs, staff training, and responsive support ensure your gym remains an asset for years to come.
              </p>
              <button className="font-poppins font-medium text-[15px] text-[#C34A36] hover:text-[#A63D36] transition-colors inline-flex items-center gap-2 w-fit">
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
);

export default WhyChooseUs;

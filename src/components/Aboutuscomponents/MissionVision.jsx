import MissionVision1 from '../../assets/MissionVision1.png';
import MissionVision2 from '../../assets/MissionVision2.png';

const MissionVision = () => {
  return (
    <section className="w-full py-14 px-4 lg:px-8" style={{ background: '#F9ECEA' }}>
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 lg:flex-row lg:gap-8">
        {/* Mission Card */}
        <div className="flex flex-col bg-white rounded-2xl border border-[#f5e9e2] shadow-lg w-full lg:w-1/2 overflow-hidden">
          <div className="p-8 flex-1 flex flex-col">
            <h2 className="font-unbounded text-2xl md:text-3xl font-bold mb-4 text-[#18191A]">
              OUR MISSION
            </h2>
            <p className="font-poppins text-[15px] text-[#404040] mb-6 leading-relaxed">
              To partner with real estate developers in creating fitness amenities that enhance property value, accelerate sales velocity, and deliver exceptional experiences to end-users through turnkey solutions built on quality, transparency, and long-term partnership.
            </p>
            <button
              className="font-poppins font-semibold text-[15px] bg-[#C34A36] hover:bg-[#A63D36] text-white transition-colors px-6 py-3 rounded-lg w-fit"
            >
              Meet the Team
            </button>
          </div>
          <img
            src={MissionVision1}
            alt="Mission"
            className="w-full h-60 object-cover rounded-b-2xl"
            style={{ minHeight: 180, maxHeight: 240 }}
          />
        </div>
        {/* Vision Card */}
        <div className="flex flex-col bg-white rounded-2xl border border-[#f5e9e2] shadow-lg w-full lg:w-1/2 overflow-hidden">
          <img
            src={MissionVision2}
            alt="Vision"
            className="w-full h-60 object-cover rounded-t-2xl"
            style={{ minHeight: 180, maxHeight: 240 }}
          />
          <div className="p-8 flex-1 flex flex-col">
            <h2 className="font-unbounded text-2xl md:text-3xl font-bold mb-4 text-[#18191A]">
              OUR VISION
            </h2>
            <p className="font-poppins text-[15px] text-[#404040] mb-6 leading-relaxed">
              To become India’s most trusted name in commercial fitness facility development, setting the industry standard for quality, innovation, and customer-centricity while making premium wellness accessible to communities across the nation.
            </p>
            <button
              className="font-poppins font-semibold text-[15px] bg-[#C34A36] hover:bg-[#A63D36] text-white transition-colors px-6 py-3 rounded-lg w-fit"
            >
              Testimonials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

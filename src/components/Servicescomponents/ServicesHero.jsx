import ServicesHeroImg from '../../assets/ServicesHero.png';

const ServicesHero = () => (
  <section className="w-full bg-white px-6 py-20">
    <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-16">
      {/* Top content row - Two columns */}
      <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-16">
        {/* Left column - Heading and subheading */}
        <div className="flex-1 flex flex-col justify-start">
          <h1 className="font-unbounded text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-[#18191A] mb-6">
            Comprehensive Gym Solutions Engineered For Commercial Success
          </h1>
          <p className="font-poppins text-base lg:text-lg text-[#404040] font-normal leading-relaxed">
            From concept to commission, we deliver turnkey fitness facilities that enhance property value and tenant satisfaction across every real estate segment.
          </p>
        </div>

        {/* Right column - Description and CTAs */}
        <div className="flex-1 flex flex-col justify-start">
          <p className="font-poppins text-base lg:text-lg text-[#404040] font-normal leading-relaxed mb-8">
            FranzCo specializes in creating commercial-grade fitness amenities that meet the demanding requirements of modern real estate developments. Our end-to-end service model ensures seamless execution, regulatory compliance, and long-term operational excellence.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#C34A36] text-white font-poppins font-medium text-sm px-8 py-3 rounded-md transition hover:bg-[#A33B28]">
              Button
            </button>
            <button className="text-[#C34A36] font-poppins font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
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
);

export default ServicesHero;

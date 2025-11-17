const dotPatternSvg = encodeURIComponent(`
  <svg width="600" height="200" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="56" fill="#EEC2B9" fill-opacity="0.45"/>
    <circle cx="200" cy="110" r="32" fill="#EEC2B9" fill-opacity="0.36"/>
    <circle cx="340" cy="120" r="72" fill="#EEC2B9" fill-opacity="0.44"/>
    <circle cx="500" cy="140" r="48" fill="#EEC2B9" fill-opacity="0.31"/>
    <circle cx="300" cy="180" r="20" fill="#EEC2B9" fill-opacity="0.2"/>
  </svg>
`);

const FullSpectrumBanner = () => (
  <section
    className="w-full"
    style={{
      background: '#F3DAD6',
      position: 'relative',
      overflow: 'hidden',
      minHeight: 200,
    }}
  >
    {/* SVG dot pattern centered */}
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 600,
        height: 200,
        transform: 'translate(-50%, -50%)',
        background: `url("data:image/svg+xml,${dotPatternSvg}") center center no-repeat`,
        opacity: 1,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
    {/* Text block with padded margin */}
    <div
      className="relative z-10 mx-auto text-center py-24"
      style={{
        maxWidth: 1700,
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      <h2 className="font-unbounded font-bold text-4xl md:text-5xl mb-5 text-[#3B2327]">
        Full-spectrum Fitness Facility Development
      </h2>
      <p className="font-poppins text-base md:text-lg text-[#664A32] font-normal">
        Whether you're developing a 50-unit residential complex or a 5-million sq.ft. corporate campus,
        FranzCo provides tailored gym solutions that align with your project vision, budget parameters,
        and target demographics. Our comprehensive service portfolio covers every aspect of fitness
        facility creation and management.
      </p>
    </div>
  </section>
);

export default FullSpectrumBanner;

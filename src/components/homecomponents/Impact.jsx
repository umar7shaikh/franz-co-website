const Impact = () => {
  const statsLayout = [
    // Column 1
    [
      {
        number: "150+",
        title: "Projects completed",
        description: "Across residential, commercial and hospitality sectors"
      },
      {
        number: "18",
        title: "Month Average",
        description: "Faster apartment sales in projects with premium gym amenities"
      }
    ],
    // Column 2
    [
      {
        number: "2M+",
        title: "Square Feet",
        description: "Of fitness space designed and installed"
      },
      {
        number: "₹250",
        title: "Per sq.ft.",
        description: "Average property value increase attributed to quality fitness amenities",
        pushRight: true
      }
    ],
    // Column 3
    [
      {
        number: "95%",
        title: "Client Retention",
        description: "Developers who work with us once, come back again"
      }
    ]
  ];

  return (
    <>
      <style>
        {`
          @media (max-width: 767px) {
            .pl-8 { padding-left: 1rem !important; }
            .absolute-border { left: 0.25rem !important; width: 2px !important; }
            .stats-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
            .number-text { font-size: clamp(40px, 10vw, 60px) !important; }
            .title-text { font-size: 1.125rem !important; }
            .description-text { font-size: 0.875rem !important; }
          }
        `}
      </style>

      <section className="w-full relative overflow-hidden py-24 px-4 sm:px-8 lg:px-16" style={{
        backgroundColor: '#C34A36',
        minHeight: '600px'
      }}>
        {/* Dotted Pattern Background */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.2) 25%, transparent 25%),
            radial-gradient(circle, rgba(255, 255, 255, 0.2) 25%, transparent 25%)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 40px 40px',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.08) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.08) 100%)'
        }} />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="font-unbounded text-white mb-16 text-3xl sm:text-4xl lg:text-5xl" style={{
            fontWeight: 500,
            lineHeight: '120%',
            letterSpacing: '-0.01em',
            color: '#F2F2F2'
          }}>
            Impact that transforms real estate
          </h2>

          {/* Stats Grid */}
          <div className="stats-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16">
            {statsLayout.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-12 lg:gap-16">
                {column.map((stat, statIndex) => (
                  <div
                    key={statIndex}
                    className={`flex flex-col gap-4 pl-8 relative ${stat.pushRight ? 'lg:ml-36 xl:ml-48' : ''}`}
                  >
                    {/* Gradient Border Line */}
                    <div className="absolute-border absolute left-0 top-0 w-1" style={{
                      height: '100%',
                      background: 'linear-gradient(to bottom, #F2F2F2 0%, #F2F2F2 50%, transparent 100%)'
                    }} />

                    {/* Number */}
                    <div className="font-poppins number-text" style={{
                      fontWeight: 800,
                      fontSize: 'clamp(60px, 8vw, 80px)',
                      lineHeight: '1.2',
                      color: '#F2F2F2'
                    }}>
                      {stat.number}
                    </div>

                    {/* Title */}
                    <h3 className="font-unbounded title-text text-xl" style={{
                      fontWeight: 500,
                      lineHeight: '1.4',
                      letterSpacing: '-0.01em',
                      color: '#F3DAD6'
                    }}>
                      {stat.title}
                    </h3>

                    {/* Description */}
                    <p className="font-poppins description-text text-sm" style={{
                      fontWeight: 500,
                      lineHeight: '1.5',
                      color: '#F3DAD6',
                      opacity: 0.9
                    }}>
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;

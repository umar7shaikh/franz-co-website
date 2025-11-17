const stats = [
  { number: "2016", title: "Year Founded" },
  { number: "150+", title: "Projects Completed" },
  { number: "2M+", title: "Square Feet Transformed" },
  { number: "75+", title: "Developer Partners" },
  { number: "50,000+", title: "Members Served Daily" },
  { number: "12", title: "States We Operate In" },
  { number: "₹85 Cr+", title: "Project Value Delivered" },
  { number: "95%", title: "Client Retention Rate" },
];

const ImpactStats = () => (
  <section
    className="w-full relative overflow-hidden py-14 px-4 md:px-8"
    style={{ backgroundColor: '#C34A36' }}
  >
    {/* Dotted Pattern Less Visible */}
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(255, 255, 255, 0.08) 25%, transparent 25%),
          radial-gradient(circle, rgba(255, 255, 255, 0.08) 25%, transparent 25%)
        `,
        backgroundSize: '80px 80px',
        backgroundPosition: '0 0, 40px 40px'
      }}
    />

    <div className="relative z-10 max-w-[1600px] mx-auto">
      <h2
        className="font-unbounded text-white mb-10 text-2xl sm:text-4xl lg:text-5xl text-left"
        style={{
          fontWeight: 500,
          lineHeight: '120%',
          letterSpacing: '-0.01em'
        }}
      >
        Impact that transforms real estate
      </h2>

      {/* 2 rows x 4 columns grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12 min-h-[360px] items-center">
        {stats.map((stat, i) => (
          <div
            key={stat.title}
            className="flex flex-col justify-center h-full pl-8 relative"
            style={{
              minHeight: 140,
              gap: 8
            }}
          >
            {/* Gradient Border - always shows before the stat */}
            <div
              className="absolute left-0 top-0 w-1"
              style={{
                height: '100%',
                background: 'linear-gradient(to bottom, #F2F2F2 0%, #f68d77 100%)',
                borderRadius: '6px'
              }}
            />
            <div
              className="font-unbounded"
              style={{
                fontWeight: 700,
                fontSize: 'clamp(36px, 6vw, 56px)',
                color: '#FFF'
              }}
            >
              {stat.number}
            </div>
            <div
              className="font-poppins"
              style={{
                fontWeight: 500,
                fontSize: '1.1rem',
                color: '#F3DAD6'
              }}
            >
              {stat.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactStats;

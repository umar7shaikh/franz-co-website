import React from 'react';

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

const ImpactStats = () => {
  const mobileStyles = `
    @media (max-width: 767px) {
      .impact-stats-section {
        padding: 48px 16px !important;
      }

      .impact-stats-container {
        width: 100% !important;
        max-width: 100% !important;
      }

      .impact-stats-heading {
        font-size: 24px !important;
        line-height: 1.3 !important;
        margin-bottom: 24px !important;
        text-align: center !important;
      }

      .impact-stats-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 16px !important;
        min-height: auto !important;
      }

      .impact-stat-item {
        padding-left: 12px !important;
        min-height: 120px !important;
        gap: 6px !important;
        align-items: flex-start !important;
      }

      .impact-stat-border {
        left: 0 !important;
        top: 0 !important;
        width: 2px !important;
        height: 100% !important;
        background: linear-gradient(to bottom, #F2F2F2 0%, #f68d77 100%) !important;
        border-radius: 3px !important;
      }

      .impact-stat-number {
        font-size: 28px !important;
        line-height: 1.2 !important;
        color: #FFF !important;
        margin: 0 !important;
        text-align: left !important;
      }

      .impact-stat-title {
        font-size: 13px !important;
        line-height: 1.4 !important;
        color: #F3DAD6 !important;
        margin: 0 !important;
        text-align: left !important;
      }

      .impact-stats-pattern {
        background-size: 60px 60px !important;
      }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      .impact-stats-grid {
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 20px !important;
      }

      .impact-stat-item {
        padding-left: 16px !important;
        min-height: 140px !important;
        gap: 8px !important;
      }

      .impact-stat-number {
        font-size: 32px !important;
      }

      .impact-stat-title {
        font-size: 14px !important;
      }
    }
  `;

  return (
    <section
      className="w-full relative overflow-hidden py-14 px-4 md:px-8 impact-stats-section"
      style={{ backgroundColor: '#C34A36' }}
    >
      <style>{mobileStyles}</style>
      {/* Dotted Pattern Less Visible */}
      <div 
        className="absolute inset-0 impact-stats-pattern"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.08) 25%, transparent 25%),
            radial-gradient(circle, rgba(255, 255, 255, 0.08) 25%, transparent 25%)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 40px 40px'
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto impact-stats-container">
        <h2
          className="font-unbounded text-white mb-10 text-2xl sm:text-4xl lg:text-5xl text-left impact-stats-heading"
          style={{
            fontWeight: 500,
            lineHeight: '120%',
            letterSpacing: '-0.01em'
          }}
        >
          Impact that transforms real estate
        </h2>

        {/* 2 rows x 4 columns grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12 min-h-[360px] items-center impact-stats-grid">
          {stats.map((stat, i) => (
            <div
              key={stat.title}
              className="flex flex-col justify-center h-full pl-8 relative impact-stat-item"
              style={{
                minHeight: 140,
                gap: 8
              }}
            >
              {/* Gradient Border - always shows before the stat */}
              <div
                className="absolute impact-stat-border"
                style={{
                  height: '100%',
                  background: 'linear-gradient(to bottom, #F2F2F2 0%, #f68d77 100%)',
                  borderRadius: '6px'
                }}
              />
              <div
                className="font-unbounded impact-stat-number"
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(36px, 6vw, 56px)',
                  color: '#FFF'
                }}
              >
                {stat.number}
              </div>
              <div
                className="font-poppins impact-stat-title"
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
};

export default ImpactStats;

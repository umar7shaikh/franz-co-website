import { MdVerifiedUser, MdWorkspacePremium, MdGroups, MdAssignmentTurnedIn, MdScience } from 'react-icons/md';

const valuesData = [
  {
    icon: <MdVerifiedUser size={36} color="#C34A36" />,
    title: "INTEGRITY FIRST",
    desc: "Transparent pricing. Honest timelines. No hidden costs. We build relationships on trust, not transactions."
  },
  {
    icon: <MdWorkspacePremium size={36} color="#C34A36" />,
    title: "EXCELLENCE AS STANDARD",
    desc: "From equipment selection to the smallest installation detail, we obsess over quality because shortcuts today become problems tomorrow."
  },
  {
    icon: <MdGroups size={36} color="#C34A36" />,
    title: "PARTNERSHIP MINDSET",
    desc: "We don't just execute orders; we collaborate. Your project goals become our goals. Your timeline pressures become our priorities."
  },
  {
    icon: <MdAssignmentTurnedIn size={36} color="#C34A36" />,
    title: "ACCOUNTABILITY ALWAYS",
    desc: "When something goes wrong, we own it immediately and fix it fast. No finger-pointing. No excuses. Just solutions."
  },
  {
    icon: <MdScience size={36} color="#C34A36" />,
    title: "INNOVATION DRIVEN",
    desc: "The fitness industry evolves rapidly. We stay ahead through continuous learning, technology integration, and forward-thinking design approaches."
  },
];

const CoreValues = () => {
  const mobileStyles = `
    @media (max-width: 767px) {
      .core-values-section {
        padding: 48px 16px !important;
        margin-top: 24px !important;
      }

      .core-values-buttons {
        display: none !important;
      }

      .core-values-main-container {
        flex-direction: column !important;
        gap: 24px !important;
        width: 100% !important;
        max-width: 100% !important;
      }

      .core-values-left {
        width: 100% !important;
        max-width: 100% !important;
        gap: 16px !important;
        padding-top: 0 !important;
      }

      .core-values-left > * {
        width: 100% !important;
        max-width: 100% !important;
      }

      .core-values-heading {
        font-size: 24px !important;
        line-height: 1.3 !important;
        margin-bottom: 8px !important;
        text-align: left !important;
        width: 100% !important;
      }

      .core-values-description {
        font-size: 14px !important;
        line-height: 1.5 !important;
        margin-bottom: 16px !important;
        text-align: left !important;
        width: 100% !important;
      }

      .core-values-right {
        width: 100% !important;
        max-width: 100% !important;
        gap: 16px !important;
      }

      .core-values-card {
        padding: 20px !important;
        min-height: auto !important;
        height: auto !important;
        gap: 12px !important;
        border-radius: 16px !important;
        width: 100% !important;
        max-width: 100% !important;
      }

      .core-values-card > * {
        width: 100% !important;
        max-width: 100% !important;
      }

      .core-values-icon-container {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        width: 100% !important;
        margin-bottom: 8px !important;
      }

      .core-values-icon {
        width: 32px !important;
        height: 32px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }

      .core-values-title {
        font-size: 18px !important;
        line-height: 1.3 !important;
        margin-bottom: 4px !important;
        text-align: center !important;
        width: 100% !important;
      }

      .core-values-desc {
        font-size: 14px !important;
        line-height: 1.5 !important;
        margin: 0 !important;
        text-align: left !important;
        width: 100% !important;
      }
    }

    @media (min-width: 768px) {
      .core-values-buttons {
        display: flex !important;
      }
    }
  `;

  return (
    <section className="w-full py-14 px-2 lg:px-8 core-values-section" style={{ background: '#fffafa', marginTop: '40px' }}>
      <style>{mobileStyles}</style>
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-start core-values-main-container">
        {/* Left column: Heading, text, buttons (all top aligned) */}
        <div className="flex flex-col w-full lg:w-[600px] gap-4 pt-0 core-values-left">
          <h2 className="font-unbounded text-3xl md:text-4xl font-bold text-[#40281A] mb-2 core-values-heading">
            CORE VALUES
          </h2>
          <p className="font-poppins text-[16px] text-[#404040] mb-4 core-values-description">
            Discover the guiding principles that drive our approach and define our commitment to every client. Our core values reflect our passion for transparency, excellence, partnership, accountability, and innovation.
          </p>
          <div className="flex gap-4 mb-2 core-values-buttons">
            <button className="font-poppins font-semibold text-[15px] bg-[#f1eeed] hover:bg-[#e5e0df] transition-colors px-6 py-3 rounded-lg text-[#C34A36] core-values-primary-btn">
              Services
            </button>
            <button className="font-poppins font-semibold text-[15px] bg-transparent hover:bg-[#FFF5F3] transition-colors px-6 py-3 rounded-lg inline-flex items-center gap-2 text-[#C34A36] core-values-secondary-btn">
              Contact
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Right column: Values list */}
        <div className="flex flex-col w-full lg:w-[600px] gap-8 core-values-right">
          {valuesData.map((value, index) => (
            <div
              key={value.title}
              className="flex flex-col bg-[#F5F5F5] rounded-2xl border border-[#f5e9e2] core-values-card"
              style={{
                padding: 32,
                minHeight: 180,
                height: 'auto',
                boxShadow: '0 2px 10px rgba(60,38,32,0.02)',
                gap: '16px',
                justifyContent: 'flex-start',
                width: '100%'
              }}
            >
              <div className="core-values-icon-container">
                <div className="core-values-icon" style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {value.icon}
                </div>
              </div>
              <h3 className="font-unbounded text-lg md:text-xl font-semibold text-[#C34A36] tracking-tight mb-1 core-values-title">
                {value.title}
              </h3>
              <p className="font-poppins text-[15px] text-[#404040] m-0 core-values-desc">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

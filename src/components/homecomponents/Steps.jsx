import { FiUser, FiEdit, FiLayout, FiCheckSquare } from 'react-icons/fi';

const steps = [
  {
    title: 'Step 1',
    subtitle: 'Share your project details and vision',
    icon: <FiUser size={22} color="#C34A36" />
  },
  {
    title: 'Step 2',
    subtitle: 'Get a customized proposal within 48 hours',
    icon: <FiEdit size={22} color="#C34A36" />
  },
  {
    title: 'Step 3',
    subtitle: 'Review 3D designs and equipment selection',
    icon: <FiLayout size={22} color="#C34A36" />
  },
  {
    title: 'Step 4',
    subtitle: "Approve and we'll handle the rest",
    icon: <FiCheckSquare size={22} color="#C34A36" />
  }
];

const Steps = () => (
  <>
    {/* MOBILE-ONLY STYLES */}
    <style>
      {`
        @media (max-width: 767px) {
          .steps-section {
            padding-top: 34px !important;
            padding-bottom: 32px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .steps-main-container {
            gap: 24px !important;
            width: 100% !important;
            max-width: 100% !important;
          }

          .steps-top-content {
            margin-bottom: 12px !important;
          }

          .steps-label {
            font-size: 12px !important;
            margin-bottom: 8px !important;
            line-height: 1.3 !important;
          }

          .steps-title {
            font-size: 24px !important;
            line-height: 1.2 !important;
            margin-bottom: 16px !important;
            text-align: left !important;
          }

          /* Hide buttons completely on mobile */
          .steps-buttons {
            display: none !important;
          }

          .steps-steps-container {
            gap: 20px !important;
            flex-direction: column !important;
            align-items: stretch !important;
            margin-top: 12px !important;
          }

          .steps-step-item {
            min-width: auto !important;
            width: 100% !important;
            flex: none !important;
            padding: 16px !important;
            gap: 8px !important;
            background: none !important;
            border-radius: 0 !important;
            border: none !important;
          }

          .steps-step-title {
            font-size: 18px !important;
            line-height: 1.3 !important;
            color: '#C34A36' !important;
            font-weight: 700 !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          .steps-step-subtitle {
            font-size: 14px !important;
            line-height: 1.4 !important;
            margin: 0 !important;
            padding: 0 !important;
            font-weight: 500 !important;
            color: '#3B2327' !important;
          }

          /* Hide all icon bars on mobile */
          .steps-icon-bar {
            display: none !important;
          }

          /* Ensure consistent step layout without icons */
          .steps-step-even,
          .steps-step-odd {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 4px !important;
            width: 100% !important;
          }
        }
      `}
    </style>

    <section
      className="steps-section"
      style={{
        background: 'white',
        width: '100%',
        paddingTop: 80,
        paddingBottom: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        className="steps-main-container"
        style={{
          width: 1280,
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 40
        }}
      >
        {/* TOP CONTENT */}
        <div className="steps-top-content" style={{ width: '100%', marginBottom: 36 }}>
          <div 
            className="font-poppins steps-label"
            style={{ 
              color: '#C34A36', 
              fontWeight: 600, 
              fontSize: 13, 
              marginBottom: 14, 
              letterSpacing: 1 
            }}
          >
            START YOUR PROJECT
          </div>
          <h2
            className="font-unbounded steps-title"
            style={{
              fontWeight: 700,
              fontSize: 38,
              lineHeight: '115%',
              color: '#3B2327',
              marginBottom: 32
            }}
          >
            Let&apos;s Design the Amenity That<br />Sets Your Project Apart
          </h2>
          <div className="steps-buttons" style={{ display: 'flex', gap: 16 }}>
            <button
              className="font-poppins steps-primary-btn"
              style={{
                background: '#F9ECEA',
                border: 'none',
                color: '#C34A36',
                padding: '7px 24px',
                borderRadius: 7,
                fontWeight: 500,
                fontSize: 14,
                cursor: 'pointer'
              }}
            >
              Button
            </button>
            <button
              className="font-poppins steps-secondary-btn"
              style={{
                background: 'white',
                border: 'none',
                color: '#C34A36',
                padding: '7px 10px',
                fontWeight: 500,
                fontSize: 14,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              Contact
              <span style={{ marginLeft: 5, fontSize: 20, lineHeight: 1 }}>›</span>
            </button>
          </div>
        </div>

        {/* STEPS */}
        <div
          className="steps-steps-container"
          style={{
            width: '100%',
            marginTop: 26,
            display: 'flex',
            gap: 30,
            alignItems: 'flex-start',
            justifyContent: 'center'
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`steps-step-item ${idx % 2 === 0 ? 'steps-step-even' : 'steps-step-odd'}`}
              style={{
                flex: 1,
                minWidth: 220,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
              {/* Icon Bar - Hidden on mobile */}
              <div className="steps-icon-bar" style={{
                width: '100%',
                height: 36,
                background: 'linear-gradient(90deg, #F9ECEA 80%, #fff 100%)',
                borderRadius: 28,
                display: 'flex',
                alignItems: 'center',
                margin: '8px 0 8px 0',
                paddingLeft: 14
              }}>
                {step.icon}
              </div>
              
              {/* Step Content - Alternating layout for desktop, consistent for mobile */}
              <div className="font-unbounded steps-step-title" style={{
                color: '#C34A36',
                fontWeight: 700,
                fontSize: 22
              }}>
                {step.title}
              </div>
              <div
                className="font-poppins steps-step-subtitle"
                style={{
                  fontWeight: 500,
                  fontSize: 17,
                  color: '#3B2327',
                  marginTop: 6,
                  marginBottom: 2
                }}
              >
                {step.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Steps;

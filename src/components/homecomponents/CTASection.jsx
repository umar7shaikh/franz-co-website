import Skyline from '../../assets/Skyline.png';

const CTASection = () => (
  <>
    {/* MOBILE-ONLY STYLES */}
    <style>
      {`
        @media (max-width: 767px) {
          .cta-section {
            padding: 48px 16px 32px 16px !important;
            min-height: auto !important;
            align-items: flex-start !important;
          }

          .cta-main-container {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 16px !important;
            text-align: left !important;
          }

          .cta-skyline {
            width: 90% !important;
            height: 60% !important;
            bottom: -20% !important;
          }

          .cta-heading {
            font-size: 28px !important;
            line-height: 1.3 !important;
            margin-bottom: 12px !important;
          }

          .cta-subheading {
            font-size: 16px !important;
            line-height: 1.5 !important;
            margin-bottom: 24px !important;
            opacity: 0.95 !important;
          }

          .cta-buttons-row {
            flex-direction: column !important;
            gap: 12px !important;
            width: 100% !important;
            margin-bottom: 24px !important;
          }

          .cta-primary-btn,
          .cta-secondary-btn {
            width: 100% !important;
            justify-content: center !important;
            padding: 12px 20px !important;
            font-size: 15px !important;
          }

          .cta-primary-btn {
            background: #FFFFFF !important;
            color: #18191A !important;
          }

          .cta-secondary-btn {
            background: rgba(255, 255, 255, 0.15) !important;
            color: #FFFFFF !important;
            backdrop-filter: blur(10px) !important;
          }

          .cta-divider {
            height: 1px !important;
            background: rgba(255, 255, 255, 0.25) !important;
            margin-bottom: 20px !important;
            width: 100% !important;
          }

          .cta-links-row {
            flex-direction: column !important;
            gap: 16px !important;
            width: 100% !important;
            justify-content: flex-start !important;
          }

          .cta-link {
            font-size: 15px !important;
            padding: 12px 0 !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;
            justify-content: flex-start !important;
            width: 100% !important;
            gap: 8px !important;
          }

          .cta-link:last-child {
            border-bottom: none !important;
          }

          .cta-link span {
            font-size: 16px !important;
          }
        }
      `}
    </style>

    <section
      className="cta-section"
      style={{
        width: '100%',
        minHeight: 400,
        padding: '80px 0 0 0',
        background: '#C34A36',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Skyline Background Overlay - Only bottom half, shifted down */}
      <div
        className="cta-skyline"
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '75%',
          height: '80%',
          backgroundImage: `url(${Skyline})`,
          backgroundPosition: 'bottom center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2,
          pointerEvents: 'none'
        }}
      />

      {/* Content */}
      <div
        className="cta-main-container"
        style={{
          width: 1280,
          maxWidth: 1280,
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 20px'
        }}
      >
        {/* Heading */}
        <h2
          className="font-unbounded cta-heading"
          style={{
            fontWeight: 700,
            fontSize: 48,
            color: '#FFFFFF',
            marginBottom: 16,
            lineHeight: '1.2'
          }}
        >
          Ready to elevate your property?
        </h2>

        {/* Subheading */}
        <p
          className="font-poppins cta-subheading"
          style={{
            fontWeight: 400,
            fontSize: 18,
            color: '#FFFFFF',
            marginBottom: 40,
            opacity: 0.95
          }}
        >
          Transform your property with a comprehensive fitness solution tailored to your specific needs.
        </p>

        {/* Buttons Row */}
        <div
          className="cta-buttons-row"
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            marginBottom: 32
          }}
        >
          <button
            className="font-poppins cta-primary-btn"
            style={{
              background: '#FFFFFF',
              border: 'none',
              color: '#18191A',
              padding: '14px 32px',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            Schedule consultation
          </button>
          <button
            className="font-poppins cta-secondary-btn"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              border: 'none',
              color: '#FFFFFF',
              padding: '14px 32px',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            View portfolio
          </button>
        </div>

        {/* Divider Line */}
        <div
          className="cta-divider"
          style={{
            width: '100%',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.25)',
            marginBottom: 32
          }}
        />

        {/* Links Row */}
        <div
          className="cta-links-row"
          style={{
            display: 'flex',
            gap: 32,
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <a
            href="#"
            className="font-poppins cta-link"
            style={{
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              opacity: 0.9,
              transition: 'opacity 0.3s'
            }}
          >
            Download Our Project Brochure
            <span style={{ fontSize: 18 }}>↗</span>
          </a>
          <a
            href="#"
            className="font-poppins cta-link"
            style={{
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              opacity: 0.9,
              transition: 'opacity 0.3s'
            }}
          >
            View Equipment Catalog
            <span style={{ fontSize: 18 }}>↗</span>
          </a>
          <a
            href="#"
            className="font-poppins cta-link"
            style={{
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              opacity: 0.9,
              transition: 'opacity 0.3s'
            }}
          >
            Schedule a Virtual Demo
            <span style={{ fontSize: 18 }}>↗</span>
          </a>
          <a
            href="#"
            className="font-poppins cta-link"
            style={{
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              opacity: 0.9,
              transition: 'opacity 0.3s'
            }}
          >
            Visit Our Experience Center
            <span style={{ fontSize: 18 }}>↗</span>
          </a>
        </div>
      </div>
    </section>
  </>
);

export default CTASection;

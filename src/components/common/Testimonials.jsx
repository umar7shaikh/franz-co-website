import { useNavigate } from 'react-router-dom';
import Testimonial1 from '../../assets/Testimonial1.png';
import Testimonial2 from '../../assets/Testimonial2.png';
import Testimonial3 from '../../assets/Testimonial3.png';
import WebflowLogo from '../../assets/Webflow.png';

const testimonials = [
  {
    rating: 5,
    text: `"We've worked with FranzCo on three projects now. They're not just vendors; they're strategic partners who understand real estate ROI."`,
    name: 'Ananya Reddy',
    role: 'COO, Brigade Group',
    avatar: Testimonial1
  },
  {
    rating: 5,
    text: `"FranzCo transformed our amenity space into the #1 selling point of our project. Their attention to detail and understanding of what homebuyers want is unmatched."`,
    name: 'Rajesh Kulkarni',
    role: 'MD, Kolte-Patil Developers',
    avatar: Testimonial2
  },
  {
    rating: 5,
    text: `"From concept to commission in 90 days. Professional, on-time, on-budget. That's FranzCo."`,
    name: 'Vikram Singh',
    role: 'VP Projects, DLF Limited',
    avatar: Testimonial3
  }
];

const Testimonials = () => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <>
      {/* MOBILE-ONLY STYLES */}
      <style>
        {`
          @media (max-width: 767px) {
            .testimonials-section {
              padding-top: 64px !important;
              padding-bottom: 32px !important;
              padding-left: 16px !important;
              padding-right: 16px !important;
              min-height: auto !important;
            }

            .testimonials-main-container {
              gap: 24px !important;
              width: 100% !important;
              max-width: 100% !important;
              min-height: auto !important;
            }

            .testimonials-header {
              text-align: left !important;
              gap: 8px !important;
            }

            .testimonials-label {
              font-size: 12px !important;
              margin-bottom: 8px !important;
              line-height: 1.3 !important;
            }

            .testimonials-title {
              font-size: 24px !important;
              line-height: 1.2 !important;
              margin-bottom: 12px !important;
            }

            .testimonials-description {
              font-size: 14px !important;
              line-height: 1.4 !important;
              margin: 0 !important;
            }

            /* Hide desktop layouts on mobile */
            .testimonials-text-section {
              display: none !important;
            }

            .testimonials-pill-section {
              display: none !important;
            }

            /* Show and style mobile testimonials */
            .testimonials-mobile-section {
              display: block !important;
              width: 100% !important;
              gap: 24px !important;
            }

            .testimonials-mobile-card {
              display: flex !important;
              flex-direction: column !important;
              width: 100% !important;
              background: transparent !important;
              border-radius: 0 !important;
              padding: 0 !important;
              gap: 20px !important;
              box-shadow: none !important;
              border: none !important;
            }

            .testimonials-mobile-text-section {
              width: 100% !important;
              display: flex !important;
              flex-direction: column !important;
              gap: 12px !important;
            }

            .testimonials-stars-mobile {
              display: flex !important;
              align-items: center !important;
              margin-bottom: 0 !important;
              padding: 0 !important;
            }

            .testimonials-stars-mobile span {
              color: #C34A36 !important;
              font-size: 18px !important;
              margin-right: 2px !important;
            }

            .testimonials-text-mobile {
              font-size: 16px !important;
              line-height: 1.5 !important;
              margin: 0 !important;
              font-weight: 500 !important;
              color: #18191A !important;
              min-height: auto !important;
              padding: 0 !important;
            }

            .testimonials-avatar-section {
              display: flex !important;
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 12px !important;
              width: 100% !important;
              margin: 0 !important;
            }

            .testimonials-avatar-mobile {
              width: 64px !important;
              height: 64px !important;
              border-radius: 50% !important;
              object-fit: cover !important;
              border: 3px solid #F9ECEA !important;
              box-shadow: 0 2px 8px rgba(195, 74, 54, 0.15) !important;
              align-self: flex-start !important;
            }

            .testimonials-person-info {
              display: flex !important;
              flex-direction: column !important;
              gap: 4px !important;
              align-items: flex-start !important;
              padding: 12px 0 !important;
              border-top: 1px solid rgba(195, 74, 54, 0.1) !important;
              width: 100% !important;
            }

            .testimonials-name-mobile {
              font-size: 16px !important;
              font-weight: 600 !important;
              color: #C34A36 !important;
              line-height: 1.3 !important;
              margin: 0 !important;
            }

            .testimonials-role-mobile {
              font-size: 14px !important;
              font-weight: 400 !important;
              color: #69342c !important;
              line-height: 1.4 !important;
              margin: 0 !important;
            }

            .testimonials-company-logo-mobile {
              height: 16px !important;
              margin: 8px 0 0 0 !important;
              opacity: 0.7 !important;
              align-self: flex-start !important;
            }

            .testimonials-buttons {
              flex-direction: column !important;
              gap: 12px !important;
              margin-top: 16px !important;
              margin-left: 0 !important;
              width: 100% !important;
            }

            .testimonials-primary-btn {
              display: none !important;
            }

            .testimonials-secondary-btn {
              width: 100% !important;
              justify-content: center !important;
              padding: 12px 16px !important;
              margin: 0 !important;
              border-radius: 8px !important;
              font-size: 14px !important;
              background: transparent !important;
              border: 1px solid rgba(195, 74, 54, 0.2) !important;
            }
          }

          /* Desktop styles remain unchanged */
          @media (min-width: 768px) {
            .testimonials-mobile-section {
              display: none !important;
            }
          }
        `}
      </style>

      <section
        className="testimonials-section"
        style={{
          background: '#F9ECEA',
          width: '100%',
          paddingTop: 112,
          paddingBottom: 64,
          display: 'flex',
          justifyContent: 'center',
          minHeight: 720
        }}
      >
        <div
          className="testimonials-main-container"
          style={{
            width: 1280,
            maxWidth: 1280,
            minHeight: 676,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 60
          }}
        >
          {/* Headings */}
          <div className="testimonials-header">
            <div className="font-poppins testimonials-label" style={{ color: '#C34A36', fontWeight: 600, fontSize: 15, marginBottom: 14, letterSpacing: 1 }}>
              Testimonials
            </div>
            <h2 className="font-unbounded testimonials-title" style={{ fontWeight: 700, fontSize: 44, color: '#3B2327', marginBottom: 10 }}>
              Customer testimonials
            </h2>
            <div className="font-poppins testimonials-description" style={{ fontWeight: 400, fontSize: 16, color: '#363337' }}>
              Real experiences from developers who transformed their properties. Trusted by India's Leading Developers.
            </div>
          </div>

          {/* Testimonials Content - Desktop Layout */}
          <div className="testimonials-content" style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            alignItems: 'flex-start'
          }}>
            {/* DESKTOP: Text Row */}
            <div className="testimonials-text-section" style={{
              display: 'flex',
              gap: 32,
              width: '100%',
              alignItems: 'flex-start'
            }}>
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="testimonials-text-item"
                  style={{
                    flex: 1,
                    minWidth: 340,
                    maxWidth: 390,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  {/* Star Row */}
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} style={{ color: '#C34A36', fontSize: 22, marginRight: 2 }}>★</span>
                    ))}
                  </div>
                  {/* Testimonial Text */}
                  <div
                    className="font-poppins"
                    style={{
                      fontWeight: 600,
                      color: '#18191A',
                      fontSize: 18,
                      marginBottom: 30,
                      marginTop: 2,
                      lineHeight: 1.5,
                      minHeight: 74
                    }}
                  >
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP: Pill + Webflow Row */}
            <div className="testimonials-pill-section" style={{
              display: 'flex',
              gap: 32,
              width: '100%',
              alignItems: 'center',
              marginTop: 0,
              marginBottom: 0
            }}>
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    flex: 1,
                    maxWidth: 390,
                    minWidth: 340,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 4
                  }}
                >
                  {/* Pill */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'linear-gradient(90deg, rgba(195,74,54,0.10) 50%, rgba(249,236,234,0.0) 100%)',
                    borderRadius: 32,
                    padding: '7px 22px 7px 11px',
                    minWidth: 240,
                    minHeight: 54,
                    position: 'relative',
                    boxShadow: '0px 4px 18px 0px rgba(178, 108, 97, 0.07)'
                  }}>
                    <img
                      src={item.avatar}
                      alt={item.name}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginRight: 14,
                        border: '2.5px solid white',
                        boxShadow: '0 1px 6px 0 #c34a3625'
                      }}
                    />
                    <div>
                      <div
                        className="font-poppins"
                        style={{
                          fontWeight: 600,
                          color: '#C34A36',
                          fontSize: 16,
                          lineHeight: 1.15
                        }}
                      >
                        {item.name}
                      </div>
                      <div className="font-poppins" style={{ fontWeight: 400, color: '#69342c', fontSize: 14 }}>
                        {item.role}
                      </div>
                    </div>
                  </div>
                  <img
                    src={WebflowLogo}
                    alt="company"
                    style={{
                      height: 18,
                      marginTop: 6,
                      marginLeft: 4,
                      opacity: 0.63
                    }}
                  />
                </div>
              ))}
            </div>

            {/* MOBILE: Individual testimonial sections - Transparent background */}
            <div className="testimonials-mobile-section" style={{ display: 'none', width: '100%' }}>
              {testimonials.map((item, idx) => (
                <div key={idx} className="testimonials-mobile-card">
                  {/* Stars and Text */}
                  <div className="testimonials-mobile-text-section">
                    <div className="testimonials-stars-mobile">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <div className="testimonials-text-mobile">
                      {item.text}
                    </div>
                  </div>

                  {/* Person Image and Info */}
                  <div className="testimonials-avatar-section">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="testimonials-avatar-mobile"
                    />
                    <div className="testimonials-person-info">
                      <div className="testimonials-name-mobile">
                        {item.name}
                      </div>
                      <div className="testimonials-role-mobile">
                        {item.role}
                      </div>
                    </div>
                    <img
                      src={WebflowLogo}
                      alt="company"
                      className="testimonials-company-logo-mobile"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons Row */}
          <div className="testimonials-buttons" style={{
            display: 'flex',
            gap: 16,
            alignItems: 'center',
            marginTop: 12,
            marginLeft: 5
          }}>
            <button
              className="font-poppins testimonials-primary-btn"
              style={{
                background: 'rgba(255,255,255,0.35)',
                backdropFilter: 'blur(10px)',
                border: 'none',
                color: '#C34A36',
                padding: '12px 28px',
                borderRadius: 9,
                fontWeight: 500,
                fontSize: 15,
                cursor: 'pointer',
                boxShadow: '0 8px 20px 0 rgba(178,108,97,0.05)'
              }}
            >
              More Success Stories
            </button>
            <button
              className="font-poppins testimonials-secondary-btn"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#C34A36',
                fontWeight: 500,
                fontSize: 15,
                cursor: 'pointer'
              }}
              onClick={handleContactClick}
            >
              Contact <span style={{ fontSize: 18 }}>›</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

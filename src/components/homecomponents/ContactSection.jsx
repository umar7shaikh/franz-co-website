import ContactBg from '../../assets/Contact.png';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactSection = () => (
  <>
    {/* MOBILE-ONLY STYLES */}
    <style>
      {`
        @media (max-width: 767px) {
          .contact-section {
            min-height: auto !important;
            height: auto !important;
            max-height: none !important;
            padding: 48px 16px !important;
            align-items: flex-start !important;
          }

          .contact-overlay {
            position: static !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            background: rgba(18,18,20,0.75) !important;
            backdrop-filter: blur(6px) !important;
            padding: 32px 0 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
          }

          .contact-content {
            padding: 24px 16px !important;
            min-height: auto !important;
            text-align: left !important;
          }

          .contact-heading {
            font-size: 24px !important;
            line-height: 1.3 !important;
            margin-bottom: 12px !important;
            color: #fff !important;
          }

          .contact-divider {
            height: 1px !important;
            background: rgba(255,255,255,0.2) !important;
            margin: 16px 0 !important;
            width: 100% !important;
          }

          .contact-info-item {
            display: flex !important;
            align-items: flex-start !important;
            gap: 10px !important;
            margin-bottom: 16px !important;
            padding: 12px 0 !important;
            border-bottom: 1px solid rgba(255,255,255,0.1) !important;
          }

          .contact-info-item:last-child {
            border-bottom: none !important;
            margin-bottom: 0 !important;
          }

          .contact-icon {
            width: 18px !important;
            height: 18px !important;
            flex-shrink: 0 !important;
            margin-top: 2px !important;
          }

          .contact-link,
          .contact-text {
            font-size: 15px !important;
            font-weight: 400 !important;
            color: #fff !important;
            line-height: 1.4 !important;
            text-decoration: none !important;
            flex: 1 !important;
          }

          .contact-link:hover {
            color: rgba(255,255,255,0.8) !important;
          }

          .contact-map-text {
            font-size: 14px !important;
            line-height: 1.5 !important;
          }

          .contact-button {
            width: 100% !important;
            padding: 12px 20px !important;
            font-size: 14px !important;
            margin-top: 16px !important;
            border-radius: 8px !important;
            background: #fff !important;
            color: #151515 !important;
            border: none !important;
            font-weight: 600 !important;
            cursor: pointer !important;
            box-shadow: 0 3px 12px rgba(0,0,0,0.15) !important;
          }
        }
      `}
    </style>

    <section
      className="contact-section"
      style={{
        width: '100%',
        minHeight: 510,
        height: '64vh',
        maxHeight: 700,
        background: `url(${ContactBg}) center center / cover no-repeat`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'stretch',
        borderRadius: 0,
        margin: 0,
        boxSizing: 'border-box'
      }}
    >
      {/* Blurry Overlay */}
      <div
        className="contact-overlay"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '38%',
          maxWidth: 470,
          height: '100%',
          background: 'rgba(18,18,20,0.58)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 2,
          boxSizing: 'border-box'
        }}
      >
        <div className="contact-content" style={{
          padding: '54px 40px',
          minHeight: 330,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#fff'
        }}>
          <h2 className="font-unbounded contact-heading" style={{
            fontWeight: 700,
            fontSize: 34,
            marginBottom: 18,
            color: '#fff'
          }}>
            Contact Details
          </h2>
          <div className="contact-divider" style={{
            height: 1,
            background: 'rgba(255,255,255,0.16)',
            margin: '0 0 32px 0',
            width: '100%'
          }} />
          <div className="contact-info-item" style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
            <FiMail className="contact-icon" color="#D58072" size={20} style={{ marginRight: 13 }} />
            <a
              href="mailto:projects@franzco.in"
              className="font-poppins contact-link"
              style={{
                fontSize: 17,
                fontWeight: 400,
                color: '#fff',
                textDecoration: 'none'
              }}
            >
              projects@franzco.in
            </a>
          </div>
          <div className="contact-info-item" style={{ display: 'flex', alignItems: 'center', marginBottom: 23 }}>
            <FiPhone className="contact-icon" color="#D58072" size={20} style={{ marginRight: 13 }} />
            <span className="font-poppins contact-text" style={{
              fontSize: 17,
              fontWeight: 400
            }}>
              +91 98765 43210
            </span>
          </div>
          <div className="contact-info-item" style={{
            display: 'flex', alignItems: 'flex-start', marginBottom: 36
          }}>
            <FiMapPin className="contact-icon" color="#D58072" size={20} style={{ marginRight: 13, marginTop: 2 }} />
            <span className="font-poppins contact-text contact-map-text" style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.5
            }}>
              Experience Center, Baner,<br />
              Pune, Maharashtra 411045
            </span>
          </div>
          <button className="contact-button" style={{
            background: '#fff',
            color: '#151515',
            border: 'none',
            padding: '8.5px 20px',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 15,
            fontFamily: 'Poppins, sans-serif',
            marginTop: 8,
            cursor: 'pointer',
            boxShadow: '0 2.5px 10px #0002'
          }}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  </>
);

export default ContactSection;

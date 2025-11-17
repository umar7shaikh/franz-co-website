import ContactBg from '../../assets/Contact.png';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactSection = () => (
  <section
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
      <div style={{
        padding: '54px 40px',
        minHeight: 330,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#fff'
      }}>
        <h2 className="font-unbounded" style={{
          fontWeight: 700,
          fontSize: 34,
          marginBottom: 18,
          color: '#fff'
        }}>
          Contact Details
        </h2>
        <div style={{
          height: 1,
          background: 'rgba(255,255,255,0.16)',
          margin: '0 0 32px 0',
          width: '100%'
        }} />
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <FiMail color="#D58072" size={20} style={{ marginRight: 13 }} />
          <a
            href="mailto:projects@franzco.in"
            className="font-poppins"
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
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 23 }}>
          <FiPhone color="#D58072" size={20} style={{ marginRight: 13 }} />
          <span className="font-poppins" style={{
            fontSize: 17,
            fontWeight: 400
          }}>
            +91 98765 43210
          </span>
        </div>
        <div style={{
          display: 'flex', alignItems: 'flex-start', marginBottom: 36
        }}>
          <FiMapPin color="#D58072" size={20} style={{ marginRight: 13, marginTop: 2 }} />
          <span className="font-poppins" style={{
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.5
          }}>
            Experience Center, Baner,<br />
            Pune, Maharashtra 411045
          </span>
        </div>
        <button style={{
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
);

export default ContactSection;

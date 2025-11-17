import Testimonial1 from '../../assets/Testimonial1.png';
import Testimonial2 from '../../assets/Testimonial2.png';
import Testimonial3 from '../../assets/Testimonial3.png';
import WebflowLogo from '../../assets/Webflow.png';

const testimonials = [
  {
    rating: 5,
    text: `“We've worked with FranzCo on three projects now. They're not just vendors; they're strategic partners who understand real estate ROI.”`,
    name: 'Ananya Reddy',
    role: 'COO, Brigade Group',
    avatar: Testimonial1
  },
  {
    rating: 5,
    text: `“FranzCo transformed our amenity space into the #1 selling point of our project. Their attention to detail and understanding of what homebuyers want is unmatched.”`,
    name: 'Rajesh Kulkarni',
    role: 'MD, Kolte-Patil Developers',
    avatar: Testimonial2
  },
  {
    rating: 5,
    text: `“From concept to commission in 90 days. Professional, on-time, on-budget. That’s FranzCo.”`,
    name: 'Vikram Singh',
    role: 'VP Projects, DLF Limited',
    avatar: Testimonial3
  }
];

const Testimonials = () => (
  <section
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
      <div>
        <div className="font-poppins" style={{ color: '#C34A36', fontWeight: 600, fontSize: 15, marginBottom: 14, letterSpacing: 1 }}>
          Testimonials
        </div>
        <h2 className="font-unbounded" style={{ fontWeight: 700, fontSize: 44, color: '#3B2327', marginBottom: 10 }}>
          Customer testimonials
        </h2>
        <div className="font-poppins" style={{ fontWeight: 400, fontSize: 16, color: '#363337' }}>
          Real experiences from developers who transformed their properties. Trusted by India's Leading Developers.
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        alignItems: 'flex-start'
      }}>
        {/* Text Row */}
        <div style={{
          display: 'flex',
          gap: 32,
          width: '100%',
          alignItems: 'flex-start'
        }}>
          {testimonials.map((item, idx) => (
            <div
              key={idx}
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

        {/* Pill + Webflow Row */}
        <div style={{
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
                background:
                  'linear-gradient(90deg, rgba(195,74,54,0.10) 50%, rgba(249,236,234,0.0) 100%)',
                borderRadius: 32,
                padding: '7px 22px 7px 11px',
                minWidth: 240,
                minHeight: 54,
                position: 'relative',
                // boxShadow gives fake blur effect
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
      </div>

      {/* Buttons Row */}
      <div style={{
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        marginTop: 12,
        marginLeft: 5
      }}>
        <button
          className="font-poppins"
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
          className="font-poppins"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#C34A36',
            fontWeight: 500,
            fontSize: 15,
            cursor: 'pointer'
          }}
        >
          Contact <span style={{ fontSize: 18 }}>›</span>
        </button>
      </div>
    </div>
  </section>
);

export default Testimonials;

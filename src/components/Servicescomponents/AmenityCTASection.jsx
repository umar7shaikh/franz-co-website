import Skyline from '../../assets/Skyline.png';

const AmenityCTASection = () => (
  <section
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
    {/* Skyline Background Overlay */}
    <div
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

    <div style={{ width: '100%', position: 'relative', zIndex: 2 }}>
      {/* Heading */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          textAlign: 'center',
          padding: '0 20px'
        }}
      >
        <h2
          className="font-unbounded"
          style={{
            fontFamily: "Unbounded, sans-serif",
            fontWeight: 700,
            fontSize: 48,
            lineHeight: '120%',
            letterSpacing: '-1%',
            color: '#FFFFFF',
            marginBottom: 18
          }}
        >
          Ready to Transform Your Amenity Space?
        </h2>
      </div>

      {/* Steps: edge-to-edge bar */}
      <div
        style={{
          width: '100%',
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontSize: 15,
          color: "#fff",
          opacity: 0.95,
          marginBottom: 34,
          gap: 24
        }}
      >
        <span style={{ opacity: 0.6, whiteSpace: 'nowrap' }}>Step 1 Share your project details.</span>
        <span style={{ opacity: 0.6, whiteSpace: 'nowrap' }}>Step 2 Receive customized service proposal.</span>
        <span style={{ opacity: 0.6, whiteSpace: 'nowrap' }}>Step 3 Review designs and equipment options.</span>
        <span style={{ opacity: 0.6, whiteSpace: 'nowrap' }}>Step 4 Approve and we execute flawlessly</span>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: 'flex',
          gap: 14,
          justifyContent: 'center',
          marginBottom: 36
        }}
      >
        {/* Schedule consultation button: white bg, white text (no border) */}
        <button
          className="font-poppins"
          style={{
            background: "#fff",
            color: "Black",
            padding: "14px 32px",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
            border: 'none',
            boxShadow: "0 1px 8px 0 rgba(0,0,0,.04)",
            transition: "all 0.3s"
          }}
        >
          Schedule consultation
        </button>
        {/* View portfolio: glass effect, blurred, no border */}
        <button
          className="font-poppins"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            color: "#fff",
            padding: "14px 32px",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
            border: "none",
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            transition: "all 0.3s",
            display: 'flex',
            alignItems: 'center'
          }}
        >
          View portfolio <span style={{ fontSize: 20, marginLeft: 8 }}>{'>'}</span>
        </button>
      </div>
    </div>
  </section>
);

export default AmenityCTASection;

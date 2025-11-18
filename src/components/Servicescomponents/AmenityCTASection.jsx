import Skyline from '../../assets/Skyline.png';

const AmenityCTASection = () => (
  <section
    style={{
      width: '100%',
      minHeight: 400,
      paddingTop: 80,
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
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />

    <div style={{ width: '100%', position: 'relative', zIndex: 2 }}>
      {/* Heading */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          textAlign: 'center',
          padding: '0 20px',
        }}
      >
        <h2
          className="font-unbounded"
          style={{
            fontFamily: "Unbounded, sans-serif",
            fontWeight: 700,
            fontSize: '3rem', // 48px
            lineHeight: '120%',
            letterSpacing: '-1%',
            color: '#FFFFFF',
            marginBottom: 18
          }}
        >
          Ready to Transform Your Amenity Space?
        </h2>
      </div>

      {/* Steps bar */}
      <div
        style={{
          width: '100%',
          padding: '0 16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          color: "#fff",
          opacity: 0.95,
          marginBottom: 34,
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        {[
          'Step 1 Share your project details.',
          'Step 2 Receive customized service proposal.',
          'Step 3 Review designs and equipment options.',
          'Step 4 Approve and we execute flawlessly',
        ].map((step, i) => (
          <span key={i} style={{ opacity: 0.6, whiteSpace: 'nowrap' }}>{step}</span>
        ))}
      </div>

      {/* Buttons */}
      <div
        style={{
          display: 'flex',
          gap: 14,
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 36
        }}
      >
        {/* Schedule consultation button */}
        <button
          className="font-poppins"
          style={{
            background: "#fff",
            color: "black",
            padding: "14px 32px",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
            border: 'none',
            boxShadow: "0 1px 8px 0 rgba(0,0,0,.04)",
            transition: "all 0.3s",
            whiteSpace: 'nowrap',
            flexGrow: 0,
          }}
        >
          Schedule consultation
        </button>

        {/* View portfolio button */}
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
            alignItems: 'center',
            whiteSpace: 'nowrap',
            flexGrow: 0,
          }}
        >
          View portfolio <span style={{ fontSize: 20, marginLeft: 8 }}>{'>'}</span>
        </button>
      </div>
    </div>
  </section>
);

export default AmenityCTASection;

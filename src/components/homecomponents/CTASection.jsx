import Skyline from '../../assets/Skyline.png';

const CTASection = () => (
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
    {/* Skyline Background Overlay - Only bottom half, shifted down */}
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

    {/* Content */}
    <div
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
        className="font-unbounded"
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
        className="font-poppins"
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
        style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          marginBottom: 32
        }}
      >
        <button
          className="font-poppins"
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
          className="font-poppins"
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
        style={{
          width: '100%',
          height: '1px',
          background: 'rgba(255, 255, 255, 0.25)',
          marginBottom: 32
        }}
      />

      {/* Links Row */}
      <div
        style={{
          display: 'flex',
          gap: 32,
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <a
          href="#"
          className="font-poppins"
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
          className="font-poppins"
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
          className="font-poppins"
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
          className="font-poppins"
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
);

export default CTASection;

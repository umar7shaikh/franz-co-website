import Webflow from '../../assets/Webflow.png';
import Relume from '../../assets/Relume.png';

const Equipment = () => {
  return (
    <section 
      className="w-full px-4 sm:px-8 lg:px-16 relative" 
      style={{ 
        backgroundColor: '#C34A36',
        paddingTop: '48px',
        paddingBottom: '48px',
        marginTop: '80px',
        overflow: 'hidden'
      }}
    >
      {/* Dotted Pattern Background - Even Lighter */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
            radial-gradient(circle, rgba(255, 255, 255, 0.05) 25%, transparent 25%)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 40px 40px',
          opacity: 1
        }}
      />

      {/* Main Container */}
      <div 
        className="relative z-10 mx-auto flex flex-col items-center text-center"
        style={{
          width: '100%',
          maxWidth: '1000px',
          gap: '24px',
          opacity: 1
        }}
      >
        {/* Heading */}
        <h2 
          className="font-unbounded"
          style={{
            fontWeight: 500,
            fontSize: '48px',
            lineHeight: '120%',
            letterSpacing: '-1%',
            color: '#FFFFFF',
            opacity: 1,
            maxWidth: '900px'
          }}
        >
          World-class fitness equipment
        </h2>

        {/* Description */}
        <p 
          className="font-poppins"
          style={{
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '150%',
            letterSpacing: '0%',
            color: '#FFFFFF',
            opacity: 1,
            maxWidth: '800px'
          }}
        >
          We specify only commercial-grade equipment with proven durability for high-traffic environments and comprehensive manufacturer warranties.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 items-center mt-2 mb-3">
          <button 
            className="font-poppins font-medium transition-all hover:bg-gray-100"
            style={{
              fontSize: '14px',
              backgroundColor: 'white',
              color: '#C34A36',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Explore
          </button>
          <button 
            className="font-poppins font-medium transition-all hover:bg-white hover:text-[#C34A36]"
            style={{
              fontSize: '14px',
              backgroundColor: 'transparent',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              border: '2px solid white',
              cursor: 'pointer'
            }}
          >
            View catalog
          </button>
        </div>

        {/* Logos - Static */}
        <div 
          className="flex items-center justify-center gap-10 flex-wrap"
          style={{
            opacity: 0.85,
            marginTop: '12px'
          }}
        >
          <img 
            src={Webflow} 
            alt="Webflow" 
            style={{ 
              height: '32px', 
              filter: 'brightness(0) invert(1)',
              objectFit: 'contain'
            }} 
          />
          <img 
            src={Relume} 
            alt="Relume" 
            style={{ 
              height: '32px', 
              filter: 'brightness(0) invert(1)',
              objectFit: 'contain'
            }} 
          />
          <img 
            src={Webflow} 
            alt="Webflow" 
            style={{ 
              height: '32px', 
              filter: 'brightness(0) invert(1)',
              objectFit: 'contain'
            }} 
          />
          <img 
            src={Relume} 
            alt="Relume" 
            style={{ 
              height: '32px', 
              filter: 'brightness(0) invert(1)',
              objectFit: 'contain'
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default Equipment;

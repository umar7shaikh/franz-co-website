import Webflow from '../../assets/Webflow.png';
import Relume from '../../assets/Relume.png';

const FitnessCta = () => {
  return (
    <section 
      className="w-full px-4 sm:px-8 lg:px-16 relative"
      style={{ 
        backgroundColor: '#C34A36',
        paddingTop: '56px',
        paddingBottom: '56px',
        marginTop: '0px',
        overflow: 'hidden'
      }}
    >
      {/* Dotted Pattern Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.09) 25%, transparent 25%),
            radial-gradient(circle, rgba(255, 255, 255, 0.12) 25%, transparent 25%)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 40px 40px',
          opacity: 1
        }}
      />
      {/* Main Content */}
      <div 
        className="relative z-10 mx-auto flex flex-col items-center text-center"
        style={{
          width: '100%',
          maxWidth: '1000px',
          gap: '20px',
          opacity: 1
        }}
      >
        {/* Heading */}
        <h2 
          className="font-unbounded"
          style={{
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '125%',
            letterSpacing: '0px',
            color: '#FFFFFF',
            opacity: 1,
            maxWidth: '900px'
          }}
        >
          Ready To Create A Fitness Amenity That Adds Value?
        </h2>
        {/* Description */}
        <p 
          className="font-poppins"
          style={{
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            letterSpacing: '0%',
            color: '#FFFFFF',
            opacity: 1,
            maxWidth: '800px',
            marginBottom: '16px'
          }}
        >
          Let’s discuss your project requirements and craft a custom solution that exceeds expectations.
        </p>
        {/* Buttons */}
       <div className="flex gap-4 items-center mb-10">
            {/* Get Custom Quote */}
            <button 
                className="font-poppins font-medium transition-all hover:bg-gray-100 text-black"
                style={{
                fontSize: '14px',
                backgroundColor: 'white',
                color: 'black', // explicitly ensure black text
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer'
                }}
            >
                Get Custom Quote
            </button>
            {/* Download Service Guide (glass effect) */}
            <button 
                className="
                font-poppins font-medium
                bg-white/30
                backdrop-blur-md
                
                text-white
                transition-all
                hover:bg-white/50 hover:text-[#C34A36]
                "
                style={{
                fontSize: '14px',
                padding: '12px 24px',
                borderRadius: '8px',
                cursor: 'pointer'
                }}
            >
                Download Service Guide
            </button>
            </div>

        {/* Logos */}
        <div 
          className="flex items-center justify-center gap-10 flex-wrap"
          style={{
            opacity: 0.85,
            marginTop: '14px'
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

export default FitnessCta;

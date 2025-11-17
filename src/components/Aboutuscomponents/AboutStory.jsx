import AboutStoryImage from '../../assets/AboutStory.png';

const AboutStory = () => (
  <section className="relative w-full py-16" style={{ marginTop: 0 }}>
    {/* BG with Overlay */}
    <div
      style={{
        position: 'absolute', inset: 0, zIndex: 0,
        width: '100%', height: '100%',
        backgroundImage: `url(${AboutStoryImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div
        style={{
          width: '100%', height: '100%',
          background: 'rgba(18,18,20,0.68)',
          backdropFilter: 'blur(7px)',
          WebkitBackdropFilter: 'blur(7px)'
        }}
      />
    </div>
    {/* Content */}
    <div
      className="relative mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-start"
      style={{
        width: '100%',
        maxWidth: '1280px',
        zIndex: 1,
        paddingLeft: 32, paddingRight: 32
      }}
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col" style={{ maxWidth: '600px', width: '100%', gap: 32 }}>
        <h2
          className="font-unbounded"
          style={{
            fontWeight: 500,
            fontSize: '40px',
            lineHeight: '120%',
            letterSpacing: '-1%',
            color: '#E68D77',
            marginBottom: 24,
            textAlign: 'left'
          }}
        >
          From A Single Project To India's<br />
          Gym Setup Specialist
        </h2>
        <div className="flex flex-row gap-8">
          {/* CARD 1 */}
          <div className="flex flex-col" style={{ minWidth: 0, flex: 1, gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#C34A36' }}>
                deployed_code
              </span>
              <h3 className="font-unbounded" style={{
                fontWeight: 600, fontSize: 20, letterSpacing: '-1%',
                color: '#fff', margin: 0, lineHeight: '140%'
              }}>
                How It Started
              </h3>
            </div>
            <p style={{
              color: '#fff', fontFamily: 'Poppins', fontSize: 14,
              fontWeight: 400, margin: 0, marginTop: 8
            }}>
              In 2016, FranzCo began with a mission to help developers deliver better fitness spaces. Our first 2,500 sq.ft. gym in Pune proved that design, equipment & construction could work perfectly together.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="flex flex-col" style={{ minWidth: 0, flex: 1, gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#C34A36' }}>
                deployed_code
              </span>
              <h3 className="font-unbounded" style={{
                fontWeight: 600, fontSize: 20, letterSpacing: '-1%', 
                color: '#fff', margin: 0, lineHeight: '140%'
              }}>
                Where We Are Now
              </h3>
            </div>
            <p style={{
              color: '#fff', fontFamily: 'Poppins', fontSize: 14,
              fontWeight: 400, margin: 0, marginTop: 8
            }}>
              Eight years later, FranzCo is India’s top commercial gym setup company — building fitness amenities that enhance real estate value and promote healthier living.
            </p>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div style={{
        width: '100%',
        maxWidth: '600px',
        color: '#fff',
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: 15,
        lineHeight: '150%',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
        <p style={{ margin: 0 }}>
          FranzCo’s story began with a simple observation — real estate developers struggled to deliver the premium fitness amenities their customers demanded. Equipment vendors lacked design expertise, architects had limited technical knowledge of gym equipment, and contractors didn’t understand the unique needs of commercial fitness spaces.
        </p>
        <p style={{ margin: 0 }}>
          In 2016, our founders took on their first project – a 2,500 sq.ft. community gym for a residential society in Pune. What started as one installation soon became a benchmark for quality and reliability. Developers quickly recognized FranzCo as a team that understood their challenges, spoke their language, and delivered on every promise.
        </p>
        <p style={{ margin: 0 }}>
          Eight years later, FranzCo has grown into India’s leading commercial gym setup company, with one mission unchanged — to create fitness amenities that add real value to real estate projects and improve lives through accessible, world-class wellness spaces.
        </p>
      </div>
    </div>
  </section>
);

export default AboutStory;

import { FiUser, FiEdit, FiLayout, FiCheckSquare } from 'react-icons/fi';

const steps = [
  {
    title: 'Step 1',
    subtitle: 'Share your project details and vision',
    icon: <FiUser size={22} color="#C34A36" />
  },
  {
    title: 'Step 2',
    subtitle: 'Get a customized proposal within 48 hours',
    icon: <FiEdit size={22} color="#C34A36" />
  },
  {
    title: 'Step 3',
    subtitle: 'Review 3D designs and equipment selection',
    icon: <FiLayout size={22} color="#C34A36" />
  },
  {
    title: 'Step 4',
    subtitle: "Approve and we'll handle the rest",
    icon: <FiCheckSquare size={22} color="#C34A36" />
  }
];

const Steps = () => (
  <section
    style={{
      background: 'white',
      width: '100%',
      paddingTop: 80,
      paddingBottom: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <div
      style={{
        width: 1280,
        maxWidth: 1280,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 40
      }}
    >
      {/* TOP CONTENT */}
      <div style={{ width: '100%', marginBottom: 36 }}>
        <div className="font-poppins" style={{ color: '#C34A36', fontWeight: 600, fontSize: 13, marginBottom: 14, letterSpacing: 1 }}>
          START YOUR PROJECT
        </div>
        <h2
          className="font-unbounded"
          style={{
            fontWeight: 700,
            fontSize: 38,
            lineHeight: '115%',
            color: '#3B2327',
            marginBottom: 32
          }}
        >
          Let&apos;s Design the Amenity That<br />Sets Your Project Apart
        </h2>
        <div style={{ display: 'flex', gap: 16 }}>
          <button
            className="font-poppins"
            style={{
              background: '#F9ECEA',
              border: 'none',
              color: '#C34A36',
              padding: '7px 24px',
              borderRadius: 7,
              fontWeight: 500,
              fontSize: 14,
              cursor: 'pointer'
            }}
          >Button</button>
          <button
            className="font-poppins"
            style={{
              background: 'white',
              border: 'none',
              color: '#C34A36',
              padding: '7px 10px',
              fontWeight: 500,
              fontSize: 14,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            Contact
            <span style={{ marginLeft: 5, fontSize: 20, lineHeight: 1 }}>›</span>
          </button>
        </div>
      </div>

      {/* STEPS */}
      <div
        style={{
          width: '100%',
          marginTop: 26,
          display: 'flex',
          gap: 30,
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}
      >
        {steps.map((step, idx) => (
          <div
            key={idx}
            style={{
              flex: 1,
              minWidth: 220,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            {(idx % 2 === 1) && (
              <>
                <div className="font-unbounded" style={{
                  color: '#C34A36',
                  fontWeight: 700,
                  fontSize: 22
                }}>
                  {step.title}
                </div>
                <div
                  className="font-poppins"
                  style={{
                    fontWeight: 500,
                    fontSize: 17,
                    color: '#3B2327',
                    marginBottom: 6,
                    marginTop: 2
                  }}
                >
                  {step.subtitle}
                </div>
              </>
            )}
            {/* Icon Bar */}
            <div style={{
              width: '100%',
              height: 36,
              background: 'linear-gradient(90deg, #F9ECEA 80%, #fff 100%)',
              borderRadius: 28,
              display: 'flex',
              alignItems: 'center',
              margin: '8px 0 8px 0',
              paddingLeft: 14
            }}>
              {step.icon}
            </div>
            {(idx % 2 === 0) && (
              <>
                <div className="font-unbounded" style={{
                  color: '#C34A36',
                  fontWeight: 700,
                  fontSize: 22
                }}>
                  {step.title}
                </div>
                <div
                  className="font-poppins"
                  style={{
                    fontWeight: 500,
                    fontSize: 17,
                    color: '#3B2327',
                    marginTop: 6,
                    marginBottom: 2
                  }}
                >
                  {step.subtitle}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Steps;

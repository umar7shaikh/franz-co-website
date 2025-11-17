import BgImage from '../../assets/AddServices.jpg';
import { FaUserTie, FaUserPlus, FaLeaf, FaCameraRetro } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { BiTask } from "react-icons/bi";

const cards = [
  {
    icon: <MdDesignServices size={32} color="#F9ECEA" />,
    title: "Interior Design Coordination",
    subtitle: "Seamless integration with overall property design language. Investment: ₹50,000 - 2 Lakhs."
  },
  {
    icon: <BiTask size={32} color="#F9ECEA" />,
    title: "Signage & Branding",
    subtitle: "Custom wayfinding, motivational graphics, branded elements. Investment: ₹25,000 - 1 Lakh."
  },
  {
    icon: <FaCameraRetro size={32} color="#F9ECEA" />,
    title: "Photography & Marketing Assets",
    subtitle: "Professional photography and video for marketing materials. Investment: ₹30,000 - 80,000."
  },
  {
    icon: <FaUserTie size={32} color="#F9ECEA" />,
    title: "Operational Staffing Solutions",
    subtitle: "Trainer recruitment, facility manager placement. Investment: As per requirement."
  },
  {
    icon: <FaLeaf size={32} color="#F9ECEA" />,
    title: "Sustainability Audit",
    subtitle: "Energy efficiency review and eco-friendly recommendations. Investment: ₹35,000 - 75,000."
  },
  {
    icon: <FaUserPlus size={32} color="#F9ECEA" />,
    title: "Member Onboarding Program",
    subtitle: "Structured program to maximize amenity adoption. Investment: ₹40,000 - 1.5 Lakhs."
  }
];

const AddServices = () => (
  <section className="relative w-full" style={{ minHeight: 550 }}>
    {/* Background layer */}
    <div
      style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%', height: '100%'
      }}
    >
      <div
        style={{
          width: '100%', height: '100%',
          background: 'rgba(18,18,20,0.68)',
          backdropFilter: 'blur(7px)',
          WebkitBackdropFilter: 'blur(7px)'
        }}
      />
    </div>

    {/* Content layer */}
    <div className="relative z-10 flex flex-col items-center w-full" style={{ padding: '54px 0' }}>
      <h2
        className="font-unbounded text-center mb-4"
        style={{
          color: "#F3DAD6",
          fontFamily: "Unbounded, sans-serif",
          fontWeight: 500,
          fontSize: '40px',
          lineHeight: '120%',
          letterSpacing: '-1%',
        }}
      >
        Additional Services to<br />
        Maximize Your Investment
      </h2>
      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[1000px] mb-8 mt-6">
        {cards.map((card, idx) => (
          <div key={idx} className="flex flex-col items-center text-center px-3">
            <div className="mb-2">{card.icon}</div>
            <h3
              className="font-unbounded mb-2"
              style={{
                color: "#F3DAD6",
                fontFamily: "Unbounded, sans-serif",
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '140%',
                letterSpacing: '-1%',
                textAlign: 'center'
              }}
            >
              {card.title}
            </h3>
            <p
              className="font-poppins"
              style={{
                color: "#F2F2F2",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '150%',
                letterSpacing: '0%',
                textAlign: 'center'
              }}
            >
              {card.subtitle}
            </p>
          </div>
        ))}
      </div>
      {/* Action buttons */}
            <div className="flex gap-4 mt-8">
  {/* About Us button with blurred glass effect, semi-transparent white bg, white border */}
  <button
    className="font-poppins font-medium px-6 py-2 rounded-md"
    style={{
      background: "rgba(255,255,255,0.10)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      color: "#fff"
    }}
  >
    About Us
  </button>
  {/* Contact button with no border, transparent background, just an arrow */}
  <button
    className="font-poppins font-medium px-6 py-2 rounded-md flex items-center gap-2"
    style={{
      background: "transparent",
      border: "none",
      color: "#fff"
    }}
  >
    Contact <span style={{ fontSize: 18, display: "inline-block" }}>{">"}</span>
  </button>
</div>

    </div>
  </section>
);

export default AddServices;
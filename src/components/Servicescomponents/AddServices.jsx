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
  <section className="relative w-full min-h-[550px]">
    {/* Background layer */}
    <div
      className="absolute inset-0 z-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="w-full h-full bg-[rgba(18,18,20,0.68)] backdrop-blur-[7px]" />
    </div>

    {/* Content layer */}
    <div
      className="relative z-10 flex flex-col items-center w-full px-4 sm:px-6 md:px-8"
      style={{ paddingTop: 54, paddingBottom: 54 }}
    >
      <h2
        className="font-unbounded text-center mb-4 text-[28px] sm:text-[36px] md:text-[40px] leading-[120%] tracking-[-1%] text-[#F3DAD6]"
        style={{ fontWeight: 500 }}
      >
        Additional Services to<br />
        Maximize Your Investment
      </h2>

      {/* Services grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-[1000px] mb-8 mt-6">
        {cards.map((card, idx) => (
          <div key={idx} className="flex flex-col items-center text-center px-2 sm:px-3">
            <div className="mb-2">{card.icon}</div>
            <h3
              className="font-unbounded mb-2 text-[16px] sm:text-[18px] text-[#F3DAD6]"
              style={{ fontWeight: 500, lineHeight: '140%', letterSpacing: '-1%' }}
            >
              {card.title}
            </h3>
            <p
              className="font-poppins text-[#F2F2F2] text-[13px] sm:text-[15px]"
              style={{ fontWeight: 400, lineHeight: '150%' }}
            >
              {card.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button
          className="font-poppins font-medium px-6 py-2 rounded-md w-full sm:w-auto text-white"
          style={{
            background: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          About Us
        </button>
        <button
          className="font-poppins font-medium px-6 py-2 rounded-md w-full sm:w-auto flex items-center gap-2 text-white bg-transparent"
          style={{ border: "none" }}
        >
          Contact <span style={{ fontSize: 18, display: "inline-block" }}>{">"}</span>
        </button>
      </div>
    </div>
  </section>
);

export default AddServices;

import { FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { GiGears } from "react-icons/gi";
import Leadership1 from '../../assets/Leadership1.png';
import Leadership2 from '../../assets/Leadership2.png';
import Leadership3 from '../../assets/Leadership3.png';
import Leadership4 from '../../assets/Leadership4.png';

const leaders = [
  {
    name: "RAJESH MEHTA",
    title: "Founder & Managing Director",
    desc: "With over 18 years in commercial fitness and real estate development, Rajesh founded Franc2o with a vision to professionalise gym installations in India. A certified fitness professional and former project manager at a leading construction firm, he brings the rare combination of technical fitness knowledge and project management expertise.",
    img: Leadership1,
    icons: [<FaLinkedinIn />, <MdMailOutline />, <GiGears />]
  },
  {
    name: "PRIYA DESHMUKH",
    title: "Director - Operations & Client Success",
    desc: "Priya ensures that Franc2o's reputation for flawless execution manifests intact across every project. With 14+ years managing large-scale B2B service operations, she's built the systems that enable our 95%+ on-time delivery rate.",
    img: Leadership2,
    icons: [<FaLinkedinIn />, <MdMailOutline />, <GiGears />]
  },
  {
    name: "VIKRAM SHAH",
    title: "Head - Design & Engineering",
    desc: "Vikram leads our design practice, where functionality meets aesthetics. His background in sports architecture and mechanical engineering ensures our gyms are not just beautiful, but structurally sound and optimized for equipment performance.",
    img: Leadership3,
    icons: [<FaLinkedinIn />, <MdMailOutline />, <GiGears />]
  },
  {
    name: "ANITA KULKARNI",
    title: "Head - Procurement & Vendor Relations",
    desc: "Anita manages relationships with 25+ international equipment manufacturers and 100+ local vendors. Her negotiation skills and quality control processes ensure we procure the best equipment at competitive prices while maintaining uncompromising standards.",
    img: Leadership4,
    icons: [<FaLinkedinIn />, <MdMailOutline />, <GiGears />]
  }
];

const Leadership = () => (
  <>
    {/* MOBILE-ONLY STYLES */}
    <style>
      {`
        @media (max-width: 767px) {
          .leadership-section {
            padding: 40px 16px !important;
          }

          .leadership-main-heading {
            font-size: 28px !important;
            line-height: 1.2 !important;
            margin-bottom: 24px !important;
            text-align: center !important;
          }

          .leadership-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            width: 100% !important;
            max-width: 100% !important;
          }

          .leadership-card {
            width: 100% !important;
            max-width: 100% !important;
            border-radius: 16px !important;
            overflow: hidden !important;
            box-shadow: 0 4px 16px rgba(0,0,0,0.08) !important;
            height: auto !important;
            transform: none !important;
            transition: none !important;
          }

          .leadership-card:hover {
            transform: none !important;
            scale: 1 !important;
          }

          .leadership-image {
            height: 200px !important;
            min-height: 160px !important;
            max-height: 200px !important;
            object-fit: cover !important;
            border-radius: 12px !important;
          }

          .leadership-content {
            padding: 20px !important;
            flex: none !important;
          }

          .leadership-name {
            font-size: 18px !important;
            line-height: 1.3 !important;
            margin-bottom: 8px !important;
            text-align: left !important;
          }

          .leadership-title {
            font-size: 14px !important;
            line-height: 1.4 !important;
            margin-bottom: 12px !important;
          }

          .leadership-desc {
            font-size: 13px !important;
            line-height: 1.5 !important;
            margin-bottom: 16px !important;
          }

          .leadership-icons {
            gap: 12px !important;
            text-size: 18px !important;
          }

          .leadership-hiring {
            padding: 20px !important;
            text-align: center !important;
          }

          .leadership-hiring-heading {
            font-size: 20px !important;
            margin-bottom: 12px !important;
          }

          .leadership-hiring-text {
            font-size: 14px !important;
            margin-bottom: 16px !important;
          }

          .leadership-hiring-btn {
            width: 100% !important;
            max-width: 100% !important;
            padding: 12px 20px !important;
            font-size: 14px !important;
            justify-content: center !important;
          }

          /* Disable hover effects on mobile */
          .leadership-card:hover {
            background: #F7EEEC !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }
        }
      `}
    </style>

    <section id="leadership-section" className="w-full bg-[#F7EEEC] py-16 px-0 leadership-section">
      <div className="max-w-[1440px] mx-auto px-4">
        <h2 className="font-unbounded text-4xl font-bold mb-10 leadership-main-heading" style={{color: "#3A1610"}}>
          Leadership Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 leadership-grid">
          {leaders.map((leader, idx) => (
            <div
              key={leader.name}
              className="rounded-xl overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:scale-105 leadership-card"
              style={{
                background: "#F7EEEC"
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = "rgba(247,238,236,0.72)";
                e.currentTarget.style.backdropFilter = "blur(12px)";
                e.currentTarget.style.WebkitBackdropFilter = "blur(12px)";
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = "#F7EEEC";
                e.currentTarget.style.backdropFilter = "";
                e.currentTarget.style.WebkitBackdropFilter = "";
              }}
            >
              <img
                src={leader.img}
                alt={leader.name}
                className="w-full h-[240px] object-cover object-center mb-0 leadership-image"
                style={{borderRadius: "12px 12px 12px 12px"}}
              />
              <div className="px-6 py-6 flex flex-col flex-1 leadership-content">
                <div className="font-unbounded text-xs font-bold tracking-wide mb-1 leadership-name" style={{color: "#3A1610"}}>
                  {leader.name}
                </div>
                <div
                  className="text-[15px] mb-2 mt-0.5 font-semibold leadership-title"
                  style={{color: "#C34A36"}}
                >
                  {leader.title}
                </div>
                <div className="font-poppins text-[14px] text-[#594336] leading-snug mb-4 leadership-desc">
                  {leader.desc}
                </div>
                <div className="flex flex-row gap-3 mt-auto text-[#C34A36] text-lg leadership-icons">
                  {leader.icons.map((Icon, i) => (
                    <span key={i} className="hover:text-[#a43d36] transition">{Icon}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-transparent rounded-xl mt-6 flex items-center flex-wrap px-2 leadership-hiring">
          <div>
            <h3 className="font-unbounded text-2xl mb-1 font-bold leadership-hiring-heading" style={{color: "#3A1610"}}>We're hiring!</h3>
            <p className="font-poppins text-base text-[#594336] mb-4 leadership-hiring-text">
              Our team is growing fast and we're always looking for smart people.
            </p>
            <button className="bg-[#F6E0D8] text-[#C34A36] rounded-lg px-5 py-2 font-poppins font-medium hover:bg-[#f8ebea] transition-colors leadership-hiring-btn">
              View Open positions
            </button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Leadership;

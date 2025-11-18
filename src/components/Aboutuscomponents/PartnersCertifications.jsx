import { FaCube, FaCheck } from "react-icons/fa";
import PartnersCertifications1 from '../../assets/PartnersCertifications1.png';
import PartnersCertifications2 from '../../assets/PartnersCertifications2.png';
import PartnersCertifications3 from '../../assets/PartnersCertifications3.png';

const partners = [
  "Technogym (Italy)", "Life Fitness (USA)", "Matrix Fitness", "Precor", "Hammer Strength", "Rogue Fitness"
];

const memberships = [
  "CREDAI", "IHRSA", "Fitness Industry Council of India", "IGBC (Associate Member)"
];

const certifications = [
  "ISO 9001:2015 (Quality Management)",
  "ISO 14001:2015 (Environmental Management)",
  "ISO 45001:2018 (Occupational Health & Safety)",
  "BIS Certified Equipment Standards",
  "RERA Registered Amenity Services Provider"
];

const PartnersCertifications = () => (
  <>
    {/* MOBILE-ONLY STYLES */}
    <style>
      {`
        @media (max-width: 767px) {
          .partners-section {
            padding: 40px 16px !important;
          }

          .partners-main-heading {
            font-size: 28px !important;
            line-height: 1.2 !important;
            margin-bottom: 16px !important;
            text-align: center !important;
          }

          .partners-subtitle {
            font-size: 14px !important;
            line-height: 1.4 !important;
            margin-bottom: 24px !important;
            max-width: 100% !important;
            padding: 0 16px !important;
          }

          .partners-main-container {
            flex-direction: column !important;
            gap: 16px !important;
            width: 100% !important;
            max-width: 100% !important;
          }

          .partners-left-column {
            width: 100% !important;
            gap: 16px !important;
          }

          .partners-card {
            width: 100% !important;
            max-width: 100% !important;
            border-radius: 16px !important;
            height: auto !important;
            padding: 20px !important;
            overflow: hidden !important;
            box-shadow: 0 4px 16px rgba(0,0,0,0.08) !important;
          }

          .partners-cert-card {
            width: 100% !important;
            max-width: 100% !important;
            border-radius: 16px !important;
            height: auto !important;
            padding: 20px !important;
            overflow: hidden !important;
            box-shadow: 0 4px 16px rgba(0,0,0,0.08) !important;
          }

          .partners-icon {
            width: 32px !important;
            height: 32px !important;
          }

          .partners-card-heading {
            font-size: 18px !important;
            line-height: 1.3 !important;
            margin: 12px 0 !important;
          }

          .partners-partners-text {
            font-size: 13px !important;
            line-height: 1.4 !important;
            margin-bottom: 16px !important;
            flex-grow: 1 !important;
          }

          .partners-cert-heading {
            font-size: 20px !important;
            line-height: 1.3 !important;
            margin-bottom: 16px !important;
          }

          .partners-cert-list {
            margin-bottom: 20px !important;
          }

          .partners-cert-item {
            font-size: 13px !important;
            line-height: 1.5 !important;
            margin-bottom: 12px !important;
            gap: 8px !important;
          }

          .partners-cert-check {
            width: 16px !important;
            height: 16px !important;
          }

          .partners-cert-buttons {
            flex-direction: column !important;
            gap: 8px !important;
            margin-bottom: 20px !important;
          }

          .partners-cert-btn {
            width: 100% !important;
            max-width: 100% !important;
            padding: 12px !important;
            font-size: 14px !important;
            text-align: center !important;
          }

          .partners-icons-row {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .partners-icon-item {
            width: 100% !important;
            max-width: 200px !important;
            align-items: center !important;
          }

          .partners-cert-image {
            height: 48px !important;
            width: auto !important;
            margin-bottom: 8px !important;
          }

          .partners-cert-label {
            font-size: 11px !important;
            line-height: 1.3 !important;
            text-align: center !important;
          }

          .partners-card-btn {
            width: 100% !important;
            padding: 8px 12px !important;
            font-size: 13px !important;
            text-align: center !important;
            gap: 4px !important;
          }
        }
      `}
    </style>

    <section className="w-full bg-[#F5F5F5] py-20 px-4 sm:px-8 lg:px-16 partners-section">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold font-unbounded text-[#3A1610] partners-main-heading">
          Partners & Certifications
        </h2>
        <p className="text-[#664A32] mt-2 max-w-3xl mx-auto partners-subtitle">
          Building trusted partnerships and certifications that demonstrate our commitment to quality, safety, and innovation in commercial fitness and wellness.
        </p>
      </div>

      {/* Main content flex container */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-[1280px] mx-auto partners-main-container">
        {/* Left column: two cards */}
        <div className="flex flex-col gap-8 lg:gap-10 lg:w-1/3 partners-left-column">
          {/* Equipment Partners */}
          <div
            className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col h-[316px] partners-card"
            style={{ minWidth: 0 }}
          >
            <FaCube color="#C34A36" size={32} className="partners-icon" />
            <h3 className="font-unbounded font-semibold text-[#3A1610] text-lg mt-4 mb-2 partners-card-heading">
              Equipment Partners
            </h3>
            <p className="font-poppins text-sm text-[#3A1610] leading-snug flex-grow partners-partners-text">
              {partners.join(" | ")}
            </p>
            <button className="text-[#C34A36] font-poppins font-medium mt-auto inline-flex items-center gap-1 text-sm w-fit partners-card-btn">
              Button <span className="text-lg">{'>'}</span>
            </button>
          </div>

          {/* Industry Memberships */}
          <div
            className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col h-[316px] partners-card"
            style={{ minWidth: 0 }}
          >
            <FaCube color="#C34A36" size={32} className="partners-icon" />
            <h3 className="font-unbounded font-semibold text-[#3A1610] text-lg mt-4 mb-2 partners-card-heading">
              Industry Memberships
            </h3>
            <p className="font-poppins text-sm text-[#3A1610] leading-snug flex-grow partners-partners-text">
              {memberships.join(" | ")}
            </p>
            <button className="text-[#C34A36] font-poppins font-medium mt-auto inline-flex items-center gap-1 text-sm w-fit partners-card-btn">
              Button <span className="text-lg">{'>'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Certifications */}
        <div
          className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col justify-between lg:w-2/3 h-[664px] partners-cert-card"
          style={{ minWidth: 0 }}
        >
          <h3 className="font-unbounded font-semibold text-[#C34A36] text-2xl partners-cert-heading">
            Certifications
          </h3>
          <ul className="font-poppins text-sm text-[#3A1610] mb-8 space-y-2 partners-cert-list">
            {certifications.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-2 partners-cert-item">
                <FaCheck className="mt-1 text-[#C34A36] flex-shrink-0 partners-cert-check" size={14} />
                <span>{cert}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 mb-8 partners-cert-buttons">
            <button className="font-poppins font-semibold text-[#C34A36] text-sm px-3 py-1 rounded bg-[#F6E0D8] partners-cert-btn">
              Button
            </button>
            <button className="font-poppins font-semibold text-[#C34A36] text-sm inline-flex items-center gap-1 partners-cert-btn">
              Button <span className="text-lg">{'>'}</span>
            </button>
          </div>

          {/* Certification icons row */}
          <div className="flex gap-6 flex-wrap items-end justify-start partners-icons-row">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col items-center w-24 partners-icon-item">
                <img src={PartnersCertifications1} alt={`ISO Certification ${i}`} className="h-16 w-auto partners-cert-image" />
                <p className="font-poppins text-xs mt-1 text-center text-[#00539F] partners-cert-label">
                  {i === 0 && 'ISO 9001:2015'}
                  {i === 1 && 'ISO 14001:2015'}
                  {i === 2 && 'ISO 45001:2018'}
                  <br />
                  {i === 0 && 'Quality Management'}
                  {i === 1 && 'Environmental Management'}
                  {i === 2 && 'Occupational Health & Safety'}
                </p>
              </div>
            ))}
            <div className="flex flex-col items-center w-24 partners-icon-item">
              <img src={PartnersCertifications2} alt="RERA" className="h-16 w-auto partners-cert-image" />
              <p className="font-poppins text-xs mt-7 text-center text-[#C34A36] partners-cert-label">
                RERA 
              </p>
            </div>
            <div className="flex flex-col items-center w-24 partners-icon-item">
              <img src={PartnersCertifications3} alt="BIS" className="h-16 w-auto partners-cert-image" />
              <p className="font-poppins text-xs mt-1 text-center text-[#C34A36] partners-cert-label">
                BIS Certified Equipment Standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PartnersCertifications;

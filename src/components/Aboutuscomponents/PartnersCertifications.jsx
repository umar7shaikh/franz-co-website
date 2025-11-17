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
  <section
    className="w-full bg-[#F5F5F5] py-20 px-4 sm:px-8 lg:px-16"
  >
    {/* Header */}
    <div className="max-w-[1280px] mx-auto text-center mb-10">
      <h2 className="text-4xl font-bold font-unbounded text-[#3A1610]">
        Partners & Certifications
      </h2>
      <p className="text-[#664A32] mt-2 max-w-3xl mx-auto">
        Building trusted partnerships and certifications that demonstrate our commitment to quality, safety, and innovation in commercial fitness and wellness.
      </p>
    </div>

    {/* Main content flex container */}
    <div className="flex flex-col lg:flex-row gap-8 max-w-[1280px] mx-auto">
      {/* Left column: two cards */}
      <div className="flex flex-col gap-8 lg:gap-10 lg:w-1/3">
        {/* Equipment Partners */}
        <div
          className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col h-[316px]"
          style={{ minWidth: 0 }}
        >
          <FaCube color="#C34A36" size={32} />
          <h3 className="font-unbounded font-semibold text-[#3A1610] text-lg mt-4 mb-2">
            Equipment Partners
          </h3>
          <p className="font-poppins text-sm text-[#3A1610] leading-snug flex-grow">
            {partners.join(" | ")}
          </p>
          <button className="text-[#C34A36] font-poppins font-medium mt-auto inline-flex items-center gap-1 text-sm w-fit">
            Button <span className="text-lg">{'>'}</span>
          </button>
        </div>

        {/* Industry Memberships */}
        <div
          className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col h-[316px]"
          style={{ minWidth: 0 }}
        >
          <FaCube color="#C34A36" size={32} />
          <h3 className="font-unbounded font-semibold text-[#3A1610] text-lg mt-4 mb-2">
            Industry Memberships
          </h3>
          <p className="font-poppins text-sm text-[#3A1610] leading-snug flex-grow">
            {memberships.join(" | ")}
          </p>
          <button className="text-[#C34A36] font-poppins font-medium mt-auto inline-flex items-center gap-1 text-sm w-fit">
            Button <span className="text-lg">{'>'}</span>
          </button>
        </div>
      </div>

      {/* Right Column: Certifications */}
      <div
        className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col justify-between lg:w-2/3 h-[664px]"
        style={{ minWidth: 0 }}
      >
        <h3 className="font-unbounded font-semibold text-[#C34A36] text-2xl ">
          Certifications
        </h3>
        <ul className="font-poppins text-sm text-[#3A1610] mb-8 space-y-2">
          {certifications.map((cert, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheck className="mt-1 text-[#C34A36] flex-shrink-0" size={14} />
              <span>{cert}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 mb-8">
          <button className="font-poppins font-semibold text-[#C34A36] text-sm px-3 py-1 rounded bg-[#F6E0D8]">
            Button
          </button>
          <button className="font-poppins font-semibold text-[#C34A36] text-sm inline-flex items-center gap-1">
            Button <span className="text-lg">{'>'}</span>
          </button>
        </div>

        {/* Certification icons row */}
        <div className="flex gap-6 flex-wrap items-end justify-start">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center w-24">
              <img src={PartnersCertifications1} alt={`ISO Certification ${i}`} className="h-16 w-auto" />
              <p className="font-poppins text-xs mt-1 text-center text-[#00539F]">
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
          <div className="flex flex-col items-center w-24 ">
            <img src={PartnersCertifications2} alt="RERA" className="h-16 w-auto" />
            <p className="font-poppins text-xs mt-7 text-center text-[#C34A36]">
              RERA 
            </p>
          </div>
          <div className="flex flex-col items-center w-24">
            <img src={PartnersCertifications3} alt="BIS" className="h-16 w-auto" />
            <p className="font-poppins text-xs mt-1 text-center text-[#C34A36]">
              BIS Certified Equipment Standards
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PartnersCertifications;

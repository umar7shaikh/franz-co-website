import CommitmentImg from '../../assets/Commitment.png';
import { FaHeart, FaLeaf, FaUsers, FaAward } from 'react-icons/fa';

const commitments = [
  {
    icon: <FaHeart className="text-white text-xl mb-2" />,
    label: 'QUALITY',
    desc: 'Every installation meets international standards with commercial-grade equipment backed by comprehensive warranties.',
  },
  {
    icon: <FaLeaf className="text-white text-xl mb-2" />,
    label: 'SUSTAINABILITY',
    desc: 'We prioritize energy-efficient equipment, sustainable materials, and long-term solutions that reduce environmental impact.',
  },
  {
    icon: <FaUsers className="text-white text-xl mb-2" />,
    label: 'COMMUNITIES',
    desc: "10% of our annual profits go toward creating free community fitness spaces in underserved neighborhoods. Fitness shouldn't be a privilege.",
  },
  {
    icon: <FaAward className="text-white text-xl mb-2" />,
    label: 'EXCELLENCE',
    desc: 'Continuous learning, technology adoption, and process improvement drive us to set new benchmarks with every project.',
  },
];

const Commitment = () => (
  <section className="w-full bg-[#C14D39] py-20 px-4 sm:px-8 lg:px-16">
    <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 items-center">
      {/* Left: Image */}
      <div className="rounded-2xl overflow-hidden flex-shrink-0" style={{ width: 500, height: 400 }}>
        <img src={CommitmentImg} alt="Commitment" className="w-full h-full object-cover" />
      </div>
      {/* Right: Commitments */}
      <div className="flex-1 flex flex-col items-start justify-center">
        <h2 className="font-unbounded text-4xl font-bold text-white mb-4 tracking-tight">
          OUR COMMITMENT
        </h2>
        <div className="w-full h-px bg-white/40 mb-8" />
        <div className="grid grid-cols-2 gap-x-14 gap-y-10 w-full mb-8">
          {commitments.map(({ icon, label, desc }, idx) => (
            <div key={idx} className="flex flex-col items-start">
              {icon}
              <div className="font-unbounded font-bold text-white text-base mb-1">{label}</div>
              <div className="font-poppins text-xs text-white/90">{desc}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-2">
          <button className="bg-white text-[#C34A36] px-5 py-2 font-poppins font-semibold text-sm rounded transition hover:bg-[#F6E0D8]">
            Services
          </button>
          <button className="text-white font-poppins font-semibold text-sm inline-flex items-center gap-1">
            Contact <span className="text-lg">{'>'}</span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Commitment;

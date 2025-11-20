import { useNavigate } from 'react-router-dom';
import CommitmentImg from '../../assets/Commitment.png';
import { FaHeart, FaLeaf, FaUsers, FaAward } from 'react-icons/fa';

const commitments = [
  {
    icon: FaHeart,
    label: 'QUALITY',
    desc: 'Every installation meets international standards with commercial-grade equipment backed by comprehensive warranties.',
  },
  {
    icon: FaLeaf,
    label: 'SUSTAINABILITY',
    desc: 'We prioritize energy-efficient equipment, sustainable materials, and long-term solutions that reduce environmental impact.',
  },
  {
    icon: FaUsers,
    label: 'COMMUNITIES',
    desc: "10% of our annual profits go toward creating free community fitness spaces in underserved neighborhoods. Fitness shouldn't be a privilege.",
  },
  {
    icon: FaAward,
    label: 'EXCELLENCE',
    desc: 'Continuous learning, technology adoption, and process improvement drive us to set new benchmarks with every project.',
  },
];

// Helper function to render icons with responsive sizing
const renderIcon = (IconComponent, isMobile = false) => (
  <IconComponent 
    className={`text-white ${isMobile ? 'text-3xl mb-3' : 'text-xl mb-2'}`}
    style={isMobile ? { width: '40px', height: '40px' } : {}}
  />
);

const Commitment = () => {
  const navigate = useNavigate();
  
  const handleServicesClick = () => {
    navigate('/services');
  };
  
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <>
      {/* MOBILE-ONLY STYLES */}
      <style>
        {`
          @media (max-width: 767px) {
            .commitment-section {
              padding: 40px 16px !important;
            }

            .commitment-main-container {
              flex-direction: column !important;
              gap: 24px !important;
              width: 100% !important;
              max-width: 100% !important;
              align-items: center !important;
              text-align: center !important;
            }

            .commitment-image {
              width: 100% !important;
              max-width: 100% !important;
              height: 250px !important;
              border-radius: 16px !important;
              flex-shrink: 0 !important;
              object-fit: cover !important;
            }

            .commitment-content {
              width: 100% !important;
              max-width: 100% !important;
              align-items: center !important;
              padding: 0 8px !important;
            }

            .commitment-heading {
              font-size: 28px !important;
              line-height: 1.2 !important;
              margin-bottom: 16px !important;
              text-align: center !important;
            }

            .commitment-divider {
              width: 100% !important;
              max-width: 200px !important;
              margin: 0 auto 24px !important;
              height: 2px !important;
            }

            .commitment-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
              width: 100% !important;
              margin-bottom: 24px !important;
            }

            .commitment-item {
              width: 100% !important;
              align-items: center !important;
              text-align: center !important;
              padding: 16px 0 !important;
            }

            .commitment-icon-desktop {
              width: 40px !important;
              height: 40px !important;
              margin-bottom: 12px !important;
            }

            .commitment-label {
              font-size: 18px !important;
              line-height: 1.3 !important;
              margin-bottom: 8px !important;
              text-align: center !important;
            }

            .commitment-desc {
              font-size: 14px !important;
              line-height: 1.5 !important;
              text-align: center !important;
              max-width: 100% !important;
            }

            .commitment-buttons {
              flex-direction: column !important;
              gap: 12px !important;
              width: 100% !important;
              align-items: center !important;
            }

            .commitment-primary-btn {
              width: 100% !important;
              max-width: 280px !important;
              padding: 12px 20px !important;
              font-size: 14px !important;
              text-align: center !important;
              justify-content: center !important;
            }

            .commitment-secondary-btn {
              width: 100% !important;
              max-width: 280px !important;
              padding: 12px 20px !important;
              font-size: 14px !important;
              text-align: center !important;
              gap: 8px !important;
              justify-content: center !important;
            }

            .commitment-secondary-icon {
              font-size: 16px !important;
            }
          }
        `}
      </style>

      <section className="w-full bg-[#C14D39] py-20 px-4 sm:px-8 lg:px-16 commitment-section">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 items-center commitment-main-container">
          {/* Left: Image */}
          <div className="rounded-2xl overflow-hidden flex-shrink-0 commitment-image" style={{ width: 500, height: 400 }}>
            <img src={CommitmentImg} alt="Commitment" className="w-full h-full object-cover" />
          </div>
          {/* Right: Commitments */}
          <div className="flex-1 flex flex-col items-start justify-center commitment-content">
            <h2 className="font-unbounded text-4xl font-bold text-white mb-4 tracking-tight commitment-heading">
              OUR COMMITMENT
            </h2>
            <div className="w-full h-px bg-white/40 mb-8 commitment-divider" />
            <div className="grid grid-cols-2 gap-x-14 gap-y-10 w-full mb-8 commitment-grid">
              {commitments.map(({ icon: IconComponent, label, desc }, idx) => (
                <div key={idx} className="flex flex-col items-start commitment-item">
                  {/* Desktop: Original icon rendering */}
                  <span className="hidden lg:block">
                    <IconComponent className="text-white text-xl mb-2" />
                  </span>
                  {/* Mobile: Enhanced icon with responsive sizing */}
                  <span className="lg:hidden">
                    <IconComponent className="commitment-icon-desktop text-white text-3xl mb-3" style={{ width: '40px', height: '40px' }} />
                  </span>
                  <div className="font-unbounded font-bold text-white text-base mb-1 commitment-label">{label}</div>
                  <div className="font-poppins text-xs text-white/90 commitment-desc">{desc}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-2 commitment-buttons">
              <button 
                className="bg-white text-[#C34A36] px-5 py-2 font-poppins font-semibold text-sm rounded transition hover:bg-[#F6E0D8] commitment-primary-btn"
                onClick={handleServicesClick}
              >
                Services
              </button>
              <button 
                className="text-white font-poppins font-semibold text-sm inline-flex items-center gap-1 commitment-secondary-btn"
                onClick={handleContactClick}
              >
                Contact <span className="text-lg commitment-secondary-icon">{'>'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commitment;

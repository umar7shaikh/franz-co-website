import Serve1 from '../../assets/serve1.png';
import Serve2 from '../../assets/serve2.png';
import Serve3 from '../../assets/serve3.png';

const serveData = [
  {
    label: "REAL ESTATE DEVELOPERS",
    description: "From boutique builders to developers, we help create amenities that differentiate properties & accelerate sales.",
    clients: [
      "Kumar Properties", "Kolte-Patil", "Brigade Group", "Lodha Group", "Godrej Properties", "DLF Limited", "Prestige Group"
    ],
    image: Serve1
  },
  {
    label: "CORPORATE ENTERPRISES",
    description: "We design executive fitness centers for campuses where talent attraction and employee wellness are strategic priorities.",
    clients: [
      "Tech Mahindra", "Infosys", "Wipro", "Goldman Sachs", "Deloitte", "Microsoft India", "SAP Labs"
    ],
    image: Serve2
  },
  {
    label: "HOSPITALITY GROUPS",
    description: "Hotels and resorts trust us to create guest fitness experiences that enhance property ratings and satisfaction scores.",
    clients: [
      "Marriott International", "ITC Hotels", "Taj Group", "Lemon Tree Hotels", "Hyatt", "Radisson"
    ],
    image: Serve3
  }
];

const Serve = () => (
  <>
    {/* MOBILE-ONLY STYLES */}
    <style>
      {`
        @media (max-width: 767px) {
          .serve-section {
            padding: 40px 16px !important;
          }

          .serve-main-heading {
            font-size: 28px !important;
            line-height: 1.2 !important;
            margin-bottom: 32px !important;
            text-align: center !important;
          }

          .serve-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            width: 100% !important;
            max-width: 100% !important;
          }

          .serve-card {
            width: 100% !important;
            max-width: 100% !important;
            border-radius: 16px !important;
            overflow: hidden !important;
            min-height: 320px !important;
            height: auto !important;
            box-shadow: 0 4px 16px rgba(0,0,0,0.12) !important;
          }

          .serve-image {
            height: 200px !important;
            min-height: 160px !important;
            object-fit: cover !important;
            transform: none !important;
            transition: none !important;
          }

          .serve-overlay {
            backdrop-blur: 8px !important;
            background: rgba(24, 25, 26, 0.75) !important;
          }

          .serve-content {
            padding: 20px !important;
            height: auto !important;
            justify-content: flex-start !important;
          }

          .serve-label {
            font-size: 12px !important;
            line-height: 1.3 !important;
            margin-bottom: 8px !important;
            text-align: left !important;
          }

          .serve-description {
            font-size: 14px !important;
            line-height: 1.4 !important;
            margin-bottom: 12px !important;
            text-align: left !important;
          }

          .serve-clients-label {
            font-size: 11px !important;
            margin-bottom: 4px !important;
            opacity: 0.9 !important;
          }

          .serve-clients {
            font-size: 11px !important;
            line-height: 1.3 !important;
            margin-bottom: 16px !important;
            opacity: 0.9 !important;
            word-break: break-word !important;
          }

          .serve-button {
            width: 100% !important;
            max-width: 100% !important;
            padding: 12px !important;
            font-size: 13px !important;
            text-align: center !important;
            justify-content: center !important;
            gap: 8px !important;
          }

          .serve-button-icon {
            font-size: 14px !important;
            font-weight: bold !important;
          }

          /* Disable hover effects on mobile */
          .serve-card:hover .serve-image {
            transform: none !important;
            scale: 1 !important;
          }

          .serve-card:active {
            transform: scale(0.98) !important;
          }
        }
      `}
    </style>

    <section className="w-full bg-[#F9ECEA] py-20 px-2 sm:px-4 lg:px-8 serve-section">
      <div>
        <h2 className="font-unbounded text-4xl font-bold text-[#3B2327] text-center mb-16 serve-main-heading">
          Who We Serve
        </h2>
        <div className="grid gap-8 lg:grid-cols-3 serve-grid">
          {serveData.map((item, idx) => (
            <div 
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-lg flex flex-col justify-end min-h-[420px] group serve-card"
              style={{ minHeight: 420 }}
            >
              {/* Background Image */}
              <img 
                src={item.image}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 serve-image"
              />
              {/* Blurred and dark overlay */}
              <div className="absolute inset-0 bg-[#18191A]/60 backdrop-blur-sm serve-overlay" />
              {/* Card content */}
              <div className="relative z-10 p-6 flex flex-col h-full justify-end serve-content">
                <span className="uppercase tracking-wider text-[13px] font-semibold text-[#C34A36] mb-2 serve-label">{item.label}</span>
                <p className="text-white font-poppins text-lg font-medium mb-3 leading-tight serve-description">{item.description}</p>
                <div className="mb-2">
                  <span className="block text-white font-poppins text-xs font-semibold mb-1 opacity-80 serve-clients-label">Representative Clients:</span>
                  <span className="block text-white font-poppins text-xs opacity-80 serve-clients">
                    {item.clients.join(" | ")}
                  </span>
                </div>
                <button className="mt-4 bg-white text-[#C34A36] font-poppins font-medium text-sm px-4 py-2 rounded transition hover:bg-[#f1eeed] w-fit shadow inline-flex items-center gap-2 serve-button">
                  View Details <span className="font-bold serve-button-icon">&gt;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Serve;

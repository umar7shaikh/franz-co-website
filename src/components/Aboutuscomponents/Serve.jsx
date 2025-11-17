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
  <section className="w-full bg-[#F9ECEA] py-20 px-2 sm:px-4 lg:px-8">
    <div >
      <h2 className="font-unbounded text-4xl font-bold text-[#3B2327] text-center mb-16">
        Who We Serve
      </h2>
      <div className="grid gap-8 lg:grid-cols-3">
        {serveData.map((item, idx) => (
          <div 
            key={idx}
            className="relative rounded-2xl overflow-hidden shadow-lg flex flex-col justify-end min-h-[420px] group"
            style={{ minHeight: 420 }}
          >
            {/* Background Image */}
            <img 
              src={item.image}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Blurred and dark overlay */}
            <div className="absolute inset-0 bg-[#18191A]/60 backdrop-blur-sm" />
            {/* Card content */}
            <div className="relative z-10 p-6 flex flex-col h-full justify-end">
              <span className="uppercase tracking-wider text-[13px] font-semibold text-[#C34A36] mb-2">{item.label}</span>
              <p className="text-white font-poppins text-lg font-medium mb-3 leading-tight">{item.description}</p>
              <div className="mb-2">
                <span className="block text-white font-poppins text-xs font-semibold mb-1 opacity-80">Representative Clients:</span>
                <span className="block text-white font-poppins text-xs opacity-80">
                  {item.clients.join(" | ")}
                </span>
              </div>
              <button className="mt-4 bg-white text-[#C34A36] font-poppins font-medium text-sm px-4 py-2 rounded transition hover:bg-[#f1eeed] w-fit shadow inline-flex items-center gap-2">
                View Details <span className="font-bold">&gt;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Serve;

import { MdVerifiedUser, MdWorkspacePremium, MdGroups, MdAssignmentTurnedIn, MdScience } from 'react-icons/md';

const valuesData = [
  {
    icon: <MdVerifiedUser size={36} color="#C34A36" />,
    title: "INTEGRITY FIRST",
    desc: "Transparent pricing. Honest timelines. No hidden costs. We build relationships on trust, not transactions."
  },
  {
    icon: <MdWorkspacePremium size={36} color="#C34A36" />,
    title: "EXCELLENCE AS STANDARD",
    desc: "From equipment selection to the smallest installation detail, we obsess over quality because shortcuts today become problems tomorrow."
  },
  {
    icon: <MdGroups size={36} color="#C34A36" />,
    title: "PARTNERSHIP MINDSET",
    desc: "We don't just execute orders; we collaborate. Your project goals become our goals. Your timeline pressures become our priorities."
  },
  {
    icon: <MdAssignmentTurnedIn size={36} color="#C34A36" />,
    title: "ACCOUNTABILITY ALWAYS",
    desc: "When something goes wrong, we own it immediately and fix it fast. No finger-pointing. No excuses. Just solutions."
  },
  {
    icon: <MdScience size={36} color="#C34A36" />,
    title: "INNOVATION DRIVEN",
    desc: "The fitness industry evolves rapidly. We stay ahead through continuous learning, technology integration, and forward-thinking design approaches."
  },
];

const CoreValues = () => (
  <section className="w-full py-14 px-2 lg:px-8" style={{ background: '#fffafa', marginTop: '40px' }}>
    <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
      {/* Left column: Heading, text, buttons (all top aligned) */}
      <div className="flex flex-col w-full lg:w-[600px] gap-4 pt-0">
        <h2 className="font-unbounded text-3xl md:text-4xl font-bold text-[#40281A] mb-2">
          CORE VALUES
        </h2>
        <p className="font-poppins text-[16px] text-[#404040] mb-4">
          Discover the guiding principles that drive our approach and define our commitment to every client. Our core values reflect our passion for transparency, excellence, partnership, accountability, and innovation.
        </p>
        <div className="flex gap-4 mb-2">
          <button
            className="font-poppins font-semibold text-[15px] bg-[#f1eeed] hover:bg-[#e5e0df] transition-colors px-6 py-3 rounded-lg text-[#C34A36]"
          >
            Services
          </button>
          <button
            className="font-poppins font-semibold text-[15px] bg-transparent hover:bg-[#FFF5F3] transition-colors px-6 py-3 rounded-lg inline-flex items-center gap-2 text-[#C34A36]"
          >
            Contact
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Right column: Values list */}
      <div className="flex flex-col w-full lg:w-[600px] gap-8">
        {valuesData.map((value) => (
          <div
            key={value.title}
            className="flex flex-col bg-[#F5F5F5] rounded-2xl border border-[#f5e9e2]"
            style={{
              padding: 32,
              minHeight: 180,
              height: 'auto',
              boxShadow: '0 2px 10px rgba(60,38,32,0.02)',
              gap: '16px',
              justifyContent: 'flex-start'
            }}
          >
            <div className="mb-2">
              {value.icon}
            </div>
            <h3 className="font-unbounded text-lg md:text-xl font-semibold text-[#C34A36] tracking-tight mb-1">
              {value.title}
            </h3>
            <p className="font-poppins text-[15px] text-[#404040] m-0">
              {value.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreValues;

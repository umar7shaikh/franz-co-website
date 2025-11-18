import { Shield, Headphones, ArrowRight } from 'lucide-react';
import QualityImg from '../../assets/CommitmentToSuccess1.png';
import TimelineImg from '../../assets/CommitmentToSuccess2.png';
import BudgetImg from '../../assets/CommitmentToSuccess3.png';

const CommitmentToSuccess = () => (
  <section className="w-full bg-[#FAECEA] py-16 px-4">
    <div className="max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <span
          className="
            block
            mx-auto
            w-[119px]
            h-[24px]
            font-poppins
            font-semibold
            text-[16px]
            leading-[24px]
            text-[#C34A36]
            uppercase
            text-center
            tracking-normal
            mb-4
            sm:w-[90px] sm:text-sm"
          style={{ fontStyle: 'normal', opacity: 1 }}
        >
          PERFORMANCE
        </span>
        <h2 className="font-unbounded text-3xl md:text-4xl font-bold text-[#3A1610] mb-4">
          Our Commitment to Your Success
        </h2>
        <p className="font-poppins text-[#404040] text-base sm:text-sm">
          We succeed when your amenity succeeds.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[624fr_296fr_296fr] gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          {/* Quality Assurance Card */}
          <div className="flex flex-col bg-white rounded-2xl shadow overflow-hidden h-[600px] sm:h-auto">
            <img src={QualityImg} alt="Quality Assurance" className="h-[300px] w-full object-cover" />
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-unbounded text-[22px] text-[#18191A] mb-2 font-semibold">
                Quality Assurance
              </h3>
              <p className="font-poppins text-[#404040] text-base mb-6 sm:text-sm">
                All equipment backed by manufacturer warranties.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <button className="text-[#C34A36] font-poppins font-medium text-[15px] hover:text-[#A63D36] transition-colors flex items-center gap-2">
                  Enquire <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Timeline Guarantee Card */}
          <div className="flex bg-white rounded-2xl shadow overflow-hidden h-[340px] sm:flex-col sm:h-auto">
            <img src={TimelineImg} alt="Timeline Guarantee" className="w-2/5 object-cover sm:w-full sm:h-48" />
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-unbounded text-[20px] text-[#18191A] mb-2 font-semibold leading-tight">
                  Timeline Guarantee
                </h3>
                <p className="font-poppins text-[#404040] text-sm mb-4">
                  Project completion as per agreed schedule or penalty clauses apply.
                </p>
              </div>
              <button className="text-[#C34A36] font-poppins font-medium text-[15px] hover:text-[#A63D36] transition-colors flex items-center gap-2 self-start sm:self-auto">
                Enquire <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column Group */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Safety Compliance */}
            <div className="bg-white rounded-xl shadow p-8 flex flex-col justify-between h-[340px] sm:h-auto">
              <div className="w-10 h-10 rounded-full bg-[#FEE5E0] flex items-center justify-center mb-4">
                <Shield className="text-[#C34A36]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-unbounded text-xl font-semibold text-[#3A1610] mb-2">Safety Compliance</h3>
                <p className="font-poppins text-base text-[#404040] mb-6 sm:text-sm">
                  100% adherence to safety standards and certifications.
                </p>
              </div>
            </div>

            {/* Post-Installation Support */}
            <div className="bg-white rounded-xl shadow p-8 flex flex-col justify-between h-[340px] sm:h-auto">
              <div className="w-10 h-10 rounded-full bg-[#FEE5E0] flex items-center justify-center mb-4">
                <Headphones className="text-[#C34A36]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-unbounded text-xl font-semibold text-[#3A1610] mb-2">Post-Installation Support</h3>
                <p className="font-poppins text-base text-[#404040] mb-6 sm:text-sm">
                  Responsive service within SLA commitments.
                </p>
              </div>
            </div>
          </div>

          {/* Budget Adherence Card */}
          <div className="flex flex-col bg-white rounded-2xl shadow overflow-hidden h-[600px] sm:h-auto">
            <img src={BudgetImg} alt="Budget Adherence" className="h-[300px] w-full object-cover" />
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-unbounded text-[20px] text-[#18191A] mb-2 font-semibold">Budget Adherence</h3>
                <p className="font-poppins text-[#404040] text-sm mb-4">
                  No cost overruns without prior approval and documentation.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-[#C34A36] font-poppins font-medium text-[15px] hover:text-[#A63D36] transition-colors flex items-center gap-2">
                  Enquire <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CommitmentToSuccess;

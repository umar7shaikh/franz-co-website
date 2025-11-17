import { useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";

const faqs = [
{
question: "How long does a typical project take?",
answer:
"90-120 days from design approval to handover for most residential/commercial projects. Corporate and hospitality projects may take 120-150 days depending on customization requirements.",
},
{
question: "Do you provide equipment on a leasing basis?",
answer:
"Yes, gym equipment can be provided on a leasing basis, allowing you to use the equipment with minimal upfront costs and fixed monthly payments. Leasing often includes maintenance, offers tax advantages, and enables easy equipment upgrades to keep up with evolving technology and needs.",
},
{
question: "What if equipment breaks down after warranty?",
answer:
"We provide ongoing service and maintenance support beyond the warranty period through service contracts. In case of equipment breakdown, repair and replacement services are offered to ensure minimal disruption to your operations.",
},
{
question: "Can you work with our existing architect/contractor?",
answer:
"Yes, we can collaborate with your existing architect and contractor to ensure seamless integration of our services into your project planning and execution.",
},
{
question: "Do you handle government approvals and compliance?",
answer:
"Yes, we manage all necessary government approvals and ensure compliance with local regulations to streamline the project process and avoid delays.",
},
{
question: "What brands of equipment do you supply?",
answer:
"We supply equipment from leading and reputable fitness brands, ensuring high quality and reliability tailored to your project requirements.",
},
{
question: "Can you upgrade an existing gym?",
answer:
"Yes, we offer gym upgrade services to enhance your existing facilities with the latest equipment, layout improvements, and technology integrations.",
},
{
question: "Do you provide operational management services?",
answer:
"Yes, operational management services are available, including equipment maintenance, facility management, and staff training to ensure smooth gym operations.",
},
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0); // 0 (first) open by default

  return (
    <section className="w-full py-16  min-h-screen flex flex-col items-center">
      {/* Header */}
      <h2
        className="font-unbounded text-[#3A1610] text-4xl font-bold text-center mb-8"
        style={{ marginTop: "0.5em" }}
      >
        Frequently Asked<br />Questions
      </h2>

      {/* FAQ Accordions */}
      <div
        className="mx-auto"
        style={{
          maxWidth: 660,
          width: "100%",
        }}
      >
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <div
              onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
              className={`flex items-center px-6 cursor-pointer ${
                idx === openIndex
                  ? "bg-[#F2F2F2]"
                  : "bg-[#F2F2F2] hover:bg-[#F2F2F2]"
              }`}
              style={{
                borderRadius: 12,
                marginBottom: 12,
                height: idx === openIndex ? undefined : 46,
                boxShadow:
                  idx === openIndex
                    ? "0 2px 12px 0 rgba(98, 43, 8, 0.03)"
                    : undefined,
              }}
            >
              <span
                className="font-poppins font-medium text-base flex-grow"
                style={{
                  color: idx === openIndex ? "#C34A36" : "#0A040380",
                  padding: "14px 0",
                  fontWeight: idx === openIndex ? 600 : 500,
                  letterSpacing: "-0.5px"
                }}
              >
                {faq.question}
              </span>
              {idx === openIndex ? (
                <FiX size={22} color="#C34A36" />
              ) : (
                <FiChevronDown size={22} color="#0A040380" />
              )}
            </div>
            {/* Answer */}
            {idx === openIndex && (
              <div
                className="px-7 pb-4 pt-1 font-poppins text-sm"
                style={{
                  color: "#0A040380",
                  background: "#F2F2F2",
                  borderRadius: "0 0 12px 12px",
                  marginBottom: 12,
                  // no top margin (visually underlined by bg)
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Row */}
      <div
        className="flex flex-col items-center mt-12"
        style={{ maxWidth: 480, width: "100%", margin: "48px auto 0" }}
      >
        <p
          className="font-unbounded text-xl font-semibold text-[#231712] text-center mb-2"
          style={{ fontWeight: 600 }}
        >
          Still have questions?
        </p>
        <p
          className="font-poppins text-sm text-[#66534D] text-center mb-5"
          style={{ fontWeight: 400 }}
        >
          Support details to capture customers that might be on the fence.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            className="px-5 py-2 rounded-lg text-[#C34A36] bg-[#F3DAD6] font-poppins font-medium text-sm"
            style={{
              border: "none",
              minWidth: 100,
              fontWeight: 500,
            }}
          >
            Contact Us
          </button>
          <button
            className="px-5 py-2 rounded-lg text-[#C34A36] bg-transparent font-poppins font-medium text-sm flex items-center gap-1"
            style={{
              border: "none",
              minWidth: 100,
              fontWeight: 500,
            }}
          >
            View Services <span className="text-lg">{">"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

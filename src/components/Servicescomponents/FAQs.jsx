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
    <section className="w-full py-16 min-h-screen flex flex-col items-center faq-section">
      {/* MOBILE-ONLY STYLES */}
      <style>
        {`
          @media (max-width: 767px) {
            .faq-section {
              padding: 24px 16px !important;
              min-height: auto !important;
            }
            
            .faq-header {
              font-size: 28px !important;
              line-height: 1.2 !important;
              margin-bottom: 20px !important;
              text-align: center !important;
            }

            .faq-container {
              max-width: 100% !important;
              padding: 0 !important;
            }

            .faq-question {
              font-size: 16px !important;
              font-weight: 600 !important;
              color: #C34A36 !important;
              padding: 12px 16px !important;
              border-radius: 8px !important;
              background-color: #F2F2F2 !important;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05) !important;
              margin-bottom: 8px !important;
            }

            .faq-question:hover {
              background-color: #E8D7D4 !important;
              cursor: pointer !important;
            }

            .faq-answer {
              font-size: 14px !important;
              line-height: 1.4 !important;
              background: #F2F2F2 !important;
              padding: 12px 20px !important;
              border-radius: 0 0 12px 12px !important;
              margin-bottom: 16px !important;
              color: #0A040380 !important;
            }

            .faq-icon {
              font-size: 20px !important;
              color: #C34A36 !important;
              margin-left: 12px !important;
            }

            .faq-contact-row {
              margin-top: 32px !important;
              max-width: 100% !important;
              padding: 0 16px !important;
            }

            .faq-contact-title {
              font-size: 22px !important;
              font-weight: 700 !important;
              color: #231712 !important;
              margin-bottom: 8px !important;
              text-align: center !important;
            }

            .faq-contact-text {
              font-size: 14px !important;
              color: #66534D !important;
              margin-bottom: 12px !important;
              text-align: center !important;
            }

            .faq-contact-buttons {
              display: flex !important;
              flex-direction: column !important;
              gap: 12px !important;
              width: 100% !important;
              max-width: 360px !important;
              margin: 0 auto !important;
            }

            .faq-contact-buttons button {
              width: 100% !important;
              min-width: auto !important;
              font-size: 16px !important;
              padding: 14px 0 !important;
              font-weight: 600 !important;
            }
          }
        `}
      </style>

      {/* Header */}
      <h2
        className="font-unbounded text-[#3A1610] text-4xl font-bold text-center mb-8 faq-header"
        style={{ marginTop: "0.5em" }}
      >
        Frequently Asked<br />Questions
      </h2>

      {/* FAQ Accordions */}
      <div
        className="mx-auto faq-container"
        style={{
          maxWidth: 660,
          width: "100%",
        }}
      >
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <div
              onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
              className={`flex items-center px-6 cursor-pointer faq-question ${
                idx === openIndex ? "bg-[#F2F2F2]" : "bg-[#F2F2F2] hover:bg-[#F2F2F2]"
              }`}
              style={{
                borderRadius: 12,
                marginBottom: 12,
                height: idx === openIndex ? undefined : 46,
                boxShadow:
                  idx === openIndex ? "0 2px 12px 0 rgba(98, 43, 8, 0.03)" : undefined,
              }}
            >
              <span
                className="font-poppins font-medium text-base flex-grow"
                style={{
                  color: idx === openIndex ? "#C34A36" : "#0A040380",
                  padding: "14px 0",
                  fontWeight: idx === openIndex ? 600 : 500,
                  letterSpacing: "-0.5px",
                }}
              >
                {faq.question}
              </span>
              {idx === openIndex ? (
                <FiX className="faq-icon" />
              ) : (
                <FiChevronDown className="faq-icon" />
              )}
            </div>

            {/* Answer */}
            {idx === openIndex && (
              <div
                className="px-7 pb-4 pt-1 font-poppins text-sm faq-answer"
                style={{
                  color: "#0A040380",
                  background: "#F2F2F2",
                  borderRadius: "0 0 12px 12px",
                  marginBottom: 12,
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
        className="flex flex-col items-center mt-12 faq-contact-row"
        style={{ maxWidth: 480, width: "100%", margin: "48px auto 0" }}
      >
        <p
          className="font-unbounded text-xl font-semibold text-[#231712] text-center mb-2 faq-contact-title"
          style={{ fontWeight: 600 }}
        >
          Still have questions?
        </p>
        <p
          className="font-poppins text-sm text-[#66534D] text-center mb-5 faq-contact-text"
          style={{ fontWeight: 400 }}
        >
          Support details to capture customers that might be on the fence.
        </p>
        <div className="flex gap-3 justify-center faq-contact-buttons">
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

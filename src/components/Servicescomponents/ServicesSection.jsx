import React from 'react'
import CServices1 from '../../assets/CServices1.png';
import CServices2 from '../../assets/CServices2.png';
import CServices3 from '../../assets/CServices3.png';
import CServices4 from '../../assets/CServices4.png';
import CServices5 from '../../assets/CServices5.png';
import CServices6 from '../../assets/CServices6.png';
import CServices7 from '../../assets/CServices7.png';
import CServices8 from '../../assets/CServices8.png';
import { useState } from 'react';

import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('DESIGN');
  const [openAccordion, setOpenAccordion] = useState(0);

  const tabs = [
    'DESIGN',
    'EQUIPMENT',
    'INSTALLATION',
    'SUPPORT',
    'COMPLIANCE',
    'TRAINING',
    'TECH INTEGRATION',
    'CONSULTATION'
  ];

  const serviceData = {
  DESIGN: {
    title: 'Transform Raw Space into Optimized Fitness Environments',
    subtitle: `Your amenity space is valuable real estate. Our design team maximizes every square foot to create functional, attractive, and code-compliant gym facilities that align with your property's architectural language.`,
    mainImage: CServices1,
    accordions: [
      {
        title: 'Site Assessment & Feasibility Analysis',
        items: [
          'Structural load capacity evaluation',
          'HVAC and ventilation requirements study',
          'Electrical infrastructure assessment',
          'Accessibility compliance review',
          'Traffic flow and zoning analysis'
        ]
      },
      {
        title: 'Technical Documentation',
        items: [
          'Comprehensive design presentation deck',
          'Technical specification documents',
          '3D visualization files',
          'Equipment list with placement diagrams',
          'Budget estimate with line-item breakdown'
        ]
      },
      {
        title: 'Space Optimization Strategies',
        items: [
          'Multi-functional zone layouts',
          'Operational efficiency enhancements',
          'Future scalability and expansion plans',
        ]
      },
      {
      title: 'Regulatory Compliance',
      items: [
        'Adherence to local building codes',
        'Fire safety and emergency egress planning',
        'ADA/accessibility standards compliance',
      ]
    }
    ],
    primaryCTA: 'Request Design Consultation',
    
    deliverables: {
      title: 'Deliverables',
      items: [
        'Comprehensive design presentation deck',
        '3D visualization files',
        'Technical specification documents',
        'Equipment list with placement diagrams',
        'Budget estimate with line-item breakdown'
      ]
    },
    timeline: {
      title: 'Timeline',
      content: '15-21 days from site survey to design approval'
    },
    investment: {
      title: 'Investment Range',
      content: '₹1.5–5 Lakhs (credited toward project cost)'
    }
  },
  EQUIPMENT: {
    title: 'Premium Commercial-Grade Equipment from Global Leaders',
    subtitle: 'We partner exclusively with world-renowned fitness equipment manufacturers to ensure durability, safety, and member satisfaction. Every piece of equipment is selected based on commercial-grade specifications suitable for high-traffic environments.',
    mainImage: CServices2,
    accordions: [
      {
        title: 'Cardiovascular Zone',
        items: [
          'Treadmills (motorized, commercial-grade)',
          'Elliptical trainers and cross-trainers',
          'Upright and recumbent bikes',
          'Rowing machines',
          'StairMasters and step mills',
          'Air bikes and assault bikes',
          'Interactive group cycling setups'
        ]
      },
      {
        title: 'Strength Training Zone',
        items: [
          'Selectorized strength stations',
          'Plate-loaded equipment',
          'Benches and racks',
        ]
      },
      {
        title: 'Free Weights & Functional Training',
        items: [
          'Dumbbells and barbells',
          'Kettlebells and medicine balls',
          'Functional rigs and frames'
        ]
      },
      {
        title: 'Specialized Equipment',
        items: [
          'Group fitness and studio gear',
          'Rehabilitation and therapy equipment'
        ]
      }
    ],
    primaryCTA: 'View Equipment Catalog',
    deliverables: {
      title: 'Quality Assurance',
      items: [
        'Only ISO-certified manufacturers',
        'Minimum 3-year commercial warranties',
        'BIS compliance for electrical equipment',
        'Load testing and safety certifications',
        'Spare parts availability guarantee'
      ]
    },
    timeline: {
      title: 'Timeline',
      content: '45–60 days from approval to delivery'
    },
    customization: {
      title: 'Customization Available',
      content: 'Branded upholstery, custom colors, logo embossing'
    },
    brands: {
      title: 'Brand Partners',
      content: 'Technogym, Life Fitness, Matrix, Precor, Hammer Strength, Rogue Fitness, Eleiko, Star Trac'
    }
  },
  INSTALLATION: {
    title: 'Professional Execution with Military Precision',
    subtitle: 'Our experienced installation teams ensure your gym is set up correctly, safely, and on schedule. We handle every detail so you can focus on your core business.',
    mainImage: CServices3,
    accordions: [
      {
        title: 'Pre-Installation Phase',
        items: [
          'Site preparation and readiness checklist',
          'Coordination with civil, electrical, and HVAC contractors',
          'Material delivery scheduling',
          'Safety protocol briefing for all teams'
        ]
      },
      {
        title: 'Installation Phase',
        items: [
          'Equipment assembly and placement',
          'Electrical connections and testing',
          'Flooring installation (rubber, vinyl, turf)',
          'Mirror and wall fixture mounting'
        ]
      },
      {
        title: 'Quality Control & Testing',
        items: [
          'Equipment functionality testing',
          'Safety inspection checklist',
          'Client walkthrough and punch list'
        ]
      }
    ],
    primaryCTA: 'Download Guide',
    deliverables: {
      title: 'Deliverables',
      items: [
        'Dedicated project manager assigned',
        'Daily progress reports with photos',
        'Real-time issue resolution',
        'Vendor coordination and supervision',
        'Timeline adherence and milestone tracking',
        'Final handover documentation'
      ]
    },
    timeline: {
      title: 'Timeline',
      content: '20–45 days depending on project size'
    },
    postInstallation: {
      title: 'Post-Installation',
      content: 'Complete documentation, O&M manuals, staff training'
    }
  },
  SUPPORT: {
    title: 'Ensure Long-Term Performance and Member Satisfaction',
    subtitle: 'A gym is only as good as its maintenance. Our comprehensive support programs keep your fitness facility running smoothly, minimizing downtime and maximizing member satisfaction.',
    mainImage: CServices4,
    accordions: [
      {
        title: 'Bronze - Essential Care',
        items: [
          'Quarterly preventive maintenance visits',
          'Equipment inspection and lubrication',
          'Basic troubleshooting and repairs',
          'Phone/email support during business hours',
          'Maintenance log and reporting'
        ],
        investment: '₹50,000 – 1.5 Lakhs/year'
      },
      {
        title: 'Silver - Comprehensive Care',
        items: [
          'Monthly preventive maintenance visits',
          'Priority response for breakdowns (24–48 hours)',
          'Replacement parts included (up to ₹25,000/year)',
          'Extended support hours (8 AM – 8 PM)',
          'Equipment deep cleaning (quarterly)',
          'Annual safety audit'
        ],
        investment: '₹1.5–3 Lakhs/year'
      },
      {
        title: 'Gold - Premium Care',
        items: [
          'Bi-weekly maintenance visits',
          'Same-day response for critical breakdowns',
          'All replacement parts covered',
          '24/7 emergency support hotline',
          'Monthly equipment deep cleaning',
          'Quarterly calibration and optimization',
          'Member satisfaction surveys'
        ],
        investment: '₹3–6 Lakhs/year'
      },
      {
        title: 'Quality Control & Testing',
        items: [
          'Comprehensive equipment testing',
          'Safety compliance verification',
          'Performance benchmarking',
          'Usage analytics and reporting'
        ]
      },
      {
        title: 'Platinum - Managed Services',
        items: [
          'Full facility management services',
          'Dedicated on-site technician',
          'All maintenance and repairs included',
          'Equipment upgrade program',
          'Member engagement programs',
          'Complete operational support'
        ],
        investment: 'Custom pricing based on facility size'
      }
    ],
    primaryCTA: 'Compare AMC Plans',
    deliverables: {
      title: 'Deliverables',
      items: [
        'Dedicated project manager assigned',
        'Daily progress reports with photos',
        'Real-time issue resolution',
        'Vendor coordination and supervision',
        'Timeline adherence and milestone tracking',
        'Final handover documentation'
      ]
    },
    addOns: {
      title: 'Add-On Services',
      items: [
        'Emergency repair call-outs: ₹5,000 + parts',
        'Equipment deep cleaning: ₹500–1,500 per machine',
        'Software updates for smart equipment: ₹15,000/year',
        'Trainer staffing solutions: As per requirement'
      ]
    }
  },
  COMPLIANCE: {
    title: 'Navigate Complex Approvals with Confidence',
    subtitle: 'Setting up a commercial gym involves multiple regulatory requirements. We handle all compliance aspects so you avoid costly delays and penalties.',
    mainImage: CServices5,
    accordions: [
      {
        title: 'Structural & Safety Compliance',
        items: [
          'Load-bearing capacity certifications',
          'Fire safety clearances and equipment',
          'Emergency exit planning and signage',
          'ADA/accessibility compliance documentation',
          'Electrical safety certifications'
        ]
      },
      {
        title: 'Business & Operational Compliance',
        items: [
          'Trade license and business permits',
          'Health and safety registrations',
          'Music licensing (PPL/PRS)',
          'Insurance requirements guidance',
          'Employee safety training certifications'
        ]
      },
      {
        title: 'Health & Safety Standards',
        items: [
          'First aid and emergency protocols',
          'Equipment maintenance logs',
          'Sanitization and hygiene standards',
          'COVID-19 safety compliance',
          'Incident reporting systems'
        ]
      }
    ],
    primaryCTA: 'Download Compliance Checklist',
    deliverables: {
      title: 'Deliverables',
      items: [
        'Complete compliance checklist',
        'All necessary certifications',
        'Documentation for RERA filings',
        'Insurance-ready facility reports',
        'Operations manual with safety protocols'
      ]
    },
    timeline: {
      title: 'Timeline',
      content: 'Integrated into project timeline (parallel processing)'
    },
    peaceOfMind: {
      title: 'Peace of Mind',
      content: 'We handle all regulatory interactions and documentation'
    }
  },
  TRAINING: {
    title: 'Empower Your Team for Operational Excellence',
    subtitle: 'A well-trained team is essential for smooth gym operations. We provide comprehensive training programs for your facility management staff, trainers, and front-desk personnel.',
    mainImage: CServices6,
    accordions: [
      {
        title: 'Facility Management Training',
        items: [
          'Equipment operation basics',
          'Daily maintenance protocols',
          'Cleaning and sanitization procedures',
          'Safety inspection checklists',
          'Emergency response procedures',
          'Incident reporting and documentation'
        ]
      },
      {
        title: 'Fitness Staff Training',
        items: [
          'Instruction on functional training zones',
          'Safe equipment usage',
          'Member engagement best practices'
        ]
      },
      {
        title: 'Operations Management Training',
        items: [
          'Scheduling and shift management',
          'Facility opening/closing procedures'
        ]
      }
    ],
    primaryCTA: 'About Training Programs',
    deliverables: {
      title: 'Deliverables',
      items: [
        'Detailed operation manuals (printed + digital)',
        'Video tutorials for common procedures',
        'Quick-reference guides',
        'Training completion certificates',
        'Post-training support (30 days)'
      ]
    },
    refresher: {
      title: 'Refresher Training',
      content: 'Available quarterly or annually as part of AMC'
    },
    custom: {
      title: 'Custom Training',
      content: 'Available for specific needs or new staff onboarding'
    }
  },
  'TECH INTEGRATION': {
    title: 'Smart Gym Solutions for Modern Properties',
    subtitle: 'Enhance member experience and operational efficiency with integrated technology solutions that provide data insights and seamless user experiences.',
    mainImage: CServices7,
    accordions: [
      {
        title: 'Access Control Systems',
        items: [
          'RFID/NFC card-based entry',
          'Biometric access systems',
          'Mobile app-based access',
          'Visitor management integration',
          'Usage tracking and analytics'
        ]
      },
      {
        title: 'Member Management Software',
        items: [
          'Cloud-based member profiles',
          'Automated billing',
          'Renewal reminders',
          'Progress tracking'
        ]
      },
      {
        title: 'Smart Equipment Integration',
        items: [
          'Equipment usage analytics',
          'Performance leaderboards',
          'Connected cardio stations'
        ]
      },
      {
        title: 'Operational Dashboards',
        items: [
          'Real-time facility reports',
          'Automated alerts and notifications'
        ]
      },
      {
        title: 'Mobile App Solutions',
        items: [
          'Custom apps for bookings',
          'Push notifications',
          'Feedback portals'
        ]
      }
    ],
    primaryCTA: 'Explore Technology Solutions',
    deliverables: {
      title: 'Benefits',
      items: [
        'Improved member engagement',
        'Data-driven decision making',
        'Reduced operational overhead',
        'Enhanced security and safety',
        'Premium positioning for property'
      ]
    },
    timeline: {
      title: 'Timeline',
      content: '20–45 days depending on scope'
    },
    investment: {
      title: 'Investment Range',
      content: '₹2–15 Lakhs (based on complexity and property size)'
    }
  },
  CONSULTATION: {
    title: 'Strategic Guidance for Optimal Fitness Amenity Planning',
    subtitle: `Not sure where to start? Our consultation services help developers make informed decisions about gym investments aligned with project goals and market positioning.`,
    mainImage: CServices8,
    accordions: [
      {
        title: 'Feasibility Studies',
        items: [
          'Market analysis for gym amenities in your location',
          'Demographic profiling of target users',
          'Competitive amenity benchmarking',
          'ROI projections and break-even analysis',
          'Recommended investment brackets'
        ]
      },
      {
        title: 'Space Utilization Audits',
        items: [
          'Floor plan reviews',
          'Usage data & traffic flow analysis'
        ]
      },
      {
        title: 'Equipment Upgrade Consultations',
        items: [
          'Upgrade planning for existing facilities',
          'Budget and phasing strategy'
        ]
      },
      {
        title: 'Operational Excellence Reviews',
        items: [
          'Process and staff workflow optimization',
          'Member experience enhancements'
        ]
      }
    ],
    primaryCTA: 'Schedule Advisory Session',
    deliverables: {
      title: 'Deliverables',
      items: [
        'Comprehensive report with actionable recommendations'
      ]
    },
    investment: {
      title: 'Investment',
      content: '₹25,000 – 2 Lakhs (depending on scope)'
    },
    value: {
      title: 'Value',
      content: 'Make confident decisions backed by data and industry expertise'
    }
  }
};

const currentService = serviceData[activeTab];

return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className=" mb-12">
            <h2
            className="
                font-poppins font-semibold text-[16px] leading-[1.5] tracking-normal text-center text-[#C34A36] 
                mx-auto
            "
            >
            CORE SERVICES
            </h2>
          
          {/* Tabs */}
          <div
            className="
              flex
              rounded-[8px]
              overflow-x-auto
              overflow-y-hidden
              border-b
              border-b-[#DDD]
              bg-[#0A04030D]
              w-full
              h-[56px]
              mx-auto
              mt-8
              justify-start
              sm:justify-center
            "
            style={{ 
              gap: 0,
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setOpenAccordion(0);
                }}
                className={`
                  px-3 py-2.5 
                  sm:px-6
                  text-xs sm:text-base 
                  font-poppins font-semibold 
                  transition-colors text-center
                  rounded-none
                  whitespace-nowrap
                  flex-shrink-0
                  ${activeTab === tab
                    ? 'bg-[#F3DAD6] text-[#C34A36]'
                    : 'bg-transparent text-[#0A040366]'
                  }
                `}
                style={{
                  borderRight: i !== tabs.length - 1 ? "1px solid #ececec" : "none",
                  height: '56px'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

        </div>

        {/* Main Content */}
        <div className="mb-16">
          <h2 className="font-unbounded font-medium text-[32px] leading-[1.3] tracking-[-0.01em] text-center text-[#0A0403]">
            {currentService.title}
          </h2>
          <p className="font-poppins font-normal text-[18px]  leading-[1.5] text-[#664A32] text-center max-w-2xl mx-auto mt-4">
            {currentService.subtitle}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Accordions */}
          <div className="space-y-4">
            {currentService.accordions.map((accordion, index) => {
                const isOpen = openAccordion === index;
                return (
                <div key={index}>
                    <button
                    onClick={() => setOpenAccordion(isOpen ? -1 : index)}
                    className={
                        `w-full flex items-center justify-between 
                        px-6 py-4 transition-all rounded-xl text-left
                        font-unbounded font-medium tracking-[-.01em] leading-[1.4]
                        ${isOpen 
                        ? 'bg-gray-50 text-[#C34A36]'
                        : 'bg-white text-[#0A0403]/70'
                        }`
                    }
                    style={{
                        fontWeight: 500,
                        fontSize: '1.125rem', // You can adjust for exact as needed (Heading 6 ~18px)
                    }}
                    >
                    <span>{accordion.title}</span>
                    <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#C34A36]" : "text-gray-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    </button>
                    {isOpen && (
                    <div className="px-6 pb-4 pt-2 bg-gray-50 rounded-b-xl">
                        <ul className="space-y-2">
                        {accordion.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start text-sm">
                            <svg
                                className="w-4 h-4 text-[#C34A36] mr-2 flex-shrink-0 mt-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span className="text-[#444]">{item}</span>
                            </li>
                        ))}
                        </ul>
                        {accordion.investment && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-xs font-medium text-[#C34A36]">
                            Investment: <span>{accordion.investment}</span>
                            </p>
                        </div>
                        )}
                    </div>
                    )}
                </div>
                );
            })}
            </div>


          {/* Right Column - Image */}
          <div className="lg:sticky lg:top-8">
            <div className="rounded-lg overflow-hidden ">
              <img
                src={currentService.mainImage}
                alt={currentService.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 mb-12">
           <button
                className="px-6 py-3 rounded w-full sm:w-auto transition-colors"
                style={{
                    color: 'var(--Color-Mojo, #C34A36)',
                    backgroundColor: '#0A04030D',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    fontSize: '1rem',     // Text Regular (typically 16px)
                    lineHeight: '1.5',
                    letterSpacing: '0',
                    fontStyle: 'normal'
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#0903031F'; // slightly darker on hover
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#0A04030D'; // original background
                }}
                >
                {currentService.primaryCTA}
                </button>

          
        </div>

        {/* Bottom Info Cards */}
<div className="bg-[#F5F5F5] p-6 rounded-lg ">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {currentService.deliverables && (
      <div>
        <h3 className="text-sm font-semibold text-[#C34A36] uppercase mb-3">
          {currentService.deliverables.title}
        </h3>
        <ul className="space-y-2">
          {currentService.deliverables.items.map((item, index) => (
            <li key={index} className="flex items-start text-sm">
              <svg
                className="w-4 h-4 text-[#C34A36] mr-2 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    {currentService.timeline && (
      <div>
        <h3 className="text-sm font-semibold text-[#C34A36] uppercase mb-3">
          {currentService.timeline.title}
        </h3>
        <p className="text-sm text-gray-700">{currentService.timeline.content}</p>
      </div>
    )}

    {currentService.investment && (
      <div>
        <h3 className="text-sm font-semibold text-[#C34A36] uppercase mb-3">
          {currentService.investment.title}
        </h3>
        <p className="text-sm text-gray-700">{currentService.investment.content}</p>
      </div>
    )}

    {currentService.customization && (
      <div>
        <h3 className="text-sm font-semibold text-[#C34A36] uppercase mb-3">
          {currentService.customization.title}
        </h3>
        <p className="text-sm text-gray-700">{currentService.customization.content}</p>
      </div>
    )}

    {currentService.brands && (
      <div>
        <h3 className="text-sm font-semibold text-[#C34A36] uppercase mb-3">
          {currentService.brands.title}
        </h3>
        <p className="text-sm text-gray-700">{currentService.brands.content}</p>
      </div>
    )}

    {currentService.postInstallation && (
      <div>
        <h3 className="text-sm font-semibold text-[#C34A36] uppercase mb-3">
          {currentService.postInstallation.title}
        </h3>
        <p className="text-sm text-gray-700">{currentService.postInstallation.content}</p>
      </div>
    )}

    {currentService.addOns && (
      <div>
        <h3 className="text-sm font-semibold text-[#C34A36] uppercase mb-3">
          {currentService.addOns.title}
        </h3>
        <ul className="space-y-2">
          {currentService.addOns.items.map((item, index) => (
            <li key={index} className="flex items-start text-sm">
              <svg
                className="w-4 h-4 text-[#C34A36] mr-2 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    {currentService.peaceOfMind && (
      <div>
        <h3 className="text-sm font-semibold text-[#C34A36] uppercase mb-3">
          {currentService.peaceOfMind.title}
        </h3>
        <p className="text-sm text-gray-700">{currentService.peaceOfMind.content}</p>
      </div>
    )}

    {currentService.refresher && (
      <div>
        <h3 className="text-sm font-semibold text-[#C34A36] uppercase mb-3">
          {currentService.refresher.title}
        </h3>
        <p className="text-sm text-gray-700">{currentService.refresher.content}</p>
      </div>
    )}

    {currentService.custom && (
      <div>
        <h3 className="text-sm font-semibold text-[#C34A36] uppercase mb-3">
          {currentService.custom.title}
        </h3>
        <p className="text-sm text-gray-700">{currentService.custom.content}</p>
      </div>
    )}

    {currentService.value && (
      <div>
        <h3 className="text-sm font-semibold text-[#C34A36] uppercase mb-3">
          {currentService.value.title}
        </h3>
        <p className="text-sm text-gray-700">{currentService.value.content}</p>
      </div>
    )}
  </div>
</div>


      </div>
    </section>
  );

};

export default ServicesSection;

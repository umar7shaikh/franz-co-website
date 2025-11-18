import React from 'react';
import HotelImage from '../../assets/Hotel.png';

const Hotel = () => {
  return (
    <div className="min-h-screen bg-[#F9ECEA] py-16 px-4 sm:px-6 lg:px-8 font-poppins">
      {/* Header Section */}

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left Side - Isometric Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
            <div className="w-full lg:w-[856px] h-auto lg:h-[829px] flex-shrink-0">
              <img
                src={HotelImage}
                alt="Hotel & Hospitality Gym"
                className="w-full h-full object-cover rounded-3xl mix-blend-darken"
                style={{ height: '95%', width: '90%' }}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 order-1 lg:order-2">
            {/* Header */}
            <div>
              <p className="text-sm font-semibold text-[#C34A36] uppercase tracking-wide mb-2 font-poppins">
                HOTEL & HOSPITALITY GYM
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3A1610] font-unbounded">
                Guest Fitness Experiences That Earn 5-Star Reviews
              </h2>
            </div>
            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* ...content unchanged */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p className="text-xs font-semibold text-[#C34A36] uppercase mb-2 font-poppins">
                  Ideal For
                </p>
                <p className="text-sm text-[#3A1610] font-poppins">
                  Hotels, resorts, service apartments
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p className="text-xs font-semibold text-[#C34A36] uppercase mb-2 font-poppins">
                  Space Range
                </p>
                <p className="text-sm text-[#3A1610] font-poppins">
                  1,000 – 5,000 sq.ft.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p className="text-xs font-semibold text-[#C34A36] uppercase mb-2 font-poppins">
                  Investment
                </p>
                <p className="text-sm text-[#3A1610] font-poppins">
                  ₹20 – 70 Lakhs
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p className="text-xs font-semibold text-[#C34A36] uppercase mb-2 font-poppins">
                  Timeline
                </p>
                <p className="text-sm text-[#3A1610] font-poppins">
                  60–90 days from approval
                </p>
              </div>
            </div>
            {/* Includes Section */}
            <div>
              <p className="text-xs font-semibold text-[#C34A36] uppercase mb-4 font-poppins">
                Includes
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Luxury design matching hotel interiors',
                  'Premium international brand equipment',
                  '24/7 access control systems',
                  'Towel and amenity stations',
                  'Entertainment systems on equipment',
                  'Guest feedback integration',
                  'Multilingual signage options',
                  'Complete installation',
                  'Hospitality-specific staff training',
                  '18-month warranty'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#C34A36] mr-2 flex-shrink-0 mt-0.5"
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
                    <span className="text-sm text-[#3A1610] font-poppins">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Add-Ons Available */}
            <div>
              <p className="text-xs font-semibold text-[#C34A36] uppercase mb-4 font-poppins">
                Features
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'Compact yet comprehensive equipment selection',
                  'Guest usage analytics',
                  'Aesthetic integration with property theme',
                  'Concierge integration capabilities',
                  'Steam and sauna rooms'
                ].map((addon, index) => (
                  <span key={index} className="px-4 py-2 bg-white rounded-full text-sm text-[#3A1610] border border-gray-200 font-poppins">
                    {addon}
                  </span>
                ))}
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <button
                className="px-5 py-2 rounded-lg font-semibold text-[#C34A36] bg-[#0A04030D] backdrop-blur-md"
                style={{ backgroundColor: "rgba(10, 4, 3, 0.05)" }}
              >
                Get Package Quote
              </button>
              <button
                className="px-5 py-2 rounded-lg font-semibold text-[#C34A36] bg-transparent shadow-none border-none hover:bg-transparent focus:ring-0 flex items-center gap-2"
                style={{ boxShadow: "none", border: "none" }}
              >
                Contact Us
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;

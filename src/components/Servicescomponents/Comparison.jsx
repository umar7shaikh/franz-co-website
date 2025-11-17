import React from 'react';

const packages = [
  {
    name: 'Basic Package',
    stars: 1,
    isBestSeller: false,
    items: {
      consultation: true,
      visualization: '1 Option',
      brand: 'Standard',
      warranty: '12 months',
      training: 'Basic (1 day)',
      technology: '-',
      amc: '10',
      manager: false,
      support: '30 days',
    },
  },
  {
    name: 'Standard Package',
    stars: 3,
    isBestSeller: false,
    items: {
      consultation: true,
      visualization: '2 Options',
      brand: 'Mid-Range',
      warranty: '18 months',
      training: 'Standard (2 days)',
      technology: 'Basic',
      amc: '25',
      manager: true,
      support: '60 days',
    },
  },
  {
    name: 'Premium Package',
    stars: 5,
    isBestSeller: false,
    items: {
      consultation: true,
      visualization: <span className="text-[#C34A36] font-semibold">3 Options</span>,
      brand: <span className="text-[#C34A36] font-semibold">Premium</span>,
      warranty: <span className="text-[#C34A36] font-semibold">24 months</span>,
      training: <span className="text-[#C34A36] font-semibold">Comprehensive (3 days)</span>,
      technology: <span className="text-[#C34A36] font-semibold">Advanced</span>,
      amc: <span className="text-[#C34A36] font-semibold">Unlimited</span>,
      manager: true,
      support: <span className="text-[#C34A36] font-semibold">90 days</span>,
    },
  },
  {
    name: 'Premium Package',
    stars: 5,
    isBestSeller: false,
    items: {
      consultation: true,
      visualization: <span className="text-[#C34A36] font-semibold">Unlimited</span>,
      brand: <span className="font-semibold text-[#3A1610]">Luxury</span>,
      warranty: <span className="font-semibold text-[#3A1610]">36 months</span>,
      training: <span className="text-[#C34A36] font-semibold">White-glove (5 days)</span>,
      technology: <span className="font-semibold text-[#3A1610]">Fully Integrated</span>,
      amc: <span className="font-semibold text-[#3A1610]">Unlimited</span>,
      manager: true,
      support: <span className="font-semibold text-[#3A1610]">180 days</span>,
    },
  },
];

const features = [
  { name: 'Design Consultation', key: 'consultation' },
  { name: '3D Visualization', key: 'visualization' },
  { name: 'Equipment Brand Tier', key: 'brand' },
  { name: 'Warranty Period', key: 'warranty' },
  { name: 'Staff Training', key: 'training' },
  { name: 'Technology Integration', key: 'technology' },
  { name: 'AMC Inclusion', key: 'amc' },
  { name: 'Dedicated Project Manager', key: 'manager' },
  { name: 'Post-Handover Support', key: 'support' },
];

const starIcons = (count) =>
  Array.from({ length: count }, (_, i) => (
    <svg
      key={i}
      className="inline-block w-4 h-4 text-[#C34A36] mx-[2px]"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.212 3.712a1 1 0 00.95.69h3.905c.969 0 1.371 1.24.588 1.81l-3.158 2.298a1 1 0 00-.364 1.118l1.212 3.713c.3.921-.755 1.688-1.539 1.118l-3.158-2.298a1 1 0 00-1.176 0l-3.158 2.298c-.783.57-1.838-.197-1.539-1.118l1.212-3.713a1 1 0 00-.364-1.118L2.35 9.139c-.783-.57-.38-1.81.588-1.81h3.905a1 1 0 00.95-.69l1.212-3.712z" />
    </svg>
  ));

export default function Comparison() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3A1610] font-unbounded mb-3">
          Service Comparison Matrix
        </h1>
      </div>
      <div className="mt-16">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white text-left rounded-lg">
            <thead>
              <tr>
                <th
                  className="px-6 py-8 min-h-[110px] text-[#C34A36] font-semibold text-base align-bottom font-unbounded"
                  style={{
                    fontWeight: 500,
                    fontStyle: 'normal',
                    fontSize: '1rem',
                    lineHeight: '140%',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Feature Category
                </th>
                {packages.map((pkg, idx) => (
                  <th
                    key={idx}
                    className="px-6 py-4 min-h-[110px] text-[#C34A36] font-semibold text-base text-center relative align-top font-unbounded"
                    style={{
                      verticalAlign: 'top',
                      fontWeight: 500,
                      fontStyle: 'normal',
                      fontSize: '1rem',
                      lineHeight: '140%',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    <div className="flex flex-col items-center relative">
                      <div>{pkg.name}</div>
                      <div>{starIcons(pkg.stars)}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={row.key} className={i % 2 === 0 ? 'bg-[#F2F2F2]' : 'bg-white'}>
                  <td
                    className="px-6 py-4 italic font-normal text-base"
                    style={{ fontFamily: 'Poppins', fontWeight: 400, fontStyle: 'italic', lineHeight: '150%' }}
                  >
                    {row.name}
                  </td>
                  {packages.map((pkg, j) => (
                    <td key={j} className="px-6 py-4 text-center align-middle font-poppins">
                      {typeof pkg.items[row.key] === 'boolean'
                        ? pkg.items[row.key]
                          ? (
                            <svg
                              className="inline-block w-5 h-5 text-[#C34A36]"
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
                          )
                          : '–'
                        : pkg.items[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Single CTA Button: right side */}
        <div className="flex mt-6 justify-end">
          <button
            className="px-6 py-3 rounded-lg font-semibold text-white bg-[#C34A36] transition-colors font-poppins"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

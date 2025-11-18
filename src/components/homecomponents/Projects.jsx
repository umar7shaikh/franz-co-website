import { useState, useRef } from 'react';
import Projects1 from '../../assets/Projects1.png';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const projects = [
    {
      id: 1,
      name: 'Kumar Urban',
      image: Projects1,
      size: '5,500 sq.ft',
      location: 'Pune',
      capacity: '1,800-member community gym',
      type: 'Residential Township',
      quote:
        "TranCo delivered a gym that became our project's biggest USP. Prospective buyers now expect this level of amenity in all our properties.",
      author: 'Nitin Shah',
      position: 'Project Head, Kumar Properties'
    },
    {
      id: 2,
      name: 'Prestige Estates',
      image: Projects1,
      size: '8,200 sq.ft',
      location: 'Bangalore',
      capacity: '2,500-member community gym',
      type: 'Luxury Residential',
      quote:
        'The fitness center has become a major selling point. Our buyers specifically mention this amenity as a deciding factor.',
      author: 'Rajesh Kumar',
      position: 'VP Sales, Prestige Group'
    },
    {
      id: 3,
      name: 'Phoenix Towers',
      image: Projects1,
      size: '6,000 sq.ft',
      location: 'Mumbai',
      capacity: '2,000-member community gym',
      type: 'Premium Residential',
      quote:
        'Outstanding execution and quality. The gym facility has exceeded our expectations and delighted our residents.',
      author: 'Anita Sharma',
      position: 'Project Director, Phoenix Group'
    }
  ];

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
  };

  const getPrevIndex = () =>
    currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === projects.length - 1 ? 0 : currentIndex + 1;

  const currentProject = projects[currentIndex];

  return (
    <>
      {/* MOBILE-ONLY OVERRIDES, DESKTOP UNCHANGED */}
      <style>
        {`
          @media (max-width: 767px) {
            .projects-section {
              padding-top: 64px !important;
              padding-bottom: 64px !important;
              margin-top: 64px !important;
            }

            .projects-main {
              min-height: auto !important;
              gap: 40px !important;
            }

            /* Header: stack description + buttons under heading, all left aligned */
            .projects-header-line2 {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 12px !important;
            }

            .projects-header-text {
              font-size: 16px !important;
            }

            .projects-header-title {
              font-size: 32px !important;
              line-height: 1.25 !important;
            }

            .projects-header-buttons {
              width: 100% !important;
              justify-content: flex-start !important;
              gap: 8px !important;
              flex-wrap: wrap !important;
            }

            /* Carousel: single centered image, hide blurred side previews */
            .projects-carousel {
              width: 100% !important;
              margin-left: 0 !important;
              height: auto !important;
            }

            .projects-main-image {
              width: 100% !important;
              max-width: 100% !important;
              height: 260px !important;
            }

            .projects-side-preview {
              display: none !important;
            }

            /* Project details: reduce fonts, keep stack */
            .projects-details-name {
              font-size: 24px !important;
            }

            .projects-details-tags span {
              font-size: 12px !important;
              padding: 6px 12px !important;
            }

            .projects-quote {
              font-size: 13px !important;
            }
          }
        `}
      </style>

      <section
        className="w-full px-4 sm:px-8 lg:px-16 projects-section"
        style={{
          backgroundColor: '#F9ECEA',
          paddingTop: '112px',
          paddingBottom: '112px',
          marginTop: '112px',
          overflow: 'hidden'
        }}
      >
        {/* Main Container */}
        <div
          className="mx-auto flex flex-col projects-main"
          style={{
            width: '100%',
            maxWidth: '1280px',
            minHeight: '1032px',
            gap: '80px',
            opacity: 1
          }}
        >
          {/* Header Section */}
          <div
            className="flex flex-col gap-0"
            style={{
              width: '100%',
              opacity: 1
            }}
          >
            {/* First Line - Heading */}
            <div className="flex justify-between items-start">
              <h2
                className="font-unbounded projects-header-title"
                style={{
                  fontWeight: 500,
                  fontSize: '48px',
                  lineHeight: '120%',
                  letterSpacing: '-1%',
                  color: '#18191A',
                  opacity: 1
                }}
              >
                Featured Projects
              </h2>
            </div>

            {/* Second Line - Description and Buttons */}
            <div className="flex justify-between items-center mt-3 projects-header-line2">
              <p
                className="font-poppins projects-header-text"
                style={{
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  color: '#404040',
                  opacity: 1
                }}
              >
                Where Vision Meets Execution.
              </p>

              <div className="flex gap-4 items-center projects-header-buttons">
                <button
                  className="font-poppins font-medium transition-all hover:bg-[#A63D2A]"
                  style={{
                    fontSize: '14px',
                    backgroundColor: '#C34A36',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  View Portfolio
                </button>
                <button
                  className="font-poppins font-medium transition-all inline-flex items-center gap-2 hover:text-[#A63D2A]"
                  style={{
                    fontSize: '14px',
                    color: '#C34A36',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Contact
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

          {/* Carousel Container */}
          <div
            className="relative projects-carousel"
            style={{
              width: '100vw',
              marginLeft: 'calc(-50vw + 50%)',
              height: '600px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Left Preview Image */}
            <div
              className="absolute cursor-pointer transition-all duration-300 projects-side-preview"
              onClick={handlePrev}
              style={{
                left: 'calc(50% - 740px)',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '300px',
                height: '500px',
                opacity: 0.5,
                zIndex: 1
              }}
            >
              <img
                src={projects[getPrevIndex()].image}
                alt="Previous project"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  filter: 'blur(8px)'
                }}
              />
            </div>

            {/* Center Main Image */}
            <div
              key={currentIndex}
              className="relative projects-main-image"
              style={{
                width: '1280px',
                height: '600px',
                opacity: 1,
                zIndex: 20,
                animation:
                  direction === 'next'
                    ? 'slideInFromRight 0.5s ease-out'
                    : 'slideInFromLeft 0.5s ease-out'
              }}
            >
              <img
                src={currentProject.image}
                alt={currentProject.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px'
                }}
              />

              {/* Pagination Dots */}
              <div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white/80 px-4 py-2 rounded-full"
                style={{ zIndex: 30 }}
              >
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 'next' : 'prev');
                      setCurrentIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index ? 'bg-[#C34A36] w-8' : 'bg-gray-300 w-2'
                    }`}
                    style={{ border: 'none', cursor: 'pointer' }}
                  />
                ))}
              </div>
            </div>

            {/* Right Preview Image */}
            <div
              className="absolute cursor-pointer transition-all duration-300 projects-side-preview"
              onClick={handleNext}
              style={{
                right: 'calc(50% - 740px)',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '300px',
                height: '500px',
                opacity: 0.5,
                zIndex: 1
              }}
            >
              <img
                src={projects[getNextIndex()].image}
                alt="Next project"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  filter: 'blur(8px)'
                }}
              />
            </div>
          </div>

          {/* Project Details */}
          <div
            key={`details-${currentIndex}`}
            className="flex flex-col gap-6"
            style={{
              width: '100%',
              opacity: 1,
              animation:
                direction === 'next'
                  ? 'fadeSlideUp 0.5s ease-out'
                  : 'fadeSlideDown 0.5s ease-out'
            }}
          >
            <h3
              className="font-unbounded projects-details-name"
              style={{
                fontWeight: 500,
                fontSize: '36px',
                lineHeight: '130%',
                letterSpacing: '-1%',
                color: '#0A0403',
                opacity: 1
              }}
            >
              {currentProject.name}
            </h3>

            <div className="flex gap-4 flex-wrap projects-details-tags">
              <span
                className="font-poppins"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#C34A36',
                  backgroundColor: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px'
                }}
              >
                {currentProject.size}
              </span>
              <span
                className="font-poppins"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#C34A36',
                  backgroundColor: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px'
                }}
              >
                {currentProject.location}
              </span>
              <span
                className="font-poppins"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#C34A36',
                  backgroundColor: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px'
                }}
              >
                {currentProject.capacity}
              </span>
              <span
                className="font-poppins"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#C34A36',
                  backgroundColor: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px'
                }}
              >
                {currentProject.type}
              </span>
            </div>

            <div className="flex gap-6 items-start">
              <blockquote
                className="font-poppins italic flex-1 projects-quote"
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '150%',
                  color: '#0A0403',
                  opacity: 1,
                  paddingLeft: '24px',
                  borderLeft: '4px solid #C34A36'
                }}
              >
                "{currentProject.quote}"
                <footer
                  className="font-poppins not-italic mt-2"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#0A0403'
                  }}
                >
                  — {currentProject.author}, {currentProject.position}
                </footer>
              </blockquote>

              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="transition-all hover:bg-gray-200"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    border: '1px solid #E5E5E5',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    style={{ color: '#C34A36' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="transition-all hover:bg-gray-200"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    border: '1px solid #E5E5E5',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    style={{ color: '#C34A36' }}
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

          {/* Animations */}
          <style jsx>{`
            @keyframes slideInFromRight {
              from {
                transform: translateX(100px);
                opacity: 0;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }

            @keyframes slideInFromLeft {
              from {
                transform: translateX(-100px);
                opacity: 0;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }

            @keyframes fadeSlideUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes fadeSlideDown {
              from {
                opacity: 0;
                transform: translateY(-20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
        </section>

      </>
  );
};

export default Projects;

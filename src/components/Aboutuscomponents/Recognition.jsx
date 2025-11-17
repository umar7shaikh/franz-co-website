import { useState, useRef } from 'react';
import Recognition1 from '../../assets/Recognition1.png';
import Recognition2 from '../../assets/Recognition2.jpg';
import Recognition3 from '../../assets/Recognition3.jpg';

const recognitionItems = [
  {
    title: '"Best Fitness Amenity Solutions Provider" | 2024',
    desc: 'CREDAI Excellence Awards. "Innovation in Real Estate Services" - PropTech India Awards',
    img: Recognition1,
  },
  {
    title: 'Top Real Estate Wellness Partner | 2023',
    desc: 'Asia Property Awards - Health & Wellness Facilities Category',
    img: Recognition2,
  },
  {
    title: 'Outstanding Corporate Gym Integration | 2022',
    desc: 'Corporate Wellness India Conference Honors',
    img: Recognition3,
  }
];

const Recognition = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex(prev => prev === 0 ? recognitionItems.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex(prev => prev === recognitionItems.length - 1 ? 0 : prev + 1);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) handleNext();
    if (touchStartX.current - touchEndX.current < -50) handlePrev();
  };

  const getPrevIndex = () => (currentIndex === 0 ? recognitionItems.length - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex === recognitionItems.length - 1 ? 0 : currentIndex + 1);

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16" style={{ overflow: 'hidden' }}>
      <style>{`
        @keyframes slideInFromRight {
          from { transform: translateX(60px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInFromLeft {
          from { transform: translateX(-60px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold text-[#3B2327] mb-10">
          Recognition & Awards
        </h2>
        <div
          className="relative flex justify-center items-center"
          style={{ minHeight: 620, gap: 64 }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Thumb */}
          <div
            className="hidden lg:block absolute left-0 cursor-pointer"
            onClick={handlePrev}
            style={{
              width: 300, height: 500, opacity: 0.5, filter: "blur(6px)", zIndex: 1, left: 0
            }}
          >
            <img
              src={recognitionItems[getPrevIndex()].img}
              alt="Previous"
              style={{
                width: "100%", height: "100%", objectFit: "cover", borderRadius: 20
              }}
            />
          </div>

          {/* Main Image */}
          <div
            key={currentIndex}
            className="relative overflow-hidden rounded-2xl mx-4 transition-all shadow-lg"
            style={{
              width: 1280, height: 600, opacity: 1, zIndex: 5,
              animation: direction === 'next'
                ? "slideInFromRight 0.5s"
                : "slideInFromLeft 0.5s"
            }}
          >
            <img
              src={recognitionItems[currentIndex].img}
              alt="Recognition"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Next Thumb */}
          <div
            className="hidden lg:block absolute right-0 cursor-pointer"
            onClick={handleNext}
            style={{
              width: 300, height: 500, opacity: 0.5, filter: "blur(6px)", zIndex: 1, right: 0
            }}
          >
            <img
              src={recognitionItems[getNextIndex()].img}
              alt="Next"
              style={{
                width: "100%", height: "100%", objectFit: "cover", borderRadius: 20
              }}
            />
          </div>
        </div>
        <div className="flex items-start justify-between mt-6">
          {/* Left side: Text content */}
          <div className="flex-1 max-w-2xl">
            <div className="text-[#C34A36] font-bold mb-2 text-lg">
              {recognitionItems[currentIndex].title}
            </div>
            <div className="text-[#664A32] text-sm mb-6">
              {recognitionItems[currentIndex].desc}
            </div>
            {/* Pagination dots */}
            <div className="flex gap-2">
              {recognitionItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-[#C34A36] w-8' : 'bg-gray-300 w-2'}`}
                  style={{ border: 'none', cursor: 'pointer' }}
                  aria-label={`Go to recognition ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right side: Navigation buttons */}
          <div className="flex gap-2">
            <button
              className="rounded bg-[#f1eeed] w-8 h-8 flex items-center justify-center hover:bg-[#e1d9d7] transition"
              onClick={handlePrev}
              aria-label="Previous"
            >
              <span className="text-[#C34A36] font-bold text-lg">&lt;</span>
            </button>
            <button
              className="rounded bg-[#f1eeed] w-8 h-8 flex items-center justify-center hover:bg-[#e1d9d7] transition"
              onClick={handleNext}
              aria-label="Next"
            >
              <span className="text-[#C34A36] font-bold text-lg">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;

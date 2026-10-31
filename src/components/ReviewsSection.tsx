import { useState, useRef } from 'react';
import { REVIEWS } from '../data/reviewsData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ReviewsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 3;
  const totalPages = Math.ceil(REVIEWS.length / pageSize);

  const displayedReviews = REVIEWS.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-24 bg-[#FAF7F2] border-b border-[#E8E4DA]" id="review">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section Header (Little Cabin Club exact aesthetic) */}
        <div className="text-center mb-14">
          <h2 className="font-cormorant text-4xl sm:text-[2.75rem] font-normal text-[#111111] mb-5 tracking-tight">
            Member Reviews
          </h2>
          <p className="text-[0.95rem] text-[#222222] leading-[1.75] max-w-lg mx-auto">
            아볼로에서 함께하는 멤버들의 이야기를 만나보세요.
          </p>
        </div>

        {/* Carousel Container with Left/Right Buttons */}
        <div className="relative group/carousel">
          {/* Subtle Left Arrow Button for smooth transition */}
          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-[#E5E0D8] text-[#4A4A48] hover:text-[#111111] items-center justify-center shadow-xs transition-all opacity-70 hover:opacity-100 z-10 cursor-pointer"
            aria-label="이전 후기"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Grid (Clean white cards, simple typography, avatar at bottom) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-300">
            {displayedReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white border border-[#E5E0D8] rounded-[2px] p-8 sm:p-9 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all duration-200"
              >
                {/* Review Body Text */}
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-[0.90rem] sm:text-[0.93rem] text-[#2C2B29] leading-[1.82] tracking-[-0.01em]">
                    “{rev.body}”
                  </p>
                </div>

                {/* Member Profile at Bottom (원형 프레임 삭제) */}
                <div className="text-center mt-8 pt-5 border-t border-[#F0ECE1]">
                  <div className="text-[0.92rem] font-bold text-[#1D1D1D] mb-1">
                    {rev.name}
                  </div>
                  <div className="text-xs text-[#3B5E43] font-semibold">
                    {rev.program}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subtle Right Arrow Button for smooth transition */}
          <button
            onClick={handleNext}
            className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-[#E5E0D8] text-[#4A4A48] hover:text-[#111111] items-center justify-center shadow-xs transition-all opacity-70 hover:opacity-100 z-10 cursor-pointer"
            aria-label="다음 후기"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Pagination Dots & Mobile Arrow Controls (Exact style of littlecabinclub) */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={handlePrev}
            className="lg:hidden p-1.5 text-[#84827D] hover:text-[#1D1D1D] cursor-pointer"
            aria-label="이전 후기"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`transition-all rounded-full cursor-pointer ${
                  currentPage === idx
                    ? 'w-2 h-2 bg-[#3B5E43]'
                    : 'w-2 h-2 border border-[#3B5E43]/40 bg-transparent hover:border-[#3B5E43]'
                }`}
                aria-label={`${idx + 1}번째 후기 페이지`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="lg:hidden p-1.5 text-[#84827D] hover:text-[#1D1D1D] cursor-pointer"
            aria-label="다음 후기"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

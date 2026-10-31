import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

interface StatementProps {
  onOpenAbout: () => void;
}

export default function Statement({ onOpenAbout }: StatementProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // If IntersectionObserver is not available, default to visible
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-28 text-center border-b border-[#E8E4DA] bg-[#FBF9F4] overflow-hidden"
      id="about-preview"
    >
      <div
        className={`max-w-[1040px] mx-auto px-6 transition-all duration-[2000ms] ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Little Cabin Signature Handwriting Typography */}
        <div className="font-caveat text-5xl sm:text-6xl md:text-[3.5rem] font-bold text-[#1D1D1D] leading-[1.05] tracking-[-0.01em] mb-8">
          Read, Write, and Reconcile!
        </div>

        {/* Editorial Body Text */}
        <div className="text-[1.02rem] text-[#4A4A48] leading-[1.88] max-w-[680px] mx-auto mb-10 text-center">
          <p className="mb-5">
            아볼로는 ‘읽고, 쓰고, 나누는’ 훈련을 통해 나만의 단단한 생각 근육을 기릅니다.<br className="hidden sm:inline" /> 고전부터 현대문학까지 함께 읽는 <strong className="font-semibold text-[#1D1D1D]">아볼로 북클럽</strong>부터, 인문학 글쓰기 학교인 <strong className="font-semibold text-[#1D1D1D]">아볼로 스투디움</strong>, 현실 이슈를 탐구하는 <strong className="font-semibold text-[#1D1D1D]">아볼로 테이블</strong>까지 나에게 꼭 맞는 배움의 자리에서 시작해보세요.
          </p>
          <p>
            지난 10여 년간 이 자리를 거쳐 간 200여 명의 든든한 동문,<br />
            그리고 오랜 시간 지성 운동의 뿌리를 일궈온 한국복음주의운동연구소(복연)가 아볼로와 함께 합니다.
          </p>
        </div>

        {/* Signature Capsule Button with Search Icon */}
        <div>
          <button
            onClick={onOpenAbout}
            className="inline-flex items-center gap-2 bg-[#2B2F2C] hover:bg-[#191B1A] text-white text-[0.95rem] font-medium px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
          >
            <Search className="w-4 h-4 stroke-[2.5]" />
            <span>아볼로 알아보기</span>
          </button>
        </div>
      </div>
    </section>
  );
}

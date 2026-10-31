import { NavPage } from './Navbar';

interface CommunityCtaSectionProps {
  onNavigate?: (page: NavPage) => void;
}

export default function CommunityCtaSection({ onNavigate }: CommunityCtaSectionProps) {
  const handleDonateClick = () => {
    if (onNavigate) {
      onNavigate('donate');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-24 bg-[#FAF7F2] border-b border-[#E8E4DA] text-center relative overflow-hidden">
      {/* Subtle decorative background circles */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#EAE5D9]/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#E3EBE4]/40 blur-3xl pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        {/* 1. Deleted top subtitle per user request #1 */}

        {/* 2. With Apollos with same font as Programs */}
        <h2 className="font-cormorant text-4xl sm:text-[2.8rem] font-bold text-[#1D1D1D] mb-3 tracking-tight">
          With Apollos
        </h2>

        {/* 3. Updated Description Text per user request #3 */}
        <p className="text-[0.96rem] sm:text-[1.02rem] text-[#55534E] leading-relaxed max-w-xl mx-auto mb-9">
          SNS에서 일상의 소식을 만나고, 후원으로 사유의 내일을 함께 열어주세요.
        </p>

        {/* 4. Three Action Buttons: Instagram, Naver Blog, Donate */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          {/* 1) 인스타그램 (로고 형태) */}
          <a
            href="https://www.instagram.com/the_apollos__/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-[#F3EFE6] text-[#1D1D1D] border border-[#DCD6C8] hover:border-[#1D1D1D] px-6 py-3.5 rounded-full text-[0.95rem] font-medium transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            aria-label="인스타그램 바로가기"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-none stroke-current stroke-2 text-[#E1306C]"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>인스타그램</span>
          </a>

          {/* 2) 네이버 (블로그 형태) */}
          <a
            href="https://blog.naver.com/apollosstudium"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-[#F3EFE6] text-[#1D1D1D] border border-[#DCD6C8] hover:border-[#1D1D1D] px-6 py-3.5 rounded-full text-[0.95rem] font-medium transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            aria-label="네이버 블로그 바로가기"
          >
            <span className="w-4 h-4 rounded-[4px] bg-[#03C75A] text-white font-black text-[11px] inline-flex items-center justify-center leading-none">
              b
            </span>
            <span>네이버 블로그</span>
          </a>

          {/* 3) 후원하기 */}
          <button
            onClick={handleDonateClick}
            className="inline-flex items-center justify-center bg-[#2B2F2C] hover:bg-[#191B1A] text-white px-7 py-3.5 rounded-full text-[0.95rem] font-medium transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            <span>후원하기</span>
          </button>
        </div>
      </div>
    </section>
  );
}

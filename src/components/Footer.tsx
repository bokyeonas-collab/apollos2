import { NavPage } from './Navbar';

interface FooterProps {
  onNavigate?: (page: NavPage) => void;
}

export default function Footer({}: FooterProps) {
  return (
    <footer className="py-12 border-t border-[#333634] bg-[#222423] text-xs text-[#A5A39C]">
      <div className="max-w-[1040px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Side: Organization Info */}
        <div>
          {/* 4. 아볼로 & 한국복음주의운동연구소 (첨부사진1, 첨부사진2 각각 앞에 배치) */}
          <div className="font-semibold text-white text-[0.88rem] mb-2 flex items-center flex-wrap gap-2.5">
            <div className="inline-flex items-center gap-1.5">
              <img
                src="/assets/aistudio/___________2026-10-23______10.44.38_1c86d390.png"
                alt="아볼로 로고"
                className="h-4 sm:h-[18px] w-auto object-contain shrink-0 bg-white/95 p-[1px] rounded-[3px]"
                onError={(e) => {
                  e.currentTarget.src = '/images/apollos_logo.png';
                }}
              />
              <span>아볼로</span>
            </div>
            <span className="text-[#73716B] font-normal mx-0.5">&</span>
            <div className="inline-flex items-center gap-1.5">
              <img
                src="/images/bokyeon_logo.png"
                alt="한국복음주의운동연구소 로고"
                className="h-4 sm:h-[18px] w-auto object-contain shrink-0 bg-white/95 p-[2px] rounded-[3px]"
                onError={(e) => {
                  e.currentTarget.src = '/assets/aistudio/__________________________________1__62c8928e.png';
                }}
              />
              <span>한국복음주의운동연구소</span>
            </div>
          </div>
          <p className="leading-relaxed text-[#8E8C86]">
            대표: 이강일 | 문의: apollos@bokyeon.org<br />
            주소: 서울시 마포구 동교로 136 서강빌딩 502호
          </p>
          <p className="mt-2 text-[#73716B]">
            © 2026 한국복음주의운동연구소. All rights reserved.
          </p>
        </div>

        {/* Right: SNS Icons (5번 요청: 빠른 바로가기 링크 삭제) */}
        <div className="flex items-center gap-4 self-start md:self-auto">
          {/* 1. Instagram */}
          <a
            href="https://www.instagram.com/the_apollos__/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAF8F5] hover:text-[#3B5E43] transition-colors p-1"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-none stroke-current stroke-2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <circle cx="12" cy="12" r="4.2"></circle>
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"></circle>
            </svg>
          </a>

          {/* 2. Naver Blog */}
          <a
            href="https://blog.naver.com/apollosstudium"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAF8F5] hover:text-[#3B5E43] transition-colors p-1"
            aria-label="Naver Blog"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M4 3h5.2l6.2 9.2V3H20v18h-5.2L8.6 11.8V21H4V3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

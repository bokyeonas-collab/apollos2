interface HeroProps {
  onExplorePrograms?: () => void;
  onOpenIntroModal?: () => void;
}

export default function Hero({}: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-20 pb-[67px] min-h-[535px] flex flex-col justify-center text-center border-b border-[#2C312E] bg-[#1A1E1C]">
      {/* Background Image: mainpage3.jpg saved in project with local server fallback */}
      <img
        src="/images/mainpage3.jpg"
        alt="아볼로 독서 모임 메인 배경"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none transition-opacity duration-300 animate-hero-bg"
        onError={(e) => {
          const target = e.currentTarget;
          if (!target.src.includes('localhost:8000')) {
            target.src = 'http://localhost:8000/메인페이지3.jpg';
          }
        }}
      />

      {/* Brightened Soft Overlay for Image Clarity & Text Readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/55 pointer-events-none" />

      {/* Content Container (Layered on top of dark overlay) with subtle graceful entrance */}
      <div className="relative z-10 max-w-[1040px] mx-auto px-6 text-white w-full animate-hero-fade">
        {/* Attached Apollos Brand Logo (2/3 size) */}
        <div className="mb-7 md:mb-9 flex justify-center items-center h-[55px]">
          <img
            src="/images/apollos_logo_white.png"
            alt="Apollos Logo"
            className="h-full w-auto object-contain drop-shadow-md select-none pointer-events-none"
            onError={(e) => {
              e.currentTarget.src = '/images/apollos_logo_cropped.png';
            }}
          />
        </div>

        {/* Hero Catchphrase */}
        <h1 className="text-3xl sm:text-4xl md:text-[2.9rem] font-bold text-white leading-[1.2] tracking-[-0.03em] max-w-3xl mx-auto mb-1.5 drop-shadow-md">
          오늘의 신앙, 오늘의 언어로
        </h1>
        <p className="font-kopub text-sm sm:text-base md:text-[1.02rem] font-medium text-[#F29938] tracking-[0.02em] mb-6 drop-shadow-md leading-tight">
          시대의 질문 앞에서 서로의 언어를 배우다
        </p>

        {/* Lead description */}
        <p className="text-[1.05rem] md:text-[1.14rem] text-[#F3EFE6] leading-[1.85] max-w-[660px] mx-auto drop-shadow-xs font-normal">
          아볼로는 고전과 현대 텍스트를 함께 읽고 쓰며,<br />
          사회적 갈등 속에서 화해의 길을 찾는 기독교 인문학 커뮤니티입니다.
        </p>
      </div>
    </section>
  );
}


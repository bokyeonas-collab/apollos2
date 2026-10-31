import ScrollReveal from '../components/ScrollReveal';

interface BokyeonPageProps {
  onNotify?: (msg: string) => void;
}

export default function BokyeonPage({}: BokyeonPageProps) {
  const staff = ['신혜미', '금종환', '문이선'];
  const daniels = [
    '김선호',
    '김시원',
    '남궁예린',
    '안호진',
    '이규영',
    '이현배',
    '최예은',
    '홍은택',
    '황은율',
  ];
  const advisory = [
    '김명윤',
    '김상덕',
    '김선일',
    '박유진',
    '박찬주',
    '배덕만',
    '옥명호',
    '윤환철',
    '정성국',
    '정재영',
    '지성근',
    '최삼열',
    '황병구',
  ];

  const milestones = [
    { year: '1956', desc: '한국 IVF 시작' },
    {
      year: '2007',
      desc: 'IVF 사역연구원 아래 복연 출범 및 대학원생 아볼로 포럼 개최',
    },
    { year: '2014', desc: '아볼로 북클럽 개설' },
    { year: '2015', desc: "팟캐스트 '복팟' 시작" },
    { year: '2016', desc: '아볼로 스투디움 대학, 대학원생 과정 개설' },
    { year: '2018', desc: '아볼로 스투디움 사역자 과정 개설' },
    { year: '2022', desc: 'IVF에서 독립하여 민간 독립 연구 거점으로 도약' },
  ];

  return (
    <div className="pt-10 md:pt-14 pb-16 md:pb-24 animate-in fade-in duration-200">
      {/* 1. Page Header (75% 크기 조정) */}
      <div className="max-w-[1040px] mx-auto px-6 mb-7 sm:mb-9">
        <ScrollReveal duration={2000}>
          <div className="text-center">
            {/* Minimalist Official Logo */}
            <div className="flex justify-center mb-3">
              <img
                src="/images/bokyeon_logo.png"
                alt="한국복음주의운동연구소 로고"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain select-none"
                onError={(e) => {
                  e.currentTarget.src = '/assets/aistudio/__________________________________1__62c8928e.png';
                }}
              />
            </div>
            <span className="font-cormorant text-xs sm:text-sm font-semibold italic text-[#3B5E43] tracking-widest uppercase block mb-1.5">
              The Research Institute · BOKYEON
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#1D1D1D] mb-2 tracking-tight">
              복연 : 한국복음주의운동연구소
            </h1>
            <p className="text-xs sm:text-[0.88rem] text-[#73716B] max-w-lg mx-auto leading-relaxed">
              복음주의 지성 운동과 평화·화해의 신학을 연구하며, 아볼로의 든든한 학문적 뿌리가 되어주고 있습니다.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* =========================================================================
          2. 미션 섹션 (Full Width: 좌우 여백 없이 크게 화면 전체를 채우는 히어로 구성)
          ========================================================================= */}
      <div className="w-full mb-14 sm:mb-16">
        <ScrollReveal duration={2000}>
          <div className="relative w-full min-h-[294px] sm:min-h-[350px] flex flex-col items-center justify-center text-center px-6 py-11 sm:py-14 shadow-md overflow-hidden">
            {/* Background Image: edge-to-edge */}
            <img
              src="/images/bokyeon_mission.jpg"
              alt="함께 모여 성경과 인문 고전을 연구하는 복연 연구 모임"
              className="absolute inset-0 w-full h-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.src = '/assets/aistudio/_______2ffa92f9.jpg';
              }}
            />

            {/* Dark Scrim Overlay */}
            <div className="absolute inset-0 bg-[#161B18]/74 backdrop-blur-[1px]" />

            {/* Content Container */}
            <div className="relative z-10 max-w-3xl mx-auto text-white space-y-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                “오늘의 신앙, 오늘의 언어로”
              </h2>

              <div className="text-xs sm:text-[0.95rem] text-[#F3EFE6] leading-[1.88] space-y-3 pt-1 max-w-2xl mx-auto">
                <p>
                  한국복음주의운동연구소(복연)는 한국 복음주의 운동의 역사적 흐름과 지성사적 성과를 비판적으로 계승하고, 오늘의 한국 사회가 직면한 양극화와 갈등 속에서 <strong className="text-white font-bold">‘평화와 화해의 신학’</strong>을 연구·실천하기 위해 설립된 비영리 독립 연구소입니다.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Main Body Sections (In container) */}
      <div className="max-w-[1040px] mx-auto px-6 space-y-12 sm:space-y-14">
        {/* =========================================================================
            3. 복연이 걸어온 길과 가치 (영어 서브타이틀 삭제)
            ========================================================================= */}
        <ScrollReveal duration={2000}>
          <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D]">
              지성과 신앙의 균형, 복연이 걸어온 15년의 여정
            </h3>
            <div className="text-xs sm:text-[0.93rem] text-[#4A4A48] leading-[1.88] space-y-3">
              <p>
                복연은 2007년 한국기독학생회(IVF) 산하 사역연구원으로 출범하여, 신앙과 학문의 간극에서 갈등하던 대학생·청년들에게 든든한 학문적 안식처가 되어왔습니다. 팟캐스트 ‘복팟’, 대학원생 아볼로 포럼, 인문 서평 글쓰기 학교인 ‘아볼로 스투디움’ 등을 통해 ‘생각하는 신앙인’들의 연대를 만들고자 했습니다.
              </p>
              <p>
                그리고 2022년, 복연은 IVF로부터 독립하여 비영리 독립 연구소로 새롭게 도약했습니다. 오늘의 한국 교회가 마주한 반지성주의와 사회적 고립을 넘어, 교회의 담장을 넘어 세상과 상식의 언어로 소통하는 ‘이중언어 통역자’들을 세워가는 일에 매진하고 있습니다.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            4. 4대 핵심 연구 영역 (영어 서브타이틀 삭제)
            ========================================================================= */}
        <ScrollReveal duration={2000}>
          <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D]">
                복연의 4대 핵심 연구 및 실천 영역
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-[0.90rem] text-[#4A4A48] leading-[1.8]">
              <div className="border-t border-[#E5E0D8] pt-4">
                <span className="font-cormorant text-xl font-bold text-[#3B5E43] block mb-1">01</span>
                <strong className="text-[#1D1D1D] text-sm block mb-1.5 font-bold">
                  한국 복음주의 지성사 연구
                </strong>
                <p>
                  한국 복음주의 운동의 태동과 학원선교운동의 궤적을 실증적으로 추적하고, 오늘의 교회가 마주한 위기의 뿌리를 학문적으로 진단합니다.
                </p>
              </div>

              <div className="border-t border-[#E5E0D8] pt-4">
                <span className="font-cormorant text-xl font-bold text-[#3B5E43] block mb-1">02</span>
                <strong className="text-[#1D1D1D] text-sm block mb-1.5 font-bold">
                  평화와 화해의 신학
                </strong>
                <p>
                  혐오와 배제가 일상화된 사회 속에서 기독교 평화주의와 공존의 윤리를 모색하며, 갈등을 화해로 이끄는 신학적 실천 방안을 제시합니다.
                </p>
              </div>

              <div className="border-t border-[#E5E0D8] pt-4">
                <span className="font-cormorant text-xl font-bold text-[#3B5E43] block mb-1">03</span>
                <strong className="text-[#1D1D1D] text-sm block mb-1.5 font-bold">
                  청년 아볼로 스투디움
                </strong>
                <p>
                  대학생·청년·목회자들이 인문 고전과 신학 텍스트를 직접 읽고 서평을 쓰는 훈련을 통해 신앙과 세상의 '이중언어 통역자'로 성장하도록 돕습니다.
                </p>
              </div>

              <div className="border-t border-[#E5E0D8] pt-4">
                <span className="font-cormorant text-xl font-bold text-[#3B5E43] block mb-1">04</span>
                <strong className="text-[#1D1D1D] text-sm block mb-1.5 font-bold">
                  공공 포럼 및 출판
                </strong>
                <p>
                  팟캐스트 '복팟', 아티클 발행, 단행본 출판, 정기 포럼을 통해 교회 담장을 넘어 사회와 대화하는 공공적 공론장을 지속적으로 형성합니다.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            5. 복연 사람들 (영어 서브타이틀 삭제)
            ========================================================================= */}
        <ScrollReveal duration={2000}>
          <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D]">
                복연 사람들
              </h3>
            </div>

            <div className="space-y-6 text-xs sm:text-[0.92rem] text-[#4A4A48] leading-relaxed">
              {/* Director */}
              <div className="border-t border-[#E5E0D8] pt-5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 sm:gap-6">
                  {/* Left: Info & Quote */}
                  <div className="flex-1 space-y-3.5">
                    <div className="mb-1">
                      <h4 className="text-lg sm:text-xl font-bold text-[#1D1D1D]">이강일</h4>
                    </div>

                    <ul className="text-xs sm:text-[0.92rem] text-[#55534E] space-y-1 list-disc list-inside">
                      <li>한국복음주의운동연구소 소장</li>
                      <li>서울 장신대 객원 교수 / 종교학 박사 / 前 IVF 간사</li>
                    </ul>

                    {/* 소장 인사말 인용구 (명조체) */}
                    <div className="pt-2 font-serif text-xs sm:text-[0.95rem] text-[#2C2B29] leading-relaxed bg-[#FAF8F5] p-4 sm:p-5 rounded-[4px] border border-[#E8E4DA]/70 space-y-2 font-normal">
                      <p>
                        “복연에 찾아오신 당신을 환영합니다.<br />
                        복연은 2007년부터 주님이 주신 생각을 독단이나 회의에 빠트리지 않고, 온전한 판단의 원천으로 삼는 연구와 교육에 힘써 왔습니다.
                      </p>
                      <p>
                        앞으로 생각하고 공부하는 당신의 친구가 되어 돕겠습니다.<br />
                        함께 해주세요. 감사합니다.”
                      </p>
                    </div>
                  </div>

                  {/* Right: Circular Framed Photo (맨 오른쪽 원형 프레임) */}
                  <div className="shrink-0 flex sm:justify-end self-center sm:self-start">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#DCD6C8] shadow-sm bg-[#ECE8DF]">
                      <img
                        src="/assets/aistudio/_______________9c6deffa.jpg"
                        alt="이강일 소장"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Staff */}
              <div className="border-t border-[#E5E0D8] pt-4">
                <span className="text-xs font-semibold text-[#84827D] uppercase tracking-wider block mb-1.5">
                  실무진
                </span>
                <p className="text-[#1D1D1D] font-medium text-sm">
                  {staff.join(' · ')}
                </p>
              </div>

              {/* Daniels committee */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-[#84827D] uppercase tracking-wider block mb-1.5">
                  실행위원회 (다니엘스)
                </span>
                <p className="text-[#44423E]">
                  {daniels.join(' · ')}
                </p>
              </div>

              {/* Advisory committee */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-[#84827D] uppercase tracking-wider block mb-1.5">
                  자문위원회
                </span>
                <p className="text-[#66635D]">
                  {advisory.join(' · ')}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            6. 걸어온 길 (영어 서브타이틀 삭제)
            ========================================================================= */}
        <ScrollReveal duration={2000}>
          <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D]">
                걸어온 길
              </h3>
            </div>

            <div className="divide-y divide-[#F0ECE1] text-xs sm:text-[0.92rem]">
              {milestones.map((item, idx) => (
                <div key={idx} className="py-3.5 first:pt-2 last:pb-0 flex items-baseline gap-4 sm:gap-6">
                  <span className="font-cormorant text-base sm:text-lg font-bold text-[#3B5E43] shrink-0 tabular-nums w-12">
                    {item.year}
                  </span>
                  <p className="text-[#333333] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            7. 추천사 (영어 서브타이틀 삭제)
            ========================================================================= */}
        <ScrollReveal duration={2000}>
          <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D]">
              추천사
            </h3>
            <blockquote className="font-serif text-sm sm:text-[0.98rem] text-[#2B2F2C] leading-[1.95] pt-2 font-normal">
              “시대의 흐름과 교전하지 않는 게토성 기독교에 지쳤다면, 복연은 분명코 이 시대 하나님 나라의 파발마가 될 것입니다. 지성 없는 영성의 공허함과 위험성을 알기에 복연의 사역을 성원하며, 복연을 통해 '모든 생각을 사로잡아 그리스도에게 복종하게 하는 일'(고후 10:5)이 활발해지기를 염원합니다.”
            </blockquote>
            <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between text-xs">
              <div>
                <strong className="text-[#1D1D1D] font-bold block text-sm">송인규 소장</strong>
                <span className="text-[#84827D]">한국교회탐구센터 소장</span>
              </div>
              <span className="text-[#3B5E43] font-semibold">복연 추천의 글</span>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            8. 복연 콘텐츠 (복연 블로그, 복연 TV, IVF 온강 순서로 한 행 세 열 나열)
            ========================================================================= */}
        <ScrollReveal duration={2000}>
          <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D] mb-2">
                복연 콘텐츠
              </h3>
              <p className="text-xs sm:text-[0.92rem] text-[#6E6B65] leading-relaxed">
                복연에서 제작하는 소식 및 학술지, 영상 강좌, 강연 아카이브를 만나보실 수 있습니다.
              </p>
            </div>

            {/* 1행 3열 그리드 (순서: 1. 복연 블로그 -> 2. 복연 TV -> 3. IVF 온강, 각 카드 사이에 얇은 선만 표시) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 pt-2">
              {/* 1. 복연 블로그 */}
              <div className="py-4 md:py-0 md:pr-8 flex flex-col justify-between group">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-[4px] bg-[#EAF8F0] flex items-center justify-center shrink-0">
                      <span className="w-5 h-5 rounded-[3px] bg-[#03C75A] text-white font-black text-xs inline-flex items-center justify-center leading-none">
                        b
                      </span>
                    </span>
                    <h4 className="text-lg font-bold text-[#1D1D1D] group-hover:text-[#03C75A] transition-colors">
                      복연 블로그
                    </h4>
                  </div>
                  <p className="text-xs sm:text-[0.88rem] text-[#55534E] leading-[1.8]">
                    복연의 최신 소식을 전달하는 복연 레터부터, 연구소의 활동 및 서평까지 블로그에서 확인하실 수 있습니다.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="https://blog.naver.com/apollosstudium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-[#1D1D1D] hover:bg-[#03C75A] text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-md transition-all cursor-pointer whitespace-nowrap shadow-xs hover:shadow-sm"
                  >
                    <span>바로가기</span>
                  </a>
                </div>
              </div>

              {/* 2. 복연TV */}
              <div className="py-6 md:py-0 md:px-8 border-t md:border-t-0 md:border-l border-[#E5E0D8] flex flex-col justify-between group">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-[4px] bg-[#FFF0F0] flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4 text-[#FF0000] fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </span>
                    <h4 className="text-lg font-bold text-[#1D1D1D] group-hover:text-[#FF0000] transition-colors">
                      복연TV
                    </h4>
                  </div>
                  <p className="text-xs sm:text-[0.88rem] text-[#55534E] leading-[1.8]">
                    복연에서 운영하는 유튜브 채널입니다. 복팟 오리지널, 복팟 플러스, 복연 인터뷰 등 다양한 영상 콘텐츠를 만나보실 수 있습니다.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="https://www.youtube.com/@TV-pp2jy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-[#1D1D1D] hover:bg-[#FF0000] text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-md transition-all cursor-pointer whitespace-nowrap shadow-xs hover:shadow-sm"
                  >
                    <span>바로가기</span>
                  </a>
                </div>
              </div>

              {/* 3. IVF 온강 복음주의 콘텐츠 */}
              <div className="py-6 md:py-0 md:pl-8 border-t md:border-t-0 md:border-l border-[#E5E0D8] flex flex-col justify-between group">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-[4px] bg-[#FFF0F0] flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4 text-[#FF0000] fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </span>
                    <h4 className="text-lg font-bold text-[#1D1D1D] group-hover:text-[#3B5E43] transition-colors">
                      IVF 온강 복음주의 콘텐츠
                    </h4>
                  </div>
                  <p className="text-xs sm:text-[0.88rem] text-[#55534E] leading-[1.8]">
                    한국 기독교의 뿌리와 근본을 이루는 '진짜' 복음주의는 무엇일까요? 이강일 소장님의 심층 강의를 통해 들어봅시다!
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="https://youtube.com/playlist?list=PLaowqIruzJFlSUi7EiZvhAQfP9_v-DcFD&si=X3TanG4oUcdkDgLm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-[#1D1D1D] hover:bg-[#3B5E43] text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-md transition-all cursor-pointer whitespace-nowrap shadow-xs hover:shadow-sm"
                  >
                    <span>바로가기</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

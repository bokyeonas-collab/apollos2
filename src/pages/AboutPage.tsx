import { useState } from 'react';
import { ArrowUpRight, Copy, Check, CheckCircle2, MapPin } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

interface AboutPageProps {
  onNavigateToPrograms?: () => void;
  onNotify?: (msg: string) => void;
}

export default function AboutPage({ onNotify }: AboutPageProps) {
  const [copiedAddr, setCopiedAddr] = useState(false);
  const address = '서울시 마포구 동교로 136 서강빌딩 502호';

  const copyAddress = () => {
    navigator.clipboard.writeText(address).then(() => {
      setCopiedAddr(true);
      setTimeout(() => setCopiedAddr(false), 2000);
      if (onNotify) onNotify('아볼로 주소가 클립보드에 복사되었습니다.');
    });
  };

  return (
    <div className="pt-10 md:pt-14 pb-16 md:pb-24 animate-in fade-in duration-200">
      {/* 1. Page Header (75% 크기 조정) */}
      <div className="max-w-[1040px] mx-auto px-6 mb-7 sm:mb-9">
        <ScrollReveal duration={2000}>
          <div className="text-center">
            <span className="font-cormorant text-xs sm:text-sm font-semibold italic text-[#3B5E43] tracking-widest uppercase block mb-1.5">
              The Philosophy of Apollos
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#1D1D1D] mb-2 tracking-tight">
              About Apollos
            </h1>
            <p className="text-xs sm:text-[0.88rem] text-[#73716B] max-w-lg mx-auto leading-relaxed">
              시대의 질문 앞에서 서로의 언어를 배우는 기독교 인문학 커뮤니티 아볼로
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* =========================================================================
          2. 미션 섹션 (Full Width: 좌우 여백 없이 크게 화면 전체를 채우는 히어로 구성)
          ========================================================================= */}
      <div className="w-full mb-14 sm:mb-16">
        <ScrollReveal duration={2000}>
          <div className="relative w-full min-h-[420px] sm:min-h-[500px] flex flex-col items-center justify-center text-center px-6 py-16 sm:py-20 shadow-md overflow-hidden">
            {/* Background Image: edge-to-edge */}
            <img
              src="/images/about_mission.jpg"
              alt="아볼로 커뮤니티 모임 전경"
              className="absolute inset-0 w-full h-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.src = '/assets/aistudio/about_e7842aa9.jpg';
              }}
            />

            {/* Dark Scrim Overlay */}
            <div className="absolute inset-0 bg-[#191B1A]/72 backdrop-blur-[1px]" />

            {/* Content Container */}
            <div className="relative z-10 max-w-3xl mx-auto text-white space-y-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                말에 능통하고, 성경에 밝으며, 배움에 겸손했던 아볼로처럼
              </h2>

              <div className="text-xs sm:text-[0.95rem] text-[#F3EFE6] leading-[1.88] space-y-3 pt-1 max-w-2xl mx-auto">
                <p>
                  성경 사도행전 18장에 등장하는 <strong className="text-white font-bold">아볼로(Apollos)</strong>는 알렉산드리아 출신의 지식인이자, 헬라 철학과 성경의 언어에 능통했던 인물이었습니다. 하지만 그는 당대 명망 있는 지식인이었음에도 불구하고, 평범한 천막 제작자였던 브리스길라와 아굴라 부부의 조언을 겸허히 경청하며 자신의 앎을 온전하게 다듬어갔습니다.
                </p>
                <p>
                  우리가 지향하는 <strong className="text-white font-bold">아볼로</strong>는 바로 이 겸손한 지성의 태도를 계승합니다. 혐오와 진영 논리가 극단으로 치닫는 한국 사회에서, 우리는 신앙의 언어를 세상이 이해할 수 있는 상식의 언어로 번역하고, 세상의 날카로운 질문을 신앙의 깊이로 끌어안는 <strong className="text-white font-bold">‘이중언어 통역자’</strong>들의 공동체를 세워갑니다.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Main Body Sections (In container) */}
      <div className="max-w-[1040px] mx-auto px-6 space-y-12 sm:space-y-14">
        {/* =========================================================================
            1~4. 아볼로 메인 콘텐츠: 하나의 큰 흰 바탕 안에 목표, 하는 일, 얻어가는 것, 환영 대상 나열
            ========================================================================= */}
        <ScrollReveal duration={2000}>
          <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-8 sm:p-12 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-12 sm:space-y-16">
            {/* 1. 아볼로의 목표 */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D]">
                아볼로의 목표
              </h3>
              <blockquote className="text-lg sm:text-xl font-bold text-[#3B5E43] leading-snug pt-1">
                “화해의 하나님 나라를 일상에서 수행합니다.”
              </blockquote>
              <p className="text-sm sm:text-[0.95rem] text-[#4A4A48] leading-[1.88]">
                교회의 울타리 안에만 갇혀 사회와 단절되지 않고, 그렇다고 냉소적인 회의주의로 도망치지 않습니다. 성경과 기독교 전통의 깊이를 바탕으로 인문학·사회과학의 언어를 함께 익혀 세상과 소통하는 ‘이중언어 통역자’들의 연대를 지향합니다.
              </p>
            </div>

            {/* 2. 아볼로가 하는 일 */}
            <div className="pt-2">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D]">
                  아볼로가 하는 일
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-[0.92rem] text-[#4A4A48] leading-[1.85]">
                <div className="border-t border-[#E5E0D8] pt-4">
                  <span className="font-cormorant text-xl font-bold text-[#3B5E43] block mb-1">01. Read</span>
                  <h4 className="text-sm font-bold text-[#1D1D1D] mb-2">
                    경계 없는 깊은 읽기
                  </h4>
                  <p>
                    한나 아렌트 같은 철학 고전부터 문학, 신학 텍스트까지 경계 없이 읽습니다. 단순히 지식을 축적하는 것이 아니라, 인문학의 언어로 내 신앙을 정직하게 돌아보고 세상의 질문을 입체적으로 마주합니다.
                  </p>
                </div>

                <div className="border-t border-[#E5E0D8] pt-4">
                  <span className="font-cormorant text-xl font-bold text-[#3B5E43] block mb-1">02. Write</span>
                  <h4 className="text-sm font-bold text-[#1D1D1D] mb-2">
                    정직한 나만의 서평 쓰기
                  </h4>
                  <p>
                    남의 정답에 기대지 않고, 저자의 생각과 마주 선 나만의 고유한 관점을 글로 씁니다. 흩어져 있던 고민을 정돈된 논리와 솔직한 언어로 벼려냅니다.
                  </p>
                </div>

                <div className="border-t border-[#E5E0D8] pt-4">
                  <span className="font-cormorant text-xl font-bold text-[#3B5E43] block mb-1">03. Reconcile</span>
                  <h4 className="text-sm font-bold text-[#1D1D1D] mb-2">
                    안전한 공론장과 화해
                  </h4>
                  <p>
                    정답을 정해두지 않는 안전한 아볼로 사무실에 마주 앉아 서로의 다른 시선을 경청합니다. 교회와 세상, 서로 다른 세대 사이의 벽을 허무는 화해의 실천을 이어갑니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. 아볼로에서 얻어가는 것 */}
            <div className="pt-2">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D]">
                  아볼로에서 얻어가는 것
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-[0.90rem] text-[#4A4A48] leading-[1.8]">
                <div className="border-t border-[#E5E0D8] pt-4">
                  <h4 className="text-sm font-bold text-[#1D1D1D] mb-2">
                    나만의 단단한 ‘생각 근육’
                  </h4>
                  <p>
                    스스로 질문을 던지고 내 관점을 명확한 글과 말로 표현하는 것, AI 시대에도 대체될 수 없는 인간의 고유한 사유의 힘을 기릅니다.
                  </p>
                </div>

                <div className="border-t border-[#E5E0D8] pt-4">
                  <h4 className="text-sm font-bold text-[#1D1D1D] mb-2">
                    세상과 소통하는 ‘이중언어 감각’
                  </h4>
                  <p>
                    신앙의 뿌리를 단단히 확인하는 동시에, 세상의 상식적인 언어로 소통하며 갈등의 자리에서 화해를 찾아내는 안목을 기릅니다.
                  </p>
                </div>

                <div className="border-t border-[#E5E0D8] pt-4">
                  <h4 className="text-sm font-bold text-[#1D1D1D] mb-2">
                    200여 명의 든든한 ‘동역자’
                  </h4>
                  <p>
                    교회나 직장에서 꺼내기 어려웠던 질문을 솔직하게 나누고 서로의 성장을 지지해 주는 지난 10여 년간의 안전한 공동체와 연결됩니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. 이런 분들을 위한 안전한 공간입니다 */}
            <div className="pt-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D] mb-6">
                이런 분들을 위한 안전한 공간입니다
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-[0.92rem] text-[#333230]">
                <div className="flex items-start gap-3 p-4 bg-[#FAF8F5] rounded-[2px] border border-[#EFECE5]">
                  <CheckCircle2 className="w-4 h-4 text-[#3B5E43] shrink-0 mt-0.5" />
                  <span>교회나 사회 안에서 질문을 꺼내기 어려워 홀로 마음을 졸여온 분</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[#FAF8F5] rounded-[2px] border border-[#EFECE5]">
                  <CheckCircle2 className="w-4 h-4 text-[#3B5E43] shrink-0 mt-0.5" />
                  <span>빠른 정답과 알고리즘의 속도 속에서 나만의 사유와 인간성을 지키고 싶은 분</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[#FAF8F5] rounded-[2px] border border-[#EFECE5]">
                  <CheckCircle2 className="w-4 h-4 text-[#3B5E43] shrink-0 mt-0.5" />
                  <span>남의 정답을 외우는 대신 내 언어로 된 한 편의 정직한 서평을 쓰고 싶은 분</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[#FAF8F5] rounded-[2px] border border-[#EFECE5]">
                  <CheckCircle2 className="w-4 h-4 text-[#3B5E43] shrink-0 mt-0.5" />
                  <span>혐오와 진영 논리의 시대 속에서 평화와 공존의 언어를 찾고 싶은 분</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            5. 오시는 길 (테두리 박스 없이 단정한 레이아웃)
            ========================================================================= */}
        <ScrollReveal duration={2000}>
          <div className="py-2 space-y-6 text-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D] mb-1.5">
                오시는 길
              </h3>
              <p className="text-sm font-semibold text-[#3B5E43]">
                한국복음주의운동연구소
              </p>
            </div>

            {/* [지도 사진] - 사용자가 첨부한 실제 위치 지도 스크린샷 */}
            <div className="w-full max-w-2xl mx-auto rounded-[4px] overflow-hidden border border-[#E2DDD2] shadow-sm">
              <img
                src="/assets/aistudio/___________2026-10-31______9.22.57_cf90fd06.png"
                alt="한국복음주의운동연구소 위치 지도"
                className="w-full h-auto object-cover max-h-[420px]"
              />
            </div>

            {/* 주소 및 교통편 텍스트 (가운데 정렬 + 주소 바로 옆에 축소된 주소 복사 버튼 배치) */}
            <div className="space-y-2 text-xs sm:text-[0.92rem] text-[#333230] leading-relaxed pt-1">
              <div className="inline-flex items-center justify-center flex-wrap gap-2">
                <MapPin className="w-4 h-4 text-[#3B5E43] shrink-0" />
                <strong className="text-sm sm:text-base font-bold text-[#1D1D1D]">
                  {address}
                </strong>
                <button
                  onClick={copyAddress}
                  title="주소 복사"
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-xs text-[#66635D] hover:text-[#1D1D1D] bg-white border border-[#DDD8CC] hover:border-[#1D1D1D] rounded-[3px] transition-all cursor-pointer font-medium select-none"
                >
                  {copiedAddr ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-[0.72rem] text-emerald-700 font-semibold">복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-[#84827D]" />
                      <span className="text-[0.72rem]">주소 복사</span>
                    </>
                  )}
                </button>
              </div>

              {/* 5번 요청: '2호선 합정역 2번 출구 도보 9분' 문구를 앞 문구 아래줄로 배치 */}
              <p className="text-xs sm:text-[0.88rem] text-[#66635D] leading-relaxed">
                2호선·공항철도 홍대입구역 1번 출구 도보 8분<br />
                2호선 합정역 2번 출구 도보 9분
              </p>

              {/* 네이버 지도, 구글 지도 (왼쪽에 각 서비스 아이콘 표시, 가운데 정렬) */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <a
                  href="https://naver.me/Gy3XB6QZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#03C75A] hover:bg-[#02B150] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-[2px] transition-all cursor-pointer shadow-xs hover:shadow-sm"
                >
                  {/* 네이버 아이콘 (왼쪽) */}
                  <span className="w-4 h-4 rounded-[2px] bg-white text-[#03C75A] font-black text-[11px] flex items-center justify-center leading-none shrink-0">
                    N
                  </span>
                  <span>네이버 지도</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href="https://maps.app.goo.gl/g3FHFkh5csLEnivbA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#4285F4] hover:bg-[#3367D6] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-[2px] transition-all cursor-pointer shadow-xs hover:shadow-sm"
                >
                  {/* 구글 지도 핀 아이콘 (왼쪽) */}
                  <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                  <span>구글 지도</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 6-7번 요청: 두 섹션 사이를 가르는 단일 구분선 (기존 테두리와 동일한 두께와 색상) */}
        <div className="border-t border-[#E5E0D8]" />

        {/* =========================================================================
            6. 아볼로 SNS (테두리 박스 없이 단정한 레이아웃)
            ========================================================================= */}
        <ScrollReveal duration={2000}>
          <div className="py-2 space-y-5 text-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D] mb-1.5">
                아볼로 SNS
              </h3>
              <p className="text-xs sm:text-[0.92rem] text-[#6E6B65]">
                아볼로 소식은 공식 SNS에도 확인하실 수 있습니다.
              </p>
            </div>

            <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-left">
              {/* 인스타그램 */}
              <a
                href="https://www.instagram.com/the_apollos__/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-transparent hover:bg-white border border-[#E5E0D8] hover:border-[#E1306C] rounded-[2px] transition-all duration-300 shadow-2xs hover:shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1D1D1D] group-hover:text-[#E1306C] transition-colors">
                      아볼로 인스타그램
                    </h4>
                    <p className="text-xs text-[#73716B]">@the_apollos__</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8E8B83] group-hover:text-[#E1306C] transition-colors" />
              </a>

              {/* 네이버 블로그 */}
              <a
                href="https://blog.naver.com/apollosstudium"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-transparent hover:bg-white border border-[#E5E0D8] hover:border-[#03C75A] rounded-[2px] transition-all duration-300 shadow-2xs hover:shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-10 h-10 rounded-full bg-[#03C75A] text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                    b
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1D1D1D] group-hover:text-[#03C75A] transition-colors">
                      아볼로 네이버 블로그
                    </h4>
                    <p className="text-xs text-[#73716B]">서평 및 연구 레터 아카이브</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8E8B83] group-hover:text-[#03C75A] transition-colors" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

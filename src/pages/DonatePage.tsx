import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

interface DonatePageProps {
  onNotify: (msg: string) => void;
}

export default function DonatePage({ onNotify }: DonatePageProps) {
  const [copiedHanbit, setCopiedHanbit] = useState(false);
  const [copiedBokyeon, setCopiedBokyeon] = useState(false);

  const hanbitAccount = '093401-04-279768';
  const bokyeonAccount = '032901-04-330330';

  const handleCopyHanbit = () => {
    navigator.clipboard.writeText(hanbitAccount).then(() => {
      setCopiedHanbit(true);
      setTimeout(() => setCopiedHanbit(false), 2400);
      onNotify('한빛누리 공동 계좌번호(093401-04-279768)가 복사되었습니다.');
    });
  };

  const handleCopyBokyeon = () => {
    navigator.clipboard.writeText(bokyeonAccount).then(() => {
      setCopiedBokyeon(true);
      setTimeout(() => setCopiedBokyeon(false), 2400);
      onNotify('복연 계좌번호(032901-04-330330)가 복사되었습니다.');
    });
  };

  return (
    <div className="pb-16 md:pb-24 animate-in fade-in duration-200">
      {/* =========================================================================
          1. 첫번째 섹션: 미션 히어로 섹션 (75% 크기로 조정)
          ========================================================================= */}
      <div className="w-full mb-10 sm:mb-12">
        <div className="relative w-full min-h-[330px] sm:min-h-[390px] flex flex-col items-center justify-center text-center px-6 py-12 sm:py-18 shadow-md overflow-hidden">
          {/* Background Image: 오병이어 (생선과 떡) */}
          <img
            src="/images/donate_loaves_fishes.jpg"
            alt="오병이어 그림 (생선과 떡)"
            className="absolute inset-0 w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.src = '/assets/aistudio/__________91bbc3bb.jpg';
            }}
          />

          {/* Dark Scrim Overlay */}
          <div className="absolute inset-0 bg-[#1A1815]/70 backdrop-blur-[1px]" />

          {/* Content Container */}
          <div className="relative z-10 max-w-2xl mx-auto text-white space-y-4">
            {/* 맨 위 영어 부제: SUPPORT */}
            <span className="font-cormorant text-xs sm:text-sm font-semibold italic text-[#E5DCCB] tracking-widest uppercase block">
              SUPPORT
            </span>

            {/* Bold Korean Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
              후원하기
            </h1>

            <div className="text-xs sm:text-sm text-[#F4EFE6] leading-[1.85] max-w-lg mx-auto font-normal space-y-1.5 pt-0.5">
              <p>
                복연은 기독교 신앙과 세상을 함께 공부하며<br className="hidden sm:inline" /> 하나님 나라를 기다리는 주님의 도구입니다.
              </p>
              <p className="font-semibold text-white text-[14px]">
                당신의 생선과 떡이 복연 사역의 열매를 맺게 할 것입니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body Sections (In container) */}
      <div className="max-w-[1040px] mx-auto px-6 space-y-12 sm:space-y-14">
        {/* =========================================================================
            2. 메인 섹션 (상자 제거 & 복연은 한빛누리와 협력하여~ 문구 적용)
            ========================================================================= */}
        <ScrollReveal duration={2000}>
          <div className="text-center space-y-5 py-4">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#1D1D1D] tracking-tight leading-snug max-w-2xl mx-auto">
              재단법인 한빛누리와 함께합니다
            </h2>

            <p className="text-sm sm:text-[0.95rem] text-[#4A4A48] leading-[1.88] max-w-2xl mx-auto">
              복연은 한빛누리와 협력하여 후원금을 투명하게 관리하고 기부금 영수증을 발행하고 있습니다.
            </p>

            {/* 제일 메인: 한빛누리 정기후원 / 일시후원 (메인 오렌지 컬러 및 부드러운 라운딩 적용) */}
            <div className="pt-2">
              <a
                href="https://online.mrm.or.kr/3BcZn74"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#F29938] hover:bg-[#DE8828] text-white text-sm sm:text-base font-semibold px-8 sm:px-10 py-4 rounded-[6px] transition-all cursor-pointer shadow-sm hover:shadow-md tracking-wider uppercase"
              >
                <span>한빛누리 정기후원 / 일시후원 신청하기</span>
              </a>
              <span className="block text-xs text-[#84827D] mt-2.5">
                ※ 클릭 시 온라인 후원 신청 페이지로 연결되어 간편하게 신청하실 수 있습니다.
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            3. 바로 계좌이체를 원하신다면,
            ========================================================================= */}
        <ScrollReveal duration={2000}>
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D]">
                바로 계좌이체를 원하신다면,
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 items-stretch">
              {/* Card 1: 한빛누리 공동 계좌 */}
              <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-7 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  {/* 제목 옆에 워드 블럭 배치 */}
                  <div className="flex items-center gap-2.5 flex-wrap mb-4 pb-3 border-b border-[#F0ECE1]">
                    <h4 className="text-lg sm:text-xl font-bold text-[#1D1D1D]">
                      한빛누리 공동 계좌
                    </h4>
                    <span className="text-[0.76rem] font-medium text-[#2F5233] bg-[#EBF4ED] px-2.5 py-0.5 rounded-[2px]">
                      기부금영수증 발급 필요시
                    </span>
                  </div>

                  <div className="bg-[#FAF8F5] border border-[#E8E4DA] rounded-[2px] p-4 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#84827D]">은행</span>
                      <span className="font-semibold text-[#111111]">국민은행</span>
                    </div>

                    {/* 계좌번호 옆에 복사 버튼 작게 배치 */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[#84827D]">계좌번호</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-sm text-[#111111] tracking-wide">
                          {hanbitAccount}
                        </span>
                        <button
                          onClick={handleCopyHanbit}
                          className="inline-flex items-center gap-1 bg-white border border-[#DCD6C8] hover:border-[#1D1D1D] text-[#1D1D1D] text-[0.74rem] font-medium px-2 py-0.5 rounded-[2px] transition-all cursor-pointer shadow-2xs"
                        >
                          {copiedHanbit ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span>복사됨</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 text-[#84827D]" />
                              <span>복사</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#84827D]">예금주</span>
                      <span className="text-[#111111]">(재)한빛누리(한국복음주의운동연구소)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F0ECE1] text-[0.76rem] text-[#73716B] leading-relaxed">
                  ※ 송금 후 기부금 영수증 발급을 위해 복연 측에 개인정보(주민등록번호, 주소, 연락처)를 알려주셔야 국세청 연말정산 간소화 서비스에 등록됩니다.
                </div>
              </div>

              {/* Card 2: 복연 연구소 단독 계좌 */}
              <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-7 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  {/* 제목 옆에 워드 블럭 배치 */}
                  <div className="flex items-center gap-2.5 flex-wrap mb-4 pb-3 border-b border-[#F0ECE1]">
                    <h4 className="text-lg sm:text-xl font-bold text-[#1D1D1D]">
                      복연 연구소 단독 계좌
                    </h4>
                    <span className="text-[0.76rem] font-medium text-[#5A5853] bg-[#EFECE5] px-2.5 py-0.5 rounded-[2px]">
                      기부금영수증 미필요시
                    </span>
                  </div>

                  <div className="bg-[#FAF8F5] border border-[#E8E4DA] rounded-[2px] p-4 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#84827D]">은행</span>
                      <span className="font-semibold text-[#111111]">국민은행</span>
                    </div>

                    {/* 계좌번호 옆에 복사 버튼 작게 배치 */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[#84827D]">계좌번호</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-sm text-[#111111] tracking-wide">
                          {bokyeonAccount}
                        </span>
                        <button
                          onClick={handleCopyBokyeon}
                          className="inline-flex items-center gap-1 bg-white border border-[#DCD6C8] hover:border-[#1D1D1D] text-[#1D1D1D] text-[0.74rem] font-medium px-2 py-0.5 rounded-[2px] transition-all cursor-pointer shadow-2xs"
                        >
                          {copiedBokyeon ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span>복사됨</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 text-[#84827D]" />
                              <span>복사</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#84827D]">예금주</span>
                      <span className="text-[#111111]">한국복음주의운동연구소</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F0ECE1] text-[0.76rem] text-[#73716B] leading-relaxed">
                  별도의 서류 제출이나 행정 절차 없이 원하시는 때에 언제든 자유롭게 후원하실 수 있는 연구소 전용 계좌입니다.
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            4. 후원금은 어떻게 사용되나요? (기존처럼 한 행에 4열 구조: md:grid-cols-4)
            ========================================================================= */}
        <ScrollReveal duration={2000}>
          <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D]">
                후원금은 어떻게 사용되나요?
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs sm:text-[0.90rem] text-[#4A4A48] leading-[1.8]">
              {/* 01. 연구 자료 지원 */}
              <div className="border-t border-[#E5E0D8] pt-4">
                <div className="text-xs font-bold text-[#3B5E43] block mb-1.5">
                  <span className="font-cormorant mr-1 text-sm">01.</span>
                  <span>연구 자료 지원</span>
                </div>
                <p>
                  철학·사회과학·기독교 고전 등 북클럽과 연구 세미나에 필요한 양질의 도서를 구비하고 연구자료를 번역·아카이빙합니다.
                </p>
              </div>

              {/* 02. 서평집 및 학술 출판 */}
              <div className="border-t border-[#E5E0D8] pt-4">
                <div className="text-xs font-bold text-[#3B5E43] block mb-1.5">
                  <span className="font-cormorant mr-1 text-sm">02.</span>
                  <span>서평집 및 학술 출판</span>
                </div>
                <p>
                  참여자들이 치열하게 써내려간 서평과 연구 성과물을 단행본과 소책자로 엮어 한국 교회와 사회에 선한 지적 파동을 일으킵니다.
                </p>
              </div>

              {/* 03. 공간 유지 */}
              <div className="border-t border-[#E5E0D8] pt-4">
                <div className="text-xs font-bold text-[#3B5E43] block mb-1.5">
                  <span className="font-cormorant mr-1 text-sm">03.</span>
                  <span>공간 유지</span>
                </div>
                <p>
                  아볼로, 복연 사무실 (홍대 인근 연구소)을 누구나 마음 편히 찾아와 질문하고 머물 수 있는 열린 공간으로 유지합니다.
                </p>
              </div>

              {/* 04. 장학 지원 */}
              <div className="border-t border-[#E5E0D8] pt-4">
                <div className="text-xs font-bold text-[#3B5E43] block mb-1.5">
                  <span className="font-cormorant mr-1 text-sm">04.</span>
                  <span>장학 지원</span>
                </div>
                <p>
                  학비와 생활비의 무게 속에서도 고전과 시대를 깊이 사유하고자 하는 청년·대학원생들에게 참가비 전액 또는 일부를 장학금으로 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

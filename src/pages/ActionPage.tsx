import { PROGRAMS, Program } from '../data/programsData';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

interface ActionPageProps {
  onApplyOrInquire?: (programTitle: string) => void;
  onSelectProgram: (p: Program) => void;
  onNotify?: (msg: string) => void;
}

export default function ActionPage({ onSelectProgram }: ActionPageProps) {
  const actionPrograms = PROGRAMS.filter((p) => p.trackType === 'action');

  return (
    <div className="pt-10 md:pt-14 pb-16 md:pb-20 animate-in fade-in duration-200">
      <div className="max-w-[1100px] mx-auto px-6 space-y-10 sm:space-y-12">
        {/* Page Header (75% 크기 조정) */}
        <ScrollReveal duration={2000}>
          <div className="text-center max-w-xl mx-auto mb-9 md:mb-11">
            <span className="font-cormorant text-xs sm:text-sm font-semibold italic text-[#3B5E43] tracking-widest uppercase block mb-1">
              Meet &amp; Act
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D] mb-2 tracking-tight">
              활동 트랙
            </h1>
            <p className="text-xs sm:text-[0.88rem] text-[#6E6A62] leading-relaxed">
              학습 트랙을 넘어 사람들과 마주 앉아 ‘화해’를 이야기 합니다.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Column Simple Cards (더 알아보기 삭제 완료) */}
        <ScrollReveal duration={2000}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
            {actionPrograms.map((p) => (
              <div
                key={p.id}
                onClick={() => onSelectProgram(p)}
                className="bg-white border border-[#E5E0D8] hover:border-[#3B5E43] rounded-[2px] p-7 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* 1. 프로그램명 & 뱃지 (구분선 삭제) */}
                  <div className="mb-4">
                    <h2 className="text-xl sm:text-[1.3rem] font-bold text-[#1D1D1D] group-hover:text-[#3B5E43] transition-colors flex items-center gap-2 mb-2.5">
                      <span className="text-xl select-none">{p.emojiIcon}</span>
                      <span>{p.title}</span>
                    </h2>
                    <span className="inline-block text-[0.78rem] font-medium text-[#3B5E43] bg-[#EBF2EC] px-2.5 py-0.5 rounded-full border border-[#CDE0D0]">
                      {p.subBadge}
                    </span>
                  </div>

                  {/* 2. '한 줄 설명' 라벨 칸 삭제, 설명 문구만 노출 */}
                  <div className="mb-6">
                    <p className="text-[0.92rem] text-[#333230] leading-relaxed min-h-[3.6rem]">
                      {p.oneLinerSlogan}
                    </p>
                  </div>

                  {/* 3. 이런 분에게 추천합니다! */}
                  <div>
                    <span className="text-[0.75rem] font-bold text-[#3B5E43] uppercase tracking-wider block mb-2">
                      이런 분에게 추천합니다!
                    </span>
                    <ul className="space-y-2 text-[0.88rem] text-[#55534E] leading-relaxed">
                      {p.recommendations.map((rec, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#3B5E43] font-bold shrink-0 leading-tight">•</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* =========================================================================
            5. 맨 아래 활동 트랙 안내 및 아카이빙 섹션 (좌: 인스타그램, 우: 네이버 블로그)
            - 상단 선 삭제 및 요청된 여백 스타일 적용
            ========================================================================= */}
        <ScrollReveal duration={2000}>
          <div className="pt-8 mt-2 mx-2 md:mx-[80px] mb-[1px] pl-[3px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* 좌: 인스타그램 */}
              <a
                href="https://www.instagram.com/the_apollos__/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-2 transition-all cursor-pointer"
              >
                <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </span>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm sm:text-base text-[#1D1D1D] group-hover:text-[#E1306C] transition-colors">
                      인스타그램
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#8E8B83] group-hover:text-[#E1306C] transition-colors" />
                  </div>
                  <p className="text-xs sm:text-[0.88rem] text-[#6E6B65] leading-relaxed mr-0 md:mr-[57px]">
                    활동 트랙 모집은 기수별/프로그램별 별도 공지 및 진행됩니다
                  </p>
                </div>
              </a>

              {/* 우: 네이버 블로그 */}
              <a
                href="https://blog.naver.com/apollosstudium"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-2 transition-all cursor-pointer"
              >
                <span className="w-10 h-10 rounded-full bg-[#03C75A] text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  b
                </span>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm sm:text-base text-[#1D1D1D] group-hover:text-[#03C75A] transition-colors">
                      네이버 블로그
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#8E8B83] group-hover:text-[#03C75A] transition-colors" />
                  </div>
                  <p className="text-xs sm:text-[0.88rem] text-[#6E6B65] leading-relaxed mr-0 md:mr-[50px] pl-[1px]">
                    아볼로 테이블, VIEW의 아카이빙은 블로그에서 확인하실 수 있습니다.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

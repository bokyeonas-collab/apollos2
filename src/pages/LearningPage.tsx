import { PROGRAMS } from '../data/programsData';
import RecruitingProgramsSection from '../components/RecruitingProgramsSection';
import { RecruitingProgram } from '../data/recruitingProgramsData';
import ScrollReveal from '../components/ScrollReveal';

interface LearningPageProps {
  onApplyOrInquire?: (programTitle: string) => void;
  onSelectRecruitingProgram?: (program: RecruitingProgram) => void;
}

export default function LearningPage({
  onSelectRecruitingProgram
}: LearningPageProps) {
  const learningPrograms = PROGRAMS.filter((p) => p.trackType === 'learning');

  return (
    <div className="pt-10 md:pt-14 pb-16 md:pb-20 animate-in fade-in duration-200">
      <div className="max-w-[1100px] mx-auto px-6 space-y-10 sm:space-y-12">
        {/* Page Header (75% 크기 조정) */}
        <ScrollReveal duration={2000}>
          <div className="text-center max-w-xl mx-auto mb-9 md:mb-11">
            <span className="font-cormorant text-xs sm:text-sm font-semibold italic text-[#F29938] tracking-widest uppercase block mb-1">
              Read &amp; Write
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D] mb-2 tracking-tight">
              학습 트랙
            </h1>
            <p className="text-xs sm:text-[0.88rem] text-[#6E6A62] leading-relaxed">
              텍스트를 깊이 읽고, 내 언어로 서평을 쓰며 사유의 근육을 기르는 훈련
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Column Simple Cards (클릭 반응 및 팝업 없음, 단순 정보 카드) */}
        <ScrollReveal duration={2000}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
            {learningPrograms.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-[#E5E0D8] rounded-[2px] p-7 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between"
              >
                <div>
                  {/* 1. 프로그램명 & 뱃지 (구분선 삭제) */}
                  <div className="mb-4">
                    <h2 className="text-xl sm:text-[1.3rem] font-bold text-[#1D1D1D] flex items-center gap-2 mb-2.5">
                      <span className="text-xl select-none">{p.emojiIcon}</span>
                      <span>{p.title}</span>
                    </h2>
                    <span className="inline-block text-[0.78rem] font-medium text-[#B87328] bg-[#FFF3E6] px-2.5 py-0.5 rounded-full border border-[#FCD8B3]">
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
                    <span className="text-[0.75rem] font-bold text-[#F29938] uppercase tracking-wider block mb-2">
                      이런 분에게 추천합니다!
                    </span>
                    <ul className="space-y-2 text-[0.88rem] text-[#55534E] leading-relaxed">
                      {p.recommendations.map((rec, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#F29938] font-bold shrink-0 leading-tight">•</span>
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

        {/* Currently Recruiting Programs under Learning Track */}
        {onSelectRecruitingProgram && (
          <RecruitingProgramsSection onSelectRecruitingProgram={onSelectRecruitingProgram} />
        )}
      </div>
    </div>
  );
}

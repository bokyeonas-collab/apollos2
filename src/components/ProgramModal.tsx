import { X, ArrowRight, CheckCircle2, Clock, MapPin, Users, BookOpen, Sparkles, AlertCircle } from 'lucide-react';
import { Program } from '../data/programsData';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onApplyOrInquire: (programTitle: string) => void;
}

export default function ProgramModal({ program, onClose, onApplyOrInquire }: ProgramModalProps) {
  if (!program) return null;

  const isLearning = program.trackType === 'learning';
  const trackName = isLearning ? '학습 트랙 (Learning Track)' : '활동 트랙 (Action Track)';
  const keyColorClass = isLearning ? 'text-[#F29938]' : 'text-[#3B5E43]';
  const badgeBgClass = isLearning ? 'bg-[#FFF3E6] text-[#B87328] border-[#FCD8B3]' : 'bg-[#EBF2EC] text-[#3B5E43] border-[#CDE0D0]';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] border border-[#E0DCD3] rounded-[2px] max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative p-6 sm:p-12 animate-in zoom-in-95 duration-200 text-left text-[#333333]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Minimalist Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#77746E] hover:text-[#111111] p-1.5 transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. Header & Category */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-[#77746E] tracking-widest uppercase font-medium">
            Apollos Salon · {trackName}
          </span>
          {program.subBadge && (
            <span className={`text-[0.72rem] font-medium px-2 py-0.5 rounded-[2px] border ${badgeBgClass}`}>
              {program.subBadge}
            </span>
          )}
        </div>

        {/* Large Typographic Title: 굵은 산세리프 폰트 (font-bold text-[#1D1D1D]) */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1D1D] tracking-tight leading-tight mb-3">
          {program.title}
        </h2>

        {/* Catchphrase / Slogan */}
        <p className="text-sm sm:text-base text-[#44423E] font-medium leading-relaxed italic mb-8">
          “{program.oneLinerSlogan}”
        </p>

        {/* =========================================================================
            2. 한눈에 보는 모임 개요 (Quick Specs Table)
            ========================================================================= */}
        <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-5 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] mb-10">
          <div className="text-xs font-bold text-[#1D1D1D] mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#F29938]" />
            <span>모임 핵심 개요</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-[0.88rem]">
            {/* 일정 & 기간 */}
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#84827D] shrink-0 mt-0.5" />
              <div>
                <span className="text-[0.74rem] text-[#88857F] block uppercase tracking-wider">일정 및 기간</span>
                <span className="font-semibold text-[#111111]">{program.schedule}</span>
                <span className="text-xs text-[#77746E] ml-1.5 font-normal">({program.duration})</span>
              </div>
            </div>

            {/* 장소 */}
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#84827D] shrink-0 mt-0.5" />
              <div>
                <span className="text-[0.74rem] text-[#88857F] block uppercase tracking-wider">모임 장소</span>
                <span className="font-semibold text-[#111111]">아볼로 사무실 (홍대 서강빌딩 502호)</span>
                <span className="text-xs text-[#77746E] block font-normal">※ 프로그램별 온·오프라인 병행 진행</span>
              </div>
            </div>

            {/* 정원 및 대상 */}
            <div className="flex items-start gap-3">
              <Users className="w-4 h-4 text-[#84827D] shrink-0 mt-0.5" />
              <div>
                <span className="text-[0.74rem] text-[#88857F] block uppercase tracking-wider">정원 및 대상</span>
                <span className="font-semibold text-[#111111]">소수 정예 6~10인</span>
                <span className="text-xs text-[#77746E] block font-normal">{program.target}</span>
              </div>
            </div>

            {/* 준비물 */}
            <div className="flex items-start gap-3">
              <BookOpen className="w-4 h-4 text-[#84827D] shrink-0 mt-0.5" />
              <div>
                <span className="text-[0.74rem] text-[#88857F] block uppercase tracking-wider">준비물 &amp; 방식</span>
                <span className="font-semibold text-[#111111]">{program.format}</span>
                <span className="text-xs text-[#77746E] block font-normal">지정 도서, 필기도구, 열린 사유의 태도</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. 이런 분들과 함께하고 싶어요 (Who It's For - Checklist)
            ========================================================================= */}
        {program.recommendations && program.recommendations.length > 0 && (
          <div className="mb-10 pb-8 border-b border-[#E0DCD3]">
            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-5">
              이런 분들과 함께하고 싶어요
            </h3>
            <div className="space-y-3">
              {program.recommendations.map((rec, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-[0.92rem] text-[#333230] leading-relaxed">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${keyColorClass}`} />
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            4. 어떤 프로그램인가요? (Story & Narrative)
            ========================================================================= */}
        <div className="mb-10 pb-8 border-b border-[#E0DCD3]">
          <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-4">
            어떤 프로그램인가요?
          </h3>
          <p className="text-xs sm:text-[0.94rem] text-[#3A3835] leading-[1.88]">
            {program.fullDesc}
          </p>
        </div>

        {/* =========================================================================
            5. 모임은 이렇게 진행돼요 (Session Timeline - 4-step)
            ========================================================================= */}
        <div className="mb-10 pb-8 border-b border-[#E0DCD3]">
          <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-6">
            모임은 이렇게 진행돼요
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <span className="font-cormorant text-xl font-bold text-[#84827D] block mb-1">01</span>
              <strong className="text-xs font-bold text-[#111111] block mb-1">체크인 &amp; 환영 (15m)</strong>
              <p className="text-[0.78rem] text-[#66635D] leading-relaxed">
                따뜻한 음료와 함께 한 주의 일상을 환기하고 오늘 나눌 생각의 온도를 맞춥니다.
              </p>
            </div>

            <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <span className="font-cormorant text-xl font-bold text-[#84827D] block mb-1">02</span>
              <strong className="text-xs font-bold text-[#111111] block mb-1">키워드 발제 (25m)</strong>
              <p className="text-[0.78rem] text-[#66635D] leading-relaxed">
                해당 주차 텍스트의 핵심 논점과 시대적 맥락, 인상 깊은 문장을 함께 낭독합니다.
              </p>
            </div>

            <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <span className="font-cormorant text-xl font-bold text-[#84827D] block mb-1">03</span>
              <strong className="text-xs font-bold text-[#111111] block mb-1">질문 토론 (60m)</strong>
              <p className="text-[0.78rem] text-[#66635D] leading-relaxed">
                정답을 강요하지 않는 안전한 공론장에서 일상과 신앙의 질문을 깊이 나눕니다.
              </p>
            </div>

            <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <span className="font-cormorant text-xl font-bold text-[#84827D] block mb-1">04</span>
              <strong className="text-xs font-bold text-[#111111] block mb-1">기록 &amp; 회고 (20m)</strong>
              <p className="text-[0.78rem] text-[#66635D] leading-relaxed">
                오늘 발견한 나만의 사유를 한 줄 문장과 서평 메모로 기록하며 마무리합니다.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            6. 다루는 텍스트 & 커리큘럼
            ========================================================================= */}
        <div className="mb-10 pb-8 border-b border-[#E0DCD3] space-y-6">
          {/* 함께 읽을 텍스트 */}
          {program.readingBooks && program.readingBooks.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-[#111111] mb-3">
                주요 다루는 텍스트
              </h3>
              <div className="flex flex-wrap gap-2 text-xs sm:text-[0.88rem]">
                {program.readingBooks.map((book, idx) => (
                  <span
                    key={idx}
                    className="bg-white border border-[#E5E0D8] rounded-[2px] px-3.5 py-1.5 font-medium text-[#111111]"
                  >
                    {book}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 진행 커리큘럼 */}
          {program.curriculum && program.curriculum.length > 0 && (
            <div className="pt-4 border-t border-[#F0ECE1]">
              <h3 className="text-lg font-bold text-[#111111] mb-3">
                회차별 진행 로드맵
              </h3>
              <div className="divide-y divide-[#F0ECE1]">
                {program.curriculum.map((step, idx) => (
                  <div key={idx} className="py-2.5 first:pt-0 last:pb-0 flex items-baseline gap-3 text-xs sm:text-[0.9rem]">
                    <span className="text-xs text-[#88857F] font-mono tabular-nums shrink-0">
                      Step 0{idx + 1}
                    </span>
                    <span className="text-[#3A3835] leading-relaxed font-medium">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* =========================================================================
            7. 꼭 확인해 주세요 (Notice & Rules)
            ========================================================================= */}
        <div className="mb-8 p-5 bg-[#F6F4ED] rounded-[2px] border border-[#E8E4DA] text-xs text-[#55534E] space-y-2">
          <div className="flex items-center gap-2 font-semibold text-[#111111] text-xs mb-1">
            <AlertCircle className="w-3.5 h-3.5 text-[#84827D]" />
            <span>참여 전 꼭 확인해 주세요</span>
          </div>
          <p>
            • 모임은 소수 정예(6~10명)로 운영되며 신청 순서에 따라 조기 마감될 수 있습니다.
          </p>
          <p>
            • 지정 도서를 끝까지 다 읽지 못하셨더라도, 성실히 읽어오신 분량만큼 대화에 참여하실 수 있도록 따뜻하게 돕습니다.
          </p>
          <p>
            • 정답을 강요하거나 일방적으로 훈계하지 않고, 서로의 생각과 질문을 존중하는 배려의 언어를 사용합니다.
          </p>
        </div>

        {/* 8. Action Button & Inquiries */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#111111]">
          <a
            href="https://www.instagram.com/the_apollos__/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#77746E] underline hover:text-[#111111] transition-colors"
          >
            인스타그램 @the_apollos__ 공식 계정 바로가기
          </a>

          <button
            onClick={() => {
              onClose();
              onApplyOrInquire(program.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-black text-white text-xs font-medium px-8 py-3.5 rounded-[2px] transition-all cursor-pointer whitespace-nowrap tracking-wider uppercase shadow-sm"
          >
            <span>참여 및 신청 문의</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

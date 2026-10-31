import { PROGRAMS, Program } from '../data/programsData';
import { NavPage } from './Navbar';
import { BookOpen, Users } from 'lucide-react';

interface ProgramsSectionProps {
  onNavigate?: (page: NavPage, usePageTurn?: boolean) => void;
  onSelectProgram?: (program: Program) => void;
}

// Exactly one concise, elegant sentence for each program
const ONE_SENTENCE_DESCRIPTIONS: Record<string, string> = {
  bookclub: '철학·신학·인문학 등 시즌별 지정도서를 읽고 간단한 서평을 나누는 독서모임입니다.',
  studium: '인문·사회·신학 고전을 읽고 발제와 피드백을 통해 최종 서평을 완성하는 글쓰기 학교입니다.',
  oneday: '특정 도서와 시사 이슈를 정해 가볍게 탐구하고 이야기해보는 1일 입문 워크숍입니다.',
  table: 'AI 윤리·정치·젠더·노동 등 관심 있는 사회 이슈를 자유롭게 공부하고 결과물을 남기는 프로젝트 모임입니다.',
  dmz: '서로 다른 입장을 가진 사람들이 모여 특정 주제에 대해 솔직하게 경청하고 대화 나누는 라운드테이블입니다.',
  view: '아볼로의 시선이 담긴 연구진 칼럼, 우수 서평, 인터뷰 등을 온라인 아카이빙 콘텐츠로 발행합니다.',
};

export default function ProgramsSection({ onNavigate }: ProgramsSectionProps) {
  // Learning track: #1 북클럽, #2 스투디움, #3 원데이
  const bookclub = PROGRAMS.find((p) => p.id === 'bookclub');
  const studium = PROGRAMS.find((p) => p.id === 'studium');
  const oneday = PROGRAMS.find((p) => p.id === 'oneday');
  const learningPrograms: Program[] = [bookclub, studium, oneday].filter(Boolean) as Program[];

  // Action track: #1 테이블, #2 DMZ, #3 뷰
  const table = PROGRAMS.find((p) => p.id === 'table');
  const dmz = PROGRAMS.find((p) => p.id === 'dmz');
  const view = PROGRAMS.find((p) => p.id === 'view');
  const actionPrograms: Program[] = [table, dmz, view].filter(Boolean) as Program[];

  // Book page-turning transition to track page
  const handleTrackNavigate = (trackType: 'learning' | 'action') => {
    if (onNavigate) {
      onNavigate(trackType, true);
    }
  };

  return (
    <section className="py-20 md:py-24 border-b border-[#E8E4DA] bg-white relative" id="learning">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-6" id="action">
        {/* Main Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-cormorant text-4xl sm:text-[2.8rem] font-bold text-[#1D1D1D] mb-3 tracking-tight">
            Programs
          </h2>
          <p className="text-[0.98rem] text-[#73716B] leading-relaxed max-w-xl mx-auto">
            학습 트랙과 활동 트랙으로 구성된 복연의 6가지 프로그램
          </p>
        </div>

        {/* 2 Main Columns: Learning Track Block (Left) & Action Track Block (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
          
          {/* Column 1: Learning Track */}
          <div className="flex flex-col items-center w-full">
            {/* 12번 버튼: 텍스트 '학습 트랙 더 알아보기' */}
            <div className="mb-4 flex justify-center w-full">
              <button
                onClick={() => handleTrackNavigate('learning')}
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#F29938] hover:bg-[#DE8625] text-white text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-98"
                aria-label="학습 트랙 더 알아보기"
              >
                <BookOpen className="w-4 h-4 text-white" />
                <span>학습 트랙 더 알아보기</span>
              </button>
            </div>

            {/* 7번 블럭: 클릭 시 아무 효과도 나타나지 않음 (단순 정보 카드) */}
            <div className="w-full bg-[#FAF9F6] border border-[#EAE4D8] rounded-[2px] p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col gap-6 text-left">
              {learningPrograms.map((p) => {
                const oneSentence = ONE_SENTENCE_DESCRIPTIONS[p.id] || p.oneLinerSlogan;

                return (
                  <div
                    key={p.id}
                    className="pb-6 border-b border-[#EAE4D8]/80 last:border-b-0 last:pb-0"
                  >
                    {/* 1~3번 학습 #1, 2, 3 뱃지 삭제 완료 */}
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
                      <h4 className="text-lg sm:text-[1.18rem] font-bold text-[#1D1D1D] flex items-center gap-2">
                        <span className="text-xl shrink-0 select-none">{p.emojiIcon}</span>
                        <span>{p.title}</span>
                      </h4>
                    </div>

                    {/* Exactly one sentence description */}
                    <p className="text-[0.92rem] text-[#55534E] leading-relaxed pl-0.5">
                      {oneSentence}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Action Track */}
          <div className="flex flex-col items-center w-full">
            {/* 13번 버튼: 텍스트 '활동 트랙 더 알아보기' */}
            <div className="mb-4 flex justify-center w-full">
              <button
                onClick={() => handleTrackNavigate('action')}
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#3B5E43] hover:bg-[#2F4B36] text-white text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-98"
                aria-label="활동 트랙 더 알아보기"
              >
                <Users className="w-4 h-4 text-white" />
                <span>활동 트랙 더 알아보기</span>
              </button>
            </div>

            {/* 8번 블럭: 클릭 시 아무 효과도 나타나지 않음 (단순 정보 카드) */}
            <div className="w-full bg-[#FAF9F6] border border-[#EAE4D8] rounded-[2px] p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col gap-6 text-left">
              {actionPrograms.map((p) => {
                const oneSentence = ONE_SENTENCE_DESCRIPTIONS[p.id] || p.oneLinerSlogan;

                return (
                  <div
                    key={p.id}
                    className="pb-6 border-b border-[#EAE4D8]/80 last:border-b-0 last:pb-0"
                  >
                    {/* 4~6번 활동 #1, 2, 3 뱃지 삭제 완료 */}
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
                      <h4 className="text-lg sm:text-[1.18rem] font-bold text-[#1D1D1D] flex items-center gap-2">
                        <span className="text-xl shrink-0 select-none">{p.emojiIcon}</span>
                        <span>{p.title}</span>
                      </h4>
                    </div>

                    {/* Exactly one sentence description */}
                    <p className="text-[0.92rem] text-[#55534E] leading-relaxed pl-0.5">
                      {oneSentence}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

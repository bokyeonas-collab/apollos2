import { useState, useTransition, useMemo } from 'react';
import { ArrowUpRight, BookOpen, ChevronDown, CheckCircle2 } from 'lucide-react';
import { RECRUITING_PROGRAMS, RecruitingProgram } from '../data/recruitingProgramsData';

interface RecruitingProgramsSectionProps {
  onSelectRecruitingProgram: (program: RecruitingProgram) => void;
}

type CategoryFilter = 'all' | '아볼로 북클럽' | '아볼로 스투디움' | '아볼로 클래스';

const INITIAL_BATCH = 15;
const BATCH_INCREMENT = 15;

// 최신 모임이 제일 앞에 오도록 시간역순 정렬
// 사용자 안내: "아볼로 북클럽 문학여행 3기랑 청소년을 위한 아볼로 북클럽은 제일 최신거야."
const CHRONOLOGICAL_ORDER_IDS = [
  'class-bible-john-s5',          // [아볼로 클래스] 성경학교 시즌5 (요한복음, 최신 모집 중)
  'teen-bookclub',                // [아볼로 북클럽] 청소년을 위한 아볼로 북클럽 (최신 모집 중)
  'literature-tour-s3',           // [아볼로 북클럽] 문학여행 3기
  'class-winter-bible-s3',        // [2026] [아볼로 클래스] 겨울성경학교 시즌3 (산상수훈)
  'literature-summer-honmono',    // [2026] [아볼로 북클럽] 여름방학 문학여행 2026기 (혼모노)
  'philosophy-summer-kim',        // [2026] [아볼로 북클럽] 여름방학 철학여행 2026기 (김용규)
  'class-summer-bible-romans-s2', // [아볼로 클래스] 여름성경학교 시즌2 (로마서)
  'feather-s10',                  // [아볼로 북클럽] 깃털반 10기
  'studium-minister-s7',          // [아볼로 스투디움] 논리적 글쓰기 7기
  'studium-writing-discovery',    // [아볼로 스투디움] 서평쓰기 과정 1기
  'studium-small-salvation',      // [아볼로 스투디움] 글쓰기 과정 1기
  'class-spirit-s9',              // [아볼로 클래스] 영성여행 시즌9 (큐티40)
  'class-spirit-s8',              // [아볼로 클래스] 영성여행 시즌8 (헨리 나웬)
  'class-philosophy-tour-s8',     // [아볼로 클래스] 철학여행 시즌8
  'feather-s7',                   // [아볼로 북클럽] 깃털반 7기
  'philosophy-tour-s7',           // [아볼로 북클럽] 철학여행 7기
  'feather-s6',                   // [아볼로 북클럽] 깃털반 6기
  'philosophy-tour-s6',           // [아볼로 북클럽] 철학여행 6기
  'feather-s5',                   // [아볼로 북클럽] 깃털반 5기
  'class-philosophy-tour-s5',     // [아볼로 클래스] 철학여행 시즌5
  'class-qt40-s5',                // [아볼로 클래스] 큐티40 시즌5
  'feather-s4',                   // [아볼로 북클럽] 깃털반 4기
  'class-philosophy-tour-s4',     // [아볼로 클래스] 철학여행 시즌4
  'class-qt60-s4',                // [아볼로 클래스] 큐티60 시즌4
  'feather-s3',                   // [아볼로 북클럽] 깃털반 3기
  'class-philosophy-tour-s3',     // [아볼로 클래스] 철학여행 시즌3
  'feather-s2',                   // [아볼로 북클럽] 깃털반 2기
  'literature-tour-s2',           // [아볼로 북클럽] 문학여행 2기
  'class-philosophy-s2',          // [아볼로 클래스] 철학스터디 시즌2
  'feather-s1',                   // [아볼로 북클럽] 깃털반 1기
  'literature-tour-s1',           // [아볼로 북클럽] 문학여행 1기
  'studium-theology-s1',          // [아볼로 스투디움] 신학여행 1기
  'history-tour-s1',              // [아볼로 북클럽] 역사탐구 1기
  'class-philosophy-s1',          // [아볼로 클래스] 철학스터디 시즌1
  'studium-review-critique-s1',   // [아볼로 스투디움] 아볼로 합평회 1기
  'feather-junior',               // [아볼로 북클럽] 주니어 깃털반 1기
  'han-byung-chul',               // [아볼로 북클럽] 한병철 읽기 1기
  'class-seminar-lausanne',       // [아볼로 클래스] 아볼로 세미나 시즌1
  'class-summer-bible-revelation',// [아볼로 클래스] 여름성경학교 시즌1
  'class-qt30-2023'               // [아볼로 클래스] 큐티30 시즌1
];

export default function RecruitingProgramsSection({
  onSelectRecruitingProgram
}: RecruitingProgramsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_BATCH);
  const [, startTransition] = useTransition();

  // 1. 모집 중인 프로그램(isOpen === true) 무조건 최우선 배치 + 시간역순 정렬
  const sortedPrograms = useMemo(() => {
    return [...RECRUITING_PROGRAMS].sort((a, b) => {
      if (a.isOpen && !b.isOpen) return -1;
      if (!a.isOpen && b.isOpen) return 1;

      const idxA = CHRONOLOGICAL_ORDER_IDS.indexOf(a.id);
      const idxB = CHRONOLOGICAL_ORDER_IDS.indexOf(b.id);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return 0;
    });
  }, []);

  const filteredPrograms = sortedPrograms.filter((prog) => {
    if (selectedCategory === 'all') return true;
    return prog.category === selectedCategory;
  });

  const displayedPrograms = filteredPrograms.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPrograms.length;

  const handleCategoryChange = (cat: CategoryFilter) => {
    startTransition(() => {
      setSelectedCategory(cat);
      setVisibleCount(INITIAL_BATCH);
    });
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + BATCH_INCREMENT, filteredPrograms.length));
  };

  const getFilterButtonStyle = (cat: CategoryFilter, isSelected: boolean) => {
    switch (cat) {
      case '아볼로 북클럽':
        return isSelected
          ? 'bg-[#EBF3ED] text-[#2F5233] border-[#2F5233] font-bold shadow-xs ring-1 ring-[#2F5233]'
          : 'bg-[#F2F7F4] text-[#2F5233] border-[#C8DFCD] hover:border-[#2F5233]';
      case '아볼로 스투디움':
        return isSelected
          ? 'bg-[#FFF4E5] text-[#9E5D1E] border-[#9E5D1E] font-bold shadow-xs ring-1 ring-[#9E5D1E]'
          : 'bg-[#FFF8F0] text-[#9E5D1E] border-[#FAD6A5] hover:border-[#9E5D1E]';
      case '아볼로 클래스':
        return isSelected
          ? 'bg-[#F0F4FA] text-[#2C5282] border-[#2C5282] font-bold shadow-xs ring-1 ring-[#2C5282]'
          : 'bg-[#F5F8FC] text-[#2C5282] border-[#CBD5E1] hover:border-[#2C5282]';
      case 'all':
      default:
        return isSelected
          ? 'bg-[#1D1D1D] text-white border-[#1D1D1D] font-bold shadow-xs'
          : 'bg-white text-[#55534E] border-[#DCD6C8] hover:border-[#1D1D1D] hover:text-[#1D1D1D]';
    }
  };

  return (
    <div id="recruiting-programs-section" className="mt-14 pt-12 border-t border-[#E8E4DA]/80 scroll-mt-24">
      {/* Header & Description */}
      <div className="text-center mb-8 sm:mb-10">
        <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1D] tracking-tight mb-1.5">
          전체 모임
        </h3>
        <p className="text-xs sm:text-sm text-[#73716B] max-w-lg mx-auto">
          아볼로에서 진행하는 프로그램입니다
        </p>

        {/* 1. 카테고리 탭 버튼 (썸네일 위 뱃지 색상과 조화롭게 매칭) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-5">
          {(['all', '아볼로 북클럽', '아볼로 스투디움', '아볼로 클래스'] as CategoryFilter[]).map((cat) => {
            const isSelected = selectedCategory === cat;
            const label = cat === 'all' ? '전체' : cat;

            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-[0.84rem] font-medium transition-all cursor-pointer border ${getFilterButtonStyle(
                  cat,
                  isSelected
                )}`}
              >
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 카드 크기 약 20% 확대 & 양 옆 여백을 둔 4열 그리드 (모바일 2열, 태블릿 3열, 데스크톱 4열) */}
      <div className="max-w-[1040px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch text-left">
          {displayedPrograms.map((prog) => (
            <ProgramCard
              key={prog.id}
              program={prog}
              onSelect={() => onSelectRecruitingProgram(prog)}
            />
          ))}
        </div>
      </div>

      {/* Load More Controls */}
      <div className="mt-10 text-center flex flex-col items-center justify-center gap-3">
        {hasMore ? (
          <div className="flex items-center justify-center">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3.5 bg-[#1D1D1D] hover:bg-[#33312E] text-white text-xs sm:text-[0.88rem] font-semibold rounded-full shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
            >
              <ChevronDown className="w-4 h-4" />
              <span>더 많은 모임 보기 ({displayedPrograms.length}/{filteredPrograms.length})</span>
            </button>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#E5E0D8] text-xs text-[#73716B]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2F5233]" />
            <span>모든 모임({filteredPrograms.length}개)을 불러왔습니다.</span>
          </div>
        )}
      </div>
    </div>
  );
}

function splitTitle(title: string) {
  const match = title.match(/^(\[[^\]]+\])\s*(.+)$/);
  if (match) {
    return {
      prefix: match[1],
      subTitle: match[2]
    };
  }
  return {
    prefix: '',
    subTitle: title
  };
}

function ProgramCard({
  program,
  onSelect
}: {
  program: RecruitingProgram;
  onSelect: () => void;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { prefix, subTitle } = splitTitle(program.title);

  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case '아볼로 북클럽':
        return 'bg-[#EBF3ED]/90 text-[#2F5233] border-[#C8DFCD]';
      case '아볼로 스투디움':
        return 'bg-[#FFF4E5]/90 text-[#9E5D1E] border-[#FAD6A5]';
      case '아볼로 클래스':
      default:
        return 'bg-[#F0F4FA]/90 text-[#2C5282] border-[#CBD5E1]';
    }
  };

  return (
    <div
      onClick={onSelect}
      className="group bg-[#FAF8F5] hover:bg-white border border-[#E5E0D8] hover:border-[#F29938] rounded-[2px] overflow-hidden shadow-[0_1px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      {/* 2. 정사각형 모양(aspect-square)으로 사진 전체 노출(object-contain) */}
      <div className="relative aspect-square overflow-hidden bg-[#F7F5F0] flex items-center justify-center p-2 border-b border-[#ECE7DD]">
        {/* Skeleton while loading */}
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#ECE8DF] to-[#E2DDD2] animate-pulse flex items-center justify-center text-[#9E9B93]">
            <BookOpen className="w-7 h-7 opacity-35" />
          </div>
        )}

        {/* Fallback if image fails */}
        {imgError ? (
          <div className="absolute inset-0 bg-[#E8E3D8] flex flex-col items-center justify-center p-3 text-center">
            <BookOpen className="w-7 h-7 text-[#8E8B83] mb-1.5" />
            <span className="text-[0.72rem] font-semibold text-[#55534E] line-clamp-1">{program.title}</span>
          </div>
        ) : (
          <img
            src={program.posterImage}
            alt={program.title}
            loading="lazy"
            decoding="async"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full object-contain group-hover:scale-102 transition-transform duration-300 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badges: 모집 마감 / 모집 중 & 카테고리 */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5 flex-wrap z-10">
          <span className={`${program.isOpen ? 'bg-[#F29938]' : 'bg-[#44423E]'} text-white text-[0.64rem] sm:text-[0.68rem] font-bold px-2 py-0.5 rounded-[2px] shadow-2xs`}>
            {program.badge}
          </span>
          <span
            className={`backdrop-blur-xs text-[0.64rem] sm:text-[0.68rem] font-semibold px-2 py-0.5 rounded-[2px] border shadow-2xs ${getCategoryBadgeStyle(
              program.category
            )}`}
          >
            {program.category}
          </span>
        </div>
      </div>

      {/* 3, 4번 (제목 & 설명) 및 6번 (오렌지색 화살표 버튼 오른쪽 배치) */}
      <div className="p-3.5 flex items-start justify-between gap-2.5 flex-1">
        <div className="flex-1 min-w-0">
          {/* 3번: 제목 ([아볼로 000] 뒤에 오는 제목은 아래줄에 배치) */}
          <h4 className="text-[0.88rem] sm:text-[0.92rem] font-bold text-[#1D1D1D] group-hover:text-[#F29938] transition-colors leading-snug mb-1.5">
            {prefix ? (
              <>
                <span className="block text-[0.74rem] sm:text-[0.78rem] font-semibold text-[#78746D] mb-0.5 tracking-tight">
                  {prefix}
                </span>
                <span className="block line-clamp-2">
                  {subTitle}
                </span>
              </>
            ) : (
              <span className="block line-clamp-2">{program.title}</span>
            )}
          </h4>

          {/* 4번: 설명 문구 */}
          <p className="text-[0.74rem] sm:text-[0.78rem] text-[#6E6A62] leading-relaxed line-clamp-2">
            {program.introCopy}
          </p>
        </div>

        {/* 6번: 모집 중이면 오렌지색(#F29938), 모집 마감인 경우 회색(#A8A49C) 원형 버튼 */}
        <div
          className={`w-6 h-6 shrink-0 rounded-full text-white flex items-center justify-center shadow-xs transition-all mt-0.5 ${
            program.isOpen
              ? 'bg-[#F29938] group-hover:bg-[#DE8828] group-hover:scale-105'
              : 'bg-[#A8A49C] group-hover:bg-[#8F8B83]'
          }`}
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}

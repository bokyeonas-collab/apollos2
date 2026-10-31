import { X, ArrowRight, ArrowUpRight, BookOpen, Clock, MapPin, Sparkles, CheckCircle2, AlertCircle, CreditCard, Calendar, UserCheck } from 'lucide-react';
import { RecruitingProgram } from '../data/recruitingProgramsData';

interface RecruitingProgramModalProps {
  program: RecruitingProgram | null;
  onClose: () => void;
  onApply?: (title: string) => void;
}

export default function RecruitingProgramModal({
  program,
  onClose
}: RecruitingProgramModalProps) {
  if (!program) return null;

  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case '아볼로 북클럽':
        return 'bg-[#EBF3ED] text-[#2F5233] border-[#C8DFCD]';
      case '아볼로 스투디움':
        return 'bg-[#FFF4E5] text-[#9E5D1E] border-[#FAD6A5]';
      case '아볼로 클래스':
      default:
        return 'bg-[#F0F4FA] text-[#2C5282] border-[#CBD5E1]';
    }
  };

  const handleGoToAllPrograms = () => {
    onClose();
    // 학습 트랙 전체 모임 섹션으로 부드럽게 스크롤 이동
    setTimeout(() => {
      const section = document.getElementById('recruiting-programs-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 120);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] border border-[#E0DCD3] rounded-[2px] max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10 animate-in zoom-in-95 duration-200 text-left text-[#333333]"
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

        {/* 1. 맨 위: 카드에 있는 버튼 '모집 마감'/'모집 중', 카테고리 뱃지 */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`${program.isOpen ? 'bg-[#F29938]' : 'bg-[#44423E]'} text-white text-xs font-bold px-2.5 py-1 rounded-[2px] shadow-xs`}>
            {program.badge}
          </span>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-[2px] border ${getCategoryBadgeStyle(program.category)}`}>
            {program.category}
          </span>
        </div>

        {/* 2. 그 다음 바로 제목 (지금보다 폰트 크기 축소) */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1D] tracking-tight leading-snug mb-5">
          {program.title}
        </h2>

        {/* 3. 그 다음 바로 썸네일 (배경 네모 블럭 없이 바탕에 썸네일만 노출) */}
        <div className="mb-6 flex items-center justify-center">
          <img
            src={program.posterImage}
            alt={program.title}
            className="w-auto h-auto max-h-[460px] object-contain mx-auto"
          />
        </div>

        {/* 4. 그 다음 설명하는 한 문장(없으면 공백) 따옴표 안에 명조체로 표시 (기울임 제거) */}
        {program.introCopy && (
          <p className="font-serif text-sm sm:text-base text-[#44423E] text-center leading-relaxed mb-8 px-4 font-normal">
            “{program.introCopy}”
          </p>
        )}

        {/* 5. 모임 개요 (한 열로 정렬: 도서, 일정, 장소, 참가비, 신청 마감 등) */}
        <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] mb-8">
          <div className="text-xs font-bold text-[#1D1D1D] mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#F29938]" />
            <span>모임 개요</span>
          </div>

          <div className="flex flex-col gap-4 text-xs sm:text-[0.88rem]">
            {/* 필수: 함께 읽을 도서 */}
            <div className="flex items-start gap-3">
              <BookOpen className="w-4 h-4 text-[#84827D] shrink-0 mt-0.5" />
              <div>
                <span className="text-[0.74rem] text-[#88857F] block uppercase tracking-wider mb-0.5">함께 읽을 도서</span>
                <span className="font-semibold text-[#111111] text-sm">『{program.bookTitle}』</span>
                {program.bookAuthor && (
                  <span className="text-xs text-[#77746E] ml-1.5 font-normal">({program.bookAuthor})</span>
                )}
              </div>
            </div>

            {/* 선택: 일정 및 회차 */}
            {program.schedule && (
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#84827D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[0.74rem] text-[#88857F] block uppercase tracking-wider mb-0.5">일정 및 회차</span>
                  <span className="font-semibold text-[#111111]">{program.schedule}</span>
                </div>
              </div>
            )}

            {/* 선택: 진행 방식 및 장소 */}
            {program.method && (
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#84827D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[0.74rem] text-[#88857F] block uppercase tracking-wider mb-0.5">진행 방식 및 장소</span>
                  <span className="font-semibold text-[#111111]">{program.method}</span>
                </div>
              </div>
            )}

            {/* 선택: 참가비 */}
            {program.fee && (
              <div className="flex items-start gap-3">
                <CreditCard className="w-4 h-4 text-[#84827D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[0.74rem] text-[#88857F] block uppercase tracking-wider mb-0.5">참가비</span>
                  <span className="font-semibold text-[#111111]">{program.fee}</span>
                </div>
              </div>
            )}

            {/* 선택: 신청 마감 */}
            {program.deadline && (
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#84827D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[0.74rem] text-[#88857F] block uppercase tracking-wider mb-0.5">신청 마감</span>
                  <span className="font-semibold text-[#111111]">{program.deadline}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 모집 중인 프로그램: 모임 개요 밑 신청하기 버튼 */}
        {program.isOpen && (
          <div className="mb-8">
            <a
              href={program.applyLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#F29938] hover:bg-[#DE8828] text-white text-base sm:text-lg font-bold py-3.5 px-6 rounded-md shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer text-center"
            >
              <span>신청하기</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        )}

        {/* 프로그램 소개 문구 */}
        {program.fullContent && (
          <div className="mb-8 pb-6 border-b border-[#E0DCD3]">
            <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-3">
              프로그램 소개
            </h3>
            <div className="text-xs sm:text-[0.90rem] text-[#3A3835] leading-[1.85] whitespace-pre-line bg-[#F8F6F1] p-5 rounded-[2px] border border-[#E8E4DA]">
              {program.fullContent}
            </div>
          </div>
        )}

        {/* '함께 하는 책' 섹션: 해당 프로그램에서 다루는 책 사진 및 제목, 저자, 출판사 작성 */}
        {((program.books && program.books.length > 0) || program.bookTitle) && (
          <div className="mb-8 pb-6 border-b border-[#E0DCD3]">
            <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#F29938]" />
              <span>함께 하는 책</span>
            </h3>

            {program.books && program.books.length > 0 ? (
              <div className={`grid gap-4 ${program.books.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                {program.books.map((b, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#E5E0D8] rounded-[2px] p-4 flex gap-4 items-start shadow-[0_1px_6px_rgba(0,0,0,0.02)]"
                  >
                    {b.coverImage ? (
                      <div className="w-16 h-22 shrink-0 bg-[#F5F2EB] border border-[#ECE7DD] rounded-[2px] overflow-hidden flex items-center justify-center">
                        <img
                          src={b.coverImage}
                          alt={b.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-22 shrink-0 bg-[#F0ECE1] border border-[#DDD7C7] rounded-[2px] flex flex-col items-center justify-center p-1 text-center">
                        <BookOpen className="w-5 h-5 text-[#88857F] mb-1" />
                        <span className="text-[0.62rem] text-[#66635D] font-medium line-clamp-2">도서</span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-[0.95rem] font-bold text-[#111111] leading-snug mb-1">
                        『{b.title}』
                      </h4>
                      <div className="text-xs text-[#66635D] space-y-0.5 mb-1.5">
                        {b.author && <p><span className="text-[#8E8B83]">저자:</span> {b.author}</p>}
                        {b.publisher && <p><span className="text-[#8E8B83]">출판사:</span> {b.publisher}</p>}
                      </div>
                      {b.desc && (
                        <p className="text-xs text-[#55534E] leading-relaxed line-clamp-2">
                          {b.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-4 flex gap-4 items-center">
                <div className="w-14 h-18 shrink-0 bg-[#F0ECE1] rounded-[2px] flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[#88857F]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#111111] mb-1">
                    『{program.bookTitle}』
                  </h4>
                  {program.bookAuthor && (
                    <p className="text-xs text-[#66635D]">저자 / 엮은이: {program.bookAuthor}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* '길잡이' 섹션: 이름, 설명 추가 */}
        {((program.guidesList && program.guidesList.length > 0) || program.guides) && (
          <div className="mb-8 pb-6 border-b border-[#E0DCD3]">
            <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-4 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#F29938]" />
              <span>길잡이</span>
            </h3>

            {program.guidesList && program.guidesList.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.guidesList.map((g, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#E5E0D8] rounded-[2px] p-4 sm:p-5 shadow-[0_1px_6px_rgba(0,0,0,0.02)] space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2 border-b border-[#F0ECE1] pb-2">
                      <strong className="text-sm sm:text-base font-bold text-[#111111]">
                        {g.name}
                      </strong>
                      {g.role && (
                        <span className="text-[0.72rem] font-semibold text-[#3B5E43] bg-[#EBF3ED] px-2 py-0.5 rounded-[2px]">
                          {g.role}
                        </span>
                      )}
                    </div>

                    {g.bullets && g.bullets.length > 0 && (
                      <ul className="text-xs text-[#55534E] space-y-1 list-disc list-inside">
                        {g.bullets.map((b, bi) => (
                          <li key={bi} className="leading-relaxed">{b}</li>
                        ))}
                      </ul>
                    )}

                    {g.desc && (
                      <p className="text-xs text-[#66635D] leading-relaxed pt-1">
                        {g.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-[#E5E0D8] rounded-[2px] p-4 text-xs sm:text-[0.90rem] text-[#333230]">
                <span className="font-semibold text-[#111111]">{program.guides}</span>
              </div>
            )}
          </div>
        )}

        {/* 6. creatorlink 상세 내용 그대로 옮겨둠 (취지 / 특징 / 커리큘럼 / 대상 / FAQ) */}
        {/* 이런 분들과 함께하고 싶어요 */}
        {program.recommendations && program.recommendations.length > 0 && (
          <div className="mb-8 pb-6 border-b border-[#E0DCD3]">
            <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-4">
              이런 분들과 함께하고 싶어요
            </h3>
            <div className="space-y-2.5">
              {program.recommendations.map((rec, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[0.90rem] text-[#333230] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#F29938] shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 기획 취지 (Why & Context) */}
        {program.whyBook && (
          <div className="mb-8 pb-6 border-b border-[#E0DCD3]">
            <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-3">
              왜 지금 『{program.bookTitle}』인가?
            </h3>
            <div className="space-y-3 text-xs sm:text-[0.90rem] text-[#3A3835] leading-[1.85]">
              {program.whyBook.leadQuote && (
                <p className="font-semibold text-xs sm:text-sm text-[#111111] italic">
                  “{program.whyBook.leadQuote}”
                </p>
              )}
              {program.whyBook.reality.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {program.whyBook.possibilityDesc && (
                <p className="text-[#55524B] pt-2 border-t border-[#F0ECE1]">
                  {program.whyBook.possibilityDesc}
                </p>
              )}
            </div>
          </div>
        )}

        {/* 아볼로 북클럽만의 3가지 특징 */}
        {program.distinctFeatures && program.distinctFeatures.length > 0 && (
          <div className="mb-8 pb-6 border-b border-[#E0DCD3]">
            <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-4">
              모임 특징
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {program.distinctFeatures.map((feat) => (
                <div key={feat.num} className="bg-white border border-[#E5E0D8] rounded-[2px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                  <span className="font-cormorant text-lg font-bold text-[#F29938] block mb-1">
                    0{feat.num}
                  </span>
                  <strong className="text-xs sm:text-sm font-bold text-[#111111] block mb-1.5">
                    {feat.title}
                  </strong>
                  <p className="text-xs text-[#55524B] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 주차별 커리큘럼 */}
        {program.curriculum && program.curriculum.length > 0 && (
          <div className="mb-8 pb-6 border-b border-[#E0DCD3]">
            <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-4">
              주차별 진행 로드맵 ({program.curriculum.length}주)
            </h3>
            <div className="divide-y divide-[#F0ECE1]">
              {program.curriculum.map((item, idx) => (
                <div key={idx} className="py-3.5 first:pt-0 last:pb-0 text-xs sm:text-[0.88rem]">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-bold text-xs sm:text-sm text-[#111111]">{item.step}</span>
                    <span className="text-xs font-semibold text-[#F29938]">{item.type}</span>
                  </div>
                  {item.topic && (
                    <p className="text-xs font-semibold text-[#3B5E43] mb-1">{item.topic}</p>
                  )}
                  {item.desc && item.desc.trim().length > 0 && (
                    <p className="text-xs text-[#66635D] leading-relaxed mb-1.5">{item.desc}</p>
                  )}
                  {item.question && (
                    <div className="bg-[#FAF8F5] border-l-2 border-[#F29938] pl-3 py-1.5 mt-1.5 text-xs text-[#111111] italic">
                      함께 나눌 질문: “{item.question}”
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 자주 묻는 질문 (FAQ) */}
        {program.faq && (
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-4">
              자주 묻는 질문
            </h3>
            <div className="space-y-3 text-xs sm:text-[0.88rem]">
              {program.faq.map((item, i) => (
                <div key={i} className="bg-white border border-[#E5E0D8] rounded-[2px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                  <strong className="text-[#111111] block mb-1 font-semibold">
                    Q. {item.q}
                  </strong>
                  <p className="text-[#55524B] leading-relaxed">
                    A. {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. 안내사항 (모집 마감 안내 및 인스타그램 연결 하이퍼링크) */}
        <div className="my-8 p-5 bg-[#F6F4ED] rounded-[2px] border border-[#E8E4DA] text-xs sm:text-[0.88rem] text-[#55534E] leading-relaxed">
          <div className="flex items-center gap-1.5 font-bold text-[#111111] mb-2">
            <AlertCircle className="w-4 h-4 text-[#84827D]" />
            <span>안내사항</span>
          </div>
          {(program.badge === '모집 마감' || !program.isOpen) && (
            <p className="text-xs sm:text-[0.88rem] text-[#1D1D1D] mb-1.5 font-normal">
              해당 프로그램은 모집 마감 되었습니다
            </p>
          )}
          {program.isOpen && (
            <p className="text-xs sm:text-[0.88rem] text-[#1D1D1D] mb-1.5 font-medium">
              현재 모집이 진행 중인 프로그램입니다.
            </p>
          )}
          <p>
            새로운 프로그램 소식은 공식 인스타그램(
            <a
              href="https://www.instagram.com/the_apollos__/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1D1D1D] font-semibold underline underline-offset-2 hover:text-[#F29938] transition-colors"
            >
              @the_apollos__
            </a>
            )에서 가장 빠르게 확인하실 수 있습니다.
          </p>
        </div>

        {/* 8. 맨 마지막: '다른 프로그램 확인하기' 버튼 (학습 트랙 전체 모임 섹션으로 연결) */}
        <div className="pt-6 border-t border-[#111111] flex items-center justify-end">
          <button
            onClick={handleGoToAllPrograms}
            className="inline-flex items-center justify-center gap-2 bg-[#F29938] hover:bg-[#DE8828] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-md transition-all cursor-pointer whitespace-nowrap shadow-xs"
          >
            <span>다른 프로그램 확인하기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

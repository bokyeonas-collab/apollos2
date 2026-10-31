import { X, Quote, CheckCircle2 } from 'lucide-react';
import { MemberReview } from '../data/reviewsData';

interface ReviewModalProps {
  review: MemberReview | null;
  onClose: () => void;
}

export default function ReviewModal({ review, onClose }: ReviewModalProps) {
  if (!review) return null;

  const getProgramLabel = (program: string) => {
    switch (program) {
      case 'studium':
        return '아볼로 스투디움';
      case 'bookclub':
        return '아볼로 북클럽';
      case 'table':
        return '아볼로 테이블';
      case 'dmz':
        return '아볼로 DMZ';
      default:
        return '아볼로 프로그램';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white border border-[#E8E4DA] max-w-xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative p-6 sm:p-9 animate-in zoom-in-95 duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#84827D] hover:text-[#1D1D1D] p-2 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border bg-[#F4F0E6] border-[#E8E4DA] text-[#3B5E43]">
            {review.program}
          </span>
        </div>

        {/* Quote Symbol */}
        <div className="w-10 h-10 rounded-2xl bg-[#F4F0E6] flex items-center justify-center text-[#3B5E43] mb-4">
          <Quote className="w-5 h-5" />
        </div>

        {/* Full Review Text */}
        <div className="text-sm sm:text-[0.95rem] text-[#4A4A48] leading-[1.8] space-y-4 mb-8 bg-[#FBF9F4] p-5 rounded-2xl border border-[#E8E4DA]">
          <p>{review.body}</p>
        </div>

        {/* Reviewer Bio Card */}
        <div className="p-4 rounded-xl bg-white border border-[#E8E4DA] flex items-center justify-between mb-6">
          <div>
            <div className="text-sm font-bold text-[#1D1D1D] flex items-center gap-1.5">
              <span>{review.name}</span>
              <CheckCircle2 className="w-4 h-4 text-[#3B5E43]" />
            </div>
            <div className="text-xs text-[#7C887E]">
              {review.program}
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 bg-[#FBF9F4] text-[#4A4A48] rounded-full border border-[#E8E4DA]">
            멤버 후기
          </span>
        </div>

        {/* Footer Close Button */}
        <div className="flex justify-end pt-2 border-t border-[#E8E4DA]">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#3B5E43] text-white text-xs sm:text-sm font-semibold hover:bg-[#2e4a34] transition-colors cursor-pointer"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
}

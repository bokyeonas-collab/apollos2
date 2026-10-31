import { X } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExplorePrograms: () => void;
}

export default function AboutModal({ isOpen, onClose, onExplorePrograms }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FAF8F5] border border-[#E0DCD3] rounded-[2px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10 text-left text-[#333333]"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#77746E] hover:text-[#111111] p-1.5 transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="text-xs text-[#77746E] tracking-widest uppercase font-medium block mb-2">
            The Philosophy of Apollos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1D] tracking-tight leading-tight">
            About Apollos
          </h2>
          <p className="text-xs text-[#77746E] mt-2">
            시대의 질문 앞에서 서로의 언어를 배우는 기독교 인문학 커뮤니티
          </p>
        </div>

        {/* Narrative */}
        <div className="space-y-4 text-xs sm:text-[0.92rem] text-[#3A3835] leading-[1.85] border-t border-b border-[#E0DCD3] py-6">
          <p>
            성경 사도행전 18장에 등장하는 <strong className="text-[#111111] font-semibold">아볼로(Apollos)</strong>는 알렉산드리아 출신의 지식인이자, 헬라 철학과 성경의 언어에 능통했던 인물이었습니다. 하지만 그는 당대 지식인이었음에도 불구하고 평범한 천막 제작자 브리스길라와 아굴라 부부의 조언을 겸허히 경청하며 자신의 앎을 온전하게 다듬어갔습니다.
          </p>
          <p>
            우리가 지향하는 <strong className="text-[#111111] font-semibold">아볼로</strong>는 바로 이 겸손한 지성의 태도를 계승합니다. 혐오와 진영 논리가 극단으로 치닫는 한국 사회에서, 우리는 신앙의 언어를 세상이 이해할 수 있는 상식의 언어로 번역하고, 세상의 날카로운 질문을 신앙의 깊이로 끌어안는 <strong className="text-[#111111] font-semibold">‘이중언어 통역자’</strong>들의 연대를 만들어갑니다.
          </p>
          
          <div className="py-3 border-t border-[#EFECE5] space-y-2 text-xs sm:text-[0.88rem] text-[#55524B]">
            <p>· <strong className="text-[#111111]">정직한 독서:</strong> 빠른 결론을 내리기 전, 텍스트의 맥락을 끝까지 정직하게 따라갑니다.</p>
            <p>· <strong className="text-[#111111]">기록과 퇴고:</strong> 생각에 머무르지 않고, 피드백을 통해 자기 언어로 정돈된 서평을 남깁니다.</p>
            <p>· <strong className="text-[#111111]">환대와 화해:</strong> 정답을 강요하지 않는 자리에서 반대편의 고통과 목소리를 경청합니다.</p>
          </div>
          
          <p className="text-xs text-[#77746E] pt-2">
            지난 10여 년간 200여 명의 동문이 함께해 왔으며, 한국복음주의운동연구소(복연)와 함께 마포 서강빌딩에서 온·오프라인의 안전한 사유 공간을 이어가고 있습니다.
          </p>
        </div>

        {/* Footer CTA */}
        <div className="flex justify-between items-center gap-4 mt-6">
          <span className="font-cormorant italic text-base text-[#77746E]">
            Read, Write, and Reconcile
          </span>
          <button
            onClick={() => {
              onClose();
              onExplorePrograms();
            }}
            className="bg-[#111111] hover:bg-black text-white text-xs font-medium px-6 py-2.5 rounded-md transition-all cursor-pointer tracking-wider uppercase"
          >
            프로그램 보기
          </button>
        </div>
      </div>
    </div>
  );
}

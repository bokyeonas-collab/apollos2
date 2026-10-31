import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { PROGRAMS } from '../data/programsData';

interface InquiryModalProps {
  isOpen: boolean;
  initialProgramTitle?: string;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}

export default function InquiryModal({
  isOpen,
  initialProgramTitle = '',
  onClose,
  onSuccess,
}: InquiryModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [programTitle, setProgramTitle] = useState(initialProgramTitle || PROGRAMS[0].title);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg('이름과 이메일 주소를 입력해주세요.');
      return;
    }
    setErrorMsg('');

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(`'${programTitle}' 참가 문의 및 신청이 접수되었습니다. (입력하신 ${email}로 안내가 발송됩니다)`);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FAF8F5] border border-[#E0DCD3] max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10 text-left text-[#333333]"
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

        <div className="mb-6">
          <span className="text-xs text-[#77746E] tracking-widest uppercase font-medium block mb-2">
            Application &amp; Inquiry
          </span>
          <h2 className="text-2xl sm:text-3xl font-normal text-[#111111] tracking-tight">
            프로그램 참여 및 등록 문의
          </h2>
          <p className="text-xs text-[#77746E] mt-1.5 leading-relaxed">
            관심 있는 코스를 선택해주시면 일정 및 상세 안내를 이메일로 보내드립니다.
          </p>
        </div>

        {errorMsg && (
          <div className="p-3 mb-4 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-md">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block text-xs font-medium text-[#111111] mb-1.5">
              관심 프로그램
            </label>
            <select
              value={programTitle}
              onChange={(e) => setProgramTitle(e.target.value)}
              className="w-full bg-white border border-[#E0DCD3] rounded-md px-3.5 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
            >
              {PROGRAMS.map((p) => (
                <option key={p.id} value={p.title}>
                  {p.title} ({p.trackNumber})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-[#111111] mb-1.5">
                성함 / 닉네임 <span className="text-[#88857F]">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="홍길동"
                className="w-full bg-white border border-[#E0DCD3] rounded-md px-3.5 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#111111] mb-1.5">
                연락처 (선택)
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010-0000-0000"
                className="w-full bg-white border border-[#E0DCD3] rounded-md px-3.5 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#111111] mb-1.5">
              이메일 주소 <span className="text-[#88857F]">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              className="w-full bg-white border border-[#E0DCD3] rounded-md px-3.5 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#111111] mb-1.5">
              남기실 말씀 또는 문의 사항
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="참여 동기, 일정 관련 문의, 또는 읽고 싶은 책이 있다면 자유롭게 적어주세요."
              className="w-full bg-white border border-[#E0DCD3] rounded-md px-3.5 py-2.5 text-[#111111] focus:outline-none focus:border-[#111111] transition-colors resize-none leading-relaxed"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#111111] hover:bg-black text-white py-3 rounded-md text-xs font-medium tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>접수 중...</span>
              ) : (
                <>
                  <span>신청 및 문의 접수</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

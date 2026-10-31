import { useState } from 'react';
import CabinSymbol from './CabinSymbol';
import { Copy, Check, ArrowUpRight, ShieldCheck, Heart, ChevronDown } from 'lucide-react';

interface DonationSectionProps {
  onNotify: (msg: string) => void;
}

export default function DonationSection({ onNotify }: DonationSectionProps) {
  const [copied, setCopied] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);

  const accountNumber = '093401-04-279768';
  const fullAccountString = '국민은행 093401-04-279768 (재)한빛누리(한국복음주의운동연구소)';

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
      onNotify('국민은행 계좌번호(093401-04-279768)가 복사되었습니다.');
    });
  };

  return (
    <section className="py-24 text-center bg-[#FBF9F4]" id="donate">
      <div className="max-w-[1040px] mx-auto px-6">
        <div className="bg-white border border-[#E8E4DA] rounded-xl p-8 sm:p-14 max-w-2xl mx-auto shadow-sm">
          {/* Cabin Symbol */}
          <div className="mb-4 flex justify-center">
            <CabinSymbol className="w-14 h-10" />
          </div>

          {/* Heading */}
          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#1D1D1D] mb-3">
            Partner with Apollos
          </h2>

          <p className="text-[0.95rem] text-[#4A4A48] leading-[1.78] max-w-lg mx-auto mb-7">
            한국복음주의운동연구소(복연)는 공익법인 <strong>재단법인 한빛누리</strong>를 통해 투명하게 회계를 관리합니다.<br className="hidden sm:inline" />
            청년들이 마음껏 책을 읽고 서평을 쓸 수 있도록 장학금과 세미나를 후원해주세요.
          </p>

          {/* Bank Account Capsule Box */}
          <div className="bg-[#F4F0E6] border border-[#E8E4DA] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 text-xs sm:text-sm">
            <div className="text-center sm:text-left">
              <span className="text-[0.76rem] font-semibold text-[#84827D] block uppercase tracking-wider">
                일시 후원 계좌 (국민은행)
              </span>
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-0.5">
                <span className="font-bold text-[#1D1D1D] text-sm sm:text-base tracking-wide font-mono tabular-nums">
                  {accountNumber}
                </span>
                <span className="text-xs text-[#84827D]">
                  (재)한빛누리
                </span>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 bg-[#2B2F2C] hover:bg-[#191B1A] text-white px-3.5 py-2 rounded-md text-xs font-medium transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>복사 완료!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>계좌 복사</span>
                </>
              )}
            </button>
          </div>

          {/* Regular Sponsorship Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://www.bokyeon.org/%ED%9B%84%EC%9B%90%ED%95%98%EA%B8%B0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#2B2F2C] hover:bg-[#191B1A] text-white text-[0.95rem] font-medium px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-md cursor-pointer w-full sm:w-auto"
            >
              <Heart className="w-4 h-4 text-rose-300" />
              <span>정기후원(CMS) 신청하기</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Tax deduction & accountability accordion */}
          <div className="mt-8 pt-6 border-t border-[#E8E4DA]/70 text-left">
            <button
              onClick={() => setFaqOpen(!faqOpen)}
              className="w-full flex items-center justify-between text-xs text-[#84827D] hover:text-[#1D1D1D] transition-colors cursor-pointer py-1"
            >
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3B5E43]" />
                기부금 영수증 및 후원금 투명 집행 안내
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${faqOpen ? 'rotate-180' : ''}`} />
            </button>

            {faqOpen && (
              <div className="mt-3 p-4 bg-[#FBF9F4] rounded-lg border border-[#E8E4DA] text-xs text-[#4A4A48] space-y-2 leading-relaxed animate-in fade-in duration-150">
                <p>
                  • <strong>기부금 영수증 발급</strong>: (재)한빛누리는 공익법인으로, 납부하신 모든 후원금은 연말정산 시 법정 지정기부금 세액공제 혜택(기부금 코드 40번)을 받으실 수 있습니다.
                </p>
                <p>
                  • <strong>후원금의 쓰임</strong>: 아볼로 청년 스투디움 장학 지원, 연구 세미나 교재 및 도서 구매, 공론장 공간 대관 및 기록물 출판에 전액 사용됩니다.
                </p>
                <p>
                  • <strong>영수증 문의</strong>: 재단법인 한빛누리 및 복연 사무국(apollos@bokyeon.org)
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ArrowUpRight, Mail, Instagram, Send, Sparkles } from 'lucide-react';

interface SnsSectionProps {
  onNotify: (msg: string) => void;
}

export default function SnsSection({ onNotify }: SnsSectionProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onNotify('올바른 이메일 주소를 입력해주세요.');
      return;
    }
    setSubscribed(true);
    onNotify(`'${email}' 주소로 아볼로 월간 레터 구독이 등록되었습니다.`);
    setEmail('');
  };

  return (
    <section className="py-20 border-b border-[#E8E4DA] bg-white relative overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-[#E8E4DA] bg-[#F4F0E6] text-[#3B5E43] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect &amp; Follow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1D] mb-2 font-cormorant">
            Stay Connected
          </h2>
          <p className="text-sm sm:text-[0.95rem] text-[#4A4A48]">
            아볼로의 최근 소식과 카드뉴스, 세미나 기록, 사유의 글을 SNS에서 만나보세요.
          </p>
        </div>

        {/* Social Channel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-14">
          <a
            href="https://www.instagram.com/the_apollos__/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 bg-[#FBF9F4] rounded-2xl border border-[#E8E4DA] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shadow-xs">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-[#1D1D1D] transition-colors group-hover:text-[#3B5E43]">
                  Instagram
                </div>
                <div className="text-xs text-[#7C887E]">
                  @the_apollos__ · 카드뉴스 &amp; 일상
                </div>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white border border-[#E8E4DA] flex items-center justify-center text-[#4A4A48] group-hover:bg-[#3B5E43] group-hover:text-white group-hover:border-[#3B5E43] transition-all">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>

          <a
            href="https://blog.naver.com/apollosstudium/224181997320"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 bg-[#FBF9F4] rounded-2xl border border-[#E8E4DA] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#03C75A] text-white flex items-center justify-center font-bold text-lg shadow-xs">
                N
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-[#1D1D1D] transition-colors group-hover:text-[#3B5E43]">
                  Naver Blog
                </div>
                <div className="text-xs text-[#7C887E]">
                  아볼로 스투디움 공식 블로그
                </div>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white border border-[#E8E4DA] flex items-center justify-center text-[#4A4A48] group-hover:bg-[#3B5E43] group-hover:text-white group-hover:border-[#3B5E43] transition-all">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        </div>

        {/* Newsletter Box */}
        <div className="max-w-2xl mx-auto p-8 bg-[#FBF9F4] rounded-2xl border border-[#E8E4DA] text-center relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8E4DA] mx-auto mb-4 flex items-center justify-center text-[#3B5E43] shadow-xs">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-[#1D1D1D] mb-2">
            월간 아볼로 레터 받아보기
          </h3>
          <p className="text-xs sm:text-sm text-[#4A4A48] max-w-md mx-auto mb-6">
            매달 첫째 주 화요일, 동문 서평과 깊이 있는 사유의 칼럼을 이메일 편지함으로 보내드립니다.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-3 bg-white border border-[#E8E4DA] text-sm text-[#1D1D1D] rounded-full focus:outline-none focus:border-[#3B5E43] transition-all shadow-2xs"
            />
            <button
              type="submit"
              className="bg-[#3B5E43] hover:bg-[#2e4a34] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>{subscribed ? '구독 완료' : '구독 신청'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

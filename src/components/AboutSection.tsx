import { Building2, Mail, MapPin, User, Compass, BookMarked, HeartHandshake, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface AboutSectionProps {
  onNotify: (msg: string) => void;
}

export default function AboutSection({ onNotify }: AboutSectionProps) {
  const [copiedAddr, setCopiedAddr] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const address = '서울시 마포구 동교로 136 서강빌딩 502호 (한국복음주의운동연구소)';
  const email = 'apollos@bokyeon.org';

  const copyText = (text: string, type: 'addr' | 'email') => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'addr') {
        setCopiedAddr(true);
        setTimeout(() => setCopiedAddr(false), 2000);
        onNotify('연구소 주소가 클립보드에 복사되었습니다.');
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
        onNotify('대표 이메일이 클립보드에 복사되었습니다.');
      }
    });
  };

  return (
    <section id="about" className="py-24 border-b border-[#E8E4DA] bg-[#FBF9F4]">
      <div className="max-w-[1040px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14" id="bokyeon">
          <h2 className="font-cormorant text-4xl sm:text-[2.6rem] font-semibold text-[#1D1D1D] mb-3">
            About Apollos & Bokyeon
          </h2>
          <p className="text-[0.98rem] text-[#84827D]">
            신앙과 세상의 언어를 잇는 이중언어 소통 공간
          </p>
        </div>

        {/* Main Philosophy Card */}
        <div className="bg-white border border-[#E8E4DA] rounded-xl p-8 sm:p-12 max-w-3xl mx-auto mb-10 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1D] mb-5 font-cormorant">
            화해의 하나님 나라를 수행합니다
          </h3>

          <p className="text-[0.98rem] text-[#4A4A48] leading-[1.88] mb-6">
            혐오와 진영 논리의 시대, 그리고 AI와 가속화된 자본주의 속에서 우리는 종종 나만의 고유한 생각과 신앙의 언어를 잃어버리곤 합니다. 아볼로는 인문학으로 신앙을 성찰하고, 신앙으로 세상을 이해하며 양쪽의 언어로 소통하는 <strong>‘이중언어 통역자’</strong>를 길러냅니다.
          </p>

          {/* 3 Core Values Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 pt-6 border-t border-[#E8E4DA]/70">
            <div className="p-4 bg-[#FBF9F4] rounded-lg border border-[#E8E4DA]/60">
              <BookMarked className="w-5 h-5 text-[#3B5E43] mb-2" />
              <h4 className="text-sm font-bold text-[#1D1D1D] mb-1">01. 정직한 독서</h4>
              <p className="text-xs text-[#84827D] leading-relaxed">
                속독이나 요약이 아닌, 텍스트의 맥락과 질문을 우직하게 마주합니다.
              </p>
            </div>
            <div className="p-4 bg-[#FBF9F4] rounded-lg border border-[#E8E4DA]/60">
              <Compass className="w-5 h-5 text-[#3B5E43] mb-2" />
              <h4 className="text-sm font-bold text-[#1D1D1D] mb-1">02. 이중언어 통역</h4>
              <p className="text-xs text-[#84827D] leading-relaxed">
                교회 안의 언어와 세상의 언어 사이에서 다리를 놓는 사유를 훈련합니다.
              </p>
            </div>
            <div className="p-4 bg-[#FBF9F4] rounded-lg border border-[#E8E4DA]/60">
              <HeartHandshake className="w-5 h-5 text-[#3B5E43] mb-2" />
              <h4 className="text-sm font-bold text-[#1D1D1D] mb-1">03. 평화의 공론장</h4>
              <p className="text-xs text-[#84827D] leading-relaxed">
                정답을 강요하지 않는 안전한 식탁에서 타자의 시선을 끝까지 듣습니다.
              </p>
            </div>
          </div>

          {/* Institute Details */}
          <div className="pt-6 border-t border-dashed border-[#E8E4DA] space-y-3 text-xs sm:text-sm text-[#4A4A48]">
            <div className="flex items-start sm:items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#3B5E43] shrink-0" />
                <span><strong>연구소 거점:</strong> {address}</span>
              </div>
              <button
                onClick={() => copyText(address, 'addr')}
                className="inline-flex items-center gap-1 text-xs text-[#3B5E43] hover:text-[#1D1D1D] font-medium bg-[#FBF9F4] px-2.5 py-1 rounded border border-[#E8E4DA] transition-colors cursor-pointer"
              >
                {copiedAddr ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedAddr ? '복사됨' : '주소 복사'}</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#3B5E43] shrink-0" />
              <span><strong>소장:</strong> 이강일 (전 IVF 간사, 복음주의 지성·평화신학 연구)</span>
            </div>

            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#3B5E43] shrink-0" />
                <span><strong>문의:</strong> {email}</span>
              </div>
              <button
                onClick={() => copyText(email, 'email')}
                className="inline-flex items-center gap-1 text-xs text-[#3B5E43] hover:text-[#1D1D1D] font-medium bg-[#FBF9F4] px-2.5 py-1 rounded border border-[#E8E4DA] transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedEmail ? '복사됨' : '메일 복사'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

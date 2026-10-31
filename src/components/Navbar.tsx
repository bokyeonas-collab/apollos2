import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export type NavPage = 'home' | 'learning' | 'action' | 'about' | 'bokyeon' | 'donate';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FBF9F4]/95 backdrop-blur-md border-b border-[#E8E4DA] transition-all">
      <div className="max-w-[1040px] mx-auto px-6 h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand Logo (Clicking goes to Home) */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity whitespace-nowrap shrink-0 cursor-pointer py-1"
          aria-label="Apollos 홈으로 이동"
        >
          <img
            src="/images/apollos_logo_cropped.png"
            alt="Apollos Logo"
            className="h-9 md:h-10 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.src = '/images/apollos_logo_new.png';
            }}
          />
        </button>

        {/* Zone 2: Navigation Links for Separate Pages (Right Aligned) */}
        <nav className="hidden md:flex items-center gap-7 text-[0.92rem] font-medium text-[#4A4A48] ml-auto">
          <button
            onClick={() => handleNav('learning')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 ${
              currentPage === 'learning'
                ? 'text-[#1D1D1D] font-bold border-b-2 border-[#1D1D1D]'
                : 'hover:text-[#1D1D1D]'
            }`}
          >
            학습 트랙
          </button>
          <button
            onClick={() => handleNav('action')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 ${
              currentPage === 'action'
                ? 'text-[#1D1D1D] font-bold border-b-2 border-[#1D1D1D]'
                : 'hover:text-[#1D1D1D]'
            }`}
          >
            활동 트랙
          </button>
          <button
            onClick={() => handleNav('about')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 ${
              currentPage === 'about'
                ? 'text-[#1D1D1D] font-bold border-b-2 border-[#1D1D1D]'
                : 'hover:text-[#1D1D1D]'
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleNav('bokyeon')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 ${
              currentPage === 'bokyeon'
                ? 'text-[#1D1D1D] font-bold border-b-2 border-[#1D1D1D]'
                : 'hover:text-[#1D1D1D]'
            }`}
          >
            복연
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action (후원하기: 메인 컬러 오렌지색 적용) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNav('donate')}
            className={`hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full text-xs md:text-[0.86rem] font-medium transition-all shadow-sm active:scale-95 whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'donate'
                ? 'bg-[#DE8828] text-white ring-2 ring-[#F29938]/40'
                : 'bg-[#F29938] hover:bg-[#DE8828] text-white'
            }`}
          >
            후원하기
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#1D1D1D] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F4] border-b border-[#E8E4DA] px-6 py-5 shadow-lg space-y-3 animate-in fade-in duration-150">
          <button
            onClick={() => handleNav('home')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'home' ? 'text-[#3B5E43] font-bold' : 'text-[#1D1D1D]'
            }`}
          >
            홈 (Home)
          </button>
          <button
            onClick={() => handleNav('learning')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'learning' ? 'text-[#3B5E43] font-bold' : 'text-[#1D1D1D]'
            }`}
          >
            학습 트랙
          </button>
          <button
            onClick={() => handleNav('action')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'action' ? 'text-[#3B5E43] font-bold' : 'text-[#1D1D1D]'
            }`}
          >
            활동 트랙
          </button>
          <button
            onClick={() => handleNav('about')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'about' ? 'text-[#3B5E43] font-bold' : 'text-[#1D1D1D]'
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleNav('bokyeon')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'bokyeon' ? 'text-[#3B5E43] font-bold' : 'text-[#1D1D1D]'
            }`}
          >
            복연
          </button>
          <div className="pt-2 border-t border-[#E8E4DA]">
            <button
              onClick={() => handleNav('donate')}
              className="w-full bg-[#F29938] hover:bg-[#DE8828] text-white py-2.5 rounded-full text-sm font-medium text-center shadow-xs"
            >
              후원하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

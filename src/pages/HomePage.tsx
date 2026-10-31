import Hero from '../components/Hero';
import Statement from '../components/Statement';
import ProgramsSection from '../components/ProgramsSection';
import ReviewsSection from '../components/ReviewsSection';
import BooksMarqueeSection from '../components/BooksMarqueeSection';
import CommunityCtaSection from '../components/CommunityCtaSection';
import { Program } from '../data/programsData';
import { NavPage } from '../components/Navbar';

import ScrollReveal from '../components/ScrollReveal';

interface HomePageProps {
  onSelectProgram?: (p: Program) => void;
  onOpenAboutModal: () => void;
  onNavigateToAbout: () => void;
  onNavigate?: (page: NavPage, usePageTurn?: boolean) => void;
  onNotify?: (msg: string) => void;
}

export default function HomePage({
  onSelectProgram,
  onOpenAboutModal,
  onNavigateToAbout,
  onNavigate,
}: HomePageProps) {
  const handleExplorePrograms = () => {
    const el = document.getElementById('learning');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-in fade-in duration-200">
      {/* 1. Hero (No scroll reveal, has its own entrance) */}
      <Hero
        onExplorePrograms={handleExplorePrograms}
        onOpenIntroModal={onOpenAboutModal}
      />

      {/* 2. Statement (3,000ms Fade-in & Translate Up) */}
      <Statement onOpenAbout={onNavigateToAbout} />

      {/* 3. 우리가 했던 책들 롤링배너 (3,000ms Fade-in & Translate Up) */}
      <ScrollReveal>
        <BooksMarqueeSection />
      </ScrollReveal>

      {/* 4. Programs Section (3,000ms Fade-in & Translate Up) */}
      <ScrollReveal>
        <ProgramsSection onNavigate={onNavigate} onSelectProgram={onSelectProgram} />
      </ScrollReveal>

      {/* 5. Review Section (3,000ms Fade-in & Translate Up) */}
      <ScrollReveal>
        <ReviewsSection />
      </ScrollReveal>

      {/* 6. 메인 페이지 맨 밑: With Apollos (3,000ms Fade-in & Translate Up) */}
      <ScrollReveal>
        <CommunityCtaSection onNavigate={onNavigate} />
      </ScrollReveal>
    </div>
  );
}

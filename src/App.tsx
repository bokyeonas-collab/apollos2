/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar, { NavPage } from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LearningPage from './pages/LearningPage';
import ActionPage from './pages/ActionPage';
import AboutPage from './pages/AboutPage';
import BokyeonPage from './pages/BokyeonPage';
import DonatePage from './pages/DonatePage';
import ProgramModal from './components/ProgramModal';
import RecruitingProgramModal from './components/RecruitingProgramModal';
import AboutModal from './components/AboutModal';
import InquiryModal from './components/InquiryModal';
import Toast from './components/Toast';
import { Program } from './data/programsData';
import { RecruitingProgram } from './data/recruitingProgramsData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedRecruitingProgram, setSelectedRecruitingProgram] = useState<RecruitingProgram | null>(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquiryProgramTitle, setInquiryProgramTitle] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [pageTurnState, setPageTurnState] = useState<'idle' | 'turning-out' | 'turning-in'>('idle');

  const notify = (msg: string) => {
    setToastMessage(msg);
  };

  const handleApplyOrInquire = (programTitle: string) => {
    setInquiryProgramTitle(programTitle);
    setIsInquiryModalOpen(true);
  };

  const handleNavigate = (page: NavPage, usePageTurn = false) => {
    if (usePageTurn) {
      setPageTurnState('turning-out');
      setTimeout(() => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'instant' });
        setPageTurnState('turning-in');
        setTimeout(() => {
          setPageTurnState('idle');
        }, 320);
      }, 260);
    } else {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F4] text-[#4A4A48] overflow-x-clip">
      {/* Page Turn Visual Overlay */}
      {pageTurnState !== 'idle' && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D1D]/15 via-[#F29938]/15 to-transparent book-spine-sheen" />
        </div>
      )}

      {/* Sticky Top Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={(page) => handleNavigate(page, false)} />

      {/* Main Page Content */}
      <main
        className={`flex-1 relative transition-all ${
          pageTurnState === 'turning-out'
            ? 'book-page-turning-out'
            : pageTurnState === 'turning-in'
            ? 'book-page-turning-in'
            : ''
        }`}
      >
        {/* 1. 홈 메인화면 (Hero + Statement + Programs) */}
        {currentPage === 'home' && (
          <HomePage
            onSelectProgram={(p) => setSelectedProgram(p)}
            onOpenAboutModal={() => setIsAboutModalOpen(true)}
            onNavigateToAbout={() => handleNavigate('about')}
            onNavigate={handleNavigate}
            onNotify={notify}
          />
        )}

        {/* 2. 학습 트랙 전용 페이지 */}
        {currentPage === 'learning' && (
          <LearningPage
            onApplyOrInquire={handleApplyOrInquire}
            onSelectProgram={(p) => setSelectedProgram(p)}
            onSelectRecruitingProgram={(p) => setSelectedRecruitingProgram(p)}
          />
        )}

        {/* 3. 활동 트랙 전용 페이지 */}
        {currentPage === 'action' && (
          <ActionPage
            onApplyOrInquire={handleApplyOrInquire}
            onSelectProgram={(p) => setSelectedProgram(p)}
            onNotify={notify}
          />
        )}

        {/* 4. About 아볼로 전용 페이지 */}
        {currentPage === 'about' && (
          <AboutPage
            onNavigateToPrograms={() => handleNavigate('learning')}
            onNotify={notify}
          />
        )}

        {/* 5. 복연 연구소 전용 페이지 */}
        {currentPage === 'bokyeon' && (
          <BokyeonPage onNotify={notify} />
        )}

        {/* 6. 후원하기 전용 페이지 */}
        {currentPage === 'donate' && (
          <DonatePage onNotify={notify} />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Program Detail Modal */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onApplyOrInquire={handleApplyOrInquire}
      />

      {/* Recruiting Program Detail Modal */}
      <RecruitingProgramModal
        program={selectedRecruitingProgram}
        onClose={() => setSelectedRecruitingProgram(null)}
        onApply={handleApplyOrInquire}
      />

      {/* About Story Modal */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onExplorePrograms={() => {
          setIsAboutModalOpen(false);
          handleNavigate('learning');
        }}
      />

      {/* Program Application & Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        initialProgramTitle={inquiryProgramTitle}
        onClose={() => setIsInquiryModalOpen(false)}
        onSuccess={notify}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

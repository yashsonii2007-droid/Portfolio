import React, { useState, useEffect } from 'react';
import { profileData, exhibits } from './data/portfolioData';
import { Header } from './components/Header';
import { HeroSpread } from './components/HeroSpread';
import { ExhibitSequence } from './components/ExhibitSequence';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FooterColophon } from './components/FooterColophon';
import { CaseStudyView } from './components/CaseStudyView';
import { Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  // Thinking Mode State (persisted in localStorage)
  const [isThinkingMode, setIsThinkingMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('annotated_portfolio_thinking_mode');
      return saved !== null ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  // Active Route State based on window.location.hash
  const [currentHash, setCurrentHash] = useState<string>(() => window.location.hash || '');

  useEffect(() => {
    try {
      localStorage.setItem('annotated_portfolio_thinking_mode', JSON.stringify(isThinkingMode));
    } catch {
      // Ignore localStorage errors in sandboxed environments
    }
  }, [isThinkingMode]);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleThinkingMode = () => {
    setIsThinkingMode(prev => !prev);
  };

  // Route parser
  // Matches #/project/:id
  const projectMatch = currentHash.match(/^#\/project\/([^/?#]+)/);
  const activeProjectId = projectMatch ? projectMatch[1] : null;
  const activeExhibit = activeProjectId 
    ? exhibits.find(e => e.id === activeProjectId) 
    : null;

  const navigateToProject = (id: string) => {
    window.location.hash = `#/project/${id}`;
  };

  const navigateToHome = () => {
    window.location.hash = '#/';
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Skip to Content for Keyboard Users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Student Editorial Setup Banner (Only shown while placeholders are active) */}
      {profileData.isPlaceholderData && (
        <aside className="demo-banner" aria-label="Template setup notice">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="demo-badge">Student Setup Mode</span>
            <span>
              All content is configured in <code>src/data/portfolioData.ts</code>. Edit your name, discipline, and projects before submitting.
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-accent)' }}>
            <Sparkles size={12} />
            <span>Field Journal Ready</span>
          </div>
        </aside>
      )}

      {/* Global Header Masthead */}
      <Header
        profile={profileData}
        isThinkingMode={isThinkingMode}
        onToggleThinking={toggleThinkingMode}
        activeRoute={activeExhibit ? 'project' : 'home'}
        onNavigate={(route) => {
          if (route === 'home') {
            navigateToHome();
          }
        }}
      />

      {/* Main Content Area */}
      <main id="main-content" style={{ flex: 1 }}>
        {activeExhibit ? (
          <CaseStudyView
            exhibit={activeExhibit}
            allExhibits={exhibits}
            isThinkingMode={isThinkingMode}
            onBack={navigateToHome}
            onNavigateExhibit={navigateToProject}
          />
        ) : (
          <>
            <HeroSpread
              profile={profileData}
              isThinkingMode={isThinkingMode}
            />
            <ExhibitSequence
              exhibits={exhibits}
              isThinkingMode={isThinkingMode}
              onSelectExhibit={navigateToProject}
              isPlaceholderData={profileData.isPlaceholderData}
            />
            <AboutSection
              profile={profileData}
              isThinkingMode={isThinkingMode}
            />
            <ContactSection
              profile={profileData}
            />
          </>
        )}
      </main>

      {/* Global Footer & Colophon */}
      <FooterColophon profile={profileData} />
    </div>
  );
};

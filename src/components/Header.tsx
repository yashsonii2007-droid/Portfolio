import React, { useState } from 'react';
import { Lightbulb, Menu, X } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface HeaderProps {
  profile: ProfileData;
  isThinkingMode: boolean;
  onToggleThinking: () => void;
  activeRoute: string;
  onNavigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  isThinkingMode,
  onToggleThinking,
  activeRoute,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (activeRoute !== 'home') {
      onNavigate('home');
      // Allow DOM to update before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(245, 241, 232, 0.94)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--color-border)',
      transition: 'border-color var(--transition-fast)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'var(--header-height)',
      }}>
        {/* Left: Monogram / Name Branding */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            background: 'none',
            border: 'none',
            padding: '0.5rem 0',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            textAlign: 'left',
          }}
          aria-label={`${profile.name} — Return to top`}
        >
          {/* Typographic monogram badge */}
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '34px',
            height: '34px',
            border: '1px solid var(--color-ink-primary)',
            fontFamily: 'var(--font-serif)',
            fontSize: '1.15rem',
            fontWeight: 600,
            color: 'var(--color-ink-primary)',
            backgroundColor: 'var(--color-bg-paper)',
          }}>
            {profile.monogram}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: 'var(--color-ink-primary)',
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
            }}>
              {profile.name}
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.675rem',
              color: 'var(--color-ink-muted)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>
              {profile.discipline}
            </span>
          </div>
        </button>

        {/* Desktop Navigation & Signature Toggle */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(1rem, 2.5vw, 2.25rem)',
        }} className="desktop-nav">
          {/* Navigation Links */}
          <nav aria-label="Primary portfolio navigation" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={() => handleNavClick('work')}
              className="editorial-link"
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                cursor: 'pointer',
                minHeight: '44px',
                padding: '0 0.5rem',
              }}
            >
              Selected Work
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="editorial-link"
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                cursor: 'pointer',
                minHeight: '44px',
                padding: '0 0.5rem',
              }}
            >
              Context
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="editorial-link"
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                cursor: 'pointer',
                minHeight: '44px',
                padding: '0 0.5rem',
              }}
            >
              Contact
            </button>
          </nav>

          {/* Vertical divider */}
          <div style={{ width: '1px', height: '22px', backgroundColor: 'var(--color-border)' }} aria-hidden="true" />

          {/* Signature Interaction: "Show my thinking" Accessible Switch */}
          <button
            onClick={onToggleThinking}
            role="switch"
            aria-checked={isThinkingMode}
            aria-label="Show my thinking: toggle field journal annotations and process notes"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.45rem 0.85rem',
              background: isThinkingMode ? 'var(--color-accent-tint)' : 'var(--color-bg-paper)',
              border: `1px solid ${isThinkingMode ? 'var(--color-accent)' : 'var(--color-border)'}`,
              borderRadius: 'var(--radius-subtle)',
              cursor: 'pointer',
              minHeight: '44px',
              transition: 'all var(--transition-fast)',
            }}
          >
            <span style={{
              display: 'flex',
              alignItems: 'center',
              color: isThinkingMode ? 'var(--color-accent)' : 'var(--color-ink-muted)',
            }}>
              <Lightbulb size={15} />
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.725rem',
                fontWeight: 500,
                color: isThinkingMode ? 'var(--color-accent)' : 'var(--color-ink-primary)',
                letterSpacing: '0.02em',
              }}>
                Show my thinking
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.625rem',
                color: isThinkingMode ? 'var(--color-accent)' : 'var(--color-ink-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {isThinkingMode ? '[ Journal: ON ]' : '[ Editorial: OFF ]'}
              </span>
            </div>
            {/* Indicator Dot */}
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: isThinkingMode ? 'var(--color-accent)' : 'var(--color-ink-faint)',
              marginLeft: '0.2rem',
              transition: 'background-color var(--transition-fast)',
            }} />
          </button>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <div className="mobile-toggle" style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }}>
          {/* Mobile thinking quick toggle button */}
          <button
            onClick={onToggleThinking}
            role="switch"
            aria-checked={isThinkingMode}
            aria-label="Toggle thinking mode"
            style={{
              padding: '0.4rem 0.6rem',
              background: isThinkingMode ? 'var(--color-accent-tint)' : 'var(--color-bg-paper)',
              border: `1px solid ${isThinkingMode ? 'var(--color-accent)' : 'var(--color-border)'}`,
              borderRadius: 'var(--radius-subtle)',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: isThinkingMode ? 'var(--color-accent)' : 'var(--color-ink-primary)',
              minHeight: '44px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <Lightbulb size={13} />
            <span>{isThinkingMode ? 'Thinking: ON' : 'Thinking'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            style={{
              background: 'none',
              border: '1px solid var(--color-border)',
              padding: '0.5rem',
              cursor: 'pointer',
              color: 'var(--color-ink-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--color-bg-paper)',
          borderBottom: '1px solid var(--color-border)',
          padding: '1.25rem clamp(1.25rem, 4vw, 3rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          <button
            onClick={() => handleNavClick('work')}
            style={{
              background: 'none',
              border: 'none',
              textAlign: 'left',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-small)',
              color: 'var(--color-ink-primary)',
              padding: '0.6rem 0',
              cursor: 'pointer',
            }}
          >
            01. Selected Work
          </button>
          <button
            onClick={() => handleNavClick('about')}
            style={{
              background: 'none',
              border: 'none',
              textAlign: 'left',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-small)',
              color: 'var(--color-ink-primary)',
              padding: '0.6rem 0',
              cursor: 'pointer',
            }}
          >
            02. Context &amp; Capabilities
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            style={{
              background: 'none',
              border: 'none',
              textAlign: 'left',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-small)',
              color: 'var(--color-ink-primary)',
              padding: '0.6rem 0',
              cursor: 'pointer',
            }}
          >
            03. Contact
          </button>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 820px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

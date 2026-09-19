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
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
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
      backgroundColor: 'rgba(245, 241, 232, 0.95)',
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
        {/* Left: Monogram / Yash Soni Identity */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            background: 'none',
            border: 'none',
            padding: '0.4rem 0',
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
            width: '36px',
            height: '36px',
            border: '1.5px solid var(--color-ink-primary)',
            fontFamily: 'var(--font-serif)',
            fontSize: '1.2rem',
            fontWeight: 600,
            color: 'var(--color-ink-primary)',
            backgroundColor: 'var(--color-bg-paper)',
            borderRadius: 'var(--radius-subtle)',
            position: 'relative',
          }}>
            {profile.monogram}
            <span style={{
              position: 'absolute',
              top: '4px',
              right: '4px',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-accent)',
            }} />
          </span>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.975rem',
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
              THE ANNOTATED PORTFOLIO
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
              Work
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
              About
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

          {/* Fine vertical rule */}
          <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--color-border)' }} aria-hidden="true" />

          {/* Signature Interaction: "Show my thinking" Accessible Switch */}
          <button
            onClick={onToggleThinking}
            role="switch"
            aria-checked={isThinkingMode}
            aria-label="Show my thinking: reveal contextual design decisions, engineering trade-offs, and field notes"
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
              <Lightbulb size={16} />
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.725rem',
                fontWeight: 600,
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
                {isThinkingMode ? '[ Notes: REVEALED ]' : '[ Editorial: CLEAN ]'}
              </span>
            </div>
            {/* Visual indicator dot */}
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

        {/* Mobile Nav Control Group */}
        <div className="mobile-toggle-group" style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }}>
          {/* Quick thinking switch for mobile */}
          <button
            onClick={onToggleThinking}
            role="switch"
            aria-checked={isThinkingMode}
            aria-label="Toggle thinking process notes"
            style={{
              padding: '0.5rem 0.65rem',
              minHeight: '44px',
              minWidth: '44px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: isThinkingMode ? 'var(--color-accent-tint)' : 'var(--color-bg-paper)',
              border: `1px solid ${isThinkingMode ? 'var(--color-accent)' : 'var(--color-border)'}`,
              borderRadius: 'var(--radius-subtle)',
              color: isThinkingMode ? 'var(--color-accent)' : 'var(--color-ink-secondary)',
              cursor: 'pointer',
            }}
          >
            <Lightbulb size={18} />
          </button>

          {/* Menu Drawer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            style={{
              padding: '0.5rem',
              minHeight: '44px',
              minWidth: '44px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-subtle)',
              color: 'var(--color-ink-primary)',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Overlay */}
      {mobileMenuOpen && (
        <div 
          style={{
            backgroundColor: 'var(--color-bg-paper)',
            borderBottom: '1px solid var(--color-border-dark)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
          className="mobile-menu-drawer"
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.675rem',
            color: 'var(--color-ink-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            borderBottom: '1px solid var(--color-border)',
            paddingBottom: '0.4rem',
          }}>
            Navigation
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              onClick={() => handleNavClick('work')}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.35rem',
                color: 'var(--color-ink-primary)',
                cursor: 'pointer',
                padding: '0.4rem 0',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Selected Work
            </button>
            <button
              onClick={() => handleNavClick('about')}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.35rem',
                color: 'var(--color-ink-primary)',
                cursor: 'pointer',
                padding: '0.4rem 0',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              About Yash Soni
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.35rem',
                color: 'var(--color-ink-primary)',
                cursor: 'pointer',
                padding: '0.4rem 0',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Contact &amp; Connect
            </button>
          </nav>

          {/* Inline thinking toggle inside mobile drawer */}
          <div style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-ink-primary)' }}>
                Show my thinking
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.675rem', color: 'var(--color-ink-muted)' }}>
                Process notes &amp; trade-offs
              </span>
            </div>

            <button
              onClick={onToggleThinking}
              role="switch"
              aria-checked={isThinkingMode}
              style={{
                padding: '0.4rem 0.85rem',
                minHeight: '44px',
                backgroundColor: isThinkingMode ? 'var(--color-accent)' : 'var(--color-bg)',
                color: isThinkingMode ? '#FFFFFF' : 'var(--color-ink-primary)',
                border: `1px solid ${isThinkingMode ? 'var(--color-accent)' : 'var(--color-border)'}`,
                borderRadius: 'var(--radius-subtle)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                cursor: 'pointer',
              }}
            >
              {isThinkingMode ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-group {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

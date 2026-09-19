import React from 'react';
import { ArrowUp } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface FooterColophonProps {
  profile: ProfileData;
}

export const FooterColophon: React.FC<FooterColophonProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      role="contentinfo"
      style={{
        borderTop: '1px solid var(--color-border-dark)',
        backgroundColor: 'var(--color-bg-paper)',
        paddingTop: '3rem',
        paddingBottom: '3.5rem',
      }}
    >
      <div className="container">
        {/* Colophon Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>
          {/* Colophon Identity */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-accent)',
              marginBottom: '0.75rem',
              fontWeight: 600,
            }}>
              <span>COLOPHON // SPECIFICATIONS</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              color: 'var(--color-ink-secondary)',
              margin: 0,
            }}>
              Authored as an annotated field journal and design exhibition. Built with React, TypeScript, and pure CSS custom properties. Zero runtime CSS overhead.
            </p>
          </div>

          {/* Typography Stack */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-ink-muted)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}>
              Typography
            </div>
            <ul style={{
              listStyle: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--color-ink-primary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
            }}>
              <li><span style={{ color: 'var(--color-ink-muted)' }}>Display: </span>Cormorant Garamond</li>
              <li><span style={{ color: 'var(--color-ink-muted)' }}>Interface: </span>Manrope</li>
              <li><span style={{ color: 'var(--color-ink-muted)' }}>Curatorial: </span>IBM Plex Mono</li>
            </ul>
          </div>

          {/* Chromatic Palette Swatches */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-ink-muted)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}>
              Chromatic Palette
            </div>
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <div title="Warm Ivory #F5F1E8" style={{ width: '32px', height: '32px', backgroundColor: '#F5F1E8', border: '1px solid var(--color-border)', borderRadius: '2px' }} />
              <div title="Near-Black Ink #24231F" style={{ width: '32px', height: '32px', backgroundColor: '#24231F', borderRadius: '2px' }} />
              <div title="Muted Grey #78746B" style={{ width: '32px', height: '32px', backgroundColor: '#78746B', borderRadius: '2px' }} />
              <div title="Rust Red #A43D2D" style={{ width: '32px', height: '32px', backgroundColor: '#A43D2D', borderRadius: '2px' }} />
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--color-ink-muted)',
              marginTop: '0.5rem',
            }}>
              WCAG AAA Contrast Conforming
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--color-ink-muted)',
        }}>
          <div>
            © {new Date().getFullYear()} {profile.name}. Typeset &amp; engineered with care. Designed to be read.
          </div>

          <button
            onClick={scrollToTop}
            className="editorial-link"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

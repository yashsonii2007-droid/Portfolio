import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { ProfileData } from '../types/portfolio';
import { AnnotationBadge } from './AnnotationBadge';

interface HeroSpreadProps {
  profile: ProfileData;
  isThinkingMode: boolean;
}

export const HeroSpread: React.FC<HeroSpreadProps> = ({
  profile,
  isThinkingMode,
}) => {
  const spreadAnnotation = {
    id: "hero-spread-note",
    category: "decision" as const,
    tag: "SPREAD DESIGN // 00",
    title: "Asymmetric 7:5 Ratio",
    note: "Instead of a generic circular headshot or floating 3D shape, this opening spread uses an authentic typographical specimen grid with coordinate registration marks. It immediately signals an editorial philosophy: content and structure over cosmetic distraction."
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      aria-label="Opening editorial spread" 
      style={{
        paddingTop: 'clamp(2.5rem, 6vw, 4.5rem)',
        paddingBottom: 'clamp(3rem, 7vw, 5rem)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Curatorial Header Tag */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-mono)',
          color: 'var(--color-ink-muted)',
          borderBottom: '1px solid var(--color-border-subtle)',
          paddingBottom: '0.75rem',
        }}>
          <span className="curatorial-label">FIELD ARCHIVE // ISSUE NO. 01</span>
          <span>EST. 2026 // TYPESET IN CORMORANT &amp; MANROPE</span>
        </div>

        {/* 2-Column Asymmetric Opening Spread */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: 'clamp(2rem, 5vw, 4.5rem)',
          alignItems: 'start',
        }} className="hero-grid">
          {/* Left Column: Headlines, Identity & Introduction */}
          <div>
            <h1 style={{
              fontSize: 'var(--fs-display)',
              fontFamily: 'var(--font-serif)',
              lineHeight: 'var(--lh-tight)',
              fontWeight: 500,
              color: 'var(--color-ink-primary)',
              letterSpacing: '-0.02em',
              marginBottom: '1.75rem',
            }}>
              {profile.editorialHeadline.line1}<br />
              <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>
                {profile.editorialHeadline.line2}
              </span>
            </h1>

            {/* Plainspoken Identity Block */}
            <div style={{
              paddingLeft: '1.25rem',
              borderLeft: '2px solid var(--color-border-dark)',
              marginBottom: '2rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.825rem',
                color: 'var(--color-accent)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '0.35rem',
                fontWeight: 500,
              }}>
                {profile.name} — {profile.discipline}
              </p>
              <p style={{
                fontSize: 'var(--fs-body)',
                lineHeight: 'var(--lh-body)',
                color: 'var(--color-ink-primary)',
                fontWeight: 400,
              }}>
                {profile.oneSentenceIntro}
              </p>
            </div>

            {/* Actions */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
            }}>
              <button
                onClick={() => scrollToSection('work')}
                className="btn-primary"
              >
                Explore my work
                <ArrowDown size={16} aria-hidden="true" />
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="btn-secondary"
              >
                A little about me
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: Original Typographic Initials & Fine Ruled Grid Composition */}
          <div style={{ position: 'relative' }}>
            <div 
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
                maxHeight: '440px',
                backgroundColor: 'var(--color-bg-paper)',
                border: '1px solid var(--color-border)',
                padding: '1.75rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              role="img"
              aria-label={`Typographic monogram composition for ${profile.name} with coordinate alignment marks`}
            >
              {/* Corner Registration Marks */}
              <div style={{ position: 'absolute', top: 8, left: 8, width: 8, height: 8, borderTop: '1px solid var(--color-ink-muted)', borderLeft: '1px solid var(--color-ink-muted)' }} />
              <div style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderTop: '1px solid var(--color-ink-muted)', borderRight: '1px solid var(--color-ink-muted)' }} />
              <div style={{ position: 'absolute', bottom: 8, left: 8, width: 8, height: 8, borderBottom: '1px solid var(--color-ink-muted)', borderLeft: '1px solid var(--color-ink-muted)' }} />
              <div style={{ position: 'absolute', bottom: 8, right: 8, width: 8, height: 8, borderBottom: '1px solid var(--color-ink-muted)', borderRight: '1px solid var(--color-ink-muted)' }} />

              {/* Grid Header Info */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.675rem',
                color: 'var(--color-ink-muted)',
                letterSpacing: '0.05em',
                borderBottom: '1px dashed var(--color-border)',
                paddingBottom: '0.6rem',
              }}>
                <span>SPECIMEN // {profile.monogram}</span>
                <span>SEC. 00 // REG: 42°N</span>
              </div>

              {/* Monogram Artwork with Ruled Crosshairs */}
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
                {/* Horizontal & Vertical Crosshair Lines */}
                <div style={{ position: 'absolute', width: '100%', height: '1px', borderTop: '1px dashed var(--color-border-subtle)' }} />
                <div style={{ position: 'absolute', height: '100%', width: '1px', borderLeft: '1px dashed var(--color-border-subtle)' }} />

                {/* Primary Serif Monogram */}
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(5.5rem, 11vw, 8.5rem)',
                  fontWeight: 600,
                  color: 'var(--color-ink-primary)',
                  letterSpacing: '-0.05em',
                  position: 'relative',
                  zIndex: 2,
                  lineHeight: 1,
                  userSelect: 'none',
                }}>
                  {profile.monogram}
                  <span style={{
                    position: 'absolute',
                    top: '15%',
                    right: '-10px',
                    width: '9px',
                    height: '9px',
                    backgroundColor: 'var(--color-accent)',
                    borderRadius: '50%',
                  }} />
                </div>
              </div>

              {/* Curatorial Caption Footer */}
              <div style={{
                borderTop: '1px solid var(--color-border)',
                paddingTop: '0.6rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--color-ink-secondary)',
              }}>
                <div>
                  <div style={{ color: 'var(--color-ink-muted)' }}>TYPOGRAPHY // CANON</div>
                  <div>Optical Serifs &amp; Monospaced Rhythms</div>
                </div>
                <div style={{ textAlign: 'right', color: 'var(--color-accent)' }}>
                  PORTFOLIO EDITION 1.0
                </div>
              </div>
            </div>

            {/* Margin Annotation for Hero */}
            <AnnotationBadge 
              annotation={spreadAnnotation} 
              isThinkingMode={isThinkingMode} 
              isMargin={true} 
            />
          </div>
        </div>

        {/* Peek indicator of first exhibit */}
        <div style={{
          marginTop: 'clamp(2.5rem, 5vw, 4rem)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-mono)',
          color: 'var(--color-ink-muted)',
          letterSpacing: '0.06em',
        }}>
          <span>SCROLL FOR EXHIBIT 01</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-border)' }} />
          <span>[ 01 / 03 ]</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

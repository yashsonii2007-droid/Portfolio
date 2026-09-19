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
  const heroAnnotation = {
    id: "hero-spread-note",
    category: "decision" as const,
    discipline: "web-design" as const,
    tag: "SPREAD ARCHITECTURE // 00",
    title: "Connected Disciplines Over Competing Titles",
    note: "Instead of rotating job titles or generic skill tags, the five specializations are structured as an interconnected triad: Intelligence (AI/ML & Data Science), Experience (UI/UX & Web Design), and Implementation (Web Development).",
    isExampleNote: true,
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
        paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Curatorial Masthead Info Bar */}
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
          <span className="curatorial-label">EDITORIAL FIELD ARCHIVE // FOLIO 2026</span>
          <span className="curatorial-meta-right">CORMORANT GARAMOND · MANROPE · IBM PLEX MONO</span>
        </div>

        {/* 2-Column Asymmetric Opening Spread */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.25fr 0.85fr',
          gap: 'clamp(2rem, 5vw, 4.5rem)',
          alignItems: 'start',
        }} className="hero-grid">
          {/* Left Column: Name, Primary Headline, Short Intro, Specializations & Actions */}
          <div>
            {/* Prominent Name & Core Positioning */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.825rem',
                color: 'var(--color-accent)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                YASH SONI
              </span>
              <span style={{ color: 'var(--color-border-dark)' }}>—</span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-ink-muted)',
                fontStyle: 'italic',
              }}>
                "{profile.corePositioning}"
              </span>
            </div>

            {/* Primary Headline */}
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

            {/* Plainspoken Short Introduction */}
            <div style={{
              paddingLeft: '1.25rem',
              borderLeft: '2px solid var(--color-border-dark)',
              marginBottom: '2rem',
            }}>
              <p style={{
                fontSize: 'var(--fs-body)',
                lineHeight: 'var(--lh-body)',
                color: 'var(--color-ink-primary)',
                fontWeight: 400,
                maxWidth: '56ch',
              }}>
                {profile.shortIntro}
              </p>
            </div>

            {/* The 5 Specializations — Considered Typographic Arrangement as Connected Disciplines */}
            <div style={{
              marginBottom: '2.5rem',
              backgroundColor: 'var(--color-bg-paper)',
              border: '1px solid var(--color-border)',
              padding: '1.25rem',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.675rem',
                color: 'var(--color-ink-muted)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span>CONNECTED DISCIPLINES</span>
                <span style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-border-subtle)' }} />
                <span style={{ color: 'var(--color-accent)' }}>05 PILLARS</span>
              </div>

              {/* Specializations list */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.5rem 0.75rem',
              }}>
                {profile.specializations.map((spec, index) => (
                  <React.Fragment key={spec}>
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--color-ink-primary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}>
                      <span style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: index === 0 || index === 4 ? 'var(--color-accent)' : 'var(--color-ink-muted)',
                      }} />
                      {spec}
                    </span>
                    {index < profile.specializations.length - 1 && (
                      <span style={{
                        color: 'var(--color-border)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                      }}>
                        /
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Primary & Secondary Call to Actions */}
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
                <span>Explore my work</span>
                <ArrowDown size={16} aria-hidden="true" />
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="btn-secondary"
              >
                <span>Meet the mind behind it</span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: Original YS Typographic Artwork with Construction Lines */}
          <div style={{ position: 'relative' }}>
            <div 
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
                maxHeight: '440px',
                backgroundColor: 'var(--color-bg-paper)',
                border: '1px solid var(--color-border)',
                padding: 'clamp(1.25rem, 3vw, 2rem)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              role="img"
              aria-label="Typographic YS Monogram composition with editorial construction lines and conceptual markers"
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
                <span>AUTEUR // YASH SONI</span>
                <span>SEC. 00 // REG: 28°N</span>
              </div>

              {/* Central Monogram Artwork with Ruled Crosshairs & 3 Conceptual Tags */}
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
                {/* Horizontal & Vertical Construction Guidelines */}
                <div style={{ position: 'absolute', width: '100%', height: '1px', borderTop: '1px dashed var(--color-border-subtle)' }} />
                <div style={{ position: 'absolute', height: '100%', width: '1px', borderLeft: '1px dashed var(--color-border-subtle)' }} />

                {/* 3 Small Conceptual Labels: Think, Design, Build */}
                <div style={{
                  position: 'absolute',
                  top: '12%',
                  left: '8%',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}>
                  <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }} />
                  Think
                </div>

                <div style={{
                  position: 'absolute',
                  top: '46%',
                  right: '6%',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-ink-primary)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}>
                  <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--color-ink-primary)', borderRadius: '50%' }} />
                  Design
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '12%',
                  left: '12%',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-ink-muted)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}>
                  <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--color-ink-muted)', borderRadius: '50%' }} />
                  Build
                </div>

                {/* Large Serif Monogram YS */}
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(5.5rem, 11vw, 8.5rem)',
                  fontWeight: 600,
                  color: 'var(--color-ink-primary)',
                  letterSpacing: '-0.06em',
                  position: 'relative',
                  zIndex: 2,
                  lineHeight: 1,
                  userSelect: 'none',
                }}>
                  {profile.monogram}
                  {/* Restrained rust-red marker */}
                  <span style={{
                    position: 'absolute',
                    top: '12%',
                    right: '-12px',
                    width: '10px',
                    height: '10px',
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
                  <div style={{ color: 'var(--color-ink-muted)' }}>TYPOGRAPHIC SPECIMEN</div>
                  <div>Cormorant Garamond + Grid Geometry</div>
                </div>
                <div style={{ textAlign: 'right', color: 'var(--color-accent)', fontWeight: 500 }}>
                  EDITION // 2026
                </div>
              </div>
            </div>

            {/* Desktop Marginalia Annotation for Hero Spread */}
            <AnnotationBadge 
              annotation={heroAnnotation} 
              isThinkingMode={isThinkingMode} 
              isMargin={true} 
            />
          </div>
        </div>

        {/* Glimpse of the First Project below Opening Section */}
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
          <span>SCROLL FOR EXHIBIT 01 — SIGNAL</span>
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
          .curatorial-meta-right {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

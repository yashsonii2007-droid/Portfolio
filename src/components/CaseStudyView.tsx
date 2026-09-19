import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Compass } from 'lucide-react';
import { Exhibit } from '../types/portfolio';
import { AnnotationBadge } from './AnnotationBadge';
import { LexiconDiagram } from './diagrams/LexiconDiagram';
import { KineticFieldDiagram } from './diagrams/KineticFieldDiagram';
import { SpecimenDiagram } from './diagrams/SpecimenDiagram';

interface CaseStudyViewProps {
  exhibit: Exhibit;
  allExhibits: Exhibit[];
  isThinkingMode: boolean;
  onBack: () => void;
  onNavigateExhibit: (id: string) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  exhibit,
  allExhibits,
  isThinkingMode,
  onBack,
  onNavigateExhibit,
}) => {
  // Scroll to top upon opening case study
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [exhibit.id]);

  const currentIndex = allExhibits.findIndex(e => e.id === exhibit.id);
  const prevExhibit = currentIndex > 0 ? allExhibits[currentIndex - 1] : null;
  const nextExhibit = currentIndex < allExhibits.length - 1 ? allExhibits[currentIndex + 1] : null;

  const renderVisual = () => {
    switch (exhibit.diagramType) {
      case 'lexicon':
        return <LexiconDiagram />;
      case 'kinetic':
        return <KineticFieldDiagram />;
      case 'specimen':
        return <SpecimenDiagram />;
      default:
        return null;
    }
  };

  return (
    <article 
      aria-labelledby="case-study-title"
      style={{
        paddingTop: '2.5rem',
        paddingBottom: '5rem',
        minHeight: '80vh',
      }}
    >
      <div className="container">
        {/* Navigation Breadcrumb Bar */}
        <nav aria-label="Case study navigation" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--color-border)',
          paddingBottom: '1.25rem',
          marginBottom: '3rem',
        }}>
          <button
            onClick={onBack}
            className="editorial-link"
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-mono)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0',
            }}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Return to Portfolio</span>
          </button>

          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-mono)',
            color: 'var(--color-ink-muted)',
          }}>
            EXHIBIT // {exhibit.number} OF 0{allExhibits.length}
          </span>
        </nav>

        {/* Case Study Masthead */}
        <header style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-mono)',
            color: 'var(--color-accent)',
            marginBottom: '0.75rem',
            letterSpacing: '0.08em',
          }}>
            <span>CASE STUDY DOCUMENTATION</span>
            <span>//</span>
            <span style={{ color: 'var(--color-ink-secondary)', textTransform: 'uppercase' }}>
              {exhibit.category}
            </span>
          </div>

          <h1 
            id="case-study-title"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--fs-display)',
              lineHeight: 'var(--lh-tight)',
              fontWeight: 500,
              color: 'var(--color-ink-primary)',
              marginBottom: '1.5rem',
            }}
          >
            {exhibit.title}
          </h1>

          <p style={{
            fontSize: 'clamp(1.15rem, 1.4vw, 1.35rem)',
            lineHeight: 1.5,
            color: 'var(--color-ink-secondary)',
            fontFamily: 'var(--font-sans)',
            maxWidth: 'var(--reading-width)',
            marginBottom: '2rem',
          }}>
            {exhibit.caseStudy.summary}
          </p>

          {/* Metadata Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.25rem',
            backgroundColor: 'var(--color-bg-paper)',
            border: '1px solid var(--color-border)',
            padding: '1.25rem 1.5rem',
          }}>
            <div>
              <div className="curatorial-label no-dot" style={{ marginBottom: '0.25rem' }}>TIMEFRAME</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{exhibit.timeframe}</div>
            </div>
            <div>
              <div className="curatorial-label no-dot" style={{ marginBottom: '0.25rem' }}>CONTRIBUTION</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{exhibit.contribution}</div>
            </div>
            <div>
              <div className="curatorial-label no-dot" style={{ marginBottom: '0.25rem' }}>TOOLS &amp; TECH</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{exhibit.tools.join(', ')}</div>
            </div>
          </div>
        </header>

        {/* Featured Vector Diagram */}
        <section style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div style={{
            border: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg-paper)',
            padding: '1rem',
          }}>
            {renderVisual()}
          </div>
          <div style={{
            marginTop: '0.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--color-ink-muted)',
          }}>
            <span>EXHIBIT SCHEMATIC NO. {exhibit.number}</span>
            <span>VECTOR PRECISION // NO PLACEHOLDER BITMAPS</span>
          </div>
        </section>

        {/* Two-Column Editorial Content & Margin Thinking Layer */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 320px',
          gap: 'clamp(2rem, 5vw, 4.5rem)',
          alignItems: 'start',
        }} className="case-study-layout">
          {/* Main Reading Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2.5rem, 5vw, 4rem)' }}>
            
            {/* 1. Problem & Context */}
            <section aria-labelledby="cs-section-problem">
              <span className="curatorial-label">CHAPTER 01 // CONTEXT</span>
              <h2 id="cs-section-problem" style={{
                fontSize: 'var(--fs-h2)',
                marginTop: '0.5rem',
                marginBottom: '1rem',
              }}>
                The Problem
              </h2>
              <p style={{
                fontSize: 'var(--fs-body)',
                lineHeight: 'var(--lh-body)',
                color: 'var(--color-ink-secondary)',
              }}>
                {exhibit.caseStudy.problem}
              </p>
            </section>

            <hr className="rule-divider" />

            {/* 2. Constraints */}
            <section aria-labelledby="cs-section-constraints">
              <span className="curatorial-label">CHAPTER 02 // PARAMETERS</span>
              <h2 id="cs-section-constraints" style={{
                fontSize: 'var(--fs-h2)',
                marginTop: '0.5rem',
                marginBottom: '1.25rem',
              }}>
                Constraints &amp; Boundaries
              </h2>
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}>
                {exhibit.caseStudy.constraints.map((c, i) => (
                  <li 
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--fs-body)',
                      lineHeight: 'var(--lh-body)',
                      color: 'var(--color-ink-secondary)',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'var(--color-bg-paper)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--color-accent)',
                      fontWeight: 600,
                      marginTop: '2px',
                    }}>
                      [C-0{i + 1}]
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="rule-divider" />

            {/* 3. Approach & Methodology */}
            <section aria-labelledby="cs-section-approach">
              <span className="curatorial-label">CHAPTER 03 // EXECUTION</span>
              <h2 id="cs-section-approach" style={{
                fontSize: 'var(--fs-h2)',
                marginTop: '0.5rem',
                marginBottom: '1rem',
              }}>
                Approach &amp; Methodology
              </h2>
              <p style={{
                fontSize: 'var(--fs-body)',
                lineHeight: 'var(--lh-body)',
                color: 'var(--color-ink-secondary)',
              }}>
                {exhibit.caseStudy.approach}
              </p>
            </section>

            <hr className="rule-divider" />

            {/* 4. Key Design Decision (The Core Story) */}
            <section aria-labelledby="cs-section-decision">
              <span className="curatorial-label">CHAPTER 04 // CRITICAL TRADEOFF</span>
              <h2 id="cs-section-decision" style={{
                fontSize: 'var(--fs-h2)',
                marginTop: '0.5rem',
                marginBottom: '1.25rem',
              }}>
                Key Design Decision: {exhibit.caseStudy.keyDecision.title}
              </h2>

              {/* Decision Box with Context, Tradeoff, and Resolution */}
              <div style={{
                backgroundColor: 'var(--color-bg-paper)',
                border: '1px solid var(--color-border)',
                borderLeft: '4px solid var(--color-accent)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-ink-muted)',
                    textTransform: 'uppercase',
                    marginBottom: '0.35rem',
                  }}>
                    Initial Context
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    {exhibit.caseStudy.keyDecision.context}
                  </p>
                </div>

                <div style={{
                  padding: '0.85rem',
                  backgroundColor: 'rgba(164, 61, 45, 0.05)',
                  border: '1px dashed var(--color-accent-border)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-accent)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    marginBottom: '0.25rem',
                  }}>
                    The Trade-off Evaluated
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-primary)', margin: 0 }}>
                    {exhibit.caseStudy.keyDecision.tradeoff}
                  </p>
                </div>

                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-ink-muted)',
                    textTransform: 'uppercase',
                    marginBottom: '0.35rem',
                  }}>
                    Final Resolution
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-secondary)', margin: 0 }}>
                    {exhibit.caseStudy.keyDecision.resolution}
                  </p>
                </div>
              </div>
            </section>

            <hr className="rule-divider" />

            {/* 5. Outcome (Honest & Qualitative) */}
            <section aria-labelledby="cs-section-outcome">
              <span className="curatorial-label">CHAPTER 05 // OUTCOME</span>
              <h2 id="cs-section-outcome" style={{
                fontSize: 'var(--fs-h2)',
                marginTop: '0.5rem',
                marginBottom: '1rem',
              }}>
                Demonstrated Results
              </h2>

              <div style={{
                backgroundColor: 'var(--color-bg-paper)',
                border: '1px solid var(--color-border)',
                padding: '1.25rem 1.5rem',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--color-accent)',
                  fontWeight: 500,
                  marginBottom: '0.5rem',
                }}>
                  <CheckCircle2 size={16} />
                  <span>{exhibit.caseStudy.outcome.status}</span>
                </div>
                <p style={{
                  fontSize: 'var(--fs-body)',
                  lineHeight: 'var(--lh-body)',
                  color: 'var(--color-ink-primary)',
                  margin: 0,
                }}>
                  {exhibit.caseStudy.outcome.qualitativeResult}
                </p>
              </div>

              {exhibit.caseStudy.outcome.isDemonstrationNote && (
                <div style={{
                  marginTop: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.725rem',
                  color: 'var(--color-ink-muted)',
                }}>
                  <AlertCircle size={13} />
                  <span>Note: Results describe actual qualitative observations, avoiding synthetic metrics.</span>
                </div>
              )}
            </section>

            <hr className="rule-divider" />

            {/* 6. Reflection */}
            <section aria-labelledby="cs-section-reflection">
              <span className="curatorial-label">CHAPTER 06 // RETROSPECTIVE</span>
              <h2 id="cs-section-reflection" style={{
                fontSize: 'var(--fs-h2)',
                marginTop: '0.5rem',
                marginBottom: '1rem',
              }}>
                Reflection &amp; Lessons Learned
              </h2>
              <p style={{
                fontSize: 'var(--fs-body)',
                lineHeight: 'var(--lh-body)',
                color: 'var(--color-ink-secondary)',
                fontStyle: 'italic',
                borderLeft: '2px solid var(--color-border-dark)',
                paddingLeft: '1.25rem',
              }}>
                "{exhibit.caseStudy.reflection}"
              </p>
            </section>
          </div>

          {/* Right Column: Marginalia Annotation Column (Sticky & Synchronized) */}
          <aside 
            className="case-study-sidebar"
            aria-label="Process notes and marginalia"
            style={{
              position: 'sticky',
              top: '5.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div style={{
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: isThinkingMode ? 'var(--color-accent)' : 'var(--color-ink-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}>
              <Compass size={14} />
              <span>{isThinkingMode ? 'MARGINAL NOTES // ACTIVE' : 'MARGINAL NOTES // MUTED'}</span>
            </div>

            {isThinkingMode ? (
              <>
                <AnnotationBadge 
                  annotation={exhibit.exhibitAnnotation}
                  isThinkingMode={isThinkingMode}
                  isMargin={true}
                />
                {exhibit.caseStudy.annotations.map(anno => (
                  <AnnotationBadge
                    key={anno.id}
                    annotation={anno}
                    isThinkingMode={isThinkingMode}
                    isMargin={true}
                  />
                ))}
              </>
            ) : (
              <div style={{
                padding: '1.25rem',
                backgroundColor: 'var(--color-bg-paper)',
                border: '1px dashed var(--color-border)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-ink-muted)',
                lineHeight: 1.5,
              }}>
                Enable <strong>"Show my thinking"</strong> in the top masthead to reveal author trade-off observations, design iterations, and research marginalia.
              </div>
            )}
          </aside>
        </div>

        {/* Footer Navigation: Previous / Next Exhibit */}
        <nav aria-label="Sequential exhibit navigation" style={{
          marginTop: 'clamp(3.5rem, 7vw, 6rem)',
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-border)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}>
          {prevExhibit ? (
            <button
              onClick={() => onNavigateExhibit(prevExhibit.id)}
              className="btn-secondary"
              style={{ justifyContent: 'flex-start', padding: '1rem 1.25rem' }}
            >
              <ArrowLeft size={16} aria-hidden="true" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.65rem', color: 'var(--color-ink-muted)' }}>PREVIOUS EXHIBIT</div>
                <div>{prevExhibit.title}</div>
              </div>
            </button>
          ) : <div />}

          {nextExhibit ? (
            <button
              onClick={() => onNavigateExhibit(nextExhibit.id)}
              className="btn-primary"
              style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
            >
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.65rem', opacity: 0.8 }}>NEXT EXHIBIT</div>
                <div>{nextExhibit.title}</div>
              </div>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          ) : (
            <button
              onClick={onBack}
              className="btn-primary"
              style={{ justifyContent: 'center', padding: '1rem 1.25rem' }}
            >
              <span>Return to Portfolio Top</span>
            </button>
          )}
        </nav>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .case-study-layout {
            grid-template-columns: 1fr !important;
          }
          .case-study-sidebar {
            position: static !important;
            margin-top: 2rem;
          }
        }
      `}</style>
    </article>
  );
};

import React from 'react';
import { ArrowUpRight, Wrench, UserCheck } from 'lucide-react';
import { Exhibit } from '../types/portfolio';
import { AnnotationBadge } from './AnnotationBadge';
import { LexiconDiagram } from './diagrams/LexiconDiagram';
import { KineticFieldDiagram } from './diagrams/KineticFieldDiagram';
import { SpecimenDiagram } from './diagrams/SpecimenDiagram';

interface ExhibitItemProps {
  exhibit: Exhibit;
  index: number;
  isThinkingMode: boolean;
  onSelectExhibit: (id: string) => void;
}

export const ExhibitItem: React.FC<ExhibitItemProps> = ({
  exhibit,
  index,
  isThinkingMode,
  onSelectExhibit,
}) => {
  // Alternate layout: 0 (even) = visual left / text right; 1 (odd) = text left / visual right
  const isOdd = index % 2 === 1;

  const renderDiagram = () => {
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
      id={`exhibit-${exhibit.number}`}
      aria-labelledby={`heading-exhibit-${exhibit.id}`}
      style={{
        paddingTop: 'clamp(3rem, 7vw, 5.5rem)',
        paddingBottom: 'clamp(3.5rem, 8vw, 6rem)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
      }}
    >
      {/* Exhibit Sub-header bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '2rem',
        borderBottom: '1px solid var(--color-border-subtle)',
        paddingBottom: '0.65rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-mono)',
            fontWeight: 500,
            color: 'var(--color-accent)',
            letterSpacing: '0.08em',
          }}>
            EXHIBIT // {exhibit.number}
          </span>
          <span style={{ color: 'var(--color-border)' }}>/</span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-mono)',
            color: 'var(--color-ink-muted)',
            textTransform: 'uppercase',
          }}>
            {exhibit.category}
          </span>
        </div>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-mono)',
          color: 'var(--color-ink-faint)',
        }}>
          {exhibit.timeframe}
        </span>
      </div>

      {/* Main Exhibit Grid: Asymmetric Layout alternating */}
      <div 
        className={`exhibit-grid ${isOdd ? 'odd-layout' : 'even-layout'}`}
        style={{
          display: 'grid',
          gridTemplateColumns: isOdd ? '1fr 1.2fr' : '1.2fr 1fr',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'start',
        }}
      >
        {/* Visual Preview Column */}
        <div 
          className="visual-col" 
          style={{ 
            order: isOdd ? 2 : 1,
            position: 'relative',
          }}
        >
          {/* Render Vector Preview */}
          <div style={{
            boxShadow: '0 4px 20px rgba(36, 35, 31, 0.04)',
            transition: 'box-shadow var(--transition-smooth)',
          }}>
            {renderDiagram()}
          </div>
          
          <div style={{
            marginTop: '0.65rem',
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.675rem',
            color: 'var(--color-ink-muted)',
          }}>
            <span>FIGURE PREVIEW / NON-RASTER SVG</span>
            <span>VECTOR FIDELITY 1:1</span>
          </div>

          {/* Desktop Marginalia Annotation (Positioned below visual on wide screens) */}
          <div className="desktop-margin-annotation">
            <AnnotationBadge 
              annotation={exhibit.exhibitAnnotation} 
              isThinkingMode={isThinkingMode} 
              isMargin={true} 
            />
          </div>
        </div>

        {/* Content Column */}
        <div 
          className="content-col" 
          style={{ 
            order: isOdd ? 1 : 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h3 
              id={`heading-exhibit-${exhibit.id}`}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--fs-h1)',
                fontWeight: 500,
                lineHeight: 'var(--lh-tight)',
                marginBottom: '1rem',
                color: 'var(--color-ink-primary)',
              }}
            >
              {exhibit.title}
            </h3>

            <p style={{
              fontSize: 'var(--fs-body)',
              lineHeight: 'var(--lh-body)',
              color: 'var(--color-ink-secondary)',
              marginBottom: '1.75rem',
            }}>
              {exhibit.shortDescription}
            </p>

            {/* Structured Metadata Box */}
            <div style={{
              backgroundColor: 'var(--color-bg-paper)',
              border: '1px solid var(--color-border)',
              padding: '1.25rem',
              marginBottom: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {/* Contribution */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.675rem',
                  color: 'var(--color-ink-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.25rem',
                }}>
                  <UserCheck size={12} />
                  <span>Contribution</span>
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--color-ink-primary)',
                }}>
                  {exhibit.contribution}
                </div>
              </div>

              {/* Tools */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.675rem',
                  color: 'var(--color-ink-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.35rem',
                }}>
                  <Wrench size={12} />
                  <span>Tools &amp; Environment</span>
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                }}>
                  {exhibit.tools.map((tool) => (
                    <span 
                      key={tool}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.725rem',
                        backgroundColor: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: 'var(--radius-subtle)',
                        color: 'var(--color-ink-primary)',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div>
            <button
              onClick={() => onSelectExhibit(exhibit.id)}
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'space-between',
              }}
              aria-label={`View complete case study for ${exhibit.title}`}
            >
              <span>View case study</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>

          {/* Inline Annotation for Mobile Viewports */}
          <div className="mobile-inline-annotation">
            <AnnotationBadge 
              annotation={exhibit.exhibitAnnotation} 
              isThinkingMode={isThinkingMode} 
              isMargin={false} 
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .mobile-inline-annotation {
            display: none;
          }
          .desktop-margin-annotation {
            display: block;
            margin-top: 1.5rem;
          }
        }
        @media (max-width: 991px) {
          .exhibit-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .visual-col {
            order: 1 !important;
          }
          .content-col {
            order: 2 !important;
          }
          .desktop-margin-annotation {
            display: none;
          }
          .mobile-inline-annotation {
            display: block;
          }
        }
      `}</style>
    </article>
  );
};

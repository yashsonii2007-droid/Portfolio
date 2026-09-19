import React from 'react';
import { Exhibit } from '../types/portfolio';
import { ExhibitItem } from './ExhibitItem';
import { AlertCircle } from 'lucide-react';

interface ExhibitSequenceProps {
  exhibits: Exhibit[];
  isThinkingMode: boolean;
  onSelectExhibit: (id: string) => void;
  isPlaceholderData: boolean;
}

export const ExhibitSequence: React.FC<ExhibitSequenceProps> = ({
  exhibits,
  isThinkingMode,
  onSelectExhibit,
  isPlaceholderData,
}) => {
  return (
    <section 
      id="work" 
      aria-label="Selected explorations"
      style={{
        paddingTop: 'clamp(3.5rem, 7vw, 5.5rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 5.5rem)',
      }}
    >
      <div className="container">
        {/* Section Masthead */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          gap: '1.25rem',
          marginBottom: '2.5rem',
          borderBottom: '1px solid var(--color-border)',
          paddingBottom: '1.5rem',
        }}>
          <div>
            <span className="curatorial-label">EXHIBITION SEQUENCE // 01–03</span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--fs-h1)',
              color: 'var(--color-ink-primary)',
              marginTop: '0.4rem',
            }}>
              Selected explorations
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-mono)',
            color: 'var(--color-ink-muted)',
            maxWidth: '44ch',
            textAlign: 'right',
            lineHeight: 1.5,
          }} className="exhibit-header-sub">
            Three connected concept studies documenting technical architecture, interface heuristics, and honest qualitative outcomes.
          </p>
        </div>

        {/* Clear College Submission Notice */}
        {isPlaceholderData && (
          <div style={{
            backgroundColor: 'var(--color-bg-paper)',
            border: '1px solid var(--color-border)',
            borderLeft: '3px solid var(--color-accent)',
            padding: '1rem 1.25rem',
            marginBottom: '3rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.85rem',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-small)',
            color: 'var(--color-ink-secondary)',
          }}>
            <AlertCircle size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: 'var(--color-ink-primary)' }}>College Submission Note: </strong>
              The entries below are illustrative sample concepts designed to establish the editorial framework, vector schematics, and case-study depth. Replace them with your verified projects in <code style={{ backgroundColor: 'var(--color-bg)', padding: '0.15rem 0.4rem', border: '1px solid var(--color-border)' }}>src/data/portfolioData.ts</code> prior to final submission.
            </div>
          </div>
        )}

        {/* Sequence of Exhibits */}
        <div>
          {exhibits.map((exhibit, index) => (
            <ExhibitItem
              key={exhibit.id}
              exhibit={exhibit}
              index={index}
              isThinkingMode={isThinkingMode}
              onSelectExhibit={onSelectExhibit}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exhibit-header-sub {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
};

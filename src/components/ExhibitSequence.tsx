import React from 'react';
import { Exhibit } from '../types/portfolio';
import { ExhibitItem } from './ExhibitItem';
import { Info } from 'lucide-react';

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
      aria-label="Selected work exhibits"
      style={{
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
      }}
    >
      <div className="container">
        {/* Section Masthead */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          <div>
            <span className="curatorial-label">CATALOG ARCHIVE // 01–03</span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--fs-h1)',
              color: 'var(--color-ink-primary)',
              marginTop: '0.5rem',
            }}>
              Selected Work
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-mono)',
            color: 'var(--color-ink-muted)',
            maxWidth: '38ch',
            textAlign: 'right',
          }}>
            Three substantial projects documented through process, constraints, and verifiable outcomes.
          </p>
        </div>

        {/* Demo Content Callout for Student Review */}
        {isPlaceholderData && (
          <div style={{
            backgroundColor: 'var(--color-bg-paper)',
            border: '1px solid var(--color-border)',
            borderLeft: '3px solid var(--color-accent)',
            padding: '1rem 1.25rem',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.85rem',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-small)',
            color: 'var(--color-ink-secondary)',
          }}>
            <Info size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: 'var(--color-ink-primary)' }}>Sample Demonstrations: </strong>
              The entries below demonstrate editorial sequencing, vector visualizations, and honest case study narratives. Replace these with your coursework projects in <code style={{ backgroundColor: 'var(--color-bg)', padding: '0.1rem 0.35rem', border: '1px solid var(--color-border)' }}>src/data/portfolioData.ts</code> prior to final submission.
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
    </section>
  );
};

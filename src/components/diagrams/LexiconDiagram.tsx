import React from 'react';

export const LexiconDiagram: React.FC = () => {
  return (
    <div 
      style={{
        width: '100%',
        aspectRatio: '16 / 10',
        backgroundColor: 'var(--color-bg-paper)',
        border: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.5rem',
      }}
      role="img"
      aria-label="Editorial typographic specimen diagram displaying modular scale hierarchy and baseline alignment"
    >
      {/* Editorial Header bar inside diagram */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--color-border)',
        paddingBottom: '0.75rem',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-mono)',
        color: 'var(--color-ink-muted)',
      }}>
        <span>FIG. 01A / SPECIMEN HIERARCHY</span>
        <span style={{ color: 'var(--color-accent)' }}>MODULAR SCALE 1.200 (MINOR 3RD)</span>
      </div>

      {/* Center Typographic Composition */}
      <div style={{ position: 'relative', margin: 'auto 0' }}>
        {/* Metric guidelines */}
        <div style={{
          position: 'absolute',
          top: '22%',
          left: 0,
          right: 0,
          height: '1px',
          borderTop: '1px dashed var(--color-accent-border)',
          zIndex: 1,
        }}>
          <span style={{
            position: 'absolute',
            right: 0,
            top: '-14px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--color-accent)',
          }}>CAP-HEIGHT 78%</span>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '22%',
          left: 0,
          right: 0,
          height: '1px',
          borderTop: '1px solid var(--color-border-dark)',
          zIndex: 1,
        }}>
          <span style={{
            position: 'absolute',
            right: 0,
            bottom: '-14px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--color-ink-muted)',
          }}>BASELINE 0.00</span>
        </div>

        {/* Big Letterforms */}
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 'clamp(1rem, 3vw, 2.5rem)',
          position: 'relative',
          zIndex: 2,
        }}>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(4.5rem, 9vw, 7.5rem)',
            fontWeight: 600,
            color: 'var(--color-ink-primary)',
            lineHeight: 0.9,
          }}>
            Aa
          </span>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
            color: 'var(--color-accent)',
            lineHeight: 0.9,
          }}>
            &amp;
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.25rem, 2vw, 1.85rem)',
              fontWeight: 600,
              color: 'var(--color-ink-primary)',
              letterSpacing: '-0.02em',
            }}>
              Structural Clarity
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.7rem, 1vw, 0.825rem)',
              color: 'var(--color-ink-secondary)',
              letterSpacing: '0.02em',
            }}>
              cormorant garamond + manrope + ibm plex mono
            </span>
          </div>
        </div>
      </div>

      {/* Bottom measurement footer */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        borderTop: '1px solid var(--color-border)',
        paddingTop: '0.75rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        color: 'var(--color-ink-secondary)',
      }}>
        <div>
          <span style={{ color: 'var(--color-ink-muted)' }}>CONTRAST: </span>
          <strong style={{ color: 'var(--color-ink-primary)' }}>14.6:1 (AAA)</strong>
        </div>
        <div>
          <span style={{ color: 'var(--color-ink-muted)' }}>LINE LENGTH: </span>
          <strong style={{ color: 'var(--color-ink-primary)' }}>65ch OPTIMAL</strong>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ color: 'var(--color-ink-muted)' }}>GRID: </span>
          <strong style={{ color: 'var(--color-accent)' }}>8PX BASELINE</strong>
        </div>
      </div>
    </div>
  );
};

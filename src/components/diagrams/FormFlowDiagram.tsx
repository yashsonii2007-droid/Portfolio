import React from 'react';

export const FormFlowDiagram: React.FC = () => {
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
        padding: 'clamp(1rem, 2vw, 1.5rem)',
      }}
      role="img"
      aria-label="Progressive disclosure stepper and clear ergonomic interface flow for student registration concept"
    >
      {/* Curatorial Header inside schematic */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--color-border)',
        paddingBottom: '0.65rem',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-mono)',
        color: 'var(--color-ink-muted)',
      }}>
        <span>FIG. 02 / STEP PROGRESSION &amp; ERGONOMIC FLOW</span>
        <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>
          [ SAMPLE CONCEPT // UI/UX WORKFLOW ]
        </span>
      </div>

      {/* Main Flow Composition */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
        margin: 'auto 0',
      }}>
        {/* Stepper Timeline Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.5rem',
          position: 'relative',
        }}>
          {/* Step 1: Completed */}
          <div style={{
            borderTop: '2px solid var(--color-ink-primary)',
            paddingTop: '0.4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.15rem',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-ink-muted)' }}>
              STAGE 01 // COMPLETED
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.775rem', fontWeight: 600, color: 'var(--color-ink-primary)' }}>
              Degree Prereqs
            </span>
          </div>

          {/* Step 2: Active / Focus */}
          <div style={{
            borderTop: '2px solid var(--color-accent)',
            paddingTop: '0.4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.15rem',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-accent)', fontWeight: 500 }}>
              STAGE 02 // ACTIVE INQUIRY
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.775rem', fontWeight: 600, color: 'var(--color-accent)' }}>
              Major Electives (3/4)
            </span>
          </div>

          {/* Step 3: Pending */}
          <div style={{
            borderTop: '2px dashed var(--color-border)',
            paddingTop: '0.4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.15rem',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-ink-faint)' }}>
              STAGE 03 // PENDING
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.775rem', fontWeight: 500, color: 'var(--color-ink-muted)' }}>
              Final Schedule Balance
            </span>
          </div>
        </div>

        {/* Ergonomic Card Preview: Focused Input Form Specimen */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--color-border)',
          padding: '0.85rem 1.25rem',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '1.25rem',
          alignItems: 'center',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.625rem',
              color: 'var(--color-accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '0.2rem',
            }}>
              SINGLE-FOCUS DISCLOSURE
            </div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'var(--color-ink-primary)',
              lineHeight: 1.2,
              marginBottom: '0.35rem',
            }}>
              Select Advanced Machine Learning Track
            </div>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.775rem',
              color: 'var(--color-ink-secondary)',
              lineHeight: 1.45,
              margin: 0,
            }}>
              Clear prerequisite checks validate instantaneously without reloading or presenting off-path curriculum clutter.
            </p>
          </div>

          {/* Micro Selection Checklist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.4rem 0.6rem',
              backgroundColor: 'var(--color-bg-paper)',
              border: '1px solid var(--color-border)',
              borderRadius: '2px',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-ink-primary)' }}>
                CS-481 Deep Neural Systems
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-accent)', fontWeight: 600 }}>
                [SELECTED]
              </span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.4rem 0.6rem',
              backgroundColor: '#FFFFFF',
              border: '1px dashed var(--color-border)',
              borderRadius: '2px',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-ink-secondary)' }}>
                CS-488 Human-Centered AI
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-ink-muted)' }}>
                + ADD
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Curatorial Measurement Footer */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0.75rem',
        borderTop: '1px solid var(--color-border)',
        paddingTop: '0.65rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.675rem',
        color: 'var(--color-ink-secondary)',
      }}>
        <div>
          <span style={{ color: 'var(--color-ink-muted)' }}>HEURISTIC: </span>
          <strong style={{ color: 'var(--color-ink-primary)' }}>PROGRESSIVE DISCLOSURE</strong>
        </div>
        <div>
          <span style={{ color: 'var(--color-ink-muted)' }}>CONTRAST: </span>
          <strong style={{ color: 'var(--color-ink-primary)' }}>WCAG AAA (14.6:1)</strong>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ color: 'var(--color-ink-muted)' }}>STATUS: </span>
          <strong style={{ color: 'var(--color-accent)' }}>SAMPLE CONCEPT</strong>
        </div>
      </div>
    </div>
  );
};

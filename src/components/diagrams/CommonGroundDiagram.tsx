import React from 'react';

export const CommonGroundDiagram: React.FC = () => {
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
      aria-label="Modular student campus event schedule timeline and keyboard navigation matrix schematic"
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
        <span>FIG. 03 / MODULAR SCHEDULE MATRIX &amp; TIMELINE</span>
        <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>
          [ SAMPLE CONCEPT // ZERO RUNTIME BLOAT ]
        </span>
      </div>

      {/* Schedule Grid Matrix */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        margin: 'auto 0',
      }}>
        {/* Timeline Header Hour Track */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '80px repeat(3, 1fr)',
          gap: '0.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--color-ink-muted)',
          borderBottom: '1px dashed var(--color-border)',
          paddingBottom: '0.35rem',
        }}>
          <span>VENUE // TRACK</span>
          <span>10:00 — 12:00</span>
          <span>13:00 — 15:00</span>
          <span>15:30 — 17:30</span>
        </div>

        {/* Track 1: Turing Hall */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '80px repeat(3, 1fr)',
          gap: '0.5rem',
          alignItems: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-ink-secondary)' }}>
            HALL A
          </span>

          {/* Event Card 1 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--color-border)',
            padding: '0.45rem 0.6rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.15rem',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-ink-muted)' }}>
              <span>KEYNOTE</span>
              <span>10:15</span>
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.725rem', fontWeight: 600, color: 'var(--color-ink-primary)' }}>
              AI Alignment Seminar
            </div>
          </div>

          {/* Event Card 2 (Active/Focused with Rust-red Border & Keyboard Focus Tag) */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1.5px solid var(--color-accent)',
            padding: '0.45rem 0.6rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.15rem',
            boxShadow: '0 2px 8px rgba(164, 61, 45, 0.08)',
            position: 'relative',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-accent)', fontWeight: 500 }}>
              <span>[KEYBOARD FOCUS]</span>
              <span>13:30</span>
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.725rem', fontWeight: 600, color: 'var(--color-ink-primary)' }}>
              Neural Interpretability
            </div>
          </div>

          {/* Empty or Open Slot */}
          <div style={{
            backgroundColor: 'var(--color-bg)',
            border: '1px dashed var(--color-border)',
            padding: '0.45rem 0.6rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--color-ink-faint)',
          }}>
            OPEN COLLABORATION
          </div>
        </div>

        {/* Track 2: Design Lab */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '80px repeat(3, 1fr)',
          gap: '0.5rem',
          alignItems: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-ink-secondary)' }}>
            STUDIO B
          </span>

          <div style={{
            backgroundColor: 'var(--color-bg)',
            border: '1px dashed var(--color-border)',
            padding: '0.45rem 0.6rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--color-ink-faint)',
          }}>
            OPEN CRITIQUE
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--color-border)',
            padding: '0.45rem 0.6rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.15rem',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-ink-muted)' }}>
              <span>WORKSHOP</span>
              <span>14:00</span>
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.725rem', fontWeight: 600, color: 'var(--color-ink-primary)' }}>
              Fluid Typography Sprint
            </div>
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--color-border)',
            padding: '0.45rem 0.6rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.15rem',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-ink-muted)' }}>
              <span>EXHIBITION</span>
              <span>16:00</span>
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.725rem', fontWeight: 600, color: 'var(--color-ink-primary)' }}>
              Student Showcase
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
          <span style={{ color: 'var(--color-ink-muted)' }}>DOM OVERHEAD: </span>
          <strong style={{ color: 'var(--color-ink-primary)' }}>0KB (NATIVE CSS GRID)</strong>
        </div>
        <div>
          <span style={{ color: 'var(--color-ink-muted)' }}>KEYBOARD: </span>
          <strong style={{ color: 'var(--color-ink-primary)' }}>ROVING TABINDEX (2D)</strong>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ color: 'var(--color-ink-muted)' }}>STATUS: </span>
          <strong style={{ color: 'var(--color-accent)' }}>SAMPLE CONCEPT</strong>
        </div>
      </div>
    </div>
  );
};

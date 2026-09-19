import React from 'react';

export const SpecimenDiagram: React.FC = () => {
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
      aria-label="Digital archival taxonomy catalog grid with accession numbers and split-pane inspection metadata"
    >
      {/* Editorial Header bar */}
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
        <span>FIG. 03C / TAXONOMIC ARCHIVE SYSTEM</span>
        <span style={{ color: 'var(--color-accent)' }}>CATALOG ENTRIES: 1,482 // ACTIVE VIEW</span>
      </div>

      {/* Specimen Matrix */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0.75rem',
        margin: 'auto 0',
      }}>
        {/* Specimen Card 1 */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--color-border)',
          padding: '0.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--color-ink-muted)',
          }}>
            <span>#SP-0412</span>
            <span>BOTANICAL</span>
          </div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.05rem',
            fontStyle: 'italic',
            color: 'var(--color-ink-primary)',
          }}>
            Acer saccharum
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--color-ink-secondary)',
          }}>
            COLL: 1934 / DRY PRESS
          </div>
        </div>

        {/* Specimen Card 2 (Active/Selected Card with Rust Accent) */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1.5px solid var(--color-accent)',
          padding: '0.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
          boxShadow: '0 2px 8px rgba(164, 61, 45, 0.08)',
          position: 'relative',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--color-accent)',
            fontWeight: 500,
          }}>
            <span>#SP-0889 [SELECTED]</span>
            <span>MINERAL</span>
          </div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.05rem',
            fontStyle: 'italic',
            color: 'var(--color-ink-primary)',
          }}>
            Lapis lazuli
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--color-accent)',
          }}>
            INSPECTOR DOCKED RIGHT →
          </div>
        </div>

        {/* Specimen Card 3 */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--color-border)',
          padding: '0.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--color-ink-muted)',
          }}>
            <span>#SP-1094</span>
            <span>ARCHIVAL</span>
          </div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.05rem',
            fontStyle: 'italic',
            color: 'var(--color-ink-primary)',
          }}>
            Folio fragment IX
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--color-ink-secondary)',
          }}>
            LINEN RAG / IRON GALL
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
          <span style={{ color: 'var(--color-ink-muted)' }}>VIEWPORT: </span>
          <strong style={{ color: 'var(--color-ink-primary)' }}>NON-DESTRUCTIVE SPLIT</strong>
        </div>
        <div>
          <span style={{ color: 'var(--color-ink-muted)' }}>KEYBOARD: </span>
          <strong style={{ color: 'var(--color-ink-primary)' }}>TAB / ARROW MATRIX</strong>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ color: 'var(--color-ink-muted)' }}>STATE: </span>
          <strong style={{ color: 'var(--color-accent)' }}>URL-HASH SYNCED</strong>
        </div>
      </div>
    </div>
  );
};

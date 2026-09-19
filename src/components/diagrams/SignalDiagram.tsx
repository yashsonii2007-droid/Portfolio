import React from 'react';

export const SignalDiagram: React.FC = () => {
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
      aria-label="Explainable AI schematic showing prediction confidence distribution curve and feature attribution factor waterfall"
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
        <span>FIG. 01 / EXPLAINABLE INFERENCE SCHEMATIC</span>
        <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>
          [ ILLUSTRATIVE DATA // NOT VERIFIED METRICS ]
        </span>
      </div>

      {/* Main Diagram Area: Upper (Confidence Distribution) & Lower (Feature Attribution) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: 'clamp(1rem, 2vw, 2rem)',
        alignItems: 'center',
        margin: 'auto 0',
      }}>
        {/* Left: Gaussian Uncertainty & Confidence Interval Curve */}
        <div style={{ position: 'relative', width: '100%' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--color-ink-muted)',
            marginBottom: '0.35rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <span>POSTERIOR PREDICTION DISTRIBUTION</span>
            <span style={{ color: 'var(--color-ink-primary)' }}>P(y | x) = 0.84</span>
          </div>

          <svg 
            viewBox="0 0 280 120" 
            style={{ width: '100%', height: 'auto', overflow: 'visible' }}
          >
            <defs>
              <pattern id="signalGrid" width="20" height="15" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 15" fill="none" stroke="#DDD8CD" strokeWidth="0.5" strokeDasharray="1 2" />
              </pattern>
            </defs>
            <rect width="280" height="120" fill="url(#signalGrid)" opacity="0.6" />

            {/* Baseline */}
            <line x1="10" y1="105" x2="270" y2="105" stroke="#DDD8CD" strokeWidth="1" />

            {/* Confidence Interval 95% Band (Shaded area under curve) */}
            <path
              d="M 140 105 L 140 28 Q 175 22 210 52 L 210 105 Z"
              fill="rgba(164, 61, 45, 0.08)"
            />

            {/* Gaussian Curve */}
            <path
              d="M 20 105 Q 80 105 120 70 Q 150 20 175 20 Q 200 20 230 70 Q 260 105 270 105"
              fill="none"
              stroke="#24231F"
              strokeWidth="2"
            />

            {/* Mean Prediction Vertical Line */}
            <line x1="175" y1="20" x2="175" y2="105" stroke="#A43D2D" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="175" cy="20" r="3.5" fill="#A43D2D" />

            {/* Critical Threshold Line */}
            <line x1="110" y1="10" x2="110" y2="105" stroke="#78746B" strokeWidth="1" strokeDasharray="2 2" />
            <text x="115" y="18" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="#78746B">
              DECISION BOUNDARY: 0.50
            </text>

            {/* 95% Confidence Interval Annotation */}
            <line x1="140" y1="112" x2="210" y2="112" stroke="#A43D2D" strokeWidth="1" />
            <line x1="140" y1="109" x2="140" y2="115" stroke="#A43D2D" strokeWidth="1" />
            <line x1="210" y1="109" x2="210" y2="115" stroke="#A43D2D" strokeWidth="1" />
            <text x="175" y="119" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="#A43D2D" textAnchor="middle" fontWeight="500">
              95% CONFIDENCE: [0.72 – 0.91]
            </text>
          </svg>
        </div>

        {/* Right: Feature Attribution Waterfall Bars */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--color-border)',
          padding: '0.85rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--color-ink-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            borderBottom: '1px solid var(--color-border-subtle)',
            paddingBottom: '0.35rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <span>TOP INFLUENCE FACTORS</span>
            <span>SHAP Δ</span>
          </div>

          {/* Factor 1: Positive */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.675rem', marginBottom: '0.15rem' }}>
              <span style={{ color: 'var(--color-ink-primary)' }}>Semantic Context Cohesion</span>
              <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>+0.28</span>
            </div>
            <div style={{ height: '5px', width: '100%', backgroundColor: 'var(--color-border-subtle)', borderRadius: '1px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '78%', backgroundColor: 'var(--color-accent)' }} />
            </div>
          </div>

          {/* Factor 2: Positive */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.675rem', marginBottom: '0.15rem' }}>
              <span style={{ color: 'var(--color-ink-primary)' }}>Historical Pattern Match</span>
              <span style={{ color: 'var(--color-ink-primary)', fontWeight: 500 }}>+0.19</span>
            </div>
            <div style={{ height: '5px', width: '100%', backgroundColor: 'var(--color-border-subtle)', borderRadius: '1px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '54%', backgroundColor: 'var(--color-ink-primary)' }} />
            </div>
          </div>

          {/* Factor 3: Negative / Drag */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.675rem', marginBottom: '0.15rem' }}>
              <span style={{ color: 'var(--color-ink-muted)' }}>Sparse Input Density</span>
              <span style={{ color: 'var(--color-ink-muted)' }}>-0.12</span>
            </div>
            <div style={{ height: '5px', width: '100%', backgroundColor: 'var(--color-border-subtle)', borderRadius: '1px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '32%', backgroundColor: 'var(--color-ink-muted)' }} />
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
          <span style={{ color: 'var(--color-ink-muted)' }}>MODEL: </span>
          <strong style={{ color: 'var(--color-ink-primary)' }}>EXPLAINABLE CLASSIFIER</strong>
        </div>
        <div>
          <span style={{ color: 'var(--color-ink-muted)' }}>UNCERTAINTY: </span>
          <strong style={{ color: 'var(--color-ink-primary)' }}>CALIBRATED BANDS</strong>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ color: 'var(--color-ink-muted)' }}>STATUS: </span>
          <strong style={{ color: 'var(--color-accent)' }}>SAMPLE CONCEPT</strong>
        </div>
      </div>
    </div>
  );
};

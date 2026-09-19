import React from 'react';

export const KineticFieldDiagram: React.FC = () => {
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
      aria-label="Environmental audio frequency contours and topographic field sensor telemetry visualization"
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
        <span>FIG. 02B / ACOUSTIC TELEMETRY</span>
        <span style={{ color: 'var(--color-accent)' }}>SENSOR ARRAY // ACTIVE [LAT: 44.52° N]</span>
      </div>

      {/* SVG Waveform Visualization */}
      <div style={{ position: 'relative', width: '100%', height: '60%', margin: 'auto 0' }}>
        <svg 
          viewBox="0 0 500 160" 
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
          preserveAspectRatio="none"
        >
          {/* Fine ruled coordinate grid */}
          <defs>
            <pattern id="grid" width="25" height="20" patternUnits="userSpaceOnUse">
              <path d="M 25 0 L 0 0 0 20" fill="none" stroke="#DDD8CD" strokeWidth="0.5" strokeDasharray="1 3" />
            </pattern>
          </defs>
          <rect width="500" height="160" fill="url(#grid)" />

          {/* Reference baseline */}
          <line x1="0" y1="80" x2="500" y2="80" stroke="#DDD8CD" strokeWidth="1" />

          {/* Wave 1: Ambient baseline (smooth secondary wave) */}
          <path
            d="M 0 80 Q 50 40 100 80 T 200 80 T 300 80 T 400 80 T 500 80"
            fill="none"
            stroke="#78746B"
            strokeWidth="1.2"
            strokeDasharray="4 3"
            opacity="0.6"
          />

          {/* Wave 2: Microclimate contour (smooth flowing ink curve) */}
          <path
            d="M 0 110 C 60 110, 110 50, 170 65 C 230 80, 270 130, 340 115 C 410 100, 440 40, 500 50"
            fill="none"
            stroke="#24231F"
            strokeWidth="1.8"
          />

          {/* Wave 3: Acoustic Frequency Spike (Rust-red anomaly trigger) */}
          <path
            d="M 0 85 Q 90 85 140 85 Q 160 20 180 85 Q 240 85 290 85 Q 310 15 330 85 Q 390 85 500 85"
            fill="none"
            stroke="#A43D2D"
            strokeWidth="2"
          />

          {/* Anomaly Annotation Point */}
          <circle cx="160" cy="20" r="3.5" fill="#A43D2D" />
          <circle cx="160" cy="20" r="7" fill="none" stroke="#A43D2D" strokeWidth="1" opacity="0.6" />
          <line x1="160" y1="20" x2="160" y2="5" stroke="#A43D2D" strokeWidth="1" />
          <text x="165" y="10" fontFamily="'IBM Plex Mono', monospace" fontSize="8" fill="#A43D2D" fontWeight="500">
            TRANSIENT SPIKE: 142.4 Hz
          </text>

          {/* Second Sensor Point */}
          <circle cx="310" cy="15" r="3.5" fill="#24231F" />
          <line x1="310" y1="15" x2="310" y2="35" stroke="#24231F" strokeWidth="1" />
          <text x="315" y="42" fontFamily="'IBM Plex Mono', monospace" fontSize="8" fill="#24231F">
            CHIRP ECHO [0.04s]
          </text>
        </svg>
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
          <span style={{ color: 'var(--color-ink-muted)' }}>PAYLOAD: </span>
          <strong style={{ color: 'var(--color-ink-primary)' }}>12.4 KB (PURE SVG)</strong>
        </div>
        <div>
          <span style={{ color: 'var(--color-ink-muted)' }}>FRAME LATENCY: </span>
          <strong style={{ color: 'var(--color-ink-primary)' }}>&lt; 2.1ms (NATIVE)</strong>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ color: 'var(--color-ink-muted)' }}>STATUS: </span>
          <strong style={{ color: 'var(--color-accent)' }}>SYNCHRONIZED</strong>
        </div>
      </div>
    </div>
  );
};

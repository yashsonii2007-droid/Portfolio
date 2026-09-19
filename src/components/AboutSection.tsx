import React from 'react';
import { BookOpen, Sparkles, Target } from 'lucide-react';
import { ProfileData } from '../types/portfolio';
import { AnnotationBadge } from './AnnotationBadge';

interface AboutSectionProps {
  profile: ProfileData;
  isThinkingMode: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  profile,
  isThinkingMode,
}) => {
  const capabilitiesAnnotation = {
    id: "about-philosophy-note",
    category: "observation" as const,
    tag: "CAPABILITIES // NOTE",
    title: "Activities Over Arbitrary Percentages",
    note: "Notice the absence of percentage bars (e.g., 'React 90%') or floating skill bubbles. Competence is demonstrated through concrete activities, adherence to accessibility standards, and deliberate information architecture."
  };

  return (
    <section 
      id="about" 
      aria-label="About and context"
      style={{
        paddingTop: 'clamp(3.5rem, 7vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 6rem)',
        borderTop: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg-paper)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
          borderBottom: '1px solid var(--color-border)',
          paddingBottom: '1rem',
        }}>
          <div>
            <span className="curatorial-label">BIOGRAPHY &amp; CAPABILITIES</span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--fs-h1)',
              color: 'var(--color-ink-primary)',
              marginTop: '0.4rem',
            }}>
              A Little Context
            </h2>
          </div>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-mono)',
            color: 'var(--color-ink-muted)',
          }}>
            [ RESEARCH &amp; PRACTICE ]
          </span>
        </div>

        {/* 2-Column Grid: Left (Bio & Learning Interests), Right (Capabilities & Personal Note) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: 'clamp(2.5rem, 6vw, 5rem)',
          alignItems: 'start',
        }} className="about-grid">
          {/* Left Column: Extended Bio & Learning Pursuits */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--fs-h2)',
              marginBottom: '1.25rem',
              color: 'var(--color-ink-primary)',
            }}>
              Background &amp; Philosophy
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}>
              {profile.extendedBio.map((paragraph, idx) => (
                <p 
                  key={idx}
                  style={{
                    fontSize: 'var(--fs-body)',
                    lineHeight: 'var(--lh-body)',
                    color: 'var(--color-ink-secondary)',
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Current Learning Interests */}
            <div style={{
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              padding: '1.5rem',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-accent)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                fontWeight: 500,
              }}>
                <BookOpen size={15} />
                <span>Current Learning &amp; Inquiries</span>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}>
                {profile.learningInterests.map((interest, idx) => (
                  <div key={idx} style={{
                    borderLeft: '2px solid var(--color-border)',
                    paddingLeft: '1rem',
                  }}>
                    <h4 style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--color-ink-primary)',
                      marginBottom: '0.25rem',
                    }}>
                      {interest.topic}
                    </h4>
                    <p style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      lineHeight: 1.55,
                      color: 'var(--color-ink-secondary)',
                      margin: 0,
                    }}>
                      {interest.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Concrete Capabilities & Memorable Personal Detail */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.25rem',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--fs-h2)',
                color: 'var(--color-ink-primary)',
              }}>
                Core Capabilities
              </h3>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-ink-muted)',
              }}>
                VERIFIABLE ACTIVITIES
              </span>
            </div>

            {/* List of Concrete Capabilities */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}>
              {profile.capabilities.map((cap, idx) => (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <Target size={14} style={{ color: 'var(--color-accent)' }} />
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--color-ink-primary)',
                    }}>
                      {cap.title}
                    </span>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    lineHeight: 1.55,
                    color: 'var(--color-ink-secondary)',
                    margin: 0,
                    paddingLeft: '1.4rem',
                  }}>
                    {cap.activity}
                  </p>
                </div>
              ))}
            </div>

            {/* Thinking Annotation */}
            <AnnotationBadge 
              annotation={capabilitiesAnnotation} 
              isThinkingMode={isThinkingMode} 
              isMargin={false} 
            />

            {/* Memorable Personal Detail Placeholder */}
            <div style={{
              marginTop: '1.5rem',
              padding: '1.25rem',
              backgroundColor: 'var(--color-accent-tint)',
              border: '1px dashed var(--color-accent-border)',
              borderRadius: 'var(--radius-subtle)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.725rem',
                color: 'var(--color-accent)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem',
              }}>
                <Sparkles size={13} />
                <span>Beyond the Screen</span>
              </div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                color: 'var(--color-ink-primary)',
                fontStyle: 'italic',
                margin: 0,
              }}>
                {profile.memorableDetail}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

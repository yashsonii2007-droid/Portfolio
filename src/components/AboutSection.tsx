import React from 'react';
import { BookOpen, GraduationCap, Heart } from 'lucide-react';
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
  const aboutAnnotation = {
    id: "about-philosophy-note",
    category: "observation" as const,
    discipline: "web-design" as const,
    tag: "CURATORIAL // CONTEXT",
    title: "Activities Over Arbitrary Percentages",
    note: "Notice the absence of percentage bars (e.g., 'React 95%') or floating skill bubbles. Competence is framed through genuine problem-solving capabilities across Intelligence, Experience, and Implementation.",
    isExampleNote: true,
  };

  return (
    <section 
      id="about" 
      aria-label="About Yash Soni"
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
          paddingBottom: '1.25rem',
        }}>
          <div>
            <span className="curatorial-label">BIOGRAPHY &amp; CORE PHILOSOPHY</span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--fs-h1)',
              color: 'var(--color-ink-primary)',
              marginTop: '0.4rem',
            }}>
              One mind. Multiple ways to build.
            </h2>
          </div>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-mono)',
            color: 'var(--color-ink-muted)',
          }}>
            [ CONNECTED CAPABILITIES ]
          </span>
        </div>

        {/* 2-Column Grid: Left (Lead Bio, Education, Placeholders), Right (The 3 Capability Pillars) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: 'clamp(2.5rem, 6vw, 5rem)',
          alignItems: 'start',
        }} className="about-grid">
          {/* Left Column: Lead Bio & Editable Student Placeholders */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--fs-h2)',
              marginBottom: '1.25rem',
              color: 'var(--color-ink-primary)',
            }}>
              Background &amp; Direction
            </h3>

            {/* Suggested Editable Copy */}
            <p style={{
              fontSize: 'var(--fs-body)',
              lineHeight: 'var(--lh-body)',
              color: 'var(--color-ink-secondary)',
              marginBottom: '2.5rem',
            }}>
              {profile.aboutLead}
            </p>

            {/* Three Editable Placeholders: Education, What I'm Learning, Personal Interest */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}>
              {/* 1. Education Details Placeholder */}
              <div style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                padding: '1.25rem',
                position: 'relative',
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
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                }}>
                  <GraduationCap size={15} />
                  <span>Academic Background</span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  lineHeight: 1.55,
                  color: 'var(--color-ink-primary)',
                  margin: 0,
                }}>
                  {profile.educationDetails}
                </p>
              </div>

              {/* 2. What I'm Learning Now */}
              <div style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                padding: '1.25rem',
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
                  marginBottom: '1rem',
                  fontWeight: 600,
                }}>
                  <BookOpen size={15} />
                  <span>What I'm Learning Now</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {profile.learningNow.map((item, idx) => (
                    <div key={idx} style={{
                      borderLeft: '2px solid var(--color-border-dark)',
                      paddingLeft: '0.85rem',
                    }}>
                      <div style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.925rem',
                        fontWeight: 600,
                        color: 'var(--color-ink-primary)',
                        marginBottom: '0.2rem',
                      }}>
                        {item.title}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.85rem',
                        color: 'var(--color-ink-secondary)',
                        lineHeight: 1.5,
                      }}>
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Personal Interest Outside Technology */}
              <div style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                padding: '1.25rem',
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
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                }}>
                  <Heart size={15} />
                  <span>Outside Technology</span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  lineHeight: 1.55,
                  color: 'var(--color-ink-primary)',
                  margin: 0,
                }}>
                  {profile.personalInterest}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Connected Capabilities in 3 Areas */}
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '1.25rem',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--fs-h2)',
                color: 'var(--color-ink-primary)',
              }}>
                Three Connected Disciplines
              </h3>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-accent)',
                letterSpacing: '0.05em',
              }}>
                [ METHODOLOGY ]
              </span>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}>
              {profile.capabilityPillars.map((pillar) => (
                <div 
                  key={pillar.pillar}
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    padding: '1.5rem',
                    transition: 'border-color var(--transition-fast)',
                  }}
                >
                  {/* Pillar Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}>
                      <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-accent)',
                      }} />
                      <h4 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.35rem',
                        fontWeight: 600,
                        color: 'var(--color-ink-primary)',
                      }}>
                        {pillar.pillar}
                      </h4>
                    </div>

                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.675rem',
                      color: 'var(--color-accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      {pillar.disciplines}
                    </span>
                  </div>

                  <p style={{
                    fontSize: '0.925rem',
                    lineHeight: 1.55,
                    color: 'var(--color-ink-secondary)',
                    marginBottom: '1rem',
                  }}>
                    {pillar.description}
                  </p>

                  {/* Concrete Practice Areas */}
                  <div style={{
                    borderTop: '1px dashed var(--color-border)',
                    paddingTop: '0.75rem',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--color-ink-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.5rem',
                    }}>
                      Key Focus Areas
                    </div>
                    <ul style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      color: 'var(--color-ink-primary)',
                    }}>
                      {pillar.focusAreas.map((area, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>→</span>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Annotation for capabilities in thinking mode */}
            <AnnotationBadge
              annotation={aboutAnnotation}
              isThinkingMode={isThinkingMode}
              isMargin={false}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

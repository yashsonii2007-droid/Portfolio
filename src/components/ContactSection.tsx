import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Github, Linkedin, FileText, AlertCircle } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  // Validate presence of configured links (not empty and not a placeholder string)
  const isValidEmail = Boolean(profile.email && profile.email.trim() !== '' && !profile.email.includes('['));
  const isValidGithub = Boolean(profile.github && profile.github.trim() !== '' && !profile.github.includes('['));
  const isValidLinkedin = Boolean(profile.linkedin && profile.linkedin.trim() !== '' && !profile.linkedin.includes('['));
  const isValidResume = Boolean(profile.resumeUrl && profile.resumeUrl.trim() !== '' && !profile.resumeUrl.includes('['));

  const anyConfigured = isValidEmail || isValidGithub || isValidLinkedin || isValidResume;

  const handleCopyEmail = async () => {
    if (!isValidEmail) return;

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setCopyError(false);
        setTimeout(() => setCopied(false), 2400);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = profile.email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2400);
        } else {
          setCopyError(true);
        }
      }
    } catch {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  return (
    <section 
      id="contact" 
      aria-label="Contact and connect"
      style={{
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        borderTop: '1px solid var(--color-border)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Curatorial Subtitle */}
        <div style={{
          marginBottom: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-mono)',
          color: 'var(--color-accent)',
          letterSpacing: '0.08em',
        }}>
          COMMUNICATION // 03
        </div>

        {/* Closing Headline */}
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--fs-display)',
          lineHeight: 'var(--lh-tight)',
          fontWeight: 500,
          color: 'var(--color-ink-primary)',
          marginBottom: '1.25rem',
          maxWidth: '22ch',
        }}>
          Let’s make something thoughtful.
        </h2>

        {/* Supporting Copy */}
        <p style={{
          fontSize: 'clamp(1.05rem, 1.25vw, 1.25rem)',
          lineHeight: 'var(--lh-body)',
          color: 'var(--color-ink-secondary)',
          maxWidth: '56ch',
          marginBottom: '2.5rem',
        }}>
          Interested in AI, design, data, or building something useful? Let’s connect.
        </p>

        {/* Contact Channels Card */}
        <div style={{
          backgroundColor: 'var(--color-bg-paper)',
          border: '1px solid var(--color-border)',
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.75rem',
          maxWidth: '720px',
        }}>
          {/* Email Row: Mailto link + Copy Email button (Only active when valid email is supplied) */}
          {isValidEmail ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: '1.5rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--color-accent-tint)',
                  border: '1px solid var(--color-accent-border)',
                  color: 'var(--color-accent)',
                  borderRadius: 'var(--radius-subtle)',
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.675rem',
                    color: 'var(--color-ink-muted)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}>
                    Direct Inquiries
                  </div>
                  <a 
                    href={`mailto:${profile.email}`}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--color-ink-primary)',
                      textDecoration: 'none',
                    }}
                    className="editorial-link"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              {/* Accessible Copy Action Button */}
              <button
                onClick={handleCopyEmail}
                className="btn-secondary"
                style={{
                  fontSize: '0.8rem',
                  padding: '0.55rem 0.95rem',
                  minHeight: '44px',
                }}
                aria-label={copied ? "Email address copied to clipboard" : "Copy email address to clipboard"}
              >
                {copied ? (
                  <>
                    <Check size={14} style={{ color: 'var(--color-accent)' }} />
                    <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Copied to clipboard</span>
                  </>
                ) : copyError ? (
                  <span>Could not copy</span>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.85rem',
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: '1.25rem',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-small)',
              color: 'var(--color-ink-muted)',
            }}>
              <AlertCircle size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: 'var(--color-ink-primary)' }}>Email Configuration: </strong>
                To enable direct messaging and the one-click clipboard copy action, enter your verified email address in <code style={{ backgroundColor: 'var(--color-bg)', padding: '0.1rem 0.35rem', border: '1px solid var(--color-border)' }}>src/data/portfolioData.ts</code>.
              </div>
            </div>
          )}

          {/* Social & Professional Links (Only active when valid values are provided) */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
          }}>
            {isValidGithub && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ minHeight: '44px' }}
              >
                <Github size={16} />
                <span>GitHub Profile</span>
                <ExternalLink size={13} style={{ opacity: 0.6 }} />
              </a>
            )}

            {isValidLinkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ minHeight: '44px' }}
              >
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
                <ExternalLink size={13} style={{ opacity: 0.6 }} />
              </a>
            )}

            {isValidResume && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ minHeight: '44px' }}
              >
                <FileText size={16} />
                <span>Curriculum Vitae</span>
                <ExternalLink size={13} style={{ opacity: 0.6 }} />
              </a>
            )}

            {!anyConfigured && (
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.775rem',
                color: 'var(--color-ink-muted)',
                lineHeight: 1.5,
              }}>
                [ Social and résumé links will automatically render here once configured with valid URLs in <code>portfolioData.ts</code>. No broken or fake links are generated by default. ]
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

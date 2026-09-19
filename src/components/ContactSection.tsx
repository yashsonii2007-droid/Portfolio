import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Github, Linkedin } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  // Check if email is still placeholder
  const isPlaceholderEmail = profile.email.includes('[YOUR EMAIL]');
  const isPlaceholderGithub = profile.github.includes('[YOUR GITHUB');
  const isPlaceholderLinkedin = profile.linkedin.includes('[YOUR LINKEDIN');

  const handleCopyEmail = async () => {
    if (isPlaceholderEmail) {
      alert('Please configure your real email address in src/data/portfolioData.ts first.');
      return;
    }

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setCopyError(false);
        setTimeout(() => setCopied(false), 2500);
      } else {
        // Fallback for non-secure or unsupported environments
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
          setTimeout(() => setCopied(false), 2500);
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
      aria-label="Contact and collaboration"
      style={{
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        borderTop: '1px solid var(--color-border)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Editorial Subtitle */}
        <div style={{
          marginBottom: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-mono)',
          color: 'var(--color-accent)',
          letterSpacing: '0.08em',
        }}>
          COMMUNICATION // 03
        </div>

        {/* Big Editorial Headline */}
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--fs-display)',
          lineHeight: 'var(--lh-tight)',
          fontWeight: 500,
          color: 'var(--color-ink-primary)',
          marginBottom: '1.5rem',
          maxWidth: '22ch',
        }}>
          Have something worth making?
        </h2>

        <p style={{
          fontSize: 'clamp(1.05rem, 1.25vw, 1.25rem)',
          lineHeight: 'var(--lh-body)',
          color: 'var(--color-ink-secondary)',
          maxWidth: '52ch',
          marginBottom: '2.5rem',
        }}>
          I am currently open to collaborative design projects, internship opportunities, and thoughtful dialogue around digital typography, systems, and craft.
        </p>

        {/* Contact Actions Area */}
        <div style={{
          backgroundColor: 'var(--color-bg-paper)',
          border: '1px solid var(--color-border)',
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.75rem',
          maxWidth: '720px',
        }}>
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
                  Direct Electronic Mail
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
                  fontWeight: 600,
                  color: 'var(--color-ink-primary)',
                }}>
                  {profile.email}
                </div>
              </div>
            </div>

            {/* Email Actions */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              {!isPlaceholderEmail && (
                <a
                  href={`mailto:${profile.email}`}
                  className="btn-secondary"
                  style={{ minHeight: '40px', padding: '0.5rem 1rem' }}
                >
                  <span>Open Mail</span>
                  <ExternalLink size={14} />
                </a>
              )}

              <button
                onClick={handleCopyEmail}
                className="btn-primary"
                style={{
                  minHeight: '40px',
                  padding: '0.5rem 1.15rem',
                  backgroundColor: copied ? '#2A6F41' : undefined,
                  borderColor: copied ? '#2A6F41' : undefined,
                }}
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={15} aria-hidden="true" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} aria-hidden="true" />
                    <span>Copy email</span>
                  </>
                )}
              </button>

              {/* Accessible Live Region for Screen Readers */}
              <span 
                role="status" 
                aria-live="polite" 
                style={{
                  position: 'absolute',
                  width: '1px',
                  height: '1px',
                  padding: 0,
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0, 0, 0, 0)',
                  border: 0,
                }}
              >
                {copied && 'Email address copied to clipboard successfully.'}
                {copyError && 'Failed to copy email automatically.'}
              </span>
            </div>
          </div>

          {/* Social Profiles & Profiles */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.725rem',
              color: 'var(--color-ink-muted)',
              textTransform: 'uppercase',
            }}>
              Connect &amp; Verification:
            </div>

            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              {isPlaceholderGithub ? (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-ink-muted)' }}>
                  GitHub: [Set in portfolioData.ts]
                </span>
              ) : (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.825rem' }}
                >
                  <Github size={14} />
                  <span>GitHub Profile</span>
                </a>
              )}

              {isPlaceholderLinkedin ? (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-ink-muted)' }}>
                  LinkedIn: [Set in portfolioData.ts]
                </span>
              ) : (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.825rem' }}
                >
                  <Linkedin size={14} />
                  <span>LinkedIn Profile</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

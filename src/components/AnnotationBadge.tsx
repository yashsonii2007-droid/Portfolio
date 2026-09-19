import React from 'react';
import { Annotation } from '../types/portfolio';
import { Compass } from 'lucide-react';

interface AnnotationBadgeProps {
  annotation: Annotation;
  isThinkingMode: boolean;
  isMargin?: boolean;
}

export const AnnotationBadge: React.FC<AnnotationBadgeProps> = ({
  annotation,
  isThinkingMode,
  isMargin = false,
}) => {
  if (!isThinkingMode) return null;

  return (
    <aside 
      className={`annotation-panel ${isMargin ? 'margin-annotation' : ''}`}
      aria-label={`Process note: ${annotation.title}`}
      style={{
        marginTop: isMargin ? '0' : '1.25rem',
        animation: 'fadeInNote 240ms ease-out',
      }}
    >
      <div className="annotation-header">
        <span className="annotation-tag">
          {annotation.tag}
        </span>
        <span style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '0.25rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.625rem',
          color: 'var(--color-ink-muted)',
          backgroundColor: 'rgba(36, 35, 31, 0.04)',
          padding: '0.1rem 0.35rem',
          borderRadius: 'var(--radius-subtle)',
          letterSpacing: '0.04em',
        }}>
          <Compass size={10} aria-hidden="true" />
          {annotation.isExampleNote ? 'EXAMPLE PROCESS NOTE' : 'PROCESS NOTE'}
        </span>
      </div>
      <h4 className="annotation-title">
        {annotation.title}
      </h4>
      <p className="annotation-text">
        {annotation.note}
      </p>

      <style>{`
        @keyframes fadeInNote {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </aside>
  );
};

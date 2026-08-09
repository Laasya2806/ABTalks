import React from 'react';
import { Check, Flame, Star, Sparkles, Clock, Target } from 'lucide-react';
import './CoreStretchCard.css';

export default function CoreStretchCard({ selectedMode, onSelectMode, coreOption, stretchOption }) {
  return (
    <div className="core-stretch-container">
      <div className="section-title-group">
        <h3 className="section-title">Choose Your Challenge</h3>
        <p className="section-subtitle">
          Build consistency with Core or push your boundaries with Stretch. Both count towards your streak!
        </p>
      </div>

      <div className="options-grid">
        {/* CORE OPTION CARD */}
        <div
          className={`option-card option-core ${selectedMode === 'core' ? 'is-selected' : ''}`}
          onClick={() => onSelectMode('core')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSelectMode('core')}
        >
          <div className="option-badge-row">
            <span className="badge badge-core">● CORE</span>
            <span className="option-radio">
              {selectedMode === 'core' && <Check size={14} strokeWidth={3} />}
            </span>
          </div>

          <h4 className="option-title">{coreOption.title}</h4>
          <p className="option-subtitle-text">{coreOption.subtitle}</p>

          <p className="option-desc">{coreOption.description}</p>

          <div className="option-footer">
            <div className="footer-metric">
              <Clock size={13} />
              <span>{coreOption.timeEstimate}</span>
            </div>
            <div className="footer-reward core-reward">
              {coreOption.points}
            </div>
          </div>
        </div>

        {/* STRETCH OPTION CARD */}
        <div
          className={`option-card option-stretch ${selectedMode === 'stretch' ? 'is-selected' : ''}`}
          onClick={() => onSelectMode('stretch')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSelectMode('stretch')}
        >
          <div className="stretch-glow-tag">RECOMMENDED GROWTH</div>
          <div className="option-badge-row">
            <span className="badge badge-stretch">★ STRETCH</span>
            <span className="option-radio">
              {selectedMode === 'stretch' && <Check size={14} strokeWidth={3} />}
            </span>
          </div>

          <h4 className="option-title">{stretchOption.title}</h4>
          <p className="option-subtitle-text">{stretchOption.subtitle}</p>

          <p className="option-desc">{stretchOption.description}</p>

          <div className="option-footer">
            <div className="footer-metric">
              <Clock size={13} />
              <span>{stretchOption.timeEstimate}</span>
            </div>
            <div className="footer-reward stretch-reward">
              {stretchOption.points}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

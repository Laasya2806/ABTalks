import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock, Code2, Sparkles, Flame } from 'lucide-react';
import './MissionCard.css';

export default function MissionCard({ challenge, isCompleted, completedMode }) {
  return (
    <div className={`mission-card ${isCompleted ? 'is-completed' : ''}`}>
      <div className="mission-header">
        <div className="mission-track">
          <Code2 size={16} className="track-icon" />
          <span>{challenge.track}</span>
        </div>
        <div className="mission-meta">
          <span className="meta-item">
            <Clock size={14} />
            {challenge.estimatedTime}
          </span>
          <span className="meta-pill">{challenge.difficulty}</span>
        </div>
      </div>

      <div className="mission-body">
        <h2 className="mission-title">{challenge.title}</h2>
        <p className="mission-desc">{challenge.description}</p>
      </div>

      <div className="mission-footer">
        {isCompleted ? (
          <div className="completed-state-badge">
            <CheckCircle2 size={18} color="#10B981" />
            <span>
              Completed as <strong>{completedMode === 'stretch' ? '★ Stretch' : '● Core'}</strong>
            </span>
            <Link to={`/day/${challenge.id}?track=${challenge.trackId || 'web'}`} className="btn btn-secondary btn-sm">
              View Submission
            </Link>
          </div>
        ) : (
          <Link to={`/day/${challenge.id}?track=${challenge.trackId || 'web'}`} className="btn btn-primary mission-cta">
            <span>Continue Day {challenge.id}</span>
            <ArrowRight size={18} />
          </Link>
        )}
      </div>
    </div>
  );
}

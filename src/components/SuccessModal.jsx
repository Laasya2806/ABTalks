import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Flame, Star, ArrowRight } from 'lucide-react';
import './SuccessModal.css';

export default function SuccessModal({ trackKey, mode, streak, stretchCount, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Reset page scroll position to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Prevent background scrolling while modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleReturnToDashboard = () => {
    onClose();
    navigate(`/dashboard?track=${trackKey || 'web'}`);
  };

  const modalJSX = (
    <div className="modal-overlay">
      <div className="modal-content animate-fade-in">
        <div className="modal-icon-wrapper">
          <CheckCircle2 size={42} color="#10B981" />
        </div>

        <h3 className="modal-title">Day 12 Submitted! 🎉</h3>
        <p className="modal-subtitle">
          Your proof of work has been recorded. Awesome job showing up today!
        </p>

        <div className="mode-summary-card">
          <span className={`badge ${mode === 'stretch' ? 'badge-stretch' : 'badge-core'}`}>
            {mode === 'stretch' ? '★ STRETCH COMPLETED' : '● CORE COMPLETED'}
          </span>
          <p className="mode-desc-text">
            {mode === 'stretch'
              ? 'You pushed yourself beyond the basics today! Your growth star has been recorded.'
              : 'Consistent progress adds up. Another brick laid in your 60-day foundation!'}
          </p>
        </div>

        <div className="modal-stats-grid">
          <div className="stat-box">
            <div className="stat-icon orange">
              <Flame size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-val">{streak} Days</span>
              <span className="stat-lbl">Consistency Streak</span>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon amber">
              <Star size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-val">{stretchCount} Stretch</span>
              <span className="stat-lbl">Growth Breakthroughs</span>
            </div>
          </div>
        </div>

        <button onClick={handleReturnToDashboard} className="btn btn-primary modal-action-btn">
          <span>Return to Dashboard</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalJSX, document.body);
}
